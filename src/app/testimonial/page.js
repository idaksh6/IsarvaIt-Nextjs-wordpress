"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "../components/ContactSection";
import { Star, Quote, PlayCircle, CheckCircle2, Award, Zap, X, Briefcase } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jagdish Bhat",
    role: "CEO",
    company: "FTR",
    image: "/Testimonials/ftr.jpg",
    text: "Working with Isarva Infotech has been an outstanding experience from start to finish. The team showed exceptional professionalism, great attention to detail, and a deep understanding of our requirements. They delivered a clean, intuitive design that not only met but exceeded our expectations. Throughout the project, communication was clear, timely, and proactive, which made the entire collaboration smooth and efficient. We truly appreciate their dedication and responsiveness, and we are very satisfied with the final outcome.",
    highlight: "Exceptional professionalism and deep understanding.",
    rating: 5,
    tag: "Enterprise"
  },
  {
    id: 2,
    name: "Gunashree",
    role: "CEO",
    company: "Iris",
    image: "/Testimonials/iris.png",
    youtubeId: "HBQ3JHfqUhI",
    text: "Isarva Infotech transformed our digital approach. Their innovative solutions and dedicated support helped us scale faster than we ever imagined.",
    highlight: "Helped us scale faster than imagined.",
    rating: 5,
    tag: "Scale-up"
  },
  {
    id: 3,
    name: "David Richards",
    role: "Director",
    company: "Glue Creative Solutions, UK",
    image: "/Testimonials/david.jpg",
    text: "We have been working with Isarva for well over a decade and consider them a valued and trusted partner. Having the Team in place to facilitate not only our own but also our client's online presence gives great comfort and security. We are sure in the knowledge of the work being carried out to a high standard. The Team are always on hand to help and often go above and beyond expectation to deliver.",
    highlight: "A valued and trusted partner for over a decade.",
    rating: 5,
    tag: "Global Partner"
  },
  {
    id: 4,
    name: "Mohithpal Kunder",
    role: "Global Head Bus. Dev",
    company: "Atlaspoint Tech Pvt Ltd",
    image: "/Testimonials/image6.jpg",
    text: "The team at ISarva Infotech did a fantastic job bringing our website vision to life. They combined creativity with functionality, delivering a website that’s both visually appealing and user-friendly. Their process was efficient, communication was clear, and the end result exceeded our expectations.",
    highlight: "Combined creativity with functionality perfectly.",
    rating: 5,
    tag: "Development"
  },
  {
    id: 5,
    name: "Jitin",
    role: "Owner",
    company: "Highlands Estates",
    image: "/Testimonials/image5.jpg",
    text: "The experience has been exceptional from start to finish. The website is not only visually appealing but also user-friendly and fast, which has significantly enhanced our digital presence and received wonderful feedback from our guests. A special mention to Mr. Deep Kiran for his guidance and commitment.",
    highlight: "Significantly enhanced our digital presence.",
    rating: 5,
    tag: "Hospitality"
  },
  {
    id: 6,
    name: "Chandrabhushan Pandey",
    role: "Director",
    company: "Tentoro Technologies",
    image: "/Testimonials/tentoro-1.jpg",
    text: "The team quickly understood our requirements and delivered a professional, visually impressive presentation. Their responsiveness and attention to detail made the entire process smooth. Highly recommended for branding support.",
    highlight: "Visually impressive presentation and smooth process.",
    rating: 5,
    tag: "Branding"
  },
  {
    id: 7,
    name: "George Thomas",
    role: "Owner",
    company: "Beth Lifestyle Private Limited",
    image: "/Testimonials/image8-1.jpg",
    text: "They understood the premium, innovation-driven identity of Beth Living and translated it into a sleek, high-performing website. The layout is clean and modern, reflecting the modular nature of our products perfectly.",
    highlight: "Translated premium identity into a sleek website.",
    rating: 5,
    tag: "Premium Brand"
  },
  {
    id: 8,
    name: "Dev Prakash",
    role: "Owner",
    company: "Meraki Beach Resort",
    image: "/Testimonials/Prakash.jpg",
    text: "The team took the time to truly understand our vision and brand. The design is modern, clean, responsive, and easy to navigate — exactly what we needed to attract and engage guests. We've seen an increase in direct bookings.",
    highlight: "Increase in direct bookings thanks to the new design.",
    rating: 5,
    tag: "Resort & Travel"
  },
  {
    id: 9,
    name: "Charulata",
    role: "Owner",
    company: "Charus Cuisines",
    image: "/Testimonials/image7.jpg",
    text: "Isarva Infotech captures the essence of Charu’s Cuisine: warmth and trust. They created a clean, inviting website that beautifully showcases our offerings. We’ve seen a real improvement in how people discover our brand.",
    highlight: "Real improvement in brand discovery.",
    rating: 5,
    tag: "F&B"
  }
];

export default function TestimonialPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="min-h-screen bg-[#FDF8F2]  text-[#1a1f24] pt-24">

      {/* ── 1. HERO SECTION ── */}
      <section className="relative py-12 lg:py-38 overflow-hidden ">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#10b981] opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-[#84cc16] opacity-[0.05] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-[#10b981]/10 mb-8"
          >
            <Award className="w-4 h-4 text-[#10b981]" />
            <span className="text-[#10b981] font-bold tracking-wider uppercase text-xs">A Decade of Excellence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(2.25rem,5vw,3.75rem)] font-display font-bold text-[#1a1f24] max-w-5xl mx-auto tracking-tight leading-[1] mb-8"
          >
            Real Stories, <br />
            <span className="italic text-[#10b981] font-bold">Proven Results.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-[#53606b] max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Join 500+ global enterprises and startups that trust Isarva Infotech to architect their digital future.
          </motion.p>

          {/* Stat counters */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-[#10b981]/10"
          >
            {[
              { label: "Client Satisfaction", value: "98%" },
              { label: "Repeat Business", value: "85%" },
              { label: "Global Presence", value: "6+ Countries" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-[#1a1f24]">{stat.value}</div>
                <div className="text-sm text-[#53606b] font-medium uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. FEATURED VIDEO TESTIMONIALS (Restored Correctly) ── */}
      <section className="lg:py-24 py-10 bg-white border-y border-[#10b981]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center lg:mb-20 mb-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block text-[#10b981] font-black tracking-[0.3em] uppercase text-xs mb-4"
            >
              Visual Proof
            </motion.span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#1a1f24] mb-6">Success Stories on Camera</h2>
            <div className="w-24 h-1.5 bg-[#10b981] mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left: Content Block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:flex-1 flex flex-col justify-center"
            >
              <div className="bg-[#FDF8F2] border border-[#10b981]/10 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)] flex flex-col group relative overflow-hidden h-fit">
                <div className="absolute top-0 left-0 w-48 h-48 bg-[#10b981]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex lg:mx-0 mx-auto items-center gap-2 w-fit  mb-6 bg-white px-4 py-1.5 rounded-full border border-emerald-100 shadow-sm">
                    <Zap className="w-3.5 h-3.5 text-[#10b981]" />
                    <span className="text-emerald-700 font-bold text-[9px] uppercase tracking-widest">Global Impact</span>
                  </div>

                  <h4 className="text-3xl md:text-4xl lg:text-left text-center font-display font-bold text-[#1a1f24] mb-10 leading-tight">
                    Digital Future, <br />
                    <span className="text-[#10b981]">Architected.</span>
                  </h4>

                  <div className="space-y-10 mb-10">
                    <div className="flex gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-[#10b981] flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/10 transform rotate-3 group-hover:rotate-6 transition-transform">
                        <Zap className="w-6 h-6 text-white fill-white" />
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-[#1a1f24] mb-1 font-display">Fast-Lane Scaling</h5>
                        <p className="text-[#53606b] text-sm leading-relaxed font-medium">Equipping you with technology that eliminates bottlenecks and accelerates global market entry.</p>
                      </div>
                    </div>

                    <div className="flex gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-[#10b981] flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/10 transform -rotate-3 group-hover:-rotate-6 transition-transform">
                        <CheckCircle2 className="w-6 h-6 text-white stroke-[3px]" />
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-[#1a1f24] mb-1 font-display">Immutable Trust</h5>
                        <p className="text-[#53606b] text-sm leading-relaxed font-medium">Architecture built on transparency, security, and consistent delivery across the development lifecycle.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  rel="noopener noreferrer"
                  className="press-illusion-btn-orange bg-orange-500 text-white w-fit lg:mx-0 mx-auto font-bold px-6 py-2 text-base items-center space-x-2 flex"
                >
                  <span>Begin Transformation</span>
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
            </motion.div>

            {/* Right: Direct Video Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:flex-[1.2]"
            >
              <div className="relative w-full h-[400px] bg-[#1a1f24] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-4 border-white">
                <iframe
                  src={`https://www.youtube.com/embed/${testimonials[1].youtubeId}?rel=0&modestbranding=1&showinfo=0`}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Customer testimonial video from ${testimonials[1].name}`}
                ></iframe>
              </div>

              {/* Optional: Simple client info below direct video */}
              <div className="mt-8 flex items-center gap-4 px-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#10b981] shadow-lg relative">
                  <Image src={testimonials[1].image} fill alt={testimonials[1].name} className="object-contain" loading="lazy" />
                </div>
                <div>
                  <h3 className="text-[#1a1f24] text-xl font-display font-bold leading-tight">{testimonials[1].name}</h3>
                  <p className="text-[#10b981] font-black tracking-widest text-[10px] uppercase">CEO @ {testimonials[1].company}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ── 3. TESTIMONIAL SHOWCASE ── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Mobile Slider (visible only on mobile) */}
          <div className="md:hidden relative px-4">
            {/* Previous Button - Left Side Centered */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#10b981] text-white flex items-center justify-center shadow-lg hover:bg-[#0d9668] transition-all active:scale-95"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button - Right Side Centered */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#10b981] text-white flex items-center justify-center shadow-lg hover:bg-[#0d9668] transition-all active:scale-95"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div
              className=""
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-[#FDF8F2] pt-20 pb-12 px-8 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col border border-emerald-500/5 mx-4"
                >
                  {/* Client Photo */}
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-[8px] border-white shadow-2xl overflow-hidden bg-white z-20">
                    {testimonials[currentSlide].image ? (
                      <Image src={testimonials[currentSlide].image} alt={testimonials[currentSlide].name} fill className={currentSlide === 1 ? "object-contain" : "object-cover"} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-bold text-3xl text-[#10b981] bg-[#10b981]/5">
                        {testimonials[currentSlide].name[0]}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-center mb-8">
                    <h5 className="font-display font-bold text-2xl text-[#1a1f24] mb-1">{testimonials[currentSlide].name}</h5>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#10b981] mb-4">
                      {testimonials[currentSlide].role} @ {testimonials[currentSlide].company}
                    </p>

                    <div className="flex gap-1.5 px-4 py-2 bg-white rounded-full border border-black/5 shadow-sm">
                      {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-[#10b981] fill-[#10b981]" />
                      ))}
                    </div>
                  </div>

                  <div className="relative mb-8 text-center">
                    <Quote className="absolute -top-6 -left-4 w-12 h-12 text-[#10b981]/10 transform -rotate-12" />
                    <p className="text-[#1a1f24] text-xl font-display font-bold leading-tight mb-4 relative z-10 italic">
                      "{testimonials[currentSlide].highlight}"
                    </p>
                  </div>

                  <p className="text-[#53606b] text-center leading-relaxed mb-10 font-medium">
                    {testimonials[currentSlide].text}
                  </p>

                  <div className="text-center">
                    <span className="inline-block text-[10px] font-black tracking-[0.2em] uppercase text-[#10b981] bg-[#10b981]/10 px-5 py-2 rounded-full border border-[#10b981]/20">
                      {testimonials[currentSlide].tag}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Indicators - Bottom Center */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${idx === currentSlide
                    ? 'w-8 bg-[#10b981]'
                    : 'w-2 bg-gray-300'
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid (visible on tablet and above) */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-10">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-[#FDF8F2] pt-20 pb-12 px-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full group border border-emerald-500/5 hover:-translate-y-2"
              >
                {/* 1. Client Photo Centered and Overlapping */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-[8px] border-white shadow-2xl overflow-hidden bg-white z-20 group-hover:scale-105 transition-transform duration-500">
                  {t.image ? (
                    <Image src={t.image} alt={t.name} fill className={idx === 1 ? "object-contain" : "object-cover"} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-bold text-3xl text-[#10b981] bg-[#10b981]/5">{t.name[0]}</div>
                  )}
                </div>

                {/* 2. Rating & Tag Header */}
                <div className="flex flex-col items-center mb-8">
                  <h5 className="font-display font-bold text-2xl text-[#1a1f24] mb-1">{t.name}</h5>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#10b981] mb-4">{t.role} @ {t.company}</p>

                  <div className="flex gap-1.5 px-4 py-2 bg-white rounded-full border border-black/5 shadow-sm">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#10b981] fill-[#10b981]" />
                    ))}
                  </div>
                </div>

                <div className="relative mb-8 text-center">
                  <Quote className="absolute -top-6 -left-4 w-12 h-12 text-[#10b981]/10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                  <p className="text-[#1a1f24] text-xl font-display font-bold leading-tight mb-4 relative z-10 italic">
                    "{t.highlight}"
                  </p>
                </div>

                <p className="text-[#53606b] text-center leading-relaxed mb-10 flex-grow font-medium">
                  {t.text}
                </p>

                <div className="text-center">
                  <span className="inline-block text-[10px] font-black tracking-[0.2em] uppercase text-[#10b981] bg-[#10b981]/10 px-5 py-2 rounded-full border border-[#10b981]/20">
                    {t.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

