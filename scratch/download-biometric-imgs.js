const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(__dirname, '..', 'public', 'products', 'biometric-authentication');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = [
  { url: 'https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/Biometric_1A.jpg', name: 'biometric-1a.jpg' },
  { url: 'https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/Biometric_4A.jpg', name: 'biometric-4a.jpg' },
  { url: 'https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/Biometric_5A.jpg', name: 'biometric-5a.jpg' },
  { url: 'https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/RDL810_FB_4.jpg', name: 'rdl810-fb-4.jpg' },
  { url: 'https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/RDL810_FB_5.jpg', name: 'rdl810-fb-5.jpg' },
  { url: 'https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/RDL810_FB_6.jpg', name: 'rdl810-fb-6.jpg' },
  { url: 'https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/11.jpg', name: 'biometric-11.jpg' },
  { url: 'https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/AA.jpg', name: 'rdl810-aa.jpg' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const img of images) {
    const dest = path.join(targetDir, img.name);
    console.log(`Downloading ${img.url} -> ${dest}`);
    try {
      await download(img.url, dest);
      console.log(`Saved ${img.name}`);
    } catch (e) {
      console.error(`Failed to download ${img.name}:`, e.message);
    }
  }
}

main();
