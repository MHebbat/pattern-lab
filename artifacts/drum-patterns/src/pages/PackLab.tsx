import { useState, useRef, useCallback, useMemo } from "react";
import { Link } from "wouter";
import { ArrowLeft, Upload, Package, Sparkles, Download, Play, Square, ChevronDown, ChevronRight, AlertTriangle, Image as ImageIcon, RefreshCw, FolderOpen, FileAudio } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import JSZip from "jszip";
import { useT, useLang } from "@/lib/i18n";
import {
  analyzeFile, isAudioFile, detectBPM,
  ALL_CATEGORIES, type AnalyzedSample, type SampleCategory,
} from "@/lib/sampleAnalyzer";
import { generatePackArtwork } from "@/lib/artworkGenerator";

// ─── Constants ────────────────────────────────────────────────────────────────

const ACCENT_COLORS = [
  { label: "Amber", value: "#f59e0b" },
  { label: "Blue", value: "#3b82f6" },
  { label: "Magenta", value: "#ec4899" },
  { label: "Emerald", value: "#10b981" },
  { label: "Purple", value: "#8b5cf6" },
  { label: "Cyan", value: "#06b6d4" },
];

const CATEGORY_ORDER: SampleCategory[] = [
  // Drums
  "Drums/Kick","Drums/Snare","Drums/Hi-Hat","Drums/Clap","Drums/Rimshot",
  "Drums/Percussion","Drums/Tom","Drums/Cymbal","Drums/Full Kit",
  // Bass
  "Bass",
  // Melodic one-shots
  "Melody/Lead","Melody/Pluck","Melody/Arp",
  // Chords
  "Chords/Stab",
  // Vocals
  "Vocals/Chop","Vocals/Phrase",
  // Instrument one-shots
  "One Shots/Keys","One Shots/Guitar","One Shots/Strings","One Shots/Horns",
  "One Shots/Synth","One Shots/Instrument",
  // Loops
  "Loops/Drum Loop","Loops/Bass Loop","Loops/Melody Loop","Loops/Chord Loop",
  "Loops/Guitar Loop","Loops/Vocal Loop","Loops/Full Loop",
  // FX
  "FX/Riser","FX/Downlifter","FX/Hit","FX/Sweep",
  // Textures
  "Textures/Pad","Textures/Drone","Textures/Vinyl",
  // Fallback
  "Uncategorized",
];

const CATEGORY_LABEL: Record<SampleCategory, string> = {
  "Drums/Kick":           "Kick Drum",
  "Drums/Snare":          "Snare",
  "Drums/Hi-Hat":         "Hi-Hat",
  "Drums/Clap":           "Clap",
  "Drums/Rimshot":        "Rimshot",
  "Drums/Percussion":     "Percussion",
  "Drums/Tom":            "Tom",
  "Drums/Cymbal":         "Cymbal",
  "Drums/Full Kit":       "Full Kit",
  "Bass":                 "Bass",
  "Melody/Lead":          "Melodic Lead",
  "Melody/Pluck":         "Pluck",
  "Melody/Arp":           "Arpeggio",
  "Chords/Stab":          "Chord Stab",
  "Vocals/Chop":          "Vocal Chop",
  "Vocals/Phrase":        "Vocal Phrase",
  "One Shots/Keys":       "Keys / Piano",
  "One Shots/Guitar":     "Guitar",
  "One Shots/Strings":    "Strings",
  "One Shots/Horns":      "Horns / Brass",
  "One Shots/Synth":      "Synth / Bell",
  "One Shots/Instrument": "Live Instrument",
  "Loops/Drum Loop":      "Drum Loop",
  "Loops/Bass Loop":      "Bass Loop",
  "Loops/Melody Loop":    "Melody Loop",
  "Loops/Chord Loop":     "Chord Loop",
  "Loops/Guitar Loop":    "Guitar Loop",
  "Loops/Vocal Loop":     "Vocal Loop",
  "Loops/Full Loop":      "Full Loop",
  "FX/Riser":             "Riser",
  "FX/Downlifter":        "Downlifter",
  "FX/Hit":               "Hit / Impact",
  "FX/Sweep":             "Sweep / FX",
  "Textures/Pad":         "Pad / Atmosphere",
  "Textures/Drone":       "Drone",
  "Textures/Vinyl":       "Vinyl / Noise",
  "Uncategorized":        "Uncategorized",
};

const CATEGORY_LABEL_DE: Record<SampleCategory, string> = {
  "Drums/Kick":           "Kick Drum",
  "Drums/Snare":          "Snare",
  "Drums/Hi-Hat":         "Hi-Hat",
  "Drums/Clap":           "Clap",
  "Drums/Rimshot":        "Rimshot",
  "Drums/Percussion":     "Percussion",
  "Drums/Tom":            "Tom",
  "Drums/Cymbal":         "Becken",
  "Drums/Full Kit":       "Full Kit",
  "Bass":                 "Bass",
  "Melody/Lead":          "Melodie-Lead",
  "Melody/Pluck":         "Pluck",
  "Melody/Arp":           "Arpeggio",
  "Chords/Stab":          "Akkord-Stab",
  "Vocals/Chop":          "Vokal-Chop",
  "Vocals/Phrase":        "Vokal-Phrase",
  "One Shots/Keys":       "Keys / Piano",
  "One Shots/Guitar":     "Gitarre",
  "One Shots/Strings":    "Streicher",
  "One Shots/Horns":      "Bläser / Brass",
  "One Shots/Synth":      "Synth / Bell",
  "One Shots/Instrument": "Live-Instrument",
  "Loops/Drum Loop":      "Drum-Loop",
  "Loops/Bass Loop":      "Bass-Loop",
  "Loops/Melody Loop":    "Melodie-Loop",
  "Loops/Chord Loop":     "Akkord-Loop",
  "Loops/Guitar Loop":    "Gitarren-Loop",
  "Loops/Vocal Loop":     "Vokal-Loop",
  "Loops/Full Loop":      "Full Loop",
  "FX/Riser":             "Riser",
  "FX/Downlifter":        "Downlifter",
  "FX/Hit":               "Hit / Impact",
  "FX/Sweep":             "Sweep / FX",
  "Textures/Pad":         "Pad / Atmosphäre",
  "Textures/Drone":       "Drone",
  "Textures/Vinyl":       "Vinyl / Rauschen",
  "Uncategorized":        "Unkategorisiert",
};

const AUDIO_ACCEPT = ".wav,.aiff,.aif,.mp3,.flac,.ogg,.zip";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtDuration(sec: number | null): string {
  if (sec === null) return "–";
  if (sec < 1) return `${Math.round(sec * 1000)}ms`;
  return `${sec.toFixed(2)}s`;
}

async function extractZipToFiles(zipFile: File): Promise<{ file: File; zipPath: string }[]> {
  const zip = await JSZip.loadAsync(zipFile);
  const results: { file: File; zipPath: string }[] = [];
  for (const [path, entry] of Object.entries(zip.files)) {
    if (entry.dir) continue;
    const name = path.split("/").pop() ?? path;
    if (!isAudioFile(name)) continue;
    const data = await entry.async("arraybuffer");
    const blob = new Blob([data]);
    const file = new File([blob], name, { type: "audio/wav" });
    results.push({ file, zipPath: path });
  }
  return results;
}

async function buildExportZip(
  samples: AnalyzedSample[],
  packInfo: { name: string; author: string },
  artwork: string | null
): Promise<Blob> {
  const zip = new JSZip();
  const root = zip.folder(packInfo.name)!;

  if (artwork) {
    const b64 = artwork.split(",")[1];
    root.file("_artwork.png", b64, { base64: true });
  }

  const now = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const importTxt = `MASCHINE MK3 — SAMPLE PACK IMPORT GUIDE
==========================================
Pack    : ${packInfo.name}
Author  : ${packInfo.author || "Unknown"}
Samples : ${samples.length}
Prepared: ${now}

IMPORTANT — SUPPORTED FORMATS
-------------------------------
Maschine only reads WAV and AIFF files.
Any MP3, FLAC, or OGG files in this pack will NOT appear in Maschine
and must be converted to WAV first (use free tools like Audacity or fre:ac).

STEP 1 — EXTRACT
-----------------
Extract this ZIP to a PERMANENT location you will NOT move afterwards.
Moving the folder later will break the Maschine library link.

  Extract to a PERMANENT location — do NOT move it afterwards.

  Maschine 2 auto-scanned path:
    Mac: ~/Documents/Native Instruments/Maschine 2/Samples/${packInfo.name}/
    Win: Documents\\Native Instruments\\Maschine 2\\Samples\\${packInfo.name}\\

  Maschine 3 auto-scanned path:
    Mac: ~/Documents/Native Instruments/Maschine 3/User Data/Samples/${packInfo.name}/
    Win: Documents\\Native Instruments\\Maschine 3\\User Data\\Samples\\${packInfo.name}\\

  Or extract to any folder — you can register it manually in Step 2.

STEP 2 — REGISTER FOLDER IN MASCHINE
--------------------------------------
Skip this step ONLY if you used the auto-scanned path above.

  Maschine 2 (Mac): Maschine menu → Preferences → Library tab
  Maschine 2 (Win): Edit menu → Preferences → Library tab
  Maschine 3 (Mac): Maschine menu → Preferences → Library tab
  Maschine 3 (Win): Edit menu → Preferences → Library tab

  → Under "User", find "Sample Folders" and click the "+" button.
  → Select the extracted "${packInfo.name}/" folder.
  → Click OK / Apply.

STEP 3 — RESCAN MASCHINE LIBRARY
----------------------------------
  Preferences → Library tab → click "Rescan" button.
  Wait for the progress bar to finish fully before closing.

  Maschine 2: samples appear under Browser → User → Samples
  Maschine 3: samples appear under Browser → User Content → Samples

STEP 4 — USING SAMPLES IN MASCHINE MK3
-----------------------------------------
DRUM ONE-SHOTS (Drums/):
  Drag from browser onto any empty pad in a drum Group.
  Pad mode = One-Shot automatically.

LOOPS (Loops/):
  Create a new Group. Load loop onto pad A1.
  Pad settings: Mode = Loop. Enable Tempo Sync for BPM matching.
  BPM is tagged in the filename where available.

MELODIC ONE-SHOTS (Melody/, One Shots/, Chords/):
  Drag onto a pad. Set pad to Poly mode.
  Play chromatically via Korg microKEY (USB MIDI input in Maschine).
  Use the Tune knob in Pad settings to transpose to your project key.

VOCAL CHOPS (Vocals/Chop/):
  Map chops to consecutive pads (A1-A4, B1-B4).
  Set each pad to One-Shot mode, Poly off.
  Play rhythmically from pads or microKEY in Poly mode for melodic chops.

GUITAR / STRINGS / HORNS (One Shots/Guitar, Strings, Horns/):
  Drag onto a melodic Group pad.
  Poly mode on. Play phrases on microKEY.
  Layer with chord stabs from Chords/ for full arrangements.

BASS (Bass/):
  Load onto pad A1 in a dedicated bass Group.
  Poly mode. Enable Glide/Portamento in Pad settings for slides.
  Play bass lines on microKEY left hand while drums run.

FX & TRANSITIONS (FX/):
  Load risers/downlifters on pads with long release.
  Trigger 1 bar before a section change.
  Riser: trigger at bar 7 for an 8-bar drop. Downlifter: trigger at bar 15 for bar 16 break.

PADS & DRONES (Textures/):
  Load onto a Group. Set to loop/sustain mode.
  Use long attack envelope (0.5-2s) for slow bloom.
  Play sustained chords on microKEY for full-arrangement atmosphere.

FOLDER STRUCTURE
------------------
${packInfo.name}/
  Drums/           One-shot drums (Kick, Snare, Hat, Clap, Rimshot, Perc, Tom, Cymbal)
  Bass/            Bass hits, 808s, sub bass
  Melody/          Melodic one-shots (Lead, Pluck, Arp)
  Chords/          Chord stabs and harmonic shots
  Vocals/          Vocal chops and phrases
  One Shots/       Instrument one-shots (Keys, Guitar, Strings, Horns, Synth)
  Loops/           Time-synced loops (Drum, Bass, Melody, Chord, Guitar, Vocal, Full)
  FX/              Transitions: Risers, Downlifters, Hits, Sweeps
  Textures/        Pads, Drones, Vinyl/Noise
  Uncategorized/   Samples that need manual review
`;
  root.file("_MASCHINE_IMPORT.txt", importTxt);

  const categoryCounts: Record<string, number> = {};
  for (const s of samples) {
    categoryCounts[s.userCategory] = (categoryCounts[s.userCategory] ?? 0) + 1;
  }

  const manifest = {
    packName: packInfo.name,
    author: packInfo.author,
    preparedDate: now,
    totalSamples: samples.length,
    categories: categoryCounts,
    samples: samples.map(s => ({
      originalName: s.originalName,
      folder: s.userCategory,
      type: s.type,
      duration: s.duration,
      bpm: s.bpm,
      key: s.musicalKey,
    })),
  };
  root.file("_manifest.json", JSON.stringify(manifest, null, 2));

  // Add audio files into category folders
  for (const s of samples) {
    const data = await s.file.arrayBuffer();
    root.file(`${s.userCategory}/${s.originalName}`, data);
  }

  return zip.generateAsync({ type: "blob", compression: "STORE" });
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SampleRow({
  sample,
  accentColor,
  playing,
  onPlay,
  onCategoryChange,
}: {
  sample: AnalyzedSample;
  accentColor: string;
  playing: boolean;
  onPlay: () => void;
  onCategoryChange: (cat: SampleCategory) => void;
}) {
  const { lang } = useLang();
  const catLabels = lang === "de" ? CATEGORY_LABEL_DE : CATEGORY_LABEL;
  return (
    <div className="flex items-center gap-2 py-1.5 px-3 hover:bg-white/5 rounded transition-colors group">
      <button
        onClick={onPlay}
        className="shrink-0 w-6 h-6 flex items-center justify-center rounded transition-colors"
        style={playing ? { color: accentColor } : { color: "var(--muted-foreground)" }}
      >
        {playing ? <Square className="w-3 h-3" /> : <Play className="w-3 h-3" />}
      </button>

      <div className="flex-1 min-w-0">
        <span className="text-xs text-foreground font-mono truncate block">{sample.originalName}</span>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        {sample.confidence < 0.6 && (
          <AlertTriangle className="w-3 h-3 text-amber-400/70 shrink-0" aria-label="Low confidence detection" />
        )}
        <span className="text-[10px] font-mono text-muted-foreground/50 w-12 text-right">{fmtDuration(sample.duration)}</span>
        {sample.bpm && (
          <span className="text-[10px] font-mono hidden sm:block" style={{ color: accentColor }}>
            {sample.bpm}bpm
          </span>
        )}
        {sample.musicalKey && (
          <span className="text-[10px] font-mono text-muted-foreground/50 hidden md:block w-10">{sample.musicalKey}</span>
        )}
        <select
          value={sample.userCategory}
          onChange={e => onCategoryChange(e.target.value as SampleCategory)}
          className="text-[10px] font-mono bg-background border border-border rounded px-1 py-0.5 text-muted-foreground max-w-[140px]"
          style={{ colorScheme: "dark" }}
        >
          {ALL_CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{catLabels[cat]}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

function CategoryGroup({
  category,
  samples,
  accentColor,
  playingId,
  onPlay,
  onCategoryChange,
}: {
  category: SampleCategory;
  samples: AnalyzedSample[];
  accentColor: string;
  playingId: string | null;
  onPlay: (s: AnalyzedSample) => void;
  onCategoryChange: (id: string, cat: SampleCategory) => void;
}) {
  const [open, setOpen] = useState(samples.length <= 20);
  const lowConf = samples.filter(s => s.confidence < 0.6).length;
  const t = useT();
  const { lang } = useLang();
  const catLabels = lang === "de" ? CATEGORY_LABEL_DE : CATEGORY_LABEL;

  return (
    <div className="border border-border rounded-lg bg-card overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/5 transition-colors"
      >
        {open ? <ChevronDown className="w-4 h-4 text-muted-foreground/50 shrink-0" /> : <ChevronRight className="w-4 h-4 text-muted-foreground/50 shrink-0" />}
        <span className="text-sm font-mono font-semibold text-foreground flex-1">{catLabels[category]}</span>
        <div className="flex items-center gap-2">
          {lowConf > 0 && (
            <span className="text-[10px] font-mono text-amber-400 flex items-center gap-1">
              <AlertTriangle className="w-2.5 h-2.5" />{lowConf} {t("uncertain", "unsicher")}
            </span>
          )}
          <span
            className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
          >
            {samples.length}
          </span>
        </div>
      </button>
      {open && (
        <div className="border-t border-border/40 py-1">
          {samples.map(s => (
            <SampleRow
              key={s.id}
              sample={s}
              accentColor={accentColor}
              playing={playingId === s.id}
              onPlay={() => onPlay(s)}
              onCategoryChange={cat => onCategoryChange(s.id, cat)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

type Step = "upload" | "analyzing" | "review";

export default function PackLab() {
  const t = useT();
  const [step, setStep] = useState<Step>("upload");
  const [samples, setSamples] = useState<AnalyzedSample[]>([]);
  const [progress, setProgress] = useState(0);
  const [progressLabel, setProgressLabel] = useState("");
  const [packName, setPackName] = useState("");
  const [author, setAuthor] = useState("");
  const [accentColor, setAccentColor] = useState(ACCENT_COLORS[0].value);
  const [artwork, setArtwork] = useState<string | null>(null);
  const [exporting, setExporting] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<{ source: AudioBufferSourceNode; ctx: AudioContext } | null>(null);
  const artworkInputRef = useRef<HTMLInputElement>(null);

  // Grouped samples by category
  const grouped = useMemo(() => {
    const map = new Map<SampleCategory, AnalyzedSample[]>();
    for (const cat of CATEGORY_ORDER) map.set(cat, []);
    for (const s of samples) {
      if (!map.has(s.userCategory)) map.set(s.userCategory, []);
      map.get(s.userCategory)!.push(s);
    }
    return map;
  }, [samples]);

  const stats = useMemo(() => {
    const byType = { "one-shot": 0, "loop": 0, "kit": 0, "unknown": 0 };
    for (const s of samples) byType[s.type]++;
    return byType;
  }, [samples]);

  // ─── File processing ─────────────────────────────────────────────────────

  const processFiles = useCallback(async (rawFiles: File[]) => {
    setStep("analyzing");
    setProgress(0);

    // Expand ZIPs
    const entries: { file: File; zipPath: string }[] = [];
    for (const f of rawFiles) {
      if (f.name.toLowerCase().endsWith(".zip")) {
        setProgressLabel(`Extracting ${f.name}…`);
        try {
          const extracted = await extractZipToFiles(f);
          entries.push(...extracted);
        } catch (e) {
          console.error("ZIP extraction failed", e);
        }
      } else if (isAudioFile(f.name)) {
        entries.push({ file: f, zipPath: f.name });
      }
    }

    if (entries.length === 0) {
      setStep("upload");
      return;
    }

    // Infer pack name from ZIP filename or first file
    if (!packName) {
      const zipFile = rawFiles.find(f => f.name.toLowerCase().endsWith(".zip"));
      const guessedName = (zipFile?.name ?? rawFiles[0]?.name ?? "My Pack")
        .replace(/\.zip$/i, "")
        .replace(/[_\-]/g, " ")
        .replace(/\b\w/g, c => c.toUpperCase())
        .trim();
      setPackName(guessedName);
    }

    // Analyze
    const results: AnalyzedSample[] = [];
    for (let i = 0; i < entries.length; i++) {
      const { file, zipPath } = entries[i];
      setProgress(Math.round((i / entries.length) * 100));
      setProgressLabel(file.name);
      const analyzed = await analyzeFile(file, zipPath);
      results.push(analyzed);
    }

    setProgress(100);
    setSamples(results);
    setStep("review");
  }, [packName]);

  const onFileDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) processFiles(files);
  }, [processFiles]);

  const onFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length > 0) processFiles(files);
    e.target.value = "";
  }, [processFiles]);

  // ─── Audio preview ───────────────────────────────────────────────────────

  const playSample = useCallback(async (s: AnalyzedSample) => {
    audioRef.current?.source.stop();
    audioRef.current?.ctx.close();
    audioRef.current = null;

    if (playingId === s.id) {
      setPlayingId(null);
      return;
    }

    try {
      const ctx = new AudioContext();
      const buf = await s.file.arrayBuffer();
      const decoded = await ctx.decodeAudioData(buf);
      const source = ctx.createBufferSource();
      source.buffer = decoded;
      source.connect(ctx.destination);
      source.start();
      audioRef.current = { source, ctx };
      setPlayingId(s.id);
      source.onended = () => { setPlayingId(null); ctx.close(); audioRef.current = null; };
    } catch {
      setPlayingId(null);
    }
  }, [playingId]);

  const updateCategory = useCallback((id: string, cat: SampleCategory) => {
    setSamples(prev => prev.map(s => s.id === id ? { ...s, userCategory: cat } : s));
  }, []);

  // ─── Artwork ─────────────────────────────────────────────────────────────

  const generateArtwork = useCallback(() => {
    const art = generatePackArtwork(packName || "My Pack", author, samples.length, accentColor);
    setArtwork(art);
  }, [packName, author, samples.length, accentColor]);

  const onArtworkUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setArtwork(ev.target?.result as string);
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  // ─── Export ──────────────────────────────────────────────────────────────

  const handleExport = useCallback(async () => {
    if (!packName.trim()) return;
    setExporting(true);
    try {
      const blob = await buildExportZip(samples, { name: packName.trim(), author }, artwork);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${packName.replace(/\s+/g, "_")}_Maschine.zip`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Export failed", e);
    } finally {
      setExporting(false);
    }
  }, [samples, packName, author, artwork]);

  const resetAll = () => {
    setSamples([]);
    setPackName("");
    setAuthor("");
    setArtwork(null);
    setProgress(0);
    setStep("upload");
    audioRef.current?.source.stop();
    audioRef.current = null;
    setPlayingId(null);
  };

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="min-h-[100dvh] bg-background text-foreground pb-20">
      <header className="border-b border-border bg-background/95 sticky top-0 z-40">
        <div className="container mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> {t("Back", "Zurück")}
          </Link>
          <div className="flex-1" />
          {step === "review" && (
            <button
              onClick={resetAll}
              className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3 h-3" /> {t("Start over", "Neu starten")}
            </button>
          )}
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Package className="w-5 h-5 text-muted-foreground" />
            <h1 className="text-3xl font-bold tracking-tight">Pack Lab</h1>
          </div>
          <p className="text-muted-foreground">
            {t("Drop a sample pack — ZIP or individual files. Detects and classifies everything: drums, bass, melody, chords, vocals, guitars, strings, horns, arps, pads, FX, and more. Exports a Maschine-ready folder structure with artwork and import instructions.", "Sample-Pack hineinziehen — ZIP oder einzelne Dateien. Erkennt und klassifiziert alles: Drums, Bass, Melodie, Akkorde, Vocals, Gitarren, Streicher, Bläser, Arps, Pads, FX und mehr. Exportiert eine Maschine-fertige Ordnerstruktur mit Artwork und Import-Anweisungen.")}
          </p>
        </motion.div>

        {/* ── STEP 1: Upload ── */}
        {step === "upload" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div
              onDrop={onFileDrop}
              onDragOver={e => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed rounded-2xl p-16 text-center cursor-pointer transition-all"
              style={{
                borderColor: dragOver ? "#f59e0b" : "var(--border)",
                backgroundColor: dragOver ? "rgba(245,158,11,0.05)" : undefined,
              }}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept={AUDIO_ACCEPT}
                multiple
                className="hidden"
                onChange={onFileInput}
              />
              <Upload className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-lg font-semibold text-foreground mb-2">{t("Drop your sample pack here", "Sample-Pack hier ablegen")}</p>
              <p className="text-sm text-muted-foreground mb-1">
                {t("Accepts", "Akzeptiert")} <span className="font-mono">.zip</span> {t("packs or individual audio files", "Packs oder einzelne Audio-Dateien")}
              </p>
              <p className="text-xs text-muted-foreground/50">WAV · AIFF · MP3 · FLAC · ZIP</p>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { icon: FileAudio, title: t("Detects everything", "Erkennt alles"), body: t("Drums, bass, melody, chords, vocals, guitar, strings, horns, arps, plucks, pads, drones, FX — 38 categories detected from filename and ZIP folder structure.", "Drums, Bass, Melodie, Akkorde, Vocals, Gitarre, Streicher, Bläser, Arps, Plucks, Pads, Drones, FX — 38 Kategorien aus Dateinamen und ZIP-Ordnerstruktur erkannt.") },
                { icon: FolderOpen, title: t("Maschine folder structure", "Maschine-Ordnerstruktur"), body: t("Exports a ZIP with Drums, Bass, Melody, Chords, Vocals, One Shots, Loops, FX, Textures — exactly how Maschine's User Library expects it.", "Exportiert ein ZIP mit Drums, Bass, Melodie, Akkorde, Vocals, One Shots, Loops, FX, Texturen — genau so, wie Maschines Benutzer-Bibliothek es erwartet.") },
                { icon: ImageIcon, title: t("Pack artwork", "Pack-Artwork"), body: t("Upload your own artwork or generate a dark, producer-style 500×500 PNG with your pack name. Drops inside the folder so Maschine can display it.", "Eigenes Artwork hochladen oder ein dunkles, produzenten-artiges 500×500 PNG mit deinem Pack-Namen generieren. Landet im Ordner, damit Maschine es anzeigen kann.") },
              ].map(({ icon: Icon, title, body }, i) => (
                <div key={i} className="border border-border rounded-xl p-5 bg-card">
                  <Icon className="w-5 h-5 text-muted-foreground/40 mb-3" />
                  <p className="font-semibold text-sm text-foreground mb-1">{title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── STEP 2: Analyzing ── */}
        {step === "analyzing" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 text-center space-y-6">
            <div className="w-16 h-16 rounded-full border-4 border-t-amber-400 border-border animate-spin mx-auto" />
            <div>
              <p className="text-lg font-semibold text-foreground mb-1">{t("Analyzing samples…", "Samples werden analysiert…")}</p>
              <p className="text-sm font-mono text-muted-foreground truncate max-w-xs mx-auto">{progressLabel}</p>
            </div>
            <div className="max-w-sm mx-auto bg-border rounded-full h-1.5 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-200"
                style={{ width: `${progress}%`, backgroundColor: "#f59e0b" }}
              />
            </div>
            <p className="text-xs font-mono text-muted-foreground/50">{progress}%</p>
          </motion.div>
        )}

        {/* ── STEP 3: Review ── */}
        {step === "review" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: t("Total", "Gesamt"), value: samples.length },
                { label: t("One-shots", "One-Shots"), value: stats["one-shot"] },
                { label: t("Loops", "Loops"), value: stats["loop"] },
                { label: t("Kits", "Kits"), value: stats["kit"] + stats["unknown"] },
              ].map(({ label, value }) => (
                <div key={label} className="border border-border rounded-xl p-4 bg-card text-center">
                  <p className="text-2xl font-bold text-foreground">{value}</p>
                  <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* Pack info + artwork */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Pack info */}
              <div className="border border-border rounded-xl p-5 bg-card space-y-4">
                <h2 className="font-semibold text-sm text-foreground">{t("Pack Info", "Pack-Info")}</h2>
                <div className="space-y-3">
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-1">{t("Pack Name", "Pack-Name")} <span className="text-red-400">*</span></label>
                    <input
                      value={packName}
                      onChange={e => setPackName(e.target.value)}
                      placeholder="e.g. Soulful Dreams Vol 1"
                      className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-amber-500/60"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-1">{t("Author / Label", "Autor / Label")}</label>
                    <input
                      value={author}
                      onChange={e => setAuthor(e.target.value)}
                      placeholder="e.g. Cymatics"
                      className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-amber-500/60"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-1">{t("Artwork Accent Color", "Artwork-Akzentfarbe")}</label>
                    <div className="flex gap-2 flex-wrap">
                      {ACCENT_COLORS.map(c => (
                        <button
                          key={c.value}
                          onClick={() => setAccentColor(c.value)}
                          title={c.label}
                          className="w-7 h-7 rounded-full border-2 transition-all"
                          style={{
                            backgroundColor: c.value,
                            borderColor: accentColor === c.value ? "#fff" : "transparent",
                            transform: accentColor === c.value ? "scale(1.2)" : "scale(1)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Artwork */}
              <div className="border border-border rounded-xl p-5 bg-card space-y-3">
                <h2 className="font-semibold text-sm text-foreground">{t("Pack Artwork", "Pack-Artwork")}</h2>
                {artwork ? (
                  <div className="space-y-3">
                    <img src={artwork} alt="Pack artwork" className="w-full aspect-square object-cover rounded-lg border border-border" />
                    <div className="flex gap-2">
                      <button
                        onClick={generateArtwork}
                        className="flex-1 flex items-center justify-center gap-2 py-2 text-xs border border-border rounded-md text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <RefreshCw className="w-3 h-3" /> {t("Regenerate", "Neu generieren")}
                      </button>
                      <button
                        onClick={() => artworkInputRef.current?.click()}
                        className="flex-1 flex items-center justify-center gap-2 py-2 text-xs border border-border rounded-md text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Upload className="w-3 h-3" /> {t("Upload", "Hochladen")}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div
                      className="w-full aspect-square rounded-lg border border-dashed border-border flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-muted-foreground/40 transition-colors"
                      onClick={() => artworkInputRef.current?.click()}
                    >
                      <ImageIcon className="w-8 h-8 text-muted-foreground/20" />
                      <span className="text-xs text-muted-foreground/40">{t("Upload image", "Bild hochladen")}</span>
                    </div>
                    <button
                      onClick={generateArtwork}
                      className="w-full flex items-center justify-center gap-2 py-2.5 text-xs rounded-md border border-border text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5" /> {t("Generate artwork from pack name", "Artwork aus Pack-Name generieren")}
                    </button>
                  </div>
                )}
                <input
                  ref={artworkInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  className="hidden"
                  onChange={onArtworkUpload}
                />
              </div>
            </div>

            {/* Category groups */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-semibold text-foreground">{t("Sample Review", "Sample-Überprüfung")}</h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {t("Adjust categories as needed. Low-confidence detections show a warning icon.", "Kategorien nach Bedarf anpassen. Unsichere Erkennungen werden mit einem Warnsymbol markiert.")}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {CATEGORY_ORDER.map(cat => {
                  const list = grouped.get(cat) ?? [];
                  if (list.length === 0) return null;
                  return (
                    <CategoryGroup
                      key={cat}
                      category={cat}
                      samples={list}
                      accentColor={accentColor}
                      playingId={playingId}
                      onPlay={playSample}
                      onCategoryChange={updateCategory}
                    />
                  );
                })}
              </div>
            </div>

            {/* Export */}
            <div className="border border-border rounded-xl p-6 bg-card">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="font-semibold text-foreground mb-1">{t("Export Maschine Pack", "Maschine-Pack exportieren")}</h2>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t("Downloads a ZIP with the full Maschine folder structure, your artwork, a JSON manifest, and step-by-step import instructions.", "Lädt ein ZIP mit der vollständigen Maschine-Ordnerstruktur, deinem Artwork, einem JSON-Manifest und schrittweisen Import-Anweisungen herunter.")}
                    {" "}{t("Extract and add to", "Entpacken und hinzufügen zu")} <span className="font-mono text-foreground/70">Maschine &gt; Library &gt; User &gt; Add Folder</span>.
                  </p>
                </div>
                <button
                  onClick={handleExport}
                  disabled={!packName.trim() || exporting}
                  className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all disabled:opacity-40"
                  style={{
                    backgroundColor: packName.trim() ? accentColor : undefined,
                    color: packName.trim() ? "#000" : undefined,
                    border: !packName.trim() ? "1px solid var(--border)" : undefined,
                  }}
                >
                  {exporting ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Download className="w-4 h-4" />
                  )}
                  {exporting ? t("Building…", "Wird erstellt…") : t("Export ZIP", "ZIP exportieren")}
                </button>
              </div>
              {!packName.trim() && (
                <p className="text-xs text-amber-400 mt-3 flex items-center gap-1.5">
                  <AlertTriangle className="w-3 h-3" /> {t("Enter a pack name above to enable export", "Pack-Namen eingeben um Export zu aktivieren")}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
