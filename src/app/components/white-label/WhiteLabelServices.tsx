"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

import imgCustomWP from "../../../../public/website_services_hero.png";
import imgEcom from "../../../../public/products/woocommerce/Woo-commerce-slide-1.jpg";
import imgRedesign from "../../../../public/website_redesign_service.png";
import imgMaintenance from "../../../../public/web_maintenance_services.png";
import imgUIDesign from "../../../../public/ui_design_screen_hero_1773850368381.png";
import imgGrowth from "../../../../public/wp_growth_primary.png";

const services = [
  {
    title: "Custom WordPress",
    description: "We build custom WordPress websites tailored to your clients’ needs, fully managed and delivered under your brand.",
    image: imgCustomWP,
    category: "Development",
    deliverables: [
      "Custom-designed, responsive sites",
      "Theme & plugin customization",
      "Performance optimization",
      "End-to-end development"
    ]
  },
  {
    title: "WooCommerce / E-com",
    description: "We build WooCommerce based e-commerce websites ensuring a seamless shopping experience for your clients.",
    image: imgEcom,
    category: "E-Commerce",
    deliverables: [
      "Fully functional E-Com stores",
      "Product catalog & inventory",
      "Secure payment integration",
      "Conversion-focused checkout"
    ]
  },
  {
    title: "Website Redesign",
    description: "We revamp outdated websites into visually appealing websites based on current trends and styles.",
    image: imgRedesign,
    category: "Modernization",
    deliverables: [
      "Modern UI/UX redesign",
      "Speed optimization",
      "Mobile responsiveness",
      "Conversion enhancement"
    ]
  },
  {
    title: "Maintenance & AMC",
    description: "We provide white-label website maintenance that performs without the need of an in-house team.",
    image: imgMaintenance,
    category: "Support",
    deliverables: [
      "Regular updates & backups",
      "Security & bug fixes",
      "Performance tracking",
      "Ongoing technical support"
    ]
  },
  {
    title: "UI/UX Design",
    description: "We design user-friendly interfaces and modern designs to improve engagement, conversions, and brand value.",
    image: imgUIDesign,
    category: "Design",
    deliverables: [
      "User-centric interface design",
      "Wireframes & prototypes",
      "Modern intuitive layouts",
      "Dev-ready Figma files"
    ]
  },
  {
    title: "Growth & SEO",
    description: "We deliver SEO services to improve search rankings and drive consistent organic growth for your clients.",
    image: imgGrowth,
    category: "Marketing",
    deliverables: [
      "Keyword research & strategy",
      "On-page SEO optimization",
      "Technical SEO audits",
      "Performance reporting"
    ]
  }
];

const WhiteLabelServices = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-emerald-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-6"
          >
            Our Service Suite
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-8 font-display uppercase tracking-tight"
          >
            White-Label <span className="text-blue-600">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 font-medium leading-relaxed"
          >
            A full suite of digital services designed to help your agency offer 
            more value without increasing your internal workload.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-[48px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image.src}
                  alt={service.title}
                  className="object-cover group-hover:scale-110 transition-transform duration-700 w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase tracking-widest">
                    {service.category}
                  </span>
                </div>
                <div className="absolute bottom-6 left-8 right-8">
                   <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <p className="text-slate-600 mb-8 font-medium leading-relaxed text-lg">
                  {service.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-[1px] flex-grow bg-slate-100" />
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest flex-shrink-0">
                      Deliverables
                    </span>
                    <div className="h-[1px] flex-grow bg-slate-100" />
                  </div>
                  <ul className="grid grid-cols-1 gap-4">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-bold group/item">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-500 transition-colors duration-300">
                          <Check className="w-3 h-3 text-emerald-500 group-hover/item:text-white transition-colors duration-300" />
                        </div>
                        <span className="group-hover/item:text-blue-600 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelServices;
