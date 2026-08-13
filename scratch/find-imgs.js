const fs = require("fs");
const htmlPath = `C:\\Users\\ISARVA\\.gemini\\antigravity-ide\\brain\\f034d2c1-3db1-4ee9-baf2-d4c2674e4fe9\\.system_generated\\steps\\318\\content.md`;
const content = fs.readFileSync(htmlPath, "utf8");

const matches = content.match(/https?:\/\/[^\s"'<>\)]+/g) || [];
const imgUrls = matches.filter(u => u.includes("isteam") || u.includes("wsimg") || u.includes("image") || u.includes("jpg") || u.includes("png") || u.includes("webp"));

console.log("=== ALL WEBPAGE IMAGE URLS ===");
const unique = [...new Set(imgUrls)];
unique.forEach(u => console.log(u));
