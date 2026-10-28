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

    console.log('Navigating to http://localhost:3000 ...');
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1500);

    // 1. Capture Testimonial Cards
    const testimonialArticle = await page.$('.ts-card');
    if (testimonialArticle) {
      await testimonialArticle.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'new_testimonial_card_view.png') });
      console.log('Saved screenshot: new_testimonial_card_view.png');
      
      // Also capture the single article card itself
      await testimonialArticle.screenshot({ path: path.join(ARTIFACTS_DIR, 'single_testimonial_card.png') });
      console.log('Saved screenshot: single_testimonial_card.png');
    }

    // 2. Capture Footer (Legal links & Copyright bar with centered logo)
    const footer = await page.$('footer');
    if (footer) {
      await footer.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await footer.screenshot({ path: path.join(ARTIFACTS_DIR, 'new_footer_with_logo_and_12_links.png') });
      console.log('Saved screenshot: new_footer_with_logo_and_12_links.png');
    }

    console.log('All verification screenshots saved successfully!');
  } catch (err) {
    console.error('Error:', err);
  } finally {
    if (browser) await browser.close();
  }
})();
