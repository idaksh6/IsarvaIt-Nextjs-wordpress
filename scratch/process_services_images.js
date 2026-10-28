const https = require('https');
const fs = require('fs');
const sharp = require('sharp');

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
}

// Curated high-res portrait images matching the reference screenshot:
const services = [
  {
    name: 'web-dev',
    // Laptop displaying code editor on clean desk with plant
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=85'
  },
  {
    name: 'mobile-apps',
    // Modern smartphones displaying UI / app
    url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=85'
  },
  {
    name: 'cloud',
    // Datacenter servers with modern blue glow
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=85'
  },
  {
    name: 'ui-ux',
    // Designer workstation with design screens and color swatches
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=85'
  },
  {
    name: 'ecommerce',
    // Laptop with modern online shopping apparel grid
    url: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&auto=format&fit=crop&q=85'
  },
  {
    name: 'support',
    // Professional IT support agent with headset at monitors
    url: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=600&auto=format&fit=crop&q=85'
  }
];

async function run() {
  for (const s of services) {
    const rawDest = `scratch/serv_raw_${s.name}.jpg`;
    console.log(`Downloading ${s.name}...`);
    try {
      await downloadImage(s.url, rawDest);
      // Process to 400x560 (portrait 5:7 ratio)
      await sharp(rawDest)
        .resize(400, 560, { fit: 'cover', position: 'center' })
        .jpeg({ quality: 90 })
        .toFile(`public/images/service-${s.name}.jpg`);
      console.log(`Processed service-${s.name}.jpg`);
    } catch (e) {
      console.error(`Error with ${s.name}:`, e.message);
    }
  }
}

run();
