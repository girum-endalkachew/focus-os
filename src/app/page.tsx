import React from 'react';
import { Sidebar } from '@/components/ui/Sidebar';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { StatCard } from '@/components/ui/StatCard';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Timer, Flame, Play, Pause, RotateCcw, CheckCircle2, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#050808] text-[#F4F7F3]">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Workspace */}
      <main className="flex-1 p-8 space-y-8 overflow-y-auto">
        {/* Workspace Top Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-[#F4F7F3]">
              Workspace Overview
            </h1>
            <p className="text-sm text-[#A5B0AB] mt-1">
              FocusOS Design System & Active Session Tracker
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="amber" className="px-3 py-1 text-xs">
              <Flame className="w-3.5 h-3.5 fill-[#F58848]" /> 5 Day Streak
            </Badge>
            <Button variant="primary" size="md">
              <Play className="w-4 h-4 mr-1.5 fill-current" /> Start Deep Work
            </Button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            label="TODAY'S DEEP WORK"
            value="4h 37m"
            subtitle="Target: 6 hours daily"
            trend="+12% from yesterday"
            glow={true}
            icon={<Timer className="w-5 h-5" />}
          />
          <StatCard
            label="COMPLETED FOCUS SESSIONS"
            value="6 Sessions"
            subtitle="25 min average duration"
            icon={<CheckCircle2 className="w-5 h-5 text-[#7CFF68]" />}
          />
          <StatCard
            label="STREAK & REWARDS"
            value="1,240 XP"
            subtitle="Level 4 - Focused Scholar"
            icon={<Zap className="w-5 h-5 text-[#F5B64B]" />}
          />
        </div>

        {/* Main Focus Mode Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Timer Card */}
          <GlassCard glow={true} className="lg:col-span-2 flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <Badge variant="accent">ACTIVE POMODORO</Badge>
              <span className="text-xs text-[#65726A] uppercase font-mono">Session #4 of 8</span>
            </div>

            {/* Timer Display */}
            <div className="text-center py-6">
              <div className="text-7xl font-black tracking-tight text-[#F4F7F3] font-mono">
                21:45
              </div>
              <p className="text-sm text-[#A5B0AB] mt-2">
                Task: Building FocusOS Design System Tokens
              </p>
            </div>

            {/* Progress & Controls */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-[#A5B0AB]">
                  <span>Progress</span>
                  <span>75%</span>
                </div>
                <ProgressBar value={75} />
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <Button variant="secondary" size="md">
                  <Pause className="w-4 h-4 mr-1" /> Pause
                </Button>
                <Button variant="primary" size="md">
                  <CheckCircle2 className="w-4 h-4 mr-1" /> Complete
                </Button>
                <Button variant="ghost" size="md">
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </GlassCard>

          {/* Design System Reference Token Box */}
          <GlassCard className="space-y-4">
            <h3 className="text-sm font-semibold text-[#A5B0AB] uppercase tracking-wider">
              System Specification
            </h3>
            <div className="space-y-3 text-xs text-[#A5B0AB]">
              <div className="p-3 bg-[#0B1510] rounded-xl border border-white/5 flex justify-between items-center">
                <span>Accent Glow</span>
                <span className="font-mono text-[#B8FF3D]">#B8FF3D</span>
              </div>
              <div className="p-3 bg-[#0B1510] rounded-xl border border-white/5 flex justify-between items-center">
                <span>Background</span>
                <span className="font-mono text-[#F4F7F3]">#050808</span>
              </div>
              <div className="p-3 bg-[#0B1510] rounded-xl border border-white/5 flex justify-between items-center">
                <span>Surface Glass</span>
                <span className="font-mono text-[#F4F7F3]">blur(20px)</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}
