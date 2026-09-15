"use client";

import Link from "../AppLink";

export default function ProductDetailPremiumNethra() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 px-6 py-24 relative overflow-hidden selection:bg-cyan-500 selection:text-white">
      
      {/* Soft Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-[0.4]" 
          style={{ 
            backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }} 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-b from-cyan-100/60 via-blue-50/40 to-transparent blur-[120px] rounded-full" />
      </div>

      {/* Main Content Container with Optimal Text Width */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 shadow-sm shadow-cyan-100 mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-600"></span>
          </span>
          <span className="text-xs font-bold tracking-wider text-cyan-800 uppercase">
            Coming Soon
          </span>
        </div>

        {/* Product Brand */}
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-slate-500 mb-3">
          Isarva Nethra
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
          Coming Soon
        </h1>

        {/* Balanced Text Width Description */}
        <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-10">
          We are crafting something exceptional for Isarva Nethra. Stay tuned as we prepare to unveil the platform.
        </p>

        {/* Action Button */}
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-600/25 hover:shadow-cyan-600/35 hover:-translate-y-0.5 text-sm font-semibold transition-all duration-300"
          >
            <span>Back to Home</span>
          </Link>
        </div>

      </div>

    </div>
  );
}
