const { chromium } = require('playwright');
const path = require('path');

const ARTIFACTS_DIR = 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await page.waitForTimeout(2000);

  // Screenshot Footer Columns showing More Products, More Services, More Industries
  const footerNav = page.locator('footer div.max-w-\\[1320px\\]').first();
  await footerNav.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await footerNav.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_footer_more_industries_arrow_icon.png') });
  console.log('Saved live_footer_more_industries_arrow_icon.png');

  await browser.close();
  console.log('Done footer verification!');
})();
