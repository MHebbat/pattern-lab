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
  }
];
