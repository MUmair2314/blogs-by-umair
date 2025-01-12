"use client"

import { Inter } from "next/font/google";
import "./globals.css";
;
import NavMobile from "../components/mobilenav";
import Navbar from "../components/Navbar";
import React, { useState } from "react"; // Import useState from React
import Footer from "../components/Footer";

import Particles from "../app/Particles";

const inter = Inter({
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showNav, setShowNav] = useState(false);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014]  overflow-y-scroll overflow-x-hidden`}>
        <Particles />
        <NavMobile showNav={showNav} closeNav={() => setShowNav(false)} />
        <Navbar openNav={() => setShowNav(true)} />
        
        {children}
      <Footer />
      </body>
    </html>
  );
}


