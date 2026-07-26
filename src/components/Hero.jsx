"use client";
import React from 'react';
import { Shield, Award, Users, HeartPulse, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-cyan-50/60 via-blue-50/30 to-white py-9 lg:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Highlighted Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 border border-cyan-200/80 shadow-xs backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-cyan-600 animate-pulse" />
<span className="text-lg sm:text-xl font-extrabold font-serif bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-transparent uppercase tracking-wider">
                Welcome to Mind Matters NDPS Clinic
              </span>
            </div>

            {/* Main Heading */}
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              Your Mental Health is Our <span className="relative inline-block text-cyan-600">
                Priority
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-cyan-400/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,5 100,15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We provide comprehensive psychiatric, dental, and de-addiction services with experienced specialists, 
              modern facilities, and compassionate care tailored for you and your family.
            </p>

            {/* Call to Action Button */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#doctors" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span>Our Specialists</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>

            {/* Feature Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-6">
              <div className="p-3.5 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center">
                <Shield className="w-7 h-7 text-cyan-600 mx-auto mb-1.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-800 block">Expert Care</span>
              </div>

              <div className="p-3.5 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center">
                <Award className="w-7 h-7 text-cyan-600 mx-auto mb-1.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-800 block">Certified Doctors</span>
              </div>

              <div className="p-3.5 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center">
                <Users className="w-7 h-7 text-cyan-600 mx-auto mb-1.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-800 block">10+ Years</span>
              </div>

              <div className="p-3.5 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center">
                <HeartPulse className="w-7 h-7 text-cyan-600 mx-auto mb-1.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-800 block">Dedicated Care</span>
              </div>
            </div>

          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Soft glow behind image */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-lg opacity-25" />
              
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl border border-slate-100">
                <img 
                  src="/hero.jpeg" 
                  alt="Mind Matters NDPS Clinic Team" 
                  className="w-full h-[380px] sm:h-[440px] object-cover rounded-2xl"
                />

                {/* Floating Info Tag */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-white/40 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Expert Care Available</p>
                      <p className="text-[10px] text-slate-500">Visit our specialists today</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold bg-cyan-50 text-cyan-700 px-2.5 py-1 rounded-lg border border-cyan-100">
                    OPD Active
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}