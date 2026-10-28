type EyebrowProps = {
  children: React.ReactNode;
  // Color del punto; por defecto, el acento lima.
  dotClass?: string;
  onDark?: boolean;
  className?: string;
};

// Etiqueta corta en mayúsculas que precede a un título.
export function Eyebrow({
  children,
  dotClass = "bg-lime-dark",
  onDark = false,
  className = "",
}: EyebrowProps) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 font-mono text-xs font-medium tracking-[0.2em] ${
        onDark ? "text-ivory/60" : "text-ink-muted"
      } ${className}`}
    >
      <span aria-hidden className={`h-2 w-2 shrink-0 rounded-full ${dotClass}`} />
      {children}
    </p>
  );
}
