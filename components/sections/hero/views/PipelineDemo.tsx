import { type PipelineView } from "@/data/showcase";

// Recorrido de código a observabilidad en etapas, con un registro de ejemplo.
// No nombra herramientas mientras `technologies` esté vacío.
export function PipelineDemo({ view }: { view: PipelineView }) {
  return (
    <div className="flex h-full flex-col">
      <ol className="grid grid-cols-2 gap-2">
        {view.stages.map((stage, i) => (
          <li key={stage} className="rounded-xl border border-ivory/15 px-3 py-2.5">
            <span className="flex items-center gap-2 font-mono text-[10px] text-ivory-muted">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-lime" />
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="mt-1 block truncate text-sm font-medium">{stage}</span>
          </li>
        ))}
      </ol>

      <div className="mt-auto rounded-xl border border-ivory/10 bg-ivory/[0.04] p-3.5">
        <ul className="space-y-1.5 font-mono text-[11px] text-ivory/80 sm:text-xs">
          {view.log.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        {view.technologies.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {view.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-ivory/20 px-2 py-0.5 font-mono text-[10px]"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
