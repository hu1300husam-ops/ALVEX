import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/manrope/wght.css";
import "@fontsource-variable/inter/wght.css";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alvex.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ALVEX — Your Business Bridge to China",
    template: "%s · ALVEX",
  },
  description:
    "ALVEX supports international buyers in China with sourcing, supplier verification, negotiation, factory coordination and trade support, from our base in Yiwu.",
  applicationName: "ALVEX",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "ALVEX",
    title: "ALVEX — Your Business Bridge to China",
    description: "Your Team on the Ground in China. Sourcing, verification and trade support from Yiwu.",
    url: "/",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F7F8FA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
