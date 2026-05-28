export type Genre = "hip-hop" | "boom-bap" | "trap" | "rnb";

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
};

// Helper to generate 16 steps
const makePattern = (indices: number[]): boolean[] => {
  const p = Array(16).fill(false);
  indices.forEach(i => p[i] = true);
  return p;
};

// Helper for velocities
const makeVelocity = (pattern: boolean[], accents: number[] = [], ghost: number[] = []): number[] => {
  return pattern.map((isOn, i) => {
    if (!isOn) return 0;
    if (accents.includes(i)) return 100;
    if (ghost.includes(i)) return 40;
    return 80; // default normal
  });
};

export const patterns: DrumPattern[] = [
  // BOOM BAP
  {
    id: "bb-1",
    name: "Classic 90s",
    genre: "boom-bap",
    bpm: 90,
    feel: ["punchy", "swung", "lo-fi"],
    description: "The quintessential 90s New York sound. Kick hits hard on the 1 and the 'and' of 3.",
    maschineNotes: [
      "Set group swing to 54% for that authentic MPC feel.",
      "Filter the high-end off the kick slightly.",
      "Use fixed velocity for the kick, but vary the hats manually."
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
    description: "Signature bounce with delayed kicks and ghosted snare notes driving the groove.",
    maschineNotes: [
      "Layer a shaker under the hi-hats.",
      "Nudge the snares late by a few ticks in the Step Sequencer.",
      "Keep the kick warm and round."
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
    description: "Syncopated kick patterns with two kicks very close together right before the 3.",
    maschineNotes: [
      "Apply Bitcrusher or Lo-Fi effect on the master group.",
      "Keep hats extremely sparse.",
      "The ghost snare on 7 is crucial for the dragging feel."
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
    description: "Very sparse kick placement and a wide open snare. Leaves huge pockets for bass lines.",
    maschineNotes: [
      "Use Pad Link to trigger a subtle noise sample with the kick.",
      "Keep swing relatively low, rely on manual late placement of hats.",
      "Snare should have a long, un-gated tail."
    ],
    swing: 50,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 9]), velocity: makeVelocity(makePattern([0, 9]), [0, 9], []) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12]), [4, 12], []) },
      { instrument: "HH Closed", pattern: makePattern([2, 6, 10, 14]), velocity: makeVelocity(makePattern([2, 6, 10, 14]), [2, 6, 10, 14], []) }
    ]
  },

  // HIP HOP
  {
    id: "hh-1",
    name: "West Coast G-Funk",
    genre: "hip-hop",
    bpm: 100,
    feel: ["rolling", "warm"],
    description: "Almost a four-on-the-floor kick feel combined with heavy claps and shaker 16ths.",
    maschineNotes: [
      "Layer a clap and a snare on beats 2 and 4.",
      "Keep velocity completely flat (127) for kicks.",
      "Slightly shift shakers early for an urgent, rolling feel."
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
    description: "Cross-feel at 65 BPM with sparse 808s and modern crisp claps.",
    maschineNotes: [
      "Tune your kicks to the root note of the sample.",
      "Use the Note Repeat function for random hi-hat rolls.",
      "Layer a rimshot with the main clap."
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
    description: "Choppy and aggressive. Double kicks right before the downbeat and syncopated snare ghost notes.",
    maschineNotes: [
      "Mute groups abruptly for drops.",
      "Pitch down your hi-hats by -2 semitones.",
      "Very strict quantization on the kicks, let the hats swing."
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
    description: "Anthem style beat. Thick heavy snares and very straight driving kicks.",
    maschineNotes: [
      "Layer 3 different snares and compress them together.",
      "Use a short decay on the kick so it hits like a hammer.",
      "Hats should be 16ths but every off-beat is extremely quiet."
    ],
    swing: 51,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 2, 8]), velocity: makeVelocity(makePattern([0, 2, 8])) },
      { instrument: "Snare Thick", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12])) },
      { instrument: "HH Closed", pattern: makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), velocity: makeVelocity(makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), [0, 2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13, 15]) }
    ]
  },

  // TRAP
  {
    id: "tr-1",
    name: "808 Trap Classic",
    genre: "trap",
    bpm: 140,
    feel: ["menacing", "hard"],
    description: "The foundation of modern trap. Heavy 808s on the 1, syncopated claps, and fast hi-hat variations.",
    maschineNotes: [
      "Use Note Repeat set to 1/32 for the hi-hat rolls.",
      "Make sure your 808s are set to monophonic/choke group.",
      "Slightly detune the snare for a darker feel."
    ],
    swing: 0,
    steps: [
      { instrument: "808 Kick", pattern: makePattern([0, 3, 8]), velocity: makeVelocity(makePattern([0, 3, 8])) },
      { instrument: "Clap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12])) },
      { instrument: "HH Closed", pattern: makePattern([0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14]), velocity: makeVelocity(makePattern([0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14])) },
      { instrument: "HH Open", pattern: makePattern([6, 14]), velocity: makeVelocity(makePattern([6, 14])) }
    ]
  },
  {
    id: "tr-2",
    name: "Hi-Hat Wizard",
    genre: "trap",
    bpm: 145,
    feel: ["intricate", "fast"],
    description: "Focuses heavily on complex 32nd note hi-hat patterns and rolling triplet feels.",
    maschineNotes: [
      "Automate the pitch of the hi-hat rolls down over time.",
      "Keep kicks very sparse to let the hats shine.",
      "Use a very tight, clicking snare."
    ],
    swing: 0,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 9]), velocity: makeVelocity(makePattern([0, 9])) },
      { instrument: "Snare", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12])) },
      { instrument: "HH Closed", pattern: makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), velocity: makeVelocity(makePattern([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])) },
      { instrument: "Perc", pattern: makePattern([7, 15]), velocity: makeVelocity(makePattern([7, 15])) }
    ]
  },
  {
    id: "tr-3",
    name: "Drill Slide",
    genre: "trap",
    bpm: 140,
    feel: ["cold", "sliding"],
    description: "UK/NY Drill style. Displaced snares on the 'and' of 3, gliding 808s, and counter-rhythm hi-hats.",
    maschineNotes: [
      "Turn on Glide/Portamento for the 808 group.",
      "Place the snare on step 11 instead of 12 for the signature drill bounce.",
      "Use triangle hits and rimshots for counter-melodies."
    ],
    swing: 50,
    steps: [
      { instrument: "808 Kick", pattern: makePattern([0, 8, 10]), velocity: makeVelocity(makePattern([0, 8, 10])) },
      { instrument: "Snare", pattern: makePattern([4, 11]), velocity: makeVelocity(makePattern([4, 11])) },
      { instrument: "HH Closed", pattern: makePattern([0, 3, 6, 8, 11, 14]), velocity: makeVelocity(makePattern([0, 3, 6, 8, 11, 14])) }
    ]
  },
  {
    id: "tr-4",
    name: "Trap Banger",
    genre: "trap",
    bpm: 150,
    feel: ["aggressive", "energetic"],
    description: "High energy festival trap. Rapid kicks and snare roll builds.",
    maschineNotes: [
      "Distort the master bus slightly for extra aggression.",
      "Use velocity to fade in snare rolls.",
      "Stomp the 1 with an impact FX layered on the kick."
    ],
    swing: 0,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 2, 8, 9]), velocity: makeVelocity(makePattern([0, 2, 8, 9])) },
      { instrument: "Clap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12])) },
      { instrument: "HH Closed", pattern: makePattern([0, 1, 2, 3, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 1, 2, 3, 4, 6, 8, 10, 12, 14])) },
      { instrument: "Brass Hit", pattern: makePattern([0, 8]), velocity: makeVelocity(makePattern([0, 8])) }
    ]
  },

  // R&B
  {
    id: "rnb-1",
    name: "Neo Soul Pocket",
    genre: "rnb",
    bpm: 75,
    feel: ["groovy", "warm", "soulful"],
    description: "Deep pocket groove. Displaced kicks that feel like they're falling behind the beat, with warm rimshots.",
    maschineNotes: [
      "Use the 'Humanize' function on your hi-hats.",
      "Rimshot instead of a full snare.",
      "Extremely heavy swing, pushed past 60%."
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
    description: "Clean, crisp, and driving. Blends trap hi-hats with a traditional R&B vocal feel.",
    maschineNotes: [
      "Layer a synthetic kick with an acoustic kick.",
      "Keep claps wide using a stereo widener.",
      "Subtle 1/32nd hi-hat trills at the end of bars."
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
    description: "Very slow, half-time feel. Huge reverbs on the snare and deep, subby kicks.",
    maschineNotes: [
      "Snare reverb decay should last almost a full beat.",
      "Very little high-end energy. Filter the hats.",
      "Use velocity sensitivity on the kick to add dynamic pulse."
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
    description: "Upbeat R&B feel with syncopated kicks that play off the vocal pockets.",
    maschineNotes: [
      "Layer 2 different claps and pan them slightly L and R.",
      "Add a subtle delayed ghost kick.",
      "Hats should feel extremely relaxed."
    ],
    swing: 57,
    steps: [
      { instrument: "Kick", pattern: makePattern([0, 3, 8, 14]), velocity: makeVelocity(makePattern([0, 3, 8, 14]), [0, 8], [3, 14]) },
      { instrument: "Clap", pattern: makePattern([4, 12]), velocity: makeVelocity(makePattern([4, 12])) },
      { instrument: "HH Closed", pattern: makePattern([0, 2, 4, 6, 8, 10, 12, 14]), velocity: makeVelocity(makePattern([0, 2, 4, 6, 8, 10, 12, 14])) },
      { instrument: "Perc", pattern: makePattern([11, 15]), velocity: makeVelocity(makePattern([11, 15]), [], [11, 15]) }
    ]
  }
];
