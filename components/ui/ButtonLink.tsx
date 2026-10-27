type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

const variants = {
  primary: "bg-ink text-ivory hover:bg-ink/85",
  secondary: "border border-ink/20 text-ink hover:border-ink hover:bg-ivory-dark",
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-dark ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
