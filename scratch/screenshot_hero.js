const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });

  // 1. Desktop
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'public/images/hero_section_desktop_verified.png', clip: { x: 0, y: 0, width: 1440, height: 850 } });
  console.log('Saved hero_section_desktop_verified.png');

  // 2. Mobile
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await mobilePage.waitForTimeout(1000);
  await mobilePage.screenshot({ path: 'public/images/hero_section_mobile_verified.png', clip: { x: 0, y: 0, width: 390, height: 844 } });
  console.log('Saved hero_section_mobile_verified.png');

  await browser.close();
})();
