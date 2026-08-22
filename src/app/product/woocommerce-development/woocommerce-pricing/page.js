import { generateMetadata as generateSEOMetadata } from "../../../lib/utils/seo";
import WooCommercePricingClient from "./WooCommercePricingClient";

export const metadata = generateSEOMetadata({
  title: "WooCommerce Development Pricing — E-Commerce Store Packages | Isarva Infotech",
  description:
    "Compare WooCommerce pricing packages: Sell (Essential), Deliver (Growth), and Retain (Advanced). Fully customized online stores with payment gateways, delivery rules, and marketing tools.",
  keywords: [
    "WooCommerce pricing packages",
    "WooCommerce e-commerce package cost",
    "WooCommerce store development price",
    "e-commerce store pricing India",
    "WordPress WooCommerce developer cost",
    "Isarva WooCommerce Packages",
  ],
  url: "/product/woocommerce-development/woocommerce-pricing",
  image: "https://www.isarvait.com/products/woocommerce/woocommerce-hero-staging.png",
  noIndex: true,
});

export const dynamic = "force-static";

export default function WooCommercePricingPage() {
  return <WooCommercePricingClient />;
}
