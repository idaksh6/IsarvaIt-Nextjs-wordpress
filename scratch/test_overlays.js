const { chromium } = require('playwright');
const path = require('path');

const ARTIFACT_DIR = 'C:/Users/ISARVA/.gemini/antigravity/brain/6795714c-561e-4f44-bf47-a2ec6defdf2c';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(1000);

  // Var A: Generous elliptical radial gradient directly behind text block (solid white behind text, fading smoothly into image)
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
        top: -40px;
        left: -60px;
        width: calc(100% + 120px);
        height: calc(100% + 80px);
        pointer-events: none;
        z-index: -1;
        background: radial-gradient(ellipse 60% 55% at 48% 46%, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.88) 45%, rgba(255, 255, 255, 0.5) 72%, rgba(255, 255, 255, 0) 100%);
      `;
      textContainer.style.position = 'relative';
      textContainer.prepend(glow);
    }
  });
  await page.waitForTimeout(600);
  let hero = page.locator('section[aria-labelledby="hero-heading"]').first();
  await hero.screenshot({ path: path.join(ARTIFACT_DIR, 'var_A_radial_pure.png') });
  console.log('Saved var_A_radial_pure.png');

  // Var B: Radial gradient + backdrop-filter blur masked organically (frosted mist)
  await page.evaluate(() => {
    const textContainer = document.querySelector('section[aria-labelledby="hero-heading"] .max-w-\\[580px\\], section[aria-labelledby="hero-heading"] .lg\\:max-w-\\[620px\\]');
    if (textContainer) {
      document.querySelectorAll('.test-glow').forEach(el => el.remove());
      const glow = document.createElement('div');
      glow.className = 'test-glow';
      glow.style.cssText = `
        position: absolute;
        top: -50px;
        left: -80px;
        width: calc(100% + 160px);
        height: calc(100% + 100px);
        pointer-events: none;
        z-index: -1;
        background: radial-gradient(ellipse 62% 58% at 48% 46%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 45%, rgba(255, 255, 255, 0.45) 75%, rgba(255, 255, 255, 0) 100%);
        backdrop-filter: blur(10px);
        -webkit-mask-image: radial-gradient(ellipse 65% 60% at 48% 46%, black 40%, rgba(0,0,0,0.6) 65%, transparent 100%);
        mask-image: radial-gradient(ellipse 65% 60% at 48% 46%, black 40%, rgba(0,0,0,0.6) 65%, transparent 100%);
      `;
      textContainer.style.position = 'relative';
      textContainer.prepend(glow);
    }
  });
  await page.waitForTimeout(600);
  await hero.screenshot({ path: path.join(ARTIFACT_DIR, 'var_B_frosted_mist.png') });
  console.log('Saved var_B_frosted_mist.png');

  // Var C: Soft vignette aura behind text + soft transparent gradient across left (so whole left looks unified yet photographic)
  await page.evaluate(() => {
    const bgDiv = document.querySelector('section[aria-labelledby="hero-heading"] > div:first-child');
    if (bgDiv) {
      bgDiv.style.backgroundImage = `
        linear-gradient(
          90deg,
          rgba(248, 252, 250, 0.5) 0%,
          rgba(248, 252, 250, 0.3) 35%,
          rgba(248, 252, 250, 0.1) 60%,
          transparent 80%
        ),
        url("/images/hero-tech-office-skyline.png")
      `;
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
        width: calc(100% + 160px);
        height: calc(100% + 120px);
        pointer-events: none;
        z-index: -1;
        background: radial-gradient(ellipse 60% 55% at 45% 45%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.82) 48%, rgba(255, 255, 255, 0.4) 75%, transparent 100%);
        backdrop-filter: blur(8px);
        -webkit-mask-image: radial-gradient(ellipse 62% 58% at 45% 45%, black 45%, transparent 100%);
        mask-image: radial-gradient(ellipse 62% 58% at 45% 45%, black 45%, transparent 100%);
      `;
      textContainer.style.position = 'relative';
      textContainer.prepend(glow);
    }
  });
  await page.waitForTimeout(600);
  await hero.screenshot({ path: path.join(ARTIFACT_DIR, 'var_C_unified_soft.png') });
  console.log('Saved var_C_unified_soft.png');

  // Var D: Ultra-smooth feathered radial light pool behind text (100% seamless fade into image)
  await page.evaluate(() => {
    const bgDiv = document.querySelector('section[aria-labelledby="hero-heading"] > div:first-child');
    if (bgDiv) {
      // Just clean background image with no linear gradient at all
      bgDiv.style.backgroundImage = 'url("/images/hero-tech-office-skyline.png")';
    }
    const textContainer = document.querySelector('section[aria-labelledby="hero-heading"] .max-w-\\[580px\\], section[aria-labelledby="hero-heading"] .lg\\:max-w-\\[620px\\]');
    if (textContainer) {
      document.querySelectorAll('.test-glow').forEach(el => el.remove());
      const glow = document.createElement('div');
      glow.className = 'test-glow';
      glow.style.cssText = `
        position: absolute;
        top: -70px;
        left: -100px;
        width: calc(100% + 200px);
        height: calc(100% + 140px);
        pointer-events: none;
        z-index: -1;
        background: radial-gradient(ellipse 60% 55% at 44% 48%, rgba(248, 252, 250, 0.97) 0%, rgba(248, 252, 250, 0.92) 38%, rgba(248, 252, 250, 0.65) 65%, rgba(248, 252, 250, 0.2) 85%, transparent 100%);
      `;
      textContainer.style.position = 'relative';
      textContainer.prepend(glow);
    }
  });
  await page.waitForTimeout(600);
  await hero.screenshot({ path: path.join(ARTIFACT_DIR, 'var_D_feathered_pool.png') });
  console.log('Saved var_D_feathered_pool.png');

  await browser.close();
})();
