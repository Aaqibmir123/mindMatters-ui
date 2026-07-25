import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Brain, HeartPulse, Users, Shield, Activity, Smile, Baby, User } from "lucide-react";

const services = [
  { icon: Brain, title: "Psychiatry", desc: "Expert treatment for mental health issues, depression, anxiety, and psychiatric disorders." },
  { icon: HeartPulse, title: "De-Addiction", desc: "Comprehensive addiction treatment and recovery programs for substance abuse." },
  { icon: Users, title: "Child & Adolescent", desc: "Specialized mental health care for children and adolescents with behavioral issues." },
  { icon: Shield, title: "Counseling", desc: "Professional counseling for personal, family, and relationship issues." },
  { icon: Activity, title: "Headache Treatment", desc: "Specialized treatment for migraine, tension headache, and chronic headache disorders." },
  { icon: Smile, title: "Sex Related Problems", desc: "Confidential treatment for sexual health issues in men and women." },
  { icon: Baby, title: "Memory Disorders", desc: "Expert care for dementia, memory issues, and cognitive disorders." },
  { icon: User, title: "Pain Management", desc: "Comprehensive pain management for chronic and acute pain conditions." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block mb-1">Our Services</span>
        <h2 className="text-3xl font-bold text-blue-900 mb-12">Comprehensive Healthcare Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-slate-200/80 group">
                <CardContent className="p-6 text-left space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  <a href="#appointment" className="text-xs font-semibold text-blue-600 inline-flex items-center gap-1 hover:underline pt-1">
                    Learn More &rarr;
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
