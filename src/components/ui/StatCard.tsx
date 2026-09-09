import React from 'react';
import { GlassCard } from './GlassCard';
import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: string;
  subtitle?: string;
  icon?: React.ReactNode;
  trend?: string;
  glow?: boolean;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  subtitle,
  icon,
  trend,
  glow = false,
  className,
}) => {
  return (
    <GlassCard glow={glow} className={cn("flex flex-col justify-between gap-3", className)}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold tracking-wider text-[#A5B0AB] uppercase">
          {label}
        </span>
        {icon && <div className="text-[#B8FF3D] p-2 bg-[#102019] rounded-xl">{icon}</div>}
      </div>

      <div>
        <div className="text-3xl font-extrabold tracking-tight text-[#F4F7F3]">
          {value}
        </div>
        {(subtitle || trend) && (
          <div className="flex items-center gap-2 mt-1 text-xs text-[#65726A]">
            {trend && <span className="text-[#7CFF68] font-medium">{trend}</span>}
            {subtitle && <span>{subtitle}</span>}
          </div>
        )}
      </div>
    </GlassCard>
  );
};
