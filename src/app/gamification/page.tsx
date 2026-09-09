import React from 'react';
import { Sidebar } from '@/components/ui/Sidebar';
import { GamificationCard } from '@/components/ui/GamificationCard';
import { GlassCard } from '@/components/ui/GlassCard';
import { Gamepad2, Award, Flame, Star } from 'lucide-react';

export default function GamificationPage() {
  return (
    <div className="flex min-h-screen bg-[#050808] text-[#F4F7F3]">
      <Sidebar />
      <main className="flex-1 p-8 space-y-8 overflow-y-auto">
        <div className="pb-6 border-b border-white/10">
          <h1 className="text-2xl font-extrabold tracking-tight text-[#F4F7F3]">
            Gamification & Badges
          </h1>
          <p className="text-sm text-[#A5B0AB] mt-1">
            Unlock focus achievements, maintain streaks, and level up your deep work rank
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GamificationCard />
          <GlassCard className="space-y-4">
            <h3 className="text-sm font-semibold text-[#A5B0AB] uppercase tracking-wider">Unlocked Badges</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 bg-[#0B1510] rounded-xl border border-[#B8FF3D]/20 text-center space-y-1">
                <Flame className="w-6 h-6 text-[#F58848] mx-auto" />
                <div className="text-xs font-bold text-[#F4F7F3]">Early Bird</div>
              </div>
              <div className="p-4 bg-[#0B1510] rounded-xl border border-[#B8FF3D]/20 text-center space-y-1">
                <Star className="w-6 h-6 text-[#B8FF3D] mx-auto" />
                <div className="text-xs font-bold text-[#F4F7F3]">100 Sessions</div>
              </div>
              <div className="p-4 bg-[#0B1510] rounded-xl border border-white/5 text-center space-y-1 opacity-50">
                <Award className="w-6 h-6 text-[#65726A] mx-auto" />
                <div className="text-xs font-bold text-[#A5B0AB]">Master Focus</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}
