type BrowserFrameProps = {
  children: React.ReactNode;
  className?: string;
};

// Marco de navegador grafito: barra superior con controles y contenido claro.
export function BrowserFrame({ children, className = "" }: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-[1.15rem] bg-graphite p-1.5 pt-0 shadow-[0_50px_90px_-40px_rgb(20_23_21/0.65),0_18px_40px_-24px_rgb(20_23_21/0.4)] ${className}`}
    >
      <div className="flex h-9 items-center gap-1.5 px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ivory/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-ivory/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-lime/80" />
      </div>
      <div className="overflow-hidden rounded-[0.8rem]">{children}</div>
    </div>
  );
}
