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

    // 1. Verify Hero to About Us transition
    // Scroll so that the boundary between Hero and About Us is centered
    const aboutEl = await page.$('#about-us');
    if (aboutEl) {
      await page.evaluate(() => {
        const about = document.getElementById('about-us');
        if (about) {
          window.scrollTo(0, about.offsetTop - 300);
        }
      });
      await page.waitForTimeout(1000);
      await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'hero_to_about_transition.png') });
      console.log('Saved screenshot: hero_to_about_transition.png');
    }

    // Also take a full About Us screenshot
    if (aboutEl) {
      await aboutEl.scrollIntoViewIfNeeded();
      await page.waitForTimeout(800);
      await aboutEl.screenshot({ path: path.join(ARTIFACTS_DIR, 'about_section_refined.png') });
      console.log('Saved screenshot: about_section_refined.png');
    }

    // 2. Verify Hover on Tech Stack marquee
    const techEl = await page.$('#tech-stack');
    if (techEl) {
      await techEl.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);

      // Find the Fastify or any pill in the marquee
      const fastifyPill = await page.locator('.marquee-track >> text=Fastify').first();
      if (await fastifyPill.count() > 0) {
        // Hover over the Fastify pill with force: true
        await fastifyPill.hover({ force: true });
        await page.waitForTimeout(600);
        await techEl.screenshot({ path: path.join(ARTIFACTS_DIR, 'tech_stack_fastify_hover.png') });
        console.log('Saved screenshot: tech_stack_fastify_hover.png');
      } else {
        console.log('Fastify pill not found');
      }
    }

    // 3. Test Mobile viewport
    await page.setViewportSize({ width: 375, height: 812 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1000);
    
    // Mobile Hero to About boundary
    await page.evaluate(() => {
      const about = document.getElementById('about-us');
      if (about) {
        window.scrollTo(0, about.offsetTop - 200);
      }
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'mobile_hero_about_transition.png') });
    console.log('Saved screenshot: mobile_hero_about_transition.png');

    console.log('All verification tasks finished!');
  } catch (err) {
    console.error('Error during verification:', err);
  } finally {
    if (browser) await browser.close();
  }
})();
