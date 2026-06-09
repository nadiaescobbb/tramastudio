# Conventional Commits — Trama Studio

## Formato

```
<type>(<scope opcional>): <descripción>

[cuerpo opcional]

[pie opcional]
```

## Types

| Type      | Uso                                            |
|-----------|------------------------------------------------|
| `feat`    | Nueva funcionalidad para el usuario            |
| `fix`     | Corrección de bug                              |
| `style`   | Cambios de CSS, layout, animación (sin lógica) |
| `refactor`| Cambio en código que no es fix ni feat         |
| `perf`    | Mejora de performance                          |
| `content` | Cambio de copys, textos, testimonios           |
| `docs`    | README, documentación                          |
| `chore`   | Tooling, dependencias, CI, config              |
| `ux`      | Cambios en interacción/comportamiento          |
| `seo`     | Metadatos, Open Graph, SEO                     |
| `assets`  | Imágenes, fuentes, SVG                         |
| `revert`  | Revertir un commit anterior                    |

## Scopes

| Scope         | Ámbito                                  |
|---------------|-----------------------------------------|
| `hero`        | Sección hero de la landing              |
| `projects`    | Cards de proyectos, grid                |
| `dossier`     | Página individual de proyecto           |
| `nav`         | Navegación, menú mobile                 |
| `ui`          | Componentes de interfaz general         |
| `mobile`      | Ajustes responsive                      |
| `routing`     | React Router, rutas                     |
| `brand`       | Identidad, paleta, logo                 |
| `css`         | Tokens de CSS, variables, clases        |
| `bosco`       | Proyecto/cliente Bosco                  |
| `footer`      | Footer del sitio                        |
| `not-found`   | Página 404                              |
| `layout`      | Layout general, grillas                 |
| `ci`          | GitHub Actions, pipelines               |
| `lab`         | Experimentos, laboratorio               |

## Ejemplos

```
feat(dossier): add Joyería Cuore project dossier
fix(ui): restore title contrast for legibility
style(hero): simplify hero content
content(bosco): update client testimonial
refactor(css): consolidate layout tokens
perf: improve SEO metadata and image loading
chore: update build tooling and clean up config
ux(nav): improve mobile navigation behavior
seo: align deployment and social metadata
assets: update Bosco image and Trama logo
```

## Reglas

- Usar **imperativo presente**: "add" no "added" ni "adds"
- **Sin punto** al final del título
- Máximo **72 caracteres** en el título
- Usar **lowercase** después del type
- Opcional: cuerpo y pie separados por blank line
