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
      "Roles & Permissions",
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
      "Role-based access & permissions",
      "Document vault management",
      "360° Employee Profiles",
      "Auto-Generated HR Letters",
      "Week-off & Leave Mapping",
      "Employee Self-Service"
    ]
  },
  "payroll": {
    title: "Automated Payroll Processing",
    subtitle: "Process payroll with confidence and accuracy",
    description: "Process payroll with confidence using our automated engine, designed to handle multiple locations seamlessly. It also generates bank-ready formats for salary processing and provides portal upload-ready formats for EPF and ESIC.",
    image: "/products/hrms/Payroll-management.jpg",
    features: [
      "Multi-Location Processing",
      "Override Salary Components",
      "Employee Advances/Loans",
      "Comparison Dashboards",
      "Bank Ready Formats",
      "EPF & ESIC Portal Ready"
    ]
  },
  "reporting": {
    title: "Robust Reporting",
    subtitle: "Analyze and grow your organization",
    description: "We offer different types of reports that helps organization to analyse their workforce performance and statutory compliance.",
    image: "/products/hrms/Reporting-&-analytics.jpg",
    features: [
      "Payroll Reports",
      "Payroll Analytics",
      "Leave Insights",
      "LOP Reports",
      "Attendance Analysis",
      "Comparison Reports"
    ]
  },
  "analytics": {
    title: "HR Analytics & Insights",
    subtitle: "Data-driven decisions for your people",
    description: "HR Analytics & Insights delivers real-time dashboards and actionable workforce data to help you make smarter HR decisions.",
    image: "/products/hrms/Reporting-&-analytics.jpg",
    features: [
      "Real-Time Dashboards",
      "Attendance Insights",
      "Payroll & Cost Analysis",
      "Department Analytics",
      "Quick Note HR Calendar",
      "Headcount Tracking"
    ]
  },
  "ess": {
    title: "Employee Self-Service Portal",
    subtitle: "Empower your workforce with self-service tools",
    description: "Empower employees to easily apply for leaves through a self-service portal with accurate calculations and real-time leave availability.",
    image: "/products/Emplyee self Service.png",
    features: [
      "Single/Multi-Day Leave",
      "Half-Day Customization",
      "Auto Holiday Exclusion",
      "Real-Time Leave Balance",
      "Approval Workflows",
      "Email Notifications"
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

export default function ProductDetailPremiumHRMS({
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
      const offset = 160; // Space for sticky header (102px) + tabs (~58px)
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

      <div className="relative z-40 pt-24 lg:pt-48 pb-12 lg:pb-32">
        {/* Mobile View (Horizontal Scroll) - Full-width white background bar with constrained content */}
        <div className="lg:hidden sticky top-[102px] z-[60] bg-white border-b border-gray-100 shadow-sm w-full overflow-hidden">
          <div
            className="max-w-7xl mx-auto px-6 py-2 overflow-x-auto no-scrollbar w-full"
            style={{ scrollPaddingLeft: '1.5rem', scrollPaddingRight: '1.5rem' }}
          >
            <div className="flex items-center space-x-1 whitespace-nowrap">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                const theme = TAB_THEMES[tab.id];
                return (
                  <button
                    key={tab.id}
                    onClick={(e) => {
                      setActiveTab(tab.id);
                      e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
                    }}
                    className={`px-5 py-2.5 rounded-full font-bold text-[12px] uppercase tracking-wider transition-all duration-300 relative ${isActive ? "text-white" : "text-gray-400"}`}
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

        <div ref={contentTopRef} className="w-full lg:container mx-auto px-6 pt-10 lg:pt-0">

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
                  <div className="flex flex-col lg:flex-col justify-between gap-6 mb-8">
                    <div className="max-w-none">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[14px] font-black uppercase tracking-[0.2em] mb-6 ${TAB_THEMES[activeTab].lightBg} ${TAB_THEMES[activeTab].text} border-white/50 shadow-sm`}
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
                        className="text-base text-gray-500 font-medium leading-relaxed max-w-none"
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
                        className="press-illusion-btn-orange w-full sm:w-auto sm:min-w-[240px] px-8 py-4 font-black uppercase tracking-[0.2em] text-[14px] flex items-center justify-center gap-3"
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
                        <span className="text-[14px] font-black text-gray-700 leading-tight uppercase tracking-tight">{f}</span>
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
                      <p className="text-base lg:text-lg text-gray-500 mb-10 font-medium leading-relaxed ">{activeContent.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12 w-full">
                        {activeContent.features.map((f, i) => (
                          <div key={i} className={`flex items-center gap-4 p-4 rounded-[20px] bg-gray-50/50 border border-transparent ${TAB_THEMES[activeTab].hoverBorder} transition-all group hover:bg-white hover:shadow-md`}>
                            <div className={`w-7 h-7 rounded-full ${TAB_THEMES[activeTab].lightBg} flex items-center justify-center ${TAB_THEMES[activeTab].text} group-hover:${TAB_THEMES[activeTab].bg} group-hover:text-white transition-colors flex-shrink-0 aspect-square shadow-inner`}>
                              <span className="text-[10px] font-black">✓</span>
                            </div>
                            <span className="text-[14px] font-black text-gray-600 group-hover:text-gray-900 uppercase tracking-tight leading-tight">{f}</span>
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 font-bold text-[14px] mb-6 w-fit uppercase tracking-widest">
                    The Problem
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tighter uppercase">
                    Traditional HR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 py-2">Is Broken.</span>
                  </h2>
                  <p className="text-lg text-gray-500 font-medium leading-relaxed  uppercase tracking-tight">Organizations are stuck with outdated systems that waste time, frustrate employees, and hold back growth. It's time for a change.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Endless Paperwork", icon: "📄", desc: "HR spends more time on forms than people.", color: "rose" },
                    { title: "Disconnected Apps", icon: "🔌", desc: "Messy data spread across too many places.", color: "violet" },
                    { title: "Frustrated Workers", icon: "😠", desc: "Hard-to-use software ruins productivity.", color: "amber" },
                    { title: "Risky Security", icon: "🔓", desc: "Old ways leave you open to legal threats.", color: "slate" }
                  ].map((item, idx) => (
                    <div key={idx} className="group p-8 rounded-[32px] border border-gray-100 hover:shadow-xl transition-all duration-500 bg-white flex flex-col items-center md:items-start text-center md:text-left">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-${item.color}-50 text-${item.color}-600 font-bold text-2xl`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tighter">{item.title}</h3>
                      <p className="text-[14px] text-gray-500 font-bold uppercase tracking-tight">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. Complete HR Suite Section */}
            <section className="py-16 bg-white relative overflow-hidden border border-gray-100 rounded-[3rem] mb-16">
              <div className="px-4 md:px-12">
                <div className="mb-16">
                  <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tighter uppercase">Complete HR Suite – <span className={TAB_THEMES[activeTab].text}>All-in-One HRMS Features</span></h2>
                  <p className="text-gray-500 font-bold text-lg uppercase tracking-tight">Streamline and manage your entire HR operations with a powerful, integrated HRMS platform designed for modern businesses.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {SECTION_6_FEATURES.map((card, idx) => (
                    <div key={idx} className="p-8 rounded-[40px] bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500">
                      <h3 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-tighter">{card.title}</h3>
                      <div className="space-y-3">
                        {card.items.slice(0, 3).map((item, j) => (
                          <div key={j} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center text-[10px] font-black text-blue-600">✓</div>
                            <span className="text-[14px] font-black text-gray-500 uppercase tracking-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 7. Final CTA Section */}
            <section className="pb-4 lg:py-16">
              <div className="relative rounded-[3rem] bg-gradient-to-br from-white to-gray-50 py-16 px-8 lg:px-16 overflow-hidden text-center shadow-[0_40px_80px_rgba(0,0,0,0.05)] border border-gray-100">
                <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${TAB_THEMES[activeTab].gradient} opacity-5 blur-[100px]`}></div>

                <div className="relative z-10 flex flex-col items-center">
                  <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tighter uppercase leading-[1.1]">Build the <br /> future today.</h2>
                  <p className="text-gray-500 mb-10 max-w-xl font-bold uppercase tracking-widest text-[14px]">Join 10,000+ teams transforming their workplace.</p>
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
      </div>

      <HrmsFeatureSection />

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
                <p className="text-white/60 font-bold mt-1 uppercase text-sm tracking-widest">{activeContent.subtitle}</p>
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
      "Duty roster management",
      "Bulk assignment of shifts",
      "Date range allocation",
      "Scheduling efficiency"
    ]
  },
  {
    title: "Attendance Processing",
    desc: "Easily manage and finalize employee attendance with accurate tracking and seamless integration with payroll systems.",
    items: [
      "Admin attendance management",
      "Manual status updates",
      "Save & Lock feature",
      "Seamless API integration"
    ]
  },
  {
    title: "Biometric Connections",
    desc: "Seamlessly manage employee attendance with biometric integration via the Timestation API, supporting automated syncing.",
    items: [
      "Timestation API Integration",
      "Manual data upload option",
      "Late entry/OT calculation",
      "Centralized management"
    ]
  },
  {
    title: "Public Holiday Master Management",
    desc: "Easily configure and manage public holidays with flexible options, including department-wise customization to suit organizational needs.",
    items: [
      "Admin holiday control",
      "Dept-wise configuration",
      "Restrict eligibility",
      "Flexible policy setup"
    ]
  },
  {
    title: "Leave Policy Management",
    desc: "Easily create and manage multiple leave policies by assigning leave types, days, and departments, ensuring employees can only apply for leaves applicable to them.",
    items: [
      "Multiple policy creation",
      "Leave type assignment",
      "Dept-wise mapping",
      "Multi-level approvals"
    ]
  },
  {
    title: "Other Features",
    desc: "Isarva HRMS is not limited it has many more useful features",
    items: [
      "Activity security logger",
      "OT & Incentive calcs",
      "Hold/Release salary",
      "Full & Final settlement"
    ]
  }
];

/* ─────────────────────────────────────────────────────────────
   HRMS FEATURE DATA (PORTED FROM LIVE)
───────────────────────────────────────────────────────────── */
const hrmsFeatures = [
  {
    id: "personnel",
    label: "Personnel Management",
    icon: "👤",
    color: "#4F46E5",
    desc: "Centralise every employee record in one place. Manage profiles, org charts, documents, and HR workflows with precision and ease.",
    placeholder: "PM",
    image: "/products/hrms/Personnel-details.jpg",
  },
  {
    id: "attendance",
    label: "Time & Attendance",
    icon: "⏰",
    color: "#0EA5E9",
    desc: "Track work hours accurately with biometric, mobile, and web-based check-in. Gain real-time visibility into team availability.",
    placeholder: "TA",
    image: "/products/Time and Attendence.png",
  },
  {
    id: "shift",
    label: "Shift Scheduling",
    icon: "📅",
    color: "#10B981",
    desc: "Plan, publish, and manage employee shifts with a drag-and-drop visual scheduler. Eliminate conflicts and last-minute gaps.",
    placeholder: "SS",
    image: "/products/hrms/Shift-scheduling.jpg",
  },
  {
    id: "leave",
    label: "Leave Management",
    icon: "🌴",
    color: "#F59E0B",
    desc: "Automate leave requests, multi-level approvals, and policy enforcement. Employees get instant visibility into their leave balance.",
    placeholder: "LM",
    image: "/products/hrms/Leave-management.jpg",
  },
  {
    id: "security",
    label: "Security & Access Control",
    icon: "🔒",
    color: "#EF4444",
    desc: "Define granular role-based permissions, enforce multi-factor authentication, and maintain complete audit trails for compliance.",
    placeholder: "SC",
    image: "/products/Security.png",
  },
  {
    id: "analytics",
    label: "Reporting & Analytics",
    icon: "📊",
    color: "#8B5CF6",
    desc: "Unlock data-driven HR insights with pre-built dashboards and custom reports covering headcount, payroll, attrition, and more.",
    placeholder: "RA",
    image: "/products/hrms/Reporting-&-analytics.jpg",
  },
  {
    id: "ess",
    label: "Employee Self-Service Portal",
    icon: "💼",
    color: "#06B6D4",
    desc: "Empower employees to manage their own information, submit requests, access payslips, and track approvals — all in a clean portal.",
    placeholder: "ES",
    image: "/products/Emplyee self Service.png",
  },
  {
    id: "payroll",
    label: "Payroll Management System",
    icon: "💰",
    color: "#22C55E",
    desc: "Ensure accurate, compliant, and on-time salary processing. Handle deductions, taxes, and statutory filings with zero manual effort.",
    placeholder: "PY",
    image: "/products/hrms/Payroll-management.jpg",
  },
];

/* ─────────────────────────────────────────────────────────────
   PLACEHOLDER IMAGE COMPONENT
───────────────────────────────────────────────────────────── */
function FeaturePlaceholder({ feature }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center rounded-2xl overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${feature.color}10 0%, ${feature.color}20 100%)`,
      }}
    >
      <img
        src={feature.image}
        alt={feature.label}
        className="w-full h-full object-contain"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   HRMS FEATURE ORBIT SECTION — Production-Grade (EXACT LIVE VERSION)
──────────────────────────────────────────────────────────── */
function HrmsFeatureSection() {
  const [activeId, setActiveId] = useState("personnel");
  const [mobileOpenId, setMobileOpenId] = useState("personnel");

  const leftFeatures = hrmsFeatures.slice(0, Math.ceil(hrmsFeatures.length / 2));
  const rightFeatures = hrmsFeatures.slice(Math.ceil(hrmsFeatures.length / 2));
  const activeFeature = hrmsFeatures.find((f) => f.id === activeId);

  return (
    <section className="py-10 lg:py-20 overflow-hidden bg-[#F7F7F7]">
      <div className="w-full lg:container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="block text-[14px] font-black text-[#22C55E] tracking-[0.28em] uppercase mb-2.5">
            KEY FEATURES
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0a0a0a] leading-[1] mb-3.5">
            Key Features Of <span className="text-[#22C55E]">HRMS</span> Software
          </h2>
          <p className="text-[#6b7280] max-w-[520px] mx-auto text-[15px] leading-relaxed">
            HRMS & Payroll software automates and streamlines every HR function
            — from personnel management to payroll — delivering a highly
            time-efficient experience.
          </p>
        </div>

        {/* ── DESKTOP ORBIT (xl and above) ── */}
        <div className="hidden xl:block">
          <div className="relative h-[605px] mx-auto xl:w-[80%] lg:w-full">
            {/* Green arc ellipse */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[90%] rounded-full border-[1.5px] pointer-events-none z-0"
              style={{ borderColor: 'rgba(34, 197, 94, 0.42)' }}
            />

            {/* Left column */}
            <div className="absolute -left-24 top-1/2 -translate-y-1/2 flex flex-col items-end gap-10 z-10 w-[220px]">
              {leftFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-4 pr-4.5 text-[14px] font-semibold whitespace-nowrap ${activeId === feature.id
                    ? "bg-green-50 border-green-600 text-gray-800 shadow-[0_4px_16px_rgba(34,197,94,0.15)]"
                    : "border-green-300 text-gray-800 hover:border-green-500 hover:shadow-md"
                    }`}
                >
                  <span className="text-sm leading-none">{feature.icon}</span>
                  {feature.label}
                  {activeId === feature.id && (
                    <span className="absolute -right-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[7px] border-l-green-900" />
                  )}
                </button>
              ))}
            </div>

            {/* Center card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 2xl:w-[72%] lg:w-[70%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full h-full rounded-xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.15)]"
                >
                  <img
                    src={activeFeature.image}
                    alt={activeFeature.label}
                    className="w-full h-full object-contain bg-white"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right column */}
            <div className="absolute -right-24 top-1/2 -translate-y-1/2 flex flex-col items-start gap-10 z-10 w-[220px]">
              {rightFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`relative bg-white border-[1.5px] rounded-full transition-all duration-200 ease-in-out cursor-pointer flex items-center gap-2 py-2 px-4 pr-4.5 text-[14px] font-semibold whitespace-nowrap ${activeId === feature.id
                    ? "bg-green-50 border-green-600 text-gray-800 shadow-[0_4px_16px_rgba(34,197,94,0.15)]"
                    : "border-green-300 text-gray-800 hover:border-green-500 hover:shadow-md"
                    }`}
                >
                  {feature.label}
                  <span className="text-sm leading-none">{feature.icon}</span>
                  {activeId === feature.id && (
                    <span className="absolute -left-[7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[7px] border-r-green-900" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mt-3 pb-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeId + "-d"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.22 }}
                className="text-center text-[#6b7280] max-w-[500px] mx-auto text-sm leading-relaxed"
              >
                {activeFeature.desc}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* ── TABLET LAYOUT (lg to xl) ── */}
        <div className="hidden lg:block xl:hidden">
          {/* Navigation buttons on top */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {hrmsFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`flex items-center gap-2 py-2.5 px-5 rounded-lg font-semibold text-sm transition-all duration-200 ${activeId === feature.id
                    ? "bg-[#22C55E] text-white shadow-lg scale-105"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-[#22C55E] hover:shadow-md"
                    }`}
                >
                  <span className="text-base">{feature.icon}</span>
                  <span>{feature.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Center image display */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="rounded-xl overflow-hidden shadow-2xl bg-white"
              >
                <img
                  src={activeFeature.image}
                  alt={activeFeature.label}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Description */}
          <div className="mt-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeId + "-desc"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.22 }}
                className="text-center text-[#6b7280] max-w-[600px] mx-auto text-sm leading-relaxed"
              >
                {activeFeature.desc}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* ── MOBILE ACCORDION ── */}
        <div className="lg:hidden border-t border-gray-200">
          {hrmsFeatures.map((feature) => {
            const isOpen = mobileOpenId === feature.id;
            return (
              <div key={feature.id} className="border-b border-gray-200">
                <button
                  onClick={() => setMobileOpenId(isOpen ? null : feature.id)}
                  className="group w-full flex items-center justify-between p-4 bg-transparent border-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors duration-200 shrink-0"
                      style={{
                        background: isOpen ? feature.color : "#e5e7eb",
                      }}
                    >
                      {feature.icon}
                    </div>
                    <span
                      className={`font-bold text-sm transition-colors ${isOpen ? "text-gray-900" : "text-gray-500"
                        }`}
                    >
                      {feature.label}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200 shrink-0 ${isOpen
                      ? "bg-gray-900 border-gray-900"
                      : "bg-transparent border-gray-300 group-hover:border-gray-400"
                      }`}
                  >
                    <span
                      className={`text-lg font-light leading-none block transition-transform duration-200 ${isOpen ? "text-white rotate-45" : "text-gray-400 group-hover:rotate-45"
                        }`}
                    >
                      +
                    </span>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-1 pb-5">
                        <div className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md mb-3">
                          <img
                            src={feature.image}
                            alt={feature.label}
                            className="w-full h-auto object-contain bg-white"
                          />
                        </div>
                        <p className="text-[#6b7280] text-[14px] leading-relaxed m-0">
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}




