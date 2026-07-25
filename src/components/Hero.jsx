"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

export default function Hero() {
  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-r from-cyan-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Welcome to MindMatters Care Clinic</span>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              Your Health is Our <span className="text-cyan-600">Priority</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              We provide comprehensive healthcare services with experienced specialists, 
              state-of-the-art facilities, and compassionate care for you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-base font-semibold flex items-center justify-center gap-2"
                onClick={scrollToAppointment}
              >
                <Calendar className="w-5 h-5" /> Book Appointment
              </Button>
              <Button variant="outline" className="px-8 py-3 rounded-lg text-base font-semibold flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Call Now
              </Button>
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