const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ARTIFACTS_DIR = 'C:/Users/ISARVA/.gemini/antigravity/brain/6795714c-561e-4f44-bf47-a2ec6defdf2c';
const ctaPath = 'F:/IsarvaIt-Nextjs-wordpress/src/app/components/CtaSection.jsx';
const originalCta = fs.readFileSync(ctaPath, 'utf8');

const positions = [
  { label: 'pos1_left16_xl24', className: 'absolute left-12 lg:left-16 xl:left-24 bottom-8 lg:bottom-10 w-36 lg:w-44 pointer-events-none hidden xl:block select-none' },
  { label: 'pos2_left16_xl28', className: 'absolute left-14 lg:left-20 xl:left-28 bottom-8 lg:bottom-10 w-36 lg:w-44 pointer-events-none hidden xl:block select-none' },
  { label: 'pos3_left20_xl32', className: 'absolute left-16 lg:left-24 xl:left-32 bottom-8 lg:bottom-10 w-36 lg:w-44 pointer-events-none hidden xl:block select-none' },
];

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  for (const pos of positions) {
    const modified = originalCta.replace(
      /className="absolute left-6 lg:left-8 bottom-8 lg:bottom-10 w-36 lg:w-44 pointer-events-none hidden xl:block select-none"/,
      `className="${pos.className}"`
    );
    fs.writeFileSync(ctaPath, modified, 'utf8');
    await page.waitForTimeout(1200);

    await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
    const cta = page.locator('#cta').first();
    await cta.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await cta.screenshot({ path: path.join(ARTIFACTS_DIR, `test_doodle_${pos.label}.png`) });
    console.log(`Saved test_doodle_${pos.label}.png`);
  }

  // Restore original before review
  fs.writeFileSync(ctaPath, originalCta, 'utf8');
  await browser.close();
  console.log('Done testing doodle positions!');
})();

