import { TodoBlock } from "@/components/ui/TodoBlock";
import { type Project } from "@/data/projects";
import { ProjectCard, type ProjectCardVariant } from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
  variant?: ProjectCardVariant;
};

export function ProjectGrid({ projects, variant = "default" }: ProjectGridProps) {
  if (projects.length === 0) {
    return <TodoBlock title="Todavía no hay proyectos confirmados." />;
  }

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectCard project={project} variant={variant} />
        </li>
      ))}
    </ul>
  );
}
