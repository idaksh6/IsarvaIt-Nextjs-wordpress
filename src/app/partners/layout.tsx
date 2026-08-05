import { generateMetadata as generateSEOMetadata } from "../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Channel Partner Program",
  description: "Join Isarva's Channel Partner Program — scale your business and deliver enterprise digital solutions without building an in-house team.",
  keywords: ["channel partner", "business partnership", "IT outsourcing partner", "Isarva Infotech", "digital solutions partner"],
  url: "/partners",
  image: "https://www.isarvait.com/isarva-og.png",
});

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans bg-gradient-to-br from-[#EEF2FF] via-[#F0FDF4] to-[#FFF7ED] text-[#1E1B4B] min-h-screen selection:bg-[#6366F1] selection:text-white">
      {children}
    </div>
  );
}
