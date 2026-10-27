import { Section } from "@/components/ui/Section";
import { capabilities } from "@/data/capabilities";

export function Capabilities() {
  return (
    <Section id="capacidades" eyebrow="Qué hago" title="Capacidades">
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {capabilities.map((capability) => (
          <li key={capability.title} className="bg-ivory p-6 sm:p-8">
            <h3 className="font-semibold">{capability.title}</h3>
            <p className="mt-2 text-sm text-ink-muted">{capability.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
