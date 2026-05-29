import type { Genre } from "./patterns";

export type SampleIdea = {
  pack: string;
  packUrl: string;
  free: boolean;
  sampleType: "clean-loop" | "chop" | "chop-or-clean" | "texture";
  lookFor: string;
  treatment: string;
};

export type BassStep = {
  step: number;
  note: string;
  velocity: number;
};

export type BassPattern = {
  name: string;
  key: string;
  description: string;
  steps: BassStep[];
  pluginSuggestion: string;
  microKeyTip: string;
  variation: string;
};

export type MelodyIdea = {
  name: string;
  key: string;
  scaleNotes: string;
  sequence: string;
  sequenceDescription: string;
  microKeyTip: string;
  variation: string;
};

export type GenreMelodyRecs = {
  suggestedKeys: string[];
  microKeySetup: string;
  samples: SampleIdea[];
  bassPatterns: BassPattern[];
  melodies: MelodyIdea[];
};

export const melodyRecommendations: Record<Genre, GenreMelodyRecs> = {
  "boom-bap": {
    suggestedKeys: ["A minor", "D minor", "G minor", "C minor", "F minor"],
    microKeySetup:
      "In Maschine software: go to File > Preferences > MIDI. Enable your Korg microKEY as MIDI input device. In your bass/melody Group: hold the REC button while playing the microKEY to record directly into the step sequencer. For live recording with swing feel: enable the metronome (SHIFT + PLAY) and record 2 bars in a loop until it feels right.",
    samples: [
      {
        pack: "Soulful Dreams Vol 1 & 2",
        packUrl: "https://cymatics.fm",
        free: false,
        sampleType: "chop-or-clean",
        lookFor:
          "Piano and organ loops in the 86–94 BPM range. Navigate to the minor-key folder — look for anything labeled 'Am', 'Dm', or 'Gm'. The 'piano pocket' loops (where kick and bass naturally lock into the sample) are the gold. Find bars 3–4 of any loop — that's where the groove lands.",
        treatment:
          "Option A (clean): load the 2-bar pocket section onto a pad, set to One-Shot, trigger on Step 0. Option B (chop): slice on the chord change and the turnaround hit — gives you a stab and a long section to alternate between.",
      },
      {
        pack: "Revival (NI Expansion)",
        packUrl: "https://www.native-instruments.com/en/products/maschine/expansions/revival/",
        free: false,
        sampleType: "chop",
        lookFor:
          "The gospel organ and brass breakdown sections. In the Revival browser inside Maschine, navigate to 'Loops > Rhythmic' — find any loop with a sparse arrangement (organ or piano only, no full band). A single 2-beat chord hit from the breakdown section becomes the most powerful stab you can use.",
        treatment:
          "Chop the chord hit as a 1-beat or 2-beat slice. Place as a stutter chop (Steps 12–14) in your pattern. Apply the boom bap lo-fi stack: Saturator (Tape 25%) → Lo-Fi (12-bit) → EQ (hi-shelf -4dB at 10kHz).",
      },
      {
        pack: "Odyssey Soul Sample Pack",
        packUrl: "https://cymatics.fm",
        free: false,
        sampleType: "clean-loop",
        lookFor:
          "Contemporary neo soul piano or Rhodes loops — the 'clean' melodic sections without the drums. Any loop where you can clearly hear the chord quality (minor 7th, minor 9th). These are designed to be used as-is. Match BPM to your pattern before loading.",
        treatment:
          "Use completely clean — no lo-fi processing. Just EQ the low end below 80Hz to leave space for your sub kick. Add Raum in Grounded mode (0.4s, 15% wet) to place it in a room. This sample IS the melody — let the drums serve it.",
      },
      {
        pack: "Chronicles",
        packUrl: "https://cymatics.fm",
        free: false,
        sampleType: "chop-or-clean",
        lookFor:
          "Hip hop melodic loops at 88–95 BPM. Look for anything with a piano or guitar element alongside the drum groove. The chord loops in Chronicles are designed specifically for the sample-flip workflow — they already have the dirty, compressed character of a producer's beat.",
        treatment:
          "Use the 2-bar melodic loop clean OR chop the turnaround (last 2 beats of bar 2) as a separate stab trigger. No heavy processing needed — Chronicles samples are pre-processed. Just EQ the sub (high-pass at 60Hz) to make space for your kick.",
      },
      {
        pack: "Weekday (Cymatics)",
        packUrl: "https://cymatics.fm/products/weekday-free-sample-pack",
        free: true,
        sampleType: "texture",
        lookFor:
          "The lo-fi piano and electric piano elements. Do NOT use the full loops as primary — they're already processed heavily. Instead use a single 4-beat piano phrase as a secondary 'bed' layer underneath your main Soulful Dreams or Odyssey sample.",
        treatment:
          "Load onto a separate pad, set volume to -15dB below the main sample. The vinyl noise from Weekday is also useful — load it onto a pad and trigger on Step 0, let it run continuously as a textural hiss under the beat. No additional processing needed.",
      },
    ],
    bassPatterns: [
      {
        name: "Classic Minor Walk",
        key: "A minor",
        description:
          "The fundamental boom bap bass movement. Root on beat 1, 5th on the syncopated hit, 6th as the turnaround. Locks with a standard kick on Steps 0 and 8.",
        steps: [
          { step: 0, note: "A2", velocity: 100 },
          { step: 3, note: "E2", velocity: 65 },
          { step: 8, note: "F2", velocity: 90 },
          { step: 10, note: "E2", velocity: 70 },
          { step: 11, note: "D2", velocity: 55 },
        ],
        pluginSuggestion:
          "Load Massive X on a pad (Komplete 15). Choose a sub bass patch. Set Portamento to 30ms for smooth transitions. Alternatively: Scarbee Rickenbacker Bass (Kontakt) for a sampled acoustic feel.",
        microKeyTip:
          "In A minor on the microKEY: A is the white key. Play A (low octave), then count up 7 white keys to E. F is one white key above E. D is 3 white keys below E. Record while the pattern loops — don't worry about perfect timing, quantize after.",
        variation:
          "Move the Step 3 note from E2 to C2 (the minor 3rd) for a more soulful, less 'walking' feel. Or skip Step 11 entirely — the pattern gets more space.",
      },
      {
        name: "Deep Pocket Drone",
        key: "D minor",
        description:
          "Single-root bass that just locks to the kick. Minimal movement — the sample does all the harmonic work. Used by DJ Premier and Alchemist constantly.",
        steps: [
          { step: 0, note: "D2", velocity: 105 },
          { step: 8, note: "D2", velocity: 95 },
          { step: 6, note: "C2", velocity: 55 },
          { step: 14, note: "C2", velocity: 60 },
        ],
        pluginSuggestion:
          "Maschine Drumsynth > Kick Sub preset — tune it to D. OR Battery 4 > load a 'Sub Hit' sample and tune it. The drone bass should feel like a kick drum that holds a pitch, not an instrument.",
        microKeyTip:
          "Play only two keys on the microKEY: D (the low D) and C (one white key to the left). That's the entire bass line. Record just these two notes in the right positions. Simplicity is correct here.",
        variation:
          "Add A2 on Step 4 (the 5th of D minor) — now you have root–5th movement without losing the minimalist feel. Or move the C2 ghosts to Steps 5 and 13 for a slightly different push.",
      },
      {
        name: "Syncopated Bounce",
        key: "G minor",
        description:
          "The classic 'bounce' bass pattern. Kick and bass don't always land together — the bass pushes ahead of beat 3 on Step 7 to create the boom bap lean.",
        steps: [
          { step: 0, note: "G2", velocity: 100 },
          { step: 3, note: "D2", velocity: 70 },
          { step: 7, note: "Eb2", velocity: 80 },
          { step: 8, note: "G2", velocity: 90 },
          { step: 13, note: "F2", velocity: 65 },
        ],
        pluginSuggestion:
          "Massive X — Sub Bass patch, tuned to G. The Eb note (minor 6th) on Step 7 is the color note — it should be slightly quieter than the root hits. In Massive X, slight Portamento (20ms) will smooth the transition.",
        microKeyTip:
          "G minor on microKEY: G (white), D (white, 7 white keys up), Eb (black key, one above D), F (white, 3 above D). Record at half tempo (45 BPM if your pattern is 90 BPM) to get the timing right, then set back to 90 BPM.",
        variation:
          "Replace Eb2 on Step 7 with F2 (the minor 7th) for a jazzy, less tense movement. Or remove the Step 13 tail entirely — makes the bass feel more sparse and powerful.",
      },
      {
        name: "Chromatic Lament",
        key: "D minor",
        description:
          "A falling chromatic bass line — each note descends one half-step. This is the sound of grief: nowhere to go but down, nothing to hold onto. No rhythmic surprise, no syncopation. It just falls. The most devastating bass pattern when played beneath a sparse hi-hat pattern.",
        steps: [
          { step: 0, note: "D2", velocity: 105 },
          { step: 4, note: "C#2", velocity: 90 },
          { step: 8, note: "C2", velocity: 95 },
          { step: 12, note: "B1", velocity: 80 },
          { step: 15, note: "Bb1", velocity: 65 },
        ],
        pluginSuggestion:
          "Massive X — Sub Bass patch with decay set to 1.5 bars so each note blooms into the next. The ringing transition between C#2 and C2 is where the grief lives — let them overlap slightly. Scarbee Rickenbacker (Kontakt, Fingered mode) also devastates on this pattern.",
        microKeyTip:
          "On microKEY: D (white), C# (black — immediately left of D), C (white), B (white, one left), Bb (black, below B). Place your ring finger on D. The chromatic descent fits naturally under four fingers sliding left. Ring on D, middle on C#, index on C, then reach down for B and Bb. Record slowly at 40 BPM. Feel each half-step as a small surrender.",
        variation:
          "Stop at C2 on Step 8 — refuse to resolve down to B1. Leave the bar hanging on C2. The unresolved half-step above D is one of the most heartbreaking sounds in music — the note that wants to go somewhere but doesn't.",
      },
      {
        name: "Suspended Ache",
        key: "A minor",
        description:
          "Built on the suspended 4th interval (D over A). The sus4 chord has no third — a sound of pure waiting, something that needs to resolve but never fully does. This bass creates yearning by refusing satisfaction. The most patient heartbreak in boom bap.",
        steps: [
          { step: 0, note: "A2", velocity: 100 },
          { step: 5, note: "D2", velocity: 80 },
          { step: 8, note: "A2", velocity: 95 },
          { step: 11, note: "E2", velocity: 70 },
          { step: 14, note: "D2", velocity: 85 },
        ],
        pluginSuggestion:
          "The Gentleman (Kontakt) played in low register — the D note (suspended 4th) held for a full beat has enormous aching warmth on a recorded piano. A cello patch (Spitfire LABS) also works powerfully: the sustained sus4 on bowed strings is the definitive orchestral expression of yearning.",
        microKeyTip:
          "Only three notes on microKEY: A (white), D (white — 4 white keys below A in the lower octave), E (white — one above D). Position your thumb on D and your pinky reaching up to A. The D is the emotional center — when you land on it at Step 5, hold it slightly longer than the grid says. That suspension is the feeling.",
        variation:
          "Never fully resolve: end the bar on D2 at Step 14. The pattern loops back to A2 at Step 0 but the ear still hears the D ringing. Over 2 bars this creates a perpetually unresolved cycle — the bass equivalent of a question that keeps being asked.",
      },
      {
        name: "Phrygian Soul",
        key: "E Phrygian",
        description:
          "Uses the flat 2nd interval (F natural above E) — the defining color of the Phrygian mode. This half-step above the root is the most emotionally compressed interval in Western music: ancient, ceremonial, grieving. Found in flamenco, Qawwali, and the darkest corners of boom bap.",
        steps: [
          { step: 0, note: "E2", velocity: 105 },
          { step: 4, note: "F2", velocity: 90 },
          { step: 8, note: "E2", velocity: 100 },
          { step: 12, note: "D2", velocity: 75 },
          { step: 14, note: "F2", velocity: 65 },
        ],
        pluginSuggestion:
          "Massive X on E with long decay (2 bars). The F2 (just a half-step above root E) should feel like pressure — boost 55–70Hz slightly on the F2 velocity channel. The Phrygian flat 2 is most powerful on a sustained, sub-rich instrument: not plucked, but held and resonant.",
        microKeyTip:
          "E and F on microKEY are immediately adjacent white keys — no black key between them, pure proximity. Put your index on E and your middle on F. Feel how close they are. That physical closeness mirrors the emotional claustrophobia of the half-step. Play E firmly, then lean slightly right to touch F. Record these two notes first at 30 BPM. D is two white keys to the left of E.",
        variation:
          "Add C2 on Step 6 (the minor 6th of E) between the two E2 hits — creating E / F / C / E. This is the Andalusian cadence, the foundation of flamenco harmony. Or reduce to just two notes: E2 (Step 0) and F2 (Step 4). Two notes, maximum space, maximum grief.",
      },
    ],
    melodies: [
      {
        name: "Minor Pentatonic Hook",
        key: "A minor pentatonic",
        scaleNotes: "A  C  D  E  G",
        sequence: "A3  C4  D4  E4  D4  C4  A3  G3",
        sequenceDescription:
          "Ascend from A up to E, descend back to G. Play in half notes (one note every 2 steps). Very singable — works as a hook that listeners remember.",
        microKeyTip:
          "On the microKEY in A minor pentatonic: the 5 notes are A (white), C (white), D (white), E (white), G (white). All white keys. Start with your thumb on A below middle C. Play up to E, then come back down to G. Record as a 1-bar loop and let Maschine repeat it.",
        variation:
          "Start on E instead of A — you get a descending hook that feels like it's 'answering' a question. Or add a repeated note: A3 A3 C4 D4 E4 — the doubled note creates a stutter feel.",
      },
      {
        name: "Jazz Minor Line",
        key: "D minor (Dorian)",
        scaleNotes: "D  E  F  G  A  B  C",
        sequence: "D4  C4  A3  G3  E3  F3  D3",
        sequenceDescription:
          "Descending line from D through the Dorian mode. The B natural (instead of Bb) gives it the jazz inflection. One note per beat — slow, deliberate, melodic.",
        microKeyTip:
          "D Dorian uses the same notes as C major — all white keys, starting on D. On the microKEY: start above middle C, play down: D C A G E F D. The F note sounds especially soulful when you linger on it slightly longer than the others.",
        variation:
          "Insert a Bb3 between C4 and A3 — this adds a chromatic passing tone and makes the line sound more sophisticated. Or repeat the top D4 at the start: D4 D4 C4 A3 — the doubled root creates emphasis.",
      },
      {
        name: "Gospel Chord Stab (microKEY Chords)",
        key: "C minor",
        scaleNotes: "C  Eb  G  Bb  D",
        sequence: "Cm9 chord — C+Eb+G+Bb together",
        sequenceDescription:
          "A single 4-note chord hit, triggered every 2 bars as a stab. Gospel-influenced — the Bb and D together over the minor chord creates the gospel color.",
        microKeyTip:
          "Cm9 on microKEY: hold C (white), Eb (black, one above D), G (white, 4 above Eb), Bb (black, 2 above A) simultaneously. This is a 4-finger stretch — use thumb on C, index on Eb, ring on G, pinky on Bb. Strike the chord firmly and let it ring 1 beat.",
        variation:
          "Remove the Bb from the chord for a simpler Cm (minor triad: C Eb G) — less complex, works well under busy samples. Or add the D an octave up (D4) to a second pad triggered simultaneously for the full Cm9 voicing spread across octaves.",
      },
      {
        name: "Phrygian Descent",
        key: "E Phrygian",
        scaleNotes: "E  F  G  A  B  C  D",
        sequence: "E4  F4  E4  D4  C4  B3  A3",
        sequenceDescription:
          "Start on E, touch the F immediately (the Phrygian flat 2 — a single half-step upward), then fall through the entire mode down to A. The F at the second note is the entire emotional content. Everything else is just the consequence of that one unbearable step. Play in quarter notes — no rush. Let each descent land with weight.",
        microKeyTip:
          "E Phrygian uses all white keys on the microKEY. Place your thumb on E. F is immediately to the right — no black key between them, pure adjacency. Play E then F: feel how small that interval is, how close those keys sit. Then the mode descends in white keys: E F G A B C D, all white, all natural, all falling. Record at 50 BPM in quarter notes. Load The Gentleman or Scarbee Mark I and hold sustain pedal throughout so notes ring into each other.",
        variation:
          "Start the descent on G after the E–F–E movement: E4 F4 G4 F4 E4 D4 C4. This adds a slight lift before the fall — the G–F–E movement creates a small rise that makes the eventual drop to C feel even more inevitable.",
      },
      {
        name: "Minor 6th Sigh",
        key: "A minor",
        scaleNotes: "A  C  D  E  F  G",
        sequence: "A4  F4  E4  D4  F4  E4  C4  A3",
        sequenceDescription:
          "Reaches up to F (the minor 6th of A minor — the most emotionally charged interval in this key) twice in the phrase, then falls to C and drops to the low A. The shape is a sigh: reaching up twice toward something, then releasing down. Played in 8th notes over one bar.",
        microKeyTip:
          "A minor scale on microKEY (no B): A, C, D, E, F, G — all white keys. Put your thumb on A. The F note is 5 white keys above A — find it before you record. On the microKEY, reaching pinky to F creates a natural stretch. That stretch IS the emotion. Practice A (thumb) to F (pinky) repeatedly until the reach feels natural and automatic. Then record from memory without looking at the keyboard.",
        variation:
          "Replace the second F4 with Ab4 (the black key between G and A). This single note change transforms A natural minor into A harmonic minor, adding the sharpened 6th. The Ab sounds almost operatically grief-stricken against the A minor context — a single black key can change an entire emotional register.",
      },
      {
        name: "Diminished Fall",
        key: "B diminished",
        scaleNotes: "B  D  F  Ab",
        sequence: "B4  Ab4  F4  D4  B3  Ab3",
        sequenceDescription:
          "Arpeggiate a diminished 7th chord downward through 2 octaves. Each note is exactly 3 half-steps below the last — this perfect symmetry is what makes diminished chords feel so unhinged. No tonal gravity, no clear home, no resolution. Pure harmonic suspension, played as descent.",
        microKeyTip:
          "Diminished 7th on microKEY: B (white), D (white), F (white), Ab (black — between G and A). Three white keys and one black key. For the descent: start with pinky on B (upper register), then Ab (reach for the black key — slightly above the white plane), F, D, B (lower register), Ab. The black key Ab interrupts the white-key flow like a bruise. Play it firmly, not hesitantly — a quiet bruise is just a smudge.",
        variation:
          "Start on D instead of B: D4 B3 Ab3 F3 D3. This is the D half-diminished chord (Dm7b5) — the chord in the opening of Beethoven's Moonlight Sonata. Or sustain each note for 2 full beats instead of 8th notes. The slower the descent, the more inevitable it feels.",
      },
    ],
  },

  "hip-hop": {
    suggestedKeys: ["G minor", "E minor", "C minor", "F minor", "B minor"],
    microKeySetup:
      "For hip hop bass lines with 808 slides: in Maschine, load Massive X on a pad. Enable Portamento in Massive X (the 'Port' knob, set 60–120ms). In the step sequencer, each step can have a different pitch — select a step, then use the pad's Tune parameter (+/- semitones) to set the note for that step. The microKEY records live MIDI into Maschine when REC is held — for 808 slides, play notes slowly and legato.",
    samples: [
      {
        pack: "Soulful Dreams Vol 2",
        packUrl: "https://cymatics.fm",
        free: false,
        sampleType: "chop-or-clean",
        lookFor:
          "Contemporary soul sections with guitar and keys combinations in the 95–105 BPM range. Look for loops with a more modern production feel — brighter, less dusty than Vol 1. Find any 2-bar section where the guitar and piano lock together rhythmically — this becomes a tight hip hop chop.",
        treatment:
          "Option A (chop): slice on beat 2 of bar 1 and beat 4 of bar 2 — you get a 2-beat stab and a 2-beat tail. Alternate between them in the step sequencer for a choppy, rhythmic feel. Option B (clean): use the whole 2-bar loop, sidechain it to the kick (5:1, 0ms attack, 80ms release) for a pumping hip hop sound.",
      },
      {
        pack: "Weekday (Cymatics)",
        packUrl: "https://cymatics.fm/products/weekday-free-sample-pack",
        free: true,
        sampleType: "clean-loop",
        lookFor:
          "The lo-fi electric piano and guitar elements in the 90–105 BPM range. Weekday's contemporary lo-fi texture works perfectly for modern hip hop production. Look for any phrase with a slight 'drift' or 'waver' to it — that's the tape saturation, and it sounds perfect over a tight hi-hat pattern.",
        treatment:
          "Use clean. Do not add more lo-fi plugins on top. Just EQ (high-pass at 50Hz, high-shelf -2dB at 12kHz) and apply light sidechain compression from the kick. The pre-processed texture is the point.",
      },
      {
        pack: "Bunny (Cymatics)",
        packUrl: "https://cymatics.fm",
        free: false,
        sampleType: "texture",
        lookFor:
          "The atmospheric pad and chord elements. Bunny's soft, airy character fills the space that a harder hip hop pattern leaves open. Find any pad or keyboard loop that has a slow chord change — ideally a 4-bar loop with just 2 chord positions.",
        treatment:
          "Load as a texture layer at -18dB. Add Raum in Bloom mode (1.2s decay, 30% wet) to spread it further. This layer should be felt as 'atmosphere' — not heard as a melody. Mute it and the beat will feel empty; that's how you know it's set correctly.",
      },
      {
        pack: "Odyssey Soul Sample Pack",
        packUrl: "https://cymatics.fm",
        free: false,
        sampleType: "chop-or-clean",
        lookFor:
          "Neo soul chord progressions that move between two or three chords. Find anything with a ii-V-i or i-VII-VI movement — these progressions have natural harmonic tension that complements hip hop patterns. Look for loops where the chord hits on beats 2 and 4 (alongside the snare).",
        treatment:
          "Chop approach: slice at each chord change. Place the first chord (Steps 0–7) and second chord (Steps 8–15) on different pads — now you can play them independently. Clean approach: use the full 2-bar loop and let it breathe over the entire drum pattern.",
      },
      {
        pack: "Chronicles",
        packUrl: "https://cymatics.fm",
        free: false,
        sampleType: "clean-loop",
        lookFor:
          "The melodic hip hop loops at 95–105 BPM. Chronicles loops are purpose-built for this genre — just find one that matches your key and BPM. The guitar loops in Chronicles have a rough, slightly distorted character that sits perfectly in modern hip hop.",
        treatment:
          "Use clean. Apply Guitar Rig 7's 'Tube Compressor' on the sample channel for extra warmth. Sidechain to kick at 4:1, 80ms release for the pumping feel. No further processing needed.",
      },
    ],
    bassPatterns: [
      {
        name: "808 Sub Slide",
        key: "G minor",
        description:
          "The modern hip hop bass movement. Two main root hits with a chromatic slide between them. The Portamento (glide) in Massive X handles the slide automatically — you just set the two note positions.",
        steps: [
          { step: 0, note: "G2", velocity: 110 },
          { step: 2, note: "G2", velocity: 80 },
          { step: 8, note: "D2", velocity: 105 },
          { step: 11, note: "C2", velocity: 75 },
          { step: 13, note: "Bb1", velocity: 70 },
        ],
        pluginSuggestion:
          "Massive X (Komplete 15) — choose 'Sub Bass' patch, set Portamento to 80ms, Mono mode ON. Tune each step's pitch via the Pad Tune parameter in the step sequencer. The Bb1 and C2 at the end of the bar slide into each other for the 808 glide effect.",
        microKeyTip:
          "G minor on microKEY: G (white), D (white, 7 white keys up), C (white, below D), Bb (black, below B). Set Maschine to record MIDI with Portamento ON. Play the notes slowly and legato — the glide between them creates the 808 character. Record at 45 BPM, then set back to full tempo.",
        variation:
          "Replace D2 on Step 8 with Eb2 (the minor 6th) — slightly darker, more menacing. Or add an extra G2 ghost on Step 6 (velocity 50) to create a quick stutter before Step 8.",
      },
      {
        name: "Syncopated Modern Bass",
        key: "E minor",
        description:
          "The forward-leaning hip hop bass. The note on Step 6 anticipates beat 3 — this is what creates the 'pushing' feel in modern hip hop bass lines.",
        steps: [
          { step: 0, note: "E2", velocity: 105 },
          { step: 3, note: "B1", velocity: 60 },
          { step: 6, note: "D2", velocity: 85 },
          { step: 8, note: "E2", velocity: 100 },
          { step: 14, note: "D2", velocity: 70 },
        ],
        pluginSuggestion:
          "Massive X tuned to E minor. The D note (minor 7th) appears twice — it's the color note of Em7. Keep the velocity on D2 (Step 6) higher than B1 (Step 3) — the syncopated hit should be felt, the ghost note should be heard only on headphones.",
        microKeyTip:
          "E minor on microKEY: E (white), B (white, 7 white keys up), D (white, 2 below E in the next octave). The hardest note to hit in time is Step 6 (the syncopation before beat 3). Practice that hit isolated first, then record the full bass line.",
        variation:
          "Remove Step 3 (B1) entirely — the pattern becomes simpler and leaves more space. Or replace B1 with C2 (a minor 6th substitution) for a jazzier, more unexpected bass color.",
      },
      {
        name: "Half-Time Minimal Bass",
        key: "C minor",
        description:
          "Two notes per bar. The extreme version of leaving space. Used in half-time hip hop patterns where the kick pattern carries most of the rhythmic interest.",
        steps: [
          { step: 0, note: "C2", velocity: 110 },
          { step: 8, note: "G2", velocity: 100 },
        ],
        pluginSuggestion:
          "Massive X or Drumsynth > Kick Sub (tuned to C and G respectively). Route through a separate bus with heavy compression (4:1, 0ms attack, 200ms release) — the bass should feel like a second kick drum that also plays a pitch.",
        microKeyTip:
          "Only two notes on the microKEY: C (middle C area, low octave) and G (7 white keys up from C). Play once, perfectly. Let the silence around them do the work. If your microKEY has aftertouch, use it on the G note for slight pitch modulation.",
        variation:
          "Add Bb1 on Step 14 (just before the pattern loops back to Step 0) — a single anticipatory note that makes the loop feel like it's 'about to launch'. Or add a quiet C3 (octave up) on Step 4 for a mid-register ping.",
      },
      {
        name: "Tritone Grief",
        key: "C minor",
        description:
          "Uses the tritone (Gb/F#) — the interval historically called 'diabolus in musica', the devil in music. Over a C minor root, the tritone creates maximum harmonic tension with zero resolution. This is dissonance weaponized as emotion. Found in the darkest trap and drill productions.",
        steps: [
          { step: 0, note: "C2", velocity: 110 },
          { step: 3, note: "Gb1", velocity: 70 },
          { step: 8, note: "C2", velocity: 105 },
          { step: 10, note: "Bb1", velocity: 75 },
          { step: 13, note: "Gb1", velocity: 65 },
        ],
        pluginSuggestion:
          "Massive X — 808 Sub patch, Portamento 40ms. The Gb1 (tritone) should be the quietest note dynamically but the most dissonant harmonically — use it as a ghost note (velocity 65–70) rather than a main hit. If using real 808s, tune the Gb exactly: 6 semitones down from C.",
        microKeyTip:
          "C minor with tritone on microKEY: C (white), Gb (black — exactly 6 semitones above C, between F and G). From C, count up 6 keys — both white and black — to find Gb. It should feel like you've gone too far, like you've overstepped. That wrongness is correct. The Bb is one black key below B (above A). Practice C–Gb as a two-note interval until it stops feeling dissonant and starts feeling inevitable.",
        variation:
          "Replace Gb1 with G1 (natural 5th — one half-step above Gb). The pattern becomes standard C minor root/5th: completely different emotional character. Play both versions back to back and listen to how much Gb changes everything. Then return to Gb — its wrongness will feel perfect.",
      },
      {
        name: "Minor 9th Reach",
        key: "G minor",
        description:
          "The minor 9th (A above G minor) creates yearning and distance — reaching for something just out of grasp. The 9th sits a full octave plus a whole step above the root, giving the bass a feeling of stretching beyond its natural range. A sad reaching motion, repeated.",
        steps: [
          { step: 0, note: "G1", velocity: 110 },
          { step: 4, note: "A2", velocity: 75 },
          { step: 6, note: "F2", velocity: 65 },
          { step: 8, note: "G2", velocity: 105 },
          { step: 12, note: "Eb2", velocity: 80 },
          { step: 14, note: "D2", velocity: 70 },
        ],
        pluginSuggestion:
          "Massive X with slow attack (20ms) so the A2 (the 9th) blooms slowly rather than hitting hard. Set Portamento to 60ms between G1 and A2 for a slide effect. The emotional weight is in the contrast: G1 deep and heavy, then A2 rises into the upper register — a voice reaching for something tender.",
        microKeyTip:
          "G minor on microKEY: G (white), A (white — one white key above G), F (white — one below G), Eb (black — between D and E), D (white). The A note is your 9th — just one white key higher than the root G. Play G then A and feel the upward step. That whole-tone reach (which feels much further than it looks) is the yearning. Record A2 lightly — barely touched, like something almost remembered.",
        variation:
          "Use Ab2 instead of A2 on Step 4 (the flat 9th — one half-step higher than the 7th). The flat 9 over G minor is even more anguished than the natural 9 — it's the most dissonant tension interval in jazz harmony, used to create maximum harmonic pressure before resolution.",
      },
      {
        name: "808 Chromatic Fall",
        key: "E minor",
        description:
          "An 808 pattern descending chromatically through 4 half-steps in one bar. The portamento (glide) between each half-step creates the weeping quality of a steel string bending into the next note. Modern hip hop's equivalent of a blues guitar cry — every note a slide downward.",
        steps: [
          { step: 0, note: "E2", velocity: 110 },
          { step: 4, note: "Eb2", velocity: 95 },
          { step: 8, note: "D2", velocity: 100 },
          { step: 12, note: "C#2", velocity: 85 },
        ],
        pluginSuggestion:
          "Massive X — 808 Sub with Portamento at 100ms so every half-step slides. Without portamento, these are just 4 separate notes. With portamento at 100ms, it becomes one continuous weeping descent. The glide between Eb2 and D2 is the emotional center — let it breathe. Output through a sub bus below 150Hz — no top end.",
        microKeyTip:
          "E chromatic fall on microKEY: E (white), Eb (black — immediately to the left of E), D (white, left of Eb), C# (black, left of D). Four notes, all adjacent, all falling left. Place your index on E and walk left: ring to Eb (black), middle to D, index to C#. The hand moves as a unit to the left — a literal descent on the keyboard that mirrors the sonic descent in the 808.",
        variation:
          "Extend two more steps: C2 and B1. This takes the chromatic fall from 4 half-steps to 6 — from E down to B, descending through E Phrygian. The longer the fall, the more inevitable the arrival. Use this extended version for 2-bar patterns.",
      },
    ],
    melodies: [
      {
        name: "Minor 7th Riff",
        key: "G minor",
        scaleNotes: "G  A  Bb  C  D  Eb  F",
        sequence: "G3  F3  D3  Bb3  A3  G3",
        sequenceDescription:
          "6-note descending-then-ascending phrase. The Bb (minor 3rd) and Eb (minor 6th) give it the dark hip hop character. Play the first 4 notes as 8th notes, then hold the last two as quarter notes.",
        microKeyTip:
          "G natural minor on microKEY: G (white), A (white), Bb (black), C (white), D (white), Eb (black), F (white). The two black keys (Bb and Eb) are the personality notes. Record with the keyboard near the middle of the microKEY for comfortable reach.",
        variation:
          "Replace Eb3 in the sequence with E3 (natural) — this creates a G Dorian feel, warmer and more melodic. Or play just the first 3 notes (G3 F3 D3) repeated — a simpler motif that's easier to build a track around.",
      },
      {
        name: "Pentatonic Climb",
        key: "E minor pentatonic",
        scaleNotes: "E  G  A  B  D",
        sequence: "E3  G3  A3  B3  D4  B3  A3  G3",
        sequenceDescription:
          "Ascending and descending pentatonic motion. Sits naturally over any Em chord or sample in E minor. Play as 8th notes — 8 notes in one bar. Feels like a guitar riff translated to keys.",
        microKeyTip:
          "All 5 pentatonic notes on microKEY: E (white), G (white), A (white), B (white), D (white). No black keys needed. Start at the low E, climb to the D above middle C, then come back down. This entire riff fits comfortably under one hand on the microKEY.",
        variation:
          "Add a bend effect by playing the note slightly sharp then immediately correct — in Maschine, you can automate this via the Tune knob on the pad. Or end the sequence on A3 instead of G3 for a different resolution feel.",
      },
      {
        name: "Chromatic Soul Hook",
        key: "C minor",
        scaleNotes: "C  Eb  G  Bb + chromatic pass F#",
        sequence: "C4  Eb4  F4  F#4  G4  Eb4  D4  C4",
        sequenceDescription:
          "A chromatic passing tone (F#, the tritone) appears between F and G — this is the 'unexpected' note that makes this melody stand out. It creates momentary tension that resolves beautifully to G.",
        microKeyTip:
          "C minor on microKEY: C (white), Eb (black, above D), F (white), F# (black, above F), G (white), D (white). The F# is the key note — it's a black key. Make sure you hit it clearly. This note is the 'secret ingredient' — without it the melody is ordinary.",
        variation:
          "Remove the F#4 to get a smoother, more R&B-appropriate version: C4 Eb4 F4 G4 Eb4 D4 C4. Or play the F#4 as a very short grace note leading into G4 — barely audible but still there.",
      },
      {
        name: "Dorian Longing",
        key: "D Dorian",
        scaleNotes: "D  E  F  G  A  B  C",
        sequence: "D4  B3  A3  G3  F3  G3  A3  B3",
        sequenceDescription:
          "Opens with D then immediately drops to B — the major 6th, the Dorian mode's defining note. The pattern descends through the mode then ascends back to B. The B natural (major 6th in a minor context) makes Dorian sound simultaneously sad and hopeful. Not grief — longing. Something almost resolved but suspended just short of arrival.",
        microKeyTip:
          "D Dorian uses all white keys (same notes as C major, starting from D). On microKEY, find D then B — B is 5 white keys up from D. Play D and B together as an interval first: hear the major 6th. It's bittersweet. The whole melody: D (thumb), jump to B (pinky, higher register), then descend A G F, then ascend G A B. The B is your emotional anchor — your hand should always know where it is. Record at 65 BPM, 8th notes, with The Gentleman (Kontakt).",
        variation:
          "Change the final note from B3 to Bb3 (one black key lower, between A and B). The Bb makes the scale pure natural minor — the longing quality of the major 6th disappears and pure sadness remains. Play both versions: B natural = bittersweet, Bb = simply bitter. Choose based on the vibe of your sample.",
      },
      {
        name: "Tritone Stab",
        key: "C minor",
        scaleNotes: "C  Eb  F#  G  Bb",
        sequence: "C4  G3  F#3  G3  Eb4  C4",
        sequenceDescription:
          "Visits F# (the tritone of C) briefly between G and G — the most dissonant chromatic movement possible in one measure. The F# is a passing tone: a flash of extreme tension before resolving to G. Two beats in and out of the devil in music. This is the harmonic equivalent of a held breath before impact.",
        microKeyTip:
          "C minor with tritone on microKEY: C (white), Eb (black), F# (black — between F and G), G (white), Bb (black). The F# is directly left of G — same black key cluster. Practice the G–F#–G movement: put your index on G, reach your ring finger to F# (one key left, black), back to G. The F# must be played with conviction — a passing tone played hesitantly sounds like a mistake; played firmly it sounds inevitable.",
        variation:
          "Replace F#3 with F3 (natural 4th). The line becomes C4 G3 F3 G3 Eb4 C4 — all diatonic C minor, no tritone. Compare: the diatonic version is smooth and predictable; the tritone version has a momentary wrongness that makes it memorable. Use the tritone in the hook where impact matters most.",
      },
      {
        name: "Phrygian Hook",
        key: "A Phrygian",
        scaleNotes: "A  Bb  C  D  E  F  G",
        sequence: "A4  Bb3  A4  G4  F4  E4",
        sequenceDescription:
          "Opens with A then drops to Bb (the Phrygian flat 2 — one half-step below the octave A) then back up to A before descending. This A→Bb→A is the heart of the phrase — a note that leans down then rights itself. The Phrygian half-step creates instant weight and ancient gravity. Each note after is just the consequence of that first lean.",
        microKeyTip:
          "A Phrygian on microKEY: A (white), Bb (black — immediately above A, one black key to the right). The Bb is the smallest possible interval from A: one half-step. Play A with your thumb, then reach over to Bb with your index finger. This is the Phrygian sound — the lean. The whole melody uses only white keys after Bb: G, F, E — all white, all falling. Record at 70 BPM. Every time you hear this pattern, the emotional weight comes from that first reach to Bb and back.",
        variation:
          "Slow down to half-notes (2 beats each): 6 notes × 2 beats = 12 beats = 3 bars. A 3-bar structure feels incomplete and uneven — perfect for creating unresolved suspense before a 4th bar. Or add a low sustained A as a drone beneath the entire phrase — the flat 2nd Bb moving above a static A root intensifies the Phrygian tension.",
      },
    ],
  },

  "rnb": {
    suggestedKeys: ["C minor", "Eb major", "F minor", "Ab major", "Bb major"],
    microKeySetup:
      "For R&B with the microKEY: set up a Kontakt instrument (The Gentleman or Scarbee Mark I) on one pad group and a bass (Massive X or Scarbee Rickenbacker) on another. In Maschine, hold SHIFT and press a Group button to solo that group's MIDI input — now the microKEY controls only that group. Record chords by playing them slowly while the pattern loops. After recording, slightly humanize the MIDI timing (8ms, not more) for a live feel.",
    samples: [
      {
        pack: "Soulful Dreams Vol 1",
        packUrl: "https://cymatics.fm",
        free: false,
        sampleType: "clean-loop",
        lookFor:
          "Smooth R&B chord loops in major or minor keys — specifically the Eb major or C minor loops. Look for anything described as 'smooth', 'slow jam', or 'contemporary'. The piano and Rhodes sections in Soulful Dreams Vol 1 are the best starting points for R&B. Find a 2-bar section where the chord sits mostly static with just a small movement on beat 4.",
        treatment:
          "Use completely clean — no lo-fi, no vinyl distortion, no saturation. Apply Raum in Bloom mode (1.5s decay, 40% wet) to float the sample in space. EQ: gentle low-mid dip at 350Hz (-2dB) to remove boxiness. This sample should feel like it's hovering above the drums.",
      },
      {
        pack: "Revival (NI Expansion)",
        packUrl: "https://www.native-instruments.com/en/products/maschine/expansions/revival/",
        free: false,
        sampleType: "clean-loop",
        lookFor:
          "The 'slow' and 'smooth' sections of Revival — the neo soul piano loops and the slow gospel progressions. Navigate in Maschine's Revival browser to 'Loops > Melodic > Slow'. The organ pads that sustain through chord changes are particularly powerful for R&B ballad feels.",
        treatment:
          "Use clean. Adjust the sample's pitch in Maschine's Tune section to match your bass note. Add Raum (Bloom mode) at 30% wet. For Velvet Lounge-style R&B: layer a short Scarbee Mark I chord (Kontakt) alongside the Revival loop — they'll blend into one cohesive sound.",
      },
      {
        pack: "Odyssey Soul Sample Pack",
        packUrl: "https://cymatics.fm",
        free: false,
        sampleType: "clean-loop",
        lookFor:
          "The contemporary R&B chord progressions. Odyssey Soul's strength is harmonic richness — look for anything with extended chords (9th, 11th, 13th chords). These sit under an R&B vocal space perfectly. Key target: any loop in Cm, Fm, or Ebmaj.",
        treatment:
          "Use completely clean. No chopping, no processing beyond EQ. These loops are designed to be your primary harmonic content. Trigger on Step 0, One-Shot mode, let ring through 2 bars. This is the sample that everything else serves.",
      },
      {
        pack: "Bunny (Cymatics)",
        packUrl: "https://cymatics.fm",
        free: false,
        sampleType: "texture",
        lookFor:
          "The ambient pad and soft chord elements. Bunny's dreamy, soft character is perfect for R&B background texture. Look for anything that has a slow chord change or a pad that sustains without rhythmic movement.",
        treatment:
          "Layer under the primary Odyssey or Soulful Dreams sample at -20dB. Add Raum in Shimmer mode (2.5s decay, 50% wet) — this creates the 'air' around the whole production. The Bunny layer should be completely inaudible on laptop speakers but present on headphones and studio monitors.",
      },
      {
        pack: "Weekday (Cymatics)",
        packUrl: "https://cymatics.fm/products/weekday-free-sample-pack",
        free: true,
        sampleType: "chop",
        lookFor:
          "The short piano and electric piano hits. Weekday has some single-chord hits (1–2 beats) that work beautifully as R&B stabs. Look for any 'keys' element that has a soft attack and natural decay — not the lo-fi loops, the individual hits.",
        treatment:
          "Chop the 1-beat chord hit. Place on Step 4 and Step 12 alongside your rimshot or clap — it fires with the snare. Apply Raum plate (0.8s, 25% wet) and a gentle Compressor (2:1, slow attack) to match it to the rest of the mix.",
      },
    ],
    bassPatterns: [
      {
        name: "Neo Soul Pocket",
        key: "C minor",
        description:
          "The most common R&B bass pattern. Root hit with a displaced mid-bar groove note and a chromatic approach to the root. The Step 5 note (G2) falls on the 'and' of beat 2 — that's the R&B pocket.",
        steps: [
          { step: 0, note: "C2", velocity: 95 },
          { step: 5, note: "G2", velocity: 75 },
          { step: 8, note: "C2", velocity: 90 },
          { step: 11, note: "Bb1", velocity: 65 },
          { step: 13, note: "Ab1", velocity: 55 },
        ],
        pluginSuggestion:
          "Scarbee Rickenbacker Bass (Kontakt, Komplete 15) for organic warmth — choose the 'Fingered' articulation. Or Massive X for a sub-heavy approach. The chromatic movement Ab1→C2 (Steps 13→0) should be played legato — in Kontakt, use legato mode for the Rickenbacker.",
        microKeyTip:
          "C minor on microKEY: C (white), G (above C, 7 white keys), Bb (black, 2 above A), Ab (black, above G). The hardest part is the Ab1 on Step 13 — it's a chromatic approach note that leads into Step 0. On the microKEY, position your hand so Ab is under your index finger and C is under your ring finger for a comfortable reach.",
        variation:
          "Remove Steps 11 and 13 (the chromatic tail) — the bass becomes a simple root/5th pattern that still grooves but leaves more space. Or replace Bb1 with A1 (natural) for a Cm/major 6th color that gives the line a more optimistic, Motown-style feel.",
      },
      {
        name: "Half-Time Soul Bass",
        key: "Eb major",
        description:
          "Only 4 notes per bar — designed for the half-time R&B snare feel where the snare lands only on beat 3. Maximum space between notes. The bass has to carry the whole groove.",
        steps: [
          { step: 0, note: "Eb2", velocity: 100 },
          { step: 7, note: "Bb2", velocity: 75 },
          { step: 8, note: "Eb2", velocity: 95 },
          { step: 14, note: "Db2", velocity: 65 },
        ],
        pluginSuggestion:
          "The Gentleman (Kontakt) played in the bass register — a piano bass note held for 2 beats has enormous warmth. Or Massive X with a long Sustain and Portamento at 50ms. The Db2 on Step 14 (the minor 7th of Eb) should sustain into Step 0 slightly — use a longer release envelope.",
        microKeyTip:
          "Eb major on microKEY: Eb (black, above D), Bb (black, above A), Db (black, above C). Three black keys form this entire bass line — it sits naturally under the right hand. Practice reaching from Eb to Db (one octave down) cleanly before recording.",
        variation:
          "Replace Db2 with C2 (the 6th of Eb major) for a brighter, Stevie Wonder-style bass inflection. Or add F2 on Step 5 (the 2nd degree) — this turns the pattern from 4 notes to 5 notes and adds more harmonic color.",
      },
      {
        name: "Funky R&B Pocket",
        key: "F minor",
        description:
          "Busier than the other two — more notes, more rhythmic. Used in R&B tracks with higher energy (90–95 BPM, danceable). The quick C3 on Step 4 is the 'pop' note — it accents beat 2 before the snare.",
        steps: [
          { step: 0, note: "F2", velocity: 105 },
          { step: 2, note: "F2", velocity: 65 },
          { step: 4, note: "C3", velocity: 80 },
          { step: 8, note: "F2", velocity: 100 },
          { step: 10, note: "Eb3", velocity: 75 },
          { step: 12, note: "C3", velocity: 85 },
        ],
        pluginSuggestion:
          "Scarbee Rickenbacker Bass — Fingered style. The repeated F2 on Steps 0 and 2 is a quick 'chick' — set the second F2 note at a short gate length (30% gate) so it cuts off quickly. The C3 and Eb3 in the upper register add presence that pokes through a dense R&B mix.",
        microKeyTip:
          "F minor on microKEY: F (white), C (white, 7 up), Eb (black, above D). The fast F2→F2 on Steps 0 and 2 requires two quick notes — play them staccato (short and detached). Record at half tempo (40 BPM) and let Maschine double the tempo after.",
        variation:
          "Remove the F2 on Step 2 and move C3 from Step 4 to Step 3 — this creates a more syncopated, less straight feel. Or lower Eb3 on Step 10 to Db3 (the minor 6th of F minor) for a darker, more soul-influenced movement.",
      },
      {
        name: "Soul Cry",
        key: "Bb minor",
        description:
          "Falls through all the dark intervals of Bb minor — root, minor 7th (Ab), flat 6th (Gb), 5th (F). The Gb (flat 6th) is the emotional crux: in Bb minor it sounds like crying. Each note is a step deeper into grief. This bass line is the harmonic equivalent of exhaling sorrow.",
        steps: [
          { step: 0, note: "Bb1", velocity: 105 },
          { step: 4, note: "Ab2", velocity: 80 },
          { step: 6, note: "Gb2", velocity: 75 },
          { step: 8, note: "Bb1", velocity: 100 },
          { step: 12, note: "F2", velocity: 85 },
          { step: 14, note: "Gb2", velocity: 70 },
        ],
        pluginSuggestion:
          "Scarbee Rickenbacker (Kontakt, Fingered mode) — the Gb (flat 6th) on a fretted bass has a slightly caught-in-the-throat quality that perfectly expresses its emotional weight. Alternatively: Massive X with 80ms portamento. The slide from Ab2 to Gb2 (Step 4→Step 6) creates a gentle downward glide that sounds like a sigh.",
        microKeyTip:
          "Bb minor on microKEY: Bb (black — above A), Ab (black — above G), Gb (black — above F), F (white). Three black keys and one white — this pattern lives almost entirely above the white key plane. Place your hand so Bb is under your ring, Ab under your middle, Gb under your index. The hand sits elevated, above the keyboard surface. That physical elevation mirrors the emotional register of Bb minor — something lifted but heavy.",
        variation:
          "Add Db2 on Step 3 (minor 3rd of Bb) between Bb1 and Ab2. The descent becomes Bb → Db → Ab → Gb → Bb → F → Gb — seven notes, more elaborate, more like a grieving voice that can't stop finding new words for the same feeling.",
      },
      {
        name: "Half-Step Yearning",
        key: "Eb minor",
        description:
          "Uses E natural (the Phrygian flat 2 of Eb minor — one half-step above the root) for the ancient, leaning quality of the Phrygian mode placed inside an R&B slow jam. The half-step creates a sound of the body leaning toward something it cannot reach.",
        steps: [
          { step: 0, note: "Eb2", velocity: 100 },
          { step: 5, note: "E2", velocity: 80 },
          { step: 8, note: "Eb2", velocity: 95 },
          { step: 12, note: "Bb1", velocity: 85 },
          { step: 15, note: "B1", velocity: 65 },
        ],
        pluginSuggestion:
          "Note: E natural is enharmonically Fb (the Phrygian flat 2 of Eb) and B natural is Cb (the flat 6 of Eb). Load Massive X tuned to Eb, using 'E2' and 'B1' in your MIDI sequence. With portamento at 50ms, the Eb→E movement sounds like a lean — the physical sensation of reaching for something just above you. Scarbee Mark I electric piano in the bass register also works with this lean quality.",
        microKeyTip:
          "Eb and E on microKEY are adjacent keys — Eb (black) then E (white), touching. Play Eb with your middle finger, E with your index: feel the lean from black to white, from the elevated black key surface down to the white key. That descent from black to white is the Phrygian lean — audible and physical at once. Bb is across the keyboard (above A); B is one white key above Bb.",
        variation:
          "Replace B1 on Step 15 with Bb1 (the natural 5th of Eb, one half-step below B). The Phrygian flat 2 (E natural) becomes the only chromatic tension; the ending resolves more smoothly. This is the R&B ballad version — same yearning in the middle, gentler landing at the end.",
      },
      {
        name: "Ballad Descent",
        key: "F minor",
        description:
          "Four notes, maximum space. F → Eb → Db → C — descending through the minor 7th, minor 6th, and 5th of F minor. This is the bass line for a slow R&B ballad: 72 BPM, one note every 4 steps, each one dropping slightly lower. The kind of pattern that only works when everything else is quiet.",
        steps: [
          { step: 0, note: "F2", velocity: 100 },
          { step: 6, note: "Eb2", velocity: 85 },
          { step: 10, note: "Db2", velocity: 90 },
          { step: 14, note: "C2", velocity: 80 },
        ],
        pluginSuggestion:
          "The Gentleman (Kontakt) — a recorded piano in the bass register has the warmth, weight, and natural decay that this pattern requires. Set each note to full gate length (100%) for maximum sustain. Scarbee Mark I works equally well — the slightly electric, buzzing decay adds melancholy to each sustained note. Do not use a synth sub for this pattern — it needs the organic character of recorded keys.",
        microKeyTip:
          "F minor ballad on microKEY: F (white), Eb (black — above D), Db (black — above C), C (white). The pattern falls through two black keys and arrives on a white key — the C is the one 'plain' moment after complex chromatic tones. Play each note with a slow, deliberate touch and no pedal: each note stands alone, isolated. Record at 36 BPM to get the ballad spacing right, then adjust to your target BPM afterward. Slow recording reveals whether you really mean each note.",
        variation:
          "Add F2 on Step 15 (just before the loop): F → Eb → Db → C → F. Returning to the root on the last step creates circular grief — the bass comes back where it started, having traveled through all those dark intervals only to arrive at the beginning again. This is the harmonic structure of acceptance.",
      },
    ],
    melodies: [
      {
        name: "Cm9 Chord Melody",
        key: "C minor 9",
        scaleNotes: "C  Eb  G  Bb  D",
        sequence: "C4  Eb4  G4  Bb4  G4  Eb4  D4  C4",
        sequenceDescription:
          "Arpeggiate the Cm9 chord from root to 9th and back. Each note is a separate 8th note (half a step in the sequencer). The D4 at the end (the 9th) is the special chord color — it gives the arpeggio that extended neo soul character.",
        microKeyTip:
          "Cm9 on microKEY: C (white), Eb (black), G (white), Bb (black), D (white). Set up The Gentleman (Kontakt) on a melody pad. Play the arpeggio with your right hand while holding the pedal (if your microKEY has a sustain pedal input) — the notes will ring into each other for a lush, piano-ballad feel.",
        variation:
          "Play just the top 4 notes of the arpeggio (G4 Bb4 G4 Eb4) — this keeps the upper voicing while dropping the lower notes for a thinner, more distant texture. Or play the entire sequence but start on Eb4 (the minor 3rd) — gives a more plaintive, emotional entry.",
      },
      {
        name: "Eb Major Gospel Line",
        key: "Eb major",
        scaleNotes: "Eb  F  G  Ab  Bb  C  D",
        sequence: "Bb3  Ab3  G3  Eb3  F3  G3  Bb3",
        sequenceDescription:
          "A descending major scale line that turns around and ascends to the octave Bb. The movement from Ab to G (a half step, the characteristic gospel movement in major keys) is the emotional core. Hold the final Bb3 for 2 beats.",
        microKeyTip:
          "Eb major on microKEY: Eb (black), F (white), G (white), Ab (black), Bb (black), C (white), D (white). Three black keys. The Ab→G movement (black to white, half step) is the key transition — practice it slowly before recording. Use The Gentleman or Scarbee Mark I in Kontakt for the gospel piano character.",
        variation:
          "Add a D4 above the final Bb3 — play Bb3 and D4 together as a Major 3rd interval for a sweeter, more contemporary feel. Or start on C4 (the 6th degree) instead of Bb3 — the line takes on a more sophisticated, jazz-inflected quality.",
      },
      {
        name: "Slow Jam Riff",
        key: "F minor",
        scaleNotes: "F  G  Ab  Bb  C  Db  Eb",
        sequence: "F3  Ab3  C4  Eb4  C4  Bb3  Ab3  F3",
        sequenceDescription:
          "Smooth ascending and descending movement through Fm7 chord tones. Each note is held slightly longer than strict timing (push the note's length to 125% in the event editor) for that legato, liquid R&B phrasing.",
        microKeyTip:
          "F minor on microKEY: F (white), Ab (black), C (white), Eb (black), Bb (black). The smooth 'liquid' feel comes from overlapping notes slightly — on the microKEY, press the next note just before fully releasing the previous one. Load Scarbee Mark I (Kontakt) with the 'Tremolo' articulation for the classic R&B electric piano feel.",
        variation:
          "Replace Eb4 with D4 (the major 7th, from F major) for a warmer, less minor quality — this is the Frankie Beverly / Maze approach. Or slow down: play the entire 8-note sequence over 2 bars instead of 1 bar — everything breathes twice as long.",
      },
      {
        name: "Lover's Lament",
        key: "Bb minor",
        scaleNotes: "Bb  Db  Eb  F  Gb  Ab",
        sequence: "Bb3  Gb3  F3  Eb3  Gb3  F3  Db3  Bb2",
        sequenceDescription:
          "The Gb (flat 6th of Bb minor) appears on the second note and returns on the fifth — it is the emotional center of this phrase. In Bb minor, the Gb sounds like the moment before tears arrive. The sequence descends through chord tones twice and lands on the low Bb — a complete fall from above. Played in 8th notes: one bar of descent, returning to silence.",
        microKeyTip:
          "Bb minor on microKEY: Bb (black — above A), Db (black — above C), Eb (black — above D), F (white), Gb (black — above F), Ab (black — above G). Five black keys and one white key. The melody lives almost entirely on black keys. Place your thumb on Bb. The Gb is 4 black keys to the left — count carefully before recording: Bb, Ab, Gb. Your index finger lands on Gb. Practice the Bb–Gb opening two-note interval until it feels natural. Load Scarbee Mark I (Kontakt, tremolo articulation) at 60 BPM.",
        variation:
          "End on Db3 instead of Bb2 — stay in the middle register and refuse the final descent to the root. The Db (minor 3rd) leaves the phrase unresolved, hanging. Perfect for a verse that needs to leave the listener slightly unsatisfied before the chorus arrives. Or open with a high Bb4: Bb4 Gb3 — a dramatic octave drop as the first interval, before the rest of the descent.",
      },
      {
        name: "Neo Soul Grief",
        key: "C minor",
        scaleNotes: "C  Eb  F  G  Ab  Bb",
        sequence: "C4  Bb3  Ab3  G3  F3  Eb3  G3  C3",
        sequenceDescription:
          "A long falling line through C minor from root to root across an octave. The Ab (flat 6th) between G and F is the heartbreaking note — the minor 6th interval is the sound most universally associated with sadness in Western harmony. The brief G3 before the final C3 is a small, futile reaching upward before the arrival. Eight notes, one bar, complete emotional arc.",
        microKeyTip:
          "C minor scale on microKEY: C (white), Eb (black), F (white), G (white), Ab (black — between G and A), Bb (black — between A and B). The descent from C4 to C3 spans exactly one octave. Place your hand in C minor position: thumb on C, fingers covering Eb, F, G. For Ab and Bb (the black keys near the top of the octave), let your hand shift slightly to the right — ring on Ab, middle on Bb. Load The Gentleman (Kontakt) with sustain pedal held throughout. Let every note ring into the next.",
        variation:
          "Add D4 at the very beginning: D4 C4 Bb3 Ab3 G3 F3 Eb3 G3 C3. The D is the major 2nd — a bright note that immediately gives way to the darker Bb. This makes the descent feel longer and more resigned, as if the melody tried to start somewhere hopeful and couldn't stay there.",
      },
      {
        name: "D'Angelo Spiral",
        key: "C minor",
        scaleNotes: "C  D  Eb  F  G  Ab  Bb",
        sequence: "Eb4  D4  C4  Bb3  Ab3  G3  F3",
        sequenceDescription:
          "Begins on Eb (the minor 3rd) rather than the root — a choice that creates a sense of mid-sentence, as if the melody is already in progress when you hear it. The entire phrase descends through C natural minor, each note leading the ear downward. Inspired by the D'Angelo approach of entering melodic phrases late and leaving early — never giving the listener the downbeat they expect.",
        microKeyTip:
          "C natural minor on microKEY: C (white), D (white), Eb (black), F (white), G (white), Ab (black), Bb (black). Start on Eb (black key) — this is the critical choice. Most melodies start on white keys; starting on a black key (Eb) gives this phrase an off-center, already-in-motion quality from the first note. On microKEY, Eb is the black key between D and E. Find it before you record. Know exactly where it is. Then play the 7-note descent with even timing. The magic is in the starting point.",
        variation:
          "Play the sequence in reverse: F3 G3 Ab3 Bb3 C4 D4 Eb4. Ascending through the same notes sounds completely different — hopeful, reaching. Play both: descending in verse, ascending in hook. This creates a harmonic conversation across sections that feels intentional without being obvious.",
      },
    ],
  },
};
