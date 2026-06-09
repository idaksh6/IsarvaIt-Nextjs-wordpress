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
    <section className="py-10 lg:py-16 bg-gradient-to-t from-slate-50 to-[#F8FAFC] relative overflow-hidden flex items-center justify-center min-h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-50/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black capitalize tracking-widest mb-6"
            >
              Support & Clarity
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-900 mb-8 font-display text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize"
            >
              Common <span className="text-blue-600">Questions</span>
            </motion.h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about our white-label partnership model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-[32px] border shadow-md overflow-hidden transition-colors duration-300 flex flex-col self-start
                  ${openIndex === index
                    ? "bg-blue-50 border-blue-200"
                    : "bg-white border-slate-100"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 bg-transparent transition-all duration-300 ${openIndex === index ? "" : "min-h-[104px] md:min-h-[110px]"}`}
                >
                  <span className={`text-lg md:text-xl font-black font-display tracking-tight ${openIndex === index ? "text-blue-600" : "text-slate-900"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-500 ${openIndex === index ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
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
                      <div className="px-6 md:px-8 pb-8 md:pb-10 text-gray-600 text-base leading-relaxed">
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