"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, Cpu, ArrowRight, Zap, RefreshCw, BarChart2, Video, Globe, Award, Settings, Layers, Share2, Mail, Search, Users, ShieldAlert } from "lucide-react";
import ContactFormModal from "../../components/ContactFormModal";

const getCardStyle = (index) => {
  const styles = [
    {
      bg: "bg-gradient-to-br from-indigo-50/90 via-violet-50/40 to-white/90 hover:from-indigo-100/90 hover:via-violet-50/60 hover:to-white/90",
      border: "border-indigo-100 hover:border-indigo-300",
      shadow: "hover:shadow-lg hover:shadow-indigo-200/40",
      iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white",
    },
    {
      bg: "bg-gradient-to-br from-pink-50/90 via-rose-50/40 to-white/90 hover:from-pink-100/90 hover:via-rose-50/60 hover:to-white/90",
      border: "border-pink-100 hover:border-pink-300",
      shadow: "hover:shadow-lg hover:shadow-pink-200/40",
      iconBg: "bg-gradient-to-br from-pink-500 to-rose-600 text-white",
    },
    {
      bg: "bg-gradient-to-br from-cyan-50/90 via-blue-50/40 to-white/90 hover:from-cyan-100/90 hover:via-blue-50/60 hover:to-white/90",
      border: "border-cyan-100 hover:border-cyan-300",
      shadow: "hover:shadow-lg hover:shadow-cyan-200/40",
      iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600 text-white",
    },
    {
      bg: "bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-white/90 hover:from-amber-100/90 hover:via-orange-50/60 hover:to-white/90",
      border: "border-amber-100 hover:border-amber-300",
      shadow: "hover:shadow-lg hover:shadow-amber-200/40",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-600 text-white",
    },
    {
      bg: "bg-gradient-to-br from-emerald-50/90 via-teal-50/40 to-white/90 hover:from-emerald-100/90 hover:via-teal-50/60 hover:to-white/90",
      border: "border-emerald-100 hover:border-emerald-300",
      shadow: "hover:shadow-lg hover:shadow-emerald-200/40",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white",
    },
    {
      bg: "bg-gradient-to-br from-purple-50/90 via-fuchsia-50/40 to-white/90 hover:from-purple-100/90 hover:via-fuchsia-50/60 hover:to-white/90",
      border: "border-purple-100 hover:border-purple-300",
      shadow: "hover:shadow-lg hover:shadow-purple-200/40",
      iconBg: "bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white",
    }
  ];
  return styles[index % styles.length];
};

const getFeatureIcon = (title) => {
  switch (title) {
    case "Advanced CMS for Editors": return <Layers className="w-6 h-6" />;
    case "Breaking News Alerts": return <ShieldAlert className="w-6 h-6 animate-pulse" />;
    case "AMP & Mobile Optimization": return <Zap className="w-6 h-6" />;
    case "Multimedia Integration": return <Video className="w-6 h-6" />;
    case "Interactive Commenting": return <Users className="w-6 h-6" />;
    case "Ad Management & Monetization": return <Award className="w-6 h-6" />;
    case "Reader Analytics": return <BarChart2 className="w-6 h-6" />;
    case "Social Sharing & Viral Optimization": return <Share2 className="w-6 h-6" />;
    case "Dynamic Paywall & Subscriptions": return <Mail className="w-6 h-6" />;
    default: return <CheckCircle2 className="w-6 h-6" />;
  }
};

const getServiceIcon = (title) => {
  switch (title) {
    case "Custom Portal Setup": return <Globe className="w-5 h-5" />;
    case "Editorial Workflow Management": return <Settings className="w-5 h-5" />;
    case "Dynamic Category Management": return <Layers className="w-5 h-5" />;
    case "Social Media Integration": return <Share2 className="w-5 h-5" />;
    case "Newsletter & Subscriptions": return <Mail className="w-5 h-5" />;
    case "SEO for Publishers": return <Search className="w-5 h-5" />;
    case "High-Traffic Scaling": return <Zap className="w-5 h-5" />;
    case "Multi-Language Support": return <Award className="w-5 h-5" />;
    case "Ongoing Maintenance": return <RefreshCw className="w-5 h-5" />;
    default: return <CheckCircle2 className="w-5 h-5" />;
  }
};

export default function NewsAndMagazinePortal({ service, servicesData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const features = service.features || [];
  const servicesList = service.servicesList || [];
  const faqs = service.faqs || [];

  return (
    <>
      <style>{`
        .news-light-gradient {
          background: linear-gradient(135deg, #f5f3ff 0%, #e0e7ff 50%, #fdf2f8 100%);
        }
        .news-text-gradient {
          background: linear-gradient(90deg, #7c3aed, #4f46e5, #db2777);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 4s linear infinite;
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
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .hero-glow-card {
          border: 4px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 25px 50px -12px rgba(99, 102, 241, 0.15);
          border-radius: 24px;
          overflow: hidden;
        }
        .glass-panel-news {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
        }
        .feature-card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .feature-card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -15px rgba(124, 58, 237, 0.12);
          border-color: rgba(167, 139, 250, 0.4);
        }
      `}</style>

      <div className="bg-white min-h-screen font-sans antialiased text-slate-800">

        {/* ─── 1. HERO SECTION ───────────────────────────────────────────── */}
        <section className="news-light-gradient relative pt-32 lg:pt-44 pb-32 lg:pb-36 overflow-hidden">
          {/* Vibrant glowing meshes */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-violet-200/40 rounded-full blur-[100px] mix-blend-multiply pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[650px] h-[650px] bg-pink-200/30 rounded-full blur-[120px] mix-blend-multiply pointer-events-none" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-[90px] mix-blend-multiply pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-indigo-700 mb-6 lg:mb-8 justify-center lg:justify-start font-medium">
              <Link href="/" className="hover:text-indigo-600 transition-colors">
                Home
              </Link>
              <ChevronDown className="w-3 h-3 -rotate-90 text-indigo-400" />
              <Link href="/services" className="hover:text-indigo-600 transition-colors">
                Services
              </Link>
              <ChevronDown className="w-3 h-3 -rotate-90 text-indigo-400" />
              <span className="text-indigo-900 font-bold">News & Magazine Portal</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-violet-100 text-violet-800 font-bold text-xs sm:text-sm mb-5 lg:mb-6 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
                  Next-Gen Digital Publishing
                </div>

                <h1 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-black text-slate-900 mb-4 lg:mb-6 leading-[1.05] tracking-tight">
                  Build a High-Impact Digital Media Presence with{" "}
                  <span className="news-text-gradient">Custom News Portals</span>
                </h1>

                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
                  {service.description ||
                    "Professional news portal development services for digital publishers, journalists, and media houses. We create fast, scalable, and SEO-optimized news platforms with real-time updates, ad-management, and engaging layouts that drive readership."}
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn-premium-orange group !px-10 !py-5"
                  >
                    <div className="shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <span className="relative z-10 flex items-center gap-3 font-black tracking-wider text-sm">
                      REQUEST DEMO
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                  <Link
                    href="#features"
                    className="px-8 py-4 bg-white hover:bg-violet-50 text-indigo-800 text-base font-bold rounded-xl transition-all duration-300 shadow-sm border border-violet-100 flex items-center gap-2"
                  >
                    Explore Features
                  </Link>
                </div>
              </div>

              {/* Right Mockup Graphic */}
              <div className="relative w-full mt-8 lg:mt-0 flex items-center justify-center">
                {/* Visual Backdrop Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-400/20 via-pink-400/20 to-transparent blur-[80px] rounded-full pointer-events-none" />

                {/* Main Mockup Card */}
                <div className="relative w-full max-w-[500px] hero-glow-card float-animation z-10">
                  <img
                    src="/Services/News-portal/Hero-mockup.png"
                    alt="Custom news portal responsive layout mockups on tablet and mobile next to editor dashboard"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-950/10 to-transparent" />
                </div>

                {/* Floating Widget 1 */}
                <div className="absolute top-4 sm:top-8 left-2 sm:left-6 glass-panel-news px-4 py-3 rounded-2xl z-20 shadow-xl flex items-center gap-3 scale-85 sm:scale-100 origin-left">
                  <div className="w-9 h-9 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center text-lg">
                    ⚡
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">AMP Speed</p>
                    <p className="text-sm font-black text-slate-900">99+ Core Vitals</p>
                  </div>
                </div>

                {/* Floating Widget 2 */}
                <div className="absolute bottom-4 sm:bottom-8 right-2 sm:right-6 glass-panel-news px-4 py-3 rounded-2xl z-20 shadow-xl flex items-center gap-3 scale-85 sm:scale-100 origin-right">
                  <div className="w-9 h-9 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center text-lg">
                    📈
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Monetization</p>
                    <p className="text-sm font-black text-slate-900">+45% Ad Yield</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Custom SVG Wave Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] lg:h-[100px] text-white fill-current">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50,22,106.18,36,161.7,46.54,213.9,56.57,267.1,66.9,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        {/* ─── 2. INTRODUCTION SECTION ───────────────────────────────────── */}
        <section className="py-10 lg:py-16 pt-4 lg:pt-4 bg-white relative overflow-hidden">
          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat" }}></div>
          {/* Glowing Orbs */}
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-[120px] pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left Side: Copy */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-pink-50 border border-pink-100 mb-6 mx-auto lg:mx-0">
                  <span className="text-pink-700 font-bold text-xs uppercase tracking-wide">Dynamic Publishing Experience</span>
                </div>

                <h2 className="text-slate-900 text-3xl lg:text-5xl font-black mb-8 leading-[1.15] tracking-tight uppercase">
                  Empower Your Media Business with a Modern News Portal
                </h2>

                <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                  <p>
                    In the digital-first era, speed and accessibility are everything. Our custom news portal development services transform traditional reporting into a dynamic digital experience. Whether you are a local news outlet or a global media house, we build platforms that handle high traffic while delivering a seamless reading experience.
                  </p>
                  <p>
                    We specialize in creating fully customized news solutions that go beyond simple blogging. From integrated breaking news alerts and multimedia galleries to advanced category management and subscription models, we build exactly what your editorial team needs to succeed.
                  </p>
                  <p>
                    Our development approach focuses on core vitals: speed, mobile-first design, and monetization. We optimize every article for discoverability, implement robust security for high-traffic surges, and create intuitive navigation that keeps readers engaged.
                  </p>
                </div>
              </div>

              {/* Right Side: Features Highlight Panels (Avoiding Dark Colors) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white/80 shadow-xl shadow-violet-500/10 hover:shadow-2xl hover:shadow-violet-500/25 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center lg:items-start text-center lg:text-left group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-100 to-indigo-100 text-violet-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Modern Tech Architecture</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Structured using cutting-edge static rendering & headless CMS architectures for lightning-fast loads and global caching.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white/80 shadow-xl shadow-pink-500/10 hover:shadow-2xl hover:shadow-pink-500/25 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center lg:items-start text-center lg:text-left group">
                  <div className="w-12 h-12 rounded-xl bg-pink-600/10 text-pink-700 flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Monetization Engineered</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Built-in ad slots, paywalls, and sponsored layout systems that maximize CPM rates without hurting user experience.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── 3. KEY FEATURES SECTION (Apple-style List + Sticky Showcase) ──────────────────────── */}
        <section id="features" className="py-10 lg:py-16 bg-slate-50 relative overflow-hidden">
          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat" }}></div>
          {/* Glowing Orbs */}
          <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-violet-400/20 rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[120px] pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">

            <div className="text-center max-w-3xl mx-auto mb-4 lg:mb-10">
              <span className="text-violet-600 font-bold uppercase tracking-widest text-sm mb-3 block">
                Engineered for Scale
              </span>
              <h2 className="text-slate-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.15] tracking-tight uppercase">
                Key Features Of Our News Portal Development
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-medium">
                Professional news solutions that transform your content into a powerful media engine with custom editorial tools and seamless social integrations.
              </p>
              <div className="w-20 h-1.5 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full mt-6" />
            </div>

            {/* Features Bento Box Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 grid-flow-row-dense">
              {features.map((feat, index) => {
                const colors = [
                  "text-violet-600 bg-violet-50/80 border-violet-100",
                  "text-pink-600 bg-pink-50/80 border-pink-100",
                  "text-cyan-600 bg-cyan-50/80 border-cyan-100",
                  "text-amber-600 bg-amber-50/80 border-amber-100",
                  "text-emerald-600 bg-emerald-50/80 border-emerald-100",
                  "text-indigo-600 bg-indigo-50/80 border-indigo-100",
                  "text-red-600 bg-red-50/80 border-red-100",
                  "text-orange-600 bg-orange-50/80 border-orange-100",
                  "text-teal-600 bg-teal-50/80 border-teal-100",
                ];
                const shadows = [
                  "shadow-violet-500/15 hover:shadow-violet-500/30",
                  "shadow-pink-500/15 hover:shadow-pink-500/30",
                  "shadow-cyan-500/15 hover:shadow-cyan-500/30",
                  "shadow-amber-500/15 hover:shadow-amber-500/30",
                  "shadow-emerald-500/15 hover:shadow-emerald-500/30",
                  "shadow-indigo-500/15 hover:shadow-indigo-500/30",
                  "shadow-red-500/15 hover:shadow-red-500/30",
                  "shadow-orange-500/15 hover:shadow-orange-500/30",
                  "shadow-teal-500/15 hover:shadow-teal-500/30",
                ];
                const colorClass = colors[index % colors.length];
                const shadowClass = shadows[index % shadows.length];

                const getBentoSpan = (idx) => {
                  if (idx === 0) return "md:col-span-2";
                  if (idx === 3) return "md:col-span-2";
                  if (idx === 7) return "md:col-span-2";
                  return "md:col-span-1";
                };

                const spanClass = getBentoSpan(index);
                const isWide = spanClass === "md:col-span-2";

                return (
                  <div
                    key={index}
                    className={`group flex flex-col items-start ${isWide ? 'p-8' : 'p-6'} gap-4 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-xl hover:shadow-2xl ${shadowClass} hover:-translate-y-1 transition-all duration-300 ${spanClass}`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center font-black text-lg border ${colorClass} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h4 className={`${isWide ? 'text-2xl' : 'text-lg'} font-bold text-slate-900 group-hover:text-indigo-600 transition-colors`}>
                          {feat.title}
                        </h4>
                        {feat.title.includes("Alerts") && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700 animate-pulse">Live</span>
                        )}
                      </div>
                      <p className={`text-slate-600 ${isWide ? 'text-base' : 'text-sm'} leading-relaxed font-medium`}>
                        {feat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ─── 4. OUR SERVICES (GRID SECTION - 3D Accent Grid Cards Layout) ─────── */}
        <section className="py-10 lg:py-16 bg-white relative overflow-hidden">
          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat" }}></div>
          {/* Glowing Orbs */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-400/20 rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">

            <div className="text-center max-w-3xl mx-auto mb-4 lg:mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-50 border border-violet-100 text-violet-800 font-semibold text-sm mb-6">
                🚀 Service Catalogue
              </div>
              <h2 className="text-slate-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.15] tracking-tight uppercase">
                What we offer with News Portal Development
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 font-medium">
                From initial workflow setups to publisher SEO, we cover the full spectrum of media platform engineering.
              </p>
              <div className="w-20 h-1.5 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full mt-6" />
            </div>

            {/* Services Grid (9 Columns / Widgets - Top-Accent Colorful Line Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
              {servicesList.map((srv, index) => {
                const style = getCardStyle(index + 3); // Shift offset for different color sequence
                return (
                  <div
                    key={index}
                    className={`relative overflow-hidden group p-8 rounded-3xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center md:items-start md:text-left h-full ${style.bg} ${style.border} ${style.shadow}`}
                  >
                    {/* Unique Top Accent Gradient Line */}
                    <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-violet-500 via-pink-500 to-amber-400" />

                    <div className={`w-12 h-12 rounded-xl ${style.iconBg} flex items-center justify-center mb-6 shadow-sm mt-2 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      {getServiceIcon(srv.title)}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{srv.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {srv.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 5. FAQ SECTION ────────────────────────────────────────────── */}
        <section className="py-10 lg:py-16 bg-slate-50 relative overflow-hidden">
          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat" }}></div>
          {/* Glowing Orbs */}
          <div className="absolute top-[10%] left-[30%] w-[400px] h-[400px] bg-violet-400/20 rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="absolute bottom-[-10%] right-[10%] w-[450px] h-[450px] bg-pink-400/20 rounded-full blur-[120px] pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">

            <div className="text-center mb-6 lg:mb-10">
              <span className="text-violet-600 font-bold uppercase tracking-widest text-sm mb-3 block">
                Got Questions?
              </span>
              <h2 className="text-slate-900 text-3xl lg:text-5xl font-black leading-[1.15] tracking-tight uppercase">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full mt-4" />
            </div>

            {/* Smooth Animated Accordions - Consistent 2-Column Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border shadow-sm overflow-hidden transition-all duration-300 flex flex-col self-start w-full
                    ${openFaqIndex === index
                      ? "bg-violet-50/80 border-violet-200"
                      : "bg-white border-slate-100 hover:border-violet-100"
                    }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className={`w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 bg-transparent transition-all duration-300 ${openFaqIndex === index ? "" : "min-h-[95px] md:min-h-[95px]"}`}
                  >
                    <span className={`text-base md:text-lg font-bold ${openFaqIndex === index ? "text-violet-700" : "text-slate-900"}`}>
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-500 ${openFaqIndex === index ? "rotate-180 text-violet-600" : "text-slate-400"}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } }}
                        exit={{ height: 0, opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-8 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ─── 6. FINAL CALL TO ACTION ───────────────────────────────────── */}
        <section className="py-10 lg:py-16 bg-gradient-to-br from-violet-600 via-indigo-600 to-pink-500 relative overflow-hidden">
          {/* Decorative glows */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.25),transparent_50%)]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full" />
          </div>

          {/* Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider mb-8 border border-white/30 shadow-lg">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Start your media journey
            </div>

            <h2 className="text-white mb-6 text-3xl lg:text-5xl font-black leading-[1.2] tracking-tight uppercase">
              Ready to launch your digital newsroom?
            </h2>

            <p className="text-lg lg:text-xl text-violet-50 mb-4 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
              Join the future of digital journalism. Start your media journey today with our expert development team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-premium-orange group !px-10 !py-5"
              >
                <div className="shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <span className="relative z-10 flex items-center gap-3 font-black tracking-wider text-sm">
                  Request Quote
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </section>

      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Service"
        preSelectedItem="News and Magazine Portal"
        allItems={servicesData}
      />
    </>
  );
}
