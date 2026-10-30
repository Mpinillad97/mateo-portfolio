"use client";

import {
  AnimatePresence,
  type MotionValue,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { useEffect, useState } from "react";
import { type ShowcaseView, showcase } from "@/data/showcase";
import { ShowcaseFace } from "./ShowcaseFace";
import { AiDemo } from "./views/AiDemo";
import { FlowDemo } from "./views/FlowDemo";
import { PipelineDemo } from "./views/PipelineDemo";
import { WebDemo } from "./views/WebDemo";

const ease = [0.22, 1, 0.36, 1] as const;
const views = showcase.views;
const { controls } = showcase;

function ViewContent({ view }: { view: ShowcaseView }) {
  switch (view.kind) {
    case "web":
      return <WebDemo view={view} />;
    case "flow":
      return <FlowDemo view={view} />;
    case "ai":
      return <AiDemo view={view} />;
    case "pipeline":
      return <PipelineDemo view={view} />;
  }
}

// Giro 3D hacia el lado del recorrido. Con movimiento reducido, solo fundido.
const faceVariants = {
  enter: ({ dir, reduce }: { dir: number; reduce: boolean }) =>
    reduce ? { opacity: 0 } : { rotateY: 90 * dir, opacity: 0.6 },
  center: { rotateY: 0, opacity: 1 },
  exit: ({ dir, reduce }: { dir: number; reduce: boolean }) =>
    reduce ? { opacity: 0 } : { rotateY: -90 * dir, opacity: 0.6 },
};

const pad = (n: number) => String(n).padStart(2, "0");

const buttonClass =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-carbon/25 bg-mist-light text-carbon transition-colors hover:bg-mist-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-deep sm:h-9 sm:w-9";

function Icon({ name }: { name: "prev" | "next" | "pause" | "play" }) {
  const paths = {
    prev: <path d="M10 3 5 8l5 5" />,
    next: <path d="m6 3 5 5-5 5" />,
    pause: <path d="M5.5 3.5v9M10.5 3.5v9" />,
    play: <path d="M5 3.2v9.6L12.5 8z" fill="currentColor" />,
  };
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      width={16}
      height={16}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

type IndicatorProps = {
  view: ShowcaseView;
  state: "done" | "active" | "upcoming";
  progress: MotionValue<number>;
  animated: boolean;
  onSelect: () => void;
};

// Indicador de progreso que también sirve para ir a su vista.
function Indicator({ view, state, progress, animated, onSelect }: IndicatorProps) {
  return (
    <li className="flex-1">
      <button
        type="button"
        aria-label={`${controls.goTo}: ${view.area}`}
        aria-current={state === "active" ? "true" : undefined}
        onClick={onSelect}
        className="group flex h-11 w-full items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-deep sm:h-9"
      >
        <span className="relative block h-1 w-full overflow-hidden rounded-full bg-carbon/15 group-hover:bg-carbon/25">
          {state === "done" && <span className="absolute inset-0 bg-carbon/45" />}
          {state === "active" && (
            <motion.span
              className="absolute inset-0 origin-left bg-carbon"
              style={{ scaleX: animated ? progress : 1 }}
            />
          )}
        </span>
      </button>
    </li>
  );
}

// Muestra de capacidades: cuatro vistas en el mismo marco. Avanza cada 6 s con
// un giro 3D; se pausa con el cursor encima, con foco de teclado dentro, con
// la pestaña oculta o con el botón de pausa. Con movimiento reducido no hay
// giro ni avance automático.
export function ShowcaseCard({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion() ?? false;
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const progress = useMotionValue(0);

  const autoplay = !reduce;
  const running = autoplay && !userPaused && !hovered && !focused && !pageHidden;
  const view = views[index];

  const goTo = (next: number, direction: number) => {
    progress.set(0);
    setDir(direction);
    setIndex((next + views.length) % views.length);
  };

  useEffect(() => {
    const onVisibility = () => setPageHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // Avance automático: la barra activa se llena en `intervalMs` y al terminar
  // pasa a la siguiente vista. Al pausar, conserva el progreso.
  useEffect(() => {
    if (!running) return;
    const remaining = (showcase.intervalMs / 1000) * (1 - progress.get());
    const animation = animate(progress, 1, {
      duration: remaining,
      ease: "linear",
      onComplete: () => {
        progress.set(0);
        setDir(1);
        setIndex((i) => (i + 1) % views.length);
      },
    });
    return () => animation.stop();
  }, [running, index, progress]);

  return (
    <section
      aria-roledescription="carrusel"
      aria-label={showcase.label}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className="relative h-[27.5rem] sm:h-[28rem]">
        <AnimatePresence initial={false} mode="wait" custom={{ dir, reduce }}>
          <motion.div
            key={view.id}
            role="group"
            aria-roledescription="vista"
            aria-label={`${index + 1} de ${views.length}: ${view.area}`}
            custom={{ dir, reduce }}
            variants={faceVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: reduce ? 0.2 : 0.38, ease }}
            style={{ transformPerspective: 1400 }}
            className="absolute inset-0"
          >
            <ShowcaseFace
              area={view.area}
              badge={view.badge}
              position={`${pad(index + 1)} / ${pad(views.length)}`}
            >
              <ViewContent view={view} />
            </ShowcaseFace>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Solo se anuncia el cambio de vista cuando no avanza sola. */}
      <p aria-live={running ? "off" : "polite"} className="sr-only">
        {`Vista ${index + 1} de ${views.length}: ${view.area}`}
      </p>

      <div role="group" aria-label={controls.group} className="mt-4 flex items-center gap-2">
        <button
          type="button"
          aria-label={controls.previous}
          onClick={() => goTo(index - 1, -1)}
          className={buttonClass}
        >
          <Icon name="prev" />
        </button>
        {autoplay && (
          <button
            type="button"
            aria-label={userPaused ? controls.play : controls.pause}
            aria-pressed={userPaused}
            onClick={() => setUserPaused((paused) => !paused)}
            className={buttonClass}
          >
            <Icon name={userPaused ? "play" : "pause"} />
          </button>
        )}
        <button
          type="button"
          aria-label={controls.next}
          onClick={() => goTo(index + 1, 1)}
          className={buttonClass}
        >
          <Icon name="next" />
        </button>

        <ol className="ml-2 flex flex-1 gap-1.5">
          {views.map((item, i) => (
            <Indicator
              key={item.id}
              view={item}
              state={i < index ? "done" : i === index ? "active" : "upcoming"}
              progress={progress}
              animated={autoplay}
              onSelect={() => goTo(i, i >= index ? 1 : -1)}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
