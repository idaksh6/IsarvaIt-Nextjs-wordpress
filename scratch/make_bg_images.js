const sharp = require('sharp');
const fs = require('fs');

const brainDir = 'C:/Users/ISARVA/.gemini/antigravity/brain/7c1d45d0-bca2-4f09-acfc-ee2cc55ffe2e/';

// Card dimensions in the reference are 246 x 204
// Let's define the pastel gradient colors for each card to smoothly paint out the left text
const cardConfigs = [
  {
    name: 'hrms',
    src: brainDir + 'ref_card_1_hrms.png',
    dest: 'public/images/bg-card-hrms.png',
    c1: '#F3FAF6',
    c2: '#F8FCF9',
    c3: '#EBF7EE',
    maskWidth: 135,
  },
  {
    name: 'crm',
    src: brainDir + 'ref_card_2_crm.png',
    dest: 'public/images/bg-card-crm.png',
    c1: '#F0F6FF',
    c2: '#F8FAFF',
    c3: '#E6F0FE',
    maskWidth: 135,
  },
  {
    name: 'support',
    src: brainDir + 'ref_card_3_support.png',
    dest: 'public/images/bg-card-support.png',
    c1: '#F8F4FD',
    c2: '#FCF9FF',
    c3: '#EFE7FD',
    maskWidth: 135,
  },
  {
    name: 'billsoft',
    src: brainDir + 'ref_card_4_billsoft.png',
    dest: 'public/images/bg-card-billsoft.png',
    c1: '#FEF8F0',
    c2: '#FFFAF4',
    c3: '#FDF0E1',
    maskWidth: 135,
  },
  {
    name: 'marine',
    src: brainDir + 'ref_card_5_marine.png',
    dest: 'public/images/bg-card-marine.png',
    c1: '#F1F8FD',
    c2: '#F8FBFF',
    c3: '#E4F2FB',
    maskWidth: 130,
  },
  {
    name: 'dispatcher',
    src: brainDir + 'ref_card_6_dispatcher.png',
    dest: 'public/images/bg-card-dispatcher.png',
    c1: '#FEF6F0',
    c2: '#FFFAF5',
    c3: '#FDEEE2',
    maskWidth: 130,
  },
  {
    name: 'pos',
    src: brainDir + 'ref_card_7_pos.png',
    dest: 'public/images/bg-card-pos.png',
    c1: '#FEF2F4',
    c2: '#FFF8FA',
    c3: '#FDE4E8',
    maskWidth: 130,
  },
  {
    name: 'lms',
    src: brainDir + 'ref_card_8_lms.png',
    dest: 'public/images/bg-card-lms.png',
    c1: '#F5F3FD',
    c2: '#F9F8FF',
    c3: '#EAE6FB',
    maskWidth: 130,
  },
];

async function generateCleanBackgrounds() {
  for (const c of cardConfigs) {
    const svg = Buffer.from(`
      <svg width="246" height="204" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${c.c1}" />
            <stop offset="50%" stop-color="${c.c2}" />
            <stop offset="100%" stop-color="${c.c3}" />
          </linearGradient>
          <linearGradient id="fadeMask" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="white" stop-opacity="1" />
            <stop offset="85%" stop-color="white" stop-opacity="1" />
            <stop offset="100%" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <mask id="maskLeft">
            <rect x="0" y="0" width="${c.maskWidth}" height="204" fill="url(#fadeMask)" />
          </mask>
        </defs>
        <rect x="0" y="0" width="${c.maskWidth}" height="204" fill="url(#bgGrad)" mask="url(#maskLeft)" />
      </svg>
    `);

    await sharp(c.src)
      .composite([{ input: svg, top: 0, left: 0 }])
      .resize(560, 464, { kernel: sharp.kernel.lanczos3 })
      .png({ quality: 100 })
      .toFile(c.dest);

    console.log('Created background image:', c.dest);
  }
}

generateCleanBackgrounds().catch(console.error);

