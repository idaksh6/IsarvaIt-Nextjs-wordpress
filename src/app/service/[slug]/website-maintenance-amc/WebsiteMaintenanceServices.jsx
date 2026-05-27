"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Website Maintenance",
    description: "Regular updates, backups, and protection, fully managed for your site.",
    icon: "/images/services/website-maintenance.svg",
    link: "/website-maintenance"
  },
  {
    title: "WordPress Maintenance",
    description: "Keep your site updated with core, plugin, and theme maintenance plus security monitoring.",
    icon: "/images/services/wordpress-maintenance.svg",
    link: "/wordpress-maintenance"
  },
  {
    title: "WooCommerce Maintenance",
    description: "Protect sales with proactive cart, checkout, and performance maintenance for high-performing WooCommerce stores.",
    icon: "/images/services/woocommerce-maintenance.svg",
    link: "/woocommerce-maintenance-services"
  }
];

const WebsiteMaintenanceServices = () => {
  return (
    <section className="py-10 lg:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 lg:mb-24 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs tracking-wider uppercase mb-6 border border-emerald-100">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Reliable Care for Your Website
          </div>
          
          <h2 className="text-gray-900 mb-6 text-4xl lg:text-[40px] font-black leading-tight tracking-tight">
            Complete Website Maintenance Services
          </h2>
          
          <p className="text-lg text-gray-500 max-w-3xl leading-relaxed mx-auto lg:mx-0">
            From <Link href="/wordpress-maintenance" className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">WordPress</Link> and <Link href="/woocommerce-maintenance-services" className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">WooCommerce</Link> to custom-built websites, we keep your site secure, updated, and running smoothly every day.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300">
                <div className="mb-8 h-20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-[80px] h-auto object-contain"
                  />
                </div>
                
                {service.link !== "#" ? (
                  <Link href={service.link} className="text-xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors">
                    {service.title}
                  </Link>
                ) : (
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                )}
                
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WebsiteMaintenanceServices;
