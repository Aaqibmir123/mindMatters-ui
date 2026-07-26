import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  HeartPulse, 
  Users, 
  Shield, 
  Activity, 
  Smile, 
  Baby, 
  Sparkles, 
  ShieldCheck, 
  Stethoscope, 
  Clock, 
  Award,
  CheckCircle2
} from "lucide-react";

// Specialty Icon Mapping
const specialtyIcons = {
  // Dental Specialties (For Dr. Saba)
  "Cosmetic Dentistry": Sparkles,
  "Dental Implants": ShieldCheck,
  "Oral Health Procedures": Stethoscope,
  "Root Canal Treatment": Activity,
  "Teeth Whitening": Smile,
  "Orthodontics & Braces": Shield,

  // Neuropsychiatry Specialties (For Dr. Mehwish & Dr. Athiya)
  "Headache": Activity,
  "Seizure Disorder": Brain,
  "Depression, Anxiety & Restlessness": HeartPulse,
  "Bipolar Disorders & Schizophrenia": Brain,
  "OCD": Shield,
  "Sex Related Problems in Men & Women": Smile,
  "Behavioral Problems in Children, Adults & Elderly": Users,
  "Forgetting, Memory Issues & Dementia Disorders": Baby,
  "Drug Addiction": Shield,
  "Internet & Gaming Addiction": Activity,
  "Pain Management": HeartPulse
};

// Neuropsychiatry Specialties
const neuropsychiatrySpecialties = [
  "Headache",
  "Seizure Disorder",
  "Depression, Anxiety & Restlessness",
  "Bipolar Disorders & Schizophrenia",
  "OCD",
  "Sex Related Problems in Men & Women",
  "Behavioral Problems in Children, Adults & Elderly",
  "Forgetting, Memory Issues & Dementia Disorders",
  "Drug Addiction",
  "Internet & Gaming Addiction",
  "Pain Management"
];

// Dental Specialties
const dentalSpecialties = [
  "Cosmetic Dentistry",
  "Dental Implants",
  "Oral Health Procedures",
  "Root Canal Treatment",
  "Teeth Whitening",
  "Orthodontics & Braces"
];

const doctors = [
  {
    id: "saba",
    name: "Dr. Saba Younis Bhat",
    degree: "BDS, MDS (Dental)",
    role: "Dental Surgeon",
    exp: "10+ Years Experience",
    bio: "Expert in cosmetic dentistry, dental implants, and comprehensive oral health procedures.",
    reg: "Reg. No.: Dental Specialist",
    img: "/images/saba.jpeg",
    specialties: dentalSpecialties,
    // Availability intentionally removed for Dr. Saba
  },
  {
    id: "mehwish",
    name: "Dr. Mehwish Imtiaz",
    degree: "MBBS (ASCOMS), MD Neuropsychiatry (GMC Srinagar), Life Fellow of IPS",
    role: "Consultant Neuropsychiatrist and De-Addiction Specialist",
    exp: "Ex-Registrar SMHS Hospital Srinagar",
    reg: "Reg. No.: 15924",
    img: "/images/mehvish.jpeg",
    specialties: neuropsychiatrySpecialties,
    availability: [
      { day: "Monday", time: "10:00 AM Onwards" },
      { day: "Saturday", time: "10:00 AM Onwards" }
    ]
  },
  {
    id: "athiya",
    name: "Dr. Athiya Fahiem Khan",
    degree: "MBBS (Gold Medalist), MD Neuropsychiatry (GMC Srinagar), Life Fellow of IPS",
    role: "Consultant Neuropsychiatrist and De-Addiction Specialist",
    exp: "Ex-Registrar SMHS Hospital Srinagar",
    reg: "Reg. No.: 5918",
    img: "/images/atiya.jpeg",
    specialties: neuropsychiatrySpecialties,
    availability: [
      { day: "Wednesday", time: "10:00 AM Onwards" },
      { day: "Sunday", time: "10:00 AM Onwards" }
    ]
  }
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Our Specialists
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Meet Our Expert Doctors
          </h2>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {doctors.map((doc) => (
            <Card 
              key={doc.id} 
              className="bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-6 flex flex-col">
                
                {/* Header Profile Section */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-3">
                    <img 
                      src={doc.img} 
                      alt={doc.name} 
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-slate-50 shadow-sm"
                    />
                    <span className="absolute bottom-0 right-0 bg-emerald-500 text-white p-1 rounded-full ring-2 ring-white">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {doc.name}
                  </h3>
                  <p className="text-[11px] font-medium text-slate-400 mt-0.5 leading-snug">
                    {doc.degree}
                  </p>

                  <div className="mt-2.5 inline-flex items-center gap-1 bg-blue-50 text-blue-600 text-[11px] font-semibold px-3 py-1 rounded-full">
                    <Award className="w-3 h-3 shrink-0" />
                    <span>{doc.role}</span>
                  </div>

                  <p className="text-xs text-slate-500 font-medium mt-2">{doc.exp}</p>
                  
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {doc.bio}
                  </p>

                  <p className="text-[11px] text-slate-400 font-medium mt-1">
                    {doc.reg}
                  </p>
                </div>

                {/* Specialties Section */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <h4 className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-2.5 text-center">
                    Specialties:
                  </h4>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {doc.specialties.map((spec, sIdx) => {
                      const Icon = specialtyIcons[spec] || Activity;
                      return (
                        <span 
                          key={sIdx} 
                          className="inline-flex items-center gap-1 text-[10px] font-medium bg-blue-50/80 text-blue-700 px-2.5 py-1 rounded-full"
                        >
                          <Icon className="w-3 h-3 text-blue-600 shrink-0" />
                          <span>{spec}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Availability Section (Only for doctors with availability) */}
                {doc.availability && (
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <h4 className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-2 text-center">
                      Availability:
                    </h4>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {doc.availability.map((avl, aIdx) => (
                        <div 
                          key={aIdx} 
                          className="inline-flex items-center gap-1 text-[10px] bg-cyan-50 text-cyan-800 font-medium px-2.5 py-1 rounded-full"
                        >
                          <Clock className="w-3 h-3 text-cyan-600" />
                          <span className="font-semibold">{avl.day}:</span>
                          <span>{avl.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}