"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years of Industry Expertise" },
  { value: "500+", label: "Trusted Clients" },
  { value: "1000+", label: "Successful Projects" },
  { value: "100+", label: "Industries Served" },
  { value: "80+", label: "Skilled Professionals" },
];

const features = [
  "Transparent & Affordable Pricing",
  "Dedicated Long-term Support (AMC)",
  "Strong WordPress Expertise",
  "Assured Compliance & Confidentiality",
];

const WhiteLabelStats = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-[#F8FAFC] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-6"
          >
            By The Numbers
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-8 font-display uppercase tracking-tight"
          >
            Why Partner with <span className="text-blue-600">Isarva?</span>
          </motion.h2>
        </div>

        {/* Row 1: Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-16 md:mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 text-center flex flex-col items-center justify-center min-h-[200px] group hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-4 font-display group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em] leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2: Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              className="group flex items-center gap-6 bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-500">
                <div className="w-3 h-3 rounded-full bg-blue-600 group-hover:bg-white transition-colors" />
              </div>
              <span className="text-slate-800 font-black text-sm uppercase tracking-tight leading-tight">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelStats;
