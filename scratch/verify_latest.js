const { chromium } = require('playwright');
const path = require('path');

const ARTIFACTS_DIR = 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();
  await page.setViewportSize({ width: 1366, height: 900 });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(2000);

  // 1. Capture Footer Support & Talk to Our Experts links
  const footerColumn5 = page.locator('footer div.grid > div:last-child').first();
  await footerColumn5.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await footerColumn5.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_footer_support_vertically_centered.png') });
  console.log('Saved live_footer_support_vertically_centered.png');

  // 2. Capture CTA Section at 1366
  const cta = page.locator('#cta').first();
  await cta.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await cta.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_cta_zero_overlap_1366.png') });
  console.log('Saved live_cta_zero_overlap_1366.png');

  // 3. Capture CTA Section at 1280
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.waitForTimeout(500);
  await cta.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_cta_zero_overlap_1280.png') });
  console.log('Saved live_cta_zero_overlap_1280.png');

  await browser.close();
  console.log('Done verification!');
})();
