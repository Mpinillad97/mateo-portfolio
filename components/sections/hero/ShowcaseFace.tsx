type ShowcaseFaceProps = {
  area: string;
  badge: string;
  position: string;
  children: React.ReactNode;
};

// Marco común de las vistas: posición, etiqueta de demo y área visible en una
// fila propia para que no se recorte en móvil.
export function ShowcaseFace({ area, badge, position, children }: ShowcaseFaceProps) {
  return (
    <div className="flex h-full flex-col rounded-3xl bg-graphite p-5 text-ivory shadow-[0_24px_60px_-28px_rgb(20_23_21/0.55)] sm:p-6">
      <div className="mb-5">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs tracking-[0.16em] whitespace-nowrap text-ivory-muted">
            {position}
          </span>
          <span className="shrink-0 rounded-full bg-lime px-2.5 py-1 font-mono text-[10px] font-semibold tracking-widest text-carbon">
            {badge}
          </span>
        </div>
        <p className="mt-2 font-mono text-sm font-semibold tracking-[0.12em]">{area}</p>
      </div>
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  );
}
