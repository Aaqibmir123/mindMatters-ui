import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-slate-800 pb-12">
          
           {/* Brand Info */}
           <div className="space-y-4">
<div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <img 
                  src="/images/logo.png" 
                  alt="NDPS Clinic Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-lg text-white block leading-tight">Mind Matters NDPS CLINIC</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              We are committed to providing exceptional healthcare with compassion and excellence for your family.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-white">Quick Links</h4>
              <ul className="space-y-2 text-xs">
               <li><a href="#home" className="hover:text-white transition">Home</a></li>
               <li><a href="#about" className="hover:text-white transition">About</a></li>
               <li><a href="#services" className="hover:text-white transition">Services</a></li>
               <li><a href="#dr-waris" className="hover:text-white transition">Dr. Waris</a></li>
               <li><a href="#doctors" className="hover:text-white transition">Doctors</a></li>
               <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
             </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-white">Our Services</h4>
<ul className="space-y-2 text-xs">
               <li><a href="#services" className="hover:text-white transition">Psychiatry</a></li>
               <li><a href="#services" className="hover:text-white transition">De-Addiction</a></li>
               <li><a href="#services" className="hover:text-white transition">Dental Care</a></li>
               <li><a href="#services" className="hover:text-white transition">Counseling</a></li>
             </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-white">Contact Info</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Firdous Abad Chowk, Tengpora Srinagar, J&K</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+91 7889566607</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Mindmattersndps@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

{/* Bottom Bar */}
        <div className="pt-8 text-center text-xs text-slate-500">
          <p>© 2026 NDPS Clinic. All Rights Reserved.</p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/917889566607" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg flex items-center gap-2 transition-all z-50 text-xs font-semibold"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">Chat with Us</span>
      </a>
    </footer>
  );
}