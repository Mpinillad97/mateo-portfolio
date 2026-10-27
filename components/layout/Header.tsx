import { Container } from "@/components/ui/Container";
import { navItems, site } from "@/data/site";

// Navegación principal. En móvil los enlaces pasan a una fila desplazable
// bajo el nombre; no requiere JavaScript en el cliente.
// TODO: decidir si se quiere un menú desplegable en móvil.
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/90 backdrop-blur">
      <Container className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-4">
        <a href="#" className="text-lg font-semibold tracking-tight">
          {site.name}
          <span className="text-lime-dark">.</span>
        </a>
        <nav aria-label="Navegación principal">
          <ul className="-mx-1 flex gap-1 overflow-x-auto text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block whitespace-nowrap rounded-full px-3 py-1.5 text-ink-muted transition-colors hover:bg-lime hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
