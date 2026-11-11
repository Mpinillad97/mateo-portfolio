// Contenido de /contacto. Sin formulario: solo se mostrarán canales públicos
// cuando estén confirmados. No inventar correos ni enlaces.

import { type LinkData, routes } from "./site";

export type ContactChannelId = "email" | "linkedin" | "github" | "cv" | "whatsapp";

export type ContactChannel = {
  id: ContactChannelId;
  label: string; // etiqueta visible
  value: string; // texto mostrado
  href: string;
  external: boolean; // pestaña nueva con rel="noopener noreferrer"
  // true = valor ficticio (D-007). No se renderiza como enlace y se marca como
  // provisional. Al confirmar el canal: cambiar value, href y provisional.
  provisional: boolean;
};

// PROVISIONAL (P-02): valores ficticios; no publicar el sitio mientras haya alguno.
export const contactChannels: ContactChannel[] = [
  { id: "email", label: "Correo", value: "mateo@example.com", href: "mailto:mateo@example.com", external: false, provisional: true },
  { id: "linkedin", label: "LinkedIn", value: "linkedin.com/in/TODO-mateo-pinilla", href: "https://www.linkedin.com/in/TODO-mateo-pinilla", external: true, provisional: true },
  { id: "github", label: "GitHub", value: "github.com/TODO-mateo-pinilla", href: "https://github.com/TODO-mateo-pinilla", external: true, provisional: true },
  { id: "cv", label: "CV (PDF)", value: "Descargar CV", href: "/cv/mateo-pinilla-cv.pdf", external: false, provisional: true }, // el archivo aún no existe
  { id: "whatsapp", label: "WhatsApp", value: "+57 300 000 0000", href: "https://wa.me/573000000000", external: true, provisional: true },
];

export const getChannel = (id: ContactChannelId) => contactChannels.find((c) => c.id === id);
export const provisionalLabel = "Dato provisional";

export type ContactOption = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  include: string[];
  channels: ContactChannelId[];
  related: LinkData;
  tone: "dark" | "lime";
};

export const contactPage = {
  eyebrow: "CONTACTO",
  title: "Hablemos",
  intro: "Hay dos formas de escribirme, según lo que busques.",
};

export const contactOptions: ContactOption[] = [
  {
    id: "oportunidad-laboral",
    eyebrow: "PARA EQUIPOS",
    title: "Oportunidad en un equipo",
    text: "Para personas que contratan o lideran equipos de desarrollo y quieren hablar de un puesto.",
    include: ["[TODO: qué información conviene incluir en el mensaje.]"],
    channels: ["email", "linkedin", "cv"],
    related: { label: "Ver perfil para equipos", href: routes.teams },
    tone: "dark",
  },
  {
    id: "proyecto-cliente",
    eyebrow: "PARA CLIENTES",
    title: "Proyecto de cliente",
    text: "Para personas o empresas que necesitan un sitio web, una integración o una automatización.",
    include: ["[TODO: qué información conviene incluir en el mensaje.]"],
    channels: ["email", "whatsapp"],
    related: { label: "Ver la página para clientes", href: routes.clients },
    tone: "lime",
  },
];
