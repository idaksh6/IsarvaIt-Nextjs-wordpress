const sharp = require('sharp');

const imgPath = 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/77c89663-b94d-4f1c-933b-1d5f0a6e3d27/.user_uploaded/media_1793097846076.jpg';

// In the reference screenshot:
// The 8 products are in Row 0 and Row 1:
// Col 0: left 41, width 221
// Col 1: left 277, width 221
// Col 2: left 513, width 221
// Col 3: left 749, width 221
//
// Row 0: top 167, height 74
// Row 1: top 320, height 74

const cardWidth = 221;
const cardHeight = 74;

// The badge circle was roughly at:
// local x: 0 to 44, local y: 44 to 74 (bottom-left corner)
// By cloning the patch from local x: 45 to 89, local y: 44 to 74 and flipping or blending it over the badge area,
// we completely eliminate the badge ghost!

async function cleanCrop(colLeft, rowTop, filename) {
  // 1. Extract the raw card image
  const rawBuf = await sharp(imgPath)
    .extract({ left: colLeft, top: rowTop, width: cardWidth, height: cardHeight })
    .toBuffer();

  // 2. Extract an adjacent clean patch from x=45..85, y=44..74
  const patchBuf = await sharp(rawBuf)
    .extract({ left: 45, top: 44, width: 44, height: 30 })
    .flop() // mirror horizontally for natural texture blend
    .blur(1)
    .toBuffer();

  // 3. Composite the patch over the bottom-left (left: 0, top: 44)
  const cleanedBuf = await sharp(rawBuf)
    .composite([{ input: patchBuf, left: 0, top: 44 }])
    .resize(600, 340, {
      kernel: sharp.kernel.lanczos3,
      fit: 'cover'
    })
    .sharpen({ sigma: 1.0, m1: 0.5, m2: 2.0 })
    .jpeg({ quality: 95 })
    .toFile(`public/images/${filename}`);

  console.log(`Saved clean ${filename}`);
}

async function run() {
  // Row 0:
  await cleanCrop(41, 167, 'product-hrms-software.jpg');
  await cleanCrop(277, 167, 'product-crm-software.jpg');
  await cleanCrop(513, 167, 'product-support-software.jpg');
  await cleanCrop(749, 167, 'product-bill-soft.jpg');

  // Row 1:
  await cleanCrop(41, 320, 'product-marine-service-software.jpg');
  await cleanCrop(277, 320, 'product-dispatcher-panel.jpg');
  await cleanCrop(513, 320, 'product-woocommerce-development.jpg');
  await cleanCrop(749, 320, 'product-mobile-app-development.jpg');

  console.log('All 8 products cleaned and saved successfully!');
}

run().catch(console.error);
