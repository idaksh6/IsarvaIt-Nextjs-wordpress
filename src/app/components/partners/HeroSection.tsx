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
      
      <div className="absolute inset-0 z-0 bg-white/40 pointer-events-none" />
      
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content Side */}
          <div className="text-center lg:text-left pt-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm font-bold mb-8 font-display"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Channel Partner Program
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#111827] leading-[1.05] mb-6 tracking-tight uppercase"
            >
              Scale Beyond <br />
              <span className="text-emerald-600">Gravity</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-body"
            >
              Empower your business with Isarva Infotech's Channel Partner Program. Deliver world-class enterprise solutions without the overhead of an in-house team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <button 
                onClick={onApply}
                className="press-illusion-btn-orange w-full sm:w-auto min-w-[200px] h-14 text-base"
              >
                Apply Now
              </button>
              <button 
                onClick={onApply}
                className="group relative w-full sm:w-auto min-w-[200px] h-14 rounded-2xl border-2 border-emerald-600/20 text-emerald-600 font-black font-display uppercase tracking-wider text-xs flex items-center justify-center gap-3 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white active:scale-95"
              >
                <MessageSquare className="w-5 h-5 group-hover:animate-bounce" />
                Talk to Us
              </button>
            </motion.div>

            {/* Stat Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {statPills.map((pill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className={`bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm text-[10px] font-bold border border-slate-100 flex items-center justify-center font-display tracking-widest uppercase text-slate-600`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                  {pill.text}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Imagery Side - The Collage */}
          <div className="relative h-[450px] md:h-[600px] lg:h-[700px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative z-10 w-full max-w-[650px] aspect-square rounded-[64px] overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.15)] bg-slate-50 border-4 border-white/30"
            >
              <img 
                src="/partner_ecosystem_infographic.png" 
                alt="Partner Ecosystem" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent" />
            </motion.div>

            {/* Floating Glass Badges */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] -left-4 lg:-left-12 z-20 bg-white/70 backdrop-blur-xl p-5 rounded-3xl border border-white/50 shadow-2xl flex items-center gap-4 border-l-4 border-l-emerald-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/20">
                💰
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Earning Potential</p>
                <p className="text-xl font-black text-slate-900">30% Commissions</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 20, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] -right-4 lg:-right-8 z-20 bg-white/70 backdrop-blur-xl p-5 rounded-3xl border border-white/50 shadow-2xl flex items-center gap-4 border-l-4 border-l-blue-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center text-2xl shadow-lg shadow-blue-500/20">
                🚀
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Business Expansion</p>
                <p className="text-xl font-black text-slate-900">Enterprise Ready</p>
              </div>
            </motion.div>

            {/* Background Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-200/20 rounded-full blur-[120px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
