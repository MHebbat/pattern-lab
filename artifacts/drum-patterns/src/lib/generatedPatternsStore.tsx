import { createContext, useContext, useState, type ReactNode } from "react";
import { DrumPattern } from "@/data/patterns";

interface GeneratedPatternsContextValue {
  generatedPatterns: DrumPattern[];
  addGeneratedPattern: (pattern: DrumPattern) => void;
}

const GeneratedPatternsContext = createContext<GeneratedPatternsContextValue>({
  generatedPatterns: [],
  addGeneratedPattern: () => {},
});

export function GeneratedPatternsProvider({ children }: { children: ReactNode }) {
  const [generatedPatterns, setGeneratedPatterns] = useState<DrumPattern[]>([]);

  const addGeneratedPattern = (pattern: DrumPattern) => {
    setGeneratedPatterns(prev => {
      const exists = prev.find(p => p.id === pattern.id);
      if (exists) return prev;
      return [pattern, ...prev];
    });
  };

  return (
    <GeneratedPatternsContext.Provider value={{ generatedPatterns, addGeneratedPattern }}>
      {children}
    </GeneratedPatternsContext.Provider>
  );
}

export function useGeneratedPatterns() {
  return useContext(GeneratedPatternsContext);
}
