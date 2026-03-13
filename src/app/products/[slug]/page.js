import { notFound } from "next/navigation";
import { getProductBySlug, getAllProductSlugs, productsData } from "../../lib/data/products-data";
import ProductDetailClient from "./ProductDetailClient";

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({
    slug: slug,
  }));
}

// Force static rendering for all product pages
export const dynamic = 'force-static';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.title} - Isarva Products`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Get related products (3 random products excluding current, prioritizing same category)
  const sameCategory = productsData.filter(p => p.slug !== product.slug && p.category === product.category);
  const otherProducts = productsData.filter(p => p.slug !== product.slug && p.category !== product.category);
  const relatedProducts = [...sameCategory, ...otherProducts]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <ProductDetailClient 
      product={product} 
      relatedProducts={relatedProducts}
      allProducts={productsData}
    />
  );
}
