import { type ProjectStatus, statusLabels } from "@/data/projects";

// Neutro (tinta). Solo "En línea" lleva borde continuo; el resto (no real,
// reconstruido, académico…) lleva borde discontinuo (D-013). El texto siempre
// dice el estado.
export function StatusBadge({ status }: { status: ProjectStatus }) {
  const line = status === "produccion" ? "border-solid" : "border-dashed";
  return (
    <span
      className={`inline-flex h-7 shrink-0 items-center rounded-md border ${line} border-ink/55 px-2.5 font-mono text-xs font-medium tracking-wide text-ink-muted`}
    >
      <span className="sr-only">Estado: </span>
      {statusLabels[status]}
    </span>
  );
}
