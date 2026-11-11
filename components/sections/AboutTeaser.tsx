import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/home/Arrow";
import { SectionHeading } from "@/components/home/SectionHeading";
import { Monogram } from "@/components/layout/navbar/Monogram";
import { aboutTeaser } from "@/data/home";

// Foto (cuando exista en los datos) o panel con monograma. Sin foto no ocupa
// espacio en móvil y no se inventa ninguna imagen.
function AboutVisual({ photo }: { photo: typeof aboutTeaser.photo }) {
  if (photo) {
    return (
      <div className="relative max-w-sm lg:col-span-5 lg:max-w-none">
        <span aria-hidden className="absolute -right-3 -bottom-3 -z-10 h-2/3 w-2/3 bg-sand" />
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
        />
      </div>
    );
  }

  return (
    <div aria-hidden className="hidden aspect-[4/5] items-center justify-center bg-sand lg:col-span-5 lg:flex">
      <Monogram className="h-auto w-32 text-ink/25" />
    </div>
  );
}

export function AboutTeaser() {
  return (
    <section
      id={aboutTeaser.id}
      aria-labelledby={`${aboutTeaser.id}-title`}
      className="scroll-mt-20 bg-ivory text-ink"
    >
      <div className="mx-auto max-w-[86rem] px-5 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              id={aboutTeaser.id}
              kicker={aboutTeaser.eyebrow}
              title={aboutTeaser.title}
              tone="light"
            />
            <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-ink sm:text-xl">
              {aboutTeaser.text}
            </p>

            {/* Pendiente P-03: visible mientras Mateo no aporte su historia. */}
            {aboutTeaser.provisional && (
              <p
                role="note"
                className="mt-6 max-w-2xl border border-dashed border-ink/40 bg-sand px-4 py-3 text-sm text-ink"
              >
                <span className="mr-2 rounded bg-lime px-1.5 py-0.5 font-mono text-xs font-semibold tracking-widest">
                  TODO
                </span>
                {aboutTeaser.todo}
              </p>
            )}

            <Link
              href={aboutTeaser.link.href}
              className="group mt-8 inline-flex min-h-11 items-center gap-3 font-serif text-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              <span className="border-b-[1.5px] border-ink/40 pb-1 transition-colors group-hover:border-ink">
                {aboutTeaser.link.label}
              </span>
              <Arrow />
            </Link>
          </div>

          <AboutVisual photo={aboutTeaser.photo} />
        </div>
      </div>
    </section>
  );
}
