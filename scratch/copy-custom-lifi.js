const fs = require("fs");
const path = require("path");

const source = "C:/Users/ISARVA/.gemini/antigravity-ide/brain/f034d2c1-3db1-4ee9-baf2-d4c2674e4fe9/.tempmediaStorage/media_f034d2c1-3db1-4ee9-baf2-d4c2674e4fe9_1786600507588.png";
const dest = path.join(__dirname, "../public/products/r-lifi/r-lifi-hero-custom.png");

fs.copyFileSync(source, dest);
console.log("Successfully copied custom R-LiFi hero image!");
