"use client";
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, CheckCircle, AlertCircle, User, Phone, Mail, Stethoscope, Clock } from "lucide-react";
import { appointmentsAPI } from '@/lib/api';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    patientName: '',
    patientPhone: '',
    patientEmail: '',
    doctor: '',
    date: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const data = await appointmentsAPI.create({
        patientName: formData.patientName,
        patientPhone: formData.patientPhone,
        patientEmail: formData.patientEmail,
        doctor: formData.doctor,
        date: formData.date,
        time: '10:00',
        type: 'Checkup'
      });

      if (data.success) {
        setSuccess(true);
        setFormData({
          patientName: '',
          patientPhone: '',
          patientEmail: '',
          doctor: '',
          date: ''
        });
      } else {
        setError(data.message || 'Failed to book appointment');
      }
    } catch (err) {
      setError('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-to-r from-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Book Appointment</span>
          <h2 className="text-3xl font-bold text-blue-900 mt-1">Schedule Your Visit in Minutes</h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">Fill the form below to book your appointment with our specialists. We will confirm your booking shortly.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            {success && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <p className="text-green-700 font-medium">Appointment booked successfully! We will contact you soon.</p>
              </div>
            )}
            
            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
                <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-slate-700 block mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input 
                    placeholder="Enter your full name" 
                    className="pl-10"
                    value={formData.patientName}
                    onChange={(e) => setFormData({...formData, patientName: e.target.value})} 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input 
                    placeholder="Enter phone number" 
                    className="pl-10"
                    value={formData.patientPhone}
                    onChange={(e) => setFormData({...formData, patientPhone: e.target.value})} 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input 
                    type="email" 
                    placeholder="Enter email address" 
                    className="pl-10"
                    value={formData.patientEmail}
                    onChange={(e) => setFormData({...formData, patientEmail: e.target.value})} 
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Select Doctor</label>
                <div className="relative">
                  <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10" />
                  <Select onValueChange={(val) => setFormData({...formData, doctor: val})}>
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Select Doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dr. Waris Ahmad Zargar">Dr. Waris Ahmad Zargar</SelectItem>
                      <SelectItem value="Dr. Saba">Dr. Saba</SelectItem>
                      <SelectItem value="Dr. Mehwish Imtiaz">Dr. Mehwish Imtiaz</SelectItem>
                      <SelectItem value="Dr. Athiya Fahiem Khan">Dr. Athiya Fahiem Khan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Appointment Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input 
                    type="date" 
                    className="pl-10"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})} 
                    required 
                  />
                </div>
              </div>

              <div className="sm:col-span-2 pt-2">
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Booking...
                    </div>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" /> Book Appointment
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}