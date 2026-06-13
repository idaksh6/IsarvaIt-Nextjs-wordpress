import fs from 'fs';

const css = fs.readFileSync('C:\\Users\\ISA10236\\Downloads\\Isarva-ERP\\style.css', 'utf8');

const classes = [
  'security-section', 'security-shell', 'security-intro', 'security-features', 'security-feature',
  'testimonials-section', 'testimonials-grid', 'testimonial-card', 'metrics-row', 'logo-strip', 'metric-box',
  'section-tag', 'section-desc'
];

let out = '';
const lines = css.split('\n');
let active = false;
let braceCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!active) {
    const hasClass = classes.some(cls => line.includes('.' + cls));
    if (hasClass && !line.includes('var(')) {
      active = true;
      out += `\n/* Line ${i + 1} */\n`;
    }
  }
  
  if (active) {
    out += line + '\n';
    const opens = (line.match(/{/g) || []).length;
    const closes = (line.match(/}/g) || []).length;
    braceCount += opens - closes;
    if (braceCount === 0 && line.includes('}')) {
      active = false;
    }
  }
}

fs.writeFileSync('C:\\Users\\ISA10236\\.gemini\\antigravity-ide\\brain\\13d1c5d6-8484-44fb-b89e-c437a6a8813b\\scratch\\extracted_css.txt', out);
console.log('Extracted successfully!');
