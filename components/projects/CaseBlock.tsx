import { TodoBlock } from "@/components/ui/TodoBlock";

type CaseBlockProps = {
  id: string;
  title: string;
  // Texto del TODO cuando no hay contenido confirmado.
  todo: string;
  children?: React.ReactNode;
};

// Bloque de la página de caso: título a la izquierda y contenido a la derecha.
export function CaseBlock({ id, title, todo, children }: CaseBlockProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="grid scroll-mt-28 gap-4 border-t border-line py-10 md:grid-cols-[14rem_1fr] md:gap-10 lg:scroll-mt-20"
    >
      <h2 id={`${id}-title`} className="text-xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="max-w-2xl text-lg leading-relaxed text-ink-muted">
        {children ?? <TodoBlock title={todo} />}
      </div>
    </section>
  );
}
