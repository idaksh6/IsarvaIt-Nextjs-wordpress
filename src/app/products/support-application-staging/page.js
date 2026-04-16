import { notFound } from "next/navigation";
import { getProductBySlug, productsData } from "../../lib/data/products-data";
import ProductDetailPremiumSupportStaging from "../../components/products/ProductDetailPremiumSupportStaging";
import { generateProductMetadata, generateProductSchema } from "../../lib/utils/seo";

// Force static rendering for staging review
export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  const product = getProductBySlug("support-application");

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    ...generateProductMetadata(product),
    title: `[STAGING] ${product.title}`,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
  };
}

export default async function SupportApplicationStagingPage() {
  const product = getProductBySlug("support-application");

  if (!product) {
    notFound();
  }

  // Get related products (same logic as main page)
  const sameCategory = productsData.filter(p => p.slug !== product.slug && p.category === product.category);
  const otherProducts = productsData.filter(p => p.slug !== product.slug && p.category !== product.category);
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

      <ProductDetailPremiumSupportStaging
        product={product}
        relatedProducts={relatedProducts}
        allProducts={productsData}
      />
    </>
  );
}
