import React from 'react';
import { Sidebar } from '@/components/ui/Sidebar';
import { AnalyticsChart } from '@/components/ui/AnalyticsChart';
import { StatCard } from '@/components/ui/StatCard';
import { LineChart, Zap, Target, Award } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-[#050808] text-[#F4F7F3]">
      <Sidebar />
      <main className="flex-1 p-8 space-y-8 overflow-y-auto">
        <div className="pb-6 border-b border-white/10">
          <h1 className="text-2xl font-extrabold tracking-tight text-[#F4F7F3]">
            Performance Analytics
          </h1>
          <p className="text-sm text-[#A5B0AB] mt-1">
            Track your weekly consistency, productivity flow, and peak focus hours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard label="WEEKLY DEEP WORK" value="30.0 Hours" trend="+18% vs last week" icon={<LineChart className="w-5 h-5 text-[#B8FF3D]" />} />
          <StatCard label="AVG SESSION DURATION" value="28 Minutes" subtitle="Optimal focus window" icon={<Target className="w-5 h-5 text-[#7CFF68]" />} />
          <StatCard label="PEAK PRODUCTIVITY HOUR" value="10:00 AM" subtitle="Morning peak state" icon={<Award className="w-5 h-5 text-[#F5B64B]" />} />
        </div>

        <AnalyticsChart />
      </main>
    </div>
  );
}
