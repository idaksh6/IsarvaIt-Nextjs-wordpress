const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 600 } });

  const imgBase64 = fs.readFileSync('C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/.user_uploaded/media_1793167693886.png').toString('base64');

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0; background:#f0f0f0; padding:20px;">
      <!-- Canvas 1: Laptop (x: 730 to 1024, width: 294, height: 334) -->
      <canvas id="cLaptop" width="294" height="334"></canvas>

      <script>
        const img = new Image();
        img.src = 'data:image/png;base64,${imgBase64}';
        img.onload = () => {
          // 1. Laptop
          const cL = document.getElementById('cLaptop');
          const ctxL = cL.getContext('2d');
          ctxL.drawImage(img, 730, 0, 294, 334, 0, 0, 294, 334);
          
          // Left edge soft fade so it merges completely with card background
          ctxL.globalCompositeOperation = 'destination-out';
          const gradL = ctxL.createLinearGradient(0, 0, 30, 0);
          gradL.addColorStop(0, 'rgba(0,0,0,1)');
          gradL.addColorStop(1, 'rgba(0,0,0,0)');
          ctxL.fillStyle = gradL;
          ctxL.fillRect(0, 0, 30, 334);

          window.extractDone = true;
        };
      </script>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.waitForFunction(() => window.extractDone);

  const outDir = 'f:/IsarvaIt-Nextjs-wordpress/public/images';
  const cLaptop = page.locator('#cLaptop');
  const bufLaptop = await cLaptop.screenshot({ omitBackground: true });
  fs.writeFileSync(path.join(outDir, 'cta-laptop-right.png'), bufLaptop);

  console.log('Saved updated cta-laptop-right.png!');
  await browser.close();
})();
