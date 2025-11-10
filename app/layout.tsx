import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";
import CartProvider from "@/providers/cart-context";
import Footer from "@/components/Footer";

const dmmono = DM_Mono({
  weight:'400',
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: "AI Library",
  description: "A curated collection of books to learn about DS,ML,& AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${dmmono.className} flex min-h-screen flex-col`}>
        
        <CartProvider>
          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </CartProvider>

      </body>
    </html>
  );
}
