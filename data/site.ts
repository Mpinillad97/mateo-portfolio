// Contenido general del sitio. Todo lo marcado con TODO está pendiente de definir.

export type LinkData = {
  label: string;
  href: string;
};

export const routes = {
  home: "/",
  teams: "/para-equipos",
  clients: "/para-clientes",
  projects: "/proyectos",
  about: "/sobre-mi",
  contact: "/contacto",
  // Opciones diferenciadas dentro de /contacto.
  contactTeams: "/contacto#oportunidad-laboral",
  contactClients: "/contacto#proyecto-cliente",
} as const;

export const projectPath = (slug: string) => `${routes.projects}/${slug}`;

export const site = {
  fullName: "Mateo Pinilla",
  role: "Desarrollador de software",
  specialties: ["Full Stack", "IA y automatización", "Cloud & DevOps"] as const,
  description:
    "Portafolio de Mateo Pinilla, desarrollador de software: Full Stack, IA y automatización, Cloud & DevOps.",
  // Solo visual por ahora. TODO: implementar traducciones (D-006).
  language: { code: "ES", label: "Español" },
};

// Navbar: monograma y tres enlaces; `accent` pinta el enlace en lima.
export const navbar = {
  label: "Navegación principal",
  homeLabel: "Mateo, ir al inicio",
  links: [
    { label: "Proyectos", href: routes.projects },
    { label: "Sobre mí", href: routes.about },
    { label: "Contacto", href: routes.contact, accent: true },
  ] satisfies (LinkData & { accent?: boolean })[],
};

export const isCurrentPath = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

// Hero del Home (exploración). La vista de producto está en heroShowcase.ts.
export const hero = {
  eyebrow: "DESARROLLADOR FULL STACK",
  // Cada elemento se muestra en su propia línea; el punto final va en lima.
  titleLines: ["De la interfaz a la", "infraestructura."],
  intro:
    "Soy Mateo, desarrollador de software. Construyo productos web, integraciones y automatizaciones con IA.",
  // Una acción por cada público: equipos de contratación y clientes.
  teamsCta: { label: "Para equipos", href: routes.teams },
  clientsCta: { label: "Tengo un proyecto", href: routes.clients },
};

// Hero con constelación: consume los valores del sitio, sin repetirlos.
export const constellationHero = {
  name: site.fullName,
  role: site.role,
  specialties: site.specialties,
  teamsCta: { label: "Para equipos", href: routes.teams },
  clientsCta: { label: "Tengo un proyecto", href: routes.clients },
};

// Pie de página global.
export const footer = {
  contactLabel: "Contacto",
  tagline: "Full Stack · IA y automatización · Cloud & DevOps",
  nav: [
    { label: "Proyectos", href: routes.projects },
    { label: "Para equipos", href: routes.teams },
    { label: "Para clientes", href: routes.clients },
    { label: "Sobre mí", href: routes.about },
    { label: "Contacto", href: routes.contact },
  ] satisfies LinkData[],
};
