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
    "offshore software development partner",
    "scalable digital product engineering",
    "custom web development services",
    "mobile app development agency",
    "cloud-native application development",
    "IT outsourcing services India",
    "dedicated development team offshore",
    "enterprise software solutions",
    "digital transformation consulting",
    "dedicated developers India",
    "full-stack development company",
    "UI/UX design for digital products",
    "MVP development for startups",
    "offshore dedicated development center"
  ],
  url: "/",
});

// Revalidate this page every 60 seconds (ISR - Incremental Static Regeneration)
// This prevents API calls on every page load, only rebuilds when cache expires
export const revalidate = 60;

export default async function HomePage() {
  // Fetch WordPress data (cached and revalidated based on settings above)
  const homePageData = await getHomePageData();

  // Parallelize the rest of the fetching to eliminate waterfalls
  const [sections, blogPosts] = await Promise.all([
    getAllHomePageSections(homePageData),
    getBlogPosts({ perPage: 4 })
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
