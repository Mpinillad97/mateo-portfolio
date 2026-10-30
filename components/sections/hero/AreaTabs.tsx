"use client";

import { useRef } from "react";
import { type AreaId, heroScene } from "@/data/heroShowcase";
import { Icon } from "./scene/icons";

type AreaTabsProps = {
  active: AreaId;
  onSelect: (area: AreaId) => void;
  panelId: string;
  className?: string;
};

export const tabId = (area: AreaId) => `area-tab-${area}`;

// Selector de áreas como pestañas: clic o flechas izquierda/derecha (con
// Inicio y Fin) cambian la vista; solo la pestaña activa está en el orden de
// tabulación.
export function AreaTabs({ active, onSelect, panelId, className = "" }: AreaTabsProps) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const areas = heroScene.areas;

  const move = (index: number) => {
    const next = (index + areas.length) % areas.length;
    onSelect(areas[next].id);
    refs.current[next]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const keys: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: areas.length - 1,
    };
    if (event.key in keys) {
      event.preventDefault();
      move(keys[event.key]);
    }
  };

  return (
    <div
      role="tablist"
      aria-label={heroScene.tabsLabel}
      className={`grid grid-cols-4 gap-1 rounded-full border border-line bg-mist-light/85 p-1.5 shadow-[0_16px_36px_-22px_rgb(20_23_21/0.45)] backdrop-blur sm:flex ${className}`}
    >
      {areas.map((area, i) => {
        const selected = area.id === active;
        return (
          <button
            key={area.id}
            ref={(element) => {
              refs.current[i] = element;
            }}
            id={tabId(area.id)}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={panelId}
            tabIndex={selected ? 0 : -1}
            onClick={() => onSelect(area.id)}
            onKeyDown={(event) => onKeyDown(event, i)}
            className={`flex h-12 flex-col items-center justify-center gap-0.5 rounded-full text-[11px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-deep sm:h-11 sm:flex-row sm:gap-2 sm:px-5 sm:text-sm ${
              selected ? "bg-lime text-carbon" : "text-carbon-muted hover:bg-mist-dark hover:text-carbon"
            }`}
          >
            <Icon name={area.icon} className="h-4 w-4" />
            {area.tab}
          </button>
        );
      })}
    </div>
  );
}
