import { heroCard } from "@/data/site";
import { CardFace } from "./CardFace";

// Visualización del valor que devolvería `build()` en el fragmento de ejemplo.
export function ResultPreview() {
  const { result } = heroCard;

  return (
    <CardFace meta={heroCard.controls.result.toUpperCase()}>
      <div className="flex h-full flex-col">
        <p className="font-mono text-[12px] text-ivory-muted sm:text-[13px]">
          <span className="text-lime">→</span> {result.title}
        </p>

        <div aria-hidden className="mt-5 grid grid-cols-3 gap-1.5">
          {result.steps.map((step) => (
            <span key={step} className="h-1.5 rounded-full bg-lime" />
          ))}
        </div>

        <ol className="mt-5 space-y-2.5">
          {result.steps.map((step, i) => (
            <li
              key={step}
              className="flex items-center gap-4 rounded-xl border border-ivory/10 px-4 py-3"
            >
              <span className="font-mono text-xs text-ivory-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-medium">{step}</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-lime">
                <span aria-hidden>✓</span>
                {result.status}
              </span>
            </li>
          ))}
        </ol>

        <p className="mt-auto pt-5 text-xs text-ivory-muted">{result.note}</p>
      </div>
    </CardFace>
  );
}
