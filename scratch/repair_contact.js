const fs = require('fs');
const content = fs.readFileSync('src/app/components/ContactForm.jsx', 'utf8');

const targetStart = "if (typeof data.error === 'string') {";
const targetPrefix = "const prefix = 'Failed to submit Contact Form: ';";
const targetEnd = "setSubmitStatus(null);";

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
        // Look for the setSubmitStatus(null) inside the setTimeout of the ERROR block
        if (lines[i].includes(targetEnd) && i > startIndex + 5) {
            endIndex = i + 2; // Capture the closing brackets of the timeout and else block
            break;
        }
    }
}

if (startIndex !== -1 && endIndex !== -1) {
    console.log(`Found block from line ${startIndex + 1} to ${endIndex + 1}`);
    const replacement = [
        "        if (typeof data.error === 'string') {",
        "          const prefix = 'Failed to submit Contact Form: ';",
        "          if (data.error.includes('mobile') || data.error.includes('phone')) {",
        "            friendlyError = prefix + (data.error.includes('associated') ? 'This phone number is already registered.' : 'Please enter a valid phone number.');",
        "          } else if (data.error.includes('email')) {",
        "            friendlyError = prefix + ((data.error.includes('taken') || data.error.includes('associated')) ? 'This email address is already registered.' : 'Please enter a valid email address.');",
        "          } else {",
        "            friendlyError = prefix + data.error;",
        "          }",
        "        }",
        "        setErrorMessage(friendlyError);",
        "        setTimeout(() => {",
        "          setSubmitStatus(null);",
        "          setErrorMessage(\"\");",
        "        }, 7000);",
        "      }"
    ];
    
    // We also need to restore the catch block if it was deleted
    let remaining = lines.slice(endIndex);
    if (!remaining.some(l => l.includes('catch (error)'))) {
        console.log('Restoring catch block...');
        replacement.push(
            "    } catch (error) {",
            "      console.error('Form submission error:', error);",
            "      setSubmitStatus(\"error\");",
            "      setErrorMessage(\"Network error. Please check your connection and try again.\");",
            "      setTimeout(() => {",
            "        setSubmitStatus(null);",
            "        setErrorMessage(\"\");",
            "      }, 7000);",
            "    } finally {",
            "      setIsSubmitting(false);",
            "    }"
        );
        // Find where handleSubmit ends to avoid double finally
        const endOfSubmit = lines.findIndex((l, idx) => idx > startIndex && l.trim() === '};');
        if (endOfSubmit !== -1) {
           // Replace everything up to the end of the function
           lines.splice(startIndex, endOfSubmit - startIndex, ...replacement);
        } else {
           lines.splice(startIndex, lines.length - startIndex, ...replacement);
        }
    } else {
        lines.splice(startIndex, endIndex - startIndex, ...replacement);
    }
    
    fs.writeFileSync('src/app/components/ContactForm.jsx', lines.join('\n'));
    console.log('Successfully repaired ContactForm.jsx');
} else {
    console.error('Could not find target block');
    process.exit(1);
}
