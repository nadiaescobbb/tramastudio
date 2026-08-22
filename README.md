# heytrama

Estudio independiente de diseño de producto y desarrollo frontend.

[Sitio](#) · [LinkedIn](#) · [Email](#)

## Qué hace heytrama

heytrama no vende sitios web: diseña y construye herramientas digitales que ayudan a comunicar mejor y facilitar una decisión de compra. La tecnología es el medio, no el producto — cada decisión, de un color a un patrón de arquitectura, tiene que reducir fricción, organizar información o generar confianza. Si una decisión no cumple esa función, no entra al proyecto.

El proceso se ordena en cuatro etapas: entender el negocio antes de proponer nada, comunicar la propuesta con la misma claridad que se le va a pedir al producto final, construirlo con un stack que prioriza mantenibilidad sobre complejidad innecesaria, y acompañar después del lanzamiento en vez de entregar y desaparecer.

## Sistema de diseño

La identidad visual usa tokens HSL desacoplados, definidos en `src/index.css` y extendidos en `tailwind.config.ts`.

| Token | Valor | Uso |
|---|---|---|
| Warm Paper Canvas | `40 20% 98%` (#FBFBFA) | Superficie base |
| Editorial Accent | `15 65% 45%` (terracota) | Énfasis de texto, CTAs, bordes activos |
| Studio Dark | `40 10% 8%` (#131211) | Bloques oscuros en tarjetas y casos de estudio |

Tipografía: Fraunces para títulos editoriales, Hanken Grotesk para cuerpo, Space Mono para el detalle técnico — la misma lógica mixta entre elegancia editorial y precisión que se aplica al resto del sistema.

## Casos

**Cuore** — landing de conversión para un taller de joyería y relojería, con animaciones nativas sin dependencias externas y arquitectura pensada para derivar consultas a WhatsApp con contexto precargado. Cliente real.

**FlowBoard** — dashboard de operaciones de revenue construido como pieza técnica de portfolio: patrón `Result<T>`, branded types, tests con Vitest y Playwright, repositorio público. No es trabajo de cliente — es la evidencia de cómo se piensa una capa de datos cuando el proyecto lo permite sin restricción comercial.

**FAMVAR** — catálogo digital para un negocio familiar de tecnología y bazar importado, con fichas técnicas dinámicas y conversión a WhatsApp. Es un proyecto propio, no un caso de cliente pago, y se muestra como tal: es donde se prueban patrones (como la conversión a WhatsApp que después se reutilizó en Cuore) antes de ofrecerlos a un cliente.

## Stack

| Tecnología | Rol |
|---|---|
| React 18 | UI y arquitectura de componentes |
| TypeScript | Tipado estático para datasets, props y contratos |
| Tailwind CSS v3 | Utilidades y mapeo de tokens HSL |
| React Router v6 | Rutas `/` y `/dossier` |
| Vite + Vitest | Entorno de desarrollo y tests unitarios |
| Husky + Commitlint | Validación de commits |

## Estructura

```
tramastudio/
├── .husky/                  # Git hooks (Vitest, Commitlint)
├── public/
├── src/
│   ├── assets/
│   ├── components/           # Nav, ServicesStack, Metodologia, ContactForm
│   ├── data/                 # projects.ts, project-images.ts
│   ├── hooks/                 # use-reveal.ts
│   ├── lib/                   # seo.ts, utils.ts
│   ├── pages/                 # Index.tsx, Dossier.tsx, NotFound.tsx
│   ├── test/
│   ├── index.css
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.ts
├── vite.config.ts
└── vitest.config.ts
```

## Desarrollo local

```bash
git clone https://github.com/nadiaescobbb/tramastudio.git
cd tramastudio
npm install
npm run dev
npm test
npm run build
```

## Créditos

Nadia Escobar — dirección de producto, diseño UI/UX y desarrollo frontend.
