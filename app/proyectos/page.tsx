import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { AudienceCta } from "@/components/sections/AudienceCta";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { TodoBlock } from "@/components/ui/TodoBlock";
import { projects, projectsPage } from "@/data/projects";

export const metadata: Metadata = {
  title: "Proyectos",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow={projectsPage.eyebrow} title={projectsPage.title} intro={projectsPage.intro}>
        <TodoBlock title={projectsPage.todo} className="max-w-xl" />
      </PageHero>

      <section aria-label="Listado de proyectos" className="pb-16 sm:pb-24">
        <Container>
          <ProjectGrid projects={projects} />
        </Container>
      </section>

      <AudienceCta />
    </>
  );
}
