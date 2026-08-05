"use client";

import { useMemo } from "react";
import { DEFEND_DATA, ADVANCE_DATA, QUICKDRAW, REFERENCE_DATA, type DefendItem, type AdvanceItem, type QuickDrawItem } from "@/lib/data";
import { ApologeticsCard } from "@/components/apologetics-card";
import { QuickDrawCard } from "@/components/quick-draw-card";

interface ReferenceMatch {
  id: string;
  sectionTitle: string;
  side: "advance" | "defend";
  ref?: string;
  text: string;
}

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

  // Search the reference library (rendered as a separate section)
  const referenceMatches = useMemo(() => {
    const q = query.toLowerCase();
    const matches: ReferenceMatch[] = [];
    REFERENCE_DATA.forEach((section) => {
      section.subsections.forEach((sub, si) => {
        sub.entries.forEach((entry, ei) => {
          if (
            entry.text.toLowerCase().includes(q) ||
            entry.ref?.toLowerCase().includes(q) ||
            entry.label?.toLowerCase().includes(q) ||
            section.title.toLowerCase().includes(q)
          ) {
            matches.push({
              id: `r-${section.id}-${si}-${ei}`,
              sectionTitle: section.title,
              side: section.side,
              ref: entry.ref,
              text: entry.text,
            });
          }
        });
      });
    });
    return matches;
  }, [query]);

  const totalCount = results.length + referenceMatches.length;

  return (
    <div className="space-y-4">
      <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-1.5">
        Search Results ({totalCount})
      </div>

      {totalCount === 0 ? (
        <div className="text-center py-10 text-muted-foreground">
          No results found for &ldquo;{query}&rdquo;
        </div>
      ) : (
        <div className="space-y-4">
          {results.length > 0 && (
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

          {referenceMatches.length > 0 && (
            <div>
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Reference Library ({referenceMatches.length})
              </div>
              <ul className="space-y-2">
                {referenceMatches.map((m) => (
                  <li
                    key={m.id}
                    className="rounded-lg border border-accent/40 bg-card p-3"
                  >
                    <div className="mb-1 flex items-center gap-2">
                      {m.ref && (
                        <span className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-primary">
                          {m.ref}
                        </span>
                      )}
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-wide ${
                          m.side === "advance" ? "text-[#ffaaaa]" : "text-[#7ab0ff]"
                        }`}
                      >
                        {m.sectionTitle}
                      </span>
                    </div>
                    <p className="text-[12.5px] leading-relaxed text-secondary-foreground/85">
                      {m.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
