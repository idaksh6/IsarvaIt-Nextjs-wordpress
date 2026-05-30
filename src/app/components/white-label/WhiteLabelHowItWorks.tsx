"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Project Discovery",
    description: "Provide your client’s project details, goals, and expectations for a deep-dive analysis.",
    color: "from-blue-600 to-indigo-600"
  },
  {
    number: "02",
    title: "Strategic Blueprint",
    description: "We analyze requirements and suggest the best technical approach aligned with your vision.",
    color: "from-indigo-600 to-purple-600"
  },
  {
    number: "03",
    title: "White-Label Execution",
    description: "Our team builds the solution under your brand with seamless collaboration and updates.",
    color: "from-purple-600 to-emerald-600"
  },
  {
    number: "04",
    title: "Rigorous QA",
    description: "Conducting thorough testing before sharing the project with you for final approval.",
    color: "from-emerald-600 to-teal-600"
  },
  {
    number: "05",
    title: "Launch & Growth",
    description: "We deliver client-ready solutions and provide ongoing support to fuel further expansion.",
    color: "from-teal-600 to-blue-600"
  }
];

const WhiteLabelHowItWorks = () => {
  return (
    <section className="py-10 lg:py-16 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 opacity-40 bg-mesh-blue pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-6"
          >
            Our Seamless Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-900 mb-8 font-display text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize"
          >
            How We <span className="text-blue-600">Work Together</span>
          </motion.h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A seamless, transparent process designed to integrate perfectly with your agency workflow,
            ensuring maximum efficiency and client satisfaction.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-slate-200 z-0">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-20 h-20 rounded-3xl bg-white border-2 border-slate-100 flex items-center justify-center text-2xl font-black mb-8 shadow-sm group-hover:shadow-2xl group-hover:scale-110 group-hover:border-blue-500 transition-all duration-500 relative z-10`}>
                  <span className={`bg-gradient-to-br ${step.color} bg-clip-text text-transparent group-hover:text-white group-hover:bg-none transition-colors duration-500`}>
                    {step.number}
                  </span>
                  {/* Hover background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 rounded-[22px] -z-10 transition-opacity duration-500`} />
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-4 font-display tracking-tight group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelHowItWorks;
