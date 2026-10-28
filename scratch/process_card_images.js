const sharp = require('sharp');

async function processImages() {
  // 1. Custom Software - Team collaboration at modern glass conference table
  await sharp('public/team_collab_hero_1773850334652.png')
    .extract({ left: 30, top: 120, width: 580, height: 435 }) // 4:3 ratio focusing on team & laptop
    .resize(400, 300, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 95 })
    .toFile('public/images/card-software-team.jpg');

  // 2. Custom Software - Developer coding on dual screens
  await sharp('public/dev_coding_hero_1773850315265.png')
    .extract({ left: 40, top: 100, width: 560, height: 420 }) // 4:3 ratio focusing on coder & dual screen
    .resize(400, 300, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 95 })
    .toFile('public/images/card-software-dev.jpg');

  // 3. AI & ML - Cybernetic AI Android with glowing AI globe
  await sharp('public/Services/Ai consulting/Home-img.jpg')
    .extract({ left: 50, top: 150, width: 900, height: 675 }) // 4:3 ratio
    .resize(400, 300, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 95 })
    .toFile('public/images/card-ai-cyber.jpg');

  // 4. AI & ML - Pepper AI Robot
  await sharp('public/images/robot_candidate_1.jpg')
    .extract({ left: 200, top: 40, width: 520, height: 390 }) // 4:3 ratio focusing on glowing robot head
    .resize(400, 300, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 95 })
    .toFile('public/images/card-ai-robot.jpg');

  console.log('Processed all 4 card images successfully');
}

processImages().catch(console.error);
