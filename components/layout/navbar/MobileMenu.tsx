import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LanguageBadge } from "@/components/ui/LanguageBadge";
import { isCurrentPath, navbar, site } from "@/data/site";

type MobileMenuProps = {
  id: string;
  open: boolean;
  pathname: string;
  onNavigate: () => void;
};

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime";

// Menú desplegable en móvil. Las dos rutas principales cuelgan de una línea
// vertical que se bifurca; la geometría del SVG depende de que cada opción
// mida 64 px (h-16) con 12 px de separación (space-y-3).
export function MobileMenu({ id, open, pathname, onNavigate }: MobileMenuProps) {
  return (
    <div id={id} hidden={!open} className="border-t border-ivory/10 lg:hidden">
      <Container className="py-6">
        <nav aria-label={navbar.menu.label}>
          <div className="relative pl-8">
            <svg
              aria-hidden
              viewBox="0 0 28 140"
              width={28}
              height={140}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="absolute top-0 left-0 text-lime"
            >
              <path d="M6 0 V96 Q6 108 18 108" />
              <path d="M6 20 Q6 32 18 32" />
              <circle cx={22} cy={32} r={3} fill="currentColor" stroke="none" />
              <circle cx={22} cy={108} r={3} fill="currentColor" stroke="none" />
            </svg>
            <ul className="space-y-3">
              {navbar.primary.map((route) => {
                const active = isCurrentPath(pathname, route.href);
                return (
                  <li key={route.key}>
                    <Link
                      href={route.href}
                      onClick={onNavigate}
                      aria-current={active ? "page" : undefined}
                      className={`flex h-16 items-center justify-between rounded-2xl border px-4 transition-colors hover:border-lime ${
                        active ? "border-lime" : "border-ivory/20"
                      } ${focusRing}`}
                    >
                      <span className="flex flex-col">
                        <span className="font-mono text-[10px] tracking-[0.2em] text-ivory-muted">
                          {route.label}
                        </span>
                        <span className="font-medium">{route.text}</span>
                      </span>
                      <span aria-hidden className="text-lg text-lime">
                        ↗
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <ul className="mt-6 border-t border-ivory/10 pt-2">
            {navbar.secondary.map((item) => {
              const active = isCurrentPath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-3 rounded-sm py-3 transition-colors hover:text-ivory ${
                      active ? "text-ivory" : "text-ivory-muted"
                    } ${focusRing}`}
                  >
                    {item.label}
                    {active && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-lime" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4">
            <LanguageBadge code={site.language.code} label={site.language.label} />
          </div>
        </nav>
      </Container>
    </div>
  );
}
