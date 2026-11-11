// Proyectos del portafolio (fuente: spec home-datos.md, D-009, D-010, D-011, D-013).
// Lo desconocido queda como "[TODO: …]". Sin código, credenciales ni datos
// confidenciales de empleadores; ningún texto nombra a terceros no autorizados.
//
// Los campos opcionales que falten se muestran como bloques TODO en la ficha.

import { routes } from "./site";

export type ProjectAudience = "equipos" | "clientes" | "ambos" | "aprendizaje";

export type ProjectCategory =
  | "backend"
  | "full-stack"
  | "frontend"
  | "ia-automatizacion"
  | "cloud-devops"
  | "sitio-web"
  | "ecommerce";

export type ProjectStatus =
  | "produccion" // en línea / en uso real
  | "no-publicado"
  | "mantenimiento" // sistema legacy que Mateo mantuvo
  | "no-disponible" // el original ya no existe; solo recreación
  | "academico"
  | "aprendizaje";

export type ProjectScope =
  | "desde-cero"
  | "sitio-completo" // diseño, UI/UX, desarrollo y puesta en línea (D-010)
  | "frontend"
  | "mantenimiento"
  | "version-inicial" // solo la etapa que hizo Mateo
  | "colaboracion" // parte de un equipo; describir solo su contribución
  | "aprendizaje"
  | "por-confirmar";

export type EvidenceKind =
  | "sitio-publico"
  | "repositorio-publico"
  | "repositorio-privado"
  | "demo" // debe etiquetarse como demostración
  | "recreacion" // flujo reconstruido
  | "capturas"
  | "ninguna";

export type ProjectEvidence = {
  kind: EvidenceKind;
  label: string; // texto visible; puede ser un TODO
  url?: string; // solo si es público y autorizado
};

export type Project = {
  // Identidad y clasificación
  slug: string;
  title: string; // título público (D-009 / D-011)
  summary: string; // tarjeta, metadatos y hero de la ficha
  tags: string[];
  category: ProjectCategory;
  audience: ProjectAudience;
  status: ProjectStatus;
  scope: ProjectScope;
  // Destacado en el Home; `order` ascendente.
  featured?: { order: number };

  // Opcionales: si faltan, la ficha muestra el bloque TODO.
  scopeNote?: string; // matiz del alcance o TODO de confirmación
  notice?: string; // aviso obligatorio visible (demo, recreación, simulación, alcance parcial)
  technicalSummary?: string; // para equipos
  businessSummary?: string; // para clientes
  context?: string;
  problem?: string; // lo usa ProjectCard variante "client"
  contribution?: string; // lo usa ProjectCard variante "team"
  solution?: string;
  decisions?: string[];
  technologies?: string[]; // solo las realmente usadas
  outcome?: string; // solo resultados verificables
  evidence?: ProjectEvidence[];
};

export const statusLabels: Record<ProjectStatus, string> = {
  produccion: "En línea",
  "no-publicado": "No publicado",
  mantenimiento: "Legacy · mantenimiento",
  "no-disponible": "Original no disponible",
  academico: "Proyecto académico",
  aprendizaje: "Proyecto de aprendizaje",
};

export const audienceLabels: Record<ProjectAudience, string> = {
  equipos: "Para equipos",
  clientes: "Para clientes",
  ambos: "Equipos y clientes",
  aprendizaje: "Aprendizaje",
};

export const scopeLabels: Record<ProjectScope, string> = {
  "desde-cero": "Construido desde cero",
  "sitio-completo": "Sitio completo",
  frontend: "Frontend",
  mantenimiento: "Mantenimiento",
  "version-inicial": "Versión inicial",
  colaboracion: "Colaboración",
  aprendizaje: "Aprendizaje",
  "por-confirmar": "Alcance por confirmar",
};

export const evidenceLabels: Record<EvidenceKind, string> = {
  "sitio-publico": "Sitio público",
  "repositorio-publico": "Repositorio",
  "repositorio-privado": "Repositorio privado",
  demo: "Demostración",
  recreacion: "Recreación",
  capturas: "Capturas",
  ninguna: "Sin evidencia pública",
};

// Orden del arreglo = orden del catálogo /proyectos.
export const projects: Project[] = [
  // 1
  {
    slug: "zonia",
    title: "ZONIA",
    summary:
      "Plataforma web para zonas francas y empresas que necesitan procesos de KYC, due diligence y scoring de riesgo, con reportes generados mediante automatizaciones con IA.",
    tags: ["Full Stack", "IA", "Automatización", "Due diligence"],
    category: "full-stack",
    audience: "ambos",
    status: "no-publicado",
    scope: "por-confirmar",
    scopeNote:
      "[TODO: Mateo — confirmar si construyó la plataforma completa o qué partes (frontend, Supabase, flujos n8n).]",
    featured: { order: 1 },
    notice:
      "ZONIA no está publicada. Las demos o mockups que se muestren son una demostración, no capturas de un entorno real.",
    technicalSummary:
      "Frontend en React y TypeScript sobre Supabase como backend y base de datos. Automatizaciones en n8n con IA revisan los documentos y consultan bases internacionales para producir los estudios y reportes. Incluye un chatbot de preguntas generales.",
    businessSummary:
      "Permite a zonas francas y empresas reunir documentación, solicitar un estudio de due diligence y obtener un reporte con puntuación de riesgo a partir de esa información.",
    context:
      "Los procesos de KYC, due diligence y evaluación de riesgo de contrapartes requieren reunir y revisar información de distintas fuentes. ZONIA concentra ese flujo en una plataforma pensada para zonas francas y empresas. [TODO: Mateo — origen del proyecto y objetivo, si es compartible.]",
    problem:
      "Evaluar el riesgo de una contraparte implica reunir documentos y consultar fuentes internacionales de forma manual.",
    contribution:
      "[TODO: Mateo — describir qué construyó y con qué responsabilidad.]",
    solution:
      "Inicio de sesión, créditos para generar reportes y carga de documentos. Automatizaciones en n8n revisan la información y generan los estudios; la plataforma consulta bases internacionales para revisar reportes empresariales. Incluye un chatbot de preguntas generales.",
    decisions: [
      "Supabase como backend y base de datos.",
      "Automatizaciones con IA en n8n para revisar la información y generar los reportes.",
      "Manejo de créditos para generar reportes.",
      "[TODO: Mateo — añadir el porqué de estas decisiones.]",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "n8n",
      "[TODO: proveedor de IA y bases internacionales consultadas, si es compartible]",
    ],
    evidence: [
      {
        kind: "ninguna",
        label:
          "[TODO P-05: demo o mockup autorizado, que se mostrará marcado como «Demostración».]",
      },
    ],
  },

  // 2
  {
    slug: "leadlove-ticketmaster-api-sync",
    title: "LeadLove · Ticketmaster API Sync",
    summary:
      "Integración construida desde cero que sincroniza órdenes, clientes, eventos y asientos de Ticketmaster One con HubSpot CRM, de forma incremental y casi en tiempo real.",
    tags: ["Backend", "Integraciones", "Python", "PostgreSQL"],
    category: "backend",
    audience: "equipos",
    status: "produccion",
    scope: "desde-cero",
    featured: { order: 2 },
    notice:
      "Proyecto de empresa: se muestra solo la arquitectura compartible. No se publican código, datos ni pantallas privadas.",
    technicalSummary:
      "Job contenedorizado de cinco etapas: ingesta incremental con cursor persistido en PostgreSQL; normalización desde JSONB; enriquecimiento de eventos con Ticketmaster Discovery API y caché; escritura en una outbox; y publicación en HubSpot CRM v3/v4. Los datos se separan por client_id.",
    businessSummary:
      "Las ventas, clientes y eventos de Ticketmaster One llegan al CRM de forma continua y separados por cliente, en lugar de depender de archivos SFTP por lotes.",
    context:
      "La empresa sincronizaba Ticketmaster One con HubSpot mediante un proceso legacy de archivos SFTP por lotes (ver el caso SFTP Sync). Se necesitaba una integración incremental, casi en tiempo real, que mantuviera separados los datos de cada cliente.",
    problem:
      "Los datos de ventas llegaban al CRM por lotes de archivos, sin continuidad y con un proceso difícil de evolucionar. [TODO: Mateo — confirmar la redacción del problema.]",
    contribution:
      "Mateo creó la integración desde cero, de punta a punta en backend. El repositorio está en el GitHub de la empresa y contiene solo backend.",
    solution:
      "Un job contenedorizado en cinco etapas: ingesta incremental, normalización, enriquecimiento de eventos, escritura en una outbox y publicación en HubSpot CRM. Sustituyó el proceso legacy de archivos SFTP por lotes.",
    decisions: [
      "Transactional outbox entre la normalización y la publicación en HubSpot.",
      "Deduplicación e idempotencia en las escrituras.",
      "Concurrencia con SKIP LOCKED y advisory locks, y recuperación de filas que quedan en processing.",
      "Reintentos con backoff y jitter, y rate limiting frente a las APIs.",
      "OAuth 2.0 y aprovisionamiento del esquema de HubSpot.",
      "Migraciones idempotentes.",
      "Logs estructurados con criterios de privacidad sobre los datos personales.",
    ],
    technologies: [
      "Python 3.12",
      "PostgreSQL",
      "FastAPI / Uvicorn",
      "Docker",
      "DigitalOcean App Platform / Jobs",
      "HubSpot CRM API",
      "Ticketmaster Discovery API",
      "OAuth 2.0",
    ],
    evidence: [
      {
        kind: "repositorio-privado",
        label:
          "Repositorio privado de la empresa (solo backend). No se publica código; se muestra únicamente la arquitectura.",
      },
    ],
  },

  // 3
  {
    slug: "leadlove-ticketmaster-sftp-sync",
    title: "LeadLove · Ticketmaster SFTP Sync",
    summary:
      "Aplicación legacy en Python que Mateo mantuvo y corrigió, con infraestructura como código, CI/CD y monitoreo en AWS.",
    tags: ["Backend legacy", "AWS", "DevOps", "Terraform"],
    category: "cloud-devops",
    audience: "equipos",
    status: "mantenimiento",
    scope: "mantenimiento",
    notice:
      "Mantenimiento y operación de un sistema existente, que Mateo no construyó. Es un caso distinto del API Sync, construido desde cero. Se muestra solo arquitectura compartible.",
    technicalSummary:
      "Mantenimiento y corrección de una aplicación Python legacy; infraestructura como código con Terraform, CI/CD con GitHub Actions, operación en AWS y trabajo con reportes, logs y bases de datos. En AWS: dashboards en CloudWatch y consultas y tablas en Athena, con S3.",
    businessSummary:
      "Mantener operativo y observable un proceso existente de sincronización de datos, con despliegues automatizados y paneles de monitoreo.",
    context:
      "Aplicación Python legacy que sincronizaba datos de Ticketmaster One mediante archivos SFTP por lotes. Posteriormente fue sustituida por el API Sync.",
    contribution:
      "Mateo la mantuvo y corrigió: infraestructura como código con Terraform, CI/CD con GitHub Actions, operación en AWS, reportes, logs y bases de datos. El repositorio está en el GitHub de la empresa y contiene solo backend.",
    solution:
      "Sin rediseñar el sistema, mejoró su operación: infraestructura reproducible, despliegues automatizados y visibilidad mediante dashboards, consultas y tablas para monitoreo y mantenimiento.",
    decisions: [
      "Infraestructura como código con Terraform.",
      "Despliegues y validaciones con CI/CD en GitHub Actions.",
      "Observabilidad con dashboards en CloudWatch y consultas y tablas en Athena sobre S3.",
    ],
    technologies: [
      "Python",
      "Terraform",
      "GitHub Actions",
      "AWS (CloudWatch, Athena, S3)",
      "SFTP",
      "[TODO: motor de base de datos, si es compartible]",
    ],
    evidence: [
      {
        kind: "repositorio-privado",
        label: "Repositorio privado de la empresa (solo backend). No se publica código.",
      },
    ],
  },

  // 4
  {
    slug: "capi-asistente-whatsapp",
    title: "CAPI",
    summary:
      "Asistente de WhatsApp con IA que permitía a pilotos de una aerolínea consultar información contractual (pagos, descanso y horas de vuelo) usando recuperación de documentos (RAG).",
    tags: ["IA", "n8n", "RAG", "WhatsApp"],
    category: "ia-automatizacion",
    audience: "ambos",
    status: "no-disponible",
    scope: "por-confirmar",
    scopeNote: "[TODO: Mateo — confirmar si lo diseñó y construyó completo o con equipo.]",
    featured: { order: 4 },
    notice:
      "Recreación: el flujo original y sus capturas ya no están disponibles. Lo que se muestra es una reconstrucción conceptual, no material del sistema original.",
    technicalSummary:
      "Flujo en n8n con la API de Anthropic sobre WhatsApp. Acceso restringido a una lista autorizada de usuarios. Los documentos contractuales se indexaron en Pinecone y, por cada pregunta, se recuperaba el fragmento relevante para enviarlo al prompt sin adjuntar siempre el documento completo.",
    businessSummary:
      "Los pilotos consultaban sus condiciones contractuales desde WhatsApp, sin tener que revisar documentos extensos.",
    context:
      "Los pilotos de una aerolínea necesitaban consultar información contractual: pagos, descanso y horas de vuelo. [TODO: Mateo — contexto adicional compartible, sin nombrar a la empresa.]",
    problem:
      "Encontrar un dato concreto dentro de documentos contractuales largos es lento para quien necesita una respuesta puntual.",
    contribution:
      "[TODO: Mateo — detallar qué diseñó y construyó (flujo n8n, indexación, prompts, autenticación).]",
    solution:
      "Un chatbot conectado a WhatsApp, orquestado en n8n con la API de Anthropic. Una lista autorizada controla el acceso y la información se obtiene del fragmento relevante del documento indexado en Pinecone.",
    decisions: [
      "Acceso restringido a una lista autorizada de usuarios.",
      "Recuperación (RAG) con Pinecone: solo el fragmento relevante llega al prompt, no siempre el documento completo.",
      "n8n como orquestador del flujo.",
    ],
    technologies: [
      "n8n",
      "Anthropic API",
      "Pinecone",
      "WhatsApp [TODO: confirmar API o proveedor]",
    ],
    evidence: [
      {
        kind: "recreacion",
        label: "[TODO P-05: diagrama o demo conceptual reconstruido, etiquetado «Recreación».]",
      },
    ],
  },

  // 5
  {
    slug: "andila-visa-application-platform",
    title: "Visa Application Management Platform (Andila)",
    summary:
      "Frontend público bilingüe de una plataforma de solicitudes ESTA y visas estándar de EE. UU. para usuarios de Latinoamérica.",
    tags: ["Frontend", "React", "Bilingüe", "Aplicación web"],
    category: "frontend",
    audience: "ambos",
    status: "produccion",
    scope: "frontend",
    scopeNote:
      "[TODO: Mateo — confirmar si construyó todo el frontend y si trabajó solo o con equipo.]",
    featured: { order: 3 },
    notice:
      "La simulación con IA recoge respuestas básicas, estima la probabilidad de un resultado favorable y propone un plan. Es una simulación orientativa, no una garantía ni una resolución oficial.",
    technicalSummary:
      "SPA con rutas /, /application, /pricing, /contact y /appointment. Textos y datos se gestionan en archivos JSON de traducción con i18next (español/inglés). Interfaz con Framer Motion, Headless UI y librerías de iconos.",
    businessSummary:
      "Un sitio claro y bilingüe que orienta al usuario: un asistente de dos pasos recomienda el tipo de visa y la estadía máxima, y el sitio explica planes, proceso, preguntas frecuentes y contacto.",
    context:
      "Plataforma de gestión de solicitudes ESTA y visas estándar de EE. UU. dirigida a usuarios de Latinoamérica. Este caso cubre su frontend público.",
    problem:
      "Quien solicita una visa necesita saber qué trámite le corresponde y qué ofrece el servicio, en su propio idioma. [TODO: Mateo — confirmar.]",
    contribution:
      "Mateo desarrolló el frontend público de la plataforma. [TODO: Mateo — precisar módulos y nivel de autoría.]",
    solution:
      "Asistente de dos pasos (nacionalidad y propósito del viaje) que recomienda visa y estadía máxima; páginas de planes; proceso explicado con video; testimonios; FAQ animada; contacto; e interfaz en español e inglés. Incluye una simulación con IA que estima la probabilidad de un resultado favorable y propone un plan.",
    decisions: [
      "SPA con React Router 7 y rutas /, /application, /pricing, /contact y /appointment.",
      "Textos y datos en JSON de traducción con i18next para español e inglés.",
      "Animaciones con Framer Motion y componentes de interfaz con Headless UI.",
    ],
    technologies: [
      "React 19",
      "TypeScript 5.8",
      "Vite 7",
      "Tailwind CSS 4",
      "Framer Motion",
      "Headless UI",
      "Lucide / Heroicons",
      "i18next",
      "React Router 7",
    ],
    evidence: [
      { kind: "sitio-publico", label: "andilagroup.com", url: "https://andilagroup.com" },
    ],
  },

  // 6
  {
    slug: "librechat-empresarial-sfai",
    title: "LibreChat empresarial (SFAI)",
    summary:
      "Trabajo frontend para dar continuidad a la sesión desde el sitio de una empresa hacia LibreChat, además de participación en modificaciones y agentes.",
    tags: ["Frontend", "Integración de sesión", "Colaboración"],
    category: "frontend",
    audience: "equipos",
    status: "no-publicado",
    scope: "colaboracion",
    notice:
      "LibreChat es una base open source con funciones ya existentes y el equipo era amplio: aquí se describe solo la contribución de Mateo. El proyecto no llegó a publicarse y no se muestran código ni pantallas de la empresa.",
    technicalSummary:
      "Continuidad de sesión entre el sitio corporativo y LibreChat, accesible desde la versión corporativa, y participación en algunas modificaciones y agentes.",
    context:
      "SFAI adaptó LibreChat, una plataforma de chat open source, para uso empresarial. [TODO: Mateo — contexto compartible del objetivo.]",
    contribution:
      "Mateo trabajó en el frontend para que la sesión continuara desde el sitio de la empresa hacia LibreChat y participó en algunas modificaciones y agentes. [TODO: Mateo — detallar sin exponer información confidencial.]",
    solution:
      "Un acceso desde la versión corporativa que conserva la sesión del usuario al entrar a LibreChat.",
    decisions: ["[TODO: Mateo — decisiones técnicas compartibles sobre la continuidad de sesión.]"],
    technologies: ["LibreChat (base open source)", "[TODO: tecnologías frontend usadas]"],
    evidence: [
      {
        kind: "repositorio-privado",
        label: "Repositorio de la empresa, sin acceso. No se muestran código ni pantallas.",
      },
    ],
  },

  // 7
  {
    // TODO P-04 / D-011: nombre provisional, confirmar título y grafía (Rodriguez / Rodríguez).
    slug: "portafolio-luciana-rodriguez",
    title: "Portafolio de Luciana Rodriguez",
    summary:
      "Sitio frontend para que Luciana Rodriguez muestre sus proyectos, hecho con React, TypeScript y Vite.",
    tags: ["Frontend", "React", "TypeScript", "Vite"],
    category: "frontend",
    audience: "equipos",
    status: "no-publicado",
    scope: "frontend",
    scopeNote:
      "[TODO P-04: Mateo — precisar su papel (diseño, desarrollo, contenido) y confirmar el título público y la grafía del apellido.]",
    notice: "El sitio no está publicado. Se muestra con consentimiento de la persona retratada.",
    technicalSummary:
      "Sitio de portafolio hecho con React, TypeScript y Vite, con técnicas y herramientas frontend. El código está en el GitHub de Mateo.",
    context: "Portafolio personal para que Luciana Rodriguez presente sus proyectos.",
    contribution: "[TODO P-04: Mateo — explicar su papel exacto en el proyecto.]",
    solution:
      "Sitio frontend para presentar proyectos y portafolio. [TODO: Mateo — secciones y detalles frontend relevantes.]",
    decisions: ["[TODO: Mateo — técnicas o decisiones frontend destacadas.]"],
    technologies: ["React", "TypeScript", "Vite"],
    evidence: [
      {
        kind: "repositorio-publico",
        label: "[TODO P-05: URL del repositorio en GitHub de Mateo y confirmar si es público.]",
      },
    ],
  },

  // 8
  {
    slug: "tienda-uniformes-medicos",
    title: "Tienda online de uniformes médicos",
    summary:
      "Versión inicial de una tienda online de uniformes médicos, con personalización de código Liquid.",
    tags: ["E-commerce", "Liquid", "Versión inicial"],
    category: "ecommerce",
    audience: "clientes",
    status: "produccion",
    scope: "version-inicial",
    notice:
      "El sitio actual ha cambiado y mejorado desde esa implementación. Aquí se atribuye a Mateo solo la etapa inicial y los cambios que hizo, no el estado actual completo.",
    businessSummary:
      "Puesta en marcha de la tienda online con una versión inicial personalizada a las necesidades del negocio. [TODO: Mateo — qué se personalizó, en lenguaje de negocio.]",
    context: "Tienda online de uniformes médicos. [TODO: Mateo — necesidad de la versión inicial.]",
    problem: "[TODO: Mateo — qué necesitaba resolver la tienda en su versión inicial.]",
    contribution:
      "Mateo realizó la versión inicial y personalizó código Liquid. [TODO: Mateo — detallar los cambios concretos.]",
    solution: "[TODO: Mateo — qué se personalizó y cómo mejoró la tienda.]",
    decisions: ["[TODO: Mateo — decisiones técnicas relevantes de la personalización.]"],
    technologies: ["Liquid", "[TODO: plataforma de e-commerce utilizada]"],
    evidence: [
      {
        kind: "ninguna",
        label:
          "No se muestra el enlace de la tienda. [TODO P-06: permiso para nombrar la marca y enlazar el sitio; mientras tanto, capturas autorizadas P-05.]",
      },
    ],
  },

  // 9
  {
    slug: "fundacion-la-juanfe",
    title: "Fundación La Juanfe",
    summary:
      "Sitio web completo de la Fundación La Juanfe: diseño, UI/UX, desarrollo y puesta en línea.",
    tags: ["Sitio web", "Fundación", "UI/UX", "Desarrollo"],
    category: "sitio-web",
    audience: "clientes",
    status: "produccion",
    scope: "sitio-completo",
    businessSummary:
      "La fundación cuenta con su presencia en línea, entregada de principio a fin: diseño, experiencia de usuario, desarrollo y publicación.",
    context:
      "Sitio público de la Fundación La Juanfe. [TODO: Mateo — qué necesitaba comunicar la fundación y qué secciones tiene el sitio.]",
    problem: "[TODO: Mateo — necesidad de la fundación que el sitio resolvía.]",
    contribution: "Mateo hizo el sitio completo: diseño, UI/UX, desarrollo y puesta en línea.",
    solution: "[TODO: Mateo — estructura y características principales del sitio.]",
    decisions: ["[TODO: Mateo — decisiones de diseño y desarrollo destacadas.]"],
    technologies: ["[TODO: tecnologías y herramientas de diseño usadas]"],
    evidence: [{ kind: "sitio-publico", label: "juanfe.org", url: "https://juanfe.org" }],
  },

  // 10
  {
    slug: "fedesmeraldas",
    title: "Fedesmeraldas",
    summary:
      "Sitio web completo de Fedesmeraldas: diseño, UI/UX, desarrollo y puesta en línea.",
    tags: ["Sitio web", "Organización", "UI/UX", "Desarrollo"],
    category: "sitio-web",
    audience: "clientes",
    status: "produccion",
    scope: "sitio-completo",
    businessSummary:
      "La organización cuenta con su presencia en línea, entregada de principio a fin: diseño, experiencia de usuario, desarrollo y publicación.",
    context:
      "Sitio público de Fedesmeraldas. [TODO: Mateo — qué es la organización, qué necesitaba comunicar y qué secciones tiene el sitio.]",
    problem: "[TODO: Mateo — necesidad de la organización que el sitio resolvía.]",
    contribution: "Mateo hizo el sitio completo: diseño, UI/UX, desarrollo y puesta en línea.",
    solution: "[TODO: Mateo — estructura y características principales del sitio.]",
    decisions: ["[TODO: Mateo — decisiones de diseño y desarrollo destacadas.]"],
    technologies: ["[TODO: tecnologías y herramientas de diseño usadas]"],
    evidence: [
      { kind: "sitio-publico", label: "fedesmeraldas.org", url: "https://fedesmeraldas.org" },
    ],
  },

  // 11
  {
    slug: "tecniclick",
    title: "TecniClick",
    summary:
      "Proyecto de estudio de Henry realizado en equipo, presentado como colaboración académica.",
    tags: ["Académico", "Colaboración", "Aprendizaje"],
    category: "full-stack",
    audience: "aprendizaje",
    status: "academico",
    scope: "colaboracion",
    notice:
      "Proyecto académico realizado en equipo y no publicado. Se describe solo la contribución de Mateo.",
    context:
      "Proyecto de estudio realizado en Henry, en equipo. [TODO: Mateo — de qué trata TecniClick.]",
    contribution: "[TODO: Mateo — qué parte del proyecto desarrolló dentro del equipo.]",
    solution: "[TODO: Mateo — qué hace la aplicación a grandes rasgos.]",
    decisions: ["[TODO: Mateo — decisiones técnicas del equipo o propias.]"],
    technologies: ["[TODO: tecnologías usadas]"],
    evidence: [
      {
        kind: "repositorio-publico",
        label: "[TODO P-05: URL del repositorio en GitHub, si existe y es público.]",
      },
    ],
  },

  // 12
  {
    slug: "clinicbook",
    title: "ClinicBook",
    summary:
      "Uno de los primeros proyectos de estudio de Mateo, principalmente frontend y con poco backend.",
    tags: ["Aprendizaje", "Frontend"],
    category: "frontend",
    audience: "aprendizaje",
    status: "aprendizaje",
    scope: "aprendizaje",
    notice: "Proyecto de aprendizaje, no un caso de producción. No está publicado.",
    context:
      "Uno de los primeros proyectos de estudio de Mateo. [TODO: Mateo — de qué trata ClinicBook.]",
    contribution:
      "Proyecto individual de aprendizaje, centrado en frontend, con poco backend. [TODO: Mateo — confirmar que lo hizo solo y qué aprendió.]",
    solution: "[TODO: Mateo — qué hace la aplicación a grandes rasgos.]",
    decisions: ["[TODO: Mateo — decisiones técnicas relevantes.]"],
    technologies: ["[TODO: tecnologías usadas]"],
    evidence: [
      {
        kind: "repositorio-publico",
        label: "[TODO P-05: URL del repositorio en GitHub y confirmar si es público.]",
      },
    ],
  },
];

// Home: destacados ordenados. Las páginas de equipos/clientes también usan esta lista.
export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => (a.featured?.order ?? 0) - (b.featured?.order ?? 0));

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

export const projectsPage = {
  eyebrow: "PROYECTOS",
  title: "Proyectos",
  intro:
    "Todos los casos con su alcance real: producción, mantenimiento, no publicados y de aprendizaje.",
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
