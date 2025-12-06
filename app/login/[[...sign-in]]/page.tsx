"use client";

import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-mesh flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <SignIn 
          fallbackRedirectUrl="/dashboard"
          signUpForceRedirectUrl="/dashboard"
          routing="hash"
        />
        <div className="mt-6 text-center">
          <p className="text-sm text-[#64748B]">
            Don't have an account?{' '}
            <Link href="/signup" className="font-medium text-[#EC4899] hover:text-[#DB2777]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}