"use client";

import { ShieldLogo } from "./shield-logo";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export function TopBar({ searchValue, onSearchChange }: TopBarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[var(--navy-2)]">
      <div className="flex items-center gap-3 px-4 py-3">
        <ShieldLogo size={32} />
        <span className="font-serif text-lg font-black tracking-wide text-primary">
          FrontlinesFaith
        </span>
        <div className="relative ml-auto">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input
            type="search"
            aria-label="Search apologetics content"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className={cn(
              "h-9 rounded-full border-border bg-input pl-9 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-primary sm:w-48",
              searchValue ? "w-48 pr-8" : "w-32 pr-3 focus:w-48"
            )}
          />
          {searchValue && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
