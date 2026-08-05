import TrainingProgramsPremium from "./TrainingProgramsPremium";
import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Training Programs",
  description: "Hands-on industry-ready training programs in CRM, HRMS, Web & Backend Development, Frontend & UI/UX, Data & Cloud Engineering, and Digital Marketing & AI. Enroll today.",
  keywords: ["training programs", "internship", "coding bootcamp", "IT training", "Isarva Academy"],
  url: "/training-programs",
  image: "https://www.isarvait.com/isarva-og.png",
  noIndex: false, // Make it indexable on search engines
});

export default function TrainingProgramsPage() {
  return <TrainingProgramsPremium />;
}
