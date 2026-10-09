import type { Metadata } from "next";
import { Oswald, Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", weight: ["500", "700"] });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
export const metadata: Metadata = {
  title: "Chitranjan Vishwakarma | Data Analyst",
  description: "Data analyst portfolio: Power BI, Python, SQL, DAX and data storytelling.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${syne.variable} ${grotesk.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
