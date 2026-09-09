import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';
import { StatCard } from '@/components/ui/StatCard';
import { ProgressBar } from '@/components/ui/ProgressBar';
import {
  Timer,
  Flame,
  Target,
  LineChart,
  Sparkles,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Play,
  FolderKanban,
  Trophy,
  Bot,
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050808] text-[#F4F7F3] selection:bg-[#B8FF3D] selection:text-[#050808]">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050808]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#B8FF3D] text-lg font-black text-[#050808] focus-glow">
              F
            </div>
            <span className="text-lg font-extrabold tracking-tight">FocusOS</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-[#A5B0AB] md:flex">
            <a href="#features" className="hover:text-[#F4F7F3] transition-colors">Features</a>
            <a href="#how" className="hover:text-[#F4F7F3] transition-colors">How it works</a>
            <a href="#ai" className="hover:text-[#F4F7F3] transition-colors">AI</a>
            <a href="#pricing" className="hover:text-[#F4F7F3] transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-[#F4F7F3] transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button variant="primary" size="sm">Start focusing</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(184,255,61,0.08),_transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div className="space-y-8">
            <Badge variant="accent" className="px-3 py-1">
              <Sparkles className="h-3.5 w-3.5" /> Operating system for deep work
            </Badge>
            <h1 className="text-4xl font-black tracking-tight text-[#F4F7F3] sm:text-5xl lg:text-6xl leading-[1.05]">
              Turn your time into{' '}
              <span className="text-[#B8FF3D]">meaningful progress.</span>
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-[#A5B0AB] sm:text-lg">
              FocusOS is a calm, cinematic productivity system for deep work —
              focus sessions, projects, goals, analytics, streaks, and AI insights
              in one premium workspace.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/signup">
                <Button variant="primary" size="lg">
                  Start focusing <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#how">
                <Button variant="secondary" size="lg">
                  <Play className="mr-2 h-4 w-4" /> See how it works
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-[#65726A]">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[#7CFF68]" /> Free plan available</span>
              <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-[#7CFF68]" /> Your data stays yours</span>
              <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-[#7CFF68]" /> Built for deep work</span>
            </div>
          </div>

          {/* Live product UI preview — real components, not fake art */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[#B8FF3D]/5 blur-3xl" />
            <GlassCard glow className="relative space-y-5 border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#A5B0AB]">Today&apos;s deep work</span>
                <Badge variant="amber"><Flame className="h-3 w-3 fill-[#F58848]" /> 5 day streak</Badge>
              </div>
              <div className="text-5xl font-black tracking-tight font-mono text-[#F4F7F3]">4h 37m</div>
              <ProgressBar value={77} />
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/5 bg-[#0B1510] p-3">
                  <div className="text-[10px] uppercase text-[#65726A]">Sessions</div>
                  <div className="text-lg font-bold">6</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-[#0B1510] p-3">
                  <div className="text-[10px] uppercase text-[#65726A]">XP</div>
                  <div className="text-lg font-bold text-[#B8FF3D]">1,240</div>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-[#B8FF3D]/20 bg-[#0B1510] p-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#B8FF3D]" />
                  <span className="text-xs font-medium text-[#A5B0AB]">Active · Pomodoro</span>
                </div>
                <span className="font-mono text-sm font-bold text-[#B8FF3D]">21:45</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center space-y-4 mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">The problem isn&apos;t effort.</h2>
            <p className="text-[#A5B0AB]">It&apos;s fragmentation — distraction, invisible time, and goals disconnected from daily sessions.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: 'Too many distractions', d: 'Context switches kill deep work before it starts.' },
              { t: 'Invisible time', d: 'Hours disappear with no honest record of where they went.' },
              { t: 'Inconsistent systems', d: 'Productivity without streaks and feedback loops fades.' },
              { t: 'Disconnected goals', d: 'Long-term aims never touch today’s 25-minute block.' },
            ].map((item) => (
              <GlassCard key={item.t} className="space-y-2 p-5">
                <h3 className="font-bold text-[#F4F7F3]">{item.t}</h3>
                <p className="text-sm text-[#A5B0AB] leading-relaxed">{item.d}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Solution + Features */}
      <section id="features" className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6 space-y-12">
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">One system for focused work.</h2>
            <p className="text-[#A5B0AB]">Focus sessions, projects, goals, analytics, streaks, and AI — designed as a single operating system, not a pile of widgets.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Timer, title: 'Focus Mode', desc: 'Pomodoro, custom timers, breaks, and distraction-free deep work.' },
              { icon: FolderKanban, title: 'Projects', desc: 'Track hours against targets and start sessions from the work that matters.' },
              { icon: Target, title: 'Goals', desc: 'Daily to long-term goals linked to real focus time.' },
              { icon: LineChart, title: 'Analytics', desc: 'Honest charts of deep work, peaks, and trends.' },
              { icon: Bot, title: 'AI Insights', desc: 'Patterns and recommendations from your actual data.' },
              { icon: Flame, title: 'Streaks', desc: 'Protect consistency without turning work into a game show.' },
              { icon: Trophy, title: 'Achievements', desc: 'Mature milestones — common to legendary — not childish badges.' },
              { icon: Zap, title: 'XP & Levels', desc: 'Quiet progression that rewards real sessions, not noise.' },
            ].map((f) => (
              <GlassCard key={f.title} className="space-y-3 p-5 hover:border-white/15 transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#102019] text-[#B8FF3D]">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold">{f.title}</h3>
                <p className="text-sm text-[#A5B0AB] leading-relaxed">{f.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">How it works</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: '01', t: 'Plan', d: 'Set a daily focus target, pick a project, and queue the one task that matters.' },
              { n: '02', t: 'Focus', d: 'Enter Focus Mode. Timer, ambient soundscape, and a locked intention — nothing else.' },
              { n: '03', t: 'Reflect', d: 'See honest analytics, streaks, and AI insights that help you improve tomorrow.' },
            ].map((s) => (
              <GlassCard key={s.n} className="space-y-4 p-6">
                <span className="font-mono text-sm font-bold text-[#B8FF3D]">{s.n}</span>
                <h3 className="text-xl font-bold">{s.t}</h3>
                <p className="text-sm leading-relaxed text-[#A5B0AB]">{s.d}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* AI section */}
      <section id="ai" className="border-b border-white/10 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="space-y-5">
            <Badge variant="accent">AI productivity coach</Badge>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your productivity data should tell you something.
            </h2>
            <p className="text-[#A5B0AB] leading-relaxed">
              FocusOS AI reads your real sessions — not vibes — and surfaces patterns,
              peak windows, and calm recommendations you can act on.
            </p>
          </div>
          <GlassCard glow className="space-y-4 border-[#B8FF3D]/20">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-[#B8FF3D]" />
              <span className="text-sm font-bold">Daily insight</span>
            </div>
            <p className="rounded-xl border border-white/5 bg-[#0B1510] p-4 text-sm leading-relaxed text-[#A5B0AB]">
              “You completed 4h 37m of focused work today. Your strongest window is
              9:00–11:30 AM — protect tomorrow morning for your highest-priority project.”
            </p>
            <p className="text-[10px] uppercase tracking-wider text-[#65726A]">Generated from your session history · never fabricated stats</p>
          </GlassCard>
        </div>
      </section>

      {/* Gamification */}
      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2 items-center">
          <GlassCard className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A5B0AB]">Level 4 · Focused Scholar</span>
              <Badge variant="amber">1,240 XP</Badge>
            </div>
            <ProgressBar value={62} color="bg-[#F5B64B]" glow={false} />
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-xl bg-[#0B1510] border border-white/5 p-3">
                <Flame className="mx-auto mb-1 h-4 w-4 text-[#F58848]" />
                <div className="font-bold">5 days</div>
                <div className="text-[#65726A]">Streak</div>
              </div>
              <div className="rounded-xl bg-[#0B1510] border border-white/5 p-3">
                <Zap className="mx-auto mb-1 h-4 w-4 text-[#B8FF3D]" />
                <div className="font-bold">50 XP</div>
                <div className="text-[#65726A]">/ session</div>
              </div>
              <div className="rounded-xl bg-[#0B1510] border border-white/5 p-3">
                <Trophy className="mx-auto mb-1 h-4 w-4 text-[#F5B64B]" />
                <div className="font-bold">12</div>
                <div className="text-[#65726A]">Badges</div>
              </div>
            </div>
          </GlassCard>
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Progress that stays mature.</h2>
            <p className="text-[#A5B0AB] leading-relaxed">
              XP, levels, streaks, and achievements exist to reinforce consistency —
              premium and restrained, never childish arcade noise.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">Simple pricing</h2>
          <p className="mb-12 text-center text-[#A5B0AB]">Start free. Upgrade when deep work becomes a habit.</p>
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
            <GlassCard className="space-y-6 p-6">
              <div>
                <h3 className="text-lg font-bold">Free</h3>
                <p className="mt-1 text-3xl font-black">$0</p>
                <p className="text-sm text-[#A5B0AB]">Forever · core deep work</p>
              </div>
              <ul className="space-y-2 text-sm text-[#A5B0AB]">
                {['Focus Mode & timers', 'Projects & tasks', 'Basic analytics', 'Streaks'].map((x) => (
                  <li key={x} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#7CFF68]" /> {x}</li>
                ))}
              </ul>
              <Link href="/signup"><Button variant="secondary" className="w-full">Get started</Button></Link>
            </GlassCard>
            <GlassCard glow className="space-y-6 border-[#B8FF3D]/30 p-6">
              <div>
                <Badge variant="accent" className="mb-2">Pro</Badge>
                <h3 className="text-lg font-bold">Pro</h3>
                <p className="mt-1 text-3xl font-black">$8<span className="text-base font-medium text-[#A5B0AB]">/mo</span></p>
                <p className="text-sm text-[#A5B0AB]">Full system · AI · export</p>
              </div>
              <ul className="space-y-2 text-sm text-[#A5B0AB]">
                {['Everything in Free', 'AI Insights coach', 'Advanced analytics', 'Achievements & XP', 'Data export'].map((x) => (
                  <li key={x} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#B8FF3D]" /> {x}</li>
                ))}
              </ul>
              <Link href="/signup"><Button variant="primary" className="w-full">Start Pro trial</Button></Link>
              <p className="text-[10px] text-center text-[#65726A]">Payments not connected yet · UI only</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight">FAQ</h2>
          {[
            { q: 'What is FocusOS?', a: 'A productivity operating system for deep work — timers, projects, goals, analytics, streaks, and AI insights in one calm workspace.' },
            { q: 'Who is it for?', a: 'Students, engineers, founders, and creators who want honest focus time — not another noisy dashboard.' },
            { q: 'How does Focus Mode work?', a: 'Pick a duration (Pomodoro or custom), optional project/task, start the session, and stay with a minimal full-focus UI until you pause or complete.' },
            { q: 'Is my data private?', a: 'Yes. Your sessions and goals belong to you. We design for export and deletion. No selling personal productivity data.' },
            { q: 'Does FocusOS use AI?', a: 'Yes — optional insights generated from your real session history. We do not invent fake statistics.' },
            { q: 'Can I export my data?', a: 'Export is on the roadmap in Settings → Data. The product is built so you can leave with your history.' },
            { q: 'Is there a free plan?', a: 'Yes. Core focus, projects, and basic analytics stay free.' },
          ].map((item) => (
            <GlassCard key={item.q} className="space-y-2 p-5">
              <h3 className="font-bold text-[#F4F7F3]">{item.q}</h3>
              <p className="text-sm leading-relaxed text-[#A5B0AB]">{item.a}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-b border-white/10 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Your next deep-work session starts here.
          </h2>
          <p className="text-[#A5B0AB]">Create an account, set a target, and protect one honest block of focus today.</p>
          <Link href="/signup">
            <Button variant="primary" size="lg">
              Start focusing <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#B8FF3D] text-sm font-black text-[#050808]">F</div>
              <span className="font-extrabold">FocusOS</span>
            </div>
            <p className="text-sm text-[#A5B0AB] max-w-xs">Cinematic forest atmosphere. Premium deep-work software. Your time, made legible.</p>
          </div>
          {[
            { h: 'Product', links: ['Features', 'Pricing', 'Focus Mode', 'AI Insights'] },
            { h: 'Resources', links: ['FAQ', 'Changelog', 'Docs'] },
            { h: 'Company', links: ['Privacy', 'Terms', 'Contact'] },
          ].map((col) => (
            <div key={col.h}>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#65726A]">{col.h}</h4>
              <ul className="space-y-2 text-sm text-[#A5B0AB]">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-[#F4F7F3] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-6 pt-6 text-xs text-[#65726A]">
          © {new Date().getFullYear()} FocusOS. Built for deep work.
        </div>
      </footer>
    </div>
  );
}
