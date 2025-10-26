import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { ScrollProgress } from "@/components/scroll-progress";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bidayati | Algerian E-Learning Platform",
  description:
    "Discover a modern Algerian e-learning experience with expert mentors, immersive courses, and flexible study plans tailored for ambitious students.",
  openGraph: {
    title: "Bidayati | Algerian E-Learning Platform",
    description:
      "Learn, grow, and succeed online with curated courses, expert mentors, and 24/7 support built for Algerian students.",
    url: "https://bidayati.example.com",
    siteName: "Bidayati",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bidayati | Algerian E-Learning Platform",
    description:
      "Transform your learning journey with expert mentors, interactive classes, and a modern LMS experience.",
  },
  metadataBase: new URL("https://bidayati.example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-transparent text-[color:var(--color-foreground)]`}
      >
        <SmoothScrollProvider>
          <ScrollProgress />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
