import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LanguageBadge } from "@/components/ui/LanguageBadge";
import { routes, site } from "@/data/site";
import { NavLinks } from "./NavLinks";

// Navegación principal. En móvil los enlaces pasan a una segunda fila
// desplazable bajo la marca.
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/85 backdrop-blur-md">
      <Container className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 py-3 lg:flex lg:py-5">
        <Link
          href={routes.home}
          className="font-mono text-sm font-semibold tracking-[0.18em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-dark"
        >
          {site.brand.name}
          <span aria-hidden className="mx-2 text-lime-dark">
            /
          </span>
          <span className="text-ink-muted">{site.brand.role}</span>
        </Link>

        <nav aria-label="Navegación principal" className="col-span-2 row-start-2 lg:ml-auto">
          <NavLinks />
        </nav>

        <div className="col-start-2 row-start-1">
          <LanguageBadge code={site.language.code} label={site.language.label} />
        </div>
      </Container>
    </header>
  );
}
