"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Shield, Award, Users } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-cyan-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Welcome to NDPS Clinic</span>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              Your Mental Health is Our <span className="text-cyan-600">Priority</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              We provide comprehensive psychiatric and de-addiction services with experienced specialists, 
              state-of-the-art facilities, and compassionate care for you and your family.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Shield className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <span className="text-sm font-semibold text-slate-700">Expert Care</span>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Award className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <span className="text-sm font-semibold text-slate-700">Certified Doctors</span>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Users className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <span className="text-sm font-semibold text-slate-700">15+ Years</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative">
              <img 
                src="/hero.jpeg" 
                alt="Medical Team" 
                className="w-full h-[400px] object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}