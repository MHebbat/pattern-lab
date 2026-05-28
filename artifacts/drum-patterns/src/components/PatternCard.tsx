import { DrumPattern } from "@/data/patterns";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function getGenreColorVar(genre: string) {
  switch (genre) {
    case "boom-bap": return "var(--color-genre-boom-bap)";
    case "hip-hop": return "var(--color-genre-hip-hop)";
    case "trap": return "var(--color-genre-trap)";
    case "rnb": return "var(--color-genre-rnb)";
    default: return "var(--color-primary)";
  }
}

export function PatternCard({ pattern }: { pattern: DrumPattern }) {
  const kickRow = pattern.steps.find(s => s.instrument.toLowerCase().includes("kick") || s.instrument.includes("808"));
  const snareRow = pattern.steps.find(s => s.instrument.toLowerCase().includes("snare") || s.instrument.toLowerCase().includes("clap") || s.instrument.toLowerCase().includes("rim"));

  const color = getGenreColorVar(pattern.genre);

  return (
    <Link href={`/pattern/${pattern.id}`}>
      <motion.div
        whileHover={{ y: -4 }}
        className="block cursor-pointer h-full"
        data-testid={`pattern-card-${pattern.id}`}
      >
        <Card className="p-5 bg-card hover:bg-secondary/20 transition-colors border-border h-full flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-bold text-lg text-foreground tracking-tight leading-tight">{pattern.name}</h3>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" style={{ color, borderColor: color }} className="font-mono text-xs uppercase bg-background/50">
                  {pattern.genre.replace("-", " ")}
                </Badge>
                <span className="text-xs text-muted-foreground font-mono">{pattern.bpm} BPM</span>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
            {pattern.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {pattern.feel.map(f => (
              <span key={f} className="text-[10px] bg-background text-muted-foreground px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">
                {f}
              </span>
            ))}
          </div>

          <div className="bg-background rounded-md p-3 mt-auto border border-border">
            <div className="flex flex-col gap-1">
              {[kickRow, snareRow].map((row, idx) => (
                <div key={idx} className="flex gap-1 h-3">
                  {Array.from({ length: 16 }).map((_, stepIdx) => {
                    const isActive = row?.pattern[stepIdx];
                    return (
                      <div
                        key={stepIdx}
                        className="flex-1 rounded-[1px]"
                        style={{
                          backgroundColor: isActive ? color : "var(--color-muted)",
                          opacity: isActive ? 1 : 0.3
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}
