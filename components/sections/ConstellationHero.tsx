import Link from "next/link";
import { constellationHero as hero } from "@/data/site";
import { Constellation } from "./hero/Constellation";

const buttonBase =
  "group inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl px-7 text-base font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 sm:w-auto sm:text-lg";

function Arrow() {
  return (
    <span
      aria-hidden
      className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
    >
      →
    </span>
  );
}

// Hero (prototipo): constelación interactiva de borde a borde y el mensaje en
// HTML por encima. La red se atenúa detrás del bloque de texto.
// Sube por debajo del navbar (-mt-16 pt-16) para que este sea transparente
// sobre la constelación; `data-navbar-overlay` se lo indica al Header.
export function ConstellationHero() {
  return (
    <section
      aria-labelledby="hero-title"
      data-navbar-overlay
      className="relative isolate -mt-16 flex min-h-[40rem] items-center overflow-hidden bg-night bg-[radial-gradient(ellipse_at_72%_45%,rgb(22_48_78/0.45),transparent_60%)] pt-16 text-white sm:min-h-[46rem] lg:min-h-svh"
    >
      <Constellation />

      <div className="relative mx-auto w-full max-w-[86rem] px-5 py-20 sm:px-10 lg:px-14">
        <div data-constellation-quiet className="max-w-3xl">
          <h1
            id="hero-title"
            className="text-[2.9rem] leading-[1.02] font-bold tracking-[-0.035em] text-lime sm:text-7xl lg:text-[5.25rem]"
          >
            {hero.name}
          </h1>

          <p className="mt-7 flex items-center gap-4 text-2xl font-medium tracking-tight sm:text-4xl">
            <span aria-hidden className="h-8 w-1 shrink-0 rounded-full bg-cyan sm:h-10" />
            {hero.role}
          </p>
          {/* Cada elemento lleva su separador delante; el margen negativo y el
              recorte ocultan el que queda al inicio de cada renglón. */}
          <div className="mt-4 overflow-hidden sm:ml-5">
            <ul className="-ml-6 flex flex-wrap gap-y-1 text-base text-slate sm:text-xl">
              {hero.specialties.map((item) => (
                <li key={item} className="flex items-center">
                  <span aria-hidden className="w-6 text-center">
                    ·
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:gap-5">
            <Link
              href={hero.teamsCta.href}
              className={`${buttonBase} bg-cyan text-night hover:bg-cyan-hover focus-visible:outline-cyan`}
            >
              {hero.teamsCta.label}
              <Arrow />
            </Link>
            <Link
              href={hero.clientsCta.href}
              className={`${buttonBase} border-[1.5px] border-lime text-white hover:bg-lime/10 focus-visible:outline-lime`}
            >
              {hero.clientsCta.label}
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
