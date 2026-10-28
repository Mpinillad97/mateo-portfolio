type LanguageBadgeProps = {
  code: string;
  label: string;
};

// Indicador visual del idioma actual. Todavía no cambia de idioma.
// TODO: convertirlo en selector real cuando existan traducciones.
export function LanguageBadge({ code, label }: LanguageBadgeProps) {
  return (
    <span
      title={`Idioma: ${label}`}
      className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1 font-mono text-xs font-medium tracking-widest"
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-lime-dark" />
      <span className="sr-only">Idioma actual: {label}</span>
      <span aria-hidden>{code}</span>
    </span>
  );
}
