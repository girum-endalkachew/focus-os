'use client';

import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Volume2, VolumeX, CloudRain, Waves, Radio, Coffee, LucideIcon } from 'lucide-react';

interface Soundscape {
  id: string;
  name: string;
  icon: LucideIcon;
}

export const SoundscapeSelector = () => {
  const [activeSound, setActiveSound] = useState<string | null>('rain');
  const [volume, setVolume] = useState<number>(80);

  const soundscapes: Soundscape[] = [
    { id: 'rain', name: 'Cyber Rain', icon: CloudRain },
    { id: 'binaural', name: 'Deep Delta 4Hz', icon: Waves },
    { id: 'cafe', name: 'Tokyo Cafe', icon: Coffee },
    { id: 'white', name: 'Static White', icon: Radio },
  ];

  return (
    <GlassCard className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#A5B0AB] uppercase tracking-wider">
          Ambient Soundscapes
        </h3>
        <button
          onClick={() => setActiveSound(activeSound ? null : 'rain')}
          className="text-[#A5B0AB] hover:text-[#F4F7F3] cursor-pointer"
        >
          {activeSound ? <Volume2 className="w-4 h-4 text-[#B8FF3D]" /> : <VolumeX className="w-4 h-4 text-[#65726A]" />}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {soundscapes.map((sound) => {
          const Icon = sound.icon;
          const isActive = activeSound === sound.id;
          return (
            <button
              key={sound.id}
              onClick={() => setActiveSound(isActive ? null : sound.id)}
              className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#102019] text-[#B8FF3D] border-[#B8FF3D]/30 focus-glow'
                  : 'bg-[#0B1510] text-[#A5B0AB] border-white/5 hover:border-white/10'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{sound.name}</span>
            </button>
          );
        })}
      </div>

      {activeSound && (
        <div className="flex items-center gap-3 pt-2">
          <span className="text-xs text-[#65726A]">Volume</span>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full accent-[#B8FF3D] bg-[#102019] h-1.5 rounded-lg cursor-pointer"
          />
          <span className="text-xs font-mono text-[#A5B0AB] w-8">{volume}%</span>
        </div>
      )}
    </GlassCard>
  );
};
