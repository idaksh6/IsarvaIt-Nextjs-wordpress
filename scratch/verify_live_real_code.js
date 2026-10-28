const { chromium } = require('playwright');
const path = require('path');

const ARTIFACTS_DIR = 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await page.waitForTimeout(2000);

  // 1. Screenshot real code CTA on Desktop
  const cta = page.locator('#cta').first();
  await cta.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await cta.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_cta_real_code_desktop.png') });
  console.log('Saved live_cta_real_code_desktop.png');

  // 2. Screenshot Footer Column 5
  const col5 = page.locator('footer div:has-text("Contact Us"):has-text("Talk to Our Experts")').first();
  if (await col5.count() > 0) {
    await col5.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_footer_col5_link_verified.png') });
    console.log('Saved live_footer_col5_link_verified.png');
  }

  // 3. Screenshot real code CTA on Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(1000);
  await cta.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await cta.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_cta_real_code_mobile.png') });
  console.log('Saved live_cta_real_code_mobile.png');

  await browser.close();
  console.log('Done verification!');
})();
