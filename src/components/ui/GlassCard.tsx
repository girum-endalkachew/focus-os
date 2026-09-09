import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glow?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, glow = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass-card rounded-2xl p-6 transition-all duration-300",
          glow && "focus-glow border-lime-400",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';
