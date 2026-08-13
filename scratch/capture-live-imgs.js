const fs = require("fs");
const path = require("path");

async function captureImagesWithPuppeteer() {
  let puppeteer;
  try {
    puppeteer = require("puppeteer");
  } catch (e) {
    console.log("Puppeteer not installed, installing or using native fetch...");
    return;
  }

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Listen to response events for image buffers
  page.on("response", async (response) => {
    const url = response.url();
    if (url.includes("isteam") || url.includes("wsimg") || url.includes("img1")) {
      try {
        const buffer = await response.buffer();
        let filename = path.basename(url.split("/?:")[0].split("?")[0]);
        if (!filename.includes(".")) filename += ".png";
        
        const savePath = path.join(__dirname, "../public/products/r-lifi", filename);
        fs.writeFileSync(savePath, buffer);
        console.log(`Saved live rendered image: ${filename}`);
      } catch (err) {
        // Ignore response reading errors
      }
    }
  });

  console.log("Navigating to https://rdltech.in/r-lifi-3 ...");
  await page.goto("https://rdltech.in/r-lifi-3", { waitUntil: "networkidle2" });
  
  console.log("Navigating to https://rdltech.in/rfid-reader ...");
  await page.goto("https://rdltech.in/rfid-reader", { waitUntil: "networkidle2" });

  await browser.close();
  console.log("Finished downloading live web images!");
}

captureImagesWithPuppeteer();
