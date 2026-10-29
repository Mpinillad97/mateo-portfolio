import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  // Acciones o bloques adicionales bajo el texto.
  children?: React.ReactNode;
};

// Cabecera de las páginas interiores. El Home usa su propio Hero.
export function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section aria-labelledby="page-title" className="py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
          <h1
            id="page-title"
            className="text-4xl font-semibold leading-[1.05] tracking-tighter text-balance sm:text-5xl lg:text-6xl"
          >
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-carbon-muted sm:text-xl">
              {intro}
            </p>
          )}
          {children && <div className="mt-10 space-y-6">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
