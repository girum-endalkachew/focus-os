'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';
import { 
  Play, 
  Pause, 
  Square, 
  RotateCcw, 
  FolderKanban, 
  CheckCircle2, 
  Maximize2, 
  Minimize2, 
  Volume2, 
  ArrowLeft,
  Sparkles
} from 'lucide-react';

export default function FocusModePage() {
  const [isRunning, setIsRunning] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(6157); // 01:42:37
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sessionNotes, setSessionNotes] = useState('');
  const [selectedProject, setSelectedProject] = useState('ACA Academy');

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const formatTime = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600).toString().padStart(2, '0');
    const mins = Math.floor((totalSec % 3600) / 60).toString().padStart(2, '0');
    const secs = (totalSec % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between items-center bg-[#050808] text-[#F4F7F3] rounded-3xl border border-white/10 p-6 md:p-12 overflow-hidden select-none">
      {/* Subtle ambient breathing radial glow */}
      <div className={`pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,255,61,0.06),_transparent_70%)] ${isRunning ? 'animate-pulse' : ''}`} />

      {/* Top Header Bar */}
      <div className="relative z-10 w-full flex items-center justify-between">
        <Link href="/app" className="flex items-center gap-2 text-xs font-semibold text-[#A5B0AB] hover:text-[#F4F7F3] transition-colors">
          <ArrowLeft className="h-4 w-4" /> Exit Focus
        </Link>

        <div className="flex items-center gap-2 bg-[#0B1510] border border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold text-[#B8FF3D]">
          <FolderKanban className="h-3.5 w-3.5" />
          <span>Project: {selectedProject}</span>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={toggleFullscreen} className="p-2 rounded-xl bg-[#0B1510] border border-white/10 text-[#A5B0AB] hover:text-[#F4F7F3] transition-colors">
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Center Cinematic Clock Display */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center space-y-6">
        <Badge variant="accent" className="px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
          <span className="h-2 w-2 rounded-full bg-[#B8FF3D] animate-ping mr-1" />
          DEEP WORK IN PROGRESS
        </Badge>

        <div className="text-7xl sm:text-9xl font-black font-mono tracking-tighter text-[#F4F7F3] drop-shadow-[0_0_50px_rgba(184,255,61,0.15)]">
          {formatTime(secondsLeft)}
        </div>

        <div className="space-y-1">
          <h2 className="text-base font-bold text-[#F4F7F3]">Focus Score: 98/100</h2>
          <p className="text-xs text-[#A5B0AB]">No distractions detected. Stay in the zone.</p>
        </div>

        {/* Controls Bar */}
        <div className="flex items-center gap-4 pt-4">
          <Button
            variant={isRunning ? "secondary" : "primary"}
            size="lg"
            onClick={() => setIsRunning(!isRunning)}
            className="w-36 font-bold"
          >
            {isRunning ? <><Pause className="h-4 w-4 mr-2" /> Pause</> : <><Play className="h-4 w-4 mr-2 fill-current" /> Resume</>}
          </Button>

          <Button variant="primary" size="lg" className="px-6 font-bold">
            <CheckCircle2 className="h-4 w-4 mr-2" /> Finish Session
          </Button>

          <Button variant="ghost" size="lg" onClick={() => setSecondsLeft(7200)}>
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Bottom Session Notes Bar */}
      <div className="relative z-10 w-full max-w-xl">
        <GlassCard className="p-4 space-y-2">
          <div className="flex items-center justify-between text-xs text-[#A5B0AB]">
            <span className="font-semibold uppercase tracking-wider">Session Notes & Intentions</span>
            <Sparkles className="h-3.5 w-3.5 text-[#B8FF3D]" />
          </div>
          <input
            type="text"
            placeholder="Log session notes or current sub-task..."
            value={sessionNotes}
            onChange={(e) => setSessionNotes(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-sm text-[#F4F7F3] placeholder-[#65726A]"
          />
        </GlassCard>
      </div>
    </div>
  );
}
