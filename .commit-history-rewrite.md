# Commit History Rewrite — Trama Studio

## Convención

Formato: `<type>(<scope>): <description>`

Types: `feat`, `fix`, `style`, `refactor`, `perf`, `content`, `docs`, `chore`, `ux`, `seo`, `assets`
Scopes: `hero`, `projects`, `dossier`, `nav`, `ui`, `mobile`, `routing`, `brand`, `css`, `bosco`, `footer`, `not-found`

---

## Mapeo SHA → Mensaje Reformateado

### Initial
```
c2df3aa → chore: initialize Trama Studio project
934c8ad → chore: scaffold project with Vite + React + TypeScript + Tailwind
```

### Assets / Branding
```
7b3f36f → assets: update Bosco hero image and logo
75a617c → assets: update Bosco image and Trama logo
```

### 404 / Not Found
```
bff2cff → style(not-found): redesign 404 page
cdc303a → style(not-found): update 404 page layout
```

### Concept Projects
```
a0385e0 → content(projects): label fictional projects as concept
2c86a84 → content(projects): mark concept projects clearly
```

### Bosco Testimonial
```
faa183e → content(bosco): update quote with real sales data
6c4e706 → content(bosco): update client testimonial
```

### Contrast Fixes
```
6767a3e → fix(ui): fix missing title and low contrast in Método section
85f1f4b → fix(ui): improve method section contrast
8d20d0b → fix(ui): force text-foreground on invisible title
3662aaa → fix(ui): restore title contrast
```

### Visual Redesign
```
6c20471 → style: redesign visual system and clean up code
b2ef605 → style: update visual system and clean code
```

### Mobile Visuals
```
e21a25f → style(mobile): improve mobile visuals
0dcdc05 → style(mobile): improve mobile visuals
9eb30de → fix(mobile): resolve layout overlap on small screens
e1e3336 → fix(mobile): resolve layout overlap on small screens
```

### Layout Overhaul
```
f6e187c → style(layout): comprehensive design overhaul and mobile responsiveness
79acccc → style(layout): update layout and responsive styles
885a8ae → fix(ui): fix critical text contrast across all views
9b2635e → fix(ui): fix text contrast and legibility across all views
4b3bee2 → fix(routing): connect projects to correct routes and fix TS errors
cc8f4e8 → fix(routing): connect projects to correct routes and fix TS errors
46fabe5 → style(projects): revert to high-contrast 2-column grid
fef0371 → style(projects): revert to high-contrast 2-column grid
```

### Dossier
```
9b7e6d4 → feat(dossier): redesign dossier layout with bento narrative
2c10e9f → style(dossier): redesign project dossier layout
```

### Scroll / Navigation
```
da7d767 → fix(routing): implement ScrollToTop for navigation scroll bug
aad399f → fix(routing): reset scroll position on route change
14fc9e7 → fix(mobile): comprehensive mobile UX repairs
ec38cd2 → fix(mobile): improve layout on small screens
```

### Architectural Cleanup
```
32f1251 → refactor: architectural cleanup, motion tokens and performance
c80b4ac → refactor(css): consolidate layout tokens
d6884da → chore: remove internal agent directory
8376207 → chore: keep .agents directory local only
cfb921f → chore: update gitignore entries
56e1eee → refactor: resolve technical debt and dead code
d17a356 → refactor: remove unused code and simplify spacing
9ad044b → chore: stop tracking .agents directory
```

### Layout / Marquee Fixes
```
e790050 → fix(ui): resolve layout alignment and optimize mobile marquee
c86a985 → fix(ui): improve layout alignment and mobile marquee
```

### Brand Identity
```
c4d44d3 → feat(brand): redesign identity to Bone & Charcoal and add SVG logo system
6ba4ef1 → style(brand): update brand palette and logo system
```

### UX / Conversion
```
a6e1092 → refactor(ux): optimize conversion hierarchy and visual weight
84184e1 → refactor(ux): improve conversion hierarchy
e86e603 → fix(projects): remove results from concept projects
06fdc16 → fix(projects): label concept projects correctly
367fc02 → content: refine authority tone and eliminate copy clichés
f20c825 → content: refine authority tone
```

### UI Polish
```
9120ca8 → style(ui): unify panorama card design and padding
cbf3687 → style(ui): adjust panorama card spacing
```

### Content / Structure
```
8cb21a6 → refactor: optimize UI clarity, content strategy and code structure
839fcde → refactor: update site copy and component structure
2cd36d0 → refactor(layout): optimize layout and navigation components
c45e221 → refactor(layout): simplify layout and navigation
```

### README
```
f45deaf → docs: update README
85f0c27 → docs: update README
```

### Cuore Feature
```
b8a8dcd → feat(dossier): add Joyería Cuore project dossier
d901289 → feat(dossier): add Joyería Cuore project dossier and update grid
```

### Technical Docs
```
8135f00 → docs: clarify technical positioning
c0f4083 → docs: clarify Trama Studio technical positioning
19058d3 → Merge branch (keep original message)
```

### Tooling
```
8f05ccc → chore: update build tooling and clean up config
```

### Hero Area
```
7759e6a → style(hero): update home page hero layout
801689e → style(hero): add diagonal marquee animation
b023506 → style(hero): refine marquee card design
c740fee → style(hero): simplify marquee animation
c2c8506 → style(hero): add interactive wheel-driven marquee
89659c4 → style: polish responsive layout and spacing
5546267 → style(hero): simplify hero content
```

### Messaging / Content
```
62490b6 → content: refine site-wide messaging
6f5e42a → content: update founder section
544caad → style(hero): align hero typography hierarchy
638a236 → style(projects): update project card design
4687b2f → perf: improve SEO metadata and lazy image loading
78ca560 → content(footer): update location display
cd287c7 → seo: align deployment and social metadata
0209efa → style: refine visual rhythm and spacing
```

### Mobile Nav
```
9c29a3e → ux(nav): improve mobile navigation behavior
8af35df → ux(nav): restore mobile navigation menu
```

### Offer Copy
```
affb0dd → content: sharpen service offer copy
25eba51 → docs: rewrite README with honest project scope and technical decisions
673aca5 → docs: restore Trama Studio README
```

### CI / Cleanup
```
10d15ee → feat: remove dead code, add solution section, write tests, add CI
2156095 → fix: update package-lock after removing unused dependencies
e904e58 → fix(ci): use npm install instead of npm ci (platform dep mismatch)
```

### Recent
```
eacd933 → feat: copy refinements, code-splitting and RAF throttle
68c6bfe → style(hero): remove orange hero kicker
ed95bcb → style(hero): remove hero copy paragraph
dea8abf → assets: upload project cover images
25ed742 → content(projects): mark Cuore as real client, update cover image
7ec4ad0 → Merge branch (keep original message)
073247b → content(projects): mark Estudio Norte as real client, update cover image
```
