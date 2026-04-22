"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  BarChart3 
} from "lucide-react";

const props = [
  {
    icon: <Users className="w-8 h-8 text-orange-600" />,
    title: "Expand Without Adding Resources",
    desc: "Leverage our 50+ expert team without overhead costs.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
    title: "Create New Revenue Opportunities",
    desc: "Unlock enterprise-grade service streams for your clients.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Strengthen Your Brand Value",
    desc: "Deliver premium solutions under your own trusted brand.",
  },
  {
    icon: <Zap className="w-8 h-8 text-amber-600" />,
    title: "Faster Execution & Go-To-Market",
    desc: "Reduce development cycles with our pre-built frameworks.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
    title: "Scalable Growth Model",
    desc: "Scale your business horizontally with unlimited capacity.",
  },
];

const WhyPartner = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Antigravity background elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-10 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          x: [0, -20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-bold text-[#111827] mb-6"
          >
            Why Choose <span className="text-[#ea580c]">Isarva</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {props.slice(0, 3).map((item, index) => (
            <ValueCard key={index} {...item} index={index} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {props.slice(3).map((item, index) => (
            <ValueCard key={index + 3} {...item} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ icon, title, desc, index }: { icon: any, title: string, desc: string, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className="p-10 rounded-[32px] hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group bg-white border border-gray-100 relative overflow-hidden"
  >
    {/* Subtle glow on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <div className="mb-8 p-4 rounded-2xl bg-gray-50/50 group-hover:scale-110 group-hover:bg-orange-50 transition-all duration-300 inline-block">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-[#111827] font-display">
        {title}
      </h3>
      <p className="text-gray-500 text-lg leading-relaxed font-body">
        {desc}
      </p>
    </div>
  </motion.div>
);

export default WhyPartner;
