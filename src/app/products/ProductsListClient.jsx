"use client";

import Link from "../components/AppLink";
import { useState, useMemo, useRef } from "react";

export default function ProductsListClient({ productsData }) {
  const [searchQuery, setSearchQuery] = useState("");
  const productsGridRef = useRef(null);

  // Filter products based on search query and exclude staging items
  const filteredProducts = useMemo(() => {
    // First, exclude any items that are meant for staging only
    const IOT_SLUGS = [
      "hmi-&-display-board",
      "rfid-reader",
      "r-lifi",
      "vibration-sensor",
      "data-logger-iiot-4-0-1",
      "cloud-plc-4-0-1",
      "das-datalogger",
      "data-acquisition-system",
      "biometric-authentication",
    ];

    let baseProducts = productsData.filter(product => 
      !product.slug?.includes("staging") && 
      !product.slug?.includes("-old") &&
      !IOT_SLUGS.includes(product.slug)
    );

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      baseProducts = baseProducts.filter(product =>
        product.title?.toLowerCase().includes(query) ||
        product.tagline?.toLowerCase().includes(query) ||
        product.shortDescription?.toLowerCase().includes(query) ||
        product.category?.toLowerCase().includes(query)
      );
    }

    const billSoft = baseProducts.find((product) => product.slug === "bill-soft");
    if (!billSoft) return baseProducts;

    const others = baseProducts.filter((product) => product.slug !== "bill-soft");
    const insertAt = Math.min(3, others.length);
    return [...others.slice(0, insertAt), billSoft, ...others.slice(insertAt)];
  }, [searchQuery, productsData]);

  // Scroll to products grid
  const scrollToProducts = () => {
    if (productsGridRef.current) {
      productsGridRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle search button click
  const handleSearch = () => {
    scrollToProducts();
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
        className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-white"
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
              <span>Our Products</span>
            </div>

            {/* Heading */}
            <h1 className="mb-4">
              Software Products
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 mt-2">
                Built for Success
              </span>
            </h1>

            {/* Description */}
            <p className="text-base lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
              Discover our comprehensive suite of business software solutions designed to streamline operations and drive growth.
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
                    placeholder="Search products... (e.g., HRMS, WMS, Billing)"
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
                <div className="mt-4 text-sm text-gray-600 font-medium lg:text-left text-center">
                  {filteredProducts.length === 0 ? (
                    <span className="text-red-600">No products found matching "{searchQuery}"</span>
                  ) : (
                    <span>Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} matching "{searchQuery}"</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section ref={productsGridRef} className="py-12 lg:py-16 bg-white scroll-mt-8">
        <div className="max-w-7xl mx-auto px-6">
          {filteredProducts.length === 0 ? (
            /* No Results State */
            <div className="text-center py-20">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3">No products found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms or browse all our products.</p>
              <button
                onClick={() => setSearchQuery("")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
              >
                Clear Search
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ) : (
            /* Products Grid — flex + justify-center centers incomplete last rows */
            <div className="flex flex-wrap justify-center gap-8 items-stretch">
              {filteredProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/product/${product.slug}`}
                  prefetch={false}
                  className="product-click-trigger group flex self-stretch w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
                  data-product-name={product.title}
                  onClick={() => {
                    if (window.dataLayer) {
                      window.dataLayer.push({
                        event: 'product_click',
                        'product-name': product.title
                      });
                    }
                  }}
                >
                  <div className="relative rounded-3xl p-8 w-full flex flex-col flex-1 transition-all duration-300 hover:scale-[1.02] bg-white border-2 border-gray-100 hover:border-emerald-300 shadow-lg hover:shadow-2xl items-center text-center">
                    {/* Hover Gradient Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                    <div className="relative z-[1] w-full flex flex-col flex-1 min-h-0">
                      {/* Category Badge */}
                      <div className="mb-4 h-7 flex items-center justify-center shrink-0">
                        <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border-2 border-emerald-200 shadow-md whitespace-nowrap">
                          {product.category}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl">{product.icon}</span>
                      </div>

                      {/* Title */}
                      <div className="mb-2 w-full h-16 flex items-center justify-center shrink-0">
                        <h3 className="line-clamp-2 group-hover:text-emerald-700 transition-colors duration-300">
                          {product.title}
                        </h3>
                      </div>

                      {/* Tagline */}
                      <div className="mb-2 flex h-[3.25rem] w-full items-center justify-center shrink-0">
                        {product.tagline ? (
                          <p className="text-emerald-600 font-semibold line-clamp-2 leading-snug">
                            {product.tagline}
                          </p>
                        ) : (
                          <span className="sr-only">No tagline</span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="flex-1 text-gray-700 text-sm leading-relaxed min-h-[4.75rem] line-clamp-4 w-full mb-6">
                        {product.shortDescription}
                      </p>

                      {/* CTA pinned to bottom */}
                      <div className="mt-auto shrink-0 flex items-center justify-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all duration-200 pt-4 border-t border-gray-50 w-full">
                        Explore Product
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
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
      <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-green opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <h2 className="mb-6 capitalize">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Built with expertise, innovation, and dedication to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3">Ready to Deploy</h3>
              <p className="text-gray-700 leading-relaxed">Pre-built solutions ready for immediate implementation</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="mb-3">Fully Customizable</h3>
              <p className="text-gray-600">Adapt to your specific business requirements</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security and uptime</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-3">Expert Support</h3>
              <p className="text-gray-600">24/7 dedicated technical assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
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
          <h2 className="mb-6 capitalize">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            We build custom software solutions tailored to your specific business needs. Let's discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              prefetch={false}
              className="press-illusion-btn-orange bg-orange-600 text-white font-bold px-8 py-4 text-lg items-center space-x-2 inline-flex justify-center"
            >
              <span>Request Custom Solution</span>
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
              prefetch={false}
              className="press-illusion-btn bg-green-400 text-white inline-flex items-center justify-center px-8 py-4 text-lg font-bold  backdrop-blur-md border-2 border-gray-200 rounded-lg "
            >View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


