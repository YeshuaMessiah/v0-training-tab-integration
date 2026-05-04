"use client";

import { useMemo } from "react";
import { DEFEND_DATA, ADVANCE_DATA, QUICKDRAW, type DefendItem, type AdvanceItem, type QuickDrawItem } from "@/lib/data";
import { ApologeticsCard } from "@/components/apologetics-card";
import { QuickDrawCard } from "@/components/quick-draw-card";

interface SearchResult {
  type: "defend" | "advance" | "quickdraw";
  item: DefendItem | AdvanceItem | QuickDrawItem;
  id: string;
}

interface SearchResultsProps {
  query: string;
  bookmarks: Set<string>;
  onToggleBookmark: (id: string) => void;
}

export function SearchResults({ query, bookmarks, onToggleBookmark }: SearchResultsProps) {
  const results = useMemo(() => {
    const q = query.toLowerCase();
    const matches: SearchResult[] = [];

    // Search defend items
    let defendIndex = 0;
    DEFEND_DATA.forEach((cat) => {
      cat.items.forEach((item) => {
        if (
          item.title.toLowerCase().includes(q) ||
          item.claim.toLowerCase().includes(q) ||
          item.response.toLowerCase().includes(q)
        ) {
          matches.push({ type: "defend", item, id: `d${defendIndex}` });
        }
        defendIndex++;
      });
    });

    // Search advance items
    let advanceIndex = 0;
    ADVANCE_DATA.forEach((cat) => {
      cat.items.forEach((item) => {
        if (
          item.title.toLowerCase().includes(q) ||
          item.question.toLowerCase().includes(q)
        ) {
          matches.push({ type: "advance", item, id: `a${advanceIndex}` });
        }
        advanceIndex++;
      });
    });

    // Search quickdraw items
    QUICKDRAW.forEach((item, index) => {
      if (
        item.text.toLowerCase().includes(q) ||
        item.cat.toLowerCase().includes(q)
      ) {
        matches.push({ type: "quickdraw", item, id: `q${index}` });
      }
    });

    return matches;
  }, [query]);

  return (
    <div className="space-y-4">
      <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-1.5">
        Search Results ({results.length})
      </div>

      {results.length === 0 ? (
        <div className="text-center py-10 text-muted-foreground">
          No results found for &ldquo;{query}&rdquo;
        </div>
      ) : (
        <div>
          {results.map((result) => {
            if (result.type === "quickdraw") {
              return (
                <QuickDrawCard 
                  key={result.id} 
                  item={result.item as QuickDrawItem} 
                />
              );
            }

            return (
              <ApologeticsCard
                key={result.id}
                item={result.item as DefendItem | AdvanceItem}
                type={result.type}
                isBookmarked={bookmarks.has(result.id)}
                onToggleBookmark={() => onToggleBookmark(result.id)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
