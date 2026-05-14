import CaseStudiesClient from "./CaseStudiesClient";

export const metadata = {
  title: "Case Studies | Isarva Infotech",
  description: "Discover how businesses across industries are transforming their operations and scaling efficiently with Isarva software solutions.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
