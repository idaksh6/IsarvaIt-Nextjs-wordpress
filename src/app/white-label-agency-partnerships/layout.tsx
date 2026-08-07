import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "White-Label Agency Partnerships",
  description: "Scale your agency with a reliable white-label partner. Expert execution, fast delivery, and complete confidentiality—guaranteed.",
  keywords: ["white label", "agency partnership", "IT outsourcing", "software outsourcing", "confidential tech partner"],
  url: "/white-label-agency-partnerships",
  image: "https://www.isarvait.com/isarva-og.jpg",
});

export default function WhiteLabelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
