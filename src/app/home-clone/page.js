import HeroSection from "../components/HeroSection";
import ClientsSection from "../components/ClientsSection";
import ServicesSection from "../components/ServicesSection";
import ProductsSection from "../components/ProductsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogSection from "../components/BlogSection";
import CtaSection from "../components/CtaSection";
import { getHomePageData, getAllHomePageSections } from "../lib/services/home-page-service";
import { getBlogPosts } from "../lib/services/blog-service";
import { fetchPosts } from "../lib/api/wordpress-api";
import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";
import {
  generateEnhancedOrganizationSchema,
  generateLocalBusinessSchema,
  generateProfessionalServiceSchema,
  generateFAQSchema
} from "../lib/utils/ai-seo-schema";

export const metadata = generateSEOMetadata({
  title: "Offshore IT Partner for Scalable Digital Products — Web, Mobile & Cloud (Home Clone)",
  description: "Accelerate your digital growth with Isarva Infotech, your trusted offshore IT partner. We specialize in building scalable web, mobile, and cloud solutions for global businesses.",
  url: "/home-clone",
  image: "https://www.isarvait.com/isarva-og.jpg",
});

export const revalidate = 60;

export default async function HomeClonePage() {
  const homePageData = await getHomePageData();

  async function getWordPressBlogPosts() {
    try {
      const wpPosts = await fetchPosts({
        perPage: 4,
        fields: "id,title,slug,excerpt,date,featured_media,categories,link,_links",
        embed: true,
        revalidate: 300,
      });

      if (wpPosts && wpPosts.length > 0) {
        return wpPosts.map((post) => ({
          id: post.id,
          title: post.title?.rendered || "",
          slug: post.slug,
          link: post.link || `https://blog.isarvait.com/${post.slug}/`,
          excerpt: post.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "",
          date: new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          featuredImage:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
          categoryName: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog",
          categorySlug: post._embedded?.["wp:term"]?.[0]?.[0]?.slug || "blog",
          readTime: `${Math.ceil((post.content?.rendered?.replace(/<[^>]+>/g, "").split(" ").length || 300) / 200)} min read`,
        }));
      }
    } catch (e) {
      // Silently fall back to static posts
    }
    return getBlogPosts({ perPage: 4 });
  }

  const [sections, blogPosts] = await Promise.all([
    getAllHomePageSections(homePageData),
    getWordPressBlogPosts()
  ]);

  const heroData = sections.hero;
  const servicesData = sections.services;
  const techStackData = sections.techStack;

  const enhancedOrgSchema = generateEnhancedOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();
  const professionalServiceSchema = generateProfessionalServiceSchema();
  const faqSchema = generateFAQSchema();

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedOrgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <HeroSection data={heroData} />
        <ClientsSection data={techStackData} />
        <ProductsSection />
        <ServicesSection data={servicesData} />
        <TestimonialsSection />
        <BlogSection posts={blogPosts} />
        <CtaSection />
      </main>
    </div>
  );
}
