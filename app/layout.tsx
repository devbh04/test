import type { Metadata, Viewport } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Work_Sans({
  weight: '400',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VishwaCTF'25",
  description: "CyberCell VIIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} bg-black text-white max-w-full`}
      >
        {children}
      </body>
    </html>
  );
}
