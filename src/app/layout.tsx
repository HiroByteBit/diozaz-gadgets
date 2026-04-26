import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";
import ChatBox from "@/components/ChatBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diozaz Gadgets | Premium Apple Reseller",
  description: "Official & Verified Apple Reseller in Metro Manila. iPhones, MacBooks, iPads, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <ChatBox />
        </Providers>
      </body>
    </html>
  );
}
