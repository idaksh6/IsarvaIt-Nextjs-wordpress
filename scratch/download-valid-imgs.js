const https = require("https");
const fs = require("fs");
const path = require("path");

const lifiDir = path.join(__dirname, "../public/products/r-lifi");
const rfidDir = path.join(__dirname, "../public/products/rfid-reader");

if (!fs.existsSync(lifiDir)) fs.mkdirSync(lifiDir, { recursive: true });
if (!fs.existsSync(rfidDir)) fs.mkdirSync(rfidDir, { recursive: true });

const downloads = [
  // Valid live images on GoDaddy CDN
  { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/thumbnails/thumbnail-ab3ab29b-1027-406e-80a1-0234578e0b99.png", dest: path.join(rfidDir, "thumbnail-rfid.png") },
  { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/thumbnails/thumbnail-ab3ab29b-1027-406e-80a1-0234578e0b99.png", dest: path.join(lifiDir, "thumbnail-lifi.png") },
  { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/MAKE_IN_INDIA.jpg", dest: path.join(lifiDir, "make-in-india.jpg") },
  { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/5-2bf31c7.jpg", dest: path.join(lifiDir, "oem-service.jpg") },
  { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/HMI.png", dest: path.join(lifiDir, "lifi-hardware.png") },
  { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/rs%3Dw_600%2Ccg_true-fee0e50.png", dest: path.join(lifiDir, "lifi-scada.png") }
];

downloads.forEach(item => {
  const file = fs.createWriteStream(item.dest);
  https.get(item.url, res => {
    if (res.statusCode === 200) {
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log(`✓ Downloaded image to ${path.basename(item.dest)}`);
      });
    } else {
      console.log(`Failed HTTP ${res.statusCode} for ${item.url}`);
    }
  });
});
