'use client';

import React from 'react';
import { GlassCard } from './GlassCard';
import { Bot, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const AICoachCard = () => {
  return (
    <GlassCard glow={true} className="space-y-4 border-[#B8FF3D]/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-[#B8FF3D]/10 rounded-xl text-[#B8FF3D]">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#F4F7F3]">FocusOS AI Coach</h3>
            <span className="text-[10px] text-[#A5B0AB]">Smart Productivity Assistant</span>
          </div>
        </div>
        <Sparkles className="w-4 h-4 text-[#B8FF3D] animate-pulse" />
      </div>

      <div className="p-3 bg-[#0B1510] rounded-xl border border-white/5 text-xs text-[#A5B0AB] leading-relaxed">
        "You perform best during 25-minute sprints between 9 AM and 11 AM. Consider taking a 10-minute break to avoid afternoon fatigue!"
      </div>

      <Button variant="secondary" size="sm" className="w-full">
        Get New AI Insight <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
      </Button>
    </GlassCard>
  );
};
