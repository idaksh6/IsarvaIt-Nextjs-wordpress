"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogSection({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Latest From <span className="text-green-500">Our Blog</span>
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest in web hosting, technology, and success stories from the Isarva team.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="group flex items-center gap-2 text-lg font-bold text-gray-900 hover:text-green-500 transition-colors"
          >
            View More Blog
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-gray-100">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900 uppercase tracking-widest">
                      {post.categoryName}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
