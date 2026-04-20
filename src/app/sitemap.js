import { productsData } from './lib/data/products-data';
import { servicesData } from './lib/data/services-data';
import { industriesData } from './lib/data/industries-data';

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
    '/service',
    '/industries',
    '/testimonial',
    '/thank-you',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic product pages
  const products = productsData.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // Dynamic service pages
  const services = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // Dynamic industry pages
  const industries = industriesData.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...routes, ...products, ...services, ...industries];
}
