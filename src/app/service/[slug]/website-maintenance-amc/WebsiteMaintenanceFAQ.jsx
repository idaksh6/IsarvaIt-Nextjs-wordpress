"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Website Maintenance?",
    answer: "A website is much like your health. Without regular care and attention, its performance can suffer over time. Website maintenance involves continuously monitoring and managing your website, including security updates, fixing errors and bugs, correcting issues, updating content, and handling platform upgrades or migrations to keep everything running smoothly."
  },
  {
    question: "Why Website Maintenance?",
    answer: "Every website needs regular maintenance to keep forms, content, images, payment systems, and other features working properly. A regularly updated website reflects professionalism, builds trust, and keeps visitors informed and engaged with your brand."
  },
  {
    question: "What Does “Down for Maintenance” Mean?",
    answer: "A website marked as down for maintenance is temporarily unavailable while updates, fixes, security improvements, or server and platform changes are being completed to improve performance and reliability."
  },
  {
    question: "How do I request additional support ?",
    answer: "Need additional support or website customization? Simply contact us with your requirements, and our team will respond with the right solution, pricing, or details within 24–48 hours."
  },
  {
    question: "Do You Maintain Ecommerce Websites?",
    answer: "Yes, we offer regular maintenance and support for ecommerce and online store websites. Our services include website updates, performance monitoring, security checks, and digital marketing solutions to help your business grow online."
  },
  {
    question: "What’s Covered in Website Maintenance?",
    answer: "Our website maintenance services cover everything needed to keep your site updated and running smoothly, including content updates, SSL setup, security patches, performance checks, bug fixes, and ongoing technical support."
  },
  {
    question: "Which Platforms Do We Support?",
    answer: "We provide website maintenance and support services for platforms like WordPress, Statamic and Laravel, ensuring your website stays secure, updated, and performs efficiently."
  },
  {
    question: "Why Choose Isarva for Website Maintenance?",
    answer: "Our dedicated in-house team delivers reliable website maintenance with flexible pricing, strong work ethics, and an agile approach. We focus on client satisfaction, long-term partnerships, and delivering consistent support you can depend on."
  },
  {
    question: "How Long Do Maintenance Updates Take?",
    answer: "The turnaround time depends on the type of changes and your maintenance plan. Minor updates are usually completed within a few hours, while larger changes may take longer. Once we review your request, we will provide a clear timeline."
  },
  {
    question: "Do You Support Existing Websites?",
    answer: "Yes, we provide maintenance and technical support for websites even if they were not developed by us. Our team can manage, troubleshoot, and improve existing websites with the same level of care and commitment as our own projects."
  },
  {
    question: "Why should I invest in web maintenance services?",
    answer: "Website availability, online presence, security, functionality and performance are critical & essential to any business or organization; to keep it run properly & well-organized, website maintenance is crucial."
  },
  {
    question: "Why Invest in Website Maintenance?",
    answer: "Website maintenance helps keep your business site secure, updated, and performing at its best. Benefits include bug fixes, content updates, performance monitoring, backups, CMS upgrades, and improved user experience to support better online visibility and growth."
  },
  {
    question: "What Maintenance Plans Do You Offer?",
    answer: "We offer flexible website maintenance plans to match different business needs, including monthly, quarterly, and yearly options. Custom plans are also available based on project scope, support hours, or specific website requirements."
  },
  {
    question: "How Do I Pick the Right Plan?",
    answer: "The ideal maintenance plan depends on your website type, update frequency, and support needs. Our team can review your requirements and suggest a suitable package that ensures reliable performance and ongoing website care."
  },
  {
    question: "Can I Change My Maintenance Plan Later?",
    answer: "Yes, our maintenance plans are fully flexible. You can upgrade, downgrade, or adjust your package anytime to match your changing website and business requirements."
  },
  {
    question: "Do You Provide Emergency Website Support?",
    answer: "Yes, we offer emergency website support for critical issues such as downtime, security concerns, or unexpected technical problems. Our team responds promptly to restore functionality and reduce disruption to your business."
  },
  {
    question: "Need Updates Beyond Your Plan?",
    answer: "If you need website changes or support beyond your current maintenance package, we offer flexible add-on services and custom support options to handle extra updates whenever required."
  },
  {
    question: "Do You Offer White Label Maintenance?",
    answer: "Yes, we provide white label website maintenance services for agencies, enabling you to deliver reliable website support and maintenance to your clients under your own brand identity."
  },
  {
    question: "How Do You Keep Websites Secure?",
    answer: "We keep your website secure and updated through regular monitoring, security updates, bug fixes, and performance checks. Our proactive maintenance helps prevent issues and ensures smooth, reliable website performance."
  },
  {
    question: "Which Websites Do You Maintain?",
    answer: "We maintain a wide range of websites, including WordPress, ecommerce, business, and custom-built platforms. Our team supports websites of all sizes to ensure they remain secure, updated, and high-performing."
  }
];

const viewportConfig = { once: true };

const headingVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const faqItemVariants = {
  initial: { opacity: 0, y: 10 },
  whileInView: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 }
  })
};

const accordionVariants = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }
};

const WebsiteMaintenanceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.h2
            variants={headingVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={viewportConfig}
            className="text-[#111827] text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize"
          >
            Frequently Asked <span className="text-emerald-600">Questions</span>
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

export default WebsiteMaintenanceFAQ;
