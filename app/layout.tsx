import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { NextAuthProvider } from "./nextAuthProvider";
import { auth } from "./lib/auth";

export const metadata: Metadata = {
  title: "MZKMNK Component",
  description: "Component",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth(); // todo ssrでいいのか
  return (
    <NextAuthProvider session={session}>
        <html lang="ja">
        <body>
          {children}
        </body>
      </html>
    </NextAuthProvider>
  );
}
