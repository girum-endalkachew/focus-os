'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Target, Plus, Calendar, Clock, CheckCircle2 } from 'lucide-react';

export default function GoalsPage() {
  const goals = [
    { id: '1', title: 'Reach 30 Hours Deep Work This Week', timeframe: 'Weekly', progress: 80, targetHours: 30, spentHours: 24, deadline: 'In 2 days' },
    { id: '2', title: 'Complete FocusOS Core Backend & Prisma ORM', timeframe: 'Monthly', progress: 60, targetHours: 50, spentHours: 30, deadline: 'End of Month' },
    { id: '3', title: 'Maintain 14-Day Focus Streak', timeframe: 'Daily', progress: 35, targetHours: 14, spentHours: 5, deadline: 'Ongoing' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-[#F4F7F3]">Goals & Targets</h1>
          <p className="text-sm text-[#A5B0AB] mt-1">Connect long-term objectives directly to daily focus sessions</p>
        </div>
        <Button variant="primary" size="md">
          <Plus className="h-4 w-4 mr-1.5" /> Create Goal
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {goals.map((goal) => (
          <GlassCard key={goal.id} glow={goal.progress >= 75} className="space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="accent">{goal.timeframe}</Badge>
                <span className="text-[10px] text-[#A5B0AB] font-mono flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {goal.deadline}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#F4F7F3] leading-snug">{goal.title}</h3>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/5">
              <div className="flex justify-between text-xs font-mono text-[#A5B0AB]">
                <span>{goal.spentHours}h / {goal.targetHours}h</span>
                <span className="text-[#B8FF3D] font-bold">{goal.progress}%</span>
              </div>
              <ProgressBar value={goal.progress} />
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
