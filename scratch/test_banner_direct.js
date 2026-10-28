const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 750 } });

  const bannerBase64 = fs.readFileSync('f:/IsarvaIt-Nextjs-wordpress/public/images/cta-banner.png').toString('base64');

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        
        <!-- Desktop / Tablet (md and above): Pristine high-res banner with interactive clickable hotspot and hover effect -->
        <div class="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_12px_45px_rgba(0,168,107,0.08)] border border-[#DCFCE7] group transition-all duration-300 hover:shadow-[0_16px_55px_rgba(0,168,107,0.14)]">
          <img 
            src="data:image/png;base64,${bannerBase64}" 
            alt="Ready To Get Started? - ISARVA Infotech" 
            class="w-full h-auto block select-none"
          />
          
          <!-- Invisible interactive button overlay matching the exact position of Get In Touch button -->
          <a 
            href="/contact" 
            class="absolute left-[41.8%] right-[42%] bottom-[7.5%] top-[77.5%] rounded-xl transition-all duration-200 hover:ring-4 hover:ring-orange-400/40 hover:scale-[1.02] flex items-center justify-center cursor-pointer"
            aria-label="Get In Touch with ISARVA"
            title="Get In Touch"
          >
            <span class="sr-only">Get In Touch</span>
          </a>
        </div>

      </div>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.screenshot({ path: 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/cta_banner_direct_preview.png' });
  console.log('Saved cta_banner_direct_preview.png');

  await browser.close();
})();
