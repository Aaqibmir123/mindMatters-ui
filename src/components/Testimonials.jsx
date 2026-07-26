import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Abdul Majeed",
    role: "Patient",
    text: "Excellent service and caring staff. The doctors take time to listen and provide the best treatment.",
    // img: "https://i.pravatar.cc/100?img=5"
  },
  {
    name: "Isfaq Bhat",
    role: "Patient",
text: "Very clean and modern clinic. I highly recommend MindMatters Care Clinic for family checkups!",
    // img: "https://i.pravatar.cc/100?img=12"
  },
  {
    name: "Haseeb Khan",
    role: "Patient",
    text: "The staff is very friendly and helpful. Great experience overall with booking and treatment!",
    // img: "https://i.pravatar.cc/100?img=9"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block mb-1">Testimonials</span>
        <h2 className="text-3xl font-bold text-blue-900 mb-12">What Our Patients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <Card key={i} className="text-left border-slate-100 shadow-sm hover:shadow-md transition-shadow relative">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <Quote className="w-8 h-8 text-cyan-400 rotate-180" />
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{rev.text}</p>
                <div className="flex items-center gap-3 pt-2">
                  {/* <img src={rev.img} alt={rev.name} className="w-10 h-10 rounded-full" /> */}
                  <div>
                    <p className="font-bold text-xs text-slate-800">{rev.name}</p>
                    <p className="text-[10px] text-slate-400 font-medium">{rev.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}