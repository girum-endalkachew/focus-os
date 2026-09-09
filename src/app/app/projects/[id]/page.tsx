import React from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { StatCard } from '@/components/ui/StatCard';
import { FolderKanban, Play, Clock, CheckCircle2, ArrowLeft, Target, Plus } from 'lucide-react';

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const rawId = resolvedParams?.id || 'ACA-Academy';
  const projectName = decodeURIComponent(rawId).replace(/-/g, ' ');

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div className="space-y-2">
          <Link href="/app/projects" className="inline-flex items-center gap-1.5 text-xs text-[#A5B0AB] hover:text-[#F4F7F3] transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Projects
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#B8FF3D]/10 text-[#B8FF3D] border border-[#B8FF3D]/20">
              <FolderKanban className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-[#F4F7F3] capitalize">{projectName}</h1>
              <p className="text-xs text-[#A5B0AB]">Target: 20 Hours · Active Workspace</p>
            </div>
          </div>
        </div>

        <Link href="/app/focus">
          <Button variant="primary" size="md">
            <Play className="h-4 w-4 mr-1.5 fill-current" /> Start Focus Session
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard label="TOTAL FOCUS TIME" value="12h 32m" subtitle="62% of target reached" glow={true} icon={<Clock className="h-5 w-5" />} />
        <StatCard label="COMPLETED SESSIONS" value="18 Sessions" subtitle="25 min average duration" icon={<CheckCircle2 className="h-5 w-5 text-[#7CFF68]" />} />
        <StatCard label="LINKED TASKS" value="8 / 12 Done" subtitle="4 remaining in queue" icon={<Target className="h-5 w-5 text-[#F5B64B]" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-[#A5B0AB] uppercase tracking-wider">Target Hours Progress</h3>
            <Badge variant="accent">62% Complete</Badge>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-[#A5B0AB]">
              <span>Spent: 12.5 hrs</span>
              <span>Target: 20.0 hrs</span>
            </div>
            <ProgressBar value={62} />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
