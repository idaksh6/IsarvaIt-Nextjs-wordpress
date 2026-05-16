"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHeroSlider() {
  return (
    <div className="relative section-animate" style={{ animationDelay: '0.2s' }}>

      {/* 📱 MOBILE & TABLET HERO SLIDER (Touch Optimized) */}
      <div className="flex lg:hidden overflow-x-auto items-center !pt-0 py-10 scrollbar-hide snap-x snap-mandatory px-[10vw] gap-4">
        {/* Card 1 - Mobile */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 0.4 }}
          className="relative w-[250px] h-[420px] flex-shrink-0 snap-center rounded-[2.5rem] overflow-hidden ring-1 ring-[#10b981]/10 bg-[#1a1f24]"
        >
          <Image src="/premium-sky.png" alt="Connectivity" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 text-left">
            <h4 className="text-white font-bold text-[clamp(1.2rem,5vw,2.5rem)] mb-1 leading-tight">Connectivity</h4>
            <div className="w-10 h-0.5 bg-cyan-400 mb-2" />
            <p className="text-white/70 text-[clamp(0.8rem,3vw,1rem)] leading-tight  font-medium">We build systems that communicate effortlessly through APIs and cloud services.</p>
          </div>
        </motion.div>

        {/* Card 2 - Mobile */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 0.4 }}
          className="relative w-[250px] h-[420px] flex-shrink-0 snap-center rounded-[2.5rem] overflow-hidden ring-1 ring-[#10b981]/10 bg-[#1a1f24]"
        >
          <Image src="/water-v2.png" alt="Seamless Flow" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 text-left">
            <h4 className="text-white font-bold text-[clamp(1.2rem,5vw,2.5rem)] mb-1 leading-tight">Seamless Flow</h4>
            <div className="w-12 h-0.5 bg-blue-500 mb-2" />
            <p className="text-white/70 text-[clamp(0.8rem,3vw,1rem)] leading-tight  font-medium">We design intuitive user experiences that create smooth digital journeys.</p>
          </div>
        </motion.div>

        {/* Card 3 - Mobile (Central) */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 0.4 }}
          className="relative w-[250px] h-[420px] flex-shrink-0 snap-center rounded-[2.5rem] overflow-hidden ring-2 ring-white bg-[#1a1f24]"
        >
          <Image src="/partners/expertise/kailash_final.png" alt="Strong Foundations" fill className="object-cover object-bottom scale-150" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-8 text-left">
            <h3 className="text-white font-bold text-[clamp(1.3rem,5vw,2.5rem)] leading-tight mb-2">Strong Foundations</h3>
            <div className="w-16 h-1 bg-green-500 mb-4" />
            <p className="text-white/80 text-[clamp(0.85rem,3.5vw,1.1rem)] leading-relaxed font-medium">Secure, scalable backend systems and infrastructure ensuring long-term reliability.</p>
          </div>
        </motion.div>

        {/* Card 4 - Mobile */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 0.4 }}
          className="relative w-[250px] h-[420px] flex-shrink-0 snap-center rounded-[2.5rem] overflow-hidden ring-1 ring-[#10b981]/10 bg-[#1a1f24]"
        >
          <Image src="/partners/expertise/galaxy.png" alt="Scalability" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 text-left">
            <h4 className="text-white font-bold text-[clamp(1.2rem,5vw,2.5rem)] mb-1 leading-tight">Scalability</h4>
            <div className="w-12 h-0.5 bg-purple-500 mb-2" />
            <p className="text-white/70 text-[clamp(0.8rem,3vw,1rem)] leading-tight  font-medium">Future-ready solutions that scale with your business and unlock possibilities.</p>
          </div>
        </motion.div>

        {/* Card 5 - Mobile */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 0.4 }}
          className="relative w-[250px] h-[420px] flex-shrink-0 snap-center rounded-[2.5rem] overflow-hidden ring-1 ring-[#10b981]/10 bg-[#1a1f24]"
        >
          <Image src="/vol-final.png" alt="Performance" fill className="object-cover object-[80%_20%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 text-left">
            <h4 className="text-white font-bold text-[clamp(1.2rem,5vw,2.5rem)] mb-1 leading-tight">Performance</h4>
            <div className="w-10 h-0.5 bg-orange-500 mb-2" />
            <p className="text-white/70 text-[clamp(0.8rem,3vw,1rem)] leading-tight  font-medium">High-speed, optimized solutions that drive results and innovation.</p>
          </div>
        </motion.div>
      </div>

      {/* 💻 DESKTOP LAYOUT (Expanded for monitors 1024px+) */}
      <div className="hidden lg:flex justify-center items-center gap-1 xl:space-x-1 overflow-visible py-20">
        {/* Card 1 - Desktop */}
        <div className="relative lg:w-[14vw] lg:h-[20vw] xl:w-[320px] xl:h-[420px] rounded-[2.5rem] overflow-hidden shadow-xl transform hover:-translate-y-4 transition-transform duration-500 ring-1 ring-[#10b981]/5 group">
          <Image src="/premium-sky.png" alt="Connectivity" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 text-left transition-opacity duration-500">
            <h4 className="text-white font-bold text-[clamp(1.2rem,1.5vw,1.8rem)] mb-1 leading-tight">Connectivity</h4>
            <div className="w-8 h-0.5 bg-cyan-400 mb-2" />
            <p className="text-white/70 text-[clamp(0.7rem,1vw,0.85rem)] leading-tight ">We build systems that communicate effortlessly through APIs and cloud services.</p>
          </div>
        </div>

        {/* Card 2 - Desktop */}
        <div className="relative lg:w-[17vw] lg:h-[24vw] xl:w-[380px] xl:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl z-10 transform hover:-translate-y-4 transition-transform duration-500 ring-1 ring-[#10b981]/5 group">
          <Image src="/water-v2.png" alt="Seamless Flow" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 text-left transition-opacity duration-500">
            <h4 className="text-white font-bold text-[clamp(1.5rem,2vw,2.2rem)] mb-1 leading-tight">Seamless Flow</h4>
            <div className="w-10 h-0.5 bg-blue-500 mb-2" />
            <p className="text-white/70 text-[clamp(0.75rem,1.1vw,0.95rem)] leading-tight ">We design intuitive user experiences that create smooth digital <br />journeys.</p>
          </div>
        </div>

        {/* Card 3 - Desktop (Main Center) */}
        <div className="relative lg:w-[20vw] lg:h-[30vw] xl:w-[450px] xl:h-[580px] rounded-[3.5rem] overflow-hidden shadow-2xl z-20 transform hover:-translate-y-2 transition-transform duration-500 ring-4 ring-white group">
          <Image src="/partners/expertise/kailash_final.png" alt="Strong Foundations" fill className="object-cover object-bottom scale-150" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-12 text-left">
            <h3 className="text-white font-bold text-[clamp(1.6rem,2.5vw,2.5rem)] leading-tight mb-2">Strong <br /> Foundations</h3>
            <div className="w-16 h-1 bg-green-500 mb-4" />
            <p className="text-white/80 text-[clamp(0.85rem,1.2vw,1.1rem)] leading-relaxed">Secure, scalable backend systems and infrastructure ensuring long-term reliability.</p>
          </div>
        </div>

        {/* Card 4 - Desktop */}
        <div className="relative lg:w-[17vw] lg:h-[24vw] xl:w-[380px] xl:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl z-10 transform hover:-translate-y-4 transition-transform duration-500 ring-1 ring-[#10b981]/5 group">
          <Image src="/partners/expertise/galaxy.png" alt="Scalability" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 text-left transition-opacity duration-500">
            <h4 className="text-white font-bold text-[clamp(1.5rem,2vw,2.2rem)] mb-1 leading-tight">Scalability</h4>
            <div className="w-10 h-0.5 bg-purple-500 mb-2" />
            <p className="text-white/70 text-[clamp(0.75rem,1.1vw,0.95rem)] leading-tight ">Future-ready solutions that scale with your business and unlock possibilities.</p>
          </div>
        </div>

        {/* Card 5 - Desktop */}
        <div className="relative lg:w-[14vw] lg:h-[20vw] xl:w-[320px] xl:h-[420px] rounded-[2.5rem] overflow-hidden shadow-xl transform hover:-translate-y-4 transition-transform duration-500 ring-1 ring-[#10b981]/5 group">
          <Image src="/vol-final.png" alt="Performance" fill className="object-cover object-[80%_20%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 text-left transition-opacity duration-500">
            <h4 className="text-white font-bold text-[clamp(1.2rem,1.5vw,1.8rem)] mb-1 leading-tight">Performance</h4>
            <div className="w-8 h-0.5 bg-orange-500 mb-2" />
            <p className="text-white/70 text-[clamp(0.7rem,1vw,0.85rem)] leading-tight ">High-speed, optimized solutions that drive results and <br /> innovation.</p>
          </div>
        </div>
      </div>
    </div >
  );
}
