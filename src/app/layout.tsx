import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import prefix from "@/lib/prefix";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MOsAIciSM Lab @ KU",
    template: "%s | MOsAIciSM Lab @ KU",
  },
  description:
    "MOsAIciSM Lab at Korea University - Decoding Somatic Mosaicism with AI and Multi-Omics.",
  icons: {
    icon: `${prefix}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header basePath={prefix} />
        <main className="flex-1">{children}</main>
        <Footer basePath={prefix} />
      </body>
    </html>
  );
}
