import {
  type ContactChannel,
  type ContactChannelId,
  contactChannels,
  provisionalLabel,
} from "@/data/contact";
import { ChannelIcon } from "./ChannelIcon";

type Variant = "closing" | "footer" | "card";

type ContactChannelsProps = {
  // Si se omite, se muestran todos los canales.
  ids?: ContactChannelId[];
  variant: Variant;
  label?: string;
};

const focusDark =
  "focus-visible:outline-2 focus-visible:outline-lime motion-reduce:transition-none";

// Cada variante define el contenedor de la lista y el estilo de cada fila.
const styles: Record<Variant, { list: string; row: string; icon: string; label: string; value: string; mark: string }> = {
  closing: {
    list: "divide-y divide-white/10 border-y border-white/10",
    row: `group flex min-h-14 items-center gap-4 px-2 py-3 transition-colors hover:bg-white/5 active:bg-white/10 focus-visible:-outline-offset-2 ${focusDark}`,
    icon: "h-5 w-5 shrink-0 text-slate group-hover:text-ivory",
    label: "text-base font-semibold text-ivory",
    value: "ml-auto min-w-0 text-sm text-slate [overflow-wrap:anywhere]",
    mark: "rounded-md border border-dashed border-slate/60 px-2 py-0.5 font-mono text-xs text-slate",
  },
  footer: {
    list: "mt-3",
    row: `group inline-flex min-h-11 items-center gap-3 rounded-sm text-[15px] text-slate transition-colors hover:text-ivory focus-visible:outline-offset-4 ${focusDark}`,
    icon: "h-5 w-5 shrink-0",
    label: "",
    value: "sr-only",
    mark: "rounded-md border border-dashed border-slate/60 px-2 py-0.5 font-mono text-xs",
  },
  card: {
    list: "space-y-1",
    row: "group flex min-h-11 items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-deep motion-reduce:transition-none",
    icon: "h-5 w-5 shrink-0 text-carbon-muted",
    label: "text-sm font-semibold",
    value: "min-w-0 text-sm text-carbon-muted group-hover:text-carbon [overflow-wrap:anywhere]",
    mark: "rounded-md border border-dashed border-carbon/40 px-2 py-0.5 font-mono text-xs text-carbon-muted",
  },
};

function Row({ channel, variant }: { channel: ContactChannel; variant: Variant }) {
  const s = styles[variant];
  const content = (
    <>
      <ChannelIcon name={channel.id} className={s.icon} />
      {s.label ? <span className={s.label}>{channel.label}</span> : channel.label}
      <span className={s.value}>{channel.value}</span>
    </>
  );

  // Los valores ficticios no son enlaces: evitan escribir a un tercero o abrir un 404.
  if (channel.provisional) {
    // flex-wrap: en móvil la marca baja de línea en vez de desbordar la página.
    const plain = variant === "closing" ? "flex min-h-14 flex-wrap items-center gap-x-4 gap-y-1 px-2 py-3 lg:flex-nowrap" : variant === "footer" ? "inline-flex min-h-11 flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-slate" : "flex min-h-11 flex-wrap items-center gap-x-3 gap-y-1";
    return (
      <div className={plain}>
        {content}
        <span className={`${variant === "closing" ? "" : "ml-1 "}shrink-0 ${s.mark}`}>{provisionalLabel}</span>
      </div>
    );
  }

  return (
    <a
      href={channel.href}
      {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={s.row}
    >
      {content}
      {variant === "closing" && channel.external && (
        <span aria-hidden className="text-slate">
          ↗
        </span>
      )}
      {channel.external && <span className="sr-only">(se abre en una pestaña nueva)</span>}
    </a>
  );
}

// Lista de canales de contacto compartida por el cierre del Home, el pie de
// página y /contacto. Respeta la marca `provisional` de data/contact.ts.
export function ContactChannels({ ids, variant, label }: ContactChannelsProps) {
  const channels = ids
    ? ids.flatMap((id) => contactChannels.filter((channel) => channel.id === id))
    : contactChannels;

  return (
    <ul aria-label={label} className={styles[variant].list}>
      {channels.map((channel) => (
        <li key={channel.id}>
          <Row channel={channel} variant={variant} />
        </li>
      ))}
    </ul>
  );
}
