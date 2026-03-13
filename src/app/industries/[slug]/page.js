import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustryBySlug, getAllIndustrySlugs, industriesData } from "../../lib/data/industries-data";
import IndustryDetailClient from "./IndustryDetailClient";

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({
    slug: slug,
  }));
}

// Force static rendering for all industry pages
export const dynamic = 'force-static';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  
  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: `${industry.title} Solutions - Isarva Industries`,
    description: industry.description,
  };
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  // Get related industries (3 random industries excluding current)
  const relatedIndustries = industriesData
    .filter(i => i.slug !== industry.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        className={`relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-gradient-to-b ${industry.softColor}`}
      >
        {/* Background Decorations - Soft with Noise */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" style={{ transform: "translateZ(0)" }}>
          <div className="absolute inset-0 bg-mesh-green opacity-20"></div>
          <div className={`absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br ${industry.color} opacity-20 blur-[100px] rounded-full`}></div>
          <div className={`absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl ${industry.color} opacity-15 blur-[120px] rounded-full`}></div>
          <div className="hero-noise-overlay opacity-[0.15]"></div>
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
              <Link href="/industries" prefetch={true} className="hover:text-emerald-600 transition-colors">
                Industries
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-emerald-600 font-medium">{industry.title}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full  backdrop-blur-md text-black font-semibold text-sm mb-6 border border-white/60 shadow-lg`}>
                <span className="text-2xl">{industry.icon}</span>
                <span>Industry Expertise</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                {industry.title}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                {industry.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <IndustryDetailClient industry={industry} industriesData={industriesData} />
              </div>
            </div>

            <div>
              <div className="relative">
                <div className={`absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br ${industry.color} opacity-20 blur-[120px] rounded-full`}></div>
                <div className="relative rounded-3xl bg-white/90 backdrop-blur-md border border-white/60 shadow-2xl p-12">
                  <div className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${industry.color} opacity-10 flex items-center justify-center`}>
                    <span className="text-9xl">{industry.icon}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="challenges" className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 hero-noise-overlay opacity-[0.03]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Industry Challenges We Solve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the unique challenges faced by the {industry.title.toLowerCase()} sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.challenges.map((challenge, index) => (
              <div 
                key={index}
                className={`flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:border-${industry.accentColor}-200 hover:bg-gradient-to-br hover:${industry.softColor.split(' ')[0]} transition-all duration-200 group shadow-sm hover:shadow-md`}
              >
                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${industry.color} opacity-90 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200`}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{challenge}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className={`py-20 lg:py-32 bg-gradient-to-b ${industry.softColor} relative overflow-hidden`}>
        <div className="absolute inset-0 hero-noise-overlay opacity-[0.08]"></div>
        <div className={`absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gradient-to-br ${industry.color} opacity-10 blur-[100px] rounded-full`}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Solutions for {industry.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed specifically for your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industry.solutions.map((solution, index) => (
              <div 
                key={index}
                className="relative rounded-3xl p-8 bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.color} opacity-90 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:text-${industry.accentColor}-700 transition-colors`}>
                    {solution}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 hero-noise-overlay opacity-[0.03]"></div>
        
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
            {industry.technologies.map((tech, index) => (
              <div
                key={index}
                className={`px-6 py-3 rounded-full bg-white border-2 border-${industry.accentColor}-100 hover:border-${industry.accentColor}-300 hover:shadow-lg transition-all duration-200 font-semibold text-gray-700 hover:text-${industry.accentColor}-700`}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`py-20 lg:py-32 bg-gradient-to-b ${industry.softColor} relative overflow-hidden`}>
        <div className="absolute inset-0 hero-noise-overlay opacity-[0.08]"></div>
        <div className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl ${industry.color} opacity-10 blur-[120px] rounded-full`}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Benefits You'll Enjoy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real value that drives business growth and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industry.benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative rounded-3xl p-8 bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.color} opacity-90 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:text-${industry.accentColor}-700 transition-colors`}>
                    {benefit}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Industries Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 hero-noise-overlay opacity-[0.03]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Other Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore solutions for other industry sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedIndustries.map((relatedIndustry) => (
              <Link
                key={relatedIndustry.slug}
                href={`/industries/${relatedIndustry.slug}`}
                prefetch={true}
                className="group"
              >
                <div className="relative h-full rounded-3xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${relatedIndustry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${relatedIndustry.color} opacity-90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6`}>
                      <span className="text-4xl">{relatedIndustry.icon}</span>
                    </div>

                    <h3 className={`text-2xl font-bold text-gray-900 mb-4 group-hover:text-${relatedIndustry.accentColor}-700 transition-colors`}>
                      {relatedIndustry.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                      {relatedIndustry.shortDescription}
                    </p>

                    <div className={`flex items-center gap-2 text-${relatedIndustry.accentColor}-600 font-semibold group-hover:gap-3 transition-all duration-200`}>
                      <span>Explore</span>
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
              href="/industries"
              prefetch={true}
              className={`inline-flex items-center gap-2 text-${industry.accentColor}-600 font-semibold hover:gap-3 transition-all duration-200 text-lg`}
            >
              View All Industries
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 lg:py-32 bg-gradient-to-b ${industry.softColor} relative overflow-hidden`}>
        <div className="absolute inset-0 hero-noise-overlay opacity-[0.1]"></div>
        <div className={`absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br ${industry.color} opacity-15 blur-[100px] rounded-full`}></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/60 backdrop-blur-md text-${industry.accentColor}-800 font-semibold text-sm mb-8 border border-white/60 shadow-lg`}>
            <span className={`w-2 h-2 bg-${industry.accentColor}-500 rounded-full animate-pulse`}></span>
            Let's Talk
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your {industry.title} Business?
          </h2>
          
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Connect with our {industry.title.toLowerCase()} experts to discuss your specific requirements and explore how we can help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              prefetch={true}
              className="press-illusion-btn bg-white text-gray-900 font-bold px-8 py-4 text-lg items-center space-x-2 inline-flex border-2 border-gray-200 hover:border-gray-300 shadow-lg"
            >
              <span>Contact Our Experts</span>
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
              href="/industries"
              prefetch={true}
              className={`inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-${industry.accentColor}-700 bg-white/80 backdrop-blur-md border-2 border-${industry.accentColor}-200 rounded-lg hover:border-${industry.accentColor}-300 transition-all duration-200 shadow-lg hover:shadow-xl`}
            >
              View All Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
