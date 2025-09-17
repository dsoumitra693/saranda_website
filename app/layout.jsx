import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const roboto = Roboto({
  subsets: ["latin"],
  fallback: ["Helvetica", "Arial", "sans-serif"],
  variable: "--font-roboto",
});

const redwood = localFont({
  src: "../public/fonts/Realwood Regular.otf",
  variable: "--font-redwood",
})

export const metadata = {
  title: {
    template: "%s | Saranda IITM BS",
    default: "Saranda House | IITM BS",
  },
  description: "Saranda, a house at IIT Madras BS program, fosters creativity and innovation through meetups, workshops, tech showcases, eSports, and cultural events.",
  authors: [{ name: "Sovit", url: "https://www.linkedin.com/in/5ovit/", }, { name: "Soumitra Das", url: "https://www.linkedin.com/in/soumitra-das-086640314/" }],
  creator: "Saranda WebOps Team",
  keywords: [
    'Saranda', 'House', 'IIT Madras', 'BS Program', 'Community', 'Meetups',
    'Events', 'Workshops', 'eSports', 'Cultural', 'Tech', 'Students'
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${redwood.variable}`}>
      <Head>
        <link rel="preload" href="/images/lush-forest-back.webp" as="image" />
        <link rel="preload" href="/images/lush-forest-front.webp" as="image" />
        <link rel="preload" href="/fonts/Realwood Regular.otf" as="font" type="font/otf" crossOrigin="" />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
