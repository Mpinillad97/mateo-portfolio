import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "accent" | "secondary" | "light";
};

const variants = {
  primary: "bg-ink text-ivory hover:bg-ink/85",
  accent: "bg-lime text-ink hover:bg-lime-dark",
  secondary: "border border-ink/20 text-ink hover:border-ink hover:bg-ivory-dark",
  // Para fondos oscuros.
  light: "bg-ivory text-ink hover:bg-ivory-dark",
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-dark ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
