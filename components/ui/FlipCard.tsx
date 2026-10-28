"use client";

import { MotionConfig, motion } from "motion/react";
import { useId, useState } from "react";

type FlipCardProps = {
  front: React.ReactNode;
  back: React.ReactNode;
  frontLabel: string;
  backLabel: string;
  controlsLabel: string;
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;
const faceClass = "col-start-1 row-start-1 backface-hidden";

// Tarjeta de dos caras. Entra con un giro 3D suave una sola vez al cargar y
// después solo se mueve cuando se usa el control. Con `reducedMotion="user"`,
// Motion omite las transformaciones si el sistema pide reducir el movimiento.
export function FlipCard({
  front,
  back,
  frontLabel,
  backLabel,
  controlsLabel,
  className = "",
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const cardId = useId();

  const options = [
    { label: frontLabel, value: false },
    { label: backLabel, value: true },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className={className}>
        <motion.div
          initial={{ opacity: 0, y: 24, rotateX: 10, rotateY: -32 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease }}
          style={{ transformPerspective: 1400 }}
        >
          <motion.div
            id={cardId}
            className="grid transform-3d"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.8, ease }}
            style={{ transformPerspective: 1400 }}
          >
            <div className={faceClass} aria-hidden={flipped} inert={flipped}>
              {front}
            </div>
            <div
              className={`${faceClass} rotate-y-180`}
              aria-hidden={!flipped}
              inert={!flipped}
            >
              {back}
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-5 flex justify-center">
          <div
            role="group"
            aria-label={controlsLabel}
            className="inline-flex rounded-full border border-line bg-ivory p-1"
          >
            {options.map((option) => {
              const active = flipped === option.value;
              return (
                <button
                  key={option.label}
                  type="button"
                  aria-controls={cardId}
                  aria-pressed={active}
                  onClick={() => setFlipped(option.value)}
                  className={`rounded-full px-4 py-1.5 font-mono text-xs font-medium tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-dark ${
                    active ? "bg-ink text-ivory" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
