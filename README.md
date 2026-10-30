# mateo-portfolio

Repositorio del portafolio profesional de Mateo, desarrollador Full Stack. El sitio se dirige a dos públicos: equipos de desarrollo que buscan incorporar a alguien y personas o empresas que necesitan un proyecto. Ya existe la estructura de todas las páginas, la navegación y los componentes reutilizables; el contenido definitivo está pendiente y se marca con `TODO` (en el texto y con bloques `TodoBlock` visibles en la página).

El concepto visual acordado es minimalista: fondo marfil, texto oscuro y acentos verde lima.

## Stack

- [Next.js](https://nextjs.org/) 16 con App Router
- React 19 y TypeScript
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Motion](https://motion.dev/) para React (`motion`), usado en la tarjeta del hero
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

## Rutas

| Ruta                | Página                                                      |
| ------------------- | ----------------------------------------------------------- |
| `/`                 | Home: entrada común con caminos hacia equipos y clientes    |
| `/para-equipos`     | Perfil profesional para equipos de contratación             |
| `/para-clientes`    | Soluciones, forma de trabajo y ejemplos para clientes       |
| `/proyectos`        | Índice de proyectos                                         |
| `/proyectos/[slug]` | Plantilla de caso de proyecto                               |
| `/sobre-mi`         | Presentación personal                                       |
| `/contacto`         | Dos vías: `#oportunidad-laboral` y `#proyecto-cliente`      |

Las rutas se centralizan en `routes` (`data/site.ts`). Todas se generan como páginas estáticas.

### Proyectos y la ruta dinámica

`/proyectos/[slug]` genera una página por cada entrada de `data/projects.ts` (`generateStaticParams`) y devuelve 404 para cualquier otro slug (`dynamicParams = false`). Las tres entradas actuales (`proyecto-1`, `proyecto-2`, `proyecto-3`) son **plantillas** para revisar el diseño: hay que sustituirlas por proyectos confirmados. Los campos opcionales que falten (contexto, contribución, solución, decisiones, tecnologías, resultado, evidencias) se muestran automáticamente como bloques `TODO`. Si se vacía la lista, el índice muestra un aviso y no se genera ninguna página de caso.

## Estructura de carpetas

```
app/                Una carpeta por ruta (page.tsx), más layout.tsx y globals.css
components/
  layout/           Header (navbar grafito con menú móvil) y Footer
    navbar/         Piezas de la línea lima del navbar: Monogram (logo M),
                    Rail, BranchFork, MobileMenu, geometría y animación
  sections/         Bloques compuestos con contenido de data/: Hero,
                    EntryPoints, SelectedWork, WorkAreas, AboutTeaser,
                    AudienceCta, ContactOptionCard, PlaceholderSection
    hero/           Muestra de capacidades del hero: ShowcaseCard (carrusel),
                    ShowcaseFace (marco) y views/ (una demo por área)
  projects/         ProjectCard, ProjectGrid y CaseBlock (página de caso)
  ui/               Piezas genéricas: Container, Section, Band, PageHero,
                    Eyebrow, Card, ButtonLink, TextLink, CtaBanner,
                    ItemGrid, Steps, Faq, TodoBlock, LanguageBadge
data/
  site.ts           Rutas, navegación, datos generales y textos del hero
  showcase.ts       Las cuatro vistas de la muestra del hero (contenido demo)
  home.ts           Secciones del Home y cierre reutilizable (AudienceCta)
  areas.ts          Áreas de trabajo y stack por especialidad
  projects.ts       Proyectos (plantillas) y textos de la página de caso
  teams.ts          /para-equipos
  clients.ts        /para-clientes
  about.ts          /sobre-mi
  contact.ts        /contacto
public/
  images/           Imágenes y recursos visuales del sitio
```

### Cómo editar el contenido

Los textos viven en `data/` y no en los componentes, así que la mayoría de cambios de contenido se hacen allí. Hay dos tipos de marcador:

- Texto `[TODO: …]` dentro de los datos, para títulos o frases cortas.
- Bloques `TodoBlock` (recuadro discontinuo con la etiqueta `TODO`) para secciones completas. Sus `hints` describen qué falta escribir; no son contenido final.

Busca `TODO` en el proyecto para ver todo lo pendiente.

### Colores

Paleta en exploración: fondo verde niebla, texto carbón, acento lima y superficies grafito puntuales. Todos los colores están en `app/globals.css` dentro de `@theme` (con los contrastes de referencia en un comentario) y se usan como clases de Tailwind (`bg-mist`, `text-carbon`, etc.). Para ajustar la paleta solo hay que cambiar esos valores.

| Token          | Valor     | Uso                                                       |
| -------------- | --------- | --------------------------------------------------------- |
| `mist`         | `#dce3d8` | Fondo principal de páginas y secciones                    |
| `mist-light`   | `#e8ede5` | Superficies elevadas: tarjetas, control de la tarjeta     |
| `mist-dark`    | `#ccd5c7` | Superficies hundidas: bloques TODO, hover                 |
| `line`         | `#b9c4b4` | Bordes y separadores decorativos                          |
| `carbon`       | `#182019` | Texto principal y botón oscuro                            |
| `carbon-muted` | `#4a564b` | Texto secundario                                          |
| `graphite`     | `#141715` | Superficies oscuras: tarjeta de código y cierre destacado |
| `ivory`        | `#f3f0e7` | Texto sobre grafito o carbón                              |
| `ivory-muted`  | `#a3a29b` | Texto secundario sobre grafito                            |
| `lime`         | `#b6e45c` | Acciones, indicadores y detalles                          |
| `lime-hover`   | `#a5d54a` | Hover de los botones lima                                 |
| `lime-deep`    | `#3a6212` | Acento legible sobre fondos claros: foco, subrayados      |

La lima tiene muy poco contraste con el verde niebla (1.1:1), así que sobre fondos claros no se usa como texto, borde ni color de foco; en esos casos se usa `lime-deep`.

### Motion

`motion` se importa desde `motion/react` dentro de componentes de cliente (`"use client"`). Se usa en dos sitios:

- **Navbar** (`components/layout/navbar/`): la línea lima se dibuja una sola vez al cargar.
- **Muestra del hero** (`components/sections/hero/ShowcaseCard.tsx`): cuatro vistas (Web / Frontend, Backend / Integraciones, IA / Automatización, Cloud / DevOps) en el mismo marco.
  - Avanza cada 6 s con un giro 3D; la barra de progreso de la vista activa se llena durante ese tiempo.
  - Se pausa con el cursor encima, con el foco de teclado dentro, con la pestaña oculta o con el botón de pausa (conserva el progreso).
  - Botones de vista anterior y siguiente, y los indicadores permiten ir a cualquier vista.
  - Con movimiento reducido no hay giro ni avance automático (y no se muestra el botón de pausa); el cambio manual usa un fundido.

En ambos casos el movimiento reducido se comprueba con `useReducedMotion`, porque `MotionConfig reducedMotion="user"` no cubre `pathLength` ni la opacidad.

El contenido de las cuatro vistas está en `data/showcase.ts` y es **demostrativo** (etiquetado `DEMO VISUAL`): interfaz, código y flujos genéricos, sin proyectos, clientes ni datos reales. Está pensado para sustituirse por evidencia real de proyectos.

## Pendiente

- Contenido real: apellido, proyectos, textos de cada página, stack, biografía, trayectoria y canales de contacto (correo, LinkedIn, CV).
- Titular del hero (provisional).
- Tipografía definitiva (ahora se usa la fuente del sistema).
- Traducciones: el indicador `ES` del navbar es solo visual.
- Imágenes en `public/images/`.
- Menú de navegación en móvil (ahora es una fila desplazable).
- Despliegue (no configurado todavía).
