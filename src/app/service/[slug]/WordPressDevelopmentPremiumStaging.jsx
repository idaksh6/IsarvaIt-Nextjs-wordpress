"use client";

import { useState } from "react";
import Link from "next/link";
import ContactFormModal from "../../components/ContactFormModal";

/* ─── Main Component ─────────────────────────────────── */
export default function WordPressDevelopmentPremiumStaging({ service, servicesData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(2deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
        .wp-float1 { animation: float 6s ease-in-out infinite; }
        .wp-float2 { animation: float2 8s ease-in-out infinite; }
        .image-card {
          border: 4px solid white;
          box-shadow: 0 24px 50px -12px rgba(37, 99, 235, 0.15);
          border-radius: 24px;
          overflow: hidden;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 8px 32px rgba(37, 99, 235, 0.08);
        }
        .aurora-mesh {
          background-image:
            radial-gradient(at 10% 20%, rgba(56, 189, 248, 0.15) 0px, transparent 50%),
            radial-gradient(at 90% 80%, rgba(124, 58, 237, 0.1) 0px, transparent 50%),
            radial-gradient(at 50% 50%, rgba(37, 99, 235, 0.05) 0px, transparent 50%);
        }
        .hero-grid {
          background-image: radial-gradient(#e0f2fe 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .image-3d-wrapper {
          perspective: 2000px;
        }
        .image-3d-card {
          transform: rotateY(-15deg) rotateX(10deg);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .image-3d-card:hover {
          transform: rotateY(-5deg) rotateX(5deg) scale(1.02);
        }
        .decorative-blob {
          filter: blur(80px);
          opacity: 0.4;
          animation: float 10s ease-in-out infinite alternate;
        }
        .premium-button {
          background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 10px 30px -5px rgba(37, 99, 235, 0.3);
        }
        .premium-button:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 50px -10px rgba(37, 99, 235, 0.5);
          filter: brightness(1.1);
        }
        .floating-badge-v2 {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(37, 99, 235, 0.15);
          box-shadow: 0 15px 45px -10px rgba(0, 0, 0, 0.08);
          animation: float 5s ease-in-out infinite;
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
        .process-step {
          position: relative;
          transition: all 0.3s ease;
        }
        .process-step:hover {
          transform: translateY(-4px);
        }
        .process-connector {
          position: absolute;
          top: 28px;
          right: -50%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #bfdbfe, #e0f2fe);
          z-index: 0;
        }
        .premium-cta {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .premium-cta:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 40px -10px rgba(37, 99, 235, 0.4);
        }
        .premium-cta::after {
          content: "";
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: rotate(45deg);
          transition: 0.6s;
          opacity: 0;
        }
        .premium-cta:hover::after {
          left: 100%;
          opacity: 1;
        }
        .shimmer-title {
          background: linear-gradient(90deg, #2563eb, #7c3aed, #0284c7, #2563eb);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shine 3s linear infinite;
        }
      `}</style>

      <div className="bg-white min-h-screen font-sans overflow-hidden">

        {/* ─── HERO SECTION ────────────────────── */}
        <section className="wp-aurora-gradient relative pt-24 lg:pt-48 pb-16 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 aurora-mesh pointer-events-none" />
          <div className="absolute inset-0 hero-grid opacity-[0.2] pointer-events-none" />

          {/* Floating diagnostic widgets */}
          <div className="absolute top-48 right-24 wp-float1 hidden xl:block z-10">
            <div className="glass-panel rounded-2xl px-5 py-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-xl">⚡</div>
              <div>
                <div className="text-gray-900 text-xs font-bold uppercase tracking-wider">Page Speed</div>
                <div className="text-blue-600 font-black text-lg">98/100</div>
              </div>
            </div>
          </div>


          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 w-full">
            <div className="flex flex-wrap items-center gap-2 text-sm text-sky-700/60 mb-10 justify-center lg:justify-start font-medium pt-8 lg:pt-0">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <svg className="w-2.5 h-2.5 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
              <svg className="w-2.5 h-2.5 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-100/50">{service.title || "WordPress Development"}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <div className="relative inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border border-blue-100/50 mb-8 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-black text-xs uppercase tracking-[0.2em]">Premium Engineering</span>
                </div>

                <div className="relative">
                  <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-black text-gray-900 mb-6 leading-[1] tracking-tight">
                    <span className="shimmer-title inline-block py-2">WordPress</span> <br />
                    Built for <br />
                    <span className="text-[clamp(1.5rem,4vw,3.5rem)] bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-bold">Performance & Growth</span>
                  </h1>
                </div>

                <div className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-medium border-l-2 border-blue-200 pl-8 space-y-4">
                  <p>At Isarva, we don’t ‘do’ WordPress development, we <span className="text-blue-600 font-bold">live and breathe it</span>. We combine our <span className="text-indigo-600 font-bold">technical, creative and marketing expertise</span> with our dedicated support to bring you simply <span className="text-blue-600 font-bold">outstanding WordPress development services</span>.</p>
                </div>

                <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn-premium-orange group !px-6 !py-3 sm:!px-8 sm:!py-4 !text-sm sm:!text-base mt-2"
                  >
                    <div className="shimmer"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      Book a Free Consultation
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </button>

                  <Link
                    href="#what-we-offer"
                    className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-blue-800 bg-white border border-blue-100 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
                  >
                    View Services
                  </Link>
                </div>

                <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 justify-center lg:justify-start">
                  <div className="group p-4 sm:p-5 rounded-[24px] bg-white border border-blue-50 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 relative truncate">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-blue-50/50 rounded-bl-3xl -z-10 transition-transform group-hover:scale-110" />
                    <span className="block text-2xl sm:text-3xl font-black bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">100%</span>
                    <span className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Quality</span>
                  </div>
                  <div className="group p-4 sm:p-5 rounded-[24px] bg-white border border-blue-50 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 relative truncate">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-indigo-50/50 rounded-bl-3xl -z-10 transition-transform group-hover:scale-110" />
                    <span className="block text-2xl sm:text-3xl font-black bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">A+</span>
                    <span className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Speed</span>
                  </div>
                  <div className="group p-4 sm:p-5 rounded-[24px] bg-white border border-blue-50 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 relative truncate">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-sky-50/50 rounded-bl-3xl -z-10 transition-transform group-hover:scale-110" />
                    <span className="block text-2xl sm:text-3xl font-black bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">24/7</span>
                    <span className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Support</span>
                  </div>
                </div>
              </div>

              <div className="relative mt-12 lg:mt-0 image-3d-wrapper">
                {/* Decorative Blobs */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400 rounded-full decorative-blob" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-300 rounded-full decorative-blob" style={{ animationDelay: '-5s' }} />

                <div className="relative h-[300px] sm:h-[450px] lg:h-[600px] w-full px-4 sm:px-0">
                  <div className="absolute top-0 right-4 lg:right-0 w-[80%] lg:w-[500px] h-[80%] lg:h-[500px] image-card image-3d-card z-10 border-4 sm:border-8 border-white shadow-2xl">
                    <img src="/wp_hero_aurora.png" alt="WordPress Engineering" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent" />
                  </div>

                  <div className="absolute bottom-2 left-4 lg:-bottom-6 lg:-left-6 w-[55%] lg:w-[250px] h-[50%] lg:h-[280px] image-card wp-float2 z-20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-2 sm:border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img src="/wp_hero_floating_new.png" alt="Code Quality" className="w-full h-full object-cover" />
                  </div>

                  {/* Floating Tech Tag */}
                  <div className="absolute top-1/2 -right-8 glass-panel px-6 py-4 rounded-3xl z-30 shadow-2xl hidden xl:flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold italic shadow-lg">W</div>
                    <div>
                      <div className="text-gray-900 text-xs font-black uppercase tracking-widest">Next-Gen</div>
                      <div className="text-blue-600 font-bold">Architecture</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TECHNOLOGY MARQUEE ────────────────────── */}
        <section className="py-10 bg-white/50 border-y border-slate-100 overflow-hidden relative">
          <div className="marquee-track flex items-center gap-12 sm:gap-24 opacity-40 hover:opacity-80 transition-opacity duration-500">
            {[
              "WordPress", "PHP", "MySQL", "WooCommerce", "ACF Pro", "Elementor",
              "Next.js", "REST API", "GraphQL", "Tailwind CSS", "JavaScript"
            ].map((tech, i) => (
              <div key={i} className="flex items-center gap-3 whitespace-nowrap">
                <span className="text-xl font-black text-blue-900/40 tracking-tighter uppercase italic">{tech}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              </div>
            ))}
            {[
              "WordPress", "PHP", "MySQL", "WooCommerce", "ACF Pro", "Elementor",
              "Next.js", "REST API", "GraphQL", "Tailwind CSS", "JavaScript"
            ].map((tech, i) => (
              <div key={i + 100} className="flex items-center gap-3 whitespace-nowrap">
                <span className="text-xl font-black text-blue-900/40 tracking-tighter uppercase italic">{tech}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              </div>
            ))}
          </div>
        </section>

        {/* ─── SERVICES GRID SECTION (8 ICONS) ────────────────────── */}
        <section id="what-we-offer" className="py-16 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.02),transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
            <div className="text-center mb-10 lg:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider mb-6 border border-blue-100">
                What We Offer
              </div>
              <h2 className="text-gray-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
                Explore Our WordPress <span className="text-blue-600">Development Services</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-500 font-medium max-w-2xl mx-auto">
                Comprehensive solutions to build, optimize, and scale your WordPress ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { title: "Migration to WordPress", icon: "🚀", desc: "Effortless transition with minimal disruption and enhanced features." },
                { title: "Theme Development", icon: "🎨", desc: "Stunning, customized themes that enhance aesthetics and functionality." },
                { title: "Plugin Development", icon: "⚙️", desc: "Custom plugins designed to add powerful features and integrations." },
                { title: "Ecommerce Solution", icon: "🛒", desc: "Boost sales with robust, user-friendly WordPress shop solutions." },
                { title: "Feature Enhancement", icon: "✨", desc: "Upgrade your site with new functionalities to keep it dynamic." },
                { title: "Speed Optimisation", icon: "⚡", desc: "Improve performance with expert speed and Core Web Vital tuning." },
                { title: "Support & Maintenance", icon: "🔧", desc: "Ensure your site runs smoothly with our comprehensive support." },
                { title: "Multisite Development", icon: "🏢", desc: "Manage multiple websites efficiently with centralized setups." }
              ].map((s, i) => (
                <div key={i} className="group p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 transform hover:-translate-y-1 flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mx-auto lg:mx-0">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-3 leading-tight">{s.title}</h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>




        {/* ─── FIGMA TO WORDPRESS SECTION ──────────────────────────── */}
        <section className="py-16 lg:py-32 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(37,99,235,0.05),transparent_60%)]" />
          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-20">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider mb-6 border border-blue-100">
                  Figma to WordPress
                </div>
                <h2 className="text-gray-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
                  Your Design, <br className="hidden sm:block" />
                  <span className="text-blue-600">Brought to Life.</span>
                </h2>
                <p className="text-base sm:text-xl text-gray-500 font-medium leading-relaxed mb-6">
                  We take your Figma designs and convert them into fast, fully responsive WordPress websites — pixel-perfect, mobile-first, and built with clean handcrafted code. No shortcuts, no bloated page builders.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-xl">
                  <p className="text-sm font-bold text-blue-900 leading-relaxed">
                    <span className="text-xl mr-2">🎨</span>
                    Don't have a design yet? Our UI/UX team can design your premium Figma file from scratch before we start building.
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-premium-orange group !px-6 !py-3 sm:!px-10 sm:!py-4 !text-base sm:!text-lg mt-4"
                >
                  <div className="shimmer"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Convert or Design Your Site
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-6">
                <div className="flex-1 bg-slate-50 border border-slate-200 rounded-[24px] p-6 text-center group hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    <svg viewBox="0 0 38 57" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE" />
                      <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83" />
                      <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262" />
                      <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E" />
                      <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF" />
                    </svg>
                  </div>
                  <div className="text-sm font-black text-gray-900 mb-1">Figma Design</div>
                  <div className="text-xs text-gray-400 font-medium">Your design file</div>
                </div>

                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="flex items-center gap-1">
                    {[0, 1, 2].map(i => (
                      <div key={i} className="w-2 h-2 rounded-full bg-blue-200" style={{ opacity: 0.4 + i * 0.3 }} />
                    ))}
                  </div>
                  <svg className="w-8 h-8 text-blue-500 rotate-90 sm:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest">We convert</div>
                </div>

                <div className="flex-1 bg-blue-600 rounded-[24px] p-6 text-center group hover:bg-blue-700 transition-all duration-300 hover:shadow-xl shadow-lg shadow-blue-200">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                    <svg viewBox="0 0 512 512" className="w-9 h-9 fill-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"></path>
                    </svg>
                  </div>
                  <div className="text-sm font-black text-white mb-1">WordPress Site</div>
                  <div className="text-xs text-blue-200 font-medium">Live & responsive</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mt-16">
              {[
                {
                  icon: "🎯",
                  title: "Pixel-Perfect Accuracy",
                  desc: "Every spacing, font, colour, and component is translated from Figma to WordPress with exact fidelity — what you design is what goes live.",
                  stat: "100%",
                  statLabel: "Design fidelity"
                },
                {
                  icon: "⚡",
                  title: "Fast Turnaround",
                  desc: "We move quickly without cutting corners. Most Figma-to-WordPress conversions are delivered within 5–10 business days depending on complexity.",
                  stat: "5–10",
                  statLabel: "Turnaround"
                },
                {
                  icon: "📱",
                  title: "Responsive & Mobile-First",
                  desc: "Every converted site is built mobile-first — flawlessly adapting across phones, tablets, and desktops with no extra effort from you.",
                  stat: "All",
                  statLabel: "Screen sizes"
                }
              ].map((card, i) => (
                <div key={i} className="bento-card rounded-[24px] sm:rounded-[32px] p-8 sm:p-10 group flex flex-col justify-between items-center text-center lg:items-start lg:text-left">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-2xl group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 mx-auto lg:mx-0">
                      {card.icon}
                    </div>
                    <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-3">{card.title}</h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{card.desc}</p>
                  </div>
                  <div className="mt-6 pt-5 border-t border-gray-100 flex items-baseline gap-2">
                    <span className="text-2xl font-black text-blue-600">{card.stat}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{card.statLabel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WORDPRESS ECOSYSTEM DIAGRAM ────────────────────────── */}
        <section className="py-16 lg:py-32 bg-white relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.04),transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
            <div className="text-center mb-10 lg:mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider mb-6 border border-blue-100">
                Architecture
              </div>
              <h2 className="text-gray-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
                Your WordPress <span className="text-blue-600">Ecosystem</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-500 font-medium max-w-2xl mx-auto">
                How we connect every layer of your digital infrastructure — from design to data.
              </p>
            </div>

            {/* Desktop Diagram (lg+) */}
            <div className="hidden lg:block relative w-full pt-10">
              <div className="flex justify-around items-end mb-0 px-4">
                {[
                  { label: "Figma Design", icon: "🎨", color: "bg-purple-50 border-purple-200 text-purple-700" },
                  { label: "Brand Guidelines", icon: "📐", color: "bg-amber-50 border-amber-200 text-amber-700" },
                  { label: "Existing Site", icon: "🌐", color: "bg-sky-50 border-sky-200 text-sky-700" },
                  { label: "Custom Requirements", icon: "📋", color: "bg-green-50 border-green-200 text-green-700" }
                ].map((node, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 w-1/4 px-2">
                    <div className={`border rounded-[16px] px-3 py-2.5 text-center text-xs font-black w-full ${node.color}`}>
                      <div className="text-lg mb-1">{node.icon}</div>
                      {node.label}
                    </div>
                    <div className="w-0.5 h-8 bg-gray-200" />
                  </div>
                ))}
              </div>

              <div className="relative flex items-center px-[12.5%] mb-0">
                <div className="w-full h-0.5 bg-gradient-to-r from-purple-200 via-blue-300 to-green-200 rounded-full" />
              </div>

              <div className="flex justify-center my-0">
                <div className="w-0.5 h-8 bg-blue-300" />
              </div>
              <div className="flex justify-center mb-0">
                <div className="bg-blue-600 text-white rounded-[24px] px-10 py-6 text-center shadow-2xl shadow-blue-200 w-72 relative mx-auto">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-lg font-black">WordPress Core</div>
                  <div className="text-xs text-blue-200 font-medium mt-1 uppercase tracking-tighter">Enterprise Standard</div>
                  <div className="absolute -inset-1 rounded-[28px] border-2 border-blue-300/30 animate-pulse" />
                </div>
              </div>
              <div className="flex justify-center mb-0">
                <div className="w-0.5 h-8 bg-blue-300" />
              </div>

              <div className="relative flex items-center px-[12.5%] mb-0">
                <div className="w-full h-0.5 bg-gradient-to-r from-blue-200 via-indigo-300 to-blue-200 rounded-full" />
              </div>

              <div className="flex justify-around items-start mt-0 px-4">
                {[
                  { label: "Custom Theme", icon: "🎨", color: "bg-indigo-50 border-indigo-200 text-indigo-700" },
                  { label: "Plugins & APIs", icon: "🔗", color: "bg-blue-50 border-blue-200 text-blue-700" },
                  { label: "SEO & Analytics", icon: "📈", color: "bg-teal-50 border-teal-200 text-teal-700" },
                  { label: "CRM & Automations", icon: "🤝", color: "bg-rose-50 border-rose-200 text-rose-700" }
                ].map((node, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 w-1/4 px-2">
                    <div className="w-0.5 h-8 bg-gray-200" />
                    <div className={`border rounded-[16px] px-3 py-2.5 text-center text-xs font-black w-full ${node.color}`}>
                      <div className="text-lg mb-1">{node.icon}</div>
                      {node.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Vertical Stack */}
            <div className="lg:hidden flex flex-col items-center gap-6 pt-4">
              <div className="w-full space-y-3">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-center mb-4">Inputs & Sources</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Figma Design", icon: "🎨", color: "bg-purple-50 border-purple-200 text-purple-700" },
                    { label: "Brand Specs", icon: "📐", color: "bg-amber-50 border-amber-200 text-amber-700" },
                    { label: "Existing Site", icon: "🌐", color: "bg-sky-50 border-sky-200 text-sky-700" },
                    { label: "Custom Requirements", icon: "📋", color: "bg-green-50 border-green-200 text-green-700" }
                  ].map((node, i) => (
                    <div key={i} className={`border rounded-2xl p-4 text-center ${node.color}`}>
                      <div className="text-xl mb-1">{node.icon}</div>
                      <div className="text-[10px] font-black uppercase leading-tight">{node.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center py-2 opacity-30">
                <div className="w-0.5 h-10 bg-gradient-to-b from-purple-200 to-blue-400" />
                <svg className="w-6 h-6 text-blue-400 -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
              <div className="bg-blue-600 text-white rounded-[32px] px-8 py-8 text-center shadow-xl shadow-blue-100 w-full max-w-[280px] relative mx-auto">
                <div className="text-3xl mb-3">⚡</div>
                <div className="text-xl font-black mb-1 leading-tight tracking-tight">WordPress Core</div>
                <div className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">Enterprise Processing</div>
              </div>
              <div className="flex flex-col items-center py-2 opacity-30">
                <div className="w-0.5 h-10 bg-gradient-to-b from-blue-400 to-indigo-200" />
                <svg className="w-6 h-6 text-indigo-400 -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
              <div className="w-full space-y-3">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-center mb-4">Outputs & Integrations</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Custom Theme", icon: "🎨", color: "bg-indigo-50 border-indigo-200 text-indigo-700" },
                    { label: "Plugins & APIs", icon: "🔗", color: "bg-blue-50 border-blue-200 text-blue-700" },
                    { label: "SEO & Analytics", icon: "📈", color: "bg-teal-50 border-teal-200 text-teal-700" },
                    { label: "CRM & Auto", icon: "🤝", color: "bg-rose-50 border-rose-200 text-rose-700" }
                  ].map((node, i) => (
                    <div key={i} className={`border rounded-2xl p-4 text-center ${node.color}`}>
                      <div className="text-xl mb-1">{node.icon}</div>
                      <div className="text-[10px] font-black uppercase leading-tight">{node.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 mt-12 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <div className="w-4 h-0.5 bg-purple-200" /> Inputs
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <div className="w-4 h-0.5 bg-blue-400" /> Logic
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <div className="w-4 h-0.5 bg-indigo-200" /> Results
              </div>
            </div>
          </div>
        </section>

        {/* ─── BENTO CAPABILITIES SECTION ──────────────────────────── (Engineered for Success) */}
        <section className="py-16 lg:py-32 bg-slate-50 relative overflow-hidden border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-wider mb-6 border border-blue-100">
                Core Capabilities
              </div>
              <h2 className="text-gray-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
                Engineered for <span className="text-blue-600">Success</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-500 font-medium">Enterprise WordPress expertise tailored to your digital growth.</p>
            </div>

            <div className="relative p-1">
              {/* Premium Gradient Glow Shadow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 via-indigo-50 to-emerald-100 blur-3xl opacity-60 rounded-[48px] -z-10" />

              <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10 bg-white" style={{ gap: 0, border: '1px solid rgba(226,232,240,0.8)', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.05)' }}>
                {/* Box 1: Migration (Emerald) */}
                <div className="lg:col-span-4 lg:row-span-2 bento-card group p-6 sm:p-8 lg:p-10 lg:min-h-[420px] h-auto flex flex-col justify-between bg-gradient-to-br from-emerald-50/40 to-white items-center text-center lg:items-start lg:text-left border-b lg:border-b lg:border-r border-gray-100" style={{ borderRadius: 0, borderTop: 'none', borderLeft: 'none' }}>
                  <div className="relative z-10 flex flex-col items-center lg:items-start">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 text-2xl shadow-sm mx-auto lg:mx-0">🚀</div>
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-4 leading-tight">Migration to WordPress</h4>
                    <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed">We manage complete website migrations while preserving your content, structure, and functionality without disruption.</p>
                  </div>
                </div>

                {/* Box 2: Theme Development (Blue) */}
                <div className="lg:col-span-4 bento-card group p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-blue-50/40 to-white items-center text-center lg:items-start lg:text-left border-b lg:border-b lg:border-r border-gray-100" style={{ borderRadius: 0, borderTop: 'none', borderLeft: 'none' }}>
                  <div className="relative z-10 flex flex-col items-center lg:items-start">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm mx-auto lg:mx-0">🎨</div>
                    <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-2">Theme Development</h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">Custom-built themes designed to match your brand and scale effortlessly.</p>
                  </div>
                </div>

                {/* Box 3: Plugin Development (Violet) */}
                <div className="lg:col-span-4 bento-card group p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-violet-50/40 to-white items-center text-center lg:items-start lg:text-left border-b lg:border-b border-gray-100" style={{ borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
                  <div className="relative z-10 flex flex-col items-center lg:items-start">
                    <div className="w-11 h-11 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-5 text-xl group-hover:bg-violet-600 group-hover:text-white transition-all duration-500 shadow-sm mx-auto lg:mx-0">⚙️</div>
                    <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-2">Plugin Development</h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">Extend functionality with custom plugins built specifically for your business needs.</p>
                  </div>
                </div>

                {/* Box 4: Ecommerce Solution (Orange) */}
                <div className="lg:col-span-4 bento-card group p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-orange-50/40 to-white items-center text-center lg:items-start lg:text-left border-b lg:border-b lg:border-r border-gray-100" style={{ borderRadius: 0, borderTop: 'none', borderLeft: 'none' }}>
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-5 text-xl shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-sm mx-auto lg:mx-0">🛒</div>
                    <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-2">Ecommerce Solution</h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">Boost your sales with robust, user-friendly WordPress eCommerce solutions.</p>
                  </div>
                </div>

                {/* Box 5: Speed & Performance (Amber) */}
                <div className="lg:col-span-4 bento-card group p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-amber-50/40 to-white items-center text-center lg:items-start lg:text-left border-b lg:border-b border-gray-100" style={{ borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
                  <div className="relative z-10 flex flex-col items-center lg:items-start">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 text-xl group-hover:bg-amber-600 group-hover:text-white transition-all duration-500 shadow-sm mx-auto lg:mx-0">⚡</div>
                    <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-2">Speed & Performance</h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">Optimised for core web vitals and industry-leading load times.</p>
                  </div>
                </div>

                {/* Box 6: Multisite Development (Cyan) */}
                <div className="lg:col-span-8 bento-card group p-6 sm:p-10 flex flex-col lg:flex-row items-center lg:items-center gap-6 bg-gradient-to-r from-cyan-50/40 to-white text-center lg:text-left border-b lg:border-b-0 lg:border-r border-gray-100" style={{ borderRadius: 0, borderTop: 'none', borderLeft: 'none' }}>
                  <div className="w-16 h-16 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-3xl shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500 shadow-sm mx-auto lg:mx-0">🏢</div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">Multisite Development</h4>
                    <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed">Manage multiple websites efficiently using a centralised multisite setup for enterprise governance.</p>
                  </div>
                </div>

                {/* Box 7: Security & Support (Indigo) */}
                <div className="lg:col-span-4 bento-card group p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-indigo-50/40 to-white items-center text-center lg:items-start lg:text-left border-b-0" style={{ borderRadius: 0, border: 'none' }}>
                  <div className="relative z-10 flex flex-col items-center lg:items-start">
                    <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 text-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm mx-auto lg:mx-0">🔒</div>
                    <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-2">Technical SEO & Hardening</h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">Enterprise-grade security audits and advanced SEO architecture built-in.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ENTERPRISE SOLUTIONS SECTION ──────────────────────────── */}
        <section className="py-16 lg:py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
            <div className="text-center mb-10 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider mb-6 border border-blue-100">
                Enterprise Solutions
              </div>
              <h2 className="text-gray-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
                WordPress for <span className="text-blue-600">Growth</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-base sm:text-xl text-gray-600 leading-relaxed mb-8 text-center lg:text-left">
                  We design, develop, and operate high-scale WordPress platforms with centralized governance, robust security, and seamless data integrations.
                </p>

                <div className="mb-10 rounded-[48px] overflow-hidden shadow-2xl border-8 border-white float-animation relative group">
                  <img src="/wp_growth_clear_light_primary.png" alt="Enterprise Dashboard" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Websites & Relaunch",
                    "Multilingual Solutions",
                    "Maintenance & Support",
                    "Data Integration",
                    "Quality Assurance",
                    "Content Migration",
                    "Enterprise Security",
                    "Ecommerce & Shops"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
                      <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-sm font-bold text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-100/50 blur-3xl rounded-full" />
                <div className="relative rounded-[56px] overflow-hidden shadow-3xl border-8 border-white">
                  <img src="/wp_growth_secondary_light.png" alt="Enterprise Scalability" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-8 left-8 right-8 text-gray-900">
                    <p className="text-2xl font-black mb-2 leading-tight">Scale Without Limits</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600 font-black">Enterprise Infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PROCESS SECTION (SLIDER) ──────────────────────────── (CMS Migration Process) */}
        <ProcessSlider servicesData={servicesData} setIsModalOpen={setIsModalOpen} />

        {/* ─── WHAT WE'RE GOOD AT ────────────────────────── */}
        <section className="py-16 lg:py-32 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
              <div className="w-full lg:w-1/2">
                <h2 className="text-gray-900 mb-6 text-center lg:text-left text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
                  Things We're <br className="hidden lg:block" />
                  <span className="text-blue-600">Really Good At</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                  {[
                    { label: "WordPress Development", icon: "💻", color: "bg-blue-50 text-blue-700" },
                    { label: "Figma to WordPress", icon: "🎨", color: "bg-purple-50 text-purple-700" },
                    { label: "Performance Optimisation", icon: "⚡", color: "bg-amber-50 text-amber-700" },
                    { label: "Custom Build", icon: "⚙️", color: "bg-indigo-50 text-indigo-700" }
                  ].map((skill, i) => (
                    <div key={i} className="flex flex-col sm:flex-row items-center sm:items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-md transition-all duration-300 group text-center sm:text-left">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 ${skill.color} transition-transform group-hover:scale-110 mx-auto sm:mx-0`}>
                        {skill.icon}
                      </div>
                      <span className="text-sm font-black text-gray-900 leading-tight">{skill.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                {[
                  { icon: "🏆", title: "Enterprise quality", desc: "Built to the highest technical standards." },
                  { icon: "⚡", title: "Speed without shortcuts", desc: "Sub-2 second load times consistently." },
                  { icon: "🎯", title: "Pixel-perfect execution", desc: "We match design intent exactly." },
                  { icon: "🔒", title: "Security-first mindset", desc: "Hardened configurations and audits." }
                ].map((card, i) => (
                  <div key={i} className="bento-card rounded-[20px] p-5 group flex flex-col items-center text-center">
                    <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto">{card.icon}</div>
                    <h4 className="text-sm font-black text-gray-900 mb-1.5 leading-tight">{card.title}</h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* ─── AI-ENHANCED WORDPRESS ────────────────────────── */}
        <section className="py-16 lg:py-32 bg-white relative overflow-hidden border-y border-slate-100">
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-50/30 via-white to-transparent" />
          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
            <div className="text-center mb-10 lg:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-50 text-sky-600 font-bold text-xs uppercase tracking-wider mb-6 border border-sky-100">
                AI-Enhanced
              </div>
              <h2 className="text-gray-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
                Supercharged <span className="text-sky-500">with AI</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: "🤖", title: "Content Generation", desc: "Integrate GPT-powered tools directly into your dashboard." },
                  { icon: "🔍", title: "Smart Search", desc: "AI-powered semantic search that replaces basic WordPress search." },
                  { icon: "💬", title: "AI Chatbots", desc: "Intelligent support systems that qualify leads and book calls 24/7." },
                  { icon: "🎨", title: "Creative AI", desc: "Automated image and asset generation within your workflow." }
                ].map((card, i) => (
                  <div key={i} className="group relative bg-white border border-slate-100 hover:border-sky-300 rounded-[24px] p-8 transition-all duration-500 hover:shadow-xl shadow-sm flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="text-3xl mb-5 mx-auto lg:mx-0">{card.icon}</div>
                    <h4 className="text-lg font-black text-gray-900 mb-2">{card.title}</h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="absolute -inset-4 bg-sky-100/50 blur-3xl rounded-full animate-pulse" />
                <div className="relative rounded-[56px] overflow-hidden shadow-3xl aspect-square border-8 border-white group bg-slate-50">
                  <img src="/wp_process_launch_new.png" alt="Supercharged AI" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-95" />
                  <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-sky-400 to-blue-500 rounded-[24px] p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-sky-100">
              <p className="text-white font-black text-2xl">Ready to bring AI into your WordPress stack?</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-premium-orange group !px-6 !py-2.5 sm:!px-8 sm:!py-3 !text-base sm:!text-lg"
              >
                <div className="shimmer"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Explore AI Options
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* ─── CTA SECTION ────────────────────────── */}
        <section className="py-12 bg-white pb-16 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="relative rounded-[56px] overflow-hidden shadow-3xl h-[500px] lg:h-[600px]">
              <img src="/wp_process_team_new.png" alt="Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/70 to-transparent transition-all duration-700 flex items-center">
                <div className="px-10 lg:px-24 max-w-2xl text-left">
                  <h2 className="text-white mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Your Trusted Development Partner</h2>
                  <p className="text-xl text-white/90 mb-10 font-bold leading-relaxed">
                    Collaborate with a team that speaks your language and understands your business goals.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="press-illusion-btn-orange text-white w-fit font-bold !px-6 !py-3 sm:!px-10 sm:!py-4 !text-sm sm:!text-xl flex items-center space-x-2"
                  >
                    <span>Hire Our Experts</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

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

/* ─── Process Slider Component ─────────────────────────────────── */
const processSteps = [
  { num: "01", title: "Team Assembly", desc: "Your team will play a valuable role in our success. Let's create a group with the experience necessary to handle your build.", icon: "👥", color: "from-blue-500 to-blue-600", image: "/wp_process_team_new.png" },
  { num: "02", title: "Discovery", desc: "Our team does a deep dive into your ideas, planning for risks and opportunities, defining timelines, and features for MVP.", icon: "🔍", color: "from-sky-500 to-blue-400", image: "/wp_process_discovery_new.png" },
  { num: "03", title: "Planning", desc: "We then plan the logistics of the development process, ensuring that all key requirements are met.", icon: "📋", color: "from-indigo-500 to-violet-600", image: "/wp_process_planning_new.png" },
  { num: "04", title: "Implementation", desc: "Let's get to work! Your team will begin building your new WordPress product, and you'll have full day-to-day visibility.", icon: "⚙️", color: "from-teal-500 to-blue-600", image: "/wp_process_implementation_new.png" },
  { num: "05", title: "Launch", desc: "You're now ready to harness the power of WordPress' advanced publishing capabilities and unmatched flexibility!", icon: "🚀", color: "from-rose-500 to-orange-500", image: "/wp_process_launch_new.png" },
  { num: "06", title: "Maintain & Support", desc: "Keep your product performing at its best with our Proactive Maintenance and Support services.", icon: "🔧", color: "from-amber-500 to-yellow-600", image: "/wp_process_support_new.png" }
];

function ProcessSlider({ servicesData, setIsModalOpen }) {
  const [active, setActive] = useState(0);
  const step = processSteps[active];

  return (
    <section className="py-16 lg:py-32 bg-white relative overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="text-center mb-10 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider mb-6 border border-blue-100">
            Process
          </div>
          <h2 className="text-gray-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
            Our CMS <span className="text-blue-600">Migration Process</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-medium max-w-2xl mx-auto">
            A proven six-step framework taking your project from team formation through to long-term support.
          </p>
        </div>

        {/* Step nav dots/tabs */}
        <div className="flex items-center lg:justify-center gap-2 sm:gap-3 mb-10 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
          {processSteps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] sm:text-xs font-black transition-all duration-300 border shrink-0 ${active === i
                ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200"
                : "bg-white text-gray-500 border-gray-100 hover:border-blue-300 hover:text-blue-600"
                }`}
            >
              <span className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-black ${active === i ? "bg-white/20 text-white" : "bg-slate-100 text-gray-600"}`}>{s.num}</span>
              <span className={i === active ? "inline" : "hidden sm:inline"}>{s.title}</span>
            </button>
          ))}
        </div>

        {/* Slider card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="glass-panel p-6 sm:p-10 rounded-[32px] sm:rounded-[48px] border border-blue-100 shadow-xl shadow-blue-50/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 opacity-50" />
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-xl sm:text-2xl shadow-lg`}>
                  {step.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight">{step.title}</h3>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-medium mb-10">
                {step.desc}
              </p>

              <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="press-illusion-btn-orange text-white font-bold !px-5 !py-2.5 !text-sm sm:!text-base"
                >
                  Consult on {step.title}
                </button>
                <div className="flex gap-1.5">
                  {processSteps.map((_, i) => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? "w-8 bg-blue-600" : "w-2 bg-blue-100"}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="p-6 bg-slate-50/50 rounded-[32px] border border-slate-200">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 px-2">Project Lifecycle</h4>
              <div className="space-y-3">
                {processSteps.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-full group p-5 sm:p-6 rounded-[24px] transition-all duration-400 border flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-4 sm:gap-6 ${active === i
                      ? "bg-white border-blue-200 shadow-xl shadow-blue-100/50 scale-[1.02]"
                      : "bg-transparent border-transparent hover:bg-white/60 hover:border-slate-300"}`}
                  >
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-xl sm:text-2xl transition-all duration-500 ${active === i ? "bg-blue-600 text-white rotate-6" : "bg-white text-slate-400 group-hover:text-blue-500 shadow-sm"}`}>
                      {s.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-center sm:justify-between mb-1">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${active === i ? "text-blue-500" : "text-slate-400"}`}>Phase {s.num}</span>
                        {active === i && <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse hidden sm:block" />}
                      </div>
                      <div className={`text-base sm:text-lg font-black ${active === i ? "text-gray-900" : "text-slate-500 group-hover:text-slate-700"}`}>
                        {s.title}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setActive(prev => Math.max(0, prev - 1))}
            disabled={active === 0}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <span className="text-sm font-black text-gray-400">{active + 1} / {processSteps.length}</span>
          <button
            onClick={() => setActive(prev => Math.min(processSteps.length - 1, prev + 1))}
            disabled={active === processSteps.length - 1}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
