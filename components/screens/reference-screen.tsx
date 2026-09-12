"use client";

import { useMemo, useState } from "react";
import { REFERENCE_DATA, type ReferenceSection } from "@/lib/data";
import { ChevronDown, Sword, Shield, Library, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

type FilterType = "all" | "advance" | "defend";

const FILTERS: { id: FilterType; label: string }[] = [
  { id: "all", label: "All" },
  { id: "advance", label: "Challenge Islam" },
  { id: "defend", label: "Defend the Faith" },
];

export function ReferenceScreen() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterType>("all");
  const [query, setQuery] = useState("");

  const sections = useMemo(() => {
    const q = query.trim().toLowerCase();
    return REFERENCE_DATA.filter((section) => {
      if (filter !== "all" && section.side !== filter) return false;
      if (!q) return true;
      // match on title, desc, or any entry text / ref
      if (section.title.toLowerCase().includes(q)) return true;
      if (section.desc?.toLowerCase().includes(q)) return true;
      return section.subsections.some((sub) =>
        sub.entries.some(
          (e) =>
            e.text.toLowerCase().includes(q) ||
            e.ref?.toLowerCase().includes(q) ||
            e.label?.toLowerCase().includes(q) ||
            sub.heading?.toLowerCase().includes(q)
        )
      );
    });
  }, [filter, query]);

  const totalEntries = useMemo(
    () =>
      REFERENCE_DATA.reduce(
        (sum, s) =>
          sum + s.subsections.reduce((a, sub) => a + sub.entries.length, 0),
        0
      ),
    []
  );
  const filteredEntries = useMemo(
    () =>
      sections.reduce(
        (sum, s) => sum + s.subsections.reduce((a, sub) => a + sub.entries.length, 0),
        0
      ),
    [sections]
  );

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h1 className="font-serif text-xl font-bold text-primary flex items-center gap-2">
          <Library className="h-5 w-5" aria-hidden="true" />
          Reference Library
        </h1>
        <p className="text-xs text-muted-foreground mt-1">
          {sections.length === REFERENCE_DATA.length && !query.trim() && filter === "all"
            ? `Complete apologetics reference — ${REFERENCE_DATA.length} sections, ${totalEntries} cited facts`
            : `${sections.length} sections, ${filteredEntries} cited facts matching your filters`}
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search facts, verses, hadith refs..."
          aria-label="Search the reference library"
          className="pl-9"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-2" role="tablist" aria-label="Filter reference sections">
        {FILTERS.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.id)}
              className={cn(
                "flex-1 rounded-lg border px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wide transition-colors",
                active
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Sections */}
      {sections.length === 0 ? (
        <p className="py-8 text-center text-sm text-muted-foreground">
          {`No results for "${query}".`}
        </p>
      ) : (
        <div className="space-y-2.5">
          {sections.map((section) => (
            <ReferenceAccordion
              key={section.id}
              section={section}
              isOpen={openId === section.id}
              onToggle={() =>
                setOpenId((prev) => (prev === section.id ? null : section.id))
              }
              highlight={query.trim().toLowerCase()}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ReferenceAccordion({
  section,
  isOpen,
  onToggle,
  highlight,
}: {
  section: ReferenceSection;
  isOpen: boolean;
  onToggle: () => void;
  highlight: string;
}) {
  const isAdvance = section.side === "advance";
  const accent = isAdvance ? "text-claim-red" : "text-advance-blue";
  const Icon = isAdvance ? Sword : Shield;

  const panelId = `ref-panel-${section.id}`;
  const btnId = `ref-btn-${section.id}`;

  return (
    <div className="overflow-hidden rounded-xl border border-accent/40 bg-card">
      <button
        id={btnId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center gap-3 p-3.5 text-left"
      >
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-[var(--navy-2)]",
            accent
          )}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-[10px] font-bold tabular-nums text-muted-foreground">
              {String(section.num).padStart(2, "0")}
            </span>
            <h3 className={cn("font-serif text-[15px] font-bold leading-tight text-balance", accent)}>
              {section.title}
            </h3>
          </div>
          {section.desc && !isOpen && (
            <p className="mt-0.5 line-clamp-1 text-[11px] text-muted-foreground">
              {section.desc}
            </p>
          )}
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={btnId}
          className="border-t border-border/50 px-3.5 pb-3.5 pt-3"
        >
          {section.desc && (
            <p className="mb-3 text-[12px] italic leading-relaxed text-secondary-foreground/70">
              {section.desc}
            </p>
          )}

          <div className="space-y-3">
            {section.subsections.map((sub, si) => (
              <div key={si}>
                {sub.heading && (
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {sub.heading}
                  </div>
                )}
                <ul className="space-y-2">
                  {sub.entries.map((entry, ei) => (
                    <li
                      key={ei}
                      className="rounded-lg border border-border/40 bg-[var(--navy-2)]/40 p-2.5"
                    >
                      {entry.ref && (
                        <span
                          className={cn(
                            "mb-1 inline-block rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-primary",
                          )}
                        >
                          {entry.ref}
                        </span>
                      )}
                      {entry.label && (
                        <div className="text-[12px] font-bold text-foreground">
                          {entry.label}
                        </div>
                      )}
                      <p className="text-[12.5px] leading-relaxed text-secondary-foreground/85">
                        {highlightText(entry.text, highlight)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Highlight matched search terms inside entry text.
function highlightText(text: string, term: string) {
  if (!term) return text;
  const idx = text.toLowerCase().indexOf(term);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="rounded bg-primary/30 text-foreground">
        {text.slice(idx, idx + term.length)}
      </mark>
      {text.slice(idx + term.length)}
    </>
  );
}
