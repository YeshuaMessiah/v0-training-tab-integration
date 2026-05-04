"use client";

import { cn } from "@/lib/utils";
import { Share2 } from "lucide-react";
import type { QuickDrawItem } from "@/lib/data";

interface QuickDrawCardProps {
  item: QuickDrawItem;
}

export function QuickDrawCard({ item }: QuickDrawCardProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: "FrontlinesFaith", text: item.text });
      } catch {
        // User cancelled
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(item.text);
    }
  };

  return (
    <div 
      className={cn(
        "relative rounded-xl bg-card p-4 mb-3 border-l-[3px] transition-transform hover:translate-x-0.5",
        item.type === "defense" && "border-l-[#ff8888]",
        item.type === "advance" && "border-l-[#7ab0ff]"
      )}
    >
      <div 
        className={cn(
          "text-[10px] font-bold uppercase tracking-widest mb-2",
          item.type === "defense" && "text-[#ff8888]",
          item.type === "advance" && "text-[#7ab0ff]"
        )}
      >
        {item.cat}
      </div>
      <p className="text-sm text-foreground leading-relaxed italic pr-16">
        {`"${item.text}"`}
      </p>
      <button
        onClick={handleShare}
        className="absolute top-3 right-3 rounded-md border border-border/50 bg-primary/10 px-2.5 py-1 text-[11px] text-primary hover:bg-primary/20 transition-colors"
      >
        <Share2 className="inline h-3 w-3 mr-1" />
        Share
      </button>
    </div>
  );
}
