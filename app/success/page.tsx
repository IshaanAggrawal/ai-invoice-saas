import Link from "next/link";
import { Card, Button } from "../../components";
import { CheckCircle } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import the client component
const SuccessContent = dynamic(() => import('./SuccessContent'), {
  loading: () => <div className="bg-gray-50 rounded-lg p-6 mb-8 text-center text-[#64748B]">Loading order details...</div>,
  ssr: true // Enable SSR for better performance
});

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-mesh py-12">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#0F172A] mb-4">Payment Successful!</h1>
          <p className="text-[#64748B] max-w-md mx-auto">
            Thank you for your purchase. Your payment has been processed successfully.
          </p>
        </div>

        <Card className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Order Details</h2>
            <p className="text-[#64748B]">Your subscription is now active</p>
          </div>

          <SuccessContent />

          <div className="space-y-4">
            <Link href="/dashboard" className="block">
              <Button variant="primary" className="w-full py-3">
                Go to Dashboard
              </Button>
            </Link>
            <Link href="/profile" className="block">
              <Button variant="secondary" className="w-full py-3">
                View Subscription
              </Button>
            </Link>
          </div>
        </Card>

        <div className="text-center mt-8">
          <p className="text-[#64748B]">
            Having trouble?{" "}
            <Link href="/support" className="text-[#EC4899] hover:underline">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}