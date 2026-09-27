"use client";

import Image from "next/image";
import { useState } from "react";

const interestsList = [
  "Website Design",
  "SaaS Design",
  "Mobile App Design",
  "Web Development",
  "Graphic Design",
];

export default function Contact() {
  // Hook para i-track kung aling mga buttons ang naka-select
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  // Function para mag-select/deselect ng interest
  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-background border-t border-border/40">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-16">
        
        {/* ── Left Side: Profile & Status Card ── */}
        <div className="w-full lg:w-1/3">
          <div className="rounded-3xl border border-border bg-background-card p-10 flex flex-col items-center text-center shadow-lg">
            
            {/* Status Pill with Pulsing Dot */}
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-medium text-green-400 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for Freelance Projects
            </span>
            
            {/* Profile Image */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-border mb-6">
              <Image src="/images/profile.png" alt="Profile" fill className="object-cover" />
            </div>
            
            {/* Info */}
            <h3 className="text-2xl font-bold font-heading mb-4">Let&apos;s work together!</h3>
            
            <div className="space-y-3 w-full text-left mt-4 border-t border-border pt-6">
              <div>
                <p className="text-xs text-foreground-muted mb-1">Email</p>
                <p className="text-sm font-medium text-foreground">yourmail@example.com</p>
              </div>
              <div>
                <p className="text-xs text-foreground-muted mb-1">WhatsApp</p>
                <p className="text-sm font-medium text-foreground">+63 912 345 6789</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Side: Form ── */}
        <div className="w-full lg:w-2/3 lg:pl-8">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-medium text-foreground-muted uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Apple" 
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary text-foreground transition-colors placeholder:text-border-hover" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-foreground-muted uppercase tracking-wider">Your Email</label>
                <input 
                  type="email" 
                  placeholder="yourmail@example.com" 
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary text-foreground transition-colors placeholder:text-border-hover" 
                />
              </div>
            </div>

            {/* Interactive "Interested In" Tags */}
            <div className="space-y-3 pt-4">
              <label className="text-xs font-medium text-foreground-muted uppercase tracking-wider">Interested In...</label>
              <div className="flex flex-wrap gap-3 mt-4">
                {interestsList.map((item) => {
                  const isSelected = selectedInterests.includes(item);
                  return (
                    <button 
                      key={item} 
                      type="button" 
                      onClick={() => toggleInterest(item)}
                      className={`rounded-full px-5 py-2.5 text-sm transition-all duration-300 ${
                        isSelected 
                          ? "bg-primary border-primary text-white" 
                          : "border border-border text-foreground-muted hover:border-border-hover"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-2 pt-4">
              <label className="text-xs font-medium text-foreground-muted uppercase tracking-wider">Message</label>
              <textarea 
                placeholder="Tell me about your project..." 
                rows={4} 
                className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary text-foreground transition-colors resize-none placeholder:text-border-hover" 
              />
            </div>

            {/* Submit Button */}
            <button className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white hover:bg-primary-hover transition-colors w-full md:w-auto mt-4">
              Send Message
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
}
