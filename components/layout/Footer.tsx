import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navItems, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10 text-sm text-carbon-muted">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.fullName}
        </p>
        <nav aria-label="Navegación del pie de página">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-carbon">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
