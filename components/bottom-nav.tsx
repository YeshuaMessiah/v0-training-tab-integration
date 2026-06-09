"use client";

import { cn } from "@/lib/utils";
import { Home, Shield, Sword, Building2, Target, GraduationCap } from "lucide-react";
import type { TabType } from "@/lib/data";

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

// ENHANCEMENT 1: Added "quickdraw" tab — was missing from nav, only existed
// in the home grid. Users had no way to reach Quick Draw from other screens.
// Removed "scripture" to keep the bar at 6 items (comfortable tap targets).
// Scripture is still reachable from the home grid and search.
const tabs: { id: TabType; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "defend", label: "Defend", icon: Shield },
  { id: "advance", label: "Advance", icon: Sword },
  { id: "islam", label: "Know Islam", icon: Building2 },
  { id: "quickdraw", label: "Quick Draw", icon: Target },
  { id: "training", label: "Training", icon: GraduationCap },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-[var(--navy-2)] safe-area-bottom"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              aria-label={tab.label}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 py-2.5 px-1 text-[10px] tracking-wide transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon
                className={cn(
                  "h-[18px] w-[18px]",
                  isActive && "drop-shadow-[0_0_4px_rgba(201,168,76,0.6)]"
                )}
              />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
