const { chromium } = require('playwright');
const path = require('path');

const ARTIFACT_DIR = 'C:/Users/ISARVA/.gemini/antigravity/brain/6795714c-561e-4f44-bf47-a2ec6defdf2c';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(1000);

  // Design 1: Soft spotlight aura behind the text block only (fading 360 degrees)
  // Perfectly feathered so gradient reaches 0 opacity at 90%, with generous bounds and blur
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
        top: -80px;
        left: -120px;
        width: calc(100% + 240px);
        height: calc(100% + 160px);
        pointer-events: none;
        z-index: -1;
        background: radial-gradient(ellipse 70% 65% at 48% 46%, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.92) 40%, rgba(255, 255, 255, 0.6) 65%, rgba(255, 255, 255, 0.15) 85%, transparent 100%);
        filter: blur(20px);
      `;
      textContainer.style.position = 'relative';
      textContainer.prepend(glow);
    }
  });
  await page.waitForTimeout(500);
  let hero = page.locator('section[aria-labelledby="hero-heading"]').first();
  await hero.screenshot({ path: path.join(ARTIFACT_DIR, 'design1_spotlight_aura_1440.png') });

  // Design 2: Left-originating organic ambient wash that covers behind text, but top/bottom/right dissolve organically into photo
  await page.evaluate(() => {
    const textContainer = document.querySelector('section[aria-labelledby="hero-heading"] .max-w-\\[580px\\], section[aria-labelledby="hero-heading"] .lg\\:max-w-\\[620px\\]');
    if (textContainer) {
      document.querySelectorAll('.test-glow').forEach(el => el.remove());
      const glow = document.createElement('div');
      glow.className = 'test-glow';
      // Placed in hero section root so it extends from left edge to past text
      const heroSec = document.querySelector('section[aria-labelledby="hero-heading"]');
      glow.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 60%;
        height: 85%;
        pointer-events: none;
        z-index: 5;
        background: radial-gradient(ellipse 90% 75% at 20% 40%, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.90) 35%, rgba(255, 255, 255, 0.5) 65%, rgba(255, 255, 255, 0.12) 85%, transparent 100%);
        filter: blur(24px);
      `;
      heroSec.appendChild(glow);
    }
  });
  await page.waitForTimeout(500);
  await hero.screenshot({ path: path.join(ARTIFACT_DIR, 'design2_left_ambient_1440.png') });

  // Design 3: Direct radial halo specifically tuned to the text content
  await page.evaluate(() => {
    document.querySelectorAll('.test-glow').forEach(el => el.remove());
    const textContainer = document.querySelector('section[aria-labelledby="hero-heading"] .max-w-\\[580px\\], section[aria-labelledby="hero-heading"] .lg\\:max-w-\\[620px\\]');
    if (textContainer) {
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
        background: radial-gradient(ellipse 65% 60% at 45% 45%, rgba(248, 252, 250, 0.98) 0%, rgba(248, 252, 250, 0.92) 42%, rgba(248, 252, 250, 0.55) 70%, rgba(248, 252, 250, 0.1) 90%, transparent 100%);
        filter: blur(14px);
      `;
      textContainer.style.position = 'relative';
      textContainer.prepend(glow);
    }
  });
  await page.waitForTimeout(500);
  await hero.screenshot({ path: path.join(ARTIFACT_DIR, 'design3_tuned_halo_1440.png') });

  // Also test mobile 390px for Design 3
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(500);
  await hero.screenshot({ path: path.join(ARTIFACT_DIR, 'design3_mobile_390.png') });

  await browser.close();
  console.log('Done!');
})();
