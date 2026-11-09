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

export const selectedWork = {
  id: "trabajo-seleccionado",
  eyebrow: "PROYECTOS",
  title: "Trabajo seleccionado",
  intro: "[TODO: frase breve que presente la selección de proyectos.]",
  link: { label: "Ver todos los proyectos", href: routes.projects },
};

export const workAreasSection = {
  id: "areas-de-trabajo",
  eyebrow: "CAPACIDADES",
  title: "Áreas de trabajo",
  intro: "[TODO: frase breve sobre cómo se combinan estas áreas.]",
};

export const aboutTeaser = {
  id: "presentacion",
  eyebrow: "SOBRE MÍ",
  title: "Hola, soy Mateo.",
  text: "[TODO: presentación breve en dos o tres líneas.]",
  link: { label: "Conocer más sobre mí", href: routes.about },
};

// Cierre con dos acciones diferenciadas. Se reutiliza en otras páginas.
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
