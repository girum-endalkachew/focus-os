'use client';

import React from 'react';
import { GlassCard } from './GlassCard';
import { ProgressBar } from './ProgressBar';
import { FolderKanban, Plus } from 'lucide-react';
import { Button } from './Button';

interface Project {
  id: string;
  name: string;
  color: string;
  targetHours: number;
  spentHours: number;
}

export const ProjectsWidget = () => {
  const projects: Project[] = [
    { id: '1', name: 'FocusOS Web App', color: 'bg-[#B8FF3D]', targetHours: 20, spentHours: 12.5 },
    { id: '2', name: 'Design Tokens & Kit', color: 'bg-[#7CFF68]', targetHours: 10, spentHours: 8.0 },
    { id: '3', name: 'PostgreSQL & Prisma', color: 'bg-[#F5B64B]', targetHours: 15, spentHours: 4.2 },
  ];

  return (
    <GlassCard className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FolderKanban className="w-4 h-4 text-[#B8FF3D]" />
          <h3 className="text-sm font-semibold text-[#A5B0AB] uppercase tracking-wider">
            Active Projects
          </h3>
        </div>
        <Button variant="ghost" size="sm">
          <Plus className="w-3.5 h-3.5 mr-1" /> New
        </Button>
      </div>

      <div className="space-y-3">
        {projects.map((proj) => {
          const progress = Math.min(100, Math.round((proj.spentHours / proj.targetHours) * 100));
          return (
            <div key={proj.id} className="p-3 bg-[#0B1510] rounded-xl border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#F4F7F3]">{proj.name}</span>
                <span className="font-mono text-[#A5B0AB]">
                  {proj.spentHours}h / {proj.targetHours}h
                </span>
              </div>
              <ProgressBar value={progress} color={proj.color} glow={false} />
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
};
