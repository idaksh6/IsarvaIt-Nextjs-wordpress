"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ContactFormModal from "../../components/ContactFormModal";

const PRIMARY_BLUE = "#0066FF";
const TEXT_DARK = "#1A1A1A";
const TEXT_GRAY = "#4D4D4D";

const TABS = [
  { id: "core-hr", label: "CORE HR" },
  { id: "hr-software", label: "HR Software" },
  { id: "ess-portal", label: "ESS Portal" },
  { id: "employee-profiles", label: "Employee Profiles" },
  { id: "documents", label: "Documents" },
  { id: "helpdesk", label: "Helpdesk" },
  { id: "pulse-surveys", label: "Pulse Surveys" },
  { id: "hr-analytics", label: "HR Analytics" },
];

const TAB_CONTENT = {
  "core-hr": {
    title: "Smart Company Setup",
    subtitle: "Customize your organization structure with ease",
    description: "Easily customize your departments, roles, and office locations to fit your business perfectly—no coding required.",
    image: "/products/hrms/Personnel-details.jpg",
    features: [
      "Master setup for Salary components",
      "Department management",
      "Designation configuration",
      "Role-based access controls",
      "Employee status tracking",
      "Employee document types"
    ]
  },
  "hr-software": {
    title: "Automated Payroll Processing",
    subtitle: "Process payroll with confidence and accuracy",
    description: "Our automated engine handles multiple locations seamlessly, generates bank-ready formats, and ensures compliance with EPF and ESIC.",
    image: "/products/hrms/Payroll-management.jpg",
    features: [
      "Multi location payroll processing",
      "Override salary components",
      "Add/update employee advances",
      "Comparison view (Previous vs Current)",
      "Bank ready formats for processing",
      "EPF and ESIC upload-ready formats",
      "One-click salary slip sending"
    ]
  },
  "ess-portal": {
    title: "Employee Self-Service Portal",
    subtitle: "Empower your workforce with self-service tools",
    description: "Enable employees to apply for leaves, view balances, and manage their profiles through an intuitive portal with real-time sync.",
    image: "/products/Emplyee self Service.png",
    features: [
      "Apply for single or multiple-day leave",
      "Half-day leave customization",
      "Automatic holiday exclusion",
      "Real-time leave balance tracking",
      "Streamlined approval workflow",
      "Automated email notifications"
    ]
  },
  "employee-profiles": {
    title: "Centralized Employee Management",
    subtitle: "360-degree view of your workforce",
    description: "Create a comprehensive employee database with organizational mapping and role-based access controls for seamless management.",
    image: "/products/hrms/Personnel-details.jpg",
    features: [
      "Role-based access and permissions",
      "Document management and vault",
      "Comprehensive personal details",
      "Flexible salary structures",
      "Level-based weekoff mapping",
      "Auto-generated HR documents"
    ]
  },
  "documents": {
    title: "Document Management & Vault",
    subtitle: "Secure and organized document storage",
    description: "Manage employee documents, company policies, and statutory records in a secure, centralized vault with controlled access.",
    image: "/products/Security.png",
    features: [
      "Secure document vault",
      "Expiry tracking and alerts",
      "Category-based organization",
      "Bulk document upload",
      "Role-based permissions",
      "Audit trail for access"
    ]
  },
  "helpdesk": {
    title: "Internal HR Helpdesk",
    subtitle: "Streamline employee queries and support",
    description: "A dedicated space for employees to raise queries, track tickets, and receive resolutions from the HR team efficiently.",
    image: "/products/Emplyee self Service.png",
    features: [
      "Ticket-based query system",
      "SLA-based response tracking",
      "Category-wise ticket routing",
      "Knowledge base for FAQs",
      "Real-time status notifications",
      "HR response dashboard"
    ]
  },
  "pulse-surveys": {
    title: "Employee Pulse Surveys",
    subtitle: "Listen to your employees in real-time",
    description: "Gather actionable insights through quick pulse surveys and feedback loops to improve workplace culture and engagement.",
    image: "/products/hrms/Reporting-&-analytics.jpg",
    features: [
      "Custom survey creation",
      "Anonymous feedback options",
      "Real-time sentiment analysis",
      "Department-wise insights",
      "Participation tracking",
      "Automated survey scheduling"
    ]
  },
  "hr-analytics": {
    title: "HR Analytics & Insights",
    subtitle: "Data-driven decisions for your people",
    description: "Unlock powerful workforce insights with real-time dashboards covering attendance, payroll costs, and department performance.",
    image: "/products/hrms/Reporting-&-analytics.jpg",
    features: [
      "Real-time HR dashboard",
      "Attendance & leave analytics",
      "Payroll cost analysis",
      "Department-wise analytics",
      "Quick note calendar",
      "Custom reporting engine"
    ]
  }
};

export default function ProductDetailPremiumHRMSStaging({
  product,
  relatedProducts,
  allProducts,
}) {
  const [activeTab, setActiveTab] = useState("hr-software");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeContent = TAB_CONTENT[activeTab] || TAB_CONTENT["hr-software"];

  return (
    <div className="relative font-sans selection:bg-blue-100 selection:text-blue-900 bg-white">
      {/* 1. Global Hero Background (Matching Contact Page Style) */}
      <div className="absolute top-0 left-0 w-full h-[1000px] bg-gradient-to-b from-[#d4f4dd] via-[#defae4] to-white z-0 pointer-events-none" />
      
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" style={{ contain: "layout style paint" }}>
        <div className="absolute inset-0 bg-mesh-green opacity-40"></div>
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-emerald-200/40 blur-[80px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-200/30 blur-[80px] rounded-full"></div>
        <div className="hero-noise-overlay opacity-[0.12]"></div>
      </div>

      {/* 2. Floating Premium Tab Bar (Sticky for entire page) */}
      <div className={`sticky ${isScrolled ? "top-[82px]" : "top-[98px]"} z-[99] flex justify-center py-6 px-4 pointer-events-none transition-all duration-300`}>
        <div className="inline-flex items-center bg-white border border-gray-100 p-1.5 shadow-2xl rounded-full transition-all pointer-events-auto">
          <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide max-w-[90vw] px-2 py-2">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 relative whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white shadow-lg scale-105 z-10"
                    : "text-gray-600 hover:text-[#0066FF] hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Hero Section Content (Restored to Grid Layout) */}
      <section className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 overflow-hidden z-10">
        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat"
          }}
        ></div>

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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#0066FF] text-[10px] font-black uppercase tracking-[0.2em] mb-8"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#7000FF]">
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
                  className="flex flex-wrap gap-5 items-center"
                >
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn-premium-orange !py-6 !px-12 !text-lg !rounded-2xl"
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
                <div className="relative z-10 p-4 bg-gradient-to-br from-white to-gray-50 rounded-[56px] shadow-2xl border border-white backdrop-blur-sm">
                  <div className="rounded-[40px] overflow-hidden border border-gray-100 shadow-inner">
                    <img
                      src={activeContent.image}
                      alt={activeContent.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                {/* Floating Stats UI */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
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

        {/* Dynamic Background Accents */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 20, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-[10%] -left-[5%] w-[50%] h-[50%] bg-blue-50/60 rounded-full blur-[120px]"
          ></motion.div>
          <motion.div 
            animate={{ scale: [1, 1.1, 1], x: [0, -30, 0], y: [0, -20, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-[20%] -right-[5%] w-[40%] h-[40%] bg-purple-50/40 rounded-full blur-[100px]"
          ></motion.div>
        </div>
      </section>

      {/* 4. The "Broken HR" Modern Section */}
      <section className="relative pt-16 pb-24 bg-white border-y border-gray-100 overflow-hidden">
        {/* Subtle Mesh Gradient for this section */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-50/30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-purple-50/20 rounded-full blur-[80px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">Traditional HR <br /> Is Broken</h2>
              <p className="text-lg text-gray-500 font-medium">Outdated systems create friction, burn time, and kill culture. We rebuilt it with a focus on speed and intuition.</p>
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
              { title: "Endless Paperwork", icon: "📄", desc: "Ditch the folders. Go fully digital in seconds." },
              { title: "Disconnected Apps", icon: "🔌", desc: "One API to rule all your data points." },
              { title: "Frustrated Employees", icon: "😫", desc: "Software that people actually love using." },
              { title: "Risky Security", icon: "🛡️", desc: "Military-grade encryption for every byte." }
            ].map((item, idx) => (
              <div key={idx} className="group p-10 rounded-[40px] bg-white border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
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
                
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-600/5 blur-3xl rounded-full"></div>
                  <img
                    src={activeContent.image}
                    alt={activeContent.title}
                    className="relative z-10 rounded-[32px] shadow-2xl border border-white"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 6. Infinite Advanced Slider */}
      <section className="py-24 bg-gray-50 overflow-hidden border-y border-gray-100">
        <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">The Unified Ecosystem</h2>
          <p className="text-gray-500 font-medium">Powering your entire employee lifecycle in one motion.</p>
        </div>

        <motion.div 
          animate={{ x: [0, -2200] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 px-4"
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-8">
              {SECTION_6_FEATURES.map((card, idx) => (
                <div key={idx} className="w-[420px] flex-shrink-0">
                  <div className="bg-white p-12 rounded-[48px] border border-gray-100 h-full hover:shadow-2xl hover:border-blue-100 transition-all duration-500 group">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">{card.title}</h3>
                    <p className="text-sm text-gray-500 mb-8 leading-relaxed font-medium">{card.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {card.items.slice(0, 2).map((item, j) => (
                        <span key={j} className="px-3 py-1 rounded-lg bg-gray-100 text-[10px] font-black text-gray-400 uppercase tracking-tighter">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* 7. Modern Light Gradient CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[72px] bg-gray-50 p-12 lg:p-32 overflow-hidden text-center border border-gray-100 shadow-inner">
            {/* Dynamic Light Gradients */}
            <div className="absolute inset-0 z-0">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-100/30 rounded-full blur-[120px]"
              ></motion.div>
              <motion.div 
                animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-purple-100/20 rounded-full blur-[120px]"
              ></motion.div>
            </div>
            
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
    </div>
  );
}

const SECTION_6_FEATURES = [
  {
    title: "Employee Self-Service",
    desc: "Empower employees to apply for leaves, check balances, and update details.",
    items: ["Half-day customization", "Automatic holiday exclusion", "Email notifications"]
  },
  {
    title: "Shifts & Duty Rosters",
    desc: "Efficiently manage employee shifts with flexible scheduling and bulk assignment.",
    items: ["Flexible scheduling", "Bulk shift assignment", "Workforce planning"]
  },
  {
    title: "Attendance Processing",
    desc: "Finalize attendance with accuracy and seamless payroll integration.",
    items: ["Save & Lock feature", "Manual updates support", "API Payroll integration"]
  },
  {
    title: "Biometric Connections",
    desc: "Real-time attendance tracking via Timestation API and manual uploads.",
    items: ["Automated syncing", "Manual biometric upload", "OT calculation"]
  },
  {
    title: "Leave Policy Management",
    desc: "Create and manage multiple leave policies with department-wise configuration.",
    items: ["Multi-level approval", "Department-wise setup", "Accrual rules"]
  },
  {
    title: "Smart Company Setup",
    desc: "Easily customize departments, roles, and locations with no coding.",
    items: ["Custom designations", "Role management", "Office locations"]
  }
];
