import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Overlooked Strategy Transforming Wealth Management Client Acquisition in 2025 | Business Insights",
  description: "While most financial advisors throw capital at expensive SEO and PPC ads, elite wealth managers achieve sustainable growth using precision data lists. Here's what you need to know.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-josefin-sans)' }}
      >
        {children}
      </body>
    </html>
  );
}
