"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { QUICKDRAW } from "@/lib/data";
import { QuickDrawCard } from "@/components/quick-draw-card";
import { Target } from "lucide-react";

type FilterType = "all" | "defense" | "advance";

export function QuickDrawScreen() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredItems = QUICKDRAW.filter(
    (item) => filter === "all" || item.type === filter
  );

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h1 className="font-serif text-xl font-bold text-primary flex items-center gap-2">
          <Target className="h-5 w-5" aria-hidden="true" />
          Quick Draw
        </h1>
        <p className="text-xs text-muted-foreground mt-1">
          One-liner responses for live conversation
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <FilterButton
          active={filter === "all"}
          onClick={() => setFilter("all")}
          variant="gold"
        >
          All
        </FilterButton>
        <FilterButton
          active={filter === "defense"}
          onClick={() => setFilter("defense")}
          variant="red"
        >
          Defense
        </FilterButton>
        <FilterButton
          active={filter === "advance"}
          onClick={() => setFilter("advance")}
          variant="blue"
        >
          Advance
        </FilterButton>
      </div>

      {/* Cards */}
      <div>
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground text-sm">
            No cards in this category yet.
          </div>
        ) : (
          filteredItems.map((item, index) => (
            <QuickDrawCard key={index} item={item} />
          ))
        )}
      </div>
    </div>
  );
}

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  variant: "gold" | "red" | "blue";
  children: React.ReactNode;
}

function FilterButton({ active, onClick, variant, children }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full px-3 py-1.5 text-[11px] font-semibold border transition-colors",
        variant === "gold" && (active 
          ? "bg-primary/20 border-primary text-primary" 
          : "bg-transparent border-primary/40 text-primary/60 hover:bg-primary/10"
        ),
        variant === "red" && (active 
          ? "bg-destructive/15 border-claim-red-strong/40 text-claim-red-strong" 
          : "bg-transparent border-claim-red-strong/30 text-claim-red-strong/60 hover:bg-destructive/10"
        ),
        variant === "blue" && (active 
          ? "bg-accent/25 border-advance-blue/40 text-advance-blue" 
          : "bg-transparent border-advance-blue/30 text-advance-blue/60 hover:bg-accent/15"
        )
      )}
    >
      {children}
    </button>
  );
}
