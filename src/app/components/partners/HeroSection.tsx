"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = ({ onApply }: { onApply: () => void }) => {
  const statPills = [
    { text: "💰 Up to 30% Commission", color: "from-orange-400 to-orange-600" },
    { text: "⭐ Silver & Gold Tiers", color: "from-blue-400 to-blue-600" },
    { text: "🚀 Backend Delivery Included", color: "from-emerald-400 to-emerald-600" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-24 bg-[#FDF8F2]">
      {/* Background Subtle mesh */}
      <div className="absolute inset-0 z-0 opacity-40 bg-mesh-green pointer-events-none" />
      
      {/* Antigravity Floating Shapes */}
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-24 h-24 bg-orange-600/10 rounded-3xl blur-xl z-0"
      />
      <motion.div 
        animate={{ 
          y: [0, 40, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-[15%] w-32 h-32 bg-emerald-600/10 rounded-full blur-2xl z-0"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-sm font-bold mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Channel Partner Program
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-bold text-[#111827] leading-tight mb-8"
            >
              Scale Beyond <br />
              <span className="text-[#ea580c]">Gravity</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 font-normal max-w-lg mb-10 leading-relaxed font-body"
            >
              Join Isarva's Channel Partner Program — deliver enterprise digital solutions without building an in-house team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-6"
            >
              <button 
                onClick={onApply}
                className="press-illusion-btn-orange whitespace-nowrap min-w-[180px]"
              >
                Apply Now
              </button>
              <button 
                onClick={onApply}
                className="press-illusion-btn-white whitespace-nowrap min-w-[180px] border border-gray-200"
              >
                Talk to Us
              </button>
            </motion.div>

            {/* Stat Pills */}
            <div className="flex flex-wrap gap-4 mt-12">
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
                  className="bg-white px-5 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100/50 backdrop-blur-sm text-sm font-bold text-gray-800 flex items-center gap-2"
                >
                  {pill.text}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Antigravity Image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -20, 0] 
              }}
              transition={{ 
                opacity: { duration: 1 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-full max-w-[600px] aspect-square"
            >
              <Image
                src="/partners/hero-banner.png"
                alt="Colorful antigravity 3D geometric shapes"
                fill
                className="object-contain"
                priority
              />
              
              {/* Floating Decorative Elements */}
              <div className="absolute top-1/4 -right-10 w-24 h-24 bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 -left-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl animate-pulse delay-700" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
