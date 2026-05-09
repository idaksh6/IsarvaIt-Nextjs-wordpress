import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Client Testimonials - Success Stories and Reviews",
  description: "Read what our clients say about Isarva Infotech. Discover how we've helped over 500+ global enterprises and startups architect their digital future with premium web and software solutions.",
  keywords: ["testimonials", "client reviews", "success stories", "Isarva reviews", "case studies"],
  url: "/testimonial",
});

export default function TestimonialLayout({ children }) {
  return <>{children}</>;
}
