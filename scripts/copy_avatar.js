import fs from 'fs';
import path from 'path';

const src = "C:\\Users\\ISA10236\\.gemini\\antigravity-ide\\brain\\13d1c5d6-8484-44fb-b89e-c437a6a8813b\\avatar_operations_director_1781325448685.png";
const dest = path.join(process.cwd(), 'public', 'avatar_operations_director.png');

try {
  fs.copyFileSync(src, dest);
  console.log('Successfully copied avatar image to', dest);
} catch (err) {
  console.error('Error copying file:', err);
}
