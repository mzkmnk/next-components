import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import {Noto_Sans} from 'next/font/google';

export const metadata: Metadata = {
  title: "MZKMNK Component",
  description: "Component",
};

const NOTO_SANS = Noto_Sans({
    subsets:['latin']
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="ja">
        <body className={NOTO_SANS.className}>
          {children}
        </body>
      </html>
  );
}
