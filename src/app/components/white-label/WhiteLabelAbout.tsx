"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Layers, Zap, ShieldCheck, Banknote, LifeBuoy } from "lucide-react";

const benefits = [
  {
    title: "Scale without an in-house team",
    description: "Expand your capacity instantly without the overhead costs of hiring and training.",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50",
    borderColor: "group-hover:border-blue-400"
  },
  {
    title: "Expand services with ease",
    description: "Offer more specialized services to your clients by leveraging our deep technical expertise.",
    icon: Layers,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    borderColor: "group-hover:border-emerald-400"
  },
  {
    title: "Faster project delivery",
    description: "Speed up your development cycles and meet tight deadlines with our dedicated support.",
    icon: Zap,
    color: "text-amber-600",
    bg: "bg-amber-50",
    borderColor: "group-hover:border-amber-400"
  },
  {
    title: "White-label, full brand control",
    description: "We work as your silent partner. Your brand remains the face of the project throughout.",
    icon: ShieldCheck,
    color: "text-purple-600",
    bg: "bg-purple-50",
    borderColor: "group-hover:border-purple-400"
  },
  {
    title: "Cost-effective and reliable",
    description: "Get high-quality development work at competitive prices, ensuring healthy margins for your agency.",
    icon: Banknote,
    color: "text-rose-600",
    bg: "bg-rose-50",
    borderColor: "group-hover:border-rose-400"
  },
  {
    title: "24/7 Dedicated Support",
    description: "Enjoy round-the-clock assistance and communication, ensuring your projects never face downtime.",
    icon: LifeBuoy,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    borderColor: "group-hover:border-cyan-400"
  },
];

const WhiteLabelAbout = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-100/40 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-purple-100 text-purple-700 text-xs font-black uppercase tracking-widest mb-6 shadow-sm"
          >
            The Partnership Advantage
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-8 font-display uppercase tracking-tight"
          >
            Why Agencies <span className="text-blue-600">Choose Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 font-medium leading-relaxed"
          >
            We empower agencies to deliver premium digital solutions under their own brand, 
            providing the technical muscle needed to scale rapidly and efficiently.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              <div
                className={`h-full p-8 rounded-[32px] bg-white/80 backdrop-blur-xl border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 relative overflow-hidden group hover:-translate-y-2`}
              >
                {/* Vibrant Hover Gradient Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-bl ${benefit.color === 'text-blue-600' ? 'from-blue-500' : benefit.color === 'text-emerald-600' ? 'from-emerald-500' : benefit.color === 'text-amber-600' ? 'from-amber-500' : benefit.color === 'text-purple-600' ? 'from-purple-500' : benefit.color === 'text-cyan-600' ? 'from-cyan-500' : 'from-rose-500'}`} />
                
                <div className={`w-14 h-14 rounded-2xl ${benefit.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-white`}>
                  <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              <div className={`absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-700 rounded-b-[32px]`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelAbout;
