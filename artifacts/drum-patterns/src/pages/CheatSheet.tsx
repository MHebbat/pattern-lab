import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft, Settings, Music, Volume2, Sliders, Zap, Layers,
  Play, ChevronDown, Terminal, BookOpen, ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang, type Lang } from "@/lib/i18n";
import { CHEATSHEET_DE } from "@/locales/cheatsheet-de";

// ─── Types ───────────────────────────────────────────────────────────────────

type TabId = "first-session" | "core-controls" | "boom-bap" | "hip-hop" | "rnb" | "fx-chains" | "song-building";

type Tip = {
  title: string;
  body: string;
  steps?: string[];
  code?: string;
  badge?: string;
};

type TabDef = {
  id: TabId;
  icon: React.ElementType;
  label: string;
  short: string;
  color: string;
  intro: string;
  sections: { heading?: string; tips: Tip[] }[];
};

// ─── Content ─────────────────────────────────────────────────────────────────

const TABS: TabDef[] = [
  // ── First Session ────────────────────────────────────────────────────────
  {
    id: "first-session",
    icon: Play,
    label: "First Session",
    short: "Start",
    color: "#22c55e",
    intro: "New to Maschine, or starting a fresh beat? Run through every step below in order. By the end you'll have a working 1-bar drum loop ready for sampling.",
    sections: [
      {
        tips: [
          {
            title: "Create a new Project",
            badge: "Step 1",
            body: "Naming your project correctly saves time when you're deep in a session and need to find it later. Use a consistent naming scheme from the start.",
            steps: [
              "Power on Maschine MK3 hardware, then open Maschine software on your computer",
              "In the software: press FILE → New Project (or Cmd/Ctrl + N)",
              "Name your project using the pattern: BEAT_[DATE]_[GENRE]  e.g. BEAT_20260101_BOOMBAP",
              "Choose a folder — keep all projects in one root folder (e.g. ~/Music/PatternLab/)",
              "Press Save — a new empty project with 8 Groups (A–H) is now active"
            ]
          },
          {
            title: "Set BPM and time signature",
            badge: "Step 2",
            body: "BPM is the first creative decision that shapes everything else. Set it before loading any sounds — it affects how samples play back.",
            steps: [
              "Look at the top of the Maschine software header — find the BPM display",
              "Click the BPM field and type your value, or use the hardware: hold SHIFT and turn the large 4D encoder",
              "Boom Bap: 84–96 BPM  |  Hip Hop (modern): 75–95 BPM  |  R&B / Neo Soul: 70–88 BPM",
              "Time signature: leave at 4/4 for all standard drum patterns",
              "Tap Tempo shortcut: press SHIFT + TAP on hardware to set BPM by tapping the beat"
            ]
          },
          {
            title: "Organize your Groups",
            badge: "Step 3",
            body: "Groups are Maschine's drum machines. One Group = one set of 16 pads. Organizing them by function from the start prevents chaos later.",
            steps: [
              "Press the GROUP button on the hardware — pads A1–D4 now represent Groups A–H",
              "Group A (pad A): Main Drums — kick, snare, hats, clap, shaker (Pads 1–8)",
              "Group B (pad B): Extra Percussion — rim, tambourine, extra layers (optional)",
              "Group C (pad C): Bass & Sub — bass samples, 808 sub, melodic bass (optional)",
              "Groups D–H: leave empty for now — you'll add melodic elements later",
              "Press GROUP again to return to pad view — you're now in Group A"
            ]
          },
          {
            title: "Load your drum sounds",
            badge: "Step 4",
            body: "Use a consistent pad layout every session so muscle memory kicks in. This layout mirrors the standard MPC workflow.",
            steps: [
              "Make sure you're in Group A (press GROUP → tap pad A → press GROUP again)",
              "Pad 1 (A1): Main Kick — punchy, strong transient, the anchor of your beat",
              "Pad 2 (A2): Snare / Clap — your main backbeat sound",
              "Pad 3 (A3): Closed Hi-Hat — the rhythmic spine of the pattern",
              "Pad 4 (A4): Open Hi-Hat — your 'breath' accent",
              "Pad 5 (A5): Clap or Snap — secondary backbeat layer",
              "Pad 6 (A6): Shaker / Tambourine — groove glue running at 16ths",
              "Pad 7 (A7): Rimshot — for fills and variation",
              "Pad 8 (A8): Sub Kick / 808 — tuned sub layer below the main kick",
              "To load: double-click any pad in the software, browse Samples → navigate to your pack"
            ]
          },
          {
            title: "Set up Choke Groups",
            badge: "Step 5",
            body: "Choke Groups make open and closed hats cut each other off — like a real cymbal. Without this, they ring simultaneously and sound fake.",
            steps: [
              "Select Pad 3 (Closed Hi-Hat) in the software",
              "In the pad settings, find the MIDI tab → look for 'Choke Group'",
              "Set Pad 3's Choke Group to 1",
              "Select Pad 4 (Open Hi-Hat)",
              "Set Pad 4's Choke Group to 1 (same group as the closed hat)",
              "Optional: set Pad 2 (Snare) and Pad 7 (Rim) to Choke Group 2 so they can't stack",
              "Test: program a step where open and closed hat overlap — the closed hat should cut the open hat"
            ]
          },
          {
            title: "Program your first kick pattern",
            badge: "Step 6",
            body: "Start with the simplest kick pattern possible. You can always add complexity later. The goal is to feel the groove, not to impress yourself.",
            steps: [
              "Press STEP SEQ on the hardware — the pads now represent 16 steps",
              "Select Pad 1 (kick) using the GROUP/PAD selection buttons",
              "Classic boom bap starter: press steps 1 and 9 (beats 1 and 3)",
              "Play the loop — you should hear two solid kick hits per bar",
              "To add syncopation: add a light kick at step 11 (the 'and' of beat 3) at velocity 70",
              "Use the 4D encoder push (velocity mode) to give the beat 1 kick a velocity of 110 and beat 3 a velocity of 100"
            ]
          },
          {
            title: "Program the snare",
            badge: "Step 7",
            body: "Snare on beats 2 and 4 is the foundation of almost every style covered here. Don't overthink the placement — nail the velocity.",
            steps: [
              "In Step Sequencer mode, select Pad 2 (Snare)",
              "Press steps 5 and 13 (the 2 and 4 positions in a 16-step grid)",
              "Push the 4D encoder to enter Velocity mode",
              "Set step 5 velocity to 100 and step 13 velocity to 105 — the second snare is usually slightly louder",
              "Optional ghost note: add a hit at step 3 or step 14 at velocity 35–45",
              "Play back — the kick and snare should lock together without either drowning the other"
            ]
          },
          {
            title: "Program hi-hats",
            badge: "Step 8",
            body: "Hi-hats define the energy level and genre. Simple 8th notes read as boom bap; dense 16ths push into hip hop; heavy 16ths with swing feel like R&B.",
            steps: [
              "In Step Sequencer mode, select Pad 3 (Closed Hi-Hat)",
              "For boom bap: press steps 1, 3, 5, 7, 9, 11, 13, 15 (every other step = 8th notes)",
              "For hip hop: press all 16 steps (every step = 16th notes)",
              "Enter Velocity mode → set downbeats (1, 5, 9, 13) to velocity 80, all others to 55",
              "Select Pad 4 (Open Hi-Hat) → place a single hit at step 9 (classic boom bap placement)",
              "Set the open hat velocity to 75 — it's an accent, not the loudest element"
            ]
          },
          {
            title: "Set swing and groove",
            badge: "Step 9",
            body: "Swing is applied per Group in Maschine, which is more flexible than on an MPC. Set it now before you get attached to how the pattern sounds quantized.",
            steps: [
              "Press GROUP → select Group A (your drum group)",
              "On the touchscreen: tap the second tab — 'Groove'",
              "From the groove type dropdown, select 'Swing'",
              "Rotate the 4D encoder to set Amount: 54% for boom bap, 52% for hip hop, 60–63% for R&B",
              "Press SHIFT + encoder to fine-tune in 0.1% increments",
              "Listen to the pattern with swing applied — it should feel like it's breathing, not stumbling"
            ]
          },
          {
            title: "Save as a reusable template",
            badge: "Step 10",
            body: "You've just built the hardest part: a configured, organized, grooved drum group. Save this as a template so you never start from scratch again.",
            steps: [
              "Press FILE → Save As",
              "Name it TEMPLATE_[GENRE] — e.g. TEMPLATE_BOOMBAP or TEMPLATE_HIP HOP",
              "Save to your templates folder (e.g. ~/Music/PatternLab/templates/)",
              "From now on: always start new beats by opening this template and doing File → Save As with the new project name",
              "Next step: go to 'Boom Bap', 'Hip Hop', or 'R&B' tabs above for deeper technique guides"
            ]
          }
        ]
      }
    ]
  },

  // ── Core Controls ─────────────────────────────────────────────────────────
  {
    id: "core-controls",
    icon: Settings,
    label: "Core Controls",
    short: "Controls",
    color: "#6366f1",
    intro: "Exact button paths and screen navigation for every essential Maschine MK3 operation. Hardware-first — every instruction starts with what to press on the device.",
    sections: [
      {
        heading: "Step Sequencer",
        tips: [
          {
            title: "Enter the Step Sequencer",
            body: "The Step Sequencer is where you build drum patterns step by step. Each pad = one 16th note. Lit pads = active hits.",
            steps: [
              "Press the STEP SEQ button (top-left area of the MK3, above the pads)",
              "The 16 pads now represent the 16 steps of your pattern",
              "Select which instrument pad you're editing with the GROUP / PAD buttons",
              "Press any step pad to toggle it on (lit) or off (dark)",
              "Use SHIFT + left/right arrow to move between bars if your pattern is longer than 1 bar"
            ]
          },
          {
            title: "Change Step Resolution (1/16 → 1/32 → 1/64)",
            body: "Use finer resolutions for hi-hat rolls or triplet fills inside one pattern while keeping kicks and snares at 1/16.",
            steps: [
              "In Step Sequencer mode, press SHIFT + STEP SEQ",
              "The screen shows available resolutions: 1/4, 1/8, 1/16, 1/32, 1/64",
              "Turn the 4D encoder (large knob, right of the screen) to select your resolution",
              "Press the encoder to confirm",
              "Critical: resolution is per-pad — switch to the hi-hat pad first, set it to 1/32, then switch back to kick at 1/16"
            ]
          },
          {
            title: "Set Velocity Per Step",
            body: "Velocity variation is the difference between a robotic pattern and a human groove. Ghost notes: 30–50. Normal hits: 70–90. Accents: 100–120.",
            steps: [
              "Enter Step Sequencer mode and select your pad (e.g. snare)",
              "Push the 4D encoder — screen switches to Velocity mode",
              "The pads now display velocity bars instead of on/off",
              "Hold a step pad and move the 4D encoder up/down to adjust its velocity",
              "Or: hold the step pad and use the touch strip on the left side of the pads",
              "Push the encoder again to return to step edit mode"
            ]
          }
        ]
      },
      {
        heading: "Groove & Swing",
        tips: [
          {
            title: "Set Group Swing",
            body: "Swing in Maschine is applied per Group. Your kick group can be straight while your hi-hat group has MPC-style swing — like a real MPC3000.",
            steps: [
              "Press the GROUP button (top row, left side)",
              "Select the Group you want to swing (A–H, shown on the pads)",
              "On the screen, navigate to the second tab: 'Groove'",
              "Rotate the 4D encoder to select 'Swing' from the groove options",
              "Hold SHIFT and rotate the encoder to set the percentage",
              "50% = straight  |  54–58% = classic boom bap  |  60–65% = heavy R&B swing",
              "Repeat for each Group — hats and kicks can have different swing amounts"
            ]
          },
          {
            title: "Humanize a Pattern",
            body: "Humanize adds random timing and velocity offsets — turns grid-perfect patterns into something that breathes. Apply to hats and light percussion only.",
            steps: [
              "Make sure you're in the pattern you want to humanize",
              "On the MK3 touchscreen, tap 'Edit' in the Pattern menu",
              "Tap 'Humanize' — a menu appears with two sliders: Timing and Velocity",
              "Set Timing: 8–12 ticks for subtle feel, 15–20 ticks for loose / drunk feel",
              "Set Velocity: 15–25 for natural dynamics, 30+ starts sounding too random",
              "Tap Apply — this is permanent on that pattern. Undo with Ctrl+Z if needed"
            ]
          }
        ]
      },
      {
        heading: "Live Performance",
        tips: [
          {
            title: "Use Note Repeat for Live Hat Rolls",
            body: "Note Repeat fires a pad at a set rate while you hold it. Use for hi-hat rolls and triplet fills in real time during recording.",
            steps: [
              "Press NOTE REPEAT button (above the pads, right side)",
              "The bottom display shows Rate, Gate, and other settings",
              "Turn knob 1 to select the Rate: 1/8, 1/16, 1/32, 1/32T (triplet)",
              "Turn knob 2 to set Gate (lower = tighter, more staccato rolls)",
              "Hold any pad — it fires at your selected rate",
              "To lock Note Repeat: hold NOTE REPEAT + tap the pad once",
              "Press NOTE REPEAT again to exit"
            ]
          },
          {
            title: "Record Knob Automation Live",
            body: "Record real-time automation for any knob — filter cutoff, pitch, reverb send — directly into your pattern as it loops.",
            steps: [
              "Start playback (press PLAY)",
              "Hold the REC button — don't press, hold it",
              "While holding REC, turn any knob on the hardware (filter, volume, pitch)",
              "Maschine records your knob movements as automation into the pattern",
              "Release REC to stop recording",
              "Play back to hear your automation",
              "To edit: press SHIFT + the automated knob to see the automation curve"
            ]
          }
        ]
      },
      {
        heading: "Routing",
        tips: [
          {
            title: "Set Up a Choke Group",
            body: "Choke Groups make open and closed hi-hats cut each other off — just like a real cymbal. Without this, they ring simultaneously and sound fake.",
            steps: [
              "Press the pad for your Closed Hi-Hat to select it",
              "On the touchscreen, tap the 'MIDI' tab for that pad",
              "Find 'Choke Group' — assign it to Group 1 (or any number 1–16)",
              "Now select your Open Hi-Hat pad",
              "Assign it to the same Choke Group number",
              "Test: play a pattern where open and closed hats overlap — the closed hat now cuts the open hat",
              "Same principle works for any pair that should mute each other"
            ]
          },
          {
            title: "Link Pads (Trigger Multiple Sounds at Once)",
            body: "Pad Link fires multiple pads from a single trigger. Use this to layer a sub kick with a punchy kick, or a clap with a rimshot.",
            steps: [
              "Hold SHIFT + press the PAD LINK button",
              "Tap the pad you want to be the 'master' trigger (e.g. your main kick on pad 1)",
              "Then tap each pad you want to fire alongside it (e.g. sub kick on pad 8)",
              "Both pads fire whenever pad 1 is triggered",
              "To remove a link: repeat the process and tap the linked pad to deselect it",
              "Each linked pad can still be processed independently (separate EQ, FX, routing)"
            ]
          }
        ]
      }
    ]
  },

  // ── Boom Bap ─────────────────────────────────────────────────────────────
  {
    id: "boom-bap",
    icon: Music,
    label: "Boom Bap",
    short: "Boom Bap",
    color: "#f59e0b",
    intro: "How to recreate SP-1200 and MPC3000 magic in Maschine. Every technique here is built around the Havoc, Premier, Pete Rock, and 9th Wonder approach to drums.",
    sections: [
      {
        heading: "Swing & Timing",
        tips: [
          {
            title: "Dialing the MPC Swing (54–58%)",
            body: "The MPC3000 ran at a fixed swing timing. On Maschine, 54% is the closest equivalent at 90 BPM. Here's how to set it exactly.",
            steps: [
              "Press GROUP → select your drum group (e.g. Group A)",
              "On the touchscreen, tap the second tab: 'Groove'",
              "Tap the Groove Type dropdown → select 'Swing'",
              "Rotate the 4D encoder to set Amount to 54% (watch the screen value)",
              "Press SHIFT + encoder to fine-tune in 0.1% increments",
              "Repeat for each Group — kick+snare together, hats separate at 56–58%",
              "Test the groove by playing the pattern and adjusting ±1% until it locks"
            ]
          },
          {
            title: "Ghost Snare Workflow",
            body: "Ghost snares are the heartbeat of boom bap. They fill micro-spaces between main snare hits and make the pattern feel alive.",
            steps: [
              "Enter Step Sequencer, select your snare pad",
              "Push the 4D encoder to enter Velocity mode",
              "Add steps at positions 2, 7, 14, or 15 (the gaps between main hits on 4 and 12)",
              "Set those steps to velocity 30–45 by holding the step and moving the encoder down",
              "The main snare on steps 4 and 12 should stay at 100–115",
              "Play back — ghost notes should be felt, barely heard",
              "Pro tip: nudge a ghost step ±2 ticks late using the Event Editor (SHIFT + EVENTS) for extra looseness"
            ]
          }
        ]
      },
      {
        heading: "Sound Design",
        tips: [
          {
            title: "Tuning the Kick to Your Sample",
            body: "Boom bap lives and dies on kick tuning. If your kick doesn't harmonize with the sample chop, the beat sounds off-key even if everything else is right.",
            steps: [
              "Load your main sample chop first — identify its root note by ear",
              "Select your kick pad",
              "On the touchscreen, tap the 'Tune' parameter under the pad settings",
              "Use the 4D encoder to pitch the kick up or down in semitones",
              "Stop when the kick feels 'inside' the sample harmonically",
              "Sub kick: set to the same note as the main kick, then press SHIFT + encoder to drop it exactly 12 semitones (one octave down)",
              "Play the kick while the sample loops — you should feel them locking together"
            ]
          },
          {
            title: "Open Hi-Hat Placement (The 'Breath')",
            body: "A single well-placed open hat in a bar of boom bap creates a natural breathing point that closed hats alone can't achieve.",
            steps: [
              "Enter Step Sequencer, select your Open Hi-Hat pad",
              "Confirm it's in the same Choke Group as your Closed Hi-Hat",
              "Classic open hat position: step 9 (the 16th note after beat 3)",
              "Secondary classic position: step 6 (the 'and' of beat 2)",
              "Set its velocity to 70–80 — accent, not statement",
              "The closed hat should be silent on whichever step the open hat lands",
              "One open hat per bar. That's usually enough."
            ]
          },
          {
            title: "Lo-Fi Bitcrusher Stack",
            body: "That SP-1200 grit comes from a specific processing chain. Here's how to replicate it in Maschine's built-in effects.",
            steps: [
              "Select your master drum Group in the mixer",
              "Add Plugin 1: Saturator → Mode: Tape → Drive: 25–35%",
              "Add Plugin 2: Lo-Fi → Bits: 12 (not lower — 8 is too degraded), Rate: 0.7",
              "Add Plugin 3: EQ → High-Shelf filter at 10kHz → cut by 4–6dB",
              "This removes digital harshness while keeping presence"
            ],
            code: "Signal chain: Saturator (Tape, 30%) → Lo-Fi (12bit, 0.7) → EQ (hi-shelf -5dB @10kHz)"
          }
        ]
      }
    ]
  },

  // ── Hip Hop ───────────────────────────────────────────────────────────────
  {
    id: "hip-hop",
    icon: Zap,
    label: "Hip Hop",
    short: "Hip Hop",
    color: "#60a5fa",
    intro: "West Coast, East Coast, Dilla, Metro, and everything in between — programmed correctly. These techniques cover both classic and contemporary hip hop production.",
    sections: [
      {
        heading: "Layering & Architecture",
        tips: [
          {
            title: "Building the Layered Kick",
            body: "Hip hop kicks are almost always two sounds: a punchy 'click' that cuts through, and a sub 'boom' that's felt in the body.",
            steps: [
              "Load your main kick (punchy, short decay, heavy transient) on Pad 1",
              "Load a sub bass hit or sine wave sample on Pad 2 — tune it to your key",
              "Hold SHIFT + PAD LINK, tap Pad 1 (master), then tap Pad 2 (linked)",
              "Now Pad 1 fires both sounds together",
              "On Pad 1's channel: boost 60–100Hz slightly for body",
              "On Pad 2's channel: high-pass filter above 150Hz — keep only the sub",
              "Result: a kick with a punch layer on top and a separately tunable sub underneath"
            ]
          },
          {
            title: "Snap vs. Clap: Choosing the Right Sound",
            body: "A finger snap sounds completely different from a clap. Snaps = West Coast / Bay Area. Claps = East Coast anthems. Each sits differently in a mix.",
            steps: [
              "For a snap: load a dry finger snap sample, no reverb at all",
              "Pan the snap slightly right (R15–25) — snaps typically sit off-center",
              "Add a very short plate reverb (0.15s decay) just to glue it to the room",
              "For a clap: load your clap sample, pan center",
              "Add a medium room reverb (0.4–0.6s decay, pre-delay 10ms)",
              "Compress the clap hard: ratio 6:1, attack 2ms, release 150ms",
              "Layer a secondary clap pitched -2 semitones at velocity 60 underneath for thickness"
            ]
          }
        ]
      },
      {
        heading: "Timing & Feel",
        tips: [
          {
            title: "Dilla-Style Loose Timing",
            body: "J Dilla intentionally pushed elements off the grid — sometimes early, sometimes late — to create a 'human drunk' feel. In Maschine, this is done via the Event Editor.",
            steps: [
              "Program your pattern at 0% swing, perfectly quantized first",
              "Press SHIFT + EVENTS to open the Event Editor",
              "Select the event (step) you want to push off-grid",
              "Hold the event and rotate the 4D encoder to nudge its position by ticks (1 bar = 384 ticks)",
              "For 'late' feel: nudge kicks +6 to +12 ticks late (after the beat)",
              "For 'leaning forward': nudge snares -4 to -8 ticks early",
              "Apply Humanize at low timing (8ms) to hats only — NOT kicks and snares",
              "Result: feels like a drummer who plays with feeling, not a machine"
            ]
          },
          {
            title: "Hi-Hat Roll Density Control",
            body: "Hip hop hats range from simple 8ths to dense 16ths to explosive 32nd fills. Control density in real time without reprogramming the whole pattern.",
            steps: [
              "Program your base hat pattern in Step Sequencer at 1/16 resolution",
              "To add a 32nd roll at a specific step: press SHIFT + STEP SEQ, change resolution to 1/32",
              "Switch to your hi-hat pad — each pad now represents a 1/32nd note",
              "Program the fill only in the steps where you want the roll (e.g. last 8 steps = last half of bar)",
              "Switch back to 1/16 for the main pattern",
              "Alternative: use Note Repeat at 1/32 rate during live recording — hold the hat pad during the roll moment",
              "Set velocity of roll notes progressively: 50→60→70→80 for a natural crescendo"
            ]
          },
          {
            title: "Sidechain Compression (Pump Effect)",
            body: "Sidechaining makes hats duck slightly on every kick hit, creating a pumping, breathing groove. This is in almost every modern hip hop track.",
            steps: [
              "In the Mixer, select the channel you want to duck (e.g. hi-hats)",
              "Press the + button on that channel → choose 'Compressor'",
              "In the Compressor settings, find 'Sidechain Input'",
              "Change Sidechain Input from Internal to the kick channel (usually Ch1 or Pad 1)",
              "Set Compressor: Attack 0ms, Release 80ms, Ratio 8:1",
              "Adjust Threshold until you get 4–6dB of gain reduction on kick hits",
              "Adjust Release to control how fast hats come back — shorter = tighter, longer = more obvious pump"
            ]
          }
        ]
      }
    ]
  },

  // ── R&B ───────────────────────────────────────────────────────────────────
  {
    id: "rnb",
    icon: Volume2,
    label: "R&B",
    short: "R&B",
    color: "#ec4899",
    intro: "Half-time feels, rimshot programming, shakers, and the dynamics that make R&B breathe. These techniques cover Neo Soul, contemporary R&B, and soulful hip hop production.",
    sections: [
      {
        heading: "Groove Architecture",
        tips: [
          {
            title: "Programming the Half-Time Snare",
            body: "R&B and Neo Soul frequently use a half-time snare — the snare lands on beat 3 only (step 8), making the pattern feel like it's moving at half speed.",
            steps: [
              "Enter Step Sequencer, select your snare pad",
              "Delete snare hits from steps 5 and 13 (the normal 2 and 4 positions)",
              "Place a snare hit on step 9 only (beat 3)",
              "Set this snare's velocity to 110–120 — it's the only snare hit, so it needs to carry the whole bar",
              "Add a very wide reverb (plate or hall, 1.5–2.0s decay, 40% wet)",
              "The kick now needs more rhythmic interest — use displacement and syncopation in the kick pattern",
              "This approach is used in Frank Ocean, D'Angelo, and most Neo Soul tracks"
            ]
          },
          {
            title: "Shaker as Groove Glue",
            body: "A shaker track running at 16th notes is invisible when the track is loud, but its absence is immediately felt. It fills rhythmic gaps and gives the beat forward momentum.",
            steps: [
              "Load a shaker sample (or a hi-hat sample with short decay and high pitch)",
              "In Step Sequencer, activate ALL 16 steps for the shaker",
              "Push the 4D encoder to enter Velocity mode",
              "Downbeats (steps 1, 5, 9, 13): set velocity 60",
              "All other steps (upbeats): set velocity 30–40",
              "This accent pattern creates natural breathing even though all 16 steps are active",
              "Add a High-Pass filter on the shaker channel: cut everything below 3kHz — you want the click, not the body",
              "Pan it slightly right to separate from the hi-hat"
            ]
          },
          {
            title: "Heavy Swing for Neo Soul (60–65%)",
            body: "R&B groove requires heavier swing than boom bap. 63% or higher gives patterns that hypnotic sway. The mismatch between groups is the secret.",
            steps: [
              "Press GROUP → select your hi-hat or percussion group",
              "Navigate to Groove tab on the touchscreen",
              "Set Swing to 63% — at this amount the off-beats fall noticeably late",
              "Now set your kick group's Groove to 57% (slightly lower than hats)",
              "Set the snare / rimshot group to 60% swing",
              "This mismatch creates a layered groove feel — each layer swings slightly differently",
              "Play back and listen: kick should feel grounded, hats should fall into the pocket"
            ]
          }
        ]
      },
      {
        heading: "Sound Placement",
        tips: [
          {
            title: "Setting Up a Rimshot Instead of Snare",
            body: "R&B and Neo Soul often use a rimshot or side-stick — drier, more delicate, sits higher in frequency so it doesn't clash with vocals.",
            steps: [
              "Load a rimshot or side-stick sample on a pad (separate from your snare pad)",
              "Apply zero reverb initially — rimshots are typically dry in R&B",
              "Tune the rimshot: press SHIFT + the pad, find Tune, pitch it to the 5th of your key (in Am, tune to E)",
              "Set its velocity to 80–90 — present but not loud",
              "If you do add reverb: short room only (0.2s decay, 20% wet)",
              "Pan it slightly left (L10) to create the sense of a live drummer sitting to your right",
              "Do not compress it — let the transient click naturally"
            ]
          },
          {
            title: "Layering Claps with Width",
            body: "Modern R&B claps aren't a single sound — they're multiple clap samples spread across the stereo field, creating a wide, airy feel.",
            steps: [
              "Load Clap 1 on Pad 4: main clap, center panned",
              "Load Clap 2 on Pad 5: secondary clap, pitch it -1 or -2 semitones",
              "Use Pad Link: hold SHIFT + PAD LINK, tap Pad 4 (master), then tap Pad 5 (linked)",
              "Pan Pad 4 to L20, Pan Pad 5 to R20 — slight spread, not full L/R",
              "On Pad 5's channel: add 8–12ms of pre-delay before the reverb — makes it sound like a second clap from a different angle",
              "Add a Stereo Widener plugin on your clap bus: set Width to 60%",
              "Result: a clap that fills horizontal space in the mix"
            ]
          }
        ]
      }
    ]
  },

  // ── FX Chains ────────────────────────────────────────────────────────────
  {
    id: "fx-chains",
    icon: Sliders,
    label: "FX Chains",
    short: "FX",
    color: "#10b981",
    intro: "Complete routing paths with exact parameter values. Every signal chain below is ready to copy directly into Maschine. Use them as starting points, then adjust for your samples.",
    sections: [
      {
        heading: "Bus Processing",
        tips: [
          {
            title: "Boom Bap Lo-Fi Stack",
            body: "The complete signal chain that takes a clean modern sample to SP-1200 / MPC3000 grit. Apply to the master drum bus group.",
            steps: [
              "In the Mixer, select your master drum Group",
              "Add Plugin 1: Saturator → Mode: Tape → Drive: 30% → Output: 0dB",
              "Add Plugin 2: Lo-Fi → Bits: 12 → Rate: 0.70 → Noise: 15%",
              "Add Plugin 3: EQ → add a High-Shelf at 10,000 Hz → Amount: -5dB",
              "Add Plugin 4: Compressor → Attack: 25ms → Release: 200ms → Ratio: 2:1 → Threshold: -12dB",
              "The compressor last holds the dynamics — boom bap shouldn't pump, it should breathe",
              "Check output level: the bus shouldn't clip. Lower Plugin 1 Drive if it does"
            ],
            code: "Saturator (Tape 30%) → Lo-Fi (12bit/0.70) → EQ (-5dB hi-shelf@10k) → Compressor (2:1, 25ms A, 200ms R)"
          },
          {
            title: "Kick Compression by Genre",
            body: "Kicks need different compression depending on the style. Boom bap kicks need weight, hip hop kicks need punch, R&B kicks need air.",
            steps: [
              "Select your kick channel in the Mixer → Add Compressor",
              "BOOM BAP: Attack 8ms (let transient through), Release 150ms, Ratio 3:1, GR -4dB",
              "HIP HOP: Attack 2ms (tighten the hit), Release 80ms, Ratio 5:1, GR -6dB",
              "R&B: Attack 20ms (very slow — let full transient ring), Release 300ms, Ratio 2:1, GR -2dB",
              "After the Compressor, add Transient Master: Attack +10 for boom bap punch, -10 to soften R&B",
              "EQ the kick: boost 60–80Hz for sub weight, cut 300–400Hz to remove boxiness"
            ],
            code: "Kick: Compressor → Transient Master → EQ (boost 70Hz, cut 350Hz)"
          }
        ]
      },
      {
        heading: "Snare & Reverb",
        tips: [
          {
            title: "R&B Snare Reverb Setup",
            body: "R&B snares need very specific reverb — too short and they feel trapped; too long and they wash out the vocal space.",
            steps: [
              "Select your snare channel in the Mixer",
              "Add Plugin: Reverb (Maschine's built-in Reverb or Raum)",
              "Set Type: Plate (for rimshots) or Hall (for full snares)",
              "Pre-Delay: 15–20ms — this small gap separates the dry hit from the wet wash",
              "Decay: 0.8s for rimshot / 1.5–2.0s for full snare / 2.5s+ for half-time snare",
              "High-Cut on reverb: set to 6kHz — remove brightness from the reverb tail",
              "Wet/Dry: 35–45% wet — hear the reverb clearly but don't drown the dry hit",
              "Width: 100% — let the reverb be fully stereo even if the dry hit is mono"
            ],
            code: "Plate/Hall → Pre-delay: 18ms → Decay: 1.5s → Hi-cut: 6kHz → Wet: 40% → Width: 100%"
          }
        ]
      },
      {
        heading: "Hi-Hat Filtering",
        tips: [
          {
            title: "Hi-Hat Filtering by Genre",
            body: "Filtering the hi-hat group is one of the fastest ways to change the genre feel. Open, bright hats = modern. Filtered, warm hats = boom bap.",
            steps: [
              "Select your hi-hat Group in the Mixer",
              "Add Plugin: EQ or Filter",
              "BOOM BAP: Low-pass at 8,000 Hz — removes digital harshness, adds warmth",
              "HIP HOP (modern): Low-pass at 14,000 Hz — subtle warmth but keeps brightness",
              "R&B / NEO SOUL: Low-pass at 6,000 Hz + small room reverb (0.2s) — thick, warm feel",
              "Optional: add a slight resonant peak at 4,000 Hz (+2dB) for snap and presence",
              "Automate the filter cutoff: during fills, sweep it open briefly then close it back"
            ],
            code: "Boom Bap: LP @8kHz  |  Hip Hop: LP @14kHz  |  R&B: LP @6kHz + Room verb"
          },
          {
            title: "Build a Template Pattern (Save This as Your Starting Point)",
            body: "A Template Pattern has all sounds loaded, levels set, FX chains applied, and choke groups configured. Starting every beat from this template saves 20–30 minutes per session.",
            steps: [
              "Create a new Project and load your core sounds on Pads 1–8 in Group A",
              "Set all Choke Groups: open hat + closed hat → Group 1; snare + rimshot → Group 2",
              "Apply your base effects chains (see above) on each channel",
              "Set levels: kick -6dB, snare -8dB, hats -12dB, shaker -18dB relative to 0dB",
              "Set Group swing defaults: kick group 52%, hat group 55%, perc group 57%",
              "Save as a Project: press FILE → Save As → name it 'TEMPLATE_[your genre]'",
              "Duplicate this project at the start of every new beat — never build from scratch again"
            ]
          }
        ]
      }
    ]
  },

  // ── Song Building ─────────────────────────────────────────────────────────
  {
    id: "song-building",
    icon: Layers,
    label: "Song Building",
    short: "Song",
    color: "#a855f7",
    intro: "How to build beats that grow, breathe, and stay interesting across 4–8 bars. Pattern variation, velocity architecture, and kick displacement — the three tools that turn a loop into a song.",
    sections: [
      {
        heading: "Pattern Variation",
        tips: [
          {
            title: "The A/B Pattern System",
            body: "Every professional beat has at least two pattern variations: the main loop (A) and a variation (B). The B pattern has one element slightly changed — this is how beats stay interesting.",
            steps: [
              "Program your main loop as Pattern A in Scene 1",
              "Right-click Pattern A in the Pattern list → Duplicate",
              "The duplicate becomes Pattern B — open it in the Step Sequencer",
              "Change exactly ONE thing: add a ghost kick at step 15, fill the hat on step 15, or shift the snare",
              "In Song View, alternate A and B every 4 or 8 bars",
              "Create a Pattern C as a 'fill' bar: runs for just 1 bar before a section change",
              "Fill pattern: add a hat roll on steps 12–15, or double the snare at steps 12 and 13"
            ]
          }
        ]
      },
      {
        heading: "Velocity Architecture",
        tips: [
          {
            title: "Velocity Accent Architecture",
            body: "The shape of velocity accents across a bar determines whether it pushes forward or sits back. This is the single most powerful groove tool in Maschine.",
            steps: [
              "Program your full pattern with all steps at flat velocity 80",
              "Enter Velocity mode (push 4D encoder in Step Sequencer)",
              "Beat 1 (step 1): raise to 110 — your 'landing' accent, the strongest point",
              "Beat 3 (step 9): raise to 100 — second strongest",
              "Beat 2 and 4 (snare steps 5 and 13): leave at 80–90 for boom bap, raise to 100+ for hip hop",
              "All off-beat steps: lower to 55–65 for ghost feel, or 70 for a more driving pattern",
              "Play back — the pattern should feel like it has gravity, landing on 1 and breathing between"
            ]
          }
        ]
      },
      {
        heading: "Kick Placement",
        tips: [
          {
            title: "Kick Displacement Techniques",
            body: "Moving the kick off the exact downbeat is what separates interesting grooves from boring ones. These specific positions each create different feelings.",
            steps: [
              "Position 1 (beat 1): standard anchor — always include this",
              "Position 2 (the 'e' of beat 1): creates urgency and forward motion",
              "Position 3 (the 'and' of beat 1): a classic boom bap syncopation",
              "Position 5 (the 'and' of beat 2): gives the pattern a leaning, hip hop bounce",
              "Position 10 (the 'and' of beat 3): classic boom bap second kick position",
              "Position 11 (the 'a' of beat 3): R&B displacement, feels late and groovy",
              "Try: 1 + 10 for straight boom bap  |  1 + 5 + 10 for rolling hip hop  |  1 + 11 for R&B pocket"
            ]
          }
        ]
      }
    ]
  }
];

// ─── Translation merge ────────────────────────────────────────────────────────

function buildTab(id: TabId, lang: Lang): typeof TABS[0] {
  const en = TABS.find(t => t.id === id)!;
  if (lang !== "de") return en;
  const de = CHEATSHEET_DE[id];
  if (!de) return en;
  return {
    ...en,
    label: de.label ?? en.label,
    short: de.short ?? en.short,
    intro: de.intro ?? en.intro,
    sections: en.sections.map((sec, si) => {
      const deSec = de.sections[si];
      if (!deSec) return sec;
      return {
        ...sec,
        heading: deSec.heading ?? sec.heading,
        tips: sec.tips.map((tip, ti) => {
          const deTip = deSec.tips[ti];
          if (!deTip) return tip;
          return {
            ...tip,
            title: deTip.title ?? tip.title,
            body: deTip.body ?? tip.body,
            badge: deTip.badge ?? tip.badge,
            steps: deTip.steps ?? tip.steps,
          };
        }),
      };
    }),
  };
}

// ─── Tip Card ────────────────────────────────────────────────────────────────

function TipCard({ tip, color, index }: { tip: Tip; color: string; index: number }) {
  const [open, setOpen] = useState(false);

  const { title, body, badge, steps } = tip;

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start gap-4 p-5 text-left hover:bg-white/[0.03] transition-colors"
      >
        <span
          className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold font-mono mt-0.5"
          style={{ backgroundColor: `${color}20`, color }}
        >
          {index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            {badge && (
              <span
                className="text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-widest"
                style={{ backgroundColor: `${color}20`, color }}
              >
                {badge}
              </span>
            )}
            <span className="text-sm font-semibold text-foreground">{title}</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
        </div>
        <ChevronDown
          className="w-4 h-4 text-muted-foreground/40 shrink-0 mt-1 transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="border-t border-border/50 mx-4 mb-4" />
            {steps && (
              <div className="px-5 pb-4 space-y-1.5">
                {steps.map((step, si) => (
                  <div key={si} className="flex gap-3 text-xs">
                    <span
                      className="shrink-0 font-mono text-[10px] mt-0.5 w-4 text-right"
                      style={{ color: `${color}80` }}
                    >
                      {si + 1}
                    </span>
                    <span className="text-muted-foreground leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            )}
            {tip.code && (
              <div className="mx-5 mb-4 flex items-start gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                <Terminal className="w-3.5 h-3.5 shrink-0 text-muted-foreground/50 mt-0.5" />
                <span className="font-mono text-[11px] text-muted-foreground/70 leading-relaxed">{tip.code}</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function CheatSheet() {
  const [activeTab, setActiveTab] = useState<TabId>(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab") as TabId | null;
    const valid: TabId[] = ["first-session", "core-controls", "boom-bap", "hip-hop", "rnb", "fx-chains", "song-building"];
    if (tab && valid.includes(tab)) return tab;
    return "first-session";
  });

  const { lang } = useLang();

  const tab = buildTab(activeTab, lang);
  const allTips = tab.sections.flatMap(s => s.tips);

  return (
    <div className="min-h-[100dvh] bg-background text-foreground pb-24">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-6 h-14 flex items-center gap-4">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Patterns</span>
          </Link>
          <div className="flex-1 flex flex-col items-center">
            <span className="font-bold text-sm tracking-tight">Maschine MK3 — Cheat Sheet</span>
            <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest hidden sm:block">
              {lang === "de" ? "Schritt-für-Schritt Produktionsreferenz" : "Step-by-step production reference"}
            </span>
          </div>
          <div className="w-16 sm:w-24 shrink-0" />
        </div>

        {/* Tab bar */}
        <div className="border-t border-border/50 overflow-x-auto scrollbar-none">
          <div className="container mx-auto px-6 flex gap-0 min-w-max">
            {TABS.map(tabItem => {
              const Icon = tabItem.icon;
              const active = tabItem.id === activeTab;
              const builtItem = buildTab(tabItem.id, lang);
              return (
                <button
                  key={tabItem.id}
                  onClick={() => setActiveTab(tabItem.id)}
                  className="relative flex items-center gap-1.5 px-4 py-3 text-xs font-medium transition-colors whitespace-nowrap"
                  style={{
                    color: active ? tabItem.color : "var(--muted-foreground)",
                  }}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="hidden sm:inline">{builtItem.label}</span>
                  <span className="sm:hidden">{builtItem.short}</span>
                  {active && (
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                      style={{ backgroundColor: tabItem.color }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-8 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            {/* Tab intro */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                {(() => {
                  const Icon = tab.icon;
                  return <Icon className="w-4 h-4" style={{ color: tab.color }} />;
                })()}
                <h1 className="font-bold text-lg tracking-tight" style={{ color: tab.color }}>
                  {tab.label}
                </h1>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                {tab.intro}
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {tab.sections.map((section, si) => (
                <div key={si}>
                  {section.heading && (
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-[10px] font-mono font-bold uppercase tracking-widest"
                        style={{ color: tab.color }}
                      >
                        {section.heading}
                      </span>
                      <div className="flex-1 h-px bg-border/50" />
                    </div>
                  )}
                  <div className="space-y-2">
                    {section.tips.map((tip, ti) => {
                      const globalIndex = tab.sections
                        .slice(0, si)
                        .reduce((sum, s) => sum + s.tips.length, 0) + ti;
                      return (
                        <TipCard
                          key={ti}
                          tip={tip}
                          color={tab.color}
                          index={tab.id === "first-session" ? ti : globalIndex}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* First Session: cross-links to genre tabs */}
            {activeTab === "first-session" && (
              <div className="mt-12 border border-border/50 rounded-xl p-6 bg-card/50">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-muted-foreground/60" />
                  <span className="text-sm font-semibold text-foreground">Dive Deeper</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { tab: "boom-bap" as TabId, label: "Boom Bap", sub: "MPC swing, ghost snares, SP-1200 grit" },
                    { tab: "hip-hop" as TabId, label: "Hip Hop", sub: "Layered kicks, Dilla timing, sidechain" },
                    { tab: "rnb" as TabId, label: "R&B", sub: "Half-time snare, shaker, rimshots" },
                    { tab: "fx-chains" as TabId, label: "FX Chains", sub: "Signal chains with exact values" },
                    { tab: "core-controls" as TabId, label: "Core Controls", sub: "Step Sequencer, swing, automation" },
                    { tab: "song-building" as TabId, label: "Song Building", sub: "A/B patterns, velocity, groove" },
                  ].map(link => {
                    const t = TABS.find(t => t.id === link.tab)!;
                    const Icon = t.icon;
                    return (
                      <button
                        key={link.tab}
                        onClick={() => setActiveTab(link.tab)}
                        className="flex items-start gap-3 p-4 rounded-lg border border-border hover:bg-white/5 transition-colors text-left"
                      >
                        <Icon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: t.color }} />
                        <div>
                          <p className="text-xs font-semibold text-foreground">{link.label}</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">{link.sub}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quick stats */}
            {activeTab !== "first-session" && (
              <div className="mt-10 flex items-center gap-4 text-[10px] font-mono text-muted-foreground/30 uppercase tracking-widest">
                <span>{allTips.length} techniques</span>
                <span>·</span>
                <span>{allTips.reduce((s, t) => s + (t.steps?.length ?? 0), 0)} steps</span>
                <span>·</span>
                <button
                  onClick={() => setActiveTab("first-session")}
                  className="flex items-center gap-1 hover:text-muted-foreground/60 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" /> First Session
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
