"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import { Button } from "@/components/ui/button";
import { Users, Calendar, Activity, TrendingUp, BarChart3, PieChart } from "lucide-react";
import { authAPI, appointmentsAPI } from '@/lib/api';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalPatients: 0,
    appointmentsToday: 0,
    activeDoctors: 4,
    revenue: 0,
    pending: 0,
    confirmed: 0,
    cancelled: 0
  });
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
    // Fetch stats from backend
    if (user) {
      appointmentsAPI.getStats()
        .then(data => {
          if (data.success) {
            setStats(prev => ({
              ...prev,
              totalPatients: data.stats.total,
              pending: data.stats.pending,
              confirmed: data.stats.confirmed,
              cancelled: data.stats.cancelled
            }));
          }
        })
        .catch(err => console.error('Error fetching stats:', err));
    }
  }, [user]);

  const handleLogout = async () => {
    await authAPI.logout();
  };

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
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-blue-900">Welcome back, {user.email}!</h1>
              <p className="text-slate-600 mt-2">Here's an overview of your clinic today</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-500 text-sm">Total Patients</p>
                    <p className="text-2xl font-bold text-blue-900 mt-1">{stats.totalPatients}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-500 font-medium">+12%</span>
                  <span className="text-slate-500 ml-1">from last month</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-500 text-sm">Appointments Today</p>
                    <p className="text-2xl font-bold text-blue-900 mt-1">{stats.confirmed + stats.pending}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <span className="text-slate-500">{stats.pending} pending</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-500 text-sm">Active Doctors</p>
                    <p className="text-2xl font-bold text-blue-900 mt-1">{stats.activeDoctors}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Activity className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <span className="text-slate-500">All available</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-500 text-sm">Revenue</p>
                    <p className="text-2xl font-bold text-blue-900 mt-1">${stats.revenue.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <span className="text-green-500 font-medium">+8%</span>
                  <span className="text-slate-500 ml-1">from last week</span>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Appointments Chart */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
                  <h2 className="text-lg font-semibold text-blue-900">Appointments Overview</h2>
                </div>
                <div className="h-48 flex items-end justify-around">
                  <div className="flex flex-col items-center">
                    <div className="w-16 bg-blue-500 rounded-t-lg" style={{ height: '80px' }}></div>
                    <span className="text-xs text-slate-500 mt-2">Mon</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 bg-blue-600 rounded-t-lg" style={{ height: '100px' }}></div>
                    <span className="text-xs text-slate-500 mt-2">Tue</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 bg-blue-500 rounded-t-lg" style={{ height: '60px' }}></div>
                    <span className="text-xs text-slate-500 mt-2">Wed</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 bg-blue-600 rounded-t-lg" style={{ height: '120px' }}></div>
                    <span className="text-xs text-slate-500 mt-2">Thu</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 bg-blue-500 rounded-t-lg" style={{ height: '90px' }}></div>
                    <span className="text-xs text-slate-500 mt-2">Fri</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 bg-blue-400 rounded-t-lg" style={{ height: '40px' }}></div>
                    <span className="text-xs text-slate-500 mt-2">Sat</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 bg-blue-300 rounded-t-lg" style={{ height: '30px' }}></div>
                    <span className="text-xs text-slate-500 mt-2">Sun</span>
                  </div>
                </div>
              </div>

              {/* Status Distribution */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center mb-4">
                  <PieChart className="w-5 h-5 text-blue-600 mr-2" />
                  <h2 className="text-lg font-semibold text-blue-900">Status Distribution</h2>
                </div>
                <div className="flex items-center justify-center h-48">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      {/* Pending - Amber */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#f59e0b"
                        strokeWidth="10"
                        strokeDasharray={`${stats.pending * 2.5} ${250 - stats.pending * 2.5}`}
                        strokeLinecap="round"
                      />
                      {/* Confirmed - Green */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#10b981"
                        strokeWidth="10"
                        strokeDasharray={`${stats.confirmed * 2.5} ${250 - stats.confirmed * 2.5}`}
                        strokeDashoffset={-stats.pending * 2.5}
                        strokeLinecap="round"
                      />
                      {/* Cancelled - Red */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#ef4444"
                        strokeWidth="10"
                        strokeDasharray={`${stats.cancelled * 2.5} ${250 - stats.cancelled * 2.5}`}
                        strokeDashoffset={-(stats.pending + stats.confirmed) * 2.5}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-900">{stats.totalPatients}</p>
                        <p className="text-xs text-slate-500">Total</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mr-1"></div>
                    <span className="text-xs text-slate-600">Pending ({stats.pending})</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                    <span className="text-xs text-slate-600">Confirmed ({stats.confirmed})</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                    <span className="text-xs text-slate-600">Cancelled ({stats.cancelled})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-8">
              <h2 className="text-lg font-semibold text-blue-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button 
                  className="h-20 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200"
                  onClick={() => router.push('/dashboard/appointments')}
                >
                  <Calendar className="w-8 h-8 mb-2" />
                  <span>View Appointments</span>
                </Button>
                <Button 
                  className="h-20 bg-green-50 hover:bg-green-100 text-green-700 border border-green-200"
                  onClick={() => router.push('/dashboard/appointments')}
                >
                  <Calendar className="w-8 h-8 mb-2" />
                  <span>New Appointment</span>
                </Button>
                <Button 
                  className="h-20 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200"
                  onClick={() => router.push('/dashboard/doctors')}
                >
                  <Users className="w-8 h-8 mb-2" />
                  <span>Manage Doctors</span>
                </Button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h2 className="text-lg font-semibold text-blue-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-700">New appointment scheduled</p>
                    <p className="text-xs text-slate-500">Dr. Smith - Patient: John Doe</p>
                  </div>
                  <span className="text-xs text-slate-400">2 hours ago</span>
                </div>
                <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-700">Patient record updated</p>
                    <p className="text-xs text-slate-500">Sarah Johnson - Checkup complete</p>
                  </div>
                  <span className="text-xs text-slate-400">4 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}