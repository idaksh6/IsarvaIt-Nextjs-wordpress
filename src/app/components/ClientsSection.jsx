'use client';

import { motion } from 'framer-motion';

const brands = [
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
  { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular/DD0031' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: '.NET', icon: 'https://cdn.simpleicons.org/dotnet/512BD4' },
  { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
  { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4' },
  { name: 'WordPress', icon: 'https://cdn.simpleicons.org/wordpress/21759B' },
  { name: 'Statamic', icon: 'https://cdn.simpleicons.org/statamic/FF269E' },
  { name: 'Forge', icon: 'https://cdn.simpleicons.org/laravel/1DB954' },
  { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'SiteGround', icon: 'https://cdn.simpleicons.org/sitecore/EA3D2F' },
  { name: 'cPanel', icon: 'https://cdn.simpleicons.org/cpanel/FF6C2C' },
];

export default function ClientsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Radiant Glow under the row (Cool Blues/Purples to match professional vibe) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[150px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-9xl mx-auto px-6 text-center relative z-10">
        <p className="text-white text-sm font-bold uppercase tracking-[0.2em] mb-16">
          Our Work Revolves Around
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {brands.map((brand, i) => (
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
              <img src={brand.icon} alt={brand.name} className="w-full h-full object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
