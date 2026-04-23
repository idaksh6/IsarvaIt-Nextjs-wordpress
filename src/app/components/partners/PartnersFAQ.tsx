"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    question: "Can I use Isarva's brand in my marketing?",
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

const PartnersFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-6xl font-bold text-[#111827] uppercase"
            >
              Common <span className="text-[#ea580c]">Questions</span>
            </motion.h2>
            <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full mt-4" />
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
                  className={`w-full text-left p-8 rounded-[32px] border transition-all duration-300 flex items-center justify-between gap-4 ${
                    openIndex === index 
                    ? "bg-orange-50 border-orange-200 shadow-lg shadow-orange-600/5" 
                    : "bg-[#F8FAFC]/50 border-gray-100 hover:border-orange-200"
                  }`}
                >
                  <span className={`text-xl font-bold font-display ${openIndex === index ? "text-[#ea580c]" : "text-[#111827]"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-[#ea580c]" : "text-gray-400 group-hover:text-orange-600"}`} />
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
                      <div className="p-8 pb-10 text-gray-600 font-body text-lg leading-relaxed bg-white/50 rounded-b-[32px] border-x border-b border-orange-100 mx-4">
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
