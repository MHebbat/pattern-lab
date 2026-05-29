// Maschine-ready sample analyzer
// Detects category, type, BPM, and key from filename + audio header

export const ALL_CATEGORIES = [
  "Drums/Kick",
  "Drums/Snare",
  "Drums/Hi-Hat",
  "Drums/Clap",
  "Drums/Rimshot",
  "Drums/Percussion",
  "Drums/Tom",
  "Drums/Cymbal",
  "Drums/Full Kit",
  "Bass",
  "Loops/Drum Loop",
  "Loops/Bass Loop",
  "Loops/Melody Loop",
  "Loops/Full Loop",
  "One Shots/Keys",
  "One Shots/Synth",
  "One Shots/Instrument",
  "FX/Riser",
  "FX/Downlifter",
  "FX/Hit",
  "FX/Sweep",
  "Textures/Pad",
  "Textures/Vinyl",
  "Uncategorized",
] as const;

export type SampleCategory = typeof ALL_CATEGORIES[number];
export type SampleType = "one-shot" | "loop" | "kit" | "unknown";

export type AnalyzedSample = {
  id: string;
  file: File;
  originalName: string;
  zipPath: string;
  extension: string;
  detectedCategory: SampleCategory;
  userCategory: SampleCategory;
  type: SampleType;
  duration: number | null;
  bpm: number | null;
  musicalKey: string | null;
  confidence: number; // 0-1
  customName: string;
};

// ─── Keyword maps ─────────────────────────────────────────────────────────────

const CATEGORY_KEYWORDS: [SampleCategory, string[]][] = [
  ["Drums/Kick",        ["kick", "_kk_", "_bd_", "bass drum", "bassdrum", "_808_", "kickdrum", "kick_", "_kick", "bd_", "bd ", " bd", "kik", "bcik"]],
  ["Drums/Snare",       ["snare", "_sn_", "_snr_", "snaredrum", "snare_", "_snare", "snr_", " sn ", "_sd_", "sd_", "sd ", " sd", "sidestick", "rimsnare"]],
  ["Drums/Hi-Hat",      ["hihat", "hi-hat", "hi_hat", "hat_", "_hat", "_hh_", "hh_", " hh", "closed hat", "open hat", "pedal hat", "chh", "ohh", "hatclosed", "hatopen"]],
  ["Drums/Clap",        ["clap", "_clp_", "clap_", "_clap", "claps", "handclap"]],
  ["Drums/Rimshot",     ["rim", "rimshot", "rim_", "_rim", "side stick", "sidestick"]],
  ["Drums/Percussion",  ["perc", "conga", "bongo", "shaker", "tambourine", "tamb_", "cowbell", "woodblock", "triangle", "agogo", "claves", "maracas", "djembe", "timbale", "cajon", "bongo"]],
  ["Drums/Tom",         ["tom", "floor tom", "rack tom", "hi tom", "lo tom", "mid tom", "_tom_", "tomtom"]],
  ["Drums/Cymbal",      ["crash", "ride", "splash", "china", "cymbal", "bell", "crsh", "_cym_"]],
  ["Drums/Full Kit",    ["full kit", "drumkit", "drum kit", "full drum", "complete kit", "kit_", "_kit"]],
  ["Bass",              ["bass_", "_bass", " bass", "bassline", "bass line", "_sub_", "sub_", " sub", "808bass", "bassriff"]],
  ["Loops/Drum Loop",   ["drum loop", "drumloop", "drum_loop", "break_", "breakbeat", " break", "_break"]],
  ["Loops/Bass Loop",   ["bass loop", "bassloop", "bass_loop"]],
  ["Loops/Melody Loop", ["melody loop", "melodyloop", "melody_loop", "hook loop", "lead loop"]],
  ["Loops/Full Loop",   ["full loop", "fullloop", "full_loop", "loop_full", " loop", "_loop", "loop_", "lp_", "_lp_"]],
  ["One Shots/Keys",    ["piano", "keys_", "_keys", "rhodes", "organ", "wurlitzer", "wurli", "epiano", "e-piano", "keyboard", "chord", "vibes", "marimba"]],
  ["One Shots/Synth",   ["synth", "lead_", "_lead", "arp_", "_arp", "pluck", "stab", "bell_", "_bell", "brass_", "_brass"]],
  ["One Shots/Instrument", ["guitar", "violin", "cello", "viola", "trumpet", "sax", "flute", "choir", "vocal", "vox_", "_vox", "horn_"]],
  ["FX/Riser",          ["riser", "rise_", "_rise", "uplifter", "buildup", "build_up", "builddown", "sweep_up"]],
  ["FX/Downlifter",     ["downlifter", "down_lift", "fall_", "_fall", "downfall", "sweep_down", "whoosh_down"]],
  ["FX/Hit",            ["hit_", "_hit", "impact", "slam", "punch", "explosion", "boom_", "stinger"]],
  ["FX/Sweep",          ["sweep_", "whoosh", "transition", "_fx_", "sfx_", "_sfx", "effect_", "zap_", "laser"]],
  ["Textures/Pad",      ["pad_", "_pad", "atmosphere", "atmos_", "_atmos", "ambient_", "drone_", "_drone", "texture_", "wash_"]],
  ["Textures/Vinyl",    ["vinyl", "crackle", "noise_", "_noise", "static_", "hiss_", "lofi", "lo-fi", "lo_fi"]],
];

// Path-based hints (from ZIP folder structure)
const PATH_HINTS: [SampleCategory, string[]][] = [
  ["Drums/Kick",       ["kick", "kicks", "bass drum", "bd"]],
  ["Drums/Snare",      ["snare", "snares"]],
  ["Drums/Hi-Hat",     ["hat", "hats", "hihat", "hi-hat"]],
  ["Drums/Clap",       ["clap", "claps"]],
  ["Drums/Percussion", ["perc", "percussion"]],
  ["Drums/Tom",        ["tom", "toms"]],
  ["Drums/Cymbal",     ["cymbal", "crash", "ride"]],
  ["Loops/Drum Loop",  ["drum loop", "drum loops", "breaks"]],
  ["Loops/Bass Loop",  ["bass loop", "bass loops"]],
  ["Loops/Full Loop",  ["loops", "loop"]],
  ["One Shots/Keys",   ["keys", "piano", "rhodes", "chords"]],
  ["One Shots/Synth",  ["synth", "leads", "pads"]],
  ["Bass",             ["bass", "subs"]],
  ["FX/Riser",         ["risers", "riser"]],
  ["FX/Sweep",         ["fx", "effects", "sfx"]],
  ["Textures/Pad",     ["pads", "atmospheres", "textures", "ambient"]],
  ["Textures/Vinyl",   ["vinyl", "noise"]],
];

// ─── Detection functions ──────────────────────────────────────────────────────

export function detectBPM(text: string): number | null {
  const cleaned = text.toLowerCase().replace(/[_\-\s]/g, " ");
  const patterns = [
    /(\d{2,3})\s*bpm/,
    /bpm\s*(\d{2,3})/,
    /(\d{2,3})\s*bp\b/,
    /_(\d{2,3})_/,
    /\b(60|70|75|76|78|80|82|84|85|86|87|88|90|92|94|95|96|98|100|102|104|105|106|107|108|110|115|120|125|128|130|140|145|150|160|170|175|180)\b/,
  ];
  for (const p of patterns) {
    const m = cleaned.match(p);
    if (m) {
      const bpm = parseInt(m[1]);
      if (bpm >= 60 && bpm <= 220) return bpm;
    }
  }
  return null;
}

export function detectKey(text: string): string | null {
  const cleaned = text.replace(/[_\-]/g, " ");
  const match = cleaned.match(/\b([A-G][#b]?)\s*(maj|min|major|minor|m)?\b/i);
  if (!match) return null;
  const note = match[1].toUpperCase();
  const qual = match[2] ? (match[2].toLowerCase().startsWith("m") ? "min" : "maj") : null;
  return qual ? `${note} ${qual}` : note;
}

function normalizeName(name: string): string {
  return name.toLowerCase().replace(/[_\-\.\s]/g, " ");
}

export function detectCategory(
  filename: string,
  zipPath: string
): { category: SampleCategory; confidence: number } {
  const norm = normalizeName(filename);
  const pathNorm = normalizeName(zipPath);

  // Check ZIP path hints first (most reliable)
  for (const [cat, keywords] of PATH_HINTS) {
    const pathSegments = pathNorm.split("/").slice(0, -1);
    if (pathSegments.some(seg => keywords.some(kw => seg.includes(kw)))) {
      // Also confirm with filename
      const filenameScore = CATEGORY_KEYWORDS
        .find(([c]) => c === cat)?.[1]
        .some(kw => norm.includes(kw));
      return { category: cat, confidence: filenameScore ? 0.95 : 0.75 };
    }
  }

  // Keyword matching on filename
  let bestCategory: SampleCategory = "Uncategorized";
  let bestScore = 0;

  for (const [cat, keywords] of CATEGORY_KEYWORDS) {
    const hits = keywords.filter(kw => norm.includes(kw)).length;
    const score = hits > 0 ? Math.min(1, 0.5 + hits * 0.2) : 0;
    if (score > bestScore) {
      bestScore = score;
      bestCategory = cat;
    }
  }

  return { category: bestCategory, confidence: bestScore };
}

export function detectType(
  filename: string,
  zipPath: string,
  duration: number | null,
  bpm: number | null
): SampleType {
  const norm = normalizeName(filename + " " + zipPath);

  if (norm.includes("kit") || norm.includes("full drum")) return "kit";
  if (norm.includes("loop") || norm.includes("break") || norm.includes(" lp") || bpm !== null) {
    return "loop";
  }
  if (duration !== null) {
    if (duration > 6) return "loop";
    if (duration < 3) return "one-shot";
  }
  return "one-shot";
}

// ─── WAV duration from header (fast — no full decode needed) ─────────────────

async function getWavDuration(file: File): Promise<number | null> {
  try {
    const slice = file.slice(0, 256);
    const buffer = await slice.arrayBuffer();
    const view = new DataView(buffer);

    const riff = String.fromCharCode(...[0,1,2,3].map(i => view.getUint8(i)));
    const wave = String.fromCharCode(...[8,9,10,11].map(i => view.getUint8(i)));
    if (riff !== "RIFF" || wave !== "WAVE") return null;

    let offset = 12;
    let byteRate = 0;
    let dataSize = 0;

    while (offset + 8 <= view.byteLength) {
      const id = String.fromCharCode(...[0,1,2,3].map(i => view.getUint8(offset + i)));
      const size = view.getUint32(offset + 4, true);

      if (id === "fmt ") {
        byteRate = view.getUint32(offset + 12, true);
      } else if (id === "data") {
        dataSize = size;
        break;
      }
      offset += 8 + size;
    }

    if (byteRate > 0 && dataSize > 0) return dataSize / byteRate;
    return null;
  } catch {
    return null;
  }
}

// ─── Main analyzer ────────────────────────────────────────────────────────────

const AUDIO_EXTS = new Set(["wav", "aiff", "aif", "mp3", "flac", "ogg"]);

export function isAudioFile(name: string): boolean {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  return AUDIO_EXTS.has(ext);
}

let idCounter = 0;

export async function analyzeFile(file: File, zipPath = ""): Promise<AnalyzedSample> {
  const id = `sample-${Date.now()}-${idCounter++}`;
  const originalName = file.name;
  const extension = originalName.split(".").pop()?.toLowerCase() ?? "wav";
  const nameNoExt = originalName.replace(/\.[^.]+$/, "");

  const bpm = detectBPM(nameNoExt + " " + zipPath);
  const musicalKey = detectKey(nameNoExt);

  const duration = extension === "wav" ? await getWavDuration(file) : null;

  const { category, confidence } = detectCategory(nameNoExt, zipPath);
  const type = detectType(nameNoExt, zipPath, duration, bpm);

  return {
    id,
    file,
    originalName,
    zipPath,
    extension,
    detectedCategory: category,
    userCategory: category,
    type,
    duration,
    bpm,
    musicalKey,
    confidence,
    customName: nameNoExt,
  };
}

export async function analyzeFiles(
  files: File[],
  onProgress: (pct: number, current: string) => void
): Promise<AnalyzedSample[]> {
  const results: AnalyzedSample[] = [];
  for (let i = 0; i < files.length; i++) {
    onProgress(Math.round((i / files.length) * 100), files[i].name);
    results.push(await analyzeFile(files[i]));
  }
  onProgress(100, "");
  return results;
}
