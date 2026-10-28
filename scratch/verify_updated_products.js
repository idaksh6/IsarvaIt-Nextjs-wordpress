const { chromium } = require('playwright');
const path = require('path');

const ARTIFACTS_DIR = 'C:/Users/ISARVA/.gemini/antigravity/brain/6795714c-561e-4f44-bf47-a2ec6defdf2c';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });

  // 1. Desktop Test (1440x900)
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1500);

  const productsSection = page.locator('#products').first();
  await productsSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await productsSection.screenshot({ path: path.join(ARTIFACTS_DIR, 'desktop_updated_products_section.png') });
  console.log('Saved desktop_updated_products_section.png');

  // Row 1 Close-up (HRMS, CRM, Support, BillSoft)
  const cards = page.locator('#products .grid > div');
  const cardCount = await cards.count();
  console.log('Total product cards found:', cardCount);

  // 2. Mobile Test (390x844)
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await mobilePage.waitForTimeout(1500);

  const mobileProducts = mobilePage.locator('#products').first();
  await mobileProducts.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(800);
  await mobileProducts.screenshot({ path: path.join(ARTIFACTS_DIR, 'mobile_updated_products_section.png') });
  console.log('Saved mobile_updated_products_section.png');

  await browser.close();
  console.log('Done verifying updated products section!');
})();
