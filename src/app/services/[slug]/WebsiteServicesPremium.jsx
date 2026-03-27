"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ContactFormModal from "../../components/ContactFormModal";

/* ─── Animated Counter ──────────────────────────────── */
function AnimatedCounter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Main Component ─────────────────────────────────── */
export default function WebsiteServicesPremium({ service, servicesData }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const subServices = [
    {
      title: "Website Design",
      icon: "🎨",
      image: "/website_design_process.png",
      color: "from-violet-500 to-purple-600",
      lightColor: "from-violet-50 to-purple-50",
      accent: "text-violet-700 bg-violet-100",
      tagline: "Stunning Visuals, Seamless UX",
      description:
        "Create visually stunning and user-friendly websites that captivate your audience and represent your brand perfectly. Our design-first approach ensures every pixel serves a purpose.",
      features: [
        "Custom Visual Design",
        "UI/UX Optimization",
        "Brand Identity Integration",
        "Responsive Layouts",
        "Interactive Prototypes",
        "Accessibility Compliance",
      ],
    },
    {
      title: "Website Redesign",
      icon: "✨",
      image: "/website_redesign_service.png",
      color: "from-orange-500 to-rose-500",
      lightColor: "from-orange-50 to-rose-50",
      accent: "text-orange-700 bg-orange-100",
      tagline: "Old Website? Let's Transform It.",
      description:
        "Is your current website outdated, slow, or not converting visitors? We specialise in complete website redesigns — refreshing your look, improving user experience, and modernising your tech stack while preserving your brand identity and SEO rankings.",
      features: [
        "Full Visual Overhaul",
        "UX/UI Modernisation",
        "SEO-Preserved Migration",
        "Mobile-First Rebuild",
        "Speed & Performance Boost",
        "Content Restructuring",
      ],
    },
    {
      title: "Website Maintenance – AMC",
      icon: "🔧",
      image: "/web_maintenance_services.png",
      color: "from-emerald-500 to-teal-600",
      lightColor: "from-emerald-50 to-teal-50",
      accent: "text-emerald-700 bg-emerald-100",
      tagline: "Always On. Always Secure.",
      description:
        "Keep your website running at peak performance with our Annual Maintenance Contracts. We proactively monitor, update, and protect your site so you can focus on growing your business.",
      features: [
        "Regular Updates & Patches",
        "24/7 Security Monitoring",
        "Performance Optimization",
        "Content Updates",
        "Backup & Recovery",
        "Priority Technical Support",
      ],
    },
    {
      title: "Migrate to WordPress",
      icon: "🚀",
      image: "/wordpress_migration.png",
      color: "from-blue-500 to-cyan-600",
      lightColor: "from-blue-50 to-cyan-50",
      accent: "text-blue-700 bg-blue-100",
      tagline: "Zero Downtime. Full Power.",
      description:
        "Seamlessly migrate your existing website to WordPress with zero downtime. We preserve your SEO, content, and traffic while upgrading your platform to the gold standard of CMS.",
      features: [
        "Complete Data Migration",
        "SEO Preservation",
        "Custom Theme Development",
        "Plugin Integration",
        "Training & Documentation",
        "Post-Migration Support",
      ],
    },
  ];

  const techStack = [
    { name: "Next.js", icon: "▲" },
    { name: "React", icon: "⚛" },
    { name: "WordPress", icon: "W" },
    { name: "Node.js", icon: "⬡" },
    { name: "Tailwind CSS", icon: "◈" },
    { name: "MySQL", icon: "🐬" },
  ];

  const stats = [
    { value: 150, suffix: "+", label: "Websites Delivered" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 15, suffix: "+", label: "Years of Expertise" },
    { value: 24, suffix: "/7", label: "Support Available" },
  ];

  const whyUs = [
    {
      icon: "🏆",
      title: "Proven Excellence",
      desc: "Over 150 websites delivered to clients across industries — from startups to enterprises.",
    },
    {
      icon: "⚡",
      title: "Performance-First",
      desc: "We engineer for speed. Google Core Web Vitals compliance built into every project.",
    },
    {
      icon: "🛡️",
      title: "Security Built-In",
      desc: "Enterprise-grade security practices baked into development, not bolted on after.",
    },
    {
      icon: "🎯",
      title: "SEO-First Architecture",
      desc: "Every site is architected for discoverability — structured data, semantic HTML, and more.",
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      desc: "Designed for every device from day one. Responsive, adaptive, flawless on all screens.",
    },
    {
      icon: "🔄",
      title: "Agile Process",
      desc: "Transparent, iterative delivery with regular check-ins and milestone reviews.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      desc: "We deep-dive into your brand, goals, and target audience to craft a winning digital strategy.",
    },
    {
      step: "02",
      title: "Design & Prototype",
      desc: "Our designers create stunning wireframes and interactive prototypes for your review.",
    },
    {
      step: "03",
      title: "Development & Build",
      desc: "Clean, scalable code brings your design to life with performance and security as priorities.",
    },
    {
      step: "04",
      title: "Testing & Launch",
      desc: "Rigorous QA, cross-browser testing, and a smooth launch with zero surprises.",
    },
    {
      step: "05",
      title: "Support & Grow",
      desc: "Ongoing maintenance, updates, and optimizations help your site evolve with your business.",
    },
  ];

  const capabilities = [
    {
      icon: "📱",
      title: "Responsive Web Design",
      desc: "Pixel-perfect across every screen size — mobile, tablet, and desktop.",
      from: "from-purple-50",
      border: "border-purple-100 hover:border-purple-300",
      iconBg: "bg-purple-100 text-purple-700",
    },
    {
      icon: "🖥️",
      title: "Custom CMS Development",
      desc: "Powerful content management systems built for your team to use easily.",
      from: "from-emerald-50",
      border: "border-emerald-100 hover:border-emerald-300",
      iconBg: "bg-emerald-100 text-emerald-700",
    },
    {
      icon: "🛒",
      title: "E-commerce Solutions",
      desc: "Feature-rich online stores with seamless checkout experiences.",
      from: "from-blue-50",
      border: "border-blue-100 hover:border-blue-300",
      iconBg: "bg-blue-100 text-blue-700",
    },
    {
      icon: "⚡",
      title: "Progressive Web Apps",
      desc: "App-like experiences delivered through the browser.",
      from: "from-amber-50",
      border: "border-amber-100 hover:border-amber-300",
      iconBg: "bg-amber-100 text-amber-700",
    },
    {
      icon: "🔒",
      title: "Security Hardening",
      desc: "SSL, firewall rules, vulnerability scanning, and DDoS protection.",
      from: "from-rose-50",
      border: "border-rose-100 hover:border-rose-300",
      iconBg: "bg-rose-100 text-rose-700",
    },
    {
      icon: "🚀",
      title: "Performance Optimization",
      desc: "Sub-2s load times, lazy loading, and Core Web Vitals tuned.",
      from: "from-indigo-50",
      border: "border-indigo-100 hover:border-indigo-300",
      iconBg: "bg-indigo-100 text-indigo-700",
    },
    {
      icon: "🔍",
      title: "SEO-Friendly Architecture",
      desc: "Technical SEO, schema markup, and search-engine-ready code.",
      from: "from-green-50",
      border: "border-green-100 hover:border-green-300",
      iconBg: "bg-green-100 text-green-700",
    },
    {
      icon: "🌍",
      title: "Cross-Browser Compatible",
      desc: "Tested across Chrome, Safari, Firefox, and Edge flawlessly.",
      from: "from-teal-50",
      border: "border-teal-100 hover:border-teal-300",
      iconBg: "bg-teal-100 text-teal-700",
    },
  ];

  const redesignPoints = [
    { icon: "🎨", label: "Modernise Your Look" },
    { icon: "📈", label: "Boost Conversions" },
    { icon: "⚡", label: "Faster Load Times" },
    { icon: "📱", label: "Mobile-First Rebuild" },
    { icon: "🔍", label: "Preserve SEO Rankings" },
    { icon: "🛡️", label: "Enhanced Security" },
  ];

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(2deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .ws-float1 { animation: float 6s ease-in-out infinite; }
        .ws-float2 { animation: float2 8s ease-in-out infinite; }
        .ws-float3 { animation: float 7s ease-in-out infinite reverse; }
        .shimmer-title {
          background: linear-gradient(90deg, #059669, #10B981, #0d9488, #059669);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .hero-bg { background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 30%, #f0fdfa 60%, #ffffff 100%); }
        .hero-mesh {
          background-image:
            radial-gradient(circle at 20% 20%, rgba(16,185,129,0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(20,184,166,0.10) 0%, transparent 50%);
        }
        .float-badge {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(16,185,129,0.2);
          box-shadow: 0 8px 32px rgba(16,185,129,0.12);
        }
        .stat-card {
          background: white;
          border: 1px solid rgba(16,185,129,0.15);
          box-shadow: 0 4px 24px rgba(16,185,129,0.08);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .stat-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(16,185,129,0.15); }
        .tab-btn { transition: all 0.3s; border: 2px solid transparent; }
        .tab-btn.active { background: linear-gradient(135deg, #10B981, #0d9488); color: white; box-shadow: 0 8px 24px rgba(16,185,129,0.35); }
        .tab-btn:not(.active) { background: white; border-color: #e5e7eb; color: #6b7280; }
        .tab-btn:not(.active):hover { border-color: #10B981; color: #059669; background: #f0fdf4; }
        .feature-chip { background: white; border: 1px solid #e5e7eb; transition: all 0.2s; }
        .feature-chip:hover { border-color: #10B981; background: #f0fdf4; }
        .cap-card { background: white; border: 2px solid; transition: all 0.3s; }
        .cap-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .why-card { background: white; border: 2px solid #f3f4f6; transition: all 0.3s; }
        .why-card:hover { border-color: #10B981; background: #f0fdf4; transform: translateY(-4px); box-shadow: 0 12px 32px rgba(16,185,129,0.12); }
        .process-step-dot { transition: transform 0.3s; }
        .process-step:hover .process-step-dot { transform: scale(1.15); }
        .tech-chip { background: white; border: 1.5px solid #e5e7eb; transition: all 0.2s; }
        .tech-chip:hover { border-color: #10B981; background: #f0fdf4; color: #059669; }
        .cta-gradient { background: linear-gradient(135deg, #064e3b, #065f46, #0f766e, #134e4a); background-size: 300% 300%; animation: gradientShift 6s ease infinite; }
        .hero-tag { background: white; border: 1px solid rgba(16,185,129,0.3); box-shadow: 0 2px 8px rgba(16,185,129,0.1); }
        .redesign-before-after { position: relative; overflow: hidden; border-radius: 1rem; }
        .metric-badge {
          background: white;
          border: 1px solid rgba(16,185,129,0.2);
          box-shadow: 0 4px 16px rgba(16,185,129,0.1);
        }
      `}</style>

      <div className="bg-white overflow-hidden">
        {/* ─── HERO ──────────────────────────────────────────────── */}
        <section className="hero-bg hero-mesh relative pt-32 lg:pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-[100px] opacity-60" />
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-teal-100 rounded-full blur-[80px] opacity-60 translate-x-1/4" />
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.04]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="ws-grid"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 50 0 L 0 0 0 50"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ws-grid)" />
            </svg>
          </div>

          {/* Floating widgets */}
          <div className="absolute top-36 right-20 ws-float1 hidden xl:block z-10">
            <div className="float-badge rounded-2xl px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-xl">
                  🌐
                </div>
                <div>
                  <div className="text-gray-900 text-sm font-bold">
                    Live Website
                  </div>
                  <div className="text-emerald-600 text-xs font-semibold">
                    99.9% Uptime ✓
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-32 left-16 ws-float2 hidden xl:block z-10">
            <div className="float-badge rounded-2xl px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="text-xl">⚡</div>
                <div>
                  <div className="text-gray-900 text-sm font-bold">
                    Page Speed
                  </div>
                  <div className="text-emerald-600 text-xs font-semibold">
                    Score: 98/100
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-10">
              <Link
                href="/"
                className="hover:text-emerald-600 transition-colors"
              >
                Home
              </Link>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <Link
                href="/services"
                className="hover:text-emerald-600 transition-colors"
              >
                Services
              </Link>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="text-emerald-600 font-semibold">
                Website Services
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-sm mb-8 border border-emerald-200">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
                  </span>
                  Premium Website Services
                </div>
                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-[1.05] tracking-tight">
                  Build Your <span className="shimmer-title">Digital</span>
                  <br />
                  Presence
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                  From brand-new websites to full redesigns and ongoing
                  maintenance — we craft digital experiences that engage
                  visitors, build trust, and drive real business results.
                </p>
                <div className="flex flex-wrap gap-2 mb-10 justify-center lg:justify-start">
                  {[
                    "Responsive Design",
                    "SEO-Optimised",
                    "Lightning Fast",
                    "Secure & Scalable",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="hero-tag px-4 py-1.5 rounded-full text-gray-700 text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <button
                    id="ws-hero-cta"
                    onClick={() => setIsModalOpen(true)}
                    className="group inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-emerald-200 hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Get a Free Quote
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                  <Link
                    href="#sub-services"
                    className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-300 shadow-sm"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 blur-[60px] rounded-full" />
                <div className="relative rounded-3xl overflow-hidden border border-emerald-100 shadow-[0_24px_80px_rgba(16,185,129,0.15)]">
                  <img
                    src="/website_services_hero.png"
                    alt="Premium Website Services by Isarva"
                    className="w-full h-[480px] lg:h-[520px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 float-badge rounded-2xl px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white text-sm font-bold">
                        ✓
                      </div>
                      <div>
                        <div className="text-gray-900 text-sm font-bold">
                          ISO-Quality Delivery
                        </div>
                        <div className="text-emerald-600 text-xs font-semibold">
                          8+ years of excellence
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="stat-card rounded-2xl p-6 text-center cursor-default"
                >
                  <div className="text-4xl lg:text-5xl font-black text-emerald-600 mb-1">
                    <AnimatedCounter end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-gray-600 text-sm font-semibold">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WEBSITE REDESIGN SHOWCASE ──────────────────────────── */}
        <section className="py-10 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
          <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-orange-50 rounded-full blur-[100px] opacity-80" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-rose-50 rounded-full blur-[80px] opacity-60" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-100/60 to-rose-100/60 blur-[50px] rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden border border-orange-100 shadow-2xl">
                  <img
                    src="/website_redesign_service.png"
                    alt="Website Redesign Service — Before & After"
                    className="w-full  object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  {/* Badge on image */}
                  <div className="absolute -top-0 left-1">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm font-bold shadow-lg">
                      ✨ Before → After Transformation
                    </span>
                  </div>
                  <div className="absolute bottom-6 right-6 float-badge rounded-xl px-4 py-3">
                    <div className="text-gray-900 text-sm font-bold">
                      Avg. 3× More Conversions
                    </div>
                    <div className="text-orange-600 text-xs font-semibold mt-0.5">
                      After redesign
                    </div>
                  </div>
                </div>
              </div>

              {/* Right content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 font-semibold text-sm mb-6">
                  🆕 New Service
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  Got an Old Website?
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
                    We'll Transform It.
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  If your current website looks dated, loads slowly, or isn't
                  bringing in leads — it's time for a redesign. At Isarva
                  Infotech, we specialise in breathing new life into old
                  websites. We modernise the design, improve user experience,
                  boost performance, and rebuild on a solid, scalable foundation
                  — all without losing your SEO rankings or existing content.
                </p>

                {/* Points grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
                  {redesignPoints.map((p, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-orange-50 border border-orange-100 hover:border-orange-300 transition-all duration-200"
                    >
                      <span className="text-lg">{p.icon}</span>
                      <span className="text-sm font-semibold text-gray-800">
                        {p.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-orange-500 to-rose-500 rounded-xl hover:from-orange-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Redesign My Website
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:text-orange-700 hover:bg-orange-50 transition-all duration-300"
                  >
                    See All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SUB-SERVICES TABS ──────────────────────────────────── */}
        <section
          id="sub-services"
          className="py-10 lg:py-32 bg-gray-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.05),transparent_60%)]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 font-semibold text-sm mb-6">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                All Services
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Four core pillars of our Website Services — each crafted to
                deliver exceptional results.
              </p>
            </div>

            {/* Tab Nav */}
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {subServices.map((s, i) => (
                <button
                  key={i}
                  id={`ws-tab-${i}`}
                  onClick={() => setActiveTab(i)}
                  className={`tab-btn flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold ${activeTab === i ? "active" : ""}`}
                >
                  <span className="text-xl">{s.icon}</span>
                  <span className="hidden sm:inline">{s.title}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div
                  className={`absolute -inset-4 bg-gradient-to-br ${subServices[activeTab].lightColor} blur-[60px] rounded-full opacity-60`}
                />
                <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
                  <img
                    src={subServices[activeTab].image}
                    alt={subServices[activeTab].title}
                    className="w-full object-cover transition-all duration-500"
                  />
                  <div className="absolute top-6 left-6">
                    <span
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${subServices[activeTab].color} text-white text-sm font-bold shadow-lg`}
                    >
                      <span>{subServices[activeTab].icon}</span>{" "}
                      {subServices[activeTab].tagline}
                    </span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
                  {subServices[activeTab].title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {subServices[activeTab].description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {subServices[activeTab].features.map((f, idx) => (
                    <div
                      key={idx}
                      className="feature-chip flex items-center gap-3 p-3 rounded-xl border transition-all duration-200"
                    >
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${subServices[activeTab].accent}`}
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm font-medium">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center lg:justify-start">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className={`inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r ${subServices[activeTab].color} rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                  >
                    Get Started With This
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CAPABILITIES ──────────────────────────────────────── */}
        <section
          id="features"
          className="py-10 lg:py-32 bg-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-50 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal-50 rounded-full blur-3xl opacity-60" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold text-sm mb-6">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Core Capabilities
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                Everything Your Website
                <br className="hidden lg:block" /> Needs to Win
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive capabilities engineered to deliver exceptional
                digital experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {capabilities.map((c, i) => (
                <div
                  key={i}
                  className={`cap-card rounded-2xl lg:text-left text-center p-6 bg-gradient-to-br ${c.from} to-white ${c.border} cursor-default`}
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12  lg:mx-0 mx-auto rounded-xl ${c.iconBg} text-2xl mb-5`}
                  >
                    {c.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── OUR PROCESS + TEAM IMAGE ──────────────────────────── */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.06),transparent_60%)]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 font-semibold text-sm mb-6 border border-emerald-200">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
                How We Work
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                Our Proven Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A streamlined, transparent 5-step journey from concept to
                launch.
              </p>
            </div>

            {/* Process steps */}
            <div className="relative mb-20">
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-200 to-transparent z-0" />
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                {process.map((p, i) => (
                  <div key={i} className="process-step group text-center">
                    <div className="process-step-dot inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white font-black text-xl mb-6 shadow-lg shadow-emerald-100 mx-auto ring-4 ring-white">
                      {p.step}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Image Banner */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src="/web_process_team.png"
                alt="Isarva Website Development Team"
                className="w-full h-[400px] lg:h-[480px] object-cover"
              />
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/60 flex items-center lg:text-left text-center">
                <div className="px-10 lg:px-16 max-w-xl">
                  <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-3">
                    Our Expert Team
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                    Passionate Builders.
                    <br />
                    Dedicated to Your Success.
                  </h3>
                  <p className="text-white/80 text-base leading-relaxed mb-8">
                    Our team of designers, developers, and strategists have a
                    single goal — to deliver websites that perform beautifully
                    and drive measurable results.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-emerald-700 bg-white rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
                  >
                    Work With Our Team
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Floating metric cards */}
              <div className="absolute top-6 right-6 flex flex-col gap-3 hidden lg:flex">
                <div className="metric-badge rounded-xl px-4 py-3 text-center">
                  <div className="text-2xl font-black text-emerald-600">
                    150+
                  </div>
                  <div className="text-xs font-semibold text-gray-600">
                    Projects Done
                  </div>
                </div>
                <div className="metric-badge rounded-xl px-4 py-3 text-center">
                  <div className="text-2xl font-black text-emerald-600">
                    98%
                  </div>
                  <div className="text-xs font-semibold text-gray-600">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHY CHOOSE US ─────────────────────────────────────── */}
        <section className="py-10 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-100 to-transparent" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold text-sm mb-8">
                  🏆 Why Isarva Infotech
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  We Don't Just Build Websites.{" "}
                  <span className="text-emerald-600">
                    We Build Growth Engines.
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  With 8+ years of experience and 150+ successful launches,
                  Isarva Infotech is your trusted partner for every stage of
                  your website journey.
                </p>
                <div className="mb-10">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
                    Technologies We Use
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {techStack.map((t) => (
                      <div
                        key={t.name}
                        className="tech-chip flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-gray-700 cursor-default"
                      >
                        <span>{t.icon}</span>
                        {t.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Start Your Project Today
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right – reason cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyUs.map((w, i) => (
                  <div
                    key={i}
                    className="why-card p-6 rounded-2xl lg:text-left text-center"
                  >
                    <div className="text-3xl mb-4 w-fit lg:mx-0 mx-auto">
                      {w.icon}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {w.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {w.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Results image strip */}
            <div className="mt-20 relative rounded-3xl overflow-hidden border border-emerald-100 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=500&fit=crop&q=80"
                alt="Website performance results and analytics"
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 via-emerald-800/50 to-emerald-800/50 flex items-center">
                <div className="px-10 lg:px-16">
                  <p className="text-emerald-300 text-sm font-bold uppercase tracking-widest mb-3">
                    Results That Matter
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-3">
                    Real Growth. Real Numbers.
                  </h3>
                  <p className="text-white/80 text-base max-w-md">
                    Our clients typically see 3× more leads, 2× better
                    engagement, and top-10 Google rankings within 90 days of
                    launch.
                  </p>
                </div>
              </div>
              {/* Floating KPI cards */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex gap-4">
                {[
                  { label: "Avg. Traffic Boost", value: "+240%" },
                  { label: "Avg. Conversion Rate", value: "+3×" },
                  { label: "Google Page Score", value: "95+" },
                ].map((kpi, i) => (
                  <div
                    key={i}
                    className="metric-badge rounded-2xl px-5 py-4 text-center"
                  >
                    <div className="text-2xl font-black text-emerald-600">
                      {kpi.value}
                    </div>
                    <div className="text-xs font-semibold text-gray-600 mt-1">
                      {kpi.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── RELATED SERVICES ──────────────────────────────────── */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.04),transparent_60%)]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-emerald-200 text-emerald-700 font-semibold text-sm mb-6 shadow-sm">
                You Might Also Like
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
                Explore Related Services
              </h2>
              <p className="text-xl text-gray-600">
                Complement your website with these powerful services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  slug: "digital-marketing",
                  icon: "📱",
                  title: "Digital Marketing",
                  desc: "Drive traffic and leads with targeted digital marketing campaigns.",
                },
                {
                  slug: "seo",
                  icon: "🔍",
                  title: "SEO Services",
                  desc: "Rank higher on Google and attract organic traffic to your site.",
                },
                {
                  slug: "wordpress-development",
                  icon: "📝",
                  title: "WordPress Development",
                  desc: "Advanced WordPress solutions for complex requirements.",
                },
              ].map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  prefetch
                  className="group"
                >
                  <div className="h-full p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-2xl  bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-2xl mb-6 shadow-md shadow-emerald-100 group-hover:scale-110 transition-transform duration-300">
                      {r.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{r.desc}</p>
                    <div className="flex items-center gap-2 text-emerald-600 font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span>Explore</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Service"
        preSelectedItem="Website Services"
        allItems={servicesData}
      />
    </>
  );
}
