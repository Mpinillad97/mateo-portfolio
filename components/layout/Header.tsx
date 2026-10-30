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

const MENU_ID = "menu-navegacion";
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

// Destino de una rama: etiqueta pequeña y enlace. Al pasar el cursor o
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
          ↗
        </span>
      </span>
    </Link>
  );
}

type MenuButtonProps = {
  open: boolean;
  onToggle: () => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
};

// Control que abre el panel con los enlaces secundarios (y, en móvil, también
// las dos rutas principales).
function MenuButton({ open, onToggle, buttonRef }: MenuButtonProps) {
  return (
    <button
      ref={buttonRef}
      type="button"
      aria-expanded={open}
      aria-controls={MENU_ID}
      onClick={onToggle}
      className={`inline-flex h-10 items-center gap-2.5 rounded-full border border-ivory/25 px-4 text-sm font-medium transition-colors hover:border-ivory/50 ${focusRing}`}
    >
      <span aria-hidden className="relative h-3 w-4">
        <span
          className={`absolute left-0 h-0.5 w-4 bg-lime transition-transform motion-reduce:transition-none ${
            open ? "top-[5px] rotate-45" : "top-0"
          }`}
        />
        <span
          className={`absolute left-0 h-0.5 w-4 bg-lime transition-transform motion-reduce:transition-none ${
            open ? "top-[5px] -rotate-45" : "top-2.5"
          }`}
        />
      </span>
      {open ? navbar.menu.close : navbar.menu.open}
    </button>
  );
}

// Navbar: franja grafito con una línea lima que nace en el monograma y se
// bifurca hacia los dos recorridos principales (equipos y clientes). Los
// enlaces secundarios están en el menú. La línea se dibuja una vez al cargar.
export function Header() {
  const pathname = usePathname();
  const [highlighted, setHighlighted] = useState<Branch | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const desktopButton = useRef<HTMLButtonElement>(null);
  const mobileButton = useRef<HTMLButtonElement>(null);

  const currentBranch =
    navbar.primary.find((route) => isCurrentPath(pathname, route.href))?.key ?? null;
  const emphasis = highlighted ?? currentBranch;
  const toggleMenu = () => setMenuOpen((open) => !open);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        // Devuelve el foco al botón visible (escritorio o móvil).
        const visible = [desktopButton.current, mobileButton.current].find(
          (button) => button && button.offsetParent !== null,
        );
        visible?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-graphite text-ivory">
      <Container>
        {/* Escritorio */}
        <nav aria-label="Navegación principal" className="hidden h-16 items-stretch lg:flex">
          <HomeLink />
          <Rail className="relative min-w-8 flex-1" delay={0.2} duration={0.45} />
          <BranchFork topY={18} width={44} emphasis={emphasis} delay={0.62} />

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

          <div className="ml-10 flex items-center gap-3">
            <LanguageBadge code={site.language.code} label={site.language.label} />
            <MenuButton open={menuOpen} onToggle={toggleMenu} buttonRef={desktopButton} />
          </div>
        </nav>

        {/* Móvil: monograma, línea con una bifurcación simplificada y menú. */}
        <div className="flex h-16 items-stretch lg:hidden">
          <HomeLink />
          <Rail className="relative min-w-6 flex-1" delay={0.2} duration={0.3} />
          <BranchFork topY={26} width={32} emphasis={null} delay={0.5} />
          <div className="ml-3 flex items-center">
            <MenuButton open={menuOpen} onToggle={toggleMenu} buttonRef={mobileButton} />
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
