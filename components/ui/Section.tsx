import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  intro?: string;
  // Enlace o acción alineado a la derecha del título en escritorio.
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

// Envoltorio común de cada sección: ancla, título y espaciado vertical.
export function Section({
  id,
  title,
  eyebrow,
  intro,
  action,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-28 border-t border-line py-16 sm:py-24 lg:scroll-mt-20 ${className}`}
    >
      <Container>
        <header className="mb-10 flex flex-col gap-6 sm:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
            <h2
              id={`${id}-title`}
              className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            >
              {title}
            </h2>
            {intro && <p className="mt-4 text-lg text-ink-muted">{intro}</p>}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </header>
        {children}
      </Container>
    </section>
  );
}
