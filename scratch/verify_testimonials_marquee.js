const { chromium } = require('playwright');
const path = require('path');

const ARTIFACTS_DIR = 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await page.waitForTimeout(2000);

  const testimonials = page.locator('section').filter({ hasText: 'What Our Clients Say' }).first();
  await testimonials.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  // 1. Initial screenshot - check white edge fades (zero yellow tint)
  await testimonials.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_testimonials_white_fades_1.png') });
  console.log('Saved live_testimonials_white_fades_1.png');

  // 2. Wait 2.5s and capture again to verify it has smoothly auto-slid
  await page.waitForTimeout(2500);
  await testimonials.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_testimonials_white_fades_2_sliding.png') });
  console.log('Saved live_testimonials_white_fades_2_sliding.png');

  // 3. Hover over the second visible card to verify hover stop
  const secondCard = page.locator('.ts-card').nth(1);
  await secondCard.hover();
  await page.waitForTimeout(1000);
  await testimonials.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_testimonials_hover_pause.png') });
  console.log('Saved live_testimonials_hover_pause.png');

  await browser.close();
  console.log('Done testimonials verification!');
})();
