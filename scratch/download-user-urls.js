const https = require("https");
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../public/products/r-lifi");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const images = [
  { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/rdl_lifi_1.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true", name: "rdl_lifi_1.jpg" },
  { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/RDL_LIFI_TX.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1240,cg:true", name: "RDL_LIFI_TX.png" },
  { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/RDL_LIFI_7%20(1).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1240,cg:true", name: "RDL_LIFI_7.jpg" },
  { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/5a808dc6-6d0a-4ac6-a01a-96ecdd63adff.JPG/:/cr=t:22.6%25,l:0%25,w:100%25,h:54.8%25/rs=w:388,h:194,cg:true", name: "app_1.jpg" },
  { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/2fc614a9-b287-4eb1-b950-377c1b1b283d.jpg/:/cr=t:3.17%25,l:0%25,w:100%25,h:93.67%25/rs=w:388,h:194,cg:true", name: "app_2.jpg" },
  { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/4cb466c9-0dd6-4077-b2d9-362ce29068b4.jpg/:/cr=t:5.24%25,l:0%25,w:100%25,h:89.52%25/rs=w:388,h:194,cg:true", name: "app_3.jpg" },
  { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/a378e8d6-322e-43d6-8017-c84beccb390e.JPG/:/cr=t:5.53%25,l:0%25,w:100%25,h:90.85%25/rs=w:388,h:194,cg:true", name: "app_4.jpg" },
  { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/b918e9b8-30ee-40af-99aa-7f01f29c286c.JPG/:/cr=t:3.17%25,l:0%25,w:100%25,h:93.66%25/rs=w:388,h:194,cg:true", name: "app_5.jpg" },
  { url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/a7a9ba10-2dbe-4262-802b-ab0720590739.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,h:194,cg:true", name: "app_6.png" },
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
