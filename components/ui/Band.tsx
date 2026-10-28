import { Container } from "./Container";

type BandProps = {
  // Nombre accesible de la región, ya que no lleva título visible propio.
  label: string;
  children: React.ReactNode;
  className?: string;
};

// Franja sin encabezado propio, para cierres y llamadas a la acción.
export function Band({ label, children, className = "" }: BandProps) {
  return (
    <section aria-label={label} className={`border-t border-line py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
