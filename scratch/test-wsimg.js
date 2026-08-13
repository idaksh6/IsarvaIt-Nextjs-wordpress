const https = require("https");
const fs = require("fs");
const path = require("path");

const testUrls = [
  { name: "lifi-hero.jpg", url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/lifi.jpg/:/rs=w:1200,cg:true" },
  { name: "lifi-block.png", url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/lifi%20block.png/:/rs=w:1200,cg:true" },
  { name: "lifi-nano.jpg", url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/lifi%20nano.jpg/:/rs=w:1200,cg:true" },
  { name: "rfid-banner.png", url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/webbanner%20(1).png/:/rs=w:1200,cg:true" },
  { name: "rfid-block.png", url: "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/rfid%20block.png/:/rs=w:1200,cg:true" },
];

testUrls.forEach(item => {
  https.get(item.url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
    }
  }, (res) => {
    console.log(`${res.statusCode} -> ${item.name} (length: ${res.headers['content-length']})`);
  });
});
