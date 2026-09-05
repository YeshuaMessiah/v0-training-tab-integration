"use client";

import { ShieldLogo } from "./shield-logo";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface TopBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export function TopBar({ searchValue, onSearchChange }: TopBarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[var(--navy-2)]">
      <div className="flex items-center gap-3 px-4 py-3">
        <ShieldLogo size={32} />
        <div className="flex flex-col">
          <span className="font-serif text-lg font-black tracking-wide text-primary">
            FrontlinesFaith
          </span>
          <span className="text-[11px] tracking-widest text-muted-foreground uppercase">
            Armed with Truth
          </span>
        </div>
        <div className="relative ml-auto">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            aria-label="Search apologetics content"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-9 w-32 rounded-full border-border bg-input pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:w-48 focus:border-primary sm:w-48"
          />
        </div>
      </div>
    </header>
  );
}
