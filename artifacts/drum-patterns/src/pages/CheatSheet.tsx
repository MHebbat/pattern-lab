import { Link } from "wouter";
import { ArrowLeft, Zap, Layers, Music, Settings, Volume2, Sliders } from "lucide-react";
import { motion } from "framer-motion";

type Tip = {
  title: string;
  body: string;
  code?: string;
};

type Section = {
  icon: React.ReactNode;
  title: string;
  color: string;
  tips: Tip[];
};

const SECTIONS: Section[] = [
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Maschine MK3 Core Setup",
    color: "#6366f1",
    tips: [
      {
        title: "Swing Per Group",
        body: "Set swing at the Group level, not the Song level. Each group can have its own swing amount. Go to the Group tab → Groove → Swing. Boom Bap: 52-62%. R&B: 55-65%. Hip Hop: 0-55% depending on feel.",
      },
      {
        title: "Resolution for Hi-Hat Rolls",
        body: "In the Step Sequencer, press SHIFT + STEP to switch resolution between 1/16, 1/32, and 1/64. For trap-style rolls and fills, switch the hat group to 1/32 or 1/64 resolution while keeping kicks/snares at 1/16.",
      },
      {
        title: "Note Repeat for Live Rolls",
        body: "Hold NOTE REPEAT on MK3 then hold a pad. The pad triggers repeatedly at the Note Repeat rate. Combine with the Rate knob (in the bottom-right display section) to go from 1/8 to 1/32T for triplet hat rolls. Lock it: hold NOTE REPEAT + press the pad.",
      },
      {
        title: "Step Sequencer Velocity Mode",
        body: "In the Step Sequencer, press the 4D encoder to switch to Velocity mode. Each lit button now shows its velocity. Use the touch strip or encoder to adjust individual step velocities. This is how you add ghost notes — bring them down to 30-50.",
      },
      {
        title: "Humanize for Live Feel",
        body: "Select a Pattern → press SHIFT → Humanize. You can randomize timing (amount in ticks) and velocity (range) independently per instrument. Start subtle: 8-12 ticks timing, 15-20 velocity range. Apply only to hats and light percussion — never to kicks and snares.",
      },
    ],
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Layering & Mute Groups",
    color: "#f59e0b",
    tips: [
      {
        title: "Layering Kicks",
        body: "Use two pads for kicks: Pad 1 is your punchy transient kick, Pad 2 is a deep sub hit. Set both to the same Mute Group (Group tab → Choke Group). They'll trigger together via Pad Link but can be processed separately through their own channels.",
      },
      {
        title: "Choke Groups for Hi-Hats",
        body: "Put Closed HH and Open HH in the same Choke Group (e.g. Group 1). When the closed hat hits, it chokes the open hat — exactly like a real hi-hat. Without this, open and closed hats ring simultaneously and it sounds unrealistic.",
      },
      {
        title: "Snare Layering Formula",
        body: "Classic snare stack: (1) Main snare body sample, (2) Crispy clap, (3) Sub-bass click at very low level. Put all three in the same pad slot using Layers. Pan the clap slightly right. The click adds attack without volume.",
      },
      {
        title: "Pad Link for Simultaneous Hits",
        body: "SHIFT + PAD LINK lets you trigger multiple pads from one pad. Use this to fire a kick + sub bass hit simultaneously. Both pads trigger but are routed separately for independent EQ and compression.",
      },
    ],
  },
  {
    icon: <Sliders className="w-5 h-5" />,
    title: "Effects & Processing",
    color: "#10b981",
    tips: [
      {
        title: "Lo-Fi Boom Bap Stack",
        body: "On your drum bus or master group: (1) Bitcrusher — bits at 12, Rate at 0.7, (2) Saturator — drive around 20-30%, (3) EQ — cut above 12kHz with a shelf. This crushes the high end and adds that SP-1200 grit without going overboard.",
        code: "Bitcrusher → Saturation → Transient Master → EQ (cut hi shelf @12kHz)",
      },
      {
        title: "Compression for Kick",
        body: "For a tight, punchy kick: attack 2-5ms (let the transient through first), release 80-150ms, ratio 4:1, threshold so you're getting 4-6dB of gain reduction. Add a Transient Master after — attack slightly positive to sharpen the click.",
        code: "Attack: 3ms | Release: 100ms | Ratio: 4:1 | GR: -4 to -6dB",
      },
      {
        title: "Sidechain Compression",
        body: "Route your hi-hats and pads to a Bus. Insert a Compressor on the bus, then set the sidechain input to the kick channel. Attack 0ms, release 80ms, ratio 8:1. The hats duck on every kick hit — creates that pumping, breathing groove.",
      },
      {
        title: "Reverb for Snares",
        body: "Boom Bap snare: short room reverb, pre-delay 10-15ms, decay 0.3-0.6s. R&B snare: large hall, pre-delay 20ms, decay 1.2-2.0s. Use the pre-delay to separate the dry hit from the wash — without it, the reverb blurs the transient.",
        code: "Pre-delay: 15ms | Decay: 0.5s (bap) or 1.5s (R&B) | Width: 100%",
      },
      {
        title: "Filtering Hi-Hats",
        body: "For lo-fi or R&B warmth, insert a Filter on the HH group. Low-pass cutoff at 8-10kHz removes harshness. Automate the cutoff: open slightly on beat 1, drift back down by beat 3. Makes the hats breathe dynamically.",
      },
    ],
  },
  {
    icon: <Music className="w-5 h-5" />,
    title: "Boom Bap Specific",
    color: "#f59e0b",
    tips: [
      {
        title: "The MPC Swing Formula",
        body: "True MPC3000 boom bap swing = 54% in Maschine. The even-numbered 16th notes (off-beats: steps 2, 4, 6, 8, etc.) are delayed slightly. Below 52% it feels stiff. Above 62% it starts to feel unnatural. 54-56% is the sweet spot for 90-95 BPM boom bap.",
      },
      {
        title: "Ghost Note Placement",
        body: "Ghost snares breathe life into boom bap. The most effective positions: step 2 (before the downbeat snare), step 7 or 8 (right before beat 3), step 14-15 (the anticipation before beat 4's snare on step 12). Keep velocity 30-45 — they should be felt, not heard.",
      },
      {
        title: "Sample-Accurate Tuning",
        body: "After loading your kick sample, use the Tune knob to pitch it to the root note of your sample chop. If your sample is in Am, tune the kick to A (440Hz). This is one of the biggest differences between an amateur and professional boom bap beat.",
      },
      {
        title: "Open Hat Placement",
        body: "In classic boom bap, a single open hat typically lands on the 16th note just before beat 3 (step 9) or the 'and' of beat 2 (step 6). It adds a breath between the closed hat pattern. One open hat per bar is often all you need.",
      },
    ],
  },
  {
    icon: <Volume2 className="w-5 h-5" />,
    title: "Hip Hop & R&B Specific",
    color: "#ec4899",
    tips: [
      {
        title: "Half-Time Feel",
        body: "For modern R&B half-time: put your snare only on beat 3 (step 8) instead of beats 2 and 4. The kick carries all the rhythmic interest. This doubles the perceived BPM — a beat at 90 BPM with half-time snare feels like 45 BPM.",
      },
      {
        title: "Kick Tuning for R&B",
        body: "R&B kicks need to harmonize with the chords and bassline. Use the Pitch knob: find the root note of your progression and match the kick to it. Then tune the sub kick -12 semitones (one octave down) for extra depth without cluttering the low-mid.",
      },
      {
        title: "Velocity as Dynamics",
        body: "In R&B, velocity variation is everything. Map: ghost kick = 35-45, ghost snare = 30-50, main kick = 80-100, main snare/clap = 90-110, accent hits = 115-127. Using the full velocity range makes the beat sound like a live drummer, not a machine.",
      },
      {
        title: "The Rimshot Swap",
        body: "Replace your snare with a rimshot in R&B and Neo Soul contexts. A rimshot sits higher in the mix, cuts through melodic content better, and has less low-mid buildup. Tune the rimshot to the 5th degree of your key for natural harmonic fit.",
      },
      {
        title: "Shaker as Glue",
        body: "A shaker track running at 16th notes (all steps active) at velocity 35-45 acts as groove glue. It fills in rhythmic gaps and adds forward momentum without cluttering the mix. Filter it with a hi-pass at 3kHz — you only want the transient click, not body.",
      },
    ],
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Workflow & Arrangement Tips",
    color: "#6366f1",
    tips: [
      {
        title: "A/B Variation Pattern",
        body: "Always create a Pattern A (main loop) and Pattern B (variation with one element changed). Typical B variation: add a ghost kick on the last 16th, fill the hat on the last bar, or displace the snare by one 16th. Build your arrangement from 4-bar blocks using Pattern A and B.",
      },
      {
        title: "Velocity Accent Strategy",
        body: "Set your main beat at a 'medium' velocity across the board (75-85), then go back and accent beat 1 of every bar (+20), and de-emphasize every off-beat (-20 to -30). This dynamic shape makes the beat feel like it has forward motion and landing points.",
      },
      {
        title: "The 'One Change' Rule",
        body: "When building fills or transitions, change only ONE element at a time. Move the kick, or change the hat density, or add a snare roll — never all three at once. Subtle variation keeps the listener engaged without making the beat feel chaotic.",
      },
      {
        title: "Record Knob Movements Live",
        body: "In Maschine, hold the Record button while the pattern plays and tweak the Filter Cutoff, Volume, or Pitch knobs on a pad in real time. This records automation directly into the pattern. Use this for hi-hat filter sweeps and volume fades on ghost hits.",
      },
      {
        title: "Template Patterns",
        body: "Create a 'Template' Pattern with your preferred kick/snare/hat sounds already loaded, levels set, and effects chains in place. Duplicate this pattern at the start of each new beat so your starting point is always a professionally configured sound stage.",
      },
    ],
  },
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
            <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">Production reference for hip hop, boom bap & r&b</span>
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
            Everything you need to translate these patterns into great-sounding beats on Maschine MK3 — from swing settings to layering techniques to signal chain recipes.
          </p>
        </motion.div>

        <div className="space-y-12">
          {SECTIONS.map((section, si) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: si * 0.07 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-md border border-border" style={{ color: section.color, backgroundColor: `${section.color}15` }}>
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold tracking-tight">{section.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {section.tips.map((tip, ti) => (
                  <div
                    key={ti}
                    className="bg-card border border-border rounded-lg p-5 flex flex-col gap-3"
                    data-testid={`cheatsheet-tip-${si}-${ti}`}
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: section.color }} />
                      <h3 className="font-semibold text-sm text-foreground tracking-wide">{tip.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-3.5">{tip.body}</p>
                    {tip.code && (
                      <div className="pl-3.5">
                        <code className="text-xs font-mono bg-background border border-border px-3 py-1.5 rounded block text-muted-foreground whitespace-pre-wrap">
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
