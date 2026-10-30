import { cloudArea } from "@/data/heroShowcase";
import { AppShell } from "./AppShell";
import { Icon } from "./icons";
import { MobileShell } from "./MobileShell";
import { CodeBlock, PanelLabel, Pill, ScreenHeader } from "./parts";

// Área Cloud: recorrido de código a observabilidad, despliegues de ejemplo,
// entornos y registro. No nombra herramientas concretas.

export function CloudDesktop() {
  const lastStage = cloudArea.pipeline.length - 1;

  return (
    <AppShell
      active="cloud"
      main={
        <>
          <ScreenHeader title={cloudArea.title} subtitle={cloudArea.subtitle} action={cloudArea.cta} />
          <div className="mt-4 flex items-start rounded-xl border border-line bg-mist/40 px-3 py-3">
            {cloudArea.pipeline.map((stage, i) => (
              <div key={stage.label} className="flex min-w-0 flex-1 items-start last:flex-none">
                <span className="flex flex-col items-center gap-1">
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-full ${
                      i === lastStage ? "border-2 border-carbon bg-mist-light" : "bg-carbon text-lime"
                    }`}
                  >
                    <Icon name={stage.icon} className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[8.5px] font-medium whitespace-nowrap">{stage.label}</span>
                </span>
                {i < lastStage && <span className="mx-1.5 mt-4 h-0.5 min-w-3 flex-1 rounded-full bg-carbon" />}
              </div>
            ))}
          </div>
          <p className="mt-5 text-[10px] font-semibold">{cloudArea.deploymentsTitle}</p>
          <div className="mt-2 space-y-1.5">
            {cloudArea.deployments.map((deployment) => (
              <div
                key={deployment.title}
                className="flex items-center gap-3 rounded-xl border border-line bg-mist-light px-3 py-2"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-mist-dark">
                  <Icon name="cloudUp" className="h-3.5 w-3.5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[10px] font-semibold">{deployment.title}</span>
                  <span className="block text-[8.5px] text-carbon-muted">{deployment.env}</span>
                </span>
                <Pill tone={deployment.tone}>{deployment.status}</Pill>
              </div>
            ))}
          </div>
        </>
      }
      detail={
        <>
          <PanelLabel>{cloudArea.detail.environmentsTitle.toUpperCase()}</PanelLabel>
          <div className="mt-2 space-y-1.5">
            {cloudArea.detail.environments.map((env) => (
              <div
                key={env.name}
                className="flex items-center justify-between rounded-lg border border-line bg-mist-light px-2 py-1.5 text-[9px]"
              >
                <span className="font-medium">{env.name}</span>
                <span className="flex items-center gap-1 text-carbon-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-deep" />
                  {env.status}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <PanelLabel>{cloudArea.detail.label}</PanelLabel>
          </div>
          <div className="mt-2">
            <CodeBlock lines={cloudArea.detail.log} wrap />
          </div>
        </>
      }
    />
  );
}

export function CloudMobile() {
  const lastStage = cloudArea.pipeline.length - 1;

  return (
    <MobileShell active="cloud" title={cloudArea.mobile.title}>
      <ol className="relative space-y-2.5 pl-1">
        {cloudArea.pipeline.map((stage, i) => (
          <li key={stage.label} className="flex items-center gap-2.5">
            <span
              className={`grid h-6 w-6 place-items-center rounded-full ${
                i === lastStage ? "border-2 border-carbon" : "bg-carbon text-lime"
              }`}
            >
              <Icon name={stage.icon} className="h-3 w-3" />
            </span>
            <span className="text-[9.5px] font-semibold">{stage.label}</span>
          </li>
        ))}
      </ol>
      <div className="mt-3 space-y-1.5">
        {cloudArea.deployments.slice(0, 2).map((deployment) => (
          <div key={deployment.title} className="rounded-xl border border-line bg-mist-light px-2.5 py-2">
            <span className="block truncate text-[8.5px] font-semibold">{deployment.title}</span>
            <span className="mt-1 flex items-center justify-between gap-1">
              <span className="text-[7.5px] text-carbon-muted">{deployment.env}</span>
              <Pill tone={deployment.tone} small>
                {deployment.status}
              </Pill>
            </span>
          </div>
        ))}
      </div>
    </MobileShell>
  );
}
