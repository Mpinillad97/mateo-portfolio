// Contenido de las secciones del Home (el hero está en site.ts).

import { type LinkData, routes } from "./site";

// Elección de audiencia (bajo el hero): dos recorridos claramente separados
// para que equipos de contratación y clientes no entren por la ruta del otro.
// Contenido provisional.

export type EntryPoint = {
  id: string;
  eyebrow: string;
  title: string;
  // Pregunta que aclara a quién va dirigido el recorrido.
  question: string;
  text: string;
  // Público al que se dirige; se muestra como línea breve.
  audience: string;
  link: LinkData;
  surface: "sky" | "leaf";
  icon: "layers" | "code";
};

export const entryPointsSection = {
  id: "elige-tu-recorrido",
  kicker: "Elige tu recorrido",
  title: "Dos formas de colaborar",
  audienceLabel: "Pensado para",
};

export const entryPoints: EntryPoint[] = [
  {
    id: "recorrido-equipos",
    eyebrow: "COLABORACIÓN",
    title: "Para equipos",
    question: "¿Buscas contratar a un desarrollador?",
    text: "Revisa mi experiencia, proyectos, tecnologías y cómo puedo aportar a tu equipo.",
    audience: "Reclutadores, hiring managers y equipos que evalúan candidatos.",
    link: { label: "Ver perfil profesional", href: routes.teams },
    surface: "sky",
    icon: "layers",
  },
  {
    id: "recorrido-clientes",
    eyebrow: "SERVICIOS",
    title: "Para clientes",
    question: "¿Tienes un proyecto o necesitas resolver algo en tu negocio?",
    text: "Conversemos sobre una web, automatización o integración que necesites.",
    audience: "Personas y empresas que buscan contratar un proyecto o servicio.",
    link: { label: "Explorar servicios", href: routes.clients },
    surface: "leaf",
    icon: "code",
  },
];

export const featuredWork = {
  id: "proyectos-destacados",
  eyebrow: "PROYECTOS",
  title: "Proyectos destacados",
  intro:
    "Casos para ver cómo trabajo: qué se necesitaba, qué hice yo y con qué tecnologías. Cada ficha aclara su alcance real.",
  link: { label: "Ver todos los proyectos", href: routes.projects },
  cardLabel: "Ver caso",
  empty: "Pronto publicaré aquí los primeros casos.",
};

export const workAreasSection = {
  id: "areas-de-trabajo",
  eyebrow: "CAPACIDADES",
  title: "Áreas de trabajo",
  intro: "Tres áreas que se combinan según lo que cada proyecto necesita.",
};

export const aboutTeaser = {
  id: "presentacion",
  eyebrow: "SOBRE MÍ",
  title: "Hola, soy Mateo.",
  // Solo el posicionamiento de la guía/D-003. No añadir biografía.
  text: "Soy desarrollador de software. Mi experiencia se inclina hacia el backend, también trabajo en frontend y me muevo entre Full Stack, IA y automatización y Cloud & DevOps.",
  // Mientras P-03 esté abierto se muestra este aviso.
  todo: "[TODO P-03: Mateo aportará su historia personal en 2–3 líneas, en primera persona. Foto opcional.]",
  provisional: true,
  photo: undefined as
    | { src: string; alt: string; width: number; height: number }
    | undefined, // TODO P-03
  link: { label: "Conocer más sobre mí", href: routes.about },
};

export const contactClosing = {
  id: "contacto-cierre",
  eyebrow: "CONTACTO",
  title: "¿Hablamos?",
  text: "Si buscas sumar a alguien a tu equipo o tienes un proyecto en mente, escríbeme y vemos el siguiente paso.",
  primary: { label: "Escríbeme", href: routes.contact },
  secondary: [
    { label: "Oportunidad en un equipo", href: routes.contactTeams },
    { label: "Tengo un proyecto", href: routes.contactClients },
  ] satisfies LinkData[],
  channelsLabel: "Canales de contacto",
};

// Cierre con dos acciones diferenciadas. Ya no se usa en el Home; lo siguen
// usando /proyectos, la ficha de proyecto y /sobre-mi.
export const audienceCta = {
  label: "Siguiente paso",
  teams: {
    eyebrow: "PARA EQUIPOS",
    title: "¿Formas parte de un equipo de desarrollo?",
    link: { label: "Ver perfil para equipos", href: routes.teams },
  },
  clients: {
    eyebrow: "PARA CLIENTES",
    title: "¿Necesitas un sitio, una integración o una automatización?",
    link: { label: "Tengo un proyecto", href: routes.clients },
  },
};
