// Contenido de /para-clientes. Las pistas (`hints`) describen qué falta
// escribir; no son contenido final. No inventar servicios ya realizados.

import { routes } from "./site";

export const clientsPage = {
  hero: {
    eyebrow: "PARA CLIENTES",
    title: "¿Qué necesitas resolver?",
    intro:
      "Sitios y productos web, integraciones entre sistemas, automatizaciones y trabajo con datos.",
    cta: { label: "Tengo un proyecto", href: routes.contactClients },
    problems: {
      title: "Problemas que se pueden resolver",
      hints: ["Ejemplos concretos de problemas, escritos desde el punto de vista del cliente."],
    },
  },
  solutions: {
    id: "soluciones",
    eyebrow: "SOLUCIONES",
    title: "Tipos de solución",
    items: [
      { title: "Sitios y productos web", description: "[TODO: descripción breve.]" },
      { title: "Integraciones", description: "[TODO: descripción breve.]" },
      { title: "Automatizaciones", description: "[TODO: descripción breve.]" },
      { title: "Trabajo con datos", description: "[TODO: descripción breve.]" },
    ],
  },
  process: {
    id: "forma-de-trabajo",
    eyebrow: "PROCESO",
    title: "Forma de trabajo",
    intro: "[TODO: etapas provisionales, pendientes de definir.]",
    steps: [
      { title: "[TODO: etapa 1]", description: "[TODO: descripción.]" },
      { title: "[TODO: etapa 2]", description: "[TODO: descripción.]" },
      { title: "[TODO: etapa 3]", description: "[TODO: descripción.]" },
      { title: "[TODO: etapa 4]", description: "[TODO: descripción.]" },
    ],
  },
  examples: {
    id: "ejemplos",
    eyebrow: "EJEMPLOS",
    title: "Ejemplos de proyectos",
    intro: "Explicados desde el problema y la solución.",
  },
  start: {
    eyebrow: "EMPEZAR",
    title: "¿Cómo empezamos?",
    text: "[TODO: cómo es el primer contacto y qué información conviene preparar.]",
    cta: { label: "Contar mi proyecto", href: routes.contactClients },
  },
  faq: {
    id: "preguntas-frecuentes",
    eyebrow: "FAQ",
    title: "Preguntas frecuentes",
    intro: "[TODO: sección opcional; completar solo con respuestas confirmadas.]",
    items: [
      { question: "[TODO: pregunta 1]", answer: "[TODO: respuesta.]" },
      { question: "[TODO: pregunta 2]", answer: "[TODO: respuesta.]" },
      { question: "[TODO: pregunta 3]", answer: "[TODO: respuesta.]" },
    ],
  },
};
