const sharp = require('sharp');
const fs = require('fs');

async function inspect() {
  const meta = await sharp('C:/Users/ISARVA/.gemini/antigravity-ide/brain/77c89663-b94d-4f1c-933b-1d5f0a6e3d27/.user_uploaded/media_1793099484300.png').metadata();
  console.log('User image 1793099484300 metadata:', meta);
}

inspect();
