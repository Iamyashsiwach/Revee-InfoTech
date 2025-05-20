/**
 * Main layout component for the Revee InfoTech website
 * This file defines the root layout that wraps all pages in the application
 */
import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";

// Configure Poppins font for headings with specific weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

// Configure Open Sans font for body text with specific weights
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
});

// Define global metadata for SEO
export const metadata: Metadata = {
  title: "Revee InfoTech - Enterprise Network Solutions",
  description: "Professional network integration services for enterprises",
  keywords: ["network integration", "IT infrastructure", "enterprise networking", "network security"],
};

/**
 * Root layout component that wraps all pages
 * Includes the navbar, main content area, and footer
 * @param {React.ReactNode} children - The page content to render
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Revee InfoTech",
              url: "https://reveeinfotech.com",
              logo: "https://reveeinfotech.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/revee-infotech-private-limited",
                "https://www.instagram.com/reveeinfotech/"
              ],
              contactPoint: [{
                "@type": "ContactPoint",
                telephone: "+91 8950803350",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"]
              }]
            })
          }}
        />
      </Head>
      <body className={`${poppins.variable} ${openSans.variable} font-open-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
