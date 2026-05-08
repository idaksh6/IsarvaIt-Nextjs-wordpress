"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Users, Target, Cpu } from "lucide-react";

const partners = [
  {
    title: "Client-Centric Network",
    desc: "Professionals with established trust and deep client relationships.",
    icon: <Users className="w-8 h-8" />,
    color: "from-orange-500 to-amber-500"
  },
  {
    title: "Long-Term Growth Mindset",
    desc: "Strategic thinkers focused on sustainable, multi-year business expansion.",
    icon: <Target className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Digital-Ready Communicators",
    desc: "Agile experts who understand the power of modern digital solutions.",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-blue-500 to-indigo-500"
  }
];

const viewportConfig = { once: true };

const headerVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const cardVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 100 }
  })
};

const IdealPartners = () => {
  return (
    <section className="py-16 md:py-32 bg-[#FDF8F2] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-100/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-emerald-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={headerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={viewportConfig}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#111827] uppercase tracking-tighter">
            Who We're <span className="text-[#ea580c]">Looking For</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#ea580c] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {partners.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={viewportConfig}
              className="flex flex-col items-center p-8 md:p-12 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Card background decoration */}
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                {React.cloneElement(item.icon as React.ReactElement, { className: "w-32 h-32" } as any)}
              </div>

              {/* Icon Container */}
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase leading-tight mb-6 relative z-10">
                {item.title}
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed relative z-10 max-w-xs">
                {item.desc}
              </p>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r ${item.color} group-hover:w-full transition-all duration-700`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealPartners;
