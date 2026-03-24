import Header from "../../components/Header";
import AISummary from "../../components/blog/AISummary";

import {
  getPostBySlug,
  getRelatedPosts,
} from "../../lib/services/blog-service";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Isarva Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.categoryId, post.id);

  return (
    <div className="min-h-screen bg-premium-noise gradient-bg-green">
      <Header />

      <main className="pt-44">
        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-6 mb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-emerald-600 font-black text-xs uppercase tracking-widest mb-10 hover:gap-3 transition-all"
          >
            <svg
              className="w-4 h-4 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center lg:justify-start justify-center gap-3 text-xs font-black text-gray-400 uppercase tracking-widest mb-6">
            <span>{post.categoryName}</span>
            <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
            <span>{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8 tracking-tighter lg:text-left text-center ">
            {post.title}
          </h1>

          {/* AI Summary Tool & Metadata */}
          <AISummary
            postTitle={post.title}
            date={post.date}
            readTime={post.readTime}
          />
        </header>

        {/* Featured Image */}
        <div className="max-w-6xl mx-auto px-6 lg:mb-20 mb-10">
          <div className="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src={post.featuredImage}
              className="w-full h-full object-cover"
              alt={post.title}
            />
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24">
          <div className="lg:col-span-8">
            <div
              className="prose prose-lg prose-emerald max-w-none text-black prose-headings:font-black isv_blog_contents prose-headings:tracking-tighter lg:text-left text-center prose-p:text-gray-600 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

          </div>

          {/* Sidebar / Related Posts */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="sticky top-32">
              <h3 className="text-xl font-black lg:text-left text-center text-gray-900 w-fit lg:mx-0 mx-auto uppercase tracking-tight mb-8 pl-4 border-l-4 border-emerald-500">
                Related Articles
              </h3>
              <div className="space-y-16">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                      <img
                        src={post.featuredImage}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors leading-tight line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-2 font-bold uppercase tracking-widest">
                      {post.date}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
