const sharp = require('sharp');

const imgPath = 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/77c89663-b94d-4f1c-933b-1d5f0a6e3d27/.user_uploaded/media_1793099484300.png';

// Let's refine the exact coordinates of the 6 card images in media_1793099484300.png:
// Total image is 1024 x 583.
// Row 0:
// Card 1 (Web Dev): left 242, top 158, width 88, height 140
// Card 2 (Mobile Apps): left 566, top 158, width 88, height 140
// Card 3 (Cloud Solutions): left 889, top 158, width 88, height 140

// Row 1:
// Card 4 (UI/UX Design): left 242, top 373, width 88, height 140
// Card 5 (E-Commerce): left 566, top 373, width 88, height 140
// Card 6 (Maintenance & Support): left 889, top 373, width 88, height 140

const items = [
  { name: 'web-development', left: 242, top: 158, width: 88, height: 140 },
  { name: 'mobile-apps', left: 566, top: 158, width: 88, height: 140 },
  { name: 'cloud-solutions', left: 889, top: 158, width: 88, height: 140 },
  { name: 'ui-ux-design', left: 242, top: 373, width: 88, height: 140 },
  { name: 'ecommerce', left: 566, top: 373, width: 88, height: 140 },
  { name: 'maintenance-support', left: 889, top: 373, width: 88, height: 140 }
];

async function extractAll() {
  for (const it of items) {
    await sharp(imgPath)
      .extract({ left: it.left, top: it.top, width: it.width, height: it.height })
      .resize(400, 600, {
        kernel: sharp.kernel.lanczos3,
        fit: 'cover'
      })
      .sharpen({ sigma: 1.0, m1: 0.5, m2: 2.0 })
      .jpeg({ quality: 95 })
      .toFile(`public/images/service-${it.name}-exact.jpg`);
      
    console.log(`Saved service-${it.name}-exact.jpg`);
  }
}

extractAll().catch(console.error);
