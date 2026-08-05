import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Careers - Join Our Team of Innovators",
  description: "Explore career opportunities at Isarva Infotech. We're looking for passionate designers, developers, and creators to help us shape the future of technology.",
  keywords: ["careers", "jobs", "IT jobs", "hiring", "work at Isarva", "software engineering jobs"],
  url: "/careers",
  image: "https://www.isarvait.com/isarva-og.jpg",
});

export default function CareersLayout({ children }) {
  return <>{children}</>;
}
