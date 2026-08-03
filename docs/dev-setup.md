# Desarrollo — Trama Studio

## Prerequisitos

- Node.js >= 18
- npm >= 9
- Git >= 2.0

## Instalación

```bash
git clone https://github.com/nadiaescobbb/tramastudio.git
cd tramastudio
npm install
```

## Comandos

```bash
npm run dev        # desarrollo local en localhost:5173
npm run build      # build producción en dist/
npm run preview    # previsualizar build local
npm run lint       # ESLint
npm test           # Vitest
npm run test:ui    # Vitest con UI
```

## Commit Validation (opcional)

Para activar validación automática de commits:

```bash
npm install --save-dev @commitlint/cli @commitlint/config-conventional husky
npx husky install
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

A partir de ese momento, `git commit` validará el mensaje contra `.commitlintrc.json`.

## Rewrite de Historial

Si querés reescribir el historial completo a Conventional Commits:

```bash
# 1. Backup
git branch backup-original

# 2. Ejecutar script
chmod +x scripts/rewrite-commits.sh
./scripts/rewrite-commits.sh --dry-run   # previsualizar
./scripts/rewrite-commits.sh             # ejecutar

# 3. Verificar
git log --oneline | head -10

# 4. Push forzado (DESTRUCTIVO — cambia todos los SHAs)
git push -f origin main
git push -f origin --all
git push -f origin --tags
```

> ⚠️ El rewrite cambia todos los SHAs. Notificar a cualquier colaborador antes de hacerlo.
> Para restaurar: `git checkout backup-original && git branch -f main backup-original`

## Despliegue

El repo está conectado a Vercel. Cada push a `main` despliega automáticamente en:
https://tramastudio.vercel.app
