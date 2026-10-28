const { chromium } = require('playwright');
const path = require('path');

const ARTIFACTS_DIR = 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { background: #f0f0f0; padding: 40px; display: flex; gap: 30px; font-family: sans-serif; }
        .box { background: white; padding: 20px; border-radius: 12px; text-align: center; }
        svg { width: 48px; height: 48px; color: #86EFAC; }
      </style>
    </head>
    <body>
      <div class="box">
        <h4>Previous (Opening)</h4>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div class="box">
        <h4>Flipped scaleX(-1)</h4>
        <svg viewBox="0 0 24 24" fill="currentColor" style="transform: scaleX(-1)">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div class="box">
        <h4>Rotated 180deg (Closing)</h4>
        <svg viewBox="0 0 24 24" fill="currentColor" style="transform: rotate(180deg)">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div class="box">
        <h4>Flipped Both scale(-1, -1)</h4>
        <svg viewBox="0 0 24 24" fill="currentColor" style="transform: scale(-1, 1)">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'quote_comparison.png') });
  console.log('Saved quote_comparison.png');
  await browser.close();
})();
