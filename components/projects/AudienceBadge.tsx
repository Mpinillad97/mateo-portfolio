import { type ProjectAudience } from "@/data/projects";

const styles = {
  equipos: { bg: "bg-panel-sky", dot: "bg-aqua-deep", label: "Equipos" },
  clientes: { bg: "bg-panel-leaf", dot: "bg-lime-mid", label: "Clientes" },
  aprendizaje: { bg: "bg-sand", dot: "bg-ink-muted", label: "Aprendizaje" },
};

function Badge({ kind }: { kind: keyof typeof styles }) {
  const s = styles[kind];
  return (
    <span className={`inline-flex h-7 items-center gap-2 rounded-md px-2.5 text-xs font-semibold text-ink ${s.bg}`}>
      <span aria-hidden className={`h-2 w-2 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}

// Público del proyecto. "ambos" son dos badges seguidos, nunca un tercer color.
export function AudienceBadge({ audience }: { audience: ProjectAudience }) {
  if (audience === "ambos") {
    return (
      <>
        <Badge kind="equipos" />
        <Badge kind="clientes" />
      </>
    );
  }
  return <Badge kind={audience} />;
}
