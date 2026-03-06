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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        {/* CTA */}
        <Link
          href="#contact"
          className="press-illusion-btn bg-green-400 text-black w-fit  font-bold px-6 py-2 text-base  items-center space-x-2  md:flex"
        >
          <span>Get In Touch</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4">
            <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
}
