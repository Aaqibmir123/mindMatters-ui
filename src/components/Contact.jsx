"use client";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Contact Us</span>
          <h2 className="text-3xl font-bold text-blue-900 mt-1">Get In Touch</h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">Have questions? We are here to help. Contact us for appointments, inquiries, or any assistance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <strong className="block text-slate-800 mb-1 text-sm">Clinic Address</strong>
                  <span className="text-slate-500 text-sm">Firdous Abad Chowk Near J & K Bank Atm Tengpora Srinagar, Jammu & Kashmir</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <strong className="block text-slate-800 mb-1 text-sm">Phone Number</strong>
                  <span className="text-slate-500 text-sm">7889566607</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <strong className="block text-slate-800 mb-1 text-sm">Email Address</strong>
                  <span className="text-slate-500 text-sm">Mindmattersndps@gmail.com</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <strong className="block text-slate-800 mb-1 text-sm">Clinic Timings</strong>
                  <span className="text-slate-500 text-sm block">Monday - Saturday: 09:30 AM - 08:00 PM</span>
                  <span className="text-slate-500 text-sm block">Sunday: 10:00 AM - 02:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
        <div className="lg:col-span-7">
  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm h-96">
  <iframe
  title="Clinic Location"
  src="https://www.google.com/maps?q=Firdous+Abad+Chowk+near+J%26K+Bank+ATM+Tengpora+Srinagar&output=embed"
  className="w-full h-full border-0"
  loading="lazy"
  allowFullScreen
/>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}