// Contenido general del sitio. Todo lo marcado con TODO está pendiente de definir.

export type NavItem = {
  label: string;
  href: string;
};

export const site = {
  name: "Mateo",
  // TODO: confirmar el apellido o la forma en que se mostrará el nombre completo.
  fullName: "Mateo [TODO: apellido]",
  // TODO: definir el rol o titular profesional.
  role: "[TODO: rol profesional]",
  // TODO: redactar la descripción del sitio para SEO.
  description: "Portafolio profesional de Mateo. [TODO: descripción]",
};

export const navItems: NavItem[] = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Capacidades", href: "#capacidades" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export const hero = {
  eyebrow: "[TODO: etiqueta breve]",
  title: "[TODO: titular principal del hero]",
  intro:
    "[TODO: párrafo de presentación de dos o tres líneas. Contenido provisional.]",
  primaryCta: { label: "Ver proyectos", href: "#proyectos" },
  secondaryCta: { label: "Contacto", href: "#contacto" },
};

export const heroCard = {
  // TODO: decidir el contenido de la tarjeta (foto, dato destacado, disponibilidad…).
  title: "[TODO: título de la tarjeta]",
  lines: ["[TODO: dato 1]", "[TODO: dato 2]", "[TODO: dato 3]"],
};

export const about = {
  // TODO: redactar la biografía. No inventar experiencia ni trayectoria.
  paragraphs: [
    "[TODO: primer párrafo sobre mí.]",
    "[TODO: segundo párrafo sobre mí.]",
  ],
};

export const contact = {
  intro: "[TODO: texto breve de invitación al contacto.]",
  // TODO: añadir solo los canales públicos que se quieran mostrar (sin formularios).
  channels: [
    { label: "Correo", value: "[TODO: correo público]" },
    { label: "LinkedIn", value: "[TODO: enlace]" },
    { label: "GitHub", value: "[TODO: enlace]" },
  ],
};
