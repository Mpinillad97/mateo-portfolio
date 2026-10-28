import { heroCard } from "@/data/site";

type CardFaceProps = {
  meta: string;
  children: React.ReactNode;
};

// Base común de las dos caras de la tarjeta del hero.
export function CardFace({ meta, children }: CardFaceProps) {
  return (
    <div className="flex h-full flex-col rounded-3xl bg-ink p-5 text-ivory shadow-[0_24px_60px_-28px_rgb(26_26_23/0.55)] sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3 font-mono text-[11px] tracking-widest">
        <span className="rounded-full bg-lime px-2.5 py-1 font-semibold text-ink">
          {heroCard.badge}
        </span>
        <span className="truncate text-ivory/50">{meta}</span>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
