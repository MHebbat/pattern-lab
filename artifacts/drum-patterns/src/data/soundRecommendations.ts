import type { Genre } from "./patterns";

export type PackRec = {
  name: string;
  maker: string;
  free: boolean;
  url?: string;
  notes: string;
  source: "ni-expansion" | "ni-preinstalled" | "cymatics" | "kontakt" | "third-party" | "splice";
};

export type PluginRec = {
  name: string;
  platform: "maschine" | "komplete" | "kontakt" | "free";
  use: string;
  notes: string;
};

export type SoundRecs = {
  packs: PackRec[];
  plugins: PluginRec[];
};

export const soundRecommendations: Record<Genre, SoundRecs> = {
  "boom-bap": {
    packs: [
      {
        name: "Queensbridge Stories",
        maker: "Native Instruments",
        free: false,
        url: "https://www.native-instruments.com/en/products/maschine/expansions/queensbridge-stories/",
        notes:
          "The definitive NY boom bap expansion for Maschine. Sampled drums that feel like they came off an MPC3000. Includes snares with built-in room tone, dusty kicks, and a set of pre-swung groove templates. Built in collaboration with Queensbridge producers. Best expansion to start with for this genre.",
        source: "ni-expansion",
      },
      {
        name: "Vintage Heat",
        maker: "Native Instruments",
        free: false,
        url: "https://www.native-instruments.com/en/products/maschine/expansions/vintage-heat/",
        notes:
          "NI's warm analog-era expansion. Kicks and snares sampled from vintage gear — very close to the SP-1200 character. The hi-hats have that compressed, slightly distorted feel that comes from sampling off tape. Particularly strong snares.",
        source: "ni-expansion",
      },
      {
        name: "Golden Era (Preinstalled)",
        maker: "Native Instruments",
        free: true,
        notes:
          "Ships with Maschine MK3 — check your Maschine library under 'Factory Library > Drums > Acoustic'. The boom bap kits under 'Hip Hop' include drum machine-style samples (drum machine multisamples, not live kit). Start here before buying anything.",
        source: "ni-preinstalled",
      },
      {
        name: "Draco — Free Boom Bap Kit",
        maker: "Cymatics",
        free: true,
        url: "https://cymatics.fm/products/draco-free-kit",
        notes:
          "Free download. 40+ boom bap drum samples including kicks with natural low-end, snares with room ambience, and a set of SP-1200-processed hi-hats. Drag directly into Maschine as samples. No registration required.",
        source: "cymatics",
      },
      {
        name: "PastProducers Golden Age Kit",
        maker: "PastProducers",
        free: true,
        url: "https://www.pastproducers.com/golden-age",
        notes:
          "Free sample pack curated specifically for MPC/Maschine-style boom bap. Includes MPC3000 drum machine hits, SP-1200 kicks, and vintage snare hits. Each sample is labeled with its source hardware — useful for matching the right sample to your pattern.",
        source: "third-party",
      },
      {
        name: "MSXII Lo-Fi Melodics",
        maker: "MSXII Sound Design",
        free: false,
        url: "https://msxiisound.com",
        notes:
          "Paid pack from a respected lo-fi/boom bap sample house. The drum section includes heavily processed kicks that sit deep in the low end without muddying, and snares with natural room tone. MSXII's samples are recorded through vintage gear, which is audible.",
        source: "third-party",
      },
    ],
    plugins: [
      {
        name: "Battery 4",
        platform: "komplete",
        use: "Main drum sampler",
        notes:
          "Battery 4 (included in Komplete 14+) is the classic way to build boom bap kits — drag samples into cells, assign velocities, add individual channel processing. Use it inside Maschine as a plugin instrument on a pad. Much more flexible than loading raw samples when you're layering multiple kicks or building a ghost snare chain.",
      },
      {
        name: "Vinyl Distortion (Maschine FX)",
        platform: "maschine",
        use: "Lo-fi grit on kick/snare bus",
        notes:
          "Built into every Maschine MK3. Add it to your drum bus group channel. Set the 'Warp' knob to 30–40% and 'Scratch' to 0 — this adds the harmonic distortion of a stylus on vinyl without the noise. Stack it after the Saturator for maximum SP-1200 character.",
      },
      {
        name: "Supercharger GT",
        platform: "komplete",
        use: "Bus compression with character",
        notes:
          "Supercharger GT (Komplete) is a colored compressor — pressing harder adds harmonic saturation alongside compression. For boom bap, set it on the drum bus at 2:1 ratio, medium attack (25ms), and turn the 'Character' knob up slightly. It does what a hardware VCA compressor does to an MPC.",
      },
      {
        name: "Abbey Road 60s Drummer",
        platform: "kontakt",
        use: "Acoustic kit layer for realism",
        notes:
          "A Kontakt instrument sampled at Abbey Road Studios. Use its snare or room mics blended behind your main boom bap snare for instant room ambience without a reverb plugin. Set the room mic fader to 25–35% — you want texture, not a live kit sound.",
      },
      {
        name: "Replika XT",
        platform: "komplete",
        use: "Delay on hi-hats and snare",
        notes:
          "Replika XT adds tape delay character to individual drum elements. On hi-hats: add a very short, subtle 1/16 delay at 15% feedback and 20% mix — creates a slight smear that glues quantized hats to a swung pattern. On snares: try the 'Modern' tape mode for a ghost tail that doesn't interfere with the next hit.",
      },
    ],
  },

  "hip-hop": {
    packs: [
      {
        name: "Renegade",
        maker: "Native Instruments",
        free: false,
        url: "https://www.native-instruments.com/en/products/maschine/expansions/renegade/",
        notes:
          "Dark and aggressive. Built for hard-hitting modern hip hop — 808 bass presets, hard snares, and trap-influenced hi-hat kits that also work in straight hip hop. Includes a full set of Maschine instruments so you're not just getting samples. Best for: cinematic hip hop, dark trap-influenced beats.",
        source: "ni-expansion",
      },
      {
        name: "Harlem Renaissance",
        maker: "Native Instruments",
        free: false,
        url: "https://www.native-instruments.com/en/products/maschine/expansions/harlem-renaissance/",
        notes:
          "NY hip hop focused with gospel and soul influences. The drum kits include dry, punchy snares and kicks that cut through dense sample-based production. Also includes melodic instruments (piano, organ, synth) that fit the sample-flip workflow. Strong for 90–100 BPM traditional hip hop.",
        source: "ni-expansion",
      },
      {
        name: "Origin 2 — Free Hip Hop Pack",
        maker: "Cymatics",
        free: true,
        url: "https://cymatics.fm/products/origin-2-sample-pack",
        notes:
          "Free download. Focused on contemporary hip hop production — 808 hits, trap-influenced hi-hats that work at slower BPMs, snares with crack and room. Includes MIDI and loops alongside the drum samples. Import the drum samples folder directly into Maschine via drag and drop.",
        source: "cymatics",
      },
      {
        name: "Vice",
        maker: "Native Instruments",
        free: false,
        url: "https://www.native-instruments.com/en/products/maschine/expansions/vice/",
        notes:
          "Night-time, metropolitan hip hop aesthetic. Punchy kicks with sub presence, snares that cut, and melodic synth content. The drum kits in Vice lean modern — closer to 2015–2020 hip hop than classic era. Use when your pattern has a lot of kick variation and you want sounds that stay clear in a full mix.",
        source: "ni-expansion",
      },
      {
        name: "Hip Hop Drum Essentials (Preinstalled)",
        maker: "Native Instruments",
        free: true,
        notes:
          "Comes with Maschine MK3 under 'Factory Library > Drums > Hip Hop'. Contains 808-style kicks, crisp snares, and processed hi-hat kits. The '808 Classic' kit in particular is well-tuned and production-ready. Load as an instrument or pull individual samples.",
        source: "ni-preinstalled",
      },
      {
        name: "Splice — Hip Hop Collection",
        maker: "Splice",
        free: false,
        url: "https://splice.com/sounds/genres/hip-hop",
        notes:
          "Splice's subscription (~$8–10/month) gives access to thousands of tagged hip hop samples. Filter by 'Drum One-Shots > Kick' + 'Hip Hop' tag. You can download individual samples — no need to buy full packs. Maschine can import .wav files directly. Use Splice for finding specific tones when pack kits don't fit.",
        source: "splice",
      },
    ],
    plugins: [
      {
        name: "Massive X",
        platform: "komplete",
        use: "808 bass and sub",
        notes:
          "Massive X (Komplete 13+) is the go-to for 808-style bass inside Maschine. Load it on a pad, choose the 'Sub Bass' category, then pitch the note to your key. Set portamento (glide) to 80–120ms for the slide between notes. Route through a separate Maschine channel so you can sidechain it from the kick.",
      },
      {
        name: "Guitar Rig 7",
        platform: "komplete",
        use: "Lo-fi and tape simulation on the drum bus",
        notes:
          "Guitar Rig's 'Tape Delay' and 'Tube Compressor' components work as creative drum bus processing. Run the drum bus through a Tape Echo at very short delay times (under 20ms) for width, or through the tube preamp for harmonic saturation. Use sparingly — easy to overdo.",
      },
      {
        name: "Transient Master",
        platform: "komplete",
        use: "Kick and snare punch control",
        notes:
          "Transient Master (free with Komplete Elements — bundled with MK3) lets you add or subtract the attack transient of a drum hit. On kicks: Attack +15 for more punch. On snares: Sustain -20 to shorten the ring. Much faster than using a compressor to shape transients. Add it on individual drum channels, not the bus.",
      },
      {
        name: "Drumsynth (Maschine built-in)",
        platform: "maschine",
        use: "Synthesized kicks and snares",
        notes:
          "Every Maschine pad can load the built-in Drumsynth instead of a sample — right-click a pad and choose 'Add Plugin > Instrument > Drumsynth'. The 'Kick Classic' and 'Kick Sub' presets generate synthesized 808-style kicks. Great for tunable sub kicks when you can't find a sample that sits in key.",
      },
      {
        name: "Analog Dreams",
        platform: "kontakt",
        use: "Vintage synth melodic layers",
        notes:
          "Analog Dreams (Kontakt, Komplete 13+) is a collection of vintage synthesizer patches. Use it for the melodic elements behind your hip hop patterns — specifically the 'Pad' and 'Lead' categories for chords over your beat. Pairs well with the Vice expansion's drums.",
      },
    ],
  },

  "rnb": {
    packs: [
      {
        name: "Velvet Lounge",
        maker: "Native Instruments",
        free: false,
        url: "https://www.native-instruments.com/en/products/maschine/expansions/velvet-lounge/",
        notes:
          "The best R&B expansion in the NI catalog. Warm kick drums with natural sub, rimshots that sit perfectly in the mids, shaker loops, and tambourines. Also includes keyboard, Rhodes, and bass patches — so you can build the entire track from one expansion. Built specifically for smooth R&B and neo soul production.",
        source: "ni-expansion",
      },
      {
        name: "Soul Sessions",
        maker: "Native Instruments",
        free: false,
        url: "https://www.native-instruments.com/en/products/maschine/expansions/soul-sessions/",
        notes:
          "Classic soul-influenced R&B. Drum kits sampled from real acoustic kits — live drummer feel. Particularly strong for patterns with rimshots (instead of snares) and open hi-hats. The 'Soul Kit 2' preset is widely used for neo-soul production. Works at 70–95 BPM.",
        source: "ni-expansion",
      },
      {
        name: "Venus — Free R&B Kit",
        maker: "Cymatics",
        free: true,
        url: "https://cymatics.fm/products/venus-free-sample-pack",
        notes:
          "Free download, no email required. Contains R&B/trap-soul drum one-shots: soft kicks, claps with reverb baked in, shakers, and a set of soft hi-hats. Good for contemporary R&B patterns (2018–present) with that floating, airy feel.",
        source: "cymatics",
      },
      {
        name: "Kinetic Treats (Preinstalled)",
        maker: "Native Instruments",
        free: true,
        notes:
          "Comes with Maschine MK3 — find it under 'Factory Library > Expansions > Kinetic Treats'. While primarily electronic/dance, its organic percussion samples (shakers, tambourines, congas, bells) are extremely useful for R&B layering. Add these organic perc elements on top of your main drum kit for depth.",
        source: "ni-preinstalled",
      },
      {
        name: "Midnight Vibes",
        maker: "Cymatics",
        free: false,
        url: "https://cymatics.fm/products/midnight-vibes",
        notes:
          "Paid pack focused on contemporary R&B, trap-soul, and smooth hip hop. Strong selection of 808s tuned for R&B keys (not just trap keys), plus layered clap hits and hat kits with built-in reverb. Price is reasonable (~$20) for the range of sounds.",
        source: "cymatics",
      },
      {
        name: "Looperman — R&B Drum Kits (Free)",
        maker: "Community",
        free: true,
        url: "https://www.looperman.com/loops/tags/rnb",
        notes:
          "Looperman has hundreds of free community-uploaded R&B drum samples and loops. Filter by 'Drum Loops > R&B'. Download individual one-shots or full loops, drag into Maschine. Quality varies — sort by rating and stick to 4-star+ uploads.",
        source: "third-party",
      },
    ],
    plugins: [
      {
        name: "Session Horns Pro",
        platform: "kontakt",
        use: "Horn section stabs over R&B patterns",
        notes:
          "Session Horns Pro (Kontakt, Komplete 11+) provides recorded horn section patches. For R&B, use 'Sax Section' or 'Brass Hit' patches as stab accents — short chords on steps 2 or 6 add classic soul character. Run through light reverb and pull back the velocity to 60–70% for background-level stabs.",
      },
      {
        name: "Scarbee Clavinet",
        platform: "kontakt",
        use: "Funky keyboard texture",
        notes:
          "Scarbee Clavinet (Kontakt, Komplete 9+) recreates the Hohner Clavinet — the keyboard in nearly every classic soul and R&B record. Load on a pad group, run through Guitar Rig's Wah preset. Even simple two-note patterns add an enormous amount of groove and genre authenticity.",
      },
      {
        name: "Raum",
        platform: "komplete",
        use: "Snare and clap reverb",
        notes:
          "Raum (free with Native Instruments' native tools, also in Komplete) is NI's best reverb for R&B. Use the 'Bloom' mode for snares — it has a soft onset that doesn't clash with the dry hit. Set Size to 0.6, Decay to 1.2s, High Cut to 6kHz. Much smoother than the built-in Maschine reverb for R&B applications.",
      },
      {
        name: "Kontakt — Session Drummer 3",
        platform: "kontakt",
        use: "Acoustic kit layers",
        notes:
          "Session Drummer 3 (Kontakt, Komplete 11+) has real acoustic kits with individual mic positions. Use it to add a room mic signal blended underneath your main programmed snare at 15–20% volume. This adds acoustic space without making it sound like a live recording — it's the trick behind a lot of R&B productions.",
      },
      {
        name: "Form",
        platform: "komplete",
        use: "Atmospheric pads and texture",
        notes:
          "Form (Komplete 11+) is a sample-based synth that creates evolving ambient textures. Load a vocal sample or piano note into it and let it generate a slowly shifting pad. Use this as a background atmospheric layer behind your R&B pattern — gives tracks that 'late night' depth without any harmonic clashes.",
      },
    ],
  },
};
