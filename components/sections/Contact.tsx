import { Section } from "@/components/ui/Section";
import { contact } from "@/data/site";

// Solo muestra canales de contacto; no hay formulario ni envío de datos.
export function Contact() {
  return (
    <Section id="contacto" eyebrow="Hablemos" title="Contacto">
      <p className="max-w-2xl text-lg text-ink-muted">{contact.intro}</p>
      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        {contact.channels.map((channel) => (
          <div key={channel.label} className="rounded-2xl border border-line p-5">
            <dt className="text-sm text-ink-muted">{channel.label}</dt>
            <dd className="mt-1 font-medium">{channel.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
