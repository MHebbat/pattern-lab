import { useState } from "react";
import { X, Sparkles, Loader2 } from "lucide-react";
import { DrumPattern, Genre } from "@/data/patterns";
import { motion, AnimatePresence } from "framer-motion";

interface GenerateModalProps {
  onClose: () => void;
  onGenerated: (pattern: DrumPattern) => void;
}

const GENRE_OPTIONS: { value: Genre; label: string; description: string }[] = [
  { value: "boom-bap", label: "Boom Bap", description: "Classic 90s NY swing, MPC grooves" },
  { value: "hip-hop", label: "Hip Hop", description: "West Coast, East Coast, modern bangers" },
  { value: "rnb", label: "R&B", description: "Neo soul, slow jams, contemporary grooves" },
];

const FEEL_PRESETS = [
  "dark and moody", "bright and energetic", "slow and laid back",
  "punchy and raw", "smooth and soulful", "jazzy and swung",
  "minimal and sparse", "busy and complex", "half-time feel",
];

const BPM_PRESETS: { label: string; value: number; genres: Genre[] }[] = [
  { label: "72 BPM", value: 72, genres: ["rnb"] },
  { label: "80 BPM", value: 80, genres: ["boom-bap", "rnb"] },
  { label: "88 BPM", value: 88, genres: ["boom-bap", "hip-hop", "rnb"] },
  { label: "92 BPM", value: 92, genres: ["boom-bap", "hip-hop"] },
  { label: "96 BPM", value: 96, genres: ["hip-hop"] },
  { label: "100 BPM", value: 100, genres: ["hip-hop", "rnb"] },
  { label: "105 BPM", value: 105, genres: ["hip-hop"] },
];

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, "");

export function GenerateModal({ onClose, onGenerated }: GenerateModalProps) {
  const [genre, setGenre] = useState<Genre>("boom-bap");
  const [feel, setFeel] = useState("");
  const [bpm, setBpm] = useState<number | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filteredBpms = BPM_PRESETS.filter(b => b.genres.includes(genre));

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${BASE_URL}/api/generate-pattern`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ genre, feel: feel || undefined, bpm }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error((body as { error?: string }).error ?? `Error ${res.status}`);
      }
      const pattern = await res.json() as DrumPattern;
      onGenerated(pattern);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Generation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        data-testid="generate-modal"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg p-6"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold tracking-tight">Generate Pattern</h2>
              </div>
              <p className="text-sm text-muted-foreground">AI creates a fresh drum pattern based on your inputs.</p>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              data-testid="button-close-modal"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-5">
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2 block">Genre</label>
              <div className="grid grid-cols-3 gap-2">
                {GENRE_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => { setGenre(opt.value); setBpm(undefined); }}
                    data-testid={`genre-option-${opt.value}`}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      genre === opt.value
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-background text-muted-foreground hover:border-border/80 hover:bg-secondary/30"
                    }`}
                  >
                    <div className="font-semibold text-sm">{opt.label}</div>
                    <div className="text-[10px] mt-0.5 opacity-70">{opt.description}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2 block">
                Feel <span className="normal-case opacity-50">(optional)</span>
              </label>
              <input
                type="text"
                value={feel}
                onChange={e => setFeel(e.target.value)}
                placeholder="e.g. dark and moody, smooth and soulful..."
                className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50"
                data-testid="input-feel"
              />
              <div className="flex flex-wrap gap-1.5 mt-2">
                {FEEL_PRESETS.map(preset => (
                  <button
                    key={preset}
                    onClick={() => setFeel(preset)}
                    className={`text-[11px] px-2.5 py-1 rounded-full border transition-colors font-mono ${
                      feel === preset
                        ? "bg-secondary border-border text-foreground"
                        : "border-transparent bg-secondary/40 text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                    data-testid={`feel-preset-${preset.replace(/\s+/g, "-")}`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2 block">
                BPM <span className="normal-case opacity-50">(optional)</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {filteredBpms.map(b => (
                  <button
                    key={b.value}
                    onClick={() => setBpm(bpm === b.value ? undefined : b.value)}
                    data-testid={`bpm-option-${b.value}`}
                    className={`px-3 py-1.5 rounded-md border text-xs font-mono transition-colors ${
                      bpm === b.value
                        ? "bg-secondary border-border text-foreground"
                        : "border-border/50 bg-background text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
                <span className="text-xs text-muted-foreground self-center font-mono">or leave blank for AI to decide</span>
              </div>
            </div>

            {error && (
              <div className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md px-3 py-2">
                {error}
              </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={loading}
              data-testid="button-generate"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating pattern...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generate Pattern
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
