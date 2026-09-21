import CybersecurityPremium from "./CybersecurityPremium";
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Cybersecurity Services | VAPT, DPDP Compliance & Data Privacy",
  description:
    "Protect your business with comprehensive cybersecurity services: VAPT, web application security, API security, mobile app security, cloud security, DPDP compliance, network security, incident response and cybersecurity consulting.",
  image: "/cybersecurity_hero_banner.jpg",
  url: "/service/cybersecurity-solutions",
  keywords: [
    "cybersecurity services",
    "VAPT",
    "penetration testing",
    "vulnerability assessment",
    "DPDP compliance",
    "data privacy",
    "web application security",
    "cloud security",
    "network security",
    "incident response",
    "managed security",
    "vCISO",
  ],
});

export default function CybersecurityPage() {
  return <CybersecurityPremium />;
}