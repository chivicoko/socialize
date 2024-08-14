import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "./head";
import Navbar from "@/components/navbar/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "socialize - Share Your Thoughts And Events",
  description: "The one place you can share your events, and thoughts about anything, with anyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head />
        <body className={`${inter.className} bg-slate-100`}>
          <Navbar />
          <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl-64">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}