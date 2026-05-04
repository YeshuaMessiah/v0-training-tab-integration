"use client";

import { ISLAM_DATA } from "@/lib/data";

export function IslamScreen() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h1 className="font-serif text-xl font-bold text-[#7ab0ff] flex items-center gap-2">
          <span className="text-xl">&#128332;</span>
          Know Islam
        </h1>
        <p className="text-xs text-muted-foreground mt-1">
          Fair, scholarly breakdown of Islamic theology
        </p>
      </div>

      {/* 5 Pillars */}
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-1.5 mb-3">
          The 5 Pillars of Islam
        </div>
        <div className="rounded-xl border border-accent/40 bg-card p-3.5">
          <h3 className="font-serif text-[15px] font-bold text-[#7ab0ff] mb-2.5">
            Arkan al-Islam
          </h3>
          <div className="divide-y divide-border/30">
            {ISLAM_DATA.pillars.map((pillar) => (
              <div key={pillar.name} className="py-2 first:pt-0 last:pb-0">
                <div className="text-[13px] font-bold text-[#7ab0ff]">
                  {pillar.name}
                </div>
                <p className="text-xs text-secondary-foreground/70 mt-0.5">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6 Articles of Faith */}
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-1.5 mb-3">
          The 6 Articles of Faith
        </div>
        <div className="rounded-xl border border-accent/40 bg-card p-3.5">
          <h3 className="font-serif text-[15px] font-bold text-[#7ab0ff] mb-2.5">
            Arkan al-Iman
          </h3>
          <div className="divide-y divide-border/30">
            {ISLAM_DATA.faith.map((article) => (
              <div key={article.name} className="py-2 first:pt-0 last:pb-0">
                <div className="text-[13px] font-bold text-[#7ab0ff]">
                  {article.name}
                </div>
                <p className="text-xs text-secondary-foreground/70 mt-0.5">
                  {article.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Jesus in Islam */}
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-1.5 mb-3">
          Jesus in Islam (Isa)
        </div>
        <div className="rounded-xl border border-accent/40 bg-card p-3.5">
          <h3 className="font-serif text-[15px] font-bold text-[#ffaaaa] mb-2.5">
            Islamic View of Jesus
          </h3>
          <p className="text-[13px] text-secondary-foreground/80 leading-relaxed">
            {ISLAM_DATA.jesusInIslam}
          </p>
        </div>
      </div>

      {/* Glossary */}
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-1.5 mb-3">
          Key Terms Glossary
        </div>
        <div className="rounded-xl border border-accent/40 bg-card p-3.5">
          <h3 className="font-serif text-[15px] font-bold text-[#7ab0ff] mb-2.5">
            Arabic & Islamic Terms
          </h3>
          <div className="divide-y divide-border/30">
            {ISLAM_DATA.glossary.map((item) => (
              <div key={item.term} className="py-2 first:pt-0 last:pb-0">
                <div className="text-[13px] font-bold text-[#7ab0ff]">
                  {item.term}
                </div>
                <p className="text-xs text-secondary-foreground/70 mt-0.5">
                  {item.def}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
