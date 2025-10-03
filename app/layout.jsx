'use client';
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { usePathname } from 'next/navigation';


const roboto = Roboto({
  subsets: ["latin"],
  fallback: ["Helvetica", "Arial", "sans-serif"],
  variable: "--font-roboto",
});

const redwood = localFont({
  src: "../public/fonts/Realwood Regular.otf",
  variable: "--font-redwood",
})


export const revalidate = 10;

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const excludedRoutes = ['/admin', '/coming-soon', '/not-found'];
  const shouldExcludeLayout = excludedRoutes.some(route => pathname.startsWith(route));

  return (
    <html lang="en" className={`${roboto.variable} ${redwood.variable}`}>
      <Head>
        <link rel="preload" href="/images/lush-forest-back.webp" as="image" />
        <link rel="preload" href="/images/lush-forest-front.webp" as="image" />
        <link rel="preload" href="/fonts/Realwood Regular.otf" as="font" type="font/otf" crossOrigin="" />
      </Head>
      <body>
        {shouldExcludeLayout ? children : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
