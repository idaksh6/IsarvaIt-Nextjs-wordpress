"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Megaphone, 
  Palette, 
  UserCircle, 
  Rocket, 
  Code2, 
  Award 
} from "lucide-react";

const partners = [
  { name: "Digital Marketing Agencies", icon: Megaphone, color: "text-blue-600", bg: "bg-blue-50" },
  { name: "Creative & Design Studios", icon: Palette, color: "text-emerald-600", bg: "bg-emerald-50" },
  { name: "Freelancers & Consultants", icon: UserCircle, color: "text-indigo-600", bg: "bg-indigo-50" },
  { name: "Growing Startups", icon: Rocket, color: "text-orange-600", bg: "bg-orange-50" },
  { name: "IT & Software Development", icon: Code2, color: "text-purple-600", bg: "bg-purple-50" },
  { name: "Branding & Advertising", icon: Award, color: "text-rose-600", bg: "bg-rose-50" },
];

const WhiteLabelWhoWeWorkWith = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-[#F8FAFC] relative overflow-hidden">
      {/* Background Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-40 bg-dots pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-6"
          >
            Diverse Ecosystem
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-8 font-display uppercase tracking-tight"
          >
            Who We <span className="text-blue-600">Work With</span>
          </motion.h2>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            We partner with businesses looking to grow through white-label solutions, 
            serving as their trusted backend development arm across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 rounded-[40px] bg-white border border-slate-100 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col items-center text-center md:items-start md:text-left gap-6"
            >
              <div className={`w-16 h-16 rounded-2xl ${partner.bg} ${partner.color} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-sm`}>
                <partner.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-display uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                {partner.name}
              </h3>
              
              <div className="w-12 h-1 bg-slate-100 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelWhoWeWorkWith;
