import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { DrumPattern } from "@/data/patterns";

const STORAGE_KEY = "pattern-lab:generated-patterns";

function loadFromStorage(): DrumPattern[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as DrumPattern[];
  } catch {
    return [];
  }
}

function saveToStorage(patterns: DrumPattern[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(patterns));
  } catch {
    // storage quota exceeded — silently skip
  }
}

interface GeneratedPatternsContextValue {
  generatedPatterns: DrumPattern[];
  addGeneratedPattern: (pattern: DrumPattern) => void;
  deleteGeneratedPattern: (id: string) => void;
  clearGeneratedPatterns: () => void;
}

const GeneratedPatternsContext = createContext<GeneratedPatternsContextValue>({
  generatedPatterns: [],
  addGeneratedPattern: () => {},
  deleteGeneratedPattern: () => {},
  clearGeneratedPatterns: () => {},
});

export function GeneratedPatternsProvider({ children }: { children: ReactNode }) {
  const [generatedPatterns, setGeneratedPatterns] = useState<DrumPattern[]>(loadFromStorage);

  useEffect(() => {
    saveToStorage(generatedPatterns);
  }, [generatedPatterns]);

  const addGeneratedPattern = (pattern: DrumPattern) => {
    setGeneratedPatterns(prev => {
      if (prev.find(p => p.id === pattern.id)) return prev;
      return [pattern, ...prev];
    });
  };

  const deleteGeneratedPattern = (id: string) => {
    setGeneratedPatterns(prev => prev.filter(p => p.id !== id));
  };

  const clearGeneratedPatterns = () => {
    setGeneratedPatterns([]);
  };

  return (
    <GeneratedPatternsContext.Provider
      value={{ generatedPatterns, addGeneratedPattern, deleteGeneratedPattern, clearGeneratedPatterns }}
    >
      {children}
    </GeneratedPatternsContext.Provider>
  );
}

export function useGeneratedPatterns() {
  return useContext(GeneratedPatternsContext);
}
