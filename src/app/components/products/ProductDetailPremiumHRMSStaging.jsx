"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
      "Salary & Statutory Setup",
      "Department Management",
      "Designation Control",
      "Role-Based Access",
      "Employee Status",
      "Document Types"
    ]
  },
  "employee": {
    title: "Centralized Employee Management",
    subtitle: "360-degree view of your workforce",
    description: "Create a comprehensive employee database with 360-degree profiles, organizational mapping, and role-based access controls for seamless workforce management.",
    image: "/products/hrms/Personnel-details.jpg",
    features: [
      "Role-Based Access Control",
      "Document Vault Management",
      "360° Employee Profiles",
      "Auto-Generated HR Letters",
      "Employee Asset Tracking",
      "Bulk Data Management"
    ]
  },
  "payroll": {
    title: "Automated Payroll Processing",
    subtitle: "Process payroll with confidence and accuracy",
    description: "Process payroll with confidence using our automated engine, designed to handle multiple locations seamlessly. It also generates bank-ready formats for salary processing and provides portal upload-ready formats for EPF and ESIC.",
    image: "/products/hrms/Payroll-management.jpg",
    features: [
      "Multi-Location Processing",
      "Automated Bank Formats",
      "EPF & ESIC Portal Ready",
      "One-Click Payslip Delivery",
      "Advance & Loan Handling",
      "Salary Increment History"
    ]
  },
  "reporting": {
    title: "Robust Reporting",
    subtitle: "Analyze and grow your organization",
    description: "We offer different types of reports that helps organization to analyse",
    image: "/products/hrms/Reporting-&-analytics.jpg",
    features: [
      "Payroll Analytics",
      "Comparison Reports",
      "Employee Leave Insights",
      "Attendance Reporting",
      "Statutory Compliance",
      "Custom Filter Reports"
    ]
  },
  "analytics": {
    title: "HR Analytics & Insights",
    subtitle: "Data-driven decisions for your people",
    description: "HR Analytics & Insights delivers real-time dashboards and actionable workforce data to help you make smarter HR decisions.",
    image: "/products/hrms/Reporting-&-analytics.jpg",
    features: [
      "Real-Time Dashboards",
      "Workforce Insights",
      "Cost Center Analysis",
      "HR Event Calendar",
      "Retention Analytics",
      "Headcount Tracking"
    ]
  },
  "ess": {
    title: "Employee Self-Service Leave Application",
    subtitle: "Empower your workforce with self-service tools",
    description: "Empower employees to easily apply for leaves through a self-service portal with accurate calculations and real-time leave availability.",
    image: "/products/Emplyee self Service.png",
    features: [
      "Flexible Leave Application",
      "Real-Time Leave Balance",
      "Multi-Level Approvals",
      "Self-Service Documents",
      "Payslip Downloads",
      "Profile Update Requests"
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
  const contentTopRef = useRef(null);

  // Scroll to top of content area when tab changes
  useEffect(() => {
    if (contentTopRef.current) {
      const offset = 120; // Space for sticky header + tabs
      const elementPosition = contentTopRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [activeTab]);

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
        <div className={`absolute inset-0 opacity-10 transition-colors duration-500 bg-gradient-to-br ${TAB_THEMES[activeTab].gradient} blur-[120px] scale-125`} />

        {/* Simplified Static Blobs for Performance */}
        <div className={`absolute top-[-5%] left-[-5%] w-[40%] h-[40%] rounded-full opacity-[0.08] blur-[100px] ${TAB_THEMES[activeTab].bg}`} />
        <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] rounded-full opacity-[0.06] bg-violet-500 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] rounded-full opacity-[0.05] bg-blue-400 blur-[90px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-10 bg-indigo-500 blur-[120px]" />

        {/* Global patterns */}
        <div className="absolute inset-0 bg-dots opacity-[0.1]" />
        <div className="absolute inset-0 bg-grid-slate-200/[0.05] [mask-image:linear-gradient(to_bottom,white,transparent,white)]" />
      </div>

      {/* 2. Enhanced Vertical Sidebar Tabs (Desktop) & Floating Top Bar (Mobile) */}
      <div ref={contentTopRef} className="relative z-40 max-w-7xl mx-auto px-4 md:px-6 pt-24 lg:pt-48 pb-12 lg:pb-32">
        {/* Mobile View (Horizontal Scroll) - Restored previous centered design but kept stickiness */}
        <div className="lg:hidden sticky top-28 z-[60] flex justify-center py-4 px-2 mb-10 bg-transparent">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-2xl border border-white/50 p-1.5 shadow-xl rounded-full overflow-x-auto no-scrollbar max-w-full">
            <div className="flex items-center space-x-1 whitespace-nowrap">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                const theme = TAB_THEMES[tab.id];
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all duration-500 relative ${isActive ? "text-white" : "text-gray-500"}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabMobile"
                        className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} z-0 rounded-full`}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Sidebar Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className={`lg:sticky lg:top-32 transition-all duration-500 space-y-4`}>
              {/* Mobile version remains as a horizontal scroll or grid, but for desktop we want vertical */}
              <div className="hidden lg:flex flex-col bg-white/60 backdrop-blur-3xl border border-white/50 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-[2.5rem]">
                <div className="flex flex-col space-y-2">
                  {TABS.map((tab) => {
                    const isActive = activeTab === tab.id;
                    const theme = TAB_THEMES[tab.id];
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`group relative flex items-center gap-4 px-6 py-5 rounded-[2rem] font-bold text-sm uppercase tracking-widest transition-all duration-500 overflow-hidden ${isActive
                          ? "text-white shadow-lg"
                          : "text-gray-500 hover:text-gray-900 hover:bg-gray-50/50"
                          }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeTabDesktop"
                            className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} z-0`}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}

                        <div className={`relative z-10 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500 ${isActive ? "bg-white/20" : theme.lightBg + " " + theme.text}`}>
                          <span className="text-lg">
                            {tab.id === 'setup' ? '🏢' : tab.id === 'employee' ? '👥' : tab.id === 'payroll' ? '💰' : tab.id === 'reporting' ? '📊' : tab.id === 'analytics' ? '📈' : '🔐'}
                          </span>
                        </div>

                        <span className="relative z-10 flex-1 text-left">{tab.label}</span>

                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="relative z-10 w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>


            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* 3. Module Dashboard Header */}
                <section className="pt-4 pb-12">
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
                    <div className="max-w-2xl">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] mb-6 ${TAB_THEMES[activeTab].lightBg} ${TAB_THEMES[activeTab].text} border-white/50 shadow-sm`}
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
                        className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] mb-4 tracking-tighter uppercase"
                      >
                        {activeContent.title}
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-base text-gray-500 font-medium leading-relaxed max-w-xl"
                      >
                        {activeContent.description}
                      </motion.p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="press-illusion-btn-orange w-full sm:w-auto sm:min-w-[240px] px-8 py-4 font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3"
                      >
                        Get Started Free
                      </button>
                    </motion.div>
                  </div>

                  {/* 4. Primary Product Visual */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative mb-12"
                  >
                    <div className="relative z-10 p-2 bg-white rounded-[2rem] border border-gray-100 shadow-xl cursor-pointer group overflow-hidden" onClick={() => setSelectedImage(activeContent.image)}>
                      <div className="rounded-[1.5rem] overflow-hidden relative" style={{ aspectRatio: '1.8 / 1' }}>
                        <Image
                          src={activeContent.image}
                          alt={activeContent.title}
                          fill
                          priority
                          unoptimized
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5 backdrop-blur-[2px]">
                        <div className={`bg-white/90 backdrop-blur-sm ${TAB_THEMES[activeTab].text} p-3 rounded-full shadow-2xl`}>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* 5. Feature Highlights Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activeContent.features.map((f, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className={`flex items-center gap-4 p-5 rounded-[24px] bg-white border border-gray-100 ${TAB_THEMES[activeTab].hoverBorder} transition-all group shadow-sm hover:shadow-lg`}
                      >
                        <div className={`w-8 h-8 rounded-full ${TAB_THEMES[activeTab].lightBg} flex items-center justify-center ${TAB_THEMES[activeTab].text} transition-colors flex-shrink-0 shadow-inner aspect-square`}>
                          <span className="text-xs font-black">✓</span>
                        </div>
                        <span className="text-[11px] font-black text-gray-700 leading-tight uppercase tracking-tight">{f}</span>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* 5. Feature Spotlight Section Integrated into Tab Content */}
                <section className="pb-16">
                  <div className="relative rounded-[3rem] bg-white p-8 lg:p-12 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] overflow-hidden">
                    <div className="flex flex-col items-start text-left">
                      <div className={`w-12 h-1 ${TAB_THEMES[activeTab].bg} rounded-full mb-6`}></div>
                      <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Deep Dive: {activeContent.title}</h2>
                      <p className="text-base lg:text-lg text-gray-500 mb-10 font-medium leading-relaxed max-w-2xl">{activeContent.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12 w-full">
                        {activeContent.features.map((f, i) => (
                          <div key={i} className={`flex items-center gap-4 p-4 rounded-[20px] bg-gray-50/50 border border-transparent ${TAB_THEMES[activeTab].hoverBorder} transition-all group hover:bg-white hover:shadow-md`}>
                            <div className={`w-7 h-7 rounded-full ${TAB_THEMES[activeTab].lightBg} flex items-center justify-center ${TAB_THEMES[activeTab].text} group-hover:${TAB_THEMES[activeTab].bg} group-hover:text-white transition-colors flex-shrink-0 aspect-square shadow-inner`}>
                              <span className="text-[10px] font-black">✓</span>
                            </div>
                            <span className="text-[11px] font-black text-gray-600 group-hover:text-gray-900 uppercase tracking-tight leading-tight">{f}</span>
                          </div>
                        ))}
                      </div>

                      <div className="relative w-full cursor-pointer group" onClick={() => setSelectedImage(activeContent.image)}>
                        <div className={`absolute -inset-10 ${TAB_THEMES[activeTab].bg}/5 blur-[80px] rounded-full`}></div>
                        <div className="relative z-10 rounded-2xl shadow-xl border border-white overflow-hidden w-full" style={{ aspectRatio: '2.4 / 1' }}>
                          <Image
                            src={activeContent.image}
                            alt={activeContent.title}
                            fill
                            unoptimized
                            className="object-cover group-hover:scale-105 transition-all duration-700"
                          />
                        </div>
                        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className={`bg-white/90 backdrop-blur-sm ${TAB_THEMES[activeTab].text} p-4 rounded-full shadow-xl`}>
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </motion.div>
            </AnimatePresence>

            {/* Static Content (Section 4, 6, 7) */}
            {/* These sections are outside AnimatePresence so they don't flash on tab change, but scroll alongside */}

            {/* 4. The "Broken HR" Modern Section */}
            <section className="relative py-16 bg-white overflow-hidden border-y border-gray-100 rounded-[3rem] mb-16">
              <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
              </div>
              <div className="relative z-10 px-4 md:px-12">
                <div className="flex flex-col mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 font-bold text-xs mb-6 w-fit uppercase tracking-widest">
                    The Problem
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tighter uppercase">
                    Traditional HR <br />
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 py-2">Is Broken.</span>
                  </h2>
                  <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-xl uppercase tracking-tight">Organizations are stuck with outdated systems that waste time and frustrate employees.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Endless Paperwork", icon: "📄", desc: "HR spends more time on forms than people.", color: "rose" },
                    { title: "Disconnected Apps", icon: "🔌", desc: "Messy data spread across too many places.", color: "violet" },
                    { title: "Frustrated Workers", icon: "😠", desc: "Hard-to-use software ruins productivity.", color: "amber" },
                    { title: "Risky Security", icon: "🔓", desc: "Old ways leave you open to legal threats.", color: "slate" }
                  ].map((item, idx) => (
                    <div key={idx} className="group p-8 rounded-[32px] border border-gray-100 hover:shadow-xl transition-all duration-500 bg-white">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-${item.color}-50 text-${item.color}-600 font-bold text-2xl`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tighter">{item.title}</h3>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-tight">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. Complete HR Suite Section */}
            <section className="py-16 bg-white relative overflow-hidden border border-gray-100 rounded-[3rem]">
              <div className="px-4 md:px-12">
                <div className="mb-16">
                  <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tighter uppercase">Complete <span className={TAB_THEMES[activeTab].text}>HR Suite</span></h2>
                  <p className="text-gray-500 font-bold text-lg uppercase tracking-tight">Streamline operations with one platform.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {SECTION_6_FEATURES.slice(0, 4).map((card, idx) => (
                    <div key={idx} className="p-8 rounded-[40px] bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500">
                      <h3 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-tighter">{card.title}</h3>
                      <div className="space-y-3">
                        {card.items.slice(0, 3).map((item, j) => (
                          <div key={j} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center text-[10px] font-black text-blue-600">✓</div>
                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 7. Final CTA Section */}
            <section className="py-16">
              <div className="relative rounded-[3rem] bg-gradient-to-br from-white to-gray-50 py-16 px-8 lg:px-16 overflow-hidden text-center shadow-[0_40px_80px_rgba(0,0,0,0.05)] border border-gray-100">
                <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${TAB_THEMES[activeTab].gradient} opacity-5 blur-[100px]`}></div>

                <div className="relative z-10 flex flex-col items-center">
                  <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tighter uppercase leading-[1.1]">Build the <br /> future today.</h2>
                  <p className="text-gray-500 mb-10 max-w-xl font-bold uppercase tracking-widest text-xs">Join 10,000+ teams transforming their workplace.</p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="press-illusion-btn-orange w-full sm:w-auto sm:min-w-[280px] px-12 py-6 font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3"
                  >
                    Request Free Access
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem="HRMS Software"
        allItems={allProducts}
      />

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-auto flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-16 right-0 md:-right-12 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 hover:rotate-90 z-[1001]"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="relative w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20" style={{ aspectRatio: '1.4 / 1' }}>
                <Image
                  src={selectedImage}
                  alt="Enlarged view"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />
              </div>

              <div className="mt-6 text-white text-center">
                <h3 className="text-2xl font-black uppercase tracking-widest">{activeContent.title}</h3>
                <p className="text-white/60 font-medium mt-1 uppercase text-sm tracking-widest">{activeContent.subtitle}</p>
              </div>
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



