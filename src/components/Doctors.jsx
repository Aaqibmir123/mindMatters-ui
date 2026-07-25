import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const doctors = [
  {
    name: "Dr. Waris Ahmad Zargar",
    degree: "MBBS (SKIMS Soura), MD Psychiatry (GMC Srinagar), FIPS, FIAPP, FIAGMH",
    role: "Consultant Neuropsychiatrist and De-Addiction Specialist",
    exp: "Ex-Registrar SMHS Hospital Srinagar | Residency in General Medicine SKIMS Bemina | Ex-Medical Officer JKPSC | Former Assistant Professor Psychiatry GMC Handwara",
    bio: "Specializes in Headache, Seizure Disorder, Depression, Anxiety, Bipolar Disorders, Schizophrenia, OCD, Sex Related Problems, Behavioral Problems, Memory Issues, Drug Addiction, Internet & Gaming Addiction, and Pain Management.",
    reg: "Reg. No.: 13265 / 4190",
    img: "/images/waris.jpeg",
  },
  {
    name: "Dr. Saba",
    degree: "BDS, MDS (Dental)",
    role: "Dental Surgeon",
    exp: "10+ Years Experience",
    bio: "Expert in cosmetic dentistry, dental implants, and oral health procedures.",
    reg: "Dental Specialist",
    img: "/images/saba.jpeg",
  },
  {
    name: "Dr. Mehwish Imtiaz",
    degree: "MBBS (ASCOMS), MD Neuropsychiatry (GMC Srinagar), Life Fellow of IPS",
    role: "Consultant Neuropsychiatrist and De-Addiction Specialist",
    exp: "Ex-Registrar SMHS Hospital Srinagar",
    bio: "Specializes in Headache, Seizure Disorder, Depression, Anxiety, Bipolar Disorders, Schizophrenia, OCD, Sex Related Problems, Behavioral Problems, Memory Issues, Drug Addiction, Internet & Gaming Addiction, and Pain Management.",
    reg: "Reg. No.: 15924",
    img: "/images/mehvish.jpeg",
  },
  {
    name: "Dr. Athiya Fahiem Khan",
    degree: "MBBS (Gold Medalist), MD Neuropsychiatry (GMC Srinagar), Life Fellow of IPS",
    role: "Consultant Neuropsychiatrist and De-Addiction Specialist",
    exp: "Ex-Registrar SMHS Hospital Srinagar",
    bio: "Specializes in Headache, Seizure Disorder, Depression, Anxiety, Bipolar Disorders, Schizophrenia, OCD, Sex Related Problems, Behavioral Problems, Memory Issues, Drug Addiction, Internet & Gaming Addiction, and Pain Management.",
    reg: "Reg. No.: 5918",
    img: "/images/atiya.jpeg",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block mb-1">Our Specialists</span>
        <h2 className="text-3xl font-bold text-blue-900 mb-12">Meet Our Expert Doctors</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-all border-slate-100 text-center">
              <CardContent className="p-6 space-y-3">
                <img src={doc.img} alt={doc.name} className="w-24 h-24 rounded-full mx-auto object-cover shadow-sm ring-4 ring-slate-50" />
                <div>
                  <h3 className="font-bold text-slate-800 text-base">{doc.name}</h3>
                  <p className="text-[11px] text-slate-400 font-medium">{doc.degree}</p>
                </div>
                <div>
                  <span className="inline-block bg-blue-50 text-blue-600 text-[11px] font-semibold px-3 py-1 rounded-full">
                    {doc.role}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">{doc.exp}</p>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{doc.bio}</p>
                <p className="text-xs text-slate-400 font-medium">{doc.reg}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
