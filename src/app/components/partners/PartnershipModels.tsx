"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const models = [
  {
    id: "web",
    title: "Website Design & Development",
    icon: "🎨",
    subtitle: "Introduce us to clients who need new designs, WordPress solutions, or high-end UI/UX redesigns.",
    idealFor: ["Marketing Consultants", "Advertising Agencies", "Web Designers", "Digital Marketing Agencies", "Freelancers", "Graphic Designers"],
    deliverables: [
      { title: "Standard Solutions", desc: "Custom Website, WordPress Design, CMS Website, Redesign Services" },
      { title: "Targeted Pages", desc: "Landing Pages, One Page Websites, Portfolio & Blog Websites" },
      { title: "UX Focus", desc: "Web UI/UX Design and optional design revision support" }
    ],
    path: [
      { step: "01", label: "Introduce", desc: "Refer clients needing new designs or redesigns" },
      { step: "02", label: "Design", desc: "We handle UI/UX, coding, and CMS architecture" },
      { step: "03", label: "Earn", desc: "10% – 30% referral commissions + volume bonuses" }
    ],
    earn: "10% – 30% Referral Commissions Per Project",
    extras: "White-labelled reports, pitch prototypes (Figma, XD), and additional volume-based performance bonuses.",
  },
  {
    id: "ecommerce",
    title: "E-Commerce / WooCommerce",
    icon: "🛒",
    subtitle: "Identify and refer merchants or brands needing robust online stores or complex inventory integrations.",
    idealFor: ["Retail Advisors", "Digital Marketing Agencies", "Retail Consultants", "E-com Strategists"],
    deliverables: [
      { title: "Retail Tech", desc: "E-Commerce, WooCommerce, and custom bespoke platforms" },
      { title: "Logistics", desc: "Payment gateway, logistics, and inventory/ERP/CRM integrations" },
      { title: "Optimization", desc: "Mobile-first checkout and high-conversion architectures" }
    ],
    path: [
      { step: "01", label: "Identify", desc: "Refer brands needing scalable online sales tools" },
      { step: "02", label: "Build", desc: "We integrate payments, inventory, and logistics" },
      { step: "03", label: "Profit", desc: "Setup commission + recurring hosting/maintenance revenue" }
    ],
    earn: "Setup Commissions + Recurring Hosting & Maintenance Revenue",
    extras: "Technical support during sales calls, POS/Warehouse integration, and fast-launch templates.",
  },
  {
    id: "maintenance",
    title: "Maintenance & Security",
    icon: "🔒",
    subtitle: "Offer managed website care plans and AMC as an add-on to your existing client service portfolio.",
    idealFor: ["IT Providers", "MSPs", "Managed Agencies", "Freelance Developers", "Retail Agents"],
    deliverables: [
      { title: "Care Plans", desc: "Monthly Maintenance Service and Annual Maintenance Contracts (AMC)" },
      { title: "Monitoring", desc: "24/7 Uptime, Security Monitoring, Backups, and Malware Protection" },
      { title: "Performance", desc: "Regular Software/Plugin Updates and Site Performance Optimization" }
    ],
    path: [
      { step: "01", label: "Offer", desc: "Bundle managed care plans with your services" },
      { step: "02", label: "Monitor", desc: "We handle technical updates and security recovery" },
      { step: "03", label: "MRR", desc: "Earn Monthly Recurring Revenue (MRR) per website managed" }
    ],
    earn: "Monthly Recurring Revenue (MRR) per Website Managed",
    extras: "Automated branded reports, malware protection, and accessibility/health check-up services.",
  },
  {
    id: "hrms",
    title: "HRMS Suite Partners",
    icon: "👥",
    subtitle: "Recommend our comprehensive HRMS suite to businesses looking to automate workforce management.",
    idealFor: ["Business Consultants", "Payroll Providers", "HR Outsourcing Firms", "Startup Incubators"],
    deliverables: [
      { title: "Workforce", desc: "Time & Attendance, Leave Management, and Employee Self-Service" },
      { title: "Governance", desc: "Payroll Management with tax deductions and statutory compliance" },
      { title: "Insights", desc: "Data-driven Reporting & Analytics for informed HR decision-making" }
    ],
    path: [
      { step: "01", label: "Recommend", desc: "Identify businesses needing HR automation" },
      { step: "02", label: "Onboard", desc: "Our team handles technical setup and data migration" },
      { step: "03", label: "Reward", desc: "Implementation commissions + ongoing annual renewals" }
    ],
    earn: "High Setup Commissions + Annual Renewal Revenue",
    extras: "Free Demo Sandbox, Technical Onboarding Assistance, and co-branded marketing brochures.",
  },
  {
    id: "crm",
    title: "CRM Partners",
    icon: "📈",
    subtitle: "Connect us with companies struggling to manage sales pipelines, lead tracking, or customer retention.",
    idealFor: ["Sales Coaches", "Marketing Agencies", "Process Consultants", "Lead Gen Experts"],
    deliverables: [
      { title: "Sales Funnel", desc: "Lead Capture, Deal Stages, and Sales Pipeline Management" },
      { title: "Relationship", desc: "Organization / Contact Management for stakeholders and decision makers" },
      { title: "Visibility", desc: "Visual Dashboards, Analytics, and Meeting Calendar synchronization" }
    ],
    path: [
      { step: "01", label: "Connect", desc: "Refer leads needing better pipeline control" },
      { step: "02", label: "Engineer", desc: "We provide high-value sales engineering and demos" },
      { step: "03", label: "Scale", desc: "Per-user commissions + extra on custom integrations" }
    ],
    earn: "Per-User Commissions + Integrated Module Upsells",
    extras: "White-labelled CRM Dashboards, Sales engineering support, and ready-to-use sales funnels.",
  },
  {
    id: "project",
    title: "Project & Support Portal",
    icon: "🛠️",
    subtitle: "Refer businesses needing a structured environment to manage tasks, tickets, and renewals.",
    idealFor: ["IT MSPs", "Project Consultants", "Operations Agencies", "Legal/Service Firms"],
    deliverables: [
      { title: "Execution", desc: "Project and Task Management with worked hours tracking" },
      { title: "Support", desc: "Ticketing systems for customer issues and internal requests" },
      { title: "Infrastructure", desc: "Renewal Automation, Real-time Alerts, and Role-based Security" }
    ],
    path: [
      { step: "01", label: "Refer", desc: "Identify teams needing structured task/ticket flows" },
      { step: "02", label: "Deploy", desc: "We configure managed support plans and notifications" },
      { step: "03", label: "Retain", desc: "MRR for managed support + large onboarding bonuses" }
    ],
    earn: "Monthly Support MRR + Implementation Onboarding Bonuses",
    extras: "Managed backup protocols, security alerts, and integrated Google Chat notifications.",
  },
  {
    id: "integrated",
    title: "Integrated Solutions",
    icon: "🔗",
    subtitle: "Introduce enterprise clients requiring a unified ecosystem where HRMS, CRM, and Web data talk.",
    idealFor: ["Full-stack Agencies", "IT Consultants", "ERP Implementers", "Enterprise Advisors"],
    deliverables: [
      { title: "Unified Stack", desc: "Syncing data between Sales (CRM) and Operations (HRMS)" },
      { title: "Bespoke Ops", desc: "Custom API development and third-party tool connectors" },
      { title: "Architecture", desc: "Scalable systems ready for 10 to 1,000+ employees" }
    ],
    path: [
      { step: "01", label: "Integrate", desc: "Architect clients needing multi-product ecosystems" },
      { step: "02", label: "Sync", desc: "We build unified dashboards and bespoke API layers" },
      { step: "03", label: "Strategize", desc: "Top-tier multi-product commissions + Beta access" }
    ],
    earn: "Exclusive Top-Tier Multi-Product Reward Commissions",
    extras: "Dedicated Account Manager, strategic Roadmap access, and joint collaborative webinars.",
  },
];

const viewportConfig = { once: true };

const headingVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const tabContentVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: "easeIn" } }
};

const pathItemVariants: Variants = {
  hover: { y: -5, transition: { duration: 0.3 } }
};

const PartnershipModels = ({ onApply }: { onApply?: () => void }) => {
  const [activeTab, setActiveTab] = useState(models[0].id);

  const activeModel = models.find(m => m.id === activeTab) || models[0];

  return (
    <section id="models" className="py-16 md:py-28 px-4 sm:px-6 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            variants={headingVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={viewportConfig}
            className="text-[#111827] mb-4 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase"
          >
            Partnership <span className="text-emerald-600">Models</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-body text-xl">
            Seven flexible ways to collaborate. Choose the path that fits your business expertise and client base.
          </p>
        </div>

        {/* Tab Switcher - Now with horizontal scroll on mobile */}
        <div className="flex flex-nowrap lg:flex-wrap items-center justify-start lg:justify-center gap-4 mb-8 md:mb-10 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => setActiveTab(model.id)}
              className={`relative px-8 py-5 rounded-2xl text-sm sm:text-base font-bold transition-all duration-300 border-2 font-display tracking-tight flex-shrink-0 min-w-max ${
                activeTab === model.id 
                  ? "bg-gradient-to-br from-emerald-50 to-white border-emerald-500 text-emerald-700 shadow-xl shadow-emerald-500/10" 
                  : "bg-gray-50/50 border-gray-100 text-gray-400 hover:bg-white hover:border-emerald-200 hover:text-gray-600"
              }`}
            >
              <div className="flex flex-row items-center justify-center gap-3">
                <span className="text-xl sm:text-2xl shrink-0">{model.icon}</span> 
                <span className="whitespace-nowrap">
                  {model.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabContentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start"
            >
              {/* Left Column: Deliverables & Ideal For */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-10 md:space-y-12">
                {/* Deliverables & Support First */}
                <div className="space-y-5">
                  <p className="text-xs font-black text-emerald-600 uppercase tracking-widest border-l-4 border-emerald-600 pl-4">Deliverables & Support</p>
                  <div className="grid grid-cols-1 gap-4">
                    {activeModel.deliverables.map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-emerald-100 group/card">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-xs shrink-0 group-hover/card:bg-emerald-600 group-hover/card:text-white transition-colors">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="text-[#111827] font-bold text-sm md:text-base leading-tight">{item.title}</h4>
                          <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For Second */}
                <div className="space-y-5">
                  <p className="text-xs font-black text-emerald-600 uppercase tracking-widest border-l-4 border-emerald-600 pl-4">Ideal For</p>
                  <div className="flex flex-wrap gap-2.5">
                    {activeModel.idealFor.map((tag, idx) => (
                      <span key={idx} className="px-4 py-2 rounded-xl bg-white border border-gray-100 text-gray-600 text-[11px] font-bold shadow-sm uppercase tracking-wider transition-all hover:border-emerald-200 hover:text-emerald-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative, Path, and Earnings */}
              <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8">
                {/* Header & Path */}
                <div className="bg-emerald-50/30 p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-emerald-100/50">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#111827] mb-4 leading-tight">{activeModel.subtitle}</h3>

                  <div className="mt-8 md:mt-10">
                    <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-8 flex items-center gap-4">
                      <span className="w-8 h-1 bg-emerald-600" /> The Partnership Path
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
                      {activeModel.path.map((item, idx) => (
                        <motion.div 
                          key={idx} 
                          variants={pathItemVariants}
                          whileHover="hover"
                          className="relative group/path flex md:block gap-5 items-start cursor-default"
                        >
                          <div className="text-5xl md:text-5xl font-black text-emerald-100 group-hover/path:bg-clip-text group-hover/path:text-transparent group-hover/path:bg-gradient-to-br from-emerald-600 to-teal-400 group-hover/path:scale-110 transition-all duration-700 font-display md:mb-2 shrink-0">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="text-gray-900 font-bold font-display text-base md:text-lg mb-1 group-hover:text-emerald-400 transition-colors duration-500">
                              {item.label}
                            </h4>
                            <p className="text-gray-500 font-body text-sm md:text-xs lg:text-base leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                          {idx < 2 && (
                            <div className="hidden md:block absolute top-[20%] -right-4 translate-y-[-50%] text-emerald-100 group-hover/path:text-emerald-300 transition-colors text-2xl font-black">
                              →
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Earnings Card & Extras */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 md:gap-6">
                  <div className="sm:col-span-12 lg:col-span-7">
                    <div className="bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8 md:p-10 rounded-[32px] text-emerald-900 border border-emerald-100 h-full relative overflow-hidden group/earn">
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl group-hover/earn:bg-emerald-500/10 transition-all duration-700" />

                      <p className="text-emerald-600 text-[10px] font-black tracking-widest uppercase mb-6">Revenue Advantage</p>
                      <h4 className="text-xl sm:text-2xl md:text-3xl font-black leading-tight mb-8">
                        {activeModel.earn}
                      </h4>
                      <div className="h-px bg-emerald-100 w-full mb-6" />
                      <p className="text-emerald-600/60 text-xs font-bold uppercase tracking-widest">Payout Per Project Instance</p>
                    </div>
                  </div>

                  <div className="sm:col-span-12 lg:col-span-5">
                    <div className="bg-white border border-emerald-100 p-8 md:p-10 rounded-[32px] h-full flex flex-col justify-center gap-6 md:gap-8">
                      <div>
                        <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-6">Partner Extras</p>
                        <p className="text-gray-600 font-medium text-sm leading-relaxed italic border-l-4 border-emerald-200 pl-4">
                          {activeModel.extras}
                        </p>
                      </div>
                      <button
                        onClick={onApply}
                        className="press-illusion-btn-orange w-full py-5 rounded-2xl text-[13px] md:text-sm font-black uppercase tracking-widest transition-all"
                      >
                        Partner Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PartnershipModels;
