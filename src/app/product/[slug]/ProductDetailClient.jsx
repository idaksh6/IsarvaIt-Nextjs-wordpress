"use client";

import { useState } from "react";
import Link from "../../components/AppLink";
import ContactFormModal from "../../components/ContactFormModal";
import ProductDetailPremium from "../../components/products/ProductDetailPremium";
import ProductDetailPremiumWooCommerce from "../../components/products/ProductDetailPremiumWooCommerce";
import ProductDetailPremiumPetroCare from "../../components/products/ProductDetailPremiumPetroCare";
import ProductDetailPremiumMultiBranch from "../../components/products/ProductDetailPremiumMultiBranch";
import ProductDetailPremiumDMS from "../../components/products/ProductDetailPremiumDMS";
import ProductDetailPremiumLodge from "../../components/products/ProductDetailPremiumLodge";
import ProductDetailPremiumMobile from "../../components/products/ProductDetailPremiumMobile";
import ProductDetailPremiumMarine from "../../components/products/ProductDetailPremiumMarine";
import ProductDetailPremiumDispatcher from "../../components/products/ProductDetailPremiumDispatcher";
import ProductDetailPremiumDealer from "../../components/products/ProductDetailPremiumDealer";
import ProductDetailPremiumExpense from "../../components/products/ProductDetailPremiumExpense";
import ProductDetailPremiumCRM from "../../components/products/ProductDetailPremiumCRM";
import ProductDetailPremiumCRMOld from "../../components/products/ProductDetailPremiumCRMOld";
import ProductDetailPremiumBillSoft from "../../components/products/ProductDetailPremiumBillSoft";
import ProductDetailPremiumSupport from "../../components/products/ProductDetailPremiumSupport";
import ProductDetailPremiumGodownStaging from "../../components/products/ProductDetailPremiumGodownStaging";
import ProductDetailPremiumAssociation from "../../components/products/ProductDetailPremiumAssociation";

import ProductDetailPremiumHRMS from "../../components/products/ProductDetailPremiumHRMS";

export default function ProductDetailClient({ product, relatedProducts, allProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use Staging View for HRMS Software (Now Live)
  if (product.slug === 'hrms-software') {
    return (
      <ProductDetailPremiumHRMS 
        product={product} 
        relatedProducts={relatedProducts} 
        allProducts={allProducts}
      />
    );
  }

  // Use Premium View for HRMS Software (Old)
  if (product.slug === 'hrms-software-old') {
    return (
      <ProductDetailPremium 
        product={product} 
        relatedProducts={relatedProducts} 
        allProducts={allProducts}
      />
    );
  }

  // Use Premium View for WooCommerce Development
  if (product.slug === 'woocommerce-development') {
    return (
      <ProductDetailPremiumWooCommerce 
        product={product} 
        relatedProducts={relatedProducts} 
        allProducts={allProducts}
      />
    );
  }

  // Use Premium View for Petro Care
  if (product.slug === 'petro-care') {
    return (
      <ProductDetailPremiumPetroCare 
        product={product} 
        relatedProducts={relatedProducts} 
        allProducts={allProducts}
      />
    );
  }

  // Use Premium View for Multi-Branch Retail Billing Software
  if (product.slug === 'retail-billing-software') {
    return (
      <ProductDetailPremiumMultiBranch 
        product={product} 
        relatedProducts={relatedProducts} 
        allProducts={allProducts}
      />
    );
  }

  // Use Premium View for Document Management System
  if (product.slug === 'document-management-system') {
    return (
      <ProductDetailPremiumDMS 
        product={product} 
        relatedProducts={relatedProducts} 
        allProducts={allProducts}
      />
    );
  }

  // Use Premium View for Lodge Booking Software
  if (product.slug === 'lodge-booking-software') {
    return (
      <ProductDetailPremiumLodge 
        product={product} 
        relatedProducts={relatedProducts} 
        allProducts={allProducts}
      />
    );
  }

  // Use Premium View for Mobile Service Center
  if (product.slug === 'mobile-service-center') {
    return (
      <ProductDetailPremiumMobile 
        product={product} 
        relatedProducts={relatedProducts} 
        allProducts={allProducts}
      />
    );
  }

  // Use Premium View for Marine Service Software
  if (product.slug === 'marine-service-software') {
    return (
      <ProductDetailPremiumMarine 
        product={product} 
        relatedProducts={relatedProducts} 
        allProducts={allProducts}
      />
    );
  }

  // Use Premium View for Dispatcher Panel
  if (product.slug === 'dispatcher-panel') {
    return (
      <ProductDetailPremiumDispatcher 
        product={product} 
        relatedProducts={relatedProducts} 
        allProducts={allProducts}
      />
    );
  }

  // Use Premium View for Dealer Management Software
  if (product.slug === 'dealer-management-and-dealer-article-software') {
    return (
      <ProductDetailPremiumDealer 
        product={product} 
        relatedProducts={relatedProducts} 
        allProducts={allProducts}
      />
    );
  }

  // Use Premium View for Expense Tracker
  if (product.slug === 'expense-tracker') {
    return (
      <ProductDetailPremiumExpense 
        product={product} 
        relatedProducts={relatedProducts} 
        allProducts={allProducts}
      />
    );
  }

  // Use Premium View for CRM Application (Now Live)
  if (product.slug === 'crm-application') {
    return (
      <ProductDetailPremiumCRM 
        product={product} 
        relatedProducts={relatedProducts} 
        allProducts={allProducts}
      />
    );
  }

  // Use Premium View for CRM Application (Old)
  if (product.slug === 'crm-application-old') {
    return (
      <ProductDetailPremiumCRMOld 
        product={product} 
        relatedProducts={relatedProducts} 
        allProducts={allProducts}
      />
    );
  }


  // Use Premium View for BillSoft
  if (product.slug === 'bill-soft') {
    return (
      <ProductDetailPremiumBillSoft 
        product={product} 
        relatedProducts={relatedProducts} 
        allProducts={allProducts}
      />
    );
  }

  // Use Staging View for Support Application (now live)
  if (product.slug === 'support-application') {
    return (
      <ProductDetailPremiumSupport 
        product={product} 
        relatedProducts={relatedProducts} 
        allProducts={allProducts}
      />
    );
  }



  // Use Premium View for Godown Management Staging
  if (product.slug === 'godown-management-staging') {
    return (
      <ProductDetailPremiumGodownStaging 
        product={product} 
        relatedProducts={relatedProducts} 
        allProducts={allProducts}
      />
    );
  }

  // Use Premium View for Association Membership Management
  if (product.slug === 'association-membership-management') {
    return (
      <ProductDetailPremiumAssociation 
        product={product} 
        relatedProducts={relatedProducts} 
        allProducts={allProducts}
      />
    );
  }

  return (
    <>
      <div className="bg-white overflow-hidden">
        {/* Hero Section */}
        <section 
          className={`relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden bg-gradient-to-b ${product.bgGradient}`}
          style={{ contain: "layout style paint" }}
        >
          {/* Background Decorations */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" style={{ transform: "translateZ(0)" }}>
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}></div>
            <div className={`absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br ${product.color} opacity-20 blur-[100px] rounded-full`}></div>
            <div className={`absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl ${product.color} opacity-15 blur-[120px] rounded-full`}></div>
            <div className="hero-noise-overlay opacity-[0.08]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Breadcrumb */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/" prefetch={false} className="hover:text-violet-600 transition-colors">
                  Home
                </Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/products" prefetch={false} className="hover:text-violet-600 transition-colors">
                  Products
                </Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-violet-600 font-medium">{product.title}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md text-gray-800 font-semibold text-sm mb-6 border border-white/60 shadow-lg">
                  <span>{product.category}</span>
                </div>
                <h1 className="mb-6">
                  {product.title}
                </h1>
                <p className="text-xl lg:text-2xl text-violet-600 font-semibold mb-6">
                  {product.tagline}
                </p>
                <p className="text-base lg:text-xl text-gray-700 leading-relaxed font-medium mb-8">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="press-illusion-btn-orange bg-white text-orange-600 font-bold px-8 py-4 text-lg items-center space-x-2 inline-flex shadow-lg hover:shadow-xl"
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
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-700 bg-white/80 backdrop-blur-md border-2 border-gray-200 rounded-lg hover:border-violet-400 hover:text-violet-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    View Features
                  </Link>
                </div>
              </div>

              <div>
                <div className="relative">
                  <div className={`absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br ${product.color} opacity-20 blur-[120px] rounded-full`}></div>
                  <div className={`relative rounded-3xl bg-gradient-to-br ${product.color} p-1 shadow-2xl`}>
                    <div className="rounded-3xl bg-white/95 backdrop-blur-md p-12">
                      <div className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${product.color} opacity-10 flex items-center justify-center`}>
                        <span className="text-9xl">{product.icon}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 lg:py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 hero-noise-overlay opacity-[0.02]"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-10">
              <h2 className="mb-6 uppercase">
                Key Features
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Powerful features designed to meet your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:border-violet-200 hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${product.color} opacity-90 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200`}>
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className={`py-12 lg:py-16 bg-gradient-to-b ${product.bgGradient} relative overflow-hidden`}>
          <div className="absolute inset-0 hero-noise-overlay opacity-[0.05]"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-10">
              <h2 className="mb-6 uppercase">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Built with modern, reliable technologies
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {product.technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`px-6 py-3 rounded-full bg-white border-2 border-gray-200 hover:border-violet-400 hover:shadow-lg transition-all duration-200 font-semibold text-gray-700 hover:text-violet-700`}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 hero-noise-overlay opacity-[0.02]"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-10">
              <h2 className="mb-6 uppercase">
                Business Benefits
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Real value that drives your business forward
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="relative rounded-3xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} opacity-90 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="mb-3 group-hover:text-violet-700 transition-colors">
                      {benefit}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products Section */}
        <section className={`py-12 lg:py-16 bg-gradient-to-b ${product.bgGradient} relative overflow-hidden`}>
          <div className="absolute inset-0 hero-noise-overlay opacity-[0.05]"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-10">
              <h2 className="mb-6 uppercase">
                Related Products
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Explore other solutions that might interest you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.slug}
                  href={`/product/${relatedProduct.slug}`}
                  prefetch={false}
                  className="group"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${relatedProduct.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className="absolute inset-0 hero-noise-overlay opacity-[0.1]"></div>
                    
                    <div className="relative p-8 h-full flex flex-col">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6 border border-white/30">
                        <span className="text-4xl">{relatedProduct.icon}</span>
                      </div>

                      <h3 className="text-white mb-4">
                        {relatedProduct.title}
                      </h3>

                      <p className="text-white/90 leading-relaxed mb-6 flex-grow">
                        {relatedProduct.shortDescription}
                      </p>

                      <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-200">
                        <span>Learn More</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/products"
                prefetch={false}
                className="press-illusion-btn-orange bg-orange-600 text-white w-fit font-bold px-8 py-4 text-base items-center space-x-2 flex cursor-pointer mx-auto"
              >
                <span>View All Products</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem={product.title}
        allItems={allProducts}
      />
    </>
  );
}

