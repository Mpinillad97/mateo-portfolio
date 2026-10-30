import { type WebView } from "@/data/showcase";

// Navegador simplificado con una página de demostración en tonos claros.
export function WebDemo({ view }: { view: WebView }) {
  const { page } = view;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-mist-light text-carbon">
      <div className="flex items-center gap-3 bg-mist-dark px-3 py-2">
        <span aria-hidden className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-carbon/25" />
          <span className="h-2 w-2 rounded-full bg-carbon/25" />
          <span className="h-2 w-2 rounded-full bg-carbon/25" />
        </span>
        <span className="flex-1 truncate rounded-full bg-mist-light px-3 py-0.5 font-mono text-[10px] text-carbon-muted">
          {page.url}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold tracking-tight">{page.brand}</span>
          <span className="flex gap-3 text-[11px] text-carbon-muted">
            {page.nav.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </span>
        </div>

        <p className="mt-6 text-xl font-semibold tracking-tight">{page.heading}</p>
        <p className="mt-2 max-w-[16rem] text-xs leading-relaxed text-carbon-muted">{page.text}</p>
        <span className="mt-4 inline-flex self-start rounded-full bg-carbon px-3.5 py-1.5 text-[11px] font-medium text-ivory">
          {page.cta} <span aria-hidden className="ml-1.5 text-lime">→</span>
        </span>

        <div className="mt-auto grid grid-cols-3 gap-2 pt-5">
          {page.cards.map((card) => (
            <div key={card} className="rounded-xl border border-line bg-mist p-2 sm:p-2.5">
              <span aria-hidden className="block h-1.5 w-6 rounded-full bg-lime-deep" />
              <span className="mt-3 block truncate text-[10px] font-medium sm:text-[11px]">
                {card}
              </span>
              <span aria-hidden className="mt-1.5 block h-1 w-full rounded-full bg-carbon/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
