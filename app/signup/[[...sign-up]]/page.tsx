"use client";

import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-mesh flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <SignUp 
          fallbackRedirectUrl="/dashboard"
          signInForceRedirectUrl="/dashboard"
          routing="hash"
        />
        <div className="mt-6 text-center">
          <p className="text-sm text-[#64748B]">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-[#EC4899] hover:text-[#DB2777]">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}