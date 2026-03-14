"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function BlogHero() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("s") || "");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery) {
      params.set("s", searchQuery);
    } else {
      params.delete("s");
    }
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <section className="bg-white pt-32 pb-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-7xl md:text-9xl font-black text-gray-900 mb-6 tracking-tighter uppercase opacity-5 absolute -top-10 select-none pointer-events-none">
            INSIGHTS
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Isarva Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert insights on web hosting, WordPress development, and growing
            your digital presence in the AI era.
          </p>
        </div>
      </div>

      {/* Search Input */}
      <div className="max-w-xl mx-auto px-6 mt-12 relative z-10">
        <form onSubmit={handleSearch} className="relative group">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for articles, guides, or updates..."
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-14 pr-32 text-gray-900 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all duration-300 shadow-sm"
          />
          <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button 
            type="submit" 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-[14px] transition-all duration-300 shadow-lg shadow-emerald-200 active:scale-95"
          >
            Search
          </button>
        </form>
      </div>
      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-500"></div>
    </section>
  );
}
