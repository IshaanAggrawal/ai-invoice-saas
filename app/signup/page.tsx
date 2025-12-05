"use client";

import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup attempted with:", { name, email, password });
  };

  return (
    <div className="min-h-screen bg-mesh flex items-center justify-center p-4">
      <div className="card w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#0F172A] mb-2">Create your account</h1>
          <p className="text-[#64748B]">Start creating invoices in seconds</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#64748B] mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#64748B] mb-1">
              Work Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
              placeholder="you@company.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#64748B] mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-[#EC4899] focus:ring-[#EC4899] border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-[#64748B]">
              I agree to the <Link href="#" className="text-[#EC4899] hover:text-[#DB2777]">Terms of Service</Link> and <Link href="#" className="text-[#EC4899] hover:text-[#DB2777]">Privacy Policy</Link>
            </label>
          </div>

          <button
            type="submit"
            className="btn-primary w-full"
          >
            Sign up
          </button>
        </form>

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