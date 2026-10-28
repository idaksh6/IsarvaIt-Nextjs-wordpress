const { chromium } = require('playwright');
const path = require('path');

const ARTIFACT_DIR = 'C:/Users/ISARVA/.gemini/antigravity/brain/6795714c-561e-4f44-bf47-a2ec6defdf2c';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  
  const viewports = [
    { name: 'desktop_1920', width: 1920, height: 1080 },
    { name: 'desktop_1440', width: 1440, height: 900 },
    { name: 'tablet_1024', width: 1024, height: 768 },
    { name: 'tablet_768', width: 768, height: 1024 },
    { name: 'mobile_390', width: 390, height: 844 },
  ];

  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(1500); // Wait for Next.js hydration & styles
    const hero = page.locator('section[aria-labelledby="hero-heading"]').first();
    await hero.screenshot({ path: path.join(ARTIFACT_DIR, `live_verified_${vp.name}.png`) });
    console.log(`Saved live_verified_${vp.name}.png`);
    await page.close();
  }

  await browser.close();
  console.log('All screenshots completed successfully!');
})();
