"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";

const PartnerCTA = ({ onApply }: { onApply: () => void }) => {
  return (
    <section className="py-24 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto rounded-[64px] border border-orange-100 bg-white p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center shadow-2xl shadow-orange-600/5 group"
      >
        {/* Background Patterns for "Banner" feel */}
        <div className="absolute inset-0 z-0 opacity-40 bg-mesh-green pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-dots opacity-[0.1] pointer-events-none" />
        
        {/* Decorative Image Elements */}
        <motion.div 
          animate={{ 
            y: [0, 40, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -right-24 w-[600px] h-[600px] opacity-10 pointer-events-none"
        >
          <Image src="/partners/hero-banner.png" alt="" fill className="object-contain" />
        </motion.div>

        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] opacity-[0.07] pointer-events-none"
        >
          <Image src="/partners/hero-banner.png" alt="" fill className="object-contain" />
        </motion.div>

        <div className="relative z-10 w-full flex flex-col items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl md:text-[84px] font-bold text-[#111827] mb-8 leading-none uppercase tracking-tighter"
            >
              Ready to Grow <br /> <span className="text-[#ea580c]">Without Limits?</span>
            </motion.h2>
            
            <p className="text-gray-500 text-xl md:text-2xl font-medium font-body max-w-2xl mb-12">
               Join our partner ecosystem and deliver enterprise-grade digital solutions to your clients today.
            </p>

            <div className="flex flex-col items-center gap-10 w-full">
                 <button 
                   onClick={onApply}
                   className="press-illusion-btn-orange min-w-[280px] h-16 text-xl font-display uppercase tracking-wider"
                 >
                     Apply Now — Partner With Us <ArrowRight className="w-6 h-6" />
                 </button>

                <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-orange-100 w-full max-w-2xl">
                  <a href="mailto:marketing@isarvait.com" className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                        <Mail className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="font-bold font-body">marketing@isarvait.com</span>
                  </a>
                  <a href="tel:+919902863697" className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                        <Phone className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="font-bold font-body">+91 99028 63697</span>
                  </a>
                </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PartnerCTA;
