const sharp = require('sharp');

async function findBounds() {
  const image = sharp('C:/Users/ISARVA/.gemini/antigravity-ide/brain/77c89663-b94d-4f1c-933b-1d5f0a6e3d27/.user_uploaded/media_1793099484300.png');
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  
  console.log('Image dimensions:', info.width, info.height);

  // Let's create a thumbnail (e.g. 512x291) to view it quickly
  await sharp('C:/Users/ISARVA/.gemini/antigravity-ide/brain/77c89663-b94d-4f1c-933b-1d5f0a6e3d27/.user_uploaded/media_1793099484300.png')
    .resize(512)
    .toFile('scratch/full_user_image_thumb.jpg');
    
  console.log('Saved full_user_image_thumb.jpg');
}

findBounds().catch(console.error);
