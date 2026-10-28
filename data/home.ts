// Contenido de las secciones del Home (el hero está en site.ts).

import { type LinkData, routes } from "./site";

export type EntryPoint = {
  eyebrow: string;
  title: string;
  text: string;
  link: LinkData;
  tone: "ink" | "lime";
};

export const entryPoints: EntryPoint[] = [
  {
    eyebrow: "PARA EQUIPOS",
    title: "¿Buscas a alguien para tu equipo?",
    text: "Perfil profesional, capacidades técnicas y proyectos, pensados para quien contrata o lidera un equipo de desarrollo.",
    link: { label: "Ir al perfil profesional", href: routes.teams },
    tone: "ink",
  },
  {
    eyebrow: "PARA CLIENTES",
    title: "¿Tienes un proyecto en mente?",
    text: "Tipos de proyectos, forma de trabajo y ejemplos, para personas o empresas que necesitan construir algo.",
    link: { label: "Ver cómo trabajamos juntos", href: routes.clients },
    tone: "lime",
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
