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
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <motion.h2
              variants={headingVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={viewportConfig}
              className="text-4xl md:text-6xl font-bold text-[#111827] uppercase"
            >
              Common <span className="text-emerald-600">Questions</span>
            </motion.h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full mt-4" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={faqItemVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={viewportConfig}
                className="group"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full text-left p-6 md:p-8 rounded-[24px] md:rounded-[32px] border transition-all duration-300 flex items-center justify-between gap-3 md:gap-4 ${
                    openIndex === index 
                    ? "bg-emerald-50 border-emerald-200 shadow-lg shadow-emerald-600/5" 
                    : "bg-[#F8FAFC]/50 border-gray-100 hover:border-emerald-200"
                  }`}
                >
                  <span className={`text-lg md:text-xl font-bold ${openIndex === index ? "text-emerald-600" : "text-[#111827]"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-emerald-600" : "text-gray-400 group-hover:text-emerald-600"}`} />
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
                      <div className="p-6 md:p-8 pb-8 md:pb-10 text-gray-600 text-base md:text-lg leading-relaxed bg-white/50 rounded-b-[24px] md:rounded-b-[32px] border-x border-b border-emerald-100">
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

export default PartnersFAQ;
