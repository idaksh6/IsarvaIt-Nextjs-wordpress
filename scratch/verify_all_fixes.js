const { chromium } = require('playwright');
const path = require('path');

const ARTIFACT_DIR = 'C:/Users/ISARVA/.gemini/antigravity/brain/6795714c-561e-4f44-bf47-a2ec6defdf2c';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  
  // 1. Mobile verification (iPhone size 390x844)
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await mobilePage.waitForTimeout(2000);

  // Capture CTA section specifically
  const cta = mobilePage.locator('#cta').first();
  await cta.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(1000);
  await cta.screenshot({ path: path.join(ARTIFACT_DIR, 'mobile_cta_fixed.png') });
  console.log('Saved mobile_cta_fixed.png');

  // Capture Hero section on mobile
  const mobileHero = mobilePage.locator('section[aria-labelledby="hero-heading"]').first();
  await mobileHero.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(500);
  await mobileHero.screenshot({ path: path.join(ARTIFACT_DIR, 'mobile_hero_compact.png') });
  console.log('Saved mobile_hero_compact.png');

  // Capture About section on mobile
  const mobileAbout = mobilePage.locator('#about-us').first();
  await mobileAbout.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(500);
  await mobileAbout.screenshot({ path: path.join(ARTIFACT_DIR, 'mobile_about_compact.png') });
  console.log('Saved mobile_about_compact.png');

  await mobilePage.close();

  // 2. Desktop verification (1440x900)
  const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktopPage.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await desktopPage.waitForTimeout(2000);

  const desktopHero = desktopPage.locator('section[aria-labelledby="hero-heading"]').first();
  await desktopHero.screenshot({ path: path.join(ARTIFACT_DIR, 'desktop_hero_verified.png') });
  console.log('Saved desktop_hero_verified.png');

  const desktopCta = desktopPage.locator('#cta').first();
  await desktopCta.scrollIntoViewIfNeeded();
  await desktopPage.waitForTimeout(1000);
  await desktopCta.screenshot({ path: path.join(ARTIFACT_DIR, 'desktop_cta_verified.png') });
  console.log('Saved desktop_cta_verified.png');

  await desktopPage.close();
  await browser.close();
  console.log('All verification snapshots complete!');
})();

