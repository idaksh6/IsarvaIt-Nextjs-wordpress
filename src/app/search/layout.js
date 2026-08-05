import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Search - Find Services, Products & More",
  description: "Search across Isarva Infotech's full range of services, products, industries, blog posts, and career opportunities.",
  keywords: ["search", "find services", "Isarva search", "explore products", "IT solutions"],
  url: "/search",
  image: "https://www.isarvait.com/isarva-og.jpg",
});

export default function SearchLayout({ children }) {
  return <>{children}</>;
}
