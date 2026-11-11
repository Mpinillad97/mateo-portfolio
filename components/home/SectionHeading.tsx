type SectionHeadingProps = {
  // El H2 recibe el id `${id}-title`, que la sección usa en aria-labelledby.
  id: string;
  kicker: string;
  title: string;
  intro?: string;
  tone: "light" | "dark";
};

// Cabecera de sección del Home: kicker, H2 serif e introducción opcional.
export function SectionHeading({ id, kicker, title, intro, tone }: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <>
      <p className="flex items-center gap-3.5 font-serif text-lg sm:text-xl">
        <span aria-hidden className="h-6 w-0.5 bg-lime" />
        {kicker}
      </p>
      <h2
        id={`${id}-title`}
        className={`mt-3 font-serif text-[2rem] leading-tight tracking-tight sm:text-5xl ${dark ? "text-ivory" : "text-ink"}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 max-w-2xl font-serif text-base leading-relaxed sm:text-[1.0625rem] ${dark ? "text-slate" : "text-ink-muted"}`}
        >
          {intro}
        </p>
      )}
    </>
  );
}
