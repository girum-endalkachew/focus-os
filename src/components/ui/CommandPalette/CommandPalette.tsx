'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  Timer, 
  FolderKanban, 
  Target, 
  LineChart, 
  Bot, 
  Settings, 
  X,
  Zap
} from 'lucide-react';

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const commands = [
    { label: 'Start Focus Mode Session', icon: Timer, action: () => router.push('/app/focus') },
    { label: 'View Active Projects', icon: FolderKanban, action: () => router.push('/app/projects') },
    { label: 'Open Focus Tasks Queue', icon: Target, action: () => router.push('/app/tasks') },
    { label: 'Check Performance Analytics', icon: LineChart, action: () => router.push('/app/analytics') },
    { label: 'Consult AI Productivity Coach', icon: Bot, action: () => router.push('/app/insights') },
    { label: 'Open Workspace Settings', icon: Settings, action: () => router.push('/app/settings') },
  ];

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#0B1510] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Search Header */}
        <div className="flex items-center border-b border-white/10 px-4 py-3">
          <Search className="h-5 w-5 text-[#B8FF3D] mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or search workspace (e.g. Focus, Projects)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-[#F4F7F3] placeholder-[#65726A] outline-none"
          />
          <button onClick={() => setIsOpen(false)} className="text-[#A5B0AB] hover:text-[#F4F7F3] cursor-pointer">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-xs text-[#65726A]">No matching commands found.</div>
          ) : (
            filtered.map((cmd) => {
              const Icon = cmd.icon;
              return (
                <button
                  key={cmd.label}
                  onClick={() => {
                    cmd.action();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl text-xs font-semibold text-[#A5B0AB] hover:text-[#F4F7F3] hover:bg-[#102019] transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-[#B8FF3D] group-hover:scale-110 transition-transform" />
                    <span>{cmd.label}</span>
                  </div>
                  <Zap className="h-3.5 w-3.5 text-[#65726A] group-hover:text-[#B8FF3D]" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcut tip */}
        <div className="border-t border-white/5 bg-[#050808] px-4 py-2 flex items-center justify-between text-[10px] text-[#65726A]">
          <span>Navigation Shortcut</span>
          <span className="font-mono">ESC to close</span>
        </div>
      </div>
    </div>
  );
};
