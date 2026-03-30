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
    "MOsAIciSM Lab at Korea University (고려대학교 배태정 연구실) — Decoding Somatic Mosaicism with AI and Multi-Omics. 체세포 모자이시즘, 멀티오믹스, 생물정보학 연구.",
  keywords: ["somatic mosaicism", "genomic analysis", "Korea University", "Taejeong Bae", "bioinformatics", "multi-omics", "foundation model", "somatic mutation", "MOsAIciSM", "고려대학교", "배태정", "체세포 모자이시즘", "체세포 돌연변이", "생물정보학", "멀티오믹스", "고려대 연구실"],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "MOsAIciSM Lab @ Korea University",
    description: "Decoding Somatic Mosaicism with AI and Multi-Omics",
    type: "website",
    locale: "en_US",
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
      <head>
        <meta name="google-site-verification" content="0F1UCQwJ6IPcdXh_mJYtOt85lg0CU_1koCdxe4th0hE" />
        <link rel="icon" type="image/png" href={`${prefix}/favicon.png`} />
        <link rel="apple-touch-icon" href={`${prefix}/favicon.png`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ResearchOrganization",
              name: "MOsAIciSM Lab",
              alternateName: "Genomic Analysis Laboratory",
              url: "https://baelab.org/",
              description: "Decoding Somatic Mosaicism with AI and Multi-Omics at Korea University",
              parentOrganization: {
                "@type": "CollegeOrUniversity",
                name: "Korea University",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Seoul",
                addressCountry: "KR",
                streetAddress: "Hana Science Hall B, Room 569A",
              },
              member: {
                "@type": "Person",
                name: "Taejeong Bae",
                jobTitle: "Associate Professor",
                sameAs: "https://scholar.google.com/citations?user=dvwtc1kAAAAJ&hl=en",
              },
              knowsAbout: ["somatic mosaicism", "somatic mutation", "whole genome sequencing", "multi-omics", "bioinformatics", "foundation model"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header basePath={prefix} />
        <main className="flex-1">{children}</main>
        <Footer basePath={prefix} />
      </body>
    </html>
  );
}
