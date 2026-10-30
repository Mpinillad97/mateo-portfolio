"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { type AreaId, type Screenshot, heroScene } from "@/data/heroShowcase";
import { AreaTabs, tabId } from "./AreaTabs";
import { BrowserFrame } from "./BrowserFrame";
import { PhoneFrame } from "./PhoneFrame";
import { AiDesktop, AiMobile } from "./scene/AiArea";
import { BackendDesktop, BackendMobile } from "./scene/BackendArea";
import { CloudDesktop, CloudMobile } from "./scene/CloudArea";
import { WebDesktop, WebMobile } from "./scene/WebArea";

const PANEL_ID = "hero-escena";
const ease = [0.22, 1, 0.36, 1] as const;

// Vista de escritorio y móvil de cada área (demo construida con componentes).
const views: Record<AreaId, { Desktop: () => React.ReactNode; Mobile: () => React.ReactNode }> = {
  web: { Desktop: WebDesktop, Mobile: WebMobile },
  backend: { Desktop: BackendDesktop, Mobile: BackendMobile },
  ai: { Desktop: AiDesktop, Mobile: AiMobile },
  cloud: { Desktop: CloudDesktop, Mobile: CloudMobile },
};

function Shot({ shot, className }: { shot: Screenshot; className: string }) {
  return (
    <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} className={className} />
  );
}

// Escena de producto del hero: navegador grande con la app ficticia y, detrás
// a la derecha, un teléfono con su versión móvil. El selector cambia de área
// con un fundido suave; no hay cambios automáticos.
export function HeroShowcase({ className = "" }: { className?: string }) {
  const [area, setArea] = useState<AreaId>("web");
  const reduce = useReducedMotion() ?? false;
  const { Desktop, Mobile } = views[area];
  const shots = heroScene.screenshots[area];
  const current = heroScene.areas.find((item) => item.id === area)!;

  const fade = {
    initial: { opacity: 0, y: reduce ? 0 : 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: reduce ? 0 : -6 },
    transition: { duration: reduce ? 0.15 : 0.4, ease },
  };

  return (
    <div className={className}>
      <p className="flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.22em] text-carbon-muted">
        <span aria-hidden className="h-0.5 w-10 rounded-full bg-lime-deep" />
        {heroScene.label}
      </p>

      <div id={PANEL_ID} role="tabpanel" aria-labelledby={tabId(area)} className="mt-5">
        {/* La demo se expone como una imagen con descripción por área. */}
        <div
          role="img"
          aria-label={current.description}
          className="relative pt-28 [perspective:2200px] md:pt-4 md:pr-[11rem]"
        >
          {/* Desde lg el teléfono sobresale hacia el margen derecho de la página
              (el hero recorta el desbordamiento horizontal). */}
          <PhoneFrame className="absolute top-0 right-3 z-0 h-[23rem] w-[11rem] md:top-[-0.5rem] md:right-0 md:h-[31.5rem] md:w-[14.75rem] lg:-right-6 lg:origin-right lg:[transform:rotateY(-10deg)] min-[1400px]:-right-10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={area} {...fade} className="h-full">
                {shots?.mobile ? (
                  <Shot shot={shots.mobile} className="h-full w-full object-cover object-top" />
                ) : (
                  <Mobile />
                )}
              </motion.div>
            </AnimatePresence>
          </PhoneFrame>

          <BrowserFrame className="relative z-10 lg:origin-left lg:[transform:rotateY(-7deg)]">
            <div className="h-[25rem] md:h-[33rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={area} {...fade} className="h-full">
                  {shots?.desktop ? (
                    <Shot shot={shots.desktop} className="h-full w-full object-cover object-top" />
                  ) : (
                    <Desktop />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </BrowserFrame>
        </div>
      </div>

      <AreaTabs
        active={area}
        onSelect={setArea}
        panelId={PANEL_ID}
        className="mt-7 sm:mx-auto sm:w-fit md:mr-[11rem]"
      />
    </div>
  );
}
