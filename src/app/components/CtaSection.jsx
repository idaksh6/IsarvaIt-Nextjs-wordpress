"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactFormModal from "./ContactFormModal";
import Link from "next/link";

export default function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-10 lg:py-16 bg-white relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-[#e8f6ea] rounded-[40px] overflow-hidden"
          >
            <div className="relative z-10 px-6 py-16 md:py-20 text-center flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full flex flex-col items-center"
              >
                <span className="inline-block text-[13px] font-bold text-[#1a5b33] tracking-[0.1em] uppercase mb-6 bg-[#cfeade] px-6 py-2.5 rounded-full">
                  GET IN TOUCH
                </span>

                <h2 className="text-[#134326] mb-4 er text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
                  Ready to Get Started?
                </h2>

                <p className="text-[#356747] text-lg md:text-[20px] max-w-2xl mx-auto mb-6 font-medium">
                  Let's discuss your project and turn your ideas into reality
                </p>

                {/* CTA Button */}
                <div className="flex items-center justify-center mt-2">
                  <Link
                    href="/contact"
                    rel="noopener noreferrer"
                    className="press-illusion-btn-orange text-white w-fit font-bold px-6 py-2 text-base items-center space-x-2 flex"
                  >
                    <span>Get In Touch</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 9"
                      className="h-2 w-4"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
