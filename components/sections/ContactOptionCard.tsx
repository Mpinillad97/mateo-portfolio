import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";
import { TodoBlock } from "@/components/ui/TodoBlock";
import { type ContactOption } from "@/data/contact";

const dotClasses = { ink: "bg-ink", lime: "bg-lime-dark" };

// Una de las dos vías de contacto. No hay formulario ni envío de datos.
export function ContactOptionCard({ option }: { option: ContactOption }) {
  return (
    <section
      id={option.id}
      aria-labelledby={`${option.id}-title`}
      className="flex scroll-mt-28 flex-col rounded-3xl border border-line p-6 sm:p-8 lg:scroll-mt-24"
    >
      <Eyebrow dotClass={dotClasses[option.tone]} className="mb-4">
        {option.eyebrow}
      </Eyebrow>
      <h2 id={`${option.id}-title`} className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {option.title}
      </h2>
      <p className="mt-4 text-ink-muted">{option.text}</p>

      <h3 className="mt-8 font-mono text-[11px] tracking-widest text-ink-muted">
        QUÉ INCLUIR EN EL MENSAJE
      </h3>
      <ul className="mt-2 space-y-1 text-sm">
        {option.include.map((item) => (
          <li key={item}>— {item}</li>
        ))}
      </ul>

      <TodoBlock title={option.channelTodo} className="mt-8" />

      <TextLink href={option.related.href} className="mt-8 self-start">
        {option.related.label}
      </TextLink>
    </section>
  );
}
