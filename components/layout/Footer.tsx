import Link from "next/link";
import { ContactChannels } from "@/components/ui/ContactChannels";
import { footer, navbar, routes, site } from "@/data/site";
import { Monogram } from "./navbar/Monogram";

const link =
  "inline-flex min-h-11 items-center rounded-sm text-[15px] text-slate transition-colors hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime motion-reduce:transition-none";
const heading = "font-mono text-xs font-medium tracking-[0.2em] text-ivory uppercase";

// Pie global oscuro (continúa el cierre del Home). Cuatro bloques: marca,
// navegación, recorridos (punto cian = equipos, lima = clientes) y canales.
export function Footer() {
  const isPath = (href: string) => href === routes.teams || href === routes.clients;
  const paths = footer.nav.filter((item) => isPath(item.href));
  const explore = footer.nav.filter((item) => !isPath(item.href));

  return (
    <footer className="border-t border-white/10 bg-night text-slate">
      <div className="mx-auto max-w-[86rem] px-5 py-12 sm:px-10 sm:py-16 lg:px-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-x-12">
          <div className="col-span-2 lg:col-span-1">
            <Link
              href={routes.home}
              aria-label={navbar.homeLabel}
              className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
            >
              <Monogram />
            </Link>
            <p className="mt-4 font-serif text-2xl text-ivory">{site.fullName}</p>
            <p className="mt-2 max-w-xs text-[15px] leading-relaxed">
              {site.role}. {footer.tagline}.
            </p>
          </div>

          <nav aria-labelledby="footer-explore">
            <h2 id="footer-explore" className={heading}>
              Navegación
            </h2>
            <ul className="mt-3">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-paths">
            <h2 id="footer-paths" className={heading}>
              Recorridos
            </h2>
            <ul className="mt-3">
              {paths.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={`${link} gap-3`}>
                    <span
                      aria-hidden
                      className={`h-2 w-2 rounded-full ${item.href === routes.teams ? "bg-cyan" : "bg-lime"}`}
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-contact" className="col-span-2 lg:col-span-1">
            <h2 id="footer-contact" className={heading}>
              {footer.contactLabel}
            </h2>
            <ContactChannels variant="footer" />
          </section>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm">
          <p>
            © {new Date().getFullYear()} {site.fullName}
          </p>
        </div>
      </div>
    </footer>
  );
}
