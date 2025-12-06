"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [session, setSession] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      // In a real implementation, you would fetch session details from your backend
      // This is just a placeholder to simulate fetching session data
      setTimeout(() => {
        setSession({
          id: sessionId,
          amount_total: 2400, // $24.00 in cents
          currency: "usd",
          customer_email: "user@example.com",
        });
        setIsLoading(false);
      }, 1000);
    } else {
      setIsLoading(false);
    }
  }, [sessionId]);

  // Don't render anything during SSR or if there's no session ID
  if (!sessionId) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 mb-8 text-center text-[#64748B]">
        Order details will be available after payment processing.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 mb-8 text-center text-[#64748B]">
        Loading order details...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-8">
      {session ? (
        <>
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#64748B]">Transaction ID</span>
            <span className="font-mono text-sm">{session.id}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#64748B]">Amount</span>
            <span className="font-bold">${(session.amount_total / 100).toFixed(2)} {session.currency.toUpperCase()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#64748B]">Email</span>
            <span>{session.customer_email}</span>
          </div>
        </>
      ) : (
        <p className="text-center text-[#64748B]">
          Order details will be available shortly.
        </p>
      )}
    </div>
  );
}