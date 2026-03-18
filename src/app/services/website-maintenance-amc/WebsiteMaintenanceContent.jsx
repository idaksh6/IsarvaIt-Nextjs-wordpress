"use client";

import Link from "next/link";
import { useState } from "react";
import ContactFormModal from "../../components/ContactFormModal";

export default function WebsiteMaintenanceContent({ servicesData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const service = servicesData.find(s => s.slug === "website-maintenance-amc");

  const services = [
    {
      title: "Content Updates",
      description: "Keep your website content fresh with regular updates to text, images, videos, and other media. Updated content engages visitors, improves SEO rankings, and reflects your latest offerings, products, or services.",
      icon: "📝"
    },
    {
      title: "Security Monitoring and Updates",
      description: "Protect your website from cyber threats with ongoing security monitoring, vulnerability checks, and updates. We implement best practices, like strong passwords, secure hosting, and timely patches to safeguard your website.",
      icon: "🔒"
    },
    {
      title: "Performance Optimization",
      description: "Enhance user experience through performance optimization. We monitor speed, uptime, and apply techniques such as image optimization, caching, and code minification to ensure your website loads quickly and functions smoothly.",
      icon: "⚡"
    },
    {
      title: "Backup and Recovery",
      description: "Regular backups safeguard your data. We securely store backups of your files, databases, and configurations, enabling a quick restoration in case of any data loss or technical issues.",
      icon: "💾"
    },
    {
      title: "Software Updates",
      description: "Maintain the integrity of your website with timely software updates for the CMS, plugins, and themes. Our updates improve security, fix bugs, and add features that enhance functionality.",
      icon: "🔄"
    },
    {
      title: "Database Optimization",
      description: "Optimize your website's database with advanced techniques to streamline queries, minimize load times, boost speed, and ensure peak performance, delivering a seamless experience for users while improving overall site efficiency.",
      icon: "🗄️"
    }
  ];

  const processSteps = [
    {
      title: "Analysis",
      description: "We begin by analyzing your website's goals, audience needs, and current functionality to create a targeted maintenance plan.",
      icon: "🔍"
    },
    {
      title: "Design",
      description: "Our team outlines a maintenance blueprint tailored to your requirements, detailing content management, security, and performance improvements.",
      icon: "📐"
    },
    {
      title: "Development",
      description: "During development, we implement the design plan, setting up all necessary maintenance tools and configurations for optimal performance.",
      icon: "⚙️"
    },
    {
      title: "Testing",
      description: "We rigorously test every component of your website, from speed to security, to ensure flawless performance and reliability",
      icon: "✅"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-24 overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-mesh-green opacity-30"></div>
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-emerald-300/30 to-teal-300/30 blur-[100px] rounded-full"></div>
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-green-300/20 to-emerald-300/20 blur-[100px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-emerald-600 transition-colors">
                Home
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/services" className="hover:text-emerald-600 transition-colors">
                Services
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/services/website-services" className="hover:text-emerald-600 transition-colors">
                Website Services
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-emerald-600 font-medium">Website Maintenance – AMC</span>
            </div>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 font-semibold text-sm mb-6 border border-emerald-200 shadow-md">
              <span className="text-2xl">🔧</span>
              <span>Website Maintenance</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Website Maintenance – AMC
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-10">
              Ensure peak performance and security for your website with our comprehensive AMC services. From safeguarding against threats to regular optimizations and updates, Isarva Infotech's expert team is dedicated to keeping your site running smoothly and up-to-date.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="press-illusion-btn bg-green-400 text-white font-bold px-8 py-4 text-lg items-center space-x-2 inline-flex"
            >
              <span>Request a Quote</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4">
                <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Services We Provide Section */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Services We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide cutting-edge web design solutions, focusing on performance, usability, and seamless user experience to enhance your digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((serviceItem, index) => (
              <div key={index} className="group">
                <div className="h-full bg-white rounded-2xl border-2 border-gray-100 hover:border-emerald-300 p-8 transition-all duration-300 shadow-md">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-100 flex items-center justify-center mb-6 text-3xl">
                    {serviceItem.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {serviceItem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {serviceItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reliable Maintenance CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Reliable Website Maintenance & AMC Services
          </h2>
          <p className="text-xl lg:text-2xl text-emerald-50 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ensure your website remains secure, updated, and optimized with our comprehensive maintenance solutions, designed to deliver seamless performance and peace of mind.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-emerald-600 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-2xl"
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </section>

      {/* Website Maintenance Services Info */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Website Maintenance Services
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Isarva Infotech, our website maintenance services are crafted to keep your website optimized, secure, and up-to-date with the latest technologies. We understand that a well-maintained website is crucial for user engagement, security, and performance. Our maintenance services cover everything from content updates and security monitoring to performance optimization, backup, and SEO. With a proactive and thorough approach, we ensure your website delivers the best experience to visitors while meeting your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Seamless Process For Website Maintenance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="h-full bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border-2 border-emerald-100 p-8">
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full"></div>
        </div>

        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold text-sm mb-8 border border-white/30 shadow-lg">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            Let's Get Started
          </div>

          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Keep Your Website Running Flawlessly
          </h2>
          
          <p className="text-xl lg:text-2xl text-emerald-50 mb-12 max-w-3xl mx-auto leading-relaxed">
            Partner with Isarva Infotech for reliable, professional website maintenance services. Let us handle the technical details while you focus on your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-emerald-600 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Started Today
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl hover:bg-white/20 transition-all duration-300 shadow-lg"
            >
              Browse All Services
            </Link>
          </div>

          <div className="mt-16 pt-12 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-emerald-100 text-sm font-medium">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-emerald-100 text-sm font-medium">Monitoring & Support</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-emerald-100 text-sm font-medium">Sites Maintained</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Service"
        preSelectedItem="Website Maintenance – AMC"
        allItems={servicesData}
      />
    </>
  );
}
