const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

async function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    const client = url.startsWith("https") ? https : http;

    const request = client.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "Referer": "https://rdltech.in/"
      }
    }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}, status: ${response.statusCode}`));
      }
      response.pipe(file);
      file.on("finish", () => {
        file.close(resolve);
      });
    });

    request.on("error", (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function run() {
  const lifiDir = path.join(__dirname, "../public/products/r-lifi");
  const rfidDir = path.join(__dirname, "../public/products/rfid-reader");
  if (!fs.existsSync(lifiDir)) fs.mkdirSync(lifiDir, { recursive: true });
  if (!fs.existsSync(rfidDir)) fs.mkdirSync(rfidDir, { recursive: true });

  console.log("Downloading R-LiFi & RFID Reader images directly from rdltech.in assets...");

  // Download R-LiFi Images from rdltech.in
  const lifiImages = [
    { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/lifi.jpg", filename: "r-lifi-hero.jpg" },
    { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/lifi%20block.png", filename: "r-lifi-architecture.png" },
    { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/lifi%20nano.jpg", filename: "r-lifi-nano.jpg" },
    { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/lifi%20phone.jpg", filename: "r-lifi-phone.jpg" },
    { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/vl%20glass.jpg", filename: "vl-glass.jpg" }
  ];

  for (const item of lifiImages) {
    const dest = path.join(lifiDir, item.filename);
    try {
      await downloadFile(item.url, dest);
      console.log(`✓ Downloaded ${item.filename}`);
    } catch (e) {
      console.error(`x Error downloading ${item.filename}: ${e.message}`);
    }
  }

  // Download RFID Reader Images from rdltech.in
  const rfidImages = [
    { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/webbanner%20(1).png", filename: "rfid-banner.png" },
    { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/rfid%20block.png", filename: "rfid-architecture.png" },
    { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/1-6e3fd0a.jpg", filename: "rfid-conveyor.jpg" },
    { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/rfid%20tags.png", filename: "rfid-tags.png" }
  ];

  for (const item of rfidImages) {
    const dest = path.join(rfidDir, item.filename);
    try {
      await downloadFile(item.url, dest);
      console.log(`✓ Downloaded ${item.filename}`);
    } catch (e) {
      console.error(`x Error downloading ${item.filename}: ${e.message}`);
    }
  }
}

run();
