const { chromium } = require('playwright');
const path = require('path');

const ARTIFACT_DIR = 'C:/Users/ISARVA/.gemini/antigravity/brain/6795714c-561e-4f44-bf47-a2ec6defdf2c';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(1000);

  // Variation 1: Free-floating elliptical aura (solid white under text, 100px feathered fade-out)
  await page.evaluate(() => {
    const bgDiv = document.querySelector('section[aria-labelledby="hero-heading"] > div:first-child');
    if (bgDiv) {
      bgDiv.style.backgroundImage = 'url("/images/hero-tech-office-skyline.png")';
    }
    const textContainer = document.querySelector('section[aria-labelledby="hero-heading"] .max-w-\\[580px\\], section[aria-labelledby="hero-heading"] .lg\\:max-w-\\[620px\\]');
    if (textContainer) {
      document.querySelectorAll('.test-glow').forEach(el => el.remove());
      const glow = document.createElement('div');
      glow.className = 'test-glow';
      glow.style.cssText = `
        position: absolute;
        top: -60px;
        left: -80px;
        right: -80px;
        bottom: -50px;
        pointer-events: none;
        z-index: -1;
        background: radial-gradient(ellipse 75% 70% at 48% 48%, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 45%, rgba(255, 255, 255, 0.7) 70%, rgba(255, 255, 255, 0.2) 88%, transparent 100%);
      `;
      textContainer.style.position = 'relative';
      textContainer.prepend(glow);
    }
  });
  await page.waitForTimeout(500);
  let hero = page.locator('section[aria-labelledby="hero-heading"]').first();
  await hero.screenshot({ path: path.join(ARTIFACT_DIR, 'opt1_free_elliptical.png') });
  console.log('Saved opt1_free_elliptical.png');

  // Variation 2: Free-floating aura with subtle blur for ultra-smooth transition into image
  await page.evaluate(() => {
    const textContainer = document.querySelector('section[aria-labelledby="hero-heading"] .max-w-\\[580px\\], section[aria-labelledby="hero-heading"] .lg\\:max-w-\\[620px\\]');
    if (textContainer) {
      document.querySelectorAll('.test-glow').forEach(el => el.remove());
      const glow = document.createElement('div');
      glow.className = 'test-glow';
      glow.style.cssText = `
        position: absolute;
        top: -70px;
        left: -100px;
        right: -90px;
        bottom: -60px;
        pointer-events: none;
        z-index: -1;
        background: radial-gradient(ellipse 80% 75% at 46% 48%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.96) 50%, rgba(255, 255, 255, 0.75) 72%, rgba(255, 255, 255, 0.25) 90%, transparent 100%);
        filter: blur(16px);
      `;
      textContainer.style.position = 'relative';
      textContainer.prepend(glow);
    }
  });
  await page.waitForTimeout(500);
  await hero.screenshot({ path: path.join(ARTIFACT_DIR, 'opt2_blurred_smooth.png') });
  console.log('Saved opt2_blurred_smooth.png');

  // Variation 3: Soft ambient mist anchored from left edge, fading organically across text and merging out before monitor
  await page.evaluate(() => {
    const textContainer = document.querySelector('section[aria-labelledby="hero-heading"] .max-w-\\[580px\\], section[aria-labelledby="hero-heading"] .lg\\:max-w-\\[620px\\]');
    if (textContainer) {
      document.querySelectorAll('.test-glow').forEach(el => el.remove());
      const glow = document.createElement('div');
      glow.className = 'test-glow';
      // Anchored softly to text zone, but top, right, bottom fade smoothly into the image
      glow.style.cssText = `
        position: absolute;
        top: -80px;
        left: -150px;
        right: -80px;
        bottom: -70px;
        pointer-events: none;
        z-index: -1;
        background: radial-gradient(ellipse 85% 75% at 35% 48%, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.94) 52%, rgba(255, 255, 255, 0.6) 78%, rgba(255, 255, 255, 0.15) 92%, transparent 100%);
      `;
      textContainer.style.position = 'relative';
      textContainer.prepend(glow);
    }
  });
  await page.waitForTimeout(500);
  await hero.screenshot({ path: path.join(ARTIFACT_DIR, 'opt3_anchored_mist.png') });
  console.log('Saved opt3_anchored_mist.png');

  // Variation 4: Dual-zone organic light (high opacity directly under heading/description, feathering out gently)
  await page.evaluate(() => {
    const textContainer = document.querySelector('section[aria-labelledby="hero-heading"] .max-w-\\[580px\\], section[aria-labelledby="hero-heading"] .lg\\:max-w-\\[620px\\]');
    if (textContainer) {
      document.querySelectorAll('.test-glow').forEach(el => el.remove());
      const glow = document.createElement('div');
      glow.className = 'test-glow';
      glow.style.cssText = `
        position: absolute;
        top: -60px;
        left: -90px;
        right: -70px;
        bottom: -50px;
        pointer-events: none;
        z-index: -1;
        background: radial-gradient(ellipse 80% 75% at 42% 45%, #F8FCFA 0%, rgba(248, 252, 250, 0.97) 48%, rgba(248, 252, 250, 0.7) 74%, rgba(248, 252, 250, 0.2) 90%, transparent 100%);
      `;
      textContainer.style.position = 'relative';
      textContainer.prepend(glow);
    }
  });
  await page.waitForTimeout(500);
  await hero.screenshot({ path: path.join(ARTIFACT_DIR, 'opt4_f8fcfa_organic.png') });
  console.log('Saved opt4_f8fcfa_organic.png');

  // Variation 5: Organic with backdrop-filter blur (soft focus image fade)
  await page.evaluate(() => {
    const textContainer = document.querySelector('section[aria-labelledby="hero-heading"] .max-w-\\[580px\\], section[aria-labelledby="hero-heading"] .lg\\:max-w-\\[620px\\]');
    if (textContainer) {
      document.querySelectorAll('.test-glow').forEach(el => el.remove());
      const glow = document.createElement('div');
      glow.className = 'test-glow';
      glow.style.cssText = `
        position: absolute;
        top: -60px;
        left: -90px;
        right: -70px;
        bottom: -50px;
        pointer-events: none;
        z-index: -1;
        background: radial-gradient(ellipse 80% 75% at 44% 46%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.90) 50%, rgba(255, 255, 255, 0.55) 75%, transparent 100%);
        backdrop-filter: blur(12px);
        -webkit-mask-image: radial-gradient(ellipse 80% 75% at 44% 46%, black 50%, rgba(0,0,0,0.5) 75%, transparent 100%);
        mask-image: radial-gradient(ellipse 80% 75% at 44% 46%, black 50%, rgba(0,0,0,0.5) 75%, transparent 100%);
      `;
      textContainer.style.position = 'relative';
      textContainer.prepend(glow);
    }
  });
  await page.waitForTimeout(500);
  await hero.screenshot({ path: path.join(ARTIFACT_DIR, 'opt5_blur_masked.png') });
  console.log('Saved opt5_blur_masked.png');

  await browser.close();
})();
