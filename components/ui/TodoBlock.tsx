type TodoBlockProps = {
  title: string;
  hints?: string[];
  className?: string;
};

// Bloque visible para contenido pendiente. `hints` describe qué falta escribir.
export function TodoBlock({ title, hints, className = "" }: TodoBlockProps) {
  return (
    <div
      role="note"
      className={`rounded-2xl border border-dashed border-ink/25 bg-ivory-dark p-5 text-ink sm:p-6 ${className}`}
    >
      <p className="flex flex-wrap items-center gap-2 text-sm font-medium">
        <span className="rounded bg-lime px-1.5 py-0.5 font-mono text-[11px] font-semibold tracking-widest">
          TODO
        </span>
        {title}
      </p>
      {hints && hints.length > 0 && (
        <ul className="mt-3 space-y-1 text-sm text-ink-muted">
          {hints.map((hint) => (
            <li key={hint}>— {hint}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
