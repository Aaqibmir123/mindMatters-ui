"use client";
import React from 'react';
import { Users, UserPlus, Award, Building } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Patients" },
  { icon: UserPlus, value: "25+", label: "Medical Staff" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Building, value: "12+", label: "Departments" },
];

export default function StatsBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 py-12 sm:py-16 text-white">
      {/* Background Glow Decorations */}
      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-10 z-10">
        
        {/* Section Header */}
        <div className="space-y-1.5 max-w-xl mx-auto">
          <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-widest text-cyan-200 bg-white/10 border border-white/15 px-3 py-1 rounded-full backdrop-blur-md">
            Our Impact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Making a Difference Every Day
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-5 sm:p-6 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon & Value Container */}
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-cyan-400/20 text-cyan-200 group-hover:scale-110 group-hover:bg-cyan-400/30 transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  </div>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                    {stat.value}
                  </span>
                </div>

                {/* Label */}
                <p className="text-xs sm:text-sm text-blue-100 font-medium mt-2 text-center">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}