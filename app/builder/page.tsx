"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

export default function InvoiceBuilder() {
  const [businessInfo, setBusinessInfo] = useState({
    name: "Acme Studios",
    email: "hello@acme.com",
    address: "123 Creative Street",
    city: "San Francisco, CA 94103",
  });

  const [clientInfo, setClientInfo] = useState({
    name: "Global Media Inc",
    email: "billing@media.com",
    address: "456 Business Ave",
    city: "New York, NY 10001",
  });

  const [lineItems, setLineItems] = useState([
    { description: "Design Services", quantity: 20, rate: 210, amount: 4200 },
  ]);

  const [invoiceDetails, setInvoiceDetails] = useState({
    invoiceNumber: "INV-028",
    date: "2023-06-15",
    dueDate: "2023-06-30",
  });

  const handleBusinessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBusinessInfo({ ...businessInfo, [name]: value });
  };

  const handleClientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientInfo({ ...clientInfo, [name]: value });
  };

  const handleLineItemChange = (index: number, field: string, value: string) => {
    const updatedItems = [...lineItems];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    
    // Recalculate amount if quantity or rate changes
    if (field === "quantity" || field === "rate") {
      const quantity = parseFloat(updatedItems[index].quantity.toString()) || 0;
      const rate = parseFloat(updatedItems[index].rate.toString()) || 0;
      updatedItems[index].amount = quantity * rate;
    }
    
    setLineItems(updatedItems);
  };

  const addLineItem = () => {
    setLineItems([...lineItems, { description: "", quantity: 1, rate: 0, amount: 0 }]);
  };

  const subtotal = lineItems.reduce((sum, item) => sum + item.amount, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-mesh py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Invoice Builder</h1>
        <p className="text-[#64748B] mb-8">Create professional invoices in minutes</p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Editor Panel */}
          <div className="flex-1">
            <div className="card p-6 mb-6">
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">Your Business</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#64748B] mb-1">Business Name</label>
                  <input
                    type="text"
                    name="name"
                    value={businessInfo.name}
                    onChange={handleBusinessChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#64748B] mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={businessInfo.email}
                    onChange={handleBusinessChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#64748B] mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={businessInfo.address}
                    onChange={handleBusinessChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#64748B] mb-1">City, State ZIP</label>
                  <input
                    type="text"
                    name="city"
                    value={businessInfo.city}
                    onChange={handleBusinessChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                  />
                </div>
              </div>
            </div>

            <div className="card p-6 mb-6">
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">Client Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#64748B] mb-1">Client Name</label>
                  <input
                    type="text"
                    name="name"
                    value={clientInfo.name}
                    onChange={handleClientChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#64748B] mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={clientInfo.email}
                    onChange={handleClientChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#64748B] mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={clientInfo.address}
                    onChange={handleClientChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#64748B] mb-1">City, State ZIP</label>
                  <input
                    type="text"
                    name="city"
                    value={clientInfo.city}
                    onChange={handleClientChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                  />
                </div>
              </div>
            </div>

            <div className="card p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-[#0F172A]">Line Items</h2>
                <button 
                  onClick={addLineItem}
                  className="btn-secondary text-sm"
                >
                  Add Item
                </button>
              </div>
              
              <div className="space-y-4">
                {lineItems.map((item, index) => (
                  <div key={index} className="grid grid-cols-12 gap-3 items-end">
                    <div className="col-span-5">
                      <label className="block text-sm font-medium text-[#64748B] mb-1">Description</label>
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => handleLineItemChange(index, "description", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#64748B] mb-1">Qty</label>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleLineItemChange(index, "quantity", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#64748B] mb-1">Rate</label>
                      <input
                        type="number"
                        value={item.rate}
                        onChange={(e) => handleLineItemChange(index, "rate", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#64748B] mb-1">Amount</label>
                      <input
                        type="text"
                        value={item.amount.toFixed(2)}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="mt-4 flex items-center gap-2 text-[#EC4899] font-medium hover:opacity-90">
                <Sparkles className="w-4 h-4" /> Suggest with AI
              </button>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="flex-1">
            <div className="sticky top-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-[#0F172A]">Live Preview</h2>
                <span className="badge badge-pink">Draft</span>
              </div>
              
              <div className="card p-8 bg-white">
                {/* Invoice Header */}
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <h1 className="text-3xl font-bold text-[#0F172A] mb-2">INVOICE</h1>
                    <p className="text-[#64748B]">#{invoiceDetails.invoiceNumber}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#64748B]">Date</p>
                    <p>{invoiceDetails.date}</p>
                    <p className="text-sm text-[#64748B] mt-2">Due Date</p>
                    <p>{invoiceDetails.dueDate}</p>
                  </div>
                </div>
                
                {/* Business and Client Info */}
                <div className="flex justify-between mb-12">
                  <div>
                    <p className="text-sm text-[#64748B] mb-1">From</p>
                    <p className="font-bold">{businessInfo.name}</p>
                    <p className="text-sm">{businessInfo.email}</p>
                    <p className="text-sm">{businessInfo.address}</p>
                    <p className="text-sm">{businessInfo.city}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#64748B] mb-1">Bill To</p>
                    <p className="font-bold">{clientInfo.name}</p>
                    <p className="text-sm">{clientInfo.email}</p>
                    <p className="text-sm">{clientInfo.address}</p>
                    <p className="text-sm">{clientInfo.city}</p>
                  </div>
                </div>
                
                {/* Line Items Table */}
                <div className="mb-8">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left pb-2">Description</th>
                        <th className="text-right pb-2">Quantity</th>
                        <th className="text-right pb-2">Rate</th>
                        <th className="text-right pb-2">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lineItems.map((item, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3">{item.description}</td>
                          <td className="py-3 text-right">{item.quantity}</td>
                          <td className="py-3 text-right">${item.rate.toFixed(2)}</td>
                          <td className="py-3 text-right">${item.amount.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Totals */}
                <div className="ml-auto w-64">
                  <div className="flex justify-between py-2">
                    <span className="text-[#64748B]">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#64748B]">Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-gray-200 font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                {/* Notes */}
                <div className="mt-12 pt-6 border-t border-gray-200">
                  <p className="text-sm text-[#64748B]">Notes</p>
                  <p className="text-sm">Thank you for your business!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}