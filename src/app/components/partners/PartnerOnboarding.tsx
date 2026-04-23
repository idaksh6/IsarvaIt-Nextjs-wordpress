"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Apply Online",
    desc: "Fill out our quick partnership inquiry form to share your business profile.",
    color: "text-emerald-600",
    gradient: "from-emerald-700 to-emerald-950"
  },
  {
    number: "02",
    title: "Discovery Call",
    desc: "We'll discuss your goals and choose the right tier (Silver or Gold) for you.",
    color: "text-blue-600",
    gradient: "from-blue-700 to-indigo-950"
  },
  {
    number: "03",
    title: "Onboarding",
    desc: "Access your dashboard, marketing collateral, and training materials.",
    color: "text-orange-600",
    gradient: "from-orange-700 to-red-950"
  },
  {
    number: "04",
    title: "Start Scaling",
    desc: "Bring your first project and watch us handle the delivery while you earn.",
    color: "text-purple-600",
    gradient: "from-purple-700 to-violet-950"
  }
];

const PartnerOnboarding = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FDF8F2] relative overflow-hidden">


      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-24 text-[#111827] uppercase tracking-tight"
        >
          Your Journey to <span className="text-emerald-600">Growth</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                ease: [0.23, 1, 0.32, 1], // Custom cubic-bezier for premium feel
                delay: index * 0.1 
              }}
              className="relative p-8 lg:p-10 rounded-[32px] md:rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-emerald-100 transition-all duration-500 group cursor-default"
            >
              <div className={`text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br ${step.gradient} opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 mb-6 md:mb-8 font-display pointer-events-none`}>
                {step.number}
              </div>
              <h3 className={`text-xl md:text-2xl font-black font-display text-[#111827] uppercase leading-tight mb-4 group-hover:${step.color} transition-colors duration-500`}>
                {step.title}
              </h3>
              <p className="text-gray-500 font-body text-base md:text-lg leading-relaxed relative z-10">
                {step.desc}
              </p>
              
              {/* Decorative Light Aligned Dots Pattern on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[32px] md:rounded-[40px] pointer-events-none -z-10"
                   style={{
                     backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #10b98115 1px, transparent 0)`,
                     backgroundSize: '16px 16px'
                   }}
              />
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerOnboarding;
