import type { Metadata } from "next";
import { League_Gothic, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import LoadCurtain from "@/components/LoadCurtain";

const league = League_Gothic({
  subsets: ["latin"],
  variable: "--font-league",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project Mood — Melbourne",
  description:
    "A bathhouse, a training club, and a space to feel better — all under one roof in Southbank.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${league.variable} ${jakarta.variable}`}>
      <body className="bg-paper text-ink font-body">
        <LoadCurtain />
        <Cursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
