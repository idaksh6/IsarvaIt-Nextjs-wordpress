"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProductsClient({ productsData, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = productsData.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const isNotStaging = !product.slug?.includes("staging");
    return matchesCategory && isNotStaging;
  });

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg scale-105"
                : "bg-white/80 backdrop-blur-sm text-gray-700 border-2 border-gray-200 hover:border-violet-300 hover:text-violet-700 hover:scale-105"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Count */}
      <div className="mb-12 text-center">
        <p className="text-lg text-gray-600">
          Showing <span className="font-bold text-violet-600">{filteredProducts.length}</span> products
          {selectedCategory !== "All" && <span> in <span className="font-bold text-violet-600">{selectedCategory}</span></span>}
        </p>
      </div>

      {/* Masonry Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <Link
            key={product.slug}
            href={`/product/${product.slug}`}
            prefetch={true}
            className="group"
          >
            <div 
              className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] h-full"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Noise Texture */}
              <div className="absolute inset-0 hero-noise-overlay opacity-[0.15]"></div>
              
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }}></div>
              
              <div className="relative h-full p-8 flex flex-col">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/30 backdrop-blur-md text-white text-xs font-bold border border-white/40">
                    {product.category}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <span className="text-5xl">{product.icon}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                  {product.title}
                </h3>

                {/* Tagline */}
                <p className="text-white/90 font-semibold mb-4 text-lg">
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="text-white/80 leading-relaxed mb-6 flex-grow">
                  {product.shortDescription}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-white font-bold group-hover:gap-3 transition-all duration-200">
                  Explore Product
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Features Count Badge */}
                <div className="absolute top-8 right-8">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg">
                    <span className="text-white font-bold text-sm">{product.features.length}+</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
