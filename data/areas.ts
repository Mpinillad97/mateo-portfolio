// Áreas de trabajo. Los stacks salen de la tabla de la guía y no se atribuyen
// a proyectos concretos. Linux y Jenkins quedan fuera hasta que Mateo confirme
// su nivel.

export type Area = {
  id: "full-stack" | "ia-automatizacion" | "cloud-devops";
  title: string;
  description: string;
  stack: string[];
  icon: "stack" | "flow" | "cloud";
};

export const workAreas: Area[] = [
  {
    id: "full-stack",
    title: "Full Stack",
    description:
      "Aplicaciones web de punta a punta: APIs y lógica de negocio, bases de datos e interfaces. Mi experiencia se inclina hacia el backend y estoy abierto a roles de frontend.",
    stack: [
      "TypeScript",
      "Python",
      "Node.js",
      "NestJS",
      "Express",
      "REST APIs",
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
    ],
    icon: "stack",
  },
  {
    id: "ia-automatizacion",
    title: "IA y automatización",
    description:
      "Flujos automatizados y asistentes con modelos de lenguaje para revisar información, responder consultas y conectar sistemas.",
    stack: ["n8n", "OpenAI API", "Gemini API", "Anthropic API", "Pinecone", "Webhooks"],
    icon: "flow",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "Infraestructura, despliegue y operación de servicios: contenedores, pipelines de integración y entrega continua, y monitoreo.",
    stack: ["AWS", "DigitalOcean", "Docker", "GitHub Actions", "Terraform"],
    icon: "cloud",
  },
];

// Stack completo por categoría (tabla de la guía §04), para Para equipos.
export const stackGroups = [
  { title: "Lenguajes", stack: ["Python", "TypeScript", "JavaScript", "SQL"] },
  { title: "Backend", stack: ["Node.js", "Express", "NestJS", "REST APIs", "OAuth", "Webhooks"] },
  { title: "Frontend", stack: ["React", "Next.js", "Vite", "Tailwind CSS"] },
  { title: "Cloud / DevOps", stack: ["AWS", "DigitalOcean", "Docker", "GitHub Actions", "Terraform"] },
  { title: "Datos", stack: ["PostgreSQL", "Supabase", "Firebase", "Pinecone"] },
  { title: "IA / automatización", stack: ["n8n", "OpenAI API", "Gemini API", "Anthropic API"] },
  {
    title: "Herramientas",
    stack: ["Git", "GitHub", "Postman", "Beekeeper Studio", "Jira", "ClickUp", "HubSpot"],
  },
];
