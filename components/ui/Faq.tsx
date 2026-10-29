type FaqItem = {
  question: string;
  answer: string;
};

// Preguntas desplegables con <details>; no necesita JavaScript.
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-deep [&::-webkit-details-marker]:hidden">
            {item.question}
            <span
              aria-hidden
              className="font-mono text-lg text-carbon-muted transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-2xl text-carbon-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
