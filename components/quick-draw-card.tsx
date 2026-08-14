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
        "rounded-xl bg-card p-4 mb-3 border-l-[3px] shadow-[0_2px_10px_rgba(0,0,0,0.35)] transition-transform active:scale-[0.98]",
        item.type === "defense" && "border-l-claim-red-strong",
        item.type === "advance" && "border-l-advance-blue"
      )}
    >
      <div 
        className={cn(
          "text-[11px] font-bold uppercase tracking-widest mb-2",
          item.type === "defense" && "text-claim-red-strong",
          item.type === "advance" && "text-advance-blue"
        )}
      >
        {item.cat}
      </div>
      <p className="text-[15px] text-foreground leading-relaxed italic">
        {`"${item.text}"`}
      </p>
      {/* Share moved below the quote so long quotes are never clipped */}
      <div className="mt-3 flex justify-end">
        <button
          onClick={handleShare}
          aria-label="Share this response"
          className="rounded-md border border-border/50 bg-primary/10 px-2.5 py-1 text-[11px] text-primary hover:bg-primary/20 transition-colors"
        >
          <Share2 className="inline h-3 w-3 mr-1" />
          Share
        </button>
      </div>
    </div>
  );
}
