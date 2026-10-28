import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { selectedWork } from "@/data/home";
import { featuredProjects } from "@/data/projects";

export function SelectedWork() {
  return (
    <Section
      id={selectedWork.id}
      eyebrow={selectedWork.eyebrow}
      title={selectedWork.title}
      intro={selectedWork.intro}
      action={<TextLink href={selectedWork.link.href}>{selectedWork.link.label}</TextLink>}
    >
      <ProjectGrid projects={featuredProjects.slice(0, 3)} />
    </Section>
  );
}
