import SupportSystemCaseStudyClient from "./SupportSystemCaseStudyClient";

export const metadata = {
  title: "Case Study: Transforming a Web Design Company | Isarva ISS",
  description: "How Isarva ISS Transformed a Web Design Company from Manual Chaos to a Structured, Data-Driven Workflow.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function SupportSystemCaseStudyPage() {
  return <SupportSystemCaseStudyClient />;
}
