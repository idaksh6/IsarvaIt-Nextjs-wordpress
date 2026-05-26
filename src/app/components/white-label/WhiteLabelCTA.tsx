"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

const WhiteLabelCTA = ({ onContact }: { onContact: () => void }) => {
  return (
    <section className="py-10 lg:py-16 bg-blue-50/50 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[4rem] bg-gradient-to-br from-[#F8FAFC] via-white to-blue-50/50 overflow-hidden p-4 md:p-8 lg:p-12 text-center shadow-[0_40px_100px_rgba(37,99,235,0.05)] border border-slate-100 group"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[120px]" />
            <div className="absolute inset-0 bg-dots opacity-[0.1]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-8 border border-blue-100"
            >
              Take the Next Step
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-900 mb-8 font-display text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase"
            >
              Ready to Grow
              <span className="text-blue-600"> Without Limits?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl lg:text-2xl text-gray-600 mb-16 leading-relaxed max-w-2xl mx-auto"
            >
              Scale your agency with a reliable white-label partner.
              Expert execution, fast delivery, and complete confidentiality—guaranteed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <button
                onClick={onContact}
                className="press-illusion-btn-orange w-full sm:w-auto px-12 py-6 text-white font-black "
              >
                Become a Partner
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex flex-col gap-4 w-full sm:w-auto text-left">
                <a href="tel:+919902863697" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors group justify-center sm:justify-start">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-bold">+91 99028 63697</span>
                </a>
                <a href="mailto:marketing@isarvait.com" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors group justify-center sm:justify-start">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-bold">marketing@isarvait.com</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhiteLabelCTA;
