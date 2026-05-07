"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, X, Star, Crown, Shield, Sparkles, Key } from "lucide-react";

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
  { label: "Expert Guidance", silver: true, gold: true },
  { label: "Screen Share Detailing", silver: false, gold: true },
  { label: "Functional & Technical Docs", silver: true, gold: true },
  { label: "Commission Rate", silver: "20%", gold: "30%", hasAsterisk: true },
];

const bronzeFeatures = [
  { label: "Identify & Share Leads", check: true },
  { label: "Introduce Prospects to Team", check: true },
  { label: "Internal Team Support", check: true },
  { label: "Upgrade to Higher Levels", check: true },
  { label: "Project Execution", check: false },
  { label: "Sales Closure Responsibility", check: false },
];

const TierCards = ({ onApply }: { onApply: (tier: string) => void }) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#FDF8F2]">
      {/* Background Subtle mesh and Grid for consistency */}
      <div className="absolute inset-0 z-0 opacity-20 bg-mesh-green pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-dots opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-4 md:mb-6"
          >
            Partner <span className="text-[#EAB308]">Tiers</span>
          </motion.h2>
          <p className="text-gray-500 text-lg md:text-xl font-body">Choose the growth level that matches your ambition.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {/* Gold Tier */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group flex flex-col h-full"
          >
            {/* Most Recommended Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 bg-gradient-to-r from-orange-600 to-amber-500 px-6 sm:px-10 py-3 rounded-full text-[9px] sm:text-[11px] font-black text-white tracking-[0.2em] sm:tracking-[0.3em] shadow-[0_20px_40px_rgba(234,88,12,0.5)] uppercase border-2 border-white/40 font-display flex items-center gap-2 sm:gap-3 whitespace-nowrap">
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
              Most Recommended
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
            </div>

            <div className="relative bg-white rounded-[40px] border-2 border-amber-200 shadow-[0_40px_80px_-15px_rgba(217,119,6,0.2)] overflow-hidden flex flex-col flex-1 h-full">
              {/* Header Bar */}
              <div className="bg-gradient-to-br from-amber-400 via-yellow-300 to-orange-600 py-10 md:py-12 text-center relative flex flex-col items-center justify-center gap-3 overflow-hidden">
                <div className="absolute inset-0 opacity-25 pointer-events-none mix-blend-overlay">
                  <Image src="/partners/gold-tier.png" alt="" fill className="object-cover scale-150 -rotate-12" />
                </div>
                <Crown className="w-12 h-12 text-white relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
                <h3 className="text-5xl md:text-6xl font-black text-white uppercase tracking-[0.2em] relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">Gold</h3>
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

              <div className="p-5 sm:p-6 lg:p-8 relative z-10 flex flex-col flex-1 h-full">
                <p className="text-[#EAB308] font-bold mb-8 uppercase tracking-widest text-xs">For high-volume strategic partners</p>

                <div className="flex flex-col mb-10">
                  <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] mb-2">Max Earning Rate</span>
                  <div className="flex flex-col">
                    <span className="font-display text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 leading-none tracking-tight">30%</span>
                    <span className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 leading-none uppercase tracking-wider mt-2">Commission</span>
                  </div>
                </div>

                <div className="space-y-2 mb-12 flex-1 relative px-2 py-4 rounded-3xl bg-amber-50/50 backdrop-blur-[2px] border border-amber-100/50">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center justify-between gap-4 py-2 px-4 rounded-xl hover:bg-white/80 transition-all duration-300 border-b border-amber-100/30 last:border-0 group/row">
                      <span className="text-gray-900 font-bold text-sm sm:text-[15px] group-hover/row:translate-x-1 transition-transform">
                        {f.label}
                        {(f as any).hasAsterisk && <span className="text-red-600 ml-1 font-black">*</span>}
                      </span>
                      <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-amber-50/50 border border-amber-200/50 shadow-sm transition-transform group-hover/row:scale-110">
                        {typeof f.gold === "boolean" ? (
                          f.gold ? <Check className="w-5 h-5 text-[#EAB308] stroke-[4]" /> : <X className="w-5 h-5 text-slate-300 stroke-[4]" />
                        ) : (
                          <span className="text-[#EAB308] font-black text-[10px] whitespace-nowrap">{f.gold}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onApply("Gold Tier Inquiry")}
                  className="press-illusion-btn-gold w-full py-4 md:py-5 text-base md:text-lg font-bold uppercase tracking-widest mt-auto z-20"
                >
                  Join Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* Silver Tier */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group bg-white rounded-[40px] border border-slate-200 shadow-2xl overflow-hidden flex flex-col h-full"
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

            <div className="p-5 sm:p-6 lg:p-8 relative z-10 flex flex-col flex-1 h-full">
              <p className="text-slate-500 font-black mb-8 font-body uppercase tracking-widest text-xs">Foundation for growing agencies</p>

              <div className="flex flex-col mb-10">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Earning Rate</span>
                <div className="flex flex-col">
                  <span className="font-display text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 leading-none tracking-tight">20%</span>
                  <span className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 leading-none uppercase tracking-wider mt-2">Commission</span>
                </div>
              </div>

              <div className="space-y-2 mb-12 flex-1 relative px-2 py-4 rounded-3xl bg-slate-50/50 backdrop-blur-[2px] border border-slate-100/50">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center justify-between gap-4 py-2 px-4 rounded-xl hover:bg-white/80 transition-all duration-300 border-b border-slate-100/30 last:border-0 group/row">
                    <span className="text-slate-900 font-bold text-sm sm:text-[15px] group-hover/row:translate-x-1 transition-transform">
                      {f.label}
                      {(f as any).hasAsterisk && <span className="text-red-600 ml-1 font-black">*</span>}
                    </span>
                    <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-50/50 border border-slate-200/50 shadow-sm transition-transform group-hover/row:scale-110">
                      {typeof f.silver === "boolean" ? (
                        f.silver ? <Check className="w-5 h-5 text-slate-600 stroke-[4]" /> : <X className="w-5 h-5 text-slate-300 stroke-[4]" />
                      ) : (
                        <span className="text-slate-900 font-black text-[10px] whitespace-nowrap">{f.silver}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onApply("Silver Tier Inquiry")}
                className="press-illusion-btn-silver w-full py-4 md:py-5 text-base md:text-lg font-bold uppercase tracking-widest mt-auto z-20"
              >
                Join Now
              </button>
            </div>
          </motion.div>

          {/* Bronze Tier */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group bg-white rounded-[40px] border border-orange-200 shadow-2xl overflow-hidden flex flex-col h-full"
          >
            {/* Header Bar */}
            <div className="bg-gradient-to-br from-orange-800 via-orange-600 to-orange-900 py-10 md:py-12 text-center flex flex-col items-center justify-center gap-3 relative overflow-hidden">
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                <Image src="/partners/bronze-tier.png" alt="" fill className="object-cover scale-125" />
              </div>
              <Key className="w-12 h-12 text-orange-100 relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
              <h3 className="font-display text-5xl md:text-6xl font-black text-white uppercase tracking-[0.2em] relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">Bronze</h3>
            </div>

            <div className="p-5 sm:p-6 lg:p-8 relative z-10 flex flex-col flex-1 h-full">
              <p className="text-orange-900 font-black mb-8 uppercase tracking-widest text-xs">Commission-Based Entry</p>

              <div className="flex flex-col mb-10">
                <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em] mb-2">Earning Rate</span>
                <div className="flex flex-col">
                  <span className="font-display text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 leading-none tracking-tight">10%</span>
                  <span className="text-xs sm:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 leading-none uppercase tracking-wider mt-2">Commission</span>
                </div>
              </div>

              <div className="space-y-3 mb-12 flex-1 relative px-2 py-4 rounded-3xl bg-orange-50/50 backdrop-blur-[2px] border border-orange-100/50">
                {bronzeFeatures.map((f, i) => (
                  <div key={i} className="flex items-center justify-between gap-4 py-2 px-4 rounded-xl hover:bg-white/80 transition-all duration-300 border-b border-orange-100/30 last:border-0 group/row">
                    <span className="text-slate-800 font-bold text-sm sm:text-[15px] group-hover/row:translate-x-1 transition-transform">{f.label}</span>
                    <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50/50 border border-orange-200/50 shadow-sm transition-transform group-hover/row:scale-110">
                      {f.check ? (
                        <Check className="w-5 h-5 text-orange-600 stroke-[4]" />
                      ) : (
                        <X className="w-5 h-5 text-slate-300 stroke-[4]" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onApply("Bronze Tier Inquiry")}
                className="press-illusion-btn-orange w-full py-4 md:py-5 text-base md:text-lg font-bold uppercase tracking-widest mt-auto z-20"
              >
                Join Now
              </button>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm font-medium"
          >
            <span className="text-red-600 font-bold text-lg leading-none align-middle mr-1">*</span>
            Terms and conditions apply. Commission applicable only on successful conversions.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default TierCards;
