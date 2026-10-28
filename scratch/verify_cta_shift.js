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
  await page.waitForTimeout(1500);

  const cta = page.locator('#cta').first();
  await cta.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  // 1366px
  await cta.screenshot({ path: path.join(ARTIFACTS_DIR, 'new_laptop_1366.png') });
  console.log('Saved new_laptop_1366.png');

  // 1280px
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.waitForTimeout(600);
  await cta.screenshot({ path: path.join(ARTIFACTS_DIR, 'new_laptop_1280.png') });
  console.log('Saved new_laptop_1280.png');

  // 1536px
  await page.setViewportSize({ width: 1536, height: 900 });
  await page.waitForTimeout(600);
  await cta.screenshot({ path: path.join(ARTIFACTS_DIR, 'new_laptop_1536.png') });
  console.log('Saved new_laptop_1536.png');

  await browser.close();
  console.log('Done captures!');
})();
