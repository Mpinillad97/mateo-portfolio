"use client";

import { motion } from "motion/react";
import { type NavbarRoute } from "@/data/site";
import { BAR_HEIGHT, RAIL_WIDTH, RAIL_Y } from "./geometry";
import { useDraw } from "./useDraw";

export type Branch = NavbarRoute["key"];

type BranchForkProps = {
  // Altura a la que termina la rama superior (equipos).
  topY: number;
  width: number;
  // Rama resaltada por hover, foco o ruta actual; la otra se atenúa.
  emphasis: Branch | null;
  delay: number;
};

const FORK_X = 12;

// Bifurcación de la línea: la rama de equipos sube a la fila superior y la de
// clientes sigue recta hasta la inferior. Cada rama termina en un nodo.
export function BranchFork({ topY, width, emphasis, delay }: BranchForkProps) {
  const draw = useDraw();
  const endX = width - 6;
  const nodeX = width - 3;

  const branches: { key: Branch; d: string; y: number }[] = [
    {
      key: "teams",
      d: `M${FORK_X} ${RAIL_Y} C${FORK_X + 12} ${RAIL_Y} ${FORK_X + 10} ${topY} ${endX} ${topY}`,
      y: topY,
    },
    { key: "clients", d: `M${FORK_X} ${RAIL_Y} H${endX}`, y: RAIL_Y },
  ];

  const branchStyle = (key: Branch) => ({
    opacity: emphasis && emphasis !== key ? 0.35 : 1,
    strokeWidth: emphasis === key ? 3 : RAIL_WIDTH,
  });

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${width} ${BAR_HEIGHT}`}
      width={width}
      height={BAR_HEIGHT}
      fill="none"
      stroke="currentColor"
      className="block shrink-0 text-lime"
    >
      <motion.path
        d={`M0 ${RAIL_Y} H${FORK_X}`}
        strokeWidth={RAIL_WIDTH}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={draw(delay, 0.08)}
      />
      {branches.map((branch) => (
        <g key={branch.key}>
          <motion.path
            d={branch.d}
            className="transition-[opacity,stroke-width] duration-200 motion-reduce:transition-none"
            style={branchStyle(branch.key)}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={draw(delay + 0.06, 0.26)}
          />
          <motion.circle
            cx={nodeX}
            cy={branch.y}
            r={3}
            fill="currentColor"
            stroke="none"
            className={`origin-center transition-transform duration-200 [transform-box:fill-box] motion-reduce:transition-none ${
              emphasis === branch.key ? "scale-150" : ""
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={draw(delay + 0.28, 0.16)}
          />
        </g>
      ))}
      <motion.circle
        cx={FORK_X}
        cy={RAIL_Y}
        r={3}
        fill="currentColor"
        stroke="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={draw(delay + 0.06, 0.12)}
      />
    </svg>
  );
}
