import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/skills.css";
import "../styles/scrollwheel.css";
import "../styles/lenis.css";
import { spaceGrotesk } from "./fonts";
import Script from "next/script";
import Cursor from "../components/Cursor";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faris — Software Developer",
  description: "Building premium digital experiences with motion & clarity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-67K7E3VGGL"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-67K7E3VGGL');
          `}
        </Script>
      </head>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${spaceGrotesk.variable}
          antialiased
        `}
      >
        <Cursor />
        {children}
      </body>
    </html>
  );
}
