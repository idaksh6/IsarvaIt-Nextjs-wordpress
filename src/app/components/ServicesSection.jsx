'use client';

import Link from 'next/link';
import { memo } from 'react';

function ServicesSection({ data }) {
  // Default placeholder data (will be replaced with WordPress data)
  const defaultServices = [
    {
      id: 1,
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies for optimal performance and scalability.',
      features: ['React & Next.js', 'Full-Stack Solutions', 'API Integration'],
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications designed for seamless user experiences.',
      features: ['iOS & Android', 'React Native', 'Progressive Web Apps'],
    },
    {
      id: 3,
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for modern applications.',
      features: ['AWS & Azure', 'DevOps', 'Serverless Architecture'],
    },
    {
      id: 4,
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that enhance user engagement and satisfaction.',
      features: ['User Research', 'Prototyping', 'Design Systems'],
    },
    {
      id: 5,
      icon: '🛒',
      title: 'E-Commerce',
      description: 'Complete e-commerce solutions with secure payment processing and inventory management.',
      features: ['Shopping Cart', 'Payment Gateway', 'Admin Dashboard'],
    },
    {
      id: 6,
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your applications running smoothly.',
      features: ['24/7 Monitoring', 'Bug Fixes', 'Performance Optimization'],
    },
  ];

  const services = data?.services || defaultServices;
  const heading = data?.heading || 'Our Services';
  const subheading = data?.subheading || 'Comprehensive Digital Solutions';

  return (
    <section
        className="relative py-10 lg:py-24 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #d4f4dd 0%, #b8f2c6 50%, #d4f4dd 100%)',
          contain: 'layout style paint',
        }}
      >
      {/* Decorative Elements - Optimized for Mobile */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#00ff88]/20 rounded-full hidden md:block md:blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#adff2f]/20 rounded-full hidden md:block md:blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-white/30 rounded-full hidden lg:block lg:blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Mobile fallback decorative elements */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#00ff88]/10 rounded-full block md:hidden -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#adff2f]/10 rounded-full block md:hidden translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="services-heading text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-md text-emerald-800 font-semibold text-sm mb-6 border border-white/60 shadow-lg">
            <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
            What We Offer
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            {heading}
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            {subheading}
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {services.map((service, index) => (
            <div
              key={service.id || index}
              className="service-card group relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.03] bg-white/90 border border-white/60 shadow-lg md:bg-white/40 md:backdrop-blur-md md:shadow-[0_8px_32px_0_rgba(0,255,136,0.15)]"
              style={{
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              {/* Glass Effect Inner Glow - Desktop only */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-100 group-hover:opacity-70 transition-opacity duration-300 hidden md:block"></div>

              {/* Content */}
              <div className="relative">
                {/* Icon - Simplified for mobile performance */}
                <div className="service-icon w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 border border-emerald-300 md:from-emerald-400/60 md:to-green-500/60 md:backdrop-blur-sm md:border-white/50 flex items-center justify-center text-4xl mb-6 group-hover:from-emerald-500/70 group-hover:to-green-600/70 transition-all duration-300 shadow-lg">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <ul className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 text-emerald-600 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 lg:mt-20">
          <p className="text-gray-700 mb-6 text-lg font-medium">
            Can't find what you're looking for?
          </p>

          <Link
            href="#contact"
            className="press-illusion-btn bg-green-400 text-black font-bold px-6 py-2 text-base w-fit mx-auto items-center space-x-2  inline-flex"
          >
            <span>Get Custom Solution</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4">
              <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Memoize component to prevent unnecessary re-renders
export default memo(ServicesSection, (prevProps, nextProps) => {
  return JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data);
});
