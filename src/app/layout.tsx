import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providor";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anekant Jain",
  description: "This is my personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-lightWhite">
      <Nav />
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
      <Footer />
    </html>
  );
}
