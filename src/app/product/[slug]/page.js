import { notFound } from "next/navigation";
import { getProductBySlug, getAllProductSlugs, productsData } from "../../lib/data/products-data";
import ProductDetailClient from "./ProductDetailClient";
import { generateProductMetadata, generateProductSchema } from "../../lib/utils/seo";

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

  return generateProductMetadata(product);
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Get related products (3 random products excluding current, prioritizing same category)
  const sameCategory = productsData.filter(p => p.slug !== product.slug && p.category === product.category && !p.slug.includes("staging") && !p.slug.includes("-old"));
  const otherProducts = productsData.filter(p => p.slug !== product.slug && p.category !== product.category && !p.slug.includes("staging") && !p.slug.includes("-old"));
  const relatedProducts = [...sameCategory, ...otherProducts]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const productSchema = generateProductSchema(product);

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductDetailClient 
        product={product} 
        relatedProducts={relatedProducts}
        allProducts={productsData}
      />
    </>
  );
}
