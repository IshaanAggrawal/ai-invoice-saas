"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { Card, Button } from "../../components";
import { LogOut, Mail, User, Calendar, CreditCard } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";

export default function ProfilePage() {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/login');
    }
  }, [isSignedIn, isLoaded, router]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-mesh flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EC4899]"></div>
      </div>
    );
  }

  if (!isSignedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-mesh py-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#0F172A]">Profile</h1>
          <Link href="/dashboard" className="text-[#64748B] hover:text-[#0F172A]">
            Back to Dashboard
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="flex flex-col items-center mb-6">
                {user?.imageUrl && (
                  <img 
                    src={user.imageUrl} 
                    alt={user.fullName || "User"} 
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                )}
                <h2 className="text-xl font-bold text-[#0F172A]">
                  {user?.fullName || "User"}
                </h2>
                <p className="text-[#64748B]">
                  {user?.emailAddresses[0]?.emailAddress}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#64748B]" />
                  <div>
                    <p className="text-sm text-[#64748B]">Email</p>
                    <p className="text-[#0F172A]">
                      {user?.emailAddresses[0]?.emailAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-[#64748B]" />
                  <div>
                    <p className="text-sm text-[#64748B]">Member since</p>
                    <p className="text-[#0F172A]">
                      {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <SignOutButton>
                  <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </Button>
                </SignOutButton>
              </div>
            </Card>
          </div>

          {/* Account Settings */}
          <div className="lg:col-span-2">
            <Card className="p-6 mb-8">
              <h2 className="text-xl font-bold text-[#0F172A] mb-6">Account Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#64748B] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={user?.fullName || ""}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#64748B] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={user?.emailAddresses[0]?.emailAddress || ""}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold text-[#0F172A] mb-6">Billing Information</h2>
              
              <div className="flex items-center gap-3 p-4 bg-[#F8FAFC] rounded-lg">
                <CreditCard className="w-6 h-6 text-[#64748B]" />
                <div>
                  <p className="font-medium text-[#0F172A]">Free Plan</p>
                  <p className="text-sm text-[#64748B]">Upgrade to unlock all features</p>
                </div>
              </div>

              <Button variant="primary" className="w-full mt-6">
                Upgrade Plan
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}