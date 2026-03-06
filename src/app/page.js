import HeroSection from "./components/HeroSection";
import ClientsSection from "./components/ClientsSection";
import ServicesSection from "./components/ServicesSection";
import ProductDesktop from "./components/ProductDesktop";
import TestimonialsSection from "./components/TestimonialsSection";
import { getHomePageData, getHeroSectionData, getServicesSectionData } from "./lib/services/home-page-service";

export const metadata = {
  title: "Isarva Infotech — Scalable IT Solutions for Global Enterprises",
  description: "Your trusted partner for scalable digital solutions. We help businesses innovate, grow, and succeed in the modern digital world.",
};

// Revalidate this page every 60 seconds (ISR - Incremental Static Regeneration)
// This prevents API calls on every page load, only rebuilds when cache expires
export const revalidate = 60;

export default async function HomePage() {
  // Fetch WordPress data (cached and revalidated based on settings above)
  const homePageData = await getHomePageData();
  const heroData = await getHeroSectionData(homePageData);
  const servicesData = await getServicesSectionData(homePageData);

  return (
    <div className="relative min-h-screen">
      <main>
        <HeroSection data={heroData} />
        <ClientsSection />
        <ServicesSection data={servicesData} />
        <ProductDesktop />
        <TestimonialsSection />
      </main>
    </div>
  );
}
