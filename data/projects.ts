// Lista de proyectos. Las entradas actuales son marcadores de posición:
// sustituir por proyectos reales y públicos (sin código ni datos de empleadores).

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  // Ruta dentro de /public/images, por ejemplo "/images/proyecto-1.jpg".
  image?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "proyecto-1",
    title: "[TODO: Proyecto 1]",
    summary: "[TODO: descripción breve del proyecto.]",
    tags: ["TODO"],
  },
  {
    slug: "proyecto-2",
    title: "[TODO: Proyecto 2]",
    summary: "[TODO: descripción breve del proyecto.]",
    tags: ["TODO"],
  },
  {
    slug: "proyecto-3",
    title: "[TODO: Proyecto 3]",
    summary: "[TODO: descripción breve del proyecto.]",
    tags: ["TODO"],
  },
];
