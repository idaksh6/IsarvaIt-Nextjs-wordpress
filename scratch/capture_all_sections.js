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
    await page.waitForTimeout(2000);

    const sections = [
      { id: '#why-choose-us', name: 'section_4_why_choose_us.png' },
      { id: '#products', name: 'section_5_products.png' },
      { id: '#services', name: 'section_6_services.png' },
      { id: '#blog', name: 'section_8_blog.png' },
      { id: '#cta', name: 'section_9_cta.png' },
      { id: 'footer', name: 'section_10_footer.png' }
    ];

    for (const s of sections) {
      const el = await page.$(s.id);
      if (el) {
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(800);
        const outPath = path.join(ARTIFACTS_DIR, s.name);
        await el.screenshot({ path: outPath });
        console.log(`Saved screenshot: ${s.name}`);
      } else {
        console.log(`Element not found for: ${s.id}`);
      }
    }

    console.log('All screenshots completed successfully!');
  } catch (err) {
    console.error('Error during screenshot capture:', err);
  } finally {
    if (browser) await browser.close();
  }
})();
