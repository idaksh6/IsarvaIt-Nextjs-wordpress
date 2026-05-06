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
  "setup": { bg: "bg-blue-600", gradient: "from-[#2563EB] to-[#1E40AF]", shadow: "shadow-blue-500/20", text: "text-blue-600", lightBg: "bg-blue-50", hoverBorder: "hover:border-blue-200", accent: "blue" },
  "employee": { bg: "bg-emerald-600", gradient: "from-[#10B981] to-[#059669]", shadow: "shadow-emerald-500/20", text: "text-emerald-600", lightBg: "bg-emerald-50", hoverBorder: "hover:border-emerald-200", accent: "emerald" },
  "payroll": { bg: "bg-violet-600", gradient: "from-[#7C3AED] to-[#6D28D9]", shadow: "shadow-violet-500/20", text: "text-violet-600", lightBg: "bg-violet-50", hoverBorder: "hover:border-violet-200", accent: "violet" },
  "reporting": { bg: "bg-rose-600", gradient: "from-[#E11D48] to-[#BE123C]", shadow: "shadow-rose-500/20", text: "text-rose-600", lightBg: "bg-rose-50", hoverBorder: "hover:border-rose-200", accent: "rose" },
  "analytics": { bg: "bg-sky-600", gradient: "from-[#0EA5E9] to-[#0284C7]", shadow: "shadow-sky-500/20", text: "text-sky-600", lightBg: "bg-sky-50", hoverBorder: "hover:border-sky-200", accent: "sky" },
  "ess": { bg: "bg-amber-500", gradient: "from-[#F59E0B] to-[#D97706]", shadow: "shadow-amber-500/20", text: "text-amber-600", lightBg: "bg-amber-50", hoverBorder: "hover:border-amber-200", accent: "amber" }
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
    <div className={`relative font-sans selection:bg-blue-100 selection:text-blue-900 transition-colors duration-1000 bg-white`}>
      {/* --- Dynamic Shifting Background (Soft & Light) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Very subtle ambient gradient */}
        <div className={`absolute inset-0 opacity-10 transition-colors duration-1000 bg-gradient-to-br ${TAB_THEMES[activeTab].gradient} blur-[120px] scale-125`} />
        
        {/* Animated decorative blobs - Using complementary colors for variety */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={`absolute top-[-5%] left-[-5%] w-[40%] h-[40%] rounded-full opacity-[0.08] blur-[100px] ${TAB_THEMES[activeTab].bg}`} 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] rounded-full opacity-[0.06] bg-violet-500 blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] rounded-full opacity-[0.05] bg-blue-400 blur-[90px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-10 bg-indigo-500 blur-[120px]" 
        />

        {/* Global patterns */}
        <div className="absolute inset-0 bg-dots opacity-[0.1]" />
        <div className="absolute inset-0 bg-grid-slate-200/[0.05] [mask-image:linear-gradient(to_bottom,white,transparent,white)]" />
      </div>

      {/* 2. Enhanced Floating Tab Bar */}
      <div className={`sticky ${isScrolled ? "top-[80px]" : "top-[100px]"} z-[99] flex justify-center py-6 px-4 pointer-events-none transition-all duration-500`}>
        <div className="inline-flex items-center bg-white/80 backdrop-blur-2xl border border-white/50 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-[2rem] transition-all pointer-events-auto">
          <div className="flex items-center space-x-1 px-1 py-1">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              const theme = TAB_THEMES[tab.id];
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-[1.5rem] font-bold text-xs uppercase tracking-widest transition-all duration-500 relative group overflow-hidden ${
                    isActive
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} ${theme.shadow} z-0`}
                      transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
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
                  className="text-6xl lg:text-[92px] font-black text-gray-900 leading-[0.9] mb-10 tracking-tighter uppercase"
                >
                  {activeContent.title.split(" ").slice(0, -1).join(" ")}{" "}
                  <br />
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${TAB_THEMES[activeTab].gradient}`}>
                    {activeContent.title.split(" ").pop()}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed max-w-xl font-medium"
                >
                  {activeContent.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
                >
                  {activeContent.features.map((f, i) => (
                    <div key={i} className={`flex items-center gap-4 p-5 rounded-[24px] bg-white border border-gray-100 ${TAB_THEMES[activeTab].hoverBorder} transition-all group shadow-sm hover:shadow-xl hover:-translate-y-1`}>
                      <div className={`w-8 h-8 rounded-full ${TAB_THEMES[activeTab].lightBg} flex items-center justify-center ${TAB_THEMES[activeTab].text} transition-colors flex-shrink-0 shadow-inner`}>
                        <span className="text-xs font-black">✓</span>
                      </div>
                      <span className="text-sm font-black text-gray-700 leading-tight uppercase tracking-tight">{f}</span>
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

      {/* 4. The "Broken HR" Modern Section - Light & Vibrant Contrast */}
      <section className="relative pt-24 pb-32 bg-white overflow-hidden border-y border-gray-100">
        {/* Background elements for light section */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-dots opacity-[0.1]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-24 text-gray-900">
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
                title: "Endless Paperwork", icon: "📄", desc: "HR spends more time filling out forms than helping people improve.",
                iconTheme: "bg-rose-50 text-rose-600"
              },
              { 
                title: "Disconnected Apps", icon: "🔌", desc: "Data spread across too many places leads to messy mistakes.",
                iconTheme: "bg-violet-50 text-violet-600"
              },
              { 
                title: "Frustrated Workers", icon: "😠", desc: "Hard-to-use software makes workers unhappy and less productive.",
                iconTheme: "bg-amber-50 text-amber-600"
              },
              { 
                title: "Risky Security", icon: "🔓", desc: "Old ways of handling info leave you open to legal and tech threats.",
                iconTheme: "bg-slate-100 text-slate-600"
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-10 rounded-[40px] border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br from-white to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${item.iconTheme} shadow-sm`}>
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="relative z-10 text-2xl font-black text-gray-900 mb-4 uppercase tracking-tighter">{item.title}</h3>
                <p className="relative z-10 text-sm text-gray-500 leading-relaxed font-bold">{item.desc}</p>
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

      {/* 6. Infinite Advanced Slider - Soft Shifting Background */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 opacity-5 transition-colors duration-1000 bg-gradient-to-br ${TAB_THEMES[activeTab].gradient} blur-[120px]`} />
          <div className="absolute inset-0 bg-dots opacity-[0.1]" />
        </div>

        <div className="container mx-auto px-6 mb-20 text-center relative z-10">
          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tighter uppercase">Complete <span className={TAB_THEMES[activeTab].text}>HR Suite</span></h2>
          <p className="text-gray-500 font-bold text-xl max-w-2xl mx-auto uppercase tracking-tight">Streamline your entire operations with a powerful integrated platform.</p>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECTION_6_FEATURES.map((card, idx) => {
               const theme = [
                { text: "text-blue-600", check: "text-blue-600", iconBg: "bg-blue-50" },
                { text: "text-emerald-600", check: "text-emerald-600", iconBg: "bg-emerald-50" },
                { text: "text-violet-600", check: "text-violet-600", iconBg: "bg-violet-50" },
                { text: "text-rose-600", check: "text-rose-600", iconBg: "bg-rose-50" },
                { text: "text-sky-600", check: "text-sky-600", iconBg: "bg-sky-50" },
                { text: "text-amber-600", check: "text-amber-600", iconBg: "bg-amber-50" }
              ][idx % 6];

              return (
                <div key={idx} className="w-full">
                  <div className={`p-10 rounded-[48px] bg-white border border-gray-100 h-full hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col`}>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gray-50 blur-3xl rounded-full group-hover:bg-blue-50 transition-colors"></div>
                    
                    <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform ${theme.iconBg} ${theme.text} shadow-inner`}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="relative z-10 text-2xl font-black text-gray-900 mb-4 uppercase tracking-tighter">{card.title}</h3>
                    <p className="relative z-10 text-base text-gray-500 mb-10 leading-relaxed font-bold">{card.desc}</p>
                    <div className="relative z-10 flex flex-col gap-4 mt-auto">
                      {card.items.map((item, j) => (
                        <div key={j} className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-2xl border border-gray-100 group-hover:bg-white transition-all group-hover:border-blue-100">
                          <div className={`w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 ${theme.check} font-black text-xs`}>✓</div>
                          <span className="text-sm font-black text-gray-600 tracking-tight leading-tight uppercase">{item}</span>
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
