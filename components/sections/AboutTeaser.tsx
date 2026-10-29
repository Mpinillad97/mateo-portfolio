import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { aboutTeaser } from "@/data/home";

export function AboutTeaser() {
  return (
    <Section id={aboutTeaser.id} eyebrow={aboutTeaser.eyebrow} title={aboutTeaser.title}>
      <p className="max-w-2xl text-lg leading-relaxed text-carbon-muted">{aboutTeaser.text}</p>
      <TextLink href={aboutTeaser.link.href} className="mt-8">
        {aboutTeaser.link.label}
      </TextLink>
    </Section>
  );
}
