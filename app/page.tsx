"use client";

import Link from "next/link";
import { ArrowRight, Play, Zap, FileText, Clock, Sparkles, CheckCircle, Users, TrendingUp, Circle, Twitter, Linkedin, Facebook, Star } from "lucide-react";
import { Card, Badge } from "../components";

export default function Home() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Creation",
      description: "Generate professional invoices from simple descriptions using our advanced AI technology."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Beautiful Templates",
      description: "Choose from dozens of professionally designed templates that match your brand perfectly."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Create and send invoices in under 30 seconds, saving you hours each month."
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Describe Your Work",
      description: "Tell us what services you provided in plain English."
    },
    {
      step: "02",
      title: "AI Generates Invoice",
      description: "Our AI creates a professional invoice with accurate calculations."
    },
    {
      step: "03",
      title: "Customize & Send",
      description: "Make any adjustments and send directly to your client."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Freelance Designer",
      content: "BoltBill saves me at least 5 hours per week. The AI suggestions are incredibly accurate!"
    },
    {
      name: "Michael Chen",
      role: "Studio Owner",
      content: "My clients love the professional look of my invoices. Switching was the best decision!"
    },
    {
      name: "Emma Rodriguez",
      role: "Consultant",
      content: "The automation features alone are worth the subscription cost. Highly recommended!"
    }
  ];

  return (
    <div className="min-h-screen bg-mesh">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1">
            {/* Using the new Badge component */}
            <Badge variant="pink">AI INVOICE MAKER</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Create smart invoices in seconds, not hours.
            </h1>
            <p className="text-lg text-gray mb-8 max-w-2xl">
              BoltBill turns messy notes into tax-ready invoices with AI. Draft, preview, and send professional invoices in seconds with our intuitive builder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/builder" className="btn-primary flex items-center justify-center gap-2">
                Create invoice <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Play className="w-4 h-4" /> Watch 60s demo
              </button>
            </div>
            <p className="text-gray text-sm">
              Trusted by freelancers & studios worldwide
            </p>
          </div>
          
          {/* Right Visual */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Using the new Card component */}
              <Card className="w-80 h-96 p-6 transform rotate-3 shadow-xl">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-bold text-lg">Studio Invoice</h3>
                    <p className="text-sm text-gray-500">#INV-028</p>
                  </div>
                  {/* Using the new Badge component */}
                  <Badge variant="pink">AI Draft</Badge>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">From</p>
                    <p className="font-medium">Acme Studios</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">To</p>
                    <p className="font-medium">Global Media Inc</p>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex justify-between mb-2">
                      <span>Design Services</span>
                      <span>$4,230.00</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>20 hours @ $210/hr</span>
                      <span>Due upon receipt</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t flex justify-between font-bold">
                  <span>Total</span>
                  <span>$4,230.00</span>
                </div>
              </Card>
              
              {/* Floating elements for visual effect */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-[#FDF2F8] opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-primary opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything you need to bill smarter</h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Powerful features designed to save you time and impress your clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              // Using the new Card component
              <Card key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FDF2F8] text-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-gray">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get paid faster in 3 simple steps</h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Our streamlined process makes invoicing effortless and professional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              // Using the new Card component
              <Card key={index} className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-gray">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Loved by freelancers and businesses</h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Join thousands of satisfied users who save hours each week.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              // Using the new Card component
              <Card key={index} className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-gray">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-[#FDF2F8]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to save hours on invoicing?</h2>
            <p className="text-lg text-gray mb-8">
              Join thousands of professionals who trust BoltBill for their billing needs.
            </p>
            <Link href="/signup" className="btn-primary inline-flex items-center gap-2">
              Get started free <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-sm text-gray mt-4">No credit card required · Free forever plan</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Circle className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="text-xl font-bold">BoltBill</span>
              </div>
              <p className="text-[#94A3B8] max-w-md mb-6">
                AI-powered invoicing for freelancers and small businesses. Create, send, and track invoices in seconds.
              </p>
              <div className="flex space-x-4">
                <Twitter className="w-5 h-5 text-[#94A3B8] hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-[#94A3B8] hover:text-white cursor-pointer" />
                <Facebook className="w-5 h-5 text-[#94A3B8] hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Product</h3>
              <ul className="space-y-4">
                <li><Link href="/features" className="text-[#94A3B8] hover:text-white">Features</Link></li>
                <li><Link href="/templates" className="text-[#94A3B8] hover:text-white">Templates</Link></li>
                <li><Link href="/pricing" className="text-[#94A3B8] hover:text-white">Pricing</Link></li>
                <li><Link href="/integrations" className="text-[#94A3B8] hover:text-white">Integrations</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Resources</h3>
              <ul className="space-y-4">
                <li><Link href="/blog" className="text-[#94A3B8] hover:text-white">Blog</Link></li>
                <li><Link href="/help" className="text-[#94A3B8] hover:text-white">Help Center</Link></li>
                <li><Link href="/support" className="text-[#94A3B8] hover:text-white">Support</Link></li>
                <li><Link href="/api" className="text-[#94A3B8] hover:text-white">API Docs</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Company</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-[#94A3B8] hover:text-white">About</Link></li>
                <li><Link href="/careers" className="text-[#94A3B8] hover:text-white">Careers</Link></li>
                <li><Link href="/contact" className="text-[#94A3B8] hover:text-white">Contact</Link></li>
                <li><Link href="/privacy" className="text-[#94A3B8] hover:text-white">Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#1E293B] text-center text-[#94A3B8] text-sm">
            <p>© {new Date().getFullYear()} BoltBill. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}