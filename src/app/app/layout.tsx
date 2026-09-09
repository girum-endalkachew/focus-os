'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sidebar } from '@/components/ui/Sidebar';
import { 
  LayoutDashboard, 
  Timer, 
  FolderKanban, 
  LineChart, 
  User, 
  Search
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const mobileNav = [
    { href: '/app', label: 'Home', icon: LayoutDashboard },
    { href: '/app/focus', label: 'Focus', icon: Timer },
    { href: '/app/projects', label: 'Projects', icon: FolderKanban },
    { href: '/app/analytics', label: 'Analytics', icon: LineChart },
    { href: '/app/profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="flex min-h-screen bg-[#050808] text-[#F4F7F3]">
      {/* Desktop Sidebar (Hidden on mobile) */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main App Workspace Content */}
      <div className="flex-1 flex flex-col min-w-0 pb-16 md:pb-0">
        {/* Global Workspace Header with Command Search */}
        <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-white/10 bg-[#050808]/90 px-6 backdrop-blur-md">
          <div className="flex items-center gap-3 w-full max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#65726A]" />
              <input
                type="text"
                placeholder="Search projects, tasks or type Cmd+K..."
                className="w-full rounded-xl border border-white/10 bg-[#0B1510] py-1.5 pl-9 pr-4 text-xs text-[#F4F7F3] placeholder-[#65726A] outline-none focus:border-[#B8FF3D]"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#A5B0AB]">Cmd + K</span>
          </div>
        </header>

        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar (Hidden on desktop) */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-white/10 bg-[#050808]/95 backdrop-blur-lg md:hidden">
        {mobileNav.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 text-[10px] font-medium transition-colors",
                isActive ? "text-[#B8FF3D]" : "text-[#A5B0AB]"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
