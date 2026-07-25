import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.isarvait.com";

// ─── Nav Data (keep in sync with Header.jsx) ─────────────────────────────────

const productsData = [
  { label: "HRMS Software", href: "/product/hrms-software", icon: "👥" },
  { label: "CRM Software", href: "/product/crm-software", icon: "👔" },
  { label: "WhatsApp CRM Software", href: "/product/whatsapp-crm-software", icon: "💬" },
  { label: "Support Software", href: "/product/support-software", icon: "🎧" },
  { label: "BillSoft Software", href: "/product/bill-soft", icon: "🧾" },
  { label: "Marine Service Software", href: "/product/marine-service-software", icon: "🏬" },
  { label: "Dispatcher Panel", href: "/product/dispatcher-panel", icon: "⛽" },
  { label: "WooCommerce Development", href: "/product/woocommerce-development", icon: "🛒" },
  { label: "Mobile App Development", href: "/product/mobile-app-development", icon: "📱" },
  { label: "Retail Billing Software", href: "/product/retail-billing-software", icon: "🚚" },
  { label: "Dealer Management and Dealer Article Software", href: "/product/dealer-management-and-dealer-article-software", icon: "🤝" },
  { label: "Lawyer Legal Association Software", href: "/product/lawyer-legal-association-software", icon: "⚖️" },
  { label: "POSH Compliance Software", href: "/product/posh-compliance-software", icon: "🛡️" },
];

const servicesData = [
  { label: "Website Services", href: "/service/website-services", icon: "🌐" },
  { label: "WordPress Development", href: "/service/wordpress-development", icon: "📝" },
  { label: "AI & ML Consulting", href: "/service/ai-ml-consulting", icon: "🤖" },
  { label: "Website Maintenance AMC", href: "/service/website-maintenance-amc", icon: "🛠️" },
  { label: "Cloud Services", href: "/service/cloud", icon: "☁️" },
  { label: "Staffing Services", href: "/service/staffing", icon: "👥" },
  { label: "Digital Marketing", href: "/service/digital-marketing", icon: "📱" },
  { label: "Statamic Development", href: "/service/statamic-development", icon: "✨" },
  { label: "Consulting Services", href: "/service/consulting-services", icon: "💼" },
  { label: "ERP Services", href: "/service/erp-services", icon: "🏢" },
  { label: "Offshore Development", href: "/service/offshore-development", icon: "🌍" },
  { label: "Laravel Development", href: "/service/custom-laravel-application-development", icon: "⚙️" },
  { label: "GPS Tracking", href: "/service/gps-tracking", icon: "📍" },
  { label: "WordPress Training", href: "/service/wordpress-training", icon: "🎓" },
  { label: "Odoo Apps Support", href: "/service/odoo-apps-support-and-maintenance", icon: "📦" },
];

const industriesData = [
  { label: "Banking & Financial Services", href: "/industry/banking-and-financial-services", icon: "🏦" },
  { label: "Healthcare & Life Sciences", href: "/industry/health-care-life-sciences", icon: "🏥" },
  { label: "Insurance", href: "/industry/insurance", icon: "🛡️" },
  { label: "Manufacturing", href: "/industry/manufacturing", icon: "🏭" },
  { label: "Education", href: "/industry/education", icon: "🎓" },
  { label: "Media & Entertainment", href: "/industry/media-entertainment", icon: "🎬" },
  { label: "BPO Services – ITES", href: "/industry/bpo-services-ites", icon: "💼" },
];

const aboutCol1 = [
  { label: "About Us", href: "/about", icon: "ℹ️" },
  { label: "Quality Policy", href: "/quality-policy", icon: "📜" },
  { label: "Case Studies", href: "/case-studies", icon: "📊" },
  { label: "Testimonials", href: "/testimonial", icon: "💬" },
  { label: "Blog", href: "/blog", icon: "✍️" },
];

const aboutCol2 = [
  { label: "Partners", href: "/partners", icon: "🤝" },
  { label: "White Label", href: "/white-label-agency-partnerships", icon: "🏷️" },
  { label: "Reference", href: "/referral-program", icon: "🔗" },
  { label: "Training", href: "/training-programs", icon: "🎓" },
  { label: "Career", href: "/careers", icon: "💼" },
];

// ─── HTML Builders ────────────────────────────────────────────────────────────

function chevronDown() {
  return `<svg class="w-4 h-4 transition-all duration-200 text-gray-600 group-hover:text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>`;
}

function arrowRight(cls = "w-5 h-5 text-gray-300 group-hover:text-emerald-500 transform transition-transform group-hover:translate-x-1 flex-shrink-0 ml-2") {
  return `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`;
}

function gridItem(href, icon, label, hoverColor = "violet") {
  return `<a href="${SITE_URL}${href}" class="group flex items-center gap-3 p-4 rounded-xl hover:bg-${hoverColor}-50 transition-all duration-200">
    <span class="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">${icon}</span>
    <div class="flex-1 min-w-0">
      <h4 class="font-sans font-semibold text-gray-900 group-hover:text-${hoverColor}-600 transition-colors text-sm break-words">${label}</h4>
    </div>
  </a>`;
}

function buildHeader() {
  // Products grid
  const productsGrid = productsData.map(p => gridItem(p.href, p.icon, p.label, "violet")).join("\n");
  // Services grid
  const servicesGrid = servicesData.map(s => gridItem(s.href, s.icon, s.label, "emerald")).join("\n");
  // Industries grid
  const industriesGrid = industriesData.map(i => gridItem(i.href, i.icon, i.label, "blue")).join("\n");
  // About links helpers
  const buildAboutLinkHtml = (a) => `
    <a href="${a.href.startsWith('http') ? a.href : SITE_URL + a.href}" class="group flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-200">
      <div class="flex items-center gap-3 flex-1 min-w-0">
        <div class="w-9 h-9 rounded-xl bg-white group-hover:bg-[#10b981] flex items-center justify-center transition-colors shadow-sm flex-shrink-0">
          <span class="text-base group-hover:scale-110 transition-transform">${a.icon}</span>
        </div>
        <span class="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors capitalize tracking-tight text-xs md:text-sm break-words">${a.label}</span>
      </div>
      ${arrowRight("w-4 h-4 text-gray-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2")}
    </a>`;

  const aboutCol1Html = aboutCol1.map(buildAboutLinkHtml).join("\n");
  const aboutCol2Html = aboutCol2.map(buildAboutLinkHtml).join("\n");

  return `<header id="isarva-header" class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent py-5" style="will-change:transform">
  <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">

    <!-- Logo -->
    <a class="flex items-center" href="${SITE_URL}/">
      <div class="relative h-[64px] w-[165px]">
        <img alt="Isarva Logo" decoding="async" class="object-contain drop-shadow-sm"
             style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;object-fit:contain"
             src="${SITE_URL}/_next/image?url=%2Fisarva%20New%20Logo.png&w=384&q=75"
             srcset="${SITE_URL}/_next/image?url=%2Fisarva%20New%20Logo.png&w=128&q=75 128w, ${SITE_URL}/_next/image?url=%2Fisarva%20New%20Logo.png&w=256&q=75 256w, ${SITE_URL}/_next/image?url=%2Fisarva%20New%20Logo.png&w=384&q=75 384w"
             width="165" height="64">
      </div>
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden nav:flex items-center gap-7">

      <!-- Home -->
      <a class="text-black text-base font-semibold tracking-wide transition-colors duration-200 hover:text-emerald-600" href="${SITE_URL}/">Home</a>

      <!-- About Us -->
      <div class="relative nav-dropdown" data-menu-type="about-static">
        <a class="group text-black text-base font-semibold tracking-wide transition-colors duration-200 hover:text-emerald-600 flex items-center gap-1" href="${SITE_URL}/about">About Us ${chevronDown()}</a>
        <div class="mega-menu mega-menu-left about-mega-menu pt-4">
          <div class="w-[860px]">
            <div class="bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 flex gap-8">
              <a href="${SITE_URL}/about" class="group/featured w-[280px] bg-gradient-to-br from-emerald-50 to-lime-50 rounded-3xl p-6 relative overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                <div class="absolute inset-0 opacity-10 group-hover/featured:scale-110 transition-transform duration-700">
                  <img src="${SITE_URL}/agency_office_studio_premium_1773850105446.png" class="w-full h-full object-cover" alt="Isarva team collaboration workspace" loading="lazy" />
                </div>
                <div class="relative z-10 flex flex-col h-full">
                  <h3 class="text-xl font-bold text-gray-900 mb-4">About Isarva</h3>
                  <p class="text-gray-600 text-base mb-6 font-medium leading-relaxed">At Isarva Infotech, we are more than an IT consulting firm - we are a strategic technology partner. Company plays a pivotal role in enabling organizations to achieve their digital transformation goals.</p>
                  <div class="mt-auto text-emerald-600 font-bold text-base flex items-center gap-2">Read More <span>→</span></div>
                </div>
              </a>
              <div class="flex-1 flex gap-6">
                <!-- Column 1: Company -->
                <div class="flex-1 space-y-2">
                  <div class="mb-4">
                    <h3 class="text-xl font-bold text-gray-900 mb-1">Company</h3>
                  </div>
                  ${aboutCol1Html}
                </div>
                <!-- Column 2: Grow With Us -->
                <div class="flex-1 space-y-2">
                  <div class="mb-4">
                    <h3 class="text-xl font-bold text-gray-900 mb-1">Grow With Us</h3>
                  </div>
                  ${aboutCol2Html}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Products -->
      <div class="relative nav-dropdown" data-menu-type="products-static">
        <a class="group text-black text-base font-semibold tracking-wide transition-colors duration-200 hover:text-emerald-600 flex items-center gap-1" href="${SITE_URL}/products">Products ${chevronDown()}</a>
        <div class="mega-menu mega-menu-center pt-4">
          <div class="w-[920px]">
            <div class="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 p-8">
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Our Products</h3>
                <p class="text-gray-600">Innovative software solutions for your business</p>
              </div>
              <div class="grid grid-cols-3 gap-4">${productsGrid}</div>
              <div class="mt-6 pt-6 border-t border-gray-200">
                <a href="${SITE_URL}/products" class="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all duration-200">View All Products ${arrowRight("w-4 h-4")}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Services -->
      <div class="relative nav-dropdown" data-menu-type="services-static">
        <a class="group text-black text-base font-semibold tracking-wide transition-colors duration-200 hover:text-emerald-600 flex items-center gap-1" href="${SITE_URL}/services">Services ${chevronDown()}</a>
        <div class="mega-menu mega-menu-center pt-4">
          <div class="w-[920px]">
            <div class="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 p-8">
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Our Services</h3>
                <p class="text-gray-600">Comprehensive solutions for your business needs</p>
              </div>
              <div class="grid grid-cols-3 gap-4">${servicesGrid}</div>
              <div class="mt-6 pt-6 border-t border-gray-200">
                <a href="${SITE_URL}/services" class="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all duration-200">View All Services ${arrowRight("w-4 h-4")}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Industries -->
      <div class="relative nav-dropdown" data-menu-type="industries-static">
        <a class="group text-black text-base font-semibold tracking-wide transition-colors duration-200 hover:text-emerald-600 flex items-center gap-1" href="${SITE_URL}/industries">Industries ${chevronDown()}</a>
        <div class="mega-menu mega-menu-center pt-4">
          <div class="w-[800px]">
            <div class="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 p-8">
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Industries We Serve</h3>
                <p class="text-gray-600">Specialized solutions across various sectors</p>
              </div>
              <div class="grid grid-cols-3 gap-4">${industriesGrid}</div>
              <div class="mt-6 pt-6 border-t border-gray-200">
                <a href="${SITE_URL}/industries" class="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-200">View All Industries ${arrowRight("w-4 h-4")}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Support -->
      <a target="_blank" rel="noopener noreferrer" class="text-black text-base font-semibold tracking-wide transition-colors duration-200 hover:text-emerald-600" href="https://support.isarva.in/form">Support</a>

    </nav>

    <!-- Mobile Menu Button -->
    <button class="nav:hidden mobile-menu-toggle relative w-8 h-8 flex flex-col justify-center items-center group self-end" aria-label="Open mobile menu">
      <div class="w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 group-hover:bg-green-500"></div>
      <div class="w-6 h-0.5 bg-gray-800 rounded-full mt-1.5 transition-all duration-300 group-hover:bg-green-500"></div>
      <div class="w-6 h-0.5 bg-gray-800 rounded-full mt-1.5 transition-all duration-300 group-hover:bg-green-500"></div>
    </button>

    <!-- CTA Button -->
    <a class="press-illusion-btn-orange text-white w-fit font-bold px-8 py-3 text-base items-center space-x-2 !hidden nav:!flex transition-all duration-300" href="${SITE_URL}/contact">
      <span>Contact Us</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" class="h-2 w-4">
        <path fill="currentColor" fill-rule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clip-rule="evenodd"></path>
      </svg>
    </a>

  </div>
</header>`;
}

// ─── Route Handler ────────────────────────────────────────────────────────────

export async function GET() {
  try {
    // Fetch footer from live site (it's simple static HTML, safe to scrape)
    const response = await fetch(SITE_URL, {
      cache: "no-store",
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; IsarvaBot/1.0)",
      },
    });

    let footerHtml = "";
    if (response.ok) {
      const html = await response.text();
      const match = html.match(/<footer[\s\S]*?<\/footer>/i);
      if (match) {
        // Make relative URLs absolute
        footerHtml = match[0]
          .replace(/(href|src)="\/((?!\/)[^"]*?)"/gi, `$1="${SITE_URL}/$2"`)
          .replace(/srcset="([^"]+)"/gi, (_, s) =>
            'srcset="' + s.split(",").map(p => {
              const t = p.trim();
              return t.startsWith("/") ? `${SITE_URL}${t}` : t;
            }).join(", ") + '"'
          );
      }
    }

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
    };

    return NextResponse.json(
      {
        header: buildHeader(),
        footer: footerHtml,
        stylesheets: [],
      },
      { headers }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to build layout", details: error.message },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
