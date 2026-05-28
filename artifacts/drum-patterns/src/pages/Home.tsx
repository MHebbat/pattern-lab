import { useState, useMemo } from "react";
import { patterns, Genre } from "@/data/patterns";
import { GenreFilter } from "@/components/GenreFilter";
import { PatternCard } from "@/components/PatternCard";
import { motion } from "framer-motion";

export default function Home() {
  const [filter, setFilter] = useState<Genre | "all">("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: patterns.length };
    patterns.forEach(p => {
      c[p.genre] = (c[p.genre] || 0) + 1;
    });
    return c;
  }, []);

  const filteredPatterns = useMemo(() => {
    if (filter === "all") return patterns;
    return patterns.filter(p => p.genre === filter);
  }, [filter]);

  return (
    <div className="min-h-[100dvh] bg-background w-full">
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="font-bold text-xl tracking-tight text-foreground">Pattern Lab</h1>
            <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">Drum pattern reference for Maschine MK3</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10">
        <GenreFilter currentGenre={filter} onSelect={setFilter} counts={counts} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPatterns.map((pattern, i) => (
            <motion.div
              key={pattern.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <PatternCard pattern={pattern} />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
