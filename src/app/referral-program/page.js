import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";
import ReferralProgramClient from "./ReferralProgramClient";

export const metadata = generateSEOMetadata({
  title: "Referral Program — Earn Rewards for Business Referrals",
  description:
    "Join the iSarva Referral Program and earn rewards for every qualified business you refer. We handle qualification, demos, follow-ups, and deployment — you share your link and get paid.",
  keywords: [
    "referral program",
    "business referral",
    "HRMS referral",
    "CRM referral",
    "website development referral",
    "digital marketing referral",
    "iSarva referral rewards",
  ],
  url: "/referral-program",
  image: "https://www.isarvait.com/isarva-og.png",
});

export default function ReferralProgramPage() {
  return <ReferralProgramClient />;
}
