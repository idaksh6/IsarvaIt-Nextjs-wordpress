import Link from "next/link";
import { productsData, getAllCategories } from "../lib/data/products-data";
import ProductsClient from "./ProductsClient";

export const metadata = {
  title: "Our Products - Isarva | Software Solutions",
  description: "Discover our comprehensive suite of business software solutions designed to streamline operations and drive growth.",
};

// Force static rendering for instant page loads
export const dynamic = 'force-static';

export default function ProductsPage() {
  const categories = ["All", ...getAllCategories()];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-gradient-to-br from-violet-100 via-purple-50 to-white"
        style={{ contain: "layout style paint" }}
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" style={{ transform: "translateZ(0)" }}>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.15) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
          <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-br from-violet-300/30 to-purple-300/30 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-fuchsia-300/20 to-pink-300/20 blur-[120px] rounded-full"></div>
          <div className="hero-noise-overlay opacity-[0.1]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md text-violet-800 font-semibold text-sm mb-6 border border-white/60 shadow-lg">
              <span className="text-xl">🚀</span>
              Our Products
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Software Products
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600">
                Built for Success
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of business software solutions designed to streamline operations and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 hero-noise-overlay opacity-[0.02]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ProductsClient productsData={productsData} categories={categories} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/10 blur-[100px] rounded-full"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold text-sm mb-8 border border-white/30 shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Ready to Get Started?
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            We build custom software solutions tailored to your specific business needs. Let's discuss your requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              prefetch={true}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-violet-600 bg-white rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Request Custom Solution</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="/services"
              prefetch={true}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl hover:bg-white/20 transition-all duration-200 shadow-lg"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
