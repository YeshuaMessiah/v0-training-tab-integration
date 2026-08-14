"use client";

import { ADVANCE_DATA } from "@/lib/data";
import { ApologeticsCard } from "@/components/apologetics-card";
import { Sword } from "lucide-react";

interface AdvanceScreenProps {
  bookmarks: Set<string>;
  onToggleBookmark: (id: string) => void;
}

export function AdvanceScreen({ bookmarks, onToggleBookmark }: AdvanceScreenProps) {
  let itemIndex = 0;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h1 className="font-serif text-xl font-bold text-primary flex items-center gap-2">
          <Sword className="h-5 w-5" aria-hidden="true" />
          Advance
        </h1>
        <p className="text-xs text-muted-foreground mt-1">
          Lovingly challenging Islamic claims with evidence
        </p>
      </div>

      {/* Categories */}
      {ADVANCE_DATA.map((category) => (
        <div key={category.cat}>
          <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-1.5 mb-3">
            {category.cat}
          </div>
          
          {category.items.map((item) => {
            const id = `a${itemIndex++}`;
            return (
              <ApologeticsCard
                key={id}
                item={item}
                type="advance"
                isBookmarked={bookmarks.has(id)}
                onToggleBookmark={() => onToggleBookmark(id)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
