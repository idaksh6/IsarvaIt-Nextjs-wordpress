'use client';

import { useEffect, useState, useRef } from "react";

const integrationData = {
  crm: {
    title: "CRM — Customer Relationship Management",
    tag: "CRM Module",
    theme: "text-[#7c3aed] bg-[#7c3aed]/10 border-[#7c3aed]/20",
    borderClass: "border-[#7c3aed] hover:shadow-[0_8px_24px_rgba(124,58,237,0.2)] focus-visible:outline-[#7c3aed]",
    textTheme: "text-[#7c3aed]",
    desc: "Part of the Isarva ERP suite. Manage leads, pipelines, and customer relationships on one platform.",
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
    desc: "Part of the Isarva ERP suite. Handle staffing, attendance, and payroll in one place.",
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
    desc: "Part of the Isarva ERP suite. Plan sprints, track tasks, and deliver projects on schedule.",
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
    desc: "Part of the Isarva ERP suite. Control stock levels, warehousing, and procurement.",
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
    desc: "Part of the Isarva ERP suite. Monitor cash flow, budgets, and financial performance.",
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
    desc: "Part of the Isarva ERP suite. Maintain compliant double-entry books and financial audits.",
    features: [
      "General ledger and journal entries",
      "Accounts receivable and payable",
      "Audit trails and compliance reporting"
    ]
  }
};

const industryData = [
  {
    id: "mfg",
    classCode: "mfg",
    icon: "🏭",
    name: "Manufacturing",
    lead: "Plan production, track materials, and see real costs—all in one place.",
    benefits: [
      "Know what is in stock and on the floor",
      "Schedule jobs and track progress",
      "Understand cost per product"
    ],
    modules: ["Stock", "Projects", "Accounting"]
  },
  {
    id: "retail",
    classCode: "retail",
    icon: "🛒",
    name: "Retail & Distribution",
    lead: "Run multiple stores or warehouses without losing track of orders, stock, or sales.",
    benefits: [
      "Manage orders from one dashboard",
      "See stock levels across locations",
      "Track payments and cash flow"
    ],
    modules: ["Sales", "Stock", "Finance"]
  },
  {
    id: "services",
    classCode: "services",
    icon: "💼",
    name: "Professional Services",
    lead: "Track client work, team time, and invoices without switching between tools.",
    benefits: [
      "Organize projects and deadlines",
      "Log billable hours for your team",
      "Send invoices on time"
    ],
    modules: ["Projects", "People", "Accounting"]
  },
  {
    id: "health",
    classCode: "health",
    icon: "🏥",
    name: "Healthcare & Clinics",
    lead: "Schedule staff, order supplies, and keep spending under control as you grow.",
    benefits: [
      "Plan shifts and manage payroll",
      "Track medical supplies and orders",
      "Review spending with clear reports"
    ],
    modules: ["People", "Stock", "Finance"]
  },
  {
    id: "logistics",
    classCode: "logistics",
    icon: "🚚",
    name: "Logistics",
    lead: "Follow shipments, vendors, and profit on every delivery you make.",
    benefits: [
      "Track warehouse and shipment status",
      "Manage customer and vendor records",
      "See profit per route or job"
    ],
    modules: ["Stock", "Sales", "Finance"]
  },
  {
    id: "construction",
    classCode: "construction",
    icon: "🏗️",
    name: "Construction",
    lead: "Track job budgets, pay subcontractors, and bill clients from site to head office.",
    benefits: [
      "Monitor budgets and timelines",
      "Handle subcontractor payments",
      "Bill clients by project milestone"
    ],
    modules: ["Projects", "People", "Accounting"]
  }
];

const industryThemes = {
  mfg: {
    accent: "text-emerald-600",
    bgSoft: "bg-emerald-50 border-emerald-500/20",
    borderHover: "hover:border-emerald-500/30",
    bulletColor: "bg-emerald-600",
    accentColor: "#059669",
  },
  retail: {
    accent: "text-blue-600",
    bgSoft: "bg-blue-50 border-blue-500/20",
    borderHover: "hover:border-blue-500/30",
    bulletColor: "bg-blue-600",
    accentColor: "#2563eb",
  },
  services: {
    accent: "text-violet-600",
    bgSoft: "bg-violet-50 border-violet-500/20",
    borderHover: "hover:border-violet-500/30",
    bulletColor: "bg-violet-600",
    accentColor: "#7c3aed",
  },
  health: {
    accent: "text-teal-600",
    bgSoft: "bg-teal-50 border-teal-500/20",
    borderHover: "hover:border-teal-500/30",
    bulletColor: "bg-teal-600",
    accentColor: "#0d9488",
  },
  logistics: {
    accent: "text-orange-600",
    bgSoft: "bg-orange-50 border-orange-500/20",
    borderHover: "hover:border-orange-500/30",
    bulletColor: "bg-orange-600",
    accentColor: "#ea580c",
  },
  construction: {
    accent: "text-amber-600",
    bgSoft: "bg-amber-50 border-amber-500/20",
    borderHover: "hover:border-amber-500/30",
    bulletColor: "bg-amber-600",
    accentColor: "#d97706",
  }
};

const integrationCards = [
  { icon: "🏦", title: "Banking & Payments", desc: "Match bank transactions and payment status automatically." },
  { icon: "📧", title: "Email & Calendar", desc: "Sync meetings, reminders, and team schedules." },
  { icon: "🛍️", title: "E-Commerce", desc: "Pull online orders and stock into one system." },
  { icon: "📊", title: "BI & Reporting", desc: "Send live numbers to your dashboards and reports." },
  { icon: "🧾", title: "Tax & Compliance", desc: "Stay aligned with tax rules and filing deadlines." },
  { icon: "👆", title: "Biometric HR", desc: "Connect attendance devices to payroll and HR." },
  { icon: "📱", title: "Mobile Apps", desc: "Let field teams update data from phone or tablet." },
  { icon: "🔗", title: "API & Webhooks", desc: "Build custom links with secure APIs and instant events." }
];

export default function IsarvaErpClient() {
  const [activeModule, setActiveModule] = useState(null);
  const [inView, setInView] = useState(false);
  const [closeStat, setCloseStat] = useState(0);
  const [autoStat, setAutoStat] = useState(0);
  const [saveStat, setSaveStat] = useState(0);
  const [revenue, setRevenue] = useState(0);

  // Interactive Module Dashboard state
  const [hubTab, setHubTab] = useState('hrms');
  const [hrmsSalary, setHrmsSalary] = useState(7500);
  const [hrmsTax, setHrmsTax] = useState(22);
  const [crmPipeline, setCrmPipeline] = useState(120000);
  const [crmRate, setCrmRate] = useState(45);
  const [pmTask1, setPmTask1] = useState(false);
  const [pmTask2, setPmTask2] = useState(false);

  // ROI Calculator state
  const [roiEmployees, setRoiEmployees] = useState(45);
  const [roiOrders, setRoiOrders] = useState(650);
  const [roiLabor, setRoiLabor] = useState(60);

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

  const roiHoursSaved = Math.round((roiEmployees * 2.2) + (roiOrders * 0.18));
  const roiMoneySaved = Math.round(roiHoursSaved * roiLabor * 12);

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
                    <span className="text-[0.62rem] font-extrabold tracking-[0.07em] capitalize whitespace-nowrap">Isarva Core</span>
                  </div>
                  <span className="hidden sm:block shrink-0 w-[28px] h-[2px] rounded-[2px] hero-rail-connector-flow" aria-hidden="true"></span>
                  <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-1 list-none m-0 p-0 flex-auto min-w-min">
                    {["CRM", "HRMS", "Inventory", "Finance", "Accounting", "Projects"].map((mod, idx, arr) => (
                      <li key={mod} className="flex items-center text-[0.6rem] font-bold tracking-[0.04em] capitalize text-slate-500 px-[0.45rem] py-[0.32rem] rounded-lg transition-colors duration-200 hover:text-slate-900 hover:bg-[#0fb84e]/8">
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
                        <div className="flex items-center gap-2 text-[0.7rem] font-bold text-slate-500 ml-5 tracking-[0.08em] capitalize">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#0fb84e] hero-live-hud-dot" aria-hidden="true"></span>
                          Isarva Core Engine · Live HUD
                        </div>
                      </div>
                      <div className="p-[1.1rem] bg-white rounded-b-[18px] relative overflow-hidden">
                        <img
                          src="/products/Isarva-erp/hero.png"
                          alt="Isarva ERP dashboard with CRM, HRMS, inventory, finance, and projects"
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
                      <span className="absolute text-[0.58rem] font-extrabold tracking-[0.06em] capitalize px-2 py-[0.28rem] rounded-full bg-white/95 border border-[#0fb84e]/20 shadow-[0_8px_20px_rgba(15,23,42,0.08)] text-slate-900 hero-chip-floating top-[28%] right-0 [animation-delay:-0.6s]">HRMS</span>
                      <span className="absolute text-[0.58rem] font-extrabold tracking-[0.06em] capitalize px-2 py-[0.28rem] rounded-full bg-white/95 border border-[#0fb84e]/20 shadow-[0_8px_20px_rgba(15,23,42,0.08)] text-slate-900 hero-chip-floating top-[58%] right-[12%] [animation-delay:-1.2s]">Stock</span>
                      <span className="absolute text-[0.58rem] font-extrabold tracking-[0.06em] capitalize px-2 py-[0.28rem] rounded-full bg-white/95 border border-[#0fb84e]/20 shadow-[0_8px_20px_rgba(15,23,42,0.08)] text-slate-900 hero-chip-floating top-[82%] right-[2%] [animation-delay:-1.8s]">Finance</span>
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
              <h2 className="text-gray-900 mb-4 capitalize">
                Isarva ERP Module Suite
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-slate-500 max-w-[700px] mx-auto">
                Six integrated business modules on one Isarva platform—arranged around a single ERP core. Select any module to explore.
              </p>
            </div>

            <div className="p-4 sm:p-8 mt-4 bg-gradient-to-br from-white to-[#f8fafc] rounded-[24px] shadow-[0_20px_48px_rgba(15,184,78,0.08)] relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-0 items-stretch">

                {/* Module ecosystem (orbit layout) */}
                <div
                  className="ecosystem-canvas relative min-h-[480px] sm:min-h-[500px] flex items-center justify-center p-4 sm:p-10 bg-radial-gradient bg-[#c5ddd3] rounded-[18px] border border-[#08783a]/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.28),inset_0_0_48px_rgba(15,23,42,0.05),0_0_0_1px_rgba(15,184,78,0.1),0_14px_40px_rgba(8,100,50,0.2)] group/canvas"
                  role="group"
                  aria-label="Isarva ERP module suite"
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
                      <strong className="font-display text-base sm:text-2xl font-black tracking-wide leading-none">Isarva</strong>
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
                                <span className={`font-display text-[9px] sm:text-xs font-extrabold tracking-wider capitalize transition-colors duration-200 ${isActive ? data.textTheme : 'text-slate-500'}`}>
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
                          Hover or click a module card to see what it includes in the Isarva ERP suite.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Built for Your Industry solutions section */}
        <section
          className="py-12 lg:py-16 relative overflow-hidden border-none"
          id="solutions"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(15, 184, 78, 0.06), transparent 55%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}
        >
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 w-full">
            <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
              <p className="text-xs font-bold capitalize tracking-widest text-[#088c3a] mb-3">Solutions</p>
              <h2 className="text-gray-900 mb-4 capitalize">
                Built for Your Industry
              </h2>
              <p className="text-slate-600 text-base lg:text-lg">
                Whether you make products, run stores, deliver services, or move goods—Isarva ERP fits how your team works every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryData.map((ind) => {
                const theme = industryThemes[ind.classCode];
                return (
                  <article
                    key={ind.id}
                    className={`relative p-[1.65rem] pb-[1.5rem] flex flex-col gap-[0.85rem] bg-white border border-slate-900/10 rounded-[18px] shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 overflow-hidden ${theme.borderHover}`}
                  >
                    {/* Top Accent Gradient Border */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[4px]"
                      style={{ background: `linear-gradient(90deg, ${theme.accentColor}, transparent 85%)` }}
                    />

                    <div className="flex items-center gap-[0.85rem]">
                      <span className={`shrink-0 w-12 h-12 flex items-center justify-center text-xl rounded-xl border ${theme.bgSoft} ${theme.accent}`} aria-hidden="true">
                        {ind.icon}
                      </span>
                      <h3 className="text-slate-900 font-bold text-base md:text-lg">{ind.name}</h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">{ind.lead}</p>

                    <ul className="list-none m-0 p-0 flex flex-col gap-[0.45rem] flex-1">
                      {ind.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-[0.86rem] leading-[1.45] text-slate-700">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${theme.bulletColor}`} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-[0.65rem] border-t border-slate-900/5 flex flex-col gap-2">
                      <span className="text-[0.68rem] font-bold tracking-[0.08em] capitalize text-slate-400">Works with</span>
                      <ul className="flex flex-wrap gap-[0.45rem] list-none m-0 p-0">
                        {ind.modules.map((mod, mIdx) => (
                          <li key={mIdx} className={`text-[0.72rem] font-bold tracking-[0.03em] px-[0.7rem] py-[0.32rem] rounded-full border ${theme.bgSoft} ${theme.accent}`}>
                            {mod}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Integrations & Open Connectivity section */}
        <section
          className="py-12 lg:py-16 relative overflow-hidden border-t border-slate-900/5 bg-[#f8fafc]"
          id="integrations"
        >
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 w-full">
            <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
              <p className="text-xs font-bold capitalize tracking-widest text-emerald-600 mb-3">Connectivity</p>
              <h2 className="text-gray-900 mb-4 capitalize">Integrations &amp; Open Connectivity</h2>
              <p className="text-slate-600 text-base lg:text-lg">
                Connect the tools you already use—banks, shops, email, and reports—so data flows into Isarva ERP without double entry.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-6 rounded-[24px] bg-white border border-slate-900/10 shadow-sm overflow-hidden max-w-6xl mx-auto">
              <aside className="p-8 bg-emerald-50/40 border-r border-slate-900/5 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-500/20 text-[0.68rem] font-bold tracking-[0.08em] capitalize text-emerald-600 mb-5 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Live sync ready
                </div>

                <h3 className="text-slate-900 font-bold text-lg md:text-xl mb-3">Works with your stack</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  Plug Isarva ERP into your existing software. Data stays secure, updates in real time, and your team keeps using familiar tools.
                </p>

                <ul className="list-none m-0 p-0 flex flex-col gap-3.5">
                  <li className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 border border-emerald-500/20 text-emerald-600 text-[10px] font-bold">✓</span>
                    <span>Control who sees what—with a clear record of every change</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 border border-emerald-500/20 text-emerald-600 text-[10px] font-bold">✓</span>
                    <span>Import and export spreadsheets for accounts, stock, and staff</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 border border-emerald-500/20 text-emerald-600 text-[10px] font-bold">✓</span>
                    <span>Get alerts when orders, payroll, or stock levels change</span>
                  </li>
                </ul>
              </aside>

              <div className="p-6 md:p-8 bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {integrationCards.map((card, idx) => (
                    <article
                      key={idx}
                      className="group flex flex-col items-center text-center p-5 rounded-xl bg-white border border-slate-900/5 hover:-translate-y-1 hover:bg-emerald-50/10 hover:border-emerald-500/20 hover:shadow-md transition-all duration-300"
                    >
                      <span className="flex items-center justify-center w-11 h-11 text-xl rounded-xl bg-emerald-50/50 border border-emerald-500/10 mb-3 group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-300" aria-hidden="true">
                        {card.icon}
                      </span>
                      <h4 className="text-slate-950 font-bold text-sm mb-1.5">{card.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed max-w-[240px]">{card.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Module Dashboard Mockups */}
        <section className="py-12 lg:py-16 relative overflow-hidden" id="module-hub"
          style={{ background: 'linear-gradient(145deg, #fffef7 0%, #fffbeb 35%, #fef9c3 65%, #fde68a 100%)' }}>

          <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 w-full">
            {/* Header — POSH style */}
            <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
              <p className="text-xs font-bold capitalize tracking-widest text-amber-700 mb-3">Interactive Workspace</p>
              <h2 className="text-gray-900 mb-4 capitalize">Interactive Module Dashboard Mockups</h2>
              <p className="text-gray-600 text-base lg:text-lg">
                Select a module to toggle its dedicated glass dashboard mockup. Interact with live sliders, calculators, and task components to see operational reactivity.
              </p>
            </div>

            {(() => {
              const tabs = [
                { id: 'hrms', icon: '👥', label: 'HRMS Node', sub: 'Payroll & Staffing', activeBorder: 'border-emerald-400', activeShadow: 'shadow-[0_0_0_1px_#34d399,0_8px_20px_rgba(52,211,153,0.25)]', activeBg: 'bg-emerald-50', tagColor: 'text-emerald-600' },
                { id: 'crm', icon: '🤝', label: 'CRM Hub', sub: 'Sales & Pipelines', activeBorder: 'border-violet-400', activeShadow: 'shadow-[0_0_0_1px_#a78bfa,0_8px_20px_rgba(167,139,250,0.25)]', activeBg: 'bg-violet-50', tagColor: 'text-violet-600' },
                { id: 'inventory', icon: '📦', label: 'Inventory', sub: 'Supply & Warehousing', activeBorder: 'border-orange-400', activeShadow: 'shadow-[0_0_0_1px_#fb923c,0_8px_20px_rgba(251,146,60,0.25)]', activeBg: 'bg-orange-50', tagColor: 'text-orange-600' },
                { id: 'finance', icon: '📈', label: 'Finance', sub: 'Treasury & Forecasts', activeBorder: 'border-cyan-400', activeShadow: 'shadow-[0_0_0_1px_#22d3ee,0_8px_20px_rgba(34,211,238,0.25)]', activeBg: 'bg-cyan-50', tagColor: 'text-cyan-700' },
                { id: 'accounting', icon: '⚖️', label: 'Accounting', sub: 'Double-Entry Ledgers', activeBorder: 'border-yellow-400', activeShadow: 'shadow-[0_0_0_1px_#facc15,0_8px_20px_rgba(250,204,21,0.25)]', activeBg: 'bg-yellow-50', tagColor: 'text-yellow-700' },
                { id: 'pm', icon: '📋', label: 'Project Management', sub: 'Sprints & Kanbans', activeBorder: 'border-blue-400', activeShadow: 'shadow-[0_0_0_1px_#60a5fa,0_8px_20px_rgba(96,165,250,0.25)]', activeBg: 'bg-blue-50', tagColor: 'text-blue-600' },
              ];

              const activeTab = tabs.find(t => t.id === hubTab) || tabs[0];

              // Computed values
              const hrmsGross = hrmsSalary;
              const hrmsWithheld = Math.round(hrmsSalary * (hrmsTax / 100));
              const hrmsNet = hrmsGross - hrmsWithheld;
              const crmProjected = Math.round(crmPipeline * (crmRate / 100));
              const pmDone = [pmTask1, pmTask2].filter(Boolean).length;
              const pmPct = Math.round((pmDone / 2) * 100);
              const pmHours = pmDone * 8;
              const pmRevenue = pmHours * 1500;
              const fmt = (n) => '₹' + n.toLocaleString('en-IN', { minimumFractionDigits: 2 });

              return (
                <>
                  {/* Tab Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10 p-5 bg-white/80 backdrop-blur-sm rounded-[20px] shadow-[0_8px_28px_rgba(180,83,9,0.08)]">
                    {tabs.map(t => {
                      const isActive = hubTab === t.id;
                      return (
                        <button
                          key={t.id}
                          onClick={() => setHubTab(t.id)}
                          className={`flex flex-col items-center text-center gap-3 px-3 py-5 rounded-2xl border transition-all duration-200 cursor-pointer
                            ${isActive
                              ? `bg-white ${t.activeBorder} ${t.activeShadow}`
                              : 'bg-white border-slate-900/[0.08] shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:bg-amber-50 hover:border-amber-300/40 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(180,83,9,0.10)]'
                            }`}
                        >
                          <span className={`w-11 h-11 flex items-center justify-center rounded-xl text-2xl transition-transform duration-200 ${isActive ? `${t.activeBg} scale-110` : 'bg-slate-50'}`}>
                            {t.icon}
                          </span>
                          <div>
                            <strong className="block text-[0.875rem] font-bold text-gray-900 leading-tight mb-0.5">{t.label}</strong>
                            <span className="block text-[0.7rem] text-gray-500">{t.sub}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Dashboard Window */}
                  <div className="bg-white rounded-[20px] shadow-[0_16px_40px_rgba(180,83,9,0.10)] overflow-hidden">
                    {/* Window bar */}
                    <div className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-slate-900/5 bg-slate-900/[0.015]">
                      <span className="font-bold text-gray-900" style={{ fontSize: '1rem' }}>
                        {activeTab.icon} {activeTab.label} Dynamic Panel
                      </span>
                      <span className="flex items-center gap-2 text-[0.775rem] font-semibold text-emerald-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse inline-block" />
                        Operational Sync Active
                      </span>
                    </div>

                    {/* Pane body */}
                    <div className="p-6 md:p-10">

                      {/* ── HRMS ── */}
                      {hubTab === 'hrms' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                          <div className="bg-white rounded-xl border border-slate-900/[0.08] p-6 shadow-sm">
                            <h4 className="text-gray-900 font-bold mb-1" style={{ fontSize: '1.2rem' }}>👥 Interactive Payroll Calculator</h4>
                            <p className="text-[0.85rem] text-gray-500 mb-6 leading-relaxed">Simulate salary adjustments. Tax withholdings and accounting vouchers post automatically in real-time.</p>
                            <div className="space-y-5 mb-6">
                              <div>
                                <div className="flex justify-between items-center text-[0.85rem] text-gray-500 mb-2">
                                  <label className="font-medium">Monthly Base Salary</label>
                                  <strong className="text-gray-900">{fmt(hrmsSalary)}</strong>
                                </div>
                                <input type="range" min="3000" max="25000" step="500" value={hrmsSalary}
                                  onChange={e => setHrmsSalary(Number(e.target.value))}
                                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-emerald-500"
                                  style={{ background: `linear-gradient(to right, #10b981 ${((hrmsSalary - 3000) / (25000 - 3000)) * 100}%, rgba(15,23,42,0.08) 0%)` }} />
                              </div>
                              <div>
                                <div className="flex justify-between items-center text-[0.85rem] text-gray-500 mb-2">
                                  <label className="font-medium">Tax Deduction Rate</label>
                                  <strong className="text-gray-900">{hrmsTax}%</strong>
                                </div>
                                <input type="range" min="5" max="45" step="1" value={hrmsTax}
                                  onChange={e => setHrmsTax(Number(e.target.value))}
                                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-emerald-500"
                                  style={{ background: `linear-gradient(to right, #10b981 ${((hrmsTax - 5) / (45 - 5)) * 100}%, rgba(15,23,42,0.08) 0%)` }} />
                              </div>
                            </div>
                            <div className="bg-slate-900/[0.02] rounded-xl p-5 border border-dashed border-slate-900/10">
                              <div className="flex justify-between text-[0.875rem] text-gray-600 mb-3"><span>Simulated Gross Pay:</span><strong className="text-gray-900">{fmt(hrmsGross)}</strong></div>
                              <div className="flex justify-between text-[0.875rem] text-red-500 mb-3"><span>Income Taxes Withheld:</span><strong>-{fmt(hrmsWithheld)}</strong></div>
                              <hr className="border-dashed border-slate-900/10 mb-3" />
                              <div className="flex justify-between"><span className="text-[0.875rem] text-gray-600">Calculated Net Pay:</span><strong className="text-emerald-600 text-[1.05rem] font-bold">{fmt(hrmsNet)}</strong></div>
                            </div>
                          </div>
                          <div className="bg-white rounded-xl border border-slate-900/[0.08] p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-5">
                              <h4 className="text-gray-900 font-bold" style={{ fontSize: '1.2rem' }}>🏢 Active Staff Registry</h4>
                              <span className="text-[0.75rem] bg-slate-100 text-gray-500 px-3 py-1 rounded-full">3 Employees Loaded</span>
                            </div>
                            <ul className="flex flex-col gap-3 mb-5">
                              {[
                                { initials: 'AM', name: 'Alexander Mercer', role: 'Senior PM • Product Team', bg: 'bg-orange-100 text-orange-600 border border-orange-200', status: 'Paid', statusCls: 'bg-emerald-100 text-emerald-700 border border-emerald-200' },
                                { initials: 'SK', name: 'Sarah Koenig', role: 'VP of Sales • CRM Director', bg: 'bg-blue-100 text-blue-600 border border-blue-200', status: 'Paid', statusCls: 'bg-emerald-100 text-emerald-700 border border-emerald-200' },
                                { initials: 'EL', name: 'Evan Lindqvist', role: 'Inventory Specialist', bg: 'bg-purple-100 text-purple-600 border border-purple-200', status: 'Processing', statusCls: 'bg-yellow-100 text-yellow-700 border border-yellow-200' },
                              ].map(emp => (
                                <li key={emp.initials} className="flex items-center gap-4 px-4 py-3 rounded-xl border border-slate-900/[0.03] bg-slate-50/50">
                                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${emp.bg}`}>{emp.initials}</div>
                                  <div className="flex-1 min-w-0">
                                    <strong className="block text-[0.9rem] text-gray-900">{emp.name}</strong>
                                    <span className="text-[0.725rem] text-gray-500">{emp.role}</span>
                                  </div>
                                  <span className={`text-[0.725rem] font-bold px-2.5 py-1 rounded ${emp.statusCls}`}>{emp.status}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="bg-slate-900/[0.04] rounded-lg p-4 border border-slate-900/5">
                              <span className="text-[0.65rem] font-bold capitalize tracking-widest text-emerald-600 block mb-2">Automated Ledger Posting</span>
                              <code className="text-[0.75rem] text-gray-700 break-all leading-relaxed">POST: DR Payroll Expense {fmt(hrmsGross)} / CR Net Payroll {fmt(hrmsNet)} / CR Taxes Payable {fmt(hrmsWithheld)}</code>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ── CRM ── */}
                      {hubTab === 'crm' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                          <div className="bg-white rounded-xl border border-slate-900/[0.08] p-6 shadow-sm">
                            <h4 className="text-gray-900 font-bold mb-1" style={{ fontSize: '1.2rem' }}>🤝 Draggable Sales Pipeline Metrics</h4>
                            <p className="text-[0.85rem] text-gray-500 mb-6 leading-relaxed">Adjust expected value and close rates to trigger forecast models inside accounting ledger.</p>
                            <div className="space-y-5 mb-6">
                              <div>
                                <div className="flex justify-between items-center text-[0.85rem] text-gray-500 mb-2">
                                  <label className="font-medium">Pipeline Contract Value</label>
                                  <strong className="text-gray-900">{fmt(crmPipeline)}</strong>
                                </div>
                                <input type="range" min="10000" max="500000" step="5000" value={crmPipeline}
                                  onChange={e => setCrmPipeline(Number(e.target.value))}
                                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-violet-500"
                                  style={{ background: `linear-gradient(to right, #8b5cf6 ${((crmPipeline - 10000) / (500000 - 10000)) * 100}%, rgba(15,23,42,0.08) 0%)` }} />
                              </div>
                              <div>
                                <div className="flex justify-between items-center text-[0.85rem] text-gray-500 mb-2">
                                  <label className="font-medium">Closing Win-Probability</label>
                                  <strong className="text-gray-900">{crmRate}%</strong>
                                </div>
                                <input type="range" min="5" max="100" step="5" value={crmRate}
                                  onChange={e => setCrmRate(Number(e.target.value))}
                                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-violet-500"
                                  style={{ background: `linear-gradient(to right, #8b5cf6 ${((crmRate - 5) / (100 - 5)) * 100}%, rgba(15,23,42,0.08) 0%)` }} />
                              </div>
                            </div>
                            <div className="bg-slate-900/[0.02] rounded-xl p-5 border border-slate-900/5 flex flex-col gap-3">
                              <div className="flex justify-between items-center px-4 py-3 bg-slate-50 rounded-lg text-[0.85rem] text-gray-600"><span>Qualified Pipeline:</span><strong className="text-gray-900">{fmt(crmPipeline)}</strong></div>
                              <div className="flex justify-between items-center px-4 py-3 bg-violet-50 border border-violet-200 rounded-lg text-[0.85rem] text-violet-700"><span>Projected Forecast Value:</span><strong>{fmt(crmProjected)}</strong></div>
                            </div>
                          </div>
                          <div className="bg-white rounded-xl border border-slate-900/[0.08] p-6 shadow-sm">
                            <h4 className="text-gray-900 font-bold mb-1" style={{ fontSize: '1.2rem' }}>📈 Real-time Lead Funnel Dashboard</h4>
                            <p className="text-[0.85rem] text-gray-500 mb-6 leading-relaxed">Sales pipeline status triggers automated CRM sequences.</p>
                            <div className="flex flex-col gap-3 items-center mb-8 py-4 w-full">
                              {[
                                {
                                  label: `MQL Leads (${Math.round(148 * (crmPipeline / 120000))})`,
                                  w: '100%',
                                  cls: 'bg-[#a78bfa]/30 border border-[#a78bfa]/50'
                                },
                                {
                                  label: `SQL Meetings (${Math.round(42 * (crmPipeline / 120000) * (crmRate / 45))})`,
                                  w: `${Math.min(100, Math.max(20, Math.round(75 * (crmRate / 45))))}%`,
                                  cls: 'bg-[#a78bfa]/20 border border-[#a78bfa]/40'
                                },
                                {
                                  label: `Proposals Out (${Math.round(18 * (crmPipeline / 120000) * (crmRate / 45))})`,
                                  w: `${Math.min(100, Math.max(15, Math.round(45 * (crmRate / 45))))}%`,
                                  cls: 'bg-[#a78bfa]/10 border border-[#a78bfa]/30'
                                },
                              ].map((bar, idx) => (
                                <div
                                  key={idx}
                                  className={`h-[38px] ${bar.cls} rounded-md flex items-center justify-center text-[0.8rem] font-semibold text-violet-700 transition-all duration-300`}
                                  style={{ width: bar.w }}
                                >
                                  <span>{bar.label}</span>
                                </div>
                              ))}
                            </div>
                            <div className="bg-slate-900/[0.04] rounded-lg p-4 border border-slate-900/5">
                              <span className="text-[0.65rem] font-bold capitalize tracking-widest text-violet-600 block mb-2">CRM Integrated Hook</span>
                              <code className="text-[0.75rem] text-gray-700 leading-relaxed">IF Win-Prob &gt; 75%: Trigger Pre-order Stock allocation &amp; Accounts Receivable Invoice draft.</code>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ── INVENTORY ── */}
                      {hubTab === 'inventory' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                          <div className="bg-white rounded-xl border border-slate-900/[0.08] p-6 shadow-sm">
                            <h4 className="text-gray-900 font-bold mb-1" style={{ fontSize: '1.2rem' }}>📦 Warehousing Stock Controllers</h4>
                            <p className="text-[0.85rem] text-gray-500 mb-6 leading-relaxed">Simulate stock balances and low stock levels. Click Re-Order to see accounts payable vouchers generate.</p>
                            <div className="flex flex-col gap-6">
                              {[
                                { name: '🔋 Lithium-Ion Core Battery Pack', qty: 5, pct: 10, critical: true, cost: '₹120.00', reorder: 150 },
                                { name: '📺 4K OLED Glass Display Panel', qty: 82, pct: 82, critical: false, cost: '₹280.00', reorder: 50 },
                              ].map(item => (
                                <div key={item.name} className="rounded-xl border border-slate-200 p-5">
                                  <div className="flex justify-between items-center text-[0.875rem] mb-3">
                                    <strong className="text-gray-900">{item.name}</strong>
                                    <span className={`text-[0.75rem] font-bold px-2.5 py-1 rounded ${item.critical ? 'bg-red-100 text-red-600 border border-red-200 animate-pulse' : 'bg-emerald-100 text-emerald-700 border border-emerald-200'}`}>{item.qty} Units Left</span>
                                  </div>
                                  <div className="h-1.5 bg-slate-200 rounded-full mb-3 overflow-hidden">
                                    <div className={`h-full rounded-full ${item.critical ? 'bg-red-500' : 'bg-emerald-500'}`} style={{ width: `${item.pct}%` }} />
                                  </div>
                                  <div className="flex items-center justify-between text-[0.75rem] text-gray-500">
                                    <span>Unit Cost: {item.cost}</span>
                                    <button className="text-[0.75rem] font-bold px-4 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-700 transition-colors">Re-Order {item.reorder} Units</button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-white rounded-xl border border-slate-900/[0.08] p-6 shadow-sm">
                            <h4 className="text-gray-900 font-bold mb-1" style={{ fontSize: '1.2rem' }}>⚙️ Automated Stock Ledger &amp; Purchase Order</h4>
                            <p className="text-[0.85rem] text-gray-500 mb-5 leading-relaxed">Inventory updates are directly synchronized with Accounts Payable ledger records.</p>
                            <div className="bg-slate-900/[0.04] rounded-lg p-5 border border-slate-900/5 h-32 font-mono text-[0.75rem] flex flex-col gap-2 overflow-y-auto mb-5 text-emerald-700">
                              <div className="text-red-600">[ALERT] Lithium battery stock falls under threshold limit (15). Triggering critical workflow.</div>
                              <div>[HOOK] Awaiting client Re-Order action to commit procurement workflow...</div>
                            </div>
                            <div className="bg-slate-900/[0.04] rounded-lg p-4 border border-slate-900/5">
                              <span className="text-[0.65rem] font-bold capitalize tracking-widest text-orange-600 block mb-2">Inventory Assets Ledger Posting</span>
                              <code className="text-[0.75rem] text-gray-700">Awaiting Restock order...</code>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ── FINANCE ── */}
                      {hubTab === 'finance' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                          <div className="bg-white rounded-xl border border-slate-900/[0.08] p-6 shadow-sm">
                            <h4 className="text-gray-900 font-bold mb-1" style={{ fontSize: '1.2rem' }}>📈 Financial Performance Dashboard</h4>
                            <p className="text-[0.85rem] text-gray-500 mb-5 leading-relaxed">Interactive SVG Financial graph showing consolidated Revenue vs Operating Cost curves.</p>
                            <div className="bg-slate-900/[0.015] rounded-xl p-6 border border-slate-900/[0.04]">
                              <svg viewBox="0 0 400 200" className="w-full h-auto overflow-visible">
                                <line x1="10" y1="20" x2="390" y2="20" stroke="rgba(15,23,42,0.05)" />
                                <line x1="10" y1="70" x2="390" y2="70" stroke="rgba(15,23,42,0.05)" />
                                <line x1="10" y1="120" x2="390" y2="120" stroke="rgba(15,23,42,0.05)" />
                                <line x1="10" y1="170" x2="390" y2="170" stroke="rgba(15,23,42,0.1)" />
                                <path d="M 10 140 Q 100 130 200 120 T 390 100" fill="none" stroke="#F97316" strokeWidth="2.5" />
                                <path d="M 10 130 Q 100 80 200 70 T 390 40" fill="none" stroke="#06B6D4" strokeWidth="3" />
                                <circle cx="200" cy="70" r="5" fill="#06B6D4" />
                                <circle cx="390" cy="40" r="5" fill="#06B6D4" />
                              </svg>
                              <div className="flex justify-center gap-6 mt-4">
                                <span className="flex items-center gap-2 text-[0.75rem] text-gray-500"><span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" /> Gross Revenue</span>
                                <span className="flex items-center gap-2 text-[0.75rem] text-gray-500"><span className="w-2 h-2 rounded-full bg-orange-400 inline-block" /> Operations Cost</span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white rounded-xl border border-slate-900/[0.08] p-6 shadow-sm">
                            <h4 className="text-gray-900 font-bold mb-1" style={{ fontSize: '1.2rem' }}>📊 Treasury &amp; Budget Allocations</h4>
                            <p className="text-[0.85rem] text-gray-500 mb-5 leading-relaxed">Review cashflows derived from accounting ledgers automatically.</p>
                            <div className="grid grid-cols-2 gap-5 mb-5">
                              {[
                                { label: 'Current Run-Rate:', val: '₹1.52M / yr', color: 'text-gray-900' },
                                { label: 'Net Profit Margin:', val: '42.8%', color: 'text-emerald-700' },
                                { label: 'Cash-on-Hand:', val: '₹4,82,000', color: 'text-gray-900' },
                                { label: 'Calculated ROI Score:', val: 'A+ Highly Fluid', color: 'text-cyan-700' },
                              ].map(m => (
                                <div key={m.label} className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col gap-1.5">
                                  <span className="text-[0.75rem] font-semibold text-gray-500">{m.label}</span>
                                  <strong className={`text-[1.15rem] font-extrabold ${m.color}`}>{m.val}</strong>
                                </div>
                              ))}
                            </div>
                            <div className="bg-slate-900/[0.04] rounded-lg p-4 border border-slate-900/5">
                              <span className="text-[0.65rem] font-bold capitalize tracking-widest text-cyan-700 block mb-2">Integrated Treasury Rule</span>
                              <code className="text-[0.75rem] text-gray-700">Trigger: Automated dividend allocation rules evaluated and synced daily at midnight.</code>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ── ACCOUNTING ── */}
                      {hubTab === 'accounting' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                          <div className="bg-white rounded-xl border border-slate-900/[0.08] p-6 shadow-sm">
                            <h4 className="text-gray-900 font-bold mb-1" style={{ fontSize: '1.2rem' }}>⚖️ Double-Entry Ledger Accruals</h4>
                            <p className="text-[0.85rem] text-gray-500 mb-5 leading-relaxed">Review matching journal postings generated by CRM sales, HRMS salaries, and Inventory reorders.</p>
                            <div className="max-h-[250px] overflow-y-auto rounded-xl border border-slate-200">
                              <table className="w-full border-collapse text-[0.85rem]">
                                <thead>
                                  <tr className="bg-slate-50">
                                    <th className="px-4 py-3 text-left font-semibold text-gray-600">Account Name</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-600">Debit</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-600">Credit</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {[
                                    { name: 'Bank (Cash Assets)', dr: '₹54,000.00', cr: '—', muted: false },
                                    { name: 'CRM Sales Revenue', dr: '—', cr: '₹54,000.00', muted: false },
                                    { name: 'Payroll Expense', dr: '₹7,500.00', cr: '—', muted: true },
                                    { name: 'Taxes Payable (Accrued)', dr: '—', cr: '₹1,650.00', muted: true },
                                    { name: 'Cash Clearance (Net Pay)', dr: '—', cr: '₹5,850.00', muted: true },
                                  ].map(row => (
                                    <tr key={row.name} className={`border-t border-slate-100 hover:bg-slate-50 ${row.muted ? 'text-gray-500' : 'text-gray-900'}`}>
                                      <td className="px-4 py-3">{row.name}</td>
                                      <td className="px-4 py-3">{row.dr}</td>
                                      <td className="px-4 py-3">{row.cr}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="bg-white rounded-xl border border-slate-900/[0.08] p-6 shadow-sm">
                            <h4 className="text-gray-900 font-bold mb-1" style={{ fontSize: '1.2rem' }}>🏛️ Live Financial Balance Auditor</h4>
                            <p className="text-[0.85rem] text-gray-500 mb-5 leading-relaxed">Automated validation rules ensure ledger debits and credits match instantly.</p>
                            <div className="flex items-center gap-8 mb-5 bg-slate-900/[0.015] p-6 rounded-xl border border-slate-900/[0.04]">
                              <div className="relative w-24 h-24 shrink-0">
                                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(15,23,42,0.08)" strokeWidth="10" />
                                  <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="10" strokeDasharray="251" strokeDashoffset="0" strokeLinecap="round" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                  <strong className="text-gray-900 text-lg font-bold leading-none">100%</strong>
                                  <span className="text-emerald-600 text-[10px]">Balanced</span>
                                </div>
                              </div>
                              <div className="space-y-2 text-[0.85rem] flex-1">
                                <div className="flex justify-between"><span className="text-gray-500">Total Active Debits:</span><strong className="text-gray-900">₹61,500.00</strong></div>
                                <div className="flex justify-between"><span className="text-gray-500">Total Active Credits:</span><strong className="text-gray-900">₹61,500.00</strong></div>
                                <hr className="border-slate-200 my-2" />
                                <div className="flex justify-between"><span className="text-gray-500">Ledger Audit Status:</span><strong className="text-emerald-600">MATCHED &amp; AUDITED</strong></div>
                              </div>
                            </div>
                            <div className="bg-slate-900/[0.04] rounded-lg p-4 border border-slate-900/5">
                              <span className="text-[0.65rem] font-bold capitalize tracking-widest text-yellow-700 block mb-2">Sarbanes-Oxley Compliant</span>
                              <code className="text-[0.75rem] text-gray-700">POST: Hash index block verified and committed into read-only audit log database.</code>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ── PROJECT MANAGEMENT ── */}
                      {hubTab === 'pm' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                          <div className="bg-white rounded-xl border border-slate-900/[0.08] p-6 shadow-sm">
                            <h4 className="text-gray-900 font-bold mb-1" style={{ fontSize: '1.2rem' }}>📋 Agile Task Sprint Kanban</h4>
                            <p className="text-[0.85rem] text-gray-500 mb-6 leading-relaxed">Check tasks to update sprint progress. Completed tasks trigger timesheet tracking into HRMS and billing pipelines.</p>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h5 className="text-gray-700 text-sm font-bold mb-3">📝 Sprint Backlog</h5>
                                <div className="rounded-xl border border-slate-200 p-4">
                                  <span className="text-[0.75rem] font-bold bg-red-100 text-red-600 border border-red-200 px-2 py-0.5 rounded mb-3 inline-block">High</span>
                                  <h6 className="text-gray-900 text-[0.85rem] font-semibold mb-3">Integrate inventory barcode scanning webhook</h6>
                                  <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={pmTask1} onChange={e => setPmTask1(e.target.checked)} className="accent-blue-500 w-4 h-4 cursor-pointer" />
                                    <span className="text-gray-500 text-[0.8rem]">Mark Completed</span>
                                  </label>
                                </div>
                              </div>
                              <div>
                                <h5 className="text-gray-700 text-sm font-bold mb-3">🚀 In Progress</h5>
                                <div className="rounded-xl border border-slate-200 p-4">
                                  <span className="text-[0.75rem] font-bold bg-yellow-100 text-yellow-700 border border-yellow-200 px-2 py-0.5 rounded mb-3 inline-block">Medium</span>
                                  <h6 className="text-gray-900 text-[0.85rem] font-semibold mb-3">Deploy payroll taxes calculations engine</h6>
                                  <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={pmTask2} onChange={e => setPmTask2(e.target.checked)} className="accent-blue-500 w-4 h-4 cursor-pointer" />
                                    <span className="text-gray-500 text-[0.8rem]">Mark Completed</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white rounded-xl border border-slate-900/[0.08] p-6 shadow-sm">
                            <h4 className="text-gray-900 font-bold mb-1" style={{ fontSize: '1.2rem' }}>📊 Project Sprint Progress &amp; Billable Hooks</h4>
                            <p className="text-[0.85rem] text-gray-500 mb-6 leading-relaxed">Track tasks to compile consultant hours and report them to accounts receivable pipelines.</p>
                            <div className="mb-6">
                              <div className="flex justify-between text-[0.85rem] mb-2">
                                <span className="text-gray-500">Active Sprint 4:</span>
                                <strong className="text-gray-900">{pmPct}% Completed</strong>
                              </div>
                              <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 rounded-full transition-all duration-500" style={{ width: `${pmPct}%` }} />
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mb-5">
                              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                                <span className="text-[0.75rem] font-semibold text-gray-500 block mb-1">Total Sprint Hours:</span>
                                <strong className="text-gray-900 text-xl font-extrabold">{pmHours} hrs</strong>
                              </div>
                              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                                <span className="text-[0.75rem] font-semibold text-gray-500 block mb-1">Billable Revenue Accrued:</span>
                                <strong className="text-blue-600 text-xl font-extrabold">{fmt(pmRevenue)}</strong>
                              </div>
                            </div>
                            <div className="bg-slate-900/[0.04] rounded-lg p-4 border border-slate-900/5">
                              <span className="text-[0.65rem] font-bold capitalize tracking-widest text-blue-600 block mb-2">Project Management Integrated Hook</span>
                              <code className="text-[0.75rem] text-gray-700 leading-relaxed">
                                {pmDone === 0 ? 'Awaiting task completion updates to trigger accounting journal posts...' : `${pmDone} task(s) completed → DR Accounts Receivable ${fmt(pmRevenue)} / CR Project Revenue ${fmt(pmRevenue)}`}
                              </code>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </section>

        {/* Implementation Section: How Isarva ERP Goes Live */}
        <section
          className="py-12 lg:py-16 relative overflow-hidden border-t border-slate-900/5"
          id="how-it-works"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(16, 185, 129, 0.08), transparent 55%), linear-gradient(180deg, #ffffff 0%, #ecfdf5 55%, #f0fdf4 100%)'
          }}
        >
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 w-full">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <span className="text-xs font-extrabold capitalize tracking-widest text-[#059669] mb-3 block">Implementation</span>
              <h2 className="text-gray-900 mb-4 capitalize">How Isarva ERP Goes Live</h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Five clear steps from first meeting to daily use—most teams go live in <strong className="text-emerald-600 font-extrabold">4 to 12 weeks</strong>, depending on modules and data size.
              </p>
            </div>

            <div className="relative pt-6 lg:pt-10">
              {/* Horizontal line for desktop */}
              <div className="hidden lg:block absolute top-[4.75rem] left-[10%] right-[10%] h-1 bg-emerald-100 rounded-full overflow-hidden" aria-hidden="true">
                <div className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 w-full" />
              </div>

              {/* Vertical progress line for mobile */}
              <div className="lg:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-emerald-100" aria-hidden="true" />

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                {[
                  { num: "01", icon: "🔍", title: "Understand your business", desc: "We learn how your team works—departments, branches, and the software you use today." },
                  { num: "02", icon: "⚙️", title: "Set up your system", desc: "We configure accounts, approvals, user access, and workflows to fit how you operate." },
                  { num: "03", icon: "📥", title: "Move your data", desc: "We import your records from spreadsheets or old systems—safely, in stages, with checks along the way." },
                  { num: "04", icon: "🎓", title: "Train your team", desc: "Practical sessions for finance, HR, sales, warehouse staff, and managers—using real examples." },
                  { num: "05", icon: "🚀", title: "Launch with support", desc: "We go live in phases, stay close during launch week, and help you improve after day one." }
                ].map((step, idx) => (
                  <article
                    key={idx}
                    className="flex flex-col items-center text-center gap-5 lg:gap-4 p-5 sm:p-6 bg-white border border-slate-900/5 rounded-2xl shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:-translate-y-1.5 hover:border-emerald-500/25 hover:shadow-[0_12px_30px_rgba(15,184,78,0.15)] transition-all duration-300 group"
                  >
                    <div className="relative shrink-0 w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-2 border-emerald-500/35 shadow-[0_4px_12px_rgba(15,184,78,0.15)] group-hover:scale-105 transition-transform duration-300">
                      <span className="font-display text-sm font-extrabold text-[#059669]">{step.num}</span>
                      <span className="absolute -bottom-1 -right-1 w-6 h-6 flex items-center justify-center bg-white border border-slate-900/10 rounded-full text-xs shadow-sm">{step.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-base font-extrabold text-slate-900 mb-1.5">{step.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section: Savings Calculator */}
        <section
          className="py-12 lg:py-16 relative overflow-hidden border-t border-b border-slate-900/5"
          id="roi"
          style={{
            background: 'radial-gradient(ellipse 55% 45% at 0% 50%, rgba(16, 185, 129, 0.08), transparent 55%), radial-gradient(ellipse 50% 40% at 100% 50%, rgba(6, 182, 212, 0.06), transparent 50%), linear-gradient(135deg, #f8fafc 0%, #ecfdf5 50%, #f0f9ff 100%)'
          }}
        >
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 w-full">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <span className="text-xs font-extrabold capitalize tracking-widest text-[#059669] mb-3 block">Savings Calculator</span>
              <h2 className="text-gray-900 mb-4 capitalize">See how much time and money you could save</h2>
              <p className="text-slate-600 text-base sm:text-lg">
                If your team still copies data between spreadsheets, sales, stock, and accounts—this quick estimate shows what one connected system could free up.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto p-6 md:p-10 bg-white border border-slate-900/10 rounded-[24px] shadow-lg relative overflow-hidden">
              {/* Highlight accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500" />

              {/* Left Side: Estimated Savings */}
              <div className="flex flex-col items-center justify-center text-center p-2 sm:p-5">
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 mb-1.5">Your estimated savings</h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-8">Updates instantly as you move the sliders.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Hours Saved Card */}
                  <div className="flex flex-col items-center text-center gap-2.5 p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-900/5 hover:-translate-y-1 transition-transform duration-300">
                    <span className="text-2xl leading-none" aria-hidden="true">⏱️</span>
                    <span className="text-[10px] sm:text-xs font-bold tracking-wider capitalize text-slate-400">Hours saved each month</span>
                    <strong className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                      {roiHoursSaved.toLocaleString()} Hours
                    </strong>
                    <span className="text-[10px] sm:text-xs text-slate-400 max-w-[160px] leading-relaxed">Less manual entry and fixing mistakes</span>
                  </div>

                  {/* Money Saved Card */}
                  <div className="flex flex-col items-center text-center gap-2.5 p-6 rounded-2xl bg-gradient-to-b from-emerald-50 to-emerald-100 border border-emerald-500/20 hover:-translate-y-1 transition-transform duration-300">
                    <span className="text-2xl leading-none" aria-hidden="true">💰</span>
                    <span className="text-[10px] sm:text-xs font-bold tracking-wider capitalize text-emerald-600">Money back each year</span>
                    <strong className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-600 leading-tight">
                      ₹{roiMoneySaved.toLocaleString('en-IN')}
                    </strong>
                    <span className="text-[10px] sm:text-xs text-emerald-600/70 max-w-[160px] leading-relaxed">Based on your team size and pay rates</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Inputs */}
              <div className="relative z-10 flex flex-col gap-[1.35rem] p-7 rounded-[18px] bg-gradient-to-br from-[#f0fdf4] via-[#ecfdf5] to-[#f8fafc] text-slate-900 border border-[#0fb84e]/12 shadow-[0_8px_24px_rgba(15,184,78,0.06)] overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 90% 10%, rgba(15, 184, 78, 0.08), transparent 45%)' }} />

                <div className="relative z-10 text-center mb-1">
                  <span className="inline-flex items-center gap-[0.4rem] px-[0.65rem] py-[0.3rem] rounded-full bg-[#059669]/10 border border-[#059669]/20 text-[0.65rem] font-extrabold tracking-[0.08em] capitalize text-[#059669] mb-[0.85rem]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] relative flex shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34d399] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#34d399]"></span>
                    </span>
                    Live estimate
                  </span>
                  <h4 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 mb-1">Tell us about your business</h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Move the sliders to match your company—we'll update your savings instantly.</p>
                </div>

                {/* Slider 1 */}
                <div className="roi-slider-group">
                  <div className="flex flex-col items-start gap-1.5 mb-3">
                    <label htmlFor="roi-employees" className="flex items-center gap-[0.45rem] text-[0.88rem] font-semibold text-slate-600 leading-normal cursor-pointer">
                      <span className="text-base shrink-0 leading-none" aria-hidden="true">👥</span>
                      How many people work in your company?
                    </label>
                    <strong id="val-roi-employees" className="font-display text-[0.95rem] font-extrabold text-[#059669] transition-transform duration-200">{roiEmployees} Staff</strong>
                  </div>
                  <input
                    type="range"
                    id="roi-employees"
                    min="5"
                    max="500"
                    step="5"
                    value={roiEmployees}
                    onChange={(e) => setRoiEmployees(parseInt(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer outline-none transition-all duration-150 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-br [&::-webkit-slider-thumb]:from-[#0fb84e] [&::-webkit-slider-thumb]:to-[#059669] [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(15,184,78,0.35)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-150 active:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:shadow-[0_2px_12px_rgba(15,184,78,0.5)] [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gradient-to-br [&::-moz-range-thumb]:from-[#0fb84e] [&::-moz-range-thumb]:to-[#059669] [&::-moz-range-thumb]:shadow-[0_2px_8px_rgba(15,184,78,0.35)] active:[&::-moz-range-thumb]:scale-110"
                    style={{
                      background: `linear-gradient(to right, #10b981 0%, #10b981 ${((roiEmployees - 5) / (500 - 5)) * 100}%, rgba(15, 184, 78, 0.15) ${((roiEmployees - 5) / (500 - 5)) * 100}%, rgba(15, 184, 78, 0.15) 100%)`
                    }}
                  />
                </div>

                {/* Slider 2 */}
                <div className="roi-slider-group">
                  <div className="flex flex-col items-start gap-1.5 mb-3">
                    <label htmlFor="roi-orders" className="flex items-center gap-[0.45rem] text-[0.88rem] font-semibold text-slate-600 leading-normal cursor-pointer">
                      <span className="text-base shrink-0 leading-none" aria-hidden="true">📦</span>
                      How many customer orders do you handle per month?
                    </label>
                    <strong id="val-roi-orders" className="font-display text-[0.95rem] font-extrabold text-[#059669] transition-transform duration-200">{roiOrders.toLocaleString()} Orders</strong>
                  </div>
                  <input
                    type="range"
                    id="roi-orders"
                    min="50"
                    max="10000"
                    step="50"
                    value={roiOrders}
                    onChange={(e) => setRoiOrders(parseInt(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer outline-none transition-all duration-150 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-br [&::-webkit-slider-thumb]:from-[#0fb84e] [&::-webkit-slider-thumb]:to-[#059669] [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(15,184,78,0.35)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-150 active:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:shadow-[0_2px_12px_rgba(15,184,78,0.5)] [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gradient-to-br [&::-moz-range-thumb]:from-[#0fb84e] [&::-moz-range-thumb]:to-[#059669] [&::-moz-range-thumb]:shadow-[0_2px_8px_rgba(15,184,78,0.35)] active:[&::-moz-range-thumb]:scale-110"
                    style={{
                      background: `linear-gradient(to right, #10b981 0%, #10b981 ${((roiOrders - 50) / (10000 - 50)) * 100}%, rgba(15, 184, 78, 0.15) ${((roiOrders - 50) / (10000 - 50)) * 100}%, rgba(15, 184, 78, 0.15) 100%)`
                    }}
                  />
                </div>

                {/* Slider 3 */}
                <div className="roi-slider-group">
                  <div className="flex flex-col items-start gap-1.5 mb-3">
                    <label htmlFor="roi-labor" className="flex items-center gap-[0.45rem] text-[0.88rem] font-semibold text-slate-600 leading-normal cursor-pointer">
                      <span className="text-base shrink-0 leading-none" aria-hidden="true">💵</span>
                      What is the average hourly pay for your team?
                    </label>
                    <strong id="val-roi-labor" className="font-display text-[0.95rem] font-extrabold text-[#059669] transition-transform duration-200">₹{roiLabor}/hr</strong>
                  </div>
                  <input
                    type="range"
                    id="roi-labor"
                    min="20"
                    max="150"
                    step="5"
                    value={roiLabor}
                    onChange={(e) => setRoiLabor(parseInt(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer outline-none transition-all duration-150 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-br [&::-webkit-slider-thumb]:from-[#0fb84e] [&::-webkit-slider-thumb]:to-[#059669] [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(15,184,78,0.35)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-150 active:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:shadow-[0_2px_12px_rgba(15,184,78,0.5)] [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gradient-to-br [&::-moz-range-thumb]:from-[#0fb84e] [&::-moz-range-thumb]:to-[#059669] [&::-moz-range-thumb]:shadow-[0_2px_8px_rgba(15,184,78,0.35)] active:[&::-moz-range-thumb]:scale-110"
                    style={{
                      background: `linear-gradient(to right, #10b981 0%, #10b981 ${((roiLabor - 20) / (150 - 20)) * 100}%, rgba(15, 184, 78, 0.15) ${((roiLabor - 20) / (150 - 20)) * 100}%, rgba(15, 184, 78, 0.15) 100%)`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4b: Security & Compliance */}
        <section className="py-12 lg:py-16 relative overflow-hidden border-t border-slate-900/[0.08]" id="security" style={{
          background: 'radial-gradient(ellipse 65% 45% at 50% 0%, rgba(6, 182, 212, 0.08), transparent 60%), linear-gradient(180deg, #f8fafc 0%, #f0fdfa 50%, #ffffff 100%)'
        }}>
          {/* Local CSS Animations */}
          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes security-accent-flow {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            @keyframes security-shield-bob {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-6px); }
            }
          `}} />
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 w-full">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <span className="text-xs font-extrabold capitalize tracking-widest text-[#059669] mb-3 block">Trust</span>
              <h2 className="text-gray-900 mb-4 capitalize">Your Business Data Stays Safe</h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Payroll, sales, and accounts hold sensitive information. Isarva ERP builds security into every module—so your team can work confidently without extra IT overhead.
              </p>
            </div>

            <div className="rounded-[24px] bg-white border border-slate-900/[0.07] shadow-[0_20px_50px_rgba(15,23,42,0.07)] overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0891b2] via-[#0fb84e] to-[#0891b2] bg-[length:200%_100%]" style={{ animation: 'security-accent-flow 5s ease infinite' }} />

              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-x-5 md:gap-y-2 p-7 md:p-8 border-b border-cyan-500/12 items-center text-center md:text-left" style={{ background: 'linear-gradient(135deg, #ecfdf5 0%, #e0f2fe 55%, #f0fdf4 100%)' }}>
                <div className="w-16 h-16 md:row-span-2 flex items-center justify-center rounded-2xl bg-white border border-cyan-500/18 shadow-[0_6px_20px_rgba(8,145,178,0.1)] shrink-0 mx-auto md:mx-0">
                  <span className="text-3xl leading-none" style={{ animation: 'security-shield-bob 3.5s ease-in-out infinite' }}>🛡️</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-base sm:text-lg font-extrabold text-slate-900 mb-1.5">Security runs in the background</h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto md:mx-0">Your team keeps working normally—permissions, logs, encryption, and approvals handle the rest without extra IT setup.</p>
                </div>
                <div className="flex flex-wrap gap-2 md:col-start-2 justify-center md:justify-start">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/75 border border-cyan-500/15 text-[0.78rem] text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/30 hover:shadow-[0_4px_12px_rgba(8,145,178,0.1)]"><em className="font-extrabold text-[#059669] not-italic mr-1">TLS 1.2+</em> Encrypted connections</span>
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/75 border border-cyan-500/15 text-[0.78rem] text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/30 hover:shadow-[0_4px_12px_rgba(8,145,178,0.1)]"><em className="font-extrabold text-[#059669] not-italic mr-1">24/7</em> Backup checks</span>
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/75 border border-cyan-500/15 text-[0.78rem] text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/30 hover:shadow-[0_4px_12px_rgba(8,145,178,0.1)]"><em className="font-extrabold text-[#059669] not-italic mr-1">Multi-step</em> Approvals</span>
                </div>
              </div>

              {/* Grid showing borders via 1px gap on background */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-900/[0.08]">
                {[
                  { num: "01", icon: "🔐", title: "Control who sees what", desc: "Each role gets access only to the modules, branches, and records they need for their job.", accentColor: "#059669", accentBg: "rgba(5, 150, 105, 0.07)", accentBorder: "rgba(5, 150, 105, 0.2)" },
                  { num: "02", icon: "📋", title: "See every change made", desc: "Track who edited records, posted entries, or approved payments—with full date and time history.", accentColor: "#2563eb", accentBg: "rgba(37, 99, 235, 0.07)", accentBorder: "rgba(37, 99, 235, 0.2)" },
                  { num: "03", icon: "🔒", title: "Safe data in motion", desc: "Browser, app, and API traffic is encrypted so sensitive data cannot be read in transit.", accentColor: "#7c3aed", accentBg: "rgba(124, 58, 237, 0.07)", accentBorder: "rgba(124, 58, 237, 0.2)" },
                  { num: "04", icon: "💾", title: "Your data is backed up", desc: "Scheduled backups and tested restore plans keep you running if hardware fails or files are lost.", accentColor: "#0d9488", accentBg: "rgba(13, 148, 136, 0.07)", accentBorder: "rgba(13, 148, 136, 0.2)" },
                  { num: "05", icon: "✅", title: "Sign-off before it goes live", desc: "Purchases, payroll, and sensitive changes need manager approval before they take effect.", accentColor: "#16a34a", accentBg: "rgba(22, 163, 74, 0.07)", accentBorder: "rgba(22, 163, 74, 0.2)" },
                  { num: "06", icon: "🌐", title: "Host data where you need it", desc: "Pick hosting options that match your region's rules and your industry's compliance needs.", accentColor: "#0891b2", accentBg: "rgba(8, 145, 178, 0.07)", accentBorder: "rgba(8, 145, 178, 0.2)" }
                ].map((item, idx) => (
                  <article
                    key={idx}
                    className="group relative flex flex-col items-center text-center gap-3 p-6 bg-white transition-all duration-300 hover:z-10"
                    style={{
                      '--sec-accent-color': item.accentColor,
                      '--sec-accent-bg': item.accentBg,
                      '--sec-accent-border': item.accentBorder
                    }}
                  >
                    {/* Hover Top Border line */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--sec-accent-color)] scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100" />

                    {/* Hover Inner Shadow Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px var(--sec-accent-border)', backgroundColor: 'var(--sec-accent-bg)' }} />

                    <span className="font-display text-[0.68rem] font-extrabold tracking-wider leading-none relative z-10 transition-colors duration-300" style={{ color: item.accentColor }}>{item.num}</span>
                    <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-xl leading-none rounded-xl transition-transform duration-300 group-hover:scale-110 relative z-10" style={{ backgroundColor: item.accentBg, border: '1px solid var(--sec-accent-border)' }}>{item.icon}</span>

                    <div className="w-full flex flex-col items-center relative z-10">
                      <h3 className="text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed text-center max-w-[16rem]">{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4c: Testimonials */}
        <section
          className="py-12 lg:py-16 relative overflow-hidden border-t border-b border-slate-900/5"
          id="testimonials"
          style={{
            background: 'linear-gradient(145deg, #fffef7 0%, #fffbeb 50%, #fef9c3 100%)'
          }}
        >
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 w-full">
            <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
              <span className="text-xs font-extrabold capitalize tracking-widest text-[#0891b2] mb-3 block">Social Proof</span>
              <h2 className="text-gray-900 mb-4 capitalize">Trusted by Growing Operations Teams</h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Leaders consolidate spreadsheets and disconnected tools into one Isarva ERP command center.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-y-3 gap-x-6 mb-10" aria-label="Customer industries">
              {["Manufacturing", "Distribution", "Healthcare", "Professional Services", "Retail"].map((ind) => (
                <span key={ind} className="text-xs font-bold uppercase tracking-wider text-[#a16207] px-4 py-1.5 bg-white/70 rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.02)]">
                  {ind}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {[
                { quote: "Month-end close dropped from nine days to four. Finance, inventory, and HR finally share one source of truth.", author: "Priya Sharma", role: "CFO, Apex Manufacturing" },
                { quote: "We replaced four disconnected apps with Isarva. Pipeline, stock, and billing updates stay in sync without manual exports.", author: "James Okonkwo", role: "COO, Meridian Distribution" },
                { quote: "Payroll and project costing used to live in spreadsheets. Now leadership sees margin and utilization in real time.", author: "Elena Vasquez", role: "HR Director, Northline Services" }
              ].map((test, idx) => (
                <blockquote key={idx} className="bg-white/80 border border-slate-900/[0.05] rounded-2xl p-7 flex flex-col justify-between gap-5 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:bg-white/95 hover:border-slate-900/10 hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300 text-center md:text-left items-center md:items-start">
                  <p className="text-sm text-slate-600 leading-relaxed italic">“{test.quote}”</p>
                  <footer className="flex flex-col gap-0.5 w-full">
                    <strong className="font-display text-sm sm:text-base font-extrabold text-slate-900">{test.author}</strong>
                    <span className="text-xs text-slate-500">{test.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[900px] mx-auto">
              {[
                { val: "40%", label: "Faster month-end close" },
                { val: "6", label: "Modules, one platform" },
                { val: "98%", label: "Automation accuracy target" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-6 bg-white border border-slate-900/5 rounded-2xl shadow-[0_8px_24px_rgba(180,83,9,0.08)]">
                  <strong className="block font-display text-4xl font-extrabold text-[#0fb84e] mb-1.5">{stat.val}</strong>
                  <span className="text-xs text-slate-500 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4d: Comparison Table */}
        <section className="py-12 lg:py-16 relative overflow-hidden border-t border-b border-slate-900/5" id="compare" style={{
          background: 'radial-gradient(ellipse 60% 45% at 50% 0%, rgba(15, 184, 78, 0.07), transparent 60%), linear-gradient(180deg, #ffffff 0%, #f8fafc 55%, #f0fdf4 100%)'
        }}>
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 w-full">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <span className="text-xs font-extrabold capitalize tracking-widest text-[#059669] mb-3 block">Why Isarva</span>
              <h2 className="text-gray-900 mb-4 capitalize">One System vs. Many Disconnected Tools</h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Still running sales in one app, payroll in another, and stock in spreadsheets? Here is how a single Isarva ERP platform stacks up—side by side.
              </p>
            </div>

            <div className="border border-slate-900/[0.08] rounded-[24px] shadow-[0_18px_44px_rgba(15,23,42,0.07)] overflow-hidden bg-white">
              <div className="overflow-x-auto">
                <div className="min-w-[800px] flex flex-col" role="table" aria-label="Comparison Table">
                  {/* Table Head */}
                  <div className="grid grid-cols-[minmax(0,1.35fr)_repeat(3,minmax(0,1fr))] align-stretch border-b border-slate-900/[0.07] bg-gradient-to-r from-[#f8fafc] to-[#ecfdf5]" role="row">
                    <div className="flex flex-col items-start justify-center text-left gap-1.5 p-5 pl-6 border-r border-slate-900/[0.06]" role="columnheader">
                      <span className="font-display text-[0.82rem] font-extrabold tracking-[0.06em] uppercase text-[#64748b]">What matters</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center gap-1.5 p-5 border-r border-slate-900/[0.06]" role="columnheader">
                      <span className="text-xl leading-none" aria-hidden="true">📊</span>
                      <h3>Spreadsheets</h3>
                      <span className="text-[0.75rem] text-[#94a3b8] leading-tight">Manual files</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center gap-1.5 p-5 border-r border-slate-900/[0.06]" role="columnheader">
                      <span className="text-xl leading-none" aria-hidden="true">🧩</span>
                      <h3>Many apps</h3>
                      <span className="text-[0.75rem] text-[#94a3b8] leading-tight">Separate tools</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center gap-1.5 p-5 bg-gradient-to-b from-[#ecfdf5] to-[#d1fae5] relative border-r-0" role="columnheader">
                      <span className="absolute top-[0.65rem] right-[0.65rem] bg-emerald-500/15 border border-emerald-500/28 text-[#059669] text-[0.58rem] font-extrabold tracking-[0.06em] uppercase px-2 py-0.5 rounded-full shadow-sm">Best fit</span>
                      <span className="text-xl leading-none" aria-hidden="true">✨</span>
                      <h3>Isarva ERP</h3>
                      <span className="text-[0.75rem] text-[#94a3b8] leading-tight">One connected platform</span>
                    </div>
                  </div>

                  {/* Rows */}
                  {[
                    {
                      icon: "🔄",
                      title: "Everything stays in sync",
                      desc: "Sales, HR, stock, and accounts update together—no copy-paste.",
                      sheets: { text: "✗ Manual copying", status: "weak" },
                      apps: { text: "◐ You wire it up", status: "partial" },
                      Isarva: { text: "✓ Built-in sync", status: "yes" }
                    },
                    {
                      icon: "📋",
                      title: "One place to check history",
                      desc: "See who changed records, approved payments, or updated stock.",
                      sheets: { text: "✗ No central log", status: "weak" },
                      apps: { text: "◐ Scattered logs", status: "partial" },
                      Isarva: { text: "✓ Full audit trail", status: "yes" }
                    },
                    {
                      icon: "🔐",
                      title: "Control who sees what",
                      desc: "Give each role access only to the data they need for their job.",
                      sheets: { text: "✗ Weak controls", status: "weak" },
                      apps: { text: "◐ Varies by app", status: "partial" },
                      Isarva: { text: "✓ Role-based access", status: "yes" }
                    },
                    {
                      icon: "🚀",
                      title: "Help when you go live",
                      desc: "Get setup, training, and support—not just software on its own.",
                      sheets: { text: "✗ Do it yourself", status: "weak" },
                      apps: { text: "◐ Per vendor", status: "partial" },
                      Isarva: { text: "✓ Guided rollout", status: "yes" }
                    },
                    {
                      icon: "💰",
                      title: "True cost as you grow",
                      desc: "Fewer licenses, less rework, and less time fixing mistakes.",
                      sheets: { text: "◐ Hidden labor cost", status: "partial" },
                      apps: { text: "◐ Many subscriptions", status: "partial" },
                      Isarva: { text: "✓ One platform", status: "yes" }
                    }
                  ].map((row, idx) => (
                    <div key={idx} className="grid grid-cols-[minmax(0,1.35fr)_repeat(3,minmax(0,1fr))] border-b border-slate-900/[0.06] last:border-0 hover:bg-emerald-500/[0.03] transition-colors duration-300" role="row">
                      {/* Feature Description */}
                      <div className="flex items-start justify-start text-left gap-3 p-5 pl-6 border-r border-slate-900/[0.06]" role="rowheader">
                        <span className="w-11 h-11 flex items-center justify-center text-[1.25rem] leading-none rounded-[12px] bg-gradient-to-br from-[#f0fdf4] to-[#ecfdf5] border border-emerald-500/18 shrink-0 hover:scale-108 transition-transform duration-350" aria-hidden="true">{row.icon}</span>
                        <div className="flex flex-col items-start gap-1 flex-1 min-w-0">
                          <h4>{row.title}</h4>
                          <span className="text-[#64748b] text-[0.78rem] leading-[1.5] text-left">{row.desc}</span>
                        </div>
                      </div>

                      {/* Sheets Cell */}
                      <div className="flex items-center justify-center p-5 border-r border-slate-900/[0.06] text-center" role="cell">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.78rem] font-bold leading-normal ${row.sheets.status === "weak" ? "text-slate-500 bg-slate-400/12 border border-slate-400/20" : "text-amber-700 bg-amber-500/10 border border-amber-500/20"
                          }`}>
                          {row.sheets.text}
                        </span>
                      </div>

                      {/* Apps Cell */}
                      <div className="flex items-center justify-center p-5 border-r border-slate-900/[0.06] text-center" role="cell">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.78rem] font-bold leading-normal ${row.apps.status === "weak" ? "text-slate-500 bg-slate-400/12 border border-slate-400/20" : "text-amber-700 bg-amber-500/10 border border-amber-500/20"
                          }`}>
                          {row.apps.text}
                        </span>
                      </div>

                      {/* Isarva ERP Cell */}
                      <div className="flex items-center justify-center p-5 bg-[#0fb84e]/[0.05] border-r-0 text-center" role="cell">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.78rem] font-bold text-emerald-800 bg-emerald-500/12 border border-emerald-500/22 hover:scale-[1.04] transition-transform duration-250">
                          {row.Isarva.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4e: Pricing */}
        <section className="py-12 lg:py-16 relative overflow-hidden border-t border-b border-slate-900/5" id="pricing" style={{
          background: 'radial-gradient(ellipse 65% 45% at 50% 0%, rgba(16, 185, 129, 0.05), transparent 60%), linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)'
        }}>
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 w-full">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <span className="text-xs font-extrabold capitalize tracking-widest text-[#059669] mb-3 block">Plans</span>
              <h2 className="text-gray-900 mb-4 capitalize">Pick the Plan That Fits Your Team</h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Start small with the modules you need, or go all-in from day one. Every plan includes setup help, training, and secure hosting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-12">
              {/* Starter Plan */}
              <article className="bg-white border border-slate-900/[0.06] rounded-3xl p-8 flex flex-col justify-between gap-8 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:border-slate-900/10 hover:shadow-[0_12px_30px_rgba(15,23,42,0.04)] hover:-translate-y-1 transition-all duration-300 relative">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl leading-none" aria-hidden="true">🌱</span>
                      <span className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">Starter</span>
                    </div>
                    <h3 className="text-slate-900 mb-3 text-lg sm:text-xl font-extrabold">Just Getting Started</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Best for one location taking its first step away from spreadsheets.</p>
                  </div>
                  <ul className="flex flex-col gap-3.5 border-t border-slate-900/5 pt-6 text-sm text-slate-600">
                    <li className="flex items-start gap-2.5"><span className="text-emerald-500 font-bold" aria-hidden="true">✓</span> Up to 25 team members</li>
                    <li className="flex items-start gap-2.5"><span className="text-emerald-500 font-bold" aria-hidden="true">✓</span> Any 2 modules you choose</li>
                    <li className="flex items-start gap-2.5"><span className="text-emerald-500 font-bold" aria-hidden="true">✓</span> Email support</li>
                    <li className="flex items-start gap-2.5"><span className="text-emerald-500 font-bold" aria-hidden="true">✓</span> Guided data import</li>
                  </ul>
                </div>
                <a href="#contact" className="w-full text-center px-6 py-3.5 rounded-xl border border-slate-900/15 hover:border-emerald-500 hover:bg-emerald-50/20 text-slate-700 hover:text-emerald-700 font-bold text-sm transition-all duration-300">Request Quote</a>
              </article>

              {/* Growth Plan (Featured) */}
              <article className="bg-white border-2 border-emerald-500 rounded-3xl p-8 flex flex-col justify-between gap-8 shadow-[0_12px_40px_rgba(15,184,78,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <span className="absolute top-3 right-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">Most picked</span>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl leading-none" aria-hidden="true">🚀</span>
                      <span className="text-[10px] font-extrabold tracking-widest uppercase text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">Growth</span>
                    </div>
                    <h3 className="text-slate-900 mb-3 text-lg sm:text-xl font-extrabold">Ready to Scale</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">For growing teams that want every module, branch, and integration connected.</p>
                  </div>
                  <ul className="flex flex-col gap-3.5 border-t border-emerald-500/10 pt-6 text-sm text-slate-600">
                    <li className="flex items-start gap-2.5"><span className="text-emerald-500 font-bold" aria-hidden="true">✓</span> Up to 100 team members</li>
                    <li className="flex items-start gap-2.5"><span className="text-emerald-500 font-bold" aria-hidden="true">✓</span> All 6 modules included</li>
                    <li className="flex items-start gap-2.5"><span className="text-emerald-500 font-bold" aria-hidden="true">✓</span> Connect banks, shops &amp; apps</li>
                    <li className="flex items-start gap-2.5"><span className="text-emerald-500 font-bold" aria-hidden="true">✓</span> Priority setup support</li>
                  </ul>
                </div>
                <a href="#contact" className="w-full text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-sm shadow-md hover:shadow-lg hover:brightness-105 active:scale-[0.98] transition-all duration-300">Book Demo</a>
              </article>

              {/* Enterprise Plan */}
              <article className="bg-white border border-slate-900/[0.06] rounded-3xl p-8 flex flex-col justify-between gap-8 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:border-slate-900/10 hover:shadow-[0_12px_30px_rgba(15,23,42,0.04)] hover:-translate-y-1 transition-all duration-300 relative">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl leading-none" aria-hidden="true">🏢</span>
                      <span className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">Enterprise</span>
                    </div>
                    <h3 className="text-slate-900 mb-3 text-lg sm:text-xl font-extrabold">Large &amp; Complex Teams</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">For multi-branch businesses that need custom support and flexible hosting.</p>
                  </div>
                  <ul className="flex flex-col gap-3.5 border-t border-slate-900/5 pt-6 text-sm text-slate-600">
                    <li className="flex items-start gap-2.5"><span className="text-emerald-500 font-bold" aria-hidden="true">✓</span> Unlimited users (custom)</li>
                    <li className="flex items-start gap-2.5"><span className="text-emerald-500 font-bold" aria-hidden="true">✓</span> Multiple companies &amp; currencies</li>
                    <li className="flex items-start gap-2.5"><span className="text-emerald-500 font-bold" aria-hidden="true">✓</span> Dedicated support team</li>
                    <li className="flex items-start gap-2.5"><span className="text-emerald-500 font-bold" aria-hidden="true">✓</span> Cloud, on-prem, or hybrid</li>
                  </ul>
                </div>
                <a href="#contact" className="w-full text-center px-6 py-3.5 rounded-xl border border-slate-900/15 hover:border-emerald-500 hover:bg-emerald-50/20 text-slate-700 hover:text-emerald-700 font-bold text-sm transition-all duration-300">Talk to Sales</a>
              </article>
            </div>

            <p className="text-center text-xs text-slate-400 max-w-2xl mx-auto">Final pricing depends on your team size, modules, and integrations. We will recommend the right fit during your first call.</p>
          </div>
        </section>

        {/* Section 4f: FAQ */}
        <section className="py-12 lg:py-16 relative overflow-hidden border-t border-b border-slate-900/5" id="faq" style={{
          background: 'linear-gradient(180deg, #ffffff 0%, #ecfeff 100%)'
        }}>
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 w-full">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <span className="text-xs font-extrabold capitalize tracking-widest text-[#0891b2] mb-3 block">FAQ</span>
              <h2 className="text-gray-900 mb-4 capitalize">Common Questions, Straight Answers</h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Thinking about switching to Isarva ERP? Here are the things teams ask us most—explained in plain language.
              </p>
            </div>

            <div className="max-w-3xl mx-auto flex flex-col gap-4">
              {[
                { icon: "⏱️", question: "How long until we can go live?", answer: "Most teams go live in <strong>4 to 12 weeks</strong>. The timeline depends on how many modules you need, how many branches you run, and how much existing data we need to move over." },
                { icon: "🧩", question: "Can we start with just a few modules?", answer: "Yes. Many teams begin with HR, inventory, or accounts—and add sales, finance, and projects later when everyone is comfortable with the system." },
                { icon: "🌐", question: "Do you support multiple branches and currencies?", answer: "Yes. Manage different locations, warehouses, and currencies in one place—with combined reports your leadership and finance teams can trust." },
                { icon: "📥", question: "How do we move our existing data in?", answer: "We give you simple import templates and walk you through uploading employees, customers, products, and opening balances—with checks before go-live so nothing is missed." },
                { icon: "🔐", question: "How is our data kept secure?", answer: "Role-based access, a full history of every change, and encrypted connections work together to protect payroll and financial records across all modules." },
                { icon: "🎓", question: "What training and support do we get?", answer: "Hands-on onboarding for each role, admin guides, and ongoing support during and after launch—with premium service levels available on enterprise plans." }
              ].map((faq, idx) => (
                <details key={idx} className="group bg-white border border-slate-900/[0.06] rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between gap-4 p-5 font-bold text-slate-900 hover:text-[#0891b2] cursor-pointer transition-colors duration-200">
                    <div className="flex items-center gap-3.5">
                      <span className="text-xl leading-none" aria-hidden="true">{faq.icon}</span>
                      <span className="text-sm sm:text-base">{faq.question}</span>
                    </div>
                    <span className="shrink-0 w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-xs group-open:rotate-180 transition-transform duration-200">▼</span>
                  </summary>
                  <div className="p-5 border-t border-slate-900/5 text-sm text-slate-500 leading-relaxed bg-slate-50/50 rounded-b-2xl" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Modern Footer CTA */}
        <section className="py-16 lg:py-24 relative overflow-hidden bg-slate-900 text-white" id="contact">
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 w-full">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-extrabold uppercase tracking-widest text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Let's get started
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight max-w-2xl text-white mb-2">Ready to transform your business?</h2>

              <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
                Talk to our team and see how Isarva ERP brings sales, HR, stock, and accounts into one connected system—built for how you work.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center w-full justify-center mt-2">
                <a href="https://wa.me/919902863697" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-extrabold text-base shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto text-center justify-center">
                  <span>Get started today</span>
                  <svg className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a href="#module-hub" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold text-base transition-all duration-300 w-full sm:w-auto text-center justify-center">
                  Explore all modules
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-12 w-full max-w-3xl border-t border-white/10 pt-10">
                <div className="flex flex-col gap-1 items-center">
                  <strong className="text-3xl sm:text-4xl font-extrabold text-white">6+</strong>
                  <span className="text-xs sm:text-sm text-slate-500 font-semibold tracking-wide uppercase">Connected modules</span>
                </div>
                <div className="flex flex-col gap-1 items-center">
                  <strong className="text-3xl sm:text-4xl font-extrabold text-white">4–12</strong>
                  <span className="text-xs sm:text-sm text-slate-500 font-semibold tracking-wide uppercase">Weeks to go live</span>
                </div>
                <div className="flex flex-col gap-1 items-center">
                  <strong className="text-3xl sm:text-4xl font-extrabold text-white">24/7</strong>
                  <span className="text-xs sm:text-sm text-slate-500 font-semibold tracking-wide uppercase">Expert support</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
