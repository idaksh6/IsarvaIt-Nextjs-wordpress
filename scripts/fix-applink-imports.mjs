import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "src");
const appLinkPath = path.join(srcDir, "app", "components", "AppLink.jsx");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      walk(full, files);
    } else if (/\.(jsx?|tsx?)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function toImportPath(fromFile, toFile) {
  let rel = path.relative(path.dirname(fromFile), toFile).replace(/\\/g, "/");
  if (!rel.startsWith(".")) rel = `./${rel}`;
  return rel.replace(/\.jsx$/, "");
}

let updated = 0;

for (const filePath of walk(srcDir)) {
  if (filePath === appLinkPath) continue;

  let content = fs.readFileSync(filePath, "utf8");
  if (!content.includes("@/app/components/AppLink")) continue;

  const rel = toImportPath(filePath, appLinkPath);
  content = content.replace(
    /import\s+Link\s+from\s+["']@\/app\/components\/AppLink["'];?\s*\n/g,
    `import Link from "${rel}";\n`
  );

  fs.writeFileSync(filePath, content, "utf8");
  updated += 1;
  console.log(path.relative(root, filePath), "->", rel);
}

console.log(`\nFixed ${updated} files.`);
