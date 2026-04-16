"use client";

import { useState } from "react";
import Link from "next/link";
import ContactFormModal from "../../components/ContactFormModal";

/* ─── Main Component (STAGING VERSION) ─────────────────────────────────── */
export default function WordPressDevelopmentPremiumStaging({ service, servicesData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Staging specific service features
  const stagingFeatures = [
    {
      title: "Migration to WordPress",
      description: "Switch to WordPress without the risk. We handle full-site migrations from any platform — Wix, Squarespace, Joomla, Drupal — with zero data loss, zero downtime, and full preservation of your existing SEO rankings."
    },
    {
      title: "WordPress Theme Development",
      description: "Stop blending in. We design and develop fully bespoke WordPress themes that reflect your brand, engage your audience, and are built to perform in search — not just look good in a browser."
    },
    {
      title: "Plugin Development",
      description: "When off-the-shelf plugins don't cut it, we build custom WordPress plugins that add the exact functionality your business needs — cleanly coded, lightweight, and built to integrate without slowing your site down."
    },
    {
      title: "Ecommerce & WooCommerce",
      description: "From product pages to payment processing, we build end-to-end WooCommerce stores that are fast, secure, and optimised for maximum conversions — whether you sell 10 products or 10,000."
    },
    {
      title: "Feature Enhancement",
      description: "Already have a WordPress site but need more from it? We add custom features, third-party integrations, and performance improvements that turn a basic website into a genuine business asset."
    },
    {
      title: "Speed Optimisation",
      description: "We don't just run a speed test — we fix what's causing the problem. Our WordPress performance experts eliminate bottlenecks at the code, server, and database level to achieve real, lasting speed improvements."
    },
    {
      title: "Support & Maintenance",
      description: "WordPress never stands still — and neither do we. Our ongoing maintenance plans keep your site secure, updated, and running at peak performance, so you can focus on running your business."
    },
    {
      title: "WordPress Multisite Development",
      description: "Running multiple brands or regional sites? We build and manage WordPress Multisite networks that let you control everything from a single dashboard — saving time, reducing cost, and maintaining consistency."
    }
  ];

  return (
    <>
      <style>{`
        .wp-light-gradient {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%);
        }
        .wp-blue-text-gradient {
          background: linear-gradient(90deg, #0284c7, #2563eb, #0284c7);
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
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
      `}</style>

      <div className="bg-white min-h-screen font-sans">
        {/* ─── HERO SECTION ────────────────────── */}
        <section className="wp-light-gradient relative pt-32 lg:pt-48 pb-20 lg:pb-32 overflow-hidden">
          {/* Decorative Background Shapes */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-200/50 rounded-full blur-[100px] mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px] mix-blend-multiply" />

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-sky-700 mb-10 justify-center lg:justify-start font-medium">
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-100 text-sky-800 font-bold text-sm mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                  #1 WordPress Development Agency
                </div>

                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                  Custom WordPress Websites That Drive <span className="wp-blue-text-gradient">Traffic, Leads & Revenue</span>
                </h1>

                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                  Your competitors are winning online — don't let your website hold you back. Isarva is a specialist WordPress development agency that builds fast, secure, and conversion-optimised websites engineered for business growth. Whether you need a brand-new site or a complete overhaul, we deliver WordPress solutions that rank on Google and turn visitors into paying customers.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-base font-bold rounded-xl transition-all duration-300 shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] transform hover:-translate-y-1"
                  >
                    Start Your Project
                  </button>
                  <Link
                    href="#portfolio"
                    className="px-8 py-4 bg-white hover:bg-sky-50 text-blue-800 text-base font-bold rounded-xl transition-all duration-300 shadow-sm border border-sky-100"
                  >
                    Explore Our Work
                  </Link>
                </div>
              </div>

              {/* Right Images */}
              <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] mt-12 lg:mt-0">
                <div className="absolute top-0 right-0 w-[85%] lg:w-[450px] h-[85%] lg:h-[450px] image-card float-animation z-10">
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" alt="WordPress Interface" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent mix-blend-overlay" />
                </div>
                <div className="absolute bottom-0 left-0 w-[70%] lg:w-[300px] h-[55%] lg:h-[250px] image-card float-animation-delayed z-20 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80" alt="WordPress Design" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-[20%] lg:top-32 -left-2 lg:-left-10 glass-panel px-4 lg:px-6 py-3 lg:py-4 rounded-2xl z-30 shadow-xl flex items-center gap-3 lg:gap-4 scale-90 lg:scale-100 origin-left">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl lg:text-2xl">🚀</div>
                  <div>
                    <p className="text-[10px] lg:text-xs text-gray-500 font-bold uppercase tracking-wider">Performance</p>
                    <p className="text-base lg:text-lg font-black text-gray-900">Lightning Fast</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── BESPOKE SOLUTIONS SECTION ────────────────────────── */}
        <section id="portfolio" className="py-24 lg:py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3 block">Why Choose Isarva</span>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Built For Ambition</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Most agencies hand you a theme and call it done. We don't. Every WordPress website we build is architected from the ground up — custom-coded, conversion-focused, and built to outperform the competition in search results and sales.
              </p>
            </div>

            {/* Showcase 1: Custom Themes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 lg:mb-32">
              <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] group border-4 border-slate-50">
                <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1000&q=80" alt="Custom WordPress Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="bg-sky-500/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-2 inline-block">Pixel Perfect</div>
                </div>
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 text-2xl mb-6 shadow-sm mx-auto lg:mx-0">🎨</div>
                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">Custom WordPress Theme Design & Development</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Generic templates hurt your brand and your rankings. We build 100% custom WordPress themes from scratch — designed to match your brand identity, load in under a second, and convert visitors into customers. Every theme is hand-coded for SEO, optimised for Core Web Vitals, and tested across all major devices and browsers.
                </p>
                <ul className="space-y-4 text-left">
                  {["100% Custom — No Templates, No Shortcuts", "Pixel-Perfect Across All Devices & Browsers", "Mobile-First, SEO-Optimised Architecture", "Gutenberg & Full Site Editor (FSE) Ready"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-semibold">
                      <svg className="w-6 h-6 text-sky-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Showcase 2: WooCommerce */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 lg:mb-32">
              <div className="text-center lg:text-left">
                <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 text-2xl mb-6 shadow-sm mx-auto lg:mx-0">🛒</div>
                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">WooCommerce Stores That Actually Sell</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Most ecommerce sites leak revenue through poor UX, slow load times, and broken checkout flows. We build WooCommerce stores that are engineered to sell — with streamlined checkout experiences, smart product filtering, and scalable infrastructure that grows with your business. More traffic, fewer abandoned carts, higher revenue.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8 text-left">
                  {["Custom Cart Flows", "Payment Gateway Integration", "Real-Time Inventory Sync", "Subscription & Recurring Models"].map((feat, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-4 font-semibold text-gray-800 border border-slate-100 shadow-sm text-sm">{feat}</div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] group border-4 border-slate-50">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&q=80" alt="WooCommerce" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-8 right-8 bg-white text-gray-900 font-bold px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transform group-hover:-translate-y-2 transition-transform">
                  Secure Checkout <span className="text-green-500">🔒</span>
                </div>
              </div>
            </div>

            {/* Showcase 3: Speed & Optimization */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] group border-4 border-slate-50">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80" alt="Optimization" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-sky-900/20 mix-blend-multiply" />
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 text-2xl mb-6 shadow-sm mx-auto lg:mx-0">⚡</div>
                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">WordPress Speed Optimisation That Boosts Rankings & Revenue</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Google ranks fast websites higher. Customers abandon slow ones. We perform a full technical audit of your WordPress site and eliminate every performance bottleneck — from bloated plugins and unoptimised images to slow databases and poor caching — delivering measurable speed gains that improve your Core Web Vitals, search rankings, and conversion rate.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="flex flex-col items-center justify-center bg-white border border-gray-100 shadow-md rounded-2xl p-4 w-32">
                    <span className="text-2xl font-black text-green-500 mb-1">A+</span>
                    <span className="text-[10px] text-gray-500 uppercase font-bold text-center">GTmetrix Score</span>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-white border border-gray-100 shadow-md rounded-2xl p-4 w-32">
                    <span className="text-2xl font-black text-sky-500 mb-1">{"<"}1s</span>
                    <span className="text-[10px] text-gray-500 uppercase font-bold text-center">Load Time</span>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-white border border-gray-100 shadow-md rounded-2xl p-4 w-32">
                    <span className="text-2xl font-black text-violet-500 mb-1">90+</span>
                    <span className="text-[10px] text-gray-500 uppercase font-bold text-center">PageSpeed Score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── VISUAL ECOSYSTEM GRID ───────────────────────────────────── */}
        <section className="py-24 bg-sky-50 relative border-y border-sky-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Your WordPress Site, Connected to Everything</h2>
            <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
              A great website doesn't work in isolation. We integrate your WordPress site with the tools powering your business — CRM, email marketing, payment processors, SEO platforms, and analytics — so your entire digital operation runs as one seamless, data-driven engine.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "Yoast SEO", icon: "🔍" },
                { name: "Stripe", icon: "💳" },
                { name: "Mailchimp", icon: "✉️" },
                { name: "HubSpot", icon: "🤝" },
                { name: "Google Analytics", icon: "📊" },
                { name: "Advanced Custom Fields", icon: "🛠️" },
              ].map((tool, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all border border-transparent hover:border-sky-200">
                  <div className="text-4xl mb-3">{tool.icon}</div>
                  <div className="font-bold text-gray-800 text-sm whitespace-pre-wrap">{tool.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── COMPREHENSIVE SERVICES LIST ─────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 !leading-[1.4]">Everything Your WordPress Site Needs <br className="hidden lg:block" /> Under One Roof</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stagingFeatures.map((feature, idx) => (
                <div key={idx} className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all border border-gray-100 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TEAM / PROCESS BANNER (CTA) ────────────────────────── */}
        <section className="py-12 bg-white pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" alt="Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-blue-900/30 flex items-center text-center lg:text-left">
                <div className="px-10 lg:px-20 max-w-2xl w-full mx-auto lg:mx-0">
                  <span className="text-sky-300 font-bold uppercase tracking-widest text-sm mb-4 block">Let's Build Something Great</span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">Your Trusted WordPress Development Partner</h2>
                  <p className="text-lg text-blue-100 mb-10 leading-relaxed">
                    We've helped startups launch, SMEs scale, and enterprises modernise their digital presence — all on WordPress. Tell us what you're building and we'll show you exactly how we'll make it happen.
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-8 py-4 bg-white text-blue-800 text-base font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:bg-sky-50 transform hover:-translate-y-1 inline-flex items-center gap-3"
                    >
                      Hire Our Team
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOOTER TAGLINE (Minimal) ─── */}
        <div className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-100 text-center">
          <p className="text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed">
            Isarva delivers precision-engineered WordPress and technology solutions that help businesses attract more customers, grow faster, and lead in the digital age.
          </p>
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
