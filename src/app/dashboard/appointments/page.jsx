"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Search, Plus, Filter, User, Clock, CheckCircle, XCircle, Trash2 } from "lucide-react";
import { authAPI, appointmentsAPI } from '@/lib/api';

export default function AppointmentsPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    authAPI.me()
      .then(data => {
        if (!data.user) {
          router.push('/login');
        } else {
          setUser(data.user);
        }
      })
      .catch(() => router.push('/login'))
      .finally(() => setLoading(false));
  }, [router]);

  useEffect(() => {
    // Fetch appointments from backend
    if (user) {
      appointmentsAPI.getAll()
        .then(data => {
          if (data.success) {
            setAppointments(data.appointments);
          }
        })
        .catch(err => console.error('Error fetching appointments:', err));
    }
  }, [user]);

  const handleLogout = async () => {
    await authAPI.logout();
  };

  const handleStatusChange = async (id, status) => {
    await appointmentsAPI.updateStatus(id, status);
    
    // Update local state
    setAppointments(appointments.map(apt => 
      apt._id === id ? { ...apt, status } : apt
    ));
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this appointment?')) {
      await appointmentsAPI.delete(id);
      
      // Update local state
      setAppointments(appointments.filter(apt => apt._id !== id));
    }
  };

  const filteredAppointments = appointments.filter(apt => 
    apt.patientName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    apt.doctor?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    apt.patientEmail?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-cyan-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-50 to-blue-50">
      <Sidebar user={user} onLogout={handleLogout} />
      
      {/* Main Content */}
      <main className="lg:pl-64">
        <div className="p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-blue-900">Appointments</h1>
                <p className="text-slate-600 mt-1">Manage and view all appointments</p>
              </div>
              <Button className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                New Appointment
              </Button>
            </div>

            {/* Search and Filter */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Search patients or doctors..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" className="sm:w-auto">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            {/* Appointments List */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Patient</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Doctor</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Date & Time</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {filteredAppointments.map((apt) => (
                      <tr key={apt._id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <User className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <span className="text-sm font-medium text-slate-700">{apt.patientName}</span>
                              <p className="text-xs text-slate-500">{apt.patientEmail}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">{apt.doctor}</td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <p className="text-slate-700">{apt.date}</p>
                            <p className="text-slate-500 flex items-center mt-1">
                              <Clock className="w-3 h-3 mr-1" />
                              {apt.time}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">{apt.type}</td>
                        <td className="px-6 py-4">
                          <span className={`
                            inline-flex px-3 py-1 text-xs font-semibold rounded-full
                            ${apt.status === 'confirmed' ? 'bg-green-100 text-green-700' : 
                              apt.status === 'pending' ? 'bg-amber-100 text-amber-700' : 
                              apt.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                              'bg-red-100 text-red-700'
                            }
                          `}>
                            {apt.status === 'confirmed' && <CheckCircle className="w-3 h-3 mr-1" />}
                            {apt.status === 'cancelled' && <XCircle className="w-3 h-3 mr-1" />}
                            {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <select
                              value={apt.status}
                              onChange={(e) => handleStatusChange(apt._id, e.target.value)}
                              className="text-xs border border-slate-200 rounded px-2 py-1 bg-white"
                            >
                              <option value="pending">Pending</option>
                              <option value="confirmed">Confirmed</option>
                              <option value="completed">Completed</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-red-600 hover:text-red-700"
                              onClick={() => handleDelete(apt._id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredAppointments.length === 0 && (
                <div className="text-center py-12">
                  <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">No appointments found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}