const fs = require("fs");
const htmlPath = `C:\\Users\\ISARVA\\.gemini\\antigravity-ide\\brain\\f034d2c1-3db1-4ee9-baf2-d4c2674e4fe9\\.system_generated\\steps\\318\\content.md`;
const content = fs.readFileSync(htmlPath, "utf8");

// Extract all wsimg URLs
const imgMatches = content.match(/\/\/img1\.wsimg\.com\/[^\s"'\>\)]+/g) || [];
console.log("=== WSIMG URLs ===");
const uniqueImgs = [...new Set(imgMatches)];
uniqueImgs.forEach(url => console.log(url));

// Search for JSON text content
console.log("\n=== TEXT MATCHES ===");
const textMatches = content.match(/"text":"([^"]+)"/g) || [];
textMatches.forEach(m => console.log(m));
