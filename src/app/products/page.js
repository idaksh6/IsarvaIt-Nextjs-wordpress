import { productsData } from "../lib/data/products-data";
import ProductsListClient from "./ProductsListClient.jsx";

export const metadata = {
  title: "Our Products - Isarva | Software Solutions",
  description: "Discover our comprehensive suite of business software solutions designed to streamline operations and drive growth.",
};

export default function ProductsPage() {
  return <ProductsListClient productsData={productsData} />;
}
