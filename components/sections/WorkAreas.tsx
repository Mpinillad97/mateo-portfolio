import { SectionHeading } from "@/components/home/SectionHeading";
import { type Area, workAreas } from "@/data/areas";
import { workAreasSection } from "@/data/home";

// Iconos de línea decorativos, distintos de los del selector (layers y code).
function AreaIcon({ name }: { name: Area["icon"] }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinejoin="round"
      strokeLinecap="round"
      className="mt-5 h-12 w-12 text-ink sm:h-14 sm:w-14"
    >
      {name === "stack" && (
        <>
          <rect x="8" y="8" width="48" height="22" rx="3" />
          <path d="M8 17h48" />
          <ellipse cx="32" cy="44" rx="16" ry="5" />
          <path d="M16 44v10c0 2.8 7.2 5 16 5s16-2.2 16-5V44" />
        </>
      )}
      {name === "flow" && (
        <>
          <circle cx="14" cy="32" r="6" />
          <circle cx="50" cy="16" r="6" />
          <circle cx="50" cy="48" r="6" />
          <path d="m20 30 24-12M20 34l24 12" />
        </>
      )}
      {name === "cloud" && (
        <>
          <path d="M18 46a10 10 0 0 1-1-19.9 14 14 0 0 1 27.2-2.6A11.5 11.5 0 0 1 46 46z" />
          <path d="M32 40V28M26 33l6-5 6 5" />
        </>
      )}
    </svg>
  );
}

// Áreas de trabajo: tres columnas con filetes, sin hover ni enlaces porque no
// son clicables.
export function WorkAreas() {
  return (
    <section
      id={workAreasSection.id}
      aria-labelledby={`${workAreasSection.id}-title`}
      className="scroll-mt-20 bg-sand text-ink"
    >
      <div className="mx-auto max-w-[86rem] px-5 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
        <SectionHeading
          id={workAreasSection.id}
          kicker={workAreasSection.eyebrow}
          title={workAreasSection.title}
          intro={workAreasSection.intro}
          tone="light"
        />

        <ul className="mt-10 grid sm:mt-12 lg:grid-cols-3">
          {workAreas.map((area, i) => (
            <li
              key={area.id}
              className="border-t border-ink/20 py-8 first:border-t-0 first:pt-0 last:pb-0 lg:border-t-0 lg:border-l lg:px-8 lg:py-0 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
            >
              <article aria-labelledby={`${area.id}-title`}>
                <p aria-hidden className="font-mono text-xs font-medium tracking-[0.2em] text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <AreaIcon name={area.icon} />
                <h3
                  id={`${area.id}-title`}
                  className="mt-5 font-serif text-[1.75rem] leading-tight tracking-tight sm:text-3xl"
                >
                  {area.title}
                </h3>
                <p className="mt-3 font-serif text-base leading-relaxed text-ink-muted sm:text-[1.0625rem]">
                  {area.description}
                </p>
                <ul aria-label="Tecnologías" className="mt-6 flex flex-wrap gap-2">
                  {area.stack.map((tech) => (
                    <li key={tech} className="rounded-md border border-ink/30 px-2.5 py-1 font-mono text-xs text-ink">
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
