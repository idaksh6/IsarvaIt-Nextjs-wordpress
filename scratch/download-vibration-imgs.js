const https = require("https");
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../public/products/vibration-sensor");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const images = [
  { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/photo1%20(1).png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true", name: "vibration-hero.png" },
  { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/S3.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true", name: "vibration-s3.jpg" },
  { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/S2.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true", name: "vibration-s2.jpg" },
];

images.forEach((item) => {
  const file = fs.createWriteStream(path.join(dir, item.name));
  https.get(item.url, (res) => {
    if (res.statusCode === 200) {
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log(`✓ Downloaded ${item.name}`);
      });
    } else {
      console.log(`x Failed HTTP ${res.statusCode} for ${item.name}`);
    }
  });
});
