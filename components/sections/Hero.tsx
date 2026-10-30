import Link from "next/link";
import { hero } from "@/data/site";
import { HeroShowcase } from "./hero/HeroShowcase";

const buttonBase =
  "inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl px-8 text-lg font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-deep sm:w-auto lg:h-12 lg:px-6 lg:text-base xl:h-14 xl:px-8 xl:text-lg";

// Separa el punto final del titular para pintarlo en lima.
function splitFinalDot(line: string) {
  return line.endsWith(".") ? [line.slice(0, -1), "."] : [line, ""];
}

// Hero del Home: mensaje a la izquierda y escena de producto a la derecha.
// Usa un ancho mayor que el contenedor general para dar más peso a la escena.
export function Hero() {
  const lastLine = hero.titleLines.length - 1;

  return (
    <section aria-labelledby="hero-title" className="overflow-x-clip pt-10 pb-16 sm:pt-12 lg:pt-12 lg:pb-14">
      <div className="mx-auto grid w-full max-w-[86rem] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)] lg:gap-10 lg:px-8">
        <div>
          <p className="font-mono text-xs font-medium tracking-[0.24em] text-carbon-muted sm:text-[13px]">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[2.6rem] leading-[0.98] font-semibold tracking-[-0.045em] sm:text-6xl lg:text-[2.9rem] xl:text-[4.1rem] min-[1400px]:text-[4.5rem]"
          >
            {hero.titleLines.map((line, i) => {
              const [text, dot] = i === lastLine ? splitFinalDot(line) : [line, ""];
              return (
                <span key={line} className="block">
                  {text}
                  {dot && <span className="text-lime">{dot}</span>}
                </span>
              );
            })}
          </h1>
          <p className="mt-7 max-w-[31rem] text-xl leading-relaxed text-carbon-muted sm:text-[1.375rem]">
            {hero.intro}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href={hero.teamsCta.href} className={`${buttonBase} bg-carbon text-lime hover:bg-carbon/90`}>
              {hero.teamsCta.label}
              <span aria-hidden>→</span>
            </Link>
            <Link
              href={hero.clientsCta.href}
              className={`${buttonBase} border-[1.5px] border-carbon/60 text-carbon hover:border-carbon hover:bg-mist-dark`}
            >
              {hero.clientsCta.label}
            </Link>
          </div>
        </div>

        <HeroShowcase />
      </div>
    </section>
  );
}
