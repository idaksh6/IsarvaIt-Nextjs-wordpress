import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Client Testimonials - Real Stories & Proven Results",
  description: "Read real stories and proven results from 500+ global enterprises and startups that trust Isarva Infotech to architect their digital future.",
  keywords: ["testimonials", "client reviews", "success stories", "Isarva feedback", "customer reviews"],
  url: "/testimonial",
  image: "https://www.isarvait.com/isarva-og.png",
});

export default function TestimonialLayout({ children }) {
  return <>{children}</>;
}
