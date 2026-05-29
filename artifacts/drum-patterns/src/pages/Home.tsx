import { useState, useMemo } from "react";
import { useLocation, Link } from "wouter";
import { patterns, Genre } from "@/data/patterns";
import { GenreFilter } from "@/components/GenreFilter";
import { PatternCard } from "@/components/PatternCard";
import { GenerateModal } from "@/components/GenerateModal";
import { useGeneratedPatterns } from "@/lib/generatedPatternsStore";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, BookOpen, Scissors, Trash2, FlaskConical, Package } from "lucide-react";

export default function Home() {
  const [filter, setFilter] = useState<Genre | "all">("all");
  const [showGenerate, setShowGenerate] = useState(false);
  const { generatedPatterns, addGeneratedPattern, deleteGeneratedPattern } = useGeneratedPatterns();
  const [, setLocation] = useLocation();

  const allPatterns = useMemo(() => [...generatedPatterns, ...patterns], [generatedPatterns]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: allPatterns.length };
    allPatterns.forEach(p => {
      c[p.genre] = (c[p.genre] || 0) + 1;
    });
    return c;
  }, [allPatterns]);

  const filteredPatterns = useMemo(() => {
    if (filter === "all") return allPatterns;
    return allPatterns.filter(p => p.genre === filter);
  }, [filter, allPatterns]);

  const handleGenerated = (pattern: typeof patterns[0]) => {
    addGeneratedPattern(pattern);
    setShowGenerate(false);
    setLocation(`/pattern/${pattern.id}`);
  };

  return (
    <div className="min-h-[100dvh] bg-background w-full">
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="font-bold text-xl tracking-tight text-foreground">Pattern Lab</h1>
            <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">Drum pattern reference for Maschine MK3</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/packlab">
              <button className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground border border-transparent hover:border-border rounded-md transition-all">
                <Package className="w-4 h-4" />
                <span className="hidden sm:inline">Pack Lab</span>
              </button>
            </Link>
            <Link href="/songlab">
              <button className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground border border-transparent hover:border-border rounded-md transition-all">
                <FlaskConical className="w-4 h-4" />
                <span className="hidden sm:inline">Song Lab</span>
              </button>
            </Link>
            <Link href="/choplab">
              <button className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground border border-transparent hover:border-border rounded-md transition-all">
                <Scissors className="w-4 h-4" />
                <span className="hidden sm:inline">Chop Lab</span>
              </button>
            </Link>
            <Link href="/cheatsheet">
              <button
                className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground border border-transparent hover:border-border rounded-md transition-all"
                data-testid="link-cheatsheet"
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Cheat Sheet</span>
              </button>
            </Link>
            <button
              onClick={() => setShowGenerate(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              data-testid="button-open-generate"
            >
              <Sparkles className="w-4 h-4" />
              Generate
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10">
        <GenreFilter currentGenre={filter} onSelect={setFilter} counts={counts} />

        {generatedPatterns.length > 0 && (
          <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground font-mono uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            {generatedPatterns.length} AI-generated pattern{generatedPatterns.length > 1 ? "s" : ""} at the top
          </div>
        )}

        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPatterns.map((pattern, i) => (
              <motion.div
                key={pattern.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.03, duration: 0.25 }}
                className="relative group"
              >
                <PatternCard pattern={pattern} />
                {pattern.generated && (
                  <button
                    onClick={e => { e.preventDefault(); e.stopPropagation(); deleteGeneratedPattern(pattern.id); }}
                    title="Delete saved pattern"
                    className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-md bg-background/80 border border-border text-muted-foreground hover:text-destructive hover:border-destructive/50"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </main>

      {showGenerate && (
        <GenerateModal
          onClose={() => setShowGenerate(false)}
          onGenerated={handleGenerated}
        />
      )}
    </div>
  );
}
