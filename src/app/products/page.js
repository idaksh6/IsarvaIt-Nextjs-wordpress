import { productsData } from "../lib/data/products-data";
import ProductsListClient from "./ProductsListClient.jsx";
import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Our Products - Business Software Solutions",
  description: "Discover our comprehensive suite of business software solutions — HRMS, CRM, ERP, WooCommerce, and more — designed to streamline operations and drive growth.",
  keywords: ["business software", "HRMS", "CRM", "ERP", "software solutions", "enterprise software"],
  url: "/products",
  image: "https://www.isarvait.com/dashboard.webp",
});

export default function ProductsPage() {
  return <ProductsListClient productsData={productsData} />;
}
