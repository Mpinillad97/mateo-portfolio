import { Section } from "@/components/ui/Section";
import { about } from "@/data/site";

export function About() {
  return (
    <Section id="sobre-mi" eyebrow="Perfil" title="Sobre mí">
      <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
        {/* TODO: añadir fotografía en /public/images y mostrarla con next/image. */}
        <div
          aria-hidden
          className="aspect-square max-w-xs rounded-2xl border border-dashed border-line bg-ivory-dark"
        />
        <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-ink-muted">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
