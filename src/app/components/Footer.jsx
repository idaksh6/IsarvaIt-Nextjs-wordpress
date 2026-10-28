"use client";

import Image from "next/image";
import Link from "./AppLink";
import { Phone, Mail, Clock, ArrowRight, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F5FBF7] text-[#1F2937] font-sans border-t border-[#E4F2EA]">
      {/* Main 5-Column Navigation Area with ISARVA Brand Identity */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8 items-start">

          {/* Column 1 — About Us */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-[21px] sm:text-[22px] font-display font-bold text-[#0B6B46] mb-5 tracking-tight text-center sm:text-left">
              About Us
            </h3>
            <ul className="space-y-2.5 w-full flex flex-col items-center sm:items-start">
              {[
                { label: "About Us", href: "/about" },
                { label: "Quality Policy", href: "/quality-policy" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Testimonials", href: "/testimonial" },
                { label: "Blog", href: "https://blog.isarvait.com/", isExternal: true },
                { label: "Partners", href: "/partners" },
                { label: "White Label", href: "/white-label-agency-partnerships" },
                { label: "Careers", href: "/careers" },
              ].map((item) => (
                <li key={item.label} className="leading-[30px] text-center sm:text-left">
                  <Link
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="text-[15px] font-sans text-[#1F2937] hover:text-[#22C55E] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Products */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-[21px] sm:text-[22px] font-display font-bold text-[#0B6B46] mb-5 tracking-tight text-center sm:text-left">
              Products
            </h3>
            <ul className="space-y-2.5 w-full flex flex-col items-center sm:items-start">
              {[
                { label: "HRMS Software", href: "/product/hrms-software" },
                { label: "CRM Software", href: "/product/crm-software" },
                { label: "Support Software", href: "/product/support-software" },
                { label: "BillSoft Software", href: "/product/bill-soft" },
                { label: "Marine Service Software", href: "/product/marine-service-software" },
                { label: "Dispatcher Panel", href: "/product/dispatcher-panel" },


                { label: "Retail Billing Software", href: "/product/retail-billing-software" },

                { label: "More Products", href: "/products", isHighlight: true },
              ].map((item) => (
                <li key={item.label} className={`leading-[30px] text-center sm:text-left ${item.isHighlight ? "pt-1" : ""}`}>
                  <Link
                    href={item.href}
                    className={
                      item.isHighlight
                        ? "inline-flex items-center justify-center sm:justify-start gap-1.5 text-[15px] font-semibold text-[#0B6B46] hover:text-[#22C55E] transition-colors duration-200 group"
                        : "text-[15px] font-sans text-[#1F2937] hover:text-[#22C55E] transition-colors duration-200"
                    }
                  >
                    <span>{item.label}</span>
                    {item.isHighlight && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#0B6B46] group-hover:text-[#22C55E] group-hover:translate-x-1 transition-all" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-[21px] sm:text-[22px] font-display font-bold text-[#0B6B46] mb-5 tracking-tight text-center sm:text-left">
              Services
            </h3>
            <ul className="space-y-2.5 w-full flex flex-col items-center sm:items-start">
              {[
                { label: "Website Services", href: "/service/website-services" },
                { label: "WordPress Development", href: "/service/wordpress-development" },
                { label: "Cybersecurity Solutions", href: "/service/cybersecurity-solutions" },
                { label: "AI & ML Consulting", href: "/service/ai-ml-consulting" },
                { label: "Cloud Services", href: "/service/cloud" },
                { label: "ERP Services", href: "/service/erp-services" },
                { label: "Digital Marketing", href: "/service/digital-marketing" },

                { label: "More Services", href: "/services", isHighlight: true },
              ].map((item) => (
                <li key={item.label} className={`leading-[30px] text-center sm:text-left ${item.isHighlight ? "pt-1" : ""}`}>
                  <Link
                    href={item.href}
                    className={
                      item.isHighlight
                        ? "inline-flex items-center justify-center sm:justify-start gap-1.5 text-[15px] font-semibold text-[#0B6B46] hover:text-[#22C55E] transition-colors duration-200 group"
                        : "text-[15px] font-sans text-[#1F2937] hover:text-[#22C55E] transition-colors duration-200"
                    }
                  >
                    <span>{item.label}</span>
                    {item.isHighlight && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#0B6B46] group-hover:text-[#22C55E] group-hover:translate-x-1 transition-all" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Industries */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-[21px] sm:text-[22px] font-display font-bold text-[#0B6B46] mb-5 tracking-tight text-center sm:text-left">
              Industries
            </h3>
            <ul className="space-y-2.5 w-full flex flex-col items-center sm:items-start">
              {[
                { label: "Banking & Financial", href: "/industry/banking-and-financial-services" },
                { label: "Healthcare & Life Sciences", href: "/industry/health-care-life-sciences" },
                { label: "Insurance", href: "/industry/insurance" },
                { label: "Manufacturing", href: "/industry/manufacturing" },
                { label: "Education", href: "/industry/education" },
                { label: "Media & Entertainment", href: "/industry/media-entertainment" },
                { label: "Restaurant", href: "/industry/restaurant" },
                { label: "More Industries", href: "/industries", isHighlight: true },
              ].map((item) => (
                <li key={item.label} className={`leading-[30px] text-center sm:text-left ${item.isHighlight ? "pt-1" : ""}`}>
                  <Link
                    href={item.href}
                    className={
                      item.isHighlight
                        ? "inline-flex items-center justify-center sm:justify-start gap-1.5 text-[15px] font-semibold text-[#0B6B46] hover:text-[#22C55E] transition-colors duration-200 group"
                        : "text-[15px] font-sans text-[#1F2937] hover:text-[#22C55E] transition-colors duration-200"
                    }
                  >
                    <span>{item.label}</span>
                    {item.isHighlight && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#0B6B46] group-hover:text-[#22C55E] group-hover:translate-x-1 transition-all" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 — Contact Us */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-[21px] sm:text-[22px] font-display font-bold text-[#0B6B46] mb-5 tracking-tight text-center sm:text-left">
              Contact Us
            </h3>

            {/* Phone */}
            <div className="mb-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[14px] font-semibold text-[#0B6B46] mb-1">
                <Phone className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>Phone</span>
              </div>
              <a
                href="tel:+919902863697"
                className="block text-[15px] font-medium text-[#1F2937] hover:text-[#22C55E] transition-colors"
              >
                +91 9902863697
              </a>
              <p className="text-[13px] text-[#6B7280] mt-0.5">
                Mon–Fri from 9:30 AM to 6:30 PM
              </p>
            </div>

            {/* Email */}
            <div className="mb-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[14px] font-semibold text-[#0B6B46] mb-1">
                <Mail className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>Email</span>
              </div>
              <a
                href="mailto:marketing@isarvait.com"
                className="block text-[15px] font-medium text-[#1F2937] hover:text-[#22C55E] transition-colors break-all"
              >
                marketing@isarvait.com
              </a>
              <p className="text-[13px] text-[#6B7280] mt-0.5">
                Send us an email anytime!
              </p>
            </div>

            {/* Working Hours */}
            <div className="mb-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[14px] font-semibold text-[#0B6B46] mb-1">
                <Clock className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>Working Hours</span>
              </div>
              <p className="text-[14px] text-[#1F2937] leading-snug">
                Monday–Friday: 9:30 AM–6:30 PM
              </p>

            </div>

            {/* Subtle Brand Divider */}
            <div className="w-full border-t border-dashed border-[#E4F2EA] mb-[10px]" />

            {/* Bottom Support & Talk Links with CTA Orange accent */}
            <div className="space-y-2.5 flex flex-col items-center sm:items-start w-full">
              <div>
                <Link
                  href="https://support.isarva.in/form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center sm:justify-start gap-1 text-[15px] font-medium text-[#1F2937] hover:text-[#22C55E] transition-colors group"
                >
                  <span>Support</span>
                  <ChevronRight className="w-4 h-4 text-[#22C55E] group-hover:translate-x-0.5 transition-transform shrink-0" />
                </Link>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center sm:justify-start gap-1 text-[15px] font-medium text-[#1F2937] hover:text-[#22C55E] transition-colors group"
                >
                  <span>Talk to Our Experts</span>
                  <ChevronRight className="w-4 h-4 text-[#22C55E] group-hover:translate-x-0.5 transition-transform shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Social Media Row: Centered recognizable icons with original brand colors */}
        <div className="mt-14 pt-6 flex items-center justify-center gap-6">
          {/* X (formerly Twitter) - Black */}
          <a
            href="https://x.com/isarva"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter)"
            className="text-black hover:opacity-75 hover:scale-115 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Facebook - Official Blue */}
          <a
            href="https://facebook.com/isarvait"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-[#1877F2] hover:opacity-80 hover:scale-115 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* YouTube - Official Red */}
          <a
            href="https://www.youtube.com/@isarvainfotech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-[#FF0000] hover:opacity-80 hover:scale-115 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

          {/* LinkedIn - Official Blue */}
          <a
            href="https://linkedin.com/company/isarvait"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#0A66C2] hover:opacity-80 hover:scale-115 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Instagram - Official Brand Gradient */}
          <a
            href="https://instagram.com/isarvait"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-80 hover:scale-115 transition-all duration-200 inline-block"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="footer-ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433" />
                  <stop offset="25%" stopColor="#e6683c" />
                  <stop offset="50%" stopColor="#dc2743" />
                  <stop offset="75%" stopColor="#cc2366" />
                  <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
              </defs>
              <path fill="url(#footer-ig-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        {/* 5. Centered Legal Navigation Links with subtle vertical separators */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13px] sm:text-[13.5px] text-[#6B7280] text-center max-w-4xl mx-auto">
          <Link href="/contact" className="hover:text-[#22C55E] transition-colors whitespace-nowrap">
            Contact Us
          </Link>
          <span className="text-[#C4E2D3] select-none">|</span>

          <Link href="/privacy-policy#data-security" className="hover:text-[#22C55E] transition-colors whitespace-nowrap">
            Security
          </Link>
          <span className="text-[#C4E2D3] select-none">|</span>

          <Link href="/quality-policy" className="hover:text-[#22C55E] transition-colors whitespace-nowrap">
            Compliance
          </Link>
          <span className="text-[#C4E2D3] select-none">|</span>

          <Link href="/privacy-policy#ipr-complaints" className="hover:text-[#22C55E] transition-colors whitespace-nowrap">
            IPR Complaints
          </Link>
          <span className="text-[#C4E2D3] select-none">|</span>

          <Link href="/privacy-policy#anti-spam" className="hover:text-[#22C55E] transition-colors whitespace-nowrap">
            Anti-spam Policy
          </Link>
          <span className="text-[#C4E2D3] select-none">|</span>

          <Link href="/privacy-policy#how-we-use" className="hover:text-[#22C55E] transition-colors whitespace-nowrap">
            Terms of Service
          </Link>
          <span className="text-[#C4E2D3] select-none">|</span>

          <Link href="/privacy-policy" className="hover:text-[#22C55E] transition-colors whitespace-nowrap">
            Privacy Policy
          </Link>
          <span className="text-[#C4E2D3] select-none">|</span>

          <Link href="/privacy-policy#refund-policy" className="hover:text-[#22C55E] transition-colors whitespace-nowrap">
            Refund Policy
          </Link>
          <span className="text-[#C4E2D3] select-none">|</span>

          <Link href="/privacy-policy#trademark" className="hover:text-[#22C55E] transition-colors whitespace-nowrap">
            Trademark Policy
          </Link>
          <span className="text-[#C4E2D3] select-none">|</span>

          <Link href="/privacy-policy#cookies" className="hover:text-[#22C55E] transition-colors whitespace-nowrap">
            Cookie Policy
          </Link>
          <span className="text-[#C4E2D3] select-none">|</span>

          <Link href="/privacy-policy#your-rights" className="hover:text-[#22C55E] transition-colors whitespace-nowrap">
            GDPR Compliance
          </Link>
          <span className="text-[#C4E2D3] select-none">|</span>

          <Link href="/privacy-policy#abuse-policy" className="hover:text-[#22C55E] transition-colors whitespace-nowrap">
            Abuse Policy
          </Link>
        </div>
      </div>

      {/* 6. Copyright Bar: Separate full-width deep forest green bar (#064E3B) with Centered Logo */}
      <div className="w-full bg-[#064E3B] py-5 sm:py-6 px-4 text-center flex flex-col items-center justify-center">
        <Link href="/" prefetch={false} className="inline-flex items-center justify-center mb-3 group">
          <div className="relative h-[44px] w-[150px] sm:h-[48px] sm:w-[165px]">
            <Image
              src="/isarva New Logo.png"
              alt="ISARVA Infotech"
              fill
              sizes="165px"
              className="object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </Link>
        <p className="text-white/85 text-[13px] sm:text-[14px] font-normal tracking-wide">
          © 2026 ISARVA Infotech Private Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
