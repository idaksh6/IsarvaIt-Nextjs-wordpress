"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Zap, Target } from "lucide-react";
import heroImage from "../../../../public/white_label_abstract.png";

const WhiteLabelHero = ({ onContact }: { onContact: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/50">
      {/* Vibrant Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-blue-300/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-300/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] bg-rose-200/20 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-dots opacity-[0.1]" />
        <div className="absolute inset-0 bg-mesh-blue opacity-[0.05]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-200/50 bg-white/60 backdrop-blur-md shadow-sm text-blue-700 text-sm font-black tracking-wide mb-8 font-display"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              White-Label Agency Partnerships
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-900 leading-[1.05] mb-6 font-display tracking-tight uppercase"
            >
              Scale Your Agency <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
                Without Limits
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium"
            >
              Deliver world-class digital solutions behind the scenes. Our white-label team acts as your invisible tech arm, helping you grow while we handle the heavy lifting.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <button
                onClick={onContact}
                className="press-illusion-btn-orange w-full sm:w-auto px-10 py-5 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 group"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-6 max-w-sm mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
                <span className="text-slate-700 font-bold text-sm">100% White-Label</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-slate-700 font-bold text-sm">Fast Turnaround</span>
              </div>
            </motion.div>
          </div>

          <div className="relative flex items-center justify-center mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative z-10 w-full max-w-[550px] rounded-[48px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-4 border-white bg-slate-100 flex items-center justify-center"
              style={{ minHeight: "350px" }}
            >
              <img
                src={heroImage.src}
                alt="White-Label Agency Partnership"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 right-0 sm:-right-6 lg:-right-2 xl:-right-6 z-20 bg-white/90 backdrop-blur-xl p-4 rounded-3xl border border-slate-200 shadow-2xl flex items-center gap-3 border-l-4 border-l-blue-500"
            >
              <div className="w-10 h-10 rounded-2xl bg-blue-500 text-white flex items-center justify-center text-xl shadow-lg shadow-blue-500/20">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth</p>
                <p className="text-lg font-black text-slate-900">+150% ROI</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 left-0 sm:-left-6 lg:-left-2 xl:-left-6 z-20 bg-white/90 backdrop-blur-xl p-4 rounded-3xl border border-slate-200 shadow-2xl flex items-center gap-3 border-l-4 border-l-emerald-500"
            >
              <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-xl shadow-lg shadow-emerald-500/20">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</p>
                <p className="text-lg font-black text-slate-900">Verified</p>
              </div>
            </motion.div>

            {/* Background Decorative Blurs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-200/20 rounded-full blur-[120px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelHero;
