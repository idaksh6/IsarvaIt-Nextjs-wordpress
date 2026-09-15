import ProductDetailPremiumNethra from "../components/products/ProductDetailPremiumNethra";
import { getProductBySlug, productsData } from "../lib/data/products-data";
import { generateProductMetadata, generateProductSchema, generateBreadcrumbSchema } from "../lib/utils/seo";

export const metadata = {
  title: "Isarva Nethra — Next-Gen AI Vision & Video Intelligence Platform",
  description: "Transform existing CCTV and IP camera feeds into proactive AI visual intelligence. Autonomous PPE compliance, conveyor defect inspection, perimeter radar, and footfall heatmaps with edge-native speed.",
  keywords: "Isarva Nethra, computer vision, AI video analytics, PPE detection, industrial safety AI, manufacturing defect inspection, edge AI vision, perimeter radar, CCTV analytics",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Isarva Nethra — Next-Gen AI Vision & Video Intelligence Platform",
    description: "Autonomous Computer Vision on the Edge. PPE compliance, high-speed defect inspection, perimeter threat radar, and retail telemetry.",
    type: "website",
  },
};

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
