"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  { label: "Visibility on isarvait.com", silver: true, gold: true },
  { label: "Isarva Trademark Rights", silver: false, gold: true },
  { label: "Sales Support & Guidance", silver: true, gold: true },
  { label: "Scale-Up! Business Game", silver: false, gold: true },
  { label: "Partnership Knowledge Base", silver: true, gold: true },
  { label: "Internal Service Discount", silver: true, gold: true },
  { label: "Enterprise Product Demo Access", silver: false, gold: true },
  { label: "Dedicated Account Manager", silver: false, gold: true },
  { label: "Local Leads", silver: true, gold: true },
  { label: "Commission Rate", silver: "20%", gold: "30%" },
  { label: "Promote on Partner Page", silver: false, gold: true },
  { label: "Customer Success Stories", silver: true, gold: true },
  { label: "Expert Guidance", silver: true, gold: true },
  { label: "Screen Share Detailing", silver: false, gold: true },
  { label: "Functional & Technical Docs", silver: true, gold: true },
];

const TierCards = ({ onApply }: { onApply: () => void }) => {
  return (
    <section className="py-24 bg-[#FDF8F2] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-bold text-[#111827] mb-6"
          >
            Partner <span className="text-[#ea580c]">Tiers</span>
          </motion.h2>
          <p className="text-gray-500 text-xl font-body">Choose the growth level that matches your ambition.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Silver Tier */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group bg-white rounded-[40px] p-8 md:p-14 border border-gray-100 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-10 right-10 w-40 h-40 opacity-40 group-hover:scale-110 transition-transform duration-700">
               <Image src="/partners/silver-tier.png" alt="Silver Tier" width={160} height={160} className="object-contain" />
            </div>

            <div className="relative z-10">
              <h3 className="font-display text-3xl font-bold text-gray-400 mb-2 uppercase">Silver Partner</h3>
              <p className="text-gray-500 mb-8 font-body">Perfect for small agencies & freelancers</p>

              <div className="flex items-baseline gap-2 mb-10">
                 <span className="text-6xl font-black text-[#111827]">20%</span>
                 <span className="text-xl font-bold text-gray-400">Commission</span>
              </div>

              <div className="space-y-4 mb-12">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50">
                    <span className="text-gray-600 font-medium font-body">{f.label}</span>
                    <span>
                      {typeof f.silver === "boolean" ? (
                        f.silver ? <Check className="w-5 h-5 text-emerald-500" /> : <X className="w-5 h-5 text-gray-300" />
                      ) : (
                        <span className="text-[#ea580c] font-black">{f.silver}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onClick={onApply}
                className="press-illusion-btn-white w-full border border-gray-200"
              >
                Start as Silver
              </button>
            </div>
          </motion.div>

          {/* Gold Tier */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group bg-white rounded-[40px] p-8 md:p-14 border-2 border-orange-100 shadow-2xl overflow-hidden lg:mt-12"
          >
            {/* Most Recommended Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-orange-600 px-6 py-2 rounded-full text-xs font-black text-white tracking-widest shadow-xl">
              MOST RECOMMENDED
            </div>

            <div className="absolute top-10 right-10 w-48 h-48 opacity-60 group-hover:scale-110 transition-transform duration-700">
               <Image src="/partners/gold-tier.png" alt="Gold Tier" width={192} height={192} className="object-contain" />
            </div>

            <div className="relative z-10">
              <h3 className="font-display text-3xl font-bold text-orange-600 mb-2 uppercase">Gold Partner</h3>
              <p className="text-gray-500 mb-8 font-body">For established business consultants</p>

              <div className="flex items-baseline gap-2 mb-10">
                 <span className="text-7xl font-black text-orange-600">30%</span>
                 <span className="text-xl font-bold text-orange-600/50">Commission</span>
              </div>

              <div className="space-y-4 mb-12">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-orange-50">
                    <span className="text-gray-800 font-bold font-body">{f.label}</span>
                    <span>
                      {typeof f.gold === "boolean" ? (
                        f.gold ? <Check className="w-5 h-5 text-orange-600" /> : <X className="w-5 h-5 text-gray-300" />
                      ) : (
                        <span className="text-orange-600 font-black">{f.gold}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onClick={onApply}
                className="press-illusion-btn-orange w-full"
              >
                Level Up to Gold
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TierCards;
