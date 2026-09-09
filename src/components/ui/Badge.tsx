import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'accent' | 'amber' | 'success' | 'warning' | 'danger' | 'info' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'accent',
  children,
  ...props
}) => {
  const variants = {
    accent: 'bg-[#B8FF3D]/10 text-[#B8FF3D] border-[#B8FF3D]/20',
    amber: 'bg-[#F58848]/10 text-[#F58848] border-[#F58848]/20',
    success: 'bg-[#7CFF68]/10 text-[#7CFF68] border-[#7CFF68]/20',
    warning: 'bg-[#F5B548]/10 text-[#F5B548] border-[#F5B548]/20',
    danger: 'bg-[#FF686B]/10 text-[#FF686B] border-[#FF686B]/20',
    info: 'bg-[#7DD3FC]/10 text-[#7DD3FC] border-[#7DD3FC]/20',
    outline: 'bg-transparent text-[#A5B0AB] border-white/10',
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold rounded-full border transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
