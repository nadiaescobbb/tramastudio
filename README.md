# 🏛️ HeyTrama — Estudio de Productos Digitales & Frontend

> Práctica independiente de diseño de producto y desarrollo frontend enfocada en marcas, landings y experiencias digitales con alta intención comercial.

[![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Husky](https://img.shields.io/badge/Husky-Git_Hooks-black?style=flat-square&logo=git)](https://typicode.github.io/husky/)
[![Live Site](https://img.shields.io/badge/Live-heytrama.com-111111?style=flat-square&logo=safari&logoColor=white)](https://heytrama.com)

---

## 📌 Enfoque & Propósito

HeyTrama plantea una alternativa al formato genérico de agencia de marketing: articula su propuesta alrededor de **criterio visual, arquitectura frontend y rendimiento**. 

El objetivo del sitio es proyectar una identidad propia (**Swiss Minimal / Editorial Canvas**) sin perder claridad comercial: comunicar qué se construye, cómo se piensa el producto y por qué las decisiones de ingeniería impactan directamente en la conversión.

---

## 🎨 Sistema de UI & Arquitectura de Diseño

El sistema visual implementa principios de *Refactoring UI* mediante **tokens HSL desacoplados** configurados en `src/index.css` y `tailwind.config.ts`:

| Token / Layer | Valor HSL / Hex | Aplicación |
| :--- | :--- | :--- |
| **Warm Paper Canvas** | `40 20% 98%` (`#FBFBFA`) | Superficie base con fondo cálido y tipografía en contraste neutro. |
| **Editorial Accent** | `15 65% 45%` (Terracota) | Énfasis sutiles de texto, llamados a la acción y bordes activos. |
| **Studio Dark** | `40 10% 8%` (`#131211`) | Bloques oscuros en tarjetas de servicios y casos de estudio (WCAG AA). |
| **Tipografía Editorial** | *Fraunces* + *Hanken Grotesk* + *Space Mono* | Jerarquía mixta entre elegancia editorial y precisión técnica monospaciada. |

---

## 💼 Casos de Estudio Integrados

* **[FAMVAR](https://github.com/nadiaescobbb)** — Catálogo digital y plataforma e-commerce para tecnología y bazar importado, optimizada con fichas técnicas dinámicas y conversión a WhatsApp.
* **[CUORE](https://github.com/nadiaescobbb/cuore-joyeria)** — Experiencia web para joyería y relojería de alta gama, con animaciones nativas sin dependencias y diseño editorial.

---

## 🛠️ Stack Tecnológico & Tooling

| Tecnología | Rol en el Proyecto |
| :--- | :--- |
| **React 18** | UI Framework declarativo y arquitectura de componentes |
| **TypeScript** | Tipado estático estricto para datasets, props y contratos |
| **Tailwind CSS v3** | Sistema de utilidades y mapeo de tokens HSL |
| **React Router v6** | Enrutamiento SPA con vistas dedicadas (`/`, `/dossier`) |
| **Vite & Vitest** | Entorno de desarrollo rápido y suite de pruebas unitarias |
| **Husky & Commitlint** | Pre-commit hooks para validación de commits y control de calidad |

---

## 📁 Estructura del Proyecto

```text
tramastudio/
├── ⚙️ .husky/                  # Git Hooks (Vitest & Commitlint)
├── 🌐 public/                  # Assets estáticos y favicons
├── 💻 src/
│   ├── assets/                 # Recursos gráficos locales
│   ├── components/             # Componentes UI (Nav, ServicesStack, Metodologia, ContactForm)
│   ├── data/                   # Datasets tipados (projects.ts, project-images.ts)
│   ├── hooks/                  # Custom Hooks (use-reveal.ts para scroll reveal nativo)
│   ├── lib/                    # Helpers y utilidades de SEO (seo.ts, utils.ts)
│   ├── pages/                  # Vistas principales (Index.tsx, Dossier.tsx, NotFound.tsx)
│   ├── test/                   # Pruebas unitarias con Vitest & Testing Library
│   ├── index.css               # Design Tokens HSL & Utility Classes
│   ├── App.tsx                 # Configuración del Router
│   └── main.tsx                # Entry point
├── 🔧 tailwind.config.ts       # Extensión de tokens y tipografías
├── ⚡ vite.config.ts           # Configuración del bundler
└── 🧪 vitest.config.ts         # Configuración del test runner

```

---

## 🚀 Desarrollo Local

### 1. Clonar e instalar dependencias

```bash
git clone [https://github.com/nadiaescobbb/tramastudio.git](https://github.com/nadiaescobbb/tramastudio.git)
cd tramastudio
npm install

```

### 2. Comandos de desarrollo

```bash
# Iniciar servidor local
npm run dev

# Ejecutar suite de tests
npm test

# Compilación para producción
npm run build

```

---

## 📬 Contacto & Créditos

**Nadia Escobar** — Dirección de Producto, Diseño UI/UX & Desarrollo Frontend.

[Sitio Web](https://heytrama.com) · [LinkedIn](https://www.linkedin.com/in/nadia-escobar-2b6095265) · [Email](https://www.google.com/search?q=mailto%3Anadiaescobbb%40gmail.com)
