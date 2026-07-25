"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Plus, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
<div className="bg-blue-600 p-2 rounded-lg text-white">
            <Plus className="w-6 h-6 rotate-45" />
          </div>
          <div>
<span className="font-bold text-xl text-blue-900 block leading-tight">MindMatters</span>
          <span className="text-[10px] text-cyan-600 font-semibold tracking-wider block uppercase">CARE CLINIC</span>
          </div>
        </div>

        {/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-8 font-medium text-slate-600 text-sm">
          <a href="#home" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">Home</a>
          <a href="#about" className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all pb-1">About</a>
          <a href="#services" className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all pb-1">Services</a>
          <a href="#doctors" className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all pb-1">Doctors</a>
          <a href="#testimonials" className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all pb-1">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all pb-1">Contact</a>
        </nav>

{/* Desktop Call & CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2 shadow-md"
            onClick={scrollToAppointment}
          >
            Book Appointment
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3">
          <a href="#home" className="block text-blue-600 font-medium text-sm">Home</a>
          <a href="#about" className="block text-slate-600 hover:text-blue-600 text-sm">About</a>
          <a href="#services" className="block text-slate-600 hover:text-blue-600 text-sm">Services</a>
          <a href="#doctors" className="block text-slate-600 hover:text-blue-600 text-sm">Doctors</a>
          <a href="#testimonials" className="block text-slate-600 hover:text-blue-600 text-sm">Testimonials</a>
          <a href="#contact" className="block text-slate-600 hover:text-blue-600 text-sm">Contact</a>
          <div className="pt-2">
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2"
              onClick={scrollToAppointment}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}