import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us - Isarva | Digital Excellence",
  description: "Learn about Isarva's mission, values, and team. We transform ideas into powerful digital solutions that drive growth and innovation.",
};

export default function AboutPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section with Gradient Background */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#d4f4dd] via-[#defae4] to-white">
        {/* Background Decorations */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-mesh-green opacity-40"></div>
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-emerald-200/40 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-200/30 blur-[130px] rounded-full"></div>
          <div className="hero-noise-overlay opacity-[0.12]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-md text-emerald-800 font-semibold text-sm mb-6 border border-white/60 shadow-lg">
              <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
              About Isarva
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Crafting Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Excellence
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We transform ideas into powerful digital solutions that drive growth and innovation for businesses worldwide.
            </p>
          </div>


        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 mb-2">
                150+
              </div>
              <p className="text-gray-600 font-medium">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 mb-2">
                98%
              </div>
              <p className="text-gray-600 font-medium">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 mb-2">
                50+
              </div>
              <p className="text-gray-600 font-medium">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 mb-2">
                24/7
              </div>
              <p className="text-gray-600 font-medium">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-200/40 blur-[100px] rounded-full"></div>
                <div className="relative rounded-3xl bg-white/90 backdrop-blur-md border border-white/60 shadow-2xl p-12">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To empower businesses with cutting-edge digital solutions that drive innovation, efficiency, and growth in an ever-evolving technological landscape.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Driving Innovation Through Technology
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We believe in the transformative power of technology. Our team combines creativity, technical expertise, and strategic thinking to deliver solutions that exceed expectations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From startups to enterprise organizations, we partner with businesses to create digital experiences that resonate with their audience and achieve measurable results.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Building the Future, Today
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our vision is to be the leading force in digital transformation, setting new standards for innovation, quality, and customer success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We stay ahead of technology trends, continuously evolving our expertise to provide our clients with solutions that are not just current, but future-ready.
              </p>
            </div>
            <div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200/40 blur-[100px] rounded-full"></div>
                <div className="relative rounded-3xl bg-white/90 backdrop-blur-md border border-white/60 shadow-2xl p-12">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To be recognized globally as pioneers in digital innovation, creating impactful solutions that shape the future of technology and business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-green opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold text-sm mb-6 border border-emerald-100 shadow-sm">
              <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
              Our Core Values
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values are the foundation of everything we do, guiding our decisions and shaping our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value Card 1 */}
            <div className="group relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] bg-white/90 border border-gray-100 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                  Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We strive for excellence in every project, ensuring the highest quality standards and attention to detail in all our deliverables.
                </p>
              </div>
            </div>

            {/* Value Card 2 */}
            <div className="group relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] bg-white/90 border border-gray-100 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                  Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We embrace new technologies and creative solutions, constantly pushing boundaries to deliver cutting-edge digital experiences.
                </p>
              </div>
            </div>

            {/* Value Card 3 */}
            <div className="group relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] bg-white/90 border border-gray-100 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                  Collaboration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in the power of teamwork, working closely with clients and partners to achieve shared success and mutual growth.
                </p>
              </div>
            </div>

            {/* Value Card 4 */}
            <div className="group relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] bg-white/90 border border-gray-100 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                  Agility
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We adapt quickly to changing requirements and market dynamics, ensuring our solutions remain relevant and effective.
                </p>
              </div>
            </div>

            {/* Value Card 5 */}
            <div className="group relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] bg-white/90 border border-gray-100 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                  Integrity
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Transparency and honesty guide our relationships with clients, partners, and team members in every interaction.
                </p>
              </div>
            </div>

            {/* Value Card 6 */}
            <div className="group relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] bg-white/90 border border-gray-100 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                  Customer Focus
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our clients' success is our success. We prioritize understanding and exceeding customer expectations in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold text-sm mb-6 border border-emerald-100 shadow-sm">
              <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
              Meet The Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The People Behind Our Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse team of experts passionate about creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="group">
              <div className="relative rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-emerald-400/20 to-green-500/20 flex items-center justify-center relative overflow-hidden">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Johnson</h3>
                  <p className="text-emerald-600 font-medium mb-3">CEO & Founder</p>
                  <p className="text-gray-600 text-sm">Visionary leader with 15+ years in tech innovation</p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="relative rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-green-400/20 to-emerald-500/20 flex items-center justify-center relative overflow-hidden">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Chen</h3>
                  <p className="text-emerald-600 font-medium mb-3">CTO</p>
                  <p className="text-gray-600 text-sm">Technology strategist driving innovation forward</p>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group">
              <div className="relative rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-green-400/20 flex items-center justify-center relative overflow-hidden">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Emily Rodriguez</h3>
                  <p className="text-emerald-600 font-medium mb-3">Lead Designer</p>
                  <p className="text-gray-600 text-sm">Creative director crafting beautiful experiences</p>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="group">
              <div className="relative rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-green-500/20 to-emerald-400/20 flex items-center justify-center relative overflow-hidden">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">David Park</h3>
                  <p className="text-emerald-600 font-medium mb-3">Head of Development</p>
                  <p className="text-gray-600 text-sm">Expert developer building scalable solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-green opacity-30"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-200/40 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-200/40 blur-[120px] rounded-full"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md text-emerald-800 font-semibold text-sm mb-6 border border-white/60 shadow-lg">
            <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
            Let's Work Together
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's collaborate to transform your ideas into powerful digital solutions that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="press-illusion-btn bg-green-400 text-black font-bold px-8 py-4 text-lg items-center space-x-2 inline-flex justify-center"
            >
              <span>Get In Touch</span>
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
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-700 bg-white/80 backdrop-blur-md border-2 border-gray-200 rounded-lg hover:border-emerald-600 hover:text-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}