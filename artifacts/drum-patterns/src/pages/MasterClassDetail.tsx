import { useState, useRef, useEffect, useCallback } from "react";
import { useLang, useT } from "@/lib/i18n";
import { Link, useParams } from "wouter";
import { ArrowLeft, Dna, Drum, Cpu, Lightbulb, Package, ChevronDown, ChevronRight, Play, Square, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { producers, type KitPad } from "@/data/masterclasses";
import { masterclassesDe } from "@/data/masterclasses-de";
import { PatternAudioPlayer } from "@/lib/audio";

// ─── Step grid ────────────────────────────────────────────────────────────────

function StepGrid({
  rows,
  color,
}: {
  rows: { label: string; steps: boolean[]; isGhost?: boolean }[];
  color: string;
}) {
  return (
    <div className="space-y-1.5">
      {rows.map((row, ri) => (
        <div key={ri} className="flex items-center gap-2">
          <span className="text-[9px] font-mono text-muted-foreground/50 w-11 text-right shrink-0">{row.label}</span>
          <div className="flex gap-[2px] flex-1">
            {row.steps.map((on, si) => (
              <div
                key={si}
                className="flex-1 rounded-[1px] transition-colors"
                style={{
                  height: "14px",
                  backgroundColor: on
                    ? row.isGhost
                      ? `${color}50`
                      : color
                    : "rgba(255,255,255,0.06)",
                  outline: si % 4 === 0 && !on ? "1px solid rgba(255,255,255,0.04)" : undefined,
                }}
              />
            ))}
          </div>
        </div>
      ))}
      {/* Beat markers */}
      <div className="flex items-center gap-2">
        <div className="w-11 shrink-0" />
        <div className="flex flex-1 gap-[2px]">
          {Array.from({ length: 16 }, (_, i) => (
            <div key={i} className="flex-1 flex justify-center">
              {i % 4 === 0 && <span className="text-[7px] font-mono text-muted-foreground/25">{i / 4 + 1}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Maschine pad layout ──────────────────────────────────────────────────────

const PAD_COLOR_MAP: Record<KitPad["color"], string> = {
  kick:  "#f97316",
  snare: "#94a3b8",
  hat:   "#64748b",
  clap:  "#60a5fa",
  perc:  "#4ade80",
  synth: "#a78bfa",
  empty: "rgba(255,255,255,0.05)",
};

const PAD_POSITIONS = [
  // Visual layout (top row first, then down) — Maschine MK3 physical layout
  ["C4","C3","C2","C1"],
  ["B4","B3","B2","B1"],
  ["A4","A3","A2","A1"],
];

function MaschinePadGrid({ kitPads, color }: { kitPads: KitPad[]; color: string }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const padMap = new Map(kitPads.map(p => [p.position, p]));
  const t = useT();
  const hoveredPad = hovered ? padMap.get(hovered) : null;

  return (
    <div className="space-y-4">
      {/* Physical pad grid */}
      <div className="flex flex-col gap-1.5 max-w-[320px]">
        {PAD_POSITIONS.map((row, ri) => (
          <div key={ri} className="flex gap-1.5">
            {row.map(pos => {
              const pad = padMap.get(pos);
              return (
                <div
                  key={pos}
                  onMouseEnter={() => setHovered(pos)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex-1 aspect-square rounded-md cursor-pointer transition-all border border-border/30 flex flex-col items-center justify-center gap-0.5 relative"
                  style={{
                    backgroundColor: pad ? `${PAD_COLOR_MAP[pad.color]}${hovered === pos ? "ff" : "cc"}` : PAD_COLOR_MAP.empty,
                    transform: hovered === pos ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  <span className="text-[8px] font-mono font-bold text-white/80">{pos}</span>
                  {pad && (
                    <span className="text-[7px] font-mono text-white/60 text-center leading-tight px-0.5 line-clamp-1">
                      {pad.instrument.split(" ")[0]}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Pad detail on hover */}
      <div className="border border-border rounded-lg p-4 bg-card min-h-[80px]" style={{ borderColor: hoveredPad ? `${color}40` : undefined }}>
        {hoveredPad ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={hoveredPad.position}>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold" style={{ color }}>{hoveredPad.position}</span>
              <span className="font-semibold text-sm text-foreground">{hoveredPad.instrument}</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/40 block mb-0.5">{t("Sound", "Sound")}</span>
                <span className="text-muted-foreground">{hoveredPad.sound}</span>
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/40 block mb-0.5">{t("Pack", "Pack")}</span>
                <span style={{ color }}>{hoveredPad.pack}</span>
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/40 block mb-0.5">{t("Processing", "Verarbeitung")}</span>
                <span className="text-muted-foreground leading-relaxed">{hoveredPad.processing}</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <p className="text-xs text-muted-foreground/30 font-mono">{t("Hover a pad to see sound and processing details", "Pad überfahren für Sound und Verarbeitungs-Details")}</p>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3">
        {(Object.entries(PAD_COLOR_MAP) as [KitPad["color"], string][])
          .filter(([k]) => k !== "empty")
          .map(([type, clr]) => (
            <div key={type} className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: clr }} />
              <span className="text-[9px] font-mono text-muted-foreground/50 capitalize">{type}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

// ─── Row label → audio instrument name ───────────────────────────────────────

function labelToInstrument(label: string): string {
  const l = label.toUpperCase();
  if (l === "KICK")   return "Kick";
  if (l === "SNARE")  return "Snare";
  if (l === "GHOST" || l === "ACCENT") return "Ghost Snare";
  if (l === "CLAP")   return "Clap";
  if (l === "C.HAT" || l === "CHLAT") return "HH Closed";
  if (l === "O.HAT" || l === "OPEN")  return "HH Open";
  if (l === "ROLL")   return "HH Open";
  if (l === "SHAKER") return "Shaker";
  if (l === "RIM")    return "Rimshot";
  return "Perc";
}

// ─── Pattern card ─────────────────────────────────────────────────────────────

function PatternCard({
  pattern,
  color,
  isPlaying,
  onToggle,
}: {
  pattern: { name: string; bpm: number; swing: number; description: string; rows: { label: string; steps: boolean[]; isGhost?: boolean }[]; maschineNote: string };
  color: string;
  isPlaying: boolean;
  onToggle: () => void;
}) {
  const [showNote, setShowNote] = useState(false);
  const t = useT();

  return (
    <div className="border border-border rounded-xl bg-card p-5 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground">{pattern.name}</h3>
          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{pattern.description}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right">
            <p className="font-mono text-sm font-bold" style={{ color }}>{pattern.bpm} BPM</p>
            <p className="text-[10px] font-mono text-muted-foreground/50">Swing {pattern.swing}%</p>
          </div>
          <button
            onClick={onToggle}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all border shrink-0"
            style={{
              backgroundColor: isPlaying ? `${color}20` : "rgba(255,255,255,0.05)",
              borderColor: isPlaying ? color : "rgba(255,255,255,0.1)",
              color: isPlaying ? color : "rgba(255,255,255,0.4)",
            }}
            title={isPlaying ? "Stop" : "Hear pattern"}
          >
            {isPlaying
              ? <Square className="w-3.5 h-3.5 fill-current" />
              : <Play  className="w-3.5 h-3.5 fill-current ml-0.5" />
            }
          </button>
        </div>
      </div>

      <div className="border border-border/40 rounded-lg p-4 bg-background/40">
        <StepGrid rows={pattern.rows} color={color} />
      </div>

      <button
        onClick={() => setShowNote(v => !v)}
        className="w-full flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors pt-2 border-t border-border/40"
      >
        <Cpu className="w-3 h-3 shrink-0" style={{ color }} />
        <span>{t("Maschine MK3 instructions", "Maschine MK3 Anweisungen")}</span>
        {showNote ? <ChevronDown className="w-3 h-3 ml-auto" /> : <ChevronRight className="w-3 h-3 ml-auto" />}
      </button>
      {showNote && (
        <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs text-muted-foreground leading-relaxed bg-card rounded-lg p-3 border border-border/40"
            style={{ borderLeftWidth: "3px", borderLeftColor: color }}>
            {pattern.maschineNote}
          </p>
        </motion.div>
      )}
    </div>
  );
}

// ─── Technique accordion ──────────────────────────────────────────────────────

function TechniqueCard({ technique, color, index }: { technique: { title: string; detail: string }; color: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg bg-card overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center gap-4 p-4 text-left hover:bg-white/5 transition-colors"
      >
        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono"
          style={{ backgroundColor: `${color}20`, color }}
        >
          {index + 1}
        </span>
        <span className="font-semibold text-sm text-foreground flex-1">{technique.title}</span>
        {open ? <ChevronDown className="w-4 h-4 text-muted-foreground/40 shrink-0" /> : <ChevronRight className="w-4 h-4 text-muted-foreground/40 shrink-0" />}
      </button>
      {open && (
        <div className="border-t border-border/40 px-5 pb-4 pt-3">
          <p className="text-xs text-muted-foreground leading-relaxed">{technique.detail}</p>
        </div>
      )}
    </div>
  );
}

// ─── Cheat Sheet routing helpers ─────────────────────────────────────────────

function cheatSheetTab(tags: string[]): string {
  if (tags.some(t => t.includes("R&B") || t.includes("NEO SOUL") || t.includes("SOUL"))) return "rnb";
  if (tags.some(t => t.includes("BOOM BAP"))) return "boom-bap";
  return "hip-hop";
}

function cheatSheetTabLabel(tags: string[]): string {
  if (tags.some(t => t.includes("R&B") || t.includes("NEO SOUL") || t.includes("SOUL"))) return "R&B";
  if (tags.some(t => t.includes("BOOM BAP"))) return "Boom Bap";
  return "Hip Hop";
}

// ─── Main page ────────────────────────────────────────────────────────────────

const TABS = [
  { id: "dna",        label: "Style DNA",     labelDe: "Style DNA",         icon: Dna },
  { id: "patterns",   label: "Drum Patterns", labelDe: "Drum Patterns",     icon: Drum },
  { id: "kit",        label: "Kit Setup",     labelDe: "Kit-Einrichtung",   icon: Cpu },
  { id: "techniques", label: "Techniques",    labelDe: "Techniken",         icon: Lightbulb },
  { id: "packs",      label: "Pack & Tools",  labelDe: "Pack & Tools",      icon: Package },
] as const;

const TAB_LABELS_DE: Record<string, string> = {
  dna: "Stil-DNA",
  patterns: "Drum-Patterns",
  kit: "Kit-Setup",
  techniques: "Techniken",
  packs: "Pack & Tools",
};

type TabId = typeof TABS[number]["id"];

export default function MasterClassDetail() {
  const { lang, setLang } = useLang();
  const t = useT();
  const { id } = useParams<{ id: string }>();
  const producer = producers.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState<TabId>("dna");
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioPlayer = useRef(new PatternAudioPlayer());

  useEffect(() => {
    const player = audioPlayer.current;
    return () => { player.stop(); };
  }, []);

  useEffect(() => {
    audioPlayer.current.stop();
    setPlayingIndex(null);
  }, [id]);

  const handleToggle = useCallback((index: number, pattern: { bpm: number; rows: { label: string; steps: boolean[] }[] }) => {
    const player = audioPlayer.current;
    if (playingIndex === index) {
      player.stop();
      setPlayingIndex(null);
    } else {
      player.stop();
      const steps = pattern.rows.map(row => ({
        instrument: labelToInstrument(row.label),
        pattern: row.steps,
      }));
      player.loadPattern(pattern.bpm, steps);
      player.play();
      setPlayingIndex(index);
    }
  }, [playingIndex]);

  if (!producer) {
    return (
      <div className="min-h-[100dvh] bg-background text-foreground flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">{t("Producer not found", "Produzent nicht gefunden")}</p>
          <Link href="/masterclass" className="text-sm text-foreground hover:underline">{t("Back to Masterclasses", "Zurück zu Masterclasses")}</Link>
        </div>
      </div>
    );
  }

  const deLocale = masterclassesDe[producer.id];
  const color = producer.color;

  return (
    <div className="min-h-[100dvh] bg-background text-foreground pb-20">
      <header className="border-b border-border bg-background/95 sticky top-0 z-40">
        <div className="container mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/masterclass" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> {t("Masterclasses", "Masterclasses")}
          </Link>
          <div className="flex-1" />
          <div className="flex items-center border border-border rounded-md overflow-hidden">
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1.5 text-xs font-mono transition-colors ${lang === "en" ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >EN</button>
            <div className="w-px h-4 bg-border" />
            <button
              onClick={() => setLang("de")}
              className={`px-2 py-1.5 text-xs font-mono transition-colors ${lang === "de" ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >DE</button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-4xl">
        {/* Producer hero */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-start gap-5">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold shrink-0"
              style={{ backgroundColor: `${color}20`, color }}
            >
              {producer.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold tracking-tight text-foreground">{producer.name}</h1>
              {producer.realName && (
                <p className="text-xs font-mono text-muted-foreground/40">{producer.realName}</p>
              )}
              <p className="text-sm text-muted-foreground mt-1">{producer.era} · {producer.origin}</p>
              <p className="text-sm italic text-muted-foreground/60 mt-1">"{lang === "de" && deLocale?.tagline ? deLocale.tagline : producer.tagline}"</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {producer.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-mono px-2 py-0.5 rounded uppercase tracking-widest"
                    style={{ backgroundColor: `${color}15`, color }}>
                    {tag}
                  </span>
                ))}
                <span className="text-[9px] font-mono px-2 py-0.5 rounded uppercase tracking-widest bg-white/5 text-muted-foreground/50">
                  {producer.bpmRange[0]}–{producer.bpmRange[1]} BPM
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded uppercase tracking-widest bg-white/5 text-muted-foreground/50">
                  Swing {producer.swingRange[0]}–{producer.swingRange[1]}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex border border-border rounded-xl overflow-hidden mb-8">
          {TABS.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex-1 flex items-center justify-center gap-1.5 px-2 py-3 text-xs font-medium transition-colors"
                style={activeTab === tab.id ? { backgroundColor: `${color}20`, color } : { color: "var(--muted-foreground)" }}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline">{lang === "de" ? tab.labelDe : tab.label}</span>              </button>
            );
          })}
        </div>

        {/* ── Style DNA ── */}
        {activeTab === "dna" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="border border-border rounded-xl p-6 bg-card">
              <h2 className="font-semibold text-sm text-muted-foreground/60 uppercase tracking-widest mb-3 font-mono">{t("Biography", "Biografie")}</h2>
              <p className="text-sm text-foreground leading-relaxed">{lang === "de" && deLocale?.bio ? deLocale.bio : producer.bio}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-border rounded-xl p-5 bg-card">
                <h2 className="font-semibold text-sm uppercase tracking-widest mb-3 font-mono" style={{ color }}>
                  {t("Drum Philosophy", "Drum-Philosophie")}
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed italic">"{lang === "de" && deLocale?.drumPhilosophy ? deLocale.drumPhilosophy : producer.drumPhilosophy}"</p>
              </div>
              <div className="border border-border rounded-xl p-5 bg-card">
                <h2 className="font-semibold text-sm uppercase tracking-widest mb-3 font-mono" style={{ color }}>
                  {t("Sample Philosophy", "Sample-Philosophie")}
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed italic">"{lang === "de" && deLocale?.samplePhilosophy ? deLocale.samplePhilosophy : producer.samplePhilosophy}"</p>
              </div>
            </div>

            <div className="border border-border rounded-xl p-5 bg-card">
              <h2 className="font-semibold text-sm uppercase tracking-widest mb-4 font-mono" style={{ color }}>
                {t("Style Markers", "Stil-Merkmale")}
              </h2>
              <div className="space-y-2">
                {(lang === "de" && deLocale?.styleMarkers ? deLocale.styleMarkers : producer.styleMarkers).map((marker, i) => (
                  <div key={i} className="flex gap-3 text-xs">
                    <span className="font-mono shrink-0 mt-0.5" style={{ color }}>→</span>
                    <span className="text-muted-foreground leading-relaxed">{marker}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border rounded-xl p-5 bg-card">
              <h2 className="font-semibold text-sm uppercase tracking-widest mb-3 font-mono text-muted-foreground/50">
                {t("Known For Producing", "Bekannt für Produktionen mit")}
              </h2>
              <div className="flex flex-wrap gap-2">
                {producer.signatureArtists.map(artist => (
                  <span key={artist} className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {artist}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Drum Patterns ── */}
        {activeTab === "patterns" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
            <div className="mb-2">
              <h2 className="font-semibold text-foreground">{t("Signature Drum Patterns", "Signatur-Drum-Patterns")}</h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                {lang === "de"
                  ? `Jedes Pattern erfasst einen bestimmten Moment in ${producer.name.split(" ")[producer.name.split(" ").length - 1]}s Katalog. Maschine-Button unter jedem Raster für spezifische Programmieranweisungen klicken.`
                  : `Each pattern captures a distinct moment in ${producer.name.split(" ")[producer.name.split(" ").length - 1]}'s catalog. Click the Maschine button under each grid for specific programming instructions.`
                }
              </p>
            </div>
            {producer.patterns.map((pattern, i) => {
              const dePattern = lang === "de" && deLocale?.patterns[i];
              return (
                <PatternCard
                  key={i}
                  pattern={dePattern ? { ...pattern, description: dePattern.description, maschineNote: dePattern.maschineNote } : pattern}
                  color={color}
                  isPlaying={playingIndex === i}
                  onToggle={() => handleToggle(i, pattern)}
                />
              );
            })}
          </motion.div>
        )}

        {/* ── Kit Setup ── */}
        {activeTab === "kit" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div>
              <h2 className="font-semibold text-foreground mb-1">{t("Maschine MK3 Group Layout", "Maschine MK3 Gruppen-Layout")}</h2>
              <p className="text-xs text-muted-foreground">
                {t("Visual pad map for Group A (drums) and additional groups. Hover each pad to see sound source, pack, and processing details.", "Visuelle Pad-Karte für Gruppe A (Drums) und weitere Gruppen. Pad überfahren für Sound-Quelle, Pack und Verarbeitungs-Details.")}
              </p>
            </div>
            <MaschinePadGrid kitPads={producer.kitPads} color={color} />

            {/* Full pad list as table */}
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="p-4 border-b border-border/50 bg-card">
                <h3 className="font-semibold text-sm text-foreground">{t("Complete Pad Reference", "Komplette Pad-Referenz")}</h3>
              </div>
              <div className="divide-y divide-border/40">
                {producer.kitPads.map(pad => (
                  <div key={pad.position} className="flex items-start gap-4 p-4 hover:bg-white/5 transition-colors">
                    <span
                      className="font-mono text-xs font-bold shrink-0 w-8 h-8 rounded flex items-center justify-center"
                      style={{ backgroundColor: `${PAD_COLOR_MAP[pad.color]}30`, color: PAD_COLOR_MAP[pad.color] }}
                    >
                      {pad.position}
                    </span>
                    <div className="flex-1 min-w-0 grid sm:grid-cols-3 gap-2">
                      <div>
                        <p className="text-xs font-semibold text-foreground">{pad.instrument}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{pad.sound}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-0.5">{t("Pack", "Pack")}</p>
                        <p className="text-xs" style={{ color }}>{pad.pack}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-0.5">{t("Processing", "Verarbeitung")}</p>                        <p className="text-[10px] text-muted-foreground leading-relaxed">{pad.processing}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cheat Sheet reference */}
            <div className="flex items-start gap-3 border rounded-xl p-4 bg-card" style={{ borderColor: `${color}20` }}>
              <BookOpen className="w-4 h-4 shrink-0 mt-0.5" style={{ color }} />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-foreground mb-0.5">{t("New to Maschine MK3?", "Neu bei Maschine MK3?")}</p>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  {t("The Cheat Sheet has step-by-step hardware instructions for loading sounds, setting choke groups, and every control shown in this kit layout.", "Die Kurzübersicht enthält schrittweise Hardware-Anweisungen zum Laden von Sounds, Einrichten von Choke-Gruppen und allen in diesem Kit-Layout gezeigten Reglern.")}                </p>
                <Link
                  href="/cheatsheet?tab=core-controls"
                  className="text-[11px] font-medium mt-2 inline-flex items-center gap-1 hover:underline transition-opacity hover:opacity-80"
                  style={{ color }}
                >
                  {t("Open Core Controls Cheat Sheet →", "Kurzübersicht Core Controls öffnen →")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Techniques ── */}
        {activeTab === "techniques" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
            <div>
              <h2 className="font-semibold text-foreground mb-1">{t("Key Techniques", "Wichtige Techniken")}</h2>
              <p className="text-xs text-muted-foreground">
                {lang === "de"
                  ? `${producer.name.split(" ")[0]}s spezifische Methoden in Maschine-MK3-Workflow-Schritte übersetzt. Jede Technik anklicken für die vollständigen Anweisungen.`
                  : `${producer.name.split(" ")[0]}'s specific methods translated into Maschine MK3 workflow steps. Click each technique to expand the full instructions.`
                }              </p>
            </div>
            <div className="space-y-2">
              {producer.techniques.map((tech, i) => {
                const deTech = lang === "de" && deLocale?.techniques[i];
                return (
                  <TechniqueCard key={i} technique={deTech ? { title: deTech.title, detail: deTech.detail } : tech} color={color} index={i} />
                );
              })}
            </div>

            {/* Cheat Sheet reference */}
            <div className="flex items-start gap-3 border rounded-xl p-4 bg-card" style={{ borderColor: `${color}20` }}>
              <BookOpen className="w-4 h-4 shrink-0 mt-0.5" style={{ color }} />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-foreground mb-0.5">{t("Apply these in Maschine", "In Maschine anwenden")}</p>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  {lang === "de"
                    ? `Die ${cheatSheetTabLabel(producer.tags)} Kurzübersicht enthält genaue Tastendrücke und Parameterwerte für die Techniken, für die ${producer.name.split(" ")[0]} bekannt ist.`
                    : `The ${cheatSheetTabLabel(producer.tags)} Cheat Sheet has exact button presses and parameter values for the techniques ${producer.name.split(" ")[0]} is known for.`
                  }
                </p>
                <Link
                  href={`/cheatsheet?tab=${cheatSheetTab(producer.tags)}`}
                  className="text-[11px] font-medium mt-2 inline-flex items-center gap-1 hover:underline transition-opacity hover:opacity-80"
                  style={{ color }}
                >
                  {lang === "de" ? `Kurzübersicht ${cheatSheetTabLabel(producer.tags)} öffnen →` : `Open ${cheatSheetTabLabel(producer.tags)} Cheat Sheet →`}
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Pack & Tools ── */}
        {activeTab === "packs" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div>
              <h2 className="font-semibold text-foreground mb-1">{t("Pack Recommendations", "Pack-Empfehlungen")}</h2>
              <p className="text-xs text-muted-foreground">{t("From your existing pack collection — which to reach for and exactly why.", "Aus deiner bestehenden Pack-Sammlung — welchen du greifen solltest und genau warum.")}</p>            </div>

            <div className="space-y-3">
              {producer.packRecs.map((rec, i) => (
                <div key={i} className="border border-border rounded-xl p-5 bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-sm text-foreground">{rec.pack}</span>
                    {rec.free && (
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border border-emerald-500/40 text-emerald-400 bg-emerald-500/10">FREE</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {lang === "de" && deLocale?.packRecs[i]?.why ? deLocale.packRecs[i].why : rec.why}
                  </p>
                </div>
              ))}
            </div>

            <div className="border rounded-xl overflow-hidden" style={{ borderColor: `${color}30` }}>
              <div className="p-5 border-b" style={{ borderColor: `${color}20`, backgroundColor: `${color}08` }}>
                <h2 className="font-semibold text-sm text-foreground">{t("Korg microKEY Tips", "Korg microKEY Tipps")}</h2>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  {lang === "de"
                    ? `Wie ${producer.name.split(" ")[0]} deine MIDI-Tastatur im Maschine-Workflow einsetzen würde.`
                    : `How ${producer.name.split(" ")[0]} would use your MIDI keyboard in the Maschine workflow.`
                  }                </p>
              </div>
              <div className="divide-y" style={{ borderColor: `${color}15` }}>
                {producer.microKeyTips.map((tip, i) => (
                  <div key={i} className="flex gap-4 p-5">
                    <span
                      className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold font-mono"
                      style={{ backgroundColor: `${color}20`, color }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {lang === "de" && deLocale?.microKeyTips[i] ? deLocale.microKeyTips[i] : tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation between producers */}
            <div className="flex gap-3 pt-4 border-t border-border">
              {(() => {
                const idx = producers.findIndex(p => p.id === producer.id);
                const prev = producers[idx - 1];
                const next = producers[idx + 1];
                return (
                  <>
                    {prev ? (
                      <Link href={`/masterclass/${prev.id}`} className="flex-1">
                        <div className="border border-border rounded-lg p-3 hover:bg-white/5 transition-colors text-left">
                          <p className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-widest mb-0.5">{t("Previous", "Vorheriger")}</p>
                          <p className="text-sm font-semibold text-foreground">{prev.name}</p>
                        </div>
                      </Link>
                    ) : <div className="flex-1" />}
                    {next ? (
                      <Link href={`/masterclass/${next.id}`} className="flex-1">
                        <div className="border border-border rounded-lg p-3 hover:bg-white/5 transition-colors text-right">
                          <p className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-widest mb-0.5">{t("Next", "Nächster")}</p>
                          <p className="text-sm font-semibold text-foreground">{next.name}</p>
                        </div>
                      </Link>
                    ) : <div className="flex-1" />}
                  </>
                );
              })()}
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
