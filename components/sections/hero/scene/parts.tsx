import { type Tone } from "@/data/heroShowcase";
import { Icon, type IconName } from "./icons";

// Piezas pequeñas compartidas por las vistas de la aplicación ficticia.

const toneStyles: Record<Tone, string> = {
  lime: "bg-lime/55 text-carbon",
  neutral: "bg-mist-dark text-carbon",
  outline: "border border-carbon/20 text-carbon-muted",
};

export function Pill({ tone, children, small = false }: { tone: Tone; children: React.ReactNode; small?: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full font-medium whitespace-nowrap ${
        small ? "px-1.5 py-px text-[7px]" : "px-2 py-0.5 text-[9px]"
      } ${toneStyles[tone]}`}
    >
      {children}
    </span>
  );
}

// Cabecera de una sección de la app: título, subtítulo y acción opcional.
export function ScreenHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle: string;
  action?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <p className="text-[17px] leading-tight font-semibold tracking-tight">{title}</p>
        <p className="mt-1 text-[10px] text-carbon-muted">{subtitle}</p>
      </div>
      {action && (
        <span className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-carbon px-2.5 py-1.5 text-[10px] font-medium text-ivory">
          <Icon name="plus" className="h-3 w-3" />
          {action}
        </span>
      )}
    </div>
  );
}

export function PanelLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[8px] font-semibold tracking-[0.18em] text-carbon-muted">
      {children}
    </p>
  );
}

// Icono dentro de una caja redondeada, con tono.
export function IconBox({ icon, tone = "neutral" }: { icon: IconName; tone?: Tone }) {
  const styles: Record<Tone, string> = {
    lime: "bg-lime/45 text-carbon",
    neutral: "bg-mist-dark text-carbon",
    outline: "border border-line text-carbon-muted",
  };
  return (
    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${styles[tone]}`}>
      <Icon name={icon} className="h-3.5 w-3.5" />
    </span>
  );
}

// Bloque de código pequeño (JSON de ejemplo, registros). `wrap` permite que
// las líneas largas se ajusten al ancho en lugar de cortarse.
export function CodeBlock({ lines, wrap = false }: { lines: string[]; wrap?: boolean }) {
  return (
    <pre className="overflow-hidden rounded-lg bg-graphite px-2.5 py-2 font-mono text-[8.5px] leading-relaxed text-ivory/85">
      {lines.map((line, i) => (
        <span key={i} className={`block min-h-[1lh] ${wrap ? "whitespace-pre-wrap" : "whitespace-pre"}`}>
          {line}
        </span>
      ))}
    </pre>
  );
}
