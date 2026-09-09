'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';
import {
  Play,
  Pause,
  CheckCircle2,
  RotateCcw,
  FolderKanban,
  Maximize2,
  Minimize2,
  ArrowLeft,
  Sparkles,
  Zap,
} from 'lucide-react';

export default function FocusModePage() {
  const [isRunning, setIsRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(25 * 60); // 25:00 default
  const [initialSeconds] = useState(25 * 60);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sessionNotes, setSessionNotes] = useState('');
  const [selectedProject] = useState('FocusOS Web App');
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState('');
  const [xpEarned, setXpEarned] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const formatTime = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600).toString().padStart(2, '0');
    const mins = Math.floor((totalSec % 3600) / 60).toString().padStart(2, '0');
    const secs = (totalSec % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const finishSession = async () => {
    setSaving(true);
    setSavedMsg('');
    const elapsedMin = Math.max(1, Math.round((initialSeconds - secondsLeft) / 60));

    try {
      const res = await fetch('/api/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          durationMin: elapsedMin,
          mode: 'pomodoro',
          completed: true,
          notes: sessionNotes,
          projectName: selectedProject,
        }),
      });
      const data = await res.json();
      if (data.success) {
        const xp = data.data?.xpEarned ?? 50;
        setXpEarned(xp);
        setSavedMsg(`Session saved · +${xp} XP · ${elapsedMin}m deep work`);
        setIsRunning(false);
        setSecondsLeft(initialSeconds);
        setSessionNotes('');
      } else {
        setSavedMsg('Could not save session. Try again.');
      }
    } catch {
      setSavedMsg('Network error while saving session.');
    } finally {
      setSaving(false);
      setTimeout(() => setSavedMsg(''), 5000);
    }
  };

  const progress = ((initialSeconds - secondsLeft) / initialSeconds) * 100;

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between items-center bg-[#050808] text-[#F4F7F3] rounded-3xl border border-white/10 p-6 md:p-12 overflow-hidden select-none">
      <div
        className={`pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,255,61,0.06),_transparent_70%)] ${
          isRunning ? 'animate-pulse' : ''
        }`}
      />

      <div className="relative z-10 w-full flex items-center justify-between">
        <Link
          href="/app"
          className="flex items-center gap-2 text-xs font-semibold text-[#A5B0AB] hover:text-[#F4F7F3] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Exit Focus
        </Link>

        <div className="flex items-center gap-2 bg-[#0B1510] border border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold text-[#B8FF3D]">
          <FolderKanban className="h-3.5 w-3.5" />
          <span>Project: {selectedProject}</span>
        </div>

        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-xl bg-[#0B1510] border border-white/10 text-[#A5B0AB] hover:text-[#F4F7F3] transition-colors cursor-pointer"
        >
          {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </button>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center space-y-6">
        <Badge variant="accent" className="px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
          <span
            className={`h-2 w-2 rounded-full bg-[#B8FF3D] mr-1 inline-block ${
              isRunning ? 'animate-ping' : ''
            }`}
          />
          {isRunning ? 'DEEP WORK IN PROGRESS' : secondsLeft === 0 ? 'SESSION COMPLETE' : 'READY TO FOCUS'}
        </Badge>

        <div className="text-7xl sm:text-9xl font-black font-mono tracking-tighter text-[#F4F7F3] drop-shadow-[0_0_50px_rgba(184,255,61,0.15)]">
          {formatTime(secondsLeft)}
        </div>

        <div className="w-full max-w-xs h-1.5 bg-[#102019] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#B8FF3D] rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="space-y-1">
          <h2 className="text-base font-bold text-[#F4F7F3]">
            Focus Score: {isRunning ? '98' : '—'} / 100
          </h2>
          <p className="text-xs text-[#A5B0AB]">
            {isRunning
              ? 'No distractions detected. Stay in the zone.'
              : 'Hit Start when you are ready for deep work.'}
          </p>
        </div>

        {savedMsg && (
          <div className="flex items-center gap-2 rounded-xl border border-[#B8FF3D]/30 bg-[#B8FF3D]/10 px-4 py-2 text-xs font-semibold text-[#B8FF3D]">
            <Zap className="h-3.5 w-3.5" />
            {savedMsg}
            {xpEarned > 0 && <span className="font-mono">(+{xpEarned} XP)</span>}
          </div>
        )}

        <div className="flex items-center gap-4 pt-4">
          <Button
            variant={isRunning ? 'secondary' : 'primary'}
            size="lg"
            onClick={() => setIsRunning(!isRunning)}
            className="w-36 font-bold"
            disabled={secondsLeft === 0}
          >
            {isRunning ? (
              <>
                <Pause className="h-4 w-4 mr-2" /> Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2 fill-current" /> Start
              </>
            )}
          </Button>

          <Button
            variant="primary"
            size="lg"
            className="px-6 font-bold"
            onClick={finishSession}
            disabled={saving || (initialSeconds - secondsLeft < 5 && secondsLeft !== 0)}
          >
            <CheckCircle2 className="h-4 w-4 mr-2" />
            {saving ? 'Saving…' : 'Finish Session'}
          </Button>

          <Button
            variant="ghost"
            size="lg"
            onClick={() => {
              setIsRunning(false);
              setSecondsLeft(initialSeconds);
              setSavedMsg('');
            }}
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

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
