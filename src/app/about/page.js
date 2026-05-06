import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Lightbulb,
  TrendingUp,
  Sparkles,
  Cpu,
  RefreshCcw,
  CheckCircle2,
  Briefcase
} from "lucide-react";
import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "About Us - Leading IT Solutions Provider",
  description: "Precision in Technology. Purpose in Impact. Learn about Isarva Infotech's legacy of innovation, our expert team, and commitment to delivering exceptional digital solutions since our founding.",
  keywords: ["about us", "company profile", "IT company", "software development company", "technology partner", "innovation"],
  url: "/about",
  noIndex: false,
});

export default function AboutPage() {
  return (
    <div className="bg-[#FDF8F2] overflow-hidden font-sans text-[#1a1f24]">

      {/* 1. HERO SECTION */}
      <section className="relative pt-52 lg:pt-48 pb-10 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#F0F7F4] to-[#FDF8F2]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#10b981] opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-[#84cc16] opacity-[0.05] rounded-full blur-[100px] pointer-events-none"></div>
        <div className="hero-noise-overlay"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex flex-col items-center mb-5 md:mb-10 section-animate">
            <span className="text-[#10b981] font-bold tracking-wider uppercase text-sm mb-4">Isarva Infotech</span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-[#1a1f24] max-w-5xl tracking-tight leading-[1.1] mb-8">
              Precision in <span className="italic text-[#10b981] font-bold">Technology.</span> <br /> Purpose in <span className="italic text-[#10b981] font-bold">Impact.</span>
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-[#53606b] max-w-3xl mx-auto leading-relaxed">
              At Isarva Infotech, we are more than an IT consulting firm — we are a strategic technology partner and a catalyst for progress in an ever-evolving digital world.
            </p>
          </div>

          <div className="relative section-animate" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-center items-center -space-x-2 md:space-x-5 overflow-visible !pt-0 py-5 md:py-16 ">
              {/* Card 1 - Connectivity */}
              <div className="relative w-12 h-32 sm:w-32 sm:h-44 md:w-[12vw] md:h-[18vw] xl:w-[240px] xl:h-[320px] rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-xl transform -translate-y-4 md:-translate-y-8 hover:-translate-y-10 transition-transform duration-500 ring-1 ring-[#10b981]/5 group">
                <Image src="/partners/expertise/clouds.png" alt="Connectivity" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-2 md:p-6 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-white font-bold text-[10px] md:text-lg mb-1">Connectivity</h4>
                  <div className="w-8 h-0.5 bg-cyan-400 mb-2" />
                  <p className="text-white/70 text-[6px] md:text-[10px] leading-tight line-clamp-3">We build systems that communicate effortlessly through APIs and cloud services.</p>
                </div>
              </div>

              {/* Card 2 - Flow */}
              <div className="relative w-16 h-48 sm:w-40 sm:h-56 md:w-[16vw] md:h-[24vw] xl:w-[320px] xl:h-[420px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl z-10 transform -translate-y-1 md:-translate-y-2 hover:-translate-y-4 transition-transform duration-500 ring-1 ring-[#10b981]/5 group">
                <Image src="/partners/expertise/waterfall.png" alt="Seamless Flow" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-3 md:p-8 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-white font-bold text-xs md:text-2xl mb-1">Seamless Flow</h4>
                  <div className="w-10 h-0.5 bg-blue-500 mb-2" />
                  <p className="text-white/70 text-[8px] md:text-xs leading-tight line-clamp-3">We design intuitive user experiences that create smooth digital journeys.</p>
                </div>
              </div>

              {/* Card 3 - Foundations (Main Center) */}
              <div className="relative w-24 h-64 sm:w-56 sm:h-80 md:w-[22vw] md:h-[32vw] xl:w-[450px] xl:h-[580px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl z-20 transform translate-y-4 md:translate-y-6 hover:translate-y-4 transition-transform duration-500 ring-2 md:ring-4 ring-white group">
                <Image src="/partners/expertise/mountain.png" alt="Strong Foundations" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-4 md:p-12 text-left">
                  <h3 className="text-white font-bold text-sm md:text-4xl leading-tight mb-2">Strong <br /> Foundations</h3>
                  <div className="w-16 h-1 bg-green-500 mb-4" />
                  <p className="text-white/80 text-[8px] md:text-sm leading-relaxed">Secure, scalable backend systems and infrastructure ensuring long-term reliability.</p>
                </div>
              </div>

              {/* Card 4 - Scalability */}
              <div className="relative w-16 h-48 sm:w-40 sm:h-56 md:w-[16vw] md:h-[24vw] xl:w-[320px] xl:h-[420px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl z-10 transform -translate-y-1 md:-translate-y-2 hover:-translate-y-4 transition-transform duration-500 ring-1 ring-[#10b981]/5 group">
                <Image src="/partners/expertise/galaxy.png" alt="Scalability" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-3 md:p-8 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-white font-bold text-xs md:text-2xl mb-1">Scalability</h4>
                  <div className="w-10 h-0.5 bg-purple-500 mb-2" />
                  <p className="text-white/70 text-[8px] md:text-xs leading-tight line-clamp-3">Future-ready solutions that scale with your business and unlock possibilities.</p>
                </div>
              </div>

              {/* Card 5 - Innovation */}
              <div className="relative w-12 h-32 sm:w-32 sm:h-44 md:w-[12vw] md:h-[18vw] xl:w-[240px] xl:h-[320px] rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-xl transform -translate-y-4 md:-translate-y-8 hover:-translate-y-10 transition-transform duration-500 ring-1 ring-[#10b981]/5 group">
                <Image src="/partners/expertise/volcano.png" alt="Innovation" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-2 md:p-6 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-white font-bold text-[10px] md:text-lg mb-1">Performance</h4>
                  <div className="w-8 h-0.5 bg-orange-500 mb-2" />
                  <p className="text-white/70 text-[6px] md:text-[10px] leading-tight line-clamp-3">High-speed, optimized solutions that drive results and innovation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REFINED TRANSFORMATION SECTION (FULL WIDTH IMAGE CONTENT) */}
      <section className="bg-white overflow-hidden border-y border-[#10b981]/10">
        <div className="flex flex-col lg:flex-row">

          {/* Left Column: Dark Green Stats Bar */}
          <div className="w-full lg:w-[350px] bg-[#16423C] text-white p-12 md:p-16 flex flex-col justify-center items-center lg:items-start space-y-16 section-animate">
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-[#10b981]" />
              </div>
              <span className="text-5xl md:text-6xl font-display font-bold mb-2">15+</span>
              <p className="text-[#FDF8F2]/60 text-sm md:text-base tracking-widest uppercase font-bold text-center lg:text-left">Years of <br className="hidden md:block" /> Expertise</p>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-[#10b981]" />
              </div>
              <span className="text-5xl md:text-6xl font-display font-bold mb-2">1,000+</span>
              <p className="text-[#FDF8F2]/60 text-sm md:text-base tracking-widest uppercase font-bold text-center lg:text-left">Projects <br className="hidden md:block" /> Delivered</p>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#10b981]" />
              </div>
              <span className="text-5xl md:text-6xl font-display font-bold mb-2">500+</span>
              <p className="text-[#FDF8F2]/60 text-sm md:text-base tracking-widest uppercase font-bold text-center lg:text-left">Global <br className="hidden md:block" /> Enterprises</p>
            </div>
          </div>

          {/* Right Column: Cream Content Area with Full-Width Image */}
          <div className="flex-1 bg-[#FDF8F2] p-6 md:p-16 lg:p-20 section-animate" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl lg:text-left text-center font-display font-bold text-[#16423C] mb-12 leading-tight max-w-4xl">
              Standing at the forefront of digital transformation.
            </h2>

            {/* Full Width Image Content */}
            <div className="relative w-full h-[300px] md:h-[450px] rounded-[3rem] overflow-hidden mb-16 shadow-2xl ring-4 ring-white/50">
              <Image src="/about_tech_light_v2.png" alt="Digital Excellence" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16423C]/90 via-transparent to-transparent flex items-end p-6">
                <div className="flex flex-col">
                  <span className="text-white/60 text-xs font-bold uppercase tracking-[0.3em] mb-2">Isarva Innovation Hub</span>
                  <h3 className="text-white text-3xl font-display font-bold">Crafting the Future of Enterprise Solutions.</h3>
                </div>
              </div>
            </div>

            {/* Clean Feature List (2x2 Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#16423C]/5 flex items-center justify-center border border-[#16423C]/10">
                  <Users className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-[#16423C] mb-2">User-Centric</h4>
                  <p className="text-[#53606b] leading-relaxed">We build with people in mind, ensuring intuitive and impactful experiences that drive engagement and value.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#16423C]/5 flex items-center justify-center border border-[#16423C]/10">
                  <Lightbulb className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-[#16423C] mb-2">Purpose-Driven Innovation</h4>
                  <p className="text-[#53606b] leading-relaxed">Innovating with intention and real-world value, we solve complex challenges with smart, adaptive technologies.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#16423C]/5 flex items-center justify-center border border-[#16423C]/10">
                  <TrendingUp className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-[#16423C] mb-2">Growth & Strategy</h4>
                  <p className="text-[#53606b] leading-relaxed">Scalable solutions tailored to grow your business faster and smarter, aligning every digital brick with your vision.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#16423C]/5 flex items-center justify-center border border-[#16423C]/10">
                  <Sparkles className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-[#16423C] mb-2">Digital Clarity</h4>
                  <p className="text-[#53606b] leading-relaxed">Stripping away complexity to deliver clean and efficient solutions that provide ultimate clarity and performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION SECTION */}
      <section className="lg:py-24 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 items-stretch">
            <div className="bg-[#1a1f24] text-white p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] relative overflow-hidden section-animate">
              <div className="absolute top-0 right-0 p-10 opacity-10 text-[#10b981]">
                <TrendingUp className="w-48 h-48 md:w-64 md:h-64" />
              </div>
              <div className="relative z-10">
                <span className="text-[#10b981] font-bold tracking-widest uppercase text-[10px] md:text-xs mb-6 block">Future Outlook</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 md:mb-8 leading-tight">Our Vision</h2>
                <p className="text-lg md:text-xl text-[#FDF8F2]/80 leading-relaxed font-light">
                  To empower global enterprises through transformative technology — driving progress, enriching experiences, and enabling smarter, sustainable growth.
                </p>
              </div>
            </div>

            <div className="bg-[#10b981] text-white p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] relative overflow-hidden section-animate" style={{ animationDelay: '0.2s' }}>
              <div className="absolute top-0 right-0 p-10 opacity-20">
                <Cpu className="w-48 h-48 md:w-64 md:h-64" />
              </div>
              <div className="relative z-10">
                <span className="text-[#1a1f24] font-bold tracking-widest uppercase text-[10px] md:text-xs mb-6 block">Day-to-day Execution</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 md:mb-8 leading-tight">Our Mission</h2>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                  We deliver scalable, innovative tech solutions that help enterprises and startups achieve growth, efficiency, and impact—driven by expertise and a commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IMPACT & CULTURE SECTION */}
      <section className="lg:py-24 py-10 bg-[#FDF8F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 section-animate lg:text-left text-center">
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-[#1a1f24] mb-8 leading-[1.1] ">
                Technology should create opportunity — <span className="italic font-normal text-[#10b981]">not just efficiency.</span>
              </h2>
              <div className="space-y-6 text-[#53606b] text-lg leading-relaxed mb-10">
                <p>
                  As a people-first, innovation-led company, we turn complexity into clarity. Whether it’s building bespoke enterprise platforms, driving cloud adoption, or advancing intelligent automation, every solution is crafted by aligning deep technical expertise with a sharp understanding of strategic business goals.
                </p>
                <p>
                  We’ve built a culture where innovation fuels impact: nurturing talent from underserved regions, enabling meaningful careers, and opening doors for women and young professionals ready to shape the digital future.
                </p>
                <p className="font-bold text-[#1a1f24]">
                  Global in reach. Grounded in values. Driven by purpose.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-start justify-center">
                <Link
                  href="/contact"
                  prefetch={true}
                  className="press-illusion-btn-orange bg-orange-500 text-white w-fit font-bold px-6 py-2 text-base flex items-center space-x-2"
                >
                  <span>Contact Us</span>
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
                  href="/products"
                  prefetch={true}
                  className="press-illusion-btn-orange bg-orange-500 text-white w-fit font-bold px-6 py-2 text-base flex items-center space-x-2"
                >
                  <span>Our Solutions</span>
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
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative section-animate" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full rounded-[4rem] overflow-hidden shadow-2xl ring-1 ring-[#10b981]/10">
                <div className="pb-[100%] lg:pb-[90%]"></div>
                <div className="absolute inset-0">
                  <Image src="/about_globe_v4.png" alt="Digital Impact" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#10b981]/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-6 bg-white p-10 rounded-[3rem] shadow-2xl border border-[#10b981]/5 hidden md:block max-w-[320px]">
                <p className="text-xl font-display font-medium italic text-[#1a1f24] leading-relaxed">"Isarva Infotech is where technology begins to mean something more."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 JOIN OUR TEAM SECTION */}
      <section className="lg:py-24 py-10 bg-[#FDF8F2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border border-[#10b981]/5 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-3/5 text-center lg:text-left">
              <span className="text-[#10b981] font-black tracking-[0.3em] uppercase text-xs mb-4 inline-block">Join our mission</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1a1f24] mb-8 leading-tight">
                Shape the future <br />
                <span className="text-[#10b981]">at Isarva Infotech.</span>
              </h2>
              <p className="text-xl text-[#53606b] mb-10 max-w-2xl font-medium leading-relaxed">
                We’re looking for bold thinkers who believe technology can solve the world's most complex challenges. Explore our open roles and find where you belong.
              </p>
              <Link
                href="/careers"
                prefetch={true}
                className="press-illusion-btn-orange bg-orange-500 text-white w-fit lg:mx-0 mx-auto font-bold px-6 py-2 text-base flex items-center space-x-2"
              >
                <span>View Careers</span>
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
            </div>
            <div className="lg:w-2/5 relative lg:block hidden">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-[3rem] overflow-hidden shadow-2xl ring-4 ring-white/50">
                <Image src="/about_tech_light_v2.png" alt="Our Tech Culture" fill className="object-cover" />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#10b981] lg:flex hidden rounded-2xl  items-center justify-center text-white shadow-2xl transform rotate-12">
                <Briefcase className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-24 relative bg-[#1a1f24] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/agency_design_process_abstract_1773850147849.png" alt="Abstract" fill className="object-cover opacity-[0.08] mix-blend-screen" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 section-animate">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Ready to shape the digital future?
          </h2>
          <p className="text-xl md:text-2xl text-[#FDF8F2]/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            We simplify complexity through innovation—crafting custom platforms, accelerating cloud adoption, and advancing intelligent automation aligned with your strategic goals.
          </p>
          <div className="flex justify-center items-center">
            <Link
              href="/contact"
              prefetch={true}
              className="press-illusion-btn-orange bg-orange-500 text-white w-fit font-bold px-8 py-3 text-lg flex items-center space-x-3"
            >
              <span>Get In Touch</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 9"
                className="h-3 w-5"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
