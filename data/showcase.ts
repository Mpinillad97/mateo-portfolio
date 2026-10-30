// Muestra de capacidades del hero: cuatro vistas, una por área de trabajo.
// Representan áreas de experiencia, no etapas de un mismo proyecto.
//
// Todo el contenido es DEMOSTRATIVO: interfaz, código y flujos inventados y
// genéricos. No representa proyectos, clientes, datos ni código reales.
// Sustituir por evidencia real de proyectos cuando exista.

type ViewBase = {
  id: string;
  area: string;
  badge: "DEMO VISUAL" | "EJEMPLO INTERACTIVO";
};

export type WebView = ViewBase & {
  kind: "web";
  page: {
    url: string;
    brand: string;
    nav: string[];
    heading: string;
    text: string;
    cta: string;
    cards: string[];
  };
};

export type FlowView = ViewBase & {
  kind: "flow";
  steps: { label: string; detail: string }[];
  fileName: string;
  code: string[];
};

export type AiView = ViewBase & {
  kind: "ai";
  steps: string[];
  // Documento esquemático; se resalta el fragmento que encuentra la búsqueda.
  document: string;
  question: string;
  answer: string;
  source: string;
};

export type PipelineView = ViewBase & {
  kind: "pipeline";
  stages: string[];
  log: string[];
  // TODO: añadir solo tecnologías confirmadas del stack de Mateo. Mientras
  // esté vacío, la vista no nombra herramientas concretas.
  technologies: string[];
};

export type ShowcaseView = WebView | FlowView | AiView | PipelineView;

export const showcase = {
  label: "Áreas de trabajo de Mateo",
  intervalMs: 6000,
  controls: {
    group: "Controles de la muestra",
    previous: "Vista anterior",
    next: "Vista siguiente",
    pause: "Pausar avance automático",
    play: "Reanudar avance automático",
    goTo: "Ir a la vista",
  },
  views: [
    {
      id: "web",
      kind: "web",
      area: "WEB / FRONTEND",
      badge: "DEMO VISUAL",
      page: {
        url: "demo.local",
        brand: "demo",
        nav: ["Inicio", "Servicios", "Contacto"],
        heading: "Interfaz de ejemplo",
        text: "Contenido ficticio para mostrar una interfaz clara y adaptable.",
        cta: "Empezar",
        cards: ["Componentes", "Estados", "Adaptable"],
      },
    },
    {
      id: "backend",
      kind: "flow",
      area: "BACKEND / INTEGRACIONES",
      badge: "DEMO VISUAL",
      steps: [
        { label: "API", detail: "recibe la solicitud" },
        { label: "Servicio", detail: "valida y transforma" },
        { label: "Datos", detail: "guarda el registro" },
        { label: "Otro sistema", detail: "recibe la notificación" },
      ],
      fileName: "ejemplo.ts",
      code: [
        "// Fragmento genérico de demostración",
        "async function procesar(entrada: Entrada) {",
        "  const datos = validar(entrada);",
        "  await guardar(datos);",
        "  await notificar(datos);",
        "}",
      ],
    },
    {
      id: "ai",
      kind: "ai",
      area: "IA / AUTOMATIZACIÓN",
      badge: "DEMO VISUAL",
      steps: ["Documento", "Búsqueda contextual", "Modelo", "Respuesta"],
      document: "documento-ejemplo.pdf",
      question: "¿Qué dice el documento sobre los plazos?",
      answer: "Respuesta de ejemplo, generada solo a partir del contexto encontrado.",
      source: "Fuente: documento de ejemplo",
    },
    {
      id: "devops",
      kind: "pipeline",
      area: "CLOUD / DEVOPS",
      badge: "DEMO VISUAL",
      stages: ["Código", "Contenedor", "Despliegue", "Observabilidad"],
      log: [
        "✓ cambios integrados",
        "✓ imagen de contenedor creada",
        "✓ desplegado en el entorno",
        "● revisando registros y alertas",
      ],
      technologies: [],
    },
  ] satisfies ShowcaseView[],
};
