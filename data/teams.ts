// Contenido de /para-equipos. Las pistas (`hints`) describen qué falta escribir;
// no son contenido final.

import { routes } from "./site";

export const teamsPage = {
  hero: {
    eyebrow: "PARA EQUIPOS",
    title: "Perfil profesional",
    intro:
      "Desarrollador Full Stack con más experiencia en backend. Busco aportar a equipos de producto.",
    cta: { label: "Contacto profesional", href: routes.contactTeams },
    cv: {
      title: "Espacio para el CV",
      hints: ["Añadir el archivo o el enlace al CV cuando esté disponible."],
    },
  },
  profile: {
    id: "perfil",
    eyebrow: "PERFIL",
    title: "Full Stack con énfasis en backend",
    todo: "Resumen del perfil profesional",
    hints: [
      "Qué tipo de sistemas backend has construido o mantenido.",
      "Cómo se complementa con frontend, IA y DevOps.",
    ],
  },
  stack: {
    id: "stack",
    eyebrow: "STACK",
    title: "Áreas técnicas y stack",
    intro: "Tecnologías agrupadas por especialidad.",
  },
  experience: {
    id: "experiencia",
    eyebrow: "EXPERIENCIA",
    title: "Experiencia y proyectos seleccionados",
    intro: "Con énfasis en las decisiones y la contribución técnica.",
    todo: "Experiencia profesional",
    hints: [
      "Roles y periodos confirmados.",
      "Sin código, credenciales ni información confidencial de empleadores.",
    ],
  },
  contribution: {
    id: "como-aporto",
    eyebrow: "EQUIPO",
    title: "Cómo aporto a un equipo",
    todo: "Forma de aportar a un equipo",
    hints: [
      "Cómo colaboras con producto, diseño y otros desarrolladores.",
      "Qué tipo de puesto y equipo buscas.",
    ],
  },
  closing: {
    eyebrow: "CONTACTO PROFESIONAL",
    title: "¿Hablamos de una oportunidad?",
    cta: { label: "Ir a contacto", href: routes.contactTeams },
    todo: "Enlaces a LinkedIn y CV",
    hints: ["Añadir solo cuando estén confirmados."],
  },
};
