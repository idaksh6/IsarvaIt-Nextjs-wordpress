import Link from "next/link";
import { servicesData } from "../lib/data/services-data";

export const metadata = {
  title: "Our Services - Isarva | Digital Excellence",
  description: "Explore our comprehensive range of IT services including website development, cloud services, AI/ML consulting, and more.",
};

// Force static rendering for instant page loads
export const dynamic = 'force-static';

export default function ServicesPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#d4f4dd] via-[#defae4] to-white"
        style={{ contain: "layout style paint" }}
      >
        {/* Background Decorations - Optimized */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" style={{ transform: "translateZ(0)" }}>
          <div className="absolute inset-0 bg-mesh-green opacity-40"></div>
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-emerald-200/40 blur-[80px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-200/30 blur-[80px] rounded-full"></div>
          <div className="hero-noise-overlay opacity-[0.12]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-md text-emerald-800 font-semibold text-sm mb-6 border border-white/60 shadow-lg">
              <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
              Our Services
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Comprehensive
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                IT Solutions
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From web development to AI consulting, we offer end-to-end services that drive your digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                prefetch={true}
                className="group"
              >
                <div className="relative rounded-3xl p-8 h-full transition-all duration-300 hover:scale-[1.02] bg-white border border-gray-100 shadow-lg hover:shadow-2xl">
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
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
                    <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all duration-200">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Feature Count Badge */}
                    <div className="absolute top-4 right-4 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                      {service.features.length}+ Features
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Expertise</h3>
              <p className="text-gray-600">Years of experience delivering successful projects across industries</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cutting-Edge Tech</h3>
              <p className="text-gray-600">Leveraging the latest technologies for optimal solutions</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">On-Time Delivery</h3>
              <p className="text-gray-600">Committed to meeting deadlines without compromising quality</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-lg">
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
