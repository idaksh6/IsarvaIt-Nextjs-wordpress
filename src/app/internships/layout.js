import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Internship Program - Launch Your Tech Career",
  description: "Join the Isarva Infotech Internship Program. Gain hands-on experience with real-world projects, mentorship from industry experts, and accelerate your professional growth in web and software development.",
  keywords: ["internship", "tech internship", "software developer internship", "student programs", "career launch", "Isarva internship"],
  url: "/internships",
  image: "https://www.isarvait.com/isarva-og.jpg",
});

export default function InternshipsLayout({ children }) {
  return <>{children}</>;
}
