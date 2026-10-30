type PhoneFrameProps = {
  children: React.ReactNode;
  // Tamaño y posición los decide quien lo usa.
  className?: string;
};

// Marco de teléfono grafito con isla superior; el contenido ocupa la pantalla.
export function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div
      className={`rounded-[2.4rem] bg-graphite p-[7px] shadow-[0_40px_70px_-34px_rgb(20_23_21/0.65)] ring-1 ring-carbon/40 ${className}`}
    >
      <div className="relative h-full overflow-hidden rounded-[2rem]">
        <span className="absolute top-1.5 left-1/2 z-10 h-[18px] w-[4.25rem] -translate-x-1/2 rounded-full bg-graphite" />
        {children}
      </div>
    </div>
  );
}
