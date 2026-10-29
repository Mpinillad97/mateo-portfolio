import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "accent" | "secondary" | "light";
};

// Cada variante define también el color de foco: verde oscuro sobre fondos
// claros y lima sobre superficies grafito.
const variants = {
  primary: "bg-carbon text-ivory hover:bg-carbon/85 focus-visible:outline-lime-deep",
  accent: "bg-lime text-carbon hover:bg-lime-hover focus-visible:outline-lime-deep",
  secondary:
    "border border-carbon/60 text-carbon hover:border-carbon hover:bg-mist-dark focus-visible:outline-lime-deep",
  // Para superficies grafito.
  light: "bg-ivory text-carbon hover:bg-ivory/85 focus-visible:outline-lime",
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
