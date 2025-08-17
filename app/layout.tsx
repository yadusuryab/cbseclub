import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import Og from "@/public/og.png";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NCERT Solutions for Class 10 Maths PDF Updated for 2025-26 Session",
  description:
    "Download Chapterwise, Step by step NCERT Solutions for Class 10 Maths PDF for 2025 Board Exams. Class 10 Maths NCERT Solutions are prepared per CBSE marking scheme.",
  openGraph: {
    title: "NCERT Solutions for Class 10 Maths - LearnCBSE",
    description:
      "Download Chapterwise, Step by step NCERT Solutions for Class 10 Maths PDF for 2025 Board Exams. Prepared per CBSE marking scheme.",
    url: "https://learncbse.vercel.app",
    siteName: "LearnCBSE",
    type: "article",
    images: [
      {
        url: Og.src,
        width: 672,
        height: 378,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yadusuryab",
  },
  alternates: {
    canonical: "https://learncbse.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.className} ${geistMono.variable}`}>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}

          {/* JSON-LD for SEO - deferred */}
          <Script
            id="organization-json"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "LearnCBSE",
                url: "https://learncbse.vercel.app/",
                sameAs: [
                  "https://www.facebook.com/yadusuryab/",
                  "https://www.instagram.com/learncbse.in/",
                  "https://www.youtube.com/user/yadusuryab",
                  "https://in.pinterest.com/yadusuryab/",
                  "https://twitter.com/yadusuryab",
                ],
              }),
            }}
          />
          <Script
            id="faq-json"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How to master in Class 10 Maths CBSE?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Students can use the latest NCERT Class 10 Maths Solutions Books. Referring to the CBSE NCERT Solutions is enough to master Class 10 Maths.",
                    },
                  },
                ],
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
