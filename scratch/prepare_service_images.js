const sharp = require('sharp');
const fs = require('fs');

const imgPath = 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/77c89663-b94d-4f1c-933b-1d5f0a6e3d27/.user_uploaded/media_1793099484300.png';

// Let's create high quality 400x560 portrait images for the 6 services:
async function prepareServiceImages() {
  // 1. Web Development:
  // We have the high-res Unsplash photo service-web-dev.jpg which is identical to the mockup!
  if (fs.existsSync('scratch/serv_raw_web-dev.jpg')) {
    await sharp('scratch/serv_raw_web-dev.jpg')
      .resize(400, 560, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 95 })
      .toFile('public/images/service-web-development.jpg');
    console.log('Saved service-web-development.jpg');
  }

  // 2. Mobile Apps:
  // Let's extract from media_1793099484300.png (left 566, top 158, width 88, height 140)
  // and upscale to 400x560 with lanczos3
  await sharp(imgPath)
    .extract({ left: 566, top: 158, width: 88, height: 140 })
    .resize(400, 560, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.0, m1: 0.5, m2: 2.0 })
    .jpeg({ quality: 95 })
    .toFile('public/images/service-mobile-apps.jpg');
  console.log('Saved service-mobile-apps.jpg');

  // 3. Cloud Solutions:
  // Extract left 889, top 158, width 88, height 140
  await sharp(imgPath)
    .extract({ left: 889, top: 158, width: 88, height: 140 })
    .resize(400, 560, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.0, m1: 0.5, m2: 2.0 })
    .jpeg({ quality: 95 })
    .toFile('public/images/service-cloud-solutions.jpg');
  console.log('Saved service-cloud-solutions.jpg');

  // 4. UI/UX Design:
  // Extract left 242, top 373, width 88, height 140
  await sharp(imgPath)
    .extract({ left: 242, top: 373, width: 88, height: 140 })
    .resize(400, 560, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.0, m1: 0.5, m2: 2.0 })
    .jpeg({ quality: 95 })
    .toFile('public/images/service-ui-ux-design.jpg');
  console.log('Saved service-ui-ux-design.jpg');

  // 5. E-Commerce:
  // Extract left 566, top 373, width 88, height 140
  await sharp(imgPath)
    .extract({ left: 566, top: 373, width: 88, height: 140 })
    .resize(400, 560, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.0, m1: 0.5, m2: 2.0 })
    .jpeg({ quality: 95 })
    .toFile('public/images/service-ecommerce.jpg');
  console.log('Saved service-ecommerce.jpg');

  // 6. Maintenance & Support:
  // Extract left 889, top 373, width 88, height 140
  await sharp(imgPath)
    .extract({ left: 889, top: 373, width: 88, height: 140 })
    .resize(400, 560, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.0, m1: 0.5, m2: 2.0 })
    .jpeg({ quality: 95 })
    .toFile('public/images/service-maintenance-support.jpg');
  console.log('Saved service-maintenance-support.jpg');
}

prepareServiceImages().catch(console.error);
