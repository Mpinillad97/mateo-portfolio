import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { hero } from "@/data/site";
import { ShowcaseCard } from "./hero/ShowcaseCard";

// Una acción por público, cada una con su etiqueta, para que quede claro que
// el Home sirve tanto a equipos como a clientes.
const actions = [
  { ...hero.teamsCta, variant: "primary" as const },
  { ...hero.clientsCta, variant: "accent" as const },
];

export function Hero() {
  const lastLine = hero.titleLines.length - 1;

  return (
    <section
      aria-labelledby="hero-title"
      className="flex items-center py-14 sm:py-20 lg:min-h-[calc(100svh-4rem)] lg:py-20"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <div>
          <Eyebrow className="mb-6">{hero.eyebrow}</Eyebrow>
          <h1
            id="hero-title"
            className="text-[2.6rem] font-semibold leading-[1.02] tracking-tighter text-balance sm:text-6xl lg:text-[3.75rem] xl:text-7xl"
          >
            {hero.titleLines.map((line, i) => (
              <span key={line} className="block">
                {i === lastLine ? (
                  <span className="box-decoration-clone bg-[linear-gradient(transparent_64%,var(--color-lime)_64%,var(--color-lime)_92%,transparent_92%)]">
                    {line}
                  </span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-carbon-muted sm:text-xl">
            {hero.intro}
          </p>

          <div className="mt-10 grid gap-5 sm:max-w-xl sm:grid-cols-2">
            {actions.map((action) => (
              <div key={action.href}>
                <p className="mb-2.5 font-mono text-[11px] font-medium tracking-[0.2em] text-carbon-muted">
                  {action.audience}
                </p>
                <ButtonLink href={action.href} variant={action.variant} className="w-full sm:w-auto">
                  {action.label}
                  <span aria-hidden className="ml-2">
                    →
                  </span>
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>

        {/* La muestra acompaña al mensaje: columna más estrecha que el texto. */}
        <ShowcaseCard className="mx-auto w-full max-w-md lg:mr-0" />
      </Container>
    </section>
  );
}
