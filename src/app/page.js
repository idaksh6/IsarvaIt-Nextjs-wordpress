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
import { getHomePageData, getHeroSectionData, getServicesSectionData, getTechStackSectionData } from "./lib/services/home-page-service";
import { getBlogPosts } from "./lib/services/blog-service";
import { generateMetadata as generateSEOMetadata, generateOrganizationSchema } from "./lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Isarva Infotech — Scalable IT Solutions for Global Enterprises",
  description: "Your trusted partner for scalable digital solutions. We build custom web applications, mobile apps, ERP systems, CRM platforms, and cloud solutions that drive business growth.",
  keywords: ["IT solutions", "web development", "mobile app development", "ERP systems", "CRM software", "cloud solutions", "digital transformation"],
  url: "/",
});

// Revalidate this page every 60 seconds (ISR - Incremental Static Regeneration)
// This prevents API calls on every page load, only rebuilds when cache expires
export const revalidate = 60;

export default async function HomePage() {
  // Fetch WordPress data (cached and revalidated based on settings above)
  const homePageData = await getHomePageData();
  const heroData = await getHeroSectionData(homePageData);
  const servicesData = await getServicesSectionData(homePageData);
  const techStackData = await getTechStackSectionData(homePageData);
  const blogPosts = await getBlogPosts({ perPage: 4 });

  const organizationSchema = generateOrganizationSchema();

  return (
    <div className="relative min-h-screen">
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
