import { webArea } from "@/data/heroShowcase";
import { AppShell } from "./AppShell";
import { Icon } from "./icons";
import { MobileShell } from "./MobileShell";
import { IconBox, PanelLabel, Pill, ScreenHeader } from "./parts";

// Área Web: inicio de la app con accesos rápidos, proyectos de ejemplo y el
// detalle del proyecto seleccionado.

export function WebDesktop() {
  const selected = webArea.projects[webArea.selected];

  return (
    <AppShell
      active="web"
      main={
        <>
          <ScreenHeader title={webArea.greeting} subtitle={webArea.subtitle} action={webArea.cta} />
          <div className="mt-4 grid grid-cols-3 gap-2">
            {webArea.quick.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-line bg-mist-light p-3 shadow-[0_6px_16px_-12px_rgb(20_23_21/0.35)]"
              >
                <Icon name={card.icon} className="h-4 w-4" />
                <p className="mt-2.5 text-[10px] leading-tight font-semibold">{card.title}</p>
                <p className="mt-1 hidden text-[8.5px] leading-snug text-carbon-muted @[21rem]/main:block">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-4 border-b border-line text-[10px]">
            {webArea.tabs.map((tab, i) => (
              <span
                key={tab}
                className={`pb-1.5 ${i === 0 ? "border-b-2 border-carbon font-semibold" : "text-carbon-muted"}`}
              >
                {tab}
              </span>
            ))}
            <span className="ml-auto mb-1.5 flex items-center gap-1 rounded-md border border-line px-1.5 py-0.5 text-[9px] text-carbon-muted">
              {webArea.sort}
              <Icon name="chevronDown" className="h-2.5 w-2.5" />
            </span>
          </div>
          <div className="mt-2 space-y-1.5">
            {webArea.projects.map((project, i) => (
              <div
                key={project.title}
                className={`flex items-center gap-3 rounded-xl px-2.5 py-2 ${
                  i === webArea.selected ? "bg-mist-light shadow-[0_6px_18px_-12px_rgb(20_23_21/0.4)] ring-1 ring-line" : ""
                }`}
              >
                <IconBox icon={project.icon} tone={project.tone} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[10.5px] font-semibold">{project.title}</span>
                  <span className="block truncate text-[9px] text-carbon-muted">{project.text}</span>
                </span>
                <Pill tone={project.tone}>{project.status}</Pill>
                <span className="hidden text-carbon-muted @[22rem]/main:block">
                  <Icon name="more" className="h-3.5 w-3.5" />
                </span>
              </div>
            ))}
          </div>
        </>
      }
      detail={
        <>
          <PanelLabel>{webArea.detail.label}</PanelLabel>
          <p className="mt-2 text-[11.5px] leading-tight font-semibold">{selected.title}</p>
          <div className="mt-1.5">
            <Pill tone={selected.tone}>{selected.status}</Pill>
          </div>
          <p className="mt-2.5 text-[9px] leading-relaxed text-carbon-muted">
            {webArea.detail.description}
          </p>
          <p className="mt-4 text-[9.5px] font-semibold">{webArea.detail.stepsTitle}</p>
          <ul className="mt-2 space-y-1.5">
            {webArea.detail.steps.map((step) => (
              <li key={step.label} className="flex items-center gap-2 text-[9px]">
                <span
                  className={`grid h-3.5 w-3.5 place-items-center rounded-full ${
                    step.done ? "bg-carbon text-lime" : "border border-carbon/30"
                  }`}
                >
                  {step.done && <span className="text-[7px] leading-none">✓</span>}
                </span>
                <span className={step.done ? "text-carbon-muted line-through" : ""}>{step.label}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-1">
            {webArea.detail.tags.map((tag) => (
              <span key={tag} className="rounded-md border border-line px-1.5 py-0.5 text-[8.5px]">
                {tag}
              </span>
            ))}
          </div>
          <span className="mt-auto flex items-center justify-center gap-1 rounded-lg bg-carbon py-1.5 text-[9.5px] font-medium text-ivory">
            {webArea.detail.action}
            <Icon name="chevronRight" className="h-3 w-3 text-lime" />
          </span>
        </>
      }
    />
  );
}

export function WebMobile() {
  const { mobile } = webArea;

  return (
    <MobileShell active="web" title={mobile.title}>
      <p className="text-[15px] leading-tight font-semibold tracking-tight">{mobile.greeting}</p>
      <p className="mt-1 text-[8.5px] leading-snug text-carbon-muted">{mobile.subtitle}</p>
      <div className="mt-3 space-y-2">
        {mobile.tiles.map((tile) => (
          <div
            key={tile.title}
            className="flex items-center gap-2.5 rounded-xl border border-line bg-mist-light p-2.5 shadow-[0_6px_14px_-12px_rgb(20_23_21/0.4)]"
          >
            <IconBox icon={tile.icon} tone={tile.icon === "folder" ? "lime" : "neutral"} />
            <span className="min-w-0">
              <span className="block truncate text-[9.5px] font-semibold">{tile.title}</span>
              <span className="block text-[8px] text-carbon-muted">{tile.text}</span>
            </span>
          </div>
        ))}
      </div>
    </MobileShell>
  );
}
