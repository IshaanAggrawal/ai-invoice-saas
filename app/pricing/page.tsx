"use client";

import { useState } from "react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isYearly ? "$0" : "$0",
      period: isYearly ? "/year" : "/month",
      description: "Perfect for individuals getting started",
      features: [
        "Up to 5 invoices per month",
        "1 invoice template",
        "Basic client management",
        "Email support"
      ],
      featured: false,
      buttonText: "Get Started"
    },
    {
      name: "Pro Studio",
      price: isYearly ? "$240" : "$24",
      period: isYearly ? "/year" : "/month",
      description: "Best for freelancers and small studios",
      features: [
        "Unlimited invoices",
        "All invoice templates",
        "Custom templates",
        "AI-powered suggestions",
        "Advanced analytics",
        "Priority support"
      ],
      featured: true,
      buttonText: "Upgrade to Pro",
      badge: "Most popular"
    }
  ];

  return (
    <div className="min-h-screen bg-mesh py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Simple plans for serious invoicing.</h1>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include core features to get you started.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                !isYearly 
                  ? 'bg-[#EC4899] text-white' 
                  : 'text-[#64748B] hover:text-[#EC4899]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors relative ${
                isYearly 
                  ? 'bg-[#EC4899] text-white' 
                  : 'text-[#64748B] hover:text-[#EC4899]'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-[#FDF2F8] text-[#DB2777] text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`card overflow-hidden relative ${
                plan.featured 
                  ? 'ring-2 ring-[#EC4899]' 
                  : ''
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-[#EC4899] text-white text-xs font-bold px-4 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className={`p-8 pt-12 ${plan.featured ? (isYearly ? 'bg-[#EC4899]' : 'bg-white') : ''}`}>
                <h2 className={`text-2xl font-bold mb-2 ${plan.featured && !isYearly ? 'text-[#EC4899]' : plan.featured && isYearly ? 'text-white' : 'text-[#0F172A]'}`}>
                  {plan.name}
                </h2>
                <p className={`mb-6 ${plan.featured && !isYearly ? 'text-[#64748B]' : plan.featured && isYearly ? 'text-[#FDF2F8]' : 'text-[#64748B]'}`}>
                  {plan.description}
                </p>
                
                <div className="mb-8">
                  <span className={`text-4xl font-bold ${plan.featured && !isYearly ? 'text-[#0F172A]' : plan.featured && isYearly ? 'text-white' : 'text-[#0F172A]'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.featured && !isYearly ? 'text-[#64748B]' : plan.featured && isYearly ? 'text-[#FDF2F8]' : 'text-[#64748B]'}`}>
                    {plan.period}
                  </span>
                </div>
                
                <button 
                  className={`w-full py-3 rounded-full font-medium transition-colors ${
                    plan.featured && !isYearly
                      ? 'bg-white text-[#EC4899] border border-[#EC4899] hover:bg-[#EC4899] hover:text-white'
                      : plan.featured && isYearly
                        ? 'bg-white text-[#EC4899] hover:bg-gray-100'
                        : 'btn-primary'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
              
              <div className="p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featIndex) => (
                    <li 
                      key={featIndex} 
                      className="flex items-start"
                    >
                      <svg 
                        className={`w-5 h-5 mr-3 mt-0.5 ${plan.featured && !isYearly ? 'text-[#EC4899]' : plan.featured && isYearly ? 'text-white' : 'text-[#10B981]'}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className={plan.featured && !isYearly ? 'text-[#64748B]' : plan.featured && isYearly ? 'text-[#FDF2F8]' : 'text-[#64748B]'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}