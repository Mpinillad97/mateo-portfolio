import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { type Project } from "@/data/projects";
import { projectPath } from "@/data/site";

// "team" destaca la contribución técnica; "client", el problema y la solución.
export type ProjectCardVariant = "default" | "team" | "client";

function details(project: Project, variant: ProjectCardVariant) {
  if (variant === "team") {
    return [
      { label: "CONTRIBUCIÓN", value: project.contribution ?? "[TODO: contribución técnica.]" },
      {
        label: "DECISIONES",
        value: project.decisions?.join(" · ") ?? "[TODO: decisiones técnicas clave.]",
      },
    ];
  }
  if (variant === "client") {
    return [
      { label: "PROBLEMA", value: project.problem ?? "[TODO: problema que se resolvía.]" },
      { label: "SOLUCIÓN", value: project.solution ?? "[TODO: solución construida.]" },
    ];
  }
  return [];
}

export function ProjectCard({
  project,
  variant = "default",
}: {
  project: Project;
  variant?: ProjectCardVariant;
}) {
  const items = details(project, variant);

  // El enlace del título cubre toda la tarjeta con un pseudo-elemento.
  return (
    <Card className="relative flex h-full flex-col transition-colors hover:border-carbon/40 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-lime-deep">
      <h3 className="text-lg font-semibold">
        <Link
          href={projectPath(project.slug)}
          className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
        >
          {project.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-carbon-muted">{project.summary}</p>

      {items.length > 0 && (
        <dl className="mt-5 space-y-3 text-sm">
          {items.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-[11px] tracking-widest text-carbon-muted">
                {item.label}
              </dt>
              <dd className="mt-1">{item.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-auto flex items-end justify-between gap-4 pt-6">
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-lime/40 px-2.5 py-0.5 text-xs font-medium">
              {tag}
            </li>
          ))}
        </ul>
        <span aria-hidden className="shrink-0 font-mono text-xs text-carbon-muted">
          Ver caso →
        </span>
      </div>
    </Card>
  );
}
