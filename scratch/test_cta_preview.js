const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-white py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Desktop: Exact Reference Banner with interactive hover button -->
        <div class="relative rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgba(0,168,107,0.08)] border border-[#DCFCE7] group">
          <img 
            src="file:///f:/IsarvaIt-Nextjs-wordpress/public/images/cta-banner.png" 
            alt="Ready To Get Started? - ISARVA Infotech" 
            class="w-full h-auto block select-none"
          />
          <!-- Interactive Clickable Hotspot over the Get In Touch button -->
          <a 
            href="/contact" 
            class="absolute left-[42.5%] right-[42.5%] bottom-[8%] top-[77%] rounded-xl transition-all duration-200 hover:ring-4 hover:ring-orange-400/30 flex items-center justify-center cursor-pointer"
            aria-label="Get In Touch"
          >
            <span class="sr-only">Get In Touch</span>
          </a>
        </div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.screenshot({ path: 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/cta_banner_desktop_preview.png' });
  console.log('Saved cta_banner_desktop_preview.png');

  // Also test mobile view
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: 'C:/Users/ISARVA/.gemini/antigravity-ide/brain/93023e01-0e1a-4e42-be77-f6a10d14f0c2/cta_banner_mobile_preview.png' });
  console.log('Saved cta_banner_mobile_preview.png');

  await browser.close();
})();
