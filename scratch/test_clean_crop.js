const sharp = require('sharp');
const imgPath = 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/77c89663-b94d-4f1c-933b-1d5f0a6e3d27/.user_uploaded/media_1793097846076.jpg';

async function testCleanCrop() {
  await sharp(imgPath)
    .extract({ left: 41, top: 167, width: 221, height: 60 })
    .toFile('public/images/test_clean_hrms.jpg');
    
  await sharp(imgPath)
    .extract({ left: 41, top: 320, width: 221, height: 60 })
    .toFile('public/images/test_clean_marine.jpg');

  console.log('Clean crops saved');
}

testCleanCrop().catch(console.error);
