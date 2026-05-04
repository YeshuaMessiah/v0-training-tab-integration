"use client";

import { SCRIPTURE_DATA } from "@/lib/data";

export function ScriptureScreen() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h1 className="font-serif text-xl font-bold text-[#90ee90] flex items-center gap-2">
          <span className="text-xl">&#128214;</span>
          Scripture Library
        </h1>
        <p className="text-xs text-muted-foreground mt-1">
          Key Bible passages organised by apologetics topic
        </p>
      </div>

      {/* Scripture Cards */}
      {SCRIPTURE_DATA.map((topic) => (
        <div 
          key={topic.topic}
          className="rounded-xl border border-[rgba(0,120,0,0.25)] bg-card p-3.5"
        >
          <h3 
            className="font-serif text-[15px] font-bold mb-2.5"
            style={{ color: topic.color }}
          >
            {topic.topic}
          </h3>
          
          <div className="divide-y divide-border/30">
            {topic.verses.map((verse) => (
              <div key={verse.ref} className="py-2 first:pt-0 last:pb-0">
                <div className="text-[13px] font-bold text-primary">
                  {verse.ref}
                </div>
                <p className="text-xs text-secondary-foreground/70 italic mt-0.5">
                  {`"${verse.text}"`}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
