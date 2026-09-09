import React from 'react';
import { Sidebar } from '@/components/ui/Sidebar';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FolderKanban, Plus, Clock, Target } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen bg-[#050808] text-[#F4F7F3]">
      <Sidebar />
      <main className="flex-1 p-8 space-y-8 overflow-y-auto">
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-[#F4F7F3]">
              Projects & Workspaces
            </h1>
            <p className="text-sm text-[#A5B0AB] mt-1">
              Organize your deep work sessions by goal and project targets
            </p>
          </div>
          <Button variant="primary" size="md">
            <Plus className="w-4 h-4 mr-1.5" /> Create Project
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard glow={true} className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="accent">In Progress</Badge>
              <FolderKanban className="w-5 h-5 text-[#B8FF3D]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#F4F7F3]">FocusOS Web App</h3>
              <p className="text-xs text-[#A5B0AB] mt-1">Next.js + Tailwind + PostgreSQL setup</p>
            </div>
            <div className="flex items-center justify-between text-xs text-[#65726A] pt-2 border-t border-white/5">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 12.5 hrs</span>
              <span className="flex items-center gap-1"><Target className="w-3.5 h-3.5" /> Goal: 20 hrs</span>
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}
