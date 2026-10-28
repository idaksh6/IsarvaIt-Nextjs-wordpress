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

// 6 brand new, high resolution, professional vertical images
const newImages = [
  {
    name: 'web-development',
    // Coding on MacBook Pro in modern bright office setup
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=85',
    position: 'center'
  },
  {
    name: 'mobile-apps',
    // Modern smartphone displaying sleek mobile app interface
    url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&auto=format&fit=crop&q=85',
    position: 'center'
  },
  {
    name: 'cloud-solutions',
    // High-tech server racks with futuristic glowing blue lights & cloud infrastructure
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&auto=format&fit=crop&q=85',
    position: 'center'
  },
  {
    name: 'ui-ux-design',
    // UI/UX designer working on website wireframes and Figma app layouts
    url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=900&auto=format&fit=crop&q=85',
    position: 'center'
  },
  {
    name: 'ecommerce',
    // E-commerce online shopping & store checkout on laptop screen
    url: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=900&auto=format&fit=crop&q=85',
    position: 'center'
  },
  {
    name: 'maintenance-support',
    // IT customer support and systems monitoring with headset
    url: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=900&auto=format&fit=crop&q=85',
    position: 'center'
  }
];

async function generateNewImages() {
  for (const img of newImages) {
    const rawPath = `scratch/new_raw_${img.name}.jpg`;
    const finalPath = `public/images/service-${img.name}.jpg`;
    try {
      console.log(`Downloading ${img.name}...`);
      await downloadImage(img.url, rawPath);
      
      // Process to crisp 500x700 (5:7 vertical portrait ratio)
      await sharp(rawPath)
        .resize(500, 700, {
          fit: 'cover',
          position: img.position,
          kernel: sharp.kernel.lanczos3
        })
        .sharpen({ sigma: 0.8, m1: 0.5, m2: 1.5 })
        .jpeg({ quality: 92 })
        .toFile(finalPath);
        
      console.log(`Successfully generated ${finalPath}`);
    } catch (err) {
      console.error(`Error for ${img.name}:`, err.message);
    }
  }
}

generateNewImages().catch(console.error);
