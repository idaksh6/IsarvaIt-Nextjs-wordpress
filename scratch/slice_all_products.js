const sharp = require('sharp');

const imgPath = 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/77c89663-b94d-4f1c-933b-1d5f0a6e3d27/.user_uploaded/media_1793097846076.jpg';

// Let's refine the exact column and row coordinates:
// Columns:
// Col 0: left 41, width 221
// Col 1: left 277, width 221
// Col 2: left 513, width 221
// Col 3: left 749, width 221
//
// Rows:
// Row 0: top 167, height 74
// Row 1: top 320, height 74
// Row 2: top 473, height 74

const products = [
  // Row 0
  { slug: 'hrms-software', col: 0, row: 0 },
  { slug: 'crm-software', col: 1, row: 0 },
  { slug: 'support-software', col: 2, row: 0 },
  { slug: 'bill-soft', col: 3, row: 0 },
  
  // Row 1
  { slug: 'marine-service-software', col: 0, row: 1 },
  { slug: 'dispatcher-panel', col: 1, row: 1 },
  { slug: 'woocommerce-development', col: 2, row: 1 },
  { slug: 'mobile-app-development', col: 3, row: 1 },
  
  // Row 2
  { slug: 'retail-billing-software', col: 0, row: 2 },
  { slug: 'dealer-management-and-dealer-article-software', col: 1, row: 2 },
  { slug: 'lawyer-legal-association-software', col: 2, row: 2 },
  { slug: 'posh-compliance-software', col: 3, row: 2 }
];

const colLefts = [41, 277, 513, 749];
const rowTops = [167, 320, 473];
const cardWidth = 221;
const cardImageHeight = 75;

async function sliceAll() {
  for (const p of products) {
    const left = colLefts[p.col];
    const top = rowTops[p.row];
    
    // Extract and upscale to 600x340 (standard 16:9 retina card thumbnail) with Lanczos sharpening
    await sharp(imgPath)
      .extract({ left, top, width: cardWidth, height: cardImageHeight })
      .resize(600, 340, {
        kernel: sharp.kernel.lanczos3,
        fit: 'cover'
      })
      .sharpen({ sigma: 1.0, m1: 0.5, m2: 2.0 })
      .jpeg({ quality: 95 })
      .toFile(`public/images/product-${p.slug}.jpg`);
      
    console.log(`Saved product-${p.slug}.jpg`);
  }
}

sliceAll().catch(console.error);
