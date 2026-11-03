// Contenido general del sitio. Todo lo marcado con TODO está pendiente de definir.

export type NavItem = {
  label: string;
  href: string;
};

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
  name: "Mateo",
  // TODO: confirmar el apellido o la forma en que se mostrará el nombre completo.
  fullName: "Mateo [TODO: apellido]",
  role: "Desarrollador Full Stack",
  description: "Portafolio de Mateo, desarrollador Full Stack.",
  // Solo visual por ahora. TODO: implementar traducciones.
  language: { code: "ES", label: "Español" },
};

export const navItems: NavItem[] = [
  { label: "Proyectos", href: routes.projects },
  { label: "Para equipos", href: routes.teams },
  { label: "Para clientes", href: routes.clients },
  { label: "Sobre mí", href: routes.about },
  { label: "Contacto", href: routes.contact },
];

// Navbar: monograma y tres enlaces; `accent` pinta el enlace en lima.
// El pie de página sigue usando `navItems`.
export const navbar = {
  label: "Navegación principal",
  homeLabel: "Mateo, ir al inicio",
  links: [
    { label: "Proyectos", href: routes.projects },
    { label: "Sobre mí", href: routes.about },
    { label: "Contacto", href: routes.contact, accent: true },
  ] satisfies (NavItem & { accent?: boolean })[],
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

// Hero con constelación interactiva (prototipo). Contenido provisional.
export const constellationHero = {
  name: "Mateo Pinilla.",
  role: "Desarrollador de software",
  specialties: ["Full Stack", "IA y automatización", "Cloud & DevOps"],
  teamsCta: { label: "Para equipos", href: routes.teams },
  clientsCta: { label: "Tengo un proyecto", href: routes.clients },
};
