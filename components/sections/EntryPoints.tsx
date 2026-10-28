import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { type EntryPoint, entryPoints } from "@/data/home";

const dotClasses = { ink: "bg-ink", lime: "bg-lime-dark" };

// Tarjeta enlazada a la ruta dedicada; el enlace cubre toda la tarjeta.
function EntryCard({ entry }: { entry: EntryPoint }) {
  return (
    <article className="relative flex h-full flex-col rounded-3xl border border-line p-6 transition-colors hover:border-ink/40 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-lime-dark sm:p-8">
      <Eyebrow dotClass={dotClasses[entry.tone]} className="mb-4">
        {entry.eyebrow}
      </Eyebrow>
      <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
        {entry.title}
      </h2>
      <p className="mt-4 flex-1 text-ink-muted">{entry.text}</p>
      <Link
        href={entry.link.href}
        className="mt-8 inline-flex items-center gap-2 self-start text-sm font-medium underline decoration-lime-dark decoration-2 underline-offset-4 after:absolute after:inset-0 after:rounded-3xl focus-visible:outline-none"
      >
        {entry.link.label}
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}

// Puntos de entrada bajo el hero: uno para equipos y otro para clientes.
export function EntryPoints() {
  return (
    <section aria-label="Elige tu camino" className="border-t border-line py-16 sm:py-20">
      <Container className="grid gap-6 md:grid-cols-2">
        {entryPoints.map((entry) => (
          <EntryCard key={entry.link.href} entry={entry} />
        ))}
      </Container>
    </section>
  );
}
