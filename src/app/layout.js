import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "NexifyStudio — Premium Web Design & Development Agency",
  description:
    "We build stunning, high-performance websites, web apps, and eCommerce platforms that drive real business results. Next.js, React, WordPress specialists.",
  keywords: "web design agency, web development, Next.js, eCommerce, WordPress, React",
  openGraph: {
    title: "NexifyStudio — Premium Web Design & Development Agency",
    description: "We build stunning websites and web apps that drive results.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} antialiased text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
