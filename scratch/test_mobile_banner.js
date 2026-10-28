const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

  const bannerBase64 = fs.readFileSync('f:/IsarvaIt-Nextjs-wordpress/public/images/cta-banner.png').toString('base64');

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-white py-8 px-4">
      <div class="max-w-md mx-auto">
        <h4 class="text-xs font-bold text-gray-400 mb-2">Mobile rendering of banner:</h4>
        <div class="relative w-full rounded-2xl overflow-hidden shadow-md border border-[#DCFCE7]">
          <img 
            src="data:image/png;base64,${bannerBase64}" 
            alt="Ready To Get Started? - ISARVA Infotech" 
            class="w-full h-auto block select-none"
          />
          <a 
            href="/contact" 
            class="absolute left-[41.8%] right-[42%] bottom-[7.5%] top-[77.5%] rounded-lg"
          ></a>
        </div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.screenshot({ path: 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/mobile_banner_test.png' });
  console.log('Saved mobile_banner_test.png');
  await browser.close();
})();
