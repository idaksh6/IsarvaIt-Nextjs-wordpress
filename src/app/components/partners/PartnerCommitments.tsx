"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, MessageSquare, Headset, BookOpen, UserCheck, Clock } from "lucide-react";

const commitments = [
  { text: "End-to-End Technical Delivery", icon: <Shield className="w-8 h-8"/> },
  { text: "Transparent Communication Channels", icon: <MessageSquare className="w-8 h-8"/> },
  { text: "Priority Support for Partner Clients", icon: <Headset className="w-8 h-8"/> },
  { text: "Regular Knowledge Sharing Sessions", icon: <BookOpen className="w-8 h-8"/> },
  { text: "Dedicated Partner Success Desk", icon: <UserCheck className="w-8 h-8"/> },
  { text: "Strict Project Timelines & QC", icon: <Clock className="w-8 h-8"/> },
];

const PartnerCommitments = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-[#111827] mb-6 uppercase"
          >
            Partner <span className="text-emerald-600">Commitments</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {commitments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 md:p-10 rounded-[24px] md:rounded-[32px] border border-emerald-200/60 hover:border-emerald-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group bg-gradient-to-br from-white to-emerald-100/70 relative overflow-hidden flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                 {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#111827] leading-tight">{item.text}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCommitments;
