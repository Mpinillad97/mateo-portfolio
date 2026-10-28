import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { PlaceholderSection } from "@/components/sections/PlaceholderSection";
import { Band } from "@/components/ui/Band";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ItemGrid } from "@/components/ui/ItemGrid";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { TodoBlock } from "@/components/ui/TodoBlock";
import { workAreas } from "@/data/areas";
import { featuredProjects } from "@/data/projects";
import { teamsPage } from "@/data/teams";

export const metadata: Metadata = {
  title: "Para equipos",
  description: teamsPage.hero.intro,
};

export default function TeamsPage() {
  const { hero, profile, stack, experience, contribution, closing } = teamsPage;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro}>
        <ButtonLink href={hero.cta.href}>
          {hero.cta.label} <span aria-hidden className="ml-2">→</span>
        </ButtonLink>
        <TodoBlock title={hero.cv.title} hints={hero.cv.hints} className="max-w-xl" />
      </PageHero>

      <PlaceholderSection block={profile} />

      <Section id={stack.id} eyebrow={stack.eyebrow} title={stack.title} intro={stack.intro}>
        <ItemGrid
          items={workAreas.map((area) => ({ ...area, tags: area.stack }))}
          columns={2}
        />
      </Section>

      <Section
        id={experience.id}
        eyebrow={experience.eyebrow}
        title={experience.title}
        intro={experience.intro}
      >
        <TodoBlock title={experience.todo} hints={experience.hints} className="mb-8 max-w-3xl" />
        <ProjectGrid projects={featuredProjects} variant="team" />
      </Section>

      <PlaceholderSection block={contribution} />

      <Band label={closing.title}>
        <CtaBanner tone="ink" eyebrow={closing.eyebrow} title={closing.title}>
          <ButtonLink href={closing.cta.href} variant="light">
            {closing.cta.label} <span aria-hidden className="ml-2">→</span>
          </ButtonLink>
          <TodoBlock title={closing.todo} hints={closing.hints} className="w-full max-w-xl" />
        </CtaBanner>
      </Band>
    </>
  );
}
