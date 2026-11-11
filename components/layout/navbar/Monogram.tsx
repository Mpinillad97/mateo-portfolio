// Monograma M: dos picos angulares que casi se tocan en el centro.
export function Monogram({ className = "text-lime" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 16 40 34"
      width={40}
      height={34}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      className={`block shrink-0 ${className}`}
    >
      <path d="M3 46 L11.5 20 L19 40" />
      <path d="M21 40 L28.5 20 L37 46" />
    </svg>
  );
}
