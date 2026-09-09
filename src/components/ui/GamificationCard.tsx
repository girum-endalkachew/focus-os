'use client';

import React from 'react';
import { GlassCard } from './GlassCard';
import { Trophy, Flame, Zap, Shield } from 'lucide-react';
import { Badge } from './Badge';

export const GamificationCard = () => {
  return (
    <GlassCard className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-[#F5B64B]" />
          <h3 className="text-sm font-semibold text-[#A5B0AB] uppercase tracking-wider">
            Gamification & Levels
          </h3>
        </div>
        <Badge variant="amber">Level 4</Badge>
      </div>

      <div className="flex items-center gap-4 p-3 bg-[#0B1510] rounded-xl border border-white/5">
        <div className="p-3 bg-[#F5B64B]/10 rounded-xl text-[#F5B64B]">
          <Shield className="w-6 h-6" />
        </div>
        <div className="space-y-1 flex-1">
          <div className="flex justify-between text-xs">
            <span className="font-bold text-[#F4F7F3]">Focused Scholar</span>
            <span className="font-mono text-[#F5B64B]">1,240 / 1,500 XP</span>
          </div>
          <div className="w-full bg-[#102019] h-2 rounded-full overflow-hidden">
            <div className="bg-[#F5B64B] h-full rounded-full" style={{ width: '82%' }} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="p-2.5 bg-[#0B1510] rounded-xl border border-white/5 flex items-center gap-2">
          <Flame className="w-4 h-4 text-[#F58848]" />
          <div>
            <div className="font-bold text-[#F4F7F3]">5 Days</div>
            <div className="text-[10px] text-[#65726A]">Current Streak</div>
          </div>
        </div>
        <div className="p-2.5 bg-[#0B1510] rounded-xl border border-white/5 flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#B8FF3D]" />
          <div>
            <div className="font-bold text-[#F4F7F3]">50 XP / session</div>
            <div className="text-[10px] text-[#65726A]">Earn Rate</div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};
