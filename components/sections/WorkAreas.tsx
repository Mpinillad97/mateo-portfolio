import { ItemGrid } from "@/components/ui/ItemGrid";
import { Section } from "@/components/ui/Section";
import { workAreas } from "@/data/areas";
import { workAreasSection } from "@/data/home";

export function WorkAreas() {
  return (
    <Section
      id={workAreasSection.id}
      eyebrow={workAreasSection.eyebrow}
      title={workAreasSection.title}
      intro={workAreasSection.intro}
    >
      <ItemGrid items={workAreas} columns={4} numbered />
    </Section>
  );
}
