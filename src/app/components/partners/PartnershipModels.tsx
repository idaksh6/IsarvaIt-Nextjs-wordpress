"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const models = [
  {
    id: "web",
    title: "Website Design & Development",
    icon: "🎨",
    subtitle: "Identify clients needing new designs, WordPress solutions, or high-end UI/UX redesigns.",
    idealFor: ["Marketing Consultants", "Advertising Agencies", "Digital Firms", "Freelancers", "Graphic Designers"],
    deliverables: [
      { title: "Design & Build", desc: "(i) Custom Website, (ii) WordPress Design, (iii) Web UI/UX Design" },
      { title: "Specialized Sites", desc: "(iv) CMS Website, (v) Redesign Website, (vi) Portfolio Website" },
      { title: "Conversion Focus", desc: "(vii) Landing Pages, (viii) One Page Website, (ix) Blog Websites" }
    ],
    path: [
      { step: "01", label: "Introduce", desc: "Refer clients needing new designs or redesigns" },
      { step: "02", label: "Build", desc: "We deliver custom, SEO-optimized code" },
      { step: "03", label: "Profit", desc: "Earn 10% – 30% referral commissions + bonuses" }
    ],
    earn: "10% – 30% Referral Commissions + Volume Bonuses",
    extras: "White-labelled reports, Presentations, client-ready pitch prototypes (Figma, Adobe XD, InVision), and optional design revision support.",
  },
  {
    id: "ecommerce",
    title: "E-Commerce / WooCommerce",
    icon: "🛒",
    subtitle: "Identify merchants or brands needing robust online stores or complex inventory integrations.",
    idealFor: ["Retail Advisors", "Digital Marketing Agencies", "E-com Strategists"],
    deliverables: [
      { title: "Platforms", desc: "E-Commerce, WooCommerce, and custom checkout platforms" },
      { title: "Logistics", desc: "Payment gateway and logistics/shipping integrations" },
      { title: "Scale", desc: "Inventory, ERP, CRM integrations and mobile-first optimization" }
    ],
    path: [
      { step: "01", label: "Identify", desc: "Find merchants needing robust online stores" },
      { step: "02", label: "Integrate", desc: "We handle complex POS & API bridges" },
      { step: "03", label: "Recurring", desc: "Setup commission + recurring hosting/maintenance revenue" }
    ],
    earn: "Setup Commissions + Recurring Hosting & Maintenance Revenue",
    extras: "Technical support during sales calls, POS/Warehouse integration, and fast-launch templates.",
  },
  {
    id: "maintenance",
    title: "Website Maintenance & Security",
    icon: "🔒",
    subtitle: "Offer managed website care plans as a high-value add-on to your existing clients.",
    idealFor: ["IT Providers", "MSPs", "Managed Agencies", "Freelance Developers"],
    deliverables: [
      { title: "Management", desc: "Monthly Maintenance Service, AMC, and Server Maintenance" },
      { title: "Protection", desc: "24/7 Uptime Monitoring, Security Updates, and Malware Protection" },
      { title: "Optimization", desc: "Regular Backups, Performance Tuning, and Health Check-Ups" }
    ],
    path: [
      { step: "01", label: "Offer", desc: "Add managed website care to your service portfolio" },
      { step: "02", label: "Maintain", desc: "We handle daily updates, backups, and security" },
      { step: "03", label: "MRR", desc: "Earn Monthly Recurring Revenue (MRR) per managed site" }
    ],
    earn: "Monthly Recurring Revenue (MRR) based on Maintenance Tiers",
    extras: "Automated branded monthly reports, malware protection, and accessibility optimization.",
  },
  {
    id: "software",
    title: "Software Sales & Integration",
    icon: "⚙️",
    subtitle: "Refer clients who need custom-built automation, CRM tools, or enterprise integrations.",
    idealFor: ["SaaS Resellers", "Business Advisors", "IT Consultants", "Operations Leads"],
    deliverables: [
      { title: "Custom Build", desc: "Custom-built web and desktop applications" },
      { title: "Ecosystems", desc: "CRM & ERP integrations with middleware automation" },
      { title: "Intelligence", desc: "API development and cloud-based business dashboards" }
    ],
    path: [
      { step: "01", label: "Consult", desc: "Refer clients needing bespoke automation or apps" },
      { step: "02", label: "Architect", desc: "We build the custom middleware and cloud tools" },
      { step: "03", label: "Earn", desc: "Project-based referral commissions + managed service fees" }
    ],
    earn: "High-Ticket Project Commissions + Managed Service Fees",
    extras: "Technical sales engineering, branded software demos, and co-creation opportunities.",
  },
];

const PartnershipModels = ({ onApply }: { onApply?: () => void }) => {
  const [activeTab, setActiveTab] = useState(models[0].id);

  const activeModel = models.find(m => m.id === activeTab) || models[0];

  return (
    <section id="models" className="py-16 md:py-28 px-4 sm:px-6 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-bold text-[#111827] uppercase mb-4"
          >
            Partnership <span className="text-emerald-600">Models</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-body text-base md:text-lg">
            Four flexible ways to collaborate. Choose the path that fits your business goals and operational style.
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start"
            >
              {/* Left Column: Visual & Deliverables */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6 md:space-y-8">
                <div className="hidden lg:block relative aspect-square rounded-3xl overflow-hidden bg-emerald-50/50 border border-emerald-100/50 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent z-0" />
                  <Image
                    src="/partners/partnership-models.png"
                    alt={activeModel.title}
                    fill
                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-black text-emerald-600 uppercase tracking-widest font-display border-l-4 border-emerald-600 pl-4">Ideal For</p>
                  <div className="flex flex-wrap gap-2">
                    {activeModel.idealFor.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-lg bg-white border border-gray-100 text-gray-700 text-[11px] font-bold shadow-sm uppercase font-display">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-emerald-50 lg:border-t-0 lg:pt-0">
                  <p className="text-xs font-black text-emerald-600 uppercase tracking-widest font-display border-l-4 border-emerald-600 pl-4">Deliverables & Support</p>
                  <div className="grid grid-cols-1 gap-3">
                    {activeModel.deliverables.map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-xs shrink-0">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="text-[#111827] font-bold text-sm md:text-base font-display leading-tight">{item.title}</h4>
                          <p className="text-gray-500 text-sm font-body mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative, Path, and Earnings */}
              <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8">
                {/* Header & Path */}
                <div className="bg-emerald-50/30 p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-emerald-100/50">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#111827] font-display mb-4 leading-tight">{activeModel.subtitle}</h3>

                  <div className="mt-8 md:mt-10">
                    <p className="text-xs font-black text-emerald-600 uppercase tracking-widest font-display mb-8 flex items-center gap-4">
                      <span className="w-8 h-1 bg-emerald-600" /> The Partnership Path
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
                      {activeModel.path.map((item, idx) => (
                        <motion.div 
                          key={idx} 
                          whileHover={{ y: -5 }}
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
                    <div className="bg-gradient-to-br from-emerald-50 to-white p-8 md:p-10 rounded-[32px] text-emerald-900 border border-emerald-100 h-full relative overflow-hidden group/earn">
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl group-hover/earn:bg-emerald-500/10 transition-all duration-700" />

                      <p className="text-emerald-600 text-[10px] font-black tracking-widest uppercase mb-6 font-display">Revenue Advantage</p>
                      <h4 className="text-2xl sm:text-2xl md:text-3xl font-black font-display leading-tight mb-8">
                        {activeModel.earn}
                      </h4>
                      <div className="h-px bg-emerald-100 w-full mb-6" />
                      <p className="text-emerald-600/60 text-xs font-bold uppercase tracking-widest">Payout Per Project Instance</p>
                    </div>
                  </div>

                  <div className="sm:col-span-12 lg:col-span-5">
                    <div className="bg-white border border-emerald-100 p-8 md:p-10 rounded-[32px] h-full flex flex-col justify-center gap-6 md:gap-8">
                      <div>
                        <p className="text-xs font-black text-emerald-600 uppercase tracking-widest font-display mb-6">Partner Extras</p>
                        <p className="text-gray-600 font-medium text-sm leading-relaxed italic border-l-4 border-emerald-200 pl-4">
                          {activeModel.extras}
                        </p>
                      </div>
                      <button
                        onClick={onApply}
                        className="press-illusion-btn-orange w-full py-5 rounded-2xl text-[13px] md:text-sm font-black uppercase tracking-widest transition-all font-display"
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
