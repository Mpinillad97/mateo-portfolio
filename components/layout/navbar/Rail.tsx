"use client";

import { motion } from "motion/react";
import { useDraw } from "./useDraw";

type RailProps = {
  // Posición y tamaño del tramo (por ejemplo "relative flex-1" o "absolute inset-0").
  className: string;
  delay: number;
  duration: number;
};

// Tramo horizontal de la línea lima, a la altura común (46 px).
export function Rail({ className, delay, duration }: RailProps) {
  const draw = useDraw();

  return (
    <span aria-hidden className={`block ${className}`}>
      <motion.span
        className="absolute inset-x-0 top-[45px] block h-0.5 origin-left bg-lime"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={draw(delay, duration)}
      />
    </span>
  );
}
