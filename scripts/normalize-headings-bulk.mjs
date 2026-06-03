import fs from "fs";
import path from "path";

const SRC_DIR = path.resolve("src/app");

const REPLACEMENTS = [
  [
    'text-gray-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase',
    "mb-6 uppercase",
  ],
  [
    'text-gray-900 mb-6 text-center lg:text-left text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase',
    "mb-6 text-center lg:text-left uppercase",
  ],
  [
    'text-gray-900 mb-4 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase',
    "mb-4 uppercase",
  ],
  [
    'text-gray-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize',
    "mb-6 capitalize",
  ],
  [
    'text-gray-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter',
    "mb-6",
  ],
  [
    'text-white mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase',
    "text-white mb-6 uppercase",
  ],
  [
    'text-2xl text-gray-900 mb-2 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize',
    "mb-2 capitalize",
  ],
  [
    'text-2xl text-gray-900 mb-6 flex items-center gap-3 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize',
    "mb-6 flex items-center gap-3 capitalize",
  ],
  [
    'text-slate-900 text-3xl lg:text-5xl font-black mb-8 leading-[1.15] tracking-tight uppercase',
    "text-slate-900 mb-8 uppercase",
  ],
  [
    'text-slate-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.15] tracking-tight uppercase',
    "text-slate-900 mb-6 uppercase",
  ],
  [
    'text-slate-900 text-3xl lg:text-5xl font-black leading-[1.15] tracking-tight uppercase',
    "text-slate-900 uppercase",
  ],
  [
    'text-white mb-6 text-3xl lg:text-5xl font-black leading-[1.2] tracking-tight uppercase',
    "text-white mb-6 uppercase",
  ],
  [
    'text-2xl font-bold text-gray-900 mb-4',
    "mb-4",
  ],
  [
    'text-xl font-bold text-gray-900 mb-4',
    "mb-4",
  ],
  [
    'text-xl font-bold text-gray-900 mb-3',
    "mb-3",
  ],
  [
    'text-xl font-bold text-gray-900 mb-2',
    "mb-2",
  ],
  [
    'text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors',
    "mb-4 group-hover:text-emerald-700 transition-colors",
  ],
  [
    'text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold text-gray-900 mb-6 tracking-tight leading-[1]',
    "mb-6",
  ],
  [
    'text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold text-gray-900 mb-4 tracking-tight leading-[1]',
    "mb-4",
  ],
  [
    'text-[#0a0a0a] mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize',
    "text-[#0a0a0a] mb-6 capitalize",
  ],
  [
    'text-[#0a0a0a] mb-4 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize',
    "text-[#0a0a0a] mb-4 capitalize",
  ],
  [
    'text-[#0a0a0a] mb-3.5 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize',
    "text-[#0a0a0a] mb-3.5 capitalize",
  ],
  [
    'text-[#000000] mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize',
    "text-[#000000] mb-6 capitalize",
  ],
  [
    'text-white mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize',
    "text-white mb-6 capitalize",
  ],
  [
    'text-3xl lg:text-4xl font-black text-gray-900 mb-6',
    "mb-6",
  ],
  [
    'text-3xl lg:text-4xl font-black text-gray-900 mb-4',
    "mb-4",
  ],
  [
    'text-3xl lg:text-4xl font-black text-white mb-4 leading-tight',
    "text-white mb-4",
  ],
  [
    'text-xl text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize',
    "capitalize",
  ],
  [
    'text-xl text-white text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize',
    "text-white capitalize",
  ],
  [
    'text-white text-xl mb-1 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize',
    "text-white mb-1 capitalize",
  ],
  [
    'font-display text-[#1a1f24] mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize',
    "font-display text-[#1a1f24] mb-6 capitalize",
  ],
  [
    'text-2xl font-display text-[#1a1f24] text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize',
    "font-display text-[#1a1f24] capitalize",
  ],
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(jsx?|tsx?)$/.test(entry.name)) files.push(full);
  }
  return files;
}

let updated = 0;

for (const file of walk(SRC_DIR)) {
  let content = fs.readFileSync(file, "utf8");
  let changed = false;

  for (const [from, to] of REPLACEMENTS) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, "utf8");
    updated += 1;
    console.log(`Updated: ${path.relative(process.cwd(), file)}`);
  }
}

console.log(`\nDone. Updated ${updated} files.`);
