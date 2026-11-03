"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

// Fondo decorativo del hero: puntos que derivan despacio y que, cerca del
// cursor, se unen con líneas que se apagan poco a poco. Canvas 2D sin
// dependencias; ocupa todo su contenedor (el elemento padre).
//
// - El número de puntos es fijo para cada tamaño: no se crean en cada cuadro.
// - Las conexiones solo se buscan entre puntos activos (cerca del cursor) y
//   en las celdas vecinas de una rejilla, sin comparar todos los pares.
// - Detrás del elemento marcado con `data-constellation-quiet` la red se
//   atenúa para que el texto se lea bien.
// - Sin puntero fino (táctil) hay menos puntos y no hay interacción.
// - Con movimiento reducido se dibuja un único cuadro estático.

const settings = {
  areaPerDot: 2600, // px² por punto en escritorio
  areaPerDotCompact: 5200, // en móvil o sin puntero fino
  maxDots: 420,
  maxDotsCompact: 110,
  speed: [3, 10], // px por segundo
  radius: [0.5, 1.5],
  opacity: [0.3, 0.75],
  linkDistance: 105, // distancia máxima entre dos puntos unidos
  pointerLinkDistance: 130, // distancia máxima entre el cursor y un punto
  cursorRadius: 230, // zona alrededor del cursor que activa los puntos
  fade: 1.1, // cuánta energía pierde un punto por segundo al alejarse el cursor
  pointerEase: 9, // suavizado del seguimiento del cursor
  quietOpacity: 0.3, // opacidad relativa de la red detrás del texto
  quietFeather: 90, // transición en px alrededor de esa zona
  limeShare: 0.18, // proporción de puntos lima
  maxDpr: 2,
};

const CYAN = "rgb(56, 225, 240)";
const LIME = "rgb(182, 228, 92)";
const TAU = Math.PI * 2;
const MIN_ENERGY = 0.02;

const between = ([min, max]: number[]) => min + Math.random() * (max - min);
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const animate = !reduceMotion;
    const { linkDistance: L, cursorRadius: R, pointerLinkDistance: P } = settings;

    let width = 0;
    let height = 0;

    // Estado de los puntos en arreglos de tamaño fijo.
    let n = 0;
    let x = new Float32Array(0);
    let y = new Float32Array(0);
    let vx = new Float32Array(0);
    let vy = new Float32Array(0);
    let radius = new Float32Array(0);
    let opacity = new Float32Array(0);
    let energy = new Float32Array(0);
    let quietness = new Float32Array(0);
    let isLime = new Uint8Array(0);
    let cellOf = new Int32Array(0);

    // Rejilla espacial (celdas del tamaño de linkDistance), por conteo.
    let cols = 1;
    let rows = 1;
    let cellStart = new Int32Array(2);
    let cellFill = new Int32Array(1);
    let cellItems = new Int32Array(0);

    const quiet = { active: false, left: 0, top: 0, right: 0, bottom: 0 };
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0, inside: false, influence: 0 };
    let anyActive = false;
    let frame = 0;
    let last = 0;
    let visible = true;

    function seed(count: number) {
      n = count;
      x = new Float32Array(n);
      y = new Float32Array(n);
      vx = new Float32Array(n);
      vy = new Float32Array(n);
      radius = new Float32Array(n);
      opacity = new Float32Array(n);
      energy = new Float32Array(n);
      quietness = new Float32Array(n);
      isLime = new Uint8Array(n);
      cellOf = new Int32Array(n);
      cellItems = new Int32Array(n);

      // Rejilla con desplazamiento aleatorio: reparte los puntos sin grumos.
      const gc = Math.max(1, Math.round(Math.sqrt((n * width) / height)));
      const gr = Math.max(1, Math.ceil(n / gc));
      const cells = gc * gr;
      for (let i = 0; i < n; i++) {
        const cell = Math.floor((i * cells) / n);
        x[i] = ((cell % gc) + Math.random()) * (width / gc);
        y[i] = (Math.floor(cell / gc) + Math.random()) * (height / gr);
        const angle = Math.random() * TAU;
        const speed = between(settings.speed);
        vx[i] = Math.cos(angle) * speed;
        vy[i] = Math.sin(angle) * speed;
        radius[i] = between(settings.radius);
        opacity[i] = between(settings.opacity);
        isLime[i] = Math.random() < settings.limeShare ? 1 : 0;
      }
    }

    function measureQuiet() {
      const el = host!.querySelector<HTMLElement>("[data-constellation-quiet]");
      quiet.active = Boolean(el);
      if (!el) return;
      const a = el.getBoundingClientRect();
      const b = host!.getBoundingClientRect();
      quiet.left = a.left - b.left;
      quiet.top = a.top - b.top;
      quiet.right = a.right - b.left;
      quiet.bottom = a.bottom - b.top;
    }

    // 1 lejos del texto; quietOpacity dentro de su caja, con transición suave.
    function quietFactor(px: number, py: number) {
      if (!quiet.active) return 1;
      const dx = Math.max(quiet.left - px, 0, px - quiet.right);
      const dy = Math.max(quiet.top - py, 0, py - quiet.bottom);
      const t = Math.min(1, Math.hypot(dx, dy) / settings.quietFeather);
      return settings.quietOpacity + (1 - settings.quietOpacity) * t;
    }

    function resize() {
      const w = host!.clientWidth;
      const h = host!.clientHeight;
      if (!w || !h) return;

      const dpr = Math.min(window.devicePixelRatio || 1, settings.maxDpr);
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const compact = w < 768 || !finePointer.matches;
      const count = Math.min(
        compact ? settings.maxDotsCompact : settings.maxDots,
        Math.round((w * h) / (compact ? settings.areaPerDotCompact : settings.areaPerDot)),
      );

      if (count !== n || !width) {
        width = w;
        height = h;
        seed(count);
      } else {
        // Mismo número de puntos: se reescalan sus posiciones.
        const sx = w / width;
        const sy = h / height;
        for (let i = 0; i < n; i++) {
          x[i] *= sx;
          y[i] *= sy;
        }
        width = w;
        height = h;
      }

      cols = Math.max(1, Math.ceil(width / L));
      rows = Math.max(1, Math.ceil(height / L));
      cellStart = new Int32Array(cols * rows + 1);
      cellFill = new Int32Array(cols * rows);
      measureQuiet();

      if (!animate) {
        step(0);
        draw();
      }
    }

    function step(dt: number) {
      const follow = 1 - Math.exp(-settings.pointerEase * dt);
      pointer.x += (pointer.targetX - pointer.x) * follow;
      pointer.y += (pointer.targetY - pointer.y) * follow;
      pointer.influence += ((pointer.inside ? 1 : 0) - pointer.influence) * (1 - Math.exp(-4 * dt));

      const margin = 12;
      const decay = settings.fade * dt;
      const reach = pointer.influence > 0.001;
      anyActive = false;

      for (let i = 0; i < n; i++) {
        let px = x[i] + vx[i] * dt;
        let py = y[i] + vy[i] * dt;
        // Al salir por un borde reaparecen por el contrario.
        if (px < -margin) px += width + margin * 2;
        else if (px > width + margin) px -= width + margin * 2;
        if (py < -margin) py += height + margin * 2;
        else if (py > height + margin) py -= height + margin * 2;
        x[i] = px;
        y[i] = py;
        quietness[i] = quietFactor(px, py);

        // La energía sube al instante cerca del cursor y baja despacio.
        let target = 0;
        if (reach) {
          const dx = px - pointer.x;
          const dy = py - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < R * R) {
            const t = 1 - Math.sqrt(d2) / R;
            target = t * t * (3 - 2 * t) * pointer.influence;
          }
        }
        const e = Math.max(target, energy[i] - decay);
        energy[i] = e > 0 ? e : 0;
        if (e > MIN_ENERGY) anyActive = true;
      }
    }

    function cellIndex(px: number, py: number) {
      const cx = clamp(Math.floor(px / L), 0, cols - 1);
      const cy = clamp(Math.floor(py / L), 0, rows - 1);
      return cy * cols + cx;
    }

    // Ordena los puntos por celda (conteo + suma acumulada), sin crear arreglos.
    function bucket() {
      cellStart.fill(0);
      cellFill.fill(0);
      for (let i = 0; i < n; i++) {
        const c = cellIndex(x[i], y[i]);
        cellOf[i] = c;
        cellStart[c + 1]++;
      }
      for (let c = 1; c < cellStart.length; c++) cellStart[c] += cellStart[c - 1];
      for (let i = 0; i < n; i++) {
        const c = cellOf[i];
        cellItems[cellStart[c] + cellFill[c]++] = i;
      }
    }

    function drawLinks() {
      ctx!.strokeStyle = CYAN;
      ctx!.lineWidth = 0.7;
      for (let i = 0; i < n; i++) {
        const ei = energy[i];
        if (ei < MIN_ENERGY) continue;
        const c = cellOf[i];
        const cx = c % cols;
        const cy = (c - cx) / cols;
        for (let gy = Math.max(0, cy - 1); gy <= Math.min(rows - 1, cy + 1); gy++) {
          for (let gx = Math.max(0, cx - 1); gx <= Math.min(cols - 1, cx + 1); gx++) {
            const g = gy * cols + gx;
            for (let k = cellStart[g]; k < cellStart[g + 1]; k++) {
              const j = cellItems[k];
              if (j <= i || energy[j] < MIN_ENERGY) continue;
              const dx = x[i] - x[j];
              const dy = y[i] - y[j];
              const d2 = dx * dx + dy * dy;
              if (d2 > L * L) continue;
              const alpha =
                (1 - Math.sqrt(d2) / L) * Math.min(ei, energy[j]) * Math.min(quietness[i], quietness[j]) * 0.8;
              if (alpha < 0.01) continue;
              ctx!.globalAlpha = alpha;
              ctx!.beginPath();
              ctx!.moveTo(x[i], y[i]);
              ctx!.lineTo(x[j], y[j]);
              ctx!.stroke();
            }
          }
        }
      }
    }

    // El cursor actúa como un nodo más: se une a los puntos más cercanos.
    function drawPointer() {
      const influence = pointer.influence;
      if (influence < 0.01) return;
      const q = quietFactor(pointer.x, pointer.y);

      const glow = ctx!.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, R);
      glow.addColorStop(0, `rgba(56, 225, 240, ${0.08 * influence * q})`);
      glow.addColorStop(1, "rgba(56, 225, 240, 0)");
      ctx!.globalAlpha = 1;
      ctx!.fillStyle = glow;
      ctx!.fillRect(pointer.x - R, pointer.y - R, R * 2, R * 2);

      ctx!.strokeStyle = CYAN;
      ctx!.lineWidth = 0.8;
      const x0 = clamp(Math.floor((pointer.x - P) / L), 0, cols - 1);
      const x1 = clamp(Math.floor((pointer.x + P) / L), 0, cols - 1);
      const y0 = clamp(Math.floor((pointer.y - P) / L), 0, rows - 1);
      const y1 = clamp(Math.floor((pointer.y + P) / L), 0, rows - 1);
      for (let gy = y0; gy <= y1; gy++) {
        for (let gx = x0; gx <= x1; gx++) {
          const g = gy * cols + gx;
          for (let k = cellStart[g]; k < cellStart[g + 1]; k++) {
            const j = cellItems[k];
            const dx = x[j] - pointer.x;
            const dy = y[j] - pointer.y;
            const d2 = dx * dx + dy * dy;
            if (d2 > P * P) continue;
            ctx!.globalAlpha = (1 - Math.sqrt(d2) / P) * influence * q * 0.9;
            ctx!.beginPath();
            ctx!.moveTo(pointer.x, pointer.y);
            ctx!.lineTo(x[j], y[j]);
            ctx!.stroke();
          }
        }
      }

      ctx!.globalAlpha = influence * q;
      ctx!.fillStyle = CYAN;
      ctx!.beginPath();
      ctx!.arc(pointer.x, pointer.y, 2.2, 0, TAU);
      ctx!.fill();
    }

    function drawDots() {
      for (let pass = 0; pass < 2; pass++) {
        ctx!.fillStyle = pass ? LIME : CYAN;
        for (let i = 0; i < n; i++) {
          if (isLime[i] !== pass) continue;
          const e = energy[i];
          ctx!.globalAlpha = Math.min(1, (opacity[i] + e * 0.6) * quietness[i]);
          ctx!.beginPath();
          ctx!.arc(x[i], y[i], radius[i] * (1 + e * 0.8), 0, TAU);
          ctx!.fill();
        }
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      if (anyActive || pointer.influence > 0.01) {
        bucket();
        drawLinks();
        drawPointer();
      }
      drawDots();
      ctx!.globalAlpha = 1;
    }

    function tick(now: number) {
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      step(dt);
      draw();
      frame = requestAnimationFrame(tick);
    }

    function start() {
      if (frame || !animate || !visible || document.hidden || !n) return;
      last = 0;
      frame = requestAnimationFrame(tick);
    }

    function stop() {
      cancelAnimationFrame(frame);
      frame = 0;
    }

    function onPointerMove(event: PointerEvent) {
      if (!animate || event.pointerType === "touch" || !finePointer.matches) return;
      const b = host!.getBoundingClientRect();
      pointer.targetX = event.clientX - b.left;
      pointer.targetY = event.clientY - b.top;
      // Al entrar, el nodo aparece donde está el cursor en lugar de recorrer el hero.
      if (!pointer.inside && pointer.influence < 0.05) {
        pointer.x = pointer.targetX;
        pointer.y = pointer.targetY;
      }
      pointer.inside = true;
    }

    function onPointerLeave() {
      pointer.inside = false;
    }

    function onVisibility() {
      if (document.hidden) stop();
      else start();
    }

    function onPointerTypeChange() {
      pointer.inside = false;
      resize();
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      start();
    });
    resizeObserver.observe(host);
    const quietEl = host.querySelector("[data-constellation-quiet]");
    if (quietEl) resizeObserver.observe(quietEl);

    // Solo se anima mientras el hero está en pantalla.
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    intersectionObserver.observe(host);

    host.addEventListener("pointermove", onPointerMove);
    host.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    finePointer.addEventListener("change", onPointerTypeChange);

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      finePointer.removeEventListener("change", onPointerTypeChange);
    };
  }, [reduceMotion]);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}
