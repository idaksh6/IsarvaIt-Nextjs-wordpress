"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "../AppLink";
import ContactFormModal from "../../components/ContactFormModal";

const heroImages = [
  {
    title: "Insight Dashboard",
    path: "/products/godown/Dashboard.jpg",
    desc: "Get real-time statistics, top seller analytics, and stock alerts."
  },
  {
    title: "Manage Events",
    path: "/products/godown/Manage-events.jpg",
    desc: "Seamlessly manage event bookings, product dispatches, and rental timelines."
  },
  {
    title: "Stock Auditing",
    path: "/products/godown/Stock-Summary-Report.jpg",
    desc: "Access full history of stock adjustments and detailed timeline metrics."
  }
];

const reportList = [
  {
    id: "stock-summary",
    name: "Stock Summary Report",
    desc: "Complete history of an item's stock timeline: opening stock, adjustments, additions, and deletions.",
    image: "/products/godown/Stock-Summary-Report.jpg",
    icon: "📋"
  },
  {
    id: "current-stock",
    name: "Current Stock Report",
    desc: "A real-time list of what is physically in your godown or warehouse right now, helpful for quick stock audits.",
    image: "/products/godown/Stock-Report.jpg",
    icon: "🏠"
  },
  {
    id: "movement",
    name: "Movement Report",
    desc: "A detailed log tracking which products went to which events or rentals and how much has returned.",
    image: "/products/godown/Even-rent-movement-report.jpg",
    icon: "🚛"
  },
  {
    id: "activity-log",
    name: "Activity Log Report",
    desc: "Tracks every edit, manual override, and adjustment made by users to maintain absolute security.",
    image: "/products/godown/Event-log-report.jpg",
    icon: "🛡️"
  },
  {
    id: "damage-missing",
    name: "Damage & Missing Report",
    desc: "Specialized tracking of damaged and lost items, helping you identify high-cost clients or venues.",
    image: "/products/godown/Damage-missing-report-rent.jpg",
    icon: "❌"
  }
];

const faqItems = [
  {
    q: "How does it help your industry?",
    a: "It helps you manage events, rentals, returns, and payments in one place without confusion, keeping your operations streamlined and unified."
  },
  {
    q: "Can I track product returns properly?",
    a: "Yes, you can track returned items as good, damaged, or missing with full accuracy, ensuring accountability for your stock assets."
  },
  {
    q: "How are payments managed?",
    a: "The system tracks advance payments, event/rental expenses, penalty charges, and pending balances automatically in real-time."
  },
  {
    q: "Do I need to update status manually in Events and Rents?",
    a: "No, the system automatically updates the status based on dispatch and return data. It includes states like Sent, Partially Returned, and Returned."
  },
  {
    q: "Can I track both events and rentals in one system?",
    a: "Yes, everything is managed in one place. Whether it's a short event or a long-term rental, the system handles both with the same powerful flow."
  },
  {
    q: "Can I get reports for decision making?",
    a: "Yes, detailed reports are available anytime. From stock summaries to damage reports, everything can be exported to Excel or PDF with a single click."
  },
  {
    q: "Does the system support barcode and QR code scanning?",
    a: "Yes! The system automatically generates unique QR codes and barcodes for your products. You can scan them to quickly view details or adjust stock on the fly."
  },
  {
    q: "Can I manage multiple user roles and permissions?",
    a: "Yes, administrators can add team members and assign specific page access permissions, ensuring secure access control across different user levels."
  }
];

const eventImages = ["/products/godown/Manage-events.jpg", "/products/godown/Add-Event.jpg"];
const returnImages = ["/products/godown/Event-Return.jpg", "/products/godown/Event-Return-Payment.jpg", "/products/godown/Event-Invoice.jpg"];
const rentalImages = ["/products/godown/Manage-Rents.jpg", "/products/godown/Rent-Return.jpg", "/products/godown/Rent-Invoice.jpg"];

function FeatureImageSlider({ images, interval = 4000, onImageClick }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-zoom-in" style={{ aspectRatio: "16/10" }} onClick={() => onImageClick && onImageClick(images, currentIdx)}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIdx}
          src={images[currentIdx]}
          alt={`Feature slide ${currentIdx + 1}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Slide Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIdx(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${currentIdx === idx ? "bg-indigo-600 w-5" : "bg-white/60 hover:bg-white"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPremiumGodownStaging({ product, relatedProducts, allProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
  const [activeReportIdx, setActiveReportIdx] = useState(0);
  const [faqOpenIdx, setFaqOpenIdx] = useState(null);
  const [lightboxData, setLightboxData] = useState(null);
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);
  const [activeEventTabIdx, setActiveEventTabIdx] = useState(0);
  const [activeReturnTabIdx, setActiveReturnTabIdx] = useState(0);

  // Auto-rotate hero images
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (idx) => {
    setFaqOpenIdx(faqOpenIdx === idx ? null : idx);
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-1deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float1 { animation: float 6s ease-in-out infinite; }
        .animate-float2 { animation: float2 8s ease-in-out infinite; }
        .shimmer-text {
          background: linear-gradient(90deg, #4f46e5, #8b5cf6, #06b6d4, #10b981, #4f46e5);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .hero-bg {
          background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 30%, #ecfeff 60%, #ffffff 100%);
        }
        .hero-mesh-overlay {
          background-image:
            radial-gradient(circle at 10% 20%, rgba(79, 70, 229, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.06) 0%, transparent 45%);
        }
        .grid-bg-overlay {
          background-image: radial-gradient(rgba(79, 70, 229, 0.05) 1.5px, transparent 1.5px);
          background-size: 28px 28px;
        }
        .premium-card {
          background: #ffffff;
          border: 1px solid rgba(79, 70, 229, 0.08);
          box-shadow: 0 10px 40px rgba(79, 70, 229, 0.03);
          transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s, border-color 0.3s;
        }
        .premium-card:hover {
          transform: translateY(-6px);
          border-color: rgba(79, 70, 229, 0.2);
          box-shadow: 0 20px 50px rgba(79, 70, 229, 0.08);
        }
        .hover-border-indigo:hover {
          border-color: rgba(79, 70, 229, 0.35);
          box-shadow: 0 20px 50px rgba(79, 70, 229, 0.12);
        }
        .hover-border-cyan:hover {
          border-color: rgba(6, 182, 212, 0.35);
          box-shadow: 0 20px 50px rgba(6, 182, 212, 0.12);
        }
        .hover-border-emerald:hover {
          border-color: rgba(16, 185, 129, 0.35);
          box-shadow: 0 20px 50px rgba(16, 185, 129, 0.12);
        }
        .hover-border-rose:hover {
          border-color: rgba(244, 63, 94, 0.35);
          box-shadow: 0 20px 50px rgba(244, 63, 94, 0.12);
        }
        .hover-border-purple:hover {
          border-color: rgba(168, 85, 247, 0.35);
          box-shadow: 0 20px 50px rgba(168, 85, 247, 0.12);
        }
        .status-flow-card {
          transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s, border-color 0.3s;
        }
        .status-flow-card:hover {
          transform: translateY(-4px);
        }
        .status-flow-card-blue:hover {
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 12px 30px rgba(59, 130, 246, 0.08);
        }
        .status-flow-card-amber:hover {
          border-color: rgba(245, 158, 11, 0.3);
          box-shadow: 0 12px 30px rgba(245, 158, 11, 0.08);
        }
        .status-flow-card-emerald:hover {
          border-color: rgba(16, 185, 129, 0.3);
          box-shadow: 0 12px 30px rgba(16, 185, 129, 0.08);
        }
        .premium-btn-gradient {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px 0 rgba(79, 70, 229, 0.3);
        }
        .premium-btn-gradient:hover {
          background: linear-gradient(135deg, #4338ca 0%, #6d28d9 100%);
          box-shadow: 0 6px 20px 0 rgba(79, 70, 229, 0.4);
          transform: translateY(-1px);
        }
        .premium-btn-gradient:active {
          transform: translateY(1px);
        }
        .cta-gradient-banner {
          background: linear-gradient(135deg, #312e81 0%, #1e1b4b 50%, #111827 100%);
        }
        .icon-container-centered {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.5rem;
          height: 3.5rem;
          flex-shrink: 0;
          border-radius: 1rem;
        }
      `}</style>

      <div className="bg-slate-50/50 min-h-screen text-slate-700 overflow-x-hidden">

        {/* ── 1. HERO SECTION ── */}
        <section className="hero-bg relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden hero-mesh-overlay">
          {/* Subtle background orbs */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <div className="absolute top-0 left-[-5%] w-[500px] h-[500px] bg-indigo-200/25 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-violet-200/20 rounded-full blur-[100px]" />
            <div className="absolute inset-0 grid-bg-overlay opacity-[0.45]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-10">
              <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/products" className="hover:text-indigo-600 transition-colors">Products</Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-indigo-600 font-semibold">Smart Godown Staging</span>
            </div>

            {/* Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* ── LEFT: Copy + CTAs ── */}
              <div className="flex flex-col text-center lg:text-left">
                {/* Live badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold text-sm mb-8 shadow-sm self-center lg:self-start">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                  </span>
                  Smart Warehouse Management
                </div>

                <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold text-[#000000] leading-[1] mb-6">
                  Smart Godown<br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">
                    & Inventory System
                  </span>
                </h1>

                <p className="text-indigo-600 font-extrabold text-xs tracking-[0.25em] mb-5 uppercase">
                  Track · Manage · Control · Grow
                </p>

                <p className="text-slate-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                  Everything you need to manage your warehouse, stock, events, rentals, and payments — all in one unified, automated platform.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Request Free Demo</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  <a
                    href="#infographics"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 font-bold text-slate-700 bg-white border-2 border-slate-200 rounded-xl hover:border-indigo-400 hover:text-indigo-700 transition-all duration-200 shadow-sm"
                  >
                    View System Workflow
                  </a>
                </div>

                {/* Stat badges */}
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                  {[
                    { icon: "📦", val: "10,000+", label: "SKUs" },
                    { icon: "⚡", val: "Real-Time", label: "Sync" },
                    { icon: "🛡️", val: "100%", label: "Secure" },
                    { icon: "📊", val: "50+", label: "Reports" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm text-xs">
                      <span>{stat.icon}</span>
                      <span className="font-extrabold text-slate-800">{stat.val}</span>
                      <span className="text-slate-400 hidden sm:inline">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── RIGHT: Browser Mockup ── */}
              <div className="relative">
                {/* Subtle glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100/50 via-transparent to-violet-100/40 blur-2xl rounded-3xl pointer-events-none" />

                {/* Tab Switcher */}
                <div className="flex justify-start mb-3 relative z-10 w-full overflow-x-auto scrollbar-hide">
                  <div className="inline-flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-xl shadow-sm flex-nowrap">
                    {[
                      { idx: 0, icon: "📊", title: "Dashboard" },
                      { idx: 1, icon: "📅", title: "Events" },
                      { idx: 2, icon: "🔍", title: "Stock Audit" },
                    ].map((tab) => (
                      <button
                        key={tab.idx}
                        onClick={(e) => {
                          setHeroIdx(tab.idx);
                          // Scroll only the parent container, not the viewport
                          const container = e.currentTarget.parentElement?.parentElement;
                          if (container) {
                            const btn = e.currentTarget;
                            const leftPos = btn.offsetLeft - (container.clientWidth / 2) + (btn.clientWidth / 2);
                            container.scrollTo({
                              left: leftPos,
                              behavior: "smooth"
                            });
                          }
                        }}
                        className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap flex-shrink-0 ${
                          heroIdx === tab.idx
                            ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm"
                            : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <span>{tab.icon}</span>
                        <span>{tab.title}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Light Browser Frame */}
                <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/60">
                  {/* Title bar */}
                  <div className="flex items-center gap-3 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
                    <div className="flex gap-1.5 flex-shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="bg-white border border-slate-200 rounded-md text-[10px] text-slate-400 px-3 py-1 text-center font-mono truncate select-none">
                        {heroIdx === 0 ? "godown.app/dashboard" : heroIdx === 1 ? "godown.app/events" : "godown.app/stock-audit"}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-black text-emerald-600 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div
                    className="relative overflow-hidden cursor-zoom-in group/screen"
                    style={{ aspectRatio: "16/10" }}
                    onClick={() => setLightboxData({ images: heroImages.map(img => img.path), currentIndex: heroIdx })}
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={heroIdx}
                        src={heroImages[heroIdx].path}
                        alt={heroImages[heroIdx].title}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                    </AnimatePresence>

                    {/* Hover hint */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover/screen:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <div className="bg-white/90 backdrop-blur-sm text-slate-700 px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-md border border-slate-100">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                        Expand
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* ── 2. INFOGRAPHICS SECTION ── */}
        <section id="infographics" className="py-12 lg:py-16 bg-gradient-to-b from-white via-cyan-50/20 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-100 to-transparent" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm mb-6">
                ✨ System Architecture
              </div>
              <h2 className="mb-6 capitalize">
                Visualizing the Complete Pipeline
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Our system coordinates inventory levels, product movements, events dispatch, rental terms, returns audits, and customer invoice calculations in a single flow.
              </p>
            </div>

            <div className="max-w-5xl mx-auto p-2 bg-slate-50 rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden">
              {/* Desktop Infographic (Using smaller image sizes to avoid staging load issues) */}
              <img
                src="/products/godown/godown_infographic_desktop.png"
                alt="Godown Management System Desktop Infographics"
                className="hidden md:block w-full h-auto rounded-[1.4rem]"
              />
              {/* Mobile Infographic */}
              <img
                src="/products/godown/godown_infographic_mobile.png"
                alt="Godown Management System Mobile Infographics"
                className="block md:hidden w-full h-auto rounded-[1.4rem]"
              />
            </div>
          </div>
        </section>

        {/* ── 3. DASHBOARD INSIGHTS SECTION ── */}
        <section className="py-16 bg-gradient-to-b from-slate-50/80 via-indigo-50/10 to-slate-50/80 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">

            {/* Header Content (Centered) */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm mb-6">
                📊 Dashboard Analytics
              </div>
              <h2 className="mb-6 capitalize max-w-2xl mx-auto">
                Your Business <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-600">Operations</span> at a Glance
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Get real-time tracking metrics and operations oversight. Keep monitor tabs on stock statuses, category splits, and outgoing shipments instantly.
              </p>
            </div>

            {/* 2-Column Split: Image on Left, Vertical Stacked Cards on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Side: Mockup Image */}
              <div className="relative lg:col-span-8 w-full cursor-zoom-in group" onClick={() => setLightboxData({ images: ["/products/godown/Dashboard.jpg"], currentIndex: 0 })}>
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100/40 to-cyan-100/40 blur-[50px] rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-2xl bg-white p-2">
                  <img
                    src="/products/godown/Dashboard.jpg"
                    alt="Warehouse Analytics Dashboard Screen"
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute top-4 right-4 bg-slate-900/70 backdrop-blur-md text-white p-2.5 rounded-full shadow-md transition-opacity duration-300 pointer-events-none z-20 flex items-center justify-center opacity-85 md:opacity-0 group-hover:opacity-100">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Side: 4 Boxes Stacked Vertically */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                {[
                  {
                    icon: "📁",
                    title: "Total Categories",
                    desc: "See your complete sub-category and category tree organized in one simple, quick view.",
                    bg: "bg-indigo-50",
                    text: "text-indigo-600",
                    badge: "98% Classified",
                    badgeBg: "bg-indigo-50 border-indigo-100 text-indigo-700",
                    progress: 98,
                    color: "bg-indigo-600"
                  },
                  {
                    icon: "📦",
                    title: "Overall Stock Count",
                    desc: "Know your physical stock counts, adjustments, and exact quantity volumes in real-time.",
                    bg: "bg-cyan-50",
                    text: "text-cyan-600",
                    badge: "Live Sync",
                    badgeBg: "bg-emerald-50 border-emerald-100 text-emerald-700 animate-pulse",
                    progress: 100,
                    color: "bg-cyan-500"
                  },
                  {
                    icon: "🏷️",
                    title: "Total Products",
                    desc: "Easily configure and manage all your catalog stock listings, specs, and details in one place.",
                    bg: "bg-emerald-50",
                    text: "text-emerald-600",
                    badge: "Active Catalog",
                    badgeBg: "bg-emerald-50 border-emerald-100 text-emerald-700",
                    progress: 85,
                    color: "bg-emerald-500"
                  },
                  {
                    icon: "🚨",
                    title: "Out of Stock Alerts",
                    desc: "Instant warning lists for depleted stocks, helping you prevent order bottlenecks.",
                    bg: "bg-rose-50",
                    text: "text-rose-600",
                    badge: "8 Alerts Pending",
                    badgeBg: "bg-rose-50 border-rose-100 text-rose-700",
                    progress: 12,
                    color: "bg-rose-500"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3.5 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-0.5 group">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3">
                      <div className={`w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center text-xl mx-auto sm:mx-0 ${item.bg} ${item.text}`}>
                        {item.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between gap-1 mb-1">
                          <h3 className="mb-0">{item.title}</h3>
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${item.badgeBg}`}>{item.badge}</span>
                        </div>
                        <p className="text-xs text-slate-555 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Miniature Progress Bar */}
                    <div className="w-full space-y-1">
                      <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                        <span>System Allocation</span>
                        <span>{item.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: idx * 0.1 }}
                          className={`h-full rounded-full ${item.color}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ── 4. USER & CUSTOMER MANAGEMENT SECTION ── */}
        <section className="pt-4 pb-12 lg:py-16 bg-gradient-to-b from-white via-purple-50/10 to-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left Column Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm mb-6">
                  👥 Access & Clients
                </div>
                <h2 className="mb-6 capitalize">
                  Simple Setup, Powerful <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Access Controls</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Manage your system permissions and client logs in one place. Add team members and clients quickly with direct workflow assignments.
                </p>

                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl mx-auto sm:mx-0 flex-shrink-0">
                      👥
                    </div>
                    <div>
                      <h3 className="mb-1 text-center sm:text-left">User Management</h3>
                      <p className="text-sm text-slate-555 leading-relaxed text-center sm:text-left">
                        Assign page-specific permissions and feature restrictions to staff. Control who can edit inventory, approve returns, or view billing sheets.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-xl mx-auto sm:mx-0 flex-shrink-0">
                      🤝
                    </div>
                    <div>
                      <h3 className="mb-1 text-center sm:text-left">Customer & Vendor Module</h3>
                      <p className="text-sm text-slate-555 leading-relaxed text-center sm:text-left">
                        Track details for customers and vendors alike. Easily toggle custom transaction parameters, past log histories, and active rental lists.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column Image */}
              <div className="relative cursor-zoom-in group" onClick={() => setLightboxData({ images: ["/products/godown/User-Management.jpg"], currentIndex: 0 })}>
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-100/50 to-indigo-100/50 blur-[50px] rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-2xl bg-white p-2">
                  <img
                    src="/products/godown/User-Management.jpg"
                    alt="User Roles and Client Management Screen"
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute top-4 right-4 bg-slate-900/70 backdrop-blur-md text-white p-2.5 rounded-full shadow-md transition-opacity duration-300 pointer-events-none z-20 flex items-center justify-center opacity-85 md:opacity-0 group-hover:opacity-100">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 5. MASTER SETUP SECTION ── */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-slate-50/60 via-indigo-50/15 to-slate-50/60 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

              {/* Left Column Image */}
              <div className="relative order-2 lg:order-1 cursor-zoom-in group" onClick={() => setLightboxData({ images: ["/products/godown/Manage-products-units.jpg"], currentIndex: 0 })}>
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 blur-[50px] rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-2xl bg-white p-2">
                  <img
                    src="/products/godown/Manage-products-units.jpg"
                    alt="Product and Unit Setup Screen"
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute top-4 right-4 bg-slate-900/70 backdrop-blur-md text-white p-2.5 rounded-full shadow-md transition-opacity duration-300 pointer-events-none z-20 flex items-center justify-center opacity-85 md:opacity-0 group-hover:opacity-100">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Column Content */}
              <div className="text-center lg:text-left order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm mb-6">
                  🏗️ System Foundation
                </div>
                <h2 className="mb-6 capitalize">
                  Build a Scalable <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-600">Warehouse Foundation</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Define the core variables of your business. Create custom units and product rules to align the software with your precise physical operational routines.
                </p>

                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl mx-auto sm:mx-0 flex-shrink-0">
                      📏
                    </div>
                    <div>
                      <h3 className="mb-1 text-center sm:text-left">Custom Units Configuration</h3>
                      <p className="text-sm text-slate-555 leading-relaxed text-center sm:text-left">
                        Configure standard weights and sizes like Kilograms, Litres, and Pieces, or define custom crates, event packs, and volume bounds.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mx-auto sm:mx-0 flex-shrink-0">
                      🏗️
                    </div>
                    <div>
                      <h3 className="mb-1 text-center sm:text-left">Core Setup Integrity</h3>
                      <p className="text-sm text-slate-555 leading-relaxed text-center sm:text-left">
                        Establishes unit associations, package tracking criteria, and standard categories before importing your product master lists.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 6. INTELLIGENT INVENTORY & QR CODES ── */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-indigo-50/20 via-white to-cyan-50/20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">

            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm mb-6">
                📦 Inventory Setup
              </div>
              <h2 className="mb-6 capitalize">
                Automated <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Product Control</span> & Barcoding
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Organize items through clean hierarchies and manage stock levels easily with system-generated barcode tracking.
              </p>
            </div>

            {/* Tabbed Feature Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-12">
              
              {/* Left Column: Interactive Feature Selector */}
              <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
                {[
                  { 
                    id: 0,
                    icon: "📁", 
                    title: "Category Tree", 
                    desc: "Implement a simple parent-child hierarchy. Map complex inventory items under general divisions for easy sorting.",
                    tag: "Hierarchical Categorization",
                    color: "indigo"
                  },
                  { 
                    id: 1,
                    icon: "🏷️", 
                    title: "Product Master List", 
                    desc: "Central registry for all stock parameters: standard cost values, purchase notes, descriptions, thresholds, and photo links.",
                    tag: "Detailed Specifications",
                    color: "cyan"
                  },
                  { 
                    id: 2,
                    icon: "✨", 
                    title: "Smart QR & Barcodes", 
                    desc: "The system automatically generates unique QR codes and barcodes for every product, enabling quick scans for dispatches and adjustments.",
                    tag: "Automatic Code Generation",
                    color: "emerald"
                  }
                ].map((item) => {
                  const isActive = activeFeatureIdx === item.id;
                  
                  // Setup custom colors based on item
                  const borderClass = isActive
                    ? item.color === "indigo" ? "border-indigo-500 shadow-[0_10px_30px_rgba(99,102,241,0.08)] bg-indigo-50/20"
                      : item.color === "cyan" ? "border-cyan-500 shadow-[0_10px_30px_rgba(6,182,212,0.08)] bg-cyan-50/20"
                      : "border-emerald-500 shadow-[0_10px_30px_rgba(16,185,129,0.08)] bg-emerald-50/20"
                    : "border-slate-200/60 bg-white hover:border-slate-350 hover:bg-slate-50/30";
                  
                  const iconBg = isActive
                    ? item.color === "indigo" ? "bg-indigo-600 text-white"
                      : item.color === "cyan" ? "bg-cyan-600 text-white"
                      : "bg-emerald-600 text-white"
                    : item.color === "indigo" ? "bg-indigo-50 text-indigo-600"
                      : item.color === "cyan" ? "bg-cyan-50 text-cyan-600"
                      : "bg-emerald-50 text-emerald-600";

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveFeatureIdx(item.id)}
                      className={`p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4 cursor-pointer relative overflow-hidden w-full ${borderClass}`}
                    >
                      {/* Active Left Indicator Line */}
                      {isActive && (
                        <div className={`absolute top-0 bottom-0 left-0 w-1 ${
                          item.color === "indigo" ? "bg-indigo-600" : item.color === "cyan" ? "bg-cyan-600" : "bg-emerald-600"
                        }`} />
                      )}
                      
                      <div className={`w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center text-xl transition-all duration-300 mx-auto sm:mx-0 ${iconBg}`}>
                        {item.icon}
                      </div>
                      
                      <div className="space-y-1 min-w-0 w-full">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                          <h3 className="text-base font-extrabold text-slate-800 mb-0 text-center sm:text-left">{item.title}</h3>
                          <span className={`text-[9px] font-black tracking-wider px-2 py-0.5 rounded-full mx-auto sm:mx-0 ${
                            isActive 
                              ? item.color === "indigo" ? "bg-indigo-100 text-indigo-700" : item.color === "cyan" ? "bg-cyan-100 text-cyan-700" : "bg-emerald-100 text-emerald-700"
                              : "bg-slate-100 text-slate-500"
                          }`}>{item.tag}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-center sm:text-left">{item.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {/* Right Column: Premium Mockup Showcase Window */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="relative w-full">
                  {/* Glowing backdrop shadow */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100/40 via-cyan-100/30 to-emerald-100/30 blur-[40px] rounded-3xl" />
                  
                  {/* Device frame container */}
                  <div className="relative bg-white rounded-3xl border border-slate-200/80 shadow-2xl p-2.5 overflow-hidden">
                    {/* Mock Browser Header Bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-150 rounded-t-2xl">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="bg-white border border-slate-200/60 rounded-md text-[10px] text-slate-400 px-12 py-1 select-none font-semibold truncate max-w-xs text-center">
                        {activeFeatureIdx === 0 ? "godown.app/categories" : activeFeatureIdx === 1 ? "godown.app/products" : "godown.app/barcodes"}
                      </div>
                      <div className="w-6" /> {/* Spacer */}
                    </div>
                    
                    {/* Active Screenshot Display Frame */}
                    <div 
                      className="relative w-full rounded-b-2xl overflow-hidden bg-slate-50 cursor-zoom-in group/img" 
                      style={{ aspectRatio: "16/11" }}
                      onClick={() => setLightboxData({ 
                        images: ["/products/godown/Manage-categories.jpg", "/products/godown/Product-Management.jpg", "/products/godown/Qr-code_barcode.jpg"], 
                        currentIndex: activeFeatureIdx 
                      })}
                    >
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={activeFeatureIdx}
                          src={
                            activeFeatureIdx === 0 ? "/products/godown/Manage-categories.jpg"
                            : activeFeatureIdx === 1 ? "/products/godown/Product-Management.jpg"
                            : "/products/godown/Qr-code_barcode.jpg"
                          }
                          alt="Product Barcoding Setup Mockup"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </AnimatePresence>
                      
                      {/* Responsive Hover Zoom Glass Badge */}
                      <div className="absolute top-4 right-4 bg-slate-900/70 backdrop-blur-md text-white p-2.5 rounded-full shadow-md transition-opacity duration-300 pointer-events-none z-20 flex items-center justify-center opacity-85 md:opacity-0 group-hover/img:opacity-100">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

          </div>
        </section>

        {/* ── 7. PRODUCT MOVEMENT BANNER ── */}
        <section className="py-12 lg:py-16 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-white/10 text-indigo-200 text-xs font-black tracking-wider inline-block">
              Movement Engine
            </span>
            <h2 className="text-white">
              Seamless Dispatches & Returns System
            </h2>
            <p className="text-indigo-100 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
              The core engine tracks dispatches and returns. It supports both short-term <strong>Event Bookings</strong> and long-term <strong>Product Rentals</strong> within the same dashboard flow.
            </p>
          </div>
        </section>

        {/* ── 8. EVENT MANAGEMENT SECTION ── */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-slate-50/60 via-cyan-50/15 to-slate-50/60 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left Column Mockup Showcase */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="relative w-full">
                  <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100/50 to-cyan-100/50 blur-[50px] rounded-3xl" />
                  
                  {/* Browser Mockup Window */}
                  <div className="relative bg-white rounded-3xl border border-slate-200/80 shadow-2xl p-2.5 overflow-hidden">
                    {/* Window Title Bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-150 rounded-t-2xl">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="bg-white border border-slate-200/60 rounded-md text-[10px] text-slate-400 px-12 py-1 select-none font-semibold truncate max-w-xs text-center">
                        {activeEventTabIdx === 1 ? "godown.app/events/schedules" : "godown.app/events/create"}
                      </div>
                      <div className="w-6" />
                    </div>

                    {/* Interactive Screenshot Display Frame */}
                    <div 
                      className="relative w-full rounded-b-2xl overflow-hidden bg-slate-50 cursor-zoom-in group/img" 
                      style={{ aspectRatio: "16/10" }}
                      onClick={() => setLightboxData({ 
                        images: ["/products/godown/Manage-events.jpg", "/products/godown/Add-Event.jpg"], 
                        currentIndex: activeEventTabIdx === 1 ? 0 : 1 
                      })}
                    >
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={activeEventTabIdx}
                          src={activeEventTabIdx === 1 ? "/products/godown/Manage-events.jpg" : "/products/godown/Add-Event.jpg"}
                          alt="Event Dispatch controls"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </AnimatePresence>

                      {/* Responsive Hover Zoom Glass Badge */}
                      <div className="absolute top-4 right-4 bg-slate-900/70 backdrop-blur-md text-white p-2.5 rounded-full shadow-md transition-opacity duration-300 pointer-events-none z-20 flex items-center justify-center opacity-85 md:opacity-0 group-hover/img:opacity-100">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column Interactive List */}
              <div className="lg:col-span-5 text-center lg:text-left order-1 lg:order-2 mt-8 lg:mt-0">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm mb-6">
                  🚛 Dispatch Tracking
                </div>
                <h2 className="mb-6 capitalize">
                  Event Dispatch & <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-600">Stock Safeties</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Assign and track dispatches for event dates. Prevent scheduling double-bookings and stock shortages before dispatches occur.
                </p>

                {/* Interactive highlight lists */}
                <div className="space-y-4 pt-6 border-t border-slate-200">
                  {[
                    {
                      id: 0,
                      icon: "🔒",
                      title: "Product Selection Safeties",
                      desc: "The system cross-references active stocks and blocks dispatches of items that aren't physically in the warehouse."
                    },
                    {
                      id: 1,
                      icon: "📅",
                      title: "Expected Return Schedules",
                      desc: "Define target return times for event gear. Track which dispatches are due back to plan subsequent bookings."
                    },
                    {
                      id: 2,
                      icon: "💰",
                      title: "Booking Financial Logs",
                      desc: "Log booking advances, expenses, and pending balances directly on the event dispatch form."
                    }
                  ].map((item) => {
                    const isSelected = activeEventTabIdx === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveEventTabIdx(item.id)}
                        className={`w-full p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4 cursor-pointer ${
                          isSelected 
                            ? "bg-white border-indigo-200 shadow-md shadow-indigo-600/5" 
                            : "border-transparent hover:bg-white/40"
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl font-bold transition-colors mx-auto sm:mx-0 ${
                          isSelected ? "bg-indigo-600 text-white" : "bg-indigo-50 text-indigo-600"
                        }`}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="mb-1 text-center sm:text-left">{item.title}</h3>
                          <p className="text-slate-505 text-xs sm:text-sm mt-0.5 leading-relaxed text-center sm:text-left">{item.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 9. EVENT RETURN & QUALITY CONTROL SECTION ── */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-emerald-50/10 via-white to-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left Column Interactive List */}
              <div className="lg:col-span-5 text-center lg:text-left mt-8 lg:mt-0">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm mb-6">
                  🛡️ Returns Accountability
                </div>
                <h2 className="mb-6 capitalize">
                  Meticulous Return & <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Quality Control Audits</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Account for returned items accurately. Track damages, update client balances, and log return conditions details easily.
                </p>

                {/* Interactive highlight lists */}
                <div className="space-y-4 pt-6 border-t border-slate-200">
                  {[
                    {
                      id: 0,
                      icon: "🛡️",
                      title: "Three-State Return Audits",
                      desc: "Log returned inventory in three distinct categories: Good Condition, Damaged, or Missing items."
                    },
                    {
                      id: 1,
                      icon: "🧮",
                      title: "Audit Balancing Formula",
                      desc: "System automatically calculates returned totals using the formula: Returned = Good + Damaged + Missing."
                    },
                    {
                      id: 2,
                      icon: "💸",
                      title: "Automated Penalty Billing",
                      desc: "Damaged and missing items automatically trigger configured penalty fees, updating the client's balance sheet instantly."
                    }
                  ].map((item) => {
                    const isSelected = activeReturnTabIdx === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveReturnTabIdx(item.id)}
                        className={`w-full p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4 cursor-pointer ${
                          isSelected 
                            ? "bg-white border-indigo-200 shadow-md shadow-indigo-600/5" 
                            : "border-transparent hover:bg-white/40"
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl font-bold transition-colors mx-auto sm:mx-0 ${
                          isSelected ? "bg-indigo-600 text-white" : "bg-indigo-50 text-indigo-600"
                        }`}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="mb-1 text-center sm:text-left">{item.title}</h3>
                          <p className="text-slate-505 text-xs sm:text-sm mt-0.5 leading-relaxed text-center sm:text-left">{item.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column Mockup Showcase */}
              <div className="lg:col-span-7">
                <div className="relative w-full">
                  <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100/50 to-emerald-100/40 blur-[50px] rounded-3xl" />
                  
                  {/* Browser Mockup Window */}
                  <div className="relative bg-white rounded-3xl border border-slate-200/80 shadow-2xl p-2.5 overflow-hidden">
                    {/* Window Title Bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-150 rounded-t-2xl">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="bg-white border border-slate-200/60 rounded-md text-[10px] text-slate-400 px-12 py-1 select-none font-semibold truncate max-w-xs text-center">
                        {activeReturnTabIdx === 0 ? "godown.app/events/return-check" : activeReturnTabIdx === 1 ? "godown.app/events/reconciliation" : "godown.app/invoices/generate"}
                      </div>
                      <div className="w-6" />
                    </div>

                    {/* Interactive Screenshot Display Frame */}
                    <div 
                      className="relative w-full rounded-b-2xl overflow-hidden bg-slate-50 cursor-zoom-in group/img" 
                      style={{ aspectRatio: "16/10" }}
                      onClick={() => setLightboxData({ 
                        images: ["/products/godown/Event-Return.jpg", "/products/godown/Event-Return-Payment.jpg", "/products/godown/Event-Invoice.jpg"], 
                        currentIndex: activeReturnTabIdx 
                      })}
                    >
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={activeReturnTabIdx}
                          src={
                            activeReturnTabIdx === 0 ? "/products/godown/Event-Return.jpg"
                            : activeReturnTabIdx === 1 ? "/products/godown/Event-Return-Payment.jpg"
                            : "/products/godown/Event-Invoice.jpg"
                          }
                          alt="Quality Audits controls"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </AnimatePresence>

                      {/* Responsive Hover Zoom Glass Badge */}
                      <div className="absolute top-4 right-4 bg-slate-900/70 backdrop-blur-md text-white p-2.5 rounded-full shadow-md transition-opacity duration-300 pointer-events-none z-20 flex items-center justify-center opacity-85 md:opacity-0 group-hover/img:opacity-100">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 10. SMART STATUS FLOW VISUALIZER ── */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-indigo-50/40 via-slate-50/30 to-cyan-50/30 border-y border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.4] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(rgba(79, 70, 229, 0.05) 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="text-indigo-650 font-bold tracking-widest text-xs block mb-3">Status Automation</span>
              <h2 className="text-slate-900 mb-6 capitalize">
                Smart Status Flow: <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-600">Zero Manual Updates</span>
              </h2>
              <p className="text-slate-600 mt-4 text-base max-w-xl mx-auto">
                The system monitors dispatches and return counts to transition order states automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative mt-16">
              {/* Connector line for desktop - with custom progress animation */}
              <div className="hidden md:block absolute top-[2.5rem] left-[16.6%] right-[16.6%] h-1 bg-slate-100 rounded-full z-0 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 via-amber-500 to-emerald-500 shadow-[0_0_12px_rgba(79,70,229,0.3)] animate-pulse"
                />
              </div>

              {/* Card 1: Sent */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 text-center space-y-4 status-flow-card status-flow-card-blue z-10 shadow-sm hover:shadow-lg transition-all duration-350 hover:-translate-y-1 relative group">
                <div className="hidden md:flex absolute -top-[1.25rem] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-md items-center justify-center text-[10px] text-white font-extrabold z-20 transition-transform duration-300 group-hover:scale-125" />
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl mx-auto group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  🚚
                </div>
                <div>
                  <h3 className="mb-1">1. Sent</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">All items are logged and dispatched for the event or rental period.</p>
                </div>
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                    <span>Order Dispatch Rate</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full w-full" />
                  </div>
                  <div className="text-[10px] bg-blue-50 text-blue-700 py-1 px-2.5 rounded-full inline-block font-bold">Dispatched State</div>
                </div>
              </div>

              {/* Card 2: Partially Returned */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 text-center space-y-4 status-flow-card status-flow-card-amber z-10 shadow-sm hover:shadow-lg transition-all duration-350 hover:-translate-y-1 relative group">
                <div className="hidden md:flex absolute -top-[1.25rem] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-amber-500 border-4 border-white shadow-md items-center justify-center text-[10px] text-white font-extrabold z-20 transition-transform duration-300 group-hover:scale-125" />
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xl mx-auto group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  📦
                </div>
                <div>
                  <h3 className="mb-1">2. Partially Returned</h3>
                  <p className="text-slate-555 text-xs sm:text-sm leading-relaxed">A portion of the dispatch returns. Remaining items are flagged as due.</p>
                </div>
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                    <span>Active Audit Rate</span>
                    <span>45%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full w-[45%]" />
                  </div>
                  <div className="text-[10px] bg-amber-50 text-amber-700 py-1 px-2.5 rounded-full inline-block font-bold">Pending Items</div>
                </div>
              </div>

              {/* Card 3: Returned */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 text-center space-y-4 status-flow-card status-flow-card-emerald z-10 shadow-sm hover:shadow-lg transition-all duration-350 hover:-translate-y-1 relative group">
                <div className="hidden md:flex absolute -top-[1.25rem] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-white shadow-md items-center justify-center text-[10px] text-white font-extrabold z-20 transition-transform duration-300 group-hover:scale-125" />
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl mx-auto group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  ✅
                </div>
                <div>
                  <h3 className="mb-1">3. Returned</h3>
                  <p className="text-slate-555 text-xs sm:text-sm leading-relaxed">All items return. Damage/missing fees are calculated to close the balance.</p>
                </div>
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                    <span>Reconciliation Rate</span>
                    <span>0%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-0" />
                  </div>
                  <div className="text-[10px] bg-emerald-50 text-emerald-700 py-1 px-2.5 rounded-full inline-block font-bold">Order Settled</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── 11. RENT MANAGEMENT SECTION ── */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-white via-indigo-50/10 to-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left Column: Image with auto-sliding display */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100/50 to-cyan-100/50 blur-[50px] rounded-3xl" />
                <div className="relative bg-white p-3 rounded-[2rem] border border-slate-200/80 shadow-2xl">
                  <FeatureImageSlider images={rentalImages} onImageClick={(imgs, idx) => setLightboxData({ images: imgs, currentIndex: idx })} />
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="text-center lg:text-left mt-8 lg:mt-0">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm mb-6">
                  📝 Rental Contracts
                </div>
                <h2 className="mb-6 capitalize">
                  Flexible Long-Term <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Rental Management</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Manage ongoing product rentals with flexible billing rules. Track return schedules, generate invoices, and handle deposits easily.
                </p>

                <div className="space-y-4 pt-6 border-t border-slate-200">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 text-xl font-bold mx-auto sm:mx-0">
                      📄
                    </div>
                    <div>
                      <h3 className="text-center sm:text-left">Rental Invoices</h3>
                      <p className="text-slate-555 text-sm mt-0.5 text-center sm:text-left">Generate rental receipts containing details for security deposits, period lengths, and tax rates.</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 text-xl font-bold mx-auto sm:mx-0">
                      ⏰
                    </div>
                    <div>
                      <h3 className="text-center sm:text-left">Expected Return Schedules</h3>
                      <p className="text-slate-555 text-sm mt-0.5 text-center sm:text-left">Monitor open rental terms and send return reminders before dates lapse.</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 text-xl font-bold mx-auto sm:mx-0">
                      ⚖️
                    </div>
                    <div>
                      <h3 className="text-center sm:text-left">Condition Checks on Return</h3>
                      <p className="text-slate-555 text-sm mt-0.5 text-center sm:text-left">Assess returns condition and easily deduct repair fees from security deposits.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 12. INSIGHT REPORTS SECTION ── */}
        <section id="reports" className="py-12 lg:py-16 bg-gradient-to-b from-slate-50/80 via-indigo-50/20 to-slate-50/80 border-t border-slate-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">

            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm mb-6">
                📋 Management Reports
              </div>
              <h2 className="mb-6 capitalize">
                Actionable Intelligence & <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-600">Reports</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Generate detailed operation reports instantly. Export data to PDF and Excel to sync with accounting software.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Reports Tabs navigation — horizontal scroll on mobile, vertical list on desktop */}
              <div className="lg:col-span-4">
                {/* Mobile: horizontal scroll tabs */}
                <div className="flex lg:hidden gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {reportList.map((rep, idx) => (
                    <button
                      key={rep.id}
                      onClick={(e) => {
                        setActiveReportIdx(idx);
                        const container = e.currentTarget.parentElement;
                        if (container) {
                          const btn = e.currentTarget;
                          const leftPos = btn.offsetLeft - (container.clientWidth / 2) + (btn.clientWidth / 2);
                          container.scrollTo({
                            left: leftPos,
                            behavior: "smooth"
                          });
                        }
                      }}
                      className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-bold transition-all duration-200 cursor-pointer ${
                        activeReportIdx === idx
                          ? "bg-gradient-to-r from-indigo-600 to-violet-600 border-transparent text-white shadow-md"
                          : "bg-white border-slate-200 text-slate-600"
                      }`}
                    >
                      <span>{rep.icon}</span>
                      <span className="whitespace-nowrap">{rep.name}</span>
                    </button>
                  ))}
                </div>
                {/* Desktop: vertical list */}
                <div className="hidden lg:flex flex-col space-y-3">
                  {reportList.map((rep, idx) => (
                    <button
                      key={rep.id}
                      onClick={() => setActiveReportIdx(idx)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-4 cursor-pointer ${activeReportIdx === idx
                        ? "bg-gradient-to-r from-indigo-600 to-violet-600 border-transparent text-white shadow-lg shadow-indigo-600/20"
                        : "bg-white border-slate-200/60 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                    >
                      <span className="text-2xl flex-shrink-0 mt-0.5">{rep.icon}</span>
                      <div>
                        <h3 className={`leading-tight ${activeReportIdx === idx ? "text-white" : "text-slate-800"}`}>{rep.name}</h3>
                        <p className={`text-xs mt-1 leading-snug line-clamp-2 ${activeReportIdx === idx ? "text-indigo-50/80" : "text-slate-400"}`}>
                          {rep.desc}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected report screenshot and actions */}
              <div className="lg:col-span-8 bg-white p-4 rounded-3xl border border-slate-200/60 shadow-xl space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <h3>
                      {reportList[activeReportIdx].name}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                      {reportList[activeReportIdx].desc}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black rounded-lg">PDF Supported</span>
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-black rounded-lg">Excel Ready</span>
                  </div>
                </div>

                <div className="relative w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-zoom-in" style={{ aspectRatio: "16/10" }} onClick={() => setLightboxData({ images: [reportList[activeReportIdx].image], currentIndex: 0 })}>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeReportIdx}
                      src={reportList[activeReportIdx].image}
                      alt={reportList[activeReportIdx].name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── 13. WHY STAND OUT SECTION ── */}
        <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="bg-gradient-to-br from-indigo-50/30 via-slate-50 to-emerald-50/20 rounded-[2.5rem] border border-slate-200/40 p-8 sm:p-12 lg:p-16 shadow-inner">

              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-indigo-600 font-bold tracking-wider text-sm block mb-3">Key Differentiators</span>
                <h2 className="mb-6 capitalize">
                  Why Our Godown System <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Stands Out</span>
                </h2>
                <p className="text-slate-550 mt-4 text-sm sm:text-base leading-relaxed">
                  Engineered with intelligent integrations to minimize manual bookkeeping errors.
                </p>
              </div>

              {/* Asymmetrical Bento Grid of 6 white cards with interactive inline highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                {/* Card 1: All-in-One Solution (Spans 2 columns) */}
                <div className="bg-white p-8 rounded-3xl border border-slate-150 shadow-sm flex flex-col gap-6 items-center text-center md:col-span-2 premium-card hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(99,102,241,0.08)] group">
                  <div className="icon-container-centered bg-indigo-50 text-indigo-600 mb-2 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-sm w-16 h-16 text-3xl">
                    🎯
                  </div>
                  <div className="space-y-2">
                    <h3>All-in-One Solution</h3>
                    <p className="text-slate-555 text-xs sm:text-sm leading-relaxed">
                      Manage your warehouse inventories, client contacts, events checklists, rental agreements, and invoice records in one portal.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2 justify-center">
                      {["Inventory", "Clients", "Events", "Rentals", "Invoicing"].map((t, i) => (
                        <span key={i} className="text-[10px] font-bold bg-slate-50 text-slate-500 px-2.5 py-1 rounded-full border border-slate-200/50">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card 2: Smart Automation (Spans 1 column) */}
                <div className="bg-white p-6 rounded-3xl border border-slate-150 shadow-sm flex flex-col items-center text-center md:col-span-1 premium-card hover:border-cyan-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(6,182,212,0.08)] group">
                  <div className="icon-container-centered bg-cyan-50 text-cyan-600 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    🤖
                  </div>
                  <h3>Smart Automation</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                    Automatically transitions order statuses from Sent to Returned, eliminating manual logs audit delays.
                  </p>
                  <span className="text-[10px] font-bold bg-cyan-50 text-cyan-700 px-2.5 py-1 rounded-full border border-cyan-100 animate-pulse">Auto-Update Flow</span>
                </div>

                {/* Card 3: Financial Control (Spans 1 column) */}
                <div className="bg-white p-6 rounded-3xl border border-slate-150 shadow-sm flex flex-col items-center text-center md:col-span-1 premium-card hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(10,185,129,0.08)] group">
                  <div className="icon-container-centered bg-emerald-50 text-emerald-600 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    💳
                  </div>
                  <h3>Financial Control</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                    Monitor advances, calculate damage penalties, and compute final outstanding balances automatically.
                  </p>
                  <div className="text-[10px] font-black bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md border border-emerald-100 font-mono">
                    Returned = Good + Damaged + Missing
                  </div>
                </div>

                {/* Card 4: Quality Tracking (Spans 1 column) */}
                <div className="bg-white p-6 rounded-3xl border border-slate-150 shadow-sm flex flex-col items-center text-center md:col-span-1 premium-card hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(99,102,241,0.12)] group">
                  <div className="icon-container-centered bg-indigo-50 text-indigo-600 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    ✨
                  </div>
                  <h3>Quality Tracking</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                    Know the exact physical condition of returned items immediately, keeping your assets accountable.
                  </p>
                  <div className="flex gap-1.5 justify-center">
                    {["Good", "Damaged", "Missing"].map((c, i) => (
                      <span key={i} className={`text-[9px] font-bold px-2 py-0.5 rounded ${
                        c === "Good" ? "bg-emerald-50 text-emerald-700" : c === "Damaged" ? "bg-amber-50 text-amber-700" : "bg-rose-50 text-rose-700"
                      }`}>{c}</span>
                    ))}
                  </div>
                </div>

                {/* Card 5: Powerful Reports (Spans 1 column) */}
                <div className="bg-white p-6 rounded-3xl border border-slate-150 shadow-sm flex flex-col items-center text-center md:col-span-1 premium-card hover:border-cyan-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(6,182,212,0.08)] group">
                  <div className="icon-container-centered bg-cyan-50 text-cyan-600 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    📊
                  </div>
                  <h3>Powerful Reports</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                    Generate print-ready PDFs or export spreadsheets to Excel. Easy data transfer to external bookkeeping software.
                  </p>
                  <div className="flex gap-2 justify-center">
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[9px] font-bold rounded">PDF</span>
                    <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[9px] font-bold rounded">Excel Ready</span>
                  </div>
                </div>

                {/* Card 6: Easy to Use (Spans 3 columns) */}
                <div className="bg-white p-8 rounded-3xl border border-slate-150 shadow-sm flex flex-col gap-6 items-center text-center md:col-span-3 premium-card hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(16,185,129,0.08)] group">
                  <div className="icon-container-centered bg-emerald-50 text-emerald-600 mb-2 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-sm w-16 h-16 text-3xl">
                    👌
                  </div>
                  <div className="space-y-2">
                    <h3>Easy to Use</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      Clean interface built with intuitive terms. Simplifies training times for your warehouse staff.
                    </p>
                    <div className="flex items-center gap-3 pt-2 text-[11px] text-slate-400 font-semibold justify-center">
                      <span>✓ Zero training required</span>
                      <span>•</span>
                      <span>✓ Staff-ready interfaces</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── 14. FAQ ACCORDION SECTION (Changed to 2 columns on desktop) ── */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-slate-50 via-indigo-50/15 to-slate-50 border-t border-slate-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">

            <div className="text-center mb-12">
              <span className="text-indigo-600 font-bold tracking-wider text-sm block mb-3">Answers & FAQ</span>
              <h2 className="mb-6 capitalize">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-550 mt-4 text-base">
                Got questions? We've compiled details covering common inventory tracking routines.
              </p>
            </div>

            {/* Two independent columns for FAQ grid to stack accordions cleanly without vertical gaps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Left Column */}
              <div className="space-y-6">
                {faqItems
                  .filter((_, idx) => idx % 2 === 0)
                  .map((item, idx) => {
                    const actualIdx = idx * 2;
                    const isOpen = faqOpenIdx === actualIdx;
                    return (
                      <div
                        key={actualIdx}
                        className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200 shadow-sm animate-card-fade"
                      >
                        <button
                          onClick={() => toggleFaq(actualIdx)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50"
                        >
                          <span className="font-extrabold text-slate-800 text-sm sm:text-base pr-4">
                            {item.q}
                          </span>
                          <span className={`text-indigo-655 text-xl font-bold transition-transform duration-200 transform ${isOpen ? "rotate-45" : "rotate-0"}`}>
                            ＋
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                              <div className="p-6 pt-6 text-slate-500 text-xs sm:text-sm border-t border-slate-100 leading-relaxed bg-indigo-50/10">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {faqItems
                  .filter((_, idx) => idx % 2 !== 0)
                  .map((item, idx) => {
                    const actualIdx = idx * 2 + 1;
                    const isOpen = faqOpenIdx === actualIdx;
                    return (
                      <div
                        key={actualIdx}
                        className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200 shadow-sm"
                      >
                        <button
                          onClick={() => toggleFaq(actualIdx)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50"
                        >
                          <span className="font-extrabold text-slate-800 text-sm sm:text-base pr-4">
                            {item.q}
                          </span>
                          <span className={`text-indigo-655 text-xl font-bold transition-transform duration-200 transform ${isOpen ? "rotate-45" : "rotate-0"}`}>
                            ＋
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                              <div className="p-6 pt-6 text-slate-500 text-xs sm:text-sm border-t border-slate-100 leading-relaxed bg-indigo-50/10">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
              </div>
            </div>

          </div>
        </section>

        {/* ── 15. CTA FOOTER & RELATED SOLUTIONS ── */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-indigo-50/50 to-indigo-100/30 border-t border-slate-100 relative overflow-hidden">

          {/* Main CTA banner */}
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8 mb-20 relative z-10">
            <h2 className="mb-6 capitalize">
              Revolutionize Your <br />Warehouse Operations Today
            </h2>
            <p className="text-slate-655 text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
              Join businesses that have scaled operational tracking times by over 40% with our automated status flow portal.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 sm:px-10 py-4 sm:py-5 premium-btn-gradient text-white font-extrabold text-base sm:text-lg rounded-2xl active:scale-95 cursor-pointer"
              >
                Get Started for Free
              </button>
            </div>
          </div>

          <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-200/20 rounded-full blur-[100px] opacity-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-1/2 right-0 w-64 h-64 bg-cyan-200/20 rounded-full blur-[100px] opacity-60 translate-x-1/2 translate-y-1/2 pointer-events-none" />

          {/* Related ERP solutions */}
          <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-slate-200 relative z-10">
            <div className="text-center mb-10">
              <span className="text-indigo-600 font-bold tracking-wider text-xs block mb-2">Explore Options</span>
              <h2>Related ERP Solutions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.slice(0, 3).map((tp) => (
                <Link
                  key={tp.slug}
                  href={`/product/${tp.slug}`}
                  className="group bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 flex flex-col items-center text-center justify-between hover-border-indigo"
                >
                  <div className="flex flex-col items-center">
                    <div className="icon-container-centered bg-indigo-50 text-indigo-600 mb-6 mx-auto group-hover:scale-110 transition-transform duration-200">
                      <span className="text-2xl">{tp.icon || "📦"}</span>
                    </div>
                    <h3 className="mb-2 group-hover:text-indigo-600 transition-colors">
                      {tp.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {tp.shortDescription}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-indigo-600 font-extrabold text-xs w-full">
                    <span>Learn More</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">➔</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </section>

        {/* ── CONTACT FORM MODAL ── */}
        <ContactFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          preSelectedType="Product"
          preSelectedItem={product.title}
          allItems={allProducts}
        />

        {/* ── LIGHTBOX SCREENSHOT POPUP ── */}
        <AnimatePresence>
          {lightboxData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxData(null)}
              className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-[999] flex items-center justify-center p-4 cursor-zoom-out"
            >
              <div
                className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Left Arrow Button */}
                {lightboxData.images.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxData(prev => ({
                        ...prev,
                        currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
                      }));
                    }}
                    className="absolute -left-4 md:-left-16 w-12 h-12 rounded-full bg-slate-950/80 hover:bg-slate-950 text-white flex items-center justify-center font-bold text-xl shadow-lg transition-colors cursor-pointer z-50 border border-slate-700"
                  >
                    ‹
                  </button>
                )}

                {/* Main Content Area */}
                <motion.div
                  key={lightboxData.currentIndex}
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.96, opacity: 0 }}
                  className="bg-white p-2 rounded-3xl shadow-2xl overflow-hidden cursor-default w-full relative"
                >
                  <img
                    src={lightboxData.images[lightboxData.currentIndex]}
                    alt="Enlarged Godown System Screenshot"
                    className="w-full h-auto max-h-[82vh] object-contain rounded-2xl"
                  />
                  <button
                    onClick={() => setLightboxData(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-md transition-colors"
                  >
                    ✕
                  </button>

                  {/* Indicator count */}
                  {lightboxData.images.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-950/70 text-white text-xs font-semibold">
                      {lightboxData.currentIndex + 1} / {lightboxData.images.length}
                    </div>
                  )}
                </motion.div>

                {/* Right Arrow Button */}
                {lightboxData.images.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxData(prev => ({
                        ...prev,
                        currentIndex: (prev.currentIndex + 1) % prev.images.length
                      }));
                    }}
                    className="absolute -right-4 md:-right-16 w-12 h-12 rounded-full bg-slate-950/80 hover:bg-slate-950 text-white flex items-center justify-center font-bold text-xl shadow-lg transition-colors cursor-pointer z-50 border border-slate-700"
                  >
                    ›
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}
