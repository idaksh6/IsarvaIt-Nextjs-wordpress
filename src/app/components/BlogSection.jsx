"use client";

import { memo } from "react";
import Link from "./AppLink";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

function BlogSection({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section
      id="blog"
      className="py-10 sm:py-20 lg:py-24  bg-[#F5FBF7] bg-[linear-gradient(180deg,#F8FCFA_0%,#F5FBF7_160px,#F5FBF7_100%)] relative overflow-hidden"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#E4EDE7] text-[#00A86B] text-xs font-bold tracking-[0.16em] uppercase mb-3 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
              <span>LATEST BLOG</span>
            </div>

            <h2
              id="blog-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-[#102A43] leading-[1.2] mb-3.5"
            >
              Latest Insights &{" "}
              <span className="text-[#00A86B]">Tech Stories</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Stay updated with the latest in modern engineering, cloud solutions,
              and digital transformation strategies from the Isarva team.
            </p>
          </div>

          <a
            href="https://blog.isarvait.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center gap-2 bg-[#FF6B12] hover:bg-[#e85e0c] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-md hover:shadow-orange-500/20 hover:-translate-y-0.5 transition-all duration-200 self-center md:self-auto cursor-pointer"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post, index) => {
            const isExternal = !!post.link;
            const href = post.link || `/blog/${post.slug}`;
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group flex flex-col h-full bg-white rounded-2xl border border-[#E4EDE7] p-4 shadow-sm hover:shadow-[0_12px_28px_rgba(16,42,67,0.07)] hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300"
              >
                <a
                  href={href}
                  target={isExternal ? "_blank" : "_self"}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="flex flex-col h-full"
                >
                  {/* Thumbnail Image */}
                  <div
                    className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 bg-slate-100"
                  >
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-md text-[11px] font-bold text-[#102A43] shadow-xs">
                        {post.categoryName}
                      </span>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2.5 font-medium">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#00A86B]" />
                      <span>{post.date}</span>
                    </span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[#102A43] font-bold text-base leading-snug mb-3 group-hover:text-[#00A86B] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Read Article Link at bottom */}
                  <div className="mt-auto pt-2">
                    <span className="text-[#00A86B] font-bold text-xs inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Mobile View More Button */}
        <div className="flex justify-center md:hidden mt-8">
          <a
            href="https://blog.isarvait.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#FF6B12] hover:bg-[#e85e0c] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-sm transition-all"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default memo(BlogSection);
