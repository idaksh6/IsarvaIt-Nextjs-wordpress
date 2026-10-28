const { chromium } = require('playwright');
const path = require('path');

const ARTIFACT_DIR = 'C:/Users/ISARVA/.gemini/antigravity/brain/6795714c-561e-4f44-bf47-a2ec6defdf2c';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  
  // Test both approaches across multiple viewports
  const viewports = [
    { name: '1920x1080', width: 1920, height: 1080 },
    { name: '1440x900', width: 1440, height: 900 },
    { name: '1024x768', width: 1024, height: 768 },
    { name: '768x1024', width: 768, height: 1024 },
    { name: '390x844', width: 390, height: 844 }
  ];

  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(1000);

    // Apply the seamless gradient
    await page.evaluate((isMobile) => {
      // 1. Background image: clean photo, without the harsh linear-gradient
      const bgDesktop = document.querySelector('section[aria-labelledby="hero-heading"] > div:first-child');
      if (bgDesktop) {
        bgDesktop.style.backgroundImage = 'url("/images/hero-tech-office-skyline.png")';
        bgDesktop.style.backgroundPosition = 'right center';
        bgDesktop.style.backgroundSize = 'cover';
      }

      // 2. Remove any previous test overlays
      document.querySelectorAll('.test-glow').forEach(el => el.remove());

      // 3. Inject our seamless text-focused overlay
      // Anchored to the text container so it naturally tracks with the text at any screen width!
      const textContainer = document.querySelector('section[aria-labelledby="hero-heading"] .max-w-\\[580px\\], section[aria-labelledby="hero-heading"] .lg\\:max-w-\\[620px\\]');
      if (textContainer) {
        textContainer.style.position = 'relative';
        const glow = document.createElement('div');
        glow.className = 'test-glow';
        
        // Sized generously around the text: extends 140px outside in all directions
        // Gradient reaches 0% opacity (transparent) at 85% of its radius, so edges are 100% transparent!
        // Plus blur(16px) for ultimate organic mist feathering
        glow.style.cssText = `
          position: absolute;
          top: -100px;
          bottom: -80px;
          left: -140px;
          right: -120px;
          pointer-events: none;
          z-index: -1;
          background: radial-gradient(
            ellipse 75% 70% at 48% 46%,
            rgba(248, 252, 250, 0.98) 0%,
            rgba(248, 252, 250, 0.94) 42%,
            rgba(248, 252, 250, 0.70) 65%,
            rgba(248, 252, 250, 0.25) 82%,
            transparent 95%
          );
          filter: blur(20px);
        `;
        textContainer.prepend(glow);
      }
    }, vp.width < 640);

    await page.waitForTimeout(500);
    const hero = page.locator('section[aria-labelledby="hero-heading"]').first();
    await hero.screenshot({ path: path.join(ARTIFACT_DIR, `seamless_${vp.name}.png`) });
    console.log(`Saved seamless_${vp.name}.png`);
    await page.close();
  }

  await browser.close();
})();
