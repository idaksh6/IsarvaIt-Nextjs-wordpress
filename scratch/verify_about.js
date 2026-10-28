const { chromium } = require('playwright');
const path = require('path');

const ARTIFACTS_DIR = 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(1500);

  const about = page.locator('#about-us').first();
  await about.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  await about.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_about_preview_workspace.png') });
  console.log('Saved live_about_preview_workspace.png');

  await browser.close();
  console.log('Done!');
})();
