import { type AreaId, appShell } from "@/data/heroShowcase";
import { Icon } from "./icons";

type MobileShellProps = {
  active: AreaId;
  title: string;
  children: React.ReactNode;
};

// Estructura móvil de la app ficticia: barra de estado, título, contenido y
// barra de pestañas inferior. Desde md el teléfono queda parcialmente detrás
// del navegador, así que el contenido deja un margen izquierdo mayor (md:pl-*)
// para que no quede oculto.
export function MobileShell({ active, title, children }: MobileShellProps) {
  return (
    <div className="flex h-full flex-col bg-mist-light text-carbon">
      <div className="flex items-center justify-between px-5 pt-[7px] text-[8px] font-semibold md:pl-11">
        <span>9:41</span>
        <span className="flex items-center gap-0.5">
          <span className="h-1.5 w-0.5 rounded-sm bg-carbon" />
          <span className="h-2 w-0.5 rounded-sm bg-carbon" />
          <span className="h-2.5 w-0.5 rounded-sm bg-carbon" />
          <span className="ml-1 h-2 w-3.5 rounded-[2px] border border-carbon" />
        </span>
      </div>
      <div className="flex items-center justify-between px-4 pt-5 md:pl-10">
        <span className="text-[13px] font-semibold tracking-tight">{title}</span>
        <span className="grid h-6 w-6 place-items-center rounded-lg bg-mist-dark">
          <Icon name="more" className="h-3.5 w-3.5" />
        </span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden px-4 pt-3 md:pl-10">{children}</div>
      <div className="grid grid-cols-4 border-t border-line bg-mist-light px-2 pt-2 pb-3 md:pl-8">
        {appShell.mobileTabs.map((tab) => (
          <span
            key={tab.label}
            className={`flex flex-col items-center gap-0.5 rounded-lg py-1 text-[7px] ${
              tab.area === active ? "bg-lime/50 font-semibold text-carbon" : "text-carbon-muted"
            }`}
          >
            <Icon name={tab.icon} className="h-3.5 w-3.5" />
            {tab.label}
          </span>
        ))}
      </div>
    </div>
  );
}
