const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\ISA10236\\.gemini\\antigravity-ide\\brain\\a0358cc4-4aa3-4aa0-99a2-44043c0a5e77\\.system_generated\\logs\\transcript.jsonl';
const outputPath = 'e:\\IsarvaIt-Nextjs-wordpress\\scratch\\extracted_step_213.txt';

const lines = fs.readFileSync(logPath, 'utf8').split('\n');
for (const line of lines) {
  if (!line.trim()) continue;
  try {
    const obj = JSON.parse(line);
    if (obj.step_index === 213) {
      fs.writeFileSync(outputPath, obj.content, 'utf8');
      console.log('Success! Extracted content to', outputPath);
      break;
    }
  } catch (err) {
    console.error('Error parsing line:', err);
  }
}
