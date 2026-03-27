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
import { 
  generateEnhancedOrganizationSchema, 
  generateLocalBusinessSchema, 
  generateProfessionalServiceSchema,
  generateFAQSchema 
} from "./lib/utils/ai-seo-schema";

export const metadata = generateSEOMetadata({
  title: "Best Website Design Company in Mangalore | Isarva Infotech",
  description: "Leading website design and software development company in Mangalore, Karnataka. Expert in custom websites, mobile apps, ERP, CRM, e-commerce development. 10+ years experience. Call +91-9880606087",
  keywords: [
    "website design company Mangalore",
    "web development Mangalore",
    "best website makers Mangalore",
    "software development company Karnataka",
    "mobile app development Mangalore",
    "ERP development India",
    "CRM software Mangalore",
    "e-commerce development Karnataka",
    "WordPress development Mangalore",
    "custom software development India",
    "IT solutions Mangalore",
    "digital transformation services"
  ],
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
