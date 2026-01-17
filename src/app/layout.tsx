import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { spaceGrotesk } from "./fonts";
import LenisProvider from "../components/LenisProvider";

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
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${spaceGrotesk.variable}
          antialiased
        `}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
