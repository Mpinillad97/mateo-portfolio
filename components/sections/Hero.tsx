import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FlipCard } from "@/components/ui/FlipCard";
import { hero, heroCard } from "@/data/site";
import { CodeSample } from "./hero/CodeSample";
import { ResultPreview } from "./hero/ResultPreview";

export function Hero() {
  const lastLine = hero.titleLines.length - 1;

  return (
    <section
      aria-labelledby="hero-title"
      className="flex items-center py-16 sm:py-20 lg:min-h-[calc(100svh-4.75rem)] lg:py-24"
    >
      <Container className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-20">
        <div>
          <Eyebrow className="mb-6">{hero.eyebrow}</Eyebrow>
          <h1
            id="hero-title"
            className="text-[2.75rem] font-semibold leading-[1.02] tracking-tighter text-balance sm:text-6xl lg:text-7xl"
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
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            {hero.intro}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={hero.teamsCta.href}>
              {hero.teamsCta.label}
              <span aria-hidden className="ml-2">
                →
              </span>
            </ButtonLink>
            <ButtonLink href={hero.clientsCta.href} variant="accent">
              {hero.clientsCta.label}
              <span aria-hidden className="ml-2">
                →
              </span>
            </ButtonLink>
          </div>
        </div>

        {/* La tarjeta es secundaria: más pequeña que el bloque de texto. */}
        <FlipCard
          className="mx-auto w-full max-w-sm lg:mr-0"
          front={<CodeSample />}
          back={<ResultPreview />}
          frontLabel={heroCard.controls.code}
          backLabel={heroCard.controls.result}
          controlsLabel={heroCard.controls.group}
        />
      </Container>
    </section>
  );
}
