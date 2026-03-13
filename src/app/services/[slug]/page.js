"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs, servicesData } from "../../lib/data/services-data";
import ContactFormModal from "../../components/ContactFormModal";

export default function ServiceDetailPage({ params }) {
  const { slug } = params;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Get related services (3 random services excluding current)
  const relatedServices = servicesData
    .filter(s => s.slug !== service.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-gradient-to-b from-[#d4f4dd] via-[#defae4] to-white"
        style={{ contain: "layout style paint" }}
      >
        {/* Background Decorations - Optimized */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" style={{ transform: "translateZ(0)" }}>
          <div className="absolute inset-0 bg-mesh-green opacity-40"></div>
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-emerald-200/40 blur-[80px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-200/30 blur-[80px] rounded-full"></div>
          <div className="hero-noise-overlay opacity-[0.12]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" prefetch={true} className="hover:text-emerald-600 transition-colors">
                Home
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/services" prefetch={true} className="hover:text-emerald-600 transition-colors">
                Services
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-emerald-600 font-medium">{service.title}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-md text-emerald-800 font-semibold text-sm mb-6 border border-white/60 shadow-lg">
                <span className="text-2xl">{service.icon}</span>
                <span>Professional Service</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                {service.title}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="press-illusion-btn bg-green-400 text-white font-bold px-8 py-4 text-lg items-center space-x-2 inline-flex"
                >
                  <span>Request Demo</span>
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
                </button>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-700 bg-white/80 backdrop-blur-md border-2 border-gray-200 rounded-lg hover:border-emerald-600 hover:text-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-emerald-200/40 blur-[100px] rounded-full"></div>
                <div className="relative rounded-3xl bg-white/90 backdrop-blur-md border border-white/60 shadow-2xl p-12">
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-emerald-400/20 to-green-500/20 flex items-center justify-center">
                    <span className="text-9xl">{service.icon}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive capabilities designed to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-all duration-200 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-green opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging cutting-edge tools and frameworks for optimal results
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-white border-2 border-emerald-100 hover:border-emerald-400 hover:shadow-lg transition-all duration-200 font-semibold text-gray-700 hover:text-emerald-600"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Benefits You'll Enjoy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real value that drives business growth and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative rounded-3xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {benefit}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-green opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Related Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore other solutions that might interest you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((relatedService) => (
              <Link
                key={relatedService.slug}
                href={`/services/${relatedService.slug}`}
                prefetch={true}
                className="group"
              >
                <div className="relative rounded-3xl p-8 h-full transition-all duration-300 hover:scale-[1.02] bg-white border border-gray-100 shadow-lg hover:shadow-2xl">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{relatedService.icon}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                      {relatedService.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {relatedService.shortDescription}
                    </p>

                    <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all duration-200">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              prefetch={true}
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all duration-200 text-lg"
            >
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        style={{ contain: "layout style paint" }}
      >
        <div className="absolute inset-0 bg-mesh-green opacity-30"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-200/40 blur-[80px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-200/40 blur-[80px] rounded-full"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md text-emerald-800 font-semibold text-sm mb-6 border border-white/60 shadow-lg">
            <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
            Ready to Start?
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Discuss Your {service.title} Needs
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Get in touch with our experts to learn how we can help transform your business with {service.title.toLowerCase()}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              prefetch={true}
              className="press-illusion-btn bg-green-400 text-black font-bold px-8 py-4 text-lg items-center space-x-2 inline-flex justify-center"
            >
              <span>Contact Us Now</span>
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
            <Link
              href="/services"
              prefetch={true}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-700 bg-white/80 backdrop-blur-md border-2 border-gray-200 rounded-lg hover:border-emerald-600 hover:text-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Service"
        preSelectedItem={service.title}
        allItems={servicesData}
      />
    </div>
  );
}
