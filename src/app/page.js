import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ClientsSection from "./components/ClientsSection";
import ServicesSection from "./components/ServicesSection";
import ProductDesktop from "./components/ProductDesktop";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import CtaSection from "./components/CtaSection";
import { getHomePageData, getAllHomePageSections } from "./lib/services/home-page-service";
import { getBlogPosts } from "./lib/services/blog-service";
import { fetchPosts } from "./lib/api/wordpress-api";
import { generateMetadata as generateSEOMetadata, generateOrganizationSchema } from "./lib/utils/seo";
import {
  generateEnhancedOrganizationSchema,
  generateLocalBusinessSchema,
  generateProfessionalServiceSchema,
  generateFAQSchema
} from "./lib/utils/ai-seo-schema";

export const metadata = generateSEOMetadata({
  title: "Offshore IT Partner for Scalable Digital Products — Web, Mobile & Cloud",
  description: "Accelerate your digital growth with Isarva Infotech, your trusted offshore IT partner. We specialize in building scalable web, mobile, and cloud solutions for global businesses. Leverage 10+ years of expertise in custom software development and digital transformation.",
  keywords: [
    "project management software",
    "project management application",
    "project management tool",
    "CRM",
    "CRM Software",
    "Customer Relationship Management",
    "SUPPORT SOFTWARE",
    "Support Software",
    "Help Desk Application",
    "MARINE SERVICE",
    "Marine Service Software",
    "Marine Management System",
    "DISPATCHER PANEL",
    "Dispatcher Software",
    "Dispatch Management Application",
    "WOOCOMMERCE",
    "WooCommerce Development",
    "WooCommerce E-commerce Solutions",
    "DOCUMENT MANAGEMENT SYSTEM",
    "DMS Software",
    "DMS Application",
    "RETAIL BILLING SOFTWARE",
    "Retail Billing Application",
    "POS Software",
    "Website Services",
    "Web Development Application",
    "WordPress Development",
    "WordPress Website Solutions",
    "Cloud Services",
    "Cloud Computing Application",
    "Odoo Apps Support",
    "Odoo Development Services",
    "AI & ML Consulting",
    "AI ML Application Development",
    "Staffing Services",
    "IT Staffing Solutions",
    "Digital Marketing",
    "Statamic Development",
    "Statamic CMS Solutions",
    "Consulting Services",
    "ERP Services",
    "ERP Application Development",
    "Offshore Development",
    "Offshore IT Partner",
    "GPS Tracking",
    "GPS Tracking Software",
    "Vehicle Tracking Application",
    "WordPress Training",
    "Custom Software Development",
    "Scalable Digital Products"
  ],
  url: "/",
  image: "https://www.isarvait.com/isarva-og.png",
});

// Revalidate this page every 60 seconds (ISR - Incremental Static Regeneration)
// This prevents API calls on every page load, only rebuilds when cache expires
export const revalidate = 60;

export default async function HomePage() {
  // Fetch WordPress data (cached and revalidated based on settings above)
  const homePageData = await getHomePageData();

  // Fetch blog posts — try WordPress first, fallback to static data
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
          featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
          categoryName: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog",
          categorySlug: post._embedded?.["wp:term"]?.[0]?.[0]?.slug || "blog",
          readTime: `${Math.ceil((post.content?.rendered?.replace(/<[^>]+>/g, "").split(" ").length || 300) / 200)} min read`,
        }));
      }
    } catch (e) {
      // Silently fall back to static posts
    }
    // Fallback to static posts
    return getBlogPosts({ perPage: 4 });
  }

  // Parallelize the rest of the fetching to eliminate waterfalls
  const [sections, blogPosts] = await Promise.all([
    getAllHomePageSections(homePageData),
    getWordPressBlogPosts()
  ]);

  const heroData = sections.hero;
  const servicesData = sections.services;
  const techStackData = sections.techStack;

  // Generate comprehensive AI-optimized schemas
  const enhancedOrgSchema = generateEnhancedOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();
  const professionalServiceSchema = generateProfessionalServiceSchema();
  const faqSchema = generateFAQSchema();

  return (
    <div className="relative min-h-screen">
      {/* Comprehensive JSON-LD Schema for AI SEO */}
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
        {/* <AboutSection /> */}
        <ClientsSection data={techStackData} />
        <ServicesSection data={servicesData} />
        <ProductDesktop />
        <TestimonialsSection />
        <BlogSection posts={blogPosts} />
        <CtaSection />
      </main>
    </div>
  );
}
