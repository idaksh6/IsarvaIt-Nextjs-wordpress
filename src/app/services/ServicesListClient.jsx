"use client";

import Link from "next/link";
import { useState, useMemo, useRef } from "react";

export default function ServicesListClient({ servicesData }) {
  const [searchQuery, setSearchQuery] = useState("");
  const servicesGridRef = useRef(null);

  // Filter services based on search query
  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) {
      return servicesData;
    }

    const query = searchQuery.toLowerCase();
    return servicesData.filter(service => 
      service.title?.toLowerCase().includes(query) ||
      service.shortDescription?.toLowerCase().includes(query) ||
      service.features?.some(feature => 
        feature.title?.toLowerCase().includes(query) ||
        feature.description?.toLowerCase().includes(query)
      )
    );
  }, [searchQuery, servicesData]);

  // Scroll to services grid
  const scrollToServices = () => {
    if (servicesGridRef.current) {
      servicesGridRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  // Handle search button click
  const handleSearch = () => {
    scrollToServices();
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section with Search */}
      <section 
        className="relative pt-32 lg:pt-36 pb-16 lg:pb-20 overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-white"
        style={{ contain: "layout style paint" }}
      >
        {/* Enhanced Background Decorations */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" style={{ transform: "translateZ(0)" }}>
          <div className="absolute inset-0 bg-mesh-green opacity-30"></div>
          <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-gradient-to-br from-emerald-300/30 to-teal-300/30 blur-[120px] rounded-full"></div>
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-green-300/20 to-emerald-300/20 blur-[100px] rounded-full"></div>
          <div className="hero-noise-overlay opacity-[0.08]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 font-semibold text-sm mb-8 border border-emerald-200 shadow-md">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
              </span>
              <span>Our Services</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
              Comprehensive
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 mt-2">
                IT Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              From web development to AI consulting, we offer end-to-end services that drive your digital transformation journey.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                    <svg 
                      className="w-6 h-6 text-emerald-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2.5} 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Search services... (e.g., Website services)"
                    className="w-full pl-16 pr-14 py-5 text-lg text-gray-900 placeholder:text-gray-500 rounded-2xl border-2 border-gray-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-200 bg-white shadow-lg hover:shadow-xl font-medium"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-red-500 transition-colors"
                      aria-label="Clear search"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
                
                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="px-8 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap md:w-auto w-full"
                >
                  <span>Search</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {/* Search Results Count */}
              {searchQuery && (
                <div className="mt-4 text-sm text-gray-600 font-medium lg:text-left text-center" >
                  {filteredServices.length === 0 ? (
                    <span className="text-red-600">No services found matching "{searchQuery}"</span>
                  ) : filteredServices.length === servicesData.length ? (
                    <span>Showing all {servicesData.length} services</span>
                  ) : (
                    <span>Found {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} matching "{searchQuery}"</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section ref={servicesGridRef} className="py-16 lg:py-24 bg-white scroll-mt-8">
        <div className="max-w-7xl mx-auto px-6">
          {filteredServices.length === 0 ? (
            /* No Results State */
            <div className="text-center py-20">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No services found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms or browse all our services.</p>
              <button
                onClick={() => setSearchQuery("")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Clear Search
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ) : (
            /* Services Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  prefetch={true}
                  className="group"
                >
                  <div className="relative rounded-3xl p-8 h-full transition-all duration-300 hover:scale-[1.02] bg-white border-2 border-gray-100 hover:border-emerald-300 shadow-lg hover:shadow-2xl">
                    {/* Hover Gradient Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative text-center md:text-left">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto md:mx-0">
                        <span className="text-3xl">{service.icon}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.shortDescription}
                      </p>

                      {/* CTA Link */}
                      <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all duration-200">
                        Learn More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>

                      {/* Feature Count Badge - At right edge overlapping border */}
                      <div className="absolute -top-11 -right-2 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border-2 border-emerald-200 shadow-md">
                        {service.features.length}+ Features
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-green opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Expertise</h3>
              <p className="text-gray-600">Years of experience delivering successful projects across industries</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cutting-Edge Tech</h3>
              <p className="text-gray-600">Leveraging the latest technologies for optimal solutions</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">On-Time Delivery</h3>
              <p className="text-gray-600">Committed to meeting deadlines without compromising quality</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Support</h3>
              <p className="text-gray-600">24/7 support to ensure your success every step of the way</p>
            </div>
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
            Ready to Get Started?
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and discover how our services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              prefetch={true}
              className="press-illusion-btn bg-green-400 text-black font-bold px-8 py-4 text-lg items-center space-x-2 inline-flex justify-center"
            >
              <span>Get Started Now</span>
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
              href="/about"
              prefetch={true}
              className="press-illusion-btn inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-700 bg-white/80 backdrop-blur-md border-2 border-gray-200 rounded-lg hover:border-emerald-600 hover:text-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
