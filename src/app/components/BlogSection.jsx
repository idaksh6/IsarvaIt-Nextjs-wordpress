"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogSection({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="lg:py-16 py-10 bg-premium-noise gradient-bg-green">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end lg:text-left text-center justify-between mb-16 gap-6">
          <div className="lg:max-w-2xl max-w-full">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Latest From <span className="text-green-500">Our Blog</span>
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest in web hosting, technology, and
              success stories from the Isarva team.
            </p>
          </div>
          <Link
            href="/blog"
            prefetch={true}
            className="press-illusion-btn bg-green-400 text-white w-fit font-bold px-6 py-2 text-base items-center space-x-2 hidden lg:flex"
          >
            <span>View More Blog</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 9"
              className="h-2 w-4"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                clipRule="evenodd"
              ></path>
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
                <h3 className="text-xl font-bold lg:text-left text-center text-gray-900 mb-3 group-hover:text-green-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center lg:justify-start justify-center gap-3 lg:text-left text-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
        <Link
            href="/blog"
            prefetch={true}
            className="press-illusion-btn mt-10 bg-green-400 text-white mx-auto w-fit font-bold px-6 py-2 text-base items-center space-x-2 flex lg:hidden"
          >
            <span>View More Blog</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 9"
              className="h-2 w-4"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
      </div>
    </section>
  );
}
