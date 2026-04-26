import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Payli — The Bill Without the Wait",
  description:
    "Payli powers QR-based pay-at-table and order-and-pay for modern restaurants. Faster table turnover, happier guests, more revenue.",
  keywords: ["QR payment", "pay at table", "restaurant technology", "fintech", "digital menu"],
  openGraph: {
    title: "Payli — The Bill Without the Wait",
    description: "QR-powered payments for modern restaurants.",
    url: "https://payli.tech",
    siteName: "Payli",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payli — The Bill Without the Wait",
    description: "QR-powered payments for modern restaurants.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="min-h-dvh flex flex-col bg-darkest text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
