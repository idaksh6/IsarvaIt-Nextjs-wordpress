import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "src");

const SKIP = new Set([
  path.join(srcDir, "app", "components", "AppLink.jsx"),
]);

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

let updated = 0;

for (const filePath of walk(srcDir)) {
  if (SKIP.has(filePath)) continue;

  let content = fs.readFileSync(filePath, "utf8");
  const original = content;

  content = content.replace(
    /import\s+Link\s+from\s+['"]next\/link['"];?\s*\n/g,
    'import Link from "@/app/components/AppLink";\n'
  );

  content = content.replace(
    /import\s+Link\s+from\s+['"]next\/link['"];?\s*\r\n/g,
    'import Link from "@/app/components/AppLink";\r\n'
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf8");
    updated += 1;
    console.log(path.relative(root, filePath));
  }
}

console.log(`\nUpdated ${updated} files.`);
