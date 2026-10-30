// Escena de producto del hero: una aplicación web FICTICIA mostrada en un
// navegador y en un teléfono. Cada área del selector (Web, Backend, IA, Cloud)
// es una sección de esa misma aplicación.
//
// Todo el contenido es DEMOSTRATIVO: sin marca ni nombre de producto, sin
// personas, clientes, métricas, resultados ni tecnologías concretas (el stack
// de Mateo está pendiente de confirmar). No representa proyectos reales.
//
// Para sustituir un área por capturas reales autorizadas, añade las imágenes a
// /public/images y rellena `screenshots[área]`. Si no hay captura, se muestra
// la demo construida con componentes.

import { type IconName } from "@/components/sections/hero/scene/icons";

export type AreaId = "web" | "backend" | "ai" | "cloud";

export type Screenshot = {
  src: string; // por ejemplo "/images/proyecto-escritorio.png"
  alt: string;
  width: number;
  height: number;
};

export type Tone = "lime" | "neutral" | "outline";

export const heroScene = {
  label: "VISTA DE PRODUCTO · DEMO VISUAL",
  tabsLabel: "Áreas de trabajo",
  areas: [
    {
      id: "web",
      tab: "Web",
      icon: "monitor",
      description:
        "Demo visual, área Web: interfaz ficticia de una aplicación con navegación lateral, accesos rápidos, lista de proyectos de ejemplo y su detalle, en escritorio y móvil.",
    },
    {
      id: "backend",
      tab: "Backend",
      icon: "database",
      description:
        "Demo visual, área Backend: sección de integraciones con un flujo entre API, servicio, datos y sistema externo, una lista de endpoints de ejemplo y una petición con su respuesta.",
    },
    {
      id: "ai",
      tab: "IA",
      icon: "sparkle",
      description:
        "Demo visual, área IA: asistente que responde a partir de documentos, con el flujo documento, búsqueda contextual, modelo y respuesta, y el contexto recuperado.",
    },
    {
      id: "cloud",
      tab: "Cloud",
      icon: "cloud",
      description:
        "Demo visual, área Cloud: sección de despliegues con el recorrido de código a contenedor, despliegue y observabilidad, entornos y un registro de ejemplo.",
    },
  ] satisfies { id: AreaId; tab: string; icon: IconName; description: string }[],
  screenshots: {} as Partial<Record<AreaId, { desktop?: Screenshot; mobile?: Screenshot }>>,
};

// Navegación de la aplicación ficticia. Cada sección principal corresponde a
// un área del selector.
export const appShell = {
  workspace: "Espacio de trabajo",
  search: "Buscar proyectos, tareas o integraciones…",
  nav: [
    { area: "web", label: "Proyectos", icon: "folder" },
    { area: "backend", label: "Integraciones", icon: "link" },
    { area: "ai", label: "Asistente IA", icon: "sparkle" },
    { area: "cloud", label: "Despliegues", icon: "cloudUp" },
  ] satisfies { area: AreaId; label: string; icon: IconName }[],
  secondaryNav: [
    { label: "Documentación", icon: "doc" },
    { label: "Configuración", icon: "settings" },
  ] satisfies { label: string; icon: IconName }[],
  mobileTabs: [
    { area: "web", label: "Inicio", icon: "home" },
    { area: "backend", label: "APIs", icon: "link" },
    { area: "ai", label: "IA", icon: "sparkle" },
    { area: "cloud", label: "Cloud", icon: "cloud" },
  ] satisfies { area: AreaId; label: string; icon: IconName }[],
};

export const webArea = {
  greeting: "Hola, ¿en qué trabajamos hoy?",
  subtitle: "Organiza proyectos, automatiza procesos y conecta herramientas.",
  cta: "Nuevo proyecto",
  quick: [
    { icon: "folder", title: "Nuevo proyecto", text: "Desde una plantilla o en blanco." },
    { icon: "sparkle", title: "Automatización con IA", text: "Convierte tareas repetitivas en flujos." },
    { icon: "link", title: "Integraciones", text: "Conecta tus herramientas." },
  ] satisfies { icon: IconName; title: string; text: string }[],
  tabs: ["Proyectos", "Tareas", "Automatizaciones"],
  sort: "Recientes",
  projects: [
    {
      icon: "folder",
      title: "Plataforma de ejemplo",
      text: "Gestión de procesos y equipos.",
      status: "En desarrollo",
      tone: "lime",
    },
    {
      icon: "monitor",
      title: "Sitio de ejemplo",
      text: "Web pública y gestor de contenidos.",
      status: "Diseño",
      tone: "neutral",
    },
    {
      icon: "link",
      title: "Integración de ejemplo",
      text: "APIs, webhooks y flujos automatizados.",
      status: "Planificación",
      tone: "outline",
    },
  ] satisfies { icon: IconName; title: string; text: string; status: string; tone: Tone }[],
  // Proyecto seleccionado en la lista y mostrado en el panel de detalle.
  selected: 0,
  detail: {
    label: "DETALLE",
    description: "Proyecto de ejemplo para organizar solicitudes y tareas de un equipo.",
    stepsTitle: "Próximos pasos",
    steps: [
      { label: "Definir el alcance", done: true },
      { label: "Diseñar la interfaz", done: true },
      { label: "Conectar la API", done: false },
    ],
    tags: ["Web", "API", "Móvil"],
    action: "Abrir proyecto",
  },
  mobile: {
    title: "Inicio",
    greeting: "Hola",
    subtitle: "Todo en un mismo lugar para seguir avanzando.",
    tiles: [
      { icon: "folder", title: "Proyectos", text: "En curso" },
      { icon: "check", title: "Tareas", text: "Pendientes" },
      { icon: "sparkle", title: "Automatizaciones", text: "Activas" },
      { icon: "link", title: "Integraciones", text: "Conectadas" },
    ] satisfies { icon: IconName; title: string; text: string }[],
  },
};

export const backendArea = {
  title: "Integraciones",
  subtitle: "APIs y servicios conectados entre sí.",
  cta: "Nueva integración",
  flow: [
    { icon: "server", label: "API" },
    { icon: "code", label: "Servicio" },
    { icon: "database", label: "Datos" },
    { icon: "link", label: "Sistema externo" },
  ] satisfies { icon: IconName; label: string }[],
  endpointsTitle: "Endpoints de ejemplo",
  endpoints: [
    { method: "GET", path: "/api/proyectos", status: "Activo", tone: "lime" },
    { method: "POST", path: "/api/solicitudes", status: "Activo", tone: "lime" },
    { method: "PUT", path: "/api/tareas/:id", status: "Activo", tone: "lime" },
    { method: "POST", path: "/webhooks/eventos", status: "En pruebas", tone: "outline" },
  ] satisfies { method: string; path: string; status: string; tone: Tone }[],
  selected: 1,
  detail: {
    label: "PETICIÓN",
    requestTitle: "Cuerpo",
    request: ["{", '  "tipo": "contacto",', '  "origen": "web"', "}"],
    responseTitle: "Respuesta",
    response: ["{", '  "estado": "recibida"', "}"],
  },
  mobile: { title: "APIs" },
};

export const aiArea = {
  title: "Asistente IA",
  subtitle: "Respuestas a partir de tus documentos.",
  flow: ["Documento", "Búsqueda contextual", "Modelo", "Respuesta"],
  question: "¿Qué dice el documento sobre los plazos de entrega?",
  answer:
    "Respuesta de ejemplo, generada solo a partir del contexto encontrado en los documentos.",
  sources: ["Documento de ejemplo · sección 2", "Guía de ejemplo · página 4"],
  input: "Pregunta sobre tus documentos…",
  detail: {
    label: "CONTEXTO RECUPERADO",
    snippets: ["Documento de ejemplo", "Guía de ejemplo", "Notas de ejemplo"],
    note: "Fragmentos usados para la respuesta.",
  },
  mobile: { title: "Asistente" },
};

export const cloudArea = {
  title: "Despliegues",
  subtitle: "Del código a producción, con visibilidad.",
  cta: "Nuevo despliegue",
  pipeline: [
    { icon: "code", label: "Código" },
    { icon: "box", label: "Contenedor" },
    { icon: "cloudUp", label: "Despliegue" },
    { icon: "activity", label: "Observabilidad" },
  ] satisfies { icon: IconName; label: string }[],
  deploymentsTitle: "Despliegues recientes",
  deployments: [
    { title: "Actualizar página de inicio", env: "Producción", status: "Desplegado", tone: "lime" },
    { title: "Nueva integración", env: "Pruebas", status: "En curso", tone: "neutral" },
    { title: "Ajustes de configuración", env: "Pruebas", status: "Desplegado", tone: "lime" },
  ] satisfies { title: string; env: string; status: string; tone: Tone }[],
  detail: {
    label: "REGISTRO",
    log: [
      "✓ cambios integrados",
      "✓ imagen de contenedor creada",
      "✓ desplegado en pruebas",
      "● revisando registros y alertas",
    ],
    environmentsTitle: "Entornos",
    environments: [
      { name: "Pruebas", status: "Activo" },
      { name: "Producción", status: "Activo" },
    ],
  },
  mobile: { title: "Cloud" },
};
