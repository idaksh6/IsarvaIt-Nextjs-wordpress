const fs = require('fs');
const path = require('path');

const dirPath = 'src/app/components';
const files = fs.readdirSync(dirPath).filter(f => 
  f.endsWith('BrochureModal.jsx') || 
  f === 'GeneralApplicationModal.jsx' || 
  f === 'CareerApplicationForm.jsx' ||
  f === 'ContactForm.jsx' ||
  f === 'ContactFormModal.jsx'
);

// Helper to get a friendly name from the filename
function getFormName(filename) {
    if (filename === 'ContactForm.jsx') return 'Contact Form';
    if (filename === 'ContactFormModal.jsx') return 'Demo Request';
    if (filename === 'CareerApplicationForm.jsx') return 'Career Application';
    if (filename === 'GeneralApplicationModal.jsx') return 'General Application';
    return filename.replace('BrochureModal.jsx', ' Brochure Request').replace(/([A-Z])/g, ' $1').trim();
}

files.forEach(f => {
  const fullPath = path.join(dirPath, f);
  let content = fs.readFileSync(fullPath, 'utf8');
  const formName = getFormName(f);
  
  // Regex to match our previously implemented specific logic or the old generic one
  const regex = /if\s*\(typeof\s*data\.error\s*===\s*'string'\)\s*\{\s*if\s*\(data\.error\.includes\('mobile'\)\s*\|\|\s*data\.error\.includes\('phone'\)\)\s*\{\s*friendlyError\s*=\s*data\.error\.includes\('associated'\)\s*\?\s*'This phone number is already registered\.'\s*:\s*'Please enter a valid phone number\.';\s*\}\s*else\s*if\s*\(data\.error\.includes\('email'\)\)\s*\{\s*friendlyError\s*=\s*\(data\.error\.includes\('taken'\)\s*\|\|\s*data\.error\.includes\('associated'\)\)\s*\?\s*'This email address is already registered\.'\s*:\s*'Please enter a valid email address\.';\s*\}\s*\}/g;
  
  // Base case (if script hasn't run yet or we want to overwrite)
  const baseRegex = /if\s*\(data\.error\s*&&\s*typeof\s*data\.error\s*===\s*'string'\)\s*\{\s*if\s*\(data\.error\.includes\('mobile'\)\s*\|\|\s*data\.error\.includes\('phone'\)\)\s*\{\s*friendlyError\s*=\s*'Please enter a (proper|valid) phone number\.';\s*\}\s*else\s*if\s*\(data\.error\.includes\('email'\)\)\s*\{\s*friendlyError\s*=\s*'Please enter a valid email address\.';\s*\}(?:\s*else\s*if\s*\(data\.error\.includes\('name'\)\)\s*\{\s*friendlyError\s*=\s*'Please enter your full name\.';\s*\})?\s*else\s*\{\s*friendlyError\s*=\s*data\.error;\s*\}\s*\}/g;

  let replacement = `if (typeof data.error === 'string') {
          const prefix = 'Failed to submit ${formName}: ';
          if (data.error.includes('mobile') || data.error.includes('phone')) {
            friendlyError = prefix + (data.error.includes('associated') ? 'This phone number is already registered.' : 'Please enter a valid phone number.');
          } else if (data.error.includes('email')) {
            friendlyError = prefix + ((data.error.includes('taken') || data.error.includes('associated')) ? 'This email address is already registered.' : 'Please enter a valid email address.');
          } else {
            friendlyError = prefix + data.error;
          }
        }`;

  if (content.includes('friendlyError = data.error || \'Something went wrong. Please try again.\';')) {
      // Overwrite the manual one I did for ContactFormModal
       content = content.replace(/let friendlyError = data\.error \|\| 'Something went wrong\. Please try again\.';.*?\}/s, `let friendlyError = data.error || 'Something went wrong. Please try again.';\n        ${replacement}`);
       console.log(`Updating ${f} (Manual Overwrite)`);
  } else if (regex.test(content)) {
    console.log(`Updating ${f} (Incremental Update)`);
    content = content.replace(regex, replacement);
  } else if (baseRegex.test(content)) {
    console.log(`Updating ${f} (Base match)`);
    content = content.replace(baseRegex, replacement);
  } else {
     // Even more generic match for the brochure modals
     const brochureRegex = /if\s*\(data\.error\s*&&\s*typeof\s*data\.error\s*===\s*'string'\)\s*\{.*?friendlyError\s*=\s*data\.error;.*?\}\s+\}/s;
     if (brochureRegex.test(content)) {
         console.log(`Updating ${f} (Brochure specific match)`);
         content = content.replace(brochureRegex, replacement + '\n      }');
     } else {
        console.log(`Target not found in ${f}`);
     }
  }
  
  fs.writeFileSync(fullPath, content);
});
