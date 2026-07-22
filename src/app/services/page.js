import { servicesData } from "../lib/data/services-data";
import ServicesListClient from "./ServicesListClient";
import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Our Services - IT Solutions & Digital Transformation",
  description: "Explore our comprehensive range of IT services including website development, cloud services, AI/ML consulting, ERP, CRM, digital marketing and more.",
  keywords: ["IT services", "web development", "cloud services", "digital marketing", "ERP", "CRM", "consulting"],
  url: "/services",
  image: "https://www.isarvait.com/isarva-og.png",
});

export default function ServicesPage() {
  return <ServicesListClient servicesData={servicesData} />;
}
