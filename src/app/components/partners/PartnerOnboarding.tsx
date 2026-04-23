"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Apply Online",
    desc: "Fill out our quick partnership inquiry form to share your business profile.",
    color: "text-emerald-600"
  },
  {
    number: "02",
    title: "Discovery Call",
    desc: "We'll discuss your goals and choose the right tier (Silver or Gold) for you.",
    color: "text-blue-600"
  },
  {
    number: "03",
    title: "Onboarding",
    desc: "Access your dashboard, marketing collateral, and training materials.",
    color: "text-orange-600"
  },
  {
    number: "04",
    title: "Start Scaling",
    desc: "Bring your first project and watch us handle the delivery while you earn.",
    color: "text-emerald-600"
  }
];

const PartnerOnboarding = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FDF8F2] relative overflow-hidden">


      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-24 text-[#111827] uppercase tracking-tight"
        >
          Your Journey to <span className="text-emerald-600">Growth</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative p-8 lg:p-12 rounded-[32px] md:rounded-[48px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className={`text-5xl md:text-6xl font-black ${step.color} opacity-10 group-hover:opacity-20 transition-all mb-6 md:mb-8 font-display`}>
                {step.number}
              </div>
              <h3 className="text-2xl font-bold font-display text-[#111827] uppercase leading-tight mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 font-body text-lg leading-relaxed">
                {step.desc}
              </p>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gray-100 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerOnboarding;
