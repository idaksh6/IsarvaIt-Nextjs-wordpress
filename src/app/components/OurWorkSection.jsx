'use client';

import { useRef, memo, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ── Product Data ──────────────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    name: 'HRMS Software',
    category: 'HR & Workforce',
    short: 'Automates HR tasks, boosts productivity, and empowers employees to self-manage their information.',
    gradient: '#667eea',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Petro Care',
    category: 'Industry Specific',
    short: 'Designed for Petrol Bunk Agencies to manage daily sales activities and accounting operations smoothly.',
    gradient: '#f6d365',
    image: 'https://images.unsplash.com/photo-1613521140785-e85e427f8002?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'eCommerce Software',
    category: 'E-Commerce & Retail',
    short: 'Sell online effortlessly — cloud-powered store management, delivery tracking, and a robust admin panel.',
    gradient: '#a18cd1',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    badge: 'High ROI',
  },
  {
    id: 4,
    name: 'Bill Soft — Multi Branch',
    category: 'E-Commerce & Retail',
    short: 'Streamlines billing and inventory for multi-branch, multi-warehouse businesses. Android & iOS app coming soon.',
    gradient: '#43e97b',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Retail Billing Software',
    category: 'E-Commerce & Retail',
    short: 'Convenient and reliable billing for purchase and sales — generates invoices, manages goods billing end-to-end.',
    gradient: '#11998e',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop',
    badge: 'Popular',
  },
  {
    id: 6,
    name: 'Document Management System',
    category: 'Operations',
    short: 'Tailored to your business needs — no expensive setup required. Centralise, organise, and retrieve documents instantly.',
    gradient: '#4facfe',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Time Attendant System',
    category: 'HR & Workforce',
    short: 'Makes easy work of monitoring employee time and attendance — automated, accurate, and effortless.',
    gradient: '#f093fb',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Ticket Management Software',
    category: 'Operations',
    short: 'Support Help Desk powering teams to run projects and support systems with confidence and speed.',
    gradient: '#e0c3fc',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 9,
    name: 'Lodge Booking Software',
    category: 'Hospitality',
    short: 'Cloud-based hotel management with next-gen capabilities — simplifies reservations and improves operating efficiency.',
    gradient: '#fcb69f',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 10,
    name: 'Fleet Management Software',
    category: 'Fleet & Logistics',
    short: 'Web-based platform integrating logistics, maintenance, payroll, and dispatch operations on one unified dashboard.',
    gradient: '#636e72',
    image: 'https://images.unsplash.com/photo-1519003300449-424ad0405076?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 11,
    name: 'Mobile Service Center',
    category: 'Industry Specific',
    short: 'Designed for mobile repair agencies to manage customer job sheets, repairs, and service workflows easily.',
    gradient: '#a1c4fd',
    image: 'https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 12,
    name: '3PL WMS Solution',
    category: 'Fleet & Logistics',
    short: 'Comprehensive warehouse management with complete inventory visibility and control for third-party logistics providers.',
    gradient: '#4286f4',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 13,
    name: 'Marine Service Software',
    category: 'Industry Specific',
    short: 'Manages marine client services, generates 40+ reports, and supports seamless multi-location operations.',
    gradient: '#302b63',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 14,
    name: 'Order Picking Tools',
    category: 'Fleet & Logistics',
    short: 'Streamlines order tracking and packing updates for Shopify stores — built with Laravel, JavaScript, and Tailwind.',
    gradient: '#f7971e',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 15,
    name: 'Dispatcher Panel',
    category: 'Fleet & Logistics',
    short: 'Streamlines manual handling and tracking of florist product orders for fast, efficient delivery management.',
    gradient: '#ee9ca7',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 16,
    name: 'ID CRM',
    category: 'Operations',
    short: 'Manages clients efficiently — boosting profits and revenue through robust architecture and smart business operations.',
    gradient: '#a044ff',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 17,
    name: 'Dealer Management',
    category: 'Operations',
    short: 'Streamlines dealer onboarding, management, and distribution of articles — with secure access and smart communication.',
    gradient: '#0f3460',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 18,
    name: 'Expense Tracker',
    category: 'Operations',
    short: 'Simplifies expense management with Google login, role-based access, dynamic configuration, and detailed reporting.',
    gradient: '#11998e',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
  },
];

const categories = ['All', 'HR & Workforce', 'E-Commerce & Retail', 'Fleet & Logistics', 'Operations', 'Industry Specific', 'Hospitality'];

function OurWorkSection() {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  useGSAP(() => {
    gsap.from('.ow-header > *', {
      scrollTrigger: { trigger: '.ow-header', start: 'top 85%' },
      y: 36, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
    });
  }, { scope: sectionRef });

  // Animate cards whenever filter changes
  const gridRef = useRef(null);
  const animateGrid = () => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.ow-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 20, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.05, ease: 'power3.out', clearProps: 'all' }
    );
  };

  const handleFilter = (cat) => {
    setActiveCategory(cat);
    setTimeout(animateGrid, 10);
  };

  // Initial animation on scroll
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: gridRef.current,
      start: 'top 82%',
      onEnter: animateGrid,
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: '#fcfdfd' }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '52px 52px',
      }} />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{ position: 'absolute', top: '5%', left: '10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,126,234,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '5%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(118,75,162,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="ow-header text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span style={{ display: 'block', height: 1, width: 32, background: 'linear-gradient(90deg, transparent, #6366f1)' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', color: '#3b8d4d', textTransform: 'uppercase' }}>
              Our Products
            </span>
            <span style={{ display: 'block', height: 1, width: 32, background: 'linear-gradient(90deg, #6366f1, transparent)' }} />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0d14] mb-4 tracking-tight">
            Software Built for{' '}
            <span style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Every Industry
            </span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            18 battle-tested products helping businesses across industries run smarter, faster, and leaner.
          </p>
        </div>

        {/* ── Category Filters ── */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className="px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300"
              style={{
                background: activeCategory === cat ? 'linear-gradient(135deg, #4f46e5, #7c3aed)' : '#ffffff',
                border: activeCategory === cat ? '1px solid transparent' : '1px solid #e5e7eb',
                color: activeCategory === cat ? '#fff' : '#6b7280',
                boxShadow: activeCategory === cat ? '0 8px 24px rgba(79,70,229,0.3)' : '0 2px 8px rgba(0,0,0,0.02)',
                transform: activeCategory === cat ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Product Grid ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="text-center mt-14">
          <p className="text-gray-500 text-sm mb-5 font-medium">
            Need a custom solution for your industry?
          </p>
          <Link
            href="/contact"
            className="press-illusion-btn bg-green-400 text-black w-fit mx-auto font-bold px-6 py-2 text-base  items-center space-x-2  md:flex"
          >
            <span>Request a Demo</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4">
              <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Single Product Card ───────────────────────────────────────────────────────
// ── Single Product Card ───────────────────────────────────────────────────────
function ProductCard({ product }) {
  const isHighlighted = !!product.badge;

  return (
    <div
      className="group relative rounded-2xl overflow-hidden flex flex-col bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
    >
      {/* Real Image Header */}
      <div className="relative h-52 overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover opacity-90"
        />

        {/* Subtle gradient overlay to make image blend into white card */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent opacity-100" />

        {/* Category pill on image */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          {isHighlighted && (
            <span
              className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm"
              style={{
                background: 'linear-gradient(135deg, #111, #333)',
                color: 'white',
              }}
            >
              <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" /></svg>
              {product.badge}
            </span>
          )}
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/90 text-gray-800 backdrop-blur-md border border-gray-200/50"
          >
            {product.category}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1 relative z-10 -mt-2">
        <h3 className="text-gray-900 font-bold text-lg mb-2.5 leading-snug">
          {product.name}
        </h3>
        <p className="text-gray-500 text-[13px] leading-relaxed flex-1 font-medium">
          {product.short}
        </p>

        {/* Bottom Action Row (Purchase Focused) */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">


          <Link
            href="/contact"
            className="press-illusion-btn bg-green-400 text-white w-fit  font-bold px-6 py-2 text-sm  items-center space-x-2  md:flex"
          >
            <span>Get Pricing & Demo</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4">
              <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(OurWorkSection);
