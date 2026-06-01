"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

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

const viewportConfig = { once: true };

const headingVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stepVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
      delay: i * 0.1
    }
  }),
  hover: { y: -12, scale: 1.02, transition: { duration: 0.3 } }
};

const PartnerOnboarding = () => {
  return (
    <section className="py-12 lg:py-16 bg-[#FDF8F2] relative overflow-hidden">


      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          variants={headingVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={viewportConfig}
          className="mb-10 text-[#111827] text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize"
        >
          Your Journey to <span className="text-emerald-600">Growth</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={stepVariants}
              initial="initial"
              whileInView="whileInView"
              whileHover="hover"
              viewport={viewportConfig}
              className="relative p-4 lg:p-6 rounded-[32px] md:rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-emerald-100 transition-all duration-500 group cursor-default"
            >
              <div className={`text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br ${step.gradient} opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 mb-6 md:mb-8 pointer-events-none`}>
                {step.number}
              </div>
              <h3 className={`text-xl md:text-2xl font-black text-[#111827] uppercase leading-tight mb-4 group-hover:${step.color} transition-colors duration-500`}>
                {step.title}
              </h3>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed relative z-10">
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
