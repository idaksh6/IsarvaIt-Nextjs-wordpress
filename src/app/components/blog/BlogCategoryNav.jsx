"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getBlogCategories } from "../../lib/services/blog-service";

export default function BlogCategoryNav() {
  const [categories, setCategories] = useState([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const scrollContainerRef = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  useEffect(() => {
    async function fetch() {
      const cats = await getBlogCategories();
      setCategories(cats);
    }
    fetch();
  }, []);

  // Check scroll position to show/hide nav buttons
  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      
      return () => {
        container.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [categories]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && canScrollRight) {
      scrollRight();
    }
    if (isRightSwipe && canScrollLeft) {
      scrollLeft();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleCategoryClick = (catSlug) => {
    const params = new URLSearchParams(searchParams.toString());
    if (catSlug === "all") {
      params.delete("category");
    } else {
      params.set("category", catSlug);
    }
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <nav className="bg-gray-50 border-b border-gray-100 py-4 sticky top-[72px] z-40 backdrop-blur-md bg-white/80">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Previous Button - Hidden on large screens */}
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:bg-emerald-700 transition-all active:scale-95"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Next Button - Hidden on large screens */}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:bg-emerald-700 transition-all active:scale-95"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <ul className="flex items-center gap-8 whitespace-nowrap min-w-max lg:px-0 px-12">
            <li>
              <button 
                onClick={() => handleCategoryClick("all")}
                className={`font-bold text-sm tracking-wider uppercase transition-colors px-4 py-2 rounded-full ${
                  activeCategory === "all" ? "text-emerald-600 bg-emerald-50" : "text-gray-500 hover:text-emerald-600"
                }`}
              >
                All Posts
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat.id}>
                <button 
                  onClick={() => handleCategoryClick(cat.slug)}
                  className={`font-bold text-sm tracking-wider uppercase transition-colors px-4 py-2 rounded-full ${
                    activeCategory === cat.slug ? "text-emerald-600 bg-emerald-50" : "text-gray-500 hover:text-emerald-600"
                  }`}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
