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
    const page = await browser.newPage({
      viewport: { width: 1440, height: 900 }
    });

    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1500);

    const aboutH2 = await page.$('#about-us-heading');
    if (aboutH2) {
      await aboutH2.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'about_h2_lineheight.png') });
      console.log('Saved screenshot: about_h2_lineheight.png');
    }

    const whyChooseH2 = await page.$('#why-choose-us-heading');
    if (whyChooseH2) {
      await whyChooseH2.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'why_choose_h2_lineheight.png') });
      console.log('Saved screenshot: why_choose_h2_lineheight.png');
    }

    console.log('Line-height screenshots done!');
  } catch (err) {
    console.error('Error:', err);
  } finally {
    if (browser) await browser.close();
  }
})();
