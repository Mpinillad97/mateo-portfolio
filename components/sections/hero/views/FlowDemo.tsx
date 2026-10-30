import { type FlowView } from "@/data/showcase";

// Resaltado mínimo para el fragmento de ejemplo: comentarios, palabras clave
// y llamadas. Suficiente para un texto corto y fijo.
const TOKEN = /(\/\/.*$|\b(?:async|await|function|const)\b)/;

function CodeLine({ line }: { line: string }) {
  return (
    <>
      {line.split(TOKEN).map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className={part.startsWith("//") ? "text-ivory-muted" : "text-lime"}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

// Flujo vertical entre componentes de un backend y un fragmento de código.
export function FlowDemo({ view }: { view: FlowView }) {
  return (
    <div className="flex h-full flex-col">
      <ol className="relative space-y-3 pl-6">
        <span aria-hidden className="absolute top-2 bottom-2 left-[5px] w-0.5 bg-lime/70" />
        {view.steps.map((step) => (
          <li key={step.label} className="relative flex items-baseline gap-3">
            <span
              aria-hidden
              className="absolute top-1 -left-6 h-3 w-3 rounded-full border-2 border-lime bg-graphite"
            />
            <span className="w-24 shrink-0 font-mono text-xs font-semibold tracking-wider">
              {step.label}
            </span>
            <span className="text-xs text-ivory-muted">{step.detail}</span>
          </li>
        ))}
      </ol>

      <div className="mt-auto rounded-xl border border-ivory/10 bg-ivory/[0.04] p-3.5">
        <p className="mb-2 font-mono text-[10px] tracking-widest text-ivory-muted">
          {view.fileName}
        </p>
        <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-ivory/80 sm:text-xs">
          <code>
            {view.code.map((line, i) => (
              <span key={i} className="block min-h-[1lh]">
                <CodeLine line={line} />
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
