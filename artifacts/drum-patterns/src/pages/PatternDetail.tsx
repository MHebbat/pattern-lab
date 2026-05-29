import { useParams, Link } from "wouter";
import { useLang, useT } from "@/lib/i18n";
import { patterns } from "@/data/patterns";
import { patternsDe } from "@/data/patterns-de";
import { soundRecommendations } from "@/data/soundRecommendations";
import { melodyRecommendations } from "@/data/melodyRecommendations";
import type { GenreMelodyRecs, BassPattern, MelodyIdea, SampleIdea } from "@/data/melodyRecommendations";
import { useGeneratedPatterns } from "@/lib/generatedPatternsStore";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft, Play, Square, Info, Settings2, Package, Plug,
  ExternalLink, ChevronRight, Disc3, Piano, Music2, Scissors, Layers,
} from "lucide-react";
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

const SAMPLE_TYPE_LABELS: Record<SampleIdea["sampleType"], string> = {
  "clean-loop": "Clean Loop",
  "chop": "Chop",
  "chop-or-clean": "Chop or Clean",
  "texture": "Texture Layer",
};

function AltList({ alts, color }: { alts: NonNullable<PackRec["alternatives"]>; color: string }) {
  const t = useT();  return (
    <div className="mt-2 pt-2 border-t border-border/50 space-y-1.5">
      <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50">{t("Alternatives", "Alternativen")}</span>
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
                {alt.free ? t("Download free", "Kostenlos herunterladen") : t("View", "Ansehen")}              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function PackCard({ pack, color }: { pack: PackRec; color: string }) {
  const { lang } = useLang();  return (
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
          {pack.free ? (lang === "de" ? "Kostenlos laden" : "Download free") : (lang === "de" ? "Pack ansehen" : "View pack")}        </a>
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

function SampleCard({ sample, color }: { sample: SampleIdea; color: string }) {
  const { lang } = useLang();  const typeIcon = sample.sampleType === "texture" ? (
    <Layers className="w-3 h-3" />
  ) : sample.sampleType === "chop" || sample.sampleType === "chop-or-clean" ? (
    <Scissors className="w-3 h-3" />
  ) : (
    <Disc3 className="w-3 h-3" />
  );

  return (
    <div className="border border-border rounded-lg p-4 flex flex-col gap-3 bg-card">
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-1 min-w-0">
          <span className="font-semibold text-sm text-foreground leading-tight">{sample.pack}</span>
          <a
            href={sample.packUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-mono hover:opacity-80 transition-opacity"
            style={{ color }}
          >
            <ExternalLink className="w-2.5 h-2.5" />
            {sample.packUrl.replace("https://", "").replace(/\/$/, "")}
          </a>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 flex-wrap justify-end">
          {sample.free && (
            <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border border-emerald-500/40 text-emerald-400 bg-emerald-500/10">
              FREE
            </span>
          )}
          <span
            className="text-[10px] font-mono px-1.5 py-0.5 rounded border flex items-center gap-1"
            style={{ color, borderColor: `${color}40`, backgroundColor: `${color}10` }}
          >
            {typeIcon}
            {SAMPLE_TYPE_LABELS[sample.sampleType]}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-1">{lang === "de" ? "Worauf achten" : "What to look for"}</span>
          <p className="text-xs text-muted-foreground leading-relaxed">{sample.lookFor}</p>
        </div>
        <div className="pt-2 border-t border-border/50">
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-1">{lang === "de" ? "Behandlung" : "Treatment"}</span>          <p className="text-xs text-muted-foreground leading-relaxed">{sample.treatment}</p>
        </div>
      </div>
    </div>
  );
}

const BEAT_LABELS = ["1","e","+","a","2","e","+","a","3","e","+","a","4","e","+","a"] as const;

type StepType = "on-beat" | "off-beat" | "syncopated";

function getStepType(step: number): StepType {
  if (step % 4 === 0) return "on-beat";
  if (step % 2 === 0) return "off-beat";
  return "syncopated";
}

function BassStepGrid({ steps, color, showTimingRow = false }: { steps: BassPattern["steps"]; color: string; showTimingRow?: boolean }) {
  const stepMap = new Map(steps.map(s => [s.step, s]));
  return (
    <div>
      {showTimingRow && (
        <div className="grid mb-0.5" style={{ gridTemplateColumns: "repeat(16, 1fr)", gap: "2px" }}>
          {BEAT_LABELS.map((label, i) => {
            const type = getStepType(i);
            return (
              <div key={i} className="flex flex-col items-center">
                <span className={`text-[7px] font-mono leading-none ${
                  type === "on-beat" ? "text-foreground/70 font-bold" :
                  type === "off-beat" ? "text-muted-foreground/50" :
                  "text-muted-foreground/25"
                }`}>{label}</span>
              </div>
            );
          })}
        </div>
      )}
      <div className="grid" style={{ gridTemplateColumns: "repeat(16, 1fr)", gap: "2px" }}>
        {Array.from({ length: 16 }, (_, i) => {
          const hit = stepMap.get(i);
          const type = getStepType(i);
          const borderColor = type === "on-beat"
            ? "rgba(255,255,255,0.2)"
            : type === "off-beat"
            ? "rgba(255,255,255,0.1)"
            : "rgba(255,255,255,0.04)";
          return (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div
                className="w-full aspect-square rounded-sm flex items-center justify-center transition-colors"
                style={
                  hit
                    ? {
                        backgroundColor: color,
                        opacity: hit.velocity > 80 ? 1 : 0.55,
                        outline: type === "syncopated" ? `1px solid ${color}80` : "none",
                      }
                    : {
                        backgroundColor: type === "on-beat"
                          ? "rgba(255,255,255,0.09)"
                          : type === "off-beat"
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(255,255,255,0.03)",
                        border: `1px solid ${borderColor}`,
                      }
                }
              >
                {hit && (
                  <span className="text-[6px] font-mono font-bold text-black leading-none select-none">
                    {hit.note}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {showTimingRow && (
        <div className="grid mt-1" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}>
          {[1,2,3,4].map(beat => (
            <div key={beat} className="flex justify-start pl-0.5">
              <span className="text-[8px] font-mono text-muted-foreground/35">{beat}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Mini keyboard (claviature) ──────────────────────────────────────────────

type BlackKeyDef = { canonical: string; aliases: string[]; afterIdx: number };

const KB_WW = 26;
const KB_WH = 60;
const KB_BW = 15;
const KB_BH = 38;
const KB_TOTAL_W = KB_WW * 7 + 1;
const KB_WHITE = ["C", "D", "E", "F", "G", "A", "B"] as const;
const KB_BLACK: BlackKeyDef[] = [
  { canonical: "Db", aliases: ["C#", "Db"], afterIdx: 0 },
  { canonical: "Eb", aliases: ["D#", "Eb"], afterIdx: 1 },
  { canonical: "Gb", aliases: ["F#", "Gb"], afterIdx: 3 },
  { canonical: "Ab", aliases: ["G#", "Ab"], afterIdx: 4 },
  { canonical: "Bb", aliases: ["A#", "Bb"], afterIdx: 5 },
];

function stripOct(n: string): string {
  return n.replace(/[0-9]/g, "").trim();
}

function MiniKeyboard({ rawNotes, color }: { rawNotes: string[]; color: string }) {
  const active = new Set(rawNotes.map(stripOct));
  return (
    <div className="py-1 overflow-x-auto">
      <svg
        viewBox={`0 0 ${KB_TOTAL_W} ${KB_WH}`}
        width={KB_TOTAL_W}
        height={KB_WH}
        style={{ display: "block" }}
        aria-hidden="true"
      >
        {KB_WHITE.map((note, i) => {
          const on = active.has(note);
          return (
            <g key={note}>
              <rect
                x={i * KB_WW + 0.5}
                y={0.5}
                width={KB_WW - 1.5}
                height={KB_WH - 1}
                rx={2}
                fill={on ? color : "#d4d4d4"}
                stroke={on ? "none" : "#888"}
                strokeWidth={0.5}
              />
              {on && (
                <text
                  x={i * KB_WW + (KB_WW - 1.5) / 2}
                  y={KB_WH - 8}
                  textAnchor="middle"
                  fontSize={8}
                  fontFamily="monospace"
                  fontWeight="bold"
                  fill="rgba(0,0,0,0.75)"
                >
                  {note}
                </text>
              )}
            </g>
          );
        })}
        {KB_BLACK.map(({ canonical, aliases, afterIdx }) => {
          const activeAlias = aliases.find(a => active.has(a));
          const on = !!activeAlias;
          const x = afterIdx * KB_WW + KB_WW - KB_BW / 2 - 2;
          return (
            <g key={canonical}>
              <rect x={x} y={0} width={KB_BW} height={KB_BH} rx={2} fill={on ? color : "#1a1a1a"} stroke="none" />
              {on && activeAlias && (
                <text
                  x={x + KB_BW / 2}
                  y={KB_BH - 5}
                  textAnchor="middle"
                  fontSize={6.5}
                  fontFamily="monospace"
                  fontWeight="bold"
                  fill="rgba(0,0,0,0.7)"
                >
                  {activeAlias}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function BassPatternCard({ bp, color }: { bp: BassPattern; color: string }) {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const t = useT();
  return (
    <div className="border border-border rounded-lg bg-card overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-start justify-between p-4 text-left hover:bg-white/5 transition-colors gap-3"
      >
        <div className="flex flex-col gap-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-foreground">{bp.name}</span>
            <span
              className="text-[10px] font-mono px-1.5 py-0.5 rounded border shrink-0"
              style={{ color, borderColor: `${color}40`, backgroundColor: `${color}10` }}
            >
              {bp.key}
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{bp.description}</p>
        </div>
        <ChevronRight className={`w-4 h-4 shrink-0 text-muted-foreground/40 transition-transform mt-0.5 ${open ? "rotate-90" : ""}`} />
      </button>

      {open && (
        <div className="border-t border-border/60 p-4 flex flex-col gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-2">{t("Notes on microKEY — highlighted keys", "Hinweise zum microKEY — markierte Tasten")}</span>
            <MiniKeyboard rawNotes={bp.steps.map(s => s.note)} color={color} />
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-2">{t("Step grid (16 steps) — 1 e + a = beat subdivisions", "Step-Raster (16 Steps) — 1 e + a = Beat-Unterteilungen")}</span>
            <BassStepGrid steps={bp.steps} color={color} showTimingRow />
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
              <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground/50 font-mono">
                <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: color }} />
                {t("Vel > 80", "Vel > 80")}
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground/50 font-mono">
                <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: color, opacity: 0.55 }} />
                {lang === "de" ? "Ghost" : "Ghost"}
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground/50 font-mono">
                <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.2)" }} />
                {t("On-beat", "On-Beat")}
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground/50 font-mono">
                <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.04)" }} />
                {t("Syncopated", "Synkopiert")}
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-1.5">{t("Plugin / Instrument", "Plugin / Instrument")}</span>
              <p className="text-xs text-muted-foreground leading-relaxed">{bp.pluginSuggestion}</p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-1.5">{t("microKEY tips", "microKEY-Tipps")}</span>
              <p className="text-xs text-muted-foreground leading-relaxed">{bp.microKeyTip}</p>
            </div>
          </div>

          <div className="pt-3 border-t border-border/50">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-1.5">{t("Variation ideas", "Variationsideen")}</span>
            <p className="text-xs text-muted-foreground leading-relaxed">{bp.variation}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function calc16thMs(bpm: number): number {
  return Math.round((60000 / bpm) / 4);
}

function swingOffsetMs(bpm: number, swingPct: number): number {
  const base16th = 60000 / bpm / 4;
  return Math.round(base16th * ((swingPct - 50) / 50));
}

function BassTimingReference({
  midiRecs,
  color,
  bpm,
  swing,
}: {
  midiRecs: GenreMelodyRecs;
  color: string;
  bpm: number;
  swing?: number;
}) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const t = useT();
  const { lang } = useLang();
  const bp = midiRecs.bassPatterns[selectedIdx];
  const ms16 = calc16thMs(bpm);
  const swingMs = swing ? swingOffsetMs(bpm, swing) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18 }}
      className="mt-8 rounded-lg border border-border bg-card/40 p-4"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="text-sm font-semibold flex items-center gap-1.5">
            <Music2 className="w-3.5 h-3.5 text-muted-foreground" />
            {t("Bass Line + MIDI Timing", "Basslinie + MIDI-Timing")}
          </h3>
          <p className="text-[11px] text-muted-foreground/60 mt-0.5">
            {t("Step grid aligned to drum pattern — select bass line below", "Step-Raster am Drum-Pattern ausgerichtet — Basslinie unten wählen")}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 shrink-0">
          <span
            className="text-[9px] font-mono px-1.5 py-0.5 rounded border"
            style={{ color, borderColor: `${color}40`, backgroundColor: `${color}10` }}
            title={t("Duration of one 16th-note step", "Dauer eines 16tel-Schritts")}
          >
            ♩/4 = {ms16}ms
          </span>
          {swing != null && (
            <span
              className="text-[9px] font-mono px-1.5 py-0.5 rounded border"
              style={{ color, borderColor: `${color}40`, backgroundColor: `${color}10` }}
              title={t("Swing pushes off-beat 16ths by this offset", "Swing verschiebt Off-Beat-16tel um diesen Wert")}
            >
              SWING {swing}% (+{swingMs}ms)
            </span>
          )}
        </div>
      </div>

      {bp && (
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-foreground/80">{bp.name}</span>
            <span
              className="text-[9px] font-mono px-1.5 py-0.5 rounded border"
              style={{ color, borderColor: `${color}40`, backgroundColor: `${color}10` }}
            >
              {bp.key}
            </span>
          </div>
          <BassStepGrid steps={bp.steps} color={color} showTimingRow />
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2.5">
            <span className="flex items-center gap-1.5 text-[9px] text-muted-foreground/50 font-mono">
              <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.2)" }} />
              {t("On-beat (1 2 3 4)", "On-Beat (1 2 3 4)")}
            </span>
            <span className="flex items-center gap-1.5 text-[9px] text-muted-foreground/50 font-mono">
              <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }} />
              {t("Off-beat (+)", "Off-Beat (+)")}
            </span>
            <span className="flex items-center gap-1.5 text-[9px] text-muted-foreground/50 font-mono">
              <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.04)" }} />
              {t("Syncopated (e a)", "Synkopiert (e a)")}
            </span>
            <span className="flex items-center gap-1.5 text-[9px] text-muted-foreground/50 font-mono">
              <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: color, opacity: 0.55 }} />
              {lang === "de" ? "Ghost (Vel ≤ 80)" : "Ghost (vel ≤ 80)"}
            </span>
          </div>
        </div>
      )}

      {midiRecs.bassPatterns.length > 1 && (
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
          <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/40 self-center">
            {t("Bass:", "Bass:")}
          </span>
          {midiRecs.bassPatterns.map((b, i) => (
            <button
              key={i}
              onClick={() => setSelectedIdx(i)}
              className="text-[10px] font-mono px-2 py-0.5 rounded border transition-colors"
              style={
                i === selectedIdx
                  ? { backgroundColor: `${color}20`, color, borderColor: `${color}50` }
                  : { color: "var(--muted-foreground)", borderColor: "var(--border)" }
              }
            >
              {b.name}
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function NoteSequence({ sequence, color }: { sequence: string; color: string }) {
  const notes = sequence.split(/\s+/).filter(Boolean);
  return (
    <div className="flex flex-wrap gap-1.5">
      {notes.map((note, i) => (
        <div key={i} className="flex items-center gap-1">
          <span
            className="font-mono text-xs font-bold px-2 py-1 rounded border"
            style={{ color, borderColor: `${color}50`, backgroundColor: `${color}15` }}
          >
            {note}
          </span>
          {i < notes.length - 1 && (
            <span className="text-muted-foreground/30 text-xs">›</span>
          )}
        </div>
      ))}
    </div>
  );
}

function MelodyCard({ melody, color }: { melody: MelodyIdea; color: string }) {
  const [open, setOpen] = useState(false);
  const t = useT();
  return (
    <div className="border border-border rounded-lg bg-card overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-start justify-between p-4 text-left hover:bg-white/5 transition-colors gap-3"
      >
        <div className="flex flex-col gap-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-foreground">{melody.name}</span>
            <span
              className="text-[10px] font-mono px-1.5 py-0.5 rounded border shrink-0"
              style={{ color, borderColor: `${color}40`, backgroundColor: `${color}10` }}
            >
              {melody.key}
            </span>
          </div>
          <div className="mt-1.5">
            <NoteSequence sequence={melody.sequence} color={color} />
          </div>
        </div>
        <ChevronRight className={`w-4 h-4 shrink-0 text-muted-foreground/40 transition-transform mt-0.5 ${open ? "rotate-90" : ""}`} />
      </button>

      {open && (
        <div className="border-t border-border/60 p-4 flex flex-col gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-2">{t("microKEY claviature — highlighted keys to use", "microKEY-Klaviatur — markierte Tasten")}</span>
            <MiniKeyboard rawNotes={melody.scaleNotes.split(/\s+/).filter(Boolean)} color={color} />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-1.5">{t("Scale notes", "Skalentöne")}</span>
              <p className="text-xs text-muted-foreground font-mono leading-relaxed">{melody.scaleNotes}</p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-1.5">{t("How to play it", "So spielst du es")}</span>
              <p className="text-xs text-muted-foreground leading-relaxed">{melody.sequenceDescription}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 pt-3 border-t border-border/50">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-1.5">{t("microKEY tips", "microKEY-Tipps")}</span>
              <p className="text-xs text-muted-foreground leading-relaxed">{melody.microKeyTip}</p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-1.5">{t("Variation ideas", "Variationsideen")}</span>
              <p className="text-xs text-muted-foreground leading-relaxed">{melody.variation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function BassAndMidiSection({ midiRecs, color }: { midiRecs: GenreMelodyRecs; color: string }) {
  const [activeView, setActiveView] = useState<"bass" | "melody">("bass");
  const t = useT();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="mt-12"
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
            <Piano className="w-5 h-5 text-muted-foreground" />
            {t("Bass & MIDI Ideas", "Bass & MIDI-Ideen")}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {t("Bass line patterns with exact note sequences + melody ideas playable on the Korg microKEY", "Basslinien-Patterns mit exakten Notensequenzen + Melodie-Ideen für das Korg microKEY")}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50">{t("Suggested keys:", "Empfohlene Tonarten:")}</span>
            {midiRecs.suggestedKeys.map(k => (
              <span
                key={k}
                className="text-[10px] font-mono px-1.5 py-0.5 rounded border"
                style={{ color, borderColor: `${color}40`, backgroundColor: `${color}10` }}
              >
                {k}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center border border-border rounded-md overflow-hidden shrink-0">
          <button
            onClick={() => setActiveView("bass")}
            className={`px-4 py-2 text-sm font-medium transition-colors`}
            style={activeView === "bass" ? { backgroundColor: `${color}20`, color } : { color: "var(--muted-foreground)" }}
          >
            <span className="flex items-center gap-1.5">
              <Music2 className="w-3.5 h-3.5" />
              {t("Bass Lines", "Basslinien")}
            </span>
          </button>
          <div className="w-px h-6 bg-border" />
          <button
            onClick={() => setActiveView("melody")}
            className={`px-4 py-2 text-sm font-medium transition-colors`}
            style={activeView === "melody" ? { backgroundColor: `${color}20`, color } : { color: "var(--muted-foreground)" }}
          >
            <span className="flex items-center gap-1.5">
              <Piano className="w-3.5 h-3.5" />
              {t("Melodies", "Melodien")}
            </span>
          </button>
        </div>
      </div>

      <div className="mb-4 p-4 rounded-lg border border-border/50 bg-card/40">
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-1.5">{t("microKEY setup in Maschine", "microKEY-Einrichtung in Maschine")}</span>
        <p className="text-xs text-muted-foreground leading-relaxed">{midiRecs.microKeySetup}</p>
      </div>

      {activeView === "bass" && (
        <div className="flex flex-col gap-3">
          {midiRecs.bassPatterns.map((bp, i) => (
            <BassPatternCard key={i} bp={bp} color={color} />
          ))}
        </div>
      )}

      {activeView === "melody" && (
        <div className="flex flex-col gap-3">
          {midiRecs.melodies.map((m, i) => (
            <MelodyCard key={i} melody={m} color={color} />
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function PatternDetail() {
  const { lang, setLang } = useLang();
  const t = useT();
  const params = useParams();
  const { generatedPatterns } = useGeneratedPatterns();
  const pattern = patterns.find(p => p.id === params.id) ?? generatedPatterns.find(p => p.id === params.id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [activeTab, setActiveTab] = useState<"packs" | "plugins" | "samples">("samples");
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
        <p>{t("Pattern not found", "Pattern nicht gefunden")}</p>
        <Link href="/" className="text-primary hover:underline">{t("Return to Browser", "Zurück zur Übersicht")}</Link>      </div>
    );
  }

  const deLocale = patternsDe[pattern.id];
  const color = getGenreColorVar(pattern.genre);
  const recs = !pattern.generated ? soundRecommendations[pattern.genre] : null;
  const midiRecs = !pattern.generated ? melodyRecommendations[pattern.genre] : null;

  return (
    <div className="min-h-[100dvh] bg-background text-foreground pb-20">
      <header className="border-b border-border bg-background/95 sticky top-0 z-40">
        <div className="container mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium mr-8">
            <ArrowLeft className="w-4 h-4" />
            {t("Back", "Zurück")}
          </Link>
          <div className="flex-1" />
          <div className="flex items-center border border-border rounded-md overflow-hidden mr-3">
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
          <Button
            onClick={togglePlayback}
            className={`gap-2 ${isPlaying ? 'bg-destructive hover:bg-destructive/90 text-destructive-foreground' : 'bg-primary hover:bg-primary/90 text-primary-foreground'}`}
            data-testid="button-play"
          >
            {isPlaying ? (
              <><Square className="w-4 h-4" fill="currentColor" /> {t("Stop Pattern", "Pattern stoppen")}</>
            ) : (
              <><Play className="w-4 h-4" fill="currentColor" /> {t("Play Pattern", "Pattern abspielen")}</>            )}
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
            {lang === "de" && deLocale?.description ? deLocale.description : pattern.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {(lang === "de" && deLocale?.feel ? deLocale.feel : pattern.feel).map(f => (
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
                {t("Step Sequencer", "Step-Sequencer")}
              </h2>
              <div className="text-xs text-muted-foreground flex gap-4 font-mono">
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm" style={{ backgroundColor: color }}></div> {t("Hit", "Hit")}</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm" style={{ backgroundColor: color, opacity: 0.4 }}></div> {t("Ghost", "Ghost")}</span>
              </div>
            </div>
            <PatternGrid pattern={pattern} currentStep={currentStep} />
            {midiRecs && (
              <BassTimingReference
                midiRecs={midiRecs}
                color={color}
                bpm={pattern.bpm}
                swing={pattern.swing}
              />
            )}
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-muted-foreground" />
                {t("Maschine Notes", "Maschine-Hinweise")}
              </h2>
              <ul className="space-y-4">
                {(lang === "de" && deLocale?.maschineNotes ? deLocale.maschineNotes : pattern.maschineNotes).map((note, i) => (
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
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
                  <Package className="w-5 h-5 text-muted-foreground" />
                  {t("Sounds & Sample Ideas", "Sounds & Sample-Ideen")}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {t("Specific samples from your packs, plus recommended plugins and expansions", "Spezifische Samples aus deinen Packs plus empfohlene Plugins und Erweiterungen")}                </p>
              </div>
              <div className="flex items-center border border-border rounded-md overflow-hidden shrink-0">
                <button
                  onClick={() => setActiveTab("samples")}
                  className="px-3 py-2 text-sm font-medium transition-colors"
                  style={activeTab === "samples" ? { backgroundColor: `${color}20`, color } : { color: "var(--muted-foreground)" }}
                >
                  <span className="flex items-center gap-1.5">
                    <Disc3 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{t("Samples", "Samples")}</span>
                  </span>
                </button>
                <div className="w-px h-6 bg-border" />
                <button
                  onClick={() => setActiveTab("packs")}
                  className="px-3 py-2 text-sm font-medium transition-colors"
                  style={activeTab === "packs" ? { backgroundColor: `${color}20`, color } : { color: "var(--muted-foreground)" }}
                >
                  <span className="flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{t("Packs", "Packs")}</span>
                  </span>
                </button>
                <div className="w-px h-6 bg-border" />
                <button
                  onClick={() => setActiveTab("plugins")}
                  className="px-3 py-2 text-sm font-medium transition-colors"
                  style={activeTab === "plugins" ? { backgroundColor: `${color}20`, color } : { color: "var(--muted-foreground)" }}
                >
                  <span className="flex items-center gap-1.5">
                    <Plug className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{t("Plugins", "Plugins")}</span>
                  </span>
                </button>
              </div>
            </div>

            {activeTab === "samples" && midiRecs && (
              <div className="grid md:grid-cols-2 gap-4">
                {midiRecs.samples.map((sample, i) => (
                  <SampleCard key={i} sample={sample} color={color} />
                ))}
              </div>
            )}

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

        {midiRecs && (
          <BassAndMidiSection midiRecs={midiRecs} color={color} />
        )}
      </main>
    </div>
  );
}
