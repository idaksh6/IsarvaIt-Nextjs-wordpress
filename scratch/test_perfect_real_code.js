const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 600 } });

  const imgBase64 = fs.readFileSync('C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/.user_uploaded/media_1793167693886.png').toString('base64');

  // Generate true transparent doodle and full-height laptop asset
  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0; background:transparent;">
      <canvas id="cDoodle" width="160" height="110"></canvas>
      <canvas id="cLaptop" width="360" height="334"></canvas>

      <script>
        const img = new Image();
        img.src = 'data:image/png;base64,${imgBase64}';
        img.onload = () => {
          // 1. Transparent Doodle
          const cD = document.getElementById('cDoodle');
          const ctxD = cD.getContext('2d');
          ctxD.drawImage(img, 45, 175, 160, 110, 0, 0, 160, 110);
          
          const imgDataD = ctxD.getImageData(0, 0, 160, 110);
          const dataD = imgDataD.data;
          for (let i = 0; i < dataD.length; i += 4) {
            const r = dataD[i];
            const g = dataD[i + 1];
            const b = dataD[i + 2];
            
            // Isolate green handwriting strokes
            const isGreenStroke = (g > r + 25 && g > b + 15 && g > 75) || (g > 95 && r < 140 && b < 140);
            if (!isGreenStroke) {
              dataD[i + 3] = 0; // 100% transparent
            } else {
              // Vibrant clean green matching brand #00A86B
              dataD[i] = 0;
              dataD[i + 1] = 168;
              dataD[i + 2] = 107;
              dataD[i + 3] = 255;
            }
          }
          ctxD.putImageData(imgDataD, 0, 0);
          window.doodleDataUrl = cD.toDataURL('image/png');

          // 2. Laptop (x: 664 to 1024 = 360px wide, y: 0 to 334 = full card height!)
          const cL = document.getElementById('cLaptop');
          const ctxL = cL.getContext('2d');
          ctxL.drawImage(img, 664, 0, 360, 334, 0, 0, 360, 334);
          window.laptopDataUrl = cL.toDataURL('image/png');

          window.allDone = true;
        };
      </script>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.waitForFunction(() => window.allDone);

  const doodleDataUrl = await page.evaluate(() => window.doodleDataUrl);
  const laptopDataUrl = await page.evaluate(() => window.laptopDataUrl);

  const doodleBuf = Buffer.from(doodleDataUrl.replace(/^data:image\/png;base64,/, ''), 'base64');
  const laptopBuf = Buffer.from(laptopDataUrl.replace(/^data:image\/png;base64,/, ''), 'base64');

  const outDir = 'f:/IsarvaIt-Nextjs-wordpress/public/images';
  fs.writeFileSync(path.join(outDir, 'cta-doodle-transparent.png'), doodleBuf);
  fs.writeFileSync(path.join(outDir, 'cta-laptop-clean.png'), laptopBuf);

  console.log('Saved true transparent doodle and full-height clean laptop!');
  await browser.close();
})();
