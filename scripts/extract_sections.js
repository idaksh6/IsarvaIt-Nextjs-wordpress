import fs from 'fs';

const html = fs.readFileSync('C:\\Users\\ISA10236\\Downloads\\Isarva-ERP\\index.html', 'utf8');

const sections = [
  { name: 'compare', start: 'compare-section', next: 'pricing-section' },
  { name: 'pricing', start: 'pricing-section', next: 'faq-section' },
  { name: 'faq', start: 'faq-section', next: 'cta-section' }
];

let out = '';

for (const sec of sections) {
  const startIndex = html.indexOf(`class="${sec.start}"`);
  if (startIndex === -1) continue;
  
  // Find the opening section tag before class
  const sectionStart = html.lastIndexOf('<section', startIndex);
  const nextIndex = html.indexOf(`class="${sec.next}"`);
  let sectionEnd = -1;
  
  if (nextIndex !== -1) {
    sectionEnd = html.lastIndexOf('<section', nextIndex);
  } else {
    sectionEnd = html.indexOf('</main>');
  }
  
  if (sectionStart !== -1 && sectionEnd !== -1) {
    out += `\n\n==================== SECTION: ${sec.name} ====================\n`;
    out += html.substring(sectionStart, sectionEnd);
  }
}

// Also get the CTA banner section at the very end
const ctaStart = html.indexOf('class="cta-section"');
if (ctaStart !== -1) {
  const secStart = html.lastIndexOf('<section', ctaStart);
  const footerStart = html.indexOf('<footer');
  if (secStart !== -1 && footerStart !== -1) {
    out += `\n\n==================== SECTION: cta ====================\n`;
    out += html.substring(secStart, footerStart);
  }
}

fs.writeFileSync('C:\\Users\\ISA10236\\.gemini\\antigravity-ide\\brain\\13d1c5d6-8484-44fb-b89e-c437a6a8813b\\scratch\\extracted_sections.html', out);
console.log('Extracted sections successfully!');
