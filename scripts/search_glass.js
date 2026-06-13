import fs from 'fs';

const css = fs.readFileSync('C:\\Users\\ISA10236\\Downloads\\Isarva-ERP\\style.css', 'utf8');

const lines = css.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('glass-card')) {
    console.log(`Line ${i + 1}: ${lines[i]}`);
    // print 5 lines before and after
    for (let j = Math.max(0, i - 5); j <= Math.min(lines.length - 1, i + 15); j++) {
      console.log(`  ${j + 1}: ${lines[j]}`);
    }
    break;
  }
}
