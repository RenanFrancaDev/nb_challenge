import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartProvider from "./providers/cart";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Null Bug App",
  description: "Ecommerce challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-full flex-col pt-[100px]`}>
        <CartProvider>
          <Navbar />
          <main className=" flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
