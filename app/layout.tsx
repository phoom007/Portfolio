import type { Metadata } from "next";
import "./globals.css";
import "./portfolio-media.css";
import "./responsive.css";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.phoom007.workers.dev"),
  title: { default: "ภูวนาท ทานาลาด — Portfolio", template: "%s — ภูวนาท ทานาลาด" },
  description: "พอร์ตโฟลิโอของภูวนาท ทานาลาด นักบริหารรุ่นใหม่ที่สนใจการวางแผน ออกแบบ สร้างระบบ และเทคโนโลยี",
  keywords: ["ภูวนาท ทานาลาด", "Portfolio", "บริหารธุรกิจ", "Kasetsart University", "Horplus"],
  alternates: {
    canonical: "https://portfolio.phoom007.workers.dev",
  },
  openGraph: {
    title: "ภูวนาท ทานาลาด — Portfolio",
    description: "พอร์ตโฟลิโอของภูวนาท ทานาลาด นักบริหารรุ่นใหม่ที่สนใจการวางแผน ออกแบบ สร้างระบบ และเทคโนโลยี",
    url: "https://portfolio.phoom007.workers.dev",
    siteName: "Phuwanat Tanalad Portfolio",
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" data-palette="blue">
      <body>
        <BackgroundCanvas />
        <div className="ambient ambient-a" aria-hidden="true" />
        <div className="ambient ambient-b" aria-hidden="true" />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
