// Flecha decorativa de los enlaces y botones; se desplaza al pasar el cursor.
export function Arrow() {
  return (
    <span
      aria-hidden
      className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
    >
      →
    </span>
  );
}
