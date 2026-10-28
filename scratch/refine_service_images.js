const https = require('https');
const fs = require('fs');
const sharp = require('sharp');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`Status ${res.statusCode}`));
      const f = fs.createWriteStream(dest);
      res.pipe(f);
      f.on('finish', () => f.close(resolve));
    }).on('error', reject);
  });
}

const targets = [
  {
    name: 'cloud-solutions',
    // High-tech server room with glowing blue datacenter lights
    url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&auto=format&fit=crop&q=85'
  },
  {
    name: 'ui-ux-design',
    // Sleek designer monitor with UI kit & mobile prototypes
    url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&auto=format&fit=crop&q=85'
  },
  {
    name: 'ecommerce',
    // Laptop showing modern online shop / store with shopping bag
    url: 'https://images.unsplash.com/photo-1523474255658-4af61b168344?w=900&auto=format&fit=crop&q=85'
  },
  {
    name: 'maintenance-support',
    // Support engineer with headset at computer screens
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=85'
  }
];

async function run() {
  for (const t of targets) {
    try {
      console.log(`Downloading ${t.name}...`);
      await download(t.url, `scratch/cand_${t.name}.jpg`);
      await sharp(`scratch/cand_${t.name}.jpg`)
        .resize(500, 700, { fit: 'cover', position: 'center', kernel: sharp.kernel.lanczos3 })
        .sharpen({ sigma: 0.8, m1: 0.5, m2: 1.5 })
        .jpeg({ quality: 92 })
        .toFile(`public/images/service-${t.name}.jpg`);
      console.log(`Processed service-${t.name}.jpg`);
    } catch (e) {
      console.error(`Error for ${t.name}:`, e.message);
    }
  }
}

run();
