import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} antialiased text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
