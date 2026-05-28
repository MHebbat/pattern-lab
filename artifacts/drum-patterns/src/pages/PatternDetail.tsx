import { useParams, Link } from "wouter";
import { patterns } from "@/data/patterns";
import { soundRecommendations } from "@/data/soundRecommendations";
import { useGeneratedPatterns } from "@/lib/generatedPatternsStore";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Play, Square, Info, Settings2, Package, Plug, ExternalLink, ChevronRight } from "lucide-react";
import { PatternGrid } from "@/components/PatternGrid";
import { getGenreColorVar } from "@/components/PatternCard";
import { useState, useEffect, useRef } from "react";
import { PatternAudioPlayer } from "@/lib/audio";
import { motion } from "framer-motion";
import type { PackRec, PluginRec } from "@/data/soundRecommendations";

const SOURCE_LABELS: Record<string, string> = {
  "ni-expansion": "NI Expansion",
  "ni-preinstalled": "Preinstalled",
  "cymatics": "Cymatics",
  "kontakt": "Kontakt",
  "third-party": "Third Party",
  "splice": "Splice",
};

const PLATFORM_LABELS: Record<string, string> = {
  maschine: "Maschine",
  komplete: "Komplete",
  kontakt: "Kontakt",
  free: "Free",
};

function AltList({ alts, color }: { alts: NonNullable<PackRec["alternatives"]>; color: string }) {
  return (
    <div className="mt-2 pt-2 border-t border-border/50 space-y-1.5">
      <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50">Alternatives</span>
      {alts.map((alt, i) => (
        <div key={i} className="flex items-start gap-2">
          <ChevronRight className="w-3 h-3 mt-0.5 shrink-0 text-muted-foreground/40" />
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              {alt.free && (
                <span className="text-[9px] font-mono font-bold px-1 py-0.5 rounded border border-emerald-500/40 text-emerald-400 bg-emerald-500/10 shrink-0">FREE</span>
              )}
              <span className="text-xs text-foreground/80 font-medium leading-tight">{alt.name}</span>
            </div>
            <span className="text-[11px] text-muted-foreground/60 leading-relaxed">{alt.source}</span>
            {alt.url && (
              <a href={alt.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] hover:opacity-80 transition-opacity"
                style={{ color }}>
                <ExternalLink className="w-2.5 h-2.5" />
                {alt.free ? "Download free" : "View"}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function PackCard({ pack, color }: { pack: PackRec; color: string }) {
  return (
    <div className="border border-border rounded-lg p-4 flex flex-col gap-2 bg-card hover:border-opacity-60 transition-colors">
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-1 min-w-0">
          <span className="font-semibold text-sm text-foreground leading-tight">{pack.name}</span>
          <span className="text-xs text-muted-foreground">{pack.maker}</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {pack.free && (
            <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border border-emerald-500/40 text-emerald-400 bg-emerald-500/10">
              FREE
            </span>
          )}
          <span
            className="text-[10px] font-mono px-1.5 py-0.5 rounded border"
            style={{ color, borderColor: `${color}40`, backgroundColor: `${color}10` }}
          >
            {SOURCE_LABELS[pack.source] ?? pack.source}
          </span>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">{pack.notes}</p>
      {pack.url && (
        <a
          href={pack.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-mono hover:opacity-80 transition-opacity"
          style={{ color }}
        >
          <ExternalLink className="w-3 h-3" />
          {pack.free ? "Download free" : "View pack"}
        </a>
      )}
      {pack.alternatives && pack.alternatives.length > 0 && (
        <AltList alts={pack.alternatives} color={color} />
      )}
    </div>
  );
}

function PluginCard({ plugin, color }: { plugin: PluginRec; color: string }) {
  return (
    <div className="border border-border rounded-lg p-4 flex flex-col gap-2 bg-card">
      <div className="flex items-start justify-between gap-2">
        <span className="font-semibold text-sm text-foreground leading-tight">{plugin.name}</span>
        <span
          className="text-[10px] font-mono px-1.5 py-0.5 rounded border shrink-0"
          style={{ color, borderColor: `${color}40`, backgroundColor: `${color}10` }}
        >
          {PLATFORM_LABELS[plugin.platform] ?? plugin.platform}
        </span>
      </div>
      <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground/60">
        {plugin.use}
      </span>
      <p className="text-xs text-muted-foreground leading-relaxed">{plugin.notes}</p>
      {plugin.alternatives && plugin.alternatives.length > 0 && (
        <AltList alts={plugin.alternatives} color={color} />
      )}
    </div>
  );
}

export default function PatternDetail() {
  const params = useParams();
  const { generatedPatterns } = useGeneratedPatterns();
  const pattern = patterns.find(p => p.id === params.id) ?? generatedPatterns.find(p => p.id === params.id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [activeTab, setActiveTab] = useState<"packs" | "plugins">("packs");
  const playerRef = useRef<PatternAudioPlayer | null>(null);

  useEffect(() => {
    playerRef.current = new PatternAudioPlayer();
    return () => {
      if (playerRef.current) {
        playerRef.current.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (pattern && playerRef.current) {
      playerRef.current.loadPattern(pattern.bpm, pattern.steps);
      playerRef.current.onStepCallback = (step) => {
        setCurrentStep(step);
      };

      if (isPlaying) {
        playerRef.current.stop();
        setIsPlaying(false);
        setCurrentStep(-1);
      }
    }
  }, [pattern]);

  const togglePlayback = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.stop();
      setIsPlaying(false);
      setCurrentStep(-1);
    } else {
      playerRef.current.play();
      setIsPlaying(true);
    }
  };

  if (!pattern) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center text-muted-foreground flex-col gap-4">
        <p>Pattern not found</p>
        <Link href="/" className="text-primary hover:underline">Return to Browser</Link>
      </div>
    );
  }

  const color = getGenreColorVar(pattern.genre);
  const recs = !pattern.generated ? soundRecommendations[pattern.genre] : null;

  return (
    <div className="min-h-[100dvh] bg-background text-foreground pb-20">
      <header className="border-b border-border bg-background/95 sticky top-0 z-40">
        <div className="container mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium mr-8">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="flex-1" />
          <Button
            onClick={togglePlayback}
            className={`gap-2 ${isPlaying ? 'bg-destructive hover:bg-destructive/90 text-destructive-foreground' : 'bg-primary hover:bg-primary/90 text-primary-foreground'}`}
            data-testid="button-play"
          >
            {isPlaying ? (
              <><Square className="w-4 h-4" fill="currentColor" /> Stop Pattern</>
            ) : (
              <><Play className="w-4 h-4" fill="currentColor" /> Play Pattern</>
            )}
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <Badge variant="outline" style={{ color, borderColor: color }} className="font-mono bg-background/50">
              {pattern.genre.replace("-", " ").toUpperCase()}
            </Badge>
            <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm bg-secondary px-2 py-0.5 rounded">
              <Settings2 className="w-3 h-3" />
              {pattern.bpm} BPM
            </div>
            {pattern.swing && (
              <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm bg-secondary px-2 py-0.5 rounded">
                SWING: {pattern.swing}%
              </div>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{pattern.name}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {pattern.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {pattern.feel.map(f => (
              <span key={f} className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full uppercase tracking-widest font-mono">
                {f}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                Step Sequencer
              </h2>
              <div className="text-xs text-muted-foreground flex gap-4 font-mono">
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm" style={{ backgroundColor: color }}></div> Hit</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm" style={{ backgroundColor: color, opacity: 0.4 }}></div> Ghost</span>
              </div>
            </div>
            <PatternGrid pattern={pattern} currentStep={currentStep} />
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-muted-foreground" />
                Maschine Notes
              </h2>
              <ul className="space-y-4">
                {pattern.maschineNotes.map((note, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-mono text-primary select-none opacity-50">{i + 1}.</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </motion.div>

        {recs && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
                  <Package className="w-5 h-5 text-muted-foreground" />
                  Recommended Sounds & Plugins
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Packs, expansions, and Maschine/Komplete instruments that suit this pattern's genre and feel
                </p>
              </div>
              <div className="flex items-center border border-border rounded-md overflow-hidden">
                <button
                  onClick={() => setActiveTab("packs")}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === "packs"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={activeTab === "packs" ? { backgroundColor: `${color}20`, color } : {}}
                >
                  <span className="flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5" />
                    Packs
                  </span>
                </button>
                <div className="w-px h-6 bg-border" />
                <button
                  onClick={() => setActiveTab("plugins")}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === "plugins"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={activeTab === "plugins" ? { backgroundColor: `${color}20`, color } : {}}
                >
                  <span className="flex items-center gap-1.5">
                    <Plug className="w-3.5 h-3.5" />
                    Plugins
                  </span>
                </button>
              </div>
            </div>

            {activeTab === "packs" && (
              <div className="grid md:grid-cols-2 gap-4">
                {recs.packs.map((pack, i) => (
                  <PackCard key={i} pack={pack} color={color} />
                ))}
              </div>
            )}

            {activeTab === "plugins" && (
              <div className="grid md:grid-cols-2 gap-4">
                {recs.plugins.map((plugin, i) => (
                  <PluginCard key={i} plugin={plugin} color={color} />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </main>
    </div>
  );
}
