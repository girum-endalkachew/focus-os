import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-[#B8FF3D] text-[#050808] hover:bg-[#a3f024] font-semibold focus-glow',
      secondary: 'bg-[#102019] text-[#F4F7F3] border border-[#255255255]/10 hover:bg-[#183025]',
      ghost: 'bg-transparent text-[#A5B0AB] hover:text-[#F4F7F3] hover:bg-white/5',
      danger: 'bg-[#FF686B] text-white hover:bg-[#ff5255]',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs rounded-lg',
      md: 'px-4 py-2 text-sm rounded-xl',
      lg: 'px-6 py-3 text-base rounded-xl',
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
