const { chromium } = require('playwright');
const path = require('path');

const ARTIFACTS_DIR = 'C:/Users/ISARVA/.gemini/antigravity/brain/6795714c-561e-4f44-bf47-a2ec6defdf2c';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  // 1. Mobile Hero
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'mobile_hero_compact.png') });
  console.log('Saved mobile_hero_compact.png');

  // 2. Mobile CTA
  const cta = page.locator('#cta').first();
  await cta.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await cta.screenshot({ path: path.join(ARTIFACTS_DIR, 'mobile_cta_fixed.png') });
  console.log('Saved mobile_cta_fixed.png');

  // 3. Full mobile viewport at CTA to see WhatsApp button interaction
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'mobile_cta_viewport.png') });
  console.log('Saved mobile_cta_viewport.png');

  await browser.close();
  console.log('Done!');
})();

