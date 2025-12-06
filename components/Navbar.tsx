"use client";

import Link from "next/link";
import { Circle, LayoutDashboard, FileText, Zap, Palette, LogOut } from "lucide-react";
import { useUser, SignOutButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  // Handle cases where Clerk isn't properly configured
  let isSignedIn = false;
  let user = null;
  
  try {
    const clerkUser = useUser();
    isSignedIn = clerkUser.isSignedIn || false;
    user = clerkUser.user || null;
  } catch (error) {
    // Clerk not properly configured, continue with defaults
    console.warn("Clerk not properly configured:", error);
  }

  return (
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
        {isSignedIn ? (
          <>
            <Link href="/dashboard" className="text-[#64748B] hover:text-[#0F172A] flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Link>
            <Link href="/builder" className="text-[#64748B] hover:text-[#0F172A] flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Invoice Builder
            </Link>
            <Link href="/templates" className="text-[#64748B] hover:text-[#0F172A] flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Templates
            </Link>
            <Link href="/automations" className="text-[#64748B] hover:text-[#0F172A] flex items-center gap-2">
              <Zap className="w-4 h-4" />
              AI Automations
            </Link>
          </>
        ) : (
          <>
            <Link href="/pricing" className="text-[#64748B] hover:text-[#0F172A]">Pricing</Link>
            <Link href="/support" className="text-[#64748B] hover:text-[#0F172A]">Support</Link>
          </>
        )}
      </div>
      
      <div className="flex items-center space-x-4">
        {isSignedIn && user ? (
          <div className="flex items-center space-x-4">
            {/* Use Clerk's UserButton component for profile access */}
            <UserButton 
              userProfileMode="navigation"
              userProfileUrl="/profile"
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-8 h-8 rounded-full object-cover"
                }
              }}
            />
            <SignOutButton>
              <button className="text-[#64748B] hover:text-[#0F172A] flex items-center gap-1">
                <LogOut className="w-4 h-4" />
                <span className="hidden md:inline">Sign Out</span>
              </button>
            </SignOutButton>
          </div>
        ) : (
          <>
            <Link href="/login" className="text-[#64748B] hover:text-[#0F172A]">Log in</Link>
            <Link href="/signup" className="btn-primary">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  );
}