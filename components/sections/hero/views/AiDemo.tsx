import { type AiView } from "@/data/showcase";

// Flujo documento → búsqueda contextual → modelo → respuesta, con una
// pregunta y una respuesta de ejemplo.
export function AiDemo({ view }: { view: AiView }) {
  const lastStep = view.steps.length - 1;

  return (
    <div className="flex h-full flex-col">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-2.5">
        {view.steps.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span
              className={`rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide ${
                i === lastStep ? "border-lime bg-lime text-carbon" : "border-ivory/20"
              }`}
            >
              {step}
            </span>
            {i < lastStep && (
              <span aria-hidden className="text-lime">
                →
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* Documento esquemático: la línea resaltada es el contexto recuperado. */}
      <div className="mt-5 rounded-xl border border-ivory/10 bg-ivory/[0.04] p-3">
        <p className="font-mono text-[10px] tracking-wider text-ivory-muted">{view.document}</p>
        <div aria-hidden className="mt-2.5 space-y-1.5">
          <span className="block h-1.5 w-11/12 rounded-full bg-ivory/15" />
          <span className="block h-1.5 w-4/5 rounded-full bg-lime" />
          <span className="block h-1.5 w-2/3 rounded-full bg-ivory/15" />
        </div>
      </div>

      <div className="mt-auto space-y-3 pt-4">
        <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-ivory/10 px-4 py-2.5 text-sm">
          {view.question}
        </p>
        <div className="max-w-[92%] rounded-2xl rounded-bl-sm border-l-2 border-lime bg-ivory/[0.04] px-4 py-3">
          <p className="text-sm leading-relaxed">{view.answer}</p>
          <p className="mt-2 font-mono text-[10px] tracking-wider text-ivory-muted">{view.source}</p>
        </div>
      </div>
    </div>
  );
}
