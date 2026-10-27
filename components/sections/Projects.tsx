import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="proyectos" eyebrow="Trabajo" title="Proyectos">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <Card className="flex h-full flex-col">
              <div
                aria-hidden
                className="mb-5 aspect-video rounded-xl border border-dashed border-line bg-ivory-dark"
              />
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm text-ink-muted">{project.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-lime/40 px-2.5 py-0.5 text-xs font-medium"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
