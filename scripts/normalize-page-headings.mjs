import fs from "fs";
import path from "path";

const files = [
  "src/app/about/page.js",
  "src/app/about/AboutHeroSlider.jsx",
  "src/app/case-studies/CaseStudiesClient.js",
  "src/app/careers/page.js",
  "src/app/testimonial/page.js",
  "src/app/testimonial/TestimonialGrid.jsx",
  "src/app/components/partners/HeroSection.tsx",
  "src/app/components/partners/WhyPartner.tsx",
  "src/app/components/partners/IdealPartners.tsx",
  "src/app/components/partners/PartnerOnboarding.tsx",
  "src/app/components/partners/PartnershipModels.tsx",
  "src/app/components/partners/PartnersFAQ.tsx",
  "src/app/components/partners/PartnerCTA.tsx",
  "src/app/components/partners/PartnerCommitments.tsx",
  "src/app/components/partners/PartnerFormSection.tsx",
];

const REPLACEMENTS = [
  [
    'text-[clamp(2.25rem,5vw,3.75rem)] font-display font-bold text-[#1a1f24] max-w-5xl tracking-tight leading-[1] mb-8',
    "font-display text-[#1a1f24] max-w-5xl mb-8",
  ],
  [
    'text-[clamp(2.25rem,5vw,3.75rem)] font-display font-bold text-[#1a1f24] max-w-5xl mx-auto tracking-tight leading-[1] mb-8',
    "font-display text-[#1a1f24] max-w-5xl mx-auto mb-8",
  ],
  [
    'text-[clamp(2.25rem,5vw,3.75rem)] font-display font-bold text-[#1a1f24] tracking-tight leading-[1] mb-8',
    "font-display text-[#1a1f24] mb-8",
  ],
  [
    'font-display text-[clamp(2.25rem,5vw,3.75rem)] font-black text-[#111827] leading-[1] mb-4 md:mb-6 tracking-tight ',
    "font-display text-[#111827] mb-4 md:mb-6",
  ],
  [
    "text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize",
    "capitalize",
  ],
  [
    "text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter",
    "",
  ],
  [
    'text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6',
    "text-gray-900 mb-6",
  ],
  [
    '<h4 className="text-xl font-display font-bold text-[#16423C] mb-2">',
    '<h3 className="font-display text-[#16423C] mb-2">',
  ],
  [
    '<h4 className="text-white mb-8">',
    '<h2 className="text-white mb-8 capitalize">',
  ],
  [
    '<h4 className="text-3xl md:text-4xl lg:text-left text-center font-display font-bold text-[#1a1f24] mb-10 leading-tight">',
    '<h3 className="font-display text-[#1a1f24] mb-10 lg:text-left text-center leading-tight">',
  ],
  [
    '<h5 className="text-lg font-bold text-[#1a1f24] mb-1 font-display">',
    '<h3 className="font-display text-[#1a1f24] mb-1">',
  ],
  [
    '<h3 className="text-2xl font-display font-bold mb-6 text-[#1a1f24] leading-tight group-hover:text-[#10b981] transition-colors">',
    '<h3 className="font-display mb-6 text-[#1a1f24] group-hover:text-[#10b981] transition-colors">',
  ],
  [
    '<h3 className="text-lg md:text-xl font-display font-bold text-[#1a1f24] leading-tight group-hover:text-[#10b981] transition-colors mb-4">',
    '<h3 className="font-display text-[#1a1f24] group-hover:text-[#10b981] transition-colors mb-4">',
  ],
  [
    '<h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4 text-[#111827]">',
    '<h3 className="mb-3 md:mb-4 text-[#111827]">',
  ],
  [
    '<h3 className="text-2xl  font-black text-[#111827]  leading-tight mb-6 relative z-10">',
    '<h3 className="text-[#111827] mb-6 relative z-10">',
  ],
  [
    '<h3 className={`text-xl md:text-2xl font-black text-[#111827] uppercase leading-tight mb-4 group-hover:${step.color} transition-colors duration-500`}>',
    '<h3 className={`text-[#111827] uppercase mb-4 group-hover:${step.color} transition-colors duration-500`}>',
  ],
  [
    '<h3 className="text-2xl font-bold text-[#111827] leading-tight">{item.text}</h3>',
    '<h3 className="text-[#111827]">{item.text}</h3>',
  ],
  [
    '<h4 className="text-[#111827] font-bold text-sm md:text-base leading-tight">',
    '<h3 className="text-[#111827] text-sm md:text-base leading-tight">',
  ],
  [
    '<h4 className="md:text-lg mb-1 group-hover:text-emerald-400 transition-colors duration-500">',
    '<h3 className="mb-1 uppercase group-hover:text-emerald-400 transition-colors duration-500">',
  ],
  [
    '<h3 className="text-2xl sm:text-3xl font-black text-[#111827] mb-4 leading-tight">',
    '<h3 className="text-[#111827] mb-4">',
  ],
  [
    '<h3 className="text-[#1a1f24] text-xl font-display font-bold leading-tight">',
    '<h3 className="font-display text-[#1a1f24] leading-tight">',
  ],
  [
    '<h3 className="md:text-2xl mb-1 tracking-tight leading-none">',
    '<h3 className="mb-1">',
  ],
  [
    'lg:text-left text-center font-display text-[#16423C] mb-6 lg:mb-12 max-w-4xl capitalize',
    "lg:text-left text-center font-display text-[#16423C] mb-6 lg:mb-12 max-w-4xl capitalize",
  ],
  [
    'font-display mb-6 md:mb-8 capitalize">Our Vision',
    'font-display text-white mb-6 md:mb-8 capitalize">Our Vision',
  ],
  [
    'font-display mb-6 md:mb-8 capitalize">Our Mission',
    'font-display text-white mb-6 md:mb-8 capitalize">Our Mission',
  ],
  [
    'font-display mb-8 capitalize">\n            Ready to shape',
    'font-display text-white mb-8 capitalize">\n            Ready to shape',
  ],
  [
    'font-display text-[#1a1f24] text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">Find Your Calling',
    'font-display text-[#1a1f24] capitalize">Find Your Calling',
  ],
  [
    'className="text-[#111827] mb-4 md:mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize"',
    'className="text-[#111827] mb-4 md:mb-6 capitalize"',
  ],
  [
    'className="text-[#111827] mb-4 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize"',
    'className="text-[#111827] mb-4 capitalize"',
  ],
  [
    'className="mb-10 text-[#111827] text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize"',
    'className="mb-10 text-[#111827] capitalize"',
  ],
  [
    'className="mb-6 text-[#111827] text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize"',
    'className="mb-6 text-[#111827] capitalize"',
  ],
  [
    'className="text-[#111827] text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize"',
    'className="text-[#111827] capitalize"',
  ],
  [
    'className="font-display text-[#111827] mb-6 md:mb-8 md:leading-none text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize"',
    'className="font-display text-[#111827] mb-6 md:mb-8 capitalize"',
  ],
  [
    'className="text-[#111827] mb-4 md:mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize"',
    'className="text-[#111827] mb-4 md:mb-6 capitalize"',
  ],
  [
    'className="text-gray-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter">',
    'className="text-gray-900 mb-6">',
  ],
];

const root = process.cwd();
let updated = 0;

for (const rel of files) {
  const filePath = path.join(root, rel);
  if (!fs.existsSync(filePath)) {
    console.log(`Skip missing: ${rel}`);
    continue;
  }

  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;

  for (const [from, to] of REPLACEMENTS) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      changed = true;
    }
  }

  content = content.replace(/className="([^"]*)  "/g, 'className="$1"');
  content = content.replace(/className="  /g, 'className="');
  content = content.replace(/className="\s+"/g, 'className=""');

  if (changed) {
    fs.writeFileSync(filePath, content, "utf8");
    updated += 1;
    console.log(`Updated: ${rel}`);
  }
}

console.log(`\nDone. Updated ${updated} files.`);
