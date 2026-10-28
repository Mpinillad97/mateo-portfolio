type Step = {
  title: string;
  description: string;
};

// Lista ordenada de etapas, en horizontal en escritorio.
export function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="border-t-2 border-ink pt-5">
          <span className="font-mono text-xs text-ink-muted">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm text-ink-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
