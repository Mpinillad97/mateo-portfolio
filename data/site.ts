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

export type NavbarRoute = {
  key: "teams" | "clients";
  label: string;
  text: string;
  href: string;
};

// Navbar: enlaces secundarios y los dos recorridos principales a los que
// llegan las ramas de la línea. El pie de página sigue usando `navItems`.
export const navbar = {
  homeLabel: "Mateo, ir al inicio",
  secondary: [
    { label: "Proyectos", href: routes.projects },
    { label: "Sobre mí", href: routes.about },
    { label: "Contacto", href: routes.contact },
  ] satisfies NavItem[],
  primary: [
    { key: "teams", label: "EQUIPOS", text: "Ver perfil", href: routes.teams },
    { key: "clients", label: "CLIENTES", text: "Tengo un proyecto", href: routes.clients },
  ] satisfies NavbarRoute[],
  menu: { open: "Menú", close: "Cerrar", label: "Menú principal" },
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
