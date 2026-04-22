"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactFormModal from "./ContactFormModal";
import Link from "next/link";

export default function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-white relative overflow-hidden">
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

                <h2 className="text-[clamp(36px,5vw,56px)] font-black text-[#134326] leading-tight mb-4">
                  Ready to Get Started?
                </h2>

                <p className="text-[#356747] text-lg md:text-[20px] max-w-2xl mx-auto mb-14 font-medium">
                  Let's discuss your project and turn your ideas into reality
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-[1000px] mx-auto mb-12 w-full">
                  {/* Email */}
                  <motion.a
                    href="mailto:info@isarvait.com"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="group bg-[#1e9a4f] rounded-[24px] border-2 border-transparent p-8 hover:bg-white hover:border-[#1e9a4f] transition-all duration-300 w-full flex flex-col items-center justify-center min-h-[220px]"
                  >
                    <div className="w-14 h-14 border border-white/40 group-hover:border-[#1e9a4f] rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-white group-hover:text-[#1e9a4f] transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-white group-hover:text-[#1e9a4f] transition-colors duration-300 font-semibold text-xl mb-1.5 flex items-center gap-1">
                      Email Us
                    </h3>
                    <p className="text-white/80 group-hover:text-[#356747] transition-colors duration-300 text-[15px] font-normal">
                      info@isarvait.com
                    </p>
                  </motion.a>

                  {/* Phone */}
                  <motion.a
                    href="tel:+919880606087"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="group bg-[#1e9a4f] rounded-[24px] border-2 border-transparent p-8 hover:bg-white hover:border-[#1e9a4f] transition-all duration-300 w-full flex flex-col items-center justify-center min-h-[220px]"
                  >
                    <div className="w-14 h-14 border border-white/40 group-hover:border-[#1e9a4f] rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-5 h-5 text-white group-hover:text-[#1e9a4f] transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-white group-hover:text-[#1e9a4f] transition-colors duration-300 font-semibold text-xl mb-1.5 flex items-center gap-1">
                      Call Us
                    </h3>
                    <p className="text-white/80 group-hover:text-[#356747] transition-colors duration-300 text-[15px] font-normal">
                      +91 9880606087
                    </p>
                  </motion.a>

                  {/* Location */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    onClick={() =>
                      window.open(
                        "https://maps.google.com/?q=Bajpe, Mangalore, India",
                      )
                    }
                    className="group bg-[#1e9a4f] rounded-[24px] border-2 border-transparent p-8 hover:bg-white hover:border-[#1e9a4f] transition-all duration-300 w-full flex flex-col items-center justify-center min-h-[220px] cursor-pointer"
                  >
                    <div className="w-14 h-14 border border-white/40 group-hover:border-[#1e9a4f] rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-white group-hover:text-[#1e9a4f] transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-white group-hover:text-[#1e9a4f] transition-colors duration-300 font-semibold text-xl mb-1.5 flex items-center gap-1">
                      Visit Us
                    </h3>
                    <p className="text-white/80 group-hover:text-[#356747] transition-colors duration-300 text-[15px] font-normal">
                      Bajpe, Mangalore, India
                    </p>
                  </motion.div>
                </div>

                {/* CTA Button */}
                <div className="flex items-center justify-center mt-2">
                  <Link
                    href="/contact"
                    rel="noopener noreferrer"
                    className="press-illusion-btn bg-orange-500 text-white w-fit font-bold px-6 py-2 text-base items-center space-x-2 flex"
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
