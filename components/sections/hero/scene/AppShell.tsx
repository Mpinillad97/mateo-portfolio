import { type AreaId, appShell } from "@/data/heroShowcase";
import { Icon } from "./icons";

type AppShellProps = {
  active: AreaId;
  main: React.ReactNode;
  detail?: React.ReactNode;
};

// Estructura de escritorio de la app ficticia: navegación lateral, barra
// superior, contenido central y panel de detalle. La navegación lateral y el
// panel aparecen según el ancho del marco (container queries).
export function AppShell({ active, main, detail }: AppShellProps) {
  return (
    <div className="@container flex h-full bg-mist-light text-carbon">
      <aside className="hidden w-[8rem] shrink-0 flex-col border-r border-line bg-mist/55 px-2.5 py-4 @[32rem]:flex">
        <div className="flex items-center gap-2 px-1.5">
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-carbon">
            <span className="h-2 w-2 rounded-[3px] bg-lime" />
          </span>
          <span className="text-[10.5px] leading-tight font-semibold">{appShell.workspace}</span>
        </div>
        <div className="mt-5 space-y-0.5">
          {appShell.nav.map((item) => (
            <span
              key={item.label}
              className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[10.5px] ${
                item.area === active ? "bg-lime/50 font-medium text-carbon" : "text-carbon-muted"
              }`}
            >
              <Icon name={item.icon} className="h-3.5 w-3.5" />
              {item.label}
            </span>
          ))}
        </div>
        <div className="mt-auto space-y-0.5 border-t border-line pt-3">
          {appShell.secondaryNav.map((item) => (
            <span
              key={item.label}
              className="flex items-center gap-2 px-2 py-1.5 text-[10.5px] text-carbon-muted"
            >
              <Icon name={item.icon} className="h-3.5 w-3.5" />
              {item.label}
            </span>
          ))}
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-3 border-b border-line/70 px-5 py-3">
          <span className="flex min-w-0 max-w-[16rem] flex-1 items-center gap-2 rounded-lg border border-line bg-mist/50 px-2.5 py-1.5 text-[9.5px] text-carbon-muted">
            <Icon name="search" className="h-3 w-3" />
            <span className="truncate">{appShell.search}</span>
          </span>
          <span className="ml-auto text-carbon-muted">
            <Icon name="bell" className="h-4 w-4" />
          </span>
        </div>
        <div className="flex min-h-0 flex-1">
          {/* Contenedor propio para que el contenido central se adapte a su ancho. */}
          <div className="@container/main min-w-0 flex-1 overflow-hidden px-5 pt-4 pb-5">{main}</div>
          {detail && (
            <aside className="hidden w-[10.75rem] shrink-0 flex-col border-l border-line bg-mist/40 p-4 @[37rem]:flex">
              {detail}
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
