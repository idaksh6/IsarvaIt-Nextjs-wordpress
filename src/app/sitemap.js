import { productsData } from './lib/data/products-data';
import { servicesData } from './lib/data/services-data';
import { industriesData } from './lib/data/industries-data';
import { jobsData } from './lib/data/jobsData';

export default function sitemap() {
  const baseUrl = 'https://www.isarvait.com';

  // Static pages
  const routes = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/careers',
    '/internships',
    '/products',
    '/services',
    '/industries',
    '/testimonial',
    '/thank-you',
    '/quality-policy',
    '/referral-program',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic product pages
  const products = productsData
    .filter((product) => !product.slug?.includes("-staging") && !product.slug?.includes("-old") && product.slug !== "bill-soft" && !product.noIndex)
    .map((product) => ({
      url: `${baseUrl}/product/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: product.pageTemplate === "poshact" ? "weekly" : "monthly",
      priority: product.pageTemplate === "poshact" ? 0.95 : 0.9,
    }));

  // Dynamic service pages
  const services = servicesData
    .filter((service) => !service.slug?.includes("-staging") && !service.noIndex && service.slug !== "news-and-magazine-portal")
    .map((service) => ({
      url: `${baseUrl}/service/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    }));

  const industries = industriesData.map((industry) => ({
    url: `${baseUrl}/industry/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Dynamic career pages
  const careers = jobsData.map((job) => ({
    url: `${baseUrl}/career/${job.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...routes, ...products, ...services, ...industries, ...careers];
}
