"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Header Button Component with fancy style
function HeaderButton({ children, href, color = 'default' }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setMousePosition({ x: x * 0.5, y: y * 0.5 });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Color schemes for different button colors
  const colorSchemes = {
    default: {
      bg: '#d1d1d1',
      border: 'border-white/60',
      textColor: 'text-[#000000]',
      gradient1: 'bg-[radial-gradient(50%_50%_at_50%_50%,#FFFFF5_3.5%,_#FFAA81_26.5%,#FFDA9F_37.5%,rgba(255,170,129,0.50)_49%,rgba(210,106,58,0.00)_92.5%)]',
      gradient2: 'bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#FFFFF7_29%,_#FFFACD_48.5%,_#F4D2BF_60.71%,rgba(214,211,210,0.00)_100%)]'
    },
    blue: {
      bg: '#bfdbfe',
      border: 'border-blue-300/60',
      textColor: 'text-[#1e3a8a]',
      gradient1: 'bg-[radial-gradient(50%_50%_at_50%_50%,#dbeafe_3.5%,_#93c5fd_26.5%,#bfdbfe_37.5%,rgba(147,197,253,0.50)_49%,rgba(59,130,246,0.00)_92.5%)]',
      gradient2: 'bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#dbeafe_29%,_#bfdbfe_48.5%,_#93c5fd_60.71%,rgba(59,130,246,0.00)_100%)]'
    },
    green: {
      bg: '#bbf7d0',
      border: 'border-green-300/60',
      textColor: 'text-[#14532d]',
      gradient1: 'bg-[radial-gradient(50%_50%_at_50%_50%,#dcfce7_3.5%,_#86efac_26.5%,#bbf7d0_37.5%,rgba(134,239,172,0.50)_49%,rgba(34,197,94,0.00)_92.5%)]',
      gradient2: 'bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#dcfce7_29%,_#bbf7d0_48.5%,_#86efac_60.71%,rgba(34,197,94,0.00)_100%)]'
    }
  };

  const currentScheme = colorSchemes[color] || colorSchemes.default;

  return (
    <a 
      href={href} 
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`hidden md:relative md:inline-flex items-center justify-center font-bold uppercase -tracking-[0.015em] rounded-full ${currentScheme.border} text-black space-x-1 overflow-hidden transition-all duration-200 z-10 h-10 px-14 text-[12px] sm:pl-[50px] sm:pr-[45px]`}
      style={{ backgroundColor: currentScheme.bg }}
    >
      <div className="absolute left-1/2 top-1/2 h-[calc(100%+9px)] w-[calc(100%+9px)] -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform" style={{opacity: 1}}>
        <div className="relative h-full w-full rounded-full border border-white/20 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm"></div>
      </div>
      <div className="absolute left-1/2 top-1/2 h-[calc(100%+9px)] w-[calc(100%+9px)] -translate-x-1/2 -translate-y-1/2 scale-x-[-1] transform rounded-full will-change-transform" style={{opacity: 0}}>
        <div className="relative h-full w-full rounded-full border border-white/20 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm"></div>
      </div>
      <div 
        className="absolute -z-10 flex w-[204px] items-center justify-center transition-transform duration-300 ease-out" 
        style={{transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px) translateZ(0px)`}}
      >
        <div className={`absolute top-1/2 h-[121px] w-[121px] -translate-y-1/2 ${currentScheme.gradient1}`}></div>
        <div className={`absolute top-1/2 h-[103px] w-[204px] -translate-y-1/2 ${currentScheme.gradient2} blur-[5px]`}></div>
      </div>
      <span className={`${currentScheme.textColor} relative z-10`}>{children}</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className={`h-[9px] w-[17px] ${currentScheme.textColor} relative z-10`}>
        <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd"></path>
      </svg>
    </a>
  );
}

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
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
        <HeaderButton href="#contact">
          Get In Touch
        </HeaderButton>
      </div>
    </header>
  );
}
