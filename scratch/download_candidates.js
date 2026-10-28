const https = require('https');
const fs = require('fs');
const sharp = require('sharp');

// Helper to download an image
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

// Curated Unsplash IDs matching the EXACT aesthetic in the user reference:
// 1. HRMS: Laptop with colorful modern SaaS dashboard
// 2. CRM: Laptop with dark/light CRM analytics dashboard
// 3. Support: Laptop with customer support / ticket / analytics UI
// 4. BillSoft: Laptop with billing / finance / invoice dashboard
// 5. Marine: Cargo container ship at sea / port
// 6. Dispatcher: Freight truck on highway / logistics fleet
// 7. WooCommerce: Laptop showing modern e-commerce shopping / dashboard
// 8. Mobile App: Sleek smartphones displaying mobile application interface

const candidates = [
  {
    name: 'marine',
    // Container ship in ocean port - exactly like user reference!
    // E.g.: https://images.unsplash.com/photo-1578575437130-527eed3abbec (container ship)
    // or https://images.unsplash.com/photo-1544620347-c4fd4a3d5957
    // or https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5
    url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1000&auto=format&fit=crop&q=85'
  },
  {
    name: 'dispatcher',
    // White freight semi-truck on road / logistics - exactly like user reference!
    // E.g.: https://images.unsplash.com/photo-1601584115197-04ecc0da31d7 (white freight truck on highway)
    // or https://images.unsplash.com/photo-1519003722824-194d4455a60c
    url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1000&auto=format&fit=crop&q=85'
  },
  {
    name: 'mobile-app',
    // Modern smartphones displaying UI / app - exactly like user reference!
    // E.g.: https://images.unsplash.com/photo-1551650975-87deedd944c3
    // or https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c
    // or https://images.unsplash.com/photo-1581291518857-4e27b48ff24e
    url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1000&auto=format&fit=crop&q=85'
  },
  {
    name: 'hrms',
    // Laptop displaying SaaS dashboard / analytics
    // E.g.: https://images.unsplash.com/photo-1551288049-bebda4e38f71 (analytics dashboard)
    // or https://images.unsplash.com/photo-1460925895917-afdab827c52f
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=85'
  },
  {
    name: 'crm',
    // Laptop with CRM / business growth dashboard
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=85'
  },
  {
    name: 'support',
    // Customer support / helpdesk team or dashboard
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1000&auto=format&fit=crop&q=85'
  },
  {
    name: 'billsoft',
    // Invoicing / financial dashboard on screen
    url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1000&auto=format&fit=crop&q=85'
  },
  {
    name: 'woocommerce',
    // E-commerce store / shopping laptop dashboard
    url: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=1000&auto=format&fit=crop&q=85'
  }
];

async function testDownload() {
  for (const c of candidates) {
    const dest = `scratch/cand_${c.name}.jpg`;
    try {
      console.log(`Downloading ${c.name}...`);
      await downloadImage(c.url, dest);
      console.log(`Downloaded ${c.name}`);
    } catch (err) {
      console.error(`Error downloading ${c.name}:`, err.message);
    }
  }
}

testDownload();
