const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  
  // 1. Desktop 1440x900
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  const productsSection = page.locator('#products');
  await productsSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  
  await productsSection.screenshot({ path: 'public/images/products_section_desktop_verified.png' });
  console.log('Desktop screenshot saved');
  
  // 2. Mobile 390x844
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  const mobileSection = mobilePage.locator('#products');
  await mobileSection.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(1000);
  
  await mobileSection.screenshot({ path: 'public/images/products_section_mobile_verified.png' });
  console.log('Mobile screenshot saved');

  await browser.close();
})();
