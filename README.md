# mateo-portfolio

Repositorio del portafolio profesional de Mateo. Por ahora contiene solo el **esqueleto inicial**: una página de inicio estructural y responsive con navegación y secciones provisionales (presentación, proyectos, capacidades, sobre mí y contacto). El contenido real todavía no está definido; todo lo pendiente está marcado con `TODO`.

El concepto visual acordado es minimalista: fondo marfil, texto oscuro y acentos verde lima.

## Stack

- [Next.js](https://nextjs.org/) 16 con App Router
- React 19 y TypeScript
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Motion](https://motion.dev/) para React (`motion`), instalado pero aún sin usar
- ESLint 9 con la configuración oficial de Next.js

No hay backend, base de datos, autenticación, llamadas a APIs, analítica ni formularios que envíen información.

## Requisitos

- Node.js 20.9 o superior
- npm

## Instalación y uso

```bash
npm install       # instala las dependencias
npm run dev       # servidor de desarrollo en http://localhost:3000
npm run build     # compilación de producción
npm run start     # sirve la compilación de producción
npm run lint      # revisa el código con ESLint
```

## Estructura de carpetas

```
app/
  layout.tsx        Layout raíz: metadatos, cabecera y pie de página
  page.tsx          Página de inicio; compone las secciones en orden
  globals.css       Estilos globales y tokens de color (Tailwind @theme)
components/
  layout/           Header (navegación) y Footer
  sections/         Una sección de la página por archivo: Hero, Projects,
                    Capabilities, About, Contact
  ui/               Piezas reutilizables: Container, Section, Card, ButtonLink
data/
  site.ts           Nombre, navegación, textos del hero, sobre mí y contacto
  projects.ts       Lista de proyectos (provisional)
  capabilities.ts   Lista de capacidades (provisional)
public/
  images/           Imágenes y recursos visuales del sitio
```

### Cómo editar el contenido

Los textos viven en `data/` y no en los componentes, así que la mayoría de cambios de contenido se hacen allí. Busca `TODO` en el proyecto para ver todo lo que falta completar.

### Colores

Los tokens están en `app/globals.css` dentro de `@theme` y se usan como clases de Tailwind:

| Token           | Uso                         |
| --------------- | --------------------------- |
| `ivory`         | Fondo principal             |
| `ivory-dark`    | Fondos secundarios          |
| `ink`           | Texto principal             |
| `ink-muted`     | Texto secundario            |
| `line`          | Bordes y separadores        |
| `lime`          | Acento                      |
| `lime-dark`     | Acento sobre fondos claros  |

### Motion

`motion` está instalado para animaciones futuras (por ejemplo, el giro de la tarjeta del hero). Se importa desde `motion/react` dentro de componentes de cliente (`"use client"`).

## Pendiente

- Contenido real: apellido, rol, textos, proyectos, capacidades y canales de contacto.
- Tipografía definitiva (ahora se usa la fuente del sistema).
- Diseño y animación de la tarjeta del hero.
- Imágenes en `public/images/`.
- Menú de navegación en móvil (ahora es una fila desplazable).
- Despliegue (no configurado todavía).
