"use client";
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Calendar, 
  LogOut, 
  Menu,
  X,
  BarChart3,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Sidebar({ user, onLogout }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'Appointments',
      path: '/dashboard/appointments',
      icon: Calendar,
    },
    {
      name: 'Analytics',
      path: '/dashboard/analytics',
      icon: BarChart3,
    },
    {
      name: 'Settings',
      path: '/dashboard/settings',
      icon: Settings,
    },
  ];

  const handleNavigation = (path) => {
    router.push(path);
    setIsMobileOpen(false);
  };

  const handleLogout = async () => {
    await onLogout();
    router.push('/login');
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="bg-white shadow-lg"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-900 to-indigo-900 text-white z-40
        transform transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-blue-800/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">MindMatters</h2>
                <p className="text-xs text-blue-300">Admin Panel</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.path;
                return (
                  <li key={item.path}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className={`
                        w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium
                        transition-all duration-200
                        ${isActive 
                          ? 'bg-white/20 text-white border-l-4 border-cyan-400' 
                          : 'text-blue-200 hover:bg-white/10 hover:text-white'
                        }
                      `}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-blue-300'}`} />
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Info & Logout */}
          <div className="p-4 border-t border-blue-800/50">
            {user && (
              <div className="mb-3 px-4 py-2 bg-white/10 rounded-lg">
                <p className="text-sm font-medium text-white">{user.email}</p>
                <p className="text-xs text-blue-300">Administrator</p>
              </div>
            )}
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="w-full justify-start text-red-300 hover:text-red-200 hover:bg-red-500/20"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}