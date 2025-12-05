export default function Automations() {
  const features = [
    {
      name: "Receipt reader",
      badge: "Coming soon",
      description: "Upload receipts and automatically extract line items for invoices"
    },
    {
      name: "Quote → Invoice",
      badge: null,
      description: "Convert approved quotes directly into invoices with one click"
    },
    {
      name: "Smart reminders",
      badge: null,
      description: "Automatically send payment reminders based on due dates"
    }
  ];

  return (
    <div className="min-h-screen bg-mesh py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Let BoltBill handle the boring billing work.</h1>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Automate repetitive tasks and focus on growing your business with our AI-powered features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-8 text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-500 text-2xl">⚡</span>
              </div>
              <div className="flex justify-center mb-3">
                <h3 className="text-xl font-bold text-[#0F172A]">{feature.name}</h3>
                {feature.badge && (
                  <span className="badge ml-3 bg-[#EFF6FF] text-[#3B82F6]">{feature.badge}</span>
                )}
              </div>
              <p className="text-[#64748B]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}