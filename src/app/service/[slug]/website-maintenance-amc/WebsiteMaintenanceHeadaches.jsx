"use client";

import React from "react";
import { Clock, ShieldAlert, ArrowUpCircle, Wrench, TrendingDown, Frown } from "lucide-react";
import { motion } from "framer-motion";

const headaches = [
  {
    title: "Website loads slowly",
    description: "Slow pages frustrate visitors and reduce conversions.",
    icon: Clock,
  },
  {
    title: "Security concerns",
    description: "Threats can damage your site, rankings, and reputation.",
    icon: ShieldAlert,
  },
  {
    title: "Software needs updates",
    description: "Outdated plugins and themes create avoidable risks.",
    icon: ArrowUpCircle,
  },
  {
    title: "Features not working",
    description: "Broken forms and links cost leads and hurt SEO.",
    icon: Wrench,
  },
  {
    title: "Search visibility declining",
    description: "Poor performance and stale content impact rankings.",
    icon: TrendingDown,
  }
];

const containerVariants = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const WebsiteMaintenanceHeadaches = () => {
  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-emerald-200 text-emerald-700 font-semibold text-sm mb-6 shadow-sm">
            <Frown className="w-4 h-4 text-emerald-600" />
            <span className="capitalize tracking-wider">Website headaches</span>
          </div>
          <h2 className="mb-6">
            Site frustrations? <span className="text-emerald-600">You’re not alone!</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            If these problems sound familiar, our maintenance program is built to take the stress off your plate.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 lg:grid lg:grid-cols-5"
        >
          {headaches.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="w-full max-w-sm sm:max-w-none sm:w-[calc(50%-12px)] lg:w-auto bg-white rounded-3xl p-6 border border-gray-100 shadow-lg hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="mb-3 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteMaintenanceHeadaches;
