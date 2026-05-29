// Maschine-ready sample analyzer
// Detects category, type, BPM, key, and musical content from filename + path

export const ALL_CATEGORIES = [
  // Drums
  "Drums/Kick",
  "Drums/Snare",
  "Drums/Hi-Hat",
  "Drums/Clap",
  "Drums/Rimshot",
  "Drums/Percussion",
  "Drums/Tom",
  "Drums/Cymbal",
  "Drums/Full Kit",
  // Bass
  "Bass",
  // Melodic one-shots
  "Melody/Lead",
  "Melody/Pluck",
  "Melody/Arp",
  // Chord one-shots and short loops
  "Chords/Stab",
  // Vocals
  "Vocals/Chop",
  "Vocals/Phrase",
  // Instrument one-shots
  "One Shots/Keys",
  "One Shots/Guitar",
  "One Shots/Strings",
  "One Shots/Horns",
  "One Shots/Synth",
  "One Shots/Instrument",
  // Loops
  "Loops/Drum Loop",
  "Loops/Bass Loop",
  "Loops/Melody Loop",
  "Loops/Chord Loop",
  "Loops/Guitar Loop",
  "Loops/Vocal Loop",
  "Loops/Full Loop",
  // FX
  "FX/Riser",
  "FX/Downlifter",
  "FX/Hit",
  "FX/Sweep",
  // Textures
  "Textures/Pad",
  "Textures/Drone",
  "Textures/Vinyl",
  // Fallback
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
  confidence: number;
  customName: string;
};

// ─── Keyword maps ─────────────────────────────────────────────────────────────
// Each entry: [category, keywords to match in normalized filename]
// Priority is ORDER here — first strong match wins.

const CATEGORY_KEYWORDS: [SampleCategory, string[]][] = [
  // ── Drums ──────────────────────────────────────────────────────────────────
  ["Drums/Kick", [
    "kick", "kik", "kck", "_bd_", "bd_", "_bd ", " bd ", "bass drum", "bassdrum",
    "kickdrum", "kick drum", "808kick", "kick808", "kk_", "_kk", "bcik",
    "_kd_", "kd_",
  ]],
  ["Drums/Snare", [
    "snare", "snr", "_sn_", "_sn ", " sn_", "sndrum", "snaredrum",
    "snare drum", "_sd_", "sd_", " sd ", "sidestick", "rimsnare",
    "snare_", "_snare",
  ]],
  ["Drums/Hi-Hat", [
    "hihat", "hi hat", "hi-hat", "hi_hat", "_hh_", "hh_", "_hh ", " hh ",
    "closed hat", "open hat", "pedal hat", "chh", "ohh", "hat_", "_hat",
    "closedhat", "openhat", "pedhat", "hihat",
  ]],
  ["Drums/Clap", [
    "clap", "_clp_", "clap_", "_clap", "handclap", "hand clap",
  ]],
  ["Drums/Rimshot", [
    "rimshot", "rim shot", "rim_", "_rim", "side stick", "sidestick", "rimsnr",
  ]],
  ["Drums/Percussion", [
    "perc_", "_perc", "perc ", " perc", "conga", "bongo", "shaker", "shake_",
    "tambourine", "tamb_", "cowbell", "woodblock", "wood block", "triangle",
    "agogo", "claves", "maracas", "djembe", "timbale", "cajon", "tabla",
    "guiro", "bata", "cuica", "vibraslap", "finger snap", "snap_",
    "handpan", "kalimba", "cabasa",
  ]],
  ["Drums/Tom", [
    "tom_", "_tom", "floor tom", "rack tom", "hi tom", "lo tom", "mid tom",
    "tomtom", "tom tom",
  ]],
  ["Drums/Cymbal", [
    "crash_", "_crash", "ride_", "_ride", "splash_", "china_",
    "cymbal", "bell_", "_bell", "crsh_", "_cym", "cym_",
  ]],
  ["Drums/Full Kit", [
    "full kit", "drumkit", "drum kit", "full drum", "complete kit",
    "fullkit", "drumset", "drum set",
  ]],

  // ── Bass ───────────────────────────────────────────────────────────────────
  ["Bass", [
    "bass_", "_bass", " bass", "bassline", "bass line", "bass hit",
    "sub_", "_sub", " sub ", "808_", "_808 ", "808 ", "subbass", "sub bass",
    "bass riff", "bass stab", "bass note", "bass synth",
    "reese", "wobble", "growl bass", "acid bass", "acid_",
  ]],

  // ── Vocals ─────────────────────────────────────────────────────────────────
  ["Vocals/Chop", [
    "voc chop", "vocal chop", "vox chop", "chop_", "_chop",
    "vocal cut", "voc cut", "chopped", "vocal_slice", "vox slice",
    "sample chop", "syllable", "stutter_", "stutter voc",
    "rap chop", "voc hit",
  ]],
  ["Vocals/Phrase", [
    "vocal_", "_vocal", "vox_", "_vox", " vox", "voice_", "_voice",
    "singer", "sung", "vocal phrase", "voc phrase", "rap_", "_rap",
    "lyric_", "hook_", "_hook", "ad lib", "adlib", "dub_",
    "acapella", "acappella", "a cappella", "falsetto",
    "choir", "chorus voc", "verse voc", "bg voc", "background voc",
    "gang vocal", "gang_vox", "chant_",
  ]],

  // ── Melody one-shots ───────────────────────────────────────────────────────
  ["Melody/Arp", [
    "arp_", "_arp", "arpeggio", "arpegg", " arp ", "arp ",
    "sequence_", "_sequence", "seq_", "_seq",
  ]],
  ["Melody/Pluck", [
    "pluck_", "_pluck", "plk_", "_plk", "pizz_", "_pizz", "pizzicato",
    "harp_", "_harp", "strum_", "_strum", "guitar pluck", "nylon_",
    "koto_", "sitar_", "banjo_", "mbira_", "kalimba pluck",
  ]],
  ["Melody/Lead", [
    "lead_", "_lead", " lead", "melody_", "_melody", "mel_", "_mel", " mel ",
    "melodic_", "melodic ", "riff_", "_riff", " riff",
    "lick_", "_lick", "phrase_", "motif_", "hook melody",
    "flute lead", "synth lead", "guitar lead",
  ]],

  // ── Chords ─────────────────────────────────────────────────────────────────
  ["Chords/Stab", [
    "chord_", "_chord", " chord", "chords_", "stab_", "_stab",
    "chord stab", "chord hit", "chord shot", "chord one",
    "piano chord", "synth chord", "keys chord", "guitar chord",
    "maj_", "_maj", "min_", "_min", "major_", "minor_",
    "voicing", "comping",
  ]],

  // ── Instrument one-shots ───────────────────────────────────────────────────
  ["One Shots/Strings", [
    "string_", "_string", " string", "strings_", "violin_", "_violin",
    "cello_", "_cello", "viola_", "_viola", "orchestra", "orchestral",
    "ensemble_", "section_", "pizz string", "arco",
  ]],
  ["One Shots/Horns", [
    "horn_", "_horn", " horn", "brass_", "_brass", " brass", "trumpet_",
    "_trumpet", "trombone_", "_trombone", "sax_", "_sax", "saxophone",
    "flugelhorn", "bugle", "french horn", "tuba_",
  ]],
  ["One Shots/Guitar", [
    "guitar_", "_guitar", " guitar", "gtr_", "_gtr", " gtr",
    "electric guitar", "acoustic guitar", "clean guitar", "dist guitar",
    "wah guitar", "slide guitar", "e.guitar", "a.guitar",
    "fender_", "strat_", "les paul", "tele_",
  ]],
  ["One Shots/Keys", [
    "piano_", "_piano", " piano", "keys_", "_keys", " keys",
    "rhodes_", "_rhodes", "rhodes ", " rhodes", "organ_", "_organ", " organ",
    "wurlitzer", "wurli", "epiano", "e-piano", "e piano",
    "keyboard_", "vibes_", "_vibes", "marimba_", "xylophone",
    "clavinet", "clav_", "electric piano", "grand piano", "upright piano",
  ]],
  ["One Shots/Synth", [
    "synth_", "_synth", " synth", "synth ", "lead synth",
    "bell_", "_bell", "bells_", "pad synth", "synth pad",
    "laser_", "zap_", "digital_",
  ]],
  ["One Shots/Instrument", [
    "flute_", "_flute", " flute", "clarinet", "oboe_", "bassoon",
    "woodwind", "mandolin", "dulcimer", "bouzouki", "oud_",
    "erhu_", "pipa_", "guzheng", "shamisen",
  ]],

  // ── Loops ──────────────────────────────────────────────────────────────────
  ["Loops/Vocal Loop", [
    "vocal loop", "vox loop", "voc loop", "voice loop",
    "vocal_lp", "sung loop", "choir loop",
  ]],
  ["Loops/Guitar Loop", [
    "guitar loop", "gtr loop", "guitar_lp", "guitar_loop",
    "riff loop", "chord guitar loop",
  ]],
  ["Loops/Chord Loop", [
    "chord loop", "chord_loop", "chord_lp", "chords_loop",
    "progression loop", "prog loop", "harmony loop",
  ]],
  ["Loops/Melody Loop", [
    "melody loop", "melodyloop", "melody_loop", "mel loop",
    "melodic loop", "hook loop", "lead loop", "riff loop",
    "phrase loop", "musical loop",
  ]],
  ["Loops/Bass Loop", [
    "bass loop", "bassloop", "bass_loop", "sub loop",
    "bass_lp", "808 loop",
  ]],
  ["Loops/Drum Loop", [
    "drum loop", "drumloop", "drum_loop", "break_", "breakbeat",
    "drum break", " break", "_break", "beat loop",
  ]],
  ["Loops/Full Loop", [
    "full loop", "fullloop", "full_loop", "loop_full",
    " loop", "_loop", "loop_", "lp_", "_lp_", " lp_",
  ]],

  // ── FX ─────────────────────────────────────────────────────────────────────
  ["FX/Riser", [
    "riser_", "_riser", " riser", "rise_", "_rise", "uplifter",
    "buildup", "build up", "build_up", "sweep up", "sweep_up",
    "ascend", "lift_",
  ]],
  ["FX/Downlifter", [
    "downlifter", "down lifter", "fall_", "_fall", "downfall",
    "sweep down", "sweep_down", "whoosh down", "descend", "drop_",
  ]],
  ["FX/Hit", [
    "hit_", "_hit", " hit", "impact_", "_impact", "slam_",
    "punch_", "explosion", "boom_", "stinger_", "crash fx",
  ]],
  ["FX/Sweep", [
    "sweep_", "_sweep", "whoosh_", "_whoosh", "transition_",
    "_fx_", "sfx_", "_sfx", "effect_", "fx_", "zap_",
    "foley", "noise burst",
  ]],

  // ── Textures ───────────────────────────────────────────────────────────────
  ["Textures/Drone", [
    "drone_", "_drone", " drone", "sustained_", "sustain_",
    "pedal tone", "held_", "organ drone", "synth drone",
  ]],
  ["Textures/Pad", [
    "pad_", "_pad", " pad", "pads_", "atmosphere_", "atmos_",
    "_atmos", " atmos", "ambient_", "ambience", "ambient ",
    "texture_", "wash_", "_wash", "evolving_", "evolving ",
    "soundscape", "background_",
  ]],
  ["Textures/Vinyl", [
    "vinyl_", "_vinyl", " vinyl", "crackle_", "_crackle", "noise_",
    "_noise", "static_", "hiss_", "lofi_", "lo-fi", "lo_fi",
    "tape_", "_tape", "vintage noise", "record noise",
  ]],
];

// ─── Path/folder hints ────────────────────────────────────────────────────────
// Matched against ZIP folder names (not the filename itself)

const PATH_HINTS: [SampleCategory, string[]][] = [
  // Drums
  ["Drums/Kick",       ["kick", "kicks", "bass drum", "bassdrums", "bd"]],
  ["Drums/Snare",      ["snare", "snares"]],
  ["Drums/Hi-Hat",     ["hat", "hats", "hihat", "hi-hat", "hh"]],
  ["Drums/Clap",       ["clap", "claps"]],
  ["Drums/Rimshot",    ["rim", "rimshot"]],
  ["Drums/Percussion", ["perc", "percussion", "latin", "world perc", "ethnic"]],
  ["Drums/Tom",        ["tom", "toms"]],
  ["Drums/Cymbal",     ["cymbal", "crash", "ride", "cymbals"]],
  // Bass
  ["Bass",             ["bass", "basses", "subs", "808", "low end"]],
  // Vocals
  ["Vocals/Chop",      ["vocal chops", "vox chops", "chops"]],
  ["Vocals/Phrase",    ["vocals", "vocal", "vox", "voice", "rap", "acapella", "acappella", "hooks", "adlibs"]],
  // Melody
  ["Melody/Lead",      ["melodies", "melody", "mel", "melodic", "leads", "riffs"]],
  ["Melody/Arp",       ["arps", "arp", "arpeggios", "sequences"]],
  ["Melody/Pluck",     ["plucks", "pluck", "pizzicato"]],
  // Chords
  ["Chords/Stab",      ["chords", "chord", "stabs", "progressions", "comping"]],
  // Instruments
  ["One Shots/Keys",   ["keys", "piano", "rhodes", "organ", "keyboards", "electric piano"]],
  ["One Shots/Guitar", ["guitar", "guitars", "gtr"]],
  ["One Shots/Strings",["strings", "string", "violin", "cello", "orchestra", "orchestral"]],
  ["One Shots/Horns",  ["horns", "horn", "brass", "trumpet", "sax", "saxophone"]],
  ["One Shots/Synth",  ["synth", "synths", "leads", "bells"]],
  ["One Shots/Instrument", ["flute", "woodwind", "live instruments"]],
  // Loops
  ["Loops/Drum Loop",  ["drum loops", "drum loop", "breaks", "breakbeats"]],
  ["Loops/Bass Loop",  ["bass loops", "bass loop"]],
  ["Loops/Melody Loop",["melody loops", "melodic loops", "lead loops"]],
  ["Loops/Chord Loop", ["chord loops", "harmony loops", "progression loops"]],
  ["Loops/Guitar Loop",["guitar loops", "riff loops"]],
  ["Loops/Vocal Loop", ["vocal loops", "vox loops"]],
  ["Loops/Full Loop",  ["loops", "loop", "full loops", "stems"]],
  // FX
  ["FX/Riser",         ["risers", "riser", "uplifters", "builds", "buildups"]],
  ["FX/Downlifter",    ["downlifters", "downlifter", "falls"]],
  ["FX/Hit",           ["hits", "impacts", "stingers"]],
  ["FX/Sweep",         ["fx", "sfx", "effects", "sweeps", "transitions", "foley"]],
  // Textures
  ["Textures/Pad",     ["pads", "atmospheres", "textures", "ambient", "backgrounds"]],
  ["Textures/Drone",   ["drones", "drone", "sustained", "pedal"]],
  ["Textures/Vinyl",   ["vinyl", "noise", "crackle", "tape"]],
];

// ─── BPM detection ────────────────────────────────────────────────────────────

export function detectBPM(text: string): number | null {
  const cleaned = text.toLowerCase().replace(/[_\-\s]/g, " ");
  const patterns = [
    /(\d{2,3})\s*bpm/,
    /bpm\s*(\d{2,3})/,
    /(\d{2,3})\s*bp\b/,
    // Common BPM values embedded as standalone numbers
    /\b(60|65|70|72|74|75|76|78|80|82|84|85|86|87|88|89|90|91|92|93|94|95|96|97|98|99|100|101|102|103|104|105|106|107|108|110|112|114|115|116|118|120|122|124|125|126|128|130|132|134|136|138|140|142|144|145|148|150|155|160|165|170|175|180)\b/,
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

// ─── Musical key detection ────────────────────────────────────────────────────

export function detectKey(text: string): string | null {
  const cleaned = text.replace(/[_\-]/g, " ");
  // Match keys like: Am, C#m, Bbmaj, D min, F# major, etc.
  const match = cleaned.match(
    /\b([A-G][#b]?)\s*(maj|min|major|minor|m(?!el|od)|M)?\b/i
  );
  if (!match) return null;
  const note = match[1].replace("b", "♭").replace("#", "♯");
  const raw = match[2] ?? "";
  const qual = raw
    ? /^m/i.test(raw) && !/^ma/i.test(raw) ? "min" : "maj"
    : null;
  return qual ? `${note} ${qual}` : note;
}

// ─── Category detection ───────────────────────────────────────────────────────

function normalizeName(name: string): string {
  return name.toLowerCase().replace(/[_\-\.\s]/g, " ");
}

export function detectCategory(
  filename: string,
  zipPath: string
): { category: SampleCategory; confidence: number } {
  const norm = normalizeName(filename);
  const pathNorm = normalizeName(zipPath);
  const pathSegments = pathNorm.split("/").slice(0, -1); // folder names only

  // ── 1. Path-based match (most reliable signal) ───────────────────────────
  for (const [cat, keywords] of PATH_HINTS) {
    if (pathSegments.some(seg => keywords.some(kw => seg.includes(kw)))) {
      // Confirm with filename keywords for higher confidence
      const filenameConfirms = CATEGORY_KEYWORDS
        .find(([c]) => c === cat)?.[1]
        .some(kw => norm.includes(kw)) ?? false;
      return { category: cat, confidence: filenameConfirms ? 0.95 : 0.72 };
    }
  }

  // ── 2. Filename keyword matching ─────────────────────────────────────────
  let bestCategory: SampleCategory = "Uncategorized";
  let bestScore = 0;

  for (const [cat, keywords] of CATEGORY_KEYWORDS) {
    // Weighted hit counting — longer keywords get higher weight (more specific)
    let score = 0;
    for (const kw of keywords) {
      if (norm.includes(kw)) {
        score += 0.4 + kw.length * 0.04; // longer kw = more specific = higher score
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestCategory = cat;
    }
  }

  // Normalize score to 0-1 confidence range
  const confidence = bestScore > 0 ? Math.min(0.92, 0.45 + bestScore * 0.2) : 0;
  return { category: bestCategory, confidence };
}

// ─── Type detection ───────────────────────────────────────────────────────────

export function detectType(
  filename: string,
  zipPath: string,
  duration: number | null,
  bpm: number | null,
  category: SampleCategory
): SampleType {
  const norm = normalizeName(filename + " " + zipPath);

  // Kit check
  if (norm.includes("kit") || norm.includes("full drum") || norm.includes("drumset")) {
    return "kit";
  }

  // Explicit loop keywords
  const loopKeywords = ["loop", "break", " lp_", "_lp_", "_lp ", "breakbeat", "drum break"];
  if (loopKeywords.some(kw => norm.includes(kw))) return "loop";

  // Category is already a loop folder
  if (category.startsWith("Loops/")) return "loop";

  // BPM in name = almost certainly a loop
  if (bpm !== null) return "loop";

  // Duration-based fallback
  if (duration !== null) {
    // Very short = one-shot
    if (duration <= 1.0) return "one-shot";
    // Long = loop (applies to drums; for pads/drones we'll still call them one-shots)
    if (duration > 6.0 && !category.startsWith("Textures/") && !category.startsWith("Vocals/")) {
      return "loop";
    }
    // Mid-range: shorter = one-shot
    if (duration <= 3.0) return "one-shot";
  }

  return "one-shot";
}

// ─── WAV header duration (fast — reads first 256 bytes only) ─────────────────

async function getWavDuration(file: File): Promise<number | null> {
  try {
    const slice = file.slice(0, 512);
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
      offset += 8 + (size + (size % 2)); // align to word boundary
    }

    if (byteRate > 0 && dataSize > 0) return dataSize / byteRate;
    return null;
  } catch {
    return null;
  }
}

// ─── Public API ───────────────────────────────────────────────────────────────

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
  const duration = extension === "wav" || extension === "aif" || extension === "aiff"
    ? await getWavDuration(file)
    : null;

  const { category, confidence } = detectCategory(nameNoExt, zipPath);
  const type = detectType(nameNoExt, zipPath, duration, bpm, category);

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
