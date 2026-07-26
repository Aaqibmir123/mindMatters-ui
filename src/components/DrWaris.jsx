"use client";
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Calendar, 
  Award, 
  Stethoscope, 
  Building2, 
  Clock, 
  Brain, 
  HeartPulse, 
  Users, 
  Shield, 
  Activity, 
  Smile, 
  Baby,
  ChevronRight
} from "lucide-react";

const drWaris = {
  name: "Dr. Waris Ahmad Zargar",
  degree: "MBBS (SKIMS Soura), MD Psychiatry (GMC Srinagar), FIPS, FIAPP, FIAGMH",
  role: "Consultant Neuropsychiatrist and De-Addiction Specialist",
  exp: "Ex-Registrar SMHS Hospital Srinagar | Residency in General Medicine SKIMS Bemina | Ex-Medical Officer JKPSC | Former Assistant Professor Psychiatry GMC Handwara",
  reg: "Reg. No.: 13265 / 4190",
  img: "/images/waris.jpeg",
  specialties: [
    {
      title: "Headache",
      description: "Comprehensive diagnosis and treatment of various headache disorders including migraines and tension headaches",
      icon: Activity
    },
    {
      title: "Seizure Disorder",
      description: "Expert management of epilepsy and other seizure-related conditions",
      icon: Brain
    },
    {
      title: "Depression, Anxiety & Restlessness",
      description: "Treatment of mood disorders, anxiety disorders, and restlessness-related mental health issues",
      icon: HeartPulse
    },
    {
      title: "Bipolar Disorders & Schizophrenia",
      description: "Management of mood disorders and psychotic disorders including suspiciousness, self-talking, and decreased self-care",
      icon: Brain
    },
    {
      title: "OCD",
      description: "Treatment of obsessive-compulsive disorder including excessive washing, checking behaviors, anti-religious, sexual and blasphemous thoughts",
      icon: Shield
    },
    {
      title: "Sex Related Problems in Men & Women",
      description: "Diagnosis and treatment of sexual health issues affecting both men and women",
      icon: Smile
    },
    {
      title: "Behavioral Problems in Children, Adults & Elderly",
      description: "Comprehensive behavioral assessment and management across all age groups",
      icon: Users
    },
    {
      title: "Forgetting, Memory Issues & Dementia Disorders",
      description: "Evaluation and treatment of memory problems and dementia-related conditions",
      icon: Baby
    },
    {
      title: "Drug Addiction",
      description: "De-addiction treatment and rehabilitation for substance abuse disorders",
      icon: Shield
    },
    {
      title: "Internet & Gaming Addiction",
      description: "Treatment of digital addiction and behavioral addictions related to technology",
      icon: Activity
    },
    {
      title: "Pain Management",
      description: "Multidisciplinary approach to chronic pain management",
      icon: HeartPulse
    }
  ],
  availability: [
    {
      day: "Monday (Full Day)",
      clinic: "Panacea Medicate",
      address: "Near New Bus Stand, Link Road to Bypass, Handwara",
phone: ["+91 9103890115", "+91 7780864382"]
    },
    {
      day: "Tuesday & Friday",
      clinic: "Haroon Medicate",
      address: "Firdous Abad Chowk, Tengpora Srinagar",
phone: ["+91 7889449550", "+91 7889566607"]
    },
    {
      day: "Thursday (Full Day)",
      clinic: "Alkeemiya",
      address: "Kantibagh, Baramulla",
phone: ["+91 7006859785"]
    },
    {
      day: "Saturday & Sunday",
      clinic: "Saaya Medicate",
      address: "H/O Bohipora College Road, Opp. New Bus Stand, Regipora, Kupwara",
phone: ["+91 9596764366", "+91 7780864382"]
    },
    {
      day: "Wednesday",
      clinic: "New Arafath Medicate Bandipora",
      address: "Near Fish Market, Nowpora",
phone: ["+91 7006336261", "+91 9858344090"]
    }
  ]
};

export default function DrWaris() {
  return (
    <section id="dr-waris" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-blue-50/40 to-slate-50 relative overflow-hidden">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-800 tracking-wider uppercase mb-3">
            Chief Consultant Profile
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {drWaris.name}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-xl sm:shadow-2xl border border-slate-100 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl">
            <CardContent className="p-0">
              
              {/* Doctor Profile Top Header Banner */}
              <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 p-6 sm:p-10 text-white relative">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                  
                  {/* Doctor Image Container */}
                  <div className="relative shrink-0">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-blue-400 shadow-xl">
                      <img 
                        src={drWaris.img} 
                        alt={drWaris.name} 
                        className="w-full h-full rounded-full object-cover" 
                      />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-cyan-500 text-white p-2 rounded-full shadow-lg border-2 border-white">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  {/* Doctor Profile Details */}
                  <div className="flex-1 space-y-2.5">
                    <div>
                      <h3 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                        {drWaris.name}
                      </h3>
                      <p className="text-cyan-200 text-xs sm:text-sm font-medium mt-1 leading-relaxed max-w-2xl">
                        {drWaris.degree}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-cyan-100 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full backdrop-blur-md">
                      <Stethoscope className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{drWaris.role}</span>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl pt-1">
                      {drWaris.exp}
                    </p>

                    <div className="pt-2">
                      <span className="text-[11px] font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-800 px-3 py-1 rounded-md inline-block">
                        {drWaris.reg}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Main Info Body Section */}
              <div className="p-6 sm:p-10 space-y-10">
                
                {/* Specializations Section */}
                <div>
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="p-2 bg-cyan-50 text-cyan-600 rounded-lg">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg sm:text-xl">
                        Specializations & Treatments
                      </h4>
                      <p className="text-xs text-slate-500">Clinical expertise and areas of special care</p>
                    </div>
                  </div>
                  
                  {/* Specialties Responsive Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                    {drWaris.specialties.map((specialty, idx) => {
                      const Icon = specialty.icon;
                      return (
                        <div 
                          key={idx} 
                          className="bg-slate-50/70 hover:bg-white p-4 rounded-xl border border-slate-100 hover:border-cyan-200 shadow-xs hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-lg bg-cyan-100/60 text-cyan-700 flex items-center justify-center shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-200">
                              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div>
                              <h5 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-cyan-700 transition-colors">
                                {specialty.title}
                              </h5>
                              <p className="text-xs text-slate-500 leading-relaxed">
                                {specialty.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Clinic Schedule Section */}
                <div className="pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg sm:text-xl">
                        Clinic Schedule & Locations
                      </h4>
                      <p className="text-xs text-slate-500">Visiting days and contact details across clinics</p>
                    </div>
                  </div>
                  
                  {/* Availability Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {drWaris.availability.map((clinic, idx) => (
                      <div 
                        key={idx} 
                        className="bg-gradient-to-b from-blue-50/50 to-white p-5 rounded-2xl border border-blue-100/80 hover:border-blue-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                      >
                        <div>
                          {/* Day Pill */}
                          <div className="flex items-center gap-1.5 mb-3">
                            <Clock className="w-3.5 h-3.5 text-cyan-600" />
                            <span className="font-bold text-xs text-cyan-800 bg-cyan-100/80 px-2.5 py-0.5 rounded-full">
                              {clinic.day}
                            </span>
                          </div>

                          {/* Clinic Name */}
                          <div className="flex items-center gap-2 mb-2">
                            <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                            <span className="font-bold text-slate-900 text-sm">{clinic.clinic}</span>
                          </div>

                          {/* Address */}
                          <div className="flex items-start gap-2 mb-4">
                            <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                            <span className="text-xs text-slate-600 leading-snug">{clinic.address}</span>
                          </div>
                        </div>

                        {/* Phone Actions */}
                        <div className="pt-3 border-t border-slate-100 space-y-1.5">
{clinic.phone.map((phone, pIdx) => (
                            <a 
                              key={pIdx} 
                              href={`tel:${phone.replace(/\s/g, '')}`}
                              className="text-xs text-blue-700 hover:text-blue-900 font-semibold flex items-center justify-between bg-white hover:bg-blue-50/80 border border-slate-200/80 px-3 py-1.5 rounded-lg transition-colors group"
                            >
                              <span className="flex items-center gap-2">
                                <Phone className="w-3.5 h-3.5 text-blue-600" />
                                {phone}
                              </span>
                              <ChevronRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          ))}
                        </div>

                      </div>
                    ))}
                  </div>

                </div>

              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}