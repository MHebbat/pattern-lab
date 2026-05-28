import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, FlaskConical, Map, GitBranch, Layers, MonitorSpeaker, ChevronRight } from "lucide-react";
import { getGenreColorVar } from "@/components/PatternCard";
import { motion } from "framer-motion";
import type { Genre } from "@/data/patterns";

// ─── Types ───────────────────────────────────────────────────────────────────

type Presence = "full" | "sparse" | "accent" | "off";

type SongSection = {
  name: string;
  bars: number;
  drums: Presence;
  hats: Presence;
  sample: Presence;
  bass: Presence;
  keys: Presence;
  pads: Presence;
  fx: Presence;
  note: string;
};

type VariationRow = {
  label: string;
  steps: boolean[];
  isGhost?: boolean;
};

type BeatVariation = {
  code: string;
  name: string;
  whenToUse: string;
  feel: string;
  rows: VariationRow[];
  maschineSteps: string[];
};

type LayerCard = {
  order: number;
  instrument: string;
  pack: string;
  packUrl: string;
  free: boolean;
  whenToIntroduce: string;
  processing: string;
  breathingTip: string;
};

// ─── Song Blueprint Data ─────────────────────────────────────────────────────

const songBlueprints: Record<Genre, { title: string; tempo: string; sections: SongSection[] }> = {
  "boom-bap": {
    title: "Classic Boom Bap Song Structure",
    tempo: "86–95 BPM · Swing 54–62%",
    sections: [
      { name: "Cold Open", bars: 4, drums: "sparse", hats: "off", sample: "off", bass: "off", keys: "off", pads: "full", fx: "full", note: "Drums only — kick and snare, no hats. Vinyl crackle from Weekday runs underneath. No melody yet. Establish the raw feel before anything else enters." },
      { name: "Verse 1-A", bars: 8, drums: "full", hats: "full", sample: "full", bass: "off", keys: "off", pads: "sparse", fx: "off", note: "Full drum groove enters with the sample on bar 1. No bass yet — let the sample and drums breathe together. The listener needs to feel the pocket before the bass confirms the key." },
      { name: "Verse 1-B", bars: 8, drums: "full", hats: "full", sample: "full", bass: "full", keys: "off", pads: "off", fx: "off", note: "Bass enters on bar 1 of 1-B. The trio of drums + sample + bass is now the complete arrangement. Keys or melody can enter on bar 6 as a preview before the pre-hook." },
      { name: "Pre-Hook", bars: 4, drums: "sparse", hats: "off", sample: "sparse", bass: "sparse", keys: "accent", pads: "off", fx: "accent", note: "Strip to half-time: kick on 1+3 only, snare on 3 only. Gradually open a low-pass filter on the sample over these 4 bars. The filter sweep signals something is coming. Bass plays root notes only." },
      { name: "Hook", bars: 8, drums: "full", hats: "full", sample: "full", bass: "full", keys: "full", pads: "sparse", fx: "off", note: "Everything lands at once. Keys/chords take center. Add a shaker or extra perc layer here that wasn't in the verse — creates the 'bigger' feeling without changing the core beat." },
      { name: "Verse 2", bars: 8, drums: "full", hats: "full", sample: "full", bass: "full", keys: "sparse", pads: "off", fx: "off", note: "Return to the groove but use the B-section beat variation (open hats instead of closed). Consider chopping the sample differently — same source, different slice. The familiar-but-different approach keeps interest." },
      { name: "Pre-Hook 2", bars: 4, drums: "sparse", hats: "off", sample: "accent", bass: "accent", keys: "off", pads: "off", fx: "accent", note: "Same strip-down as pre-hook 1 but remove even more. Just kick, snare, and bass root. The sample becomes a reverb tail only. Maximum tension — the hook will feel enormous when it hits." },
      { name: "Hook 2", bars: 8, drums: "full", hats: "full", sample: "full", bass: "full", keys: "full", pads: "sparse", fx: "off", note: "Identical to Hook 1 structurally, but consider adding a 1-bar drum fill at bar 7 to prevent exact repetition feeling lazy." },
      { name: "Bridge", bars: 4, drums: "off", hats: "off", sample: "sparse", bass: "sparse", keys: "sparse", pads: "full", fx: "full", note: "Drums completely off. Bass sustains. Sample pitched up 2 semitones (sounds 'lighter'). Bunny or Weekday pad swells into the space. This is the emotional peak — silence is the loudest thing you have." },
      { name: "Hook Out", bars: 8, drums: "full", hats: "full", sample: "full", bass: "full", keys: "full", pads: "full", fx: "off", note: "Full arrangement returns. Add everything that was held back: extra percussion, keys melody, pad underneath. This is the fullest the track ever gets. Ride it out." },
      { name: "Outro", bars: 4, drums: "sparse", hats: "off", sample: "off", bass: "off", keys: "off", pads: "full", fx: "full", note: "Mirror the Cold Open. Strip back to drums + vinyl crackle. Then gradually mute the drums too. The pad/crackle is the last thing heard. Full circle — the loop ends where it began." },
    ],
  },
  "hip-hop": {
    title: "Contemporary Hip Hop Song Structure",
    tempo: "92–110 BPM · Swing 50–54%",
    sections: [
      { name: "Intro", bars: 4, drums: "off", hats: "off", sample: "full", bass: "off", keys: "off", pads: "sparse", fx: "full", note: "Sample hook ONLY — no drums. This is the rap/hip hop intro move: establish the melody first, let the beat 'drop' when drums enter. Use the best 2-bar section of your sample. Weekday vinyl noise optional." },
      { name: "Verse 1-A", bars: 8, drums: "full", hats: "full", sample: "full", bass: "off", keys: "off", pads: "off", fx: "off", note: "Beat drops hard on bar 1. No warning. Full drums + sample simultaneously. Bass stays out — the sample handles the low-end feel until bar 5." },
      { name: "Verse 1-B", bars: 8, drums: "full", hats: "full", sample: "full", bass: "full", keys: "sparse", pads: "off", fx: "off", note: "808 or bass enters bar 1 of 1-B. This is where the beat gets heavy. Keys can appear as a small fill on the last 2 bars to set up the pre-hook." },
      { name: "Pre-Hook", bars: 4, drums: "full", hats: "sparse", sample: "sparse", bass: "full", keys: "off", pads: "off", fx: "accent", note: "Switch to the hi-hat variation — 16th notes instead of 8ths, or open hats only. The energy stays up but the texture changes. Bass can get busier here: more notes, more rhythmic. This tells the ear 'transition'." },
      { name: "Hook", bars: 8, drums: "full", hats: "full", sample: "full", bass: "full", keys: "full", pads: "sparse", fx: "off", note: "Everything full. Consider making the hook 'brighter' — push the high shelf +1.5dB on the master bus, or add a bright shaker on all 16th notes. The hook should FEEL different from the verse, not just sound different." },
      { name: "Verse 2", bars: 16, drums: "full", hats: "full", sample: "full", bass: "full", keys: "sparse", pads: "off", fx: "off", note: "Full groove from bar 1 — no build needed since we already established it. Introduce a new percussive element at bar 9 (conga, perc, extra shaker) that wasn't in verse 1. Small change, big psychological effect." },
      { name: "Pre-Hook 2", bars: 4, drums: "full", hats: "sparse", sample: "sparse", bass: "full", keys: "off", pads: "off", fx: "accent", note: "Same as pre-hook 1. Familiarity here is good — the listener knows what's coming and anticipates the hook drop." },
      { name: "Hook 2", bars: 8, drums: "full", hats: "full", sample: "full", bass: "full", keys: "full", pads: "sparse", fx: "off", note: "Identical to hook 1 but consider adding a 2-bar fill at bar 7. Or: double the hat speed (16th notes) for the last 2 bars of the hook to launch into verse/bridge." },
      { name: "Breakdown", bars: 4, drums: "accent", hats: "off", sample: "off", bass: "full", keys: "off", pads: "off", fx: "off", note: "808/bass ONLY + kick. Everything else off. This is the drill-adjacent breakdown moment — just the sub and the kick locking together. Maximum space. 4 bars feels like a reset." },
      { name: "Hook Out", bars: 8, drums: "full", hats: "full", sample: "full", bass: "full", keys: "full", pads: "full", fx: "off", note: "Full blast return from the breakdown. Hit immediately — no build, just drop. This is the most powerful moment in the song because of the contrast with the breakdown before it." },
      { name: "Outro", bars: 4, drums: "sparse", hats: "off", sample: "sparse", bass: "off", keys: "off", pads: "sparse", fx: "full", note: "Quick fade or abrupt cutoff. Hip hop often ends without a long outro — the track stops, the last bar of the hook plays out, done. Don't overstay your welcome." },
    ],
  },
  "rnb": {
    title: "Neo Soul / R&B Song Structure",
    tempo: "74–92 BPM · Swing 55–65%",
    sections: [
      { name: "Intro", bars: 8, drums: "off", hats: "off", sample: "off", bass: "off", keys: "full", pads: "full", fx: "sparse", note: "Keys and pads ONLY — no drums, no sample, no bass. Use The Gentleman or Scarbee Mark I (Kontakt) to establish the chord. Bunny or Odyssey Soul pad underneath. 8 full bars of pure harmony. R&B demands patience at the start." },
      { name: "Verse 1-A", bars: 8, drums: "sparse", hats: "off", sample: "full", bass: "off", keys: "sparse", pads: "full", fx: "off", note: "Drums enter but sparse — kick and rimshot only, no hats. Sample enters on bar 1. The contrast from the drums-free intro makes even a quiet kick feel powerful. Keep the keys from the intro — they transition smoothly." },
      { name: "Verse 1-B", bars: 8, drums: "full", hats: "full", sample: "full", bass: "full", keys: "sparse", pads: "sparse", fx: "off", note: "Full groove NOW — hats enter, bass enters, full drum pattern. This is the emotional commitment of the song. Everything should feel like it belongs together, not like it was layered. Use the neo soul bass (Scarbee Rickenbacker) at moderate volume." },
      { name: "Pre-Hook", bars: 4, drums: "full", hats: "sparse", sample: "sparse", bass: "full", keys: "full", pads: "accent", fx: "accent", note: "Drums stay full but hats reduce to 8ths. Sample becomes a background element. Keys push forward as the main melodic statement. The bass can do a small run here — let it breathe a bit more rhythmically. Build is emotional, not just dynamic." },
      { name: "Hook", bars: 8, drums: "full", hats: "full", sample: "full", bass: "full", keys: "full", pads: "sparse", fx: "off", note: "Complete arrangement. The keys here should be the most melodic they've been — play a full chord voicing (Cm9, Fm7, etc.) instead of single notes. Use the microKEY to record a live-feeling melody or chord on top of the sample." },
      { name: "Verse 2", bars: 12, drums: "full", hats: "full", sample: "full", bass: "full", keys: "sparse", pads: "off", fx: "off", note: "Full groove but 12 bars instead of 16 — shorter verses later in the song feel tighter and more intentional. Consider switching from closed to open hats for this verse (or alternating). The sample can be a different section." },
      { name: "Pre-Hook 2", bars: 4, drums: "full", hats: "sparse", sample: "accent", bass: "full", keys: "full", pads: "accent", fx: "off", note: "Same as before — the familiarity is comforting in R&B. Small variation: add the Bunny pad at low volume to fill the space between the sample elements." },
      { name: "Hook 2", bars: 8, drums: "full", hats: "full", sample: "full", bass: "full", keys: "full", pads: "sparse", fx: "off", note: "Repeat the hook structure. Consider adding the microKEY melody one octave higher than hook 1 — subtle brightening. Or add a light harmonic percussion (Sticks Toolkit rim hits) on the upbeats." },
      { name: "Bridge", bars: 8, drums: "off", hats: "off", sample: "off", bass: "sparse", keys: "full", pads: "full", fx: "full", note: "Everything off except: bass (sustain root note only), keys (full chord melody), pads (bloom wide with Raum Shimmer). 8 full bars. This is the most vulnerable, intimate moment. The key can modulate up a step here if you want an emotional lift." },
      { name: "Hook Out", bars: 8, drums: "full", hats: "full", sample: "full", bass: "full", keys: "full", pads: "full", fx: "off", note: "Drums explode back after the bridge silence. This is the peak of the emotional arc. Add everything — all layers, maximum keys melody, pads wide. The contrast with the bridge makes this feel enormous even though it's the same beat." },
      { name: "Outro", bars: 8, drums: "sparse", hats: "off", sample: "off", bass: "sparse", keys: "sparse", pads: "full", fx: "full", note: "Slow fade — don't cut abruptly. Strip elements one by one over 8 bars: drums out first (bar 2), bass out (bar 4), keys out (bar 6), just pads left (bar 7-8). The final sound is the pad decaying into reverb. R&B ends gracefully." },
    ],
  },
};

// ─── Beat Variations Data ─────────────────────────────────────────────────────

const beatVariations: Record<Genre, BeatVariation[]> = {
  "boom-bap": [
    {
      code: "A",
      name: "Main Groove",
      whenToUse: "Verse sections",
      feel: "Full pocket with hats and ghost notes",
      rows: [
        { label: "KICK",  steps: [true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false] },
        { label: "SNARE", steps: [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false] },
        { label: "GHOST", steps: [false,false,true,false,false,false,true,false,false,false,false,false,false,false,false,false], isGhost: true },
        { label: "HHAT",  steps: [true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false] },
      ],
      maschineSteps: [
        "Scene 1, Group A — your full beat as programmed.",
        "Set Group swing to 54–60%. This is the soul of the pattern.",
        "Vary hi-hat velocity manually: downbeats at 90, upbeats at 50-60.",
        "This scene runs for all verse sections and any fully arranged moments.",
      ],
    },
    {
      code: "B",
      name: "Stripped",
      whenToUse: "Intro, Outro, Cold Open",
      feel: "Skeleton — kick and snare only",
      rows: [
        { label: "KICK",  steps: [true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false] },
        { label: "SNARE", steps: [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false] },
        { label: "GHOST", steps: Array(16).fill(false), isGhost: true },
        { label: "HHAT",  steps: Array(16).fill(false) },
      ],
      maschineSteps: [
        "Duplicate Scene 1 → Scene 2. In Scene 2, right-click the hat pad → Mute in Scene.",
        "Also mute the ghost snare pad in Scene 2.",
        "Set kick velocity higher in Scene 2 (+10) — without hats it needs more presence.",
        "Use for the Cold Open (4 bars) and mirror it in the Outro.",
      ],
    },
    {
      code: "C",
      name: "Open Hat Groove",
      whenToUse: "Verse 2, B-section variation",
      feel: "Airy, looser — completely different texture",
      rows: [
        { label: "KICK",  steps: [true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false] },
        { label: "SNARE", steps: [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false] },
        { label: "GHOST", steps: [false,false,true,false,false,false,true,false,false,false,false,false,false,false,false,false], isGhost: true },
        { label: "OPEN",  steps: [false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false] },
      ],
      maschineSteps: [
        "Duplicate Scene 1 → Scene 3. In Scene 3, mute the closed hat pad.",
        "Activate the open hat pad on steps 2, 6, 10, 14 (the upbeats of each beat).",
        "Set open hat velocity to 65 — softer than the kick. It should float, not cut.",
        "Add a Choke Group between open and closed hats (both in Choke Group 1).",
      ],
    },
    {
      code: "D",
      name: "Fill Bar",
      whenToUse: "Bar 8 or 16 transition (1-bar pattern)",
      feel: "Snare cascade into the next section",
      rows: [
        { label: "KICK",  steps: [true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] },
        { label: "SNARE", steps: [false,false,false,false,true,false,false,false,false,false,true,true,true,true,true,true] },
        { label: "GHOST", steps: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false], isGhost: true },
        { label: "HHAT",  steps: [true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false] },
      ],
      maschineSteps: [
        "Create a 1-bar Pattern (Pattern 2) in your drum Group. Set it to 1 bar only.",
        "Program: kick bar 1 only, snare runs from step 10–15 with increasing velocity (60→120).",
        "Hats on steps 0–9 at velocity 70 flat, then silence as snare takes over.",
        "In the Maschine Arranger: insert this 1-bar pattern at every 8th or 16th bar as a transition.",
      ],
    },
    {
      code: "E",
      name: "Half-Time Bridge",
      whenToUse: "Bridge or breakdown section",
      feel: "Slow and massive — maximum space",
      rows: [
        { label: "KICK",  steps: [true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] },
        { label: "SNARE", steps: [false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false] },
        { label: "GHOST", steps: Array(16).fill(false), isGhost: true },
        { label: "HHAT",  steps: [true,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false] },
      ],
      maschineSteps: [
        "Create Pattern 3. Kick only on step 0 (beat 1). Snare only on step 8 (beat 3).",
        "Quarter-note hats: steps 0, 4, 8, 12. Velocity 55 flat.",
        "Kick velocity 105 — it's the only kick in the bar, it needs to feel enormous.",
        "Use this exclusively in the Bridge section (4–8 bars). Do NOT use it anywhere else.",
      ],
    },
  ],
  "hip-hop": [
    {
      code: "A",
      name: "Full Beat",
      whenToUse: "Verse sections from bar 1",
      feel: "Punchy, direct, immediate",
      rows: [
        { label: "KICK",  steps: [true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false] },
        { label: "SNARE", steps: [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false] },
        { label: "GHOST", steps: [false,false,true,false,false,false,false,false,false,false,false,false,false,false,true,false], isGhost: true },
        { label: "HHAT",  steps: [true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false] },
      ],
      maschineSteps: [
        "Scene 1 — your main verse beat. In hip hop, the verse beat drops immediately on bar 1.",
        "Keep swing between 50–53%. Hip hop is tighter than boom bap.",
        "Clap can double the snare — use Pad Link to trigger both simultaneously on steps 4 and 12.",
        "This scene runs the entire verse (16 bars). No switching mid-verse.",
      ],
    },
    {
      code: "B",
      name: "16th Hat Variation",
      whenToUse: "Pre-hook energy build",
      feel: "More urgent — texture shifts without changing the groove",
      rows: [
        { label: "KICK",  steps: [true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false] },
        { label: "SNARE", steps: [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false] },
        { label: "GHOST", steps: [false,false,true,false,false,false,false,false,false,false,false,false,false,false,true,false], isGhost: true },
        { label: "HHAT",  steps: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true] },
      ],
      maschineSteps: [
        "Duplicate Scene 1 → Scene 2. In Scene 2, add 16th note hats (all steps active).",
        "Set 16th hat velocity to 55 flat — much quieter than the main 8th hats.",
        "The 8th note hits will feel like accents over the 16th note bed automatically.",
        "Use this for the pre-hook ONLY (4 bars). Switch back to 8th hats for the hook.",
      ],
    },
    {
      code: "C",
      name: "Hook Groove",
      whenToUse: "Hook sections — needs to feel 'bigger'",
      feel: "Fuller, wider — add a shaker layer",
      rows: [
        { label: "KICK",  steps: [true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false] },
        { label: "SNARE", steps: [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false] },
        { label: "SHAKER", steps: [false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false] },
        { label: "HHAT",  steps: [true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false] },
      ],
      maschineSteps: [
        "Duplicate Scene 1 → Scene 3 for the hook. Add a Shaker pad on steps 2, 6, 10, 14.",
        "Shaker: use Sticks Toolkit or Chronicles shaker. Velocity 40 flat.",
        "You can also push the overall Group volume +1dB in Scene 3 — the hook should feel louder.",
        "Add a Reverb send on the snare at +20% in this scene only — creates 'bigger' snare for the hook.",
      ],
    },
    {
      code: "D",
      name: "Breakdown",
      whenToUse: "4-bar breakdown section before final hook",
      feel: "808 and kick only — strip to the bone",
      rows: [
        { label: "KICK",  steps: [true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false] },
        { label: "SNARE", steps: Array(16).fill(false) },
        { label: "GHOST", steps: Array(16).fill(false), isGhost: true },
        { label: "HHAT",  steps: Array(16).fill(false) },
      ],
      maschineSteps: [
        "Create Pattern 2: kick on steps 0 and 8 ONLY. Everything else completely silent.",
        "The 808 bass line continues from the previous section — it should carry the groove alone.",
        "Kick velocity 120 (maximum) — it's the only drum hit, it needs to hit like a wall.",
        "4 bars maximum. Any longer and it becomes boring. The contrast with the full return must be immediate.",
      ],
    },
    {
      code: "E",
      name: "Half-Time Drop",
      whenToUse: "Post-verse break or bridge",
      feel: "Half-speed feel — modern trap-adjacent",
      rows: [
        { label: "KICK",  steps: [true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false] },
        { label: "SNARE", steps: [false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false] },
        { label: "GHOST", steps: Array(16).fill(false), isGhost: true },
        { label: "HHAT",  steps: [true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false] },
      ],
      maschineSteps: [
        "Snare moves to beat 3 ONLY (step 8). Double kick hits on steps 0+2 for the half-time drag feel.",
        "Keep 8th note hats — they prevent the pattern from feeling too sparse.",
        "This works best at 100+ BPM where the half-time feel creates a perceived tempo halving.",
        "Use for 8 bars in the bridge or as a post-verse moment before the pre-hook.",
      ],
    },
  ],
  "rnb": [
    {
      code: "A",
      name: "Full R&B Groove",
      whenToUse: "Verse 1-B and all full sections",
      feel: "Silky and swung — the complete arrangement feel",
      rows: [
        { label: "KICK",  steps: [true,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false] },
        { label: "RIM",   steps: [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false] },
        { label: "GHOST", steps: [false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false], isGhost: true },
        { label: "HHAT",  steps: [true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false] },
      ],
      maschineSteps: [
        "Scene 1, full groove. Use Rimshot instead of Snare — it sits higher in the mix and leaves more low-mid space.",
        "Swing to 58–62%. R&B needs more swing than boom bap to feel natural.",
        "Ghost kicks (step 5) at velocity 50 — these are felt, not heard. They push the groove forward.",
        "Add Raum plate reverb on the rimshot: 0.8s decay, 30% wet. It should 'float' slightly.",
      ],
    },
    {
      code: "B",
      name: "Sparse Verse A",
      whenToUse: "Verse 1-A (first entry of drums)",
      feel: "Delicate — drums entering quietly after the pad intro",
      rows: [
        { label: "KICK",  steps: [true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false] },
        { label: "RIM",   steps: [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false] },
        { label: "GHOST", steps: Array(16).fill(false), isGhost: true },
        { label: "HHAT",  steps: Array(16).fill(false) },
      ],
      maschineSteps: [
        "Kick and rimshot only. No hats, no ghost notes. After 8 bars of pad-only intro, even a quiet kick feels significant.",
        "Kick velocity 75 — not loud. The kick is 'arriving', not hitting.",
        "Rimshot at velocity 80. Set a longer release envelope — let it ring a little more than usual.",
        "This runs for 8 bars (Verse 1-A). Then switch to Scene 1 (full groove) for Verse 1-B.",
      ],
    },
    {
      code: "C",
      name: "Shaker Groove",
      whenToUse: "Verse 2 variation or hook texture",
      feel: "Continuous texture — the shaker carries the 16th note groove",
      rows: [
        { label: "KICK",  steps: [true,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false] },
        { label: "RIM",   steps: [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false] },
        { label: "SHAKER", steps: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true] },
        { label: "HHAT",  steps: [true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false] },
      ],
      maschineSteps: [
        "Add a shaker on all 16 steps at velocity 30 flat — barely audible. It exists as a texture bed.",
        "The 8th note hats now float ABOVE the shaker, creating a depth of rhythm layers.",
        "Use a real shaker sound from Sticks Toolkit or Revival. Avoid synthetic sounds.",
        "This scene works for Verse 2 or alongside the hook keys layer to thicken the texture.",
      ],
    },
    {
      code: "D",
      name: "Bridge Pattern",
      whenToUse: "Bridge section — no drums at all",
      feel: "Complete silence from drums — pads and bass only",
      rows: [
        { label: "KICK",  steps: Array(16).fill(false) },
        { label: "RIM",   steps: Array(16).fill(false) },
        { label: "GHOST", steps: Array(16).fill(false), isGhost: true },
        { label: "HHAT",  steps: Array(16).fill(false) },
      ],
      maschineSteps: [
        "Create Pattern 2 — completely empty. No drums. Nothing.",
        "The bass group continues playing. The keys group continues. But no drums.",
        "In Maschine: mute the entire drum Group for these 8 bars. Use Scene mutes, not pad mutes.",
        "This is the most powerful variation. Silence IS the variation. Trust it.",
      ],
    },
    {
      code: "E",
      name: "Hook Expansion",
      whenToUse: "Hook Out — the fullest moment",
      feel: "Everything playing — peak energy with added conga/perc",
      rows: [
        { label: "KICK",  steps: [true,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false] },
        { label: "RIM",   steps: [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false] },
        { label: "CONGA", steps: [false,false,false,false,false,true,false,false,false,false,false,true,false,false,false,false] },
        { label: "HHAT",  steps: [true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false] },
      ],
      maschineSteps: [
        "Add Conga or Bongo (from Revival or Sticks Toolkit) on steps 5 and 11 at velocity 60.",
        "These syncopated percussion hits fill the spaces between the kick and rimshot.",
        "Also: push a Shaker layer underneath at velocity 25 — just texture.",
        "This is the final hook and Hook Out only. Never use it in the verse — the contrast must be earned.",
      ],
    },
  ],
};

// ─── Instrument Layer Data ───────────────────────────────────────────────────

const layerGuide: LayerCard[] = [
  {
    order: 1,
    instrument: "Kick + Snare / Rimshot",
    pack: "Sticks Toolkit",
    packUrl: "https://cymatics.fm",
    free: false,
    whenToIntroduce: "Bar 1 of every section except the pad intro. The foundation — nothing else matters if this doesn't groove.",
    processing: "Kick: low-pass at 200Hz to remove brittleness. Snare: Transient Master Attack 0, Sustain +2. Use Maschine's built-in compressor on the drum bus: 4:1, 20ms attack, 100ms release.",
    breathingTip: "Remove the kick entirely for 1 bar before the hook. The silence of the kick makes the hook feel like the ground appeared beneath your feet.",
  },
  {
    order: 2,
    instrument: "Hi-Hats + Shaker",
    pack: "Sticks Toolkit / Weekday",
    packUrl: "https://cymatics.fm/products/weekday-free-sample-pack",
    free: true,
    whenToIntroduce: "Wait 1 full section after kick/snare (or wait 8 bars). Hats arriving late creates a build effect even without adding new elements.",
    processing: "Closed hat: high-pass at 3kHz, gentle high-shelf boost +1.5dB at 10kHz. Shaker (from Weekday): no processing — the pre-processed texture is the point.",
    breathingTip: "Remove hats completely in the pre-hook for 2 bars. Then bring them back on beat 1 of the hook — the re-entry of the hat is one of the most satisfying moments in a beat.",
  },
  {
    order: 3,
    instrument: "Sample / Loop",
    pack: "Soulful Dreams Vol 1 & 2 / Odyssey Soul",
    packUrl: "https://cymatics.fm",
    free: false,
    whenToIntroduce: "Verse 1-A: enters with the full groove or just after kick entry. Never before drums in hip hop. Can be before drums in R&B (pads can appear alone).",
    processing: "High-pass at 60Hz (leave bass space). Gentle Compressor (2:1, 40ms attack). Add Raum in Grounded mode: 0.4s decay, 15% wet. Keep the sample 'in the room' with the drums.",
    breathingTip: "Apply a slow low-pass filter automation over 8 bars: start at 800Hz, open to full by bar 8. The gradual brightness increase builds tension without changing anything else in the arrangement.",
  },
  {
    order: 4,
    instrument: "Bass (Sub / Electric)",
    pack: "Massive X (Komplete 15) / Scarbee Rickenbacker",
    packUrl: "https://www.native-instruments.com/en/products/komplete/",
    free: false,
    whenToIntroduce: "Enter in Verse 1-B (second half of the verse). The bass confirming the key is a commitment — delay it for maximum impact. In R&B, delay it even longer.",
    processing: "Sub bass (Massive X): high-pass at 40Hz, gentle compression. Electric bass (Rickenbacker): gentle EQ boost at 250Hz for warmth, cut at 500Hz for clarity. Sidechain compress the bass to the kick: 4:1, 0ms attack, 80ms release.",
    breathingTip: "The bass does NOT need to play every bar. Let it drop out for 2 bars in the bridge — just the sustained root note. Space in the bass creates 10x more emotional impact than continuous movement.",
  },
  {
    order: 5,
    instrument: "Keys / Melody (microKEY)",
    pack: "The Gentleman / Scarbee Mark I (Kontakt)",
    packUrl: "https://www.native-instruments.com/en/products/komplete/",
    free: false,
    whenToIntroduce: "Hook sections primarily. Can preview in the last 2 bars of a pre-hook. Never in Verse 1-A — let the sample carry the melody alone first.",
    processing: "Piano/Rhodes: EQ dip at 350Hz (-2dB) to remove boxiness. Add Raum Bloom (1.2s, 30% wet). For microKEY recording: set quantize to 1/8 note AFTER recording (record freely first, then quantize).",
    breathingTip: "The melody should NOT play on every beat. Leave 1-beat rests between phrases — the silence between notes is the melody. Program notes that 'breathe' — a note held for 2 beats is worth more than 4 short notes.",
  },
  {
    order: 6,
    instrument: "Pad / Atmosphere",
    pack: "Bunny (Cymatics) / Revival",
    packUrl: "https://cymatics.fm",
    free: false,
    whenToIntroduce: "Can enter at the very beginning (pad-only intro in R&B). For hip hop / boom bap, enter in the hook at -18dB and gradually ride up to -12dB. The pad should feel like it was always there.",
    processing: "Load onto a single pad, One-Shot, long release (2s+). Add Raum Shimmer: 2.5s decay, 50% wet. EQ: high-pass at 200Hz (remove mud). The pad lives in the high-mid space, not the low end.",
    breathingTip: "The pad should run continuously throughout the bridge even when drums stop. It IS the breathing room — the thing that fills silence with emotional content instead of just leaving it empty.",
  },
  {
    order: 7,
    instrument: "FX / Transitions",
    pack: "Weekday (vinyl noise) / Maschine built-in FX",
    packUrl: "https://cymatics.fm/products/weekday-free-sample-pack",
    free: true,
    whenToIntroduce: "Only at section boundaries: the bar before a new section starts. Never mid-section. A riser into the hook. A downlifter into the bridge. Vinyl crackle in intros/outros.",
    processing: "Vinyl noise from Weekday: trigger on Step 0, let loop. Volume at -20dB max — texture only. Risers: pitch automation up +24 semitones over 4 bars. Downlifters: pitch down -24 semitones over 2 bars.",
    breathingTip: "Less is more with FX. ONE transition effect per section change. Using a riser AND a downlifter AND a cymbal roll all at the same moment cancels them all out. Pick one and commit.",
  },
];

// ─── Helper components ────────────────────────────────────────────────────────

const LAYER_KEYS: (keyof Omit<SongSection, "name" | "bars" | "note">)[] = [
  "drums", "hats", "sample", "bass", "keys", "pads", "fx",
];
const LAYER_LABELS: Record<string, string> = {
  drums: "Kick / Snare", hats: "Hi-Hats", sample: "Sample",
  bass: "Bass", keys: "Keys / Melody", pads: "Pad / Atmos", fx: "FX / Trans",
};

function presenceStyle(presence: Presence, color: string): React.CSSProperties {
  switch (presence) {
    case "full":   return { backgroundColor: color, opacity: 1 };
    case "sparse": return { backgroundColor: color, opacity: 0.45 };
    case "accent": return { backgroundColor: color, opacity: 0.2, outline: `1px dashed ${color}` };
    case "off":    return { backgroundColor: "rgba(255,255,255,0.05)" };
  }
}

function SongTimeline({ sections, color }: { sections: SongSection[]; color: string }) {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto pb-2">
        <div className="min-w-max">
          {/* Section headers */}
          <div className="flex gap-1 mb-1">
            <div className="w-28 shrink-0" />
            {sections.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveSection(activeSection === i ? null : i)}
                className="flex flex-col items-center gap-0.5 transition-opacity hover:opacity-80"
                style={{ width: `${Math.max(s.bars * 10, 40)}px` }}
              >
                <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/70 truncate w-full text-center">{s.name}</span>
                <span
                  className="text-[8px] font-mono px-1 py-0.5 rounded"
                  style={{ color, backgroundColor: `${color}20` }}
                >
                  {s.bars}b
                </span>
              </button>
            ))}
          </div>

          {/* Layer rows */}
          {LAYER_KEYS.map(layer => (
            <div key={layer} className="flex gap-1 mb-0.5">
              <div className="w-28 shrink-0 flex items-center">
                <span className="text-[10px] font-mono text-muted-foreground/60 truncate">{LAYER_LABELS[layer]}</span>
              </div>
              {sections.map((s, i) => (
                <div
                  key={i}
                  onClick={() => setActiveSection(activeSection === i ? null : i)}
                  className="h-5 rounded-sm cursor-pointer transition-all hover:opacity-90"
                  style={{
                    width: `${Math.max(s.bars * 10, 40)}px`,
                    ...(presenceStyle(s[layer] as Presence, color)),
                    outline: activeSection === i ? `1px solid ${color}` : undefined,
                  }}
                />
              ))}
            </div>
          ))}

          {/* Legend */}
          <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border/30">
            {(["full", "sparse", "accent", "off"] as Presence[]).map(p => (
              <div key={p} className="flex items-center gap-1.5">
                <div className="w-4 h-3 rounded-sm" style={presenceStyle(p, color)} />
                <span className="text-[9px] font-mono text-muted-foreground/50 uppercase tracking-widest">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active section note */}
      {activeSection !== null && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="border rounded-lg p-4 bg-card"
          style={{ borderColor: `${color}40` }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-sm" style={{ color }}>{sections[activeSection].name}</span>
            <span className="text-[10px] font-mono text-muted-foreground/50">{sections[activeSection].bars} bars</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{sections[activeSection].note}</p>
        </motion.div>
      )}
      {activeSection === null && (
        <p className="text-[11px] text-muted-foreground/40 font-mono text-center">Click any section to see arrangement notes</p>
      )}
    </div>
  );
}

function MiniStepGrid({ rows, color }: { rows: VariationRow[]; color: string }) {
  return (
    <div className="flex flex-col gap-1">
      {rows.map((row, ri) => (
        <div key={ri} className="flex items-center gap-2">
          <span className="text-[9px] font-mono text-muted-foreground/50 w-12 shrink-0 text-right">{row.label}</span>
          <div className="flex gap-px flex-1">
            {row.steps.map((on, si) => (
              <div
                key={si}
                className="flex-1 h-4 rounded-[1px] transition-colors"
                style={
                  on
                    ? { backgroundColor: color, opacity: row.isGhost ? 0.35 : 1 }
                    : { backgroundColor: "rgba(255,255,255,0.06)" }
                }
              />
            ))}
          </div>
        </div>
      ))}
      {/* Beat markers */}
      <div className="flex items-center gap-2">
        <div className="w-12 shrink-0" />
        <div className="flex flex-1 gap-px">
          {Array.from({ length: 16 }, (_, i) => (
            <div key={i} className="flex-1 flex justify-center">
              {i % 4 === 0 && (
                <span className="text-[7px] font-mono text-muted-foreground/30">{Math.floor(i / 4) + 1}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VariationCard({ variation, color }: { variation: BeatVariation; color: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg bg-card overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full p-4 flex items-start gap-4 text-left hover:bg-white/5 transition-colors"
      >
        <div
          className="shrink-0 w-8 h-8 rounded-md flex items-center justify-center font-bold text-sm"
          style={{ backgroundColor: `${color}25`, color }}
        >
          {variation.code}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-sm text-foreground">{variation.name}</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ color, backgroundColor: `${color}15` }}>
              {variation.whenToUse}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">{variation.feel}</p>
        </div>
        <ChevronRight className={`w-4 h-4 shrink-0 text-muted-foreground/40 transition-transform mt-0.5 ${open ? "rotate-90" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-border/60 p-4 space-y-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-2">Step grid</span>
            <MiniStepGrid rows={variation.rows} color={color} />
          </div>
          <div className="pt-3 border-t border-border/40">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-2">Maschine MK3 — how to create it</span>
            <ol className="space-y-2">
              {variation.maschineSteps.map((step, i) => (
                <li key={i} className="flex gap-2.5 text-xs text-muted-foreground leading-relaxed">
                  <span className="font-mono shrink-0 opacity-50" style={{ color }}>{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}

function LayerCardComponent({ layer, color }: { layer: LayerCard; color: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg bg-card overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full p-4 flex items-start gap-4 text-left hover:bg-white/5 transition-colors"
      >
        <div
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2"
          style={{ borderColor: color, color }}
        >
          {layer.order}
        </div>
        <div className="flex-1 min-w-0">
          <span className="font-semibold text-sm text-foreground">{layer.instrument}</span>
          <div className="flex items-center gap-1.5 mt-1 flex-wrap">
            {layer.free && (
              <span className="text-[9px] font-mono font-bold px-1 py-0.5 rounded border border-emerald-500/40 text-emerald-400 bg-emerald-500/10">FREE</span>
            )}
            <a
              href={layer.packUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="text-[10px] font-mono hover:opacity-70 transition-opacity"
              style={{ color }}
            >
              {layer.pack}
            </a>
          </div>
        </div>
        <ChevronRight className={`w-4 h-4 shrink-0 text-muted-foreground/40 transition-transform mt-0.5 ${open ? "rotate-90" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-border/60 p-4 grid sm:grid-cols-3 gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-1.5">When to introduce</span>
            <p className="text-xs text-muted-foreground leading-relaxed">{layer.whenToIntroduce}</p>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-1.5">Processing</span>
            <p className="text-xs text-muted-foreground leading-relaxed">{layer.processing}</p>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 block mb-1.5">Breathing room tip</span>
            <p className="text-xs text-muted-foreground leading-relaxed">{layer.breathingTip}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function ArrangerWorkflow({ color }: { color: string }) {
  const steps = [
    { step: "1", title: "Set up Groups correctly", detail: "Group A = Drums (kick, snare, hats, perc — all on separate pads within the group). Group B = Bass (one Massive X or Kontakt instrument). Group C = Sample. Group D = Keys/Chords. Group E = Pads. Each group handles its own internal mixing." },
    { step: "2", title: "Create Pattern A and Pattern B per Group", detail: "In each Group, create 2 Patterns: Pattern 1 is the Main version, Pattern 2 is the Variation. For drums: Pattern 1 = full groove, Pattern 2 = stripped or open hats. For bass: Pattern 1 = full bass line, Pattern 2 = root notes only. For sample: Pattern 1 = full loop, Pattern 2 = quiet/filtered version." },
    { step: "3", title: "Create Scenes for each song section", detail: "Scene 1: Intro. Scene 2: Verse A. Scene 3: Verse B. Scene 4: Pre-Hook. Scene 5: Hook. Scene 6: Bridge. Scene 7: Outro. Name each scene using SHIFT + the scene pad, then select 'Rename'. Short, clear names (V1-A, HOOK, BRDG)." },
    { step: "4", title: "Assign Patterns to Scenes", detail: "For each Scene: press the scene pad to activate it. Then for each Group, hold the Group button and select which Pattern plays in that Scene. In Verse A Scene: Drum Pattern 1, Bass Pattern 2 (roots only), Sample Pattern 1, Keys off. In Hook Scene: all Pattern 1s, everything active." },
    { step: "5", title: "Set Scene loop lengths", detail: "Right-click each Scene → Set length. Intro = 4 bars. Verses = 8 or 16 bars. Pre-Hook = 4 bars. Hook = 8 bars. Bridge = 4-8 bars. The length determines how long Maschine plays the Scene before stopping or advancing." },
    { step: "6", title: "Use the Arranger timeline", detail: "Press SHIFT + SONG on the MK3 to enter Arranger mode. Drag each Scene to the timeline in order: Intro → V1-A → V1-B → Pre-Hook → Hook → V2 → Pre-Hook → Hook → Bridge → Hook Out → Outro. Double-click any scene block to set its exact bar count." },
    { step: "7", title: "Add the Fill Pattern at transitions", detail: "Between major section changes (pre-hook → hook, verse → pre-hook): insert the 1-bar Fill Pattern (Pattern 3 in the drum Group) in the Arranger. It appears as a 1-bar block before the new section. This is the 'snare roll' that launches each new section." },
    { step: "8", title: "Program Group mutes per Scene", detail: "In each Scene, you can mute entire Groups. Bridge Scene: mute the drum Group entirely. Intro Scene: mute the bass and keys Groups. Right-click a Group in Scene view → Mute in Scene. This is different from pad mutes — it affects the entire Group output." },
    { step: "9", title: "microKEY live performance", detail: "Connect Korg microKEY via USB. In Maschine preferences > MIDI: enable microKEY as input. In the Keys Group: activate MIDI learn. Now you can play chords live over the arranged beat while Maschine plays through the Song. Record: hold REC + PLAY and play on the microKEY into the active Pattern." },
    { step: "10", title: "Export the arrangement", detail: "When the arrangement is finalized: File > Export Audio > Master Output. Set range to 'Arrangement'. File format: WAV, 24-bit, 48kHz. This exports the complete arranged song as a stereo mixdown. Or use File > Export Audio > Individual Groups to export stems for each instrument layer." },
    { step: "11", title: "The 'listen back' rule", detail: "After building the full arrangement, close Maschine and open the exported audio in any player. Listen without touching anything for the full duration. Note the moments that feel too long, too empty, or too busy. Go back and fix only those moments. One session of listening = more improvement than 2 hours of tweaking in real time." },
    { step: "12", title: "Breathing room checklist", detail: "Before calling it done, verify: (1) At least one 4-bar section with no drums. (2) At least two points where hats are completely removed. (3) The bass does NOT play in the intro. (4) The sample filters open on at least one pre-hook. (5) The last section ENDS — no long fadeout unless it's R&B. These five rules will make any arrangement feel professional." },
  ];

  return (
    <div className="space-y-3">
      <div className="p-4 rounded-lg border border-border/50 bg-card/40 mb-6">
        <p className="text-xs text-muted-foreground leading-relaxed">
          The Maschine MK3 workflow below assumes you have your drum Group, bass Group, sample Group, and keys Group already set up from the Chop Lab and Pattern pages. This is the arrangement layer that sits on top of all of that — turning a single-bar loop into a full song structure.
        </p>
      </div>
      {steps.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.04 }}
          className="flex gap-4 border border-border rounded-lg p-4 bg-card"
        >
          <div
            className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold font-mono"
            style={{ backgroundColor: `${color}20`, color }}
          >
            {s.step}
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-sm text-foreground">{s.title}</span>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.detail}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

const TABS = [
  { id: "blueprint", label: "Song Blueprint", icon: Map },
  { id: "variations", label: "Beat Variations", icon: GitBranch },
  { id: "layers", label: "Instrument Layers", icon: Layers },
  { id: "arranger", label: "Maschine Arranger", icon: MonitorSpeaker },
] as const;

type TabId = typeof TABS[number]["id"];

export default function SongLab() {
  const [activeGenre, setActiveGenre] = useState<Genre>("boom-bap");
  const [activeTab, setActiveTab] = useState<TabId>("blueprint");
  const color = getGenreColorVar(activeGenre);

  const blueprint = songBlueprints[activeGenre];
  const variations = beatVariations[activeGenre];

  return (
    <div className="min-h-[100dvh] bg-background text-foreground pb-20">
      <header className="border-b border-border bg-background/95 sticky top-0 z-40">
        <div className="container mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="flex-1" />
          <div className="flex items-center border border-border rounded-md overflow-hidden">
            {(["boom-bap", "hip-hop", "rnb"] as Genre[]).map(g => (
              <button
                key={g}
                onClick={() => setActiveGenre(g)}
                className="px-3 py-2 text-xs font-mono uppercase tracking-widest transition-colors"
                style={activeGenre === g ? { backgroundColor: `${getGenreColorVar(g)}20`, color: getGenreColorVar(g) } : { color: "var(--muted-foreground)" }}
              >
                {g === "boom-bap" ? "Boom Bap" : g === "hip-hop" ? "Hip Hop" : "R&B"}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FlaskConical className="w-5 h-5 text-muted-foreground" />
            <h1 className="text-3xl font-bold tracking-tight">Song Lab</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            {blueprint.title} · {blueprint.tempo}
          </p>
          <p className="text-sm text-muted-foreground/60 mt-1">
            Beat variations, instrument layering order, breathing room techniques, and a step-by-step Maschine MK3 arrangement workflow.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex border border-border rounded-lg overflow-hidden mb-8">
          {TABS.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-3 text-sm font-medium transition-colors"
                style={activeTab === tab.id ? { backgroundColor: `${color}20`, color } : { color: "var(--muted-foreground)" }}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Blueprint tab */}
        {activeTab === "blueprint" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-1">Song Structure Overview</h2>
              <p className="text-sm text-muted-foreground">Visual map of each section — how many bars and which layers are active. Click a section to read the arrangement notes.</p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card mb-8">
              <SongTimeline sections={blueprint.sections} color={color} />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {blueprint.sections.map((s, i) => (
                <div key={i} className="border border-border/50 rounded-lg p-4 bg-card/40">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-sm" style={{ color }}>{s.name}</span>
                    <span className="text-[10px] font-mono text-muted-foreground/50">{s.bars} bars</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Variations tab */}
        {activeTab === "variations" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-1">Beat Variations</h2>
              <p className="text-sm text-muted-foreground">
                Five scene-based variations from your single base pattern. Each is a different Scene in Maschine — same Group, different Pattern and pad mutes. Click any variation to see the step grid and Maschine instructions.
              </p>
            </div>
            <div className="space-y-3">
              {variations.map((v, i) => (
                <VariationCard key={i} variation={v} color={color} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Layers tab */}
        {activeTab === "layers" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-1">Instrument Layers</h2>
              <p className="text-sm text-muted-foreground">
                The order to add instruments to your beat — from foundation to texture. Each layer includes pack references, processing settings, and a breathing room tip for when to pull it back.
              </p>
            </div>
            <div className="space-y-3">
              {layerGuide.map((layer, i) => (
                <LayerCardComponent key={i} layer={layer} color={color} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Arranger tab */}
        {activeTab === "arranger" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-1">Maschine MK3 Arranger — Full Workflow</h2>
              <p className="text-sm text-muted-foreground">
                12 steps from single loop to complete exported song. Specific to Maschine MK3 hardware and software with Korg microKEY as live MIDI input.
              </p>
            </div>
            <ArrangerWorkflow color={color} />
          </motion.div>
        )}
      </main>
    </div>
  );
}
