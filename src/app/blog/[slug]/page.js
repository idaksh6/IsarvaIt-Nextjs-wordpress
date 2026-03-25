import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import AISummary from "../../components/blog/AISummary";
import { getPostBySlug, getRelatedPosts, getBlogPosts } from "../../lib/services/blog-service";

export async function generateStaticParams() {
  const posts = await getBlogPosts({ perPage: 100 });
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Isarva Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.categoryId, post.id, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-white overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6 pt-44 lg:pb-20 pb-10 ">
          <div className="text-center">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center justify-center gap-2 text-gray-600 text-sm">
              <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
              <span>/</span>
              <Link 
                href={`/blog?category=${post.categorySlug}`} 
                className="hover:text-emerald-600 transition-colors"
              >
                {post.categoryName}
              </Link>
            </div>

            {/* Category Badge */}
            <div className="mb-6">
              <Link
                href={`/blog?category=${post.categorySlug}`}
                className="inline-block px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-colors"
              >
                {post.categoryName}
              </Link>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight text-gray-900">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 py-10">
        {/* AI Summary */}
        <AISummary 
          postTitle={post.title}
          date={post.date}
          readTime={post.readTime}
        />

        {/* Featured Image */}
        <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-auto"
          />
        </div>

        {/* Post Content */}
        <div 
          className="prose prose-lg prose-gray max-w-none text-gray-700 isv_blog_contents
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">
                Related Articles
              </h2>
              <p className="text-gray-600 text-lg">
                Continue exploring {post.categoryName}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedPost.featuredImage} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                        {relatedPost.categoryName}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{relatedPost.date}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-colors"
              >
                <span>View All Articles</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
