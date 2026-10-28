import { Section } from "@/components/ui/Section";
import { TodoBlock } from "@/components/ui/TodoBlock";

export type PlaceholderBlock = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  todo: string;
  hints?: string[];
};

// Sección cuyo contenido completo está pendiente: título real y bloque TODO.
export function PlaceholderSection({ block }: { block: PlaceholderBlock }) {
  return (
    <Section id={block.id} eyebrow={block.eyebrow} title={block.title} intro={block.intro}>
      <TodoBlock title={block.todo} hints={block.hints} className="max-w-3xl" />
    </Section>
  );
}
