"use client";

import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-mesh flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ? (
          <SignIn 
            fallbackRedirectUrl="/dashboard"
            signUpForceRedirectUrl="/dashboard"
            routing="hash"
          />
        ) : (
          <div className="card p-8 text-center">
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">Configuration Error</h2>
            <p className="text-[#64748B] mb-6">
              Clerk authentication is not properly configured. Please check your environment variables.
            </p>
            <Link href="/" className="btn-primary inline-block">
              Return to Home
            </Link>
          </div>
        )}
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