type Item = {
  title: string;
  description: string;
  // Etiquetas opcionales bajo la descripción (por ejemplo, un stack).
  tags?: string[];
};

type ItemGridProps = {
  items: Item[];
  columns?: 2 | 4;
  numbered?: boolean;
};

const columnClasses = {
  2: "sm:grid-cols-2",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

// Rejilla de elementos con título y descripción, separados por líneas finas.
export function ItemGrid({ items, columns = 2, numbered = false }: ItemGridProps) {
  return (
    <ul
      className={`grid gap-px overflow-hidden rounded-2xl border border-line bg-line ${columnClasses[columns]}`}
    >
      {items.map((item, i) => (
        <li key={item.title} className="flex flex-col bg-ivory p-6 sm:p-8">
          {numbered && (
            <span className="mb-6 font-mono text-xs text-ink-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
          )}
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
          {item.tags && item.tags.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
