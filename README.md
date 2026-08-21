[![CI](https://github.com/nadiaescobbb/tramastudio/actions/workflows/ci.yml/badge.svg)](https://github.com/nadiaescobbb/tramastudio/actions/workflows/ci.yml)

# HeyTrama — Estudio de Productos Digitales & Desarrollo Frontend

Sitio web oficial de **HeyTrama**, práctica independiente de diseño de producto y desarrollo frontend enfocada en marcas, landings y experiencias digitales con alta intención comercial.

El objetivo del proyecto es transmitir una identidad visual propia (*Swiss Minimal / Editorial Canvas*) sin perder claridad estratégica: qué se ofrece, cómo se piensa el negocio y por qué la tecnología y la interfaz son herramientas clave para la decisión de compra.

---

## 📌 Contexto & Enfoque

HeyTrama evita el formato genérico de agencia de marketing. Ordena su mensaje alrededor de **criterio de diseño, proceso técnico y resultados de negocio**, captando clientes que valoran la calidad en el detalle visual y el rendimiento frontend.

---

## 👤 Rol & Dirección

**Nadia Escobar** — Dirección de Producto, Diseño UI/UX, Desarrollo Frontend (React/TypeScript), Arquitectura CSS, Animaciones y Redacción Narrativa.

---

## 🎨 Sistema de UI & Arquitectura de Color

El sistema visual implementa los principios de **Refactoring UI** mediante tokens HSL desacoplados en `src/index.css` y `tailwind.config.ts`:

- **Warm Paper Canvas**: `--background: 40 20% 98%` (`#FBFBFA`) y `--foreground: 40 10% 8%` (`#141312`).
- **Terracota Editorial Accent**: `--editorial-accent: 15 65% 45%` utilizado para énfasis sutiles de texto.
- **Atmósfera Oscura Unificada (`--studio-dark-*`)**: Bloques oscuros en tarjetas de casos de estudio y servicios apilados (`#131211`), garantizando contraste WCAG AA.
- **Tipografía Dual & Mono**: Combinación de *Fraunces* (Serif), *Hanken Grotesk* (Sans) y *Space Mono* (Monospace).

---

## 📁 Casos de Estudio Destacados

1. **FAMVAR** — *Catálogo Digital & E-Commerce*
   - Plataforma web para exhibición de tecnología (iPhone, Samsung) y bazar importado. Estructurada con fichas técnicas y conversión directa a WhatsApp.
2. **CUORE** — *Joyería y Relojería de Alta Gama*
   - Sitio para un taller con 40 años de trayectoria en Tierra del Fuego. Traduce el oficio artesanal y la tecnología de precisión láser al entorno digital.

---

## 🛠️ Stack Tecnológico

| Tecnología | Rol / Función |
| :--- | :--- |
| **React 18** | UI Framework declarativo |
| **TypeScript** | Tipado estático estricto |
| **Vite** | Bundler & Dev Server |
| **Tailwind CSS v3** | Utility-first CSS & Tokens HSL |
| **React Router v6** | Enrutamiento SPA |
| **Vitest & Testing Library** | Pruebas unitarias y de integración |
| **Lucide Icons** | Iconografía vectorial |
| **Husky & Commitlint** | Pre-commit hooks & Linting de commits |

---

## 📂 Estructura del Proyecto

```text
tramastudio/
├── .github/workflows/          # CI/CD Workflows (GitHub Actions)
├── .husky/                     # Git Hooks (Vitest & Commitlint)
├── public/                     # Assets estáticos (Imágenes AVIF/PNG & Favicons)
├── src/
│   ├── assets/                 # Recursos gráficos locales
│   ├── components/             # Componentes de UI (Nav, Footer, ServicesStack, Metodologia, ContactForm)
│   ├── data/                   # Datasets estáticos (projects.ts, project-images.ts)
│   ├── hooks/                  # Custom Hooks (use-reveal.ts)
│   ├── lib/                    # Utilidades de SEO y helpers (seo.ts, utils.ts)
│   ├── pages/                  # Pantallas principales (Index.tsx, Dossier.tsx, NotFound.tsx)
│   ├── test/                   # Suite de pruebas unitarias (Vitest)
│   ├── index.css               # Design Tokens HSL & Utility Classes
│   ├── App.tsx                 # Contenedor de Rutas
│   └── main.tsx                # Punto de entrada Vite
├── eslint.config.js            # Configuración de Linter
├── tailwind.config.ts          # Extensión de tema Tailwind
├── vite.config.ts              # Configuración de Vite
└── vitest.config.ts            # Configuración del Test Runner
```

---

## 💻 Desarrollo Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/nadiaescobbb/tramastudio.git
cd tramastudio

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Ejecutar tests unitarios
npm test

# 5. Compilar para producción
npm run build
```

---

## ✉️ Autoría & Contacto

**Nadia Escobar** — Founder de HeyTrama.  
[heytrama.com](https://www.heytrama.com) · [LinkedIn](https://www.linkedin.com/in/nadiaescobbb/) · [nadiaescobbb@gmail.com](mailto:nadiaescobbb@gmail.com)

