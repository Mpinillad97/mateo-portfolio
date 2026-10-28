// Contenido de /contacto. Sin formulario: solo se mostrarán canales públicos
// cuando estén confirmados. No inventar correos ni enlaces.

import { type LinkData, routes } from "./site";

export type ContactOption = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  include: string[];
  channelTodo: string;
  related: LinkData;
  tone: "ink" | "lime";
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
    channelTodo: "Canal profesional (correo o LinkedIn) cuando esté confirmado",
    related: { label: "Ver perfil para equipos", href: routes.teams },
    tone: "ink",
  },
  {
    id: "proyecto-cliente",
    eyebrow: "PARA CLIENTES",
    title: "Proyecto de cliente",
    text: "Para personas o empresas que necesitan un sitio web, una integración o una automatización.",
    include: ["[TODO: qué información conviene incluir en el mensaje.]"],
    channelTodo: "Canal para proyectos (correo u otro) cuando esté confirmado",
    related: { label: "Ver la página para clientes", href: routes.clients },
    tone: "lime",
  },
];
