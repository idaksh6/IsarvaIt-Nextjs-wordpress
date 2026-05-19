"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ContactFormModal from "../../components/ContactFormModal";

const PRIMARY_TEAL = "#0D9488";
const PRIMARY_CYAN = "#0891B2";
const ACCENT_EMERALD = "#10B981";

/* ─────────────────────────────────────────────────────────────
   GODOWN SYSTEM MODULES DATA
   ───────────────────────────────────────────────────────────── */
const godownModules = [
  {
    id: "dashboard",
    title: "Insight Dashboard",
    icon: "📊",
    color: "from-teal-500 to-cyan-600",
    desc: "Your business at a glance. Track categories, stock counts, and critical 'Out of Stock' alerts in real-time.",
    features: ["Total Categories View", "Live Stock Count", "Low Stock Alerts", "Top Performers Analytics"]
  },
  {
    id: "inventory",
    title: "Smart Inventory",
    icon: "📦",
    color: "from-cyan-500 to-blue-600",
    desc: "Intelligent parent-child category system with automated barcode and QR code generation for every product.",
    features: ["Parent-Child Hierarchy", "Auto-Generated QR/Barcodes", "Stock Adjustment Tools", "Multi-Image Support"]
  },
  {
    id: "movement",
    title: "Movement Tracking",
    icon: "🔄",
    color: "from-emerald-500 to-teal-600",
    desc: "The heart of your warehouse. Track exactly what goes out for events or rentals and what comes back.",
    features: ["Dispatch Tracking", "Due Date Management", "Return Condition Check", "Missing Item Logs"]
  },
  {
    id: "events",
    title: "Event & Rental",
    icon: "🗓️",
    color: "from-blue-500 to-indigo-600",
    desc: "Perfect for one-time occasions or long-term rentals. Includes built-in safety features to block out-of-stock items.",
    features: ["Product Selection Safeties", "Expected Return Tracking", "Vehicle & Driver Logging", "Flexible Rental Schemes"]
  },
  {
    id: "finances",
    title: "Financial Control",
    icon: "💰",
    color: "from-teal-600 to-emerald-700",
    desc: "Crystal clear money management. Track advances, pending payments, and penalty charges automatically.",
    features: ["Auto-Calculated Balances", "Payment History", "Advance Monitoring", "Expense Tracking"]
  },
  {
    id: "reports",
    title: "Insight Reports",
    icon: "📈",
    color: "from-cyan-600 to-teal-700",
    desc: "Data-driven decisions made easy. Export stock summaries, movement logs, and activity logs to PDF or Excel.",
    features: ["Stock Summary History", "Current Stock Audit", "User Activity Logs", "PDF & Excel Export"]
  }
];

const statusFlow = [
  { status: "Sent", desc: "Products dispatched to customer", color: "bg-blue-500", icon: "🚚" },
  { status: "Partially Returned", desc: "Partial inventory received (e.g. 15/20)", color: "bg-amber-500", icon: "📦" },
  { status: "Returned", desc: "All items received back successfully", color: "bg-emerald-500", icon: "✅" }
];

const reportTypes = [
  { name: "Stock Summary", description: "Complete history of an item: Opening stock, adjustments, and deletions.", icon: "📋" },
  { name: "Current Stock", description: "A real-time list of what is physically in your godown right now.", icon: "🏠" },
  { name: "Movement Report", description: "A detailed log of what went to which event and how much has returned.", icon: "🚛" },
  { name: "Activity Log", description: "Tracks every edit and manual override made by users for total security.", icon: "🛡️" },
  { name: "Damage & Missing", description: "Specialized list of losses helping you identify high-cost clients or events.", icon: "❌" }
];

export default function ProductDetailPremiumGodownStaging({ product, relatedProducts, allProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 lg:pt-52 pb-20 lg:pb-40 overflow-hidden">
        {/* Advanced Background Gradients */}
        <div className="absolute inset-0 -z-10 bg-white">
          <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-teal-200/30 to-transparent rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-cyan-200/40 to-emerald-100/30 rounded-full blur-[140px]"></div>
          <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-gradient-to-tr from-emerald-100/20 to-transparent rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: "radial-gradient(#0D9488 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-700 text-[10px] font-black tracking-[0.3em] uppercase mb-8 border border-teal-100/50 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              The Future of Godown Tech
            </span>
            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-black tracking-tighter text-slate-900 mb-8 leading-[1]">
              <span className="inline-block hover:scale-[1.02] transition-transform duration-300">Smart Godown</span> <br />
              <span className="text-transparent bg-clip-text py-1 bg-gradient-to-r from-teal-600 via-cyan-500 to-emerald-500 drop-shadow-sm py-1">
                & Inventory System
              </span>
            </h1>
            <p className="text-xl lg:text-3xl text-slate-500 font-medium max-w-4xl mx-auto mb-12 leading-relaxed opacity-90">
              Track. Manage. Control. Grow. <br className="hidden md:block" /> 
              <span className="text-slate-400">Everything you need to manage your warehouse, stock, events, rentals, and payments — all in one place.</span>
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-24">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-premium-orange group !px-10 !py-5 !text-xl"
              >
                <div className="shimmer"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Launch Live Demo
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              <Link 
                href="#features"
                className="px-10 py-5 bg-white/50 backdrop-blur-md text-teal-700 font-black text-xl rounded-2xl border-2 border-teal-100/50 shadow-sm hover:border-teal-300 transition-all hover:bg-white"
              >
                System Architecture
              </Link>
            </div>
          </motion.div>

          {/* Interactive UI Mockup with Gradient Border */}
          <motion.div 
            initial={{ opacity: 0, y: 60, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative max-w-6xl mx-auto perspective-1000"
          >
            <div className="p-1.5 rounded-[3rem] bg-gradient-to-br from-teal-400 via-cyan-300 to-emerald-400 shadow-[0_40px_100px_rgba(13,148,136,0.15)]">
              <div className="rounded-[2.8rem] bg-slate-900/5 p-4 backdrop-blur-xl border border-white/40">
                <div className="rounded-[2.2rem] bg-white shadow-2xl overflow-hidden border border-slate-100 aspect-[16/9] flex flex-col">
                  {/* Mock Browser Header */}
                  <div className="bg-gradient-to-b from-slate-50 to-white px-8 py-5 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex gap-2.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-rose-400 shadow-sm shadow-rose-200"></div>
                      <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-sm shadow-amber-200"></div>
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-200"></div>
                    </div>
                    <div className="flex-1 max-w-lg mx-8 px-6 py-2 bg-slate-100/50 rounded-xl border border-slate-200/50 text-[10px] font-bold text-slate-400 text-left tracking-wide">
                      HTTPS://SYSTEM.ISARVA.IT/GODOWN/DASHBAORD_ANALYTICS
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 font-black text-[10px]">v2.4</div>
                       <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-500 border-2 border-white shadow-md flex items-center justify-center text-white font-black text-xs">JD</div>
                    </div>
                  </div>
                  
                  {/* Mock Dashboard Content */}
                  <div className="flex-1 p-10 grid grid-cols-12 gap-8 bg-[#FAFBFE]">
                    {/* Left Sidebar */}
                    <div className="col-span-3 space-y-4">
                      {[1,2,3,4,5,6].map(i => (
                        <div key={i} className={`h-12 rounded-2xl ${i === 1 ? "bg-gradient-to-r from-teal-600 to-cyan-600 shadow-xl shadow-teal-100" : "bg-slate-200/40"} w-full`}></div>
                      ))}
                    </div>
                    {/* Main Content */}
                    <div className="col-span-9 space-y-8 text-left">
                      <div className="grid grid-cols-4 gap-6">
                        {[
                          { label: "Categories", val: "24", sub: "+2 this month", color: "from-teal-500 to-teal-600" },
                          { label: "Stock Count", val: "1.2k", sub: "Operational", color: "from-cyan-500 to-cyan-600" },
                          { label: "Total Products", val: "485", sub: "Active", color: "from-blue-500 to-indigo-600" },
                          { label: "Out of Stock", val: "04", sub: "Urgent", color: "from-rose-500 to-red-600" }
                        ].map((stat, idx) => (
                          <div key={idx} className="bg-white p-6 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col justify-between h-32 hover:shadow-lg transition-all group relative overflow-hidden">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                            <div className="flex flex-col">
                              <span className={`text-3xl font-black ${idx === 3 ? "text-rose-500" : "text-slate-900"}`}>{stat.val}</span>
                              <span className="text-[8px] font-bold text-slate-400 mt-1">{stat.sub}</span>
                            </div>
                            <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-full`}></div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-white p-8 rounded-[3rem] shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-slate-100 h-72 relative overflow-hidden flex flex-col">
                         <div className="flex justify-between items-center mb-8">
                            <div className="flex flex-col">
                              <span className="font-black text-slate-800 text-lg">Inventory Flow Matrix</span>
                              <span className="text-xs font-bold text-slate-400 uppercase tracking-tight">Units Analytics (2024)</span>
                            </div>
                            <div className="flex gap-3">
                              <div className="px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-[10px] font-black uppercase text-slate-400">Monthly</div>
                              <div className="h-10 w-10 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center">⚙️</div>
                            </div>
                         </div>
                         <div className="flex-1 flex items-end gap-5 px-6 overflow-hidden">
                            {[30, 60, 40, 85, 55, 75, 45, 95, 60, 80].map((h, i) => (
                              <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 1.2, delay: 0.6 + (i * 0.08), ease: "backOut" }}
                                className={`flex-1 rounded-t-xl shadow-lg relative group/bar`}
                                style={{ background: `linear-gradient(to top, #0D9488, ${i % 2 === 0 ? "#0891B2" : "#10B981"})` }}
                              >
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[8px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity font-bold">
                                  {h}%
                                </div>
                              </motion.div>
                            ))}
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Advanced Decorative Icons */}
            <div className="absolute -top-12 -left-12 bg-gradient-to-br from-white to-teal-50 shadow-2xl rounded-[2rem] p-6 border border-teal-100/50 animate-bounce cursor-default backdrop-blur-sm">
              <span className="text-4xl filter drop-shadow-md">⚡</span>
              <div className="text-[10px] font-black text-teal-600 mt-2 uppercase tracking-tighter">Ultra-Fast Sync</div>
            </div>
            <div className="absolute -bottom-16 -right-8 bg-gradient-to-tr from-slate-900 to-slate-800 shadow-2xl rounded-[2.5rem] p-7 border-4 border-white hover:scale-110 transition-transform cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-2xl flex items-center justify-center text-3xl shadow-inner group-hover:rotate-12 transition-transform">📱</div>
                <div className="text-left">
                  <div className="text-sm font-black text-white leading-none">Smart Mobile Hub</div>
                  <div className="text-[10px] text-teal-400 mt-1.5 font-black uppercase tracking-widest group-hover:text-emerald-400 transition-colors">Enterprise Ready</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MOBILE VIEW SECTION ── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-teal-600 font-black tracking-widest text-xs uppercase mb-6 inline-block">MOBILE OPTIMIZED</span>
              <h2 className="text-slate-900 mb-8 er text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Your Warehouse in <br /><span className="text-teal-600">Your Pocket.</span></h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">Access your entire godown operation from anywhere. Our mobile-first design ensures you stay in control even when you're on the move.</p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Total Categories", desc: "See all your product categories in one view." },
                  { title: "Overall Stock Count", desc: "Know your complete inventory instantly." },
                  { title: "Out of Stock Alerts", desc: "Never miss a restock opportunity." },
                  { title: "Smart Due Date", desc: "Upcoming dues & overdue tracking." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-xs font-medium">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 flex justify-center scale-90 md:scale-100">
               {/* Mobile Phone Mockup */}
               <div className="w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl relative border-[6px] border-slate-800">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
                  <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden relative flex flex-col">
                     <div className="bg-teal-600 p-6 pt-8 text-white">
                        <div className="flex justify-between items-center mb-4">
                           <span className="text-sm font-black">Dashboard</span>
                           <div className="w-6 h-6 bg-white/20 rounded-lg"></div>
                        </div>
                        <div className="text-[10px] opacity-80 uppercase font-black">Total Products</div>
                        <div className="text-3xl font-black">2,485</div>
                     </div>
                     <div className="flex-1 p-4 space-y-4 bg-slate-50">
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                           <div className="text-[9px] font-black text-slate-400 uppercase mb-2">Pending Payments</div>
                           <div className="text-lg font-black text-rose-500">₹ 42,500</div>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                           <div className="text-[9px] font-black text-slate-400 uppercase mb-2">Upcoming Dues (10 Days)</div>
                           <div className="space-y-2 mt-2">
                              <div className="h-6 bg-amber-50 rounded-lg border border-amber-100 flex items-center px-3 justify-between">
                                 <span className="text-[8px] font-bold">Event A102</span>
                                 <span className="text-[8px] font-black text-amber-700">2 Days Left</span>
                              </div>
                              <div className="h-6 bg-slate-100 rounded-lg flex items-center px-3">
                                 <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                                    <div className="w-2/3 h-full bg-teal-500"></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 pt-2">
                           <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-sm">📦</div>
                              <span className="text-[9px] font-black uppercase">Stock</span>
                           </div>
                           <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-sm">🗓️</div>
                              <span className="text-[9px] font-black uppercase">Events</span>
                           </div>
                        </div>
                     </div>
                     {/* Bottom Nav */}
                     <div className="h-16 bg-white border-t border-slate-100 flex items-center justify-around px-4">
                        {[1,2,3,4].map(i => (
                           <div key={i} className={`w-8 h-1 rounded-full ${i===1 ? "bg-teal-600" : "bg-slate-200"}`}></div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MASTER SETUP & QR SECTION ── */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               {/* QR Card Illustration */}
               <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 relative group">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h4 className="text-2xl font-black text-slate-900 mb-1">Product Master</h4>
                      <p className="text-slate-400 text-sm font-medium">Automatic Code Generation</p>
                    </div>
                    <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center text-white text-2xl">✨</div>
                  </div>
                  
                  <div className="flex items-center gap-10">
                    <div className="w-32 h-32 bg-slate-50 rounded-2xl border-4 p-2 border-slate-900 group-hover:scale-105 transition-transform">
                       {/* Mock QR Code Pattern */}
                       <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-1">
                          {[...Array(25)].map((_, i) => (
                             <div key={i} className={`${Math.random() > 0.5 ? "bg-slate-900" : "bg-transparent"} rounded-sm`}></div>
                          ))}
                       </div>
                    </div>
                    <div className="space-y-4 flex-1">
                       <div className="bg-slate-50 p-4 rounded-xl">
                          <div className="text-[10px] font-black text-slate-400 uppercase">Barcode ID</div>
                          <div className="text-lg font-mono font-bold tracking-widest mt-1">PROD-99827-X</div>
                       </div>
                       <div className="flex gap-2">
                          <div className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-black">IN STOCK</div>
                          <div className="px-3 py-1 bg-teal-50 text-teal-600 rounded-lg text-[10px] font-black">ELECTRONICS</div>
                       </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                     <span className="text-sm font-bold text-slate-400 italic">"Scan to adjust stock instantly"</span>
                     <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">📸</div>
                  </div>
               </div>
               {/* Background circle */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-200 rounded-full blur-[100px] opacity-20 -z-10"></div>
            </div>
            
            <div>
              <span className="text-teal-600 font-black tracking-widest text-xs uppercase mb-6 inline-block">MASTER SETUP</span>
              <h2 className="text-slate-900 mb-8 er text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Foundation for <br /><span className="text-teal-600">Enterprise Scale.</span></h2>
              
              <div className="space-y-8">
                 <div>
                    <h4 className="font-black text-xl mb-3 flex items-center gap-3">
                       <span className="w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center text-sm">📏</span>
                       Units Configuration
                    </h4>
                    <p className="text-slate-500 font-medium pl-11">Add custom measurement units like KG, Litre, PCS, or even custom event crates. Complete flexibility for any business type.</p>
                 </div>
                 <div>
                    <h4 className="font-black text-xl mb-3 flex items-center gap-3">
                       <span className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center text-sm">📁</span>
                       Category Hierarchy
                    </h4>
                    <p className="text-slate-500 font-medium pl-11">Simple one-level hierarchy keeps things clear. One parent can have multiple children sub-categories, keeping your products organized precisely.</p>
                 </div>
                 <div>
                    <h4 className="font-black text-xl mb-3 flex items-center gap-3">
                       <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">👤</span>
                       User Management
                    </h4>
                    <p className="text-slate-500 font-medium pl-11">Powerful control for admins. Assign page-specific access rights to team members to maintain strict organizational security.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE MODULES SECTION ── */}
      <section id="features" className="py-24 bg-[#FCFDFF] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-slate-900 mb-4 er text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Powerful Features for Modern Warehouses</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Designed to work for you. Every feature is built with simplicity and automation in mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {godownModules.map((module, idx) => (
              <motion.div
                key={module.id}
                whileHover={{ y: -8 }}
                className="group p-10 bg-white rounded-[3rem] border border-slate-100 shadow-[0_8px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(13,148,136,0.1)] transition-all duration-300 overflow-hidden relative"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-bl-[5rem]`}></div>
                <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform inline-block">{module.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{module.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8 text-sm font-medium">{module.desc}</p>
                <ul className="space-y-3">
                  {module.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${module.color}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SMART STATUS UPDATES VISUALIZER ── */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="text-teal-400 font-black tracking-widest text-xs uppercase mb-6 inline-block">AUTOMATION THAT WORKS</span>
              <h2 className="mb-8 er text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Smart Status Updates— <br /><span className="text-teal-400">Zero Manual Work.</span></h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">Our system automatically detects inventory returns and updates statuses in real-time. Whether it's partially back or fully returned, the system knows what to do.</p>
              
              <div className="space-y-6">
                {statusFlow.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex items-center gap-6 p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-2xl shadow-lg ring-4 ring-white/5 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-1">{item.status}</h4>
                      <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               {/* Visual Flow Animation */}
               <div className="relative aspect-square max-w-[500px] mx-auto">
                 <div className="absolute inset-0 rounded-full border border-teal-500/20 animate-[spin_20s_linear_infinite]"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 bg-teal-500/10 rounded-full flex items-center justify-center blur-2xl"></div>
                    <div className="relative w-40 h-40 bg-teal-600 rounded-[3rem] shadow-2xl flex items-center justify-center text-6xl text-white font-black z-10 border-4 border-teal-400">
                       <span className="animate-pulse">📦</span>
                    </div>
                 </div>
                 
                 {/* Floating Points */}
                 {[0, 120, 240].map((deg, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     className="absolute w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex flex-col items-center justify-center p-3 gap-2"
                     style={{ 
                       top: `calc(50% + ${Math.sin(deg * Math.PI / 180) * 180}px - 48px)`,
                       left: `calc(50% + ${Math.cos(deg * Math.PI / 180) * 180}px - 48px)`
                     }}
                   >
                     <span className="text-2xl">{statusFlow[i].icon}</span>
                     <span className="text-[10px] font-black uppercase text-center">{statusFlow[i].status}</span>
                   </motion.div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RETURN PROCESS & QUALITY CHECK ── */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                 <div className="bg-teal-600 p-8 text-white">
                    <h3 className="text-2xl font-black mb-2">Quality Check Assistant</h3>
                    <p className="text-teal-100 text-sm font-medium">Smart formula calculation for every return</p>
                 </div>
                 <div className="p-8 space-y-6 bg-white">
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
                          <div className="text-[10px] font-black text-emerald-600 uppercase mb-2">Good Condition</div>
                          <div className="text-3xl font-black text-emerald-700">12</div>
                       </div>
                       <div className="p-5 rounded-2xl bg-amber-50 border border-amber-100">
                          <div className="text-[10px] font-black text-amber-600 uppercase mb-2">Damaged</div>
                          <div className="text-3xl font-black text-amber-700">02</div>
                       </div>
                    </div>
                    <div className="p-5 rounded-2xl bg-rose-50 border border-rose-100">
                       <div className="text-[10px] font-black text-rose-600 uppercase mb-2">Missing Items</div>
                       <div className="text-3xl font-black text-rose-700">01</div>
                    </div>
                    <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                       <span className="text-lg font-black text-slate-400">Total Returned</span>
                       <span className="text-4xl font-black text-slate-900">15 / 15</span>
                    </div>
                    <div className="bg-slate-900 p-4 rounded-xl text-center">
                       <span className="text-xs font-bold text-teal-400">Formula: Returned = Good + Damaged + Missing</span>
                    </div>
                 </div>
              </div>
              {/* Decorative blobs */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-200 rounded-full blur-[80px] opacity-40"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-200 rounded-full blur-[80px] opacity-40"></div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-teal-600 font-black tracking-widest text-xs uppercase mb-6 inline-block">ACCOUNTABILITY & CONDITION</span>
              <h2 className="text-slate-900 mb-8 er text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Meticulous Return <br /><span className="text-teal-600">Management.</span></h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-2xl flex-shrink-0 text-teal-600">🛡️</div>
                  <div>
                    <h4 className="font-black text-xl mb-2">Quality Tracking</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">Break down returned quantities into Good Condition, Damaged, or Missing. Never lose track of your assets' health.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-2xl flex-shrink-0 text-cyan-600">📋</div>
                  <div>
                    <h4 className="font-black text-xl mb-2">Auto-Captured Info</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">System automatically pulls customer details, vehicle numbers, and original dispatch info the moment you start a return profile.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-2xl flex-shrink-0 text-emerald-600">💰</div>
                  <div>
                    <h4 className="font-black text-xl mb-2">Penalty Integration</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">Instantly apply penalties for damaged or missing items, automatically updating the client's pending balance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSIGHT REPORTS SECTION ── */}
      <section id="reports" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-slate-900 mb-4 er text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Powerful Insight Reports</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Make data-driven decisions with real-time reporting. Export everything in seconds.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {reportTypes.map((report, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex items-start gap-8 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl group-hover:bg-teal-50 transition-colors">
                  {report.icon}
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 mb-2">{report.name}</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{report.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-teal-600 rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-teal-200 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4">Ready to Export Your Data?</h3>
                <p className="text-teal-100 max-w-md font-medium">Download professional PDF or flexible Excel reports with a single click. Compatible with all accounting tools.</p>
             </div>
             <div className="flex gap-4 relative z-10">
                <button className="px-8 py-4 bg-white text-teal-700 font-black rounded-2xl hover:bg-teal-50 transition-colors shadow-lg flex items-center gap-3">
                  <span>📄</span> PDF Export
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="press-illusion-btn-orange text-white font-black !px-8 !py-4 transition-all duration-300 active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span>📊</span> Excel Export
                  </span>
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* ── WHY STAND OUT SECTION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-50 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="text-center mb-16 relative z-10">
               <h2 className="text-slate-900 mb-6 er text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Why Our Godown System Stands Out</h2>
               <p className="text-slate-500 max-w-xl mx-auto font-medium">The "Smart Features" that do the heavy lifting for you.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {[
                { title: "All-in-One Solution", desc: "Events, rentals, and inventory in one place.", icon: "🎯" },
                { title: "Smart Automation", desc: "Status updates happen automatically based on return data.", icon: "🤖" },
                { title: "Financial Control", desc: "Track every rupee, from advance to final penalty.", icon: "💳" },
                { title: "Quality Tracking", desc: "Know the condition of every returned item instantly.", icon: "✨" },
                { title: "Powerful Reports", desc: "PDF & Excel export on all reports for easy sharing.", icon: "📋" },
                { title: "Easy to Use", desc: "Simple language and clear processes for your staff.", icon: "👌" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start">
                   <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl flex-shrink-0">{item.icon}</div>
                   <div>
                     <h4 className="font-black text-lg mb-1">{item.title}</h4>
                     <p className="text-slate-400 text-[13px] leading-relaxed italic">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <section className="py-24 bg-teal-50 relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-slate-900 mb-8 er text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Revolutionize Your <br />Warehouse Management Today</h2>
            <p className="text-slate-500 text-lg mb-12 font-medium">Join businesses that have scaled their operations by 40% with our automated tracking system.</p>
            <div className="flex flex-wrap justify-center gap-4">
               <button 
                  onClick={() => setIsModalOpen(true)}
                  className="press-illusion-btn-orange text-white !px-10 !py-5 font-black !text-xl hover:scale-105 transition-all duration-300"
               >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started for Free
                  </span>
               </button>
            </div>
         </div>
         {/* Decorative backgrounds */}
         <div className="absolute top-1/2 left-0 w-64 h-64 bg-teal-200 rounded-full blur-[100px] opacity-30 -translate-x-1/2"></div>
         <div className="absolute bottom-1/2 right-0 w-64 h-64 bg-cyan-200 rounded-full blur-[100px] opacity-30 translate-x-1/2"></div>
      </section>

      {/* ── RELATED PRODUCTS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-slate-900 mb-4 er text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Related Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.slice(0, 3).map((targetProduct) => (
              <Link key={targetProduct.slug} href={`/product/${targetProduct.slug}`} className="group p-8 rounded-[2.5rem] bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-6">{targetProduct.icon}</div>
                <h3 className="text-xl font-black mb-3">{targetProduct.title}</h3>
                <p className="text-slate-500 text-xs font-medium line-clamp-2">{targetProduct.shortDescription}</p>
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
    </div>
  );
}




