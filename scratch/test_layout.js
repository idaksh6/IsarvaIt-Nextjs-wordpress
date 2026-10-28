const sharp = require('sharp');

// Let's inspect regions of media_1793099484300.png
// The user uploaded this exact image with the prompt:
// "DISPLAY ONLY 8 PRODUCTS AND GENERTAE RELEVANT IMAGES AND USE HERE"

// Let's check where the 8 cards are located in this image.
// Total dimensions: 1024 x 583.
// Row 1 cards: top around y=10-20? Or where?
// Let's extract row 1 card 1 and row 2 card 1 to inspect.

async function testExtract() {
  // Let's crop 4 sample areas to inspect them
  await sharp('C:/Users/ISARVA/.gemini/antigravity-ide/brain/77c89663-b94d-4f1c-933b-1d5f0a6e3d27/.user_uploaded/media_1793099484300.png')
    .extract({ left: 40, top: 30, width: 200, height: 120 })
    .toFile('scratch/sample_card_0.jpg');

  await sharp('C:/Users/ISARVA/.gemini/antigravity-ide/brain/77c89663-b94d-4f1c-933b-1d5f0a6e3d27/.user_uploaded/media_1793099484300.png')
    .extract({ left: 40, top: 290, width: 200, height: 120 })
    .toFile('scratch/sample_card_4.jpg');

  console.log('Saved samples');
}

testExtract().catch(console.error);
