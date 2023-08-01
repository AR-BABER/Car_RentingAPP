import { relative } from "path";
import "./globals.css";
import type { Metadata } from "next";
import { Footer, NavBar } from "@/components";
import { Router } from "next/router";
export const metadata: Metadata = {
  title: "car world",
  description: "Get your booking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
