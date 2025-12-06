"use client";

import { Card, Badge, Button } from "../../components";

export default function Templates() {
  const templates = [
    {
      name: "Minimal studio",
      badge: "Default",
      description: "Clean and professional design for creative professionals"
    },
    {
      name: "Soft gradient",
      badge: null,
      description: "Modern template with subtle color transitions"
    },
    {
      name: "Dark ledger",
      badge: null,
      description: "Classic dark theme for accounting and finance"
    }
  ];

  return (
    <div className="min-h-screen bg-mesh py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Pick the invoice layout that fits you.</h1>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Customize your invoices with professionally designed templates that match your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            // Using the new Card component
            <Card key={index} className="overflow-hidden">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
                <span className="text-gray-500">Template Preview</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#0F172A]">{template.name}</h3>
                  {template.badge && (
                    // Using the new Badge component
                    <Badge variant="pink">{template.badge}</Badge>
                  )}
                </div>
                <p className="text-[#64748B] mb-4">{template.description}</p>
                {/* Using the new Button component */}
                <Button variant="secondary" className="w-full">
                  Select Template
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}