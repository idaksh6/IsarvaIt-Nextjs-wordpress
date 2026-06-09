"use client";

import Link from "../AppLink";
export default function FeaturedSection({ posts }) {
  if (!posts || posts.length < 4) return null;

  const mainPost = posts[0];
  const sidePosts = posts.slice(1, 4);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
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
              <div className="absolute bottom-8 left-8 right-8">
                <span className="px-4 py-1.5 bg-emerald-500 text-white rounded-full text-xs font-bold capitalize tracking-widest mb-4 flex w-fit lg:mx-0 mx-auto lg:justify-start justify-center items-center gap-2">
                  {mainPost.categoryName}
                </span>
                <h2 className="text-xl text-white max-w-2xl lg:text-left text-center text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">
                  {mainPost.title}
                </h2>
              </div>
            </div>
            <p className="text-xl text-gray-600 mb-6 line-clamp-3 lg:text-left text-center">
              {mainPost.excerpt}
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500 font-medium lg:justify-start justify-center">
                <span>{mainPost.date}</span>
                <span>•</span>
                <span>{mainPost.readTime}</span>
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
                <span className="text-emerald-600 text-xs font-black capitalize tracking-widest mb-2 block">
                  {post.categoryName}
                </span>
                <h3 className="group-hover:text-emerald-600 transition-colors line-clamp-2">
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
