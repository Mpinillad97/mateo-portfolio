// Proyectos del portafolio. Las entradas actuales son PLANTILLAS: sirven para
// revisar las tarjetas y la página de caso. Sustituirlas por proyectos reales y
// públicos (sin código, credenciales ni datos confidenciales de empleadores).
//
// Los campos opcionales que falten se muestran como bloques TODO.

import { routes } from "./site";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  // Se muestra en "Trabajo seleccionado" del Home.
  featured?: boolean;
  // Caso completo (/proyectos/[slug]).
  context?: string;
  contribution?: string;
  solution?: string;
  decisions?: string[];
  technologies?: string[];
  outcome?: string;
  evidence?: string[];
  // Enfoque para clientes: problema que resolvía.
  problem?: string;
};

export const projects: Project[] = [
  {
    slug: "proyecto-1",
    title: "[TODO: Proyecto 1]",
    summary: "[TODO: resumen de una línea.]",
    tags: ["TODO"],
    featured: true,
  },
  {
    slug: "proyecto-2",
    title: "[TODO: Proyecto 2]",
    summary: "[TODO: resumen de una línea.]",
    tags: ["TODO"],
    featured: true,
  },
  {
    slug: "proyecto-3",
    title: "[TODO: Proyecto 3]",
    summary: "[TODO: resumen de una línea.]",
    tags: ["TODO"],
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const projectsPage = {
  eyebrow: "PROYECTOS",
  title: "Proyectos",
  intro: "[TODO: introducción breve a la selección de proyectos.]",
  todo: "Las tarjetas actuales son plantillas. Sustituirlas en data/projects.ts por proyectos confirmados.",
};

// Títulos de los bloques de la página de caso y el TODO que se muestra cuando
// falta el contenido.
export const caseBlocks = {
  back: { label: "Todos los proyectos", href: routes.projects },
  eyebrow: "CASO DE PROYECTO",
  context: { title: "Contexto", todo: "Situación de partida y objetivo del proyecto." },
  contribution: { title: "Contribución de Mateo", todo: "Qué hizo Mateo y con qué responsabilidad." },
  solution: { title: "Solución", todo: "Qué se construyó y cómo funciona a grandes rasgos." },
  decisions: { title: "Decisiones técnicas", todo: "Decisiones relevantes y por qué se tomaron." },
  technologies: { title: "Tecnologías", todo: "Tecnologías usadas en el proyecto." },
  outcome: { title: "Resultado", todo: "Resultado confirmado, sin métricas inventadas." },
  evidence: { title: "Evidencias", todo: "Capturas, enlaces públicos o repositorios que se puedan mostrar." },
};
