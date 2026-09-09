import React from 'react';
import { cn } from '@/lib/utils';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, children, active = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "p-2.5 rounded-xl border border-transparent text-[#A5B0AB] hover:text-[#F4F7F3] hover:bg-white/5 transition-all active:scale-95 cursor-pointer",
          active && "bg-[#102019] border-white/10 text-[#B8FF3D]",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
