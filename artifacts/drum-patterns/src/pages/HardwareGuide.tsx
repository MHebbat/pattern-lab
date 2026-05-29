import { useState, useMemo } from "react";
import { Link } from "wouter";
import { ArrowLeft, Search, X, ChevronRight, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang, useT } from "@/lib/i18n";
import { HARDWARE_DE, type DeControl } from "@/locales/hardware-de";

// ─── Types ────────────────────────────────────────────────────────────────────

type Zone =
  | "view-mode"
  | "groups"
  | "scene-pattern"
  | "display"
  | "encoders"
  | "macro"
  | "transport"
  | "pads";

type Control = {
  id: string;
  num: number;
  name: string;
  zone: Zone;
  description: string;
  steps: string[];
  proTip?: string;
  priority: "primary" | "secondary";
};

type RectShape = { kind: "rect"; x: number; y: number; w: number; h: number; rx?: number; label?: string };
type CircleShape = { kind: "circle"; cx: number; cy: number; r: number; label?: string };
type Shape = RectShape | CircleShape;

type Layout = {
  id: string;
  shapes: Shape[];
  callout: { cx: number; cy: number };
};

// ─── Zone metadata ────────────────────────────────────────────────────────────

const ZONE_COLOR: Record<Zone, string> = {
  "view-mode":     "#818cf8",
  "groups":        "#f59e0b",
  "scene-pattern": "#a855f7",
  "display":       "#38bdf8",
  "encoders":      "#94a3b8",
  "macro":         "#6b7280",
  "transport":     "#22c55e",
  "pads":          "#f97316",
};

const ZONE_LABEL: Record<Zone, string> = {
  "view-mode":     "View / Mode",
  "groups":        "Groups",
  "scene-pattern": "Scene & Pattern",
  "display":       "Display",
  "encoders":      "Encoders & Knobs",
  "macro":         "Macro Knobs",
  "transport":     "Transport",
  "pads":          "Pads",
};

// ─── Control definitions ──────────────────────────────────────────────────────

const CONTROLS: Control[] = [
  {
    id: "channel", num: 1, name: "Channel", zone: "view-mode", priority: "primary",
    description: "Opens the Channel strip for the selected pad — the primary place to set volume, pan, tuning, and output routing for any sound.",
    steps: [
      "Press CHANNEL to enter Channel view",
      "Left screen: volume, pan, tune, pitch bend range",
      "Right screen: output routing, choke group, MIDI settings",
      "Rotate the 4D encoder to move between parameters",
      "Push the 4D encoder to select and edit a value",
    ],
    proTip: "Use CHANNEL while in Step Sequencer mode to tune individual hits without leaving your pattern view.",
  },
  {
    id: "plugin", num: 2, name: "Plugin", zone: "view-mode", priority: "primary",
    description: "Opens the Plugin page — the instrument loaded on the current pad (Battery, Kontakt, Massive X, etc.) and its editable parameters.",
    steps: [
      "Press PLUGIN to see the instrument on the current pad",
      "Left screen shows instrument macros and parameters",
      "Right screen shows plugin browser",
      "SHIFT + PLUGIN opens the plugin browser to swap the instrument",
    ],
  },
  {
    id: "arrange", num: 3, name: "Arrange", zone: "view-mode", priority: "secondary",
    description: "Switches to Song / Arrange view — the timeline where Scenes are laid out into a full track structure with intro, verses, hooks, and outro.",
    steps: [
      "Press ARRANGE to enter Song mode",
      "Pads represent Scene slots on a timeline",
      "Left screen shows the scene arrangement",
      "4D encoder navigates the timeline left/right",
      "Hold pad to select; push 4D encoder to confirm or delete a scene clip",
    ],
  },
  {
    id: "mix", num: 4, name: "Mix", zone: "view-mode", priority: "primary",
    description: "Opens the Mixer — vertical channel strips with levels, sends, and inserts for all 8 Groups and the Master bus.",
    steps: [
      "Press MIX to open Mixer view",
      "Left screen shows Group channel strips A–H",
      "Macro knobs 1–8 automatically become Group faders A–H",
      "Press any Group button (A–H) to see that Group's pad channel strips",
      "SHIFT + MIX accesses the Master / Cue channel",
    ],
    proTip: "In Mix view the 8 macro knobs are your faders — the fastest way to balance drums, bass, and melodies in a live session.",
  },
  {
    id: "perform", num: 5, name: "Perform", zone: "view-mode", priority: "secondary",
    description: "Performance mode — applies real-time effects (filters, lo-fi, reverb) based on pad position and pressure. Also enables scale/arp/chord performance.",
    steps: [
      "Press PERFORM to enter Performance mode",
      "Pads become a scale-quantized layout or effect zone",
      "4D encoder or touchscreen selects the scale/root",
      "SHIFT + PERFORM for advanced performance settings",
    ],
  },
  {
    id: "notes", num: 6, name: "Notes", zone: "view-mode", priority: "primary",
    description: "Notes mode — turns the pads into a chromatic or scale-locked keyboard with chord sets highlighted. Ideal for recording melodies, bass lines, and chord progressions.",
    steps: [
      "Press NOTES to enter Notes mode",
      "Select root note and scale from the touchscreen",
      "Pads lay out chromatically or in scale intervals",
      "Play chords and melodies directly on the pads",
      "Pair with a Korg microKEY for extended range while staying in the selected scale",
    ],
    proTip: "With a scale lock active every pad is in key — you cannot play a wrong note. Essential for recording melodic ideas quickly.",
  },
  {
    id: "shift", num: 7, name: "Shift", zone: "view-mode", priority: "primary",
    description: "The main modifier. Hold Shift and press almost any other button to access its secondary function. The single most time-saving control on the hardware.",
    steps: [
      "SHIFT + TAP = Tap Tempo",
      "SHIFT + 4D encoder rotate = fine-tune any value in 0.1 increments",
      "SHIFT + Group button = toggle mute that Group without switching to it",
      "SHIFT + pad = Quick Edit (volume, tune, pan in one press)",
      "SHIFT + PLAY = restart playback from bar 1",
      "SHIFT + REC = Overdub mode (layer new events without erasing existing ones)",
    ],
    proTip: "Know these 5 combos: Tap Tempo, fine-tune encoder, Group mute, pad Quick Edit, Restart. They cover 90% of all SHIFT usage.",
  },
  {
    id: "volume-knob", num: 8, name: "Master Volume", zone: "encoders", priority: "secondary",
    description: "Hardware master output volume. Controls headphone and main line output level independently of the software channel faders.",
    steps: [
      "Turn clockwise to increase, counter-clockwise to decrease",
      "Controls the hardware audio interface output — not the software mixer faders",
      "Keep around 75–80% to maintain headroom before the main outputs",
    ],
  },
  {
    id: "swing-knob", num: 9, name: "Swing", zone: "encoders", priority: "primary",
    description: "Direct hardware control for Groove (swing) amount on the active Group pattern. Pushes the 2nd and 4th 8th-note subdivisions late to create feel.",
    steps: [
      "Turn to adjust swing percentage in real time while the pattern plays",
      "SHIFT + turn for 0.1% fine-tuning increments",
      "0% = dead straight grid, 50% = light shuffle feel",
      "54% = MPC3000 magic swing (the classic boom bap pocket)",
      "60–63% = deep R&B half-time shuffle",
    ],
    proTip: "The MPC3000 swing is exactly 54%. Dial it in slowly while your hats play — you will feel the exact moment it locks in.",
  },
  {
    id: "tempo-knob", num: 10, name: "Tempo", zone: "encoders", priority: "secondary",
    description: "Direct hardware BPM control. Turn to change tempo in real time while a pattern loops — find the right feel by ear.",
    steps: [
      "Turn clockwise to increase BPM, counter-clockwise to decrease",
      "SHIFT + turn = 0.1 BPM resolution (critical for finding the exact feel)",
      "Boom Bap: 84–96 BPM  |  Hip Hop: 75–95 BPM  |  R&B: 70–88 BPM",
      "Changes apply immediately — great for tempo-matching a sample",
    ],
  },
  {
    id: "groups", num: 11, name: "Group Buttons A–H", zone: "groups", priority: "primary",
    description: "8 buttons selecting which Group (instrument set) is active. Each Group has 16 pads of sounds. This is how you switch between drums, bass, chords, and melodies.",
    steps: [
      "Press A–H to select the corresponding Group",
      "Active Group lights up on hardware and in the software",
      "Group A = main drums (kick, snare, hats, clap, shaker)",
      "Group B = extra percussion or additional drum layers",
      "Group C = bass and sub-bass sounds",
      "Groups D–H = melodic instruments (keys, synths, samples)",
      "SHIFT + Group button = toggle mute that Group without switching to it",
    ],
    proTip: "Assign A = drums, C = bass, D = chords. This mirrors the classic MPC drum/bass/keys session workflow that producers have used since the 90s.",
  },
  {
    id: "scene", num: 12, name: "Scene", zone: "scene-pattern", priority: "secondary",
    description: "Scenes are snapshots of which Patterns are playing across all Groups simultaneously. Use them to define song sections — verse, hook, bridge, outro.",
    steps: [
      "Press SCENE to enter Scene mode",
      "Pads 1–16 represent up to 16 Scenes",
      "Press a pad to jump to that Scene (all Groups switch to their assigned Pattern)",
      "Hold a pad to rename or delete a Scene",
      "Chain Scenes in Arrange view to build a full song timeline",
    ],
  },
  {
    id: "pattern", num: 13, name: "Pattern", zone: "scene-pattern", priority: "primary",
    description: "Patterns are the individual beat loops. Each Group can have multiple Patterns for different song sections. Switch between them without stopping playback.",
    steps: [
      "Press PATTERN to enter Pattern mode",
      "Pads represent up to 16 Patterns for the current Group",
      "Press a pad to switch the active Group to that Pattern",
      "DUPLICATE + pad copies the current pattern to another slot",
      "Patterns can be 1, 2, or 4 bars — set in Pattern settings on the touchscreen",
    ],
    proTip: "Pattern 1 = verse, Pattern 2 = hook for every Group. Quick PATTERN + pad switching lets you A/B sections instantly while the beat plays.",
  },
  {
    id: "events", num: 14, name: "Events", zone: "scene-pattern", priority: "secondary",
    description: "Event Edit mode — access the step event list to nudge note positions and adjust velocities at the tick level. 1 bar = 384 ticks.",
    steps: [
      "Press EVENTS to enter Event Edit mode",
      "Hold a step pad + rotate 4D encoder to nudge that event's position by ticks",
      "SHIFT + 4D encoder for 0.1-tick precision nudging",
      "±8 ticks ≈ 1/48th note — the range used for Dilla-style micro-timing",
    ],
  },
  {
    id: "variation", num: 15, name: "Variation", zone: "scene-pattern", priority: "secondary",
    description: "Up to 4 Variations of the current Pattern — fills, breakdowns, and subtle changes without creating entirely new Pattern slots.",
    steps: [
      "Press VARIATION to enter Variation mode",
      "Pads 1–4 = up to 4 Variations of the current pattern",
      "Press a pad to switch to that Variation instantly",
      "Use for: main groove (V1), fill (V2), breakdown (V3), intro (V4)",
    ],
  },
  {
    id: "duplicate", num: 16, name: "Duplicate", zone: "scene-pattern", priority: "primary",
    description: "Hold and tap to copy anything — the fastest workflow for building on existing material without starting from scratch.",
    steps: [
      "DUPLICATE + tap a pad = copy pad settings to another slot",
      "DUPLICATE + tap a Pattern slot = copy the full 16-step pattern",
      "DUPLICATE + tap a Scene = copy the entire scene (all Group assignments)",
      "In Step Sequencer: DUPLICATE + tap a step copies its properties",
    ],
    proTip: "Start every session: make Pattern 1, then DUPLICATE it to slots 2 and 3. Instant verse / hook / bridge foundation in 10 seconds.",
  },
  {
    id: "select", num: 17, name: "Select", zone: "scene-pattern", priority: "secondary",
    description: "Hold Select and tap pads to multi-select events for group editing, muting, or deleting all at once.",
    steps: [
      "SELECT + tap multiple pads to select them simultaneously",
      "Selected pads can be muted, tuned, or deleted as a group",
      "In Step Sequencer: SELECT + tap multiple steps to select events",
      "ERASE while holding SELECT = delete all selected events at once",
    ],
  },
  {
    id: "solo", num: 18, name: "Solo", zone: "scene-pattern", priority: "primary",
    description: "Hold Solo and tap any pad to solo that sound — all others mute temporarily so you can hear it completely in isolation.",
    steps: [
      "SOLO + tap a pad = solo it (all other pads mute)",
      "SOLO + tap multiple pads = solo multiple sounds simultaneously",
      "Release SOLO to return all muted sounds to their previous state",
      "SHIFT + Group button = toggle entire Group mute",
    ],
  },
  {
    id: "mute", num: 19, name: "Mute", zone: "scene-pattern", priority: "primary",
    description: "Hold Mute and press pads to toggle mute on individual sounds — the essential live performance control for drops and breakdowns.",
    steps: [
      "MUTE + tap a pad = toggle its mute state (stays muted after release)",
      "MUTE + tap multiple pads = mute/unmute several sounds at once",
      "Muted pads stay muted until explicitly toggled back on",
      "Used live: drop the kick and hi-hat for a bar, then bring them back on the beat",
    ],
    proTip: "Live performance: hold MUTE, quickly tap kick (pad 1) + hi-hat (pad 3) right before the bar drops. Release MUTE — everything comes back on beat 1.",
  },
  {
    id: "displays", num: 20, name: "Dual Displays", zone: "display", priority: "primary",
    description: "Two 480×272 color touchscreens — the primary visual interface. They adapt to every mode showing parameters, browser, step sequencer, mixer, and more.",
    steps: [
      "Left screen = primary edit view (what you are changing)",
      "Right screen = secondary info (browser, pad overview, secondary params)",
      "Both screens are touchscreens — tap the tab icons to switch views",
      "Step Seq mode: left screen = steps 1–8, right screen = steps 9–16",
      "Browser mode: left = categories and filters, right = individual items",
    ],
    proTip: "In Step Sequencer mode, left screen tab 2 = Groove settings. That is where swing lives. Learn this path — you will use it every single session.",
  },
  {
    id: "4d-encoder", num: 21, name: "4D Encoder", zone: "encoders", priority: "primary",
    description: "The most important control on the MK3. A clickable rotary encoder that also tilts in 4 directions (up/down/left/right). The primary navigation and editing interface for everything on screen.",
    steps: [
      "TURN — scroll lists, adjust parameter values up/down",
      "PUSH (click in) — confirm selection, enter edit mode, toggle velocity mode in Step Seq",
      "TILT UP / DOWN — scroll categories in Browser, navigate between tracks",
      "TILT LEFT / RIGHT — navigate between sections, pages, and sub-menus",
      "SHIFT + TURN — fine-tune any value in 0.1 increments",
      "Step Sequencer: PUSH enters Velocity mode; hold any step pad + TURN sets that step's velocity",
      "Browser: TURN scrolls sounds; PUSH loads/previews; TILT UP/DOWN changes category level",
    ],
    proTip: "The push of the 4D encoder is context-sensitive — it almost never does the wrong thing. When in doubt, push it. Browser: load. Step Seq: velocity mode. Mixer: select.",
  },
  {
    id: "browse", num: 22, name: "Browse", zone: "view-mode", priority: "primary",
    description: "Opens the Sound and Sample Browser — access to all NI sounds, Maschine expansion packs, third-party Kontakt libraries, and your imported samples.",
    steps: [
      "Press BROWSE to open the browser",
      "Left screen: category and type navigation",
      "Right screen: individual sounds/samples to load",
      "TURN 4D encoder to scroll through sounds",
      "PUSH 4D encoder to load or preview a sound in-context",
      "TILT 4D encoder UP/DOWN to navigate category hierarchy",
      "Use touchscreen to filter by expansion pack",
    ],
    proTip: "In Browse mode the pattern keeps looping — you can preview sounds live on top of your beat before loading. Always audition in context, never in silence.",
  },
  {
    id: "headphones", num: 23, name: "Headphone Vol", zone: "encoders", priority: "secondary",
    description: "Controls the headphone output level independently of the main line outputs. The headphone jack is on the front edge of the MK3.",
    steps: [
      "Turn clockwise to increase headphone volume",
      "Independent from the Master Volume knob",
      "Headphone jack is on the front-left edge of the device",
      "Useful for monitoring at different levels than the main mix",
    ],
  },
  {
    id: "macro-knobs", num: 24, name: "Macro Knobs 1–8", zone: "macro", priority: "primary",
    description: "8 large touch-sensitive rotary encoders that adapt to the current view — Group faders in Mix, plugin parameters in Plugin view, performance macros in Perform mode.",
    steps: [
      "MIX view: knobs 1–8 = Group A–H volume faders",
      "PLUGIN view: knobs control the top 8 instrument parameters",
      "PERFORM view: knobs 1–8 are user-mapped performance macros",
      "Touch-sensitive: touching without turning still registers as input",
      "Assign macros via right-click (software) or hold SHIFT + touch knob",
    ],
    proTip: "In Mix view, these are your mixer. Set Group A–H levels here in real time. 8 knobs, 8 groups — the fastest way to balance a full production on the fly.",
  },
  {
    id: "play", num: 25, name: "Play", zone: "transport", priority: "primary",
    description: "Start playback of the current Pattern or Song. The most-pressed button in any production session.",
    steps: [
      "Press PLAY to start pattern playback",
      "Press again to pause in place (pattern mode toggles)",
      "SHIFT + PLAY = restart from bar 1 immediately",
      "In Song mode: starts the timeline from the current playhead position",
    ],
  },
  {
    id: "rec", num: 26, name: "Record", zone: "transport", priority: "primary",
    description: "Arms recording. Press while the pattern plays to capture pad hits or MIDI input into the current pattern in real time.",
    steps: [
      "Press REC to arm recording (button lights red)",
      "Press PLAY while armed to start recording immediately",
      "Press REC while already playing to start on the next bar",
      "SHIFT + REC = Overdub mode (layer new hits on top, nothing erased)",
      "Press STOP or REC again to stop recording",
    ],
    proTip: "Always record in Overdub mode (SHIFT + REC) when adding to an existing pattern — you will never accidentally erase beats already there.",
  },
  {
    id: "stop", num: 27, name: "Stop", zone: "transport", priority: "secondary",
    description: "Stops playback and resets the playhead to bar 1. Different from toggling Play, which pauses in place at the current position.",
    steps: [
      "Press STOP to stop playback and return to bar 1",
      "Press while already stopped to move the playhead to bar 1",
      "In Pattern mode: always resets to the start of the pattern",
      "In Song mode: returns the playhead to the beginning of the timeline",
    ],
  },
  {
    id: "erase", num: 28, name: "Erase", zone: "transport", priority: "primary",
    description: "Hold Erase and tap pads or steps to delete events. Context-sensitive — erases steps in Step Sequencer mode and pad hit recordings in Pad mode.",
    steps: [
      "ERASE + tap a step (Step Sequencer) = delete that step event",
      "ERASE + tap a pad (Pad mode) = erase all events on that pad in the pattern",
      "Hold ERASE while recording + tap pads = live erase as you play",
      "ERASE + SELECT = delete all selected events",
    ],
    proTip: "ERASE is non-destructive via undo — Cmd/Ctrl+Z in the software still works after using hardware ERASE.",
  },
  {
    id: "tap", num: 29, name: "Tap Tempo", zone: "transport", priority: "secondary",
    description: "Tap the beat to set project BPM by feel. The hardware averages multiple taps to calculate an accurate tempo.",
    steps: [
      "Press TAP repeatedly in time with your beat (4+ taps for accuracy)",
      "The BPM display updates in real time after each tap",
      "SHIFT + TAP = same function (alternate shortcut)",
      "Most accurate: tap on every quarter note downbeat",
      "Use to match BPM to a sample playing on your phone or a reference track",
    ],
  },
  {
    id: "restart", num: 30, name: "Restart", zone: "transport", priority: "secondary",
    description: "Immediately jumps playback back to bar 1 without stopping. Seamless loop reset — no silence between restart and playback.",
    steps: [
      "Press RESTART while playing to jump to bar 1 without stopping",
      "Pattern continues with no silence gap",
      "Use during recording to redo a take without stopping the sequence",
      "In Song mode: restarts the entire song timeline from the beginning",
    ],
  },
  {
    id: "pads", num: 31, name: "Pads 1–16", zone: "pads", priority: "primary",
    description: "16 velocity-sensitive rubber pads — the primary instrument interface. Trigger sounds, record beats, play melodies, select steps, and navigate menus.",
    steps: [
      "Default layout: pad 1 = bottom-left, pad 16 = top-right",
      "Velocity sensitive: hit harder = louder, softer = quieter",
      "Step Sequencer mode: pads 1–16 represent the 16 pattern steps",
      "Scene / Pattern mode: pads select Scenes or Pattern slots",
      "Notes mode: pads become a chromatic or scale-locked keyboard",
      "Browser mode: pads preview the highlighted sound",
      "Hold any pad + tap an action button for context-sensitive editing",
    ],
    proTip: "Practice hitting pads lighter than you think necessary. MK3 pads are very sensitive — hitting too hard creates unwanted velocity spikes in your patterns.",
  },
];

// ─── SVG Layout definitions ──────────────────────────────────────────────────

const LAYOUTS: Layout[] = [
  // Left column: view-mode buttons
  { id: "channel",  callout: { cx: 68, cy: 141 }, shapes: [{ kind: "rect", x: 8, y: 130, w: 52, h: 22, label: "CH" }] },
  { id: "plugin",   callout: { cx: 68, cy: 165 }, shapes: [{ kind: "rect", x: 8, y: 154, w: 52, h: 22, label: "PLUG" }] },
  { id: "arrange",  callout: { cx: 68, cy: 189 }, shapes: [{ kind: "rect", x: 8, y: 178, w: 52, h: 22, label: "ARR" }] },
  { id: "mix",      callout: { cx: 68, cy: 213 }, shapes: [{ kind: "rect", x: 8, y: 202, w: 52, h: 22, label: "MIX" }] },
  { id: "perform",  callout: { cx: 68, cy: 237 }, shapes: [{ kind: "rect", x: 8, y: 226, w: 52, h: 22, label: "PERF" }] },
  { id: "notes",    callout: { cx: 68, cy: 261 }, shapes: [{ kind: "rect", x: 8, y: 250, w: 52, h: 22, label: "NOTES" }] },
  { id: "shift",    callout: { cx: 68, cy: 285 }, shapes: [{ kind: "rect", x: 8, y: 274, w: 52, h: 22, label: "SHIFT" }] },

  // Top knobs
  { id: "volume-knob", callout: { cx: 90, cy: 20 },  shapes: [{ kind: "circle", cx: 90, cy: 46, r: 24, label: "VOL" }] },
  { id: "swing-knob",  callout: { cx: 143, cy: 20 }, shapes: [{ kind: "circle", cx: 143, cy: 44, r: 18, label: "SWG" }] },
  { id: "tempo-knob",  callout: { cx: 191, cy: 20 }, shapes: [{ kind: "circle", cx: 191, cy: 44, r: 18, label: "BPM" }] },

  // Group buttons A-H (8 buttons = 1 control)
  {
    id: "groups",
    callout: { cx: 175, cy: 64 },
    shapes: [
      { kind: "rect", x: 68, y: 74, w: 42, h: 28, label: "A" },
      { kind: "rect", x: 116, y: 74, w: 42, h: 28, label: "B" },
      { kind: "rect", x: 164, y: 74, w: 42, h: 28, label: "C" },
      { kind: "rect", x: 212, y: 74, w: 42, h: 28, label: "D" },
      { kind: "rect", x: 68, y: 108, w: 42, h: 28, label: "E" },
      { kind: "rect", x: 116, y: 108, w: 42, h: 28, label: "F" },
      { kind: "rect", x: 164, y: 108, w: 42, h: 28, label: "G" },
      { kind: "rect", x: 212, y: 108, w: 42, h: 28, label: "H" },
    ],
  },

  // Scene / Pattern area
  { id: "scene",     callout: { cx: 299, cy: 68 },  shapes: [{ kind: "rect", x: 263, y: 74, w: 46, h: 28, label: "SCN" }] },
  { id: "pattern",   callout: { cx: 351, cy: 68 },  shapes: [{ kind: "rect", x: 315, y: 74, w: 46, h: 28, label: "PAT" }] },
  { id: "events",    callout: { cx: 403, cy: 68 },  shapes: [{ kind: "rect", x: 367, y: 74, w: 46, h: 28, label: "EVT" }] },
  { id: "variation", callout: { cx: 455, cy: 68 },  shapes: [{ kind: "rect", x: 419, y: 74, w: 46, h: 28, label: "VAR" }] },
  { id: "duplicate", callout: { cx: 299, cy: 142 }, shapes: [{ kind: "rect", x: 263, y: 108, w: 46, h: 28, label: "DUP" }] },
  { id: "select",    callout: { cx: 351, cy: 142 }, shapes: [{ kind: "rect", x: 315, y: 108, w: 46, h: 28, label: "SEL" }] },
  { id: "solo",      callout: { cx: 403, cy: 142 }, shapes: [{ kind: "rect", x: 367, y: 108, w: 46, h: 28, label: "SOLO" }] },
  { id: "mute",      callout: { cx: 455, cy: 142 }, shapes: [{ kind: "rect", x: 419, y: 108, w: 46, h: 28, label: "MUTE" }] },

  // Dual screens
  {
    id: "displays",
    callout: { cx: 588, cy: 12 },
    shapes: [
      { kind: "rect", x: 474, y: 15, w: 170, h: 140, rx: 3, label: "" },
      { kind: "rect", x: 654, y: 15, w: 170, h: 140, rx: 3, label: "" },
    ],
  },

  // 4D Encoder
  { id: "4d-encoder", callout: { cx: 848, cy: 44 }, shapes: [{ kind: "circle", cx: 848, cy: 90, r: 38, label: "4D" }] },

  // Browse + Headphones
  { id: "browse",     callout: { cx: 847, cy: 152 }, shapes: [{ kind: "rect", x: 797, y: 140, w: 50, h: 24, label: "BROW" }] },
  { id: "headphones", callout: { cx: 873, cy: 130 }, shapes: [{ kind: "circle", cx: 873, cy: 148, r: 14, label: "HP" }] },

  // Macro knobs row (8 knobs = 1 control)
  {
    id: "macro-knobs",
    callout: { cx: 430, cy: 188 },
    shapes: [
      { kind: "circle", cx: 75, cy: 218, r: 21, label: "1" },
      { kind: "circle", cx: 189, cy: 218, r: 21, label: "2" },
      { kind: "circle", cx: 303, cy: 218, r: 21, label: "3" },
      { kind: "circle", cx: 417, cy: 218, r: 21, label: "4" },
      { kind: "circle", cx: 531, cy: 218, r: 21, label: "5" },
      { kind: "circle", cx: 645, cy: 218, r: 21, label: "6" },
      { kind: "circle", cx: 759, cy: 218, r: 21, label: "7" },
      { kind: "circle", cx: 873, cy: 218, r: 21, label: "8" },
    ],
  },

  // Transport buttons
  { id: "play",    callout: { cx: 91, cy: 363 },  shapes: [{ kind: "rect", x: 8, y: 370, w: 79, h: 30, label: "PLAY" }] },
  { id: "rec",     callout: { cx: 176, cy: 363 }, shapes: [{ kind: "rect", x: 93, y: 370, w: 79, h: 30, label: "REC" }] },
  { id: "stop",    callout: { cx: 261, cy: 363 }, shapes: [{ kind: "rect", x: 178, y: 370, w: 79, h: 30, label: "STOP" }] },
  { id: "restart", callout: { cx: 91, cy: 407 },  shapes: [{ kind: "rect", x: 8, y: 407, w: 79, h: 30, label: "REST" }] },
  { id: "erase",   callout: { cx: 176, cy: 407 }, shapes: [{ kind: "rect", x: 93, y: 407, w: 79, h: 30, label: "ERASE" }] },
  { id: "tap",     callout: { cx: 261, cy: 407 }, shapes: [{ kind: "rect", x: 178, y: 407, w: 79, h: 30, label: "TAP" }] },

  // Pads 4×4 — pad 1 = bottom-left, pad 16 = top-right
  {
    id: "pads",
    callout: { cx: 730, cy: 263 },
    shapes: [
      // Row 1 (pads 13-16, top)
      { kind: "rect", x: 293, y: 270, w: 140, h: 60, rx: 4, label: "13" },
      { kind: "rect", x: 439, y: 270, w: 140, h: 60, rx: 4, label: "14" },
      { kind: "rect", x: 585, y: 270, w: 140, h: 60, rx: 4, label: "15" },
      { kind: "rect", x: 731, y: 270, w: 140, h: 60, rx: 4, label: "16" },
      // Row 2 (pads 9-12)
      { kind: "rect", x: 293, y: 336, w: 140, h: 60, rx: 4, label: "9" },
      { kind: "rect", x: 439, y: 336, w: 140, h: 60, rx: 4, label: "10" },
      { kind: "rect", x: 585, y: 336, w: 140, h: 60, rx: 4, label: "11" },
      { kind: "rect", x: 731, y: 336, w: 140, h: 60, rx: 4, label: "12" },
      // Row 3 (pads 5-8)
      { kind: "rect", x: 293, y: 402, w: 140, h: 60, rx: 4, label: "5" },
      { kind: "rect", x: 439, y: 402, w: 140, h: 60, rx: 4, label: "6" },
      { kind: "rect", x: 585, y: 402, w: 140, h: 60, rx: 4, label: "7" },
      { kind: "rect", x: 731, y: 402, w: 140, h: 60, rx: 4, label: "8" },
      // Row 4 (pads 1-4, bottom)
      { kind: "rect", x: 293, y: 468, w: 140, h: 60, rx: 4, label: "1" },
      { kind: "rect", x: 439, y: 468, w: 140, h: 60, rx: 4, label: "2" },
      { kind: "rect", x: 585, y: 468, w: 140, h: 60, rx: 4, label: "3" },
      { kind: "rect", x: 731, y: 468, w: 140, h: 60, rx: 4, label: "4" },
    ],
  },
];

// ─── Quick lookup ─────────────────────────────────────────────────────────────

const CONTROL_MAP = Object.fromEntries(CONTROLS.map(c => [c.id, c]));

// ─── SVG Diagram ─────────────────────────────────────────────────────────────

function MK3Diagram({
  activeId,
  hoveredId,
  onHover,
  onSelect,
}: {
  activeId: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
}) {
  function stateFor(id: string): "active" | "hovered" | "idle" {
    if (id === activeId) return "active";
    if (id === hoveredId) return "hovered";
    return "idle";
  }

  function shapeColor(id: string): string {
    const ctrl = CONTROL_MAP[id];
    if (!ctrl) return "#2a2a32";
    const state = stateFor(id);
    if (state === "active")  return ZONE_COLOR[ctrl.zone] + "30";
    if (state === "hovered") return ZONE_COLOR[ctrl.zone] + "18";
    return "#2a2a32";
  }

  function strokeColor(id: string): string {
    const ctrl = CONTROL_MAP[id];
    if (!ctrl) return "#3a3a44";
    const state = stateFor(id);
    if (state === "active")  return ZONE_COLOR[ctrl.zone];
    if (state === "hovered") return ZONE_COLOR[ctrl.zone] + "88";
    return "#3a3a44";
  }

  function calloutFill(id: string): string {
    const ctrl = CONTROL_MAP[id];
    if (!ctrl) return "#2a2a32";
    const state = stateFor(id);
    if (state === "active")  return ZONE_COLOR[ctrl.zone];
    if (state === "hovered") return ZONE_COLOR[ctrl.zone] + "cc";
    return "#2a2a44";
  }

  return (
    <svg
      viewBox="0 0 900 545"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full select-none"
      style={{ fontFamily: "ui-monospace, monospace" }}
    >
      <defs>
        <radialGradient id="knob-grad" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#484850" />
          <stop offset="100%" stopColor="#1c1c24" />
        </radialGradient>
        <radialGradient id="encoder-grad" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#4a4a56" />
          <stop offset="100%" stopColor="#1a1a22" />
        </radialGradient>
        <linearGradient id="screen-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d2540" />
          <stop offset="100%" stopColor="#071828" />
        </linearGradient>
        <linearGradient id="pad-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2e2e3a" />
          <stop offset="100%" stopColor="#1e1e28" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Device shell */}
      <rect x="2" y="2" width="896" height="541" rx="16" fill="#141418" stroke="#444" strokeWidth="1.5" />
      <rect x="4" y="4" width="892" height="537" rx="14" fill="#1a1a20" />

      {/* Zone labels (subtle background areas) */}
      {/* Left column zone */}
      <rect x="6" y="124" width="58" height="178" rx="6" fill="#ffffff05" />
      {/* Group buttons zone */}
      <rect x="62" y="66" width="204" height="78" rx="6" fill="#ffffff04" />
      {/* Scene/pattern zone */}
      <rect x="257" y="66" width="214" height="78" rx="6" fill="#ffffff04" />
      {/* Transport zone */}
      <rect x="4" y="362" width="261" height="82" rx="6" fill="#ffffff04" />
      {/* Pads zone */}
      <rect x="287" y="262" width="608" height="274" rx="6" fill="#ffffff04" />
      {/* Macro knobs zone */}
      <rect x="48" y="190" width="852" height="58" rx="6" fill="#ffffff03" />

      {/* Zone label text */}
      <text x="37" y="120" textAnchor="middle" fill="#444" fontSize="7" letterSpacing="0.08em">VIEW</text>
      <text x="160" y="62" textAnchor="middle" fill="#444" fontSize="7" letterSpacing="0.08em">GROUPS</text>
      <text x="364" y="62" textAnchor="middle" fill="#444" fontSize="7" letterSpacing="0.08em">SCENE / PATTERN</text>
      <text x="474" y="258" textAnchor="middle" fill="#444" fontSize="7" letterSpacing="0.08em">TRANSPORT</text>
      <text x="591" y="258" textAnchor="middle" fill="#444" fontSize="7" letterSpacing="0.08em">PADS</text>
      <text x="474" y="185" textAnchor="middle" fill="#444" fontSize="7" letterSpacing="0.08em">MACRO KNOBS</text>

      {/* Render each control group */}
      {LAYOUTS.map(layout => {
        const ctrl = CONTROL_MAP[layout.id];
        const isKnob = layout.shapes[0]?.kind === "circle";
        const isPad = layout.id === "pads";
        const isScreen = layout.id === "displays";
        const isEncoder = layout.id === "4d-encoder";

        return (
          <g
            key={layout.id}
            style={{ cursor: "pointer" }}
            onMouseEnter={() => onHover(layout.id)}
            onMouseLeave={() => onHover(null)}
            onClick={() => onSelect(layout.id)}
            filter={stateFor(layout.id) === "active" ? "url(#glow)" : undefined}
          >
            {layout.shapes.map((shape, si) => {
              if (shape.kind === "rect") {
                const fill = isScreen
                  ? (stateFor(layout.id) !== "idle" ? "#1a4a7a" : "url(#screen-grad)")
                  : isPad
                  ? (stateFor(layout.id) !== "idle" ? shapeColor(layout.id) : "url(#pad-grad)")
                  : shapeColor(layout.id);
                return (
                  <g key={si}>
                    <rect
                      x={shape.x} y={shape.y}
                      width={shape.w} height={shape.h}
                      rx={shape.rx ?? 3}
                      fill={fill}
                      stroke={strokeColor(layout.id)}
                      strokeWidth={stateFor(layout.id) !== "idle" ? 1.5 : 1}
                    />
                    {isScreen && si === 0 && (
                      <>
                        <rect x={shape.x + 6} y={shape.y + 8} width={shape.w - 12} height={10} rx={2} fill="#1a5a9a" opacity="0.6" />
                        <rect x={shape.x + 6} y={shape.y + 24} width={(shape.w - 12) * 0.6} height={6} rx={1} fill="#1a5a9a" opacity="0.4" />
                        <rect x={shape.x + 6} y={shape.y + 34} width={(shape.w - 12) * 0.8} height={6} rx={1} fill="#1a5a9a" opacity="0.3" />
                        <rect x={shape.x + 6} y={shape.y + 44} width={(shape.w - 12) * 0.5} height={6} rx={1} fill="#f59e0b" opacity="0.25" />
                        <rect x={shape.x + 6} y={shape.y + 54} width={(shape.w - 12) * 0.7} height={6} rx={1} fill="#1a5a9a" opacity="0.3" />
                        <rect x={shape.x + 6} y={shape.y + 64} width={(shape.w - 12) * 0.4} height={6} rx={1} fill="#1a5a9a" opacity="0.2" />
                        <rect x={shape.x + 6} y={shape.y + 74} width={(shape.w - 12) * 0.9} height={6} rx={1} fill="#1a5a9a" opacity="0.3" />
                        <rect x={shape.x + 6} y={shape.y + 84} width={(shape.w - 12) * 0.6} height={6} rx={1} fill="#f59e0b" opacity="0.2" />
                        <rect x={shape.x + 6} y={shape.y + 94} width={(shape.w - 12) * 0.7} height={6} rx={1} fill="#1a5a9a" opacity="0.25" />
                        <rect x={shape.x + 6} y={shape.y + 104} width={(shape.w - 12) * 0.5} height={6} rx={1} fill="#1a5a9a" opacity="0.2" />
                        <rect x={shape.x + 6} y={shape.y + 114} width={(shape.w - 12) * 0.8} height={6} rx={1} fill="#1a5a9a" opacity="0.15" />
                        <rect x={shape.x + 6} y={shape.y + 124} width={(shape.w - 12) * 0.4} height={6} rx={1} fill="#1a5a9a" opacity="0.1" />
                      </>
                    )}
                    {!isScreen && shape.label && (
                      <text
                        x={shape.x + shape.w / 2}
                        y={shape.y + shape.h / 2 + 3.5}
                        textAnchor="middle"
                        fill={stateFor(layout.id) !== "idle" && ctrl ? ZONE_COLOR[ctrl.zone] : "#666"}
                        fontSize={isPad ? "9" : "7"}
                        fontWeight="600"
                        letterSpacing="0.04em"
                      >
                        {shape.label}
                      </text>
                    )}
                  </g>
                );
              }

              if (shape.kind === "circle") {
                const isMainEncoder = isEncoder;
                const fillColor = isMainEncoder
                  ? "url(#encoder-grad)"
                  : isKnob && !isMainEncoder
                  ? "url(#knob-grad)"
                  : shapeColor(layout.id);
                return (
                  <g key={si}>
                    <circle
                      cx={shape.cx} cy={shape.cy} r={shape.r}
                      fill={fillColor}
                      stroke={strokeColor(layout.id)}
                      strokeWidth={stateFor(layout.id) !== "idle" ? 2 : 1}
                    />
                    {isMainEncoder && (
                      <>
                        <circle cx={shape.cx} cy={shape.cy} r={shape.r * 0.35} fill="#111118" />
                        <line x1={shape.cx} y1={shape.cy - shape.r * 0.7} x2={shape.cx} y2={shape.cy - shape.r * 0.45}
                          stroke={ctrl ? ZONE_COLOR[ctrl.zone] : "#555"} strokeWidth="2" strokeLinecap="round" opacity={stateFor(layout.id) !== "idle" ? 1 : 0.5} />
                        <line x1={shape.cx} y1={shape.cy + shape.r * 0.45} x2={shape.cx} y2={shape.cy + shape.r * 0.7}
                          stroke="#444" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1={shape.cx - shape.r * 0.7} y1={shape.cy} x2={shape.cx - shape.r * 0.45} y2={shape.cy}
                          stroke="#444" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1={shape.cx + shape.r * 0.45} y1={shape.cy} x2={shape.cx + shape.r * 0.7} y2={shape.cy}
                          stroke="#444" strokeWidth="1.5" strokeLinecap="round" />
                        <text x={shape.cx} y={shape.cy + 4} textAnchor="middle" fill={ctrl ? ZONE_COLOR[ctrl.zone] : "#666"} fontSize="9" fontWeight="700" opacity={stateFor(layout.id) !== "idle" ? 1 : 0.6}>4D</text>
                      </>
                    )}
                    {!isMainEncoder && shape.label && (
                      <text
                        x={shape.cx} y={shape.cy + 3.5}
                        textAnchor="middle"
                        fill={stateFor(layout.id) !== "idle" && ctrl ? ZONE_COLOR[ctrl.zone] : "#666"}
                        fontSize="7"
                        fontWeight="600"
                        letterSpacing="0.03em"
                      >
                        {shape.label}
                      </text>
                    )}
                  </g>
                );
              }
              return null;
            })}

            {/* Callout badge */}
            <circle
              cx={layout.callout.cx} cy={layout.callout.cy} r={9}
              fill={calloutFill(layout.id)}
              stroke={stateFor(layout.id) !== "idle" && ctrl ? ZONE_COLOR[ctrl.zone] : "#333"}
              strokeWidth="1"
            />
            <text
              x={layout.callout.cx} y={layout.callout.cy + 3.5}
              textAnchor="middle"
              fill={stateFor(layout.id) === "active" ? "#000" : "#fff"}
              fontSize="6.5"
              fontWeight="700"
            >
              {CONTROL_MAP[layout.id]?.num}
            </text>
          </g>
        );
      })}

      {/* Connector line between displays */}
      <line x1="644" y1="85" x2="654" y2="85" stroke="#222" strokeWidth="2" />

      {/* Hardware label */}
      <text x="900" y="540" textAnchor="end" fill="#333" fontSize="8" letterSpacing="0.12em">
        MASCHINE MK3
      </text>
    </svg>
  );
}

// ─── Detail panel ─────────────────────────────────────────────────────────────

function ControlDetail({ ctrl, de }: { ctrl: Control; de?: DeControl }) {
  const color = ZONE_COLOR[ctrl.zone];
  const t = useT();

  const description = de?.description ?? ctrl.description;
  const steps = de?.steps ?? ctrl.steps;
  const proTip = de?.proTip ?? ctrl.proTip;

  return (
    <motion.div
      key={ctrl.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18 }}
      className="mt-6 rounded-xl border p-6"
      style={{ borderColor: color + "40", background: color + "08" }}
    >
      <div className="flex items-start gap-4 flex-wrap">
        <div
          className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold"
          style={{ background: color, color: "#000" }}
        >
          {ctrl.num}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-xl font-bold text-foreground">{ctrl.name}</h2>
            <span
              className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{ background: color + "22", color }}
            >
              {ZONE_LABEL[ctrl.zone]}
            </span>
            {ctrl.priority === "primary" && (
              <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground">
                {t("Primary", "Primär")}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-5 grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-2">
            {t("How to use", "Verwendung")}
          </p>
          <ol className="space-y-1.5">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold mt-0.5"
                  style={{ background: color + "22", color }}
                >
                  {i + 1}
                </span>
                <span className="text-muted-foreground leading-snug">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {proTip && (
          <div
            className="rounded-lg p-4 border"
            style={{ borderColor: color + "30", background: color + "0a" }}
          >
            <p className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color }}>
              {t("Pro tip", "Pro-Tipp")}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">{proTip}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ─── Control card (grid item) ─────────────────────────────────────────────────

function ControlCard({
  ctrl,
  de,
  active,
  onClick,
}: {
  ctrl: Control;
  de?: DeControl;
  active: boolean;
  onClick: () => void;
}) {
  const color = ZONE_COLOR[ctrl.zone];
  const description = de?.description ?? ctrl.description;
  return (
    <button
      onClick={onClick}
      className="text-left rounded-lg border p-3 transition-all duration-150 hover:bg-white/5"
      style={{
        borderColor: active ? color + "80" : "#ffffff12",
        background: active ? color + "10" : "transparent",
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold flex-shrink-0"
          style={{ background: active ? color : color + "22", color: active ? "#000" : color }}
        >
          {ctrl.num}
        </span>
        <span className={`text-sm font-semibold ${active ? "text-foreground" : "text-muted-foreground"}`}>
          {ctrl.name}
        </span>
        {ctrl.priority === "primary" && (
          <span className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
        )}
      </div>
      <p className="mt-1 text-[11px] text-muted-foreground/70 leading-snug line-clamp-2 pl-8">
        {description.split(".")[0]}.
      </p>
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const ZONE_LABEL_DE: Record<Zone, string> = {
  "view-mode": "Ansicht",
  groups: "Groups",
  "scene-pattern": "Scene & Pattern",
  display: "Display",
  encoders: "Encoder & Knöpfe",
  macro: "Macro-Knöpfe",
  transport: "Transport",
  pads: "Pads",
};

export default function HardwareGuide() {
  const [activeId, setActiveId] = useState("4d-encoder");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const { lang } = useLang();
  const t = useT();

  const activeCtrl = CONTROL_MAP[activeId];
  const activeCtrlDe = lang === "de" ? (HARDWARE_DE[activeId] ?? undefined) : undefined;

  const zoneLabel = (z: Zone) => lang === "de" ? ZONE_LABEL_DE[z] : ZONE_LABEL[z];

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return CONTROLS;
    return CONTROLS.filter(c => {
      const de = HARDWARE_DE[c.id];
      return (
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        (de?.description ?? "").toLowerCase().includes(q) ||
        c.steps.some(s => s.toLowerCase().includes(q)) ||
        (de?.steps ?? []).some(s => s.toLowerCase().includes(q)) ||
        ZONE_LABEL[c.zone].toLowerCase().includes(q) ||
        ZONE_LABEL_DE[c.zone].toLowerCase().includes(q)
      );
    });
  }, [query]);

  const zones = useMemo(() => {
    const seen = new Set<Zone>();
    const out: Zone[] = [];
    for (const c of CONTROLS) {
      if (!seen.has(c.zone)) { seen.add(c.zone); out.push(c.zone); }
    }
    return out;
  }, []);

  return (
    <div className="min-h-[100dvh] bg-background text-foreground">
      <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-40">
        <div className="container mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/">
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Pattern Lab
            </button>
          </Link>
          <span className="text-border/60">·</span>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-semibold text-foreground">
              {t("Hardware Reference", "Hardware-Referenz")}
            </span>
          </div>
          <div className="ml-auto text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40">
            Maschine MK3 — {CONTROLS.length} Controls
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10 max-w-[960px]">

        {/* Intro */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {t("MK3 Control Map", "MK3 Steuerübersicht")}
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            {t(
              "Every control on the Maschine MK3 — where it is, what it does, and how to use it. Click any numbered callout on the diagram or any card below to see detailed instructions.",
              "Jede Steuerung auf dem Maschine MK3 — wo sie ist, was sie tut und wie man sie verwendet. Auf einen nummerierten Callout im Diagramm oder auf eine Karte unten klicken, um detaillierte Anleitungen zu sehen.",
            )}
          </p>
        </div>

        {/* Zone legend */}
        <div className="flex flex-wrap gap-2 mb-8">
          {zones.map(z => (
            <div key={z} className="flex items-center gap-1.5 text-[11px] text-muted-foreground px-2 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full" style={{ background: ZONE_COLOR[z] }} />
              {zoneLabel(z)}
            </div>
          ))}
        </div>

        {/* SVG Diagram */}
        <div className="rounded-2xl overflow-hidden border border-border/40 bg-[#0e0e12] p-4">
          <MK3Diagram
            activeId={activeId}
            hoveredId={hoveredId}
            onHover={setHoveredId}
            onSelect={setActiveId}
          />
        </div>

        {/* Click hint */}
        <p className="mt-3 text-[11px] text-muted-foreground/50 text-center">
          {t(
            `Click any control on the diagram above — or browse all ${CONTROLS.length} controls below`,
            `Controls auf dem Diagramm anklicken — oder alle ${CONTROLS.length} Controls unten durchsuchen`,
          )}
        </p>

        {/* Active control detail panel */}
        <AnimatePresence mode="wait">
          {activeCtrl && (
            <ControlDetail
              key={activeId}
              ctrl={activeCtrl}
              de={activeCtrlDe}
            />
          )}
        </AnimatePresence>

        {/* Divider */}
        <div className="mt-12 mb-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-border/40" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40">
            {t("All Controls", "Alle Controls")}
          </span>
          <div className="h-px flex-1 bg-border/40" />
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={t("Search controls, zones, or actions...", "Regler, Zonen oder Aktionen suchen…")}
            className="w-full bg-white/5 border border-border rounded-lg py-2.5 pl-9 pr-9 text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-white/30 transition-colors"
          />
          {query && (
            <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-muted-foreground">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Controls grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground py-12">
            {t("No controls match that search.", "Keine Controls für diese Suche gefunden.")}
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map(ctrl => (
              <ControlCard
                key={ctrl.id}
                ctrl={ctrl}
                de={lang === "de" ? (HARDWARE_DE[ctrl.id] ?? undefined) : undefined}
                active={ctrl.id === activeId}
                onClick={() => setActiveId(ctrl.id)}
              />
            ))}
          </div>
        )}

        {/* Primary vs secondary legend */}
        <div className="mt-8 flex items-center gap-4 text-[11px] text-muted-foreground/40">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            {t("Colored dot = primary control", "Farbiger Punkt = primäre Steuerung")}
          </span>
          <span>·</span>
          <span>
            {CONTROLS.filter(c => c.priority === "primary").length} {t("primary controls", "primäre Controls")}
          </span>
          <span>·</span>
          <span>
            {CONTROLS.filter(c => c.priority === "secondary").length} {t("secondary controls", "sekundäre Controls")}
          </span>
        </div>

        {/* Back to cheat sheet link */}
        <div className="mt-12 flex gap-4 flex-wrap">
          <Link href="/cheatsheet">
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground border border-border hover:border-white/30 px-4 py-2.5 rounded-lg transition-all">
              {t("Cheat Sheet — button sequences by genre", "Kurzübersicht — Tastenfolgen nach Genre")}
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
          <Link href="/masterclass">
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground border border-border hover:border-white/30 px-4 py-2.5 rounded-lg transition-all">
              {t("Producer Masterclasses", "Producer Masterclasses")}
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
