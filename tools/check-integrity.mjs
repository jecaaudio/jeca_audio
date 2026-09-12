#!/usr/bin/env node
/**
 * Comprueba que el sitio no esté roto antes de publicarlo.
 *
 * Existe por un incidente real: una herramienta guardó js/main.js sin ningún
 * salto de línea, el primer comentario `//` se comió el resto del archivo y
 * TODO el JavaScript del sitio dejó de ejecutarse. La página se veía cargada
 * pero sin traducciones, sin inventario, sin carrito y con la foto de portada
 * clavada en medio de la pantalla.
 *
 * Se ejecuta con `node tools/check-integrity.mjs`. Sin dependencias.
 */

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SKIP_DIRS = new Set([".git", "img", "node_modules"]);

/** Una línea más larga que esto en fuente escrita a mano es señal de colapso. */
const MAX_LINE = 4000;

const problems = [];
const fail = (file, message) => problems.push({ file, message });

async function walk(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || SKIP_DIRS.has(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) found.push(...(await walk(full)));
    else found.push(full);
  }
  return found;
}

/* 1. El JavaScript tiene que parsear. Esto es lo que falló en el incidente. */
function checkJsParses(files) {
  for (const file of files.filter((f) => extname(f) === ".js")) {
    try {
      execFileSync(process.execPath, ["--check", file], { stdio: "pipe" });
    } catch (error) {
      const detail = String(error.stderr || error.message)
        .split("\n")
        .find((line) => line.includes("Error:")) || "error de sintaxis";
      fail(relative(ROOT, file), `no parsea: ${detail.trim()}`);
    }
  }
}

/* 2. Ningún archivo debe haber perdido sus saltos de línea. */
function checkNotCollapsed(files) {
  for (const file of files) {
    if (![".js", ".css", ".html", ".json"].includes(extname(file))) continue;
    const text = readFileSync(file, "utf8");
    if (text.length < 500) continue;

    if (!text.includes("\n")) {
      fail(
        relative(ROOT, file),
        `${text.length} bytes en una sola línea: se le borraron los saltos de línea`
      );
      continue;
    }
    const longest = Math.max(...text.split("\n").map((l) => l.length));
    if (longest > MAX_LINE) {
      fail(
        relative(ROOT, file),
        `línea de ${longest} caracteres (máximo ${MAX_LINE}): probable colapso parcial`
      );
    }
  }
}

/* 3. Los archivos locales que referencia el HTML deben existir. */
function checkLocalAssets(files) {
  const pattern = /(?:src|href)\s*=\s*["']([^"']+)["']/gi;

  for (const file of files.filter((f) => extname(f) === ".html")) {
    const html = readFileSync(file, "utf8");
    for (const [, raw] of html.matchAll(pattern)) {
      // Solo rutas locales: se ignoran URLs, anclas, mailto:, tel:, data:
      if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(raw)) continue;

      const cleaned = decodeURIComponent(raw.split(/[?#]/)[0]);
      if (!cleaned) continue;

      const target = resolve(dirname(file), cleaned);
      if (!existsSync(target) || !statSync(target).isFile()) {
        fail(relative(ROOT, file), `referencia a un archivo que no existe: ${cleaned}`);
      }
    }
  }
}

const files = await walk(ROOT);
checkJsParses(files);
checkNotCollapsed(files);
checkLocalAssets(files);

if (problems.length === 0) {
  console.log(`OK — ${files.length} archivos revisados, sin problemas.`);
  process.exit(0);
}

console.error(`Se encontraron ${problems.length} problema(s):\n`);
for (const { file, message } of problems) console.error(`  ${file}\n    ${message}\n`);
process.exit(1);
