'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { 
  Sparkles, 
  Code, 
  GraduationCap, 
  Briefcase, 
  Palette, 
  User, 
  Target, 
  Sun, 
  Moon, 
  Sunrise, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2 
} from 'lucide-react';

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    domain: 'Coding',
    dailyTargetHours: 4,
    peakTime: 'Morning (9 AM - 12 PM)',
    firstGoal: 'Build FocusOS MVP',
    experienceMode: 'balanced',
  });

  const domains = [
    { id: 'Coding', label: 'Coding & Engineering', icon: Code },
    { id: 'Study', label: 'Study & Academics', icon: GraduationCap },
    { id: 'Business', label: 'Business & Startup', icon: Briefcase },
    { id: 'Creative', label: 'Creative & Design', icon: Palette },
    { id: 'Personal', label: 'Personal Growth', icon: User },
  ];

  const peakTimes = [
    { id: 'Morning (6 AM - 12 PM)', label: 'Morning Peak (6 AM - 12 PM)', icon: Sunrise },
    { id: 'Afternoon (12 PM - 5 PM)', label: 'Afternoon Peak (12 PM - 5 PM)', icon: Sun },
    { id: 'Night (5 PM - 2 AM)', label: 'Night Owl (5 PM - 2 AM)', icon: Moon },
  ];

  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1);
    } else {
      // Save onboarding preferences to localStorage or backend API
      if (typeof window !== 'undefined') {
        localStorage.setItem('focusos_onboarding', JSON.stringify(formData));
      }
      router.push('/app');
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050808] px-4 py-12 text-[#F4F7F3]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(184,255,61,0.08),_transparent_55%)]" />

      <GlassCard className="relative w-full max-w-xl space-y-8 p-8 border-white/10">
        {/* Step Progress Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#B8FF3D] font-black text-[#050808]">F</div>
            <span className="font-bold text-sm tracking-tight">FocusOS Onboarding</span>
          </div>
          <span className="font-mono text-xs text-[#A5B0AB]">Step {step} of 6</span>
        </div>

        {/* STEP 1: Welcome */}
        {step === 1 && (
          <div className="space-y-6 text-center py-4">
            <Badge variant="accent" className="mx-auto px-3 py-1">
              <Sparkles className="h-3.5 w-3.5" /> Welcome to FocusOS
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Let&apos;s build your ideal focus routine.
            </h1>
            <p className="text-sm text-[#A5B0AB] max-w-md mx-auto leading-relaxed">
              We will customize your daily targets, focus modes, and analytics to match your exact work style in under 60 seconds.
            </p>
          </div>
        )}

        {/* STEP 2: Work Domain */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold">What are you working toward?</h2>
              <p className="text-xs text-[#A5B0AB]">Select your primary focus area.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {domains.map((item) => {
                const Icon = item.icon;
                const isSelected = formData.domain === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setFormData({ ...formData, domain: item.id })}
                    className={`flex items-center gap-3 p-4 rounded-xl border text-left text-sm font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#102019] text-[#B8FF3D] border-[#B8FF3D]/40 focus-glow'
                        : 'bg-[#0B1510] text-[#A5B0AB] border-white/5 hover:border-white/10'
                    }`}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: Daily Target */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold">What is your daily focus target?</h2>
              <p className="text-xs text-[#A5B0AB]">Target deep work hours per day.</p>
            </div>
            <div className="space-y-4 py-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#A5B0AB]">Daily Goal</span>
                <span className="text-3xl font-black font-mono text-[#B8FF3D]">{formData.dailyTargetHours} Hours</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={formData.dailyTargetHours}
                onChange={(e) => setFormData({ ...formData, dailyTargetHours: Number(e.target.value) })}
                className="w-full accent-[#B8FF3D] bg-[#102019] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#65726A]">
                <span>1h (Light)</span>
                <span>4h (Balanced)</span>
                <span>8h+ (Intense)</span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Peak Productivity Time */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold">When are you most productive?</h2>
              <p className="text-xs text-[#A5B0AB]">FocusOS AI will optimize recommendations around this window.</p>
            </div>
            <div className="space-y-3">
              {peakTimes.map((item) => {
                const Icon = item.icon;
                const isSelected = formData.peakTime === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setFormData({ ...formData, peakTime: item.id })}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#102019] text-[#B8FF3D] border-[#B8FF3D]/40'
                        : 'bg-[#0B1510] text-[#A5B0AB] border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </div>
                    {isSelected && <CheckCircle2 className="h-4 w-4 text-[#B8FF3D]" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 5: Choose First Goal */}
        {step === 5 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold">Choose your first goal</h2>
              <p className="text-xs text-[#A5B0AB]">What will you focus on during your first session?</p>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-medium text-[#A5B0AB]">Goal Title</label>
              <Input
                placeholder="e.g. Build FocusOS authentication & Prisma models"
                icon={<Target className="h-4 w-4" />}
                value={formData.firstGoal}
                onChange={(e) => setFormData({ ...formData, firstGoal: e.target.value })}
              />
            </div>
          </div>
        )}

        {/* STEP 6: Final Experience Selection */}
        {step === 6 && (
          <div className="space-y-6 text-center">
            <Badge variant="success" className="mx-auto px-3 py-1">
              <CheckCircle2 className="h-3.5 w-3.5" /> Workspace Ready
            </Badge>
            <h2 className="text-2xl font-bold">Your custom FocusOS is configured!</h2>
            <div className="p-4 rounded-xl border border-white/10 bg-[#0B1510] text-left text-xs space-y-2 text-[#A5B0AB]">
              <div className="flex justify-between"><span>Focus Area:</span> <strong className="text-[#F4F7F3]">{formData.domain}</strong></div>
              <div className="flex justify-between"><span>Daily Target:</span> <strong className="text-[#B8FF3D]">{formData.dailyTargetHours} Hours/day</strong></div>
              <div className="flex justify-between"><span>Peak Window:</span> <strong className="text-[#F4F7F3]">{formData.peakTime}</strong></div>
              <div className="flex justify-between"><span>First Goal:</span> <strong className="text-[#F4F7F3]">{formData.firstGoal}</strong></div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          {step > 1 ? (
            <Button variant="ghost" size="md" onClick={handleBack}>
              <ArrowLeft className="h-4 w-4 mr-1.5" /> Back
            </Button>
          ) : <div />}

          <Button variant="primary" size="md" onClick={handleNext}>
            {step === 6 ? 'Enter Workspace' : 'Continue'} <ArrowRight className="h-4 w-4 ml-1.5" />
          </Button>
        </div>
      </GlassCard>
    </div>
  );
}
