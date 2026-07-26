import React from 'react';
import { ShieldCheck, Eye, ThumbsUp } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Clinic Image with Badge */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800" 
                alt="Clinic Building" 
                className="w-full h-[380px] object-cover"
              />
            </div>
            <div className="absolute top-6 left-6 bg-cyan-500 text-white p-5 rounded-2xl shadow-lg max-w-[130px] text-center">
              <span className="text-3xl font-extrabold block leading-none">15+</span>
              <span className="text-[11px] font-medium leading-tight mt-1 block">Years of Excellence</span>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
<span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block mb-1">About Our Clinic</span>
<h2 className="text-3xl font-bold text-blue-900 leading-snug">
  NDPS Clinic is a Multi-Specialty Healthcare Center
</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">
              We are committed to providing world-class medical services with compassion, state-of-the-art infrastructure, and dedicated medical specialists to ensure the best outcomes for you and your family.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="space-y-2 p-3 bg-slate-50/50 rounded-xl border border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm">Our Mission</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Deliver high-quality healthcare with compassion and innovation.
                </p>
              </div>

              <div className="space-y-2 p-3 bg-slate-50/50 rounded-xl border border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm">Our Vision</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  To be a trusted healthcare partner for a healthier tomorrow.
                </p>
              </div>

              <div className="space-y-2 p-3 bg-slate-50/50 rounded-xl border border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <ThumbsUp className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm">Why Choose Us?</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Patient-centered care, modern tech & experienced staff.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}