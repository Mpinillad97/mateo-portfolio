"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";

// Enlaces del navbar. Marca la ruta actual con `aria-current="page"`;
// las subrutas (por ejemplo, /proyectos/[slug]) activan su sección.
export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="-mx-3 flex gap-1 overflow-x-auto text-sm lg:mx-0">
      {navItems.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`block whitespace-nowrap rounded-full px-3 py-1.5 transition-colors hover:bg-lime hover:text-ink focus-visible:outline-2 focus-visible:outline-lime-dark ${
                active ? "bg-ink text-ivory" : "text-ink-muted"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
