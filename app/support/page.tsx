"use client";

import { useState } from "react";

export default function Support() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "Is there a free plan?",
      answer: "Yes! Our Starter plan is completely free and includes up to 5 invoices per month and 1 invoice template."
    },
    {
      question: "Can I export data?",
      answer: "Absolutely. You can export your invoices and client data in PDF, CSV, and Excel formats at any time."
    },
    {
      question: "How secure is my data?",
      answer: "We take security seriously. All data is encrypted both in transit and at rest, and we comply with industry-standard security practices."
    },
    {
      question: "Can I customize invoice templates?",
      answer: "Yes, Pro Studio plan users can create custom templates with their own branding, colors, and layouts."
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer special pricing for registered non-profit organizations. Please contact our support team for more information."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-mesh py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Help, FAQs, and contact.</h1>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Get help with BoltBill or reach out to our support team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card">
                  <button
                    className="w-full flex justify-between items-center p-6 text-left"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-[#0F172A]">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-[#64748B] transform transition-transform ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {activeIndex === index && (
                    <div className="px-6 pb-6 text-[#64748B]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Contact Support</h2>
            <div className="card p-6">
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#64748B] mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                    placeholder="you@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-[#64748B] mb-1">
                    Topic
                  </label>
                  <select
                    id="topic"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                  >
                    <option>Billing inquiry</option>
                    <option>Technical support</option>
                    <option>Feature request</option>
                    <option>Account issue</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#64748B] mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}