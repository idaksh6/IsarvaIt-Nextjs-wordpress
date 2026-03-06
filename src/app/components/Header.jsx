"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "Pages", href: "#" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-black/60 backdrop-blur-xl py-3 shadow-[0_1px_0_rgba(255,255,255,0.06)]"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white hover:text-white/90 text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button - Hidden on Desktop */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 text-white hover:text-white/80 transition-colors duration-200"
          aria-label="Open mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* CTA - Hidden on Mobile */}
        <Link
          href="#contact"
          className="press-illusion-btn bg-green-400 text-black w-fit font-bold px-6 py-2 text-base items-center space-x-2 hidden md:flex"
        >
          <span>Get In Touch</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4">
            <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd"></path>
          </svg>
        </Link>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu Drawer */}
          <div className="fixed top-0 right-0 z-50 w-80 max-w-[85vw] h-full bg-white shadow-2xl transform transition-transform duration-300 ease-out">
            {/* Menu Header */}
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-6 pb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/Screenshot_2.png"
                    alt="Isarva Logo"
                    className="w-10 h-auto object-contain"
                  />
                  <div>
                    <h3 className="text-black font-bold text-lg">Isarva</h3>
                    <p className="text-black/80 text-sm">Navigation Menu</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-black/80 hover:text-black hover:bg-white/20 rounded-lg transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Menu Items */}
            <div className="p-6 space-y-2">
              {navLinks.map((link) => (
                <MobileNavItem 
                  key={link.label}
                  href={link.href} 
                  label={link.label}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
}

// Mobile Navigation Item Component
const MobileNavItem = ({ href, label, onClick }) => {
  const getIcon = () => {
    switch (label.toLowerCase()) {
      case 'home':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case 'features':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'services':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7l2 7-2 7H5l2-7-2-7h14z" />
          </svg>
        );
      case 'contact':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      case 'pages':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        );
    }
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-4 p-3 rounded-xl text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-all duration-200"
    >
      <div className="p-2 rounded-lg bg-gray-100 text-gray-600">
        {getIcon()}
      </div>
      <span className="font-medium text-base">{label}</span>
      <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
};
