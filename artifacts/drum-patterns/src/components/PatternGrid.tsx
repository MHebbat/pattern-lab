import { DrumPattern } from "@/data/patterns";
import { getGenreColorVar } from "./PatternCard";
import { useEffect, useState } from "react";

interface PatternGridProps {
  pattern: DrumPattern;
  currentStep?: number;
}

export function PatternGrid({ pattern, currentStep = -1 }: PatternGridProps) {
  const color = getGenreColorVar(pattern.genre);

  return (
    <div className="flex flex-col gap-2 w-full overflow-x-auto pb-4" data-testid="pattern-grid">
      <div className="flex min-w-[600px]">
        <div className="w-24 shrink-0" />
        <div className="flex-1 flex gap-1.5">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="flex-1 flex justify-center text-[10px] font-mono text-muted-foreground">
              {i % 4 === 0 ? i + 1 : ""}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 min-w-[600px] bg-background border border-border p-4 rounded-lg">
        {pattern.steps.map((row, rowIdx) => (
          <div key={rowIdx} className="flex items-center">
            <div className="w-24 shrink-0 text-xs font-mono text-muted-foreground uppercase tracking-wider truncate pr-2">
              {row.instrument}
            </div>
            <div className="flex-1 flex gap-1.5">
              {Array.from({ length: 16 }).map((_, stepIdx) => {
                const isActive = row.pattern[stepIdx];
                const velocity = row.velocity?.[stepIdx] || (isActive ? 100 : 0);
                const isGhost = isActive && velocity < 60;
                const isPlaying = currentStep === stepIdx;
                
                return (
                  <div
                    key={stepIdx}
                    className="flex-1 aspect-square rounded-sm border border-border/50 relative overflow-hidden transition-all duration-75"
                    style={{
                      backgroundColor: isActive ? color : "var(--color-secondary)",
                      opacity: isActive ? (isGhost ? 0.4 : 1) : 0.3,
                      boxShadow: isActive ? `0 0 10px ${color}40` : "none",
                      filter: isPlaying ? "brightness(1.5) contrast(1.2)" : "none",
                      transform: isPlaying ? "scale(0.95)" : "scale(1)",
                      borderColor: isPlaying ? "var(--color-primary)" : undefined
                    }}
                  >
                    {isPlaying && <div className="absolute inset-0 bg-white/20" />}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="flex min-w-[600px] mt-1">
        <div className="w-24 shrink-0" />
        <div className="flex-1 flex gap-1.5">
          {Array.from({ length: 16 }).map((_, i) => {
            const isPlaying = currentStep === i;
            return (
              <div key={i} className="flex-1 flex justify-center">
                <div className={`w-1 h-1 rounded-full transition-colors ${isPlaying ? 'bg-primary' : 'bg-transparent'}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
