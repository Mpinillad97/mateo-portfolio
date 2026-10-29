import { heroCard } from "@/data/site";
import { CardFace } from "./CardFace";

// Resaltado mínimo para el fragmento de ejemplo: comentarios, cadenas,
// palabras clave y números. Suficiente para un texto corto y fijo.
const TOKEN = /(\/\/.*$|"[^"]*"|\b(?:type|function|return)\b|\b\d+\b)/;

function tokenClass(token: string) {
  if (token.startsWith("//")) return "text-ivory-muted";
  if (token.startsWith('"')) return "text-ivory";
  return "text-lime";
}

function CodeLine({ line }: { line: string }) {
  return (
    <>
      {line.split(TOKEN).map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className={tokenClass(part)}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

export function CodeSample() {
  return (
    <CardFace meta={heroCard.fileName}>
      <pre className="overflow-x-auto font-mono text-[12px] leading-relaxed text-ivory/70 sm:text-[13px]">
        <code>
          {heroCard.code.map((line, i) => (
            <span key={i} className="block min-h-[1lh]">
              <CodeLine line={line} />
            </span>
          ))}
        </code>
      </pre>
    </CardFace>
  );
}
