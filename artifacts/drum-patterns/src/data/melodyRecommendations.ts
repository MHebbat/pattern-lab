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
    ],
  },
};
