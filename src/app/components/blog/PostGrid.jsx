"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function PostGrid({ posts, title = "Latest Articles" }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef(null);

  const hasMore = visibleCount < posts.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoading, posts]);

  const loadMore = () => {
    setIsLoading(true);
    // Simulate a brief loading delay for a premium feel
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setIsLoading(false);
    }, 600);
  };

  if (!posts || posts.length === 0) return null;

  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16 border-t border-gray-100">
      <div className="flex items-center lg:justify-between justify-center mb-10">
        <h2 className="text-gray-900 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">
          {title}
        </h2>
        <div className="w-2/3 h-px bg-gray-100 hidden md:block"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
        <AnimatePresence mode="popLayout">
          {visiblePosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                duration: 0.4, 
                delay: (index % 6) * 0.05,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full lg:text-left text-center">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 shadow-xl shadow-gray-200/50">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-emerald-700 uppercase tracking-[0.15em] shadow-sm">
                      {post.categoryName}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight line-clamp-2 uppercase">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 line-clamp-2 mb-6 text-[15px] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-2  border-t border-gray-50 lg:justify-start justify-center">
                    <span className="text-[13px] text-gray-400 font-medium">{post.date}</span>
                    <span className="text-gray-200">•</span>
                    <span className="text-[13px] text-gray-400 font-medium">{post.readTime}</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
      
      {/* Scroll Trigger & Loader */}
      <div ref={observerTarget} className="mt-10 py-10 flex flex-col items-center justify-center">
        {isLoading && (
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin"></div>
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest animate-pulse">
              Discovering more...
            </span>
          </div>
        )}
        {!hasMore && !isLoading  && (
          <div className="text-gray-300 font-black uppercase tracking-[0.3em] text-xs py-10 border-t border-gray-50 w-full text-center">
            You&apos;ve reached the end of our insights
          </div>
        )}
      </div>
    </section>
  );
}
