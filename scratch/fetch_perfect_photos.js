const https = require('https');
const fs = require('fs');
const sharp = require('sharp');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`Status ${res.statusCode} for ${url}`));
      const f = fs.createWriteStream(dest);
      res.pipe(f);
      f.on('finish', () => f.close(resolve));
    }).on('error', reject);
  });
}

// Curated high quality Unsplash images:
const photos = [
  {
    name: 'cloud-solutions',
    // Datacenter with glowing blue lights and futuristic servers
    url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&auto=format&fit=crop&q=85'
  },
  {
    name: 'ui-ux-design',
    // Designer creating wireframes and mobile UI layout on computer
    url: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=900&auto=format&fit=crop&q=85'
  },
  {
    name: 'maintenance-support',
    // IT support specialist with headset in front of computer monitor
    url: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=900&auto=format&fit=crop&q=85'
  }
];

async function fetchAndProcess() {
  for (const p of photos) {
    try {
      console.log(`Downloading ${p.name}...`);
      await download(p.url, `scratch/fetch_${p.name}.jpg`);
      await sharp(`scratch/fetch_${p.name}.jpg`)
        .resize(500, 700, {
          fit: 'cover',
          position: 'center',
          kernel: sharp.kernel.lanczos3
        })
        .sharpen({ sigma: 0.8, m1: 0.5, m2: 1.5 })
        .jpeg({ quality: 92 })
        .toFile(`public/images/service-${p.name}.jpg`);
      console.log(`Saved public/images/service-${p.name}.jpg`);
    } catch (e) {
      console.error(`Error for ${p.name}:`, e.message);
    }
  }
}

fetchAndProcess();
