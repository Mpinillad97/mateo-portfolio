import type { Metadata } from "next";
import { AudienceCta } from "@/components/sections/AudienceCta";
import { PlaceholderSection } from "@/components/sections/PlaceholderSection";
import { PageHero } from "@/components/ui/PageHero";
import { aboutPage } from "@/data/about";

export const metadata: Metadata = {
  title: "Sobre mí",
};

export default function AboutPage() {
  const { hero, sections } = aboutPage;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro} />
      {sections.map((block) => (
        <PlaceholderSection key={block.id} block={block} />
      ))}
      <AudienceCta />
    </>
  );
}
