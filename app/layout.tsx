import type { Metadata } from "next";
import { Gochi_Hand, Indie_Flower } from "next/font/google";
import "./globals.css";
import FireworksPos from "@/components/FireworksPos";

const gochiHand = Gochi_Hand({
  variable: "--font-gochi-hand",
  weight: "400",
});

const indieFlower = Indie_Flower({
  variable: "--font-indie-flower",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portfolio de PHUNG William",
  description: "Portfolio de PHUNG William",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${indieFlower.variable} ${gochiHand.variable} antialiased bg-linear-to-br from-light-yellow to-yellow min-h-screen`}
      >
        <FireworksPos />
        {children}
      </body>
    </html>
  );
}
