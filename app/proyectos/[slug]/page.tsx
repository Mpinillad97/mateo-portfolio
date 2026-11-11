import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseBlock } from "@/components/projects/CaseBlock";
import { AudienceCta } from "@/components/sections/AudienceCta";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { TextLink } from "@/components/ui/TextLink";
import {
  audienceLabels,
  caseBlocks,
  evidenceLabels,
  getProject,
  projects,
  scopeLabels,
  statusLabels,
} from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

// Las páginas se generan en el build a partir de data/projects.ts; cualquier
// otro slug devuelve 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: project.summary } : {};
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item}>— {item}</li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const b = caseBlocks;

  return (
    <>
      <Container className="pt-10">
        <TextLink href={b.back.href}>{b.back.label}</TextLink>
      </Container>

      <PageHero eyebrow={b.eyebrow} title={project.title} intro={project.summary}>
        <ul className="flex flex-wrap gap-2 font-mono text-xs text-carbon-muted">
          <li>{statusLabels[project.status]}</li>
          <li>· {scopeLabels[project.scope]}</li>
          <li>· {audienceLabels[project.audience]}</li>
        </ul>
        {project.scopeNote && <p className="text-sm text-carbon-muted">{project.scopeNote}</p>}
        {project.notice && (
          <p role="note" className="rounded-2xl border border-dashed border-carbon/30 p-4 text-sm">
            {project.notice}
          </p>
        )}
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-lime/40 px-2.5 py-0.5 text-xs font-medium">
              {tag}
            </li>
          ))}
        </ul>
      </PageHero>

      {/* Cada bloque muestra su contenido si existe; si no, un TODO. */}
      <Container className="pb-16 sm:pb-24">
        <CaseBlock id="contexto" {...b.context}>
          {project.context}
        </CaseBlock>
        <CaseBlock id="contribucion" {...b.contribution}>
          {project.contribution}
        </CaseBlock>
        <CaseBlock id="solucion" {...b.solution}>
          {project.solution}
        </CaseBlock>
        <CaseBlock id="decisiones" {...b.decisions}>
          {project.decisions && <List items={project.decisions} />}
        </CaseBlock>
        <CaseBlock id="tecnologias" {...b.technologies}>
          {project.technologies && <List items={project.technologies} />}
        </CaseBlock>
        <CaseBlock id="resultado" {...b.outcome}>
          {project.outcome}
        </CaseBlock>
        <CaseBlock id="evidencias" {...b.evidence}>
          {project.evidence && (
            <ul className="space-y-2">
              {project.evidence.map((item) => (
                <li key={item.label}>
                  —{" "}
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="underline">
                      {item.label}
                      <span className="sr-only"> (se abre en una pestaña nueva)</span>
                    </a>
                  ) : (
                    item.label
                  )}{" "}
                  <span className="text-sm">({evidenceLabels[item.kind]})</span>
                </li>
              ))}
            </ul>
          )}
        </CaseBlock>
      </Container>

      <AudienceCta />
    </>
  );
}
