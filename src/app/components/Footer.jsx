"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-12 pb-12 lg:pt-24 overflow-hidden border-t  text-center lg:text-left border-white/5 bg-[#0A0D14] bg-[url('/get-started-bg.webp')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-[#0A0D14]/10 backdrop-blur-sm pointer-events-none" />

      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00ff88]/10 blur-[150px] rounded-full pointer-events-none transform -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Section: Brand & Description */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-start items-center gap-6 lg:gap-12 mb-10 pb-10 lg:mb-12 lg:pb-12 border-b border-white/5">
          <div className="lg:max-w-2xl max-w-full">
            <Link href="/" prefetch={true} className="flex items-center">
              <Image src="/isarva New Logo.png" width={200} height={78} className="w-auto lg:mx-0 mx-auto h-[78px] object-contain drop-shadow-sm" alt="Isarva Logo" loading="lazy" />
            </Link>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-medium max-w-xl mt-3">
              We design and deliver precision-engineered technology solutions
              that enable global enterprises and startups to innovate, scale,
              and succeed in the digital age.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6 mt-4 lg:mt-0 lg:ml-0 lg:mr-0 ml-auto mr-auto">
            <Link
              href="/contact"
              className="press-illusion-btn-orange bg-orange-600 text-white w-fit mx-auto font-bold px-6 py-2 text-base  items-center space-x-2  inline-flex"
            >
              <span>Start a Project</span>
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

            <div className="flex items-center gap-4 mt-6 lg:ml-auto mx-auto lg:mx-0 w-fit lg:justify-end justify-center">
              <Link target="_blank" href="https://facebook.com/isarvait" className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 shadow-xl hover:shadow-[#1877F2]/40 group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" />
              </Link>
              <Link target="_blank" href="https://instagram.com/isarvait" className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#E4405F] hover:border-[#E4405F] transition-all duration-300 shadow-xl hover:shadow-[#E4405F]/40 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2c2.717 0 3.056.01 4.122.058 1.066.048 1.79.219 2.43.469.66.255 1.22.597 1.777 1.154.557.557.899 1.117 1.154 1.777.25.64.421 1.364.469 2.43.049 1.066.058 1.405.058 4.122s-.01 3.056-.058 4.122c-.048 1.066-.219 1.79-.469 2.43a4.996 4.996 0 01-1.154 1.777 4.996 4.996 0 01-1.777 1.154c-.64.25-1.364.421-2.43.469-1.066.049-1.405.058-4.122.058s-3.056-.01-4.122-.058c-1.066-.048-1.79-.219-2.43-.469a4.996 4.996 0 01-1.777-1.154 4.996 4.996 0 01-1.154-1.777c-.25-.64-.421-1.364-.469-2.43C2.01 15.056 2 14.717 2 12s.01-3.056.058-4.122c.048-1.066.219-1.79.469-2.43.255-.66.597-1.22 1.154-1.777.557-.557 1.117-.899 1.777-1.154.64-.25 1.364-.421 2.43-.469C8.944 2.01 9.283 2 12 2zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm6.537.828a1.2 1.2 0 10-2.4 0 1.2 1.2 0 002.4 0zM12 8.667a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666z"/>
                </svg>
              </Link>
              <Link target="_blank" href="https://linkedin.com/company/isarvait" className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 shadow-xl hover:shadow-[#0A66C2]/40 group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" />
              </Link>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-20">
          {/* Services */}
          <div>
            <h4 className="text-white font-extrabold mb-8 text-[15px] uppercase tracking-[0.2em] flex items-center gap-3 lg:justify-start justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] shadow-[0_0_10px_#00ff88]"></span>
              Services
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Cloud Services", href: "/service/cloud" },
                { label: "Consulting Services", href: "/service/consulting-services" },
                { label: "Digital Marketing", href: "/service/digital-marketing" },
                { label: "ERP Services", href: "/service/erp-services" },
                { label: "GPS Tracking", href: "/service/gps-tracking" },
                { label: "Offshore Development", href: "/service/offshore-development" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-extrabold mb-8 text-[15px] uppercase tracking-[0.2em] flex items-center gap-3 lg:justify-start justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#adff2f] shadow-[0_0_10px_#adff2f]"></span>
              Products
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Support Application", href: "/product/support-application" },
                { label: "e Commerce", href: "/product/woocommerce-development" },
                { label: "Petro Care", href: "/product/petro-care" },
                { label: "HRMS Software", href: "/product/hrms-software" },
                { label: "Document Management System", href: "/product/document-management-system" },
                { label: "CRM Software", href: "/product/crm-software" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-extrabold mb-8 text-[15px] uppercase tracking-[0.2em] flex items-center gap-3 lg:justify-start justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4c00] shadow-[0_0_10px_#ff4c00]"></span>
              Industries
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Banking", href: "/industry/banking-and-financial-services" },
                { label: "Education", href: "/industry/education" },
                { label: "Healthcare", href: "/industry/health-care-life-sciences" },
                { label: "Manufacturing", href: "/industry/manufacturing" },
                { label: "Insurance", href: "/industry/insurance" },
                { label: "Media & Entertainment", href: "/industry/media-entertainment" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-extrabold mb-8 text-[15px] uppercase tracking-[0.2em] flex items-center gap-3 lg:justify-start justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] shadow-[0_0_10px_#60a5fa]"></span>
              Useful Links
            </h4>
            <ul className="space-y-4">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Products", href: "/products" },
                { label: "Industries", href: "/industries" },
                { label: "Contact Us", href: "/contact" },
                { label: "Partnership", href: "/partners" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Huge Background Text Watermark */}
        <div className="absolute top-10 left-0 right-0 text-center select-none pointer-events-none opacity-[0.02] z-[1]">
          <h2 className="lg:text-[24rem] text-[10rem] text-white leading-none text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
            Isarva
          </h2>
        </div>

        {/* Bottom Bar Glass Container */}
        <div className="relative p-6 sm:p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden z-20 mt-8 lg:mt-16">
          {/* Subtle interior glow */}
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-white/5 blur-[60px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-wrap items-center justify-center md:justify-start gap-6 text-[13px] font-bold tracking-widest text-white/90 uppercase">
            <Link href="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <Link target="_blank" href="https://support.isarva.in/form" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>

          <p className="relative z-10 text-white/70 text-[13px] font-medium text-center md:text-right">
            Copyright © 2026 ISARVA INFOTECH PRIVATE LIMITED
          </p>
        </div>
      </div>
    </footer>
  );
}
