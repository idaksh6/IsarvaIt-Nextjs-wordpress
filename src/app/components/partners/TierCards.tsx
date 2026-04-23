"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, X, Star, Crown, Shield, Sparkles } from "lucide-react";

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
      {/* Background Subtle mesh and Grid for consistency */}
      <div className="absolute inset-0 z-0 opacity-20 bg-mesh-green pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-dots opacity-[0.05] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-bold text-[#111827] mb-6"
          >
            Partner <span className="text-[#EAB308]">Tiers</span>
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
            className="relative group bg-white rounded-[40px] border border-gray-100 shadow-2xl overflow-hidden"
          >
            {/* Header Bar */}
            <div className="bg-gradient-to-br from-[#B1B9C1] to-[#94A3B8] py-10 text-center flex flex-col items-center justify-center gap-2 relative overflow-hidden">
               <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                  <Image src="/partners/silver-tier.png" alt="" fill className="object-cover scale-150 rotate-12" />
               </div>
               <Shield className="w-9 h-9 text-white/80 relative z-10 drop-shadow-md" />
               <h3 className="font-display text-4xl font-bold text-white uppercase tracking-wider relative z-10 drop-shadow-lg">Silver</h3>
            </div>
 
            <div 
              className="absolute top-28 -right-12 w-56 h-56 opacity-30 group-hover:scale-110 transition-transform duration-700 pointer-events-none mix-blend-multiply z-0"
              style={{
                maskImage: 'radial-gradient(circle at center, black 20%, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 75%)'
              }}
            >
               <Image src="/partners/silver-tier.png" alt="Silver Tier" fill className="object-contain" />
            </div>

            <div className="p-8 md:p-12 relative z-10">
              <p className="text-[#B1B9C1] font-bold mb-8 font-body uppercase tracking-widest text-sm">Perfect for small agencies & freelancers</p>

              <div className="flex items-baseline gap-2 mb-10 font-display">
                 <span className="text-6xl font-black text-[#111827]">20%</span>
                 <span className="text-xl font-bold text-[#B1B9C1]">Commission</span>
              </div>

              <div className="space-y-4 mb-12">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50">
                    <span className="text-gray-600 font-medium font-body">{f.label}</span>
                    <span>
                      {typeof f.silver === "boolean" ? (
                        f.silver ? <Check className="w-5 h-5 text-[#B1B9C1]" /> : <X className="w-5 h-5 text-gray-300" />
                      ) : (
                        <span className="text-[#B1B9C1] font-black">{f.silver}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onClick={onApply}
                className="w-full py-4 rounded-xl text-white font-bold transition-all duration-300 active:scale-95 font-display tracking-wide"
                style={{ 
                  backgroundColor: '#B1B9C1',
                  boxShadow: '0 6px 0 #7F8C9A' 
                }}
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
            className="relative group lg:mt-12"
          >
            {/* Most Recommended Badge - Larger and more prominent */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 bg-gradient-to-r from-orange-600 to-amber-500 px-8 py-3 rounded-full text-[12px] font-black text-white tracking-[0.25em] shadow-[0_15px_30px_rgba(234,88,12,0.4)] uppercase border border-white/30 font-display flex items-center gap-3 whitespace-nowrap">
              <div className="relative w-5 h-5">
                <Image src="/partners/gold-tier.png" alt="Gold" fill className="object-contain animate-pulse" />
              </div>
              Most Recommended
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
            </div>

            <div className="relative bg-white rounded-[40px] border-2 border-[#EAB308]/20 shadow-[0_30px_60px_-15px_rgba(234,179,8,0.15)] overflow-hidden">
              {/* Header Bar */}
              <div className="bg-gradient-to-br from-[#EAB308] to-[#CA8A04] py-10 text-center relative flex flex-col items-center justify-center gap-2 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                  <Image src="/partners/gold-tier.png" alt="" fill className="object-cover scale-150 -rotate-12" />
                </div>
                <Crown className="w-9 h-9 text-white/95 relative z-10 drop-shadow-md" />
                <h3 className="font-display text-4xl font-bold text-white uppercase tracking-[0.1em] relative z-10 drop-shadow-lg">Gold</h3>
              </div>

            <div 
              className="absolute top-28 -right-12 w-64 h-64 opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none mix-blend-multiply z-0"
              style={{
                maskImage: 'radial-gradient(circle at center, black 20%, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 75%)'
              }}
            >
               <Image src="/partners/gold-tier.png" alt="Gold Tier" fill className="object-contain" />
            </div>

            <div className="p-8 md:p-12 relative z-10">
              <p className="text-[#EAB308] font-bold mb-8 font-body uppercase tracking-widest text-sm">For established business consultants</p>

              <div className="flex items-baseline gap-2 mb-10 font-display">
                 <span className="text-7xl font-black text-[#EAB308]">30%</span>
                 <span className="text-xl font-bold text-[#EAB308]/80">Commission</span>
              </div>

              <div className="space-y-4 mb-12">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-[#EAB308]/10">
                    <span className="text-gray-800 font-bold font-body">{f.label}</span>
                    <span>
                      {typeof f.gold === "boolean" ? (
                        f.gold ? <Check className="w-5 h-5 text-[#EAB308]" /> : <X className="w-5 h-5 text-gray-300" />
                      ) : (
                        <span className="text-[#EAB308] font-black">{f.gold}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onClick={onApply}
                className="w-full py-4 rounded-xl text-white font-bold transition-all duration-300 active:scale-95 font-display tracking-wide"
                style={{ 
                  backgroundColor: '#EAB308',
                  boxShadow: '0 6px 0 #CA8A04'
                }}
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
