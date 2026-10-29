"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { LanguageBadge } from "@/components/ui/LanguageBadge";
import { isCurrentPath, navbar, type NavbarRoute, routes, site } from "@/data/site";
import { type Branch, BranchFork } from "./navbar/BranchFork";
import { MobileMenu } from "./navbar/MobileMenu";
import { Monogram } from "./navbar/Monogram";
import { Rail } from "./navbar/Rail";

const MENU_ID = "menu-movil";
const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime";

function HomeLink() {
  return (
    <Link href={routes.home} aria-label={navbar.homeLabel} className={`shrink-0 ${focusRing}`}>
      <Monogram />
    </Link>
  );
}

type PrimaryLinkProps = {
  route: NavbarRoute;
  active: boolean;
  onHighlight: (branch: Branch | null) => void;
};

// Destino de una rama: etiqueta pequeÃ±a y enlace. Al pasar el cursor o
// enfocarlo con teclado, resalta su rama.
function PrimaryLink({ route, active, onHighlight }: PrimaryLinkProps) {
  return (
    <Link
      href={route.href}
      aria-current={active ? "page" : undefined}
      onMouseEnter={() => onHighlight(route.key)}
      onMouseLeave={() => onHighlight(null)}
      onFocus={() => onHighlight(route.key)}
      onBlur={() => onHighlight(null)}
      className={`group flex items-center gap-3 rounded-sm ${focusRing}`}
    >
      <span className="w-[4.5rem] font-mono text-[10px] tracking-[0.2em] text-ivory-muted">
        {route.label}
      </span>
      <span
        className={`text-sm font-medium underline decoration-1 underline-offset-4 transition-colors ${
          active
            ? "decoration-lime"
            : "decoration-transparent group-hover:decoration-lime group-focus-visible:decoration-lime"
        }`}
      >
        {route.text}
        <span aria-hidden className="ml-1 text-lime">
          â†—
        </span>
      </span>
    </Link>
  );
}

// Navbar: franja grafito con una lÃ­nea lima que nace en el monograma, pasa
// bajo los enlaces secundarios y se bifurca hacia los dos recorridos
// principales (equipos y clientes). La lÃ­nea se dibuja una vez al cargar.
export function Header() {
  const pathname = usePathname();
  const [highlighted, setHighlighted] = useState<Branch | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  const currentBranch =
    navbar.primary.find((route) => isCurrentPath(pathname, route.href))?.key ?? null;
  const emphasis = highlighted ?? currentBranch;

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-graphite text-ivory">
      <Container>
        {/* Escritorio */}
        <nav aria-label="NavegaciÃ³n principal" className="hidden h-16 items-stretch lg:flex">
          <HomeLink />
          <Rail className="relative min-w-8 flex-1" delay={0.2} duration={0.2} />

          <div className="relative flex items-stretch px-6">
            <Rail className="absolute inset-0" delay={0.38} duration={0.24} />
            <ul className="relative flex items-stretch gap-8">
              {navbar.secondary.map((item) => {
                const active = isCurrentPath(pathname, item.href);
                return (
                  <li key={item.href} className="relative flex items-center">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`rounded-sm text-sm transition-colors hover:text-ivory ${
                        active ? "text-ivory" : "text-ivory-muted"
                      } ${focusRing}`}
                    >
                      {item.label}
                    </Link>
                    {/* PÃ¡gina actual: nodo sobre la lÃ­nea, bajo el enlace. */}
                    {active && (
                      <span
                        aria-hidden
                        className="absolute top-[42px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-lime ring-4 ring-graphite"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <Rail className="relative min-w-8 flex-1" delay={0.6} duration={0.12} />
          <BranchFork topY={18} width={44} emphasis={emphasis} delay={0.7} />

          <ul className="ml-2 flex flex-col pt-1">
            {navbar.primary.map((route) => (
              <li key={route.key} className="flex h-7 items-center">
                <PrimaryLink
                  route={route}
                  active={currentBranch === route.key}
                  onHighlight={setHighlighted}
                />
              </li>
            ))}
          </ul>

          <div className="ml-8 flex items-center">
            <LanguageBadge code={site.language.code} label={site.language.label} />
          </div>
        </nav>

        {/* MÃ³vil: monograma, lÃ­nea con una bifurcaciÃ³n simplificada y menÃº. */}
        <div className="flex h-16 items-stretch lg:hidden">
          <HomeLink />
          <Rail className="relative min-w-6 flex-1" delay={0.2} duration={0.3} />
          <BranchFork topY={26} width={32} emphasis={null} delay={0.5} />
          <div className="ml-3 flex items-center">
            <button
              ref={menuButton}
              type="button"
              aria-expanded={menuOpen}
              aria-controls={MENU_ID}
              onClick={() => setMenuOpen((open) => !open)}
              className={`inline-flex h-10 items-center gap-2.5 rounded-full border border-ivory/25 px-4 text-sm font-medium ${focusRing}`}
            >
              <span aria-hidden className="relative h-3 w-4">
                <span
                  className={`absolute left-0 h-0.5 w-4 bg-lime transition-transform motion-reduce:transition-none ${
                    menuOpen ? "top-[5px] rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-4 bg-lime transition-transform motion-reduce:transition-none ${
                    menuOpen ? "top-[5px] -rotate-45" : "top-2.5"
                  }`}
                />
              </span>
              {menuOpen ? navbar.menu.close : navbar.menu.open}
            </button>
          </div>
        </div>
      </Container>

      <MobileMenu
        id={MENU_ID}
        open={menuOpen}
        pathname={pathname}
        onNavigate={() => setMenuOpen(false)}
      />
    </header>
  );
}
