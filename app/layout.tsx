import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Circle } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-mesh`}
      >
        <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#EC4899] flex items-center justify-center">
                <Circle className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-xl font-bold">BoltBill</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/dashboard" className="text-[#64748B] hover:text-[#0F172A]">Dashboard</Link>
            <Link href="/builder" className="text-[#64748B] hover:text-[#0F172A]">Invoice Builder</Link>
            <Link href="/templates" className="text-[#64748B] hover:text-[#0F172A]">Templates</Link>
            <Link href="/automations" className="text-[#64748B] hover:text-[#0F172A]">AI Automations</Link>
            <Link href="/pricing" className="text-[#64748B] hover:text-[#0F172A]">Pricing</Link>
            <Link href="/support" className="text-[#64748B] hover:text-[#0F172A]">Support</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-[#64748B] hover:text-[#0F172A]">Log in</Link>
            <Link href="/signup" className="btn-primary">Sign up</Link>
          </div>
        </nav>
        
        <main className="max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}