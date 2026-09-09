'use client';

import React from 'react';
import { GlassCard } from './GlassCard';

export const AnalyticsChart = () => {
  const days = [
    { day: 'Mon', hours: 3.5 },
    { day: 'Tue', hours: 4.2 },
    { day: 'Wed', hours: 5.0 },
    { day: 'Thu', hours: 4.6 },
    { day: 'Fri', hours: 2.1 },
    { day: 'Sat', hours: 6.0 },
    { day: 'Sun', hours: 4.6 },
  ];

  const maxHours = 8;

  return (
    <GlassCard className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#A5B0AB] uppercase tracking-wider">
          Weekly Focus Hours
        </h3>
        <span className="text-xs font-mono text-[#B8FF3D]">30.0 hrs total</span>
      </div>

      <div className="h-44 flex items-end justify-between gap-3 pt-4 px-2">
        {days.map((item) => {
          const heightPercent = Math.round((item.hours / maxHours) * 100);
          return (
            <div key={item.day} className="flex-1 flex flex-col items-center gap-2 group">
              <span className="text-[10px] font-mono text-[#65726A] group-hover:text-[#F4F7F3] transition-colors">
                {item.hours}h
              </span>
              <div className="w-full bg-[#102019] h-32 rounded-lg flex items-end p-1">
                <div
                  className="w-full bg-[#B8FF3D] rounded-md transition-all duration-500 group-hover:shadow-[0_0_12px_rgba(184,255,61,0.6)]"
                  style={{ height: `${heightPercent}%` }}
                />
              </div>
              <span className="text-xs font-medium text-[#A5B0AB]">{item.day}</span>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
};
