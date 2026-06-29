import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aikya Labs | ERP, CRM, Website Development & IT Solutions",
  description: "Aikya Labs - Your trusted partner for ERP solutions, CRM systems, website development, social media management, and IT consulting. Transform your business with our innovative technology solutions.",
  keywords: "ERP, CRM, Website Development, Social Media Management, IT Solutions, Healthcare ERP, Custom Software, Aikya Labs",
  authors: [{ name: "Aikya Labs" }],
  openGraph: {
    title: "Aikya Labs | Smart IT Solutions for Business Growth",
    description: "Transform your business with our ERP, CRM, and custom software solutions. Trusted by leading healthcare providers.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0f172a]">{children}</body>
    </html>
  );
}
