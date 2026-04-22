import { Syne, DM_Sans } from "next/font/google";

export const metadata = {
  title: "Channel Partner Program | Isarva Infotech",
  description: "Join Isarva's Channel Partner Program — scale your business and deliver enterprise digital solutions without building an in-house team.",
  keywords: "channel partner, business partnership, IT outsourcing partner, Isarva Infotech, digital solutions partner",
  robots: "noindex, nofollow",
};

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${syne.variable} ${dmSans.variable} font-sans bg-gradient-to-br from-[#EEF2FF] via-[#F0FDF4] to-[#FFF7ED] text-[#1E1B4B] min-h-screen selection:bg-[#6366F1] selection:text-white`}>
      {children}
    </div>
  );
}
