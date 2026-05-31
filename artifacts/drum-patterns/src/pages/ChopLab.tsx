import { Link } from "wouter";
import { ArrowLeft, Scissors, Search, Layers, Music2, Package, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLang, useT } from "@/lib/i18n";
import { CHOPLAB_DE_TABS, CHOPLAB_DE_PACKS } from "@/locales/choplab-de";
type Step = string;
type Technique = {
  title: string;
  body: string;
  steps?: Step[];
  code?: string;
  tip?: string;
};
type Tab = {
  id: string;
  label: string;
  icon: React.ReactNode;
  subtitle: string;
  techniques: Technique[];
};

const TABS_EN: Tab[] = [
  {
    id: "find",
    label: "Find the Chop",
    icon: <Search className="w-4 h-4" />,
    subtitle: "How to identify and extract the right moments from a soul record before touching the hardware",
    techniques: [
      {
        title: "The 'Golden 8' — What You're Hunting For",
        body: "Most choppable moments in a soul record fall into 8 categories. Train your ear to identify them on first listen — don't just grab the obvious chorus loop.",
        steps: [
          "The intro drum break — usually 2–4 bars with minimal melody, perfect for a clean chop foundation",
          "The turnaround — the 2-beat fill before a new section begins, great for transition stabs",
          "The chord stab — single chord hit (1–2 beats) during a section break, very choppable",
          "The vocal ad-lib — a single phrase or breath between lines, humanizes a loop",
          "The bass & drum pocket — bars where the bass follows the kick exactly, very lockable",
          "The string swell — the moment strings build to a peak before dropping, atmospheric",
          "The piano run — a fast ascending or descending phrase, can be sliced note by note",
          "The breakdown — minimal arrangement (usually just drums + bass), cleanest sample real estate"
        ]
      },
      {
        title: "Your Packs: Long-Form Soul Loops (REVIVAL Soul Melodies, Soulful Dreams, ODYSSEY Soul Melodies)",
        body: "Long soul loops (8–32 bars) feel overwhelming at first. The trick is not chopping the whole thing — find the 2-bar gold inside it.",
        steps: [
          "Import the loop into Maschine. Before anything, just listen through completely — no pausing, no stopping. Note which bars feel the strongest",
          "On second listen: count the bars. Soul loops usually follow 4-bar phrases. Identify bars 1–4, 5–8, etc.",
          "Find the 'pocket bar' — usually bar 3 or 7 — where everything locks in. This is your primary chop source",
          "Look for any bar where the drums drop out — this is the melodic 'naked' section. Isolate it for a chord chop or piano chop",
          "Identify any 2-beat 'breath' moment — the half-bar pause before a new phrase. This becomes a stutter chop",
          "Target 4 specific moments to slice: (1) a full-energy 2-bar section, (2) a 1-beat stab, (3) a 2-beat melodic fragment, (4) a drum-only section",
          "Ignore everything else. 4 good chops beats 16 mediocre ones."
        ]
      },
      {
        title: "Your Packs: Lo-Fi & Chill Packs (Weekday, Bunny — Cymatics)",
        body: "Cymatics lo-fi packs are already processed and short — they're built for immediate use. Your job is matching them to a pattern feel, not extraction.",
        steps: [
          "These samples are usually 4 or 8 bars at a fixed BPM — check the filename for BPM info (e.g. 'weekday_loop_85bpm')",
          "In Maschine, turn off 'Warp' when loading (unless the BPM doesn't match your project). Lo-fi samples sound worse when pitch-warped",
          "Listen for the 'bright spot' — usually beat 3 or beat 4 of the 4-bar loop — and isolate that as a chop",
          "For Weekday: the piano and keys samples are the most versatile. Slice them into 2-beat pieces and you have instant stabs",
          "For Bunny: focus on the vinyl pops and noise elements as texture layers under your main sample, not as primary melody",
          "These packs work best layered: one lo-fi loop as the bed, one chop from Soulful Dreams or REVIVAL Soul Melodies on top"
        ]
      },
      {
        title: "Your Packs: Drum-Focused (Stickz Hip-Hop Toolkit, CHRONICLES Soul Melodies)",
        body: "Drum sample packs are used differently — you're not chopping them for melody, you're using them as rhythmic texture and replacement hits.",
        steps: [
          "Stickz Hip-Hop Toolkit: load individual hits (kick, snare, hat one-shots) directly into Maschine pads. Do not try to chop the full loops — use the one-shots",
          "CHRONICLES Soul Melodies: if it includes loops, look for drum breaks without melodic elements. 2-bar breaks are the target",
          "Use Detect Transients on drum breaks (more on this in the Chop tab) — drum transients are easy for Maschine to detect automatically",
          "Layer one drum break chop with your own kick and snare on top — you get the texture of the break without losing rhythmic control",
          "Use the drum loop as a send effect: route it to a separate channel, compress it hard (4:1, fast attack), and blend it underneath your main kit at -15 to -18dB. It adds dirt without being audible as a separate element"
        ]
      },
      {
        title: "Identifying Key and Tempo Before You Chop",
        body: "Chopping a sample without knowing its key causes major problems later. Do this step before loading into Maschine — it takes 2 minutes and saves hours.",
        steps: [
          "Open the sample in Maschine's software waveform editor. Hit Spacebar to play",
          "Hum or sing a bass note that fits underneath what you're hearing — this is roughly your root key",
          "Use a free piano tuner app on your phone (GuitarTuna, free) alongside the sample to identify the note",
          "Write the key somewhere visible (sticky note, phone note, etc.) — you'll need it when tuning your kick and bass later",
          "For tempo: look at the filename first — most pro packs include BPM in the name. If not, tap the BPM on Maschine's TAP button while listening",
          "Set your Maschine project tempo to match before loading the sample — this prevents Warp artifacts"
        ]
      }
    ]
  },
  {
    id: "chop",
    label: "Chop in MK3",
    icon: <Scissors className="w-4 h-4" />,
    subtitle: "Exact MK3 button sequences for every chopping workflow — Auto Slice, manual cuts, Slice to Pads",
    techniques: [
      {
        title: "Method 1: Auto Slice (Detect Transients) — Fastest",
        body: "Use for drum breaks and any sample with obvious rhythmic hits. Maschine detects peaks and cuts automatically. Takes under 60 seconds.",
        steps: [
          "Load your sample: drag from the Maschine browser onto any empty pad in Group A",
          "Select that pad (press the pad once to select it, it glows solid)",
          "In the Maschine software window: click the 'Sample' tab at the top of the plug-in area",
          "In the waveform display, right-click anywhere on the waveform → choose 'Slice' → 'Detect Transients'",
          "A sensitivity slider appears — move it right (more sensitive) for dense drum breaks, left (less sensitive) for sparse melodic loops. Start at 50% and adjust",
          "Click 'Apply' — you'll see vertical cut lines appear over the waveform",
          "Now click 'Slice to Pads' — each slice is mapped to a consecutive pad (Pad 1 = slice 1, Pad 2 = slice 2, etc.)",
          "On the hardware: press pads 1–8 to audition each slice. The pads light up in sequence",
          "If a slice is too long or too short: go back to the software, adjust sensitivity, re-apply"
        ],
        tip: "Best for: drum breaks from CHRONICLES Soul Melodies, Stickz Hip-Hop Toolkit, and any rhythmic elements in REVIVAL Soul Melodies."
      },
      {
        title: "Method 2: Manual Slice — Most Precise",
        body: "Use for melodic samples where you want exact control over cut points. Slower but gives you professional-level chops.",
        steps: [
          "Load the sample onto a pad. Select the pad.",
          "In Maschine software: click the 'Sample' tab → you see the full waveform",
          "Press Spacebar to play. Listen through once and note exactly where you want cuts (by counting beats or watching the playhead position)",
          "To set a manual slice point: stop playback. Click precisely on the waveform where you want the cut",
          "Right-click at that point → 'Add Slice Point' — a vertical line appears",
          "Repeat for every cut you want. Typical melodic chop has 4–8 slice points",
          "When done, click 'Slice to Pads' — all slices map to pads sequentially",
          "On the MK3 hardware: hold SHIFT + press the pad with your sample → this opens the hardware Sample Edit screen",
          "Use the 4D encoder (large knob) to scrub through the waveform and verify each slice sounds correct",
          "To adjust a slice point on hardware: navigate to the slice using the encoder, hold SHIFT + rotate the encoder to nudge the cut left or right"
        ],
        tip: "Best for: piano runs and chord stabs from Soulful Dreams Vol 1 & Vol 2, ODYSSEY Soul Melodies. Any melodic sample where transient detection makes wrong cuts."
      },
      {
        title: "Method 3: Slice Mode on the Pad (Hardware-Only Workflow)",
        body: "This method never opens the Maschine software — everything is done on the MK3 hardware. Slower but good for on-the-fly sessions.",
        steps: [
          "Load your sample onto a pad by pressing the Browser button, navigating with the encoder to your file, and pressing the encoder to load",
          "With the pad selected: press the small button labeled 'Pad' (or 'SAMPLING') to enter pad edit",
          "On the touchscreen: tap the 'Engine' tab",
          "Find the 'Playback Mode' setting — it currently shows 'Classic'. Tap it and change to 'Slice'",
          "Now scroll down in the Engine tab to find 'Start' and 'End' markers — these define slice regions",
          "Hold SHIFT and rotate the 4D encoder to set the Start point. Watch the sample position on screen",
          "Hold SHIFT + push the encoder down, then rotate to set the End point",
          "Each pad in the group can now hold a different start/end range — you're manually defining each chop as a separate 'region' on each pad",
          "This is slower than Method 2 but works completely offline, no laptop needed"
        ],
        tip: "Best for: live sessions, bus travel, any time the Maschine software isn't open. Also good for quick 2–3 chop jobs."
      },
      {
        title: "Naming and Saving Your Chop Group",
        body: "After chopping, save the Group immediately — Maschine doesn't auto-save individual pad chops. Losing a good chop setup is extremely frustrating.",
        steps: [
          "After Slice to Pads: all your chops are in Group A (or whichever group you loaded into)",
          "In Maschine software: right-click the Group header → 'Save Group As'",
          "Name it clearly: 'SOULFUL_DREAMS_V1_CHOP_92BPM_Am' — include pack name, BPM, and key",
          "Save location: choose 'User Library > Groups > [YourName] Chops'. This puts it in Maschine's browser for future projects",
          "On hardware: press FILE → Save → navigate to your User folder",
          "After saving, test: open a new empty Project, go to the Browser, find your saved Group, load it. Confirm all slices play correctly",
          "Back up the save file to an external drive or cloud storage — your chop library is your most valuable asset"
        ]
      },
      {
        title: "Pitch-Locking Individual Slices",
        body: "After slicing, you can pitch each slice independently — turning a chord sample into individual notes you can play melodically across the pads.",
        steps: [
          "After Slice to Pads: select Pad 1 (your first slice)",
          "On the touchscreen: go to the 'Pad' tab → find 'Tune' parameter",
          "Rotate the 4D encoder to transpose that slice up or down in semitones",
          "Repeat for each pad/slice — you're building a chromatic instrument from your sample",
          "Pro technique: take a single piano chord chop. Copy that chop to 8 pads. Tune each pad to a different note of the scale (root, 2nd, 3rd, 4th, 5th, 6th, 7th, octave). You've just built an instrument from one chop",
          "Press LOCK STEP to lock pitch changes to your pattern so pitches are remembered per-step",
          "Use Maschine's 'Chord' mode (SHIFT + pad) to play your transposed slices as chords — instant harmonic variation"
        ]
      }
    ]
  },
  {
    id: "arrange",
    label: "Arrange & Place",
    icon: <Layers className="w-4 h-4" />,
    subtitle: "How to arrange your chops rhythmically — which steps, how many bars, how to build variation",
    techniques: [
      {
        title: "The 2-Bar Chop Loop (Standard)",
        body: "The foundation of most sample-based hip hop and boom bap. The chop loops every 2 bars, the drum pattern stays constant beneath it.",
        steps: [
          "In Maschine, set your pattern length to 2 bars: press SHIFT + the PATTERN LENGTH button → set to 2 bars",
          "In Step Sequencer: select your chop pad (the one with the main loop or your primary chop slice)",
          "Place the chop on Step 1 only — let it ring through all 32 steps (2 bars × 16 steps = 32 steps total)",
          "Set this pad's 'One-Shot' mode on: in the pad Engine tab, set Playback Mode to 'One Shot' so it plays fully through when triggered",
          "Add your drum pattern in a separate Group — keep chops and drums in different Groups for independent mixing",
          "The chop should end just before Step 1 of bar 3 (the loop restart point). If it cuts off early: extend it by adjusting the sample End point. If it runs over: trim the End point",
          "Variation: place the chop on Step 1 of bar 1, and a different chop slice on Step 1 of bar 2 — gives a 2-bar ABAB chop pattern"
        ],
        tip: "Packs to use this with: Soulful Dreams Vol 1 & Vol 2 (use a 2-bar pocket section), ODYSSEY Soul Melodies (use the chorus pocket), REVIVAL Soul Melodies (the full-band sections)."
      },
      {
        title: "The Stutter Chop",
        body: "The stutter chop repeats a short fragment 2–3 times at a crucial moment. It's the signature technique of Pete Rock, DJ Premier, and Alchemist.",
        steps: [
          "Select your shortest slice — ideally a 1-beat or 2-beat chord hit or vocal phrase",
          "In Step Sequencer, place this short chop on: Step 12, Step 13, Step 14 (the last 3 steps of bar 1)",
          "Set each of these to trigger the same slice — they'll fire in rapid succession, creating the stutter",
          "Velocity: Step 12 at 90, Step 13 at 70, Step 14 at 50 — descending velocity makes the stutter taper off naturally",
          "The main longer chop plays through Steps 1–11, the stutter fires at 12–14, then silence at 15–16 before the next bar",
          "On the MK3: enter Velocity mode (push encoder in Step Sequencer) and set each step individually",
          "Advanced version: put the stutter on beat 4 of bar 2 only — so you hear it every 2 bars, not every bar. This feels more natural and less mechanical"
        ],
        tip: "Best with: single chord stabs from Soulful Dreams, piano hits from Weekday, the turnaround moments from any soul pack."
      },
      {
        title: "Connecting Chops to Pattern Types",
        body: "Different drum patterns call for different chop treatments. This is how professionals match the sample to the groove.",
        steps: [
          "BOOM BAP pattern (54–58% swing): use long, uncut samples (4–8 bars). The sample breathes over the beat — don't over-chop. 1–2 slices maximum",
          "HIP HOP modern pattern (tight, no swing): tighter chops, shorter fragments (1–2 beats each). 4–6 slices spread rhythmically across the bar",
          "R&B half-time pattern (63%+ swing, snare only on 3): use a chord stab that lands on beat 3 alongside the snare. Let it ring 2 beats. This creates 'the drop' feel",
          "R&B groove pattern: slow shimmering chops that evolve — use a long melodic section and slice it into 4 parts, each triggering on beats 1, 2, 3, 4 of bar 1 only",
          "Sparse boom bap (minimal kicks): the chop carries all the melodic weight — use a full-band chop with no slicing, just let it loop",
          "Go to any pattern in this app, look at the step grid, and find the empty spaces — those spaces are where your chop should NOT have busy hits. Match chop density to drum density inversely"
        ]
      },
      {
        title: "Building the A/B Chop Loop",
        body: "Professional beats almost always alternate between two chop variations — the A loop and the B loop. Here's how to build both.",
        steps: [
          "In Maschine, create Pattern A: your main 2-bar chop loop (the cleanest section of your sample)",
          "Right-click Pattern A in the Pattern list → Duplicate → rename to Pattern B",
          "In Pattern B: change the chop slice on Step 1 to a different, contrasting slice — slightly busier or slightly sparser",
          "Or in Pattern B: add a stutter on Steps 12–14 that wasn't in Pattern A",
          "In Scene view (SHIFT + SCENE): create Scene 1 with Pattern A playing, Scene 2 with Pattern B playing",
          "Toggle between scenes every 4 bars — A for 4 bars, B for 4 bars",
          "Create a Pattern C as a fill bar: a completely different chop slice, used only at section transitions (16 bars, 32 bars, etc.)",
          "Result: your beat never repeats identically for more than 4 bars, which is the standard for professional tracks"
        ]
      },
      {
        title: "The Reversed Chop (Cinematic Tension)",
        body: "Reversing a slice of your chop creates atmospheric tension without any external samples. Works especially well before a drop or section change.",
        steps: [
          "Select the pad with the chop you want to reverse",
          "In Maschine software: in the sample waveform view, find the 'Reverse' button (or right-click waveform → Reverse)",
          "On hardware: pad selected → SHIFT + the pad → Sample tab → find 'Reverse' toggle → activate it",
          "The sample now plays backward — most effective on chord stabs and string swells",
          "Place this reversed chop on the last 2 beats of bar 4 in your loop (Steps 13–16) — it 'pulls' the listener toward the next section",
          "Set the reversed pad's volume to 60% of your main chop — you want it felt, not heard",
          "Advanced: run the reversed chop through Raum in Shimmer mode at 80% wet — creates an ethereal swell that professional producers spend hours crafting with hardware"
        ]
      }
    ]
  },
  {
    id: "process",
    label: "Process & Mix",
    icon: <Music2 className="w-4 h-4" />,
    subtitle: "Making your chops sit in the mix — EQ, compression, saturation, and genre-specific treatment",
    techniques: [
      {
        title: "The Boom Bap Chop Stack (SP-1200 Character)",
        body: "Classic boom bap chops have a specific sonic signature: warm lows, reduced highs, slight grit. Here's the full signal chain.",
        steps: [
          "Select your chop Group channel in the Mixer",
          "Plugin 1: EQ → High-Shelf cut at 8,000 Hz, -4dB. This removes the digital brightness that separates modern samples from vintage SP-1200 sound",
          "Plugin 2: EQ (second band) → Low-Shelf boost at 120 Hz, +2dB. Brings up the warmth without muddying the kick frequency",
          "Plugin 3: Saturator (Maschine built-in) → Tape mode, Drive 20%. Low drive — you want warmth, not distortion",
          "Plugin 4: Lo-Fi (Maschine built-in) → Bits: 12, Rate: 0.80 (subtle). Barely audible but creates the bitcrushed texture",
          "Plugin 5: Compressor → Ratio 2:1, Attack 30ms, Release 200ms, Threshold -12dB. Gentle — just to glue the chop's dynamics",
          "Check: bypass all plugins and compare to the original. The processed version should sound warmer, slightly narrower, and less bright — like it came from a record, not a computer"
        ],
        code: "EQ (hi-shelf -4dB@8k) → EQ (lo-shelf +2dB@120Hz) → Saturator (Tape 20%) → Lo-Fi (12bit/0.80) → Compressor (2:1, 30ms A)"
      },
      {
        title: "The R&B Chop Treatment (Open and Warm)",
        body: "R&B chops should feel like they're floating — open reverb, gentle compression, no lo-fi processing. The opposite of boom bap.",
        steps: [
          "Select your chop Group channel in the Mixer",
          "Plugin 1: EQ → High-Shelf cut at 12,000 Hz, -2dB (subtle — just removes harshness without dulling the sample)",
          "Plugin 2: EQ → Gentle low-mid dip at 300–400 Hz, -1.5dB. This removes the 'boxiness' that makes samples sound like they're in a small room",
          "Plugin 3: Raum → Bloom mode, Size 0.55, Decay 1.5s, High Cut 5kHz, Wet 25%. This is the 'air' that makes R&B samples float",
          "Plugin 4: Compressor → Ratio 1.5:1, Attack 50ms (very slow — let transients breathe), Release 400ms. Barely touching the signal",
          "No saturation. No lo-fi. R&B samples are processed to sound clean and modern, not vintage",
          "Pan the chop slightly: if your sample has a strong left-right stereo image, enhance it with a Stereo Widener at 30% — just a touch of width"
        ],
        code: "EQ (-2dB@12k, -1.5dB@350Hz) → Raum (Bloom, 1.5s, 25%) → Compressor (1.5:1, 50ms A)"
      },
      {
        title: "Hip Hop Chop: Sidechain and Grit",
        body: "Modern hip hop chops get compressed hard and sidechain to the kick. This creates the pumping, breathing feel where the sample ducks on every kick hit.",
        steps: [
          "Plugin 1: Guitar Rig 7 → Tube Compressor component, Set Intensity to 40%. Adds harmonic saturation alongside compression",
          "Plugin 2: Compressor for sidechain → Add Compressor on chop channel. Set Sidechain Input to the kick pad channel",
          "Sidechain settings: Ratio 5:1, Attack 0ms, Release 80ms. Threshold until you get 3–5dB of gain reduction on kick hits",
          "Plugin 3: EQ → High-Pass filter at 40Hz (removes sub content from the sample that conflicts with your kick sub)",
          "Test: listen to kick + chop together. On every kick hit, the chop should duck slightly. You should feel it, not obviously hear it",
          "Adjust sidechain Release: shorter (60ms) = tighter, more obvious pump. Longer (120ms) = subtle, groovy",
          "Make sure the chop's core frequency range (200–4000Hz) is untouched by your sidechain — the dip should happen in the sub and low-mids, not the presence range"
        ]
      },
      {
        title: "Fixing Tempo and Warp Issues",
        body: "When a chop sounds slightly off-time or pitch-warped, these are the specific fixes to apply.",
        steps: [
          "Chop sounds pitched up/down: in the pad Tune parameter, adjust in semitones. Also check if Warp is enabled — in the Engine tab, look for 'Warp' toggle and turn it OFF for samples you don't want time-stretched",
          "Chop sounds rushed or dragging: the source sample's BPM doesn't match your project. Use TAP to set your project BPM to the sample's actual tempo first. Then turn Warp ON with mode 'Standard' — it will correct the timing",
          "Chop sounds flam-y (like it's doubled): two pads are triggering the same slice. Check if Pad Link is accidentally enabled. Also check if you've accidentally placed two events on the same step",
          "Chop sounds thin after transient detection cut it wrong: the slice cut the attack off. Fix: in Sample Edit, grab the slice point marker and drag it 5–10ms to the left of where the transient starts",
          "Chop sounds stuttery at loop points: the loop end doesn't have silence before the restart. Add a very short fade-out at the end of the sample (in Sample Edit: find 'Fade Out' and set to 10–20ms)"
        ]
      },
      {
        title: "Layering Two Chops Together",
        body: "The most advanced chopping technique: layering two samples from different packs so they sound like one cohesive loop.",
        steps: [
          "Load Chop A (e.g., a melodic chord loop from Soulful Dreams) on Pad 1",
          "Load Chop B (e.g., a vinyl-noise texture from Bunny or Weekday) on Pad 2",
          "Trigger both using Pad Link: SHIFT + PAD LINK → tap Pad 1, then tap Pad 2",
          "EQ Chop A: keep the mids and highs (100Hz to 12kHz). Apply the boom bap stack or R&B treatment from above",
          "EQ Chop B: keep only the low and high extremes — apply a Band-Pass filter centered at 2kHz, very wide (2 octaves). This makes it textural, not melodic",
          "Set Chop B volume to -12dB below Chop A. You should barely hear it solo, but feel it in the mix",
          "Optional: add Lo-Fi to Chop B only (not A) — gives the texture layer a different, grittier character than the main sample",
          "Test: mute Chop B and listen. Unmute and listen. The difference should feel like added life, not like a second sample playing"
        ]
      }
    ]
  },
];

type PackProfile = {
  name: string;
  type: string;
  bpmRange: string;
  choppability: "easy" | "medium" | "advanced";
  primaryTechnique: string;
  bestChops: string;
  tips: string[];
};

const PACK_PROFILES_EN: PackProfile[] = [
  {
    name: "REVIVAL Soul Melodies",
    type: "Soul / Gospel / Funk",
    bpmRange: "85–100 BPM",
    choppability: "medium",
    primaryTechnique: "2-bar loop with minimal slicing",
    bestChops: "Full band breakdowns, chord stabs, organ swells",
    tips: [
      "REVIVAL Soul Melodies' full-ensemble sections are best used as single 2-bar loops — don't over-chop them. The richness is in the full arrangement.",
      "Look for the gospel choir moments — a single held chord hit becomes an incredible stab chop.",
      "The organ and keys elements often work well reversed — load the reversed chop as a riser before a chorus section.",
    ]
  },
  {
    name: "Soulful Dreams Vol 1 & Vol 2",
    type: "Classic Soul / Vintage R&B",
    bpmRange: "70–95 BPM",
    choppability: "medium",
    primaryTechnique: "Manual slice for melodic fragments",
    bestChops: "Piano runs, string chord hits, bass & drum pocket bars",
    tips: [
      "These packs likely have a lot of long loops (8–16 bars). Focus on bars 3–4 and 7–8 where the arrangement hits its pocket.",
      "The string hits are gold — find any moment where strings land on a chord and cut it as a single 1-beat slice.",
      "Layer the Soulful Dreams sample with a Weekday lo-fi texture underneath at -15dB for depth.",
    ]
  },
  {
    name: "ODYSSEY Soul Melodies",
    type: "Neo Soul / Contemporary Soul",
    bpmRange: "75–90 BPM",
    choppability: "easy",
    primaryTechnique: "Detect Transients for rhythmic sections",
    bestChops: "Clean melodic loops, chord progressions, vocal phrases",
    tips: [
      "Neo soul packs are usually well-labeled with key and BPM — use that info first so you don't have to find it by ear.",
      "The 'clean' character of neo soul samples means they work in R&B and hip hop without processing — you don't always need the boom bap stack.",
      "Look for any phrase that sounds like it's 'asking a question' (an unresolved chord progression) — these sit beautifully under a verse without competing with vocals.",
    ]
  },
  {
    name: "CHRONICLES Soul Melodies",
    type: "Hip Hop / Sample-based",
    bpmRange: "85–105 BPM",
    choppability: "easy",
    primaryTechnique: "Auto Slice (Detect Transients)",
    bestChops: "Drum breaks, melodic loops designed for chopping",
    tips: [
      "CHRONICLES Soul Melodies-type packs are usually designed to be chopped — the transient detection will work well on first try.",
      "Use the drum elements to replace your factory kit sounds — run the drum break at -15dB under your main kick/snare for grit.",
      "The melodic loops are typically shorter (1–2 bars) and already suited to immediate pattern placement without heavy processing.",
    ]
  },
  {
    name: "Weekday (Cymatics)",
    type: "Lo-Fi / Indie / Chill",
    bpmRange: "75–95 BPM",
    choppability: "easy",
    primaryTechnique: "Load and play — minimal chopping needed",
    bestChops: "Piano keys, lo-fi loops as texture layers, vinyl noise",
    tips: [
      "Weekday samples are pre-processed for lo-fi character — don't add more lo-fi plugins on top, or they'll sound too degraded.",
      "The piano and electric piano samples work best when you just pick the first 2 beats and loop them — no complex slicing required.",
      "Use the vinyl crackle elements from Weekday as a send effect on your drum bus for instant boom bap grit.",
    ]
  },
  {
    name: "BUNNY Pack",
    type: "Lo-Fi / Bedroom / Soft",
    bpmRange: "65–85 BPM",
    choppability: "easy",
    primaryTechnique: "Texture layering, not melodic chopping",
    bestChops: "Ambient pads, noise textures, soft key phrases",
    tips: [
      "Bunny is intentionally 'soft' — it works best as the texture layer behind a harder sample, not as the primary chop.",
      "The pad and ambient elements are long (4–8 bars) and designed to loop. Load them as-is on a Group pad and leave them running continuously.",
      "If you chop melodic elements from Bunny: use them only in the first 2 beats of a bar — they're too soft to carry a full loop.",
    ]
  },
  {
    name: "Stickz Hip-Hop Toolkit",
    type: "Drum One-Shots & Fills",
    bpmRange: "N/A (one-shots)",
    choppability: "easy",
    primaryTechnique: "Load individual hits directly to pads",
    bestChops: "Rim hits, snare fills, hi-hat variations",
    tips: [
      "Don't try to chop Sticks as loops — load the individual hits directly onto separate pads.",
      "Replace your factory snare with a Sticks snare for variety: keep the same pattern, just swap the sound source on that pad.",
      "Use the drum fills from Sticks as a one-shot fill trigger: load the fill on a pad, set it to One-Shot mode, and trigger it manually at the end of every 8 or 16 bars.",
    ]
  },
];

const CHOPPABILITY_COLOR: Record<PackProfile["choppability"], string> = {
  easy: "#10b981",
  medium: "#f59e0b",
  advanced: "#ef4444",
};

export default function ChopLab() {
  const [activeTab, setActiveTab] = useState(TABS_EN[0].id);
  const [expandedTip, setExpandedTip] = useState<string | null>(null);
  const { lang } = useLang();
  const t = useT();

  const allTabs: Tab[] = TABS_EN.map((enTab, i) => {
    const deTab = CHOPLAB_DE_TABS[i];
    if (lang !== "de" || !deTab) return enTab;
    return {
      id: enTab.id,
      icon: enTab.icon,
      label: deTab.label,
      subtitle: deTab.subtitle,
      techniques: deTab.techniques,
    };
  });

  const packProfiles = PACK_PROFILES_EN.map((enP, i) => {
    const deP = CHOPLAB_DE_PACKS[i];
    if (lang !== "de" || !deP) return { ...enP, choppabilityLabel: enP.choppability };
    return {
      ...enP,
      type: deP.type,
      primaryTechnique: deP.primaryTechnique,
      bestChops: deP.bestChops,
      tips: deP.tips,
      choppabilityLabel: deP.choppabilityLabel,
    };
  });

  const currentTab = allTabs.find(tb => tb.id === activeTab)!;

  const choppabilityLabel = (c: PackProfile["choppability"]) => {
    if (lang === "de") {
      return c === "easy" ? "Einfach" : c === "medium" ? "Mittel" : "Fortgeschritten";
    }
    return c === "easy" ? "Easy" : c === "medium" ? "Medium" : "Advanced";
  };

  return (
    <div className="min-h-[100dvh] bg-background text-foreground pb-20">
      <header className="border-b border-border bg-background/95 sticky top-0 z-40">
        <div className="container mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            {t("Back to Patterns", "Zurück zu Patterns")}
          </Link>
          <div className="flex-1 flex flex-col items-center">
            <span className="font-bold text-base tracking-tight">Chop Lab</span>
            <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
              {t("Soul Sample Chopping — Find · Slice · Arrange · Mix", "Soul Sample Chopping — Finden · Slicen · Arrangieren · Mixen")}
            </span>
          </div>
          <div className="w-32" />
        </div>
      </header>

      <main className="container mx-auto px-6 py-10 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            {t(
              "A complete chopping workflow for Maschine MK3 — from identifying the right moments in your soul packs to processing the final loop professionally.",
              "Ein vollständiger Chopping-Workflow für Maschine MK3 — von der Identifikation der richtigen Momente in deinen Soul-Packs bis zur professionellen Verarbeitung des finalen Loops."
            )}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex gap-1 mb-10 border border-border rounded-lg p-1 w-fit">
          {allTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">{currentTab.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {currentTab.techniques.map((tech, ti) => {
              const key = `${activeTab}-${ti}`;
              const isExpanded = expandedTip === key;
              const activeTabIdx = TABS_EN.findIndex(t => t.id === activeTab);
              const de = lang === "de" && activeTabIdx >= 0 ? CHOPLAB_DE_TABS[activeTabIdx]?.techniques?.[ti] : undefined;
              const title = de?.title ?? tech.title;
              const body = de?.body ?? tech.body;
              const steps = de?.steps ?? tech.steps;
              const tip = de?.tip ?? tech.tip;
              const code = de?.code ?? tech.code;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: ti * 0.05 }}
                  className="border border-border rounded-lg bg-card overflow-hidden"
                >
                  <button
                    className="w-full text-left p-5 flex items-start justify-between gap-3 hover:bg-secondary/30 transition-colors"
                    onClick={() => setExpandedTip(isExpanded ? null : key)}
                  >
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-muted-foreground/50 shrink-0">{String(ti + 1).padStart(2, "0")}</span>
                        <span className="font-semibold text-sm text-foreground leading-tight">{title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed pl-6 line-clamp-2">{body}</p>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 text-muted-foreground shrink-0 mt-0.5 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 flex flex-col gap-4 border-t border-border/50 pt-4">
                      {steps && (
                        <ol className="space-y-2">
                          {steps.map((step: string, si: number) => (
                            <li key={si} className="flex gap-3 text-xs text-muted-foreground leading-relaxed">
                              <span className="font-mono shrink-0 mt-0.5 text-primary">{si + 1}.</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      )}
                      {code && (
                        <code className="text-xs font-mono bg-background border border-border px-3 py-2 rounded block text-muted-foreground leading-relaxed">
                          {code}
                        </code>
                      )}
                      {tip && (
                        <div className="flex items-start gap-2 bg-primary/5 border border-primary/20 rounded-md px-3 py-2">
                          <span className="text-[10px] font-mono text-primary uppercase tracking-widest shrink-0 mt-0.5">
                            {t("USE WITH", "NUTZEN MIT")}
                          </span>
                          <p className="text-xs text-muted-foreground leading-relaxed">{tech.tip}</p>                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Pack Profiles Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="mb-6">
            <h2 className="text-xl font-bold tracking-tight flex items-center gap-2 mb-1">
              <Package className="w-5 h-5 text-muted-foreground" />
              {t("Your Pack Profiles", "Deine Pack-Profile")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t(
                "Specific chopping strategy for each pack in your library — what to look for and how to approach it",
                "Spezifische Chopping-Strategie für jeden Pack in deiner Bibliothek — worauf du achten und wie du vorgehen solltest"
              )}            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {packProfiles.map((pack, i) => {
              return (
              <motion.div
                key={pack.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="border border-border rounded-xl bg-card p-5 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">{pack.name}</h3>
                    <p className="text-xs text-muted-foreground/60 mt-0.5">{pack.type}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-widest"
                      style={{ color: CHOPPABILITY_COLOR[pack.choppability], backgroundColor: `${CHOPPABILITY_COLOR[pack.choppability]}20` }}
                    >
                      {choppabilityLabel(pack.choppability)}                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground/50">{pack.bpmRange}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/40 block mb-0.5">
                      {t("Primary Technique", "Primäre Technik")}
                    </span>
                    <p className="text-muted-foreground leading-relaxed">{pack.primaryTechnique}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/40 block mb-0.5">
                      {t("Best Chops", "Beste Chops")}
                    </span>
                    <p className="text-muted-foreground leading-relaxed">{pack.bestChops}</p>
                  </div>
                </div>

                <div className="border-t border-border/40 pt-3">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/40 block mb-2">
                    {t("Tips", "Tipps")}
                  </span>
                  <ul className="space-y-2">
                    {pack.tips.map((tip, ti) => (
                      <li key={ti} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                        <span className="text-primary font-mono shrink-0">→</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>                </div>
              </motion.div>
              );
            })}
          </div>
        </motion.div>
      </main>

    </div>
  );
}
