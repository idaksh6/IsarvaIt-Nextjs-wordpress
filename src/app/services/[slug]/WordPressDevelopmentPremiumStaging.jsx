"use client";

import { useState } from "react";
import Link from "next/link";
import ContactFormModal from "../../components/ContactFormModal";

/* ─── Main Component ─────────────────────────────────── */
export default function WordPressDevelopmentPremiumStaging({ service, servicesData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Service features based on your content
  const stagingFeatures = [
    {
      title: "Migration to WordPress",
      description: "We manage complete website migrations while preserving your content, structure, and functionality without disruption.",
      icon: "🚀"
    },
    {
      title: "WordPress Theme Development",
      description: "Custom-built themes designed to match your brand while remaining flexible, scalable, and easy to maintain.",
      icon: "🎨"
    },
    {
      title: "Plugin Development",
      description: "Extend functionality with custom plugins built specifically to meet your business needs.",
      icon: "⚙️"
    },
    {
      title: "Feature Enhancement",
      description: "Enhance your existing website with new features that improve usability and add real value.",
      icon: "✨"
    },
    {
      title: "Speed Optimisation",
      description: "Improve loading speed and responsiveness by resolving performance issues across your website.",
      icon: "⚡"
    },
    {
      title: "Support & Maintenance",
      description: "Keep your website updated, secure, and running smoothly with ongoing support and maintenance.",
      icon: "🔧"
    },
    {
      title: "WordPress Multisite Development",
      description: "Manage multiple websites efficiently using a centralized and scalable multisite setup.",
      icon: "🏢"
    },
    {
      title: "Security & Performance Monitoring",
      description: "Protect your website with regular monitoring, updates, and proactive issue resolution.",
      icon: "🛡️"
    }
  ];

  return (
    <>
      <style>{`
        .wp-aurora-gradient {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #fdfcff 100%);
        }
        .wp-blue-text-gradient {
          background: linear-gradient(90deg, #0284c7, #2563eb, #7c3aed, #0284c7);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
        }
        @keyframes shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .float-animation-delayed {
          animation: float 6s ease-in-out 3s infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .image-card {
          border: 4px solid white;
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1);
          border-radius: 24px;
          overflow: hidden;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.6);
        }
        .aurora-mesh {
          background-image: 
            radial-gradient(at 10% 20%, rgba(56, 189, 248, 0.15) 0px, transparent 50%),
            radial-gradient(at 90% 80%, rgba(124, 58, 237, 0.1) 0px, transparent 50%),
            radial-gradient(at 50% 50%, rgba(37, 99, 235, 0.05) 0px, transparent 50%);
        }
        .growth-engine-card {
           background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%);
           border: 1px solid rgba(255,255,255,0.4);
           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .growth-engine-card:hover {
           transform: translateY(-8px);
           box-shadow: 0 25px 50px -12px rgba(37,99,235,0.15);
           border-color: rgba(37,99,235,0.3);
        }
        .wp-gradient-section {
          background: linear-gradient(180deg, #ffffff 0%, #f0f9ff 50%, #ffffff 100%);
        }
        .bento-card {
          position: relative;
          background: white;
          border: 1px solid rgba(226, 232, 240, 0.8);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          overflow: hidden;
        }
        .bento-card:hover {
          transform: translateY(-5px) scale(1.02);
          border-color: rgba(37, 99, 235, 0.3);
          box-shadow: 0 40px 80px -20px rgba(37, 99, 235, 0.15);
        }
        .bento-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: radial-gradient(circle at top right, rgba(37, 99, 235, 0.05), transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .bento-card:hover::before {
          opacity: 1;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .text-glow {
          text-shadow: 0 0 20px rgba(37, 99, 235, 0.2);
        }
      `}</style>

      <div className="bg-white min-h-screen font-sans overflow-hidden">
        {/* ─── HERO SECTION ────────────────────── */}
        <section className="wp-aurora-gradient relative pt-24 lg:pt-48 pb-20 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 aurora-mesh pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-200/40 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[120px]" />

          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 w-full">
            <div className="flex flex-wrap items-center gap-2 text-sm text-sky-700 mb-8 justify-center lg:justify-start font-medium pt-8 lg:pt-0">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-blue-800 font-bold">WordPress Development</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-sky-100 text-sky-800 font-bold text-xs sm:text-sm mb-6 shadow-md">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
                  </span>
                  Enterprise WordPress Specialists
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 mb-6 lg:mb-8 leading-[1.15] lg:leading-[1.1] tracking-tight">
                  Modern WordPress <br className="hidden sm:block" />
                  <span className="wp-blue-text-gradient">Engineered for Performance</span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                  We don't just build websites; we engineer data-driven digital assets. Our custom WordPress solutions prioritize conversion, speed, and uncompromising security.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12 lg:mb-0">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-base sm:text-lg font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-blue-200 hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    Start Your Project
                  </button>
                  <Link
                    href="#what-we-offer"
                    className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white hover:bg-sky-50 text-blue-800 text-base sm:text-lg font-bold rounded-2xl transition-all duration-300 shadow-sm border border-sky-100 text-center"
                  >
                    View Services
                  </Link>
                </div>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="absolute -inset-10 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-[80px] rounded-full" />
                <div className="relative h-[300px] sm:h-[400px] lg:h-[550px] w-full">
                  <div className="absolute top-0 right-0 w-[90%] lg:w-[480px] h-[85%] lg:h-[480px] image-card float-animation z-10 border-4 sm:border-8 border-white/50 backdrop-blur-sm">
                    <img src="/wp_hero_aurora.png" alt="WordPress Engineering" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-4 left-0 w-[60%] lg:w-[280px] h-[50%] lg:h-[220px] image-card float-animation-delayed z-20 shadow-2xl border-2 sm:border-4 border-white">
                    <img src="/wp_hero_floating_aurora.png" alt="Code Quality" className="w-full h-full object-cover" />
                  </div>

                  {/* Floating Analytics Badge */}
                  <div className="absolute -right-2 top-1/2 glass-panel p-4 sm:p-6 rounded-[24px] sm:rounded-3xl z-30 shadow-2xl hidden sm:block border border-white/80">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        <span className="text-xs sm:text-sm font-bold text-gray-800">Uptime 99.9%</span>
                      </div>
                      <div className="text-lg sm:text-2xl font-black text-blue-600">SEO Optimized</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── EVERYTHING YOU NEED ────────────────────────── */}
        <section className="wp-gradient-section py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.05),transparent_50%)]" />
          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider mb-6 border border-blue-100">
                Full-Suite Solutions
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-[1.2]">
                Everything Your WordPress Site Needs <br className="hidden lg:block" />
                <span className="text-blue-600">Under One Roof</span>
              </h2>
              <div className="w-20 lg:w-24 h-1.5 lg:h-2 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { title: "Strategic Design", desc: "User-centric UI/UX that drives engagement.", icon: "🎨" },
                { title: "Rapid Performance", desc: "Engineering for lightning-fast load times.", icon: "⚡" },
                { title: "Secure Infrastructure", desc: "Hardened security for peace of mind.", icon: "🛡️" },
                { title: "Scalable Growth", desc: "Built to expand as your business evolves.", icon: "📈" }
              ].map((item, i) => (
                <div key={i} className="glass-panel p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] hover:shadow-2xl transition-all duration-500 group border border-white/50">
                  <div className="text-3xl sm:text-4xl mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── GROWTH ENGINES SECTION ──────────────────────────── */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative hidden sm:block">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-indigo-500 blur-[60px] opacity-20" />
                <div className="relative rounded-[40px] overflow-hidden shadow-3xl border-8 border-white">
                  <img src="/wp_growth_aurora.png" alt="Growth Engines" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
                </div>
              </div>

              <div className="text-center lg:text-left">
                <div className="w-12 sm:w-16 h-1 bg-blue-600 mb-6 sm:mb-8 mx-auto lg:mx-0" />
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 leading-[1.2] lg:leading-tight">
                  We Don't Just Build Websites.<br />
                  <span className="text-blue-600 font-black">We Build Growth Engines.</span>
                </h2>
                <p className="text-base sm:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-10">
                  A website is more than a digital brochure—it’s your most powerful sales asset. We engineer WordPress ecosystems that synchronize with your business goals.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mt-10">
                  <div className="group cursor-default relative pl-6 transition-all duration-500">
                    <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)] group-hover:scale-150 transition-transform duration-300" />
                    <h4 className="text-lg sm:text-xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">Conversion Focus</h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed group-hover:text-gray-700 transition-colors duration-300">Turning browsers into buyers through data-driven UX.</p>
                  </div>

                  <div className="group cursor-default relative pl-6 transition-all duration-500">
                    <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.8)] group-hover:scale-150 transition-transform duration-300" />
                    <h4 className="text-lg sm:text-xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 mb-2">Lead Automation</h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed group-hover:text-gray-700 transition-colors duration-300">Smarter workflows for better business results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="what-we-offer" className="py-20 lg:py-32 bg-slate-50/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-wider mb-6 border border-blue-100">
                Core Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
                Modern Solutions <br className="hidden sm:block" />
                <span className="text-blue-600">Engineered for Success</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-500 font-medium">Premium WordPress expertise tailored to enterprise ambitions.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
              {/* Row 1 & 2 Left - Migration */}
              <div className="lg:col-span-4 lg:row-span-2 bento-card group rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-auto lg:min-h-[450px]">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-xl shadow-sm">🚀</div>
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-4 leading-tight">Migration to WordPress</h4>
                  <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed">We manage complete website migrations while preserving your content, structure, and functionality without disruption.</p>
                </div>
                <div className="absolute bottom-6 right-8 text-7xl opacity-[0.03] group-hover:opacity-[0.1] transition-opacity pointer-events-none hidden sm:block">🚀</div>
              </div>

              {/* Row 1 Middle & Right - Themes/Plugins */}
              <div className="lg:col-span-4 bento-card group rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between">
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 text-lg">🎨</div>
                  <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-2">Theme Development</h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">Custom-built themes designed to match your brand and scale.</p>
                </div>
              </div>
              <div className="lg:col-span-4 bento-card group rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between">
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 text-lg">⚙️</div>
                  <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-2">Plugin Development</h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">Extend functionality with custom plugins built for your needs.</p>
                </div>
              </div>

              {/* Row 2 Right - Feature Enhancement */}
              <div className="lg:col-span-8 bento-card group rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl sm:text-3xl shrink-0">✨</div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">Feature Enhancement</h4>
                  <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed">Enhance your existing website with new features that improve usability and add real value.</p>
                </div>
              </div>

              {/* Row 3 - Speed/Support/Insight */}
              <div className="lg:col-span-3 bento-card group rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 text-lg">⚡</div>
                <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-2">Speed Optimisation</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-medium font-semibold text-blue-600 uppercase tracking-wider mt-1">Sub-2s load times</p>
              </div>
              <div className="lg:col-span-3 bento-card group rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 text-lg">🔧</div>
                <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-2">AMC Support</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-medium font-semibold text-blue-600 uppercase tracking-wider mt-1">Ongoing maintenance</p>
              </div>
              <div className="lg:col-span-6 bento-card group rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 flex flex-row items-center justify-between">
                <div className="relative z-10 pr-4">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 mb-1 lg:mb-2">Expert Insight</h4>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed">99.9% Uptime guaranteed for enterprise clients.</p>
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm shrink-0">📈</div>
              </div>

              {/* Row 4 - Multisite/Security */}
              <div className="lg:col-span-8 bento-card group rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl sm:text-3xl shrink-0">🏢</div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">Multisite Development</h4>
                  <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed">Manage multiple websites efficiently using a centralized and scalable setup.</p>
                </div>
              </div>
              <div className="lg:col-span-4 bento-card group rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 text-lg">🛡️</div>
                <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-2">Security Monitoring</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">Military-grade protection and real-time threat response.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── AMBITION SECTION ────────────────────────── */}
        <section id="portfolio" className="py-24 lg:py-40 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
                <div className="relative rounded-[48px] overflow-hidden shadow-3xl border-8 border-white group">
                  <img src="/wp_ambition_aurora.png" alt="Ambition" className="w-full h-[400px] sm:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />

                  {/* Floating Analytics Badge (Now visible and enhanced) */}
                  <div className="absolute top-8 right-4 sm:-right-8 glass-panel p-5 sm:p-8 rounded-[24px] sm:rounded-[32px] shadow-2xl border-2 border-white/95 ws-float1 z-30">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="text-blue-600 text-3xl sm:text-5xl font-black tracking-tighter">98%</div>
                      <div className="h-8 sm:h-12 w-px bg-blue-100" />
                      <div className="text-gray-900 text-[10px] sm:text-sm font-bold uppercase tracking-widest leading-tight">
                        Efficiency <br /> Gain
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-bold text-[10px] uppercase tracking-wider mb-6 border border-indigo-100">
                  Our Philosophy
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
                  Built For <br />
                  <span className="text-blue-600">Pure Ambition</span>
                </h2>

                <p className="text-base sm:text-xl text-gray-500 leading-relaxed mb-10 font-medium">
                  We believe in practical innovation. Every custom WordPress site we build is balanced with performance, usability, and long-term reliability.
                </p>

                <div className="space-y-4 pt-10 border-t border-gray-100">
                  {[
                    "Zero-debt engineering practices",
                    "API-first headless possibilities",
                    "Hardened enterprise security"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-gray-900 font-bold text-sm sm:text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── INTEGRATIONS SECTION ───────────────────────────────────── */}
        <section className="py-24 bg-slate-50 relative border-y border-slate-100 overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center relative z-10 mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">Ecosystem Connectivity</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
              We turn WordPress into a hub. Connect seamlessly to CRM, ERP, and the marketing platforms that power your business.
            </p>
          </div>

          <div className="relative flex overflow-hidden">
            <div className="marquee-track flex gap-4 sm:gap-6 py-4">
              {[
                { name: "SEO Insights", icon: "🔍" },
                { name: "Salesforce/CRM", icon: "🤝" },
                { name: "Real-time BI", icon: "📊" },
                { name: "Email Automation", icon: "✉️" },
                { name: "Custom APIs", icon: "🔗" },
                { name: "Google Analytics", icon: "📉" },
                { name: "Stripe", icon: "💳" }
              ].concat([
                { name: "SEO Insights", icon: "🔍" },
                { name: "Salesforce/CRM", icon: "🤝" },
                { name: "Real-time BI", icon: "📊" },
                { name: "Email Automation", icon: "✉️" },
                { name: "Custom APIs", icon: "🔗" },
                { name: "Google Analytics", icon: "📉" },
                { name: "Stripe", icon: "💳" }
              ]).map((tool, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 flex items-center gap-4 hover:border-blue-300 transition-colors cursor-default shrink-0 min-w-[200px] sm:min-w-[280px]">
                  <div className="text-3xl sm:text-4xl">{tool.icon}</div>
                  <div className="font-extrabold text-gray-900 text-sm sm:text-lg tracking-tight uppercase">{tool.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ SECTION ────────────────────────── */}
        <section className="py-24 bg-gradient-to-b from-white via-[#f0f9ff] to-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-wider mb-6 border border-blue-100">
                Common Questions
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-6">
                Everything You Need to Know
              </h2>
              <p className="text-base sm:text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                Get quick answers about our WordPress development process and services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <FaqAccordion />
            </div>
          </div>
        </section>

        {/* ─── EXPLORE MORE SERVICES SECTION ────────────────────────── */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-wider mb-6 border border-blue-100">
                Expansion
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                Explore More Services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {servicesData
                .filter(s => s.slug !== service.slug)
                .slice(0, 3)
                .map((srv, i) => (
                  <Link
                    key={i}
                    href={`/services/${srv.slug}`}
                    className="group"
                  >
                    <div className="h-full bento-card rounded-[32px] p-8 lg:p-10 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
                      <div>
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                          {srv.icon || "✨"}
                        </div>
                        <h4 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{srv.title}</h4>
                        <p className="text-gray-500 font-medium leading-relaxed line-clamp-3">{srv.shortDescription}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* ─── CTA SECTION ────────────────────────── */}
        <section className="py-12 bg-white pb-20 sm:pb-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="relative rounded-[40px] sm:rounded-[56px] overflow-hidden shadow-3xl h-[450px] sm:h-[500px] lg:h-[600px]">
              <img src="/wp_cta_aurora.png" alt="Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-transparent flex items-center">
                <div className="px-10 lg:px-24 max-w-2xl text-left">
                  <span className="text-sky-300 font-bold uppercase tracking-widest text-base mb-6 block">Ready for the Next Level?</span>
                  <h2 className="text-4xl lg:text-7xl font-black text-white mb-8 leading-tight">Your Trusted Development Partner</h2>
                  <p className="text-xl text-blue-100 mb-12 leading-relaxed font-medium">
                    Move beyond the ordinary. Let's build a WordPress platform that scales with your ambition.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-12 py-6 bg-white text-blue-900 text-xl font-bold rounded-2xl transition-all shadow-2xl hover:shadow-[0_20px_40px_rgba(255,255,255,0.3)] hover:scale-105 transform inline-flex items-center gap-4"
                  >
                    Hire Our Experts
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <div className="relative border-t border-gray-100 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[800px] h-[100px] sm:h-[200px] bg-blue-50/30 blur-[80px] sm:blur-[120px]" />
          <div className="max-w-7xl mx-auto px-6 py-12 sm:py-20 text-center relative z-10">
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-medium">
              © Isarva Infotech. We create high-performance WordPress ecosystems that drive impact and deliver results.
            </p>
          </div>
        </div>
      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Service"
        preSelectedItem="WordPress Development"
        allItems={servicesData}
      />
    </>
  );
}

const faqData = [
  {
    question: "How long does a custom WordPress site migration take?",
    answer: "A standard migration typically takes 1-2 weeks, depending on content volume and site complexity. We ensure zero downtime during the process.",
    icon: "🚀"
  },
  {
    question: "Do you build custom themes or use pre-made ones?",
    answer: "We specialize in 100% custom-designed WordPress themes built from the ground up for performance, security, and unique brand identity.",
    icon: "🎨"
  },
  {
    question: "Can you optimize my existing WordPress site for speed?",
    answer: "Yes, we perform deep performance audits and implement server-side caching, image optimization, and code minification to achieve sub-2s load times.",
    icon: "⚡"
  },
  {
    question: "What kind of ongoing support do you offer?",
    answer: "We offer comprehensive Annual Maintenance Contracts (AMC) covering security patches, plugin updates, content management, and performance monitoring.",
    icon: "🔧"
  }
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqData.map((faq, index) => (
        <div 
          key={index}
          className={`border-2 rounded-[24px] overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-blue-500 shadow-lg' : 'border-gray-100 hover:border-gray-200'}`}
        >
          <button
            onClick={() => toggleFaq(index)}
            className="w-full flex items-center justify-between p-6 lg:p-8 text-left bg-white"
          >
            <div className="flex items-center gap-5">
              <span className="text-2xl">{faq.icon}</span>
              <span className="text-lg lg:text-xl font-black text-gray-900">{faq.question}</span>
            </div>
            <div className={`w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-blue-500' : ''}`}>
              <svg 
                className={`w-4 h-4 ${openIndex === index ? 'text-white' : 'text-blue-600'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={openIndex === index ? "M20 12H4" : "M12 4v16m8-8H4"} />
              </svg>
            </div>
          </button>
          
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[500px] border-t border-gray-50' : 'max-h-0'}`}>
            <div className="p-6 lg:p-8 bg-white">
              <p className="text-gray-500 font-medium text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
