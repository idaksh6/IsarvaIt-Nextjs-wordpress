"use client";

import Link from "next/link";

export default function FeaturedSection({ posts }) {
  if (!posts || posts.length < 4) return null;

  const mainPost = posts[0];
  const sidePosts = posts.slice(1, 4);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Featured Post */}
        <div className="lg:col-span-7">
          <Link href={`/blog/${mainPost.slug}`} className="group">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-8 shadow-2xl">
              <img 
                src={mainPost.featuredImage} 
                alt={mainPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="px-4 py-1.5 bg-emerald-500 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                  {mainPost.categoryName}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-2xl">
                  {mainPost.title}
                </h2>
              </div>
            </div>
            <p className="text-xl text-gray-600 mb-6 line-clamp-3">
              {mainPost.excerpt}
            </p>
            <div className="flex items-center gap-4">
                <img src={mainPost.author.avatar} className="w-10 h-10 rounded-full border-2 border-emerald-100" />
                <div>
                    <h4 className="font-bold text-gray-900">{mainPost.author.name}</h4>
                    <p className="text-sm text-gray-500">{mainPost.date} • {mainPost.readTime}</p>
                </div>
            </div>
          </Link>
        </div>

        {/* Side Featured Posts */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          {sidePosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group grid grid-cols-12 gap-6 items-center">
              <div className="col-span-4 aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="col-span-8">
                <span className="text-emerald-600 text-xs font-black uppercase tracking-widest mb-2 block">
                  {post.categoryName}
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2 font-medium">
                  {post.date} • {post.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
