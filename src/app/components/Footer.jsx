'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden border-t border-white/5 bg-[#0A0D14] bg-[url('/get-started-bg.webp')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-[#0A0D14]/10 backdrop-blur-sm pointer-events-none" />

      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00ff88]/10 blur-[150px] rounded-full pointer-events-none transform -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top Section: Brand & Description */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 pb-16 border-b border-white/5">
          <div className="max-w-2xl">
            <Link href="/" className="flex items-center">
              <img
                src="/Screenshot_2.png"
                alt="Isarva Logo"
                className="w-[100px] h-auto object-contain drop-shadow-sm"
              />
              <span
                className="font-bold text-[46px] tracking-tight text-white"
                style={{ height: "39px", color: "#21ef60d9", marginLeft: "-32px" }}
              >
                Isarva
              </span>
            </Link>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-medium max-w-xl mt-3">
              We design and deliver precision-engineered technology solutions that enable global enterprises and startups to innovate, scale, and succeed in the digital age.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6 mt-4 lg:mt-0">
            <Link
              href="/contact"
              className="press-illusion-btn bg-green-400 text-black w-fit mx-auto font-bold px-6 py-2 text-base  items-center space-x-2  md:flex"
            >
              <span>Start a Project</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4">
                <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Services */}
          <div>
            <h4 className="text-white font-extrabold mb-8 text-[13px] uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] shadow-[0_0_10px_#00ff88]"></span>
              Services
            </h4>
            <ul className="space-y-4">
              {['Cloud Services', 'Consulting Services', 'Digital Marketing', 'ERP Services', 'GPS Tracking', 'Offshore Development'].map(link => (
                <li key={link}>
                  <Link href="#" className="text-white/40 hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300 text-sm font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-extrabold mb-8 text-[13px] uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#adff2f] shadow-[0_0_10px_#adff2f]"></span>
              Products
            </h4>
            <ul className="space-y-4">
              {['e Commerce', 'Petro Care', 'Retail Billing Software', 'HRMS Software', 'Document Management System'].map(link => (
                <li key={link}>
                  <Link href="#" className="text-white/40 hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300 text-sm font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-extrabold mb-8 text-[13px] uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4c00] shadow-[0_0_10px_#ff4c00]"></span>
              Industries
            </h4>
            <ul className="space-y-4">
              {['Media & Entertainment', 'Insurance', 'Manufacturing', 'Health Care & Life Sciences', 'Education', 'Banking and Financial Services'].map(link => (
                <li key={link}>
                  <Link href="#" className="text-white/40 hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300 text-sm font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
            <h4 className="text-white font-extrabold mb-8 text-[13px] uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] shadow-[0_0_10px_#60a5fa]"></span>
              Useful Links
            </h4>
            <ul className="space-y-4">
              {['ABOUT US', 'TECHNOLOGY STACK', 'SERVICES', 'PRODUCTS', 'CONTACT US'].map(link => (
                <li key={link}>
                  <Link href="#" className="text-white/60 hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300 text-[12px] font-bold tracking-[0.1em]">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Huge Background Text Watermark */}
        <div className="absolute top-10 left-0 right-0 text-center select-none pointer-events-none opacity-[0.02] z-[1]">
          <h2 className="text-[16rem] md:text-[24rem] font-black tracking-tighter text-white uppercase leading-none">
            Isarva
          </h2>
        </div>

        {/* Bottom Bar Glass Container */}
        <div className="relative p-6 sm:p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden z-20 mt-16">
          {/* Subtle interior glow */}
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-white/5 blur-[60px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-wrap items-center justify-center md:justify-start gap-6 text-[13px] font-bold tracking-widest text-white/60 uppercase">
            <Link href="#" className="hover:text-white transition-colors">Careers</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <Link href="#" className="hover:text-white transition-colors">Support</Link>
          </div>

          <p className="relative z-10 text-white/40 text-[13px] font-medium text-center md:text-right">
            Copyright © 2026 ISARVA INFOTECH PRIVATE LIMITED
          </p>
        </div>
      </div>
    </footer>
  );
}
