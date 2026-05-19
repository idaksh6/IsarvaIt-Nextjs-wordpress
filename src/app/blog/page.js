import Link from "next/link";
import BlogCategoryNav from "../components/blog/BlogCategoryNav";
import FeaturedSection from "../components/blog/FeaturedSection";
import PostGrid from "../components/blog/PostGrid";
import BlogHero from "../components/blog/BlogHero";
import { getBlogPosts } from "../lib/services/blog-service";

export const metadata = {
  title: "Blog | Isarva Infotech - Hosting Insights & Tech Updates",
  description: "Stay updated with the latest in tech, hosting insights, and success stories from the Isarva team.",
};

export const revalidate = 60;

export default async function BlogPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const searchQuery = resolvedSearchParams.s;
  const category = resolvedSearchParams.category;
  
  let posts = await getBlogPosts({ perPage: 100 });
  
  // Filter by search query
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    posts = posts.filter(post => 
      post.title.toLowerCase().includes(query) || 
      post.excerpt.toLowerCase().includes(query) ||

      post.categoryName.toLowerCase().includes(query)
    );
  }

  // Filter by category
  if (category && category !== "all") {
    posts = posts.filter(post => post.categorySlug === category);
  }
  
  const isFiltered = searchQuery || (category && category !== "all");
  const featuredPosts = posts.slice(0, 4);
  const remainingPosts = posts.slice(4);

  let gridTitle = "Latest Articles";
  if (searchQuery) gridTitle = `Search Results for "${searchQuery}"`;
  else if (category && category !== "all") gridTitle = `${category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Articles`;

  return (
    <div className="min-h-screen bg-premium-noise blog-list-gradient relative overflow-hidden">
      <main>
        <BlogHero />
        <BlogCategoryNav />
        
        <div className="pt-8 min-h-[400px]">
            {posts.length > 0 ? (
              <>
                {isFiltered ? (
                  <PostGrid posts={posts} title={gridTitle} />
                ) : (
                  <>
                    <FeaturedSection posts={featuredPosts} />
                    <PostGrid posts={remainingPosts} title="Latest Articles" />
                  </>
                )}
              </>
            ) : (
              <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                <div className="text-8xl mb-6 grayscale opacity-20 select-none">🔍</div>
                <h2 className="text-gray-900 mb-4 er er text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">No articles found</h2>
                <p className="text-lg text-gray-400 max-w-md mx-auto font-medium leading-relaxed">
                  We couldn't find any articles matching your search or category selection. 
                  Try adjusting your filters or search terms.
                </p>
                <Link 
                  href="/blog"
                  className="mt-8 px-8 py-3 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-colors inline-block"
                >
                  Clear all filters
                </Link>
              </div>
            )}
        </div>
      </main>
    </div>
  );
}
