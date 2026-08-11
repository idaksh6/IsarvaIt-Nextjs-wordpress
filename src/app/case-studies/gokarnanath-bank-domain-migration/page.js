import GokarnanathBankCaseStudyClient from "./GokarnanathBankCaseStudyClient";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Gokarnanath Bank Domain Migration Case Study | Isarva",
  description: "How Isarva successfully migrated Gokarnanath Bank's domain from .com to .bank.in in compliance with RBI and IDRBT guidelines.",
  url: "/case-studies/gokarnanath-bank-domain-migration",
  noIndex: false,
});

export default function GokarnanathBankCaseStudyPage() {
  return <GokarnanathBankCaseStudyClient />;
}
