import { backendArea } from "@/data/heroShowcase";
import { AppShell } from "./AppShell";
import { Icon } from "./icons";
import { MobileShell } from "./MobileShell";
import { CodeBlock, PanelLabel, Pill, ScreenHeader } from "./parts";

// Área Backend: flujo entre componentes, endpoints de ejemplo y una petición
// con su respuesta.

const methodStyles: Record<string, string> = {
  GET: "bg-mist-dark text-carbon",
  POST: "bg-lime/55 text-carbon",
  PUT: "border border-carbon/25 text-carbon",
};

function Method({ method }: { method: string }) {
  return (
    <span
      className={`w-9 shrink-0 rounded-md py-0.5 text-center font-mono text-[8px] font-semibold ${
        methodStyles[method] ?? methodStyles.GET
      }`}
    >
      {method}
    </span>
  );
}

export function BackendDesktop() {
  const selected = backendArea.endpoints[backendArea.selected];

  return (
    <AppShell
      active="backend"
      main={
        <>
          <ScreenHeader title={backendArea.title} subtitle={backendArea.subtitle} action={backendArea.cta} />
          <div className="mt-4 flex items-center rounded-xl border border-line bg-mist/40 px-3 py-3">
            {backendArea.flow.map((node, i) => (
              <div key={node.label} className="flex min-w-0 flex-1 items-center last:flex-none">
                <span className="flex flex-col items-center gap-1">
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-lg ${
                      i === 0 ? "bg-carbon text-lime" : "border border-line bg-mist-light"
                    }`}
                  >
                    <Icon name={node.icon} className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[8.5px] font-medium whitespace-nowrap">{node.label}</span>
                </span>
                {i < backendArea.flow.length - 1 && (
                  <span className="mx-1.5 mb-3.5 h-px min-w-3 flex-1 bg-carbon/30" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-5 text-[10px] font-semibold">{backendArea.endpointsTitle}</p>
          <div className="mt-2 overflow-hidden rounded-xl border border-line">
            {backendArea.endpoints.map((endpoint, i) => (
              <div
                key={`${endpoint.method} ${endpoint.path}`}
                className={`flex items-center gap-2.5 border-b border-line px-3 py-2 last:border-b-0 ${
                  i === backendArea.selected ? "bg-mist/70" : "bg-mist-light"
                }`}
              >
                <Method method={endpoint.method} />
                <span className="min-w-0 flex-1 truncate font-mono text-[9.5px]">{endpoint.path}</span>
                <Pill tone={endpoint.tone}>{endpoint.status}</Pill>
              </div>
            ))}
          </div>
        </>
      }
      detail={
        <>
          <PanelLabel>{backendArea.detail.label}</PanelLabel>
          <div className="mt-2 flex items-center gap-1.5">
            <Method method={selected.method} />
            <span className="truncate font-mono text-[9px] font-semibold">{selected.path}</span>
          </div>
          <p className="mt-4 text-[9px] font-semibold">{backendArea.detail.requestTitle}</p>
          <div className="mt-1.5">
            <CodeBlock lines={backendArea.detail.request} />
          </div>
          <p className="mt-3 text-[9px] font-semibold">{backendArea.detail.responseTitle}</p>
          <div className="mt-1.5">
            <CodeBlock lines={backendArea.detail.response} />
          </div>
        </>
      }
    />
  );
}

export function BackendMobile() {
  return (
    <MobileShell active="backend" title={backendArea.mobile.title}>
      <div className="flex items-center justify-between rounded-xl border border-line bg-mist/40 px-2 py-2.5">
        {backendArea.flow.map((node, i) => (
          <span key={node.label} className="flex items-center">
            <span
              className={`grid h-6 w-6 place-items-center rounded-md ${
                i === 0 ? "bg-carbon text-lime" : "border border-line bg-mist-light"
              }`}
            >
              <Icon name={node.icon} className="h-3 w-3" />
            </span>
            {i < backendArea.flow.length - 1 && <span className="mx-1 h-px w-2.5 bg-carbon/30" />}
          </span>
        ))}
      </div>
      <div className="mt-3 space-y-1.5">
        {backendArea.endpoints.map((endpoint) => (
          <div
            key={`${endpoint.method} ${endpoint.path}`}
            className="rounded-xl border border-line bg-mist-light px-2.5 py-2"
          >
            <div className="flex items-center gap-1.5">
              <Method method={endpoint.method} />
              <span className="truncate font-mono text-[8px]">{endpoint.path}</span>
            </div>
            <div className="mt-1.5">
              <Pill tone={endpoint.tone} small>
                {endpoint.status}
              </Pill>
            </div>
          </div>
        ))}
      </div>
    </MobileShell>
  );
}
