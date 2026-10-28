const sharp = require('sharp');
const path = require('path');

const imgPath = 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/77c89663-b94d-4f1c-933b-1d5f0a6e3d27/.user_uploaded/media_1793097846076.jpg';

// Let's estimate:
// Total width 1006.
// Left margin ~41px, Right margin ~41px. Total grid width ~924px.
// 4 cards across with gaps.
// Col width ~220px, Gap ~16px.
// Card 0: left ~41, width ~221
// Card 1: left ~277, width ~221
// Card 2: left ~513, width ~221
// Card 3: left ~749, width ~221
//
// Y coordinates:
// Header is from y=0 to ~165.
// Row 0 card top ~166, image height ~68 (or ~72)
// Row 1 card top ~318
// Row 2 card top ~475

async function testCrop() {
  await sharp(imgPath)
    .extract({ left: 41, top: 167, width: 221, height: 75 })
    .toFile('public/images/test_crop_hrms.jpg');
    
  await sharp(imgPath)
    .extract({ left: 277, top: 167, width: 221, height: 75 })
    .toFile('public/images/test_crop_crm.jpg');

  await sharp(imgPath)
    .extract({ left: 41, top: 320, width: 221, height: 75 })
    .toFile('public/images/test_crop_marine.jpg');

  console.log('Test crops saved');
}

testCrop().catch(console.error);
