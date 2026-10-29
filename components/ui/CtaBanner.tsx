import { Eyebrow } from "./Eyebrow";

type CtaBannerProps = {
  title: string;
  eyebrow?: string;
  text?: string;
  tone?: "dark" | "lime" | "plain";
  // Botones o bloques bajo el texto.
  children?: React.ReactNode;
  className?: string;
};

const tones = {
  dark: "bg-graphite text-ivory",
  lime: "bg-lime text-carbon",
  plain: "border border-line text-carbon",
};

// Bloque de llamada a la acción. "dark" (grafito) se usa para equipos y
// "lime" para clientes.
export function CtaBanner({
  title,
  eyebrow,
  text,
  tone = "plain",
  children,
  className = "",
}: CtaBannerProps) {
  return (
    <div className={`flex flex-col rounded-3xl p-7 sm:p-10 ${tones[tone]} ${className}`}>
      {eyebrow && (
        <Eyebrow
          onDark={tone === "dark"}
          dotClass={tone === "lime" ? "bg-carbon" : "bg-lime"}
          className="mb-4"
        >
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">{title}</h2>
      {text && (
        <p className={`mt-4 max-w-xl ${tone === "dark" ? "text-ivory/70" : "text-carbon/70"}`}>
          {text}
        </p>
      )}
      {children && <div className="mt-auto flex flex-wrap gap-3 pt-8">{children}</div>}
    </div>
  );
}
