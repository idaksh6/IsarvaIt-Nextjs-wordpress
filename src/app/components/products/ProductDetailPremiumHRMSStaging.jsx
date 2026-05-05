"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ContactFormModal from "../../components/ContactFormModal";

const PRIMARY_BLUE = "#0066FF";
const TEXT_DARK = "#1A1A1A";
const TEXT_GRAY = "#4D4D4D";

const TABS = [
  { id: "setup", label: "Company Setup" },
  { id: "employee", label: "Employee Mgmt" },
  { id: "payroll", label: "Payroll" },
  { id: "reporting", label: "Reporting" },
  { id: "analytics", label: "Analytics" },
  { id: "ess", label: "ESS Portal" },
];

const TAB_CONTENT = {
  "setup": {
    title: "Smart Company Setup",
    subtitle: "Customize your organization structure with ease",
    description: "Easily customize your departments, roles, and office locations to fit your business perfectly—no coding required.",
    image: "/products/hrms/Personnel-details.jpg",
    features: [
      "Master setup for Salary and statutory components",
      "Departments",
      "Designations",
      "Roles",
      "Employee status",
      "Employee document types"
    ]
  },
  "employee": {
    title: "Centralized Employee Management",
    subtitle: "360-degree view of your workforce",
    description: "Create a comprehensive employee database with 360-degree profiles, organizational mapping, and role-based access controls for seamless workforce management.",
    image: "/products/hrms/Personnel-details.jpg",
    features: [
      "Role-based access and permissions",
      "Document management and vault",
      "Employee personal details",
      "Employee salary structure",
      "Employee level weekoff and leave mapping",
      "Auto generated Joining form, Offer letter, Experience letter in case of exit",
      "Employee self-service portal"
    ]
  },
  "payroll": {
    title: "Automated Payroll Processing",
    subtitle: "Process payroll with confidence and accuracy",
    description: "Process payroll with confidence using our automated engine, designed to handle multiple locations seamlessly. It also generates bank-ready formats for salary processing and provides portal upload-ready formats for EPF and ESIC.",
    image: "/products/hrms/Payroll-management.jpg",
    features: [
      "Multi location payroll processing",
      "Override salary components",
      "Add/update employee advances",
      "Comparison view for previous and current month salaries",
      "Bank ready formats for salary process",
      "EPF and ESIC portal upload-ready formats",
      "One-click salary slip sending"
    ]
  },
  "reporting": {
    title: "Robust Reporting",
    subtitle: "Analyze and grow your organization",
    description: "We offer different types of reports that helps organization to analyse",
    image: "/products/hrms/Reporting-&-analytics.jpg",
    features: [
      "Payroll reports",
      "Comparison reports for payroll",
      "Payroll analytical reports",
      "Employee leave reports",
      "LOP reports",
      "Attendance report"
    ]
  },
  "analytics": {
    title: "HR Analytics & Insights",
    subtitle: "Data-driven decisions for your people",
    description: "HR Analytics & Insights delivers real-time dashboards and actionable workforce data to help you make smarter HR decisions.",
    image: "/products/hrms/Reporting-&-analytics.jpg",
    features: [
      "Real-time dashboard",
      "Attendance & leave insights",
      "Payroll and cost analysis",
      "Department-wise analytics",
      "Quick note calendar for HR"
    ]
  },
  "ess": {
    title: "Employee Self-Service Leave Application",
    subtitle: "Empower your workforce with self-service tools",
    description: "Empower employees to easily apply for leaves through a self-service portal with accurate calculations and real-time leave availability.",
    image: "/products/Emplyee self Service.png",
    features: [
      "Apply for single-day or multiple-day leave",
      "Half-day leave customization",
      "Automatic exclusion of public holidays and weekly offs",
      "Real-time leave balance based on payroll data",
      "Streamlined leave request and approval process",
      "Automated email notifications"
    ]
  }
};

const TAB_THEMES = {
  "setup": { bg: "bg-blue-600", gradient: "from-[#2563EB] to-[#1E40AF]", shadow: "shadow-blue-500/30", text: "text-blue-600", lightBg: "bg-blue-50", hoverBorder: "hover:border-blue-200" },
  "employee": { bg: "bg-emerald-600", gradient: "from-emerald-500 to-teal-600", shadow: "shadow-emerald-500/30", text: "text-emerald-600", lightBg: "bg-emerald-50", hoverBorder: "hover:border-emerald-200" },
  "payroll": { bg: "bg-purple-600", gradient: "from-purple-500 to-fuchsia-600", shadow: "shadow-purple-500/30", text: "text-purple-600", lightBg: "bg-purple-50", hoverBorder: "hover:border-purple-200" },
  "reporting": { bg: "bg-rose-600", gradient: "from-rose-500 to-orange-600", shadow: "shadow-rose-500/30", text: "text-rose-600", lightBg: "bg-rose-50", hoverBorder: "hover:border-rose-200" },
  "analytics": { bg: "bg-cyan-600", gradient: "from-cyan-500 to-sky-600", shadow: "shadow-cyan-500/30", text: "text-cyan-600", lightBg: "bg-cyan-50", hoverBorder: "hover:border-cyan-200" },
  "ess": { bg: "bg-amber-500", gradient: "from-amber-400 to-orange-500", shadow: "shadow-amber-500/30", text: "text-amber-600", lightBg: "bg-amber-50", hoverBorder: "hover:border-amber-200" }
};

export default function ProductDetailPremiumHRMSStaging({
  product,
  relatedProducts,
  allProducts,
}) {
  const [activeTab, setActiveTab] = useState("setup");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeContent = TAB_CONTENT[activeTab] || TAB_CONTENT["setup"];

  return (
    <div className="relative font-sans selection:bg-blue-100 selection:text-blue-900 bg-white">
      {/* --- Premium SaaS Hero Background --- */}
      <div className="absolute top-0 left-0 w-full h-[850px] z-0 pointer-events-none overflow-hidden select-none">


        {/* Subtle premium textures that fade out beautifully */}
        <div className="absolute inset-0 bg-dots opacity-[0.2] mask-fade-bottom" />
        <div className="absolute inset-0 bg-mesh-green opacity-[0.08] mask-fade-bottom" />

        {/* Bottom gradient mask to guarantee absolutely zero sharp cutoffs */}
        <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* 2. Floating Premium Tab Bar (Sticky for entire page) */}
      <div className={`sticky ${isScrolled ? "top-[82px]" : "top-[98px]"} z-[99] flex justify-center py-4 px-4 pointer-events-none transition-all duration-300`}>
        <div className="inline-flex items-center bg-white/90 backdrop-blur-md border border-gray-100 p-1.5 shadow-xl rounded-full transition-all pointer-events-auto">
          <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide max-w-[90vw] px-2 py-1">
            {TABS.map((tab) => {
              const theme = TAB_THEMES[tab.id];
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 relative whitespace-nowrap ${activeTab === tab.id
                      ? `bg-gradient-to-r ${theme.gradient} text-white scale-105 z-10`
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Hero Section Content (Restored to Grid Layout) */}
      <section className="relative pt-12 lg:pt-32 pb-20 lg:pb-32 overflow-hidden z-10">

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            >
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] mb-8 ${TAB_THEMES[activeTab].lightBg} ${TAB_THEMES[activeTab].text} border-white/50 shadow-sm`}
                >
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${TAB_THEMES[activeTab].bg}`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${TAB_THEMES[activeTab].bg}`}></span>
                  </span>
                  {TABS.find(t => t.id === activeTab)?.label} MODULE
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl lg:text-[76px] font-black text-gray-900 leading-[1.0] mb-8 tracking-tighter"
                >
                  {activeContent.title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${TAB_THEMES[activeTab].gradient}`}>
                    {activeContent.title.split(" ").pop()}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-gray-500 mb-10 leading-relaxed max-w-xl font-medium"
                >
                  {activeContent.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
                >
                  {activeContent.features.map((f, i) => (
                    <div key={i} className={`flex items-start gap-3 p-4 rounded-[20px] bg-white/60 backdrop-blur-md border border-white ${TAB_THEMES[activeTab].hoverBorder} transition-all group shadow-sm hover:shadow-md hover:bg-white`}>
                      <div className={`w-5 h-5 rounded-full ${TAB_THEMES[activeTab].lightBg} flex items-center justify-center ${TAB_THEMES[activeTab].text} transition-colors flex-shrink-0 mt-0.5 shadow-inner`}>
                        <span className="text-[10px] font-black">✓</span>
                      </div>
                      <span className="text-sm font-bold text-gray-700 leading-snug">{f}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className={`btn-premium-orange !py-6 !px-12 !text-lg !rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
                  >
                    Get Started Free
                    <span className="shimmer"></span>
                  </button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 p-2 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border border-white backdrop-blur-sm cursor-pointer group" onClick={() => setSelectedImage(activeContent.image)}>
                  <div className="rounded-xl overflow-hidden border border-gray-100 shadow-inner">
                    <img
                      src={activeContent.image}
                      alt={activeContent.title}
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm text-blue-600 p-3 rounded-full shadow-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    </div>
                  </div>
                </div>
                {/* Floating Stats UI */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-12 -right-8 bg-white/80 backdrop-blur-xl p-6 rounded-[32px] shadow-2xl border border-white z-20 w-44"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-sm">↑</div>
                    <span className="text-xl font-black text-gray-900">42%</span>
                  </div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Efficiency Boost</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>


      </section>

      {/* 4. The "Broken HR" Modern Section */}
      <section className="relative pt-16 pb-24 bg-white border-y border-gray-100 overflow-hidden">

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 font-bold text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                The Problem
              </div>
              <h2 className="text-4xl lg:text-[56px] font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
                Traditional HR <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Is Broken.</span>
              </h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">Organizations are stuck with outdated systems that waste time, frustrate employees, and hold back growth. It's time for a change.</p>
            </div>
            <div className="flex gap-4 lg:justify-end">
              <div className="px-6 py-4 rounded-3xl bg-white border border-gray-100 shadow-sm flex items-center gap-4">
                <span className="text-3xl">🚫</span>
                <span className="text-sm font-bold text-gray-600">No Bloatware</span>
              </div>
              <div className="px-6 py-4 rounded-3xl bg-white border border-gray-100 shadow-sm flex items-center gap-4">
                <span className="text-3xl">⚡</span>
                <span className="text-sm font-bold text-gray-600">Instant Setup</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Endless Paperwork", icon: "📄", desc: "HR spends more time filling out forms than helping people.",
                theme: "from-rose-50 to-red-50 border-rose-100 hover:border-rose-300",
                iconTheme: "bg-gradient-to-br from-rose-500 to-red-600 shadow-rose-500/30 text-white"
              },
              { 
                title: "Disconnected Apps", icon: "🔌", desc: "Data is spread across too many places, leading to messy mistakes.",
                theme: "from-purple-50 to-indigo-50 border-purple-100 hover:border-purple-300",
                iconTheme: "bg-gradient-to-br from-purple-500 to-indigo-600 shadow-purple-500/30 text-white"
              },
              { 
                title: "Frustrated Employees", icon: "😠", desc: "Hard-to-use software makes workers unhappy and less productive.",
                theme: "from-amber-50 to-orange-50 border-amber-100 hover:border-amber-300",
                iconTheme: "bg-gradient-to-br from-amber-500 to-orange-600 shadow-amber-500/30 text-white"
              },
              { 
                title: "Risky Security", icon: "🔓", desc: "Old ways of handling info leave you open to legal and tech threats.",
                theme: "from-slate-50 to-gray-100 border-slate-200 hover:border-slate-400",
                iconTheme: "bg-gradient-to-br from-slate-600 to-gray-800 shadow-slate-500/30 text-white"
              }
            ].map((item, idx) => (
              <div key={idx} className={`group p-10 rounded-[40px] border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br relative overflow-hidden ${item.theme}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/60 blur-3xl rounded-full"></div>
                <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.iconTheme}`}>
                  <span className="text-3xl drop-shadow-sm">{item.icon}</span>
                </div>
                <h3 className="relative z-10 text-xl font-black text-gray-900 mb-4">{item.title}</h3>
                <p className="relative z-10 text-sm text-gray-700 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Feature Spotlight Glassmorphism */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative rounded-[64px] bg-gradient-to-br from-gray-50 to-white p-8 lg:p-20 border border-gray-100 shadow-inner overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                  <div className="w-12 h-1.5 bg-blue-600 rounded-full mb-8"></div>
                  <h2 className="text-4xl lg:text-[56px] font-black text-gray-900 mb-8 leading-[1.1]">{activeContent.title}</h2>
                  <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">{activeContent.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeContent.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 rounded-[24px] bg-white border border-gray-50 hover:border-blue-100 transition-all group">
                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">✓</div>
                        <span className="text-sm font-black text-gray-600 group-hover:text-gray-900">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative cursor-pointer group" onClick={() => setSelectedImage(activeContent.image)}>
                  <div className="absolute -inset-4 bg-blue-600/5 blur-3xl rounded-full"></div>
                  <img
                    src={activeContent.image}
                    alt={activeContent.title}
                    className="relative z-10 rounded-2xl shadow-2xl border border-white group-hover:shadow-blue-500/20 group-hover:-translate-y-1 transition-all duration-300"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm text-blue-600 p-3 rounded-full shadow-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 6. Infinite Advanced Slider */}
      <section className="py-24 bg-gray-50 overflow-hidden border-y border-gray-100">
        <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">Complete HR Suite</h2>
          <p className="text-gray-500 font-medium">Streamline and manage your entire HR operations with a powerful, integrated HRMS platform designed for modern businesses.</p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECTION_6_FEATURES.map((card, idx) => {
              const theme = [
                { bg: "bg-gradient-to-br from-blue-50 to-indigo-50/50 border-blue-100 hover:border-blue-300", icon: "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/30 text-white", check: "text-blue-500" },
                { bg: "bg-gradient-to-br from-emerald-50 to-teal-50/50 border-emerald-100 hover:border-emerald-300", icon: "bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-500/30 text-white", check: "text-emerald-500" },
                { bg: "bg-gradient-to-br from-purple-50 to-fuchsia-50/50 border-purple-100 hover:border-purple-300", icon: "bg-gradient-to-br from-purple-500 to-fuchsia-600 shadow-purple-500/30 text-white", check: "text-purple-500" },
                { bg: "bg-gradient-to-br from-rose-50 to-orange-50/50 border-rose-100 hover:border-rose-300", icon: "bg-gradient-to-br from-rose-500 to-orange-600 shadow-rose-500/30 text-white", check: "text-rose-500" },
                { bg: "bg-gradient-to-br from-cyan-50 to-sky-50/50 border-cyan-100 hover:border-cyan-300", icon: "bg-gradient-to-br from-cyan-500 to-sky-600 shadow-cyan-500/30 text-white", check: "text-cyan-500" },
                { bg: "bg-gradient-to-br from-amber-50 to-yellow-50/50 border-amber-100 hover:border-amber-300", icon: "bg-gradient-to-br from-amber-500 to-yellow-600 shadow-amber-500/30 text-white", check: "text-amber-500" }
              ][idx % 6];
              
              return (
                <div key={idx} className="w-full">
                  <div className={`p-8 rounded-[40px] border h-full hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col ${theme.bg}`}>
                    {/* Subtle background glow effect inside the card */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/60 blur-3xl rounded-full"></div>
                    
                    <div className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${theme.icon}`}>
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="relative z-10 text-2xl font-black text-gray-900 mb-4">{card.title}</h3>
                    <p className="relative z-10 text-[15px] text-gray-600 mb-8 leading-relaxed font-medium">{card.desc}</p>
                    <div className="relative z-10 flex flex-col gap-3 mt-auto">
                      {card.items.map((item, j) => (
                        <div key={j} className="flex items-start gap-3 bg-white/50 p-3 rounded-2xl border border-white backdrop-blur-sm shadow-sm group-hover:bg-white transition-colors">
                          <div className="w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className={`text-[10px] font-black ${theme.check}`}>✓</span>
                          </div>
                          <span className="text-sm font-bold text-gray-700 leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Modern Light Gradient CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[72px] bg-gray-50 py-12 lg:py-16 px-8 overflow-hidden text-center border border-gray-100 shadow-inner">

            <div className="relative z-10">
              <h2 className="text-5xl lg:text-[84px] font-black text-gray-900 mb-8 leading-[0.95] tracking-tight">Build the future <br /> today.</h2>
              <p className="text-xl text-gray-500 mb-12 max-w-xl mx-auto font-medium">Join 10,000+ forward-thinking HRs transforming their workplace with Isarva.</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-premium-orange !py-8 !px-16 !text-2xl !rounded-[32px] shadow-xl"
              >
                Request Free Access
                <span className="shimmer"></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem={product.title}
        allItems={allProducts}
      />

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-[90vw] max-h-[90vh] cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-full object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const SECTION_6_FEATURES = [
  {
    title: "Shifts & Duty Rosters",
    desc: "Efficiently manage employee shifts and duty rosters with flexible scheduling and bulk assignment capabilities.",
    items: [
      "Duty roster management with flexible scheduling",
      "Bulk assignment of shifts across multiple employees",
      "Easy planning and allocation of workforce shifts",
      "Improved scheduling efficiency and accuracy"
    ]
  },
  {
    title: "Attendance Processing",
    desc: "Easily manage and finalize employee attendance with accurate tracking and seamless integration with payroll systems.",
    items: [
      "Admins view and manage attendance for all employees",
      "Manual updates for attendance entries",
      "Save & Lock feature to finalize monthly attendance",
      "Seamless API integration with payroll"
    ]
  },
  {
    title: "Biometric Connections",
    desc: "Seamlessly manage employee attendance with biometric integration via the Timestation API, supporting both automated syncing and manual uploads.",
    items: [
      "Real-time attendance tracking via API",
      "Manual biometric data upload option",
      "Admin control to override attendance data",
      "Automatic calculation of leaves and overtime"
    ]
  },
  {
    title: "Public Holiday Management",
    desc: "Easily configure and manage public holidays with flexible options, including department-wise customization to suit organizational needs.",
    items: [
      "Admin control to manage public holidays",
      "Department-wise holiday configuration",
      "Restrict eligibility for applying public holidays",
      "Flexible holiday setup based on policies"
    ]
  },
  {
    title: "Leave Policy Management",
    desc: "Easily create and manage multiple leave policies by assigning leave types, days, and departments, ensuring employees can only apply for leaves applicable to them.",
    items: [
      "Create and manage multiple leave policies",
      "Assign leave types and number of days",
      "Department-wise leave policy configuration",
      "Multi-level leave approval workflows"
    ]
  },
  {
    title: "Other Features",
    desc: "Isarva HRMS is an all-in-one platform packed with additional tools to streamline and automate your HR workflow.",
    items: [
      "Auto realtime sync between attendance and payroll",
      "Separate OT and incentive calculations",
      "Hold and release salary modules",
      "Full and final settlement on employee exit"
    ]
  }
];
