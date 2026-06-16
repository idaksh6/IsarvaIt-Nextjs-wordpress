const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../src/app/components');

function fixInputTextColors(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      fixInputTextColors(fullPath);
    } else if (file.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // We look for 'bg-gray-50/50 text-sm' inside className="...".
      // We want to append 'text-gray-900' if it's not already there.
      const regex = /(bg-gray-50\/50\s+text-sm)(?![^"]*text-gray-900)([^"]*")/g;
      
      if (regex.test(content)) {
        content = content.replace(regex, '$1 text-gray-900$2');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${file}`);
      }
    }
  }
}

fixInputTextColors(componentsDir);
console.log('Done.');
