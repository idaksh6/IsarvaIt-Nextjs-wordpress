"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I receive my commissions?",
    answer: "Commissions are paid out monthly via bank transfer or PayPal. Once a project reaches its first milestone payment from the client, your commission is processed within 15 business days."
  },
  {
    question: "Do I need technical knowledge to be a partner?",
    answer: "While basic digital literacy helps, you don't need to be a developer. We handle all technical deliveries, scoping, and demos. Your primary role is relationship management and high-level strategy."
  },
  {
    question: "Can I use Isarva Infotech's brand in my marketing?",
    answer: "Yes, Gold partners receive full trademark rights and a 'Certified Partner' badge. Silver partners can mention their partnership in proposals and on their website."
  },
  {
    question: "Is there a cost to join the program?",
    answer: "No, joining the program is currently free. We focus on building high-quality relationships rather than charging entry fees."
  },
  {
    question: "What support do I get for closing deals?",
    answer: "We provide joint pitch decks, dedicated technical demo support, and a knowledge base full of sales collateral. Gold partners also get a dedicated account manager."
  },
  {
    question: "How do we communicate during a project?",
    answer: "We establish clear communication channels via Slack, email, and scheduled video calls. You'll have a dedicated project manager ensuring seamless collaboration."
  }
];

const viewportConfig = { once: true };

const headingVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const faqItemVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  whileInView: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 }
  })
};

const accordionVariants: Variants = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }
};

const PartnersFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.h2
            variants={headingVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={viewportConfig}
            className="text-[#111827] capitalize"
          >
            Common <span className="text-emerald-600">Questions</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={faqItemVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={viewportConfig}
              className={`rounded-[32px] border shadow-md overflow-hidden transition-colors duration-300 flex flex-col self-start min-h-[120px]
                ${openIndex === index
                  ? "bg-emerald-50 border-emerald-200"
                  : "bg-white border-slate-100"
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 bg-transparent transition-all duration-300 ${openIndex === index ? "" : "min-h-[104px] md:min-h-[110px]"}`}
              >
                <span className={`text-lg md:text-xl font-black font-display tracking-tight ${openIndex === index ? "text-emerald-600" : "text-slate-900"}`}>
                  {faq.question}
                </span>
                <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-500 ${openIndex === index ? "rotate-180 text-emerald-600" : "text-slate-400"}`} />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    variants={accordionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
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
    </section>
  );
};

export default PartnersFAQ;
