"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
  {
    title: "Client-Centric Network",
    desc: "Professionals with established trust and deep client relationships."
  },
  {
    title: "Long-Term Growth Mindset",
    desc: "Strategic thinkers focused on sustainable, multi-year business expansion."
  },
  {
    title: "Digital-Ready Communicators",
    desc: "Agile experts who understand the power of modern digital solutions."
  }
];

const IdealPartners = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FDF8F2] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-16 text-[#111827] uppercase tracking-tight"
        >
          Who We're <span className="text-[#ea580c]">Looking For</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {partners.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring" }}
              className="flex-1 min-w-full sm:min-w-[300px] p-6 sm:p-8 md:p-12 rounded-[24px] md:rounded-[48px] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h3 className="text-[22px] sm:text-3xl font-bold font-display text-[#111827] uppercase leading-tight mb-4 sm:mb-6 relative z-10 hyphens-auto sm:hyphens-none break-words">
                {item.title}
              </h3>
              <p className="text-gray-500 font-body text-base sm:text-lg leading-relaxed relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealPartners;
