"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is a white-label partnership?",
    answer: "A white-label partnership allows you to offer services to your clients under your own brand while we handle the backend execution."
  },
  {
    question: "Will my clients know about Isarva Infotech?",
    answer: "No, all our services are completely white-label and confidential. Your brand remains the only point of contact for your clients."
  },
  {
    question: "What kind of services do you offer?",
    answer: "We provide website development, mobile app development, UI/UX design, e-commerce solutions, maintenance, and digital support services."
  },
  {
    question: "How do you ensure quality and timely delivery?",
    answer: "We follow a structured workflow, assign dedicated teams, and maintain clear communication to ensure consistent quality and on-time delivery."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer continuous maintenance, updates, and technical support based on your requirements."
  },
  {
    question: "Do you sign an NDA for white-label projects?",
    answer: "Yes, we strictly follow NDA and confidentiality agreements to ensure complete data security and protect your client relationships at all times."
  },
  {
    question: "Can you work as an extended team for our agency?",
    answer: "Absolutely. We work as a seamless extension of your team, aligning with your processes, communication style, and timelines to ensure smooth collaboration."
  },
  {
    question: "How do you handle communication during projects?",
    answer: "We maintain transparent and regular communication through your preferred channels, providing updates, progress reports, and quick responses to ensure clarity at every stage."
  }
];

const WhiteLabelFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-t from-slate-50 to-[#F8FAFC] relative overflow-hidden">
      {/* Background Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-50/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-6"
            >
              Support & Clarity
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 mb-8 font-display uppercase tracking-tight"
            >
              Common <span className="text-blue-600">Questions</span>
            </motion.h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Everything you need to know about our white-label partnership model.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full text-left p-6 md:p-8 rounded-[32px] border transition-all duration-300 flex items-center justify-between gap-4 ${
                    openIndex === index 
                    ? "bg-blue-50 border-blue-200 shadow-xl shadow-blue-600/5" 
                    : "bg-slate-50/50 border-slate-100 hover:border-blue-200"
                  }`}
                >
                  <span className={`text-lg md:text-xl font-black font-display uppercase tracking-tight ${openIndex === index ? "text-blue-600" : "text-slate-900"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-500 ${openIndex === index ? "rotate-180 text-blue-600" : "text-slate-400 group-hover:text-blue-600"}`} />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 md:p-10 pb-10 md:pb-12 text-slate-600 text-lg leading-relaxed font-medium bg-white/50 rounded-b-[32px] border-x border-b border-blue-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelFAQ;
