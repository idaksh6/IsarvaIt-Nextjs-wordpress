const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1000, height: 600 } });

  const imgBase64 = fs.readFileSync('C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/.user_uploaded/media_1793167693886.png').toString('base64');

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0; background:#fff;">
      <canvas id="cLaptop" width="310" height="334"></canvas>

      <script>
        const img = new Image();
        img.src = 'data:image/png;base64,${imgBase64}';
        img.onload = () => {
          // Process Laptop: Crop from x: 735 to 1024 (width 289), height 334
          const cL = document.getElementById('cLaptop');
          const ctxL = cL.getContext('2d');
          ctxL.drawImage(img, 735, 0, 289, 334, 21, 0, 289, 334);

          // Soft feather left 60px
          ctxL.globalCompositeOperation = 'destination-out';
          const grad = ctxL.createLinearGradient(0, 0, 60, 0);
          grad.addColorStop(0, 'rgba(0,0,0,1)'); // fully erase leftmost edge
          grad.addColorStop(1, 'rgba(0,0,0,0)'); // keep rest
          ctxL.fillStyle = grad;
          ctxL.fillRect(0, 0, 60, 334);

          window.processDone = true;
        };
      </script>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.waitForFunction(() => window.processDone);

  const outDir = 'f:/IsarvaIt-Nextjs-wordpress/public/images';
  const cL = page.locator('#cLaptop');
  const bufL = await cL.screenshot({ omitBackground: true });
  fs.writeFileSync(path.join(outDir, 'cta-laptop-feathered.png'), bufL);

  console.log('Saved clean cta-laptop-feathered.png!');
  await browser.close();
})();
