import Link from "next/link";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

// Enlace de texto con flecha y subrayado lima.
export function TextLink({ href, children, className = "" }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-sm font-medium underline decoration-lime-deep decoration-2 underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-deep ${className}`}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
