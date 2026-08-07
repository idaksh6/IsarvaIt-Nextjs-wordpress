"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ContactFormModal from "../ContactFormModal";

/* ─────────────────────────────────────────────────────────────
   DATA FROM REFERENCE
───────────────────────────────────────────────────────────── */
const SS = "/products/isarva-analytics/";

const MODULES = [
  {
    icon: '🏠', name: 'Landing Page', sub: 'Welcome screen', tag: 'Welcome', image: 'Home.png',
    caption: 'Clean landing page with one-click Google connect and feature overview in plain English.',
    bullets: ['Simple hero with connect CTA', 'Feature cards explained clearly', 'Powered by Google Analytics badge']
  },
  {
    icon: '🔗', name: 'Google Connect', sub: 'OAuth setup', tag: 'Setup', image: 'Connect.png',
    caption: 'Secure Google OAuth sign-in with read-only access to your analytics data.',
    bullets: ['One-click Google sign-in', 'Read-only permissions', 'Disconnect anytime']
  },
  {
    icon: '🌐', name: 'Property Selection', sub: 'Choose website', tag: 'Setup', image: 'Property.png',
    caption: 'Select which GA4 property to display — auto-detected from your Google account.',
    bullets: ['Lists all GA4 properties', 'Manual Property ID fallback', 'One-click continue']
  },
  {
    icon: '🟢', name: 'Live Dashboard', sub: 'Real-time view', tag: 'Real-time', image: 'Dashboard1.png',
    caption: 'See who is on your website right now — live count, pages being viewed, and 3D browser preview.',
    bullets: ['Live visitor count with pulse', 'Pages being viewed now', 'Auto-sync every 30 seconds', 'Quick date filters']
  },
  {
    icon: '🏆', name: 'Top Pages & Countries', sub: 'Content & geo', tag: 'Analytics', image: 'Dashboard2.png',
    caption: 'Most visited pages leaderboard and geographic breakdown with interactive donut chart.',
    bullets: ['Top 10 pages with views', 'Traffic share percentage bars', 'Country session breakdown']
  },
  {
    icon: '📈', name: 'Performance Overview', sub: 'KPIs & trend', tag: 'Analytics', image: 'Dashboard3.png',
    caption: 'KPI cards with period comparison and daily visitor trend line chart.',
    bullets: ['Page views, sessions, visitors', '% change vs previous period', 'Daily trend chart', 'Bounce rate chip']
  },
  {
    icon: '📊', name: 'Audience Breakdown', sub: 'Sources & devices', tag: 'Analytics', image: 'Dashboard4.png',
    caption: 'Traffic sources bar chart and device split — desktop vs mobile vs tablet.',
    bullets: ['Direct, Organic, Referral sources', 'Desktop vs mobile split', 'Session counts & percentages']
  },
];

const HERO_SLIDES = [
  { src: 'Dashboard1.png', label: 'Live Dashboard' },
  { src: 'Dashboard3.png', label: 'Performance Overview' },
  { src: 'Dashboard2.png', label: 'Top Pages & Countries' },
  { src: 'Dashboard4.png', label: 'Audience Breakdown' },
];

const FAQS = [
  { q: "What is Isarva Analytics and how does it work?", a: "Isarva Analytics connects to your Google Analytics 4 property via secure OAuth and displays your website data in a clean, branded dashboard with live visitors, performance metrics, trends, and audience breakdowns — all auto-syncing without page reloads." },
  { q: "Do I need a Google Analytics account?", a: "Yes. Your website must have Google Analytics 4 tracking installed. Sign in with the Google account that has access to your GA4 property. Our team can help set up GA4 if needed." },
  { q: "Is my data safe?", a: "Absolutely. We use read-only OAuth — we only view analytics data, never modify your Google account. Disconnect anytime from Settings." },
  { q: "How often does the dashboard update?", a: "Live visitors refresh every 30 seconds. Full metrics auto-sync every 5 minutes. Manual refresh is also available — no page reload needed." },
  { q: "How is this different from Google Analytics directly?", a: "Google Analytics is powerful but complex. Isarva Analytics shows only what matters — in plain English, with live updates, beautiful charts, and a branded interface your clients understand without training." }
];

export default function ProductDetailPremiumAnalytics({ product, relatedProducts, allProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Slide Show
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => {
      setActiveSlide(p => (p + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(iv);
  }, []);

  // Live Count
  const [liveCount, setLiveCount] = useState(17);
  useEffect(() => {
    const iv = setInterval(() => {
      setLiveCount(10 + Math.floor(Math.random() * 12));
    }, 4000);
    return () => clearInterval(iv);
  }, []);

  // Module Explorer
  const [activeMod, setActiveMod] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);

  const handleModuleChange = (idx) => {
    if (idx < 0 || idx >= MODULES.length) return;
    setIsSwitching(true);
    setTimeout(() => {
      setActiveMod(idx);
      setIsSwitching(false);
    }, 180);
  };

  // FAQ Accordion
  const [openFaq, setOpenFaq] = useState(null);

  // Lightbox
  const [lightboxImage, setLightboxImage] = useState(null);

  // Auto-scroll active tab into view on mobile horizontal overflow
  useEffect(() => {
    const sidebar = document.querySelector("#modules-sidebar");
    if (!sidebar) return;
    const activeBtn = sidebar.querySelector('[data-active="true"]');
    if (activeBtn) {
      const containerRect = sidebar.getBoundingClientRect();
      const activeRect = activeBtn.getBoundingClientRect();
      const targetScrollLeft = sidebar.scrollLeft + (activeRect.left - containerRect.left) - (containerRect.width / 2) + (activeRect.width / 2);
      sidebar.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth"
      });
    }
  }, [activeMod]);

  // Scroll reveal simulation via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-clip text-slate-600">

      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#fafbff] via-[#fff] to-[#f8fafc]">
        {/* Glow Rings & Accents */}
        <div className="absolute -top-[10%] -right-[10%] w-[55%] h-[90%] bg-[radial-gradient(circle,rgba(165,180,252,0.18)_0%,transparent_68%)] pointer-events-none z-0"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[45%] h-[50%] bg-[radial-gradient(circle,rgba(196,181,253,0.1)_0%,transparent_70%)] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm text-slate-400 mb-10 font-medium">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            <Link href="/products" className="hover:text-indigo-600 transition-colors">Products</Link>
            <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            <span className="text-slate-600 font-semibold">Website Analytics</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* HERO LEFT COPY */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left reveal">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-indigo-100 shadow-sm text-indigo-950 font-bold text-sm mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
                </span>
                Google Analytics 4 · Live Dashboard
              </div>

              <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
                Website insights<br />
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  built for clarity.
                </span>
              </h1>

              <p className="text-slate-500 text-base lg:text-[1.125rem] leading-relaxed max-w-sm mb-8 font-medium">
                Connect GA4 in one click — live visitors, page performance, traffic sources, and geography in a corporate dashboard your whole team understands.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start mb-8 z-20">
                <button onClick={() => setIsModalOpen(true)} className="press-illusion-btn-orange w-full sm:w-fit !inline-flex items-center justify-center space-x-2 font-bold px-8 py-4">
                  Request Free Demo
                </button>
                <a href="#modules" className="relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-indigo-600 hover:text-indigo-700 bg-white border border-indigo-100 hover:border-indigo-200 hover:bg-indigo-50/10 rounded-lg shadow-sm transition-all duration-200">
                  Explore all modules
                </a>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                {["Live visitors", "Auto-sync", "GA4 official API", "Read-only OAuth"].map((pill, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-md bg-indigo-50/50 text-indigo-700 text-xs font-bold border border-indigo-100/30">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* HERO RIGHT VISUAL */}
            <div className="relative w-full max-w-[600px] mx-auto reveal reveal-delay-2">
              {/* Aspect Spacer */}
              <div className="w-full pb-[80%] sm:pb-[85%] lg:pb-[95%]"></div>

              {/* Absolute Visual Container */}
              <div className="absolute inset-0 w-full h-full">
                {/* Orbit Rings */}
                <div className="absolute inset-0 pointer-events-none select-none z-0">
                  <svg className="w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 400 400" fill="none">
                    <circle cx="200" cy="200" r="172" stroke="rgba(99,102,241,0.18)" strokeWidth="1.2" strokeDasharray="4 8" />
                    <circle cx="200" cy="200" r="142" stroke="rgba(168,85,247,0.12)" strokeWidth="1" />
                  </svg>
                </div>

                {/* Floating Badge A */}
                <div className="hidden sm:flex absolute top-1 right-2 lg:top-[12%] lg:right-[2%] z-20 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl px-5 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-lg transition-transform duration-500 hover:-translate-y-1 items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-slate-800 text-xs font-bold whitespace-nowrap">
                    <strong className="text-indigo-600 text-sm font-black mr-0.5">{liveCount}</strong> live now
                  </span>
                </div>

                {/* Floating Badge B */}
                <div className="hidden sm:flex absolute bottom-1 left-2 lg:bottom-[10%] lg:left-[2%] z-20 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl px-5 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-lg transition-transform duration-500 hover:-translate-y-1 items-center gap-2">
                  <span className="text-slate-800 text-xs font-bold whitespace-nowrap">
                    📈 <strong className="text-indigo-600 text-sm font-black mr-0.5">3.5K</strong> page views
                  </span>
                </div>

                {/* Main Slideshow Viewport */}
                <div className="absolute top-[10%] left-[3%] w-[94%] h-[80%] lg:top-[16%] lg:left-[5%] lg:w-[90%] lg:h-[68%] rounded-2xl overflow-hidden bg-white shadow-[0_24px_50px_rgba(79,70,229,0.18),0_0_0_1px_rgba(79,70,229,0.05)] flex flex-col z-10">
                  {/* Slider Images */}
                  <div className="relative flex-1 w-full overflow-hidden">
                    {HERO_SLIDES.map((slide, idx) => (
                      <img
                        key={idx}
                        className={`absolute inset-0 w-full h-full object-contain object-top bg-white transition-opacity duration-1000 cursor-zoom-in ${idx === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                        src={`${SS}${slide.src}`}
                        alt={slide.label}
                        onClick={() => setLightboxImage(`${SS}${slide.src}`)}
                      />
                    ))}
                  </div>

                  {/* Progress/Controller Bar */}
                  <div className="h-[38px] bg-slate-50 border-t border-slate-200 px-4 flex items-center justify-between text-[11px] font-bold text-slate-500 z-20">
                    <span>{HERO_SLIDES[activeSlide].label}</span>
                    <div className="flex-1 mx-3 h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                        style={{ width: `${((activeSlide + 1) / HERO_SLIDES.length) * 100}%` }}
                      ></div>
                    </div>
                    <span>{activeSlide + 1}/{HERO_SLIDES.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section className="py-12 lg:py-16 bg-[#f8fafc] border-y border-slate-100" id="problem">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 max-w-3xl mx-auto reveal">
            <span className="text-xs font-bold text-indigo-600 tracking-wider mb-3 block">The Problem</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black text-slate-900 leading-tight tracking-tight mb-4">
              Google Analytics is powerful<br />— but hard to read
            </h2>
            <p className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Most teams don&apos;t need 200 reports. They need the right numbers, right now — without logging into a complex interface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📊', title: 'Too complex for clients', desc: 'GA4 overwhelms non-technical stakeholders. Sharing insights means screenshots and spreadsheets.' },
              { icon: '⏱️', title: 'No live visibility', desc: 'Standard reports are delayed. You can\'t see who\'s on your site right now or which pages they\'re viewing.' },
              { icon: '🔄', title: 'Manual refresh cycles', desc: 'Teams export data weekly because dashboards don\'t auto-update. Decisions lag behind reality.' },
              { icon: '🎨', title: 'No branded experience', desc: 'Agencies want analytics under their own brand — not buried inside Google\'s complex interface.' },
            ].map((prob, idx) => (
              <div key={idx} className="bg-white border border-[#e8ecf2] rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(79,70,229,0.1)] transition-all duration-300 hover:-translate-y-1 reveal">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-600 border border-indigo-100/50">
                  {prob.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-[1.1rem] mb-2">{prob.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MODULES EXPLORER (Dark Section) ═══ */}
      <section className="py-12 lg:py-16 relative overflow-hidden bg-gradient-to-br from-[#2f2b6a] via-[#3d3885] to-[#334155] border-y border-indigo-500/25 text-white" id="modules">
        {/* Glow shapes */}
        <div className="absolute top-0 right-0 z-0 pointer-events-none rounded-full blur-3xl w-[500px] h-[500px] bg-indigo-500/10"></div>
        <div className="absolute bottom-0 left-0 z-0 pointer-events-none rounded-full blur-3xl w-[500px] h-[500px] bg-purple-500/10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10 max-w-3xl mx-auto reveal">
            <span className="text-xs font-bold text-indigo-200 tracking-wider mb-3 block">Module Explorer</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black text-white leading-tight tracking-tight mb-4">
              Explore the entire dashboard
            </h2>
            <p className="text-base lg:text-lg text-indigo-100/80 font-medium leading-relaxed max-w-2xl mx-auto">
              Every step is designed to give you clarity — from sign-in to daily audience statistics. Click a module below to inspect the interface layout.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
            {/* Sidebar Modules List */}
            <div id="modules-sidebar" className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 lg:sticky lg:top-[120px] flex overflow-x-auto lg:flex-col gap-2 max-w-full no-scrollbar">
              {MODULES.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => handleModuleChange(idx)}
                  data-active={idx === activeMod}
                  className={`flex-shrink-0 flex items-center gap-3.5 p-3 rounded-xl border text-left transition-all text-sm font-bold select-none ${idx === activeMod
                      ? "bg-white border-[#a5b4fc] shadow-[0_2px_12px_rgba(0,0,0,0.18)] text-slate-900"
                      : "border-white/14 bg-white/9 text-white/92 hover:bg-white/13 hover:border-indigo-300/45"
                    }`}
                >
                  <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm shrink-0 transition-colors ${idx === activeMod
                      ? "bg-indigo-50 text-indigo-600"
                      : "bg-indigo-500/25 text-indigo-200"
                    }`}>
                    {m.icon}
                  </span>
                  <div className="truncate">
                    <span className={`block transition-colors ${idx === activeMod ? "text-slate-900" : "text-white/92"}`}>{m.name}</span>
                    <span className={`block text-[10px] font-medium mt-0.5 transition-colors ${idx === activeMod ? "text-slate-500" : "text-indigo-200/55"}`}>{m.sub}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Main Preview Screen */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_24px_48px_-12px_rgba(79,70,229,0.12)] flex flex-col gap-6 reveal text-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-600 tracking-wide bg-indigo-50 border border-indigo-100/50 px-2.5 py-1 rounded">
                    {MODULES[activeMod].tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2">{MODULES[activeMod].name}</h3>
                  <p className="text-slate-500 text-sm mt-1">{MODULES[activeMod].caption}</p>
                </div>
              </div>

              {/* Main Image Viewport */}
              <div
                onClick={() => setLightboxImage(`${SS}${MODULES[activeMod].image}`)}
                className="relative aspect-[16/10] bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/60 shadow-inner group/preview cursor-zoom-in"
              >
                <div className={`w-full h-full transition-opacity duration-200 ${isSwitching ? "opacity-0" : "opacity-100"}`}>
                  <img
                    src={`${SS}${MODULES[activeMod].image}`}
                    alt={MODULES[activeMod].name}
                    className="w-full h-full object-contain object-top"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/preview:bg-black/5 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/preview:opacity-100 bg-white/95 backdrop-blur shadow-md text-slate-800 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-all duration-300">
                      🔍 Click to zoom
                    </span>
                  </div>
                </div>
              </div>

              {/* Bullets List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {MODULES[activeMod].bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <span className="text-indigo-600">✓</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Slide Navigation Buttons */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                <button
                  onClick={() => handleModuleChange(activeMod - 1)}
                  disabled={activeMod === 0}
                  className="px-5 py-2.5 rounded-lg border border-slate-200 hover:border-indigo-600 text-slate-700 hover:text-indigo-600 font-semibold text-xs transition-colors disabled:opacity-35 disabled:cursor-not-allowed"
                >
                  &larr; Previous
                </button>
                <span className="text-xs font-bold text-slate-400">{activeMod + 1} / {MODULES.length}</span>
                <button
                  onClick={() => handleModuleChange(activeMod + 1)}
                  disabled={activeMod === MODULES.length - 1}
                  className="px-5 py-2.5 rounded-lg border border-slate-200 hover:border-indigo-600 text-slate-700 hover:text-indigo-600 font-semibold text-xs transition-colors disabled:opacity-35 disabled:cursor-not-allowed"
                >
                  Next &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES ═══ */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-[#faf5ff] to-white border-y border-slate-100" id="capabilities">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 max-w-3xl mx-auto reveal">
            <span className="text-xs font-bold text-indigo-600 tracking-wider mb-3 block">Capabilities</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black text-slate-900 leading-tight tracking-tight mb-4">
              Data your team can <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">act on</span>
            </h2>
            <p className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              All metrics pulled from Google Analytics 4 via the official Data API.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Live Column */}
            <div className="bg-white border border-white/80 rounded-2xl shadow-[0_12px_40px_rgba(79,70,229,0.1)] hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden reveal">
              <div className="p-5 text-white bg-gradient-to-br from-[#4338ca] to-[#6366f1]">
                <h3 className="font-bold text-lg text-white">Live & Real-time</h3>
                <p className="text-xs text-indigo-100/90 mt-0.5">Who's on your site right now</p>
              </div>
              <div className="divide-y divide-slate-100 text-slate-600">
                {[
                  { title: "Live active users", desc: "Updated every 30 seconds" },
                  { title: "Pages being viewed", desc: "Real-time page list with viewer counts" },
                  { title: "Live pulse indicator", desc: "Animated count in header & hero" },
                ].map((item, i) => (
                  <div key={i} className="px-5 py-4 text-xs font-medium leading-relaxed">
                    <strong className="block text-slate-900 text-sm font-bold mb-1">{item.title}</strong>
                    {item.desc}
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Column */}
            <div className="bg-white border border-white/80 rounded-2xl shadow-[0_12px_40px_rgba(79,70,229,0.1)] hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden reveal reveal-delay-1">
              <div className="p-5 text-white bg-gradient-to-br from-[#6d28d9] to-[#8b5cf6]">
                <h3 className="font-bold text-lg text-white">Performance Analytics</h3>
                <p className="text-xs text-purple-100/90 mt-0.5">Historical metrics & trends</p>
              </div>
              <div className="divide-y divide-slate-100 text-slate-600">
                {[
                  { title: "Page views & sessions", desc: "With % change vs previous period" },
                  { title: "Visitor trend chart", desc: "Daily page views and sessions" },
                  { title: "Top 10 pages", desc: "Leaderboard with traffic share bars" },
                ].map((item, i) => (
                  <div key={i} className="px-5 py-4 text-xs font-medium leading-relaxed">
                    <strong className="block text-slate-900 text-sm font-bold mb-1">{item.title}</strong>
                    {item.desc}
                  </div>
                ))}
              </div>
            </div>

            {/* Audience Column */}
            <div className="bg-white border border-white/80 rounded-2xl shadow-[0_12px_40px_rgba(79,70,229,0.1)] hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden reveal reveal-delay-2">
              <div className="p-5 text-white bg-gradient-to-br from-[#0e7490] to-[#0891b2]">
                <h3 className="font-bold text-lg text-white">Audience Breakdown</h3>
                <p className="text-xs text-cyan-100/90 mt-0.5">Sources, geography & devices</p>
              </div>
              <div className="divide-y divide-slate-100 text-slate-600">
                {[
                  { title: "Traffic sources", desc: "Direct, Organic, Referral, Social" },
                  { title: "Countries", desc: "Donut chart with session breakdown" },
                  { title: "Devices", desc: "Desktop, mobile & tablet split" },
                ].map((item, i) => (
                  <div key={i} className="px-5 py-4 text-xs font-medium leading-relaxed">
                    <strong className="block text-slate-900 text-sm font-bold mb-1">{item.title}</strong>
                    {item.desc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="py-12 lg:py-16 relative overflow-hidden" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 max-w-3xl mx-auto reveal">
            <span className="text-xs font-bold text-indigo-600 tracking-wider mb-3 block">Key Features</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black text-slate-900 leading-tight tracking-tight mb-4">
              Corporate dashboard,<br />zero analytics jargon
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Auto-Sync Dashboard", desc: "Live stats every 30 seconds, full metrics every 5 minutes — no manual page reload required." },
              { icon: "📅", title: "Flexible Date Filters", desc: "Today, yesterday, this week, this month, 7/30/90 days, or custom date range." },
              { icon: "🔐", title: "Secure Google OAuth", desc: "One-click sign-in with read-only access. We never modify your Google Analytics data." },
              { icon: "📊", title: "Period Comparison", desc: "See % change vs the previous period for page views, sessions, and unique visitors." },
              { icon: "🏆", title: "Page Leaderboard", desc: "Top pages ranked with views, sessions, and share-of-traffic percentage bars." },
              { icon: "🌍", title: "Geographic Insights", desc: "Country-wise session breakdown with flags, donut chart, and progress bars." }
            ].map((feat, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-[0_12px_32px_rgba(79,70,229,0.1)] transition-all duration-300 hover:-translate-y-1 reveal">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-600 border border-indigo-100/50">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-[1.1rem] mb-2">{feat.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMPARE ═══ */}
      <section className="py-12 lg:py-16 relative overflow-hidden bg-gradient-to-b from-[#f1f5f9] to-[#f8fafc] border-y border-slate-100" id="compare">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 max-w-3xl mx-auto reveal">
            <span className="text-xs font-bold text-indigo-600 tracking-wider mb-3 block">Why Isarva Analytics</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black text-slate-905 leading-tight tracking-tight mb-4">
              From GA4 complexity to clarity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Old Way */}
            <div className="p-8 rounded-2xl border bg-[#fef2f2] border-[#fecaca] flex flex-col gap-6 reveal">
              <div>
                <span className="text-[10px] font-extrabold text-rose-600 tracking-wider bg-rose-50 border border-rose-100/50 px-2.5 py-1 rounded">
                  Without Isarva Analytics
                </span>
                <h3 className="text-xl font-bold text-slate-905 mt-3">Raw Google Analytics</h3>
              </div>
              <ul className="list-none flex flex-col gap-3.5 text-slate-600 text-sm font-medium">
                {["Complex interface for non-technical users", "No branded client-facing dashboard", "Manual exports and screenshots", "Delayed, non-live reporting"].map((li, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* New Way */}
            <div className="p-8 rounded-2xl border bg-gradient-to-br from-[#eff6ff] to-[#eef2ff] border-[#bfdbfe] flex flex-col gap-6 reveal">
              <div>
                <span className="text-[10px] font-extrabold text-indigo-600 tracking-wider bg-indigo-50 border border-indigo-100/50 px-2.5 py-1 rounded">
                  With Isarva Analytics
                </span>
                <h3 className="text-xl font-bold text-slate-905 mt-3">Your branded dashboard</h3>
              </div>
              <ul className="list-none flex flex-col gap-3.5 text-slate-600 text-sm font-medium">
                {["Plain-English metrics everyone understands", "Live visitors and pages viewed right now", "Auto-refresh — always up to date", "Beautiful UI your clients will love"].map((li, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-12 lg:py-16 relative overflow-hidden" id="setup">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 max-w-3xl mx-auto reveal">
            <span className="text-xs font-bold text-indigo-600 tracking-wider mb-3 block">How It Works</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black text-slate-900 leading-tight tracking-tight mb-4">
              Go live in 3 simple steps
            </h2>
            <p className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Connect your GA4 property and start seeing insights in under 2 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Sign in with Google', desc: 'Use the Google account with access to your GA4 property. Read-only OAuth — we never change your data.' },
              { num: '2', title: 'Select your property', desc: 'Pick your website from available GA4 properties, or enter the Property ID manually.' },
              { num: '3', title: 'View your dashboard', desc: 'Instant access to live visitors, trends, top pages, countries, sources, and devices.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white border border-[#e8ecf2] rounded-2xl p-8 text-center flex flex-col items-center shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(79,70,229,0.1)] transition-all duration-300 hover:-translate-y-1 reveal">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-sm bg-gradient-to-br from-[#4338ca] to-[#6366f1] mb-4 shadow-[0_4px_12px_rgba(79,70,229,0.25)]">
                  {step.num}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="py-20 lg:py-28 bg-slate-50/50 border-y border-slate-100" id="industries">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto reveal">
            <span className="text-xs font-bold text-indigo-600 tracking-wider mb-3 block">Who It&apos;s For</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black text-slate-905 leading-tight tracking-tight mb-4">
              Built for teams that care about <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">website performance</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: '🌐', label: 'Web Agencies' },
              { icon: '📣', label: 'Digital Marketing' },
              { icon: '🛒', label: 'E-Commerce' },
              { icon: '🏢', label: 'SaaS Companies' },
              { icon: '📰', label: 'Media & Blogs' },
              { icon: '🎓', label: 'Education' },
              { icon: '🏥', label: 'Healthcare' },
              { icon: '✨', label: 'Any GA4 Website' }
            ].map((ind, i) => (
              <div key={i} className="bg-white border border-[#e8ecf2] rounded-2xl p-5 text-center shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:border-[#c7d2fe] hover:-translate-y-[3px] transition-all duration-[250ms] flex flex-col items-center justify-center gap-2 reveal w-[125px] sm:w-[135px] shrink-0">
                <span className="text-2xl">{ind.icon}</span>
                <span className="text-slate-705 text-xs font-bold tracking-wide">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-12 lg:py-16 bg-[#f8fafc] border-t border-slate-100" id="faq">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 max-w-3xl mx-auto reveal">
            <span className="text-xs font-bold text-indigo-600 tracking-wider mb-3 block">FAQ</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black text-slate-905 leading-tight tracking-tight mb-4">
              Everything you need to know
            </h2>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-3 reveal">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden shadow-sm">
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-5 font-bold text-slate-800 text-left bg-transparent border-0 hover:bg-slate-50 transition-colors gap-4"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? "max-h-[250px] border-t border-slate-100" : "max-h-0"}`}>
                  <div className="p-5 text-sm text-slate-500 leading-relaxed bg-slate-50/50">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-12 lg:py-16 relative overflow-hidden bg-gradient-to-br from-[#2f2b6a] via-[#3d3885] to-[#334155] border-t border-indigo-500/25 text-white" id="cta">
        {/* Glow shapes */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-black text-white leading-tight mb-4">
            Ready to see your website<br />in a new light?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect Google Analytics and get live insights in minutes. Request a free demo or talk to our team.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14">
            <button onClick={() => setIsModalOpen(true)} className="press-illusion-btn-orange w-full sm:w-fit !inline-flex items-center justify-center space-x-2 font-bold px-10 py-5 text-sm tracking-wider">
              Request Free Demo
            </button>
            <button onClick={() => setIsModalOpen(true)} className="press-illusion-btn-white w-full sm:w-fit !inline-flex items-center justify-center space-x-2 font-bold px-10 py-5 text-sm tracking-wider bg-white text-slate-800">
              Contact Sales &rarr;
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 text-center max-w-3xl mx-auto">
            {[
              { val: "13+", label: "Metrics" },
              { val: "30s", label: "Live refresh" },
              { val: "GA4", label: "Official API" },
              { val: "3", label: "Step setup" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1 backdrop-blur-md bg-white/[0.09] border border-white/[0.14] rounded-2xl py-4 px-6 items-center">
                <strong className="text-white text-2xl font-black">{stat.val}</strong>
                <span className="text-indigo-200/70 text-[11px] font-bold tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX FOR ZOOM IMAGE */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 w-11 h-11 rounded-full border-0 bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center cursor-pointer transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            ×
          </button>
          <img
            src={lightboxImage}
            alt="Preview"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CONTACT FORM MODAL */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem="Analytics"
      />
    </div>
  );
}