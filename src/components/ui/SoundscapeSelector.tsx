'use client';

import React, { useState, useEffect, useRef } from 'react';
import { GlassCard } from './GlassCard';
import { Volume2, VolumeX, CloudRain, Waves, Radio, Coffee, LucideIcon } from 'lucide-react';

interface Soundscape {
  id: string;
  name: string;
  icon: LucideIcon;
}

export const SoundscapeSelector = () => {
  const [activeSound, setActiveSound] = useState<string | null>(null);
  const [volume, setVolume] = useState<number>(70);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const activeNodesRef = useRef<AudioNode[]>([]);

  const soundscapes: Soundscape[] = [
    { id: 'rain', name: 'Cyber Rain', icon: CloudRain },
    { id: 'binaural', name: 'Deep Delta 4Hz', icon: Waves },
    { id: 'cafe', name: 'Tokyo Cafe', icon: Coffee },
    { id: 'white', name: 'Static White', icon: Radio },
  ];

  // Stop active sounds
  const stopAudio = () => {
    activeNodesRef.current.forEach((node) => {
      try {
        if ('stop' in node && typeof (node as any).stop === 'function') {
          (node as any).stop();
        }
        node.disconnect();
      } catch (e) {}
    });
    activeNodesRef.current = [];
  };

  // Start sound generation using Web Audio API
  const playSound = (id: string) => {
    stopAudio();

    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(volume / 100, ctx.currentTime);
    masterGain.connect(ctx.destination);
    masterGainRef.current = masterGain;

    if (id === 'white' || id === 'rain' || id === 'cafe') {
      // Create Pink/Brown noise buffer for ambient rain and cafe
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        if (id === 'rain') {
          // Brown noise filter for rain
          data[i] = (lastOut + 0.02 * white) / 1.02;
          lastOut = data[i];
          data[i] *= 3.5;
        } else if (id === 'cafe') {
          // Filtered warm room noise
          data[i] = (lastOut + 0.05 * white) / 1.05;
          lastOut = data[i];
          data[i] *= 2.0;
        } else {
          // Pure white noise
          data[i] = white * 0.15;
        }
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = buffer;
      noiseSource.loop = true;

      // Add lowpass filter for realistic rain dampening
      const filter = ctx.createBiquadFilter();
      filter.type = id === 'rain' ? 'lowpass' : 'bandpass';
      filter.frequency.setValueAtTime(id === 'rain' ? 800 : 1200, ctx.currentTime);

      noiseSource.connect(filter);
      filter.connect(masterGain);
      noiseSource.start();

      activeNodesRef.current.push(noiseSource, filter);
    } else if (id === 'binaural') {
      // 4Hz Delta Binaural Beats (100Hz left ear, 104Hz right ear)
      const oscLeft = ctx.createOscillator();
      const oscRight = ctx.createOscillator();

      oscLeft.type = 'sine';
      oscRight.type = 'sine';

      oscLeft.frequency.setValueAtTime(100, ctx.currentTime);
      oscRight.frequency.setValueAtTime(104, ctx.currentTime);

      const merger = ctx.createChannelMerger(2);

      oscLeft.connect(merger, 0, 0);
      oscRight.connect(merger, 0, 1);

      merger.connect(masterGain);

      oscLeft.start();
      oscRight.start();

      activeNodesRef.current.push(oscLeft, oscRight, merger);
    }
  };

  const handleToggleSound = (id: string) => {
    if (activeSound === id) {
      stopAudio();
      setActiveSound(null);
    } else {
      setActiveSound(id);
      playSound(id);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(newVolume / 100, audioCtxRef.current.currentTime);
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <GlassCard className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#A5B0AB] uppercase tracking-wider">
          Ambient Soundscapes
        </h3>
        <button
          onClick={() => {
            if (activeSound) {
              stopAudio();
              setActiveSound(null);
            } else {
              handleToggleSound('rain');
            }
          }}
          className="text-[#A5B0AB] hover:text-[#F4F7F3] cursor-pointer transition-colors"
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
              onClick={() => handleToggleSound(sound.id)}
              className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#102019] text-[#B8FF3D] border-[#B8FF3D]/40 focus-glow'
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
            onChange={(e) => handleVolumeChange(Number(e.target.value))}
            className="w-full accent-[#B8FF3D] bg-[#102019] h-1.5 rounded-lg cursor-pointer"
          />
          <span className="text-xs font-mono text-[#A5B0AB] w-8">{volume}%</span>
        </div>
      )}
    </GlassCard>
  );
};
