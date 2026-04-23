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
    idealFor: ["Creative Agencies", "Freelance Consultants", "Marketing Firms"],
    deliverables: [
      "Custom Next.js & React Applications",
      "Enterprise UI/UX Design",
      "SEO Optimized Codebase",
      "Full Project Management",
    ],
    earn: "20-30% Commission",
    extras: "Post-launch support for 12 months included",
  },
  {
    id: "ecommerce",
    title: "E-Commerce / WooCommerce",
    icon: "🛒",
    idealFor: ["Retail Consultants", "Shopify Experts", "Digital Transformation Advisors"],
    deliverables: [
      "Complex WooCommerce Ecosystems",
      "Payment Gateway Integration",
      "CRM & Inventory Syncing",
      "High-Performance Cart Optimization",
    ],
    earn: "Flat referral bonus + Monthly volume bonuses",
    extras: "Dedicated e-commerce strategist support",
  },
  {
    id: "maintenance",
    title: "Website Maintenance & Security",
    icon: "🔒",
    idealFor: ["Hosting Providers", "IT Support Firms", "Compliance Officers"],
    deliverables: [
      "24/7 Security Monitoring",
      "Daily Cloud Backups",
      "Performance Tuning & Updates",
      "Vulnerability Patching",
    ],
    earn: "Recurring monthly revenue share",
    extras: "Whitelabel maintenance reports for your clients",
  },
  {
    id: "software",
    title: "Software Sales & Integration",
    icon: "⚙️",
    idealFor: ["SaaS Resellers", "Business Advisors", "Operations Consultants"],
    deliverables: [
      "Custom ERP/CRM Integrations",
      "API Development & Bridges",
      "Bespoke Dashboard UI",
      "Workflow Automation",
    ],
    earn: "High-ticket closing commission",
    extras: "Joint pitch decks and technical demo support",
  },
];

const PartnershipModels = ({ onApply }: { onApply?: () => void }) => {
  const [activeTab, setActiveTab] = useState(models[0].id);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-bold text-[#111827] uppercase"
          >
            Partnership <span className="text-emerald-600">Models</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 md:mb-20 max-w-5xl mx-auto">
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => setActiveTab(model.id)}
              className={`relative px-8 py-4 rounded-2xl text-sm md:text-base font-bold transition-all duration-300 border font-display tracking-tight ${
                activeTab === model.id ? "bg-gradient-to-r from-emerald-400 to-emerald-500 border-transparent text-white shadow-lg shadow-emerald-500/30" : "bg-gray-50 border-gray-100 text-gray-500 hover:bg-gray-100"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-xl">{model.icon}</span> {model.title}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto min-h-[500px]">
          <AnimatePresence mode="wait">
            {models.map(
              (model) =>
                activeTab === model.id && (
                  <motion.div
                    key={model.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 bg-[#F8FAFC]/50 border border-gray-100 p-6 sm:p-8 md:p-16 rounded-[32px] md:rounded-[48px] shadow-sm items-center"
                  >
                    {/* Left side Illustration */}
                    <div className="lg:col-span-4 flex flex-col items-center">
                       <div className="relative w-full aspect-square opacity-90 group-hover:scale-105 transition-transform">
                          <Image src="/partners/partnership-models.png" alt="Partnership Illustration" fill className="object-contain" />
                       </div>
                       <div className="mt-8 flex flex-wrap justify-center gap-2">
                           {model.idealFor.map((tag, idx) => (
                             <span key={idx} className="px-4 py-2 rounded-xl bg-white border border-gray-100 text-gray-600 text-xs font-bold shadow-sm uppercase tracking-wider font-display">
                                {tag}
                             </span>
                           ))}
                       </div>
                    </div>

                    {/* Right side Detail */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        <div>
                          <p className="text-emerald-600 text-xs font-black tracking-widest uppercase mb-6 flex items-center gap-2 font-display">
                            <span className="w-8 h-[2px] bg-emerald-600" /> We Deliver
                          </p>
                          <ul className="space-y-6">
                            {model.deliverables.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-4 text-[#111827] font-bold text-lg leading-tight font-display">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-[24px] md:rounded-[32px] border border-emerald-100 shadow-xl shadow-emerald-600/5 relative overflow-hidden group">
                           <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-600/5 rounded-full blur-3xl group-hover:bg-emerald-600/10 transition-colors" />
                           <p className="text-gray-400 text-xs font-black tracking-widest uppercase mb-4">You Earn</p>
                           <h4 className="text-3xl font-black text-emerald-600 leading-tight mb-8 font-display">
                              {model.earn}
                           </h4>
                           
                           <div className="pt-8 border-t border-gray-100 mb-8">
                              <p className="text-gray-400 text-xs font-black tracking-widest uppercase mb-3">Extras</p>
                              <p className="text-[#111827] font-body italic text-sm leading-relaxed">
                                 " {model.extras} "
                              </p>
                           </div>

                           <button 
                             onClick={onApply}
                             className="press-illusion-btn-orange w-full text-[11px] sm:text-xs md:text-sm font-black uppercase tracking-wide font-display whitespace-nowrap px-4"
                            >
                             Inquire About This Model
                           </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PartnershipModels;
