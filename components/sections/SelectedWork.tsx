import Link from "next/link";
import { Arrow } from "@/components/home/Arrow";
import { buttonBase, buttonInkOutline } from "@/components/home/buttons";
import { SectionHeading } from "@/components/home/SectionHeading";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { featuredWork } from "@/data/home";
import { featuredProjects } from "@/data/projects";

// Filas alternas 7/5 y 5/7 en escritorio para evitar una rejilla monótona.
const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

// Proyectos destacados: los casos marcados con `featured` en data/projects.ts.
export function SelectedWork() {
  return (
    <section
      id={featuredWork.id}
      aria-labelledby={`${featuredWork.id}-title`}
      className="scroll-mt-20 border-t border-ink/10 bg-paper text-ink"
    >
      <div className="mx-auto max-w-[86rem] px-5 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
        <SectionHeading
          id={featuredWork.id}
          kicker={featuredWork.eyebrow}
          title={featuredWork.title}
          intro={featuredWork.intro}
          tone="light"
        />

        {featuredProjects.length === 0 ? (
          <p className="mt-10 border border-dashed border-ink/30 p-8 font-serif text-ink-muted sm:mt-12">
            {featuredWork.empty}
          </p>
        ) : (
          <ul className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-12 lg:gap-8">
            {featuredProjects.slice(0, 4).map((project, i) => (
              <li key={project.slug} className={spans[i]}>
                <FeaturedProjectCard project={project} index={i} />
              </li>
            ))}
          </ul>
        )}

        <Link href={featuredWork.link.href} className={`mt-10 sm:mt-12 ${buttonBase} ${buttonInkOutline}`}>
          {featuredWork.link.label}
          <Arrow />
        </Link>
      </div>
    </section>
  );
}
