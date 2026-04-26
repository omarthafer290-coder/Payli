import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020c10",
};

export const metadata: Metadata = {
  title: {
    default: "Payli — The Bill Without the Wait",
    template: "%s · Payli",
  },
  description:
    "Payli gives restaurants 15 minutes back per table with QR-based pay-at-table and order-and-pay. Faster turnover, more revenue, happier guests.",
  keywords: [
    "QR payment", "pay at table", "restaurant technology", "fintech",
    "digital menu", "order and pay", "restaurant POS", "table turnover",
  ],
  authors: [{ name: "Payli Technologies LLC" }],
  openGraph: {
    title: "Payli — The Bill Without the Wait",
    description: "QR-powered payments that give restaurants 15 minutes back per table.",
    url: "https://payli.tech",
    siteName: "Payli",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payli — The Bill Without the Wait",
    description: "QR-powered payments that give restaurants 15 minutes back per table.",
    site: "@paylitech",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-dvh flex flex-col antialiased" style={{ background: "#020c10" }}>
        <Navbar />
        <main id="main-content" className="flex-1 pt-[68px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
