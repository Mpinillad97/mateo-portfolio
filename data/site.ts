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
  brand: { name: "MATEO", role: "ENGINEER" },
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

export const hero = {
  eyebrow: "DESARROLLADOR FULL STACK",
  // TODO: titular provisional; revisar si debe reflejar los dos objetivos.
  // Cada elemento se muestra en su propia línea; la última lleva el acento.
  titleLines: ["Ideas claras.", "Software bien construido."],
  intro:
    "Desarrollador Full Stack con más experiencia en backend. Busco aportar a equipos de producto y colaborar en sitios web, integraciones y automatizaciones.",
  // Una acción por cada objetivo: empleo en un equipo y proyectos para clientes.
  teamsCta: { label: "Ver perfil para equipos", href: routes.teams },
  clientsCta: { label: "Tengo un proyecto", href: routes.clients },
};

// Tarjeta del hero: código genérico de ejemplo y su resultado ficticio.
// No representa código ni datos de ningún cliente o proyecto real.
export const heroCard = {
  badge: "EJEMPLO INTERACTIVO",
  fileName: "ejemplo.ts",
  code: [
    "// Fragmento genérico de demostración",
    "type Idea = { name: string; steps: string[] };",
    "",
    "function build(idea: Idea) {",
    "  return idea.steps.map((step, i) => ({",
    "    order: i + 1,",
    "    step,",
    '    status: "listo",',
    "  }));",
    "}",
    "",
    "build({",
    '  name: "demo",',
    '  steps: ["Entender", "Diseñar", "Construir"],',
    "});",
  ],
  result: {
    title: 'build({ name: "demo" })',
    steps: ["Entender", "Diseñar", "Construir"],
    status: "listo",
    note: "Resultado ficticio, solo con fines demostrativos.",
  },
  controls: {
    group: "Cambiar la vista de la tarjeta",
    code: "Código",
    result: "Resultado",
  },
};
