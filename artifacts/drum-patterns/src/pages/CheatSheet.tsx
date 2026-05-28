import { Link } from "wouter";
import { ArrowLeft, Settings, Layers, Music, Volume2, Sliders, Zap, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type Tip = {
  title: string;
  body: string;
  steps?: string[];
  code?: string;
};

type Section = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: string;
  tips: Tip[];
};

const SECTIONS: Section[] = [
  {
    icon: <Settings className="w-5 h-5" />,
    title: "MK3 Navigation & Core Controls",
    subtitle: "Exact button presses and screen paths for every essential operation",
    color: "#6366f1",
    tips: [
      {
        title: "Enter the Step Sequencer",
        body: "The Step Sequencer is where you program drum patterns step by step. Each pad = one 16th note. Lit pads = active hits.",
        steps: [
          "Press the STEP SEQ button (top-left area of the MK3, above the pads)",
          "The 16 pads now represent the 16 steps of your pattern",
          "Select which instrument pad you're editing with the GROUP/PAD buttons",
          "Press any step pad to toggle it on (lit) or off (dark)",
          "Use SHIFT + left/right arrow to move between bars if your pattern is longer than 1 bar"
        ]
      },
      {
        title: "Change Step Resolution (1/16 → 1/32 → 1/64)",
        body: "Use finer resolutions for hi-hat rolls or triplet fills inside one pattern while keeping kicks/snares at 1/16.",
        steps: [
          "In Step Sequencer mode, press SHIFT + STEP SEQ",
          "The screen shows available resolutions: 1/4, 1/8, 1/16, 1/32, 1/64",
          "Turn the 4D encoder (large knob, right of the screen) to select your resolution",
          "Press the encoder to confirm",
          "Critical: resolution is per-pad/group — switch to the hi-hat pad first, change it to 1/32, then switch back to kick at 1/16"
        ]
      },
      {
        title: "Set Velocity Per Step",
        body: "Velocity variation is the difference between a robotic pattern and a human groove. Ghost notes are velocity 30–50, normal hits 70–90, accents 100–120.",
        steps: [
          "Enter Step Sequencer mode and select your pad (e.g., snare)",
          "Press the 4D encoder (push it in) — screen switches to Velocity mode",
          "The pads now display velocity bars instead of on/off",
          "Hold a step pad and move the 4D encoder up/down to adjust its velocity",
          "Or: hold the step pad and use the touch strip on the left side of the pads",
          "Press the encoder again to return to normal step edit mode"
        ]
      },
      {
        title: "Set Group Swing",
        body: "Swing in Maschine is applied per Group. This lets your kick group be straight while your hi-hat group has MPC-style swing — like a real MPC3000.",
        steps: [
          "Press the GROUP button (top row, left side)",
          "Select the Group you want to swing (A–H, shown on the pads)",
          "On the screen, navigate to the second tab — 'Groove'",
          "Rotate the 4D encoder to select 'Swing' from the groove options",
          "Hold SHIFT and rotate the encoder to set the percentage (50% = straight, 54–58% = classic boom bap, 60–65% = heavy R&B swing)",
          "Repeat for each Group that needs swing — hats and kicks can have different amounts"
        ]
      },
      {
        title: "Humanize a Pattern",
        body: "Humanize adds random timing and velocity offsets to steps — turns a grid-perfect pattern into something that breathes. Apply it selectively to hats and light percussion only.",
        steps: [
          "Make sure you're in the pattern you want to humanize",
          "Press SHIFT + the pad you want to humanize (or select it in the step sequencer)",
          "On the MK3 touchscreen, tap 'Edit' in the Pattern menu",
          "Tap 'Humanize' — a menu appears with two sliders: Timing and Velocity",
          "Set Timing: 8–12 ticks for subtle feel, 15–20 ticks for loose/drunk feel",
          "Set Velocity: 15–25 for natural dynamics, 30+ starts sounding too random",
          "Tap Apply — this is permanent on that pattern. Undo with CTRL+Z if needed"
        ]
      },
      {
        title: "Use Note Repeat for Live Hat Rolls",
        body: "Note Repeat fires a pad repeatedly at a set rate while you hold it. Use this for hi-hat rolls and triplet fills in real time during recording.",
        steps: [
          "Press NOTE REPEAT button (above the pads, right side)",
          "The bottom display now shows Rate, Gate, and other settings",
          "Turn knob 1 (below the screen) to select the Rate: 1/8, 1/16, 1/32, 1/32T (triplet)",
          "Turn knob 2 to set Gate (how long each hit rings — lower for tighter rolls)",
          "Hold any pad and it fires at your selected rate",
          "To lock Note Repeat so you don't have to hold it: hold NOTE REPEAT + tap the pad once",
          "Press NOTE REPEAT again to exit"
        ]
      },
      {
        title: "Set Up a Choke Group",
        body: "Choke Groups make open and closed hi-hats cut each other off — just like a real hi-hat cymbal. Without this, they ring simultaneously and sound fake.",
        steps: [
          "Press the pad for your Closed Hi-Hat to select it",
          "On the touchscreen, tap the 'MIDI' or 'Routing' tab for that pad",
          "Find 'Choke Group' — assign it to Group 1 (or any number 1–16)",
          "Now select your Open Hi-Hat pad",
          "Assign it to the same Choke Group number (Group 1)",
          "Test: play a pattern where open and closed hats overlap — the closed hat now cuts the open hat",
          "Same principle works for any pair of sounds that should mute each other"
        ]
      },
      {
        title: "Link Pads (Trigger Multiple Sounds at Once)",
        body: "Pad Link fires multiple pads from a single trigger. Use this to layer a sub kick with a punchy kick, or a clap with a rimshot.",
        steps: [
          "Hold SHIFT + press the PAD LINK button",
          "Tap the pad you want to be the 'master' trigger (e.g., your main kick on pad 1)",
          "Then tap each pad you want to fire alongside it (e.g., sub kick on pad 5)",
          "Both pads will now fire whenever pad 1 is triggered",
          "To remove a link: repeat the same process and tap the linked pad to deselect it",
          "Each linked pad can still be processed independently (separate EQ, FX, routing)"
        ]
      },
      {
        title: "Record Knob Automation Live",
        body: "You can record real-time automation for any knob — filter cutoff, pitch, reverb send — directly into your pattern as it loops.",
        steps: [
          "Start playback (press PLAY)",
          "Hold the REC button (don't press — hold it)",
          "While holding REC, turn any knob on the hardware (filter, volume, pitch)",
          "Maschine records your knob movements as automation into the pattern",
          "Release REC to stop recording",
          "Play back to hear your automation",
          "To edit: press SHIFT + the automated knob to see the automation curve on screen"
        ]
      }
    ]
  },
  {
    icon: <Music className="w-5 h-5" />,
    title: "Boom Bap: MPC Feel on MK3",
    subtitle: "How to recreate the SP-1200 and MPC3000 magic in Maschine hardware",
    color: "#f59e0b",
    tips: [
      {
        title: "Dialing the MPC Swing (54–58%)",
        body: "The MPC3000 ran at a fixed swing timing. On Maschine, 54% is the closest equivalent for 90 BPM boom bap. Here's how to set it exactly.",
        steps: [
          "Press GROUP → select your drum group (e.g., Group A)",
          "On the touchscreen, tap the second tab: 'Groove'",
          "Tap the Groove Type dropdown → select 'Swing'",
          "Rotate the 4D encoder to set Amount to 54% (watch the screen value)",
          "Press SHIFT + encoder to fine-tune in 0.1% increments if needed",
          "Repeat this for each Group that needs swing — typically kick+snare together, hats separate at a slightly higher value (56–58%)",
          "Test the groove by playing the pattern and adjusting ±1% until it feels right"
        ]
      },
      {
        title: "Ghost Snare Workflow",
        body: "Ghost snares are the heartbeat of boom bap. They fill micro-spaces between the main snare hits and make the pattern feel alive.",
        steps: [
          "Enter Step Sequencer, select your snare pad",
          "Press the 4D encoder to enter Velocity mode",
          "Add steps at positions 2, 7, 14, or 15 (the gaps between main hits on 4 and 12)",
          "Set those new steps to velocity 30–45 by holding the step and moving the encoder down",
          "The main snare on steps 4 and 12 should stay at 100–115",
          "Play back — the ghost notes should be felt, barely heard",
          "Pro tip: nudge a ghost step ±2 ticks late using the event editor (SHIFT + EVENTS) for extra looseness"
        ]
      },
      {
        title: "Lo-Fi Bitcrusher Stack",
        body: "That classic SP-1200 grit comes from a specific processing chain. Here's how to replicate it in Maschine's built-in effects.",
        steps: [
          "Select your drum bus/master group in the mixer",
          "Press the + button to add a Plugin → choose 'Saturator' from the FX list",
          "Set Saturator: Type = Tape, Drive = 25–35%",
          "Add a second plugin: choose 'Lo-Fi'",
          "Set Lo-Fi: Bits = 12 (not lower — 8 sounds too degraded), Rate = 0.7",
          "Add a final plugin: choose 'EQ'",
          "In the EQ, add a High-Shelf filter at 10kHz and cut it by 4–6dB",
          "This removes digital harshness while keeping presence"
        ],
        code: "Signal chain: Saturator (Tape, 30%) → Lo-Fi (12bit, 0.7) → EQ (hi-shelf -5dB @10kHz)"
      },
      {
        title: "Tuning the Kick to Your Sample",
        body: "Boom bap lives and dies on kick tuning. If your kick doesn't harmonize with the sample chop, the beat will sound off-key even if everything else is right.",
        steps: [
          "Load your main sample chop first — identify its root note by ear (or use a tuner)",
          "Select your kick pad",
          "On the touchscreen, tap the 'Tune' parameter under the pad settings",
          "Use the 4D encoder to pitch the kick up or down in semitones",
          "Stop when the kick feels like it's 'inside' the sample harmonically",
          "If you have a sub kick: set it to the same note, then press SHIFT + encoder to drop it exactly 12 semitones (one octave lower)",
          "Play the kick while the sample loops — you should feel them locking together"
        ]
      },
      {
        title: "Open Hi-Hat Placement (The 'Breath')",
        body: "A single well-placed open hat in a bar of boom bap creates a natural breathing point that closed hats alone can't achieve.",
        steps: [
          "Enter Step Sequencer, select your Open Hi-Hat pad",
          "Confirm it's in the same Choke Group as your Closed Hi-Hat (see above)",
          "The classic open hat position is step 9 (the 16th note after beat 3)",
          "Secondary classic position: step 6 (the 'and' of beat 2)",
          "Set its velocity to 70–80 — not too loud, it's an accent not a statement",
          "The closed hat should be silent on whichever step the open hat lands",
          "One open hat per bar. That's usually enough."
        ]
      }
    ]
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Hip Hop: Modern & Classic Techniques",
    subtitle: "West Coast, East Coast, Dilla, and everything in between — programmed correctly",
    color: "#60a5fa",
    tips: [
      {
        title: "Building the Layered Kick",
        body: "Hip hop kicks are almost always two sounds: a punchy 'click' that cuts through, and a sub 'boom' that feels in the body. Here's how to stack them properly.",
        steps: [
          "Load your main kick sample on Pad 1 (punchy, short decay, heavy transient)",
          "Load a sub bass hit (or sine wave sample) on Pad 2 — tune it to your key",
          "Set Pad 2's output to the same bus as Pad 1, or leave separate for processing",
          "Hold SHIFT + PAD LINK, tap Pad 1 (master), then tap Pad 2 (linked)",
          "Now play Pad 1 — both fire together",
          "On Pad 1's channel: boost 60–100Hz slightly for body",
          "On Pad 2's channel: high-pass filter above 150Hz, keep only the sub",
          "The result: a kick with a punch layer on top and a separate, tunable sub underneath"
        ]
      },
      {
        title: "Dilla-Style Loose Timing",
        body: "J Dilla intentionally pushed elements off the grid — sometimes early, sometimes late — to create a 'human drunk' feel. In Maschine, you recreate this via the Event Editor.",
        steps: [
          "Program your pattern at 0% swing, perfectly quantized first",
          "Press SHIFT + EVENTS to open the Event Editor",
          "Select the event (step) you want to push off-grid",
          "Hold the event and rotate the 4D encoder to nudge its position by ticks (1 bar = 384 ticks)",
          "For 'late' feel: nudge kicks +6 to +12 ticks late (after the beat)",
          "For 'leaning forward': nudge snares -4 to -8 ticks early",
          "Apply Humanize at low timing (8ms) to hats only — NOT to kicks and snares",
          "The result should feel like a drummer who plays with feeling, not a machine"
        ]
      },
      {
        title: "Hi-Hat Roll Density Control",
        body: "Hip hop hat patterns range from simple 8ths to dense 16ths to explosive 32nd fills. Here's how to control density in real time without reprogramming.",
        steps: [
          "Program your base hat pattern in Step Sequencer at 1/16 resolution",
          "To add a 32nd roll at a specific step: press SHIFT + STEP SEQ, change resolution to 1/32",
          "Switch to your hi-hat pad — now each pad represents a 1/32nd note",
          "Program the fill only in the steps where you want the roll (e.g., the last 8 steps = last half of bar)",
          "Switch back to 1/16 for the main part",
          "Alternative: use Note Repeat at 1/32 rate during live recording — hold the hat pad during the roll moment",
          "Set velocity of roll notes progressively: 50→60→70→80 for a natural crescendo roll"
        ]
      },
      {
        title: "Snap vs. Clap: Choosing the Right Sound",
        body: "A finger snap sounds completely different from a clap in a hip hop context. Snaps work for West Coast/Bay Area, claps for East Coast anthems. Here's how to make each sit correctly in the mix.",
        steps: [
          "For a snap: load a dry finger snap sample, no reverb at all",
          "Pan the snap slightly right (R15–25) — snaps typically sit slightly off-center",
          "Add a very short plate reverb (0.15s decay) just to glue it to the room",
          "For a clap: load your clap sample, pan center",
          "Add a medium room reverb (0.4–0.6s decay, pre-delay 10ms)",
          "Compress the clap hard: ratio 6:1, attack 2ms, release 150ms",
          "Layer a secondary clap sample pitched -2 semitones at velocity 60 underneath for thickness"
        ]
      },
      {
        title: "Sidechain Compression (Pump Effect)",
        body: "Sidechaining makes pads and hats duck slightly on every kick hit, creating a pumping, breathing groove. This is in almost every modern hip hop track.",
        steps: [
          "In the Mixer, select the channel you want to duck (e.g., hi-hats)",
          "Press the + button on that channel to add a plugin → choose 'Compressor'",
          "In the Compressor settings, find 'Sidechain Input'",
          "Change the Sidechain Input from Internal to the kick channel (usually Ch1 or Pad 1)",
          "Set Compressor: Attack 0ms, Release 80ms, Ratio 8:1, Threshold until you get 4–6dB of GR on kick hits",
          "The hats will duck whenever the kick fires",
          "Adjust Release to control how fast hats come back — shorter = tighter, longer = more obvious pump"
        ]
      }
    ]
  },
  {
    icon: <Volume2 className="w-5 h-5" />,
    title: "R&B: Pocket, Groove, and Warmth",
    subtitle: "Half-time feels, rimshot programming, shakers, and the dynamics that make R&B breathe",
    color: "#ec4899",
    tips: [
      {
        title: "Programming the Half-Time Snare",
        body: "R&B and Neo Soul frequently use a half-time snare — the snare lands on beat 3 only (step 8), making the pattern feel like it's moving at half speed while the BPM stays the same.",
        steps: [
          "Enter Step Sequencer, select your snare pad",
          "Delete snare hits from steps 4 and 12 (the normal 2 and 4 positions)",
          "Place a snare hit on step 8 only (beat 3)",
          "Set this snare's velocity to 110–120 — it's the only snare hit, so it needs to carry the whole bar",
          "Add a very wide reverb (plate or hall, 1.5–2.0s decay, 40% wet)",
          "The kick now needs to carry more rhythmic interest — use displacement and syncopation in the kick pattern",
          "This approach is used in Frank Ocean, D'Angelo, and most Neo Soul tracks"
        ]
      },
      {
        title: "Setting Up a Rimshot (Instead of Snare)",
        body: "R&B and Neo Soul often use a rimshot or side-stick instead of a full snare — drier, more delicate, sits higher in the frequency range so it doesn't clash with vocals.",
        steps: [
          "Load a rimshot or side-stick sample on a pad (separate from your snare pad)",
          "Apply zero reverb initially — rimshots are typically dry in R&B",
          "Tune the rimshot: press SHIFT + the pad, find Tune, pitch it to the 5th of your key (e.g., in Am, tune to E)",
          "Set its velocity to 80–90 — it should feel present but not loud",
          "If you do add reverb: short room reverb only (0.2s decay, 20% wet)",
          "Pan it slightly left (L10) to create a sense of a live drummer sitting to your right",
          "Do not compress it — let the transient click naturally. It's meant to be dry and precise"
        ]
      },
      {
        title: "Shaker as Groove Glue",
        body: "A shaker track running at 16th notes is invisible when the track is loud, but its absence is immediately felt. It fills rhythmic gaps and gives the beat forward momentum.",
        steps: [
          "Load a shaker sample (or use a hi-hat sample with short decay and high pitch)",
          "In Step Sequencer, activate ALL 16 steps for the shaker",
          "Press encoder to enter Velocity mode",
          "Downbeats (steps 1, 5, 9, 13 = positions 0, 4, 8, 12): set velocity 60",
          "Upbeats (all other steps): set velocity 30–40",
          "This accent pattern creates a natural breathing feel even though all 16 steps are active",
          "Add a Hi-Pass filter on the shaker channel: cut everything below 3kHz — you want the click, not the body",
          "Pan it slightly right to separate from the hi-hat"
        ]
      },
      {
        title: "Heavy Swing for Neo Soul (60–65%)",
        body: "R&B and Neo Soul groove requires heavier swing than boom bap. 63% or higher gives patterns that hypnotic sway. Setting it correctly requires navigating Maschine's groove system.",
        steps: [
          "Press GROUP → select your hi-hat or percussion group",
          "Navigate to Groove tab on the touchscreen",
          "Set Swing to 63% — at this amount the off-beats fall noticeably late",
          "Now also activate 'Groove' on your kick group, but set it slightly lower: 57%",
          "This mismatch — hats swinging heavier than kicks — creates a layered groove feel",
          "Set the snare/rimshot group to 60% swing",
          "Play back and listen: the kick should feel grounded, the hats should feel like they're falling into the pocket"
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
          "On Pad 5's channel: add 8–12ms of pre-delay before the reverb — this makes it sound like a second clap from a different angle",
          "Add a Stereo Widener plugin on your clap bus: set Width to 60%",
          "The result is a clap that fills horizontal space in the mix — common in Beyoncé, SZA, and contemporary R&B production"
        ]
      }
    ]
  },
  {
    icon: <Sliders className="w-5 h-5" />,
    title: "Effects & Signal Chains",
    subtitle: "Complete routing paths with exact parameter values — copy these directly into Maschine",
    color: "#10b981",
    tips: [
      {
        title: "Boom Bap Lo-Fi Stack",
        body: "The complete signal chain that gets you from a clean modern sample to that SP-1200 / MPC3000 grit. Apply this to the master drum bus group.",
        steps: [
          "In the Mixer, select your master drum Group",
          "Add Plugin 1: Saturator → Mode: Tape → Drive: 30% → Output: 0dB",
          "Add Plugin 2: Lo-Fi → Bits: 12 → Rate: 0.70 → Noise: 15%",
          "Add Plugin 3: EQ → Add a High-Shelf at 10,000 Hz → Amount: -5dB",
          "Add Plugin 4: Compressor → Attack: 25ms → Release: 200ms → Ratio: 2:1 → Threshold: -12dB",
          "The compressor last holds the dynamics — boom bap shouldn't pump, it should breathe",
          "Check your output level: the bus shouldn't clip. Lower Plugin 1 Drive if it does"
        ],
        code: "Saturator (Tape 30%) → Lo-Fi (12bit/0.70) → EQ (-5dB hi-shelf@10k) → Compressor (2:1, 25ms A, 200ms R)"
      },
      {
        title: "R&B Snare Reverb Setup",
        body: "R&B snares and rimshots need very specific reverb — too short and they feel dry and trapped; too long and they wash out the vocal space.",
        steps: [
          "Select your snare/rimshot channel in the Mixer",
          "Add Plugin: Reverb (Maschine's built-in Reverb or Raum)",
          "Set Type: Plate (for rimshots) or Hall (for full snares)",
          "Pre-Delay: 15–20ms — this small gap separates the dry hit from the wet wash",
          "Decay: 0.8s for rimshot / 1.5–2.0s for full snare / 2.5s+ for slow jam half-time snare",
          "High-Cut on reverb: set to 6kHz — remove the brightness from the reverb tail",
          "Wet/Dry: 35–45% wet — you want to hear the reverb clearly but not drown the dry hit",
          "Width: 100% — let the reverb be fully stereo even if the dry hit is mono"
        ],
        code: "Plate/Hall → Pre-delay: 18ms → Decay: 1.5s → Hi-cut: 6kHz → Wet: 40% → Width: 100%"
      },
      {
        title: "Kick Compression Settings by Genre",
        body: "Kicks need different compression depending on the genre. Boom bap kicks need weight, hip hop kicks need punch, R&B kicks need air.",
        steps: [
          "Select your kick channel in the Mixer → Add Compressor",
          "BOOM BAP: Attack 8ms (let transient through), Release 150ms, Ratio 3:1, GR -4dB",
          "HIP HOP: Attack 2ms (tighten the hit), Release 80ms, Ratio 5:1, GR -6dB",
          "R&B: Attack 20ms (very slow — let full transient ring), Release 300ms, Ratio 2:1, GR -2dB",
          "After the Compressor, add Transient Master: Attack +10 for boom bap punch, -10 to soften R&B",
          "Finally, EQ the kick: boost 60–80Hz for sub weight, cut 300–400Hz to remove boxiness",
          "Check kick in the context of the full mix — solo it then unsolo to make sure it sits"
        ]
      },
      {
        title: "Hi-Hat Filtering for Genre Texture",
        body: "Filtering the hi-hat group is one of the fastest ways to change the genre feel. Open, bright hats = modern. Filtered, warm hats = boom bap, R&B, lo-fi.",
        steps: [
          "Select your hi-hat Group in the Mixer",
          "Add Plugin: EQ or Filter",
          "BOOM BAP: Low-pass filter at 8,000 Hz → this removes digital harshness, adds warmth",
          "HIP HOP (modern): Low-pass at 14,000 Hz → subtle warmth but keeps brightness",
          "R&B / NEO SOUL: Low-pass at 6,000 Hz + add a tiny bit of reverb (0.2s room) → thick, muffled feel",
          "Optional: add a very slight resonant peak at 4,000 Hz (+2dB) for snap/presence",
          "Automate the filter cutoff: during fills, sweep it open briefly then close it back down"
        ]
      },
      {
        title: "Building a Template Pattern (Save This as Your Starting Point)",
        body: "A Template Pattern has all sounds loaded, levels set, effects chains applied, and choke groups configured. Starting every beat from this template saves 20–30 minutes per session.",
        steps: [
          "Create a new Project and load all your core sounds: kick, sub kick, snare, rimshot, open hat, closed hat, clap, shaker on Pads 1–8",
          "Set all Choke Groups: open hat + closed hat → Group 1; snare + rimshot → Group 2",
          "Apply your base effects chains (see above) on each channel",
          "Set all levels: kick -6dB, snare -8dB, hats -12dB, shaker -18dB relative to 0dB",
          "Set your Group swing defaults: kick group 52%, hat group 55%, perc group 57%",
          "Save this as a Project: press FILE → Save As → name it 'TEMPLATE_[your genre]'",
          "Duplicate this project at the start of every new beat — never build from scratch again"
        ]
      }
    ]
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Pattern Building Strategy",
    subtitle: "How to build beats that grow, breathe, and stay interesting over 4–8 bars",
    color: "#a855f7",
    tips: [
      {
        title: "The A/B Pattern System",
        body: "Every professional beat has at least two pattern variations: the main loop (A) and a variation (B). The B pattern has one element slightly changed — this is how beats stay interesting without becoming busy.",
        steps: [
          "Program your main loop as Pattern A in Scene 1",
          "Right-click Pattern A in the Pattern list → Duplicate",
          "The duplicate becomes Pattern B — open it in the Step Sequencer",
          "Change exactly ONE thing: add a ghost kick at step 15, fill the hat on step 15, or shift the snare from step 12 to step 11",
          "In your Song View, alternate A and B every 4 or 8 bars",
          "Create a Pattern C as a 'fill' bar: this runs for just 1 bar before a section change",
          "Fill pattern: add a hat roll on steps 12–15, or double the snare at steps 12 and 13"
        ]
      },
      {
        title: "Velocity Accent Architecture",
        body: "The shape of velocity accents across a bar determines whether it feels like it's pushing forward or sitting back. This is the single most powerful groove tool in Maschine.",
        steps: [
          "Program your full pattern with all steps at flat velocity 80",
          "Enter Velocity mode (push 4D encoder in Step Sequencer)",
          "Beat 1 (step 0): raise to 110 — this is your 'landing' accent, the strongest point",
          "Beat 3 (step 8): raise to 100 — second strongest",
          "Beat 2 and 4 (snare steps 4 and 12): leave at 80–90 for boom bap, raise to 100+ for hip hop",
          "All off-beat steps: lower to 55–65 for ghost feel, or 70 for a more driving pattern",
          "Play back — the pattern should feel like it has gravity, landing on 1 and breathing between"
        ]
      },
      {
        title: "Kick Displacement Techniques",
        body: "Moving the kick off the exact downbeat is what separates interesting grooves from boring ones. These specific displacement positions each create different feelings.",
        steps: [
          "Position 0 (beat 1): standard anchor — always include this",
          "Position 2 (the 'e' of beat 1): creates urgency and forward motion",
          "Position 3 (the 'and' of beat 1): a classic boom bap syncopation",
          "Position 5 (the 'and' of beat 2): gives the pattern a leaning, hip hop bounce",
          "Position 10 (the 'and' of beat 3): classic boom bap second kick position",
          "Position 11 (the 'a' of beat 3): R&B displacement, feels late and groovy",
          "Try: 0 + 10 for straight boom bap, 0 + 5 + 10 for rolling hip hop, 0 + 11 for R&B pocket"
        ]
      }
    ]
  }
];

export default function CheatSheet() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground pb-20">
      <header className="border-b border-border bg-background/95 sticky top-0 z-40">
        <div className="container mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Patterns
          </Link>
          <div className="flex-1 flex flex-col items-center">
            <span className="font-bold text-base tracking-tight">Maschine MK3 Cheat Sheet</span>
            <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">Step-by-step production reference — Boom Bap, Hip Hop, R&B</span>
          </div>
          <div className="w-32" />
        </div>
      </header>

      <main className="container mx-auto px-6 py-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            Every technique below includes the exact buttons to press, the screen paths to navigate, and the parameter values to set. No guesswork — just open this and follow the steps.
          </p>
        </motion.div>

        <div className="space-y-14">
          {SECTIONS.map((section, si) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: si * 0.06 }}
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="p-2 rounded-md border border-border mt-0.5 shrink-0" style={{ color: section.color, backgroundColor: `${section.color}15` }}>
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight">{section.title}</h2>
                  <p className="text-sm text-muted-foreground mt-0.5">{section.subtitle}</p>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-5">
                {section.tips.map((tip, ti) => (
                  <div
                    key={ti}
                    className="bg-card border border-border rounded-lg p-5 flex flex-col gap-4"
                    data-testid={`cheatsheet-tip-${si}-${ti}`}
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: section.color }} />
                      <h3 className="font-semibold text-sm text-foreground tracking-wide">{tip.title}</h3>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed pl-3.5">{tip.body}</p>

                    {tip.steps && (
                      <ol className="pl-3.5 space-y-2">
                        {tip.steps.map((step, si2) => (
                          <li key={si2} className="flex gap-3 text-xs text-muted-foreground leading-relaxed">
                            <span className="font-mono shrink-0 mt-0.5" style={{ color: section.color }}>{si2 + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    )}

                    {tip.code && (
                      <div className="pl-3.5">
                        <code className="text-xs font-mono bg-background border border-border px-3 py-2 rounded block text-muted-foreground leading-relaxed">
                          {tip.code}
                        </code>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </main>
    </div>
  );
}
