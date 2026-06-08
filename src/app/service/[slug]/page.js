import Link from "../../components/AppLink";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs, servicesData } from "../../lib/data/services-data";
import ServiceDetailClient from "./ServiceDetailClient";
import FeatureItem from "./FeatureItem";
import BenefitItem from "./BenefitItem";
import WebsiteServicesPremium from "./WebsiteServicesPremium";
import WordPressDevelopmentPremium from "./WordPressDevelopmentPremium";
import WordPressDevelopmentPremiumStaging from "./WordPressDevelopmentPremiumStaging";
import ProductDetailPremiumLaravel from "../../components/products/ProductDetailPremiumLaravel";
import WebsiteMaintenanceFAQ from "./website-maintenance-amc/WebsiteMaintenanceFAQ";
import WebsiteMaintenanceHeadaches from "./website-maintenance-amc/WebsiteMaintenanceHeadaches";
import WebsiteMaintenanceProcess from "./website-maintenance-amc/WebsiteMaintenanceProcess";
import WebsiteMaintenanceServices from "./website-maintenance-amc/WebsiteMaintenanceServices";
import {
  generateServiceMetadata,
  generateServiceSchema,
  generateServiceBreadcrumbSchema,
} from "../../lib/utils/seo";
import NewsAndMagazinePortal from "./NewsAndMagazinePortal";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug: slug,
  }));
}

// Force static rendering for all service pages
export const dynamic = 'force-static';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return generateServiceMetadata(service);
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const isAmc = slug === "website-maintenance-amc";
  const centeredFeaturesLayout = [
    "website-maintenance-amc",
    "cloud",
    "ai-ml-consulting",
    "staffing",
    "digital-marketing",
    "statamic-development",
    "consulting-services",
    "erp-services",
    "offshore-development",
    "training",
    "gps-tracking",
    "wordpress-training",
    "odoo-apps-support-and-maintenance",
  ].includes(slug);
  const headingCaseClass = "capitalize";
  const sectionPy = "py-12 lg:py-16";
  const sectionHeaderMb = "mb-10";
  const lgFeatureRemainder = service.features.length % 3;
  const hasLgOrphanFeatureRow = lgFeatureRemainder === 1 || lgFeatureRemainder === 2;
  const featuresMainRowCount = hasLgOrphanFeatureRow ? service.features.length - lgFeatureRemainder : service.features.length;
  const featuresOrphanRow = hasLgOrphanFeatureRow ? service.features.slice(featuresMainRowCount) : [];

  // ── Premium page for Website Services ──────────────────────
  if (slug === "website-services") {
    return <WebsiteServicesPremium service={service} servicesData={servicesData} />;
  }

  // ── Premium page for WordPress Development ──────────────────────
  if (slug === "wordpress-development") {
    return <WordPressDevelopmentPremiumStaging service={service} servicesData={servicesData} />;
  }

  // ── Premium page for WordPress Development STAGING ────────────────
  if (slug === "wordpress-development-staging") {
    return <WordPressDevelopmentPremiumStaging service={service} servicesData={servicesData} />;
  }

  // ── Premium page for News and Magazine Portal ──────────────
  if (slug === "news-and-magazine-portal") {
    return <NewsAndMagazinePortal service={service} servicesData={servicesData} />;
  }

  // ── Premium page for Custom Laravel Application Development ──────────────
  if (slug === "custom-laravel-application-development") {
    const serviceSchema = generateServiceSchema(service);
    const breadcrumbSchema = generateServiceBreadcrumbSchema(service);

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <ProductDetailPremiumLaravel
          product={service}
          allProducts={servicesData}
          entityType="service"
        />
      </>
    );
  }

  // Get related services (3 random services excluding current)
  const relatedServices = servicesData
    .filter(s => s.slug !== service.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-white"
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" style={{ transform: "translateZ(0)" }}>
          <div className="absolute inset-0 bg-mesh-green opacity-30"></div>
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-emerald-300/30 to-teal-300/30 blur-[100px] rounded-full"></div>
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-green-300/20 to-emerald-300/20 blur-[100px] rounded-full"></div>
          <div className="hero-noise-overlay opacity-[0.08]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" prefetch={false} className="hover:text-emerald-600 transition-colors">
                Home
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/services" prefetch={false} className="hover:text-emerald-600 transition-colors">
                Services
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-emerald-600 font-medium">{service.title}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex w-fit mx-auto lg:mx-0 items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 font-semibold text-sm mb-6 border border-emerald-200 shadow-md">
                <span className="text-2xl">{service.icon}</span>
                <span>Premium Service</span>
              </div>
              <h1 className="mb-6">
                {service.title}
              </h1>
              <p className="text-base lg:text-xl text-gray-700 leading-relaxed font-medium mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <ServiceDetailClient service={service} servicesData={servicesData} />
                <Link
                  href={service.subServices ? "#sub-services" : "#features"}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-emerald-700 bg-white border-2 border-emerald-200 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Explore Details
                </Link>
              </div>
            </div>

            <div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-[80px] rounded-full"></div>
                <div className={`relative rounded-3xl overflow-hidden ${isAmc ? "border border-emerald-100 shadow-[0_24px_80px_rgba(16,185,129,0.15)]" : "bg-white/70 backdrop-blur-xl border border-white/80 shadow-2xl transform hover:scale-105 transition-transform duration-300"}`}>
                  <div className={`relative w-full ${isAmc ? "h-[480px] lg:h-[520px]" : "h-[500px] lg:h-[600px]"}`}>
                    {/* Service Image */}
                    <img
                      src={service.heroImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1200&fit=crop&q=80"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className={`absolute inset-0 ${isAmc ? "bg-gradient-to-t from-emerald-900/10 via-transparent to-transparent" : "bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent"}`}></div>
                    {isAmc && (
                      <div className="absolute bottom-6 left-6 rounded-2xl px-5 py-3 bg-white/95 backdrop-blur-md border border-emerald-200/80 shadow-[0_8px_32px_rgba(16,185,129,0.12)]">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white text-sm font-bold">
                            ✓
                          </div>
                          <div>
                            <div className="text-gray-900 text-sm font-bold">
                              Annual Maintenance Contract
                            </div>
                            <div className="text-emerald-600 text-xs font-semibold">
                              Proactive website care & support
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Section - Only shown if service has subServices */}
      {service.subServices && service.subServices.length > 0 && (
        <section id="sub-services" className={`${sectionPy} bg-gradient-to-b from-white to-gray-50 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.05),transparent_50%)]"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className={`text-center ${sectionHeaderMb}`}>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                Our Specialized Services
              </div>
              <h2 className={`mb-6 ${headingCaseClass}`}>
                What We Offer Under {service.title}
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Comprehensive solutions tailored to your specific needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.subServices.map((subService, index) => {
                // Map sub-service titles to their slugs
                const subServiceSlugMap = {
                  "Website Design": "website-services",
                  "Website Maintenance – AMC": "website-maintenance-amc",
                  "Migrate to WordPress": "migrate-to-wordpress",
                  "SEO": "seo",
                  "Social Media Marketing": "social-media-marketing",
                  "Google Ads": "google-ads"
                };
                const subServiceSlug = subServiceSlugMap[subService.title];

                return (
                  <Link
                    key={index}
                    href={subServiceSlug ? `/service/${subServiceSlug}` : "#"}
                    prefetch={false}
                    className="group relative block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

                    <div className="relative h-full bg-white rounded-3xl border-2 border-gray-100 hover:border-emerald-200 shadow-lg hover:shadow-2xl transition-all duration-300 p-8 overflow-hidden">
                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-bl-[100px] transform group-hover:scale-150 transition-transform duration-500"></div>

                      <div className={`relative z-10 ${centeredFeaturesLayout ? "flex flex-col items-center text-center" : ""}`}>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${centeredFeaturesLayout ? "mx-auto" : ""}`}>
                          <span className="text-3xl">{subService.icon}</span>
                        </div>

                        <h3 className="mb-4 group-hover:text-emerald-700 transition-colors">
                          {subService.title}
                        </h3>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          {subService.description}
                        </p>

                        <div className="space-y-3 w-full text-left self-stretch">
                          <div className="text-sm font-semibold text-emerald-700 tracking-wide mb-3 text-center">
                            Key Features
                          </div>
                          {subService.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start gap-3">
                              <div className="mt-1 flex-shrink-0">
                                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                  <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              </div>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Hover indicator */}
                        <div className={`mt-6 pt-6 border-t border-gray-100 flex items-center gap-2 text-emerald-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ${centeredFeaturesLayout ? "justify-center" : ""}`}>
                          <span>View Service Details</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Features Section - Clean Professional Design */}
      <section id="features" className={`${sectionPy} bg-white relative overflow-hidden`}>
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-100 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className={`max-w-3xl ${sectionHeaderMb} ${centeredFeaturesLayout ? "mx-auto text-center" : "mx-auto lg:mx-0 text-center lg:text-left"}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 font-semibold text-sm mb-6 border border-emerald-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Key Features
            </div>
            <h2 className={`mb-6 ${headingCaseClass}`}>
              {service.slug === "odoo-apps-support-and-maintenance"
                ? "Comprehensive Support Services"
                : service.slug === "ai-ml-consulting"
                  ? "Why You Need Consulting Services"
                  : service.slug === "staffing"
                    ? "Explore Our Staffing Services"
                    : service.slug === "consulting-services"
                      ? "Transform Your Business with Innovative Technology Strategy"
                      : service.slug === "erp-services"
                        ? "Explore Our ERP Services"
                        : service.slug === "offshore-development"
                          ? "Explore Our Offshore Development Services"
                          : service.slug === "training"
                            ? "Explore Our Training Development Services"
                            : service.slug === "wordpress-development"
                              ? "Explore Our WordPress Development Services"
                              : service.slug === "statamic-development"
                                ? "Explore Our Statamic Development Services"
                                : service.slug === "gps-tracking"
                                  ? "Explore Our GPS Tracking Services"
                                  : service.slug === "wordpress-training"
                                    ? "Start Your WordPress Adventure"
                                    : service.slug === "digital-marketing"
                                      ? "Explore Our Digital Marketing Services"
                                      : service.slug === "seo"
                                        ? "SEO Services"
                                        : service.slug === "social-media-marketing"
                                          ? "Social Media Marketing"
                                          : service.slug === "google-ads"
                                            ? "Google Ads"
                                            : "Everything You Need to Succeed"
              }
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {service.slug === "odoo-apps-support-and-maintenance"
                ? "We ensure that your Odoo applications—from Finance to HR—are always up-to-date, secure, and performing at their peak."
                : service.slug === "ai-ml-consulting"
                  ? "Align your business objectives with the right AI and ML solutions with our consulting services."
                  : service.slug === "staffing"
                    ? "At Isarva Infotech, we believe in going beyond conventional recruitment. Our expert staffing services are designed to craft customized strategies that build high-performing teams, empowering your business to achieve its true potential."
                    : service.slug === "consulting-services"
                      ? "Unlock the full potential of your business with our expert consulting services, designed to meet your unique needs. From strategic planning to operational improvement, we offer a full suite of solutions to ensure your organization is both effective and efficient."
                      : service.slug === "erp-services"
                        ? "Unlock the full potential of your business operations with our expert ERP services, designed to meet your unique business needs. From custom software development to implementation and integration, we offer a full suite of solutions to ensure your business runs smoothly and efficiently."
                        : service.slug === "offshore-development"
                          ? "Unlock the full potential of your project with our expert offshore development services, designed to meet your unique business needs. From custom software development to IT consulting, we offer a full suite of solutions to ensure your project is both efficient and effective."
                          : service.slug === "training"
                            ? "Unlock the full potential of your team with our expert training development services, designed to meet your unique organizational needs. From custom course creation to instructor-led training, we offer a full suite of solutions to ensure your employees are equipped with the skills and knowledge they need to succeed."
                            : service.slug === "wordpress-development"
                              ? "Unlock the full potential of your online presence with our expert WordPress development services, designed to meet your unique business needs. From custom themes and plugins to seamless integrations, we offer a full suite of solutions to ensure your website is both stunning and high-performing."
                              : service.slug === "statamic-development"
                                ? "Unleash the full potential of your website with our expert Statamic development services, designed to meet your unique business needs. From custom themes to addon development, we offer a full suite of solutions to ensure your online presence is both powerful and engaging."
                                : service.slug === "gps-tracking"
                                  ? "Unlock the full potential of your fleet or assets with our expert GPS tracking services, designed to meet your unique business needs. From custom tracking solutions to real-time monitoring, we offer a full suite of solutions to ensure your operations are both efficient and effective."
                                  : service.slug === "wordpress-training"
                                    ? "Whether you're a beginner or an experienced user, our expert instructors will guide you through every step of the process, from setting up your WordPress site to customizing themes and plugins. With hands-on practice and real-world examples, you'll gain the skills and confidence to create amazing websites that stand out from the crowd."
                                    : service.slug === "digital-marketing"
                                      ? "Unlock the full potential of your online presence with our expert digital marketing services, designed to meet your unique business needs. From search engine optimization to social media management, we offer a full suite of solutions to ensure your brand is visible, credible, and successful online."
                                      : service.slug === "seo"
                                        ? "Our SEO service will help your company rank higher in search results, boost your sales, and allow you to target the right audience for your product or service."
                                        : service.slug === "social-media-marketing"
                                          ? "We excel in supporting small and medium businesses by crafting customized digital marketing and branding solutions, including social media strategy development, content creation, campaign execution, account management, and optimization to enhance visibility and engagement."
                                          : service.slug === "google-ads"
                                            ? "Google Ads allows businesses to set budgets and deploy creative strategies, reaching audiences actively searching for products and services similar to theirs. Additionally, Google Ads uniquely provides detailed insights to measure return on investment (ROI)."
                                            : "Comprehensive website maintenance solutions designed to ensure seamless performance, stronger security, and long-term digital success."
              }
            </p>
          </div>

          {/* Features Grid - 3 Column Layout */}
          {service.slug === "ai-ml-consulting" ? (
            <>
              {/* First 4 features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {service.features.slice(0, 4).map((feature, index) => (
                  <FeatureItem
                    key={index}
                    feature={feature}
                    index={index}
                    isEven={index % 2 === 0}
                    centered
                  />
                ))}
              </div>

              {/* AI & ML Consulting Services Section */}
              <div className="mb-10 text-center">
                <h3 className="mb-4">
                  AI & ML Consulting Services
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Leverage the best of AI and ML expertise to expand your markets and generate revenue.
                </p>
              </div>

              {/* Remaining 3 features */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.features.slice(4).map((feature, index) => (
                  <FeatureItem
                    key={index + 4}
                    feature={feature}
                    index={index + 4}
                    isEven={(index + 4) % 2 === 0}
                    centered
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.features.slice(0, featuresMainRowCount).map((feature, index) => (
                  <FeatureItem
                    key={index}
                    feature={feature}
                    index={index}
                    isEven={index % 2 === 0}
                    centered={centeredFeaturesLayout}
                  />
                ))}
              </div>
              {featuresOrphanRow.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-6">
                  {featuresOrphanRow.map((feature, index) => {
                    const featureIndex = featuresMainRowCount + index;
                    const orphanColClass =
                      featuresOrphanRow.length === 2
                        ? index === 0
                          ? "lg:col-span-2 lg:col-start-2"
                          : "lg:col-span-2"
                        : "lg:col-span-2 lg:col-start-3";

                    return (
                      <div key={featureIndex} className={orphanColClass}>
                        <FeatureItem
                          feature={feature}
                          index={featureIndex}
                          isEven={featureIndex % 2 === 0}
                          centered={centeredFeaturesLayout}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`${sectionPy} bg-gray-50 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.05),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center ${sectionHeaderMb}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 font-semibold text-sm mb-6 border border-emerald-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Business Impact
            </div>
            <h2 className={`mb-6 ${headingCaseClass}`}>
              {service.slug === "odoo-apps-support-and-maintenance"
                ? "Why Choose Isarva for Odoo Support?"
                : service.slug === "ai-ml-consulting"
                  ? "Consulting Services for Businesses"
                  : service.slug === "wordpress-training"
                    ? "Why WordPress"
                    : service.slug === "seo"
                      ? "Elevate Your Search Engine Visibility"
                      : service.slug === "social-media-marketing"
                        ? "Results-Driven Social Media"
                        : service.slug === "google-ads"
                          ? "Reach Right Audience at the Right Time"
                          : "Benefits You'll Unlock"
              }
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {service.slug === "odoo-apps-support-and-maintenance"
                ? "We are your trusted partner for creating sustainable value through Odoo ERP solutions."
                : service.slug === "ai-ml-consulting"
                  ? "We help you create scalable products and services with intuitive design and robust implementation, aiming to meet both your business objectives and your customers' expectations."
                  : service.slug === "wordpress-training"
                    ? "Master WordPress, shape your career. Whether you're a beginner or expert, our WordPress training covers everything you need."
                    : service.slug === "seo"
                      ? "The cornerstone of our digital marketing effort is based on the extensive research and analysis of keywords, competition and market intelligence. This approach helps us to decide the relevant keywords and titles for your website and to create optimized web pages that will be visible on the search engine result page."
                      : service.slug === "social-media-marketing"
                        ? "Our social media marketing agency builds strategic, creative and efficient social media campaigns to help your business grow. Helping you identify your audience's needs, we create personas, content and micro-messaging tailored to your brand and industry. Using data and analytics, we devise a plan to increase engagement & conversion rates; build brand awareness; make the investment in paid advertising or marketing collateral required."
                        : service.slug === "google-ads"
                          ? "Google Ads is the perfect way to reach the right people with the right message. With Google ads campaigns your business gets maximum ROI conversions. Whether you're looking to increase sales, drive traffic to your website, or increase awareness of your brand, Google Ads has you covered."
                          : "Gain long-term value and operational confidence with proactive website maintenance and expert support."
              }
            </p>
          </div>

          {/* Cloud Services - Special centered layout */}
          {service.slug === "cloud" || service.slug === "staffing" || service.slug === "consulting-services" || service.slug === "erp-services" || service.slug === "offshore-development" || service.slug === "training" || service.slug === "wordpress-development" || service.slug === "statamic-development" || service.slug === "gps-tracking" || service.slug === "digital-marketing" || service.slug === "google-ads" ? (
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-green-500 flex items-center justify-center mb-6 shadow-lg mx-auto">
                    <span className="text-4xl font-black text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mb-4">
                    {typeof benefit === 'string' ? benefit : benefit.title}
                  </h3>
                  {typeof benefit === 'object' && benefit.description && (
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : service.slug === "odoo-apps-support-and-maintenance" ? (
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-green-500 flex items-center justify-center mb-6 shadow-lg mx-auto">
                    <span className="text-4xl font-black text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mb-4">
                    {typeof benefit === 'string' ? benefit : benefit.title}
                  </h3>
                  {typeof benefit === 'object' && benefit.description && (
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : service.slug === "ai-ml-consulting" ? (
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-green-500 flex items-center justify-center mb-6 shadow-lg mx-auto">
                    <span className="text-4xl font-black text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mb-4">
                    {typeof benefit === 'string' ? benefit : benefit.title}
                  </h3>
                  {typeof benefit === 'object' && benefit.description && (
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : service.slug === "wordpress-training" ? (
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-green-500 flex items-center justify-center mb-6 shadow-lg mx-auto">
                    <span className="text-4xl font-black text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mb-4">
                    {typeof benefit === 'string' ? benefit : benefit.title}
                  </h3>
                  {typeof benefit === 'object' && benefit.description && (
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : service.slug === "seo" ? (
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-green-500 flex items-center justify-center mb-6 shadow-lg mx-auto">
                    <span className="text-4xl font-black text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mb-4">
                    {typeof benefit === 'string' ? benefit : benefit.title}
                  </h3>
                  {typeof benefit === 'object' && benefit.description && (
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : service.slug === "social-media-marketing" ? (
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-green-500 flex items-center justify-center mb-6 shadow-lg mx-auto">
                    <span className="text-4xl font-black text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mb-4">
                    {typeof benefit === 'string' ? benefit : benefit.title}
                  </h3>
                  {typeof benefit === 'object' && benefit.description && (
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : service.slug === "google-ads" ? (
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-green-500 flex items-center justify-center mb-6 shadow-lg mx-auto">
                    <span className="text-4xl font-black text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mb-4">
                    {typeof benefit === 'string' ? benefit : benefit.title}
                  </h3>
                  {typeof benefit === 'object' && benefit.description && (
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <BenefitItem key={index} benefit={benefit} index={index} centered={service.slug === "website-maintenance-amc"} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section specifically for Website Maintenance */}
      {service.slug === "website-maintenance-amc" && (
        <>
          <WebsiteMaintenanceFAQ />
          <WebsiteMaintenanceHeadaches />
          <WebsiteMaintenanceProcess />
          <WebsiteMaintenanceServices />
        </>
      )}

      {/* Related Services Section */}
      <section className={`${sectionPy} bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200/20 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center ${sectionHeaderMb}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-emerald-200 text-emerald-700 font-semibold text-sm mb-6 shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              You Might Also Like
            </div>
            <h2 className={`mb-6 ${headingCaseClass}`}>
              Explore Related Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover complementary solutions to enhance your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((relatedService) => (
              <Link
                key={relatedService.slug}
                href={`/service/${relatedService.slug}`}
                prefetch={false}
                className="relative"
              >
                <div className="h-full rounded-3xl p-8 bg-white border-2 border-gray-100 hover:border-emerald-300 shadow-lg transition-all duration-300">
                  <div className="relative flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/30"></div>
                      <span className="text-4xl relative z-10">{relatedService.icon}</span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-4">
                      {relatedService.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {relatedService.shortDescription}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center justify-center gap-2 text-emerald-600 font-bold">
                      <span>Explore Service</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              prefetch={false}
              className="press-illusion-btn-orange bg-orange-600 text-white w-fit font-bold px-8 py-4 text-base items-center space-x-2 flex cursor-pointer mx-auto"
            >
              <span>View All Services</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`${sectionPy} bg-gradient-to-br from-emerald-600 via-teal-600 to-green-600 relative overflow-hidden`}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full"></div>
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold text-sm mb-8 border border-white/30 shadow-lg">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            Let's Get Started
          </div>

          <h2 className={`text-white mb-6 ${headingCaseClass}`}>
            {service.slug === "odoo-apps-support-and-maintenance"
              ? "Ready to Optimize Your Odoo Experience?"
              : "Ready to Transform Your Business?"
            }
          </h2>

          <p className="text-xl lg:text-2xl text-emerald-50 mb-12 max-w-3xl mx-auto leading-relaxed">
            {service.slug === "odoo-apps-support-and-maintenance"
              ? "Get in touch with us today to discuss your support and maintenance needs. Let's ensure your business runs like a well-oiled machine."
              : `Partner with our experts to unlock the full potential of ${service.title.toLowerCase()}. Let's create something amazing together.`
            }
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-6 md:mt-10">
            <Link
              href="/contact"
              prefetch={false}
              className="btn-premium-orange group !px-10 !py-5"
            >
              <div className="shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <span className="relative z-10 flex items-center gap-3 font-black tracking-wider text-base">
                Get Started Today
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            <Link
              href="/services"
              prefetch={false}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 font-black tracking-wider text-base text-gray-700 transition-all duration-300 rounded-full bg-white border-2 border-gray-100 hover:border-emerald-200 hover:text-emerald-700 shadow-sm hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                Browse All Services
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-emerald-100 text-sm font-medium">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-emerald-100 text-sm font-medium">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-emerald-100 text-sm font-medium">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

