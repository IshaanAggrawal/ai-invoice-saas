"use client";

import Link from "next/link";
import { Card, Button } from "../../components";
import { XCircle } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-mesh py-12">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <XCircle className="w-12 h-12 text-red-500" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#0F172A] mb-4">Payment Cancelled</h1>
          <p className="text-[#64748B] max-w-md mx-auto">
            Your payment was cancelled. No charges have been made to your account.
          </p>
        </div>

        <Card className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Need Help?</h2>
            <p className="text-[#64748B]">
              If you encountered any issues during checkout, our support team is here to help.
            </p>
          </div>

          <div className="space-y-4">
            <Link href="/pricing" className="block">
              <Button variant="primary" className="w-full py-3">
                Try Again
              </Button>
            </Link>
            <Link href="/support" className="block">
              <Button variant="secondary" className="w-full py-3">
                Contact Support
              </Button>
            </Link>
          </div>
        </Card>

        <div className="text-center mt-8">
          <p className="text-[#64748B]">
            Want to learn more?{" "}
            <Link href="/dashboard" className="text-[#EC4899] hover:underline">
              Go to Dashboard
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}