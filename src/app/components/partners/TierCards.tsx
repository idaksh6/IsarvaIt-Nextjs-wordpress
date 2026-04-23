"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, X, Star, Crown, Shield, Sparkles } from "lucide-react";

const features = [
  { label: "Visibility on isarvait.com", silver: true, gold: true },
  { label: "Isarva Infotech Trademark Rights", silver: false, gold: true },
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
    <section className="py-16 md:py-24 bg-[#FDF8F2] relative overflow-hidden">
      {/* Background Subtle mesh and Grid for consistency */}
      <div className="absolute inset-0 z-0 opacity-20 bg-mesh-green pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-dots opacity-[0.05] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-4 md:mb-6"
          >
            Partner <span className="text-[#EAB308]">Tiers</span>
          </motion.h2>
          <p className="text-gray-500 text-lg md:text-xl font-body">Choose the growth level that matches your ambition.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 max-w-6xl mx-auto items-stretch">
          {/* Silver Tier */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group bg-white rounded-[40px] border border-slate-200 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header Bar */}
            <div className="bg-gradient-to-br from-slate-400 via-slate-200 to-slate-500 py-10 md:py-12 text-center flex flex-col items-center justify-center gap-3 relative overflow-hidden">
               <div className="absolute inset-0 opacity-25 pointer-events-none mix-blend-overlay">
                  <Image src="/partners/silver-tier.png" alt="" fill className="object-cover scale-150 rotate-12" />
               </div>
               <Shield className="w-12 h-12 text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
               <h3 className="font-display text-5xl md:text-6xl font-black text-white uppercase tracking-[0.2em] relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">Silver</h3>
            </div>
 
            <div 
              className="absolute top-1/2 -right-24 -translate-y-1/2 w-72 h-72 opacity-[0.08] group-hover:scale-110 group-hover:opacity-[0.15] transition-all duration-700 pointer-events-none mix-blend-multiply z-0"
              style={{
                maskImage: 'radial-gradient(circle at center, black 20%, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 75%)'
              }}
            >
               <Image src="/partners/silver-tier.png" alt="Silver Tier" fill className="object-contain" />
            </div>

            <div className="p-6 md:p-8 lg:p-12 relative z-10 flex flex-col flex-1">
              <p className="text-slate-500 font-black mb-8 font-body uppercase tracking-widest text-xs">Foundation for growing agencies</p>

              <div className="flex flex-wrap sm:flex-nowrap items-baseline gap-1 sm:gap-2 mb-10 font-display">
                 <span className="text-6xl sm:text-7xl font-black text-slate-800">20%</span>
                 <span className="text-lg sm:text-xl font-bold text-slate-500 leading-none uppercase tracking-wider">Commission</span>
              </div>

              <div className="space-y-4 mb-12 flex-1">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-700 font-bold font-body text-sm sm:text-base">{f.label}</span>
                    <span>
                      {typeof f.silver === "boolean" ? (
                        f.silver ? <Check className="w-6 h-6 text-slate-800 stroke-[3]" /> : <X className="w-5 h-5 text-slate-200" />
                      ) : (
                        <span className="text-slate-900 font-black">{f.silver}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onClick={onApply}
                className="press-illusion-btn-silver w-full py-4 md:py-5 font-body text-base md:text-lg z-20"
              >
                Level Up to Silver
              </button>
            </div>
          </motion.div>

          {/* Gold Tier */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group flex flex-col"
          >
            {/* Most Recommended Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 bg-gradient-to-r from-orange-600 to-amber-500 px-10 py-3.5 rounded-full text-[11px] font-black text-white tracking-[0.3em] shadow-[0_20px_40px_rgba(234,88,12,0.5)] uppercase border-2 border-white/40 font-display flex items-center gap-3 whitespace-nowrap">
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
              Most Recommended
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
            </div>

            <div className="relative bg-white rounded-[40px] border-2 border-amber-200 shadow-[0_40px_80px_-15px_rgba(217,119,6,0.2)] overflow-hidden flex flex-col flex-1">
              {/* Header Bar */}
              <div className="bg-gradient-to-br from-amber-400 via-yellow-300 to-orange-600 py-10 md:py-12 text-center relative flex flex-col items-center justify-center gap-3 overflow-hidden">
                <div className="absolute inset-0 opacity-25 pointer-events-none mix-blend-overlay">
                  <Image src="/partners/gold-tier.png" alt="" fill className="object-cover scale-150 -rotate-12" />
                </div>
                <Crown className="w-12 h-12 text-white relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
                <h3 className="font-display text-5xl md:text-6xl font-black text-white uppercase tracking-[0.2em] relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">Gold</h3>
              </div>

            <div 
              className="absolute top-1/2 -right-24 -translate-y-1/2 w-80 h-80 opacity-[0.12] group-hover:scale-110 group-hover:opacity-[0.2] transition-all duration-700 pointer-events-none mix-blend-multiply z-0"
              style={{
                maskImage: 'radial-gradient(circle at center, black 20%, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 75%)'
              }}
            >
               <Image src="/partners/gold-tier.png" alt="Gold Tier" fill className="object-contain" />
            </div>

            <div className="p-6 sm:p-8 lg:p-12 relative z-10 flex flex-col flex-1">
              <p className="text-[#EAB308] font-bold mb-8 font-body uppercase tracking-widest text-xs">For high-volume strategic partners</p>

              <div className="flex flex-wrap sm:flex-nowrap items-baseline gap-1 sm:gap-2 mb-10 font-display">
                 <span className="text-6xl sm:text-8xl font-black text-[#EAB308]">30%</span>
                 <span className="text-lg sm:text-xl font-bold text-[#EAB308]/60 leading-none uppercase tracking-wider">Commission</span>
              </div>

              <div className="space-y-4 mb-12 flex-1">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-amber-50">
                    <span className="text-gray-800 font-bold font-body text-sm sm:text-base">{f.label}</span>
                    <span>
                      {typeof f.gold === "boolean" ? (
                        f.gold ? <Check className="w-6 h-6 text-[#EAB308] stroke-[3]" /> : <X className="w-5 h-5 text-gray-200" />
                      ) : (
                        <span className="text-[#EAB308] font-black">{f.gold}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onClick={onApply}
                className="press-illusion-btn-gold w-full py-4 md:py-5 font-body text-base md:text-lg z-20"
              >
                Level Up to Gold
              </button>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TierCards;
