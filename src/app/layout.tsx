import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

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
      <Loader />
      <>
        <Nav />
        <body className={inter.className}>{children}</body>
        <Footer />
      </>
    </html>
  );
}
