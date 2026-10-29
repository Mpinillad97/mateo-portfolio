"use client";

import { motion } from "motion/react";
import { BAR_HEIGHT, RAIL_WIDTH, RAIL_Y } from "./geometry";
import { useDraw } from "./useDraw";

// Monograma M: dos picos angulares que casi se tocan en el centro. El segundo
// pico aterriza a la altura de la línea y continúa en ella con un tramo corto
// que se dibuja al cargar. La M en sí es estática para que el logo sea visible
// siempre, incluso sin JavaScript.
const PEAK_LEFT = `M3 ${RAIL_Y} L11.5 20 L19 40`;
const PEAK_RIGHT = `M21 40 L28.5 20 L37 ${RAIL_Y}`;
const TAIL = `M36 ${RAIL_Y} H40`;

export function Monogram() {
  const draw = useDraw();

  return (
    <svg
      aria-hidden
      viewBox={`0 0 40 ${BAR_HEIGHT}`}
      width={40}
      height={BAR_HEIGHT}
      fill="none"
      stroke="currentColor"
      className="block shrink-0 text-lime"
    >
      <path d={PEAK_LEFT} strokeWidth={3} />
      <path d={PEAK_RIGHT} strokeWidth={3} />
      <motion.path
        d={TAIL}
        strokeWidth={RAIL_WIDTH}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={draw(0.1, 0.1)}
      />
    </svg>
  );
}
