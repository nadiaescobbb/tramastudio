# HeyTrama

Sitio institucional de **HeyTrama**, estudio independiente que trabaja entre estrategia digital, diseño de producto y desarrollo frontend.

El proyecto presenta los servicios del estudio, su metodología de trabajo, proyectos y canales de contacto.

**Web:** https://www.heytrama.com
**Repositorio:** https://github.com/nadiaescobbb/tramastudio

## Stack

- React 18
- TypeScript 5
- Vite 8
- Tailwind CSS 3
- React Router 6
- Motion
- Vitest y React Testing Library
- ESLint
- Husky y Commitlint

## Funcionalidades

- Sitio institucional responsive.
- Navegación mediante React Router.
- Carga diferida de determinadas páginas.
- Listado de proyectos administrado desde datos estructurados.
- Integración con Google Analytics 4 mediante variable de entorno.
- Botón de contacto por WhatsApp.
- Prerender estático de la página principal.

## Arquitectura

La aplicación separa páginas, componentes reutilizables, datos y utilidades.

Rutas principales:

| Ruta | Contenido |
|---|---|
| `/` | Página principal |
| `/proyectos` | Listado de proyectos |
| `*` | Página no encontrada |

La ruta `/__preview/mascota` está disponible únicamente en desarrollo.

### Prerenderizado

El proceso de build incluye un prerender estático de la página principal mediante `renderToString` y `StaticRouter`.

No implementa SSR completo ni genera HTML independiente para todas las rutas.

## Sistema de diseño

Los tokens visuales se centralizan en `src/index.css` y utilizan valores HSL.

- **Colores principales:** bone y charcoal.
- **Títulos:** Fraunces.
- **Texto general:** Aventa.
- **Etiquetas y detalles técnicos:** Orlean.

Las fuentes se cargan localmente en formato WOFF2.

## Proyectos

Los datos se centralizan en `src/data/projects.ts`.

| Proyecto | Tipo | Estado |
|---|---|---|
| FAMVAR | Catálogo y tienda online | En desarrollo |
| CUORE | Catálogo y experiencia digital | En desarrollo |

## Instalación

Requisitos: Node.js y npm.

```bash
git clone https://github.com/nadiaescobbb/tramastudio.git
cd tramastudio
npm install
```

Iniciar el servidor local:

```bash
npm run dev
```

Vite utiliza el puerto `8080`.

## Comandos

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compilación y prerender |
| `npm run build:dev` | Build en modo development |
| `npm run preview` | Previsualización del build |
| `npm run lint` | Análisis estático |
| `npm test` | Ejecución de tests |
| `npm run test:watch` | Tests en modo watch |

## Variables de entorno

La integración con Google Analytics 4 utiliza:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

La variable es opcional. Sin un identificador configurado, Analytics no registra visitas.

Las variables con prefijo `VITE_` quedan expuestas en el código del navegador. No deben contener secretos ni credenciales privadas.

## Build

```bash
npm run build
```

El resultado se genera en `dist/`. El proyecto utiliza Vercel para el despliegue.

## Autoría

**Nadia Escobar**
Estrategia digital y desarrollo frontend.