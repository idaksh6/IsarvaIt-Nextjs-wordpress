"use client";

import { useState, useEffect, useRef } from "react";
import Link from "../AppLink";
import ContactFormModal from "../ContactFormModal";
import { productsData } from "../../lib/data/products-data";

const MODULES = [
  {
    icon: '🟢',
    name: 'Live Dashboard',
    sub: 'Real-time visitors & KPIs',
    tag: 'Real-time',
    image: '/products/isarva-analytics/dashboard-live.png',
    heading: 'See who is on your site right now',
    caption: 'The main dashboard opens with a live visitor ring, a list of pages being viewed right now, and KPI cards showing page views, sessions, visitors, and engagement — each with % change vs the previous period.',
    bullets: [
      'Live visitor ring with pulse animation',
      'Pages with activity — see URLs people are on now',
      'KPI cards: page views, sessions, visitors, engagement',
      'Quick date filters: today, 7 days, 30 days, custom range',
    ],
  },
  {
    icon: '🏆',
    name: 'Top Pages & Map',
    sub: 'Content performance & geography',
    tag: 'Analytics',
    image: '/products/isarva-analytics/dashboard-pages-map.png',
    heading: 'Know which pages drive traffic and where visitors come from',
    caption: 'The most visited pages leaderboard shows views, sessions, traffic share, and engagement for each URL. Beside it, the visitor map plots countries on a world map with session counts and a donut chart breakdown.',
    bullets: [
      'Top 10 pages with views and session counts',
      'Traffic share bars — see which pages dominate',
      'Interactive visitor map with country markers',
      'Country list with flags and session percentages',
    ],
  },
  {
    icon: '👥',
    name: 'Audience Insights',
    sub: 'Mix, sources & landing pages',
    tag: 'Analytics',
    image: '/products/isarva-analytics/dashboard-audience.png',
    heading: 'Understand who visits and how they arrive',
    caption: 'Audience mix shows new vs returning visitors with engaged sessions, bounce rate, and average session duration. Source/medium lists where traffic actually comes from. Landing pages show the first page of each visit with engagement and bounce rates.',
    bullets: [
      'New vs returning visitor split with counts',
      'Source / medium: organic, direct, referral, and more',
      'Landing pages with engagement and bounce %',
      'Engaged sessions, new users, avg session, bounce rate',
    ],
  },
  {
    icon: '📍',
    name: 'Cities & Tech Stack',
    sub: 'Local depth & device data',
    tag: 'Analytics',
    image: '/products/isarva-analytics/dashboard-depth.png',
    heading: 'Drill into cities, events, and technology',
    caption: 'Top cities shows session counts by city. Top events tracks meaningful actions like page views, scrolls, and form submissions. Tech stack breaks down browsers and operating systems so you know how people access the site.',
    bullets: [
      'Top cities with user and session counts',
      'Top events: page_view, scroll, form_start, etc.',
      'Browser breakdown: Chrome, Safari, Edge, and more',
      'OS split: Android, Windows, iOS, macOS',
    ],
  },
  {
    icon: '📈',
    name: 'Trends & Devices',
    sub: 'Charts & traffic mix',
    tag: 'Analytics',
    image: '/products/isarva-analytics/dashboard-trends.png',
    heading: 'Spot patterns in traffic over time',
    caption: 'The visitor trend chart plots daily page views and sessions so you can see spikes and dips. Traffic sources bar chart shows direct, organic, referral, and social breakdown. Devices card splits desktop, mobile, and tablet usage.',
    bullets: [
      'Daily page views vs sessions line chart',
      'Traffic sources bar chart with session counts',
      'Device split: mobile, desktop, tablet with %',
      'All charts auto-sync without page reload',
    ],
  },
  {
    icon: '🌐',
    name: 'Multi-Site Switch',
    sub: 'One login, many websites',
    tag: 'Multi-site',
    image: '/products/isarva-analytics/multi-site.png',
    heading: 'Switch between assigned websites instantly',
    caption: 'Clients with multiple websites use the header dropdown to switch between all properties assigned to them. Each site loads its own dashboard with separate live data, trends, and metrics. A confirmation banner shows which site is active.',
    bullets: [
      'Assign many websites per client in Admin',
      'Header dropdown lists all assigned websites',
      'Active site banner confirms current selection',
      'Weekly WhatsApp sends one report per site',
    ],
  },
  {
    icon: '🔐',
    name: 'Client Login',
    sub: 'Branded sign-in portal',
    tag: 'Portal',
    image: '/products/isarva-analytics/login.png',
    heading: 'Clients log in to Isarva Analytics',
    caption: 'The branded login page uses a split-screen layout: product highlights on the left, username/password form on the right. Clients use the login details you provide — a simple, professional portal.',
    bullets: [
      'Split-screen login with feature highlights',
      'Username and password — no technical setup',
      'Trial and paid access periods managed by Isarva',
      'Each client sees only their assigned website(s)',
    ],
  },
];

const HERO_SLIDES = [
  { src: '/products/isarva-analytics/dashboard-live.png', label: 'Live Dashboard' },
  { src: '/products/isarva-analytics/dashboard-pages-map.png', label: 'Top Pages & Map' },
  { src: '/products/isarva-analytics/dashboard-trends.png', label: 'Trends & Traffic' },
  { src: '/products/isarva-analytics/multi-site.png', label: 'Multi-Site Switch' },
];

const ACCENT_STYLES = {
  orange: { border: "rgba(234, 88, 12, 0.4)", shadow: "rgba(234, 88, 12, 0.18)" },
  blue: { border: "rgba(29, 78, 216, 0.4)", shadow: "rgba(29, 78, 216, 0.18)" },
  teal: { border: "rgba(15, 118, 110, 0.4)", shadow: "rgba(15, 118, 110, 0.18)" },
  violet: { border: "rgba(109, 40, 217, 0.4)", shadow: "rgba(109, 40, 217, 0.18)" },
  green: { border: "rgba(22, 101, 52, 0.4)", shadow: "rgba(22, 101, 52, 0.18)" },
  slate: { border: "rgba(51, 65, 85, 0.4)", shadow: "rgba(51, 65, 85, 0.18)" },
};

const DOT_RINGS = {
  orange: "#ea580c",
  blue: "#1d4ed8",
  teal: "#0f766e",
  violet: "#6d28d9",
  green: "#166534",
  slate: "#334155"
};

const ACCENT_CAPTIONS = {
  orange: 'Glossy Orange — warm and energetic, great for marketing teams.',
  blue: 'Glossy Blue — professional and trustworthy, ideal for corporate clients.',
  teal: 'Glossy Teal — calm and modern, suits healthcare and finance brands.',
  violet: 'Glossy Violet — creative and distinctive, perfect for agencies.',
  green: 'Glossy Green — fresh and growth-focused, fits eco and SaaS sites.',
  slate: 'Glossy Slate — minimal and executive, for premium B2B dashboards.',
};

const FAQS = [
  { q: "Can one client access multiple websites?", a: "Yes. We can assign multiple websites to a single client login. They switch between sites from the header dropdown. Weekly WhatsApp reports send one message per website." },
  { q: "What does the client need to get started?", a: "Just ask us for Isarva Analytics and share your mobile number. We create your account and send login details. No technical setup required on your side." },
  { q: "How do WhatsApp weekly reports work?", a: "Every Monday you receive a friendly WhatsApp summary: total visitors for the week, top 3 pages, and top 3 countries — in plain language. If you have multiple websites, you get one message per site. No need to log in just to check the week." },
  { q: "How often does the dashboard update?", a: "Live visitors refresh every 30 seconds. Full metrics auto-sync every 5 minutes. Manual refresh is also available — no page reload needed." },
  { q: "Is this a separate product from my website?", a: "Yes. Isarva Analytics is its own product — a clean dashboard with your own login. You see live visitors, maps, trends, and top pages in plain English, plus optional weekly WhatsApp summaries." }
];

export default function ProductDetailPremiumAnalytics({ product, relatedProducts, allProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hero slideshow state
  const [heroIdx, setHeroIdx] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(iv);
  }, []);

  // Live count state
  const [liveCount, setLiveCount] = useState(19);
  useEffect(() => {
    const iv = setInterval(() => {
      setLiveCount(14 + Math.floor(Math.random() * 12));
    }, 4000);
    return () => clearInterval(iv);
  }, []);

  const [activeMod, setActiveMod] = useState(0);
  const tabsContainerRef = useRef(null);

  useEffect(() => {
    if (!tabsContainerRef.current) return;
    const activeBtn = tabsContainerRef.current.children[activeMod];
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [activeMod]);
  const [isSwitching, setIsSwitching] = useState(false);

  const handleModuleChange = (idx) => {
    if (idx < 0 || idx >= MODULES.length) return;
    setIsSwitching(true);
    setTimeout(() => {
      setActiveMod(idx);
      setIsSwitching(false);
    }, 180);
  };

  // Accent theme state
  const [activeAccent, setActiveAccent] = useState("orange");

  // FAQ state
  const [openFaq, setOpenFaq] = useState(null);

  // Lightbox state
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <div className="bg-white font-sans text-[#334155] antialiased overflow-x-clip selection:bg-indigo-100 selection:text-indigo-900 pt-24 lg:pt-28">
      <style>{`
        @keyframes hero-border-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .hero-viewport-shell-gradient {
          background: linear-gradient(120deg, #4f46e5, #8b5cf6, #d946ef, #f97316, #2563eb, #4f46e5);
          background-size: 320% 320%;
          animation: hero-border-flow 8s linear infinite;
        }
        .hero-viewport-glow-gradient {
          background: linear-gradient(120deg, rgba(79, 70, 229, 0.35), rgba(139, 92, 246, 0.2), rgba(249, 115, 22, 0.25));
          background-size: 320% 320%;
          animation: hero-border-flow 8s linear infinite;
        }
        .hero-float {
          position: absolute;
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.85rem;
          font-size: 0.78rem;
          font-weight: 600;
          border-radius: 12px;
          animation: float 4s ease-in-out infinite;
        }
        .hero-float--a {
          top: -10px;
          left: -6px;
        }
        .hero-float--b {
          bottom: 20%;
          right: -10px;
          animation-delay: -2.5s;
        }
      `}</style>
      {/* ═══ HERO ═══ */}
      <section
        className="relative pb-0 pt-12 lg:pt-16 overflow-hidden"
        style={{
          background: "radial-gradient(100% 210% at 85% 0%, rgba(224, 231, 255, 0.35) 0%, rgba(250, 250, 250, 0) 65%), radial-gradient(100% 120% at 15% 100%, rgba(243, 232, 255, 0.2) 0%, rgba(250, 250, 250, 0) 70%), #fbfcfe"
        }}
        id="top"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* HERO LEFT */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4f46e5]/[0.08] border border-[#4f46e5]/[0.15] text-[#4f46e5] font-semibold text-[11.5px] mb-6 w-fit select-none">
                <span className="relative flex h-[7px] w-[7px]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#10b981]"></span>
                </span>
                Isarva Analytics · 15+ modules in one dashboard
              </div>
              <h1 className="font-display font-bold text-[#1a1f24] leading-[1.12] text-[clamp(2.25rem,4.5vw,3.75rem)] mb-6 tracking-tight">
                Website insights<br />
                <span style={{
                  background: "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 45%, #d946ef 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  built for clarity.
                </span>
              </h1>
              <p className="text-[#64748b] text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-medium">
                Live visitors, visitor maps, top pages, traffic sources, and trends — in a dashboard your clients understand. Assign multiple websites per client and send weekly WhatsApp summaries automatically.
              </p>
              <div className="flex flex-wrap gap-3.5 items-center justify-center lg:justify-start mb-8 w-full sm:w-auto">
                <a
                  href="#modules"
                  className="press-illusion-btn-orange px-[1.75rem] py-[0.85rem] text-[15.2px] select-none"
                >
                  Explore all modules
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="press-illusion-btn-orange px-[1.75rem] py-[0.85rem] text-[15.2px] select-none"
                >
                  Request a demo
                </button>
              </div>
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                <span className="px-3.5 py-1.5 rounded-lg bg-[#e0e7ff]/40 text-[#4338ca] text-xs font-bold border border-[#e2e8f0]">Live visitor ring</span>
                <span className="px-3.5 py-1.5 rounded-lg bg-[#e0e7ff]/40 text-[#4338ca] text-xs font-bold border border-[#e2e8f0]">Multi-site per client</span>
                <span className="px-3.5 py-1.5 rounded-lg bg-[#e8f5e9] text-[#2e7d32] text-xs font-bold border border-[#c8e6c9]">Weekly WhatsApp</span>
                <span className="px-3.5 py-1.5 rounded-lg bg-[#e0e7ff]/40 text-[#4338ca] text-xs font-bold border border-[#e2e8f0]">Branded login</span>
              </div>
            </div>

            {/* HERO RIGHT (Interactive Visual) */}
            <div className="relative w-full max-w-2xl lg:max-w-none mx-auto hero-stage">
              {/* Floating Badge A */}
              <div className="hero-float hero-float--a bg-white/95 backdrop-blur border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-lg transition-all duration-300 hover:scale-105">
                <span className="hero-float__dot relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-slate-800 whitespace-nowrap">
                  <strong className="text-indigo-600 font-black mr-0.5">{liveCount}</strong> live now
                </span>
              </div>
              {/* Floating Badge B */}
              <div className="hero-float hero-float--b bg-white/95 backdrop-blur border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-lg transition-all duration-300 hover:scale-105">
                <span className="text-slate-800 whitespace-nowrap">
                  📈 <strong className="text-indigo-600 font-black mr-0.5">10K+</strong> page views
                </span>
              </div>
              {/* Viewport Glow */}
              <div className="absolute -inset-[6px] rounded-[20px] blur-[14px] opacity-[0.55] z-0 pointer-events-none hero-viewport-glow-gradient" />

              {/* Viewport Shell */}
              <div className="relative rounded-2xl p-[2px] z-10 flex flex-col hero-viewport-shell-gradient shadow-[0_24px_50px_rgba(79,70,229,0.18)]">
                {/* Inner Viewport Container */}
                <div className="relative w-full rounded-[14px] bg-white overflow-hidden flex flex-col">
                  {/* Slideshow */}
                  <div className="relative w-full aspect-[3024/1814] bg-[#f1f5f9] overflow-hidden shrink-0">
                    {HERO_SLIDES.map((slide, idx) => (
                      <img
                        key={idx}
                        className={`absolute inset-0 w-full h-full object-contain object-center p-1.5 transition-opacity duration-1000 cursor-zoom-in ${idx === heroIdx ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                        src={slide.src}
                        alt={slide.label}
                        onClick={() => setLightboxImg(slide.src)}
                      />
                    ))}
                  </div>
                  {/* Viewport Bar */}
                  <div className="relative h-[38px] bg-white border-t border-slate-100 px-4 flex items-center justify-between text-[11px] font-bold text-slate-500 z-20 shrink-0">
                    <span>{HERO_SLIDES[heroIdx].label}</span>
                    <div className="flex-1 mx-3 h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                        style={{ width: `${((heroIdx + 1) / HERO_SLIDES.length) * 100}%` }}
                      ></div>
                    </div>
                    <span>{heroIdx + 1}/{HERO_SLIDES.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6 mt-16 pt-12 border-t border-slate-200/60">
            <div className="bg-white/60 backdrop-blur border border-white/80 rounded-2xl p-3.5 sm:p-5 shadow-sm">
              <strong className="block text-2xl min-[375px]:text-3xl font-black text-[#1a1f24] tracking-tight">15+</strong>
              <span className="text-xs font-bold text-[#64748b] uppercase tracking-wider mt-1 block">Dashboard modules</span>
            </div>
            <div className="bg-white/60 backdrop-blur border border-white/80 rounded-2xl p-3.5 sm:p-5 shadow-sm">
              <strong className="block text-2xl min-[375px]:text-3xl font-black text-[#1a1f24] tracking-tight">30s</strong>
              <span className="text-xs font-bold text-[#64748b] uppercase tracking-wider mt-1 block">Live refresh</span>
            </div>
            <div className="bg-white/60 backdrop-blur border border-white/80 rounded-2xl p-3.5 sm:p-5 shadow-sm">
              <strong className="block text-xl min-[375px]:text-2xl md:text-3xl font-black text-[#1a1f24] tracking-tight">Multi</strong>
              <span className="text-xs font-bold text-[#64748b] uppercase tracking-wider mt-1 block">Sites per client</span>
            </div>
            <div className="bg-white/60 backdrop-blur border border-white/80 rounded-2xl p-3.5 sm:p-5 shadow-sm border-emerald-100 bg-[#f0fdf4]">
              <strong className="block text-[16px] min-[375px]:text-xl md:text-3xl font-black text-emerald-600 tracking-tight">WhatsApp</strong>
              <span className="text-xs font-bold text-[#64748b] uppercase tracking-wider mt-1 block">Weekly reports</span>
            </div>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="w-full mt-10 lg:mt-16 -mb-[1px] leading-[0] block" aria-hidden="true">
          <svg className="w-full h-16 block" viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1440" height="80" fill="transparent" />
            <path fill="#e8edf3" d="M0,36 C320,68 640,12 960,40 C1120,56 1280,28 1440,44 L1440,80 L0,80 Z" />
            <path fill="#f1f5f9" d="M0,48 C280,76 560,20 840,44 C1080,64 1280,32 1440,52 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section
        className="py-12 lg:py-16 border-b border-[#e8ecf2]"
        style={{ background: "#f1f5f9" }}
        id="problem"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="mb-12 lg:mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#4f46e5] mb-3 block">The Problem</span>
            <h2 className="mb-6 capitalize text-[#1a1f24]">
              Website data is useful —<br />but hard for clients to follow
            </h2>
            <p className="text-[#64748b] text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
              Most teams don't need complicated reports. They need the right numbers, explained clearly — without screenshots, exports, or long explanation calls every week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="bg-white border border-[#e8ecf2] rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(79,70,229,0.1)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 bg-gradient-to-br from-indigo-50 to-purple-50 text-[#4f46e5] border border-indigo-100/50">
                📊
              </div>
              <h3 className="font-bold text-[#1a1f24] text-base mb-2">Too complex for clients</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">Raw analytics tools overwhelm non-technical stakeholders. Sharing insights means exports, screenshots, and long calls.</p>
            </article>
            <article className="bg-white border border-[#e8ecf2] rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(79,70,229,0.1)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 bg-gradient-to-br from-indigo-50 to-purple-50 text-[#4f46e5] border border-indigo-100/50">
                ⏱️
              </div>
              <h3 className="font-bold text-[#1a1f24] text-base mb-2">No live visibility</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">Standard reports are delayed. You can't easily see who's on the site right now or which pages they're viewing.</p>
            </article>
            <article className="bg-white border border-[#e8ecf2] rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(79,70,229,0.1)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 bg-gradient-to-br from-indigo-50 to-purple-50 text-[#4f46e5] border border-indigo-100/50">
                🌐
              </div>
              <h3 className="font-bold text-[#1a1f24] text-base mb-2">One client, many websites</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">Agencies manage multiple sites per client but have no simple branded portal to switch between them.</p>
            </article>
            <article className="bg-white border border-[#e8ecf2] rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(79,70,229,0.1)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 bg-gradient-to-br from-indigo-50 to-purple-50 text-[#4f46e5] border border-indigo-100/50">
                📱
              </div>
              <h3 className="font-bold text-[#1a1f24] text-base mb-2">No updates on their phone</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">Clients still ask "how was last week?" because there's no simple weekly summary on WhatsApp.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ═══ MODULE EXPLORER ═══ */}
      <section
        className="py-12 lg:py-16 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(145deg, #2f2b6a 0%, #3d3885 42%, #334155 100%)" }}
        id="modules"
      >
        <div className="absolute top-0 right-0 pointer-events-none rounded-full blur-3xl w-[500px] h-[500px] bg-indigo-500/10 z-0"></div>
        <div className="absolute bottom-0 left-0 pointer-events-none rounded-full blur-3xl w-[500px] h-[500px] bg-purple-500/10 z-0"></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="mb-12 lg:mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#a5b4fc] mb-3 block">Module Explorer</span>
            <h2 className="font-display font-bold text-white leading-[1.12] text-[clamp(2rem,4.5vw,3.25rem)] mb-4 tracking-tight">
              Every feature, one click away
            </h2>
            <p className="text-indigo-100/80 text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
              Pick a module and preview the screen. Each section explains what the client sees and why it matters. Tap the screenshot to enlarge.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
            {/* Sidebar list */}
            <div ref={tabsContainerRef} className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 lg:sticky lg:top-[100px] flex overflow-x-auto lg:flex-col gap-2 max-w-full no-scrollbar">
              {MODULES.map((mod, i) => (
                <button
                  key={i}
                  type="button"
                  className={`flex-shrink-0 flex items-center gap-[0.85rem] p-[0.85rem_1rem] rounded-xl text-left transition-all duration-250 cursor-pointer w-auto lg:w-full select-none text-[0.85rem] font-bold border ${i === activeMod ? "bg-white/[0.12] border-[#a5b4fc]/[0.35] text-white" : "bg-white/[0.03] border-white/[0.05] text-white/70 hover:bg-white/[0.08] hover:text-white"}`}
                  onClick={() => handleModuleChange(i)}
                >
                  <span className="text-[1.1rem] shrink-0">
                    {mod.icon}
                  </span>
                  <div className="truncate">
                    <span className="block">{mod.name}</span>
                    <span className={`block text-[11.2px] font-medium mt-0.5 ${i === activeMod ? "text-white/70" : "text-white/40"}`}>{mod.sub}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Stage */}
            <div className="bg-white/[0.06] border border-white/[0.1] rounded-2xl p-6 lg:p-8 flex flex-col gap-6 text-white w-full backdrop-blur-md">
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/5">
                <div>
                  <span className="text-[10.5px] font-bold tracking-wider uppercase text-white/[0.45] block mb-0.5">Select module</span>
                  <h2 className="text-[20px] font-bold text-white">{MODULES[activeMod].name}</h2>
                </div>
                <span className="inline-block text-[11px] font-bold text-[#4f46e5] bg-white px-2.5 py-1 rounded-[6px] select-none shrink-0">
                  {MODULES[activeMod].tag}
                </span>
              </div>

              <div
                onClick={() => setLightboxImg(MODULES[activeMod].image)}
                className="relative w-full p-2 bg-[#f1f5f9] rounded-xl overflow-hidden cursor-zoom-in border border-white/10 group block"
              >
                <img
                  src={MODULES[activeMod].image}
                  alt={MODULES[activeMod].name}
                  className={`w-full h-auto block rounded-lg transition-all duration-300 ${isSwitching ? "opacity-0 scale-[0.99]" : "opacity-100 scale-100"}`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center pointer-events-none">
                  <span className="opacity-0 group-hover:opacity-100 bg-white/95 backdrop-blur shadow-md text-slate-800 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-all duration-300">
                    🔍 Click to zoom
                  </span>
                </div>
              </div>

              <div className={`transition-all duration-300 ${isSwitching ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
                <h3 className="text-[17px] font-bold text-white mb-2">{MODULES[activeMod].heading}</h3>
                <p className="text-white/70 text-[14px] leading-relaxed mb-6">{MODULES[activeMod].caption}</p>
                <ul className="flex flex-col gap-2 pl-4 list-disc text-white/85 text-[13.5px] leading-relaxed mb-4">
                  {MODULES[activeMod].bullets.map((bullet, idx) => (
                    <li key={idx} className="marker:text-white/45 pl-1">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-center gap-5 border-t border-white/[0.08] pt-5 mt-2 w-full">
                <button
                  type="button"
                  disabled={activeMod === 0}
                  onClick={() => handleModuleChange(activeMod - 1)}
                  className="px-4 py-2 rounded-lg border border-white/[0.12] bg-white/[0.08] hover:bg-white/[0.15] text-white font-semibold text-[13px] transition-colors disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer"
                >
                  Previous
                </button>
                <span className="text-[12.5px] font-semibold text-white/50">{activeMod + 1} / {MODULES.length}</span>
                <button
                  type="button"
                  disabled={activeMod === MODULES.length - 1}
                  onClick={() => handleModuleChange(activeMod + 1)}
                  className="px-4 py-2 rounded-lg border border-white/[0.12] bg-white/[0.08] hover:bg-white/[0.15] text-white font-semibold text-[13px] transition-colors disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES ═══ */}
      <section className="py-12 lg:py-16 border-y border-slate-100" style={{ background: "linear-gradient(180deg, #fafbff 0%, #fff 100%)" }} id="capabilities">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="mb-12 lg:mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#4f46e5] mb-3 block">Capabilities</span>
            <h2 className="mb-6 capitalize text-slate-900">
              Data your team can <span style={{ background: "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 45%, #d946ef 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>act on</span>
            </h2>
            <p className="text-[#64748b] text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
              Everything grouped the way clients think about their website — live activity, performance, and audience breakdown.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Live group */}
            <div className="bg-white border border-[#e8ecf2] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
              <div className="p-5 text-white bg-gradient-to-br from-[#4f46e5] to-[#4338ca]">
                <h3 className="font-bold text-lg text-white">Live &amp; Real-time</h3>
                <p className="text-xs text-indigo-100/90 mt-0.5">Who is on your site right now</p>
              </div>
              <div className="divide-y divide-slate-100 text-slate-600">
                <div className="px-5 py-4 text-xs font-medium leading-relaxed">
                  <strong className="block text-slate-900 text-sm font-bold mb-1">Live visitor ring</strong>
                  Animated count updated every 30 seconds
                </div>
                <div className="px-5 py-4 text-xs font-medium leading-relaxed">
                  <strong className="block text-slate-900 text-sm font-bold mb-1">Pages with activity</strong>
                  See which URLs people are viewing right now
                </div>
                <div className="px-5 py-4 text-xs font-medium leading-relaxed">
                  <strong className="block text-slate-900 text-sm font-bold mb-1">Live badge in header</strong>
                  Green pulse shows active visitors at a glance
                </div>
              </div>
            </div>

            {/* Performance group */}
            <div className="bg-white border border-[#e8ecf2] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
              <div className="p-5 text-white bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed]">
                <h3 className="font-bold text-lg text-white">Performance Analytics</h3>
                <p className="text-xs text-purple-100/90 mt-0.5">Historical metrics &amp; trends</p>
              </div>
              <div className="divide-y divide-slate-100 text-slate-600">
                <div className="px-5 py-4 text-xs font-medium leading-relaxed">
                  <strong className="block text-slate-900 text-sm font-bold mb-1">Page views, sessions, visitors</strong>
                  With % change vs previous period
                </div>
                <div className="px-5 py-4 text-xs font-medium leading-relaxed">
                  <strong className="block text-slate-900 text-sm font-bold mb-1">Visitor trend chart</strong>
                  Daily page views and sessions over time
                </div>
                <div className="px-5 py-4 text-xs font-medium leading-relaxed">
                  <strong className="block text-slate-900 text-sm font-bold mb-1">Top 10 pages</strong>
                  Leaderboard with traffic share bars
                </div>
              </div>
            </div>

            {/* Audience group */}
            <div className="bg-white border border-[#e8ecf2] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
              <div className="p-5 text-white bg-gradient-to-br from-cyan-600 to-cyan-700">
                <h3 className="font-bold text-lg text-white">Audience Breakdown</h3>
                <p className="text-xs text-cyan-100/90 mt-0.5">Sources, geography &amp; devices</p>
              </div>
              <div className="divide-y divide-slate-100 text-slate-600">
                <div className="px-5 py-4 text-xs font-medium leading-relaxed">
                  <strong className="block text-slate-900 text-sm font-bold mb-1">Visitor map</strong>
                  Interactive map with country markers and donut chart
                </div>
                <div className="px-5 py-4 text-xs font-medium leading-relaxed">
                  <strong className="block text-slate-900 text-sm font-bold mb-1">Traffic sources</strong>
                  Direct, organic, referral, social, and more
                </div>
                <div className="px-5 py-4 text-xs font-medium leading-relaxed">
                  <strong className="block text-slate-900 text-sm font-bold mb-1">Devices &amp; tech stack</strong>
                  Desktop, mobile, tablet, browsers, and OS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHATSAPP HIGHLIGHT ═══ */}
      <section
        className="py-12 lg:py-16"
        style={{ background: "linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 50%, #fff 100%)" }}
        id="whatsapp"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="bg-white border border-[#25d366]/25 rounded-[1.25rem] p-5 sm:p-9 lg:p-[2.25rem_2.5rem] shadow-[0_12px_40px_rgba(22,163,74,0.1)] grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 items-center max-w-5xl mx-auto">
            {/* WhatsApp Icon Circle */}
            <div className="w-16 h-16 rounded-full bg-[#25d366] text-white flex items-center justify-center shrink-0 shadow-[0_8px_24px_rgba(37,211,102,0.35)] mx-auto lg:mx-0">
              <svg className="w-[34px] h-[34px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            {/* Copy Content */}
            <div className="flex flex-col gap-1 lg:text-left text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#16a34a] mb-1 block">Client favourite</span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1a1f24] leading-tight">Weekly WhatsApp reports</h2>
              <p className="text-[#64748b] text-[13.5px] max-w-[36rem] leading-relaxed mt-1">Every Monday, clients receive a friendly summary on WhatsApp — total visitors, top 3 pages, and top 3 countries. Plain language, no jargon. One message per website if they have multiple sites.</p>
            </div>
            {/* Checklist */}
            <ul className="flex flex-col gap-2 shrink-0 w-full lg:w-60 lg:items-start items-center">
              <li className="relative pl-[1.15rem] text-[13px] font-semibold text-[#475569] leading-tight before:content-['✓'] before:text-[#16a34a] before:font-bold before:absolute before:left-0">
                Total visitors for the week
              </li>
              <li className="relative pl-[1.15rem] text-[13px] font-semibold text-[#475569] leading-tight before:content-['✓'] before:text-[#16a34a] before:font-bold before:absolute before:left-0">
                Top 3 pages with visit counts
              </li>
              <li className="relative pl-[1.15rem] text-[13px] font-semibold text-[#475569] leading-tight before:content-['✓'] before:text-[#16a34a] before:font-bold before:absolute before:left-0">
                Top 3 countries with visitor counts
              </li>
              <li className="relative pl-[1.15rem] text-[13px] font-semibold text-[#475569] leading-tight before:content-['✓'] before:text-[#16a34a] before:font-bold before:absolute before:left-0">
                Link back to the full dashboard
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ CLIENT EXPERIENCE ═══ */}
      <section className="py-12 lg:py-16 border-b border-slate-100" style={{ background: "#f8fafc" }} id="delivery">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="mb-12 lg:mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#4f46e5] mb-3 block">Client Experience</span>
            <h2 className="mb-6 capitalize text-[#1a1f24]">
              Your product.<br />Their simple login.
            </h2>
            <p className="text-[#64748b] text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
              Clients only see Isarva Analytics — a clean dashboard with username and password. No third-party tools, no technical setup on their side.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="bg-white border border-[#e8ecf2] rounded-3xl p-8 shadow-sm flex flex-col items-center text-center lg:items-start lg:text-left gap-4 hover:shadow-md transition-all">
              <span className="text-3xl font-black text-indigo-100">01</span>
              <h3 className="text-lg font-bold text-[#1a1f24]">Branded client login</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">Clients sign in with username and password you give them — like any professional product portal.</p>
              <ul className="text-slate-600 text-xs font-semibold flex flex-col items-center lg:items-start gap-2 mt-2">
                <li className="flex gap-2 text-indigo-600"><span>•</span> <span className="text-slate-600">Split-screen login with highlights</span></li>
                <li className="flex gap-2 text-indigo-600"><span>•</span> <span className="text-slate-600">Trial and paid access periods built in</span></li>
                <li className="flex gap-2 text-indigo-600"><span>•</span> <span className="text-slate-600">Each client sees only assigned websites</span></li>
              </ul>
            </article>
            <article className="bg-white border border-[#e8ecf2] rounded-3xl p-8 shadow-sm flex flex-col items-center text-center lg:items-start lg:text-left gap-4 hover:shadow-md transition-all">
              <span className="text-3xl font-black text-indigo-100">02</span>
              <h3 className="text-lg font-bold text-[#1a1f24]">Multi-site switching</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">One client, many websites. They switch from the header dropdown — each site loads its own dashboard.</p>
              <ul className="text-slate-600 text-xs font-semibold flex flex-col items-center lg:items-start gap-2 mt-2">
                <li className="flex gap-2 text-indigo-600"><span>•</span> <span className="text-slate-600">Assign multiple websites per client</span></li>
                <li className="flex gap-2 text-indigo-600"><span>•</span> <span className="text-slate-600">Active site banner confirms selection</span></li>
                <li className="flex gap-2 text-indigo-600"><span>•</span> <span className="text-slate-600">Same date filters per website</span></li>
              </ul>
            </article>
            <article className="bg-[#f0fdf4] border border-[#d1fae5] rounded-3xl p-8 shadow-sm flex flex-col items-center text-center lg:items-start lg:text-left gap-4 hover:shadow-md transition-all">
              <span className="text-3xl font-black text-emerald-200">03</span>
              <h3 className="text-lg font-bold text-emerald-950">Weekly WhatsApp reports</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">Add their mobile number — they get a weekly summary automatically. No need to open the dashboard to know how the week went.</p>
              <ul className="text-slate-600 text-xs font-semibold flex flex-col items-center lg:items-start gap-2 mt-2">
                <li className="flex gap-2 text-emerald-600"><span>•</span> <span className="text-slate-600">Sent every Monday morning</span></li>
                <li className="flex gap-2 text-emerald-600"><span>•</span> <span className="text-slate-600">One WhatsApp per assigned website</span></li>
                <li className="flex gap-2 text-emerald-600"><span>•</span> <span className="text-slate-600">Easy to read — built for business owners</span></li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ═══ ACCENT THEMES ═══ */}
      <section className="py-12 lg:py-16 border-b border-[#e8ecf2]" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(79, 70, 229, 0.07), transparent 55%), #f8fafc" }} id="accent-themes">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="mb-12 lg:mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#4f46e5] mb-3 block">Personalisation</span>
            <h2 className="mb-6 capitalize text-[#1a1f24]">
              Pick your dashboard <span style={{ background: "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 45%, #d946ef 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>accent colour</span>
            </h2>
            <p className="text-[#64748b] text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
              Six glossy themes in the header — each user picks their favourite. Buttons, live ring, charts, and bars update instantly. Your Isarva logo stays the same.
            </p>
          </div>

          <div className="bg-white border border-[#e8ecf2] rounded-[2rem] p-6 lg:p-12 shadow-xl flex flex-col items-center text-center max-w-4xl mx-auto relative overflow-hidden">
            <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">Tap a colour to preview</p>

            <div className="flex flex-wrap justify-center gap-4 mb-8 z-10">
              {[
                { key: "orange", label: "Glossy Orange", color: "linear-gradient(145deg,#ea580c,#fb923c)" },
                { key: "blue", label: "Glossy Blue", color: "linear-gradient(145deg,#1d4ed8,#60a5fa)" },
                { key: "teal", label: "Glossy Teal", color: "linear-gradient(145deg,#0f766e,#2dd4bf)" },
                { key: "violet", label: "Glossy Violet", color: "linear-gradient(145deg,#6d28d9,#c084fc)" },
                { key: "green", label: "Glossy Green", color: "linear-gradient(145deg,#166534,#4ade80)" },
                { key: "slate", label: "Glossy Slate", color: "linear-gradient(145deg,#334155,#94a3b8)" }
              ].map((accent) => (
                <button
                  key={accent.key}
                  type="button"
                  className={`flex flex-col items-center gap-[0.45rem] min-w-[76px] sm:min-w-[88px] p-[0.65rem_0.5rem] rounded-xl border-2 transition-all duration-200 cursor-pointer select-none ${activeAccent === accent.key ? "border-[#4f46e5] bg-[#4f46e5]/[0.05]" : "border-transparent bg-transparent hover:bg-slate-100 hover:-translate-y-0.5"}`}
                  onClick={() => setActiveAccent(accent.key)}
                >
                  <span className={`w-9 h-9 rounded-full shrink-0 transition-all duration-250 ${activeAccent === accent.key ? "scale-[1.12]" : ""}`} style={{ background: accent.color, boxShadow: activeAccent === accent.key ? "inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 0 0 3px rgba(79, 70, 229, 0.2), 0 6px 16px rgba(15, 23, 42, 0.2)" : "inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 3px 10px rgba(15, 23, 42, 0.18)" }}></span>
                  <span className="text-[11.5px] font-semibold text-slate-600 leading-tight">{accent.label}</span>
                </button>
              ))}
            </div>

            {/* Accent mock header */}
            <div className="inline-flex items-center gap-2.5 p-[0.55rem_0.85rem] mb-4 bg-slate-50 border border-[#e8ecf2] rounded-full z-10 relative">
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Accent</span>
              <div className="flex items-center gap-1.5">
                {["orange", "blue", "teal", "violet", "green", "slate"].map((color) => (
                  <span
                    key={color}
                    className={`w-4 h-4 rounded-full shrink-0 transition-all duration-250 cursor-pointer ${activeAccent === color ? "opacity-100 scale-120" : "opacity-55"}`}
                    style={{
                      background: color === "orange" ? "linear-gradient(145deg,#ea580c,#fb923c)" :
                        color === "blue" ? "linear-gradient(145deg,#1d4ed8,#60a5fa)" :
                          color === "teal" ? "linear-gradient(145deg,#0f766e,#2dd4bf)" :
                            color === "violet" ? "linear-gradient(145deg,#6d28d9,#c084fc)" :
                              color === "green" ? "linear-gradient(145deg,#166534,#4ade80)" :
                                "linear-gradient(145deg,#334155,#94a3b8)",
                      boxShadow: activeAccent === color ? `0 0 0 2px #fff, 0 0 0 3px ${DOT_RINGS[color]}` : "none"
                    }}
                    onClick={() => setActiveAccent(color)}
                  ></span>
                ))}
              </div>
            </div>

            {/* Accent preview container */}
            <div
              className="relative w-full max-w-[768px] bg-[#f1f5f9] rounded-[14px] overflow-hidden transition-all duration-300 mb-6 z-10"
              style={{
                border: `2px solid ${ACCENT_STYLES[activeAccent].border}`,
                boxShadow: `0 0 0 1px rgba(255, 255, 255, 0.8) inset, 0 20px 50px ${ACCENT_STYLES[activeAccent].shadow}`
              }}
            >
              <div
                className="absolute -inset-[10%] opacity-20 blur-3xl rounded-full transition-all duration-700 pointer-events-none"
                style={{
                  background: activeAccent === "orange" ? "radial-gradient(circle, #ea580c 0%, transparent 70%)" :
                    activeAccent === "blue" ? "radial-gradient(circle, #1d4ed8 0%, transparent 70%)" :
                      activeAccent === "teal" ? "radial-gradient(circle, #0f766e 0%, transparent 70%)" :
                        activeAccent === "violet" ? "radial-gradient(circle, #6d28d9 0%, transparent 70%)" :
                          activeAccent === "green" ? "radial-gradient(circle, #166534 0%, transparent 70%)" :
                            "radial-gradient(circle, #334155 0%, transparent 70%)"
                }}
              ></div>
              <img src="/products/isarva-analytics/dashboard-live.png" alt="Dashboard with selected accent colour" className="w-full h-auto block relative z-10" />
            </div>

            <p className="text-[14.7px] font-semibold text-[#64748b] mt-4 max-w-xl text-center leading-relaxed transition-all duration-300">{ACCENT_CAPTIONS[activeAccent]}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 border-t border-[#e8ecf2] pt-6 mt-6 w-full text-center">
              <div className="p-[0.65rem_0.5rem] flex flex-col items-center">
                <strong className="text-[13px] font-bold text-[#1a1f24] leading-tight mb-1">Header picker</strong>
                <span className="text-[11.5px] text-[#64748b] font-normal leading-normal">Same as live dashboard</span>
              </div>
              <div className="p-[0.65rem_0.5rem] flex flex-col items-center">
                <strong className="text-[13px] font-bold text-[#1a1f24] leading-tight mb-1">Instant update</strong>
                <span className="text-[11.5px] text-[#64748b] font-normal leading-normal">Nav, ring, bars &amp; charts</span>
              </div>
              <div className="p-[0.65rem_0.5rem] flex flex-col items-center">
                <strong className="text-[13px] font-bold text-[#1a1f24] leading-tight mb-1">Per user</strong>
                <span className="text-[11.5px] text-[#64748b] font-normal leading-normal">Saved in browser storage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="py-12 lg:py-16 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="mb-12 lg:mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#4f46e5] mb-3 block">Key Features</span>
            <h2 className="mb-6 capitalize text-[#1a1f24]">
              Corporate dashboard,<br />zero analytics jargon
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Auto-Sync Dashboard", desc: "Live stats every 30 seconds, full metrics every 5 minutes — no manual page reload required." },
              { icon: "📅", title: "Flexible Date Filters", desc: "Today, yesterday, this week, this month, 7/30 days, or custom date range with one click." },
              { icon: "🗺️", title: "Visitor Map", desc: "See where visitors come from with map markers, country flags, and session share bars." },
              { icon: "💬", title: "Weekly WhatsApp Reports", desc: "Clients get a friendly weekly summary on WhatsApp — visitors, top pages, and countries. One message per site." },
              { icon: "🏆", title: "Page Leaderboard", desc: "Top pages ranked with views, sessions, traffic share, and engagement percentage." },
              { icon: "🎨", title: "Accent Themes", desc: "Six glossy accent colours — each user picks their favourite from the dashboard header." }
            ].map((feat, i) => (
              <article key={i} className="bg-white border border-[#e8ecf2] rounded-[1.5rem] p-6 shadow-sm flex flex-col items-center text-center lg:items-start lg:text-left gap-4 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl bg-slate-50 border border-slate-100/50 shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1f24] text-base mb-1.5">{feat.title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMPARE ═══ */}
      <section className="py-12 lg:py-16 border-y border-[#e8ecf2]" style={{ background: "#f1f5f9" }}>
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="mb-12 lg:mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#4f46e5] mb-3 block">Why Isarva Analytics</span>
            <h2 className="mb-6 capitalize text-[#1a1f24]">
              From scattered reports to clarity
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Without */}
            <div className="bg-[#ffffff]/40 border border-[#e8ecf2] rounded-2xl p-8 flex flex-col gap-6 shadow-sm">
              <div className="text-[11px] font-bold tracking-wider uppercase text-[#64748b]">
                Without Isarva Analytics
              </div>
              <h3 className="text-xl font-bold text-[#1a1f24] leading-tight">Manual reporting</h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2.5 text-[14px] text-[#64748b] leading-relaxed">
                  <span className="text-[#ef4444] font-bold text-xs shrink-0">❌</span>
                  <span>Complex tools clients don't understand</span>
                </li>
                <li className="flex items-start gap-2.5 text-[14px] text-[#64748b] leading-relaxed">
                  <span className="text-[#ef4444] font-bold text-xs shrink-0">❌</span>
                  <span>No branded client-facing dashboard</span>
                </li>
                <li className="flex items-start gap-2.5 text-[14px] text-[#64748b] leading-relaxed">
                  <span className="text-[#ef4444] font-bold text-xs shrink-0">❌</span>
                  <span>Manual exports and screenshots weekly</span>
                </li>
                <li className="flex items-start gap-2.5 text-[14px] text-[#64748b] leading-relaxed">
                  <span className="text-[#ef4444] font-bold text-xs shrink-0">❌</span>
                  <span>No multi-site client switching portal</span>
                </li>
                <li className="flex items-start gap-2.5 text-[14px] text-[#64748b] leading-relaxed">
                  <span className="text-[#ef4444] font-bold text-xs shrink-0">❌</span>
                  <span>No automatic WhatsApp report summary</span>
                </li>
              </ul>
            </div>
            {/* With */}
            <div className="bg-white border border-[rgba(79,70,229,0.2)] rounded-2xl p-8 flex flex-col gap-6 shadow-[0_8px_30px_rgba(79,70,229,0.08)]">
              <div className="text-[11px] font-bold tracking-wider uppercase text-[#4f46e5]">
                With Isarva Analytics
              </div>
              <h3 className="text-xl font-bold text-[#1a1f24] leading-tight">Your branded dashboard</h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2.5 text-[14px] text-[#64748b] leading-relaxed">
                  <span className="text-[#10b981] font-bold text-xs shrink-0">✅</span>
                  <span>Plain-English metrics everyone understands</span>
                </li>
                <li className="flex items-start gap-2.5 text-[14px] text-[#64748b] leading-relaxed">
                  <span className="text-[#10b981] font-bold text-xs shrink-0">✅</span>
                  <span>Live ring, map, and trends in one screen</span>
                </li>
                <li className="flex items-start gap-2.5 text-[14px] text-[#64748b] leading-relaxed">
                  <span className="text-[#10b981] font-bold text-xs shrink-0">✅</span>
                  <span>Auto-refresh — always up to date</span>
                </li>
                <li className="flex items-start gap-2.5 text-[14px] text-[#64748b] leading-relaxed">
                  <span className="text-[#10b981] font-bold text-xs shrink-0">✅</span>
                  <span>Multi-site switch + simple client login</span>
                </li>
                <li className="flex items-start gap-2.5 text-[14px] text-[#64748b] leading-relaxed">
                  <span className="text-[#10b981] font-bold text-xs shrink-0">✅</span>
                  <span>Weekly WhatsApp report per website</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-12 lg:py-16 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="mb-12 lg:mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#4f46e5] mb-3 block">How It Works</span>
            <h2 className="mb-6 capitalize text-[#1a1f24]">
              Simple for your client.<br />We handle the rest.
            </h2>
            <p className="text-[#64748b] text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
              Your client asks for Isarva Analytics, shares their mobile number — we create their account. They log in and start seeing insights. Weekly WhatsApp summaries can go out automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="bg-white border border-[#e8ecf2] rounded-3xl p-8 shadow-sm flex flex-col items-center text-center lg:items-start lg:text-left gap-4 hover:shadow-md transition-all">
              <span className="w-10 h-10 rounded-full bg-indigo-50 text-[#4f46e5] flex items-center justify-center font-black text-base border border-[#e2e8f0] shrink-0">1</span>
              <h3 className="text-lg font-bold text-[#1a1f24] mt-2">Client asks for access</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">They contact you for website analytics. Share their name, website, and mobile number — that's all they need to do.</p>
            </article>
            <article className="bg-white border border-[#e8ecf2] rounded-3xl p-8 shadow-sm flex flex-col items-center text-center lg:items-start lg:text-left gap-4 hover:shadow-md transition-all">
              <span className="w-10 h-10 rounded-full bg-indigo-50 text-[#4f46e5] flex items-center justify-center font-black text-base border border-[#e2e8f0] shrink-0">2</span>
              <h3 className="text-lg font-bold text-[#1a1f24] mt-2">We create their account</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">We set up login details and assign their website(s). They receive username and password — ready to use.</p>
            </article>
            <article className="bg-[#f0fdf4] border border-[#d1fae5] rounded-3xl p-8 shadow-sm flex flex-col items-center text-center lg:items-start lg:text-left gap-4 hover:shadow-md transition-all">
              <span className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-base border border-[#a7f3d0] shrink-0">3</span>
              <h3 className="text-lg font-bold text-emerald-950 mt-2">Dashboard + WhatsApp</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">They open the dashboard anytime for live visitors, maps, and trends. Plus a weekly WhatsApp summary on their phone — no extra effort.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="py-12 lg:py-16 border-t border-slate-100" style={{ background: "linear-gradient(180deg, #fafbff 0%, #fff 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="mb-12 lg:mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#4f46e5] mb-3 block">Who It's For</span>
            <h2 className="mb-6 capitalize text-[#1a1f24]">
              Built for teams that care about <span style={{ background: "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 45%, #d946ef 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>website performance</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: "🌐", label: "Web Agencies" },
              { icon: "📣", label: "Digital Marketing" },
              { icon: "🛒", label: "E-Commerce" },
              { icon: "🏢", label: "SaaS Companies" },
              { icon: "📰", label: "Media & Blogs" },
              { icon: "🎓", label: "Education" },
              { icon: "🏥", label: "Healthcare" },
              { icon: "✨", label: "Any Website" }
            ].map((ind, i) => (
              <div key={i} className="bg-white/[0.85] border border-[#e8ecf2] rounded-[14px] backdrop-blur-[8px] p-[1rem_1.15rem] flex items-center gap-3 shadow-sm hover:-translate-y-0.5 transition-transform duration-200 text-slate-800">
                <span className="text-[20px] shrink-0">{ind.icon}</span>
                <span className="text-[#1a1f24] text-[14px] font-semibold">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-12 lg:py-16 border-t border-slate-100" style={{ background: "#f8fafc" }} id="faq">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 lg:mb-16 text-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#4f46e5] mb-3 block">FAQ</span>
              <h2 className="mb-6 capitalize text-[#1a1f24]">
                Everything you need to know
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white border border-[#e8ecf2] rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
                  <button
                    type="button"
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-800 hover:text-[#4f46e5] transition-colors cursor-pointer text-base"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    aria-expanded={openFaq === idx ? "true" : "false"}
                  >
                    <span>{faq.q}</span>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" className="shrink-0 transition-transform duration-300 ml-4" style={{ transform: openFaq === idx ? "rotate(180deg)" : "none" }}>
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{ gridTemplateRows: openFaq === idx ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 text-[#64748b] text-sm leading-relaxed border-t border-slate-50 pt-4">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-12 lg:py-16 text-white text-center relative overflow-hidden" style={{ background: "linear-gradient(155deg, #1e1b4b 0%, #312e81 50%, #1e293b 100%)" }} id="cta">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[120px] pointer-events-none rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <h2 className="mb-6 capitalize !text-white">
            Ready for website insights<br />your clients will love?
          </h2>
          <p className="!text-indigo-100/80 text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto mb-10">
            Live dashboard, multi-site access, and weekly WhatsApp reports — all under the Isarva Analytics brand.
          </p>

          <div className="flex flex-wrap gap-[0.85rem] items-center justify-center mt-8 mb-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="press-illusion-btn-orange px-[1.75rem] py-[0.85rem] text-[15.2px] select-none"
            >
              Request Free Demo
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="press-illusion-btn-orange px-[1.75rem] py-[0.85rem] text-[15.2px] select-none"
            >
              Contact Sales
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-10 mt-12 pt-10 border-t border-white/10 max-w-4xl mx-auto w-full">
            <div className="flex flex-col items-center text-center">
              <strong className="block text-[21.5px] font-bold text-white leading-none">15+</strong>
              <span className="text-[11.5px] font-normal text-white/50 mt-1.5">Dashboard modules</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <strong className="block text-[21.5px] font-bold text-white leading-none">30s</strong>
              <span className="text-[11.5px] font-normal text-white/50 mt-1.5">Live refresh</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <strong className="block text-[21.5px] font-bold text-white leading-none">WhatsApp</strong>
              <span className="text-[11.5px] font-normal text-white/50 mt-1.5">Weekly reports</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <strong className="block text-[21.5px] font-bold text-white leading-none">Multi</strong>
              <span className="text-[11.5px] font-normal text-white/50 mt-1.5">Sites per client</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LIGHTBOX ═══ */}
      {lightboxImg && (
        <div className="fixed inset-0 bg-slate-900/90 z-[999] flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out" onClick={() => setLightboxImg(null)}>
          <button
            type="button"
            className="absolute top-6 right-6 text-white hover:text-indigo-400 font-normal text-4xl leading-none cursor-pointer focus:outline-none transition-colors"
            onClick={() => setLightboxImg(null)}
          >
            &times;
          </button>
          <img
            src={lightboxImg}
            alt="Enlarged screenshot"
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10 animate-[zoomIn_0.3s_ease]"
          />
        </div>
      )}

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem="Website Analytics"
        allItems={productsData}
      />
    </div>
  );
}
