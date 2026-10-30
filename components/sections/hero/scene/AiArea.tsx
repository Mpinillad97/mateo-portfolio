import { aiArea } from "@/data/heroShowcase";
import { AppShell } from "./AppShell";
import { Icon } from "./icons";
import { MobileShell } from "./MobileShell";
import { PanelLabel, ScreenHeader } from "./parts";

// Área IA: asistente que responde a partir de documentos, con el flujo
// documento → búsqueda contextual → modelo → respuesta y el contexto usado.

function Flow({ small = false }: { small?: boolean }) {
  const last = aiArea.flow.length - 1;
  return (
    <div className={`flex flex-wrap items-center ${small ? "gap-1" : "gap-1.5"}`}>
      {aiArea.flow.map((step, i) => (
        <span key={step} className="flex items-center gap-1.5">
          <span
            className={`rounded-full whitespace-nowrap ${small ? "px-1.5 py-0.5 text-[7px]" : "px-2 py-0.5 text-[8.5px]"} ${
              i === last ? "bg-lime/60 font-semibold" : "border border-line bg-mist-light"
            }`}
          >
            {step}
          </span>
          {i < last && <span className="text-[8px] text-carbon-muted">→</span>}
        </span>
      ))}
    </div>
  );
}

export function AiDesktop() {
  return (
    <AppShell
      active="ai"
      main={
        <div className="flex h-full flex-col">
          <ScreenHeader title={aiArea.title} subtitle={aiArea.subtitle} />
          <div className="mt-3">
            <Flow />
          </div>
          <div className="mt-4 space-y-3">
            <p className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-carbon px-3 py-2 text-[10px] text-ivory">
              {aiArea.question}
            </p>
            <div className="flex max-w-[90%] gap-2">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-lime/55">
                <Icon name="sparkle" className="h-3 w-3" />
              </span>
              <div className="rounded-2xl rounded-tl-md border border-line bg-mist-light px-3 py-2">
                <p className="text-[10px] leading-relaxed">{aiArea.answer}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {aiArea.sources.map((source) => (
                    <span
                      key={source}
                      className="flex items-center gap-1 rounded-md bg-mist px-1.5 py-0.5 text-[8px] text-carbon-muted"
                    >
                      <Icon name="file" className="h-2.5 w-2.5" />
                      {source}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-auto flex items-center gap-2 rounded-xl border border-line bg-mist-light px-3 py-2 text-[9.5px] text-carbon-muted">
            <span className="flex-1 truncate">{aiArea.input}</span>
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-carbon text-lime">
              <Icon name="send" className="h-3 w-3" />
            </span>
          </div>
        </div>
      }
      detail={
        <>
          <PanelLabel>{aiArea.detail.label}</PanelLabel>
          <div className="mt-3 space-y-2">
            {aiArea.detail.snippets.map((snippet, i) => (
              <div key={snippet} className="rounded-lg border border-line bg-mist-light p-2">
                <span className="flex items-center gap-1 text-[8.5px] font-semibold">
                  <Icon name="file" className="h-3 w-3" />
                  {snippet}
                </span>
                <span className="mt-1.5 block h-1 w-full rounded-full bg-carbon/10" />
                <span
                  className={`mt-1 block h-1 rounded-full ${i === 0 ? "w-4/5 bg-lime" : "w-3/5 bg-carbon/10"}`}
                />
                <span className="mt-1 block h-1 w-2/3 rounded-full bg-carbon/10" />
              </div>
            ))}
          </div>
          <p className="mt-3 text-[8.5px] leading-snug text-carbon-muted">{aiArea.detail.note}</p>
        </>
      }
    />
  );
}

export function AiMobile() {
  return (
    <MobileShell active="ai" title={aiArea.mobile.title}>
      <div className="flex h-full flex-col pb-3">
        <Flow small />
        <p className="mt-3 ml-auto max-w-[85%] rounded-xl rounded-br-sm bg-carbon px-2.5 py-1.5 text-[8.5px] text-ivory">
          {aiArea.question}
        </p>
        <div className="mt-2 rounded-xl rounded-tl-sm border border-line bg-mist-light px-2.5 py-2">
          <p className="text-[8.5px] leading-relaxed">{aiArea.answer}</p>
          <span className="mt-1.5 flex items-center gap-1 text-[7px] text-carbon-muted">
            <Icon name="file" className="h-2.5 w-2.5" />
            {aiArea.sources[0]}
          </span>
        </div>
        <div className="mt-auto flex items-center gap-1.5 rounded-xl border border-line bg-mist-light px-2 py-1.5 text-[8px] text-carbon-muted">
          <span className="flex-1 truncate">{aiArea.input}</span>
          <span className="grid h-5 w-5 place-items-center rounded-md bg-carbon text-lime">
            <Icon name="send" className="h-2.5 w-2.5" />
          </span>
        </div>
      </div>
    </MobileShell>
  );
}
