"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Star, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { DefendItem, AdvanceItem } from "@/lib/data";

interface ApologeticsCardProps {
  item: DefendItem | AdvanceItem;
  type: "defend" | "advance";
  isBookmarked?: boolean;
  onToggleBookmark?: () => void;
}

export function ApologeticsCard({ 
  item, 
  type, 
  isBookmarked = false,
  onToggleBookmark 
}: ApologeticsCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const isDefend = type === "defend";
  const defendItem = item as DefendItem;
  const advanceItem = item as AdvanceItem;
  
  const handleShare = async () => {
    const text = `${item.title} — ${isDefend ? defendItem.response?.substring(0, 120) : advanceItem.dilemma?.substring(0, 120)}...`;
    
    if (navigator.share) {
      try {
        await navigator.share({ title: "FrontlinesFaith", text });
      } catch {
        // User cancelled or error
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      // Could add toast notification here
    }
  };

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-4 mb-3 border-l-[3px] shadow-[0_2px_12px_rgba(0,0,0,0.35)] transition-shadow",
        // Category colour indicator on the left edge (scannable when collapsed)
        isDefend ? "border-l-destructive/60" : "border-l-advance-blue/60",
        isOpen && "border-primary/50 shadow-[0_4px_20px_rgba(201,168,76,0.08)]"
      )}
    >
      <div className="flex w-full items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="flex flex-1 items-center gap-2 text-left"
        >
          <span className="flex-1 font-serif text-base font-bold text-primary">
            {item.title}
          </span>

          <ChevronDown
            className={cn(
              "h-4 w-4 text-muted-foreground transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>

        {/* Bookmark moved to the far right, away from the expand target */}
        <Button
          variant="ghost"
          size="sm"
          aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          aria-pressed={isBookmarked}
          className={cn(
            "h-11 w-11 min-w-11 p-0 shrink-0",
            isBookmarked ? "text-primary" : "text-muted-foreground"
          )}
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark?.();
          }}
        >
          <Star className={cn("h-4 w-4", isBookmarked && "fill-current")} />
        </Button>
      </div>
      
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-border/50 space-y-4">
          <span 
            className={cn(
              "inline-block rounded-full px-3 py-1 text-[10px] font-semibold tracking-wider uppercase border",
              isDefend 
                ? "bg-destructive/30 text-destructive-foreground border-destructive/40"
                : "bg-accent/40 text-advance-blue border-accent/60"
            )}
          >
            {type}
          </span>
          
          {/* Islamic Claim or Question */}
          {isDefend && defendItem.claim && (
            <div className="space-y-1">
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--gold-2)]">
                Islamic Claim
              </h4>
              <p className="text-sm text-claim-red italic leading-relaxed">
                {`"${defendItem.claim}"`}
              </p>
            </div>
          )}
          
          {!isDefend && advanceItem.question && (
            <div className="space-y-1">
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--gold-2)]">
                The Question
              </h4>
              <p className="text-sm text-claim-red italic leading-relaxed">
                {advanceItem.question}
              </p>
            </div>
          )}
          
          {/* Response or Dilemma */}
          {isDefend && defendItem.response && (
            <div className="space-y-1">
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--gold-2)]">
                Christian Response
              </h4>
              <p className="text-sm text-secondary-foreground/80 leading-relaxed">
                {defendItem.response}
              </p>
            </div>
          )}
          
          {!isDefend && advanceItem.dilemma && (
            <div className="space-y-1">
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--gold-2)]">
                The Islamic Dilemma
              </h4>
              <p className="text-sm text-secondary-foreground/80 leading-relaxed">
                {advanceItem.dilemma}
              </p>
            </div>
          )}
          
          {/* Evidence */}
          {!isDefend && advanceItem.evidence && (
            <div className="space-y-1">
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--gold-2)]">
                The Evidence
              </h4>
              <p className="text-sm text-secondary-foreground/80 leading-relaxed">
                {advanceItem.evidence}
              </p>
            </div>
          )}
          
          {/* Scripture */}
          {isDefend && defendItem.scripture && (
            <div className="rounded-r-lg border-l-2 border-primary bg-primary/10 px-3 py-2">
              <p className="text-xs text-[var(--gold-2)] italic">
                {defendItem.scripture}
              </p>
            </div>
          )}
          
          {/* Logic & History */}
          {isDefend && defendItem.logic && (
            <div className="space-y-1">
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--gold-2)]">
                Logic & History
              </h4>
              <p className="text-sm text-secondary-foreground/80 leading-relaxed">
                {defendItem.logic}
              </p>
            </div>
          )}
          
          {/* Gospel Bridge / Invite */}
          {(isDefend ? defendItem.bridge : advanceItem.invite) && (
            <div className="rounded-lg border border-destructive/30 bg-destructive/15 px-3 py-2.5">
              <p className="text-xs text-claim-red">
                <span className="font-bold text-claim-red-strong">Gospel Bridge: </span>
                {isDefend ? defendItem.bridge : advanceItem.invite}
              </p>
            </div>
          )}
          
          {/* Actions */}
          <div className="flex justify-end pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="border-border/50 bg-primary/10 text-primary hover:bg-primary/20"
            >
              <Share2 className="mr-2 h-3 w-3" />
              Share
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
