"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Users, Headset, Zap, Trophy } from "lucide-react";

const benefits = [
  { title: "100% White-Label Execution", icon: Shield, color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Complete Confidentiality", icon: Lock, color: "text-emerald-600", bg: "bg-emerald-50" },
  { title: "Scalable Team Support", icon: Users, color: "text-indigo-600", bg: "bg-indigo-50" },
  { title: "Dedicated Account Management", icon: Headset, color: "text-orange-600", bg: "bg-orange-50" },
  { title: "Fast Turnaround Times", icon: Zap, color: "text-purple-600", bg: "bg-purple-50" },
  { title: "Premium Quality Deliverables", icon: Trophy, color: "text-rose-600", bg: "bg-rose-50" },
];

const WhiteLabelBenefits = () => {
  return (
    <section className="py-10 lg:py-16 bg-gradient-to-t from-slate-50 to-[#F8FAFC] relative overflow-hidden">
      {/* Background Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-40 bg-mesh-blue pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-6"
          >
            The Partner Edge
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-900 mb-8 font-display text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize"
          >
            Benefits of <span className="text-blue-600">Partnering</span>
          </motion.h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Unlocking exclusive advantages designed to accelerate your agency's growth
            and streamline your development operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-10 rounded-[40px] bg-white border border-slate-100 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className={`w-20 h-20 rounded-3xl ${benefit.bg} ${benefit.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm`}>
                <benefit.icon className="w-10 h-10" />
              </div>
              <h3 className="text-slate-900 group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelBenefits;
