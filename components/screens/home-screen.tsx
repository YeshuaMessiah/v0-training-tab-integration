"use client";

import { useMemo } from "react";
import { VERSES, DAILY_TOPICS, type TabType } from "@/lib/data";
import { Shield, Sword, BookOpen, Building2, Target, GraduationCap, Library, ChevronRight, Zap } from "lucide-react";
import { TrainingProgressCard } from "@/components/training-progress-card";

interface HomeScreenProps {
  onNavigate: (tab: TabType) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  // Get verse of the day based on current date
  const verse = useMemo(() => {
    const dayIndex = Math.floor(Date.now() / 86400000) % VERSES.length;
    return VERSES[dayIndex];
  }, []);

  // Get daily topic based on current date
  const dailyTopic = useMemo(() => {
    const dayIndex = Math.floor(Date.now() / 86400000) % DAILY_TOPICS.length;
    return DAILY_TOPICS[dayIndex];
  }, []);

  return (
    <div className="space-y-4">
      {/* Verse of the Day Banner */}
      <div className="relative overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-br from-card to-accent p-5 text-center">
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        <div className="relative">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-[var(--gold-2)] mb-2.5">
            Verse of the Day
          </div>
          <p className="font-serif text-[15px] text-[var(--gold-2)] italic mb-1.5">
            {`"${verse.text}"`}
          </p>
          <p className="text-xs text-muted-foreground">
            — {verse.ref}
          </p>
        </div>
      </div>

      {/* Training Progress Card — NEW */}
      <TrainingProgressCard onNavigate={onNavigate} />

      {/* Daily Challenge */}
      <div className="rounded-xl border border-destructive/35 bg-destructive/15 p-3.5">
        <h4 className="text-[13px] font-semibold uppercase tracking-wider text-claim-red-strong mb-1.5 flex items-center gap-2">
          <Zap className="h-4 w-4" aria-hidden="true" />
          {"Today's Topic to Master"}
        </h4>
        <p className="text-sm text-secondary-foreground/80">
          {dailyTopic}
        </p>
      </div>

      {/* Quick Navigation Grid */}
      <div className="grid grid-cols-3 gap-2.5">
        <QuickButton
          icon={Shield}
          label="Defend"
          sublabel="Answer attacks"
          onClick={() => onNavigate("defend")}
        />
        <QuickButton
          icon={Sword}
          label="Advance"
          sublabel="Ask questions"
          onClick={() => onNavigate("advance")}
        />
        <QuickButton
          icon={BookOpen}
          label="Scripture"
          sublabel="Bible by topic"
          onClick={() => onNavigate("scripture")}
        />
        <QuickButton
          icon={Building2}
          label="Know Islam"
          sublabel="Theology"
          onClick={() => onNavigate("islam")}
        />
        <QuickButton
          icon={Target}
          label="Quick Draw"
          sublabel="One-liners"
          onClick={() => onNavigate("quickdraw")}
        />
        <QuickButton
          icon={GraduationCap}
          label="Training"
          sublabel="Quiz yourself"
          onClick={() => onNavigate("training")}
          highlight
        />
      </div>

      {/* Reference Library — full apologetics reference */}
      <button
        onClick={() => onNavigate("reference")}
        className="flex w-full items-center gap-3 rounded-xl border border-primary/40 bg-gradient-to-br from-card to-accent p-3.5 text-left transition-colors hover:border-primary"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/10">
          <Library className="h-5 w-5 text-primary" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-serif text-[14px] font-bold text-[var(--gold-2)]">
            Reference Library
          </div>
          <p className="text-[11px] text-muted-foreground leading-tight">
            19 sections of cited facts — Quran, hadith &amp; scripture
          </p>
        </div>
        <ChevronRight className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
      </button>

      {/* Motto Bar */}
      <div className="rounded-lg bg-primary/10 py-3 px-4 text-center">
        <p className="font-serif text-[13px] italic text-primary">
          {`"Be strong and courageous — Joshua 1:9"`}
        </p>
      </div>
    </div>
  );
}

interface QuickButtonProps {
  icon: typeof Shield;
  label: string;
  sublabel: string;
  onClick: () => void;
  highlight?: boolean;
}

function QuickButton({ icon: Icon, label, sublabel, onClick, highlight }: QuickButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl border p-3 text-center transition-colors ${
        highlight 
          ? "border-primary/50 bg-primary/10 hover:bg-primary/20" 
          : "border-border bg-card hover:border-primary hover:bg-primary/5"
      }`}
    >
      <Icon className={`h-5 w-5 mx-auto mb-1 ${highlight ? "text-primary" : "text-primary"}`} />
      <div className="font-serif text-[12px] font-semibold text-primary">{label}</div>
      <div className="text-[10px] text-muted-foreground leading-tight">{sublabel}</div>
    </button>
  );
}
