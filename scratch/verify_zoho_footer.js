const { chromium } = require('playwright');
const path = require('path');

const ARTIFACTS_DIR = 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2';

(async () => {
  let browser;
  try {
    browser = await chromium.launch({
      channel: 'msedge',
      headless: true
    });
    
    // 1. Desktop Test (1440px)
    const page = await browser.newPage({
      viewport: { width: 1440, height: 900 }
    });

    console.log('Navigating to http://localhost:3000 ...');
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1500);

    const footer = await page.$('footer');
    if (footer) {
      await footer.scrollIntoViewIfNeeded();
      await page.waitForTimeout(800);
      await footer.screenshot({ path: path.join(ARTIFACTS_DIR, 'zoho_footer_desktop.png') });
      console.log('Saved screenshot: zoho_footer_desktop.png');
    }

    // 2. Tablet Test (768px)
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(800);
    if (footer) {
      await footer.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await footer.screenshot({ path: path.join(ARTIFACTS_DIR, 'zoho_footer_tablet.png') });
      console.log('Saved screenshot: zoho_footer_tablet.png');
    }

    // 3. Mobile Test (375px)
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(800);
    if (footer) {
      await footer.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await footer.screenshot({ path: path.join(ARTIFACTS_DIR, 'zoho_footer_mobile.png') });
      console.log('Saved screenshot: zoho_footer_mobile.png');
    }

    console.log('All footer verification screenshots completed!');
  } catch (err) {
    console.error('Error during footer verification:', err);
  } finally {
    if (browser) await browser.close();
  }
})();
