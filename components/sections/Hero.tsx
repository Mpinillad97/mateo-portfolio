import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { hero, heroCard, site } from "@/data/site";

export function Hero() {
  return (
    <section aria-label="Presentación" className="py-16 sm:py-24 lg:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-ink-muted">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">{hero.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        {/* Tarjeta compacta: solo estructura visual.
            TODO: implementar más adelante el giro/animación con Motion. */}
        <aside
          aria-label="Tarjeta de presentación"
          className="w-full max-w-sm justify-self-center rounded-3xl border border-ink/10 bg-ink p-6 text-ivory shadow-sm lg:w-80"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{site.name}</span>
            <span aria-hidden className="h-3 w-3 rounded-full bg-lime" />
          </div>
          <div
            aria-hidden
            className="mt-6 aspect-[4/3] rounded-2xl border border-dashed border-ivory/25"
          />
          <p className="mt-6 text-lg font-semibold">{heroCard.title}</p>
          <ul className="mt-3 space-y-1 text-sm text-ivory/70">
            {heroCard.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </aside>
      </Container>
    </section>
  );
}
