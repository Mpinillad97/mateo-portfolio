import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Band } from "@/components/ui/Band";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Faq } from "@/components/ui/Faq";
import { ItemGrid } from "@/components/ui/ItemGrid";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Steps } from "@/components/ui/Steps";
import { TodoBlock } from "@/components/ui/TodoBlock";
import { clientsPage } from "@/data/clients";
import { featuredProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Para clientes",
  description: clientsPage.hero.intro,
};

export default function ClientsPage() {
  const { hero, solutions, process, examples, start, faq } = clientsPage;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro}>
        <ButtonLink href={hero.cta.href} variant="accent">
          {hero.cta.label} <span aria-hidden className="ml-2">→</span>
        </ButtonLink>
        <TodoBlock title={hero.problems.title} hints={hero.problems.hints} className="max-w-xl" />
      </PageHero>

      <Section id={solutions.id} eyebrow={solutions.eyebrow} title={solutions.title}>
        <ItemGrid items={solutions.items} columns={4} numbered />
      </Section>

      <Section id={process.id} eyebrow={process.eyebrow} title={process.title} intro={process.intro}>
        <Steps steps={process.steps} />
      </Section>

      <Section
        id={examples.id}
        eyebrow={examples.eyebrow}
        title={examples.title}
        intro={examples.intro}
      >
        <ProjectGrid projects={featuredProjects} variant="client" />
      </Section>

      <Band label={start.title}>
        <CtaBanner tone="lime" eyebrow={start.eyebrow} title={start.title} text={start.text}>
          <ButtonLink href={start.cta.href}>
            {start.cta.label} <span aria-hidden className="ml-2">→</span>
          </ButtonLink>
        </CtaBanner>
      </Band>

      <Section id={faq.id} eyebrow={faq.eyebrow} title={faq.title} intro={faq.intro}>
        <Faq items={faq.items} />
      </Section>
    </>
  );
}
