import "./globals.css";
import type { Metadata } from "next";
import React from "react";

//pulls inter font from google
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chapter 2 and 3",
  description: "Using Nextjs 13.2"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
