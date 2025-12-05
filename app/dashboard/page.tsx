"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

export default function Dashboard() {
  // Dummy data
  const stats = [
    { title: "This Month", value: "$32,450", change: "+18% vs last month", positive: true },
    { title: "Open Invoices", value: "7", subtitle: "3 due this week" },
    { title: "Active Clients", value: "24", subtitle: "Clients invoiced in last 90 days" },
  ];

  const invoices = [
    { id: "#INV-028", client: "Global Media Inc", amount: "$4,230.00", status: "Paid" },
    { id: "#INV-027", client: "Creative Solutions", amount: "$2,850.00", status: "Pending" },
    { id: "#INV-026", client: "Tech Innovations", amount: "$5,400.00", status: "Paid" },
    { id: "#INV-025", client: "Design Studio", amount: "$1,950.00", status: "Pending" },
    { id: "#INV-024", client: "Marketing Pro", amount: "$3,200.00", status: "Paid" },
  ];

  return (
    <div className="min-h-screen bg-mesh py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold text-[#0F172A]">Dashboard</h1>
            <p className="text-[#64748B]">Stay on top of invoices, clients, and revenue.</p>
          </div>
          <Link href="/builder" className="btn-primary mt-4 md:mt-0 flex items-center gap-2">
            <Plus className="w-4 h-4" /> New invoice
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-[#64748B] text-sm font-medium mb-2">{stat.title}</h3>
              <p className="text-3xl font-bold text-[#0F172A] mb-2">{stat.value}</p>
              {stat.change && (
                <p className={`text-sm ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </p>
              )}
              {stat.subtitle && (
                <p className="text-sm text-[#64748B]">{stat.subtitle}</p>
              )}
            </div>
          ))}
        </div>

        {/* Recent Invoices */}
        <div className="card p-6">
          <h2 className="text-xl font-bold text-[#0F172A] mb-6">Recent Invoices</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-[#64748B] text-sm border-b">
                  <th className="pb-4">Invoice ID</th>
                  <th className="pb-4">Client</th>
                  <th className="pb-4">Amount</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 font-medium">{invoice.id}</td>
                    <td className="py-4">{invoice.client}</td>
                    <td className="py-4">{invoice.amount}</td>
                    <td className="py-4">
                      <span className={invoice.status === "Paid" ? "status-paid" : "status-pending"}>
                        {invoice.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}