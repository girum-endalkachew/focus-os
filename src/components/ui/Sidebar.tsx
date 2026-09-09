'use client';

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Timer, 
  FolderKanban, 
  LineChart, 
  Target, 
  Trophy, 
  Settings, 
  Gamepad2, 
  ChevronRight,
  Flame
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar } from './Avatar';

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('focus');
  const [overviewOpen, setOverviewOpen] = useState(true);

  const mainNav = [
    {
      id: 'overview',
      label: 'Overview',
      icon: LayoutDashboard,
      subItems: [
        { id: 'focus', label: 'Focus Mode', icon: Timer },
        { id: 'projects', label: 'Projects', icon: FolderKanban },
      ]
    },
    { id: 'analytics', label: 'Analytics & Insights', icon: LineChart },
    { id: 'goals', label: 'Goals', icon: Target },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'gamification', label: 'Gamification', icon: Gamepad2 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#050808] border-r border-white/10 p-4 flex flex-col justify-between select-none">
      <div className="space-y-6">
        {/* Brand Header */}
        <div className="flex items-center justify-between px-2 pt-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#B8FF3D] flex items-center justify-center font-black text-[#050808] text-lg focus-glow">
              F
            </div>
            <span className="font-extrabold text-lg tracking-tight text-[#F4F7F3]">
              FocusOS
            </span>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#102019] text-[#B8FF3D] border border-[#B8FF3D]/20">
            v1.0
          </span>
        </div>

        {/* Navigation List */}
        <nav className="space-y-1">
          {mainNav.map((item) => {
            const Icon = item.icon;
            if (item.subItems) {
              return (
                <div key={item.id} className="space-y-1">
                  <button
                    onClick={() => setOverviewOpen(!overviewOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#A5B0AB] hover:text-[#F4F7F3] rounded-xl transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-[#B8FF3D]" />
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className={cn("w-3.5 h-3.5 transition-transform", overviewOpen && "rotate-90")} />
                  </button>

                  {overviewOpen && (
                    <div className="pl-4 space-y-1 border-l border-white/5 ml-4">
                      {item.subItems.map((sub) => {
                        const SubIcon = sub.icon;
                        const isActive = activeTab === sub.id;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => setActiveTab(sub.id)}
                            className={cn(
                              "w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer",
                              isActive
                                ? "bg-[#102019] text-[#B8FF3D] border border-white/10 font-semibold"
                                : "text-[#A5B0AB] hover:text-[#F4F7F3] hover:bg-white/5"
                            )}
                          >
                            <SubIcon className={cn("w-4 h-4", isActive ? "text-[#B8FF3D]" : "text-[#65726A]")} />
                            <span>{sub.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer",
                  isActive
                    ? "bg-[#102019] text-[#B8FF3D] border border-white/10 font-semibold"
                    : "text-[#A5B0AB] hover:text-[#F4F7F3] hover:bg-white/5"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-[#B8FF3D]" : "text-[#65726A]")} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* User Profile Footer */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar fallback="GE" isFocusing={true} size="sm" />
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-[#F4F7F3]">Girum E.</span>
            <span className="text-[10px] text-[#A5B0AB] flex items-center gap-1">
              <Flame className="w-3 h-3 text-[#F58848]" /> 5 Day Streak
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
