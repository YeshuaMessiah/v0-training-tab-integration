"use client";

import { ShieldLogoLarge } from "./shield-logo";
import { Button } from "@/components/ui/button";

interface DisclaimerModalProps {
  onAccept: () => void;
}

export function DisclaimerModal({ onAccept }: DisclaimerModalProps) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/92 p-5">
      <div className="rounded-xl border border-primary bg-[var(--navy-2)] p-7 max-w-[340px] text-center">
        <div className="flex justify-center mb-3">
          <ShieldLogoLarge size={52} />
        </div>
        
        <h2 className="font-serif text-xl font-bold text-primary mb-2">
          FrontlinesFaith
        </h2>
        
        <p className="text-xs text-[var(--gold-2)] italic mb-3">
          {`"Armed with Truth. Rooted in Christ."`}
        </p>
        
        <p className="text-[13px] text-secondary-foreground/80 leading-relaxed mb-4">
          This app equips Christians for respectful, scholarly dialogue. It is not designed to promote hatred toward Muslims — who are deeply loved by God and whom we are called to reach with grace and truth.
        </p>
        
        <Button 
          onClick={onAccept}
          className="w-full bg-primary text-primary-foreground font-bold tracking-wider hover:bg-primary/90"
        >
          I Understand — Enter
        </Button>
      </div>
    </div>
  );
}
