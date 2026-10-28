const { chromium } = require('playwright');
const path = require('path');

const ARTIFACTS_DIR = 'C:/Users/ISARVA/.gemini/antigravity/brain/6795714c-561e-4f44-bf47-a2ec6defdf2c';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  
  // 1. Mobile Tests (390x844)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  const mobilePage = await mobileContext.newPage();
  console.log('Opening mobile page...');
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await mobilePage.waitForTimeout(1000);

  // About Section on Mobile
  const aboutSec = mobilePage.locator('#about-us').first();
  await aboutSec.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(500);
  await aboutSec.screenshot({ path: path.join(ARTIFACTS_DIR, 'mobile_about_centered.png') });
  console.log('Saved mobile_about_centered.png');

  // Why Choose Us Section on Mobile
  const whySec = mobilePage.locator('#why-choose-us').first();
  await whySec.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(500);
  await whySec.screenshot({ path: path.join(ARTIFACTS_DIR, 'mobile_why_choose_us_centered.png') });
  console.log('Saved mobile_why_choose_us_centered.png');

  // Footer Section on Mobile
  const footerSec = mobilePage.locator('footer').first();
  await footerSec.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(500);
  await footerSec.screenshot({ path: path.join(ARTIFACTS_DIR, 'mobile_footer_centered.png') });
  console.log('Saved mobile_footer_centered.png');

  // Close-up of Footer Columns on Mobile
  const footerCol1 = mobilePage.locator('footer div.grid > div').first();
  await footerCol1.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(300);
  await footerCol1.screenshot({ path: path.join(ARTIFACTS_DIR, 'mobile_footer_col1_closeup.png') });
  console.log('Saved mobile_footer_col1_closeup.png');

  // 2. Desktop Tests (1280x900)
  const desktopPage = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  console.log('Opening desktop page...');
  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await desktopPage.waitForTimeout(1000);

  const desktopAbout = desktopPage.locator('#about-us').first();
  await desktopAbout.scrollIntoViewIfNeeded();
  await desktopPage.waitForTimeout(400);
  await desktopAbout.screenshot({ path: path.join(ARTIFACTS_DIR, 'desktop_about_verified.png') });
  console.log('Saved desktop_about_verified.png');

  const desktopWhy = desktopPage.locator('#why-choose-us').first();
  await desktopWhy.scrollIntoViewIfNeeded();
  await desktopPage.waitForTimeout(400);
  await desktopWhy.screenshot({ path: path.join(ARTIFACTS_DIR, 'desktop_why_verified.png') });
  console.log('Saved desktop_why_verified.png');

  const desktopFooter = desktopPage.locator('footer').first();
  await desktopFooter.scrollIntoViewIfNeeded();
  await desktopPage.waitForTimeout(400);
  await desktopFooter.screenshot({ path: path.join(ARTIFACTS_DIR, 'desktop_footer_verified.png') });
  console.log('Saved desktop_footer_verified.png');

  await browser.close();
  console.log('All verification screenshots saved successfully!');
})();

