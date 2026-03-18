"use client";

import Link from "next/link";
import { useState } from "react";
import ContactFormModal from "../../components/ContactFormModal";

export default function MigrateToWordPressContent({ servicesData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const service = servicesData.find(s => s.slug === "migrate-to-wordpress");

  const wordpressBenefits = [
    {
      title: "Strong Community and Support",
      description: "WordPress benefits from a large, active community, providing a wealth of tutorials, forums, and third-party support. Whether you need advice, troubleshooting, or new ideas, the WordPress community is always there to help.",
      icon: "👥"
    },
    {
      title: "Scalable and Flexible",
      description: "As your business grows, so can your website. WordPress offers scalability through plugins, themes, and custom integrations, allowing your site to evolve with your changing business needs, from small websites to enterprise-level solutions.",
      icon: "📈"
    },
    {
      title: "SEO-Friendly",
      description: "WordPress offers a strong foundation for SEO, with built-in features like easy URL structuring, SEO-friendly themes, and plugins that enhance optimization. It helps your business rank better in search engines, driving more organic traffic to your site.",
      icon: "🔍"
    },
    {
      title: "Minimal Maintenance Effort",
      description: "Regular updates, security patches, and an intuitive dashboard ensure that WordPress requires minimal maintenance. Focus on growing your business rather than managing technical issues.",
      icon: "⚙️"
    },
    {
      title: "Effortless Content Updates",
      description: "WordPress is designed for ease of use, allowing non-technical users to easily update blog posts, product pages, and other content. With its intuitive interface, keeping your website fresh and relevant is simple and quick.",
      icon: "✏️"
    },
    {
      title: "Affordable Ownership",
      description: "WordPress eliminates costly licensing fees, providing a flexible and budget-friendly solution. You can choose your own hosting and access a vast library of plugins and themes, keeping expenses low while maintaining full control over your website.",
      icon: "💰"
    }
  ];

  const migrationReasons = [
    {
      title: "Ease of Use",
      description: "WordPress is more intuitive and accessible for non-developers, unlike Drupal's steep learning curve."
    },
    {
      title: "Development Speed",
      description: "WordPress facilitates faster site development and deployment compared to Drupal's longer timelines due to its complexity."
    },
    {
      title: "Cost Efficiency",
      description: "WordPress offers more affordable hosting, maintenance, and support options, reducing overall operational costs."
    },
    {
      title: "Customization",
      description: "While Drupal relies heavily on custom coding for advanced features, WordPress simplifies customization with thousands of readily available themes and plugins."
    },
    {
      title: "Community and Support",
      description: "WordPress boasts a larger, more active community, offering extensive tutorials, plugins, and third-party integrations, making support easily accessible."
    },
    {
      title: "Scalability and Flexibility",
      description: "WordPress easily scales with your business, offering advanced plugins and integrations to meet growing demands."
    }
  ];

  const whyChooseUs = [
    {
      title: "Open-Source Flexibility",
      description: "Tailored WordPress solutions that scale with your growing business.",
      icon: "🔓"
    },
    {
      title: "Enterprise-Grade Security",
      description: "WordPress offers robust security measures, and with Isarva Infotech's expertise, your website's data and reputation remain protected.",
      icon: "🛡️"
    },
    {
      title: "Scalable Extendibility",
      description: "With endless plugins and APIs for custom integrations, WordPress grows with your business, adapting to new features, needs, and market demands.",
      icon: "🚀"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-24 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-mesh-blue opacity-30"></div>
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/30 to-indigo-300/30 blur-[100px] rounded-full"></div>
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-300/20 to-blue-300/20 blur-[100px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/services" className="hover:text-blue-600 transition-colors">
                Services
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/services/website-services" className="hover:text-blue-600 transition-colors">
                Website Services
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-blue-600 font-medium">Migrate to WordPress</span>
            </div>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 font-semibold text-sm mb-6 border border-blue-200 shadow-md">
              <span className="text-2xl">🔄</span>
              <span>WordPress Migration</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Migrate to WordPress
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-10">
              Experience hassle-free WordPress migration with Isarva Infotech. Secure, seamless, and optimized for peak performance.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="press-illusion-btn bg-blue-400 text-white font-bold px-8 py-4 text-lg items-center space-x-2 inline-flex"
            >
              <span>Contact Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4">
                <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Expert WordPress Migration Services */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Expert WordPress Migration Services
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Isarva Infotech offers seamless WordPress migration services tailored to enterprise-level websites. Whether transitioning from Drupal, a proprietary CMS, or another open-source platform, we specialize in smooth, secure, and hassle-free migrations to WordPress. With a focus on optimal performance, high security, and data integrity, we ensure your website's transition is efficient and disruption-free.
            </p>
          </div>
        </div>
      </section>

      {/* Why WordPress is the Ideal CMS */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why WordPress is the Ideal CMS for Your Business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wordpressBenefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="h-full bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-300 p-8 transition-all duration-300 shadow-md">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100 flex items-center justify-center mb-6 text-3xl">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We provide the best web services CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            We provide the best web services
          </h2>
          <p className="text-xl lg:text-2xl text-blue-50 mb-12 max-w-3xl mx-auto leading-relaxed">
            Providing cutting-edge web solutions with seamless designs, reliable performance, and scalable technology to elevate your online presence.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-blue-600 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-2xl"
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </section>

      {/* Drupal to WordPress Migration */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Drupal to WordPress Migration
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Isarva Infotech, seamless migration is our expertise. Having completed over 200 successful Drupal-to-WordPress migrations, we ensure a hassle-free transition. Whether you're reducing costs, preparing for hosting renewals, or simplifying content management, we deliver a stress-free migration process tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Drupal vs WordPress Comparison */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Drupal vs WordPress
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* What is Drupal */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-10 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-100 to-red-100 border-2 border-orange-200 flex items-center justify-center text-3xl">
                  🔷
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What is Drupal?</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Drupal is an open-source CMS designed for building and managing websites with advanced features like content versioning and user management. However, Drupal's complexity often requires significant technical expertise for hosting, security, and updates. While the software is free, additional costs can arise from hosting, premium modules, and support. Organizations with the necessary resources often favor Drupal for its robust customization capabilities, though it demands ongoing maintenance and longer development times.
              </p>
            </div>

            {/* What is WordPress */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 p-10 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 border-2 border-blue-300 flex items-center justify-center text-3xl">
                  ✅
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What is WordPress?</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                WordPress, a dominant CMS since 2003, is celebrated for its flexibility, user-friendliness, and vast community support. As an open-source platform, it offers businesses the freedom to create everything from simple blogs to complex e-commerce and enterprise sites using its extensive range of themes and plugins. Unlike Drupal, WordPress enables rapid development and requires less technical expertise, making it the preferred choice for businesses seeking an adaptable and cost-effective content management solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Migrate from Drupal to WordPress */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Migrate from Drupal to WordPress?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {migrationReasons.map((reason, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-100 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Isarva Infotech */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Why Choose Isarva Infotech for Your WordPress Migration?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">
              At Isarva Infotech, we deliver seamless, secure WordPress migrations tailored to your business needs. Our experts preserve your site's design, functionality, and SEO performance while optimizing for speed, security, and user experience — turning migration into an opportunity for digital growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="group">
                <div className="h-full bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-300 p-8 transition-all duration-300 shadow-md">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100 flex items-center justify-center mb-6 text-3xl">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
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
            Ready to Migrate?
          </div>

          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Make the Switch to WordPress Today
          </h2>
          
          <p className="text-xl lg:text-2xl text-blue-50 mb-12 max-w-3xl mx-auto leading-relaxed">
            Partner with Isarva Infotech for expert WordPress migration services. We handle the complexity, you enjoy the results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-blue-600 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Migration
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
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-blue-100 text-sm font-medium">Successful Migrations</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Zero</div>
                <div className="text-blue-100 text-sm font-medium">Data Loss</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100 text-sm font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Service"
        preSelectedItem="Migrate to WordPress"
        allItems={servicesData}
      />
    </>
  );
}
