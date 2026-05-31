export type Genre = "hip-hop" | "boom-bap" | "rnb";

export type StepData = {
  instrument: string;
  pattern: boolean[];
  velocity?: number[];
};

export type DrumPattern = {
  id: string;
  name: string;
  genre: Genre;
  bpm: number;
  feel: string[];
  description: string;
  steps: StepData[];
  maschineNotes: string[];
  swing?: number;
  generated?: boolean;
};

const makePattern = (indices: number[]): boolean[] => {
  const p = Array(16).fill(false);
  indices.forEach(i => p[i] = true);
  return p;
};

const makeVelocity = (pattern: boolean[], accents: number[] = [], ghost: number[] = []): number[] => {
  return pattern.map((isOn, i) => {
    if (!isOn) return 0;
    if (accents.includes(i)) return 110;
    if (ghost.includes(i)) return 40;
    return 80;
  });
};

export const patterns: DrumPattern[] = [
  // ─── BOOM BAP ────────────────────────────────────────────────────────────────
  {
    id: "bb-1",
    name: "Classic 90s",
    genre: "boom-bap",
    bpm: 90,
    feel: ["punchy", "swung", "lo-fi"],
    description: "The quintessential 90s New York sound. Kick hits hard on the 1 and the 'and' of 3, snare locks 2 and 4.",
    maschineNotes: [
      "Set Group swing to 54% — that MPC3000 shuffle is everything.",
      "Filter kick high-end with a low-pass around 200 Hz for that blunted thud.",
      "Use fixed velocity 100 on kicks, vary hats manually step by step.",
      "Sample or use a 12-bit-sounding snare — add Bitcrusher at low depth."
    ],
    swing: 54,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 10]), velocity: makeVelocity(makePattern([0, 10]), [0], []) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12], []) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 4, 8, 12], [2, 6, 10, 14]) },
      { instrument: "HH Open", pattern: makePattern([9]), velocity: makeVelocity(makePattern([9])) }
    ]
  },
  {
    id: "bb-2",
    name: "Pete Rock Bounce",
    genre: "boom-bap",
    bpm: 88,
    feel: ["bouncy", "soulful"],
    description: "Signature bounce with delayed kicks and ghosted snare notes. The kind of groove that makes heads nod without thinking.",
    maschineNotes: [
      "Layer a shaker 16ths track at velocity 45 under the hats.",
      "Nudge snare steps 12 and 14 late by +4 ticks for the swing drag.",
      "Keep the kick round — no transient shaper, let it breathe.",
      "Push swing to 58% — this pattern falls apart below 55%."
    ],
    swing: 58,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 5, 8]), velocity: makeVelocity(makePattern([0, 5, 8]), [0, 8], [5]) },
      { instrument: "Snare", pattern: makePattern([4, 12, 14, 15]), velocity: makeVelocity(makePattern([4, 12, 14, 15]), [4, 12], [14, 15]) },
      { instrument: "HH Closed", pattern: makePattern([0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14]), velocity: makeVelocity(makePattern([0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14]), [0, 4, 8, 12], [1, 5, 9, 13]) },
    ]
  },
  {
    id: "bb-3",
    name: "Grimy Bap",
    genre: "boom-bap",
    bpm: 93,
    feel: ["dark", "gritty"],
    description: "Two kicks land close together right before beat 3 — that double-knock is the whole vibe. Ghost snares fill the cracks.",
    maschineNotes: [
      "Apply Bitcrusher on the Kick group: bits at 10, rate at 0.6.",
      "Ghost snare on step 7 is crucial — don't quantize it, nudge it late.",
      "Sparse hats only on downbeats — silence is the texture here.",
      "Compress the whole group hard: fast attack 2ms, slow release 200ms."
    ],
    swing: 52,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 7, 8, 11]), velocity: makeVelocity(makePattern([0, 7, 8, 11]), [0, 8], [7]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12], []) },
      { instrument: "Ghost Snare", pattern: makePattern([7, 10, 15]), velocity: makeVelocity(makePattern([7, 10, 15]), [], [7, 10, 15]) },
      { instrument: "HH Closed", pattern: makePattern([0, 4, 8, 12]), velocity: makeVelocity(makePattern([0, 4, 8, 12])) }
    ]
  },
  {
    id: "bb-4",
    name: "Laid Back Boom",
    genre: "boom-bap",
    bpm: 82,
    feel: ["spacious", "smooth"],
    description: "Very sparse kick placement — massive pockets for basslines. The open snare sustains across the whole bar.",
    maschineNotes: [
      "Use Pad Link: trigger a subtle noise transient alongside the kick.",
      "Snare should have a long ungated tail — reverb pre-delay at 20ms.",
      "Keep hats on the 8th-note upbeats only, velocities all at 60.",
      "No swing. This groove relies entirely on sample placement."
    ],
    swing: 50,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 9]), velocity: makeVelocity(makePattern([0, 9]), [0, 9], []) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12], []) },
      { instrument: "HH Closed", pattern: makePattern([2, 6, 10, 14]), velocity: makeVelocity(makePattern([2, 6, 10, 14]), [2, 6, 10, 14], []) }
    ]
  },
  {
    id: "bb-5",
    name: "Lord Finesse Chop",
    genre: "boom-bap",
    bpm: 92,
    feel: ["choppy", "raw", "technical"],
    description: "Syncopated kick hits create a choppy, forward-pushing feel. The snare is dry and punchy with almost no reverb.",
    maschineNotes: [
      "Use a completely dry snare — zero reverb, just the crack.",
      "Hats alternate between 8th and 16th density every two beats.",
      "Kick steps 3 and 6 should be ghost-level velocity (40) for the synco feel.",
      "Add a subtle rim or woodblock on the 'and' of 4 for extra chop."
    ],
    swing: 55,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 3, 6, 8, 13]), velocity: makeVelocity(makePattern([0, 3, 6, 8, 13]), [0, 8], [3, 6]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Rimshot", pattern: makePattern([7, 15]), velocity: makeVelocity(makePattern([7, 15]), [], [7, 15]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12]), [0, 4, 8, 12], [2, 6, 10]) }
    ]
  },
  {
    id: "bb-6",
    name: "Large Professor Deep",
    genre: "boom-bap",
    bpm: 86,
    feel: ["deep", "jazzy", "smooth"],
    description: "Jazz-influenced groove with a displaced kick on the 'and' of 2. The whole pattern breathes and sways.",
    maschineNotes: [
      "Tune your kick down 3-4 semitones — you want it deep and subby.",
      "Add a jazz ride cymbal or open hat on step 6 very quietly.",
      "Ghost snare on step 2 is the secret — it makes bar 1 feel like it leans forward.",
      "60% swing minimum. Less than that and this pattern loses its soul."
    ],
    swing: 60,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 6, 9]), velocity: makeVelocity(makePattern([0, 6, 9]), [0, 9], [6]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Ghost Snare", pattern: makePattern([2, 10]), velocity: makeVelocity(makePattern([2, 10]), [], [2, 10]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 8], [2, 6, 10, 14]) },
      { instrument: "HH Open", pattern: makePattern([6]), velocity: makeVelocity(makePattern([6])) }
    ]
  },
  {
    id: "bb-7",
    name: "Mobb Deep Cold",
    genre: "boom-bap",
    bpm: 95,
    feel: ["dark", "menacing", "minimal"],
    description: "Cold and minimal. The kick pattern is almost four-on-the-floor but skips the 3, creating a lurching menace.",
    maschineNotes: [
      "Very little swing — 51% maximum. This needs to feel robotic and cold.",
      "Layer a low sub hit underneath the main kick.",
      "Hat pattern is extremely sparse — only on 1, 3, and the 'and' of 4.",
      "Snare should be wide-stereo with a short plate reverb (0.4s decay)."
    ],
    swing: 51,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 4, 8, 14]), velocity: makeVelocity(makePattern([0, 4, 8, 14]), [0, 4, 8, 14]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 8, 14]), velocity: makeVelocity(makePattern([0, 8, 14]), [], [0, 8, 14]) }
    ]
  },
  {
    id: "bb-8",
    name: "Showbiz Street",
    genre: "boom-bap",
    bpm: 90,
    feel: ["bouncy", "street", "gritty"],
    description: "Double kick on beat 3 gives this pattern its street bounce. Classic block party energy with a punchy rimshot accent.",
    maschineNotes: [
      "The two kicks on steps 8 and 9 must be very close — don't quantize step 9 exactly.",
      "Layer a rimshot with your snare for extra crack on beats 2 and 4.",
      "Use a crunchy, sample-based hat with Bitcrusher at 12 bits.",
      "Add a low perc (like a conga hit) on step 11 at velocity 50."
    ],
    swing: 53,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8, 9, 11]), velocity: makeVelocity(makePattern([0, 8, 9, 11]), [0, 8], [9]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Rimshot", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [], [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 8], [2, 6, 10, 14]) },
      { instrument: "Perc Low", pattern: makePattern([11]), velocity: makeVelocity(makePattern([11]), [], [11]) }
    ]
  },

  // ─── HIP HOP ─────────────────────────────────────────────────────────────────
  {
    id: "hh-1",
    name: "West Coast G-Funk",
    genre: "hip-hop",
    bpm: 100,
    feel: ["rolling", "warm"],
    description: "Almost a four-on-the-floor kick feel combined with heavy claps and shaker 16ths. That sunny Compton roll.",
    maschineNotes: [
      "Layer a clap and a snare on beats 2 and 4 — pan them slightly L/R.",
      "Keep kick velocity completely fixed at 127.",
      "Shaker 16ths should breathe: accent on 1/3, ghost all off-beats.",
      "Add a synth stab chord on steps 0 and 8 at a low velocity."
    ],
    swing: 0,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 6, 8, 14]), velocity: makeVelocity(makePattern([0, 6, 8, 14])) },
      { instrument: "Clap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12])) },
      { instrument: "Shaker", pattern: makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), velocity: makeVelocity(makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), [0, 4, 8, 12], [2, 6, 10, 14]) }
    ]
  },
  {
    id: "hh-2",
    name: "Trap Soul Bridge",
    genre: "hip-hop",
    bpm: 130,
    feel: ["modern", "melodic"],
    description: "Cross-feel at 65 BPM — half-time groove with sparse 808s and crisp modern claps.",
    maschineNotes: [
      "Tune your 808 kick to the root note of the chord sample.",
      "Use Note Repeat set to 1/16T for random hi-hat triplet fills.",
      "Layer a rimshot with the main clap at velocity 60 for texture.",
      "Keep reverb on clap very short — this is a modern crisp sound."
    ],
    swing: 50,
    steps: [
      { instrument: "Kick/808", pattern: makePattern([0, 8, 11]), velocity: makeVelocity(makePattern([0, 8, 11])) },
      { instrument: "Clap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12])) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14])) },
      { instrument: "Perc", pattern: makePattern([15]), velocity: makeVelocity(makePattern([15])) }
    ]
  },
  {
    id: "hh-3",
    name: "DJ Premier Style",
    genre: "hip-hop",
    bpm: 95,
    feel: ["technical", "raw"],
    description: "Choppy and aggressive. Double kicks before the downbeat, syncopated ghost snares pushing through every gap.",
    maschineNotes: [
      "Mute Groups: kick in group A, snare in group B — hard choke between them.",
      "Pitch hi-hats down -2 semitones for that old-school filtered hat sound.",
      "Strict quantize on kicks, let hats run at 62% swing.",
      "Scratch sample hit (vocal chop) on step 15 at velocity 55."
    ],
    swing: 62,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 7, 8, 10]), velocity: makeVelocity(makePattern([0, 7, 8, 10]), [0, 8], [7]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12])) },
      { instrument: "HH Closed", pattern: makePattern([0, 3, 4, 7, 8, 11, 12, 15]), velocity: makeVelocity(makePattern([0, 3, 4, 7, 8, 11, 12, 15]), [0, 4, 8, 12], [3, 7, 11, 15]) }
    ]
  },
  {
    id: "hh-4",
    name: "East Coast Banger",
    genre: "hip-hop",
    bpm: 98,
    feel: ["hard", "bouncy"],
    description: "Anthem energy. Thick layered snares, heavy driving kicks. The kind of beat that shakes a room.",
    maschineNotes: [
      "Stack 3 different snares — tune each one slightly differently.",
      "Ultra-short kick decay: attack 0ms, decay 80ms. Hammer feel.",
      "16th hats: every downbeat at 100, every upbeat at 30. The contrast is the groove.",
      "Sidechain compress the hats from the kick for that pumping feel."
    ],
    swing: 51,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 2, 8]), velocity: makeVelocity(makePattern([0, 2, 8])) },
      { instrument: "Snare Thick", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12])) },
      { instrument: "HH Closed", pattern: makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), velocity: makeVelocity(makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), [0, 2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13, 15]) }
    ]
  },
  {
    id: "hh-5",
    name: "Dilla Limp",
    genre: "hip-hop",
    bpm: 84,
    feel: ["wobbly", "soulful", "human"],
    description: "The 'drunk' feel J Dilla perfected. Kicks and snares intentionally pushed off-grid. Feels impossibly human.",
    maschineNotes: [
      "After placing steps, nudge the kick on step 5 forward by +6 ticks (late).",
      "Nudge step 12 snare back by -3 ticks (early) for the forward lean.",
      "Use 'Humanize' on hats: 15ms timing, 20 velocity range.",
      "Intentionally do NOT fix timing after — the imperfections are the feel."
    ],
    swing: 56,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 5, 9]), velocity: makeVelocity(makePattern([0, 5, 9]), [0, 9], [5]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4], [12]) },
      { instrument: "Ghost Snare", pattern: makePattern([2, 7, 14]), velocity: makeVelocity(makePattern([2, 7, 14]), [], [2, 7, 14]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 8], [2, 4, 6, 10, 12, 14]) }
    ]
  },
  {
    id: "hh-6",
    name: "Chi-Town Soulful",
    genre: "hip-hop",
    bpm: 96,
    feel: ["triumphant", "soulful", "big"],
    description: "Big and soulful — sample-based energy. The kick hits like a stomp, the clap hits like applause.",
    maschineNotes: [
      "Layer an orchestral snare hit underneath your main clap — bury it at -12dB.",
      "Tune your kick to the root of your soul sample for harmonic weight.",
      "Add a tamburine pattern on the 16ths at velocity 35 — barely audible.",
      "Reverb on clap: large hall, 1.5s decay, 40% wet. Make it feel like a stadium."
    ],
    swing: 52,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 3, 8, 10]), velocity: makeVelocity(makePattern([0, 3, 8, 10]), [0, 8], [3, 10]) },
      { instrument: "Clap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Tambourine", pattern: makePattern([1, 3, 5, 7, 9, 11, 13, 15]), velocity: makeVelocity(makePattern([1, 3, 5, 7, 9, 11, 13, 15]), [], [1, 3, 5, 7, 9, 11, 13, 15]) },
      { instrument: "HH Closed", pattern: makePattern([0, 4, 8, 12]), velocity: makeVelocity(makePattern([0, 4, 8, 12]), [0, 4, 8, 12]) }
    ]
  },
  {
    id: "hh-7",
    name: "Timbaland Click",
    genre: "hip-hop",
    bpm: 106,
    feel: ["energetic", "percussive", "sharp"],
    description: "Percussion-first production — the kick is almost secondary. Clicks, toms, and shakers drive this relentlessly forward.",
    maschineNotes: [
      "Use a click or clave as your primary accent — not a hi-hat.",
      "Layer 3 different percussion sounds in the perc slots.",
      "Every beat 1 and 3 gets a sharp, high-pitched wood block accent.",
      "Keep the kick extremely short and clicky — almost sub-less."
    ],
    swing: 0,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8, 11]), velocity: makeVelocity(makePattern([0, 8, 11]), [0, 8], [11]) },
      { instrument: "Clap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12])) },
      { instrument: "Click/Clave", pattern: makePattern([0, 3, 4, 7, 8, 11, 12, 15]), velocity: makeVelocity(makePattern([0, 3, 4, 7, 8, 11, 12, 15]), [0, 4, 8, 12], [3, 7, 11, 15]) },
      { instrument: "Tom", pattern: makePattern([6, 14]), velocity: makeVelocity(makePattern([6, 14])) },
      { instrument: "Shaker", pattern: makePattern([1, 3, 5, 7, 9, 11, 13, 15]), velocity: makeVelocity(makePattern([1, 3, 5, 7, 9, 11, 13, 15]), [], [1, 3, 5, 7, 9, 11, 13, 15]) }
    ]
  },
  {
    id: "hh-8",
    name: "Bay Area Hyphy",
    genre: "hip-hop",
    bpm: 102,
    feel: ["hyphy", "rolling", "energetic"],
    description: "Snappy and rolling. The snap replaces the clap, and the kick drives hard. Made for movement.",
    maschineNotes: [
      "Use a finger-snap sample instead of a clap — tight and dry.",
      "Kick steps 3 and 11 are ghost notes — they push the groove forward subtly.",
      "Hats need to roll without stopping — all 16ths at near-equal velocity.",
      "Add a sub-bass note layered with the kick at the same pitch."
    ],
    swing: 50,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 3, 8, 11]), velocity: makeVelocity(makePattern([0, 3, 8, 11]), [0, 8], [3, 11]) },
      { instrument: "Snap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), velocity: makeVelocity(makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), [0, 4, 8, 12], []) }
    ]
  },

  // ─── R&B ─────────────────────────────────────────────────────────────────────
  {
    id: "rnb-1",
    name: "Neo Soul Pocket",
    genre: "rnb",
    bpm: 75,
    feel: ["groovy", "warm", "soulful"],
    description: "Deep pocket groove. Displaced kicks that feel like they're falling behind the beat, with warm rimshots and whisper-quiet shakers.",
    maschineNotes: [
      "Humanize hi-hats: 12ms timing variation, 25 velocity range.",
      "Rimshot instead of full snare — dry, no reverb, just the slap.",
      "Swing at 63% minimum — this pattern dies without heavy swing.",
      "Shaker at velocity 40, pan slightly right for depth."
    ],
    swing: 63,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 5]), velocity: makeVelocity(makePattern([0, 5])) },
      { instrument: "Rimshot", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12])) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 4, 8, 12], [2, 6, 10, 14]) },
      { instrument: "Shaker", pattern: makePattern([1, 5, 9, 13]), velocity: makeVelocity(makePattern([1, 5, 9, 13]), [], [1, 5, 9, 13]) }
    ]
  },
  {
    id: "rnb-2",
    name: "Contemporary R&B",
    genre: "rnb",
    bpm: 90,
    feel: ["polished", "modern"],
    description: "Clean, crisp, and driving. Blends tight hi-hat rolls with a traditional R&B vocal feel.",
    maschineNotes: [
      "Layer a synthetic kick with an acoustic kick — tune the synthetic to -3 semitones.",
      "Keep claps wide using the Stereo Widener plugin at 60%.",
      "Subtle 1/32nd hi-hat trill on the last step before bar end.",
      "Open hat on steps 2 and 10 — let them ring into the next hit."
    ],
    swing: 50,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 7, 8]), velocity: makeVelocity(makePattern([0, 7, 8])) },
      { instrument: "Clap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12])) },
      { instrument: "HH Closed", pattern: makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), velocity: makeVelocity(makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])) },
      { instrument: "HH Open", pattern: makePattern([2, 10]), velocity: makeVelocity(makePattern([2, 10])) }
    ]
  },
  {
    id: "rnb-3",
    name: "Slow Jam Sway",
    genre: "rnb",
    bpm: 68,
    feel: ["smooth", "sensual"],
    description: "Very slow, half-time feel. Huge reverbs on the snare and deep, subby kicks that shake through the floor.",
    maschineNotes: [
      "Snare reverb: large hall, 2.5 second decay. Let it ring across the whole beat.",
      "Filter the hats aggressively — low-pass at 6kHz for a muffled warmth.",
      "Kick velocity variation is key: downbeat at 110, the rest at 70.",
      "Consider adding a bass guitar hit (sample) locking with the kick."
    ],
    swing: 55,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8, 9]), velocity: makeVelocity(makePattern([0, 8, 9]), [0], [8, 9]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12])) },
      { instrument: "HH Closed", pattern: makePattern([0, 4, 8, 12]), velocity: makeVelocity(makePattern([0, 4, 8, 12]), [], [0, 4, 8, 12]) }
    ]
  },
  {
    id: "rnb-4",
    name: "R&B Bounce",
    genre: "rnb",
    bpm: 85,
    feel: ["dope", "smooth"],
    description: "Upbeat R&B feel with syncopated kicks that perfectly pocket around vocal phrases.",
    maschineNotes: [
      "Layer 2 different claps, pan them slightly L and R for width.",
      "The ghost kick on step 3 should be barely audible — velocity 35.",
      "Hats feel relaxed because they're 8ths, not 16ths. Less is more here.",
      "Add a light perc hit (triangle or wood block) on steps 11 and 15."
    ],
    swing: 57,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 3, 8, 14]), velocity: makeVelocity(makePattern([0, 3, 8, 14]), [0, 8], [3, 14]) },
      { instrument: "Clap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12])) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14])) },
      { instrument: "Perc", pattern: makePattern([11, 15]), velocity: makeVelocity(makePattern([11, 15]), [], [11, 15]) }
    ]
  },
  {
    id: "rnb-5",
    name: "Pharrell Minimal",
    genre: "rnb",
    bpm: 80,
    feel: ["airy", "delicate", "open"],
    description: "Extremely sparse — mostly kick and a whisper of percussion. Every element has room to breathe and float.",
    maschineNotes: [
      "This beat needs silence more than sound — resist adding more elements.",
      "Kick is the only thing in low frequencies. Absolutely no bass drum layer.",
      "Triangle hit on step 4 at velocity 50 — panned center, reverb 60% wet.",
      "Use a very short, bright snare sample. One-shot, no tail."
    ],
    swing: 52,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 9]), velocity: makeVelocity(makePattern([0, 9]), [0], [9]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [], [4, 12]) },
      { instrument: "Triangle", pattern: makePattern([4, 8, 14]), velocity: makeVelocity(makePattern([4, 8, 14]), [], [4, 8, 14]) },
      { instrument: "HH Closed", pattern: makePattern([2, 6, 10, 14]), velocity: makeVelocity(makePattern([2, 6, 10, 14]), [], [2, 6, 10, 14]) }
    ]
  },
  {
    id: "rnb-6",
    name: "New Jack Swing",
    genre: "rnb",
    bpm: 100,
    feel: ["swinging", "uptempo", "snappy"],
    description: "Late 80s/early 90s new jack energy. That iconic snappy snare and rolling shuffle feel that defined an era.",
    maschineNotes: [
      "Swing at 58% — new jack swing is defined by its shuffle feel.",
      "Snare is ultra-snappy — short decay, medium transient shaper boost.",
      "Add a synth stab hit on step 2 and 10 at velocity 55 — very 90s.",
      "Layer a clap and rimshot together on beats 2 and 4."
    ],
    swing: 58,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 6, 8]), velocity: makeVelocity(makePattern([0, 6, 8]), [0, 8], [6]) },
      { instrument: "Snare Snap", pattern: makePattern([4, 10, 12]), velocity: makeVelocity(makePattern([4, 10, 12]), [4, 12], [10]) },
      { instrument: "HH Closed", pattern: makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), velocity: makeVelocity(makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), [0, 4, 8, 12], [1, 3, 5, 7, 9, 11, 13, 15]) },
      { instrument: "Synth Stab", pattern: makePattern([2, 10]), velocity: makeVelocity(makePattern([2, 10]), [], [2, 10]) }
    ]
  },
  {
    id: "rnb-7",
    name: "Frank Ocean Drift",
    genre: "rnb",
    bpm: 72,
    feel: ["dreamy", "introspective", "spacious"],
    description: "Floating half-time feel. Shakers carry the rhythm while the kick drifts in and out unexpectedly.",
    maschineNotes: [
      "Snare on step 8 only (half-time) — let it ring with hall reverb 2s+.",
      "Stack two shaker patterns: one 8ths, one 16ths at -20dB under it.",
      "Kick timing intentionally loose — use 'Humanize' at 15ms on kicks.",
      "Add a pitched percussion (finger drum hit) on step 5 at velocity 45."
    ],
    swing: 55,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 5, 11]), velocity: makeVelocity(makePattern([0, 5, 11]), [0], [5, 11]) },
      { instrument: "Snare", pattern: makePattern([8]), velocity: makeVelocity(makePattern([8]), [8]) },
      { instrument: "Shaker Fast", pattern: makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), velocity: makeVelocity(makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), [], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) },
      { instrument: "Perc", pattern: makePattern([5, 13]), velocity: makeVelocity(makePattern([5, 13]), [], [5, 13]) }
    ]
  },
  {
    id: "rnb-8",
    name: "Melodic Breezy",
    genre: "rnb",
    bpm: 88,
    feel: ["melodic", "breezy", "danceable"],
    description: "Dancehall-influenced R&B groove with syncopated kick hits and a light bounce that feels effortless.",
    maschineNotes: [
      "Accent the kick on step 3 (the 'and' of 1) — that's the pocket hit.",
      "Clap has a 15ms pre-delay before the reverb — adds distance and float.",
      "Layer a very soft tom roll under the clap on beats 2 and 4.",
      "Perc on steps 7 and 15 is a cowbell or similar — tune it to the key."
    ],
    swing: 54,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 3, 8, 12]), velocity: makeVelocity(makePattern([0, 3, 8, 12]), [0, 8], [3]) },
      { instrument: "Clap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 4, 8, 12], [2, 6, 10, 14]) },
      { instrument: "Perc Bright", pattern: makePattern([7, 15]), velocity: makeVelocity(makePattern([7, 15]), [], [7, 15]) }
    ]
  },

  // ─── BOOM BAP (extended) ─────────────────────────────────────────────────────
  {
    id: "bb-9",
    name: "Gang Starr Minimal",
    genre: "boom-bap",
    bpm: 94,
    feel: ["sparse", "cold", "purposeful"],
    description: "Every element earns its place. Silence is used deliberately — the kick and snare have more space than notes.",
    maschineNotes: [
      "Set up three separate Groups: kicks, snare, hats — each with its own swing amount.",
      "Kick Group swing: 52%. Snare Group: 54%. Hat Group: 57%. The mismatch creates depth.",
      "The rimshot on step 14 should be at velocity 45 — barely there, just a flicker.",
      "Apply Lo-Fi to the entire kit at 12 bits — not less. Less than 12 bits sounds too degraded.",
      "Leave at least 4 consecutive steps completely empty somewhere in the pattern."
    ],
    swing: 54,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 11]), velocity: makeVelocity(makePattern([0, 11]), [0], [11]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Rimshot", pattern: makePattern([14]), velocity: makeVelocity(makePattern([14]), [], [14]) },
      { instrument: "HH Closed", pattern: makePattern([0, 4, 8, 12]), velocity: makeVelocity(makePattern([0, 4, 8, 12]), [0, 8], [4, 12]) }
    ]
  },
  {
    id: "bb-10",
    name: "Buckwild Bounce",
    genre: "boom-bap",
    bpm: 88,
    feel: ["bouncy", "soulful", "driving"],
    description: "Syncopated kick combos create a relentless forward bounce. The snare anchor on 2 and 4 keeps it grounded.",
    maschineNotes: [
      "The kick on step 6 is the 'bounce' note — it must be ghost velocity (45) or the pattern loses its groove.",
      "Push the hat swing to 60% while keeping kicks at 54% for layered feel.",
      "Layer a conga hit on step 3 at velocity 55 for extra Latin soul flavor.",
      "Open hat on step 9 is critical — put it in the same Choke Group as your closed hat.",
      "Tune kick to the root of your sample. Tune the conga to the 3rd degree."
    ],
    swing: 56,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 3, 6, 8, 13]), velocity: makeVelocity(makePattern([0, 3, 6, 8, 13]), [0, 8], [3, 6, 13]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 4, 8, 12], [2, 6, 10, 14]) },
      { instrument: "HH Open", pattern: makePattern([9]), velocity: makeVelocity(makePattern([9])) },
      { instrument: "Conga", pattern: makePattern([3, 11]), velocity: makeVelocity(makePattern([3, 11]), [], [3, 11]) }
    ]
  },
  {
    id: "bb-11",
    name: "Diamond D Pocket",
    genre: "boom-bap",
    bpm: 91,
    feel: ["rolling", "deep", "groove"],
    description: "A rolling 16th hat pattern with a swung kick that locks perfectly into the snare pocket. Built for looping.",
    maschineNotes: [
      "The hat density is high but velocities must vary: odd steps at 50, even steps at 75, beat steps at 95.",
      "Enter Velocity mode (push encoder in Step Seq) and shape each hat step individually.",
      "Kick step 5 is the syncopation glue — ghost it at velocity 40.",
      "Apply the Humanize function to hats only: Timing 10ms, Velocity 20. Never humanize kicks.",
      "The whole loop should sound like someone nodding — not a machine ticking."
    ],
    swing: 55,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 5, 8, 14]), velocity: makeVelocity(makePattern([0, 5, 8, 14]), [0, 8], [5, 14]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Ghost Snare", pattern: makePattern([6, 10, 15]), velocity: makeVelocity(makePattern([6, 10, 15]), [], [6, 10, 15]) },
      { instrument: "HH Closed", pattern: makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), velocity: makeVelocity(makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), [0, 4, 8, 12], [1, 3, 5, 7, 9, 11, 13, 15]) }
    ]
  },
  {
    id: "bb-12",
    name: "J-Zone Basement",
    genre: "boom-bap",
    bpm: 87,
    feel: ["lo-fi", "dusty", "raw"],
    description: "Basement-recorded energy. Extremely sparse — the negative space between hits is as important as the hits themselves.",
    maschineNotes: [
      "Add noise to the kick: load a vinyl crackle sample at velocity 25 on the same pad step.",
      "Low-pass filter the entire kit group at 8kHz — nothing bright should make it through.",
      "Snare: add a room reverb at 0.4s decay — short enough to keep it tight, long enough to feel a room.",
      "Deliberately do NOT fix any timing — no quantize after recording live elements.",
      "Consider adding a bass note (pad) that triggers with the kick via Pad Link, tuned to root note."
    ],
    swing: 57,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 10]), velocity: makeVelocity(makePattern([0, 10]), [0], []) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4], [12]) },
      { instrument: "Ghost Snare", pattern: makePattern([2, 9, 14]), velocity: makeVelocity(makePattern([2, 9, 14]), [], [2, 9, 14]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 14]), [0, 8], [2, 6, 14]) }
    ]
  },

  // ─── HIP HOP (extended) ──────────────────────────────────────────────────────
  {
    id: "hh-9",
    name: "Alchemist Dark",
    genre: "hip-hop",
    bpm: 90,
    feel: ["dark", "cinematic", "heavy"],
    description: "Minimal and menacing. The kick carries more rhythmic interest than the hats. Built for dark sample flips.",
    maschineNotes: [
      "Route kick and sub kick through separate channels — compress them individually before the bus.",
      "Hi-hats are a quarter-note pattern only — 4 hits per bar, no more. Silence does the work.",
      "Add a tom hit on step 10 at velocity 60 — gives the pattern a tribal, one-hit accent.",
      "The snare needs to be very wide: add Stereo Widener at 80% on the snare channel.",
      "Keep reverb short on everything — this is a dry, close, claustrophobic sound."
    ],
    swing: 52,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 2, 8, 11]), velocity: makeVelocity(makePattern([0, 2, 8, 11]), [0, 8], [2, 11]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 4, 8, 12]), velocity: makeVelocity(makePattern([0, 4, 8, 12]), [0, 8], [4, 12]) },
      { instrument: "Tom", pattern: makePattern([10]), velocity: makeVelocity(makePattern([10]), [], [10]) }
    ]
  },
  {
    id: "hh-10",
    name: "9th Wonder Soul",
    genre: "hip-hop",
    bpm: 93,
    feel: ["soulful", "warm", "golden era"],
    description: "Warm and soulful — built for flipping old soul records. Ghost snares create a constant undercurrent of feel.",
    maschineNotes: [
      "This pattern lives or dies on ghost snare velocity — keep them all between 35 and 50.",
      "The tambourine at 16ths (all steps) needs to be at -20dB under the hats — just a shimmer.",
      "Tune the kick to your sample root. Tune the snare to the 2nd or 5th degree.",
      "Swing: 56% is the sweet spot. Below 54% it loses feel. Above 58% it loses drive.",
      "Use the Humanize function on the tambourine only: Timing 12ms, Velocity 25."
    ],
    swing: 56,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 5, 8]), velocity: makeVelocity(makePattern([0, 5, 8]), [0, 8], [5]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Ghost Snare", pattern: makePattern([2, 6, 10, 14]), velocity: makeVelocity(makePattern([2, 6, 10, 14]), [], [2, 6, 10, 14]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 8], [2, 4, 6, 10, 12, 14]) },
      { instrument: "Tambourine", pattern: makePattern([1, 3, 5, 7, 9, 11, 13, 15]), velocity: makeVelocity(makePattern([1, 3, 5, 7, 9, 11, 13, 15]), [], [1, 3, 5, 7, 9, 11, 13, 15]) }
    ]
  },
  {
    id: "hh-11",
    name: "Hit-Boy Half-Time",
    genre: "hip-hop",
    bpm: 140,
    feel: ["modern", "half-time", "hard"],
    description: "Programmed at 140 BPM but felt at 70 BPM. The half-time snare on beat 3 makes everything feel twice as slow and heavy.",
    maschineNotes: [
      "At 140 BPM in Maschine, step 8 = beat 3. Put your main snare ONLY on step 8.",
      "The kick on steps 0, 3, 11 creates the half-time illusion — asymmetric placement.",
      "Hi-hats at 140 BPM 16ths = very fast — set velocity alternating 90/40/90/40 for a rolling feel.",
      "Use Note Repeat at 1/32T for triplet hat rolls on the last 4 steps of the bar.",
      "Clap on step 8 alongside the snare: layer it with a wide reverb (hall, 0.8s decay)."
    ],
    swing: 0,
    steps: [
      { instrument: "Kick/808", pattern: makePattern([0, 3, 11]), velocity: makeVelocity(makePattern([0, 3, 11]), [0], [3, 11]) },
      { instrument: "Snare", pattern: makePattern([8]), velocity: makeVelocity(makePattern([8]), [8]) },
      { instrument: "Clap", pattern: makePattern([8]), velocity: makeVelocity(makePattern([8]), [], [8]) },
      { instrument: "HH Closed", pattern: makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), velocity: makeVelocity(makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), [0, 2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13, 15]) }
    ]
  },
  {
    id: "hh-12",
    name: "Dr. Dre Precision",
    genre: "hip-hop",
    bpm: 100,
    feel: ["precise", "punchy", "professional"],
    description: "Studio-perfect West Coast construction. Every element serves the mix. Nothing is accidental.",
    maschineNotes: [
      "Quantize kicks and snares to absolute zero swing. Then add swing only to the hat group at 51%.",
      "Use three kick layers: main kick (mid-punchey), sub kick (tuned to root), click (short click sample at -15dB).",
      "Bind all three kicks with Pad Link — they fire as one but are processed separately.",
      "Snare: use a low-pass filter at 12kHz to cut harshness. EQ boost at 200Hz for body.",
      "The rimshot accent on step 6 should sound like a whip crack — high transient, zero reverb."
    ],
    swing: 51,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8, 10]), velocity: makeVelocity(makePattern([0, 8, 10]), [0, 8], [10]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Rimshot", pattern: makePattern([6, 14]), velocity: makeVelocity(makePattern([6, 14]), [], [6, 14]) },
      { instrument: "HH Closed", pattern: makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), velocity: makeVelocity(makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), [0, 4, 8, 12], [1, 3, 5, 7, 9, 11, 13, 15]) },
      { instrument: "Shaker", pattern: makePattern([2, 6, 10, 14]), velocity: makeVelocity(makePattern([2, 6, 10, 14]), [], [2, 6, 10, 14]) }
    ]
  },

  // ─── R&B (extended) ──────────────────────────────────────────────────────────
  {
    id: "rnb-9",
    name: "D'Angelo Loose",
    genre: "rnb",
    bpm: 76,
    feel: ["loose", "human", "soulful"],
    description: "Intentionally imperfect. D'Angelo's drum programming sounded like a drummer who'd been playing for hours — deeply human and slightly drunk.",
    maschineNotes: [
      "After programming, use the Event Editor (SHIFT + EVENTS) to manually nudge every step by different amounts.",
      "Kick on step 0: nudge +8 ticks late. Kick on step 5: nudge -4 ticks early.",
      "Snare on step 4: nudge +6 ticks. Snare on step 12: nudge -3 ticks.",
      "Apply Humanize to hats at 18ms timing — the most you'd ever use.",
      "This pattern should feel slightly uncomfortable on first listen, then hypnotic after 4 bars."
    ],
    swing: 62,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 5, 9, 14]), velocity: makeVelocity(makePattern([0, 5, 9, 14]), [0], [5, 9, 14]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4], [12]) },
      { instrument: "Ghost Snare", pattern: makePattern([2, 7, 10]), velocity: makeVelocity(makePattern([2, 7, 10]), [], [2, 7, 10]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [], [0, 2, 4, 6, 8, 10, 12, 14]) },
      { instrument: "Shaker", pattern: makePattern([1, 5, 9, 13]), velocity: makeVelocity(makePattern([1, 5, 9, 13]), [], [1, 5, 9, 13]) }
    ]
  },
  {
    id: "rnb-10",
    name: "Raphael Saadiq Classic",
    genre: "rnb",
    bpm: 92,
    feel: ["classic", "live", "soulful"],
    description: "Live drummer energy translated to pads. Feels like a real kit recording — tight rim, warm kick, breathing hats.",
    maschineNotes: [
      "The rimshot on steps 4 and 12 should sound like a wood cracking — dry, no reverb.",
      "Conga on step 7 and 15: tune it to the 5th of your key. Velocity 65.",
      "Open hat on step 6: put it in the same Choke Group as the closed hat.",
      "Kick velocity: step 0 at 110, step 3 at 50, step 8 at 95, step 11 at 45.",
      "Swing 58% — classic soul swing, heavier than boom bap but not as loose as neo soul."
    ],
    swing: 58,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 3, 8, 11]), velocity: makeVelocity(makePattern([0, 3, 8, 11]), [0, 8], [3, 11]) },
      { instrument: "Rimshot", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 4, 8, 12], [2, 10]) },
      { instrument: "HH Open", pattern: makePattern([6]), velocity: makeVelocity(makePattern([6])) },
      { instrument: "Conga", pattern: makePattern([7, 15]), velocity: makeVelocity(makePattern([7, 15]), [], [7, 15]) }
    ]
  },
  {
    id: "rnb-11",
    name: "H.E.R. Contemporary",
    genre: "rnb",
    bpm: 86,
    feel: ["contemporary", "emotional", "layered"],
    description: "Modern R&B with a hint of blues — layered percussion, emotional snare reverb, kicks that sigh instead of punch.",
    maschineNotes: [
      "Kick should be tuned down 2 semitones from root — heavier, darker, more emotional.",
      "Snare reverb: use a plate at 1.2s decay with a HIGH pre-delay of 25ms for air.",
      "The shaker at all 16 steps is the groove skeleton — set it at velocity 35 flat, no variation.",
      "Perc on steps 3, 7, 11, 15: use a finger snap or side stick for the 'in-between' feel.",
      "Overall compression: gentle bus compression 1.5:1 ratio, slow attack 50ms, just to glue it."
    ],
    swing: 56,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 7, 8, 13]), velocity: makeVelocity(makePattern([0, 7, 8, 13]), [0, 8], [7, 13]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Shaker", pattern: makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), velocity: makeVelocity(makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), [], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) },
      { instrument: "Snap/Side Stick", pattern: makePattern([3, 7, 11, 15]), velocity: makeVelocity(makePattern([3, 7, 11, 15]), [], [3, 7, 11, 15]) },
      { instrument: "HH Open", pattern: makePattern([2, 10]), velocity: makeVelocity(makePattern([2, 10]), [], [2, 10]) }
    ]
  },
  {
    id: "rnb-12",
    name: "Babyface Silk",
    genre: "rnb",
    bpm: 74,
    feel: ["silky", "minimal", "classic"],
    description: "Old school quiet storm. The kick barely whispers, the clap floats on a sea of reverb. For slow, late-night R&B.",
    maschineNotes: [
      "Kick velocity: all steps at 70 — never accent it. Quiet, steady, like a heartbeat.",
      "Clap reverb: large hall at 2.5s decay, 50% wet. The reverb is bigger than the dry sound.",
      "Hi-hats are quarter-note only (steps 0, 4, 8, 12) at velocity 55 — no 8ths, no 16ths.",
      "Add a string hit or pad note on step 0 alongside the kick using Pad Link.",
      "Use the Swing function but only set it to 53% — barely swung, just enough to not feel robotic."
    ],
    swing: 53,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8, 12]), velocity: makeVelocity(makePattern([0, 8, 12]), [], [0, 8, 12]) },
      { instrument: "Clap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4], [12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 4, 8, 12]), velocity: makeVelocity(makePattern([0, 4, 8, 12]), [], [0, 4, 8, 12]) },
      { instrument: "Triangle", pattern: makePattern([6, 14]), velocity: makeVelocity(makePattern([6, 14]), [], [6, 14]) }
    ]
  },

  // ─── ADDITIONAL BOOM BAP ──────────────────────────────────────────────────────
  {
    id: "bb-13",
    name: "Purist Chop",
    genre: "boom-bap",
    bpm: 91,
    feel: ["choppy", "raw", "swung"],
    description: "Inspired by Large Professor's choppy sample flips. Kick jumps unexpectedly near beat 3, the anticipatory snare on step 15 sets up the loop with tension.",
    maschineNotes: [
      "Snare on step 15 (the 'and' of beat 4) — lower its velocity to 55 so it feels like a ghost anticipation, not a full hit.",
      "Kick on step 6 (the 'and' of beat 2) — this is the 'Large Professor displacement'. Keep velocity at 65, not accented.",
      "Open hat on step 11: put it in Choke Group 1 with the closed hat so it cuts the hat naturally.",
      "Swing to 56% — not too heavy, just enough MPC drag to keep it from feeling quantized."
    ],
    swing: 56,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 6, 8, 14]), velocity: makeVelocity(makePattern([0, 6, 8, 14]), [0, 8], [6, 14]) },
      { instrument: "Snare", pattern: makePattern([4, 12, 15]), velocity: makeVelocity(makePattern([4, 12, 15]), [4, 12], [15]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 4, 8, 12], [2, 6, 10, 14]) },
      { instrument: "HH Open", pattern: makePattern([11]), velocity: makeVelocity(makePattern([11])) }
    ]
  },
  {
    id: "bb-14",
    name: "JMJ Minimalist",
    genre: "boom-bap",
    bpm: 84,
    feel: ["spacious", "deep", "slow"],
    description: "Inspired by J Dilla's slowest, most spacious grooves. Quarter-note hats only — maximum breathing room. The rimshots on the 'and' beats are the entire groove.",
    maschineNotes: [
      "Quarter-note hats at exactly velocity 55 — flat, no variation. The groove lives in the rimshots, not the hats.",
      "Rimshots on steps 2, 6, 10, 14 (every 'and'): vary these between 60 and 80 velocity randomly. This is where the swing comes from.",
      "Slow BPM means the sample needs to be pitched down. Use Maschine's Tune in the sample pad — go -2 semitones for a deeper feel.",
      "Add Transient Master to the kick: Attack 0, Sustain +3. At 84 BPM the kick needs to bloom, not snap."
    ],
    swing: 52,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8]), velocity: makeVelocity(makePattern([0, 8]), [0], []) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 4, 8, 12]), velocity: makeVelocity(makePattern([0, 4, 8, 12]), [], [0, 4, 8, 12]) },
      { instrument: "Rimshot", pattern: makePattern([2, 6, 10, 14]), velocity: makeVelocity(makePattern([2, 6, 10, 14]), [], [2, 6, 10, 14]) }
    ]
  },

  // ─── ADDITIONAL HIP HOP ───────────────────────────────────────────────────────
  {
    id: "hh-13",
    name: "808 Double Tap",
    genre: "hip-hop",
    bpm: 104,
    feel: ["modern", "hard", "rolling"],
    description: "The double-hit kick intro (steps 0+1) is a modern hip hop signature — the 808 seems to stutter then lock into the groove. Aggressive, direct, built for hard samples.",
    maschineNotes: [
      "Steps 0 and 1 kick hits: step 0 at velocity 115, step 1 at velocity 70. The louder hit anchors beat 1, the softer hit is the 'stutter'.",
      "Perc on steps 3, 7, 11, 15 — use a high metallic percussion or synth perc from CHRONICLES Soul Melodies. Velocity 50, no variation.",
      "All 8th-note hats: alternate velocity 90 (downbeats) and 60 (upbeats). Don't use swing — keep it machine-straight at 50%.",
      "Run the whole Group through a bus compressor: 4:1 ratio, 10ms attack, 80ms release, -4dB gain reduction."
    ],
    swing: 50,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 1, 8, 9]), velocity: makeVelocity(makePattern([0, 1, 8, 9]), [0, 8], [1, 9]) },
      { instrument: "Clap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 4, 8, 12], [2, 6, 10, 14]) },
      { instrument: "Perc", pattern: makePattern([3, 7, 11, 15]), velocity: makeVelocity(makePattern([3, 7, 11, 15]), [], [3, 7, 11, 15]) }
    ]
  },
  {
    id: "hh-14",
    name: "Timbo Bounce",
    genre: "hip-hop",
    bpm: 95,
    feel: ["syncopated", "east-coast", "layered"],
    description: "Timbaland-influenced syncopation — the kick hits in unusual places (steps 3, 5, 11) while the clap doubles the snare for power. Dense and unpredictable, but groove-locked.",
    maschineNotes: [
      "Kick on step 3 (the 'and' of beat 1): this is the Timbo displacement. Keep it at velocity 65 — it should feel like an accent, not a primary hit.",
      "Kick on step 5 (the 'and' of beat 2): velocity 55, even lower. These syncopated kicks make the downbeats feel massive by contrast.",
      "Ghost snare on steps 2 and 14: velocity 35. These need to be barely audible — felt on headphones but not on laptop speakers.",
      "Clap layer on the snare pad: use Pad Link to fire both snare and clap together on steps 4 and 12 for extra impact."
    ],
    swing: 53,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 3, 5, 8, 11]), velocity: makeVelocity(makePattern([0, 3, 5, 8, 11]), [0, 8], [3, 5, 11]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Ghost Snare", pattern: makePattern([2, 14]), velocity: makeVelocity(makePattern([2, 14]), [], [2, 14]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 4, 8, 12], [2, 6, 10]) },
      { instrument: "Clap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) }
    ]
  },

  // ─── ADDITIONAL R&B ───────────────────────────────────────────────────────────
  {
    id: "rnb-13",
    name: "SZA Drift",
    genre: "rnb",
    bpm: 82,
    feel: ["airy", "contemporary", "dreamy"],
    description: "Contemporary neo R&B with a displaced snare (step 13 instead of 12) that gives the groove a 'late' feel — like the track is exhaling. Built for layered ODYSSEY Soul Melodies or Soulful Dreams Vol 1 & Vol 2 loops.",
    maschineNotes: [
      "Snare on step 13 instead of 12: that one-step late placement is the emotional signature of this pattern. Don't move it to 12.",
      "Open hats on steps 3 and 11 — put them in Choke Group 1 with closed hats. They should float and cut the hat underneath.",
      "Shaker on steps 5, 9, 15: velocity 30 flat. These should only be heard on headphones — use them as glue, not groove.",
      "Add Raum reverb on the snare bus: Bloom mode, 1.4s decay, 35% wet. The snare should 'bloom' into the next beat."
    ],
    swing: 57,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 7, 10]), velocity: makeVelocity(makePattern([0, 7, 10]), [0], [7, 10]) },
      { instrument: "Snare", pattern: makePattern([4, 13]), velocity: makeVelocity(makePattern([4, 13]), [4], [13]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 4, 8, 12], [2, 6, 10, 14]) },
      { instrument: "HH Open", pattern: makePattern([3, 11]), velocity: makeVelocity(makePattern([3, 11]), [], [3, 11]) },
      { instrument: "Shaker", pattern: makePattern([5, 9, 15]), velocity: makeVelocity(makePattern([5, 9, 15]), [], [5, 9, 15]) }
    ]
  },
  {
    id: "rnb-14",
    name: "Paak Pocket",
    genre: "rnb",
    bpm: 88,
    feel: ["organic", "live", "pocket"],
    description: "Anderson .Paak-inspired live-feel groove. Dense 16th-note hats with a conga accent make this feel like a drummer playing, not a machine. The kick on step 13 sets up the loop perfectly.",
    maschineNotes: [
      "All 16 hi-hat steps: manually set velocity for each step — no two consecutive steps should be the same. This is the live feel.",
      "Conga on steps 5 and 11: use a real-sounding conga from REVIVAL Soul Melodies or Stickz Hip-Hop Toolkit. Velocity 65 and 55 respectively.",
      "Ghost snare on steps 2, 7, 14 — these should sit at velocity 30-40. They're the 'breathing' of the snare.",
      "Add a very subtle Compressor on the entire Group: 2:1, 30ms attack, 120ms release. Gentle glue — don't over-compress the live feel out."
    ],
    swing: 55,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 3, 8, 13]), velocity: makeVelocity(makePattern([0, 3, 8, 13]), [0, 8], [3, 13]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Ghost Snare", pattern: makePattern([2, 7, 14]), velocity: makeVelocity(makePattern([2, 7, 14]), [], [2, 7, 14]) },
      { instrument: "HH Closed", pattern: makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), velocity: makeVelocity(makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), [0, 4, 8, 12], [1, 3, 5, 7, 9, 11, 13, 15]) },
      { instrument: "HH Open", pattern: makePattern([6]), velocity: makeVelocity(makePattern([6])) },
      { instrument: "Conga", pattern: makePattern([5, 11]), velocity: makeVelocity(makePattern([5, 11]), [], [5, 11]) }
    ]
  },

  // ─── MASTERCLASS PATTERNS ────────────────────────────────────────────────────

  // ─── DR. DRE ────────────────────────────────────────────────────────────────
  {
    id: "mc-dre-1",
    name: "The Chronic Blueprint",
    genre: "hip-hop",
    bpm: 94,
    swing: 52,
    feel: ["clinical", "west-coast", "g-funk"],
    description: "Dre's classic core pattern. All 16 hi-hat steps — machine-like, never robotic. Kick on 1 and the 'and' of beat 2 (step 5) for that forward-leaning G-Funk push.",
    maschineNotes: [
      "Set all 16 hat steps to velocity 75 flat. Raise steps 0, 4, 8, 12 to velocity 90. No Humanize.",
      "Snare: Reverb, Large Hall, 2.1s decay, 45% wet. The reverb is as loud as the dry hit.",
      "Kick tuned to the key center of your track. Boost 80Hz, cut 400Hz.",
      "Drums mono, everything else wide. Set drum Group output width to 0%."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 5, 8]), velocity: makeVelocity(makePattern([0, 5, 8]), [0, 8], [5]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), velocity: makeVelocity(makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [0,4,8,12], []) },
      { instrument: "HH Open", pattern: makePattern([10]), velocity: makeVelocity(makePattern([10])) },
    ]
  },
  {
    id: "mc-dre-2",
    name: "2001 Overdrive",
    genre: "hip-hop",
    bpm: 97,
    swing: 50,
    feel: ["clinical", "hard", "cinematic"],
    description: "The harder, faster Dre. Kick displacement on step 6 and step 11 creates urgent forward momentum. Clap doubles the snare for extra mass.",
    maschineNotes: [
      "Clap and snare in Pad Link — trigger together on steps 4 and 12.",
      "Pitch the clap up +2 semitones from the snare.",
      "Ghost kick at step 6: velocity 65. Main kicks at velocity 110.",
      "Mono drums, wide strings. Drum Group output width 0%."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 6, 8, 11]), velocity: makeVelocity(makePattern([0, 6, 8, 11]), [0, 8], [6, 11]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Clap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), velocity: makeVelocity(makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [0,4,8,12], []) },
    ]
  },

  // ─── HAVOC ──────────────────────────────────────────────────────────────────
  {
    id: "mc-havoc-1",
    name: "Queensbridge Cold",
    genre: "boom-bap",
    bpm: 92,
    swing: 56,
    feel: ["dark", "minimal", "menacing"],
    description: "The Mobb Deep signature. Kick on 1 and 3. Quiet 8th-note hats. The space between kick and snare is intentional. Ghost snare on step 14.",
    maschineNotes: [
      "Hi-hats at velocity 40 flat — barely audible. Kick and snare both at 95.",
      "Ghost snare on step 14 at velocity 30 only.",
      "Swing 56-58%. Resist the urge to add more.",
      "Vinyl crackle loop underneath at velocity 20."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8]), velocity: makeVelocity(makePattern([0, 8]), [0, 8]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Ghost Snare", pattern: makePattern([14]), velocity: makeVelocity(makePattern([14]), [], [14]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [], [0, 2, 4, 6, 8, 10, 12, 14]) },
    ]
  },
  {
    id: "mc-havoc-2",
    name: "Survival Bounce",
    genre: "boom-bap",
    bpm: 90,
    swing: 58,
    feel: ["dark", "spacious", "cold"],
    description: "Quarter-note hats only — maximum breathing room. Kick on step 10 instead of 8 is the Havoc displacement signature. The sample carries everything.",
    maschineNotes: [
      "Quarter-note hats at velocity 55. Kick at step 10 (NOT 8) — velocity 85.",
      "The sample should be running at all times. This pattern is just a frame.",
      "Kick displacement at step 10 is the Havoc signature — never move it to step 8.",
      "Dark vinyl sample: low-pass at 8kHz, stereo width 20%."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 10]), velocity: makeVelocity(makePattern([0, 10]), [0], [10]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 4, 8, 12]), velocity: makeVelocity(makePattern([0, 4, 8, 12]), [], [0, 4, 8, 12]) },
    ]
  },

  // ─── DJ PREMIER ─────────────────────────────────────────────────────────────
  {
    id: "mc-premier-1",
    name: "The Premier Lock",
    genre: "boom-bap",
    bpm: 92,
    swing: 60,
    feel: ["raw", "swung", "boom-bap"],
    description: "Classic Premier groove. Kick on 1 and 3, standard 2+4 snare, but the accent hit on step 11 (the 'and' of beat 3) is the signature Premier stab.",
    maschineNotes: [
      "Accent snare on step 11 is a SEPARATE pad — same sound, velocity 85.",
      "Main snares at velocity 100. Swing: 60% — sacred.",
      "8th-note hats with downbeats at 90, upbeats at 50.",
      "Sample loop runs at 30-50% stereo width."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8]), velocity: makeVelocity(makePattern([0, 8]), [0, 8]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Accent Snare", pattern: makePattern([11]), velocity: makeVelocity(makePattern([11]), [11]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 4, 8, 12], [2, 6, 10, 14]) },
    ]
  },
  {
    id: "mc-premier-2",
    name: "Gangstarr Stomp",
    genre: "boom-bap",
    bpm: 94,
    swing: 62,
    feel: ["raw", "swung", "hard"],
    description: "Heavier Premier with kick displacement on step 6 and ghost snare roll into the loop. Ghost notes on steps 14-15 build momentum into beat 1.",
    maschineNotes: [
      "Ghost snares 14 and 15 at velocity 30 and 40 — building into beat 1.",
      "Kick on step 6 at velocity 80 (the Premier ghost kick).",
      "Swing 62% — creates the near-triplet pocket.",
      "The loop is 70% of this beat. Drums just frame it."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 6, 8]), velocity: makeVelocity(makePattern([0, 6, 8]), [0, 8], [6]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Ghost Snare", pattern: makePattern([14, 15]), velocity: makeVelocity(makePattern([14, 15]), [], [14, 15]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 4, 8, 12], [2, 6, 10, 14]) },
    ]
  },

  // ─── J DILLA ────────────────────────────────────────────────────────────────
  {
    id: "mc-dilla-1",
    name: "Donuts Drunk",
    genre: "hip-hop",
    bpm: 84,
    swing: 66,
    feel: ["drunk", "off-grid", "soulful"],
    description: "Signature Dilla feel. Kick on step 7 lands mid-beat 2. Snare on step 13 is late after beat 4. Ghost notes blur the downbeats. 66% swing pushes toward triplet feel.",
    maschineNotes: [
      "Swing 66%. Then in piano roll: nudge snare on step 13 an extra +3 ticks late.",
      "Ghost notes at velocity 25-35 with Humanize ±15% velocity.",
      "Hi-hats: use Humanize ±15% timing too. They should sound like a human rushing.",
      "Do not quantize. The 'wrong' placement is the point."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 7, 9]), velocity: makeVelocity(makePattern([0, 7, 9]), [0], [7, 9]) },
      { instrument: "Snare", pattern: makePattern([4, 13]), velocity: makeVelocity(makePattern([4, 13]), [4], [13]) },
      { instrument: "Ghost Snare", pattern: makePattern([2, 6, 10, 14]), velocity: makeVelocity(makePattern([2, 6, 10, 14]), [], [2, 6, 10, 14]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 8], [2, 4, 6, 10, 12, 14]) },
    ]
  },
  {
    id: "mc-dilla-2",
    name: "Ruff Draft Heat",
    genre: "hip-hop",
    bpm: 88,
    swing: 64,
    feel: ["drunk", "off-grid", "hard"],
    description: "Tighter Dilla. Kick on steps 2 and 11 — both syncopated. Snare on 12 slightly early creates push-pull tension with the late kick on step 11.",
    maschineNotes: [
      "In piano roll: drag kick step 11 slightly BEFORE its grid position (-2 ticks).",
      "Drag snare step 12 slightly AFTER (+3 ticks). Push-pull tension.",
      "Ghost snares at velocity 28-38. Swing 64%.",
      "Pitch sample down -2 semitones, reduce speed to 98%."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 2, 8, 11]), velocity: makeVelocity(makePattern([0, 2, 8, 11]), [0, 8], [2, 11]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Ghost Snare", pattern: makePattern([1, 7, 13]), velocity: makeVelocity(makePattern([1, 7, 13]), [], [1, 7, 13]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 8], [2, 4, 6, 10, 12, 14]) },
    ]
  },

  // ─── TIMBALAND ──────────────────────────────────────────────────────────────
  {
    id: "mc-timbaland-1",
    name: "Virginia Syncopation",
    genre: "rnb",
    bpm: 100,
    swing: 52,
    feel: ["syncopated", "electronic", "tribal"],
    description: "Timbaland signature — kicks in 4 positions create a conversation rather than a groove. Pitched perc on the offbeats is the talking drum layer.",
    maschineNotes: [
      "Perc on 2, 6, 10, 14 should be PITCHED to the track key — not just rhythm.",
      "Velocity variation on perc: 80, 65, 80, 70 (talking feel).",
      "All 16th hats at flat velocity 70 — the perc does the dynamism.",
      "Clap (not snare) at velocity 105 — front of mix."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 3, 8, 11]), velocity: makeVelocity(makePattern([0, 3, 8, 11]), [0, 8], [3, 11]) },
      { instrument: "Clap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Perc", pattern: makePattern([2, 6, 10, 14]), velocity: makeVelocity(makePattern([2, 6, 10, 14]), [2, 10], [6, 14]) },
      { instrument: "HH Closed", pattern: makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), velocity: makeVelocity(makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [], []) },
    ]
  },
  {
    id: "mc-timbaland-2",
    name: "Dirt Roll Pattern",
    genre: "rnb",
    bpm: 98,
    swing: 54,
    feel: ["syncopated", "tumbling", "electronic"],
    description: "Double-kick tumbling effect. Steps 4+5 and 12+13 cascade. Combined with a snare only on beat 3 this creates Timbaland's half-time/full-time hybrid.",
    maschineNotes: [
      "Tumble kicks: step 4 at vel 90, step 5 at vel 70. Same for 12 (90) and 13 (70).",
      "Perc on 3, 7, 11, 15 is a DIFFERENT sound from main perc — shaker or metallic.",
      "The snare is a CLAP — tight, no reverb. Velocity 95.",
      "Bass follows kick rhythm — same rhythmic positions, not just root notes."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 4, 5, 8, 12, 13]), velocity: makeVelocity(makePattern([0, 4, 5, 8, 12, 13]), [0, 8], [4, 5, 12, 13]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Shaker", pattern: makePattern([3, 7, 11, 15]), velocity: makeVelocity(makePattern([3, 7, 11, 15]), [], [3, 7, 11, 15]) },
      { instrument: "HH Closed", pattern: makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), velocity: makeVelocity(makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [], []) },
    ]
  },

  // ─── PETE ROCK ──────────────────────────────────────────────────────────────
  {
    id: "mc-pete-rock-1",
    name: "They Reminisce Bounce",
    genre: "boom-bap",
    bpm: 89,
    swing: 62,
    feel: ["bouncy", "soulful", "jazz"],
    description: "Pete Rock's most legendary pattern. Kick on step 5 (the 'and' of beat 2) is the bounce push. Ghost snares 14-15 set up the loop restart with elegance.",
    maschineNotes: [
      "This pattern needs 62% swing. Kick step 5 at velocity 75.",
      "Main kicks (0 and 8) at velocity 105. Ghost snares 14-15: velocity 30 and 45.",
      "16th note hats with heavy swing feel like triplets at 62%.",
      "Jazz sample provides everything — the drums just hold the time."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 5, 8]), velocity: makeVelocity(makePattern([0, 5, 8]), [0, 8], [5]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Ghost Snare", pattern: makePattern([14, 15]), velocity: makeVelocity(makePattern([14, 15]), [], [14, 15]) },
      { instrument: "HH Closed", pattern: makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), velocity: makeVelocity(makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [0,4,8,12], [1,3,5,7,9,11,13,15]) },
    ]
  },
  {
    id: "mc-pete-rock-2",
    name: "Mount Vernon Soul",
    genre: "boom-bap",
    bpm: 92,
    swing: 60,
    feel: ["bouncy", "funky", "soulful"],
    description: "The harder Pete Rock. Kick on step 7 (late beat 2) creates a funky, slightly late feel. Open hat on step 9 appears once per 2 bars as punctuation.",
    maschineNotes: [
      "Open hat step 9: use only in BAR 2 of a 2-bar pattern.",
      "This creates the Pete Rock 'every other bar' punctuation.",
      "Choke Group: open hat with closed hat.",
      "Ghost snares 14-15 at velocity 28 and 42."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 7, 8]), velocity: makeVelocity(makePattern([0, 7, 8]), [0, 8], [7]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Ghost Snare", pattern: makePattern([14, 15]), velocity: makeVelocity(makePattern([14, 15]), [], [14, 15]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 4, 8, 12], [2, 6, 10, 14]) },
      { instrument: "HH Open", pattern: makePattern([9]), velocity: makeVelocity(makePattern([9])) },
    ]
  },

  // ─── KANYE WEST ─────────────────────────────────────────────────────────────
  {
    id: "mc-kanye-1",
    name: "Late Registration Soul",
    genre: "hip-hop",
    bpm: 87,
    swing: 56,
    feel: ["soulful", "emotional", "melodic"],
    description: "College Dropout / Late Registration era. Busy 16th-note hats, kick on the 'and' of beat 1 (step 3 — the Kanye early-kick) creates urgency.",
    maschineNotes: [
      "Kick step 3 (the Kanye early-kick) at velocity 75.",
      "Downbeat kick at velocity 105. 16th hats: 80 on-beat, 55 off-beat.",
      "Soul sample pitched up +4 semitones. Swing 56%.",
      "Warm, emotional feel — the drums support the sample, not compete."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 3, 8]), velocity: makeVelocity(makePattern([0, 3, 8]), [0, 8], [3]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), velocity: makeVelocity(makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [0,4,8,12], [1,3,5,7,9,11,13,15]) },
    ]
  },
  {
    id: "mc-kanye-2",
    name: "Graduation Stadium",
    genre: "hip-hop",
    bpm: 92,
    swing: 54,
    feel: ["stadium", "emotional", "hard"],
    description: "Bigger, stadium-filling Kanye. Kick on step 11 adds syncopated momentum. Clap doubles snare for mass. Built for hook sections.",
    maschineNotes: [
      "Clap pad linked with snare for hook sections only.",
      "Step-11 kick at velocity 80 adds urgency toward the hook.",
      "Use this for hooks; simpler version (no step-11 kick) for verses.",
      "Wide stereo clap at 100% width — the wall-of-sound hook drop."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 5, 8, 11]), velocity: makeVelocity(makePattern([0, 5, 8, 11]), [0, 8], [5, 11]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Clap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), velocity: makeVelocity(makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [0,4,8,12], [1,3,5,7,9,11,13,15]) },
    ]
  },

  // ─── THE ALCHEMIST ──────────────────────────────────────────────────────────
  {
    id: "mc-alchemist-1",
    name: "Dark Vintage Minimal",
    genre: "boom-bap",
    bpm: 91,
    swing: 58,
    feel: ["dark", "cinematic", "minimal"],
    description: "The Alchemist baseline. Kick on 1 and 3. Rimshot instead of snare — more abstract. Quarter-note hats barely audible. Sample does all emotional work.",
    maschineNotes: [
      "Rimshot instead of snare — completely dry, zero reverb.",
      "Quarter-note hats at velocity 45 flat — barely present.",
      "Ghost hits on 6 and 14 at velocity 30: the only movement.",
      "Sample: low-pass 7kHz, high-pass 100Hz, stereo width 20%."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8]), velocity: makeVelocity(makePattern([0, 8]), [0, 8]) },
      { instrument: "Rimshot", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 4, 8, 12]), velocity: makeVelocity(makePattern([0, 4, 8, 12]), [], [0, 4, 8, 12]) },
      { instrument: "Ghost Snare", pattern: makePattern([6, 14]), velocity: makeVelocity(makePattern([6, 14]), [], [6, 14]) },
    ]
  },
  {
    id: "mc-alchemist-2",
    name: "Gibbs Meets Queensbridge",
    genre: "boom-bap",
    bpm: 89,
    swing: 60,
    feel: ["dark", "cinematic", "abstract"],
    description: "Havoc's influence made more cinematic. Kick displacement on step 10. Rimshot accent on step 9 adds rhythmic tension the rapper has to navigate around.",
    maschineNotes: [
      "Rimshot step 9 at velocity 65 — mid-range tension hit.",
      "Kick at step 10 (the Havoc displacement): velocity 70 ghost kick.",
      "3 rimshots total (4, 9, 12) — unusual accent pattern.",
      "Long kick reverb: 1.2s decay, 15% wet — fills the space."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 10]), velocity: makeVelocity(makePattern([0, 10]), [0], [10]) },
      { instrument: "Rimshot", pattern: makePattern([4, 9, 12]), velocity: makeVelocity(makePattern([4, 9, 12]), [4, 12], [9]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [], [0, 2, 4, 6, 8, 10, 12, 14]) },
    ]
  },

  // ─── METRO BOOMIN ───────────────────────────────────────────────────────────
  {
    id: "mc-metro-1",
    name: "Without Warning",
    genre: "hip-hop",
    bpm: 140,
    swing: 51,
    feel: ["trap", "dark", "hard"],
    description: "Classic Metro trap at 140 BPM. Half-time feel: snare on step 8 sounds like beat 2 at 70 BPM. Double-kick rolls on 4+5 and 12+13.",
    maschineNotes: [
      "Main kick (0, 8) at velocity 110. Roll kicks (4, 12) at 85, (5, 13) at 65.",
      "Cascading velocity creates the trap roll feel.",
      "Open hats 12-13-14 at end of bar: Metro triplet ornament.",
      "Flat 16th hats at velocity 65 — mechanical, no variation."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 4, 5, 8, 12, 13]), velocity: makeVelocity(makePattern([0, 4, 5, 8, 12, 13]), [0, 8], [4, 5, 12, 13]) },
      { instrument: "Snare", pattern: makePattern([8]), velocity: makeVelocity(makePattern([8]), [8]) },
      { instrument: "HH Closed", pattern: makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), velocity: makeVelocity(makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [], []) },
      { instrument: "HH Open", pattern: makePattern([12, 13, 14]), velocity: makeVelocity(makePattern([12, 13, 14]), [14], [12, 13]) },
    ]
  },
  {
    id: "mc-metro-2",
    name: "Slow Metro",
    genre: "hip-hop",
    bpm: 76,
    swing: 52,
    feel: ["trap", "dark", "modern"],
    description: "Metro's slower hip hop mode. 808 bass line carries the melody. Hat rolls on steps 12-14 are the signature phrase-end ornament.",
    maschineNotes: [
      "808 melody is programmed in the piano roll — slide between notes.",
      "Kick step 9 is the Metro stutter kick: velocity 75.",
      "Snare on step 8 only — half-time. No step 4 snare.",
      "Dark atmospheric loop: low-pass 12kHz, reverb 1.5s."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 9]), velocity: makeVelocity(makePattern([0, 9]), [0], [9]) },
      { instrument: "Snare", pattern: makePattern([8]), velocity: makeVelocity(makePattern([8]), [8]) },
      { instrument: "HH Closed", pattern: makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), velocity: makeVelocity(makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [], []) },
      { instrument: "HH Open", pattern: makePattern([12, 13, 14]), velocity: makeVelocity(makePattern([12, 13, 14]), [14], [12, 13]) },
    ]
  },

  // ─── 9TH WONDER ─────────────────────────────────────────────────────────────
  {
    id: "mc-9th-wonder-1",
    name: "Soul Bubble",
    genre: "boom-bap",
    bpm: 88,
    swing: 62,
    feel: ["soulful", "warm", "lo-fi"],
    description: "Pure 9th Wonder. Kick on 1 and 3 only. Standard 2+4 snare. 8th-note hats at heavy swing. The soul sample provides everything else.",
    maschineNotes: [
      "Swing 62% — the only variation from the most basic pattern.",
      "Kick velocity 100, snare 95. Hats: downbeats 85, upbeats 50.",
      "Sample: high-pass at 80Hz ONLY. No other processing.",
      "If the beat doesn't bounce at 62%, check your swing setting."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8]), velocity: makeVelocity(makePattern([0, 8]), [0, 8]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 4, 8, 12], [2, 6, 10, 14]) },
    ]
  },
  {
    id: "mc-9th-wonder-2",
    name: "Carolina Bounce",
    genre: "boom-bap",
    bpm: 91,
    swing: 60,
    feel: ["bouncy", "soulful", "warm"],
    description: "The slightly harder 9th Wonder. Kick on step 5 adds Pete Rock-influenced push. Ghost snares 14-15 set up the loop. At 60% swing this pattern dances.",
    maschineNotes: [
      "Ghost snares 14-15 at velocity 28 and 42.",
      "Kick step 5 at velocity 70 — the bounce kick.",
      "Swing 60%. Soul sample is everything — drums are just time.",
      "No reverb on snare (or minimal 0.3s). The sample provides atmosphere."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 5, 8]), velocity: makeVelocity(makePattern([0, 5, 8]), [0, 8], [5]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Ghost Snare", pattern: makePattern([14, 15]), velocity: makeVelocity(makePattern([14, 15]), [], [14, 15]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 4, 8, 12], [2, 6, 10, 14]) },
    ]
  },

  // ─── PHARRELL ───────────────────────────────────────────────────────────────
  {
    id: "mc-pharrell-1",
    name: "Neptunes Click",
    genre: "hip-hop",
    bpm: 98,
    swing: 54,
    feel: ["melodic", "minimal", "funky"],
    description: "The classic sparse Neptunes groove. The 'click' kick on step 3 is the signature — metallic, synth-adjacent. Quarter-note hats leave maximum breathing room.",
    maschineNotes: [
      "Click kick on step 3 is a DIFFERENT kick — pitched up +5 semitones, shorter decay.",
      "Quarter-note hats at velocity 60. Clap (not snare) at velocity 105.",
      "3 elements total: kick, clap, hat. Neptunes constraint.",
      "Kick tuned to the root note of the track — it IS a musical note."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 3, 8]), velocity: makeVelocity(makePattern([0, 3, 8]), [0, 8], [3]) },
      { instrument: "Clap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 4, 8, 12]), velocity: makeVelocity(makePattern([0, 4, 8, 12]), [], [0, 4, 8, 12]) },
    ]
  },
  {
    id: "mc-pharrell-2",
    name: "Happy Bounce",
    genre: "hip-hop",
    bpm: 102,
    swing: 56,
    feel: ["melodic", "bright", "bouncy"],
    description: "The sunnier Pharrell. Kick on step 14 (the 'and' of beat 4) creates the bounce that makes this pattern feel physically irresistible.",
    maschineNotes: [
      "Kick step 14 at velocity 80 — sets up bar 2 with massive anticipation.",
      "Open hat step 10: Choke Group with closed hat.",
      "Clap at the front of the mix — louder than everything else.",
      "8th-note closed hats with velocity variation: 85 down, 55 up."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8, 14]), velocity: makeVelocity(makePattern([0, 8, 14]), [0, 8], [14]) },
      { instrument: "Clap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 4, 8, 12], [2, 6, 10, 14]) },
      { instrument: "HH Open", pattern: makePattern([10]), velocity: makeVelocity(makePattern([10])) },
    ]
  },

  // ─── AKHENATON ──────────────────────────────────────────────────────────────
  {
    id: "mc-akhenaton-1",
    name: "Marseille Boom",
    genre: "boom-bap",
    bpm: 92,
    swing: 56,
    feel: ["dark", "mediterranean", "deliberate"],
    description: "The IAM core pattern. Slower and more deliberate than NYC boom bap. Open hat on step 10 gives a Mediterranean lilt.",
    maschineNotes: [
      "Open hat step 10: Choke Group with closed hat. Velocity 65.",
      "Kick 95, snare 90. Hi-hats at 42 — low in the mix, atmospheric.",
      "Swing 56%. The open hat is not an accent — it is a mood.",
      "Sample: low-pass 9kHz, stereo width 25%. North African vinyl feel."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8]), velocity: makeVelocity(makePattern([0, 8]), [0, 8]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [], [0, 2, 4, 6, 8, 10, 12, 14]) },
      { instrument: "HH Open", pattern: makePattern([10]), velocity: makeVelocity(makePattern([10])) },
    ]
  },
  {
    id: "mc-akhenaton-2",
    name: "L'Empire du Côté",
    genre: "boom-bap",
    bpm: 90,
    swing: 58,
    feel: ["dark", "french", "boom-bap"],
    description: "IAM's classic album feel. Extra kick on step 11 displaces the groove forward. Ghost snare on 14 creates pre-downbeat tension.",
    maschineNotes: [
      "Kick step 11 at velocity 75 (softer than main kicks at 95).",
      "Ghost snare step 14 at velocity 28.",
      "Hi-hats velocity 40 with humanize ±3.",
      "Dark sample filtered below 9kHz with subtle reverb tail."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8, 11]), velocity: makeVelocity(makePattern([0, 8, 11]), [0, 8], [11]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Ghost Snare", pattern: makePattern([14]), velocity: makeVelocity(makePattern([14]), [], [14]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [], [0, 2, 4, 6, 8, 10, 12, 14]) },
    ]
  },

  // ─── DJ MEHDI ───────────────────────────────────────────────────────────────
  {
    id: "mc-mehdi-1",
    name: "Lucky Boy Swing",
    genre: "boom-bap",
    bpm: 90,
    swing: 60,
    feel: ["soulful", "jazz", "warm"],
    description: "Quintessential Mehdi groove. Kick displacement on step 6 (Pete Rock inheritance). Accent snare on step 11 — direct heir to Premier's signature hit.",
    maschineNotes: [
      "Swing 60%. Kick step 6 at velocity 80 (softer than main kicks at 100).",
      "Hi-hat velocity: downbeats 75, upbeats 38 — the 2:1 ratio.",
      "Accent snare step 11 at velocity 78 — same snare sample.",
      "Vinyl crackle loop at velocity 18 underneath everything."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 6, 8]), velocity: makeVelocity(makePattern([0, 6, 8]), [0, 8], [6]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Accent Snare", pattern: makePattern([11]), velocity: makeVelocity(makePattern([11]), [11]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 4, 8, 12], [2, 6, 10, 14]) },
    ]
  },
  {
    id: "mc-mehdi-2",
    name: "Oxmo Blue",
    genre: "boom-bap",
    bpm: 87,
    swing: 62,
    feel: ["melancholic", "jazz", "spacious"],
    description: "The slower, more melancholic Mehdi — for Oxmo Puccino's storytelling. Ultra-swung 8th hats at near-subliminal velocity. The jazz sample carries everything.",
    maschineNotes: [
      "Swing 62% — upbeat hats drag almost to the next downbeat. Intentional.",
      "Ghost snare step 14 at velocity 22.",
      "All hats at velocity 35 — nearly subliminal.",
      "Jazz sample with chord changes: 2-bar loop, let it breathe."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8]), velocity: makeVelocity(makePattern([0, 8]), [0, 8]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Ghost Snare", pattern: makePattern([14]), velocity: makeVelocity(makePattern([14]), [], [14]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [], [0, 2, 4, 6, 8, 10, 12, 14]) },
    ]
  },

  // ─── MYTH SYZER ─────────────────────────────────────────────────────────────
  {
    id: "mc-myth-syzer-1",
    name: "Nekfeu Float",
    genre: "boom-bap",
    bpm: 94,
    swing: 58,
    feel: ["modern", "french", "floating"],
    description: "Modern French boom bap standard. All 16th hats with a velocity slope — downbeats loud, upbeats tapering to ghost level — create a floating groove.",
    maschineNotes: [
      "Hi-hat slope: 0/4/8/12=90, 1/5/9/13=70, 2/6/10/14=50, 3/7/11/15=30.",
      "Snare at velocity 85 — not the loudest element. Kick at 100.",
      "Sample sits at same level or louder than the snare.",
      "Modern Parisian warmth: vinyl crackle at velocity 22 under everything."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8]), velocity: makeVelocity(makePattern([0, 8]), [0, 8]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), velocity: makeVelocity(makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [0,4,8,12], [1,3,5,7,9,11,13,15]) },
    ]
  },
  {
    id: "mc-myth-syzer-2",
    name: "Groove Parisienne",
    genre: "boom-bap",
    bpm: 91,
    swing: 60,
    feel: ["soulful", "modern", "groove"],
    description: "The looser Myth Syzer feel. Kick displacement on step 10 gives a hip-hop wobble. Ghost on step 13 adds human micro-timing to the pattern.",
    maschineNotes: [
      "Kick step 10 at velocity 70 — the groove displacement.",
      "Ghost snare step 13 at velocity 25.",
      "Apply velocity slope to 16th hats (see Nekfeu Float technique).",
      "Swing 60% on hats only. 2-bar loop with chord changes."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8, 10]), velocity: makeVelocity(makePattern([0, 8, 10]), [0, 8], [10]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Ghost Snare", pattern: makePattern([13]), velocity: makeVelocity(makePattern([13]), [], [13]) },
      { instrument: "HH Closed", pattern: makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), velocity: makeVelocity(makePattern([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [0,4,8,12], [1,3,5,7,9,11,13,15]) },
    ]
  },

  // ─── MORLOCKKO PLUS ─────────────────────────────────────────────────────────
  {
    id: "mc-morlockko-1",
    name: "Kölner Nacht",
    genre: "boom-bap",
    bpm: 88,
    swing: 58,
    feel: ["dark", "cinematic", "minimal"],
    description: "The patient Morlockko groove. Kick on 1 and 3 only. Quarter-note hats for maximum breathing room. Ghost snare on step 14. Space is the sound.",
    maschineNotes: [
      "Quarter-note hats at velocity 50. Kick 95, snare 88.",
      "Ghost snare step 14 at velocity 25.",
      "Snare reverb: Hall, 1.2s, 30% wet — the reverb IS the character.",
      "Sample pitched -10 cents (unease), low-pass at 7kHz (library record feel)."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8]), velocity: makeVelocity(makePattern([0, 8]), [0, 8]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Ghost Snare", pattern: makePattern([14]), velocity: makeVelocity(makePattern([14]), [], [14]) },
      { instrument: "HH Closed", pattern: makePattern([0, 4, 8, 12]), velocity: makeVelocity(makePattern([0, 4, 8, 12]), [], [0, 4, 8, 12]) },
    ]
  },
  {
    id: "mc-morlockko-2",
    name: "Untergrund Stomp",
    genre: "boom-bap",
    bpm: 91,
    swing: 60,
    feel: ["dark", "underground", "forward"],
    description: "Slightly aggressive Morlockko for rap performances. Kick on step 11 creates a stumble-forward momentum. 8th hats barely audible.",
    maschineNotes: [
      "Kick step 11 at velocity 80 — softer than main kicks at 100.",
      "Hi-hats at velocity 38 — barely audible texture. Swing 60%.",
      "Find a loop where something happens on step 11 — the stumble pairs with it.",
      "Snare reverb tails should overlap into the next bar."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8, 11]), velocity: makeVelocity(makePattern([0, 8, 11]), [0, 8], [11]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [], [0, 2, 4, 6, 8, 10, 12, 14]) },
    ]
  },

  // ─── JOHNNY ILLSTRUMENT ──────────────────────────────────────────────────────
  {
    id: "mc-johnny-ill-1",
    name: "Berlin Hard",
    genre: "boom-bap",
    bpm: 93,
    swing: 60,
    feel: ["hard", "raw", "east-coast"],
    description: "The Berlin bap signature. Kick displacement on step 6 (Premier inheritance), loud snare, accent snare on step 11. This pattern rolls with authority.",
    maschineNotes: [
      "Swing 60% — non-negotiable. Kick step 6 at velocity 78.",
      "Accent snare step 11 at velocity 82 — separate pad, same sound.",
      "Main snares at velocity 100. Berlin snares hit LOUD.",
      "8th-note hats at velocity 55 with humanize ±5."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 6, 8]), velocity: makeVelocity(makePattern([0, 6, 8]), [0, 8], [6]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Accent Snare", pattern: makePattern([11]), velocity: makeVelocity(makePattern([11]), [11]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 4, 8, 12], [2, 6, 10, 14]) },
    ]
  },
  {
    id: "mc-johnny-ill-2",
    name: "Kreuzberg Late Night",
    genre: "boom-bap",
    bpm: 89,
    swing: 62,
    feel: ["contemplative", "late-night", "berlin"],
    description: "Slower, contemplative Berlin sound for storytelling tracks. Open hat on step 10 gives breathing room. A nod to late-night crate digging sessions.",
    maschineNotes: [
      "Open hat step 10: Choke Group with closed hat, velocity 70.",
      "8th-note hats at velocity 48. Snare at velocity 95.",
      "Swing 62% — slightly hungover feel suits late-night rap.",
      "German jazz-funk sample preferred. Lock drums to the sample's groove."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8]), velocity: makeVelocity(makePattern([0, 8]), [0, 8]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14]), [0, 4, 8, 12], [2, 6, 10, 14]) },
      { instrument: "HH Open", pattern: makePattern([10]), velocity: makeVelocity(makePattern([10])) },
    ]
  },

  // ─── FIGUB BRAZLEVIC ────────────────────────────────────────────────────────
  {
    id: "mc-figub-1",
    name: "Kopfkino Swing",
    genre: "boom-bap",
    bpm: 87,
    swing: 62,
    feel: ["cinematic", "jazzy", "patient"],
    description: "The Figub signature — high swing pushes upbeats deep into the pocket. Kick tuned to the sample key for harmonic resonance. Quarter-note hats for maximum space.",
    maschineNotes: [
      "Swing 62%. Tune kick to the sample's root note.",
      "Quarter-note hats at velocity 52. Ghost snare step 14 at velocity 20.",
      "Layer jazz brushed snare under main snare at velocity 35 (Pad Link).",
      "Vinyl crackle at velocity 18 — places the sample in its original medium."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8]), velocity: makeVelocity(makePattern([0, 8]), [0, 8]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "Ghost Snare", pattern: makePattern([14]), velocity: makeVelocity(makePattern([14]), [], [14]) },
      { instrument: "HH Closed", pattern: makePattern([0, 4, 8, 12]), velocity: makeVelocity(makePattern([0, 4, 8, 12]), [], [0, 4, 8, 12]) },
    ]
  },
  {
    id: "mc-figub-2",
    name: "Ruhr Cinematic",
    genre: "boom-bap",
    bpm: 84,
    swing: 64,
    feel: ["cinematic", "suspended", "patient"],
    description: "At 84 BPM and 64% swing, upbeats feel held in suspension. For film-score-sourced samples where the emotional content requires absolute patience.",
    maschineNotes: [
      "64% swing — upbeats are so delayed they feel suspended.",
      "Kick step 11 at velocity 72 — adds a push before beat 3.",
      "Quarter-note hats at velocity 45. 4-bar loop with narrative motion.",
      "High swing tolerance: give yourself 3-5 minutes to adjust."
    ],
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 8, 11]), velocity: makeVelocity(makePattern([0, 8, 11]), [0, 8], [11]) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12]) },
      { instrument: "HH Closed", pattern: makePattern([0, 4, 8, 12]), velocity: makeVelocity(makePattern([0, 4, 8, 12]), [], [0, 4, 8, 12]) },
    ]
  }
];
