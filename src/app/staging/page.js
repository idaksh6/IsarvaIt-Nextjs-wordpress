import { notFound } from "next/navigation";
import { getProductBySlug, productsData } from "../lib/data/products-data";
import ProductDetailClient from "../product/[slug]/ProductDetailClient";
import { generateProductMetadata, generateProductSchema } from "../lib/utils/seo";

// Force static rendering for the staging page
export const dynamic = 'force-static';

export async function generateMetadata() {
  const product = getProductBySlug("hrms-software-staging");
  
  if (!product) {
    return {
      title: 'Staging Page Not Found',
      robots: { index: false, follow: false }
    };
  }

  // Generate metadata based on the staging product data
  // This will automatically include noindex because the slug contains "-staging"
  const metadata = generateProductMetadata(product);
  
  return {
    ...metadata,
    title: `[STAGING] ${product.title}`,
    alternates: {
      canonical: 'https://www.isarvait.com/product/hrms-software',
    },
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}

export default async function StagingPage() {
  const product = getProductBySlug("hrms-software-staging");

  if (!product) {
    notFound();
  }

  // Get related products (3 random products excluding current, prioritizing same category)
  const sameCategory = productsData.filter(p => p.slug !== product.slug && p.category === product.category && !p.slug.includes("staging"));
  const otherProducts = productsData.filter(p => p.slug !== product.slug && p.category !== product.category && !p.slug.includes("staging"));
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
