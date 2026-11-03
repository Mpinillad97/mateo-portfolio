"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isCurrentPath, navbar, routes } from "@/data/site";
import { Monogram } from "./navbar/Monogram";

// Alto del navbar (h-16). El hero que va debajo compensa con -mt-16 pt-16.
const HEADER_HEIGHT = 64;
const focusRing = "rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime";

// Indica si el navbar está sobre un hero oscuro (marcado con
// `data-navbar-overlay`). Se guarda junto a la ruta para que, al navegar, el
// valor de la página anterior no se aplique a la nueva.
function useOverHero(pathname: string) {
  const [state, setState] = useState({ pathname, over: pathname === routes.home });

  useEffect(() => {
    const hero = document.querySelector("[data-navbar-overlay]");
    if (!hero) return;
    // El hero deja de contar cuando su borde inferior sube por encima del navbar.
    const observer = new IntersectionObserver(
      ([entry]) => setState({ pathname, over: entry.isIntersecting }),
      { rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px` },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  // Antes de medir (render del servidor o recién navegado), solo el Home tiene hero oscuro.
  return state.pathname === pathname ? state.over : pathname === routes.home;
}

// Navbar fijo arriba: monograma a la izquierda y enlaces a la derecha, con la
// misma distribución en escritorio y móvil. Sobre el hero es transparente;
// fuera de él aparece un fondo azul noche translúcido con borde y sombra.
export function Header() {
  const pathname = usePathname();
  const transparent = useOverHero(pathname);

  return (
    <header
      className={`sticky top-0 z-50 h-16 border-b text-ivory transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out motion-reduce:transition-none ${
        transparent
          ? "border-transparent bg-transparent"
          : "border-white/10 bg-night/90 shadow-[0_10px_30px_-14px_rgb(0_0_0/0.65)] backdrop-blur-md"
      }`}
    >
      <nav
        aria-label={navbar.label}
        className="mx-auto flex h-full w-full max-w-[86rem] items-center justify-between px-5 sm:px-10 lg:px-14"
      >
        <Link href={routes.home} aria-label={navbar.homeLabel} className={`shrink-0 ${focusRing}`}>
          <Monogram />
        </Link>

        <ul className="flex items-center gap-6 sm:gap-10">
          {navbar.links.map((link) => {
            const active = isCurrentPath(pathname, link.href);
            const tone = link.accent
              ? "text-lime hover:text-lime-hover"
              : active
                ? "text-ivory"
                : "text-ivory/75 hover:text-ivory";
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative block py-2 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-lime after:transition-transform after:duration-200 motion-reduce:after:transition-none sm:text-[15px] ${
                    active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                  } ${tone} ${focusRing}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
