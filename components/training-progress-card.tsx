"use client";

import { useEffect, useState } from "react";
import { Flame, ChevronRight, Star, TrendingUp, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TRAINING_LEVELS } from "@/lib/data";
import type { TabType } from "@/lib/data";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TrainingStats {
  total: number;
  correct: number;
  streak: number;
  xp: number;
}

interface TrainingProgressCardProps {
  onNavigate: (tab: TabType) => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getLevel(xp: number) {
  let level = TRAINING_LEVELS[0];
  for (const l of TRAINING_LEVELS) {
    if (xp >= l.xp) level = l;
  }
  return level;
}

function getNextLevel(xp: number) {
  for (const l of TRAINING_LEVELS) {
    if (xp < l.xp) return l;
  }
  return null;
}

function getLevelIndex(xp: number) {
  let idx = 0;
  for (let i = 0; i < TRAINING_LEVELS.length; i++) {
    if (xp >= TRAINING_LEVELS[i].xp) idx = i;
  }
  return idx;
}

// ─── ENHANCEMENT 3: Shimmer Skeleton ─────────────────────────────────────────
// Shown while localStorage hasn't been read yet (avoids hydration mismatch
// and gives a polished loading feel rather than a blank gap).

function TrainingProgressSkeleton() {
  return (
    <Card className="border-primary/30 bg-gradient-to-br from-[var(--navy-3)] to-[var(--navy-2)]">
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-3">
          {/* Avatar skeleton */}
          <Skeleton className="h-10 w-10 flex-shrink-0 rounded-full bg-primary/10" />
          <div className="flex flex-1 flex-col gap-2">
            {/* Title line */}
            <Skeleton className="h-3.5 w-28 rounded bg-primary/10" />
            {/* XP bar */}
            <Skeleton className="h-1.5 w-full rounded-full bg-primary/10" />
            {/* Stats strip */}
            <Skeleton className="h-3 w-40 rounded bg-primary/10" />
          </div>
          {/* Button skeleton */}
          <Skeleton className="h-8 w-20 flex-shrink-0 rounded-md bg-primary/10" />
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function TrainingProgressCard({ onNavigate }: TrainingProgressCardProps) {
  const [stats, setStats] = useState<TrainingStats | null>(null); // null = not yet loaded

  // ── ENHANCEMENT 4: Listen for live stat updates from TrainingScreen ─────────
  // TrainingScreen dispatches "ff-stats-updated" after every saveStats() call.
  // This means the card re-reads localStorage and updates immediately — no
  // page reload required even when the user is mid-session in Training tab.
  useEffect(() => {
    function loadStats() {
      const saved = localStorage.getItem("ff-training-stats");
      if (saved) {
        try {
          setStats(JSON.parse(saved));
          return;
        } catch {
          // ignore invalid JSON
        }
      }
      // No saved stats yet → new user state
      setStats({ total: 0, correct: 0, streak: 0, xp: 0 });
    }

    // Initial load
    loadStats();

    // Live sync: re-read whenever TrainingScreen saves new stats
    window.addEventListener("ff-stats-updated", loadStats);
    return () => window.removeEventListener("ff-stats-updated", loadStats);
  }, []);

  // ── ENHANCEMENT 3: Show shimmer until localStorage is read ──────────────────
  if (stats === null) {
    return <TrainingProgressSkeleton />;
  }

  // ─── Derived values ─────────────────────────────────────────────────────────
  const level = getLevel(stats.xp);
  const nextLevel = getNextLevel(stats.xp);
  const levelIndex = getLevelIndex(stats.xp);
  const xpProgress = nextLevel
    ? Math.round(((stats.xp - level.xp) / (nextLevel.xp - level.xp)) * 100)
    : 100;
  const accuracy =
    stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : null;
  const isNewUser = stats.total === 0;

  return (
    <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-br from-[var(--navy-3)] to-[var(--navy-2)]">
      {/* Subtle shield watermark */}
      <div
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-[0.04]"
        aria-hidden
      >
        <svg viewBox="0 0 80 90" className="h-24 w-24" fill="var(--gold)">
          <path d="M40 4L74 16V42C74 62 40 82 40 82C40 82 6 62 6 42V16Z" />
        </svg>
      </div>

      <CardContent className="relative p-4">
        {isNewUser ? (
          // ── NEW USER STATE ────────────────────────────────────────────────
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">
                  Start Your Training
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Quiz yourself · Earn XP · Level up in faith
                </p>
              </div>
            </div>
            <Button
              size="sm"
              className="flex-shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => onNavigate("training")}
            >
              Begin
              <ChevronRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>
        ) : (
          // ── RETURNING USER STATE ──────────────────────────────────────────
          <div className="space-y-3">
            {/* Top row: level badge + streak + continue button */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2.5">
                {/* Level badge */}
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
                  <span className="text-xs font-bold text-primary">
                    L{levelIndex}
                  </span>
                </div>
                <div>
                  <p className="text-[13px] font-semibold leading-tight text-primary">
                    {level.title}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    Training Academy
                  </p>
                </div>
              </div>

              {/* Streak + Continue */}
              <div className="flex items-center gap-2">
                {stats.streak > 0 && (
                  <div className="flex items-center gap-1 rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-1">
                    <Flame className="h-3.5 w-3.5 text-orange-400" />
                    <span className="text-[11px] font-semibold text-orange-400">
                      {stats.streak}
                    </span>
                  </div>
                )}
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => onNavigate("training")}
                >
                  Continue
                  <ChevronRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </div>
            </div>

            {/* XP Progress bar */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Zap className="h-3 w-3 text-primary" />
                  <span className="text-[10px] font-medium text-primary">
                    {stats.xp} XP
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground">
                  {nextLevel
                    ? `${nextLevel.xp - stats.xp} XP to ${nextLevel.title}`
                    : "Max Level — Master Apologist!"}
                </span>
              </div>
              <Progress value={xpProgress} className="h-1.5 bg-primary/10" />
            </div>

            {/* Stats strip */}
            <div className="flex items-center gap-3 border-t border-primary/10 pt-2.5">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-[11px] text-muted-foreground">
                  {stats.total} answered
                </span>
              </div>
              {accuracy !== null && (
                <>
                  <span className="text-primary/20">·</span>
                  <span
                    className={`text-[11px] font-medium ${
                      accuracy >= 80
                        ? "text-green-400"
                        : accuracy >= 60
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}
                  >
                    {accuracy}% accuracy
                  </span>
                </>
              )}
              <span className="ml-auto text-[10px] text-muted-foreground/60">
                {xpProgress}% to next level
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
