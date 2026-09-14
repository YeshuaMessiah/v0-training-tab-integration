"use client";

import { useEffect, useMemo, useState } from "react";
import { ACADEMY_LESSONS, type AcademyLesson } from "@/lib/data";
import { ArrowLeft, BookOpen, Check, ChevronLeft, ChevronRight, Clock3, Library, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type LessonProgress = Record<string, { mastered: boolean; reviewedAt: string; nextReviewAt: string }>;

const STORAGE_KEY = "ff-academy-lesson-progress";
const sourceFilters = ["All", "Quran", "Hadith", "Bible", "History", "Theology"] as const;

export function AcademyLibrary({ onBack }: { onBack: () => void }) {
  const [source, setSource] = useState<(typeof sourceFilters)[number]>("All");
  const [side, setSide] = useState<"all" | "advance" | "defend">("all");
  const [showDue, setShowDue] = useState(false);
  const [progress, setProgress] = useState<LessonProgress>({});
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { setProgress(JSON.parse(saved)); } catch { /* ignore malformed local data */ }
    }
  }, []);

  const filtered = useMemo(() => ACADEMY_LESSONS.filter((lesson) =>
    (source === "All" || lesson.sourceType === source) &&
    (side === "all" || lesson.side === side) &&
    (!showDue || Boolean(progress[lesson.id]?.nextReviewAt && new Date(progress[lesson.id].nextReviewAt) <= new Date()))
  ), [source, side, showDue, progress]);
  const mastered = Object.values(progress).filter((item) => item.mastered).length;
  const active = activeId ? ACADEMY_LESSONS.find((lesson) => lesson.id === activeId) : null;

  const markMastered = (lesson: AcademyLesson) => {
    const reviewedAt = new Date();
    const nextReviewAt = new Date(reviewedAt.getTime() + 3 * 24 * 60 * 60 * 1000);
    const next = { ...progress, [lesson.id]: { mastered: true, reviewedAt: reviewedAt.toISOString(), nextReviewAt: nextReviewAt.toISOString() } };
    setProgress(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("ff-stats-updated"));
  };

  if (active) {
    const position = filtered.findIndex((lesson) => lesson.id === active.id);
    return (
      <div className="mx-auto max-w-xl space-y-4">
        <Button variant="ghost" size="sm" onClick={() => setActiveId(null)}><ArrowLeft className="mr-1 h-4 w-4" /> Academy</Button>
        <Card className="border-primary/30">
          <CardContent className="space-y-5 p-5">
            <div className="flex flex-wrap items-center gap-2"><Badge>{active.sourceType}</Badge><Badge variant="outline">{active.side === "advance" ? "Challenge a claim" : "Defend the faith"}</Badge></div>
            <div><p className="text-xs uppercase tracking-wider text-muted-foreground">{active.sectionTitle}</p><h2 className="mt-1 font-serif text-2xl font-bold text-primary">{active.title}</h2></div>
            <div className="rounded-lg border border-border bg-muted/30 p-4"><p className="text-xs uppercase tracking-wider text-muted-foreground">Reference claim</p><p className="mt-2 text-sm leading-6">{active.claim}</p></div>
            <div><h3 className="mb-2 flex items-center gap-2 text-sm font-semibold"><BookOpen className="h-4 w-4 text-primary" /> How to study it</h3><p className="text-sm leading-6 text-muted-foreground">{active.explanation}</p></div>
            <div className="border-l-2 border-primary/50 pl-3"><p className="text-xs uppercase tracking-wider text-muted-foreground">Citation</p><p className="mt-1 text-sm text-primary">{active.citation}</p></div>
            <div className="rounded-lg bg-primary/10 p-4"><p className="text-xs uppercase tracking-wider text-primary">Review prompt</p><p className="mt-2 text-sm leading-6">{active.reviewPrompt}</p></div>
            <Button className="w-full" onClick={() => markMastered(active)} disabled={progress[active.id]?.mastered}><Check className="mr-2 h-4 w-4" />{progress[active.id]?.mastered ? "Mastered" : "Mark lesson mastered"}</Button>
          </CardContent>
        </Card>
        <div className="flex justify-between"><Button variant="outline" disabled={position <= 0} onClick={() => setActiveId(filtered[position - 1]?.id)}><ChevronLeft className="mr-1 h-4 w-4" /> Previous</Button><Button variant="outline" disabled={position < 0 || position >= filtered.length - 1} onClick={() => setActiveId(filtered[position + 1]?.id)}>Next <ChevronRight className="ml-1 h-4 w-4" /></Button></div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <div className="flex items-center gap-2"><Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="mr-1 h-4 w-4" /> Training</Button><div className="flex-1" /><Library className="h-5 w-5 text-primary" /><h1 className="font-serif text-xl font-bold text-primary">Academy Library</h1></div>
      <Card className="border-primary/25 bg-primary/5"><CardContent className="space-y-3 p-4"><div className="flex items-center justify-between"><div><p className="text-xs uppercase tracking-wider text-muted-foreground">Reference-based learning</p><p className="mt-1 text-sm">Every lesson is generated from the facts, verses, and hadith citations in your Reference Library.</p></div><BookOpen className="hidden h-8 w-8 text-primary sm:block" /></div><Progress value={ACADEMY_LESSONS.length ? mastered / ACADEMY_LESSONS.length * 100 : 0} aria-label={`${mastered} of ${ACADEMY_LESSONS.length} lessons mastered`} /><p className="text-xs text-muted-foreground">{mastered} of {ACADEMY_LESSONS.length} lessons mastered</p></CardContent></Card>
      <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filter by source"><div className="flex gap-2">{sourceFilters.map((item) => <button key={item} type="button" role="tab" aria-selected={source === item} onClick={() => setSource(item)} className={cn("min-h-10 rounded-full border px-3 text-xs", source === item ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground")}>{item}</button>)}</div></div>
      <div className="flex flex-wrap gap-2"><Button size="sm" variant={side === "all" ? "default" : "outline"} onClick={() => setSide("all")}>All lessons</Button><Button size="sm" variant={side === "advance" ? "default" : "outline"} onClick={() => setSide("advance")}>Challenge claims</Button><Button size="sm" variant={side === "defend" ? "default" : "outline"} onClick={() => setSide("defend")}>Defend faith</Button><Button size="sm" variant={showDue ? "default" : "outline"} onClick={() => setShowDue((value) => !value)}><Clock3 className="mr-1 h-3.5 w-3.5" /> Due for review</Button></div>
      <div className="space-y-2">{filtered.map((lesson) => <button key={lesson.id} type="button" onClick={() => setActiveId(lesson.id)} className="w-full text-left"><Card className="transition-colors hover:border-primary/50"><CardContent className="flex items-start gap-3 p-4"><div className="mt-0.5 rounded-full bg-primary/10 p-2"><BookOpen className="h-4 w-4 text-primary" /></div><div className="min-w-0 flex-1"><div className="mb-1 flex flex-wrap items-center gap-2"><Badge variant="outline" className="text-[10px]">{lesson.sourceType}</Badge>{progress[lesson.id]?.mastered && <Badge className="bg-green-700/80 text-[10px]"><Check className="mr-1 h-3 w-3" /> Mastered</Badge>}</div><h2 className="font-medium text-foreground">{lesson.title}</h2><p className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">{lesson.claim}</p><p className="mt-2 flex items-center gap-1 text-[10px] text-primary"><Clock3 className="h-3 w-3" /> {lesson.citation}</p></div><ChevronRight className="mt-2 h-4 w-4 shrink-0 text-muted-foreground" /></CardContent></Card></button>)}{filtered.length === 0 && <Card><CardContent className="p-6 text-center text-sm text-muted-foreground">No lessons match these filters.</CardContent></Card>}</div>
      {mastered > 0 && <Button variant="ghost" size="sm" onClick={() => { setProgress({}); localStorage.removeItem(STORAGE_KEY); }}><RotateCcw className="mr-1 h-3 w-3" /> Reset lesson progress</Button>}
    </div>
  );
}
