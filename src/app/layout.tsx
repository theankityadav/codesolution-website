import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeSolution - End-to-End Digital Solutions",
  description:
    "CodeSolution delivers cutting-edge technology solutions including UI/UX Design, Frontend & Backend Development, DevOps, and Custom Software Development.",
  icons: {
    icon: "/icon.png",
  },
  keywords: [
    "web development",
    "software development",
    "UI/UX design",
    "React",
    "Next.js",
    "Python",
    "Node.js",
    "DevOps",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
