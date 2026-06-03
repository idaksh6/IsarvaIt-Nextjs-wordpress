import fs from "fs";
import path from "path";

const SRC_DIR = path.resolve("src/app");

const GLOBAL_CLASSES = [
  "text-[clamp(2.25rem,5vw,3.75rem)]",
  "text-[clamp(2.25rem,4.5vw,3.75rem)]",
  "text-3xl",
  "lg:text-5xl",
  "text-2xl",
  "text-xl",
  "text-[20px]",
  "text-lg",
  "text-base",
  "text-sm",
  "font-extrabold",
  "font-black",
  "font-bold",
  "font-semibold",
  "font-display",
  "tracking-tight",
  "tracking-tighter",
  "leading-[1]",
  "leading-none",
  "leading-[1.25]",
  "lg:leading-[1.25]",
  "leading-snug",
  "leading-tight",
  "text-gray-900",
];

const KEEP_OVERRIDE =
  /text-\[(?!clamp\(2\.25rem)[^\]]+\]|text-(5xl|6xl|7xl|8xl|9xl|\[180px\]|\[13px\])|lg:text-(3xl|4xl|6xl)|md:text-(2xl|4xl|6xl)|sm:text-(2xl|3xl|4xl)|text-3xl lg:text-4xl|text-2xl sm:text-3xl|text-white mb-6 text-3xl/;

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(jsx?|tsx?)$/.test(entry.name)) files.push(full);
  }
  return files;
}

function stripTypography(className) {
  if (!className) return className;
  if (KEEP_OVERRIDE.test(className)) return className;

  return className
    .split(/\s+/)
    .filter(Boolean)
    .filter((part) => !GLOBAL_CLASSES.includes(part))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;

  content = content.replace(
    /<(h[1-6])\b([^>]*?)className="([^"]*)"([^>]*)>/g,
    (match, tag, before, className, after) => {
      const cleaned = stripTypography(className);
      if (cleaned === className) return match;
      changed = true;
      return `<${tag}${before}className="${cleaned}"${after}>`;
    }
  );

  content = content.replace(
    /<(h[1-6])\b([^>]*?)className=\{`([^`]+)`\}([^>]*)>/g,
    (match, tag, before, className, after) => {
      const cleaned = stripTypography(className);
      if (cleaned === className) return match;
      changed = true;
      return `<${tag}${before}className={\`${cleaned}\`}${after}>`;
    }
  );

  if (changed) fs.writeFileSync(filePath, content, "utf8");
  return changed;
}

const files = walk(SRC_DIR);
let updated = 0;

for (const file of files) {
  if (processFile(file)) {
    updated += 1;
    console.log(`Updated: ${path.relative(process.cwd(), file)}`);
  }
}

console.log(`\nDone. Updated ${updated} files.`);
