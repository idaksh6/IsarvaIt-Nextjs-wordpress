import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Thank You - Message Received",
  description: "Thank you for reaching out to Isarva Infotech. We have received your message and our team will get back to you within 24 hours.",
  url: "/thank-you",
  image: "https://www.isarvait.com/isarva-og.png",
  noIndex: true, // We don't want the thank you page indexed in search results
});

export default function ThankYouLayout({ children }) {
  return <>{children}</>;
}
