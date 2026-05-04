"use client";

import { cn } from "@/lib/utils";

interface ShieldLogoProps {
  size?: number;
  className?: string;
}

export function ShieldLogo({ size = 32, className }: ShieldLogoProps) {
  const height = Math.round(size * 1.125);
  
  return (
    <svg 
      width={size} 
      height={height} 
      viewBox="0 0 32 36" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
    >
      <path 
        d="M16 1L2 7.5V19C2 27.5 8.5 34.5 16 36C23.5 34.5 30 27.5 30 19V7.5L16 1Z" 
        fill="var(--navy-3, #162440)" 
        stroke="var(--gold, #C9A84C)" 
        strokeWidth="1"
      />
      <rect x="14.5" y="9" width="3" height="18" rx="0.5" fill="var(--gold, #C9A84C)" />
      <rect x="8" y="17" width="16" height="3" rx="0.5" fill="var(--gold, #C9A84C)" />
    </svg>
  );
}

export function ShieldLogoLarge({ size = 52, className }: ShieldLogoProps) {
  const height = Math.round(size * 1.115);
  
  return (
    <svg 
      width={size} 
      height={height} 
      viewBox="0 0 52 58" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
    >
      <path 
        d="M26 2L4 12V30C4 43 14 54 26 57C38 54 48 43 48 30V12L26 2Z" 
        fill="var(--navy-2, #0f1e38)" 
        stroke="var(--gold, #C9A84C)" 
        strokeWidth="1.5"
      />
      <rect x="24" y="16" width="4" height="26" rx="1" fill="var(--gold, #C9A84C)" />
      <rect x="13" y="27" width="26" height="4" rx="1" fill="var(--gold, #C9A84C)" />
    </svg>
  );
}
