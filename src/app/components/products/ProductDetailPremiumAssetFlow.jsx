"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "../AppLink";
import ContactFormModal from "../ContactFormModal";

const GREEN = "#10b981";

const METRICS = [
  { label: "Total Assets", sub: "Across all locations", icon: "🏷️", count: 12480 },
  { label: "Assigned", sub: "Active custodians", icon: "👤", count: 8214 },
  { label: "In Maintenance", sub: "Work orders open", icon: "🔧", count: 146 },
  { label: "Needs Attention", sub: "Warranties ≤ 30 days", icon: "⚠️", count: 38 },
];

const MODULES = [
  { id: "core", key: "Core", icon: "🏷️", label: "Asset Register", color: "#10b981", desc: "All Assets, By Location, categories, barcode labels, documents, and asset detail with Info, History, and Assignments.", bullets: ["Statuses: Available, Assigned, In Maintenance, Retired, Disposed, Lost", "Categories like IT Equipment, Furniture, Vehicles, Machinery, Tools"] },
  { id: "general", key: "General", icon: "⚙️", label: "Operations", color: "#0ea5e9", desc: "Day-to-day control: check-out and check-in, employee requests, approvals, physical audits, and procurement.", bullets: ["Asset Requests · Approval queue · Physical audits", "Vendors & Purchase Orders (draft to received)"] },
  { id: "itam", key: "ITAM", icon: "💻", label: "IT & Hardware", color: "#6366f1", desc: "IT hardware register with CPU, RAM, storage, OS, hostname, MAC, IP, EOL/EOS, and support contracts.", bullets: ["Warranty, lease, and support contracts", "Specs linked to the same asset record"] },
  { id: "sam", key: "SAM", icon: "📦", label: "Software Licenses", color: "#f59e0b", desc: "Software catalog, license purchases, deployments, and compliance — see surplus and deficits at a glance.", bullets: ["Products · Licenses deployed · Compliance status", "Software requests with approve or reject"] },
  { id: "eam", key: "EAM", icon: "🔧", label: "Maintenance", color: "#ef4444", desc: "Service requests, work orders, preventive maintenance schedules, and spare parts usage in one place.", bullets: ["Convert service request to work order", "Assign technicians · Track tasks and parts"] },
  { id: "finance", key: "Finance", icon: "💰", label: "Depreciation & Disposal", color: "#8b5cf6", desc: "Straight-line depreciation profiles, book value, monthly depreciation, dispose assets, and GL export.", bullets: ["Dispose via sale, scrap, donation, or write-off", "Capitalized value and financed asset tracking"] },
];

const WORKFLOWS = [
  { num: "01", title: "Register an asset", desc: "Add name, category, serial, location, custodian, purchase price, and warranty — then create the record.", icon: "📋" },
  { num: "02", title: "Assign and return", desc: "Check out to a custodian with due date. Check in with condition notes (Good, Fair, Damaged) or send to maintenance.", icon: "🔄" },
  { num: "03", title: "Request, approve, fulfill", desc: "Employees submit New asset, Replacement, or Return requests. Managers approve or reject from the Approval queue.", icon: "✅" },
  { num: "04", title: "Audit, maintain, dispose", desc: "Run physical audit sessions, raise work orders, or dispose with a complete financial trail.", icon: "🗂️" },
];

const ROLES = [
  { role: "Administrator", desc: "Modules, users, categories, currency, and permissions.", icon: "👑" },
  { role: "Asset Manager", desc: "Register, assign, fulfill requests, and run day-to-day operations.", icon: "🏷️" },
  { role: "Manager", desc: "Approve requests and oversee assignments for their teams.", icon: "👔" },
  { role: "Technician", desc: "Handle work orders, service requests, and asset updates.", icon: "🔧" },
  { role: "Employee", desc: "Request assets, view assigned items, and return equipment.", icon: "👤" },
  { role: "Finance & Auditor", desc: "Depreciation, disposal, reports, and audit-ready history.", icon: "📊" },
];

const MODULE_INSIGHTS = [
  { key: "ITAM", desc: "IT assets · Specs · Contracts expiring" },
  { key: "SAM", desc: "Products · Licenses · Compliance deficits" },
  { key: "EAM", desc: "Open service requests · Active work orders" },
  { key: "Finance", desc: "Book value · Monthly depreciation" },
  { key: "Procurement", desc: "Vendors · Open purchase orders" },
];

const FAQS = [
  { question: "What types of assets can AssetFlow manage?", answer: "AssetFlow manages IT equipment (laptops, servers, peripherals), furniture, vehicles, machinery, tools, and software licenses — all from a single unified register with custom categories.", icon: "🏷️" },
  { question: "How does the check-out and check-in workflow work?", answer: "An asset manager checks out an asset to a custodian with an optional due date. When returned, condition notes (Good, Fair, Damaged) are recorded. The asset can also be sent directly to maintenance from the return screen.", icon: "🔄" },
  { question: "Can employees request assets themselves?", answer: "Yes. Employees submit New asset, Replacement, or Return requests through the self-service portal. Requests flow into the Approval queue where managers approve or reject — fulfilled and tracked end-to-end.", icon: "✅" },
  { question: "How does depreciation work in the Finance module?", answer: "AssetFlow uses straight-line depreciation. You set the purchase cost, useful life, and residual value — the platform calculates monthly depreciation and current book value automatically. Export GL-ready data anytime.", icon: "💰" },
  { question: "Can I run physical audits across multiple locations?", answer: "Yes. Create audit sessions per location, scan barcodes or search assets, and mark each as Found, Not Found, or Misplaced. AssetFlow generates a full audit reconciliation report at the end.", icon: "🗂️" },
  { question: "What roles are available and how is access controlled?", answer: "Six roles are built in: Administrator, Asset Manager, Manager, Technician, Employee, and Finance/Auditor. Each role sees only the screens and data relevant to their responsibilities — configured from the admin panel.", icon: "🔐" },
];

const CAPABILITIES = [
  { img: "/products/assetflow/track.png", title: "Track every asset", desc: "One register for IT, equipment, and facilities with categories, locations, serial numbers, and custodians." },
  { img: "/products/assetflow/operations.png", title: "Audit-ready operations", desc: "Full custody trail of assignments, returns, transfers, and physical audits for compliance and reviews." },
  { img: "/products/assetflow/insights.png", title: "Smart insights", desc: "Live dashboards and CSV reports by register, location, and assignee — export when you need them." },
];

const REPORT_ITEMS = [
  { title: "Asset register", desc: "number, name, category, status, location, custodian, serial, purchase and warranty" },
  { title: "By location", desc: "what is sitting where across HQ, floors, warehouses, and branches" },
  { title: "By assignee", desc: "who holds which assets today" },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-start">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
            className={`group relative bg-white border-2 transition-all duration-300 overflow-hidden flex flex-col ${isOpen ? "border-emerald-500 shadow-[0_8px_30px_rgba(16,185,129,0.18)]" : "border-gray-100 hover:border-emerald-200 hover:shadow-md"}`}
            style={{ borderRadius: "20px" }}
          >
            <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} style={{ background: "linear-gradient(180deg,#10b981,#059669)" }} />
            <button onClick={() => setOpenIndex(isOpen ? null : index)} className="w-full text-left px-6 py-5 flex items-start gap-4 transition-colors duration-200 flex-grow">
              <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-lg md:text-xl transition-all duration-300 ${isOpen ? "bg-gradient-to-br from-[#10b981] to-[#047857] shadow-lg scale-110" : "bg-emerald-50 group-hover:bg-emerald-100"}`}>
                <span>{faq.icon}</span>
              </div>
              <div className="flex-1 pt-1">
                <h3 className={`text-[17px] font-bold transition-colors duration-200 pr-8 ${isOpen ? "text-[#10b981]" : "text-[#0a0a0a] group-hover:text-[#10b981]"}`}>{faq.question}</h3>
              </div>
              <div className="flex-shrink-0 mt-1">
                <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#10b981] rotate-180" : "bg-gray-100"}`}>
                  <svg className={`w-5 h-5 ${isOpen ? "text-white" : "text-gray-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-6 pb-6">
                    <div className="pt-1 pb-2 border-t border-gray-100 mt-2">
                      <p className="text-[15px] text-[#555] leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

function AssetTagCard() {
  const STATUSES = [
    { label: "Available", color: "#10b981" },
    { label: "Assigned", color: "#0ea5e9" },
    { label: "In Maintenance", color: "#f59e0b" },
  ];
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setStatusIdx((i) => (i + 1) % STATUSES.length), 2600);
    return () => clearInterval(t);
  }, []);

  const status = STATUSES[statusIdx];

  return (
    <div className="relative w-full max-w-[360px] mx-auto lg:mx-0">
      <div
        className="absolute -inset-6 rounded-[28px] -z-10"
        style={{
          background: "#f0fdf4",
          backgroundImage: "radial-gradient(#c9ecdb 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute -right-4 top-8 -z-10 w-full h-full bg-white rounded-2xl border border-emerald-50 rotate-[4deg] shadow-sm" />

      <motion.div
        initial={{ opacity: 0, y: 24, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative bg-white rounded-2xl border border-emerald-100 shadow-[0_30px_70px_rgba(16,185,129,0.22)] p-6 overflow-hidden"
      >
        <div className="absolute left-4 top-4 w-3 h-3 rounded-full bg-[#f4fdf9] ring-1 ring-emerald-100" />
        <div className="absolute left-4 bottom-4 w-3 h-3 rounded-full bg-[#f4fdf9] ring-1 ring-emerald-100" />

        <div className="pl-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black tracking-[0.2em] text-emerald-600 capitalize">Asset Tag</span>
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> LIVE
            </span>
          </div>

          <div className="text-2xl font-black text-[#0a0a0a] tracking-tight tabular-nums mb-1">AF-2026-04821</div>
          <div className="text-xs text-slate-400 mb-4">MacBook Pro 16&quot; · IT Equipment</div>

          <div className="flex items-end gap-[2px] h-10 mb-4 overflow-hidden">
            {[...Array(40)].map((_, i) => (
              <span
                key={i}
                className="bg-[#0a0a0a]"
                style={{ width: i % 5 === 0 ? "3px" : "1.5px", height: `${30 + ((i * 37) % 60)}%` }}
              />
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-dashed border-emerald-100 pt-4">
            <div>
              <div className="text-[10px] text-slate-400 mb-1">Custodian</div>
              <div className="text-sm font-bold text-[#0a0a0a]">R. Menon</div>
            </div>
            <AnimatePresence mode="wait">
              <motion.span
                key={status.label}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-[11px] font-bold px-3 py-1.5 rounded-full"
                style={{ background: status.color + "18", color: status.color }}
              >
                {status.label}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-emerald-400/70 shadow-[0_0_12px_rgba(16,185,129,0.6)]"
          animate={{ top: ["8%", "92%", "8%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}

export default function ProductDetailPremiumAssetFlow({ product, relatedProducts, allProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModule, setActiveModule] = useState("core");
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const targets = [12480, 8214, 146, 38];
    targets.forEach((target, i) => {
      let current = 0;
      const step = target / 80;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        setCounters((prev) => { const n = [...prev]; n[i] = Math.round(current); return n; });
        if (current >= target) clearInterval(timer);
      }, 25);
    });
  }, []);

  const activeModData = MODULES.find((m) => m.id === activeModule);
  const leftModules = MODULES.slice(0, 3);
  const rightModules = MODULES.slice(3);

  return (
    <div className="bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-clip">

      {/* ── HERO ────────────────────────────────────── */}
      <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f0f4ff 25%, #fdf4ff 55%, #ecfdf5 80%, #e0f2fe 100%)" }}>
 
        {/* Subtle dot grid */}
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: "radial-gradient(#a5b4fc 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
 
        {/* Animated floating orbs — colourful on light bg */}
        <motion.div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full pointer-events-none blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 70%)" }}
          animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div className="absolute -top-10 right-0 w-[420px] h-[420px] rounded-full pointer-events-none blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)" }}
          animate={{ x: [0, -35, 0], y: [0, 45, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div className="absolute bottom-0 left-1/3 w-[500px] h-[260px] rounded-full pointer-events-none blur-3xl"
          style={{ background: "radial-gradient(ellipse, rgba(6,182,212,0.20) 0%, transparent 70%)" }}
          animate={{ scaleX: [1, 1.18, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full pointer-events-none blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(52,211,153,0.18) 0%, transparent 70%)" }}
          animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div className="absolute bottom-10 right-1/4 w-[220px] h-[220px] rounded-full pointer-events-none blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(245,101,101,0.15) 0%, transparent 70%)" }}
          animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 1.25, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
 
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-10 font-medium">
            <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
            <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            <Link href="/products" className="hover:text-indigo-500 transition-colors">Products</Link>
            <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            <span className="text-indigo-500 font-semibold">AssetFlow</span>
          </div>
 
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Live badge */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white shadow-md text-indigo-600 font-semibold text-sm mb-8 border border-indigo-100"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                Unified Asset Management Platform
              </motion.div>
 
              <h1 className="mb-6 text-slate-900">
                Manage Assets with
                <br />
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Confidence &amp; Clarity.</span>
              </h1>
              <p className="text-base lg:text-xl text-slate-500 leading-relaxed font-medium mb-8 max-w-xl">
                Track, assign, maintain, and report on every asset your organization owns — ITAM, SAM, EAM, Finance, and Procurement in one professional platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-8 w-full sm:w-auto">
                <button onClick={() => setIsModalOpen(true)} className="press-illusion-btn-orange text-white font-bold px-8 py-3.5 text-base items-center space-x-2 flex cursor-pointer">
                  <span>REQUEST A DEMO</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 4.5h15M11 1l4.5 3.5L11 8" /></svg>
                </button>
                <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById("modules-section")?.scrollIntoView({ behavior: "smooth" })}
                  className="relative inline-flex items-center justify-center gap-3 px-8 py-3.5 font-black tracking-wider text-sm text-slate-700 transition-all duration-300 rounded-[8px] bg-white border-2 border-slate-200 hover:border-indigo-300 hover:text-indigo-600 shadow-sm hover:shadow-xl">
                  EXPLORE MODULES
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </motion.button>
              </div>
 
              {/* Module pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {MODULES.map((m, i) => (
                  <motion.span
                    key={m.id}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-600 shadow-sm"
                  >
                    <span>{m.icon}</span> {m.key}
                  </motion.span>
                ))}
              </div>
            </motion.div>
 
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-8 mb-12 lg:mt-0 lg:mb-0"
            >
              <AssetTagCard />
            </motion.div>
          </div>
 
        </div>
      </section>
 
      {/* ── METRICS ───────────────────────────────────── */}
      <section className="pt-12 pb-12 lg:py-16 relative" style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0fdfa 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: "radial-gradient(#6ee7b7 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 font-semibold text-sm mb-6">
              📊 Platform At A Glance
            </div>
            <h2 className="mb-6 capitalize">One Platform. Complete Visibility.</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">One register for IT equipment, furniture, vehicles, machinery, and tools — with full history of who had what and when.</p>
          </div>

          <div className="max-w-5xl mx-auto rounded-[20px] border border-emerald-200 bg-white overflow-hidden shadow-[0_20px_60px_rgba(16,185,129,0.14)]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-6 py-3.5" style={{ background: "linear-gradient(135deg, #059669 0%, #0d9488 100%)" }}>
              <span className="text-[10px] font-black tracking-[0.2em] text-emerald-300 capitalize text-center sm:text-left">Asset Register · Live Snapshot</span>
              <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-200 justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> UPDATED NOW
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-emerald-100">
              {METRICS.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="px-6 py-8 text-center"
                >
                  <div className="w-9 h-9 mx-auto rounded-full bg-emerald-50 flex items-center justify-center text-base mb-3 ring-1 ring-emerald-100">{m.icon}</div>
                  <strong className="block text-3xl lg:text-4xl font-black text-[#0a0a0a] tracking-tight tabular-nums mb-1">{counters[i].toLocaleString()}</strong>
                  <span className="block text-xs font-bold capitalize tracking-wider text-emerald-600 mb-1">{m.label}</span>
                  <span className="block text-xs text-slate-400">{m.sub}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ──────────────────────────────── */}
      <section className="py-12 lg:py-16 relative" style={{ background: "linear-gradient(135deg, #eef2ff 0%, #fdf4ff 50%, #ecfdf5 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-25" style={{ backgroundImage: "radial-gradient(#c4b5fd 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-100 border border-violet-200 text-violet-700 font-semibold text-sm mb-6">
              ⚙️ Core Capabilities
            </div>
            <h2 className="mb-6 capitalize text-center text-slate-900">Built for how asset work actually happens</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">From the first register entry to disposal and audit — clear tools your teams already understand.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-emerald-50">
                  <img src={cap.img} alt={cap.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-3 left-3 flex items-end gap-[1.5px] h-5 bg-white/90 backdrop-blur px-2 py-1 rounded-md">
                    {[...Array(14)].map((_, j) => (
                      <span key={j} className="bg-[#0a0a0a]" style={{ width: j % 4 === 0 ? "2px" : "1px", height: `${40 + ((j * 53) % 60)}%` }} />
                    ))}
                  </div>
                </div>
                <div className="p-6 text-center md:text-left">
                  <h3 className="text-lg font-black text-[#0a0a0a] mb-2 group-hover:text-emerald-600 transition-colors">{cap.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODULES ───────────────────────────────────── */}
      <section id="modules-section" className="py-12 lg:py-16 overflow-hidden relative" style={{ background: "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 50%, #e0f2fe 100%)" }}>
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#a5b4fc 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 font-semibold text-sm mb-6">
              📦 Platform Modules
            </div>
            <h2 className="text-slate-900 mb-6 capitalize text-center">Modular platform — <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">enable what you need</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-xl">Core stays on. Turn on General, ITAM, SAM, EAM, and Finance as your organization grows.</p>
          </div>

          {/* Desktop orbit */}
          <div className="hidden xl:block">
            <div className="relative h-[540px] mx-auto xl:w-[85%]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[88%] rounded-full border-[1.5px] border-dashed pointer-events-none z-0" style={{ borderColor: "rgba(99,102,241,0.3)" }} />
              <div className="absolute -left-20 top-1/2 -translate-y-1/2 flex flex-col items-end gap-8 z-10 w-[230px]">
                {leftModules.map((mod) => (
                  <button key={mod.id} onClick={() => setActiveModule(mod.id)}
                    className={`relative rounded-xl transition-all duration-300 cursor-pointer flex items-center gap-3 py-3 px-5 text-sm font-bold border-2 ${activeModule === mod.id ? "bg-white text-slate-900 scale-105 shadow-lg" : "bg-white/70 text-slate-600 border-slate-200 hover:bg-white hover:border-indigo-300 hover:scale-102"}`}
                    style={{
                      borderColor: activeModule === mod.id ? mod.color : "",
                      boxShadow: activeModule === mod.id ? `0 12px 30px -4px ${mod.color}35, 0 4px 12px -2px ${mod.color}25` : "none"
                    }}>
                    <span className="text-lg w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: activeModule === mod.id ? mod.color + "18" : "#f1f5f9" }}>{mod.icon}</span>
                    {mod.label}
                    {activeModule === mod.id && <span className="absolute -right-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[7px]" style={{ borderLeftColor: mod.color }} />}
                  </button>
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[55%]">
                <AnimatePresence mode="wait">
                  <motion.div key={activeModule} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}
                    className="relative bg-white rounded-2xl shadow-[0_24px_64px_rgba(99,102,241,0.12)] border-2 p-8 overflow-hidden" style={{ borderColor: (activeModData?.color || "#10b981") + "55" }}>
                    <div className="absolute top-5 right-5 flex items-end gap-[1.5px] h-4">
                      {[...Array(12)].map((_, j) => (
                        <span key={j} className="bg-[#0a0a0a]/50" style={{ width: j % 4 === 0 ? "2px" : "1px", height: `${40 + ((j * 53) % 60)}%` }} />
                      ))}
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ background: (activeModData?.color || "#10b981") + "18" }}>{activeModData?.icon}</div>
                      <span className="inline-block text-xs font-black capitalize tracking-widest px-3 py-1 rounded-full mb-4" style={{ background: (activeModData?.color || "#10b981") + "18", color: activeModData?.color }}>{activeModData?.key}</span>
                      <h3 className="text-xl font-black text-[#0a0a0a] mb-3">{activeModData?.label}</h3>
                      <p className="text-[#6b7280] text-sm leading-relaxed mb-4 max-w-md">{activeModData?.desc}</p>
                      <ul className="space-y-2 inline-block text-left">
                        {activeModData?.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-xs text-[#6b7280]">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: activeModData?.color }} />{b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="absolute -right-20 top-1/2 -translate-y-1/2 flex flex-col items-start gap-8 z-10 w-[230px]">
                {rightModules.map((mod) => (
                  <button key={mod.id} onClick={() => setActiveModule(mod.id)}
                    className={`relative rounded-xl transition-all duration-300 cursor-pointer flex items-center gap-3 py-3 px-5 text-sm font-bold border-2 ${activeModule === mod.id ? "bg-white text-slate-900 scale-105 shadow-lg" : "bg-white/70 text-slate-600 border-slate-200 hover:bg-white hover:border-indigo-300 hover:scale-102"}`}
                    style={{
                      borderColor: activeModule === mod.id ? mod.color : "",
                      boxShadow: activeModule === mod.id ? `0 12px 30px -4px ${mod.color}35, 0 4px 12px -2px ${mod.color}25` : "none"
                    }}>
                    <span className="text-lg w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: activeModule === mod.id ? mod.color + "18" : "#f1f5f9" }}>{mod.icon}</span>
                    {mod.label}
                    {activeModule === mod.id && <span className="absolute -left-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[7px]" style={{ borderRightColor: mod.color }} />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile tabs */}
          <div className="block xl:hidden">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {MODULES.map((m) => (
                <button key={m.id} onClick={() => setActiveModule(m.id)}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all ${activeModule === m.id ? "bg-emerald-600 text-white border-emerald-600 shadow" : "bg-white text-slate-600 border-slate-200 hover:border-emerald-300"}`}>
                  <span>{m.icon}</span>{m.key}
                </button>
              ))}
            </div>
            {activeModData && (
              <div className="bg-white border-2 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center" style={{ borderColor: activeModData.color + "33" }}>
                <span className="inline-block text-xs font-black capitalize tracking-widest px-3 py-1 rounded-full mb-3" style={{ background: activeModData.color + "18", color: activeModData.color }}>{activeModData.key}</span>
                <h3 className="font-black text-[#0a0a0a] text-xl mb-2">{activeModData.label}</h3>
                <p className="text-[#6b7280] text-sm mb-4 max-w-md">{activeModData.desc}</p>
                <ul className="space-y-2 inline-block text-left">{activeModData.bullets.map((b) => (<li key={b} className="flex items-start gap-2 text-sm text-[#6b7280]"><span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: activeModData.color }} />{b}</li>))}</ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── WORKFLOW ──────────────────────────────────── */}
      <section className="py-12 lg:py-16 relative" style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 40%, #d1fae5 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: "radial-gradient(#86efac 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 font-semibold text-sm mb-6">
              ✅ Clear Workflows
            </div>
            <h2 className="mb-6 capitalize text-center">Clear workflows, end to end</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">AssetFlow mirrors how your teams already work — register, assign, request, audit, maintain, and retire.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {WORKFLOWS.map((wf, i) => (
              <motion.div
                key={wf.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-emerald-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between px-5 py-3" style={{ background: "linear-gradient(135deg, #059669 0%, #0d9488 100%)" }}>
                  <span className="text-[10px] font-black tracking-[0.2em] text-white/90 capitalize">Step {wf.num}</span>
                  <span className="text-lg">{wf.icon}</span>
                </div>
                <div className="p-6 text-center sm:text-left">
                  <h3 className="text-base font-black text-[#0a0a0a] mb-2 group-hover:text-emerald-600 transition-colors">{wf.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{wf.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REPORTS ───────────────────────────────────── */}
      <section className="py-12 lg:py-16 relative" style={{ background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #e0f2fe 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-25" style={{ backgroundImage: "radial-gradient(#93c5fd 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-100 border border-sky-200 text-sky-700 font-semibold text-sm mb-6">
              📊 Reporting Insights
            </div>
            <h2 className="mb-6 capitalize text-center text-slate-900">Dashboards &amp; reports that answer real questions</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-emerald-100 overflow-hidden shadow-sm">
              <div className="flex items-center justify-between px-6 py-3 bg-emerald-50 border-b border-emerald-100/60">
                <span className="text-[10px] font-black tracking-[0.2em] text-emerald-700 capitalize">Export &amp; Audit Reports</span>
                <div className="flex items-end gap-[1.5px] h-3.5">
                  {[...Array(12)].map((_, j) => (
                    <span key={j} className="bg-emerald-500/70" style={{ width: j % 4 === 0 ? "2px" : "1px", height: `${40 + ((j * 53) % 60)}%` }} />
                  ))}
                </div>
              </div>
              <div className="p-6 text-center lg:text-left">
                <p className="text-[#6b7280] text-sm leading-relaxed mb-6">See Total Assets, Assigned, In Maintenance, and Needs Attention on the home dashboard — then export what auditors ask for.</p>
                <ul className="space-y-3">
                  {REPORT_ITEMS.map((r, i) => (
                    <li key={r.title} className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 group hover:border-emerald-300 transition-colors cursor-default text-center sm:text-left">
                      <div className="flex items-end gap-[1px] h-4 mt-0.5 flex-shrink-0">
                        {[...Array(8)].map((_, j) => (
                          <span key={j} className="bg-emerald-600/60" style={{ width: "1px", height: `${40 + ((j * 37 + i * 17) % 60)}%` }} />
                        ))}
                      </div>
                      <div className="flex flex-col items-center sm:items-start">
                        <strong className="block text-[#0a0a0a] font-black text-sm mb-0.5 group-hover:text-[#10b981] transition-colors">{r.title}</strong>
                        <span className="text-[#6b7280] text-xs">{r.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-sm border border-emerald-100 bg-white">
              <div className="flex items-center justify-between px-6 py-3 bg-emerald-50 border-b border-emerald-100/60">
                <span className="text-[10px] font-black tracking-[0.2em] text-emerald-700 capitalize">Module Summaries</span>
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> LIVE
                </span>
              </div>
              <div className="bg-white p-6">
                <ul className="space-y-3">
                  {MODULE_INSIGHTS.map((ins) => (
                    <li key={ins.key} className="flex flex-col sm:grid sm:grid-cols-[5.5rem_1fr] gap-1 sm:gap-3 pb-3 border-b border-emerald-100/40 last:border-0 last:pb-0 text-center sm:text-left">
                      <span className="font-black text-emerald-600 text-sm">{ins.key}</span>
                      <span className="text-slate-600 text-sm">{ins.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-12 lg:py-16 relative" style={{ background: "linear-gradient(135deg, #fdf4ff 0%, #f5f3ff 50%, #ede9fe 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "radial-gradient(#d8b4fe 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 font-semibold text-sm mb-6">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
              FAQ
            </div>
            <h2 className="mb-6 capitalize text-center">Frequently asked questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to know about AssetFlow.</p>
          </div>
          <div className="w-full"><FaqAccordion /></div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-14 lg:py-24 px-6" style={{ background: "linear-gradient(135deg, #fafafa 0%, #f0f4ff 50%, #f0fdf4 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative text-center py-16 lg:py-24 px-6 border border-slate-200"
            style={{ background: "linear-gradient(135deg, #ffffff 0%, #f5f3ff 50%, #e0f2fe 100%)", boxShadow: "0 25px 60px -15px rgba(99, 102, 241, 0.25), 0 15px 30px -10px rgba(99, 102, 241, 0.15)" }}>
            <motion.div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)" }}
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)" }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            />
            <span className="inline-block text-[10px] font-black text-indigo-700 tracking-[0.28em] capitalize mb-6 bg-indigo-50 px-4 py-2 rounded-full ring-1 ring-indigo-200">Get started today</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-slate-900 mb-4">Ready to run assets on <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">AssetFlow?</span></h2>
            <p className="text-slate-500 max-w-md mx-auto mb-10 text-base leading-relaxed">Book a walkthrough with Isarva Infotech. We will map your register, roles, and modules to a clear go-live plan.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => setIsModalOpen(true)} className="press-illusion-btn-orange text-white font-bold px-10 py-4 text-base items-center space-x-2 flex cursor-pointer">
                <span>Request a free demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 4.5h15M11 1l4.5 3.5L11 8" /></svg>
              </button>
              <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 font-bold px-10 py-4 text-base text-slate-700 transition-all duration-300 rounded-[8px] bg-white border-2 border-slate-200 hover:border-indigo-300 hover:text-indigo-600 shadow-sm hover:shadow-md cursor-pointer">
                  <span>CONTACT US</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
              </motion.div>
            </div>
            <p className="text-slate-400 text-xs mt-8">Visit <a href="https://www.isarvait.com" target="_blank" rel="noopener" className="text-slate-600 font-semibold underline underline-offset-2 hover:text-indigo-600">isarvait.com</a> to start a conversation.</p>
          </motion.div>
        </div>
      </section>

      {/* ── RELATED ───────────────────────────────────── */}
      {relatedProducts && relatedProducts.length > 0 && (
        <section className="py-12 lg:py-16 px-6 border-t border-slate-100 relative" style={{ background: "linear-gradient(135deg, #fff1f2 0%, #fdf4ff 50%, #f0fdf4 100%)" }}>
          <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "radial-gradient(#fda4af 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-emerald-200 text-emerald-700 font-semibold text-sm mb-6 shadow-sm">
                You Might Also Like
              </div>
              <h2 className="mb-6 capitalize text-center">
                Explore other products
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Discover more enterprise solutions crafted to scale your operations.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
              {relatedProducts.map((p, i) => (
                <motion.div key={p.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="h-full">
                  <Link href={`/product/${p.slug}`} className="group flex flex-col items-center text-center h-full border-2 border-emerald-100 rounded-2xl p-6 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
                    <span className="text-3xl mb-3 block">{p.icon}</span>
                    <h3 className="font-black text-[#0a0a0a] group-hover:text-[#10b981] transition-colors mb-1">{p.title}</h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed flex-grow mb-4">{p.shortDescription}</p>
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-300">
                      Learn More
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isModalOpen && <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} productName="AssetFlow - Asset Management" />}
    </div>
  );
}
