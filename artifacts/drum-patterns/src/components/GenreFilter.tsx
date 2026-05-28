import { DrumPattern, Genre } from "@/data/patterns";

interface GenreFilterProps {
  currentGenre: Genre | "all";
  onSelect: (genre: Genre | "all") => void;
  counts: Record<string, number>;
}

export function GenreFilter({ currentGenre, onSelect, counts }: GenreFilterProps) {
  const tabs: { value: Genre | "all"; label: string }[] = [
    { value: "all", label: "All" },
    { value: "boom-bap", label: "Boom Bap" },
    { value: "hip-hop", label: "Hip Hop" },
    { value: "trap", label: "Trap" },
    { value: "rnb", label: "R&B" },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8" data-testid="genre-filter">
      {tabs.map(tab => {
        const isActive = currentGenre === tab.value;
        return (
          <button
            key={tab.value}
            data-testid={`genre-filter-tab-${tab.value}`}
            onClick={() => onSelect(tab.value)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors border ${
              isActive
                ? "bg-secondary text-secondary-foreground border-border"
                : "bg-transparent text-muted-foreground border-transparent hover:bg-secondary/50 hover:text-foreground"
            }`}
          >
            {tab.label} <span className="ml-1 opacity-50 text-xs">({counts[tab.value] || 0})</span>
          </button>
        );
      })}
    </div>
  );
}
