import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "BoltBill - AI Invoicing SaaS",
  description: "Create smart invoices in seconds, not hours",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased min-h-screen bg-mesh font-sans">
          <Navbar />
          
          <main className="max-w-7xl mx-auto">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}