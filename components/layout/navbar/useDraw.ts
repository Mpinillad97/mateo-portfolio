"use client";

import { type Transition, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

// Transición para dibujar la línea del navbar una sola vez al cargar.
// `MotionConfig reducedMotion="user"` no cubre `pathLength` ni `opacity`, así
// que aquí se anula explícitamente: con movimiento reducido todo aparece ya
// dibujado, sin animación.
export function useDraw() {
  const reduce = useReducedMotion();
  return (delay: number, duration: number): Transition =>
    reduce ? { duration: 0 } : { delay, duration, ease };
}
