import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  fallback: string;
  size?: 'sm' | 'md' | 'lg';
  isFocusing?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  fallback,
  size = 'md',
  isFocusing = false,
  className,
  ...props
}) => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
  };

  return (
    <div className="relative inline-block" {...props}>
      <div
        className={cn(
          "relative flex items-center justify-center rounded-full overflow-hidden bg-[#102019] border border-white/10 text-[#F4F7F3] font-semibold uppercase",
          sizes[size],
          isFocusing && "ring-2 ring-[#B8FF3D] ring-offset-2 ring-offset-[#050808]",
          className
        )}
      >
        {src ? (
          <img src={src} alt={fallback} className="w-full h-full object-cover" />
        ) : (
          <span>{fallback.slice(0, 2)}</span>
        )}
      </div>
      {isFocusing && (
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#B8FF3D] border-2 border-[#050808] rounded-full focus-glow" />
      )}
    </div>
  );
};
