import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number; // 0 to 100
  className?: string;
  glow?: boolean;
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  className,
  glow = true,
  color = 'bg-[#B8FF3D]',
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("w-full bg-[#102019] h-2 rounded-full overflow-hidden p-0.5 border border-white/5", className)}>
      <div
        className={cn(
          "h-full rounded-full transition-all duration-500 ease-out",
          color,
          glow && "shadow-[0_0_12px_rgba(184,255,61,0.5)]"
        )}
        style={{ width: `${clampedValue}%` }}
      />
    </div>
  );
};
