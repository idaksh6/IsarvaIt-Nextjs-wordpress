"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const HeroSection = ({ onApply }: { onApply: () => void }) => {
  const statPills = [
    { text: "Up to 30% Commission", color: "from-orange-100 to-orange-50 border-orange-200 text-orange-800" },
    { text: "Silver & Gold Tiers", color: "from-blue-100 to-blue-50 border-blue-200 text-blue-800" },
    { text: "Backend Delivery Included", color: "from-emerald-100 to-emerald-50 border-emerald-200 text-emerald-800" },
  ];

  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex items-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-[#f0fdf4] via-[#ecfdf5] to-white">
      {/* Background Subtle mesh and Grid */}
      <div className="absolute inset-0 z-0 opacity-40 bg-mesh-green pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-dots opacity-[0.1] pointer-events-none" />
      
      {/* Dynamic Gradients matching Website Services */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60" style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(16,185,129,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(20,184,166,0.10) 0%, transparent 50%)'
      }} />
      
      {/* Antigravity Floating Shapes / Gradients */}
      <motion.div 
        animate={{ 
          y: [0, -50, 0],
          x: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-400/30 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [0, 60, 0],
          x: [0, -40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] bg-teal-400/20 rounded-full blur-[140px] pointer-events-none"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/60 rounded-full blur-[100px] pointer-events-none" />
      
      
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm font-bold mb-8 font-display"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Channel Partner Program
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-8xl font-bold text-[#111827] leading-[1.1] mb-6 md:mb-8 uppercase tracking-tighter"
          >
            Scale Beyond <br />
            <span className="text-emerald-600">Gravity</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-500 font-medium max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-body px-2"
          >
            Join Isarva Infotech's Channel Partner Program — deliver enterprise digital solutions without building an in-house team.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16 w-full px-4"
          >
            <button 
              onClick={onApply}
              className="press-illusion-btn-orange w-full sm:w-auto min-w-[220px] h-14 md:h-16 text-base md:text-lg"
            >
              Apply Now
            </button>
            <button 
              onClick={onApply}
              className="group relative w-full sm:w-auto min-w-[220px] h-14 md:h-16 rounded-2xl border-2 border-emerald-600/20 text-emerald-600 font-black font-display uppercase tracking-wider text-xs md:text-sm flex items-center justify-center gap-3 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white active:scale-95 shadow-lg shadow-emerald-600/5 hover:shadow-emerald-600/10"
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
                className={`bg-gradient-to-r ${pill.color} px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-sm font-bold border flex items-center justify-center font-display tracking-wide uppercase`}
              >
                {pill.text}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Background Imagery replacing the right column */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1400px] pointer-events-none z-0 overflow-hidden">

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
