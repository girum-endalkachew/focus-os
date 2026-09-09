import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', icon, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        {icon && <div className="absolute left-3.5 text-[#65726A]">{icon}</div>}
        <input
          type={type}
          ref={ref}
          className={cn(
            "w-full bg-[#0B1510] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#F4F7F3] placeholder-[#65726A] outline-none transition-all focus:border-[#B8FF3D] focus:ring-1 focus:ring-[#B8FF3D]/50",
            icon && "pl-10",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
