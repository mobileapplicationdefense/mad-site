import type React from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAD - Mobile Application Defense",
  description: "We Protect. You Grow",
  openGraph: {
    title: "MAD - Mobile Application Defense",
    description: "We Protect. You Grow",
    type: "website",
    locale: "en_US",
    url: "https://www.mobileappdefense.com/",
    siteName: "MAD - Mobile Application Defense",
    images: [
      {
        url: "/mad-site-cover.png",
        width: 1200,
        height: 630,
        alt: "Mobile Application Defense",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmSans.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
