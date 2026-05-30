"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
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
    icon: <Users className="w-8 h-8 text-emerald-600" />,
    title: "Expand Without Adding Resources",
    desc: "Leverage our 50+ expert team without overhead costs.",
    color: "emerald"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    title: "Create New Revenue Opportunities",
    desc: "Unlock enterprise-grade service streams for your clients.",
    color: "blue"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-orange-600" />,
    title: "Strengthen Your Brand Value",
    desc: "Deliver premium solutions under your own trusted brand.",
    color: "orange"
  },
  {
    icon: <Zap className="w-8 h-8 text-indigo-600" />,
    title: "Faster Execution & Go-To-Market",
    desc: "Reduce development cycles with our pre-built frameworks.",
    color: "indigo"
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-rose-600" />,
    title: "Scalable Growth Model",
    desc: "Scale your business horizontally with unlimited capacity.",
    color: "rose"
  },
];

const bgVariants1: Variants = {
  animate: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    transition: { duration: 12, repeat: Infinity, ease: "easeInOut" }
  }
};

const bgVariants2: Variants = {
  animate: {
    y: [0, 30, 0],
    x: [0, -20, 0],
    transition: { duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }
  }
};

const viewportConfig = { once: true };

const headingVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const cardVariants: Variants = {
  initial: { opacity: 0, y: 40 },
  whileInView: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.6 }
  })
};

const WhyPartner = () => {
  return (
    <section className="py-10 lg:py-16 relative overflow-hidden bg-white">
      {/* Antigravity background elements */}
      <motion.div
        variants={bgVariants1}
        animate="animate"
        className="absolute top-40 left-10 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"
      />


      <motion.div
        variants={bgVariants2}
        animate="animate"
        className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.h2
            variants={headingVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={viewportConfig}
            className="text-[#111827] mb-4 md:mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize"
          >
            Why Choose <span className="text-emerald-600">Isarva Infotech</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto">
          {props.slice(0, 3).map((item, index) => (
            <div key={index} className={index === 2 ? "md:col-span-2 lg:col-span-1" : ""}>
              <ValueCard {...item} index={index} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mx-auto mt-6 md:mt-8">
          {props.slice(3).map((item, index) => (
            <ValueCard key={index + 3} {...item} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ icon, title, desc, index, color }: { icon: any, title: string, desc: string, index: number, color?: string }) => {
  const themeColor = color || 'blue';

  const colorVariants: Record<string, string> = {
    emerald: "from-emerald-600/0 to-emerald-100/50 bg-emerald-50",
    blue: "from-blue-600/0 to-blue-100/50 bg-blue-50",
    orange: "from-orange-600/0 to-orange-100/50 bg-orange-50",
    indigo: "from-indigo-600/0 to-indigo-100/50 bg-indigo-50",
    rose: "from-rose-600/0 to-rose-100/50 bg-rose-50",
  };

  const bgVariants: Record<string, string> = {
    emerald: "to-emerald-100/70 border-emerald-200/50",
    blue: "to-blue-100/70 border-blue-200/50",
    orange: "to-orange-100/70 border-orange-200/50",
    indigo: "to-indigo-100/70 border-indigo-200/50",
    rose: "to-rose-100/70 border-rose-200/50",
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={viewportConfig}
      className={`p-8 md:p-10 rounded-[32px] hover:shadow-2xl hover:-translate-y-2 md:hover:-translate-y-3 transition-all duration-500 group bg-gradient-to-br from-white ${bgVariants[themeColor]} relative overflow-hidden border border-transparent hover:border-current`} style={{ borderColor: 'rgba(0,0,0,0.05)' }}
    >
      {/* Subtle glow on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorVariants[themeColor].split(' ').slice(0, 2).join(' ')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative z-10 flex flex-col items-center text-center sm:items-start sm:text-left">
        <div className={`mb-5 md:mb-8 p-3 md:p-4 rounded-2xl bg-gray-50/50 group-hover:scale-110 group-hover:${colorVariants[themeColor].split(' ')[2]} transition-all duration-300 inline-block`}>
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4 text-[#111827]">
          {title}
        </h3>
        <p className="text-gray-500 text-lg leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export default WhyPartner;
