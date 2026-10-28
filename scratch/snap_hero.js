const { chromium } = require('playwright');
const path = require('path');

const ARTIFACT_DIR = 'C:/Users/ISARVA/.gemini/antigravity/brain/6795714c-561e-4f44-bf47-a2ec6defdf2c';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(2000);
  const hero = page.locator('section[aria-labelledby="hero-heading"]').first();
  await hero.screenshot({ path: path.join(ARTIFACT_DIR, 'current_hero_snap.png') });
  console.log('Saved current_hero_snap.png');
  await browser.close();
})();
