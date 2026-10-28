const { chromium } = require('playwright');
const path = require('path');

const ARTIFACTS_DIR = 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(2000);

  // 1. Screenshot Testimonials section
  const testimonials = page.locator('#testimonials, section:has-text("Client Stories"), section:has-text("What Our Clients Say")').first();
  await testimonials.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await testimonials.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_testimonials_verified.png') });
  console.log('Saved live_testimonials_verified.png');

  // 2. Screenshot Footer social media row and entire footer
  const footer = page.locator('footer').first();
  await footer.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await footer.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_footer_verified.png') });
  console.log('Saved live_footer_verified.png');

  await browser.close();
  console.log('Done!');
})();
