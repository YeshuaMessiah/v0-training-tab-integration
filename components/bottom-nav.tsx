"use client";

import { cn } from "@/lib/utils";
import { Home, Shield, Sword, BookOpen, Building2, Target, GraduationCap } from "lucide-react";
import type { TabType } from "@/lib/data";

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs: { id: TabType; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "defend", label: "Defend", icon: Shield },
  { id: "advance", label: "Advance", icon: Sword },
  { id: "scripture", label: "Scripture", icon: BookOpen },
  { id: "islam", label: "Know Islam", icon: Building2 },
  { id: "training", label: "Training", icon: GraduationCap },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-[var(--navy-2)] safe-area-bottom">
      <div className="flex">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
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
