import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = path.join(root, "dist", "index.html");
const server = await createServer({
  root,
  configFile: path.join(root, "vite.config.ts"),
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true },
});

try {
  const { render } = await server.ssrLoadModule("/src/entry-server.tsx");
  const template = await readFile(outputPath, "utf8");
  const rootMarkup = `<div id="root">${render("/")}</div>`;

  if (!template.includes('<div id="root"></div>')) {
    throw new Error("Could not find the empty app root in dist/index.html");
  }

  await writeFile(outputPath, template.replace('<div id="root"></div>', rootMarkup));
} finally {
  await server.close();
}
