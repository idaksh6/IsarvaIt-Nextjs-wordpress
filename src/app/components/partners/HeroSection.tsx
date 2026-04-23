"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const HeroSection = ({ onApply }: { onApply: () => void }) => {
  const statPills = [
    { text: "Up to 30% Commission", color: "from-orange-400 to-orange-600", icon: "/partners/gold-tier.png" },
    { text: "Silver & Gold Tiers", color: "from-blue-400 to-blue-600", icon: "/partners/silver-tier.png" },
    { text: "Backend Delivery Included", color: "from-emerald-400 to-emerald-600", icon: "/partners/hero-banner.png" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-24 bg-[#FDF8F2]">
      {/* Background Subtle mesh and Grid */}
      <div className="absolute inset-0 z-0 opacity-40 bg-mesh-green pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-dots opacity-[0.1] pointer-events-none" />
      
      {/* Antigravity Floating Shapes / Gradients */}
      <motion.div 
        animate={{ 
          y: [0, -50, 0],
          x: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [0, 60, 0],
          x: [0, -40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-[140px] pointer-events-none"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 rounded-full blur-[100px] pointer-events-none" />
      
      
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-sm font-bold mb-8 font-display"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Channel Partner Program
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-8xl font-bold text-[#111827] leading-[1.1] mb-8 uppercase tracking-tighter"
          >
            Scale Beyond <br />
            <span className="text-[#ea580c]">Gravity</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto mb-12 leading-relaxed font-body"
          >
            Join Isarva's Channel Partner Program — deliver enterprise digital solutions without building an in-house team.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-16"
          >
            <button 
              onClick={onApply}
              className="press-illusion-btn-orange whitespace-nowrap min-w-[220px] h-16 text-lg"
            >
              Apply Now
            </button>
            <button 
              onClick={onApply}
              className="group relative min-w-[220px] h-16 rounded-2xl border-2 border-[#ea580c]/20 text-[#ea580c] font-black font-display uppercase tracking-wider text-sm flex items-center justify-center gap-3 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-[#ea580c] hover:bg-[#ea580c] hover:text-white active:scale-95 shadow-lg shadow-orange-600/5 hover:shadow-orange-600/10"
            >
              <MessageSquare className="w-5 h-5 group-hover:animate-bounce" />
              Talk to Us
            </button>
          </motion.div>

          {/* Stat Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {statPills.map((pill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -6, 0] 
                }}
                transition={{ 
                  opacity: { delay: 0.4 + i * 0.1 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
                }}
                className="bg-white px-6 py-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100/50 backdrop-blur-sm text-sm font-bold text-gray-800 flex items-center gap-3 font-body"
              >
                <div className="relative w-6 h-6">
                  <Image src={pill.icon} alt={pill.text} fill className="object-contain" />
                </div>
                {pill.text}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Background Imagery replacing the right column */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1400px] pointer-events-none z-0 overflow-hidden">
            <motion.div 
               animate={{ 
                 y: [0, -30, 0],
                 x: [0, 15, 0],
                 scale: [1, 1.05, 1],
                 rotate: [0, 2, 0]
               }}
               transition={{ 
                 duration: 10, 
                 repeat: Infinity, 
                 ease: "easeInOut",
               }}
               className="relative w-full h-full opacity-[0.12]"
            >
               <Image
                 src="/premium_antigravity_banner.png"
                 alt="Premium Antigravity Tech"
                 fill
                 className="object-contain"
                 priority
               />
            </motion.div>
            
            {/* Additional floating particles/elements for depth */}
            <motion.div 
               animate={{ y: [0, -50, 0], opacity: [0.1, 0.2, 0.1] }}
               transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/4 right-1/4 w-32 h-32 blur-2xl bg-orange-400/20 rounded-full"
            />
            <motion.div 
               animate={{ y: [0, 40, 0], opacity: [0.1, 0.15, 0.1] }}
               transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
               className="absolute bottom-1/4 left-1/3 w-48 h-48 blur-3xl bg-emerald-400/20 rounded-full"
            />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
