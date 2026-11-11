import Link from "next/link";
import { Arrow } from "@/components/home/Arrow";
import { featuredWork } from "@/data/home";
import { type Project } from "@/data/projects";
import { projectPath } from "@/data/site";
import { AudienceBadge } from "./AudienceBadge";
import { StatusBadge } from "./StatusBadge";

// Tarjeta del Home. El enlace del título cubre toda la tarjeta con un
// pseudo-elemento; el anillo de foco lo dibuja la propia tarjeta.
export function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const titleId = `featured-${project.slug}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="group relative flex h-full flex-col border border-ink/15 bg-ivory p-6 text-ink transition-[box-shadow,border-color] duration-200 hover:border-ink/40 hover:shadow-[0_24px_50px_-28px_rgb(24_36_58/0.55)] has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-ink motion-reduce:transition-none sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <span aria-hidden className="font-serif text-5xl leading-none text-ink/20 sm:text-6xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <StatusBadge status={project.status} />
      </div>

      <h3 id={titleId} className="mt-6 font-serif text-[1.75rem] leading-tight tracking-tight sm:text-3xl">
        <Link href={projectPath(project.slug)} className="after:absolute after:inset-0 focus-visible:outline-none">
          {project.title}
        </Link>
      </h3>
      <p className="mt-3 max-w-xl font-serif text-base leading-relaxed text-ink-muted sm:text-[1.0625rem]">
        {project.summary}
      </p>

      <ul
        aria-label="Categorías"
        className="mt-4 flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs tracking-wide text-ink-muted"
      >
        {project.tags.slice(0, 3).map((tag, i) => (
          <li key={tag}>
            {i > 0 && (
              <span aria-hidden className="mr-2">
                /
              </span>
            )}
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-3 pt-6">
        <div className="flex flex-wrap gap-2">
          <span className="sr-only">Público: </span>
          <AudienceBadge audience={project.audience} />
        </div>
        <span aria-hidden className="inline-flex items-center gap-2 font-serif text-lg">
          {featuredWork.cardLabel}
          <Arrow />
        </span>
      </div>
    </article>
  );
}
