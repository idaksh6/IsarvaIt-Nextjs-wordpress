const fs = require('fs');
const content = fs.readFileSync('src/app/components/ContactFormModal.jsx', 'utf8');

const targetStart = "if (typeof data.error === 'string') {";
const targetPrefix = "const prefix = 'Failed to submit Demo Request: ';";
const targetEnd = "setErrorMessage(friendlyError);";

const lines = content.split('\n');
let startIndex = -1;
let endIndex = -1;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(targetStart) && lines[i+1]?.includes(targetPrefix)) {
        startIndex = i;
        break;
    }
}

if (startIndex !== -1) {
    for (let i = startIndex; i < lines.length; i++) {
        if (lines[i].includes(targetEnd)) {
            endIndex = i;
            break;
        }
    }
}

if (startIndex !== -1 && endIndex !== -1) {
    console.log(`Found block from line ${startIndex + 1} to ${endIndex + 1}`);
    const replacement = [
        "        if (typeof data.error === 'string') {",
        "          const prefix = 'Failed to submit Demo Request: ';",
        "          if (data.error.includes('mobile') || data.error.includes('phone')) {",
        "            friendlyError = prefix + (data.error.includes('associated') ? 'This phone number is already registered.' : 'Please enter a valid phone number.');",
        "          } else if (data.error.includes('email')) {",
        "            friendlyError = prefix + ((data.error.includes('taken') || data.error.includes('associated')) ? 'This email address is already registered.' : 'Please enter a valid email address.');",
        "          } else {",
        "            friendlyError = prefix + data.error;",
        "          }",
        "        }"
    ];
    
    lines.splice(startIndex, endIndex - startIndex, ...replacement);
    fs.writeFileSync('src/app/components/ContactFormModal.jsx', lines.join('\n'));
    console.log('Successfully repaired ContactFormModal.jsx');
} else {
    console.error('Could not find target block');
    process.exit(1);
}
