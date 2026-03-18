"use client";

import Link from "next/link";
import { useState } from "react";
import ContactFormModal from "../../components/ContactFormModal";

export default function WebsiteDesignContent({ servicesData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const service = servicesData.find(s => s.slug === "website-design");

  const offerings = [
    {
      title: "Custom Web Design",
      description: "Tailored website solutions that align with your brand and business goals.",
      icon: "🎨"
    },
    {
      title: "Web UI/UX",
      description: "User-centered designs that enhance experience and engagement.",
      icon: "💻"
    },
    {
      title: "Redesign Website",
      description: "Refreshing outdated sites with modern design and improved performance.",
      icon: "🔄"
    },
    {
      title: "CMS Web Design",
      description: "Easy-to-manage content solutions using leading CMS platforms.",
      icon: "📝"
    },
    {
      title: "WordPress Design",
      description: "Flexible, scalable WordPress sites with seamless functionality.",
      icon: "🌐"
    },
    {
      title: "Landing Page Design",
      description: "High-conversion landing pages optimized for specific campaigns.",
      icon: "🎯"
    }
  ];

  const processSteps = [
    {
      title: "Strategic",
      description: "We start by understanding your goals, target audience, and vision, creating a tailored plan that aligns with your business objectives",
      icon: "📋"
    },
    {
      title: "Designing & Developing",
      description: "Our team crafts visually appealing designs and develops a functional, responsive website that provides an engaging user experience.",
      icon: "🎨"
    },
    {
      title: "Testing",
      description: "Rigorous testing ensures your website is optimized for performance, compatibility, and usability across devices and browsers.",
      icon: "🔍"
    },
    {
      title: "Maintenance",
      description: "We offer ongoing support and maintenance to keep your website updated, secure, and performing at its best.",
      icon: "🔧"
    }
  ];

  const benefits = [
    {
      title: "Intuitive, responsive, and user-focused designs.",
      description: "We create visually compelling and user-centric designs that ensure seamless interaction, improved engagement, and optimal usability across all devices."
    },
    {
      title: "Fast, scalable, and performance-optimized websites.",
      description: "Our websites are engineered for speed, scalability, and performance, delivering robust functionality and smooth user experiences even under high traffic loads."
    },
    {
      title: "Digital solutions to drive growth and enhance brand value.",
      description: "We build strategic digital solutions that strengthen your brand presence, foster customer loyalty, and accelerate sustainable business growth."
    }
  ];

  const portfolio = [
    { name: "Beth Living", image: "beth-living-idaksh-portfolio" },
    { name: "Auto Data", image: "auto-data" },
    { name: "Gulf Lights", image: "gulf-lights" },
    { name: "Camp21", image: "camp21" },
    { name: "Gokarnanatha Bank", image: "gokarnanatha-bank-idaksh-portfolio" },
    { name: "Kalkura Builders & Developers", image: "kalkura-builders" }
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
              <span className="text-emerald-600 font-medium">Website Design</span>
            </div>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 font-semibold text-sm mb-6 border border-emerald-200 shadow-md">
              <span className="text-2xl">🎨</span>
              <span>Website Design</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Website Design
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-10">
              Isarva Infotech delivers visually appealing, responsive web designs focused on user experience and performance, tailored to enhance business goals.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="press-illusion-btn bg-green-400 text-white font-bold px-8 py-4 text-lg items-center space-x-2 inline-flex"
            >
              <span>Contact Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4">
                <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* What We're Offering Section */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What we're offering
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide cutting-edge web design solutions, focusing on performance, usability, and seamless user experience to enhance your digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="group">
                <div className="h-full bg-white rounded-2xl border-2 border-gray-100 hover:border-emerald-300 p-8 transition-all duration-300 shadow-md">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-100 flex items-center justify-center mb-6 text-3xl">
                    {offering.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Digital Solutions CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Custom Digital Solutions
          </h2>
          <p className="text-xl lg:text-2xl text-emerald-50 mb-12 max-w-3xl mx-auto leading-relaxed">
            We craft innovative, high-performance software solutions to streamline your operations and drive growth. Our tailored approach ensures seamless workflows and empowers your business in the digital age.
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

      {/* Building Websites Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Building Websites That Inspire and Drive Results
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Isarva Infotech, we specialize in crafting user-friendly, visually appealing websites that deliver real results. Our designs blend aesthetics with functionality for seamless cross-device experiences. Using advanced frameworks like Elementor and GeneratePress, we create fast, scalable, and SEO-optimized websites to support your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl border-2 border-gray-100 p-8 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Seamless Process For Website Design
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

      {/* Portfolio Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Portfolio
            </h2>
            <p className="text-xl text-gray-600">
              Explore our recent website design projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group">
                <div className="rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-emerald-300 transition-all duration-300 shadow-md hover:shadow-xl">
                  <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                    <span className="text-6xl">🌐</span>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.name}
                    </h3>
                  </div>
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
            Ready to Transform Your Digital Presence?
          </h2>
          
          <p className="text-xl lg:text-2xl text-emerald-50 mb-12 max-w-3xl mx-auto leading-relaxed">
            Partner with Isarva Infotech to create a stunning website that drives results. Let's bring your vision to life with our expert design services.
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
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-emerald-100 text-sm font-medium">Websites Designed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-emerald-100 text-sm font-medium">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-emerald-100 text-sm font-medium">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Service"
        preSelectedItem="Website Design"
        allItems={servicesData}
      />
    </>
  );
}
