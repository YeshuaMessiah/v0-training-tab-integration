"use client";

import { ShieldLogoLarge } from "./shield-logo";

interface DisclaimerModalProps {
  onAccept: () => void;
}

export function DisclaimerModal({ onAccept }: DisclaimerModalProps) {
  const handleClick = () => {
    onAccept();
  };

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
        
        <button 
          type="button"
          onClick={handleClick}
          onTouchEnd={(e) => {
            e.preventDefault();
            handleClick();
          }}
          className="w-full py-3 px-4 rounded-md bg-[var(--gold)] text-[var(--navy)] font-bold tracking-wider active:bg-[var(--gold-2)] cursor-pointer touch-manipulation"
        >
          I Understand — Enter
        </button>
      </div>
    </div>
  );
}
