"use client";

import { motion } from "framer-motion";

export default function ClientsSection({ data }) {
  // Use WordPress data only, no fallback to hardcoded brands
  const techStackImages = data?.images || [];
  const displayBrands = techStackImages.map((image) => ({
    name: image.title || image.alt,
    icon: image.url,
  }));
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-green-100 via-white to-green-100">
      {/* Radiant Glow under the row (Cool Blues/Purples to match professional vibe) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[150px] rounded-full pointer-events-none" />

      <div className="max-w-9xl mx-auto px-6 text-center relative z-10">
        <p className="text-black text-sm font-bold uppercase tracking-[0.2em] mb-16">
          Our Work Revolves Around
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 ">
          {displayBrands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.5 }}
              whileHover={{ y: -5, opacity: 1 }}
              title={brand.name}
              className="w-12 h-12  transition-all duration-300 cursor-pointer flex items-center justify-center drop-shadow-md hover:drop-shadow-xl"
            >
              <img
                src={brand.icon}
                alt={brand.name}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
