// Producer Masterclass data — style DNA, drum patterns, Maschine workflows

const p = (indices: number[]): boolean[] => {
  const r = Array(16).fill(false);
  indices.forEach(i => (r[i] = true));
  return r;
};

export type StepRow = {
  label: string;
  steps: boolean[];
  isGhost?: boolean;
};

export type ProducerPattern = {
  name: string;
  bpm: number;
  swing: number;
  description: string;
  rows: StepRow[];
  maschineNote: string;
};

export type KitPad = {
  position: string;
  instrument: string;
  sound: string;
  pack: string;
  processing: string;
  color: "kick" | "snare" | "hat" | "clap" | "perc" | "synth" | "empty";
};

export type Technique = { title: string; detail: string };
export type PackRec = { pack: string; why: string; free?: boolean };

export type Producer = {
  id: string;
  name: string;
  realName?: string;
  era: string;
  origin: string;
  color: string;
  tags: string[];
  signatureArtists: string[];
  bpmRange: [number, number];
  swingRange: [number, number];
  tagline: string;
  bio: string;
  styleMarkers: string[];
  drumPhilosophy: string;
  samplePhilosophy: string;
  patterns: ProducerPattern[];
  kitPads: KitPad[];
  techniques: Technique[];
  packRecs: PackRec[];
  microKeyTips: string[];
};

export const producers: Producer[] = [
  // ─── DR. DRE ──────────────────────────────────────────────────────────────────
  {
    id: "dr-dre",
    name: "Dr. Dre",
    realName: "Andre Romelle Young",
    era: "1992 – present",
    origin: "Compton, CA",
    color: "#10b981",
    tags: ["West Coast", "G-Funk", "Cinematic", "Clinical"],
    signatureArtists: ["Snoop Dogg", "2Pac", "Eminem", "Kendrick Lamar", "The D.O.C."],
    bpmRange: [92, 100],
    swingRange: [50, 54],
    tagline: "The Headphone Sound",
    bio: "Dr. Dre defined West Coast hip hop with a production style built on clinical clarity, orchestral depth, and punishing low end. His G-Funk era layered live bass and synth leads over programmed drums; his 2001 era brought cinematic strings and a mixing-board precision that made every element sit in its exact frequency space. His beats are engineering exercises as much as musical ones.",
    styleMarkers: [
      "16th-note hi-hats at near-uniform velocity — machine-like but never robotic",
      "Snare with a 2+ second room reverb — the reverb is as loud as the dry hit",
      "Kick tuned to the key of the track — clarity over weight",
      "Wide orchestral strings panned to ±60 while drums stay mono",
      "Sub bass guitar or synth bass sidechained tightly to the kick",
      "Everything EQ'd with surgical precision — no competing frequencies",
    ],
    drumPhilosophy: "The drums have to hit like concert PA speakers — clean, present, and front of the mix. Dre builds his drums with more care than most producers build their entire tracks. Every velocity, every reverb tail, every EQ curve is intentional.",
    samplePhilosophy: "Dre rarely uses raw loops. He reconstructs the source material — live session musicians re-record the interpolation, or he recreates the feel from scratch with real musicians. When he does sample, the sample is just the seed; the final product is largely new construction.",
    patterns: [
      {
        name: "The Chronic Blueprint",
        bpm: 94,
        swing: 52,
        description: "The core pattern behind Dre's 1992-era sound. 16th hi-hats are the backbone — they never stop. The kick lands on beat 1 and the 'and' of beat 2 for that forward-leaning G-Funk push.",
        rows: [
          { label: "KICK",  steps: p([0, 5, 8]) },
          { label: "SNARE", steps: p([4, 12]) },
          { label: "C.HAT", steps: p([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]) },
          { label: "O.HAT", steps: p([10]) },
        ],
        maschineNote: "Set all 16 hat steps to velocity 75 flat — no variation. Then raise steps 0, 4, 8, 12 to velocity 90. That's it. Dre's hats are consistent, not humanized. Snare: add Reverb, Large Hall mode, 2.1s decay, 45% wet.",
      },
      {
        name: "2001 Overdrive",
        bpm: 97,
        swing: 50,
        description: "The harder, faster Dre. Kick displacement on step 6 (the 'and' of beat 2) and step 11 creates the urgent, forward momentum. Clap doubles the snare for extra mass.",
        rows: [
          { label: "KICK",  steps: p([0, 6, 8, 11]) },
          { label: "SNARE", steps: p([4, 12]) },
          { label: "CLAP",  steps: p([4, 12]) },
          { label: "C.HAT", steps: p([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]) },
        ],
        maschineNote: "Clap and snare should be in Pad Link — they trigger together on steps 4 and 12. Pitch the clap up +2 semitones from the snare. The kick at step 6 is a ghost kick: set velocity to 65. Kick on 0 and 8 at velocity 110.",
      },
    ],
    kitPads: [
      { position: "A1", instrument: "Kick",         sound: "808 tuned to key center -2 semitones", pack: "Revival (NI)",        processing: "Transient Master: Attack 0, Sustain +2. EQ: boost 80Hz +3dB, cut 400Hz -2dB, boost 3kHz +1dB", color: "kick" },
      { position: "A2", instrument: "Snare",        sound: "Crisp snare with tight body",          pack: "Sticks Toolkit",      processing: "Reverb: Hall 2.1s, 45% wet. EQ: cut 300Hz -2dB, boost 5kHz +2dB", color: "snare" },
      { position: "A3", instrument: "Closed Hi-Hat", sound: "Bright metallic closed hat",          pack: "Sticks Toolkit",      processing: "High-pass at 4kHz. Velocity: ALL steps at 75, downbeats at 90. No humanize.", color: "hat" },
      { position: "A4", instrument: "Open Hi-Hat",  sound: "Long decay open hat",                 pack: "Sticks Toolkit",      processing: "Choke Group 1 with A3. Decay: let it ring 0.6s naturally.", color: "hat" },
      { position: "B1", instrument: "Clap",         sound: "Layered clap (+2 semitones from snare)", pack: "Sticks Toolkit",   processing: "Pad Link to A2. No reverb — let the snare reverb do the work.", color: "clap" },
      { position: "B2", instrument: "Percussion",   sound: "Metallic shaker all 16ths",           pack: "Chronicles",          processing: "Velocity 30 flat. High-pass at 5kHz. This is texture, not groove.", color: "perc" },
      { position: "B3", instrument: "Tom",          sound: "Deep floor tom",                      pack: "Revival (NI)",        processing: "Add on fills only. Room reverb 0.8s.", color: "perc" },
      { position: "B4", instrument: "String Hit",   sound: "Orchestral string stab one-shot",     pack: "Odyssey Soul",        processing: "Use for accent moments. Long fade-in (50ms attack), add stereo width.", color: "synth" },
      { position: "C1", instrument: "Bass Root",    sound: "Sub bass root note (Massive X)",      pack: "Komplete 15",         processing: "Sidechain compress to kick: 4:1, 5ms attack, 150ms release.", color: "synth" },
      { position: "C2", instrument: "Bass Walk",    sound: "Chromatic bass walk notes",           pack: "Komplete 15",         processing: "Play live on microKEY. Record into pattern at 1/16 quantize.", color: "synth" },
    ],
    techniques: [
      { title: "The 16th Hat Lock", detail: "Activate all 16 hi-hat steps. Set velocity for ALL steps to 75. Then manually raise only steps 0, 4, 8, and 12 to 90. This is the complete Dre hat technique — consistent with subtle accent pulses. Do NOT use the Humanize function." },
      { title: "Snare Room Architecture", detail: "Load Maschine's Reverb on the snare. Set Type to Hall, Size to Large, Decay to 2.0-2.5 seconds, Mix to 40-50%. The reverb tail should bloom 100ms after the dry hit. You want the reverb to be nearly as loud as the snare itself." },
      { title: "Surgical Kick EQ", detail: "Add Maschine's EQ to the kick: High-pass at 35Hz (remove subsonic mud). Boost at 80Hz (+3dB, tight Q). Cut at 400Hz (-2dB, wide Q). Boost at 3kHz (+1.5dB, tight Q). This is the Dre kick — thump without boom, click without harshness." },
      { title: "Bass Sidechain Pump", detail: "On your bass Group or instrument: add a Compressor with Sidechain enabled. Set the sidechain source to the kick Group. Ratio 4:1, Attack 5ms, Release 150ms. The bass ducks on every kick — this creates the G-Funk breathing effect." },
      { title: "Orchestral Layer (microKEY)", detail: "Create Group C for strings. Load Revival (NI) or Odyssey Soul string pad. Connect microKEY. Set Group C to receive MIDI from microKEY. Arm record. Play sustained chords while the drum loop plays. Use C minor, Eb major, or F minor chord progressions. Record freely, then quantize to 1/4 notes." },
      { title: "Mono Drums, Wide Everything Else", detail: "In the drum Group's Routing: set the master output width to 0% (mono). For string and pad Groups: set output width to 100%. This creates Dre's signature sound: drums punch through the center, everything else floats in the stereo field." },
    ],
    packRecs: [
      { pack: "Revival (NI)", why: "Orchestral strings, horns, and live instruments that recreate the Chronic/2001 cinematic quality. Use the string patches for sustained chord pads behind the drums." },
      { pack: "Odyssey Soul", why: "Warm, soulful pads and loops that layer underneath the orchestral elements. The soul textures add humanity to Dre's otherwise clinical production style." },
      { pack: "Chronicles", why: "Additional percussion and texture elements. Use the metallic percussion at very low velocity as background texture behind the main drum pattern." },
    ],
    microKeyTips: [
      "Record bass lines in C minor using Massive X. Play real-time while the drum loop runs. Record at 1/16 quantize. Dre's bass lines rarely go above 4 notes per bar.",
      "For string pads: hold a chord for 4 full bars without releasing. The sustain of the pad IS the arrangement — don't over-play. Use Cm9 → Fm7 → Bb → Gm (classic West Coast changes).",
      "Use the microKEY's pitch bend to slide into kick-adjacent bass notes. Bend up a semitone, then release. This recreates the live bass player feel on a programmed track.",
    ],
  },

  // ─── HAVOC ─────────────────────────────────────────────────────────────────
  {
    id: "havoc",
    name: "Havoc",
    realName: "Kejuan Muchita",
    era: "1993 – present",
    origin: "Queensbridge, NY",
    color: "#6b7280",
    tags: ["Boom Bap", "Dark", "Menacing", "East Coast"],
    signatureArtists: ["Mobb Deep", "Prodigy", "Nas (prod)", "Big Noyd"],
    bpmRange: [86, 96],
    swingRange: [52, 60],
    tagline: "Cold and Unforgiving",
    bio: "Havoc built the sonic language of Queens danger — dark vinyl samples, minimal drum structures, and an almost uncomfortable amount of empty space. His beats don't try to make you feel good. They make you feel like you're walking through Queensbridge at 3am in February. The menace is the point.",
    styleMarkers: [
      "Minimal kick patterns — almost always just beat 1 and beat 3",
      "Snare with medium reverb (0.8-1.2s) — not as long as Dre, darker and boxier",
      "Very quiet hi-hats or NO hi-hats — the space is the sound",
      "Dark vinyl samples with low-passed highs and boosted low-mids",
      "Near-mono sample — almost no stereo width",
      "Kick and snare hit at almost the same velocity — no accent discrimination",
    ],
    drumPhilosophy: "The beat should feel like the street feels — cold, unforgiving, and with no extra movement. Every element that isn't necessary is a distraction. When you have doubt, take something out.",
    samplePhilosophy: "The sample IS the track. Havoc rarely adds melodic elements beyond the flipped sample. He finds a record with the right darkness, the right texture, and builds the drum frame around it. The sample provides all harmony, all emotion. The drums just hold the time.",
    patterns: [
      {
        name: "Queensbridge Cold",
        bpm: 92,
        swing: 56,
        description: "The Mobb Deep signature. Kick stays on 1 and 3. Quiet 8th-note hats serve only to keep time — they're felt, not heard. The space between the kick and snare is intentional and important.",
        rows: [
          { label: "KICK",  steps: p([0, 8]) },
          { label: "SNARE", steps: p([4, 12]) },
          { label: "GHOST", steps: p([14]), isGhost: true },
          { label: "C.HAT", steps: p([0, 2, 4, 6, 8, 10, 12, 14]) },
        ],
        maschineNote: "Hi-hats at velocity 40 flat — they should barely be audible. Kick and snare both at velocity 95 — no differentiation, equal weight. Ghost snare on step 14 at velocity 30 only. Swing to 56-58%. This is a cold pattern — resist the urge to add more.",
      },
      {
        name: "Survival Bounce",
        bpm: 90,
        swing: 58,
        description: "The slower, more spacious Mobb pattern. Quarter-note hats only — maximum breathing room. The kick on step 10 (instead of 8) is the Havoc signature displacement that gives the pattern its drag.",
        rows: [
          { label: "KICK",  steps: p([0, 10]) },
          { label: "SNARE", steps: p([4, 12]) },
          { label: "C.HAT", steps: p([0, 4, 8, 12]) },
        ],
        maschineNote: "Quarter-note hats at velocity 55. Kick at step 10 (not 8 — that's the 'and' of beat 2): this is the Havoc displacement. Set it to velocity 85, slightly softer than the downbeat kick. The sample should be running at ALL times — this pattern is just a frame.",
      },
    ],
    kitPads: [
      { position: "A1", instrument: "Kick",     sound: "Hard, boxy vinyl kick sample",        pack: "Sticks Toolkit",  processing: "No reverb. EQ: boost 80Hz +2dB, cut 200Hz -3dB (remove the box), slight boost at 60Hz for weight.", color: "kick" },
      { position: "A2", instrument: "Snare",    sound: "Tight, medium-reverb snare",          pack: "Sticks Toolkit",  processing: "Reverb: small room, 0.9s decay, 25% wet. Keep it boxed-in, not wide. This is a Queens snare.", color: "snare" },
      { position: "A3", instrument: "Closed Hat", sound: "Quiet, dark hi-hat",               pack: "Sticks Toolkit",  processing: "Velocity 40 flat. High-pass at 3kHz only. These should be background texture.", color: "hat" },
      { position: "A4", instrument: "Ghost Snare", sound: "Same snare, quieter layer",       pack: "Sticks Toolkit",  processing: "Velocity 25-35 only. Used sparingly on the 'and' of beat 4.", color: "snare" },
      { position: "B1", instrument: "Vinyl Crackle", sound: "Looped vinyl noise",            pack: "Weekday (free)",  processing: "Load as a loop, velocity 20-25 (barely audible). This adds the dusty texture that holds everything together.", color: "perc" },
      { position: "B2", instrument: "Open Hat",  sound: "Used extremely rarely",              pack: "Sticks Toolkit",  processing: "If you use it, ONE time per 16 bars maximum. Velocity 50. It should feel like an accident.", color: "hat" },
    ],
    techniques: [
      { title: "The Minimalism Rule", detail: "Before exporting, try removing ONE element from the pattern. If the beat still works, it was not needed. Havoc uses this as a final check. Dark beats breathe through their emptiness. Every hi-hat step you remove adds to the menace." },
      { title: "The Dark Sample Process", detail: "Load your sample (Soulful Dreams Vol 1 or 2 works well for dark loops). Apply a Low-Pass Filter at 8kHz — this immediately makes any sample feel older and darker. Add a High-Pass at 80Hz to prevent muddiness. Reduce the stereo width to 0-20% for a mono, claustrophobic feel." },
      { title: "Vinyl Texture Underneath", detail: "From Weekday (free pack), load any vinyl crackle sample as a loop on pad B1. Set velocity to 18-22 — barely audible. Let it loop continuously. This adds the subliminal 'this was made from a record' texture that defines the Mobb aesthetic." },
      { title: "Equal Velocity Philosophy", detail: "In Maschine, do NOT use velocity variation on the kick or snare. Set them both to 95 and lock them. This is counterintuitive to most production teaching, but it creates Havoc's mechanical, relentless feel. The beat doesn't 'breathe' — it stares you down." },
      { title: "The Cold Open (no intro)", detail: "Havoc beats often START with the full arrangement — drums, sample, bass all in bar 1. No build, no introduction. In Maschine's Arranger: set Scene 1 to have ALL elements active from bar 1. The impact of this bluntness is the point." },
    ],
    packRecs: [
      { pack: "Soulful Dreams Vol 1 & 2", why: "The darker, slower loops in these packs have the right grain and texture. Low-pass the samples to 8kHz and remove the stereo width — they'll sound like Queensbridge source material." },
      { pack: "Weekday (free)", why: "Vinyl crackle samples to layer underneath everything at near-inaudible volume. Havoc's beats breathe with vinyl dust.", free: true },
      { pack: "Sticks Toolkit", why: "The more raw, less processed drum sounds from this pack match Havoc's approach. Avoid the polished/enhanced options — the rough ones are what you want." },
    ],
    microKeyTips: [
      "Havoc rarely uses the microKEY for melodic content — his samples handle all harmony. If you do use it, play ONE sustained note (the root) at a very low volume under the sample. Nothing more.",
      "Use the microKEY's mod wheel to slowly open a filter on the sample over 8 bars — this adds subtle movement without changing the core dark feel.",
      "If you want to add a bass line: root notes only, one note per bar. No melody. No movement. Just the root confirming the sample's key.",
    ],
  },

  // ─── DJ PREMIER ─────────────────────────────────────────────────────────────
  {
    id: "dj-premier",
    name: "DJ Premier",
    realName: "Christopher Edward Martin",
    era: "1989 – present",
    origin: "Texas / Brooklyn, NY",
    color: "#f59e0b",
    tags: ["Boom Bap", "Sample-Chopped", "Scratched", "Raw"],
    signatureArtists: ["Gang Starr", "Nas", "Jay-Z", "Biggie", "Kendrick Lamar", "Royce da 5'9\""],
    bpmRange: [88, 98],
    swingRange: [56, 64],
    tagline: "Let the Sample Do the Work",
    bio: "DJ Premier is the architect of New York boom bap. His signature is the looped sample — not chopped, not rearranged, just the raw loop — framed by hard, swung drums and his inimitable scratch hooks. Premier's beats feel live because the sample IS live: he finds vinyl with the right soul and lets it breathe. The drums are a frame, not the picture.",
    styleMarkers: [
      "Sample runs as a straight loop — minimal chop, maximum groove exploitation",
      "Aggressive swing (56-64%) — the MPC3000 shuffle is sacred",
      "Snare accent on the 'and' of beat 3 (step 11) — the Premier signature hit",
      "Ghost snares right before beat 1 of the next bar (steps 14-15)",
      "Scratch hooks — vocal or horn samples cut rhythmically",
      "Minimal melodic additions — the sample IS the harmony",
    ],
    drumPhilosophy: "Let the sample do the work. My drums exist to frame the record. I find the groove in the vinyl, then I build a kit that locks into that groove and doesn't fight it. The beat is 70% sample, 30% drums.",
    samplePhilosophy: "Premier searches for the right 4-bar section of the right record. He listens to hundreds of records looking for a loop that already has the right tempo, the right feel, the right darkness. Then he loops it. That's it. The magic was already in the vinyl.",
    patterns: [
      {
        name: "The Premier Lock",
        bpm: 92,
        swing: 60,
        description: "Classic Premier groove. The kick stays out of the way (just 1 and 3), the snare is standard 2+4, but the accent hit on step 11 (the 'and' of beat 3) is the signature Premier stab that appears in virtually every Gang Starr track.",
        rows: [
          { label: "KICK",  steps: p([0, 8]) },
          { label: "SNARE", steps: p([4, 12]) },
          { label: "ACCENT", steps: p([11]) },
          { label: "C.HAT", steps: p([0, 2, 4, 6, 8, 10, 12, 14]) },
        ],
        maschineNote: "The Accent snare on step 11 is a SEPARATE pad from the main snare — same sound, but velocity 85 (slightly softer than the full snares at 100). Swing: 60%. This is the most important swing setting in boom bap history. Do not go below 58% or above 64%.",
      },
      {
        name: "Gangstarr Stomp",
        bpm: 94,
        swing: 62,
        description: "The heavier Premier approach. Kick displacement on step 6 adds forward momentum. Ghost snares on steps 14-15 anticipate the next bar's beat 1, creating that characteristic Premier roll-into-the-loop feeling.",
        rows: [
          { label: "KICK",  steps: p([0, 6, 8]) },
          { label: "SNARE", steps: p([4, 12]) },
          { label: "GHOST", steps: p([14, 15]), isGhost: true },
          { label: "C.HAT", steps: p([0, 2, 4, 6, 8, 10, 12, 14]) },
        ],
        maschineNote: "Ghost snares on steps 14 and 15: velocity 30 and 40 respectively (the second ghost is slightly louder, building into beat 1). This creates the 'Premier roll' — the momentum that makes his loops feel like they keep starting fresh.",
      },
    ],
    kitPads: [
      { position: "A1", instrument: "Kick",          sound: "Hard, punchy boom bap kick",         pack: "Sticks Toolkit",  processing: "Minimal processing. Hard-knee Compressor: 6:1, 5ms attack, 50ms release. Let it sound like a kick — don't over-EQ.", color: "kick" },
      { position: "A2", instrument: "Snare (main)",  sound: "Sharp, classic boom bap snare",      pack: "Sticks Toolkit",  processing: "Small room reverb: 0.6s, 20% wet. This is tight, not wide.", color: "snare" },
      { position: "A3", instrument: "Snare (accent)", sound: "Same snare, used for step-11 hit", pack: "Sticks Toolkit",  processing: "Same as A2 but 10% lower volume. The accent should feel organic, not louder.", color: "snare" },
      { position: "A4", instrument: "Ghost Snare",   sound: "Same snare, very quiet",             pack: "Sticks Toolkit",  processing: "Velocity 25-40 only. Used only on steps 14-15. No reverb.", color: "snare" },
      { position: "B1", instrument: "Closed Hi-Hat", sound: "Swinging boom bap hat",             pack: "Sticks Toolkit",  processing: "Alternate velocity: downbeats 90, upbeats 50. Swing 60% applies to these organically.", color: "hat" },
      { position: "B2", instrument: "Open Hi-Hat",   sound: "Short open hat",                    pack: "Sticks Toolkit",  processing: "Choke Group 1 with B1. Used rarely — once every 8 bars maximum.", color: "hat" },
      { position: "B3", instrument: "Vinyl Sample",  sound: "The source record loop",             pack: "Soulful Dreams / Odyssey Soul", processing: "High-pass at 60Hz, low-pass at 12kHz. Width: 30-50% (semi-mono). This is 70% of the beat.", color: "synth" },
    ],
    techniques: [
      { title: "The Loop Lock (Step 1)", detail: "Before touching drums, find your sample first. Load it in a new Group. Set the BPM to match the sample's natural tempo (use Maschine's Tempo Detection: right-click the sample in the browser → Detect BPM). Let it loop. THEN build your drum Group around this tempo. Never reverse the order." },
      { title: "The Swing-First Approach", detail: "Set your Group swing to 60% BEFORE programming any notes. Program the kick, snare, and hats with swing already active. If you program at 0% then add swing, the feel is different — the note positions shift but the intention wasn't there. Premier programs into the swing from step 1." },
      { title: "The Step-11 Accent", detail: "Create a separate snare pad (A3) using the same snare sample. In the step sequencer, add a single hit on step 11 at velocity 85. This note does not appear in every Premier pattern, but when it does, it's THE defining characteristic. It appears most often in the 2nd bar of a 2-bar loop." },
      { title: "Ghost Note Architecture", detail: "Ghost snares should be planned, not random. Premier uses them on steps 14 and 15 (the last two 16th notes before beat 1). Velocity: step 14 = 30, step 15 = 40. The increasing velocity creates the feeling of the pattern 'catching its breath' before the loop restarts." },
      { title: "The Scratch Hook (no microKEY needed)", detail: "Premier's hooks are scratch hooks — no melody, just rhythmic chopping. In Maschine: load a vocal or horn one-shot on pad C1. Create a 1-bar pattern. Program rhythmic hits on steps 0, 2, 4, 8, 10 at varying velocities. This is a scratch simulation without actual scratching." },
    ],
    packRecs: [
      { pack: "Soulful Dreams Vol 1 & 2", why: "The soul jazz loops in these packs are exactly the kind of vinyl Premier searches for. Use the more organic-sounding loops, apply a high-pass at 60Hz, and set the width to 40%. The loop IS the beat." },
      { pack: "Odyssey Soul", why: "Darker and more atmospheric than Soulful Dreams — useful for Premier's harder, more menacing tracks like 'D-Roc the Executioner' or beats with a heavy/dark sample base." },
      { pack: "Sticks Toolkit", why: "The raw, un-processed drums from this pack match Premier's MPC3000 aesthetic. Choose the more organic-sounding snares, not the modern enhanced ones." },
    ],
    microKeyTips: [
      "Premier doesn't add melodic elements on top of his samples — the microKEY isn't his primary tool. If you use it: transpose your sample in real-time by holding a key while the loop plays. That's the Premier approach to melody.",
      "Use the microKEY to trigger one-shot horn samples (from Odyssey Soul) in a rhythmic, percussive way — short staccato hits that act like a scratch. Don't sustain the notes.",
      "Record a 1-bar melodic phrase ONLY if the sample has a gap or rest built in. The melody should fill the silence, not compete with the sample.",
    ],
  },

  // ─── J DILLA ────────────────────────────────────────────────────────────────
  {
    id: "j-dilla",
    name: "J Dilla",
    realName: "James Dewitt Yancey",
    era: "1993 – 2006",
    origin: "Detroit, MI",
    color: "#f97316",
    tags: ["Drunk Bounce", "Soul", "Off-Grid", "Detroit"],
    signatureArtists: ["Common", "Erykah Badu", "D'Angelo", "The Roots", "A Tribe Called Quest", "Busta Rhymes"],
    bpmRange: [75, 92],
    swingRange: [62, 75],
    tagline: "I Don't Want You to Count It",
    bio: "J Dilla changed what a drum machine could sound like. He deliberately removed the quantize from his MPC — placing notes between the grid lines, behind the beat, ahead of the beat — creating what became known as 'drunk drums'. His beats feel like a live human playing slightly off-time, but it's not sloppiness — it's architecture. Every 'wrong' placement is exactly right.",
    styleMarkers: [
      "Notes placed BETWEEN grid lines — off the 16th-note grid intentionally",
      "Extreme swing (62-75%) — the heaviest MPC shuffle in hip hop history",
      "Snare consistently landing slightly late (after beat 2 and 4)",
      "Ghost notes that blur the downbeats — you can't always tell where beat 1 is",
      "Soulful, warm sample sources — soul and funk records at their most organic",
      "Melody from the sample, not from added elements",
    ],
    drumPhilosophy: "I don't want you to be able to count the beat. I want you to feel it. If you can count it, I haven't done my job. The drums should make your body move before your mind can process what's happening.",
    samplePhilosophy: "Dilla treated samples like instruments. He'd chop a 1-bar loop into 16 or 32 pieces and rearrange them into something the original artist never intended. The sample is clay, not a finished sculpture.",
    patterns: [
      {
        name: "Donuts Drunk",
        bpm: 84,
        swing: 66,
        description: "The signature Dilla feel. The kick on step 7 lands right in the middle of beat 2 — between the 16th notes. The snare on step 13 is late (after beat 4 starts). At 66% swing, the 8th notes feel more like triplets. This is the drunk drum signature.",
        rows: [
          { label: "KICK",  steps: p([0, 7, 9]) },
          { label: "SNARE", steps: p([4, 13]) },
          { label: "GHOST", steps: p([2, 6, 10, 14]), isGhost: true },
          { label: "C.HAT", steps: p([0, 2, 4, 6, 8, 10, 12, 14]) },
        ],
        maschineNote: "Set swing to 66%. Now MANUALLY nudge the snare on step 13: in the piano roll, drag it +3 ticks late. This is how Dilla worked — global swing PLUS manual nudge. Ghost notes at velocity 25-35, random-ish. The hats should have random velocity set by the Humanize function (±15%).",
      },
      {
        name: "Ruff Draft Heat",
        bpm: 88,
        swing: 64,
        description: "The slightly tighter Dilla approach. Kick on steps 2 and 11 — both are syncopated non-downbeat placements. The snare on step 12 is slightly early (ahead of beat 4), creating a push-pull tension with the late kick on step 11.",
        rows: [
          { label: "KICK",  steps: p([0, 2, 8, 11]) },
          { label: "SNARE", steps: p([4, 12]) },
          { label: "GHOST", steps: p([1, 7, 13]), isGhost: true },
          { label: "C.HAT", steps: p([0, 2, 4, 6, 8, 10, 12, 14]) },
        ],
        maschineNote: "Open the Piano Roll for this pattern. Select the kick on step 11 — drag it slightly BEFORE step 11 (about -2 ticks). Select the snare on step 12 — drag it slightly AFTER step 12 (+3 ticks). This creates Dilla's push-pull tension. Swing: 64%.",
      },
    ],
    kitPads: [
      { position: "A1", instrument: "Kick",       sound: "Deep, round MPC-style kick",       pack: "Sticks Toolkit",      processing: "No click. Tune down -3 semitones. Low-pass at 150Hz — only thump, no attack. This is a sub-kick.", color: "kick" },
      { position: "A2", instrument: "Snare",       sound: "Warm, fat snare — not crisp",     pack: "Sticks Toolkit",      processing: "Plate reverb: 0.7s, 20% wet. EQ: boost 200Hz +2dB (adds warmth, not snap). The Dilla snare is FAT, not sharp.", color: "snare" },
      { position: "A3", instrument: "Ghost Snare", sound: "Same snare, very quiet",          pack: "Sticks Toolkit",      processing: "Velocity 25-35. These should be felt but almost not heard. Place using Humanize after programming.", color: "snare" },
      { position: "A4", instrument: "Closed Hat",  sound: "Dark, slightly muffled hat",      pack: "Sticks Toolkit",      processing: "Use Humanize ±15% on velocity. High-pass at 2kHz only. Dilla's hats sound like they're behind cloth.", color: "hat" },
      { position: "B1", instrument: "Open Hat",    sound: "Occasional, very short open hat", pack: "Sticks Toolkit",      processing: "Choke Group 1. Used once every 8-16 bars. Velocity 55.", color: "hat" },
      { position: "B2", instrument: "Soul Sample", sound: "Chopped soul record",             pack: "Soulful Dreams Vol 1&2", processing: "Chop into 8-16 slices. Rearrange in Piano Roll. No pitch correction. The chops should sound raw.", color: "synth" },
      { position: "B3", instrument: "Rhodes/Keys", sound: "Electric piano (warm, lo-fi)",    pack: "Komplete 15 (The Gentleman)", processing: "Add saturation (+10%), cut highs above 8kHz. Dilla's keys sound like they're coming from another room.", color: "synth" },
    ],
    techniques: [
      { title: "The Off-Grid Piano Roll Edit", detail: "Program your pattern with swing at 64-70%. Then open the Piano Roll. For EACH kick hit: nudge it ±2-4 ticks from its quantized position (vary the direction per hit). For the snare: nudge 2-5 ticks LATE. This recreates how Dilla worked — global swing plus manual micro-timing edits." },
      { title: "Humanize Hats", detail: "After programming the hi-hat steps, use Maschine's Humanize function on the hat pad: enable Timing Randomization ±5%, Velocity Randomization ±20%. The hats should feel like a human is playing them slightly out of time. This is 50% of the Dilla sound." },
      { title: "Sample Chopping Architecture", detail: "Load a loop from Soulful Dreams Vol 1 or 2. In Maschine's Sampling view: detect slices. Get 8-16 slices. Map to pads. In a new 2-bar pattern, program the slices in a DIFFERENT order than the original loop. Use some slices twice, skip some entirely. Dilla never plays the sample in its original order." },
      { title: "The Late Snare Method", detail: "Dilla's snares are consistently late — never early. In the Piano Roll, select every snare hit and nudge +2-4 ticks after the grid line. The snare should feel like it 'catches up' to the kick rather than landing with it. This creates the drunk bounce that made him legendary." },
      { title: "Pitch the Sample Down", detail: "Load any soul loop (Soulful Dreams, Odyssey Soul). In Maschine's Tune section: pitch down -2 to -4 semitones. Reduce the playback speed to 97-99% (slightly slow). The sample will sound warmer, deeper, and further away — Dilla's signature lo-fi distance effect." },
    ],
    packRecs: [
      { pack: "Soulful Dreams Vol 1 & 2", why: "These soul loops are the closest to Dilla's source material. The R&B and soul textures have the right organic warmth. Pitch them down 2-3 semitones and add subtle saturation before chopping." },
      { pack: "Odyssey Soul", why: "The deeper, jazzier loops suit Dilla's harder tracks (his work with Busta Rhymes vs his work with Common). Use Odyssey Soul when you want the darker, more abstract Dilla." },
      { pack: "Bunny", why: "The pads from Bunny have the right analog warmth for layering under chopped samples. At low volume, they add depth without competing with the main sample." },
    ],
    microKeyTips: [
      "Record a Rhodes or piano line on the microKEY. Play it intentionally slightly behind the beat — Dilla's key programming is always rushing or dragging. Record at 1/8 quantize (not 1/16) so there's room for feel.",
      "Don't try to play exactly with the drums. Let your microKEY performance have its own timing. The push-pull between the 'drunk' drums and a slightly different-feeling keys part is the magic.",
      "Use the microKEY's velocity sensitivity to play very lightly — ghost notes on keys. Load The Gentleman (Rhodes sound). Play a 3-note melody at maximum subtlety. Dilla's melodies are whispers.",
    ],
  },

  // ─── TIMBALAND ──────────────────────────────────────────────────────────────
  {
    id: "timbaland",
    name: "Timbaland",
    realName: "Timothy Zachery Mosley",
    era: "1994 – 2014",
    origin: "Virginia Beach, VA",
    color: "#3b82f6",
    tags: ["Syncopated", "Electronic", "Rhythmic", "Virginia"],
    signatureArtists: ["Missy Elliott", "Aaliyah", "Jay-Z", "Justin Timberlake", "Nelly Furtado"],
    bpmRange: [90, 110],
    swingRange: [50, 56],
    tagline: "The Talking Drum",
    bio: "Timbaland brought an electronic, almost tribal percussive language to hip hop and R&B. His patterns are more complex than any other producer in this list — syncopated kicks that land in impossible places, talking drum patterns that ARE the melody, hi-hat rolls that function as ornaments rather than timekeepers. His beats feel like they're speaking, not just playing time.",
    styleMarkers: [
      "Kick hits in 4-6 syncopated positions per bar — often on the 'e' and 'ah' of beats",
      "Talking drum or electronic perc serves as melodic content, not just rhythm",
      "Hi-hat rolls and 32nd-note bursts used as ornaments at phrase ends",
      "Heavy bass drop that follows the kick rhythmically (not just root notes)",
      "Unusual time signatures or implied polyrhythm within 4/4",
      "Layered percussion — 4-6 perc sounds running simultaneously",
    ],
    drumPhilosophy: "The drums are not just time — they're a conversation. The kick talks, the snare answers, the percussion adds words. Every percussive hit should have intention behind it, not just fill time.",
    samplePhilosophy: "Timbaland uses samples very differently from boom bap producers. He'll take a 2-second snippet — a vocal breath, a hi-hat from a 70s funk record — and use it as a rhythmic element. The sample becomes a drum, not a melody.",
    patterns: [
      {
        name: "Virginia Syncopation",
        bpm: 100,
        swing: 52,
        description: "The Timbaland signature. Kicks in 5 positions (0, 3, 8, 11, and the displacement on 12) create a conversation rather than a straight groove. The percussion pattern on steps 2, 6, 10, 14 is the 'talking drum' — a separate pitched perc element.",
        rows: [
          { label: "KICK",  steps: p([0, 3, 8, 11]) },
          { label: "CLAP",  steps: p([4, 12]) },
          { label: "PERC",  steps: p([2, 6, 10, 14]) },
          { label: "C.HAT", steps: p([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]) },
        ],
        maschineNote: "The Perc on steps 2, 6, 10, 14 should be a PITCHED percussion sound — not just a rhythm. Use a conga or talking drum sample from Chronicles, tune it to the key of your track. Velocity: step 2 = 80, step 6 = 65, step 10 = 80, step 14 = 70 (slight variation for the talking feel).",
      },
      {
        name: "Dirt Roll Pattern",
        bpm: 98,
        swing: 54,
        description: "The double-kick approach. Steps 4 and 5, plus 12 and 13, create a 'tumbling' kick effect. Combined with a snare only on beat 3 (step 8), this creates Timbaland's half-time/full-time hybrid.",
        rows: [
          { label: "KICK",  steps: p([0, 4, 5, 8, 12, 13]) },
          { label: "SNARE", steps: p([4, 12]) },
          { label: "PERC",  steps: p([3, 7, 11, 15]) },
          { label: "C.HAT", steps: p([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]) },
        ],
        maschineNote: "The kick doubles on steps 4+5 and 12+13 — these are the 'tumble' kicks. Step 4 at velocity 90, step 5 at velocity 70 (echo). Same for 12 (90) and 13 (70). The perc on steps 3, 7, 11, 15 should be a DIFFERENT sound from the main perc — use a shaker or metallic hit.",
      },
    ],
    kitPads: [
      { position: "A1", instrument: "Kick",        sound: "Deep, electronic kick",               pack: "Chronicles",       processing: "Pitch it to the key of the track — Timbaland tunes his kicks like an instrument. Add slight saturation for electronic feel.", color: "kick" },
      { position: "A2", instrument: "Clap/Snare",  sound: "Tight, punchy clap",                  pack: "Sticks Toolkit",   processing: "Hard-knee compression, no reverb or very short room (0.3s). Timbaland's snares are tight and present.", color: "snare" },
      { position: "A3", instrument: "Talking Drum", sound: "Pitched perc in key of track",       pack: "Chronicles",       processing: "Tune to track root note. Add Glide/Portamento if your instrument allows. This is a melodic element.", color: "perc" },
      { position: "A4", instrument: "Hi-hat 16ths", sound: "Tight electronic hi-hat",            pack: "Sticks Toolkit",   processing: "All 16 steps. Velocity: constant 70. Timbaland's hats are flat — the percussion does the dynamism.", color: "hat" },
      { position: "B1", instrument: "Perc Roll",   sound: "Fast percussive ornament",            pack: "Chronicles",       processing: "Used for fills — 32nd note bursts at end of phrases. Load with a fast attack, short decay.", color: "perc" },
      { position: "B2", instrument: "Sub Bass",    sound: "Deep 808 tuned to key",               pack: "Komplete 15",      processing: "Sidechain to kick. The bass should FOLLOW the kick rhythm, not just play root notes.", color: "synth" },
      { position: "B3", instrument: "Vocal Chop",  sound: "Rhythmic vocal snippet as perc",      pack: "Soulful Dreams",   processing: "Pitch shift ±3 semitones to get the right 'note'. This is the Timbaland trick — vocals as drums.", color: "synth" },
    ],
    techniques: [
      { title: "Pitch Your Drums to the Key", detail: "In Maschine, tune your kick -2 or -4 semitones from 0 to find the note that fits your track's key. Timbaland tunes every drum element to the key of the track — the kick bass, the talking drum, even the hi-hat pitch. When drums and melody are in key, the beat feels like one organism." },
      { title: "The Talking Drum Method", detail: "Load Chronicles conga or djembe sample on pad A3. In the Tune section: set the root note, then tune it to the track's tonic note. Program it on steps 2, 6, 10, 14 with varying velocities. This creates the Timbaland 'conversation' element — a pitched percussion melody that lives inside the rhythm." },
      { title: "Layered Percussion Stack", detail: "Timbaland uses 4-6 percussion sounds simultaneously. In your drum Group: A3 = talking drum, B1 = shaker, B2 = wood block, B3 = metallic perc. Each plays a different pattern. Program them in the step sequencer. The key is that NONE of these individual patterns are interesting — together, they create a dense, moving texture." },
      { title: "The Kick Roll (Steps 4+5 / 12+13)", detail: "Create a second kick pad at the same sound as A1 but at velocity 70% of the main kick. Program this 'echo kick' one step after every main kick hit. Steps 4 (main 100) → 5 (echo 70). Steps 12 (main 100) → 13 (echo 70). This is the tumbling kick effect that appears in 'Get Ur Freak On', 'Dirt Off Your Shoulder', and dozens of others." },
      { title: "Bass Follows Drums", detail: "Timbaland's bass lines are rhythmic, not just harmonic. Program the bass using the same rhythmic positions as the kick. If kick is on steps 0, 3, 8, 11 — bass plays root on 0, fifth on 3, root on 8, fourth on 11. Use the microKEY to record this pattern in real-time. The bass and kick should feel like one instrument." },
    ],
    packRecs: [
      { pack: "Chronicles", why: "Ethnic and world percussion sounds that provide the talking drum, djembe, and conga elements essential to Timbaland's rhythmic vocabulary. These are the 'melodic drums'." },
      { pack: "Sticks Toolkit", why: "For the tighter, electronic-leaning drum sounds. Choose the more processed, contemporary options — Timbaland's kits sound more modern than boom bap producers." },
      { pack: "Soulful Dreams Vol 1 & 2", why: "Vocal snippets and samples that can be repurposed as rhythmic elements (the Timbaland method). Look for short, rhythmic vocal phrases you can chop into 1-3 hit samples." },
    ],
    microKeyTips: [
      "Program the talking drum pattern (steps 2, 6, 10, 14) on the microKEY by playing a repeated note with your right hand while the drum loop plays. Record at 1/16 quantize. Vary the velocity by key pressure — the Korg microKEY is velocity sensitive.",
      "Play the bass line with your left hand while the drums play — root on beat 1, fifth on beat 2-and, root on beat 3, fourth on beat 4. Timbaland's bass lines are simple but rhythmically locked to the kick.",
      "Use the microKEY pitch bend to create glide effects on the talking drum. Bend up a minor third, then release on the beat. This is the 'talking' in talking drum.",
    ],
  },

  // ─── PETE ROCK ──────────────────────────────────────────────────────────────
  {
    id: "pete-rock",
    name: "Pete Rock",
    realName: "Peter Andrew Phillips",
    era: "1990 – present",
    origin: "Mount Vernon, NY",
    color: "#f59e0b",
    tags: ["Jazz Soul", "Soulful", "Bouncy", "East Coast"],
    signatureArtists: ["C.L. Smooth", "Common", "Big Pun", "Camp Lo", "Nas"],
    bpmRange: [85, 95],
    swingRange: [58, 66],
    tagline: "The Soul Brother of Hip Hop",
    bio: "Pete Rock combines the jazz crate-digging tradition with the hardest boom bap drums in New York. His beats are warm, bouncy, and soulful — jazz horns, soul vocal samples, and tight snare work that moves the body without trying. 'They Reminisce Over You' is the most emotionally affecting drum pattern in hip hop history.",
    styleMarkers: [
      "Jazz and soul sample sources — horns, vibes, piano, vocal harmonies",
      "Heavy swing (58-66%) — the MPC bounce",
      "Kick on beat 1 and the 'and' of beat 2 (step 5) — forward-leaning push",
      "Ghost snares at the end of each bar (steps 14-15) — the signature Pete Rock roll",
      "Open hat every 8 bars — used as punctuation, not groove",
      "Horn stabs as counter-melody to sample",
    ],
    drumPhilosophy: "The drums should make you BOUNCE. Not nod — BOUNCE. That's the test for my beats. If I don't feel my body moving while I'm programming them, they're not done.",
    samplePhilosophy: "Pete Rock is a jazz and soul crate digger. He looks for horn sections, vibraphone runs, and soulful vocal harmonies. He loops the warmest part of the record and frames it with bouncing drums. The emotion comes from the jazz — the drums make it hip hop.",
    patterns: [
      {
        name: "They Reminisce Bounce",
        bpm: 89,
        swing: 62,
        description: "The pattern behind the most legendary Pete Rock record. The kick on step 5 (the 'and' of beat 2) is the bouncing push that makes heads nod. Ghost snares on steps 14-15 set up the loop restart with elegance.",
        rows: [
          { label: "KICK",  steps: p([0, 5, 8]) },
          { label: "SNARE", steps: p([4, 12]) },
          { label: "GHOST", steps: p([14, 15]), isGhost: true },
          { label: "C.HAT", steps: p([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]) },
        ],
        maschineNote: "This pattern needs 62% swing. The kick on step 5 at velocity 75 (ghost kick — it pushes the groove forward but doesn't dominate). Main kicks (0 and 8) at velocity 105. Ghost snares (14-15): velocity 30 and 45. 16th note hats with heavy swing will feel like triplets at this swing setting.",
      },
      {
        name: "Mount Vernon Soul",
        bpm: 92,
        swing: 60,
        description: "Pete Rock's harder approach. The kick on step 7 (late beat 2) creates a funky, slightly late feel that pushes back against the snare. The open hat on step 9 appears once per 2 bars and punctuates the groove.",
        rows: [
          { label: "KICK",  steps: p([0, 7, 8]) },
          { label: "SNARE", steps: p([4, 12]) },
          { label: "GHOST", steps: p([14, 15]), isGhost: true },
          { label: "C.HAT", steps: p([0, 2, 4, 6, 8, 10, 12, 14]) },
          { label: "O.HAT", steps: p([9]) },
        ],
        maschineNote: "Open hat on step 9: use this pad only in BAR 2 of a 2-bar pattern (create a 2-bar pattern in Maschine, put the open hat only in the second bar). This creates the Pete Rock 'every other bar' punctuation. Choke Group with closed hat.",
      },
    ],
    kitPads: [
      { position: "A1", instrument: "Kick",          sound: "Warm, round boom bap kick",        pack: "Sticks Toolkit",   processing: "Low-pass at 120Hz + EQ boost at 80Hz. No click. Warm and round, not punchy.", color: "kick" },
      { position: "A2", instrument: "Snare",         sound: "Bouncy, mid-heavy snare",          pack: "Sticks Toolkit",   processing: "Boost at 200Hz +2dB (warmth). Small room reverb 0.5s, 15% wet. The Pete Rock snare has body, not snap.", color: "snare" },
      { position: "A3", instrument: "Ghost Snare",   sound: "Same snare, quarter velocity",     pack: "Sticks Toolkit",   processing: "Velocity 28-45. Steps 14-15 only. These are what separate Pete Rock from everyone else.", color: "snare" },
      { position: "A4", instrument: "Hi-hat 16ths",  sound: "Swinging, organic hat",            pack: "Sticks Toolkit",   processing: "Velocity variation: downbeats 88, offbeats 52. At 62% swing, these naturally feel like triplets.", color: "hat" },
      { position: "B1", instrument: "Open Hi-Hat",   sound: "Short, punctuating open hat",      pack: "Sticks Toolkit",   processing: "Choke Group 1. Velocity 65. Once per 2-bar loop only.", color: "hat" },
      { position: "B2", instrument: "Jazz Sample",   sound: "Horn section or vibraphone loop",  pack: "Soulful Dreams / Odyssey Soul", processing: "High-pass at 60Hz. Warm EQ: boost 400Hz +1dB, cut 6kHz -1dB. This is the soul of the beat.", color: "synth" },
      { position: "B3", instrument: "Horn Stab",     sound: "One-shot horn accent",             pack: "Revival (NI)",     processing: "Used as counter-melody to the main sample. Program rhythmically, not as a chord pad.", color: "synth" },
    ],
    techniques: [
      { title: "The Step-5 Bounce Kick", detail: "Add a kick hit on step 5 at velocity 70-80 (softer than your main kicks on 0 and 8). This 'and' of beat 2 kick is the defining element of Pete Rock's bounce. Without it, the pattern is just standard boom bap. With it, it bounces. Don't over-accent it — it should feel like a natural extension of beat 1's kick, not a new accent." },
      { title: "Ghost Roll Architecture", detail: "Create a dedicated Ghost Snare pad (A3) using the same snare sample. Program steps 14 and 15 ONLY — nothing else. Set step 14 to velocity 28, step 15 to velocity 42. These ghost notes anticipate the bar restart and create the 'rolling into the next bar' feel that is pure Pete Rock." },
      { title: "The Jazz Loop Treatment", detail: "Load any soul or jazz loop from Soulful Dreams or Odyssey Soul. Apply these EQ settings: High-pass 60Hz, boost 400Hz +1dB (paper-cone speaker warmth), cut 6kHz -1.5dB (remove the high-definition shimmer — you want the record-player feel). This is how Pete Rock treats his source material." },
      { title: "Horn Counter-Melody (microKEY)", detail: "After your main sample is locked, use the microKEY to add a one-shot horn element from Revival (NI). Play 2-3 short horn hits that land between the sample's main phrases. These should fill the gaps, not play with the sample. Think of it as the answer phrase in a jazz call-and-response." },
      { title: "Swing 62% — No Compromise", detail: "Pete Rock beats must run at 60-64% swing. Never below 58% (sounds too mechanical), never above 66% (starts sounding like Dilla). Set Group swing to 62% and program everything into this swing setting. The heavy swing is what creates the 'bounce' feel — it's a near-triplet subdivision." },
    ],
    packRecs: [
      { pack: "Soulful Dreams Vol 1 & 2", why: "Perfect source material for Pete Rock-style productions. The soul vocals and jazz-adjacent loops have the right warmth. Apply the warm EQ treatment described above." },
      { pack: "Odyssey Soul", why: "For Pete Rock's harder, more cinematic moments. The deeper loops suit tracks like 'Searching' or the more melancholic side of his catalog." },
      { pack: "Revival (NI)", why: "One-shot horn samples for counter-melodies. Pete Rock uses horns as both sample source AND as live-feeling one-shot fills over the main sample loop." },
    ],
    microKeyTips: [
      "Record horn-style counter-melodies using a brass patch from Revival (NI). Play short, staccato notes — 8th note duration maximum. Pete Rock's additions to his samples are accents, not sustained lines.",
      "Play the vibraphone patch from Komplete 15 using the microKEY to create a 4-note melodic phrase that fits between the sample's phrases. Record at 1/8 quantize. The vibraphone IS Pete Rock.",
      "Use your left hand to hold a chord (Cm, Fm, Abm — minor chord families) while your right hand plays the counter-melody. Record the full thing. Let the chord hold sustain through the full bar.",
    ],
  },

  // ─── KANYE WEST ─────────────────────────────────────────────────────────────
  {
    id: "kanye-west",
    name: "Kanye West",
    realName: "Kanye Omari West",
    era: "2000 – present",
    origin: "Chicago, IL",
    color: "#8b5cf6",
    tags: ["Soul Flip", "Melodic", "Emotional", "Cinematic"],
    signatureArtists: ["Jay-Z", "Nas", "Common", "Kid Cudi", "Frank Ocean", "Alicia Keys"],
    bpmRange: [84, 100],
    swingRange: [52, 60],
    tagline: "The Sped-Up Soul",
    bio: "Kanye West democratized soul sampling. Before him, soul samples were used by underground producers with deep crate knowledge. Kanye took the most recognizable, beloved soul records and sped them up into chipmunk-pitched loops that felt like emotional shortcuts — instant nostalgia that hit differently because you recognized the source. His early production is pure emotional genius.",
    styleMarkers: [
      "Sped-up soul vocals pitched up 3-7 semitones (the chipmunk soul signature)",
      "Kick on beat 1 and the 'and' of beat 2 or 3 — emotional forward push",
      "Rolling snare fills that launch the hook",
      "Orchestral strings and live instruments overlaid on programmed drums",
      "Heavy bass line that plays an actual melody, not just root notes",
      "Samples pitched to create unexpected key centers",
    ],
    drumPhilosophy: "The drums should feel like they're carrying you somewhere. Not just keeping time — GOING somewhere. Every 8 bars should feel like it's building toward something.",
    samplePhilosophy: "Speed it up. Pitch it up. Find the emotional core of the record and extract it. The chipmunk pitch isn't a gimmick — it creates emotional distance from the original that lets you feel something new. You recognize the song, but the new context changes what it means.",
    patterns: [
      {
        name: "Late Registration Soul",
        bpm: 87,
        swing: 56,
        description: "The College Dropout / Late Registration era. Busy 16th-note hats, kick on the 'and' of beat 1 (step 3 — the Kanye early-kick) create urgency. The emotional push comes from the interaction between the displaced kick and the heavily-swung hats.",
        rows: [
          { label: "KICK",  steps: p([0, 3, 8]) },
          { label: "SNARE", steps: p([4, 12]) },
          { label: "C.HAT", steps: p([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]) },
        ],
        maschineNote: "Kick on step 3 is the Kanye 'early kick' — it lands just after the 'and' of beat 1. Velocity 75 (softer than the downbeat kick at velocity 105). 16th hats: alternate between 80 (on-beat) and 55 (off-beat). Swing: 56%. The soul sample should be pitched up +4 semitones.",
      },
      {
        name: "Graduation Stadium",
        bpm: 92,
        swing: 54,
        description: "The bigger, more stadium-filling Kanye pattern. The kick on step 11 adds the syncopated momentum that pushes into the hook. Clap doubles snare for mass.",
        rows: [
          { label: "KICK",  steps: p([0, 5, 8, 11]) },
          { label: "SNARE", steps: p([4, 12]) },
          { label: "CLAP",  steps: p([4, 12]) },
          { label: "C.HAT", steps: p([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]) },
        ],
        maschineNote: "Clap (pad link with snare) for hook sections only — use Scene muting in Maschine to activate the clap Group only in Hook scenes. The extra step-11 kick at velocity 80 adds urgency. This pattern exists for the chorus; use the simpler version (no step-11 kick) for verses.",
      },
    ],
    kitPads: [
      { position: "A1", instrument: "Kick",       sound: "Round, warm kick",                   pack: "Sticks Toolkit",   processing: "Low-pass at 200Hz. Boost 80Hz. Kanye kicks are WARM, not punchy. They support the melody.", color: "kick" },
      { position: "A2", instrument: "Snare",      sound: "Crisp snare with short tail",        pack: "Sticks Toolkit",   processing: "No long reverb — the sample provides the atmosphere. Short room 0.4s, 15% wet.", color: "snare" },
      { position: "A3", instrument: "Clap",       sound: "Wide stereo clap",                   pack: "Sticks Toolkit",   processing: "Set stereo width to 100%. Pad Link to A2 for hook sections. The wide clap makes verses and hooks feel different.", color: "clap" },
      { position: "A4", instrument: "Hi-hat 16ths", sound: "Tight, bright 16th-note hat",     pack: "Sticks Toolkit",   processing: "All 16 steps. Alternate velocity: 80 down/55 up. Boost 8kHz +1.5dB for brightness.", color: "hat" },
      { position: "B1", instrument: "Soul Sample", sound: "Sped-up soul vocal, +4 semitones", pack: "Soulful Dreams Vol 1&2", processing: "Pitch up +4 semitones in Maschine's Tune section. Slightly increase playback speed (105%). This is the chipmunk soul technique.", color: "synth" },
      { position: "B2", instrument: "String Pad", sound: "Orchestral strings layer",          pack: "Revival (NI)",      processing: "Play sustained chords on microKEY. Long attack (0.3s) so strings swell in. Wide stereo.", color: "synth" },
      { position: "B3", instrument: "Bass Melody", sound: "Bass that plays a melody",         pack: "Komplete 15",      processing: "Program bass notes that follow the chord changes. NOT just root notes — play the 3rd or 5th to create movement.", color: "synth" },
    ],
    techniques: [
      { title: "The Chipmunk Soul Pitch", detail: "Load any soul vocal loop from Soulful Dreams Vol 1 or 2. In Maschine's Tune section: set Tune to +4 semitones (try +3 to +7 depending on the sample). Set the playback speed to 105% (slightly faster). Play the sample. If it sounds like an old soul record being played at the wrong speed — that's exactly right. That's the Kanye texture." },
      { title: "Early Kick (Step 3)", detail: "The Kanye signature kick is on step 3 — the 'e' of beat 1. Program your main kick on step 0 (beat 1). Then add a second, softer kick on step 3 (velocity 70-80). This creates the feeling that beat 1 is 'leaning into' beat 2. It's a subtle but essential part of the early Kanye feel." },
      { title: "Orchestral Overlay (microKEY)", detail: "After your sample is locked: load Revival (NI) strings on a new Group. Connect microKEY. Arm record. Play the chord progression in LONG sustains — hold each chord for 4 full beats. Record for 8 bars. Then listen: the strings should feel like they were always there. If they feel added, reduce their volume by -3dB." },
      { title: "Bass Melody, Not Bass Line", detail: "Kanye's bass in 'Gold Digger', 'Gone', 'Heard Em Say' — it plays a melody, not a bass line. Load a bass instrument (Massive X or Scarbee from Komplete 15). Program it to play the 3rd and 5th of each chord, not just the root. Use the microKEY to play and record a 2-bar phrase that moves through the chord changes." },
      { title: "Scene-Based Hook Expansion", detail: "Create Scene 1 (verse) and Scene 2 (hook) in Maschine. In Scene 1: no clap, no strings, simple drums. In Scene 2: add clap pad link, activate strings Group, add extra percussion. The transition from Scene 1 to Scene 2 should feel like a wall of sound arriving — that's the Kanye hook drop." },
    ],
    packRecs: [
      { pack: "Soulful Dreams Vol 1 & 2", why: "Primary sample source for chipmunk soul productions. The vocal soul loops are ideal for pitching up. Apply +4 semitones and 105% speed — you'll recognize the Kanye texture immediately." },
      { pack: "Revival (NI)", why: "Orchestral strings and brass for the Late Registration and Graduation-era sound. Essential for adding cinematic scale to soul-flipped productions." },
      { pack: "Odyssey Soul", why: "For Kanye's harder productions (the Nas and Jay-Z collaborative work, 'Gone', '18th Letter' era). The darker loops suit his less obviously emotional material." },
    ],
    microKeyTips: [
      "Record string chord sustains over the drum pattern. Play Cm → Fm → Bb → Ebmaj progressions. Hold each chord for 4 beats (a full bar). The strings should bloom slowly — set the attack envelope to 0.3 seconds so they swell in rather than cutting in.",
      "Play the bass melody with your right hand while tracking the strings concept. Use two Groups simultaneously in Maschine — both receiving microKEY input. Record each Group separately: first the bass, then the strings.",
      "Play a simple 3-note counter-melody (using piano from Komplete 15) that mirrors the emotional peak of the soul sample. This is the Kanye keyboard technique — identify where the sample's most emotional moment is, and mirror it with a piano line.",
    ],
  },

  // ─── THE ALCHEMIST ──────────────────────────────────────────────────────────
  {
    id: "alchemist",
    name: "The Alchemist",
    realName: "Alan Daniel Maman",
    era: "2000 – present",
    origin: "Beverly Hills / New York",
    color: "#ef4444",
    tags: ["Dark Cinematic", "Vintage", "Abstract", "Sample-Driven"],
    signatureArtists: ["Mobb Deep", "Nas", "Vince Staples", "Freddie Gibbs", "Boldy James", "Action Bronson"],
    bpmRange: [84, 94],
    swingRange: [56, 62],
    tagline: "The Cinematic Darkness",
    bio: "The Alchemist operates in the space between boom bap and film score. His beats feel like they belong in crime movies — dark vintage textures, minimal drum movement, samples that seem to stare at you. He's a student of Premier and Havoc but takes the darkness further into abstract territory. His recent work (Freddie Gibbs, Boldy James) strips the drums down to their absolute minimum.",
    styleMarkers: [
      "Very minimal kick patterns — often just beat 1 and beat 3",
      "Rimshot rather than snare on many patterns — adds abstract quality",
      "Quarter-note or 8th-note hats at low velocity — backdrop, not groove",
      "Dark, vintage, almost degraded-sounding samples",
      "Cinematic piano or strings from unexpected source records",
      "Long sustain on everything — reverb tails longer than the dry sounds",
    ],
    drumPhilosophy: "If you can remove a drum hit and the beat still makes sense, take it out. Keep removing until it breaks. Then put back one hit. That's the right amount.",
    samplePhilosophy: "The Alchemist finds records nobody was looking for — obscure European library music, international folk recordings, horror movie scores. He puts these dark, unusual textures under rap verses where they create a psychological pressure that conventional soul samples can't.",
    patterns: [
      {
        name: "Dark Vintage Minimal",
        bpm: 91,
        swing: 58,
        description: "The Alchemist baseline. Kick only on 1 and 3. Rimshot instead of snare (more abstract, less conventional). Quarter-note hats at barely-audible velocity. The sample does all the emotional work.",
        rows: [
          { label: "KICK",   steps: p([0, 8]) },
          { label: "RIM",    steps: p([4, 12]) },
          { label: "C.HAT",  steps: p([0, 4, 8, 12]) },
          { label: "GHOST",  steps: p([6, 14]), isGhost: true },
        ],
        maschineNote: "Rimshot instead of snare — more ambiguous, less assertive. Quarter-note hats at velocity 45 flat — they're barely there. Ghost hits on steps 6 and 14 at velocity 30: these are the only 'movement' in the pattern. Everything else is absolute minimalism.",
      },
      {
        name: "Gibbs Meets Queensbridge",
        bpm: 89,
        swing: 60,
        description: "The Alchemist taking Havoc's influence and making it even more cinematic. The kick on step 10 (the Havoc displacement) with quiet 8th-note hats. Rimshot accent on step 9 adds an unexpected moment of rhythmic tension.",
        rows: [
          { label: "KICK",   steps: p([0, 10]) },
          { label: "RIM",    steps: p([4, 9, 12]) },
          { label: "C.HAT",  steps: p([0, 2, 4, 6, 8, 10, 12, 14]) },
        ],
        maschineNote: "Rimshot on step 9 (the 'and' of beat 3) is the Alchemist tension hit. Velocity 65 — mid-range, not loud, not quiet. The kick at step 10 is a ghost kick: velocity 70. The pattern has 3 rimshots — this creates an unusual accent pattern that the rapper has to navigate around.",
      },
    ],
    kitPads: [
      { position: "A1", instrument: "Kick",       sound: "Deep, minimal kick",               pack: "Sticks Toolkit",   processing: "No attack click — remove it with EQ cut above 2kHz. Just thump. Low-pass at 100Hz.", color: "kick" },
      { position: "A2", instrument: "Rimshot",    sound: "Tight, dry rimshot",               pack: "Sticks Toolkit",   processing: "No reverb at all. Completely dry. The abstract quality comes from the absence of space.", color: "snare" },
      { position: "A3", instrument: "Closed Hat", sound: "Dark, muffled hi-hat",             pack: "Sticks Toolkit",   processing: "Velocity 45 flat. Low-pass at 6kHz — remove all brightness. These hats should sound like they're under blankets.", color: "hat" },
      { position: "A4", instrument: "Ghost Hit",  sound: "Same rim at minimal velocity",     pack: "Sticks Toolkit",   processing: "Steps 6 and 14 only, velocity 28-35. These are subconscious groove elements.", color: "snare" },
      { position: "B1", instrument: "Vintage Sample", sound: "Dark obscure source record",  pack: "Odyssey Soul",     processing: "Low-pass at 7kHz, high-pass at 100Hz, -3dB from 300-600Hz. Make it sound like it's coming from another room.", color: "synth" },
      { position: "B2", instrument: "Vinyl Noise", sound: "Continuous crackle texture",     pack: "Weekday (free)",   processing: "Velocity 20. Loop continuously. This is the 'dust' that holds the Alchemist sound together.", color: "perc" },
    ],
    techniques: [
      { title: "The Rimshot Substitution", detail: "Replace your snare pad with a rimshot or sidestick. In Sticks Toolkit, find a dry rimshot sound. Apply NO reverb — completely dry processing. This creates The Alchemist's abstract quality. A reverbed snare sounds like a drum kit. A dry rimshot sounds like something else, something more cinematic." },
      { title: "Maximum Sample Darkness", detail: "Load a sample from Odyssey Soul. Apply: Low-pass filter at 7kHz. High-pass at 100Hz. EQ dip: -3dB from 300-600Hz (removes the 'present' midrange). Reduce stereo width to 20%. The sample should sound like it's coming from across a dark room. Alchemist beats feel distant and claustrophobic simultaneously." },
      { title: "The Minimalism Audit", detail: "After building your pattern, run the Alchemist Audit: Remove the hats. Does the beat survive? If yes — you don't need hats. Put them back but lower velocity by 50%. Remove the ghost hits. Does the beat survive? Keep the ghost hits — they were borderline. The Alchemist's beats pass this test because they have so little to begin with." },
      { title: "Long Reverb Tails as Space", detail: "Add a long reverb to the KICK (not the snare, not the hat — the kick). Set decay to 1.2 seconds, mix to 15%. The kick's reverb tail fills the space between hits and creates the underground, deep-in-a-cave ambience that defines Alchemist productions." },
    ],
    packRecs: [
      { pack: "Odyssey Soul", why: "The darkest, most cinematic loops in your collection. The Alchemist's source material sounds like this — obscure, atmospheric, and tonally ambiguous. Apply the darkness EQ treatment." },
      { pack: "Weekday (free)", why: "Vinyl crackle and noise samples at near-inaudible levels underneath everything. The Alchemist's texture relies on this subliminal grit.", free: true },
      { pack: "Soulful Dreams Vol 1 & 2", why: "The slower, more melancholic loops — not the upbeat soul. Look for loops in minor keys with sustained chords and limited melody." },
    ],
    microKeyTips: [
      "The Alchemist rarely adds live keys on top of his samples — the sample IS the harmonic content. If you use the microKEY: play ONE sustained note (the root) of the sample's key on a dark string or piano patch. Hold it for 8 bars. That's it.",
      "Use the microKEY's mod wheel as a filter cutoff controller. Map the mod wheel to a low-pass filter on the sample Group. Slowly open and close the filter over 16 bars. This adds movement without adding harmonic content.",
    ],
  },

  // ─── METRO BOOMIN ───────────────────────────────────────────────────────────
  {
    id: "metro-boomin",
    name: "Metro Boomin",
    realName: "Leland Tyler Wayne",
    era: "2012 – present",
    origin: "St. Louis, MO",
    color: "#6366f1",
    tags: ["Modern", "Dark Trap", "Half-Time", "808-Driven"],
    signatureArtists: ["Future", "21 Savage", "Drake", "Travis Scott", "Young Thug"],
    bpmRange: [130, 150],
    swingRange: [50, 53],
    tagline: "If Young Metro Don't Trust You",
    bio: "Metro Boomin made dark trap the dominant sound of hip hop. His formula is deceptively simple: half-time snare, atmospheric intro, dark melodic loop, and 808s that carry the entire emotional weight. But within that simplicity lives enormous craft — the 808 melodies ARE the beat, the arrangement is cinematic, and every element is chosen with precision.",
    styleMarkers: [
      "Half-time snare: only on beat 3 (bar 1) and beat 1 (bar 2) — very sparse",
      "808 sub bass that SLIDES between notes — melody in the low end",
      "Dark atmospheric intro (8-16 bars before drums drop)",
      "Snare rolls and hi-hat triplets as ornaments at phrase ends",
      "Melodic loop from piano, bell, or tuned perc (not soul samples — synth sources)",
      "Stark dynamic contrast: drop sections vs. full sections",
    ],
    drumPhilosophy: "The 808 IS the drum. Everything else just frames it. The snare says 'here's the pocket' — the 808 fills that pocket with melody and emotion. Less drums = more 808 room.",
    samplePhilosophy: "Metro uses melodic loops from piano rolls, dark synth patches, and found sound — not traditional soul records. The melody loop comes from Kontakt libraries, synthesis, or licensed melodic sample packs. It needs to be atmospheric and dark, not soulful and warm.",
    patterns: [
      {
        name: "Without Warning",
        bpm: 140,
        swing: 51,
        description: "Classic Metro trap pattern. At 140 BPM, the snare on step 8 (beat 3) creates a half-time feel — the body hears the snare as 'beat 2' in a slow 70 BPM groove. The kick fills are on steps 4+5 and 12+13 (the trap double-kick roll).",
        rows: [
          { label: "KICK",   steps: p([0, 4, 5, 8, 12, 13]) },
          { label: "SNARE",  steps: p([8]) },
          { label: "C.HAT",  steps: p([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]) },
          { label: "O.HAT",  steps: p([12, 13, 14]) },
        ],
        maschineNote: "Kick rolls: steps 4+5 and 12+13. Main kick (step 0 and 8) at velocity 110. Roll kicks (4, 12) at velocity 85, (5, 13) at velocity 65. The velocity cascade creates the trap 'roll' feel. Open hats on 12-13-14 at end of bar is the Metro triplet ornament.",
      },
      {
        name: "Slow Metro (Modern Hip Hop)",
        bpm: 76,
        swing: 52,
        description: "Metro's slower, hip hop mode. At 76 BPM, the pattern runs at half the trap tempo. The 808 bass line carries the melody. Hi-hat rolls on steps 12-14 are the signature ornament.",
        rows: [
          { label: "KICK",   steps: p([0, 9]) },
          { label: "SNARE",  steps: p([8]) },
          { label: "C.HAT",  steps: p([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]) },
          { label: "ROLL",   steps: p([12, 13, 14]) },
        ],
        maschineNote: "The 808 bass line should be programmed in the piano roll as a MELODY — not just root notes. Slide between notes (enable portamento/glide on the 808 instrument). The kick at step 9 (the 'e' of beat 3) is the Metro 'stutter kick' — velocity 75.",
      },
    ],
    kitPads: [
      { position: "A1", instrument: "808 Sub Bass", sound: "Deep 808 tuned to key, with slide", pack: "Komplete 15 (Massive X)", processing: "Enable portamento (glide time: 60ms). Tune to root note. Program melody in piano roll. Sidechain compress to kick at 6:1.", color: "kick" },
      { position: "A2", instrument: "Kick",         sound: "Hard trap kick — short, punchy",   pack: "Sticks Toolkit",   processing: "Hard clip the transient. Attack Master: fast. Keep the kick SHORT — it needs to make room for the 808.", color: "kick" },
      { position: "A3", instrument: "Snare",        sound: "Crisp trap snare or clap",          pack: "Sticks Toolkit",   processing: "Reverb: large room, 1.5s, 30% wet. The Metro snare hangs in the air. Gate reverb if needed.", color: "snare" },
      { position: "A4", instrument: "Closed Hi-Hat", sound: "Tight trap hat — all 16ths",      pack: "Sticks Toolkit",   processing: "All 16 steps at velocity 65 flat. No variation. Trap hats are mechanical.", color: "hat" },
      { position: "B1", instrument: "Open Hat Roll", sound: "Short roll at end of phrase",     pack: "Sticks Toolkit",   processing: "Steps 12-13-14 at velocities 80, 90, 100 (crescendo). These are the Metro triplet ornaments.", color: "hat" },
      { position: "B2", instrument: "Dark Melody",  sound: "Piano or bell atmospheric loop",   pack: "Bunny (Cymatics)", processing: "Low-pass at 12kHz, subtle reverb 1.5s. The melody should feel like it's behind glass.", color: "synth" },
    ],
    techniques: [
      { title: "The 808 Melody (Most Important)", detail: "Create a new Group for the 808. Load Massive X (Komplete 15) — use the 808 preset or create a sine wave with long release. Enable Portamento (glide). In the piano roll: program a melody using the root, minor 3rd, 5th, and minor 7th of your key. Slide between notes. This melody IS the beat. Every other element supports it." },
      { title: "The Atmospheric Intro (8 bars no drums)", detail: "Create Scene 1 in Maschine with ONLY the melody Group active. No kick, no snare, no hi-hats — just the dark atmospheric loop and 808 pad. Run this for 8 bars. Then Scene 2 drops everything simultaneously. The contrast is the impact. Metro uses this on virtually every beat." },
      { title: "The Half-Time Snare", detail: "At 140 BPM, program the snare ONLY on step 8 (one snare per bar). This creates a half-time feel — the brain perceives the tempo as 70 BPM even though the hi-hats run at 140 BPM. This is the defining trap technique. Never put a snare on step 4 in Metro-style production." },
      { title: "Kick Roll Cascade", detail: "For the trap double-kick roll: Program kick on steps 4 and 5 (velocity 85 and 65). Also on steps 12 and 13. The cascading velocity (higher → lower) creates the 'roll' feeling. Also add this single-step kick at step 0 (velocity 110) as the downbeat anchor. These 5 kick hits form the Metro trap kick pattern." },
      { title: "Triplet Hat Ornament", detail: "At end of every phrase (bar 4, bar 8, etc.): activate the open hat pad on steps 12, 13, 14 at velocities 80, 90, 100 (building crescendo). This is the Metro phrase-end ornament. It signals 'something is about to happen' at the arrangement level." },
    ],
    packRecs: [
      { pack: "Bunny (Cymatics)", why: "The dark, atmospheric pads from Bunny are perfect for Metro's melodic loop layer. Apply a low-pass filter at 12kHz and add reverb. These pads sound like they're behind glass — exactly right." },
      { pack: "Chronicles", why: "Contemporary perc elements for the trap drum texture — the more processed, modern-sounding options. Not the organic perc." },
      { pack: "Sticks Toolkit", why: "The clean, processed trap-adjacent drums. Choose the tightest, most punchy kick and snare options. Metro's drums are precise instruments, not organic sounds." },
    ],
    microKeyTips: [
      "Play the 808 melody line on the microKEY with portamento enabled. Slide from note to note instead of playing staccato — the glide between notes is the signature 808 melody technique. Record at 1/8 note quantize.",
      "Play the atmospheric loop pad with your left hand while recording. Hold each chord for 4 beats. The pads should just sit there — don't add movement, don't change notes. The 808 provides all the melody.",
      "Use the microKEY pitch bend to create the 808 slide at transition points. Hold a note, then bend up a semitone at the bar boundary. This creates the emotional peak of the Metro 808 melody.",
    ],
  },

  // ─── 9TH WONDER ─────────────────────────────────────────────────────────────
  {
    id: "9th-wonder",
    name: "9th Wonder",
    realName: "Patrick Douthit",
    era: "2001 – present",
    origin: "Winston-Salem, NC",
    color: "#f59e0b",
    tags: ["Soul", "Pure Sample", "Warm", "Lo-Fi"],
    signatureArtists: ["Little Brother", "Jay-Z", "Kendrick Lamar", "Drake", "Destiny's Child"],
    bpmRange: [82, 94],
    swingRange: [58, 66],
    tagline: "Pure Soul, Pure Drums",
    bio: "9th Wonder is the purest soul sample producer alive. No tricks, no gimmicks — he finds the most emotionally resonant section of a soul record, loops it, and places the drums underneath it with such perfect timing that the drums feel like they were always part of the original recording. His approach is deceptively simple: the warmth and humanity in his beats comes from the records, not from studio manipulation.",
    styleMarkers: [
      "Simple kick/snare patterns — almost always straight 1+3 with swing applied",
      "Soul and R&B sample sources — the richest, most human recordings",
      "Heavy swing (58-66%) that makes the soul sample feel even more organic",
      "Very limited additional elements — one sample, one drum pattern, minimal additions",
      "Warm, lo-fi sample processing — high-pass at 80Hz maximum, no bright EQ",
      "Ghost notes on the snare that mirror the original drummer's feel from the sample",
    ],
    drumPhilosophy: "The soul record already has the best drums in the world — the original drummer who played on that session. My job is to find where those drums would have been, and be there. The simpler the better.",
    samplePhilosophy: "9th Wonder listens to thousands of records before he finds the one. He's looking for the PERFECT 4 bars — the moment in the song where the feeling is at its peak, before the lyric changes. That peak moment becomes the loop.",
    patterns: [
      {
        name: "Soul Bubble",
        bpm: 88,
        swing: 62,
        description: "Pure 9th Wonder. Kick only on 1 and 3. Standard 2+4 snare. Warm 8th-note hats at heavy swing. Simple as it gets, but at 62% swing it bounces like a beach ball.",
        rows: [
          { label: "KICK",  steps: p([0, 8]) },
          { label: "SNARE", steps: p([4, 12]) },
          { label: "C.HAT", steps: p([0, 2, 4, 6, 8, 10, 12, 14]) },
        ],
        maschineNote: "Swing: 62%. This is the ONLY variation from the most basic possible pattern. The swing does all the work. Kick at velocity 100. Snare at velocity 95. Hats: downbeats at 85, upbeats at 50. The soul sample provides everything else — harmony, melody, texture, emotion.",
      },
      {
        name: "Carolina Bounce",
        bpm: 91,
        swing: 60,
        description: "The slightly harder 9th Wonder. The kick on step 5 adds the Pete Rock-influenced push. Ghost snares on steps 14-15 set up the loop beautifully. At 60% swing, this pattern dances.",
        rows: [
          { label: "KICK",  steps: p([0, 5, 8]) },
          { label: "SNARE", steps: p([4, 12]) },
          { label: "GHOST", steps: p([14, 15]), isGhost: true },
          { label: "C.HAT", steps: p([0, 2, 4, 6, 8, 10, 12, 14]) },
        ],
        maschineNote: "Ghost snares on 14-15 at velocity 28 and 42. These are the signature that separates 9th Wonder from basic producers who use only kick+snare. The ghost roll sets up the loop. Kick on step 5 at velocity 70 (the bounce kick). Swing: 60%.",
      },
    ],
    kitPads: [
      { position: "A1", instrument: "Kick",        sound: "Warm, round boom bap kick",       pack: "Sticks Toolkit",   processing: "No click — remove with EQ cut above 1.5kHz. Boost 80Hz. This is a paper cone speaker kick, not a modern kick.", color: "kick" },
      { position: "A2", instrument: "Snare",       sound: "Full-bodied warm snare",          pack: "Sticks Toolkit",   processing: "No reverb (or very minimal 0.3s). The soul sample provides the atmosphere. The snare is just time.", color: "snare" },
      { position: "A3", instrument: "Ghost Snare", sound: "Same snare, barely audible",      pack: "Sticks Toolkit",   processing: "Steps 14-15 only. Velocity 25-40. Pure groove enhancement.", color: "snare" },
      { position: "A4", instrument: "Hi-hat 8ths", sound: "Dark, organic hat",               pack: "Sticks Toolkit",   processing: "Velocity: downbeats 85, upbeats 50. High-pass at 2kHz — remove brightness. These are warm, dusty hats.", color: "hat" },
      { position: "B1", instrument: "Soul Sample", sound: "Peak-emotional 4-bar soul loop",  pack: "Soulful Dreams Vol 1&2", processing: "Minimal EQ: high-pass at 80Hz only. Do not over-process. The original mastering of the record IS the sound.", color: "synth" },
    ],
    techniques: [
      { title: "Find the Perfect 4 Bars", detail: "Before touching Maschine, listen to your Soulful Dreams samples in full. Don't chop immediately — listen through the whole track. Find the ONE section where you feel the emotion peak. That 4-bar section is your loop. 9th Wonder would spend hours finding this before programming a single drum hit." },
      { title: "Swing First, Always", detail: "Set your Group swing to 62% before any note is programmed. Program the kick (0 and 8), then the snare (4 and 12), then the hats (8th notes). Listen. At 62% swing, even this simple pattern should already feel like it's breathing. If it doesn't feel right yet, check your swing setting — it's probably too low." },
      { title: "The Minimal Processing Rule", detail: "For the sample: apply ONLY a high-pass filter at 80Hz (remove sub-rumble). Nothing else. No further EQ, no saturation, no reverb, no stereo width adjustments. 9th Wonder's beats sound like the record was played through good speakers in a real room. Over-processing destroys this quality." },
      { title: "Ghost Note Study", detail: "If the soul sample you're using has real drums in it (many soul records do), listen closely to where the original drummer places ghost notes. Identify those rhythmic positions and ADD your own ghost snares there. This creates a subliminal connection between your programmed drums and the original recording — the listener senses they're related without knowing why." },
    ],
    packRecs: [
      { pack: "Soulful Dreams Vol 1 & 2", why: "This is the primary source. The soul loops capture the same warmth and humanity that 9th Wonder searches for in vinyl. Use the minimal EQ treatment — high-pass at 80Hz only." },
      { pack: "Odyssey Soul", why: "For the darker, more melancholic 9th Wonder tracks. The more atmospheric loops here suit his less upbeat work (his contributions to Kendrick Lamar's early catalog)." },
      { pack: "Sticks Toolkit", why: "The organic, raw drum sounds. Choose the warmest, least processed options. 9th Wonder's kit sounds like drums from a 70s recording session, not a modern sample pack." },
    ],
    microKeyTips: [
      "9th Wonder rarely adds melodic elements beyond the sample. If you use the microKEY: play a single root note on a warm Rhodes patch (The Gentleman from Komplete 15) and hold it for the entire 4-bar loop. One note. That's all. The sample does everything else.",
      "Use the microKEY to play the exact chord from the sample — find the key, play the tonic chord very lightly at velocity 30-40. This fills any frequency gap between the sample and drums without adding new harmonic content.",
    ],
  },

  // ─── PHARRELL WILLIAMS ───────────────────────────────────────────────────────
  {
    id: "pharrell",
    name: "Pharrell Williams",
    realName: "Pharrell Lanscilo Williams",
    era: "1998 – present",
    origin: "Virginia Beach, VA",
    color: "#06b6d4",
    tags: ["Melodic", "Live-Feel", "Light Touch", "The Neptunes"],
    signatureArtists: ["Jay-Z", "Clipse", "Snoop Dogg", "Usher", "Beyoncé", "Nelly"],
    bpmRange: [88, 108],
    swingRange: [52, 58],
    tagline: "The Drums ARE the Melody",
    bio: "Pharrell and The Neptunes created a drum sound unlike anything that preceded them. Spare, clicky, minimalist patterns with live-recorded drum fills, synthesized melody that blurred the line between hip hop and funk, and a tonal sensibility borrowed from Prince and Stevie Wonder. His beats feel like they exist in sunlight — nothing dark, everything melodic, every element chosen for maximum groove efficiency.",
    styleMarkers: [
      "Drum machine patterns that sound like a live drummer — precise but human",
      "Very few drum elements — kick, clap/snare, and ONE simple hat pattern",
      "Live drums used for fills and transitions (not programmed — played in)",
      "High-pitched, synth-based melodic elements that double as percussion",
      "Samples VERY rarely used — almost all-original production",
      "The snare sits high in the mix and is usually a clap or very processed snare",
    ],
    drumPhilosophy: "I want the drums to make you smile before you even know why. The hit of the kick should feel like a tap on the shoulder. The snare should feel like a wink.",
    samplePhilosophy: "Pharrell almost never uses samples — everything is original. He plays the melody, he programs the rhythm, he records live instruments. The Neptunes sound is almost entirely constructed from scratch in real-time with live musicians and synthesizers.",
    patterns: [
      {
        name: "Neptunes Click",
        bpm: 98,
        swing: 54,
        description: "The classic Neptunes sparse groove. The 'click' kick (step 3) is the signature element — a metallic, synth-adjacent kick hit that appears between the downbeat and the snare. The quarter-note snare is unusually high in the mix.",
        rows: [
          { label: "KICK",  steps: p([0, 3, 8]) },
          { label: "CLAP",  steps: p([4, 12]) },
          { label: "C.HAT", steps: p([0, 4, 8, 12]) },
        ],
        maschineNote: "The 'click' kick on step 3 should be a DIFFERENT kick from the main kick — shorter, higher-pitched, more metallic. Load a synth-adjacent kick or use the main kick pitched up +5 semitones. Velocity 75. Quarter-note hats at velocity 60. The clap (not snare) sits loud in the mix at velocity 105.",
      },
      {
        name: "Happy Bounce",
        bpm: 102,
        swing: 56,
        description: "The sunnier, more melodic Pharrell approach. The kick runs on 1, 3, AND the 'and' of 4 (step 14). This unusual late-4 kick creates the bounce that made 'Happy' feel like the world's most uplifting drum pattern.",
        rows: [
          { label: "KICK",  steps: p([0, 8, 14]) },
          { label: "CLAP",  steps: p([4, 12]) },
          { label: "C.HAT", steps: p([0, 2, 4, 6, 8, 10, 12, 14]) },
          { label: "OPEN",  steps: p([10]) },
        ],
        maschineNote: "The kick on step 14 (the 'and' of beat 4) sets up beat 1 of the next bar with massive anticipation. Velocity 80. Open hat on step 10 (the 'and' of beat 3): Choke Group with closed hat. At 8ths swing 56%, this pattern bounces in a way that's physically irresistible.",
      },
    ],
    kitPads: [
      { position: "A1", instrument: "Main Kick",   sound: "Round, melodic kick — tuned to key", pack: "Sticks Toolkit",  processing: "Pitch the kick to the tonic note of your track. Boost 80Hz. The Neptunes kick is a MUSICAL note.", color: "kick" },
      { position: "A2", instrument: "Click Kick",  sound: "Short, metallic secondary kick",     pack: "Sticks Toolkit",  processing: "Same kick as A1 but pitched up +5 semitones. Shorter decay. Used for step-3 ghost kick.", color: "kick" },
      { position: "A3", instrument: "Clap",        sound: "Processed clap — the signature hit",  pack: "Sticks Toolkit",  processing: "Stereo width 80%. No reverb. The clap sits AT THE FRONT of the mix — louder than everything. This is intentional.", color: "clap" },
      { position: "A4", instrument: "Closed Hat",  sound: "Bright, present hat",                pack: "Sticks Toolkit",  processing: "High-pass at 5kHz only. Velocity variation: downbeats 85, upbeats 55. Bright and present, not buried.", color: "hat" },
      { position: "B1", instrument: "Open Hat",    sound: "Short open hat",                     pack: "Sticks Toolkit",  processing: "Choke Group with A4. Appears once per 2 bars. Velocity 70.", color: "hat" },
      { position: "B2", instrument: "Synth Melody", sound: "High-pitched melodic synth element", pack: "Komplete 15",    processing: "This is the Neptunes signature melodic element — a bright, short synth hit. Play it rhythmically using the microKEY.", color: "synth" },
      { position: "B3", instrument: "Funk Bass",   sound: "Melodic funk bass line",             pack: "Komplete 15",    processing: "Play in real-time on microKEY. 4+ note melody per bar. Pharrell's bass lines move constantly.", color: "synth" },
    ],
    techniques: [
      { title: "Tune Your Kick to the Key", detail: "The Neptunes signature click is a PITCHED kick drum. In Maschine: load a round, melodic kick from Sticks Toolkit. Go to Tune section. Set the pitch so the kick's fundamental note matches the root note of your track. Now the kick IS a musical element, not just a time-keeper. This is the most important Neptunes technique." },
      { title: "The Clap at the Front", detail: "Pharrell's clap hits louder than the kick in many of his productions. Set the clap pad volume to 0dB. Set all other drum elements to -2 to -4dB. The clap should be the loudest element in the drum pattern. This is counterintuitive but it creates the Neptunes 'brightness' — the clap pulls you in." },
      { title: "Live Keys Melody (microKEY Essential)", detail: "Pharrell's productions are 80% live played. Record a synth melody line on the microKEY in real-time. Don't over-quantize — allow the natural feel. Play a 4-note melodic pattern that repeats every 2 bars. This melody should be simple enough to fit in the verse (where the rapper performs) and bright enough to define the sound." },
      { title: "Melodic Bass (microKEY)", detail: "Pharrell's bass lines play melodies, not bass lines. Load Scarbee Rickenbacker or Massive X bass patch. Connect microKEY. Play a continuous melodic line that moves through 4-6 notes per bar. Record in real-time. The Neptunes bass is almost never a simple root-fifth pattern — it's an active melodic instrument." },
      { title: "Minimal Kit, Maximum Groove", detail: "Restrict yourself: kick, clap, one hat. That's 3 elements total. This is the Neptunes constraint. With this limitation, you cannot hide behind complexity — the groove has to be in the feel, the swing, and the interaction between these 3 elements. Add a 4th element only after the 3-element pattern already dances on its own." },
    ],
    packRecs: [
      { pack: "Bunny (Cymatics)", why: "Bright, melodic pad elements that suit the Neptunes aesthetic. Use as the melodic background — bright, present, and functional without being intrusive." },
      { pack: "Sticks Toolkit", why: "For the tightest, cleanest drum sounds. Choose the most present and bright options — the Neptunes drums cut through clearly. No vintage or lo-fi choices." },
      { pack: "Chronicles", why: "Synth and electronic perc elements that create the Neptunes melodic percussion layer. The more synth-adjacent sounds are what Pharrell actually uses." },
    ],
    microKeyTips: [
      "Play the main melodic theme on the microKEY using a bright synth patch from Komplete 15. Use a staccato touch — each note short and percussive, not sustained. Pharrell's melodies feel like they're being plucked, not held. Record at 1/16 quantize.",
      "Play bass with your left hand while the drum loop runs. Move constantly — at minimum 4 different notes per bar. The bass should be as melodically interesting as the top line. Record both on the same pass by routing two Groups to microKEY input.",
      "Use the pitch bend on the microKEY to add funk guitar-style bends to your melodic lines. Bend up a whole step, then release immediately. This creates the Prince/Stevie Wonder influenced flavor that defines Pharrell's melodic sensibility.",
    ],
  },
];
