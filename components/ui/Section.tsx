import { Container } from "./Container";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
};

// Envoltorio común de cada sección: ancla, título y espaciado vertical.
export function Section({ id, title, eyebrow, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-20 border-t border-line py-16 sm:py-24 ${className}`}
    >
      <Container>
        <header className="mb-10 sm:mb-12">
          {eyebrow && (
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-ink-muted">
              {eyebrow}
            </p>
          )}
          <h2
            id={`${id}-title`}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
        </header>
        {children}
      </Container>
    </section>
  );
}
