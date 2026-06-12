'use client';

import { useEffect, useState, useRef } from "react";

const integrationData = {
  crm: {
    title: "CRM — Customer Relationship Management",
    tag: "CRM Module",
    theme: "text-[#7c3aed] bg-[#7c3aed]/10 border-[#7c3aed]/20",
    borderClass: "border-[#7c3aed] hover:shadow-[0_8px_24px_rgba(124,58,237,0.2)] focus-visible:outline-[#7c3aed]",
    textTheme: "text-[#7c3aed]",
    desc: "Part of the iSARVA ERP suite. Manage leads, pipelines, and customer relationships on one platform.",
    features: [
      "Sales pipeline and opportunity tracking",
      "Customer accounts and contact history",
      "Quotes, proposals, and deal forecasting"
    ]
  },
  hrms: {
    title: "HRMS — Human Resource Management",
    tag: "HRMS Module",
    theme: "text-[#059669] bg-[#059669]/10 border-[#059669]/20",
    borderClass: "border-[#059669] hover:shadow-[0_8px_24px_rgba(5,150,105,0.2)] focus-visible:outline-[#059669]",
    textTheme: "text-[#059669]",
    desc: "Part of the iSARVA ERP suite. Handle staffing, attendance, and payroll in one place.",
    features: [
      "Employee records and org structure",
      "Attendance, leave, and timesheets",
      "Payroll processing and tax withholdings"
    ]
  },
  pm: {
    title: "Project Management",
    tag: "Project Management Module",
    theme: "text-[#2563eb] bg-[#2563eb]/10 border-[#2563eb]/20",
    borderClass: "border-[#2563eb] hover:shadow-[0_8px_24px_rgba(37,99,235,0.2)] focus-visible:outline-[#2563eb]",
    textTheme: "text-[#2563eb]",
    desc: "Part of the iSARVA ERP suite. Plan sprints, track tasks, and deliver projects on schedule.",
    features: [
      "Sprint boards and kanban workflows",
      "Task assignments and milestone tracking",
      "Billable hours and project reporting"
    ]
  },
  inventory: {
    title: "Inventory — Stock & Warehousing",
    tag: "Inventory Module",
    theme: "text-[#ea580c] bg-[#ea580c]/10 border-[#ea580c]/20",
    borderClass: "border-[#ea580c] hover:shadow-[0_8px_24px_rgba(234,88,12,0.2)] focus-visible:outline-[#ea580c]",
    textTheme: "text-[#ea580c]",
    desc: "Part of the iSARVA ERP suite. Control stock levels, warehousing, and procurement.",
    features: [
      "Real-time stock and warehouse balances",
      "Purchase orders and supplier management",
      "Low-stock alerts and reorder workflows"
    ]
  },
  finance: {
    title: "Finance — Treasury & Forecasts",
    tag: "Finance Module",
    theme: "text-[#0891b2] bg-[#0891b2]/10 border-[#0891b2]/20",
    borderClass: "border-[#0891b2] hover:shadow-[0_8px_24px_rgba(8,145,178,0.2)] focus-visible:outline-[#0891b2]",
    textTheme: "text-[#0891b2]",
    desc: "Part of the iSARVA ERP suite. Monitor cash flow, budgets, and financial performance.",
    features: [
      "Cash flow and treasury dashboards",
      "Budget planning and variance analysis",
      "Revenue vs. cost trend reporting"
    ]
  },
  accounting: {
    title: "Accounting — General Ledger",
    tag: "Accounting Module",
    theme: "text-[#ca8a04] bg-[#ca8a04]/10 border-[#ca8a04]/20",
    borderClass: "border-[#ca8a04] hover:shadow-[0_8px_24px_rgba(202,138,4,0.2)] focus-visible:outline-[#ca8a04]",
    textTheme: "text-[#ca8a04]",
    desc: "Part of the iSARVA ERP suite. Maintain compliant double-entry books and financial audits.",
    features: [
      "General ledger and journal entries",
      "Accounts receivable and payable",
      "Audit trails and compliance reporting"
    ]
  }
};

export default function IsarvaErpClient() {
  const [activeModule, setActiveModule] = useState(null);
  const [inView, setInView] = useState(false);
  const [closeStat, setCloseStat] = useState(0);
  const [autoStat, setAutoStat] = useState(0);
  const [saveStat, setSaveStat] = useState(0);
  const [revenue, setRevenue] = useState(0);

  const heroRef = useRef(null);
  const heroTiltRef = useRef(null);
  const heroStageRef = useRef(null);

  // Intersection observer to trigger entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Ticking counters when in view
  useEffect(() => {
    if (!inView) return;

    // Count 1: 10x
    let startClose = 0;
    const durClose = 1800;
    const t0Close = performance.now();
    function tickClose(now) {
      const p = Math.min((now - t0Close) / durClose, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCloseStat(Math.round(10 * eased));
      if (p < 1) requestAnimationFrame(tickClose);
    }
    requestAnimationFrame(tickClose);

    // Count 2: 98%
    const durAuto = 2000;
    const t0Auto = performance.now();
    function tickAuto(now) {
      const p = Math.min((now - t0Auto) / durAuto, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setAutoStat(Math.round(98 * eased));
      if (p < 1) requestAnimationFrame(tickAuto);
    }
    requestAnimationFrame(tickAuto);

    // Count 3: 60%
    const durSave = 2200;
    const t0Save = performance.now();
    function tickSave(now) {
      const p = Math.min((now - t0Save) / durSave, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setSaveStat(Math.round(60 * eased));
      if (p < 1) requestAnimationFrame(tickSave);
    }
    requestAnimationFrame(tickSave);

    // Count 4: Global Revenue
    const revTarget = 1894204.4;
    const durRev = 2400;
    const t0Rev = performance.now();
    function tickRev(now) {
      const p = Math.min((now - t0Rev) / durRev, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setRevenue(revTarget * eased);
      if (p < 1) requestAnimationFrame(tickRev);
      else setRevenue(revTarget);
    }
    requestAnimationFrame(tickRev);

  }, [inView]);

  // Mouse tilt handlers
  const handleMouseMove = (e) => {
    const stage = heroStageRef.current;
    const tilt = heroTiltRef.current;
    if (!stage || !tilt) return;

    const rect = stage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    tilt.style.transform = `rotateX(${y * -8}deg) rotateY(${x * 10}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    const tilt = heroTiltRef.current;
    if (tilt) {
      tilt.style.transform = '';
    }
  };

  const formatCurrency = (n) => {
    return '₹' + n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <>
      <div className="font-sans bg-slate-50 text-slate-900 overflow-x-hidden">
        <div className="fixed top-0 left-0 w-screen h-screen z-[-1] pointer-events-none hero-grid-overlay"></div>

        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="py-12 pt-32 lg:py-16 lg:pt-40 relative overflow-hidden min-h-0 flex items-center" 
          id="hero"
        >
          <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 hero-mesh-bg"></div>
            <div className="absolute w-2/5 h-[2px] opacity-60 hero-beam-line top-[28%] left-[-10%] -rotate-12"></div>
            <div className="absolute w-2/5 h-[2px] opacity-60 hero-beam-line top-[62%] right-[-10%] rotate-8 [animation-delay:-4s]"></div>
            <span className="absolute rounded-full blur-[80px] hero-orb-float w-[420px] h-[420px] -top-[8%] right-[5%] bg-[#0fb84e]/22"></span>
            <span className="absolute rounded-full blur-[80px] hero-orb-float w-[320px] h-[320px] bottom-[5%] left-[35%] bg-[#06b6d4]/18 [animation-delay:-5s]"></span>
            <span className="absolute rounded-full blur-[80px] hero-orb-float w-[260px] h-[260px] top-[40%] -left-[5%] bg-[#8b5cf6]/12 [animation-delay:-9s]"></span>
          </div>

          <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.98fr)] gap-14 lg:gap-10 items-center overflow-visible">
              <div className="flex flex-col gap-0 min-w-0 max-w-full items-center text-center lg:items-start lg:text-left">
                <p className={`inline-flex items-center flex-nowrap gap-2 px-4 py-[0.38rem] mb-4 sm:mb-6 bg-white/85 border border-[#10b981]/25 shadow-[0_1px_3px_rgba(0,0,0,0.05)] backdrop-blur-[8px] rounded-full whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[50ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[15px]'}`}>
                  <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] min-[375px]:text-xs sm:text-sm font-semibold tracking-wider text-[#064e3b] normal-case">Enterprise ERP · Built for Scale</span>
                </p>

                <h1 className={`font-display text-[clamp(1.75rem,8vw,2.25rem)] lg:text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-tight tracking-tight mb-4 sm:mb-6 text-[#1a1f24] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[100ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[15px]'}`}>
                  Run your business on
                  <span className="block mt-[0.15rem] hero-title-gradient-flow">one intelligent ERP platform.</span>
                </h1>

                <div className={`max-w-[540px] mb-5 sm:mb-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[160ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[15px]'}`}>
                  <p className="text-base lg:text-xl leading-relaxed text-slate-600 mb-5 sm:mb-8">
                    One platform for finance, HR, sales, inventory, and projects—enter data once, every team stays aligned.
                  </p>
                  <ul className="list-none m-0 p-0 flex flex-col gap-[0.45rem] items-center lg:items-start">
                    <li className="flex items-start gap-[0.55rem] text-[0.9rem] leading-[1.45] text-slate-900 font-medium">
                      <span className="shrink-0 w-5 h-5 flex items-center justify-center rounded-[6px] text-[0.55rem] text-white bg-gradient-to-br from-[#0fb84e] to-[#06b6d4] shadow-[0_2px_8px_rgba(15,184,78,0.25)] mt-[0.1rem]" aria-hidden="true">⟡</span>
                      <span>Real-time sync across all modules</span>
                    </li>
                    <li className="flex items-start gap-[0.55rem] text-[0.9rem] leading-[1.45] text-slate-900 font-medium">
                      <span className="shrink-0 w-5 h-5 flex items-center justify-center rounded-[6px] text-[0.55rem] text-white bg-gradient-to-br from-[#0fb84e] to-[#06b6d4] shadow-[0_2px_8px_rgba(15,184,78,0.25)] mt-[0.1rem]" aria-hidden="true">⟡</span>
                      <span>Approvals, audit trail &amp; role access</span>
                    </li>
                    <li className="flex items-start gap-[0.55rem] text-[0.9rem] leading-[1.45] text-slate-900 font-medium">
                      <span className="shrink-0 w-5 h-5 flex items-center justify-center rounded-[6px] text-[0.55rem] text-white bg-gradient-to-br from-[#0fb84e] to-[#06b6d4] shadow-[0_2px_8px_rgba(15,184,78,0.25)] mt-[0.1rem]" aria-hidden="true">⟡</span>
                      <span>Go live in weeks with guided setup</span>
                    </li>
                  </ul>
                </div>

                <nav className={`flex flex-wrap items-center justify-center lg:justify-start gap-2 p-2 rounded-2xl bg-gradient-to-br from-white/92 to-[#f8fafc]/88 border border-slate-900/7 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_14px_36px_rgba(15,23,42,0.07)] backdrop-blur-xl w-full max-w-full box-border overflow-visible mb-5 sm:mb-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[220ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[15px]'}`} aria-label="Connected ERP modules">
                  <div className="flex items-center shrink-0 px-[0.7rem] py-[0.42rem] rounded-[10px] bg-gradient-to-br from-[#16a34a] via-[#0fb84e] to-[#059669] text-white shadow-[0_4px_14px_rgba(15,184,78,0.35)]">
                    <span className="text-[0.62rem] font-extrabold tracking-[0.07em] uppercase whitespace-nowrap">iSARVA Core</span>
                  </div>
                  <span className="hidden sm:block shrink-0 w-[28px] h-[2px] rounded-[2px] hero-rail-connector-flow" aria-hidden="true"></span>
                  <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-1 list-none m-0 p-0 flex-auto min-w-min">
                    {["CRM", "HRMS", "Inventory", "Finance", "Accounting", "Projects"].map((mod, idx, arr) => (
                      <li key={mod} className="flex items-center text-[0.6rem] font-bold tracking-[0.04em] uppercase text-slate-500 px-[0.45rem] py-[0.32rem] rounded-lg transition-colors duration-200 hover:text-slate-900 hover:bg-[#0fb84e]/8">
                        {mod}
                        {idx < arr.length - 1 && <span className="ml-[0.45rem] text-slate-500/45 font-normal">·</span>}
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className={`flex flex-col gap-5 sm:gap-7 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[280ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[15px]'}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-3">
                    <button
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      className="inline-flex items-center justify-center rounded-xl cursor-pointer px-9 py-[1.125rem] text-[1.05rem] border-none text-white w-auto relative isolate overflow-hidden hero-btn-primary-custom hover:-translate-y-[3px] hover:scale-[1.02] active:-translate-y-[1px] active:scale-[0.99] group transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] font-semibold"
                    >
                      <span>Request Demo</span>
                      <svg className="transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[5px]" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </button>
                    <a href="#module-hub" className="inline-flex items-center justify-center rounded-xl cursor-pointer px-9 py-[1.125rem] text-[1.05rem] border-2 border-transparent text-slate-900 font-bold w-auto relative isolate overflow-hidden hero-btn-secondary-custom hover:-translate-y-[3px] hover:scale-[1.02] active:-translate-y-[1px] active:scale-[0.99] hover:text-[#047857] group transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <span>Explore More</span>
                      <svg className="transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[5px]" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="grid grid-cols-3 gap-[0.65rem] pt-[0.35rem]" aria-label="Key outcomes">
                    <div className="flex flex-col gap-[0.2rem] px-[0.75rem] py-[0.65rem] rounded-xl bg-white/70 border border-slate-900/6 shadow-[0_6px_20px_rgba(15,23,42,0.04)] backdrop-blur-[8px]">
                      <div className="flex items-baseline gap-[0.05rem]">
                        <span className="font-display text-[1.35rem] font-extrabold text-slate-900 leading-none">{closeStat}</span>
                        <span className="font-display text-[1.05rem] font-extrabold text-[#10b981]">x</span>
                      </div>
                      <span className="block text-[0.68rem] leading-[1.3] font-semibold text-slate-500 mt-[0.15rem]">Faster close</span>
                    </div>
                    <div className="flex flex-col gap-[0.2rem] px-[0.75rem] py-[0.65rem] rounded-xl bg-white/70 border border-slate-900/6 shadow-[0_6px_20px_rgba(15,23,42,0.04)] backdrop-blur-[8px]">
                      <div className="flex items-baseline gap-[0.05rem]">
                        <span className="font-display text-[1.35rem] font-extrabold text-slate-900 leading-none">{autoStat}</span>
                        <span className="font-display text-[1.05rem] font-extrabold text-[#06b6d4]">%</span>
                      </div>
                      <span className="block text-[0.68rem] leading-[1.3] font-semibold text-slate-500 mt-[0.15rem]">Automation</span>
                    </div>
                    <div className="flex flex-col gap-[0.2rem] px-[0.75rem] py-[0.65rem] rounded-xl bg-white/70 border border-slate-900/6 shadow-[0_6px_20px_rgba(15,23,42,0.04)] backdrop-blur-[8px]">
                      <div className="flex items-baseline gap-[0.05rem]">
                        <span className="font-display text-[1.35rem] font-extrabold text-slate-900 leading-none">{saveStat}</span>
                        <span className="font-display text-[1.05rem] font-extrabold text-[#f59e0b]">%</span>
                      </div>
                      <span className="block text-[0.68rem] leading-[1.3] font-semibold text-slate-500 mt-[0.15rem]">Ops savings</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`flex items-center justify-center [perspective:1200px] min-h-0 overflow-visible max-w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[200ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[15px]'}`}>
                <div 
                  ref={heroStageRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="relative w-full max-w-[540px] aspect-[1/0.92] flex items-center justify-center" 
                  id="hero-stage"
                >
                  <div className="absolute left-1/2 top-1/2 w-[360px] h-[360px] -ml-[180px] -mt-[180px] md:w-[460px] md:h-[460px] md:-ml-[230px] md:-mt-[230px] lg:w-[580px] lg:h-[580px] lg:-ml-[290px] lg:-mt-[290px] flex items-center justify-center pointer-events-none" aria-hidden="true">
                    <span className="absolute rounded-full border border-dashed border-[#0fb84e]/25 w-[360px] h-[360px] md:w-[460px] md:h-[460px] lg:w-[580px] lg:h-[580px] hero-ring-pulse-1"></span>
                    <span className="absolute rounded-full border border-dashed border-[#06b6d4]/20 w-[320px] h-[320px] md:w-[410px] md:h-[410px] lg:w-[520px] lg:h-[520px] hero-ring-spin-2"></span>
                    <span className="absolute rounded-full border border-dashed border-[#8b5cf6]/18 w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[460px] lg:h-[460px] hero-ring-spin-3"></span>
                  </div>

                  <div className="absolute left-1/2 top-1/2 w-[340px] h-[340px] -ml-[170px] -mt-[170px] md:w-[440px] md:h-[440px] md:-ml-[220px] md:-mt-[220px] lg:w-[560px] lg:h-[560px] lg:-ml-[280px] lg:-mt-[280px] animate-[hero-ring-spin_16s_linear_infinite] pointer-events-none z-0" aria-hidden="true">

                    <span className="absolute left-1/2 top-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#0fb84e] shadow-[0_0_14px_rgba(15,184,78,0.8)] hero-orbit-dot-0"></span>
                    <span className="absolute left-1/2 top-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#0fb84e] shadow-[0_0_14px_rgba(15,184,78,0.8)] hero-orbit-dot-1"></span>
                    <span className="absolute left-1/2 top-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#0fb84e] shadow-[0_0_14px_rgba(15,184,78,0.8)] hero-orbit-dot-2"></span>
                    <span className="absolute left-1/2 top-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#0fb84e] shadow-[0_0_14px_rgba(15,184,78,0.8)] hero-orbit-dot-3"></span>
                  </div>

                  <div 
                    ref={heroTiltRef}
                    className={`relative z-[2] w-[94%] max-w-[500px] [transform-style:preserve-3d] transition-transform duration-150 ease-out tilt-card ${inView ? 'animate-[hero-showcase-float_5.5s_ease-in-out_infinite]' : ''}`} 
                    id="hero-tilt"
                  >
                    {/* Floating HUD Widgets */}
                    <div className="absolute flex items-center gap-[0.85rem] px-[1.1rem] py-[0.9rem] z-20 rounded-[14px] bg-white/95 backdrop-blur-[14px] shadow-[0_12px_32px_rgba(15,23,42,0.1)] border border-white/90 bottom-[-24px] left-[28px] hero-widget-floating-left">
                      <div className="w-[42px] h-[42px] rounded-xl flex items-center justify-center text-[1.15rem] shrink-0 bg-gradient-to-br from-[#0fb84e]/15 to-[#06b6d4]/12 border border-[#0fb84e]/25">⚡</div>
                      <div className="flex flex-col">
                        <span className="text-[0.7rem] text-slate-500">Sync Status</span>
                        <strong className="text-[0.88rem] text-slate-900 font-display font-bold">All Modules Active</strong>
                      </div>
                    </div>
                    <div className="absolute flex items-center gap-[0.85rem] px-[1.1rem] py-[0.9rem] z-20 rounded-[14px] bg-white/95 backdrop-blur-[14px] shadow-[0_12px_32px_rgba(15,23,42,0.1)] border border-white/90 top-[-24px] right-[28px] hero-widget-floating-right">
                      <div className="w-[42px] h-[42px] rounded-xl flex items-center justify-center text-[1.15rem] shrink-0 bg-gradient-to-br from-[#8b5cf6]/12 to-[#06b6d4]/10 border border-[#8b5cf6]/20">📈</div>
                      <div className="flex flex-col">
                        <span className="text-[0.7rem] text-slate-500">Global Revenue</span>
                        <strong id="hero-revenue" className="text-[0.88rem] text-slate-900 font-display font-bold">{formatCurrency(revenue)}</strong>
                      </div>
                    </div>

                    <div className="relative z-[2] w-full rounded-[18px] overflow-visible bg-white/97 border border-white/90 shadow-[0_0_0_1px_rgba(15,184,78,0.08),0_24px_64px_rgba(15,23,42,0.12),0_0_80px_rgba(15,184,78,0.1)]">
                      <div className="bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] border-b border-slate-900/6 px-5 py-[0.85rem] flex items-center rounded-t-[18px]">
                        <div className="flex gap-2">
                          <span className="w-[10px] h-[10px] rounded-full bg-[#ef4444]"></span>
                          <span className="w-[10px] h-[10px] rounded-full bg-[#f59e0b]"></span>
                          <span className="w-[10px] h-[10px] rounded-full bg-[#10b981]"></span>
                        </div>
                        <div className="flex items-center gap-2 text-[0.7rem] font-bold text-slate-500 ml-5 tracking-[0.08em] uppercase">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#0fb84e] hero-live-hud-dot" aria-hidden="true"></span>
                          iSARVA Core Engine · Live HUD
                        </div>
                      </div>
                      <div className="p-[1.1rem] bg-white rounded-b-[18px] relative overflow-hidden">
                        <img 
                          src="/products/isarva-erp/hero.png" 
                          alt="iSARVA ERP dashboard with CRM, HRMS, inventory, finance, and projects" 
                          className="w-full h-auto rounded-[10px] shadow-[0_12px_32px_rgba(15,23,42,0.1)] block" 
                          width="580" 
                          height="360" 
                          decoding="async"
                        />
                        <div className="absolute left-[1.1rem] right-[1.1rem] h-2/5 top-[1.1rem] rounded-[10px] z-[2] pointer-events-none hero-scanline-overlay" aria-hidden="true"></div>
                        <div className="absolute inset-[1.1rem] rounded-[10px] z-[3] pointer-events-none hero-img-shine-overlay" aria-hidden="true"></div>
                      </div>
                    </div>

                    <div className="hidden md:block absolute -top-[6%] -right-[4%] w-[42%] h-[38%] pointer-events-none z-[6]" aria-hidden="true">
                      <span className="absolute text-[0.58rem] font-extrabold tracking-[0.06em] uppercase px-2 py-[0.28rem] rounded-full bg-white/95 border border-[#0fb84e]/20 shadow-[0_8px_20px_rgba(15,23,42,0.08)] text-slate-900 hero-chip-floating top-[28%] right-0 [animation-delay:-0.6s]">HRMS</span>
                      <span className="absolute text-[0.58rem] font-extrabold tracking-[0.06em] uppercase px-2 py-[0.28rem] rounded-full bg-white/95 border border-[#0fb84e]/20 shadow-[0_8px_20px_rgba(15,23,42,0.08)] text-slate-900 hero-chip-floating top-[58%] right-[12%] [animation-delay:-1.2s]">Stock</span>
                      <span className="absolute text-[0.58rem] font-extrabold tracking-[0.06em] uppercase px-2 py-[0.28rem] rounded-full bg-white/95 border border-[#0fb84e]/20 shadow-[0_8px_20px_rgba(15,23,42,0.08)] text-slate-900 hero-chip-floating top-[82%] right-[2%] [animation-delay:-1.8s]">Finance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Module ecosystem suite section */}
        <section 
          className="py-12 lg:py-16 relative overflow-hidden border-none" 
          id="data-flow"
          style={{
            backgroundColor: '#f1f5f9',
            backgroundImage: 'radial-gradient(ellipse 60% 50% at 0% 0%, rgba(15, 184, 78, 0.1), transparent 50%), radial-gradient(ellipse 55% 45% at 100% 100%, rgba(14, 165, 233, 0.08), transparent 50%), linear-gradient(180deg, #f8fafc 0%, #ecfdf5 50%, #f0f9ff 100%)'
          }}
        >
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 w-full">
            <div className="text-center mb-10">
              <span className="text-xs capitalize font-extrabold tracking-[2px] text-[#088c3a] mb-3 inline-block">Unified Platform</span>
              <h2 className="font-display text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4 text-slate-900">
                iSARVA ERP Module Suite
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-slate-500 max-w-[700px] mx-auto">
                Six integrated business modules on one iSARVA platform—arranged around a single ERP core. Select any module to explore.
              </p>
            </div>

            <div className="p-4 sm:p-8 mt-4 bg-gradient-to-br from-white to-[#f8fafc] rounded-[24px] shadow-[0_20px_48px_rgba(15,184,78,0.08)] relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-0 items-stretch">
                
                {/* Module ecosystem (orbit layout) */}
                <div 
                  className="ecosystem-canvas relative min-h-[480px] sm:min-h-[500px] flex items-center justify-center p-4 sm:p-10 bg-radial-gradient bg-[#c5ddd3] rounded-[18px] border border-[#08783a]/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.28),inset_0_0_48px_rgba(15,23,42,0.05),0_0_0_1px_rgba(15,184,78,0.1),0_14px_40px_rgba(8,100,50,0.2)] group/canvas" 
                  role="group" 
                  aria-label="iSARVA ERP module suite"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(15, 184, 78, 0.2) 0%, transparent 44%), linear-gradient(155deg, #c5ddd3 0%, #b3d2c3 45%, #a3c7b5 100%)'
                  }}
                  onMouseLeave={() => setActiveModule(null)}
                >
                  {/* Dashed outer rings */}
                  <div className="ecosystem-ring absolute aspect-square left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-dashed border-[#08783a]/70 rounded-full pointer-events-none" aria-hidden="true">
                    <div className="absolute inset-0 ecosystem-ring-track group-hover/canvas:[animation-play-state:paused]">
                      <span className="absolute left-1/2 top-[-5px] w-[10px] h-[10px] -ml-[5px] rounded-full bg-[#0fb84e] shadow-[0_0_12px_rgba(15,184,78,0.5)]"></span>
                      <span className="absolute left-1/2 bottom-[-5px] w-[10px] h-[10px] -ml-[5px] rounded-full bg-[#06b6d4] shadow-[0_0_12px_rgba(6,182,212,0.45)]"></span>
                      <span className="absolute left-[-5px] top-1/2 -mt-[5px] w-[10px] h-[10px] rounded-full bg-[#8b5cf6] shadow-[0_0_12px_rgba(139,92,246,0.4)]"></span>
                    </div>
                  </div>

                  {/* Core wrap */}
                  <div className="ecosystem-core-wrap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <span className="absolute inset-[-20px] rounded-full ecosystem-core-glow pointer-events-none" aria-hidden="true"></span>
                    <div className="ecosystem-core relative w-[110px] h-[110px] p-2 sm:w-[168px] sm:h-[168px] sm:p-5 rounded-full bg-gradient-to-br from-[#16a34a] via-[#059669] to-[#047857] text-white flex flex-col items-center justify-center text-center ecosystem-core-active">
                      <span className="text-[8px] sm:text-[10px] font-bold capitalize tracking-wider opacity-90 mb-1">Unified Platform</span>
                      <strong className="font-display text-base sm:text-2xl font-black tracking-wide leading-none">iSARVA</strong>
                      <span className="text-[8px] sm:text-[10px] font-semibold capitalize tracking-wider opacity-90 mt-1">ERP Core</span>
                      <span className="text-[7px] sm:text-[9px] opacity-85 mt-1 sm:mt-2 leading-tight max-w-[90px] sm:max-w-[120px]">6 modules · 1 system</span>
                    </div>
                  </div>

                  {/* Module cards orbit */}
                  <div className="absolute inset-0 flex items-center justify-center w-full">
                    <div className="w-[300px] sm:w-[440px] h-[300px] sm:h-[440px] aspect-square relative module-orbit module-orbit-track group-hover/canvas:[animation-play-state:paused]">
                      {[
                        { id: 'finance', label: 'Finance', icon: '📈', slot: 0 },
                        { id: 'accounting', label: 'Accounting', icon: '⚖️', slot: 1 },
                        { id: 'inventory', label: 'Inventory', icon: '📦', slot: 2 },
                        { id: 'crm', label: 'CRM', icon: '🤝', slot: 3 },
                        { id: 'pm', label: 'Projects', icon: '📋', slot: 4 },
                        { id: 'hrms', label: 'HRMS', icon: '👥', slot: 5 }
                      ].map((mod) => {
                        const isActive = activeModule === mod.id;
                        const data = integrationData[mod.id];
                        return (
                           <div
                            key={mod.id}
                            className="module-card module-card-item absolute left-1/2 top-1/2 z-[1] select-none"
                            style={{ '--slot': String(mod.slot) }}
                          >
                            <button
                              type="button"
                              className={`module-card-inner-btn border border-slate-200 rounded-2xl bg-white shadow-[0_4px_16px_rgba(15,23,42,0.06)] cursor-pointer transition-[opacity,border-color,box-shadow,background-color] duration-350 select-none text-center w-[88px] sm:w-[112px] p-0 relative group/card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${data.borderClass} ${isActive ? 'is-active z-[3]' : 'opacity-100'} ${activeModule && !isActive ? 'opacity-55' : ''}`}
                              onClick={() => setActiveModule(mod.id)}
                              onMouseEnter={() => setActiveModule(mod.id)}
                              aria-label={`${mod.label} module`}
                            >
                              <span className="flex flex-col items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-3.5 px-1 sm:px-2 module-card-float-anim group-hover/card:[animation-play-state:paused]">
                                <span className="text-xl sm:text-2xl leading-none module-icon-pop-anim group-hover/card:[animation-play-state:paused]">{mod.icon}</span>
                                <span className={`font-display text-[9px] sm:text-xs font-extrabold tracking-wider uppercase transition-colors duration-200 ${isActive ? data.textTheme : 'text-slate-500'}`}>
                                  {mod.label}
                                </span>
                              </span>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* Details Inspector Panel */}
                <div className="flow-details-panel flex flex-col justify-start p-4 sm:p-8 bg-gradient-to-b from-slate-50 to-emerald-50/30 rounded-2xl lg:ml-8">
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-900/5 pb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0fb84e] shadow-[0_0_10px_rgba(15,184,78,0.5)]"></span>
                    <h3 className="font-display text-lg font-bold text-slate-800">Module Overview</h3>
                  </div>

                  <div className="flex-1 min-h-[220px]">
                    {activeModule ? (
                      <div className="animate-[flowInspectorIn_0.25s_ease-out] text-left">
                        <span className={`text-[10px] capitalize font-bold tracking-wider px-3 py-1 rounded-md border inline-block mb-4 ${integrationData[activeModule].theme}`}>
                          {integrationData[activeModule].tag}
                        </span>
                        <h4 className="font-display text-xl font-extrabold text-slate-800 mb-3">
                          {integrationData[activeModule].title}
                        </h4>
                        <p className="text-sm leading-relaxed text-slate-500 mb-6">
                          {integrationData[activeModule].desc}
                        </p>
                        <h5 className="font-display text-xs font-extrabold tracking-wider capitalize text-slate-400 mb-3">
                          Key Capabilities
                        </h5>
                        <ul className="space-y-3">
                          {integrationData[activeModule].features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                              <span className="text-[#0fb84e] font-extrabold shrink-0">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center p-8 bg-[#0fb84e]/5 rounded-2xl min-h-[200px]">
                        <div className="text-4xl mb-4 animate-[pulse-gear_3s_infinite] select-none">⚡</div>
                        <h4 className="font-display text-base font-bold text-slate-800 mb-2">Pick a Module</h4>
                        <p className="text-xs leading-normal text-slate-500 max-w-[200px]">
                          Hover or click a module card to see what it includes in the iSARVA ERP suite.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
