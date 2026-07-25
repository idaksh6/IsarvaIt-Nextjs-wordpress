"use client";

import Image from "next/image";
import Link from "./AppLink";

export default function Footer() {
  return (
    <footer className="relative pt-12 pb-8 lg:pt-20 lg:pb-12 overflow-hidden text-center lg:text-left text-black bg-[linear-gradient(160deg,#f9fbfa_0%,#f4f9f6_45%,#f2f8f5_100%)] border-t border-emerald-100/80">
      {/* Soft green-gray overlays — 30% lighter */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_#e8f5ef_0%,_transparent_55%)]" />
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,_#e2f0ea_0%,_transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-gray-100 to-emerald-300" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Section: Brand & Description */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-start items-center gap-8 lg:gap-12 mb-10 pb-10 lg:mb-12 lg:pb-12 border-b-0 lg:border-b border-gray-300/70">
          <div className="lg:max-w-2xl max-w-full">
            <Link href="/" prefetch={false} className="flex items-center lg:mx-0 mx-auto lg:justify-start justify-center">
              <div className="relative h-[78px] w-[200px]">
                <Image
                  src="/isarva New Logo.png"
                  alt="Isarva Logo"
                  fill
                  sizes="200px"
                  className="object-contain drop-shadow-sm"
                  loading="lazy"
                />
              </div>
            </Link>
            <p className="text-black/80 text-base md:text-lg leading-relaxed font-medium max-w-xl mt-4">
              We design and deliver precision-engineered technology solutions
              that enable global enterprises and startups to innovate, scale,
              and succeed in the digital age.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-6 mt-2 lg:mt-0 w-full lg:w-auto">
            <Link
              href="/contact"
              className="press-illusion-btn-orange  text-white w-fit mx-auto lg:mx-0 font-bold px-7 py-3 text-base items-center space-x-2 inline-flex"
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

            <div className="flex items-center gap-2.5 lg:ml-auto mx-auto lg:mx-0 w-fit justify-center">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://facebook.com/isarvait"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/isarvait"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-sm bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/company/isarvait"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-10 lg:mb-16">
          {/* Services */}
          <div>
            <h4 className="text-black font-extrabold mb-6 text-[13px] capitalize tracking-[0.2em] flex items-center gap-3 lg:justify-start justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Services
            </h4>
            <ul className="space-y-3">
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
                    className="text-black/75 hover:text-black lg:hover:translate-x-1.5 inline-block transition-all duration-300 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-black font-extrabold mb-6 text-[13px] capitalize tracking-[0.2em] flex items-center gap-3 lg:justify-start justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-600"></span>
              Products
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Support Software", href: "/product/support-software" },
                { label: "e Commerce", href: "/product/woocommerce-development" },
                { label: "Petro Care", href: "/product/petro-care" },
                { label: "HRMS Software", href: "/product/hrms-software" },
                { label: "BillSoft Software", href: "/product/bill-soft" },
                { label: "CRM Software", href: "/product/crm-software" },
                { label: "WhatsApp CRM Software", href: "/product/whatsapp-crm-software" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-black/75 hover:text-black lg:hover:translate-x-1.5 inline-block transition-all duration-300 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-black font-extrabold mb-6 text-[13px] capitalize tracking-[0.2em] flex items-center gap-3 lg:justify-start justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              Industries
            </h4>
            <ul className="space-y-3">
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
                    className="text-black/75 hover:text-black lg:hover:translate-x-1.5 inline-block transition-all duration-300 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-black font-extrabold mb-6 text-[13px] capitalize tracking-[0.2em] flex items-center gap-3 lg:justify-start justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
              Useful Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Products", href: "/products" },
                { label: "Industries", href: "/industries" },
                { label: "White Label Partner", href: "/white-label-agency-partnerships" },
                { label: "Partnership", href: "/partners" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-black/75 hover:text-black lg:hover:translate-x-1.5 inline-block transition-all duration-300 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative p-5 sm:p-6 lg:p-7 rounded-2xl lg:rounded-[1.75rem] border border-emerald-900/40 bg-emerald-800 shadow-md flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 overflow-hidden z-20">
          <div className="relative z-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 text-[12px] sm:text-[13px] font-bold tracking-widest text-white capitalize">
            <Link href="/careers" className="hover:text-emerald-100 transition-colors">
              Careers
            </Link>
            <span className="w-1 h-1 rounded-full bg-white/60"></span>
            <Link href="/services" className="hover:text-emerald-100 transition-colors">
              Services
            </Link>
            <span className="w-1 h-1 rounded-full bg-white/60"></span>
            <Link target="_blank" href="https://support.isarva.in/form" className="hover:text-emerald-100 transition-colors">
              Support
            </Link>
          </div>

          <p className="relative z-10 text-white text-[11px] sm:text-[13px] font-semibold text-center lg:text-right leading-relaxed drop-shadow-sm">
            Copyright © 2026 ISARVA INFOTECH PRIVATE LIMITED
          </p>
        </div>
      </div>
    </footer>
  );
}
