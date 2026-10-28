import { Band } from "@/components/ui/Band";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { audienceCta } from "@/data/home";

// Cierre con dos caminos: equipos (oscuro) y clientes (lima).
export function AudienceCta() {
  const { teams, clients } = audienceCta;

  return (
    <Band label={audienceCta.label}>
      <div className="grid gap-6 md:grid-cols-2">
        <CtaBanner tone="ink" eyebrow={teams.eyebrow} title={teams.title}>
          <ButtonLink href={teams.link.href} variant="light">
            {teams.link.label} <span aria-hidden className="ml-2">→</span>
          </ButtonLink>
        </CtaBanner>
        <CtaBanner tone="lime" eyebrow={clients.eyebrow} title={clients.title}>
          <ButtonLink href={clients.link.href}>
            {clients.link.label} <span aria-hidden className="ml-2">→</span>
          </ButtonLink>
        </CtaBanner>
      </div>
    </Band>
  );
}
