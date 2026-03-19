import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Sparkles, 
  Cpu, 
  RefreshCcw,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "About Us - Isarva | Digital Excellence",
  description: "Precision in Technology. Purpose in Impact. Learn about Isarva Infotech's legacy of innovation and commitment to client success.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FDF8F2] overflow-hidden font-sans text-[#1a1f24]">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 lg:pt-48 pb-10 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#F0F7F4] to-[#FDF8F2]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#10b981] opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-[#84cc16] opacity-[0.05] rounded-full blur-[100px] pointer-events-none"></div>
        <div className="hero-noise-overlay"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex flex-col items-center mb-10 section-animate">
            <span className="text-[#10b981] font-bold tracking-wider uppercase text-sm mb-4">Isarva Infotech</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-[#1a1f24] max-w-5xl tracking-tight leading-[1.1] mb-8">
              Precision in <span className="italic text-[#10b981] font-bold">Technology.</span> <br /> Purpose in <span className="italic text-[#10b981] font-bold">Impact.</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-[#53606b] max-w-3xl mx-auto leading-relaxed">
              At Isarva Infotech, we are more than an IT consulting firm — we are a strategic technology partner and a catalyst for progress in an ever-evolving digital world.
            </p>
          </div>

          <div className="relative section-animate" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-center items-center gap-2 md:gap-5 overflow-hidden py-6 md:py-10">
              <div className="relative w-20 h-32 sm:w-32 sm:h-48 md:w-48 md:h-72 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl transform -translate-y-4 md:-translate-y-8 hover:-translate-y-10 transition-transform duration-500 ring-1 ring-[#10b981]/5">
                <Image src="/agency_office_studio_premium_1773850105446.png" alt="Modern office" fill className="object-cover" />
              </div>
              <div className="relative w-28 h-40 sm:w-40 sm:h-60 md:w-60 md:h-80 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl z-10 transform -translate-y-1 md:-translate-y-2 hover:-translate-y-4 transition-transform duration-500 ring-1 ring-[#10b981]/5">
                <Image src="/team_collab_hero_1773850334652.png" alt="Team" fill className="object-cover" />
              </div>
              <div className="relative w-32 h-48 sm:w-48 sm:h-72 md:w-80 md:h-[30rem] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(16,185,129,0.3)] z-20 transform translate-y-4 md:translate-y-6 hover:translate-y-4 transition-transform duration-500 ring-2 md:ring-4 ring-white">
                <Image src="/dev_coding_hero_1773850315265.png" alt="Coding" fill className="object-cover" />
              </div>
              <div className="relative w-28 h-40 sm:w-40 sm:h-60 md:w-60 md:h-80 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl z-10 transform -translate-y-1 md:-translate-y-2 hover:-translate-y-4 transition-transform duration-500 ring-1 ring-[#10b981]/5">
                <Image src="/ui_design_screen_hero_1773850368381.png" alt="Design" fill className="object-cover" />
              </div>
              <div className="relative w-20 h-32 sm:w-32 sm:h-48 md:w-48 md:h-72 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl transform -translate-y-4 md:-translate-y-8 hover:-translate-y-10 transition-transform duration-500 ring-1 ring-[#10b981]/5 hidden sm:block">
                <Image src="/agency_hero_laptop_1773849789513.png" alt="Laptop" fill className="object-cover" />
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
          <div className="flex-1 bg-[#FDF8F2] p-10 md:p-16 lg:p-20 section-animate" style={{ animationDelay: '0.2s' }}>
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-[#16423C] mb-12 leading-tight max-w-4xl">
               Standing at the forefront of digital transformation.
             </h2>

             {/* Full Width Image Content */}
             <div className="relative w-full h-[300px] md:h-[450px] rounded-[3rem] overflow-hidden mb-16 shadow-2xl ring-4 ring-white/50">
                <Image src="/dev_coding_hero_1773850315265.png" alt="Digital Excellence" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16423C]/60 via-transparent to-transparent flex items-end p-10">
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
      <section className="py-24 bg-white">
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
      <section className="py-24 bg-[#FDF8F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-20 items-center">
             <div className="w-full lg:w-1/2 section-animate">
                <h2 className="text-4xl lg:text-6xl font-display font-bold text-[#1a1f24] mb-8 leading-[1.1]">
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
                <div className="flex flex-wrap gap-4">
                   <Link 
                     href="/contact" 
                     prefetch={true}
                     className="press-illusion-btn bg-green-400 text-white w-fit font-bold px-6 py-2 text-base flex items-center space-x-2"
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
                     className="press-illusion-btn bg-green-400 text-white w-fit font-bold px-6 py-2 text-base flex items-center space-x-2"
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
                <div className="relative rounded-[4rem] overflow-hidden aspect-[4/3] shadow-2xl ring-1 ring-[#10b981]/10 min-h-[400px]">
                   <Image src="/team_collab_hero_1773850334652.png" alt="Impact" fill className="object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-r from-[#10b981]/10 to-transparent"></div>
                </div>
                <div className="absolute -bottom-10 -right-6 bg-white p-10 rounded-[3rem] shadow-2xl border border-[#10b981]/5 hidden md:block max-w-[320px]">
                   <p className="text-xl font-display font-medium italic text-[#1a1f24] leading-relaxed">"Isarva Infotech is where technology begins to mean something more."</p>
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
              className="press-illusion-btn bg-green-400 text-white w-fit font-bold px-8 py-3 text-lg flex items-center space-x-3"
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