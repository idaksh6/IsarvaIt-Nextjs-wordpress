import Link from "next/link";
import { notFound } from "next/navigation";
import AISummary from "../../components/blog/AISummary";
import { getPostBySlug, getRelatedPosts, getBlogPosts } from "../../lib/services/blog-service";
import { generateBlogMetadata, generateArticleSchema } from "../../lib/utils/seo";

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

  return generateBlogMetadata(post);
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.categoryId, post.id, 3);

  const articleSchema = generateArticleSchema(post);

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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
            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-black mb-6 leading-[1] tracking-tight text-gray-900">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
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
              <h2 className="text-gray-900 mb-4 er text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
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
                rel="noopener noreferrer"
                className="press-illusion-btn-orange bg-orange-600 text-white w-fit mx-auto font-bold px-6 py-4 text-base items-center space-x-2 flex shadow-lg hover:shadow-xl"
              >
                <span>View All Articles</span>
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
          </div>
        </section>
      )}
    </div>
  );
}

