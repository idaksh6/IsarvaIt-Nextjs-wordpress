import ProductDetailPremiumNethra from "../components/products/ProductDetailPremiumNethra";
import { getProductBySlug, productsData } from "../lib/data/products-data";
import {
  generateMetadata as generateSEOMetadata,
  generateProductSchema,
  generateBreadcrumbSchema,
} from "../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Isarva Nethra — Next-Gen AI Vision & Video Intelligence Platform",
  description:
    "Transform existing CCTV and IP camera feeds into proactive AI visual intelligence. Autonomous PPE compliance, conveyor defect inspection, perimeter radar, and footfall heatmaps with edge-native speed.",
  image: "/products/isarva-nethra/nethra-og.jpg",
  url: "/isarva-nethra",
  keywords: [
    "Isarva Nethra",
    "computer vision",
    "AI video analytics",
    "PPE detection",
    "industrial safety AI",
    "manufacturing defect inspection",
    "edge AI vision",
    "perimeter radar",
    "CCTV analytics",
  ],
  noIndex: true,
});

export default function IsarvaNethraPage() {
  const product = getProductBySlug("isarva-nethra") || {
    slug: "isarva-nethra",
    title: "Isarva Nethra",
    category: "AI & Computer Vision"
  };

  const productSchema = generateProductSchema(product);
  const breadcrumbSchema = generateBreadcrumbSchema(product);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProductDetailPremiumNethra
        product={product}
        relatedProducts={[]}
        allProducts={productsData}
      />
    </>
  );
}
