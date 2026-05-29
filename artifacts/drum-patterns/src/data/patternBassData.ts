import type { BassPattern } from "./melodyRecommendations";

export const patternBassData: Record<string, BassPattern[]> = {

  "bb-1": [
    {
      name: "Am Walking Line",
      key: "A minor",
      description:
        "A minor walking bass tuned to Classic 90s at 90 BPM, swing 54. The note on step 3 lands on the swung 'e' of beat 1 — at 54% swing it falls slightly late, sitting naturally in the hi-hat pocket. Steps 7 and 15 are soft anticipation notes that set up the strong beats without disturbing the sample.",
      steps: [
        { step: 0, note: "A1", velocity: 100 },
        { step: 3, note: "C2", velocity: 75 },
        { step: 5, note: "E2", velocity: 85 },
        { step: 7, note: "G2", velocity: 60 },
        { step: 8, note: "A1", velocity: 95 },
        { step: 11, note: "E2", velocity: 70 },
        { step: 13, note: "D2", velocity: 80 },
        { step: 15, note: "A1", velocity: 55 },
      ],
      pluginSuggestion:
        "Scarbee Rickenbacker Bass (Kontakt) — Fingered articulation, no portamento. The walking line's chromatic movement (D2→A1 on steps 13–15) needs the articulated pluck of a bass guitar, not a synth slide. Keep velocity variation as written: the ghost A1 on step 15 is the tail of the phrase, not a strong hit.",
      microKeyTip:
        "A minor on microKEY: A (white), C (white, 3 up), E (white, 2 above C), G (white, 2 above E). Walking 8 notes fits under one hand position. Root hand: thumb on A, reach index to C, middle to E, ring to G. At 90 BPM record at half tempo (45 BPM), then restore. The swing already exists in the pattern grid.",
      variation:
        "Replace D2 (step 13) with F2 (the minor 6th). This small change shifts the turnaround from a major-flavored resolution to a darker, more soul-influenced one — the same move that separates late 90s New York bass from earlier walking patterns.",
    },
    {
      name: "Am Root Lock",
      key: "A minor",
      description:
        "Minimal two-note-per-half-bar approach at 90 BPM. Locks directly with the kick on steps 0 and 8, the fifth (E2) lands on the swung off-beats. Four notes, complete harmony definition, zero crowding. Designed for dense samples where the bass needs to define key and disappear.",
      steps: [
        { step: 0, note: "A1", velocity: 100 },
        { step: 5, note: "E2", velocity: 80 },
        { step: 8, note: "A1", velocity: 90 },
        { step: 13, note: "E2", velocity: 75 },
      ],
      pluginSuggestion:
        "Massive X (Komplete 15) — Sub Bass patch, Portamento OFF, Mono ON. At only 4 notes per bar, each note needs full sub weight without any slide muddying the fundamental. Boost 60–80 Hz by +3 dB in Maschine's EQ insert for sub presence under dense samples.",
      microKeyTip:
        "Only two keys on the microKEY: A and E. Find them, step away from the keyboard, and record confidently from memory. These two notes define the entire bar. Knowing them cold before recording removes hesitation — which is the enemy of a locked groove.",
      variation:
        "Add G1 (the minor seventh) on step 11 for a three-note version: A1 / E2 / G1 / E2. The G1 is the Am7 color tone — it lifts the last beat of the bar without adding complexity. This version works better under samples with modal, open harmony.",
    },
    {
      name: "Dm Pocket",
      key: "D minor",
      description:
        "D minor variation for Classic 90s patterns built on samples in the key of D. Root on 0, fifth (A1) on the swung step 5, F2 (minor third) as the emotional hook on step 7, turnaround through E2 back to D2. The 54% swing at 90 BPM makes the off-beat steps feel late in a way that locks with the kick's natural decay.",
      steps: [
        { step: 0, note: "D2", velocity: 100 },
        { step: 5, note: "A1", velocity: 80 },
        { step: 7, note: "F2", velocity: 70 },
        { step: 8, note: "D2", velocity: 90 },
        { step: 13, note: "E2", velocity: 75 },
        { step: 15, note: "D2", velocity: 55 },
      ],
      pluginSuggestion:
        "Scarbee Rickenbacker Bass (Kontakt, Fingered). The F2 on step 7 (the minor third) is the most important note — give it velocity exactly as written (70), not louder. It should be felt, not heard. Ghost the E2 on step 13 even further if needed (down to 60) to make the approach to the restart feel natural.",
      microKeyTip:
        "D minor on microKEY: D (white), A (white, 5 white keys up), F (white, 2 above D in next octave range), E (white, between D and F). Practice the F2→D2 descent (steps 7→8) — a smooth half-step drop between beats. At slow BPM, even this small interval is musical.",
      variation:
        "Swap F2 (step 7) for C2 (the minor 7th of D). Instead of dropping from the 3rd to the root, the bass now rises from the 7th to the root on the next step — a completely different emotional motion from the same two notes.",
    },
  ],

  "bb-2": [
    {
      name: "Cm Swing Bounce",
      key: "C minor",
      description:
        "Built specifically for Pete Rock Bounce at 88 BPM, swing 58. The higher swing (58%) pushes off-beat steps noticeably later than Classic 90s. Notes on steps 5 and 13 (the swung 'e' of beats 2 and 4) fall with Pete Rock's characteristic snap. Ghost Bb1 notes on steps 7 and 15 are the late-sixteenth flicks that define his rhythmic fingerprint.",
      steps: [
        { step: 0, note: "C2", velocity: 100 },
        { step: 5, note: "G1", velocity: 85 },
        { step: 7, note: "Bb1", velocity: 65 },
        { step: 8, note: "C2", velocity: 95 },
        { step: 11, note: "G1", velocity: 75 },
        { step: 13, note: "Bb1", velocity: 70 },
        { step: 15, note: "C2", velocity: 55 },
      ],
      pluginSuggestion:
        "Massive X — Sub Bass patch, Portamento 20ms, Mono ON. The light portamento on the 20ms setting is barely audible but creates a micro-slide between notes that feels like a bass guitarist's fretting hand shifting position — organic, not synthetic. The low Bb1 ghost notes need to be pure sub, not mid-range bass.",
      microKeyTip:
        "C minor on microKEY: C (white), G (white, 7 up), Bb (black, between A and B). Three distinct pitches, simple. At 88 BPM with 58% swing, the notes on steps 5 and 13 will already feel later than you expect — trust the pattern grid. Play in the sequencer at 44 BPM, then restore tempo after recording.",
      variation:
        "Replace the Bb1 ghost notes (steps 7 and 15) with Ab1 (the minor sixth). This takes the pattern from a minor-seventh bounce to a more minor-sixth flavor — darker, more Boom Bap, less neo-soul. The Pete Rock feel remains but the emotional register drops one step further into shadow.",
    },
    {
      name: "Fm Swing Pocket",
      key: "F minor",
      description:
        "F minor for Pete Rock Bounce. At 58% swing and 88 BPM, the even steps (0, 4, 8, 12) are grid-locked and the odd-numbered steps fall progressively later. The Eb2 on step 14 (the 'a' of beat 4 at 58% swing) anticipates the loop restart — the bass is already thinking about bar two before bar one ends.",
      steps: [
        { step: 0, note: "F1", velocity: 100 },
        { step: 5, note: "C2", velocity: 85 },
        { step: 7, note: "Ab1", velocity: 65 },
        { step: 8, note: "F1", velocity: 90 },
        { step: 11, note: "C2", velocity: 80 },
        { step: 14, note: "Eb2", velocity: 70 },
      ],
      pluginSuggestion:
        "Scarbee Rickenbacker Bass (Kontakt, Fingered). F1 is a low note — ensure your output gain is sufficient for it to register on sub-equipped playback systems. The Ab1 ghost note (step 7) and Eb2 anticipation (step 14) need to be clear enough to feel but quiet enough that they never distract from the main beats.",
      microKeyTip:
        "F minor on microKEY: F (white), C (white, 7 up), Ab (black, between G and A), Eb (black, between D and E). Ab and Eb are both black keys — find them before recording. Ab is directly left of A; Eb is directly left of E. Know the four-key layout, then record at half speed.",
      variation:
        "Remove the Ab1 ghost (step 7) and shift the Eb2 from step 14 to step 13. The pattern becomes smoother and more melodic, losing some of its hop. Use this version under vocal samples where the hook carries the bounce — let the bass be clean.",
    },
  ],

  "bb-3": [
    {
      name: "Gm Dark Stomp",
      key: "G minor",
      description:
        "Grimy Bap runs at 93 BPM, swing 52 — faster and with minimal swing compared to the deeper Boom Bap patterns. Fewer notes here than at slower BPMs: at 93 BPM, space IS impact. The Eb2 (minor sixth) on step 11 is the grimy color note, rising through the dark interval before D2 grounds the phrase.",
      steps: [
        { step: 0, note: "G1", velocity: 100 },
        { step: 3, note: "D2", velocity: 75 },
        { step: 8, note: "G1", velocity: 95 },
        { step: 11, note: "Eb2", velocity: 65 },
        { step: 13, note: "D2", velocity: 80 },
        { step: 15, note: "G1", velocity: 55 },
      ],
      pluginSuggestion:
        "Massive X — distorted sub patch. At 93 BPM the bass hits fast — add 8–10% drive in Massive X's oscillator section, or use Maschine's Saturator (Tape mode, 30%) on the bass channel. Grimy Bap needs grit in the bass, not just sub. The Eb2 on step 11 should feel slightly crunchy.",
      microKeyTip:
        "G minor on microKEY: G (white), D (white, 7 up), Eb (black, between D and E). Three keys, straightforward layout. At 93 BPM record at 46–47 BPM and restore tempo. The Eb on step 11 is the most important note to hit cleanly — practice the D2→Eb2 half-step (steps 13 back to 11, in reverse) before the full take.",
      variation:
        "Replace D2 on step 3 with F2 (the minor 7th). The pattern gains a mi7 flavor — less aggressive, more soul-inflected. Then replace Eb2 on step 11 with E2 (natural) for a Dorian feel. These two changes together move the pattern from Mobb Deep to J Dilla without changing a single timing position.",
    },
    {
      name: "Cm Menacing",
      key: "C minor",
      description:
        "C minor for the grimy 93 BPM setting. The chromatic approach note B1 (one half-step below C2) on step 14 is a menace move — at 93 BPM, step 14 is a 160ms flash before the bar loops. Fast enough to be subconscious, slow enough to create real dissonance. The half-second flash of wrong note before resolution is the sonic equivalent of a threat.",
      steps: [
        { step: 0, note: "C2", velocity: 100 },
        { step: 5, note: "Bb1", velocity: 80 },
        { step: 8, note: "C2", velocity: 95 },
        { step: 11, note: "G1", velocity: 75 },
        { step: 14, note: "B1", velocity: 65 },
        { step: 15, note: "C2", velocity: 55 },
      ],
      pluginSuggestion:
        "Massive X — Sub Bass patch, Mono ON, Portamento OFF for steps 0 through 13, but enable Portamento at 40ms ONLY for the B1→C2 transition (steps 14→15). In Maschine, you can automate portamento per note using the Note properties. The slide on B1→C2 is the menace move — without it, the chromatic approach is just a passing tone.",
      microKeyTip:
        "C minor on microKEY: C (white), Bb (black, between A and B), G (white, 7 below C), B (white, one key left of C). B natural is directly adjacent to C — they share no black key between them. Play B then immediately C: the smallest possible tension and release. At 93 BPM this moment is 160ms. Know exactly where B lives before recording.",
      variation:
        "Replace B1 (step 14) with Db2 (one half-step above C2) for a different chromatic approach — the note approaching from above instead of below. The dissonance is the same but the emotional direction is reversed: instead of rising into the root, the bass falls down into it. Falling approaches sound more resigned; rising approaches sound more aggressive.",
    },
  ],

  "bb-4": [
    {
      name: "Dm Long Tones",
      key: "D minor",
      description:
        "Four notes at 82 BPM, swing 50. Laid Back Boom is the slowest and straightest Boom Bap pattern in the library — no swing, maximum space. Each note here lasts between 2 and 6 steps (roughly 440ms to 1.3 seconds). This is the bass for when the sample is everything and the bass exists only to name the key. Play it slowly. Mean every note.",
      steps: [
        { step: 0, note: "D2", velocity: 100 },
        { step: 8, note: "A1", velocity: 85 },
        { step: 12, note: "C2", velocity: 75 },
        { step: 14, note: "D2", velocity: 60 },
      ],
      pluginSuggestion:
        "The Gentleman (Kontakt) — a recorded bass-register piano note sustained for 2+ beats at 82 BPM has enormous warmth. Set gate length to 100% for each note. Alternatively, Massive X with Attack at 0ms and Release at 2 seconds — the slow release lets each note breathe into the next. No portamento. Each note should be separate, deliberate.",
      microKeyTip:
        "D minor on microKEY: D (white), A (white, 5 up), C (white, one left of D). Three keys. At 82 BPM straight time, play these notes slowly and deliberately with full finger pressure — the microKEY is velocity-sensitive and a firmer strike produces a louder, more present note. Each of the four notes deserves its full weight.",
      variation:
        "Remove C2 (step 12) and D2 (step 14) entirely — just D2 and A1, one note per half-bar. Two notes, 82 BPM, straight time. This is the most minimal bass line in the library. Over a piano sample with rich harmony, it's devastating in its simplicity. The sample carries everything; the bass just holds the earth.",
    },
    {
      name: "Am Open Descent",
      key: "A minor",
      description:
        "Descending A minor line for Laid Back Boom's 82 BPM straight-time feel. Four notes, no swing, each one stepping down through the A minor arpeggio. The final G1 (the minor 7th of A) does not resolve back to A — it leaves the bar hanging open, waiting. Over a piano sample with sustained chords, this descent sounds like the bass is slowly exhaling.",
      steps: [
        { step: 0, note: "A1", velocity: 100 },
        { step: 6, note: "E2", velocity: 85 },
        { step: 10, note: "C2", velocity: 75 },
        { step: 14, note: "G1", velocity: 70 },
      ],
      pluginSuggestion:
        "The Gentleman (Kontakt) or Massive X with long release. The key characteristic of this line is not the notes but the space between them — at 82 BPM, steps 0 to 6 is approximately 876ms of silence. Trust the silence. Don't add ghost notes to fill it. The space IS the feel.",
      microKeyTip:
        "A minor descent on microKEY: A (white), E (white, 5 up), C (white, 4 below E), G (white, 4 below C). The descent moves left across the keyboard. Start at A, then find E (right hand extended), then C (hand shifts left), then G (further left). At 82 BPM the 6-step gap between each note is 2.2 seconds — more than enough time to reposition for each note.",
      variation:
        "Replace G1 (step 14) with F1 (the minor sixth of A) for a darker ending. Or extend the descent to 5 notes: add E1 on step 15 (the low octave of the 5th) for the final note. The descent through A E C G E arrives at the low E — a complete fall through two octaves that loops back to the high A on the next bar.",
    },
  ],

  "hh-1": [
    {
      name: "Gm G-Funk Groove",
      key: "G minor",
      description:
        "West Coast G-Funk runs at 100 BPM with zero swing — every note lands exactly on the 16th-note grid. This line mirrors the tight, even feel of Warren G / Dr. Dre era bass: smooth, circular pentatonic movement that never settles. 8 notes per bar, all on even-numbered steps, creates a continuous rolling bass line that sits under the pattern without a break.",
      steps: [
        { step: 0, note: "G1", velocity: 100 },
        { step: 2, note: "D2", velocity: 80 },
        { step: 4, note: "F2", velocity: 75 },
        { step: 6, note: "G1", velocity: 90 },
        { step: 8, note: "D2", velocity: 85 },
        { step: 10, note: "C2", velocity: 75 },
        { step: 12, note: "Bb1", velocity: 80 },
        { step: 14, note: "G1", velocity: 70 },
      ],
      pluginSuggestion:
        "Massive X — 'Sub Slide' patch with Portamento at 40ms, Mono ON. Enable portamento for all transitions. The G-Funk bass sound is defined by its slides — every note smoothly glides into the next. At 100 BPM with portamento at 40ms, each slide occupies about 6% of the step duration: audible but not dominant. This is the West Coast synth bass sound.",
      microKeyTip:
        "G minor pentatonic on microKEY: G (white), Bb (black), C (white), D (white), F (white). All close together. Record the 8-note sequence as a single legato phrase — hold each key until the next one begins so portamento activates. At 100 BPM record at 50 BPM: each step is a half-note at 50 BPM, which is a comfortable speed for legato playing.",
      variation:
        "Replace F2 (step 4) with Eb2 (the minor 6th of G). The pentatonic ascent changes flavor — instead of G→D→F→G (Gm pentatonic), it becomes G→D→Eb→G (Gm natural minor with 6th). Subtle change, major emotional shift: Eb in a G minor context is one of the heartbreaking notes of West Coast R&B.",
    },
    {
      name: "Cm Smooth Line",
      key: "C minor",
      description:
        "C minor at 100 BPM straight time — cleaner and less chromatic than the G minor version. 6 notes per bar creates a slightly more open feel than the full 8-note groove. Steps 3, 6, 11, 14 are syncopated positions that create unexpected movement within the straight grid. Without swing, the groove comes entirely from note choice and velocity contrast.",
      steps: [
        { step: 0, note: "C2", velocity: 100 },
        { step: 3, note: "G1", velocity: 75 },
        { step: 6, note: "Eb2", velocity: 80 },
        { step: 8, note: "C2", velocity: 90 },
        { step: 11, note: "Bb1", velocity: 70 },
        { step: 14, note: "G1", velocity: 75 },
      ],
      pluginSuggestion:
        "Massive X with Portamento at 50ms, Mono ON. The Eb2 on step 6 (the minor third) is the color note — at 100 BPM with 50ms portamento it has a gentle slide quality. If the sample leans more toward contemporary than classic G-Funk, try Scarbee Rickenbacker Bass instead for a harder, less synth-like attack.",
      microKeyTip:
        "C minor on microKEY: C (white), G (white, 7 up), Eb (black, between D and E), Bb (black, between A and B). Record legato at 50 BPM — the portamento setting means held keys generate slides. At 100 BPM restore, the slides become brief and smooth, the G-Funk character appears automatically.",
      variation:
        "Change the key to F minor: F (root), C (5th), Ab (minor 3rd), Eb (minor 7th). The same rhythmic structure in F minor produces a darker, more cinematic bass line — less G-Funk, more West Coast film score. Try this variation when the sample has a more melancholy or introspective quality.",
    },
  ],

  "hh-2": [
    {
      name: "Gm 808 Half-Time",
      key: "G minor",
      description:
        "Trap Soul Bridge runs at 130 BPM — the fastest pattern in the Hip Hop set. At this tempo, a 16th note is only 115ms. Four notes per bar is the correct density: each note has room to sustain and decay before the next arrives. The half-time drum feel means step 8 is the felt halfway point. Steps 12 and 14 are 808-style tail notes — the characteristic sliding decay of an 808 kick played at pitch.",
      steps: [
        { step: 0, note: "G1", velocity: 100 },
        { step: 8, note: "D2", velocity: 85 },
        { step: 12, note: "Bb1", velocity: 75 },
        { step: 14, note: "G1", velocity: 60 },
      ],
      pluginSuggestion:
        "Massive X — 808 Sub patch with Portamento at 80ms, Mono ON. Set the envelope release to 1.5 seconds so each note decays slowly into the next. At 130 BPM, the notes on steps 12 and 14 last only 115ms each — they are entirely defined by the 808's decay tail, not by any sustained body. The 'note' is the decay.",
      microKeyTip:
        "G minor on microKEY: G (white), D (white, 7 up), Bb (black, between A and B). Three keys. At 130 BPM record at 65 BPM — each step is a quarter note at 65 BPM, a natural playing speed. Play G and D as strong hits, Bb and G as lighter touches. Restore tempo after recording.",
      variation:
        "Extend to 5 notes: add F1 (the minor 7th) on step 10 between D2 and Bb1. The pattern now reads G / D / F / Bb / G — a falling 5-note phrase that moves through the Gm7 chord. More melodic, slightly less 808-ish. Use when the trap soul production has a more musical, less rhythmic bass role.",
    },
    {
      name: "Cm Trap Slide",
      key: "C minor",
      description:
        "C minor 808 line for Trap Soul Bridge. The chromatic tail at steps 12–14 (G1 / Ab1 / G1) creates the 808 waver effect at 130 BPM: a half-step oscillation lasting 345ms total, which at this tempo sounds like a pitch-bent tail rather than discrete notes. This is the trap soul bass signature: root and fifth with a chromatic waver at the end.",
      steps: [
        { step: 0, note: "C2", velocity: 100 },
        { step: 6, note: "G1", velocity: 80 },
        { step: 8, note: "Bb1", velocity: 90 },
        { step: 12, note: "G1", velocity: 70 },
        { step: 13, note: "Ab1", velocity: 60 },
        { step: 14, note: "G1", velocity: 55 },
      ],
      pluginSuggestion:
        "Massive X — 808 Sub, Portamento 100ms, Mono ON. The three-note tail (G1/Ab1/G1 on steps 12–13–14) with 100ms portamento creates a continuous slide motion across 345ms. It sounds like a single waving pitch rather than three separate notes. Increase Portamento to 120ms if the slides feel too articulate — at 130 BPM, you want the tail to blur.",
      microKeyTip:
        "C minor with chromatic approach on microKEY: C (white), G (white), Bb (black), Ab (black, left of A). Ab is between G and A — directly right of G. The G / Ab / G three-note waver at steps 12–13–14 is played as three very light, fast touches. At 130 BPM record at 65 BPM: each waver note is a full quarter note, easy to play. Restore tempo.",
      variation:
        "Replace the G/Ab/G waver with a single long G1 starting at step 12 and lasting to step 15. The 808 tail becomes a sustained note rather than a waver — cleaner, more modern, less atmospheric. Use this when the track's arrangement is already complex and the bass needs to simplify.",
    },
  ],

  "hh-3": [
    {
      name: "Am Premier Pocket",
      key: "A minor",
      description:
        "DJ Premier Style at 95 BPM, swing 62 — the highest swing value in the Hip Hop set. At 62% swing, the 'e' subdivisions (steps 1, 5, 9, 13) are pushed nearly to a triplet-8th position. Notes on steps 3, 7, 11, and 15 are the swung 16th positions and land even later. This line is built to exploit that extreme swing: every off-beat note falls with Premier's characteristic late-snap.",
      steps: [
        { step: 0, note: "A1", velocity: 100 },
        { step: 3, note: "E2", velocity: 80 },
        { step: 5, note: "C2", velocity: 75 },
        { step: 7, note: "A1", velocity: 60 },
        { step: 8, note: "G1", velocity: 90 },
        { step: 11, note: "E2", velocity: 75 },
        { step: 13, note: "F2", velocity: 70 },
        { step: 15, note: "E2", velocity: 55 },
      ],
      pluginSuggestion:
        "Scarbee Rickenbacker Bass (Kontakt, Fingered) — Premier's bass has always been a recorded bass guitar, not a synth. The ghost notes (steps 7 and 15, velocity 60 and 55) need the tactile pluck of a real bass. They're the rhythmic glue between the strong beats — they should be felt in the low-mids, not heard as distinct notes.",
      microKeyTip:
        "A minor on microKEY: A (white), E (white, 5 up), C (white, 3 above A), G (white, 7 below A in lower octave), F (white, 3 above D). At 62% swing, the grid is heavily swung — record at 47–48 BPM for easier timing, then restore. The heavy swing does most of the groove work automatically; focus on velocity contrast between main notes and ghosts.",
      variation:
        "Replace G1 (step 8) with Am chord tones: try D2 (the 4th, a suspension). The pattern changes from a falling bass line to one that opens up at the halfway point — a Premier move heard on early Gang Starr records where the bass creates harmonic tension at beat 3 before resolving.",
    },
    {
      name: "Dm Hard Bop",
      key: "D minor",
      description:
        "D minor jazz-influenced line for the Premier swing template. The Bb1 on step 15 (the very last 'a' subdivision at 62% swing) is a chromatic approach note connecting back to the bar start — at this extreme swing position, step 15 nearly overlaps with step 0 of the next bar. The bass is already thinking about the next bar before the current one ends. This is jazz phrasing applied to boom bap.",
      steps: [
        { step: 0, note: "D2", velocity: 100 },
        { step: 5, note: "A1", velocity: 80 },
        { step: 7, note: "F2", velocity: 70 },
        { step: 8, note: "D2", velocity: 95 },
        { step: 11, note: "G1", velocity: 65 },
        { step: 13, note: "A1", velocity: 75 },
        { step: 15, note: "Bb1", velocity: 55 },
      ],
      pluginSuggestion:
        "Scarbee Rickenbacker Bass (Kontakt, Fingered). The G1 on step 11 (the 4th of D minor) is the jazz move — a suspended note that creates momentary harmonic ambiguity before resolving. At 62% swing, step 11 lands approximately where a jazz bassist's swung triplet would fall. This isn't coincidental — Premier's sampling of jazz records calibrated his swing to match.",
      microKeyTip:
        "D minor on microKEY: D (white), A (white, 5 up), F (white, 2 above D), G (white, 3 above E), Bb (black, between A and B). Record the G1 on step 11 softly — it's the subtlest note in the pattern, a jazz-style passing note that only works at low velocity. Record at 47 BPM, velocity-target the G at 65 or below.",
      variation:
        "Change the key center: move everything up a minor 3rd to F minor. D→F, A→C, F→Ab, G→Bb, Bb→Db. The same rhythmic structure in F minor produces a warmer, more R&B-adjacent bass line. DJ Premier occasionally used this key center on his darker, soul-influenced productions.",
    },
  ],

  "hh-5": [
    {
      name: "Am Dilla Drunk",
      key: "A minor",
      description:
        "Dilla Limp at 84 BPM, swing 56. The ghost notes on steps 1 and 9 (velocity 50) are the defining feature: placed one 16th after the downbeat, they blur beat 1 and beat 3 — making the strong beats feel like they arrive 'late,' as if the bass is still waking up. Combined with 56% swing, the off-beat notes (steps 5, 9, 13) are pushed slightly further than standard. The result is Dilla's drunk-clock feel: the bass knows where it's going, but doesn't seem in a hurry to get there.",
      steps: [
        { step: 0, note: "A1", velocity: 95 },
        { step: 1, note: "A1", velocity: 50 },
        { step: 4, note: "C2", velocity: 80 },
        { step: 6, note: "E2", velocity: 85 },
        { step: 8, note: "G2", velocity: 90 },
        { step: 9, note: "G2", velocity: 50 },
        { step: 12, note: "C2", velocity: 75 },
        { step: 14, note: "A1", velocity: 80 },
      ],
      pluginSuggestion:
        "Massive X — any warm sub patch. The ghost notes (steps 1 and 9) are the technique: they need the same patch as the main notes but at exactly velocity 50. In Maschine's step sequencer, set each note's velocity individually. The ghost notes should not be inaudible — they need to register as a low presence, blurring the beat without defining it.",
      microKeyTip:
        "A minor on microKEY: A (white), C (white), E (white), G (white). All white keys. Record the ghost A1 on step 1 with a very gentle touch — barely press the key. The microKEY's velocity response means a light touch at slow recording speed translates to approximately velocity 50. Record at 42 BPM for comfortable placement.",
      variation:
        "Move the ghost notes from steps 1 and 9 to steps 2 and 10 (the 'e' subdivision instead of the '+' subdivision). At 56% swing, step 2 is further late than step 1 — the drunk clock feeling becomes more extreme. This is the advanced Dilla technique: deliberate microrhythmic inconsistency across the bar.",
    },
    {
      name: "Dm Loose Groove",
      key: "D minor",
      description:
        "D minor Dilla approach: ghost notes at velocity 55–60 on steps 3, 11, and 15 create the loose, thinking-through-the-groove quality. Notes on odd steps (3, 7, 11, 15) at 56% swing all land slightly late — and the pattern places a ghost on three of those late positions. The bass sounds like it just barely remembered its part, which is the most accurate description of Dilla's approach to groove.",
      steps: [
        { step: 0, note: "D2", velocity: 100 },
        { step: 3, note: "C2", velocity: 55 },
        { step: 5, note: "A1", velocity: 85 },
        { step: 7, note: "D2", velocity: 70 },
        { step: 8, note: "F2", velocity: 90 },
        { step: 11, note: "D2", velocity: 60 },
        { step: 13, note: "C2", velocity: 80 },
        { step: 15, note: "A1", velocity: 50 },
      ],
      pluginSuggestion:
        "Scarbee Rickenbacker Bass (Kontakt, Fingered) — the organic nature of the recorded bass guitar makes the ghost notes feel more natural than a synthesized sub. The slightly uneven decay of each note at different velocities is part of the Dilla texture. Do not quantize or normalize velocities after recording.",
      microKeyTip:
        "D minor on microKEY: D (white), C (white, just below D), A (white, 5 below D), F (white, 2 above D). At 84 BPM record at 42 BPM. For the ghost notes (steps 3, 11, 15), play with a noticeably lighter touch — the velocity curve of the microKEY will do most of the work if the key contact is soft and quick.",
      variation:
        "Remove all ghost notes (steps 3, 11, 15) and play only the main notes (steps 0, 5, 7, 8, 13). The pattern becomes a standard D minor bass line — competent but ordinary. Then add the ghosts back one at a time and listen to how each one progressively loosens the groove. This exercise makes Dilla's technique audible and teachable.",
    },
  ],

  "rnb-1": [
    {
      name: "Cm Neo Soul Deep",
      key: "C minor",
      description:
        "Neo Soul Pocket at 75 BPM, swing 63 — the most swung R&B pattern in the library. At 63% swing, 'e' subdivisions (steps 1, 5, 9, 13) fall nearly at the triplet eighth-note position. This transforms standard 16th-note bass movement into something that breathes like a live player — slow-heavy, deeply in the pocket. The Ab1 on step 11 (minor 6th of C) is the heartbreaking note, placed where the extreme swing gives it maximum space.",
      steps: [
        { step: 0, note: "C2", velocity: 100 },
        { step: 5, note: "G1", velocity: 85 },
        { step: 7, note: "Bb1", velocity: 70 },
        { step: 8, note: "C2", velocity: 95 },
        { step: 11, note: "Ab1", velocity: 65 },
        { step: 13, note: "G1", velocity: 80 },
        { step: 15, note: "C2", velocity: 55 },
      ],
      pluginSuggestion:
        "Scarbee Rickenbacker Bass (Kontakt, Fingered) — at 63% swing and 75 BPM, the bass needs to feel like a human player. A recorded bass instrument reproduces the micro-variations in attack and decay that make the heavy swing feel natural. A synthesized sub at this tempo and swing would sound mechanical. Use the Rickenbacker and let the groove breathe.",
      microKeyTip:
        "C minor on microKEY: C (white), G (white, 7 up), Bb (black, between A and B), Ab (black, between G and A). Ab and Bb are adjacent black keys — Ab is left of A, Bb is right of A. Find both before recording. At 75 BPM the bar is 3.2 seconds long — slow enough to feel each note's full weight. Record at 37–38 BPM for comfortable placement.",
      variation:
        "Transpose to D minor: D / A / C / D / Bb / A / D. Same swing, same BPM, same positions — but D minor's modal character sits slightly differently under R&B samples. D minor has a more jazz-adjacent quality (the ii chord of C major); C minor sits darker and more self-contained. Try both and listen to which sample it opens up.",
    },
    {
      name: "Fm Soul Groove",
      key: "F minor",
      description:
        "F minor neo soul line — a D'Angelo / Erykah Badu approach. The Db2 on step 11 (the major 6th of F minor, enharmonic to C#) is the jazz-soul note: unusual, unexpected in a minor context, and placed at the extreme-swing position where it arrives later than expected. Late placement + unexpected note choice = the neo soul formula. At 75 BPM and 63% swing this pattern breathes as slowly as a heartbeat.",
      steps: [
        { step: 0, note: "F1", velocity: 100 },
        { step: 5, note: "C2", velocity: 85 },
        { step: 7, note: "Eb2", velocity: 65 },
        { step: 8, note: "F1", velocity: 95 },
        { step: 11, note: "Db2", velocity: 70 },
        { step: 13, note: "C2", velocity: 75 },
        { step: 15, note: "Ab1", velocity: 60 },
      ],
      pluginSuggestion:
        "Scarbee Rickenbacker Bass (Kontakt, Fingered). The Db2 (step 11) and Ab1 (step 15) are the jazz-soul notes — both are the flat 6th scale degree in their respective octaves. At 63% swing both notes fall almost exactly on a triplet subdivision. The recorded bass guitar's natural note-to-note variation will make these notes feel natural and musical even at low velocity.",
      microKeyTip:
        "F minor on microKEY: F (white), C (white, 7 up), Eb (black, between D and E), Db (black, between C and D), Ab (black, between G and A). Four of the 7 notes are black keys — this pattern lives on the raised keys. Position the hand with the thumb on F and the other fingers naturally above the black keys. At 75 BPM there is no rush.",
      variation:
        "Replace Db2 (step 11) with D2 (major 6th, natural). This moves the pattern from F Dorian (with natural 6th) to F natural minor and back — the D2 version has a brighter, more contemporary R&B quality. The Db2 version has the jazz-soul character. Record both and choose based on the sample's harmonic flavor.",
    },
    {
      name: "AbM Soul Pad",
      key: "Ab major",
      description:
        "Ab major — a Stevie Wonder approach in a neo soul context. Major tonality over a slow, swung pattern brings warmth and optimism without losing the depth of the groove. Gb2 (the major 7th of Ab) on step 7 is the neo soul signature: the maj7 interval over a major root creates the characteristic bittersweet shimmer. At 63% swing, step 7 falls almost on the triplet subdivision — natural, flowing, like a breath.",
      steps: [
        { step: 0, note: "Ab1", velocity: 100 },
        { step: 5, note: "Eb2", velocity: 80 },
        { step: 7, note: "Gb2", velocity: 65 },
        { step: 8, note: "Ab1", velocity: 95 },
        { step: 11, note: "F2", velocity: 75 },
        { step: 13, note: "Eb2", velocity: 70 },
      ],
      pluginSuggestion:
        "The Gentleman (Kontakt) — Ab major at 75 BPM on a recorded piano bass produces the warm, sustaining quality of Stevie Wonder's bass-register keyboard playing. Set gate length to 90% so notes slightly overlap. The Gb2 (step 7) is the most important note — at velocity 65 it should be present but subordinate. If it's too loud it becomes dissonant; too quiet and the maj7 magic disappears.",
      microKeyTip:
        "Ab major on microKEY: Ab (black, between G and A), Eb (black, between D and E), Gb (black, between F and G), F (white, between E and G). All the main notes are black keys except F. The hand rests slightly elevated above the white keys in its natural position. At 75 BPM and 63% swing, play everything legato — let each key overlap slightly into the next.",
      variation:
        "Shift to Ab minor: change Gb2 (step 7) to Bbb1 (enharmonic to A1, the minor 7th of Ab minor). The pattern moves from major to minor with a single note change. Ab minor is one of the darkest keys — the shift from Ab major to Ab minor mid-exploration is a powerful way to test a sample's range.",
    },
  ],

  "rnb-2": [
    {
      name: "Cm Contemporary Clean",
      key: "C minor",
      description:
        "Contemporary R&B at 90 BPM, swing 50 — straight 16th notes, no swing. This is SZA / Bryson Tiller / H.E.R. era bass: mechanically precise, harmonically rich, designed to anchor the floating atmospheric production without drawing attention. 7 notes in a bar — enough movement to define harmony across the full measure, not so many that the bass becomes its own element.",
      steps: [
        { step: 0, note: "C2", velocity: 100 },
        { step: 4, note: "Bb1", velocity: 80 },
        { step: 6, note: "G1", velocity: 75 },
        { step: 8, note: "C2", velocity: 90 },
        { step: 10, note: "Eb2", velocity: 70 },
        { step: 12, note: "D2", velocity: 75 },
        { step: 14, note: "C2", velocity: 65 },
      ],
      pluginSuggestion:
        "Massive X — a clean, modern sub patch with no distortion and minimal harmonic content. Contemporary R&B bass is almost entirely sub-frequency: felt through the speaker rather than heard. Set a high-pass filter at 40 Hz and a low-pass at 200 Hz on the bass channel — only pure sub, no mid-bass character. The melody comes from the synth pad, not the bass.",
      microKeyTip:
        "C minor on microKEY: C (white), Bb (black, between A and B), G (white, 7 below C), Eb (black, between D and E), D (white). At 90 BPM straight time, record at exactly the session tempo — no need to slow down. The clean grid means timing is straightforward. Focus on velocity variation: the main beats (0 and 8) at full velocity, all others notably softer.",
      variation:
        "Reduce to 5 notes by removing steps 12 (D2) and 14 (C2), ending the bar after the Eb2 on step 10. The pattern becomes a 5-note arch — up from C to Eb and back to C — with 6 steps of silence before the bar repeats. This version is more minimal and works better under vocal-heavy productions.",
    },
    {
      name: "EbM Modern",
      key: "Eb major",
      description:
        "Eb major at 90 BPM straight time — a bright, major-key contemporary bass for a more optimistic Contemporary R&B production. The neutral swing (50%) and medium tempo make this the most neutral-feeling bass in the library: no swing character, no extreme tempo, just clean harmonic movement. 6 notes, regular spacing, major key clarity.",
      steps: [
        { step: 0, note: "Eb2", velocity: 100 },
        { step: 4, note: "Bb1", velocity: 80 },
        { step: 8, note: "G1", velocity: 90 },
        { step: 10, note: "Ab1", velocity: 70 },
        { step: 12, note: "Bb1", velocity: 80 },
        { step: 14, note: "Eb2", velocity: 65 },
      ],
      pluginSuggestion:
        "Massive X — clean sub. The Ab1 on step 10 (the major 4th of Eb) creates a brief sus4 feeling — at velocity 70 it's a passing note, not a statement. If the production leans gospel or contemporary soul, try The Gentleman (Kontakt) in bass register for a more organic warmth. The major key allows more warmth in the bass than minor keys.",
      microKeyTip:
        "Eb major on microKEY: Eb (black, between D and E), Bb (black, between A and B), G (white, 5 below Eb), Ab (black, between G and A). Three black keys and one white. Record at full 90 BPM — the straight time and moderate density make it comfortable at session speed. The pattern's circular structure (Eb to Eb) makes the loop point clean.",
      variation:
        "Move the final Eb2 (step 14) to step 12 and add G1 on step 14. The pattern ends on G1 (the major 3rd) rather than the root — an open, optimistic ending that leads more naturally into the next bar. This variation works especially well when the drum pattern has a pickup note on step 15 (snare ghost).",
    },
  ],

  "rnb-3": [
    {
      name: "Bbm Ballad Descent",
      key: "Bb minor",
      description:
        "Slow Jam Sway at 68 BPM — the slowest pattern in the R&B set. Each 16th step at 68 BPM is 220ms; a 6-step gap between notes is more than 1.3 seconds of silence. This is the bass for a track at the tempo of a slow heartbeat. The Ab2 (minor 7th of Bb) on step 9 is the soulful note of every slow jam. The Gb2 (flat 6th) on step 14 leaves the bar unresolved — an ache that loops forever.",
      steps: [
        { step: 0, note: "Bb1", velocity: 100 },
        { step: 6, note: "F2", velocity: 85 },
        { step: 9, note: "Ab2", velocity: 75 },
        { step: 12, note: "Bb1", velocity: 80 },
        { step: 14, note: "Gb2", velocity: 70 },
      ],
      pluginSuggestion:
        "The Gentleman (Kontakt) — low register, full gate length. At 68 BPM a sustained piano note at the bass register has 3–4 seconds of decay per note. Set each note to 100% gate length and let the natural piano decay define when each note ends. The Gb2 final note needs the full 440ms it occupies before the loop — don't cut it short.",
      microKeyTip:
        "Bb minor on microKEY: Bb (black, between A and B), F (white, 7 up from Bb), Ab (black, between G and A), Gb (black, between F and G). Four of the 5 notes are black keys. At 68 BPM the bar is 3.5 seconds. Record at 34 BPM — each step is a half-note, comfortable for deliberate playing. Every note is an event at this tempo.",
      variation:
        "Replace the Gb2 (step 14) with F2 (the minor 5th) — the same note as step 6, an octave higher. The unresolved ending becomes resolved: the bar ends where it began (Bb) through the medium of F, the 5th. This version creates a more hopeful, cyclical loop rather than an aching open question. Use when the track needs forward motion rather than suspended longing.",
    },
    {
      name: "Fm Slow Fall",
      key: "F minor",
      description:
        "F minor descent across the full bar at 68 BPM. Five notes, each landing approximately 3–4 steps apart, moving from F through C, Db, C, and down to Bb. The Db2 (the minor 6th of F) is the crying note of F minor — at 68 BPM it has nearly a full second of time to sustain and express itself. The final Bb1 does not resolve to F: the descent ends one step above the minor 3rd, leaving space.",
      steps: [
        { step: 0, note: "F1", velocity: 100 },
        { step: 6, note: "C2", velocity: 85 },
        { step: 10, note: "Db2", velocity: 75 },
        { step: 12, note: "C2", velocity: 70 },
        { step: 14, note: "Bb1", velocity: 65 },
      ],
      pluginSuggestion:
        "The Gentleman (Kontakt) or Massive X with 2-second Release. The Db2 on step 10 is the emotional center — at velocity 75 it should be quieter than the surrounding C2 notes but harmonically more impactful. Load The Gentleman and add reverb (Bloom mode, 2.0 s Decay, 25% Wet) so the Db2 trails into C2 on step 12. The overlap creates a natural harmonic blur.",
      microKeyTip:
        "F minor on microKEY: F (white), C (white, 7 up), Db (black, between C and D), Bb (black, between A and B). The descent moves from F to C (right hand extended), then Db (one key right of C — black), back to C (one key left), then Bb (further left). At 34 BPM (record tempo for 68 BPM), each step is a comfortable half note.",
      variation:
        "Extend the descent: add Eb1 on step 15 (the minor 7th below F, lowest note in the pattern). The line reads F / C / Db / C / Bb / Eb. The low Eb1 drops to a register below the other notes — a subterranean final note that sits below everything else in the mix. Use this version for the climactic section of a slow jam.",
    },
    {
      name: "EbM Sway",
      key: "Eb major",
      description:
        "Eb major, 4 notes per bar, 68 BPM. The most patient bass line in the R&B set. Steps 0 to 8 is almost 2 seconds of silence — the space between notes at this tempo is a compositional element, not a gap. The Ab1 on step 12 (the 4th degree, creates a sus4 feeling) leans toward Bb1 on step 14, which resolves the suspension. The entire bar is just two movements: root to fifth, then sus4 to fifth.",
      steps: [
        { step: 0, note: "Eb2", velocity: 100 },
        { step: 8, note: "Bb1", velocity: 85 },
        { step: 12, note: "Ab1", velocity: 75 },
        { step: 14, note: "Bb1", velocity: 65 },
      ],
      pluginSuggestion:
        "The Gentleman (Kontakt) — set Attack to 20ms for a slightly soft onset. At 68 BPM with only 4 notes per bar, the silence is as important as the notes. A piano with natural attack and 3+ second decay fills the silence without adding notes — the reverb tail of Eb2 is still present when Bb1 arrives on step 8. Plan the sound design around the decay, not just the note.",
      microKeyTip:
        "Eb major on microKEY: Eb (black, between D and E), Bb (black, between A and B), Ab (black, between G and A). All three harmonic notes are black keys. Find them in sequence before recording: Eb (high), Bb (slightly lower), Ab (just below Bb). At 34 BPM each step is a half-note. Play each note with a firm, deliberate touch — velocity variation matters less here than note presence.",
      variation:
        "Replace Ab1 (step 12) with G1 (the major 3rd of Eb). The sus4 suspension disappears and the pattern becomes a simple root-fifth-third-fifth movement — more resolved, less yearning. Then try Gb1 (the major 3rd below Eb, the minor 3rd of Eb from below) — the darkest version. Three notes, same positions, radically different emotional registers.",
    },
  ],

  "rnb-4": [
    {
      name: "Gm Funk Bounce",
      key: "G minor",
      description:
        "R&B Bounce at 85 BPM, swing 57. The ghost G1 on step 4 (velocity 65) is the bounce: placed between D2 (step 3) and Bb1 (step 5), it creates a rapid triplet-feeling cluster at the 57% swing position. This cluster — D2 / G1 / Bb1 in quick succession across steps 3, 4, 5 — is how modern R&B bass creates groove without a human player. The bounce happens within 3 consecutive steps.",
      steps: [
        { step: 0, note: "G1", velocity: 100 },
        { step: 3, note: "D2", velocity: 80 },
        { step: 4, note: "G1", velocity: 65 },
        { step: 5, note: "Bb1", velocity: 85 },
        { step: 8, note: "D2", velocity: 100 },
        { step: 11, note: "G1", velocity: 70 },
        { step: 13, note: "F2", velocity: 80 },
        { step: 14, note: "D2", velocity: 65 },
      ],
      pluginSuggestion:
        "Scarbee Rickenbacker Bass (Kontakt, Fingered) — the rapid D2/G1/Bb1 cluster on steps 3–4–5 needs the articulated pluck of a bass guitar. A synthesized sub cannot produce distinct notes in three consecutive 16th steps (at 85 BPM this cluster is 212ms wide) without blurring. The Rickenbacker's fast attack and natural note separation makes each hit clear.",
      microKeyTip:
        "G minor on microKEY: G (white), D (white, 7 up), Bb (black, between A and B), F (white, 2 below G). The rapid cluster (D/G/Bb on steps 3/4/5) requires three quick notes in 212ms at 85 BPM. Record at 42 BPM: each step is a comfortable quarter note, the cluster becomes three sequential quarter notes. Play the cluster as a rhythmic exercise before the full take.",
      variation:
        "Remove the ghost G1 (step 4) and shift the Bb1 from step 5 to step 4. The cluster becomes two notes (D2 / Bb1) instead of three, the bounce is slightly less complex. This is the version that works better under more minimal arrangements — same idea, one note fewer, slightly more space around the second beat.",
    },
    {
      name: "Dm Groove Bounce",
      key: "D minor",
      description:
        "D minor bounce at 85 BPM, swing 57. A slightly smoother alternative to the G minor version — D minor has more jazz-adjacent character at this tempo and swing setting. Notes on steps 3, 5, 11, 13 are all swung positions; at 57% swing they fall noticeably later than straight time, creating a natural laid-back bounce. The G1 on step 14 (the 4th of D minor) is a chromatic approach that leads back to the bar start.",
      steps: [
        { step: 0, note: "D2", velocity: 100 },
        { step: 3, note: "A1", velocity: 75 },
        { step: 5, note: "C2", velocity: 85 },
        { step: 8, note: "D2", velocity: 100 },
        { step: 11, note: "F2", velocity: 70 },
        { step: 13, note: "A1", velocity: 75 },
        { step: 14, note: "G1", velocity: 65 },
      ],
      pluginSuggestion:
        "Massive X — medium portamento (30ms), Mono ON. The G1 on step 14 (just before the bar repeats to D2 on step 0) creates a chromatic tension note that slides gently into the root. At 30ms portamento and 85 BPM, the slide from G1 to D2 is a 52ms glide — brief, tasteful, barely perceptible. Use Scarbee Rickenbacker instead if you want a more guitar-bass feel with no slide.",
      microKeyTip:
        "D minor on microKEY: D (white), A (white, 5 up), C (white, just below D), F (white, 2 above D), G (white, 3 above E). All white keys — this pattern lives entirely on the white key layer. The simplest hand position: place the hand in D minor scale position (D E F G A Bb C) and record. At 57% swing at 42 BPM record tempo, the off-beat notes will feel slightly late, which is correct.",
      variation:
        "Replace G1 (step 14) with C#2 (the diminished 7th approach, a tritone above G1). The chromatic approach becomes more dissonant — instead of stepping up to the root, it takes an unexpected shortcut from below. At 85 BPM the C#2 flash on step 14 is 176ms: long enough to register as a surprise, short enough to feel like a flicker.",
    },
  ],
};
