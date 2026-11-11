import Link from "next/link";
import { Arrow } from "@/components/home/Arrow";
import { buttonBase, buttonIvory } from "@/components/home/buttons";
import { SectionHeading } from "@/components/home/SectionHeading";
import { ContactChannels } from "@/components/ui/ContactChannels";
import { contactClosing } from "@/data/home";

const secondaryLink =
  "inline-flex min-h-11 items-center rounded-sm border-b-[1.5px] border-white/30 font-serif text-base text-ivory transition-colors hover:border-ivory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime motion-reduce:transition-none";

// Cierre de contacto. Sin formulario (D-013): botón a /contacto y canales.
export function ContactClosing() {
  return (
    <section
      id={contactClosing.id}
      aria-labelledby={`${contactClosing.id}-title`}
      className="scroll-mt-20 bg-night bg-[radial-gradient(ellipse_at_85%_0%,rgb(22_48_78/0.45),transparent_60%)] text-ivory"
    >
      <div className="mx-auto max-w-[86rem] px-5 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              id={contactClosing.id}
              kicker={contactClosing.eyebrow}
              title={contactClosing.title}
              intro={contactClosing.text}
              tone="dark"
            />
            <Link href={contactClosing.primary.href} className={`mt-8 ${buttonBase} ${buttonIvory}`}>
              {contactClosing.primary.label}
              <Arrow />
            </Link>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-1">
              {contactClosing.secondary.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={secondaryLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ContactChannels variant="closing" label={contactClosing.channelsLabel} />
        </div>
      </div>
    </section>
  );
}
