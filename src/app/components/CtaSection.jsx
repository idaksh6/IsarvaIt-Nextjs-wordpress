"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactFormModal from "./ContactFormModal";
import Link from "next/link";

export default function CtaSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="py-20 bg-white relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/5 via-transparent to-[#22C55E]/5"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative bg-gradient-to-br from-[#22C55E] to-[#16a34a] rounded-[32px] overflow-hidden shadow-[0_20px_70px_rgba(34,197,94,0.3)]"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl"></div>

                        {/* Pattern Overlay */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}></div>

                        <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <span className="inline-block text-xs font-black text-white/90 tracking-[0.25em] uppercase mb-4 bg-white/20 px-5 py-2 rounded-full backdrop-blur-sm">
                                    GET IN TOUCH
                                </span>

                                <h2 className="text-[clamp(32px,5vw,56px)] font-extrabold text-white leading-tight mb-6">
                                    Ready to Get Started?
                                </h2>

                                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                                    Let's discuss your project and turn your ideas into reality
                                </p>

                                {/* Contact Details Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mb-10">
                                    {/* Email */}
                                    <motion.a
                                        href="mailto:info@isarvait.com"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 hover:bg-white hover:border-white transition-all duration-300 hover:scale-105"
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <div className="w-14 h-14 bg-white/20 group-hover:bg-[#22C55E] rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
                                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-white group-hover:text-[#22C55E] font-bold text-lg mb-2 transition-colors duration-300">
                                                Email Us
                                            </h3>
                                            <p className="text-white/90 group-hover:text-gray-700 text-sm font-medium transition-colors duration-300">
                                                info@isarvait.com
                                            </p>
                                        </div>
                                    </motion.a>

                                    {/* Phone */}
                                    <motion.a
                                        href="tel:+919880606087"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 hover:bg-white hover:border-white transition-all duration-300 hover:scale-105"
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <div className="w-14 h-14 bg-white/20 group-hover:bg-[#22C55E] rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
                                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-white group-hover:text-[#22C55E] font-bold text-lg mb-2 transition-colors duration-300">
                                                Call Us
                                            </h3>
                                            <p className="text-white/90 group-hover:text-gray-700 text-sm font-medium transition-colors duration-300">
                                                +91 9880606087
                                            </p>
                                        </div>
                                    </motion.a>

                                    {/* Location */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 hover:bg-white hover:border-white transition-all duration-300 hover:scale-105 cursor-pointer"
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <div className="w-14 h-14 bg-white/20 group-hover:bg-[#22C55E] rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
                                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-white group-hover:text-[#22C55E] font-bold text-lg mb-2 transition-colors duration-300">
                                                Visit Us
                                            </h3>
                                            <p className="text-white/90 group-hover:text-gray-700 text-sm font-medium transition-colors duration-300">
                                                Bajpe, Mangalore, India
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* CTA Button */}
                                <div className="flex items-center justify-center">
                                    <Link href="" onClick={() => setIsModalOpen(true)}
                                        className="press-illusion-btn-white bg-white text-black w-fit font-bold px-6 py-2 text-base items-center space-x-2 hidden md:flex"
                                    >
                                        <span>Get in Touch</span>
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
