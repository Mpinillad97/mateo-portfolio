import Link from "next/link";
import { type EntryPoint, entryPoints, entryPointsSection } from "@/data/home";

const surfaces = {
  ivory: "bg-ivory",
  sage: "bg-mist",
};

// Iconos de línea decorativos de cada recorrido.
function RouteIcon({ name }: { name: EntryPoint["icon"] }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinejoin="round"
      strokeLinecap="round"
      className="relative h-12 w-12 sm:h-14 sm:w-14"
    >
      {name === "layers" ? (
        <>
          <path d="M32 8 56 20 32 32 8 20z" />
          <path d="m8 30 24 12 24-12" />
          <path d="m8 40 24 12 24-12" />
        </>
      ) : (
        <>
          <rect x="6" y="10" width="52" height="44" rx="4" />
          <path d="M6 20h52" />
          <path d="M12 15h.01M17 15h.01M22 15h.01" />
          <path d="m24 31-6 6 6 6M40 31l6 6-6 6M35 29l-6 16" />
        </>
      )}
    </svg>
  );
}

// Un recorrido. El enlace cubre toda la tarjeta con un pseudo-elemento, así
// que toda ella es clicable y su nombre accesible es el texto del enlace.
function EntryCard({ entry }: { entry: EntryPoint }) {
  return (
    <article
      aria-labelledby={`${entry.id}-title`}
      className={`group relative flex h-full flex-col p-7 text-carbon transition-shadow duration-200 hover:shadow-[0_24px_50px_-28px_rgb(0_0_0/0.7)] has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-lime sm:p-10 lg:p-11 ${surfaces[entry.surface]}`}
    >
      {/* Forma decorativa y icono, en la esquina superior derecha. */}
      <div aria-hidden className="absolute top-7 right-7 sm:top-10 sm:right-10">
        <span className="absolute -right-2 -bottom-5 h-14 w-14 rounded-tl-full bg-mist-dark/80 sm:h-16 sm:w-16" />
        <RouteIcon name={entry.icon} />
      </div>

      <p className="font-mono text-[10px] font-medium tracking-[0.3em] text-carbon-muted">
        {entry.eyebrow}
      </p>
      <span aria-hidden className="mt-2.5 block h-px w-9 bg-lime" />

      <h3
        id={`${entry.id}-title`}
        className="mt-5 pr-16 font-serif text-[2.25rem] leading-none tracking-tight sm:text-5xl"
      >
        {entry.title}
      </h3>
      <p className="mt-4 max-w-md text-lg leading-snug font-semibold text-balance sm:text-xl">
        {entry.question}
      </p>
      <p className="mt-2.5 max-w-md font-serif text-base leading-relaxed text-carbon-muted sm:text-[1.0625rem]">
        {entry.text}
      </p>

      <p className="mt-5 max-w-md text-[13px] leading-relaxed text-carbon-muted">
        <span className="font-mono text-[9.5px] font-semibold tracking-[0.2em] uppercase">
          {entryPointsSection.audienceLabel}:
        </span>{" "}
        {entry.audience}
      </p>

      <Link
        href={entry.link.href}
        className="mt-7 inline-flex items-center gap-3 self-start font-serif text-lg after:absolute after:inset-0 focus-visible:outline-none sm:mt-auto sm:pt-8"
      >
        <span className="border-b-[1.5px] border-lime pb-1 transition-colors group-hover:border-carbon">
          {entry.link.label}
        </span>
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        >
          →
        </span>
      </Link>
    </article>
  );
}

// Elección de audiencia: contenedor grafito con dos recorridos contrastados
// separados por una línea lima (vertical en escritorio, horizontal en móvil).
export function EntryPoints() {
  const [teams, clients] = entryPoints;

  return (
    // El fondo grafito ocupa todo el ancho; el contenido se alinea con el hero.
    <section
      id={entryPointsSection.id}
      aria-labelledby={`${entryPointsSection.id}-title`}
      className="scroll-mt-20 bg-graphite text-ivory"
    >
      <div className="mx-auto max-w-[86rem] px-5 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
        <p className="flex items-center gap-3.5 font-serif text-lg sm:text-xl">
          <span aria-hidden className="h-6 w-0.5 bg-lime" />
          {entryPointsSection.kicker}
        </p>
        <h2
          id={`${entryPointsSection.id}-title`}
          className="mt-3 font-serif text-[2rem] leading-tight tracking-tight sm:text-5xl"
        >
          {entryPointsSection.title}
        </h2>

        <div className="mt-10 grid gap-0 sm:mt-12 lg:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)]">
          <EntryCard entry={teams} />

          {/* Separador lima con una marca transversal, en ambos sentidos. */}
          <div aria-hidden className="relative h-14 lg:h-auto">
            <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-lime lg:inset-x-auto lg:top-0 lg:bottom-0 lg:left-1/2 lg:h-auto lg:w-0.5 lg:-translate-x-1/2 lg:translate-y-0" />
            <span className="absolute top-1/2 left-1/2 h-7 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-lime lg:h-0.5 lg:w-7" />
          </div>

          <EntryCard entry={clients} />
        </div>
      </div>
    </section>
  );
}
