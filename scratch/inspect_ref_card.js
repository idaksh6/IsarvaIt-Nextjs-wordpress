const sharp = require('sharp');

async function inspectCard() {
  // Let's crop Card 1 (Web Development) from media_1793099484300.png
  // Dimensions of media_1793099484300.png: 1024 x 583
  // Card 1 is top-left:
  await sharp('C:/Users/ISARVA/.gemini/antigravity-ide/brain/77c89663-b94d-4f1c-933b-1d5f0a6e3d27/.user_uploaded/media_1793099484300.png')
    .extract({ left: 35, top: 145, width: 310, height: 185 })
    .toFile('scratch/ref_card_1.jpg');

  console.log('Saved ref_card_1.jpg');
}

inspectCard().catch(console.error);
