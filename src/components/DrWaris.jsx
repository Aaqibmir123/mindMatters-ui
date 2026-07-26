import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Calendar, Award, Stethoscope, Building2, Clock, Brain, HeartPulse, Users, Shield, Activity, Smile, Baby } from "lucide-react";

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
      phone: ["9103890115", "7780864382"]
    },
    {
      day: "Tuesday & Friday",
      clinic: "Haroon Medicate",
      address: "Firdous Abad Chowk, Chingpora, Srinagar",
      phone: ["7889449550", "7889566607"]
    },
    {
      day: "Thursday (Full Day)",
      clinic: "Alkeemiya",
      address: "Kanlibagh, Baramulla",
      phone: ["7006859785"]
    },
    {
      day: "Saturday & Sunday",
      clinic: "Saaya Medicate",
      address: "H/O Bohipora College Road, Opp. New Bus Stand, Regipora, Kupwara",
      phone: ["9596764366", "7780864382"]
    },
    {
      day: "Wednesday",
      clinic: "New Arafath Medicate Bandipora",
      address: "Near Fish Market, Nampora",
      phone: ["7006336261", "9858344090"]
    }
  ]
};

export default function DrWaris() {
  return (
    <section id="dr-waris" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-200 rounded-full opacity-20 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-200 rounded-full opacity-20 translate-y-24 -translate-x-24"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block mb-2">Chief Consultant</span>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Dr. Waris Ahmad Zargar</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-0">
              {/* Doctor Profile Header */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white relative">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative">
                    <img 
                      src={drWaris.img} 
                      alt={drWaris.name} 
                      className="w-40 h-40 rounded-full object-cover shadow-2xl ring-4 ring-white/30" 
                    />
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                      <Award className="w-6 h-6 text-cyan-600" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-bold text-3xl mb-2">{drWaris.name}</h3>
                    <p className="text-blue-100 text-sm font-medium mb-3">{drWaris.degree}</p>
                    <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-3 backdrop-blur-sm">
                      {drWaris.role}
                    </span>
                    <p className="text-blue-100 text-sm">{drWaris.exp}</p>
                  </div>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-8 space-y-6">
                <div className="flex items-start gap-3">
                  <Stethoscope className="w-5 h-5 text-cyan-600 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Specializations</h4>
                  </div>
                </div>
                
                {/* Specialties Grid */}
                <div className="border-t pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {drWaris.specialties.map((specialty, idx) => {
                      const Icon = specialty.icon;
                      return (
                        <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 hover:shadow-lg hover:border-cyan-300 transition-all group">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <h5 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-cyan-700 transition-colors">{specialty.title}</h5>
                              <p className="text-xs text-slate-500 leading-relaxed">{specialty.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-cyan-600 shrink-0" />
                  <p className="text-sm text-slate-500 font-medium">{drWaris.reg}</p>
                </div>

                {/* Clinic Availability Cards */}
                <div className="border-t pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-cyan-600" />
                    <h4 className="font-bold text-slate-800 text-lg">Clinic Schedule & Availability</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {drWaris.availability.map((clinic, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-100 hover:shadow-lg transition-all">
                        <div className="flex items-center gap-2 mb-3">
                          <Clock className="w-4 h-4 text-cyan-600" />
                          <span className="font-semibold text-cyan-700 text-sm bg-cyan-100 px-3 py-1 rounded-full">
                            {clinic.day}
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-blue-600" />
                            <span className="font-bold text-slate-800">{clinic.clinic}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                            <span className="text-sm text-slate-600">{clinic.address}</span>
                          </div>
                          <div className="flex flex-col gap-1.5 pt-2">
                            {clinic.phone.map((phone, pIdx) => (
                              <a 
                                key={pIdx} 
                                href={`tel:${phone}`}
                                className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg shadow-sm hover:bg-blue-50 transition-colors"
                              >
                                <Phone className="w-3.5 h-3.5" />
                                {phone}
                              </a>
                            ))}
                          </div>
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