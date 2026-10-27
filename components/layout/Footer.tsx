import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-8 text-sm text-ink-muted">
      <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.fullName}
        </p>
        <p>[TODO: enlaces o nota del pie de página]</p>
      </Container>
    </footer>
  );
}
