'use client';

import React, { useState } from 'react';
import { GlassCard } from '../GlassCard';
import { Bell, Flame, Trophy, CheckCircle2, X } from 'lucide-react';
import { Badge } from '../Badge';

export const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: '1', title: '7-Day Streak Alive!', message: 'Log 1 more focus session today to protect your streak.', time: '10 mins ago', icon: Flame, unread: true },
    { id: '2', title: 'Focus Session Completed', message: 'You logged 25m in "FocusOS Auth Routes". +50 XP earned.', time: '1 hour ago', icon: CheckCircle2, unread: true },
    { id: '3', title: 'Achievement Unlocked!', message: 'You unlocked "10 Hour Week" milestone.', time: 'Yesterday', icon: Trophy, unread: false },
  ]);

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-xl bg-[#0B1510] border border-white/10 text-[#A5B0AB] hover:text-[#F4F7F3] transition-colors cursor-pointer"
      >
        <Bell className="h-4 w-4" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-[#B8FF3D] focus-glow" />
        )}
      </button>

      {isOpen && (
        <GlassCard className="absolute right-0 top-10 z-50 w-80 space-y-3 p-4 shadow-2xl border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#F4F7F3]">Notifications</span>
              {unreadCount > 0 && <Badge variant="accent">{unreadCount} New</Badge>}
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#65726A] hover:text-[#F4F7F3] cursor-pointer">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-2 max-h-64 overflow-y-auto">
            {notifications.map((n) => {
              const Icon = n.icon;
              return (
                <div key={n.id} className="p-2.5 rounded-xl bg-[#0B1510] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 text-[#B8FF3D]" />
                    <span className="text-xs font-bold text-[#F4F7F3]">{n.title}</span>
                  </div>
                  <p className="text-[11px] text-[#A5B0AB] leading-tight">{n.message}</p>
                  <span className="text-[9px] text-[#65726A] font-mono">{n.time}</span>
                </div>
              );
            })}
          </div>
        </GlassCard>
      )}
    </div>
  );
};
