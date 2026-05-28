import type { Genre } from "./patterns";

export type Alternative = {
  name: string;
  source: string;
  free: boolean;
  url?: string;
};

export type PackRec = {
  name: string;
  maker: string;
  free: boolean;
  url?: string;
  notes: string;
  source: "ni-expansion" | "ni-preinstalled" | "cymatics" | "kontakt" | "komplete" | "third-party" | "splice";
  alternatives?: Alternative[];
};

export type PluginRec = {
  name: string;
  platform: "maschine" | "komplete" | "kontakt" | "free";
  use: string;
  notes: string;
  alternatives?: Alternative[];
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
          "Comes as a voucher with select Maschine MK3 bundles — check your NI account for a pending activation code. If included, activate it free. Otherwise it's the single paid recommendation here. Sampled drums built specifically for MPC-style boom bap: SP-1200 kicks, snares with natural room tone, and pre-built groove templates at 54% swing. Worth the cost if you make boom bap regularly.",
        source: "ni-expansion",
        alternatives: [
          { name: "Factory Library: Hip Hop Kits", source: "Preinstalled with MK3 — Library > Drums > Hip Hop", free: true },
          { name: "Draco Kit — Cymatics", source: "Free download, no signup", free: true, url: "https://cymatics.fm/products/draco-free-kit" },
        ],
      },
      {
        name: "Factory Library — Boom Bap Kits",
        maker: "Native Instruments",
        free: true,
        notes:
          "Preinstalled with every Maschine MK3 — no download needed. In Maschine: click the browser icon → Tags → search 'boom bap' or navigate to Library > Drums > Hip Hop. The 'MPC Kit' and 'Drum Machine Kit' presets are directly usable. These are the sounds to start with before buying anything.",
        source: "ni-preinstalled",
        alternatives: [
          { name: "Komplete Start (Free)", source: "Download free from Native Instruments — includes Kontakt sampler + basic kits", free: true, url: "https://www.native-instruments.com/en/products/komplete/bundles/komplete-start/" },
          { name: "PastProducers Golden Age Kit", source: "Free download", free: true, url: "https://www.pastproducers.com" },
        ],
      },
      {
        name: "Draco — Free Boom Bap Kit",
        maker: "Cymatics",
        free: true,
        url: "https://cymatics.fm/products/draco-free-kit",
        notes:
          "Free, no registration required. 40+ one-shot samples: SP-1200-processed kicks, snares with room tone already baked in, and a set of lo-fi hi-hats. Drag the folder directly into Maschine's sample browser. Well-organized and labeled by instrument type. Best free alternative to Queensbridge Stories for raw boom bap drums.",
        source: "cymatics",
        alternatives: [
          { name: "Looperman — Free Boom Bap One-Shots", source: "Community samples, free", free: true, url: "https://www.looperman.com" },
          { name: "MSXII Free Samples (email signup)", source: "Free tier at msxiisound.com", free: true, url: "https://msxiisound.com" },
        ],
      },
      {
        name: "Battery 4 Factory Library",
        maker: "Native Instruments",
        free: true,
        notes:
          "Battery 4 (included with Komplete 15 and as a voucher with MK3) ships with an extensive factory library including acoustic kits, drum machine hits (808, 909, MPC3000-style samples), and vintage electronic percussion. Load it as a plugin in Maschine on a pad, then browse the 'Vintage' and 'Hip Hop' kit categories. Every sample can be processed individually through Battery's internal FX chain.",
        source: "komplete",
        alternatives: [
          { name: "Maschine Drumsynth (built-in)", source: "Right-click any pad → Add Plugin → Drumsynth — generates kicks/snares without samples", free: true },
          { name: "Abbey Road 60s Drummer (Kontakt)", source: "Included in Komplete 15 — recorded at Abbey Road Studios", free: true },
        ],
      },
    ],
    plugins: [
      {
        name: "Vinyl Distortion + Lo-Fi (Maschine FX)",
        platform: "maschine",
        use: "SP-1200 lo-fi character on the drum bus",
        notes:
          "Both are built into every Maschine MK3 at zero cost. On your drum bus Group channel: add Saturator first (Tape mode, Drive 30%), then Lo-Fi (12-bit, Rate 0.70). This replicates the bitcrushing that happened when samples were recorded into the SP-1200's 12-bit memory. The 12-bit setting is critical — lower sounds degraded, higher loses the character.",
        alternatives: [
          { name: "Guitar Rig 7 — Tape Recorder module (Komplete 15)", source: "Komplete 15 or Select", free: false },
          { name: "Maschine Saturator (built-in, free)", source: "Tape mode alone gets you most of the way there without the Lo-Fi plugin", free: true },
        ],
      },
      {
        name: "Raum",
        platform: "komplete",
        use: "Snare and room ambience reverb",
        notes:
          "Raum is included with Komplete 15 and Komplete Select. For boom bap snares: use Bloom mode, Size 0.4, Decay 0.5s, High Cut 6kHz, Wet 25%. This gives the snare a tight room sound without washing it out. Much more musical than the built-in Maschine reverb for boom bap — the Bloom algorithm has a natural onset that doesn't smear the snare attack.",
        alternatives: [
          { name: "Maschine built-in Reverb (free)", source: "Every MK3 — go to FX > Reverb > Room mode, Decay 0.4s, 20% wet", free: true },
          { name: "Replika XT (Komplete 15) — tape echo mode creates ambience at very short times", source: "Komplete 15", free: false },
        ],
      },
      {
        name: "Transient Master",
        platform: "komplete",
        use: "Kick punch and snare snap control",
        notes:
          "Included in Komplete and also bundled as a standalone with some MK3 purchases. On kicks: Attack +15 for more punch, Sustain -10 to tighten the tail. On snares: Attack +10 for crack, Sustain -20 to shorten the ring. Much faster than a compressor for shaping transients. Put it on individual drum channels — not the bus — so each element is controlled separately.",
        alternatives: [
          { name: "Maschine Compressor (built-in, free)", source: "Use fast attack (2ms) to control transients — less precise than Transient Master but built-in", free: true },
          { name: "Supercharger GT (Komplete 15)", source: "Adds colored compression with harmonic saturation — on kicks at 3:1 ratio", free: false },
        ],
      },
      {
        name: "Abbey Road 60s Drummer (Kontakt)",
        platform: "kontakt",
        use: "Room mic signal blended behind the main snare",
        notes:
          "Included in Komplete 15 Standard. Load it on a separate Maschine pad, mute all its individual mic channels except 'Room'. Set that room mic output to 15–20% volume. Trigger it alongside your main snare via Pad Link. This adds the acoustic space of a real room recording underneath your programmed snare — a pro trick that's much more realistic than any reverb plugin.",
        alternatives: [
          { name: "Session Drummer 3 (Kontakt, Komplete 15)", source: "Similar approach — use room mics from the acoustic kits", free: false },
          { name: "Drumlab (Kontakt, Komplete 15)", source: "Designed specifically for layering acoustic and electronic hits", free: false },
          { name: "Raum in Bloom mode (free alternative)", source: "Komplete 15 or Select — approximates room ambience with the Bloom algorithm", free: false },
        ],
      },
      {
        name: "Battery 4",
        platform: "komplete",
        use: "Multi-layer kit building with individual channel processing",
        notes:
          "Included with Komplete 15 and available as a standalone purchase. Load it as a plugin on a Maschine pad. Drag samples into Battery's cells, assign velocity layers (ghost notes: velocity 0–50, normal: 51–90, accents: 91–127). Each cell has its own EQ, Compressor, and FX chain. Essential when you're layering 2–3 kicks or building a ghost snare chain — more flexible than Maschine's native sample loading.",
        alternatives: [
          { name: "Maschine native sample loading (free)", source: "Built-in — you can stack samples using Pad Link. Less flexible but zero cost", free: true },
          { name: "Kontakt 7 sampler (Komplete 15)", source: "Build a custom multi-instrument script — more complex setup but maximum flexibility", free: false },
        ],
      },
    ],
  },

  "hip-hop": {
    packs: [
      {
        name: "Factory Library — Hip Hop & Drum Machine Kits",
        maker: "Native Instruments",
        free: true,
        notes:
          "Preinstalled with Maschine MK3. In the browser: Library > Drums > Hip Hop. Includes sampled drum machine hits (808-style kicks, TR-909 snares, hi-hat kits with built-in processing). Also check Library > Drums > Electronic for 808 sub kicks and percussion. These are production-ready samples — no processing needed before loading into a pattern.",
        source: "ni-preinstalled",
        alternatives: [
          { name: "Battery 4 Factory Library — Hip Hop kits", source: "Komplete 15 — browse 'Hip Hop' category inside Battery 4", free: true },
          { name: "Massive X presets — 808 bass patches", source: "Komplete 15 — filter by 'Bass > 808' in Massive X browser", free: true },
        ],
      },
      {
        name: "Origin 2 — Free Hip Hop Kit",
        maker: "Cymatics",
        free: true,
        url: "https://cymatics.fm/products/origin-2-sample-pack",
        notes:
          "Free, no signup. Contemporary hip hop drum one-shots: 808 kick hits (tuned in multiple keys), snares with crack, processed hi-hat kits. The 808 samples in Origin 2 are particularly well-tuned — they cover the chromatic scale so you can match any key. Drag into Maschine as samples and assign to pads with the Tune parameter for key-matching.",
        source: "cymatics",
        alternatives: [
          { name: "Cymatics Draco — free", source: "Free, also works for hip hop patterns", free: true, url: "https://cymatics.fm/products/draco-free-kit" },
          { name: "Factory Library 808 Kicks", source: "Preinstalled — Library > Drums > Electronic > 808", free: true },
        ],
      },
      {
        name: "Komplete Start — Free Tier",
        maker: "Native Instruments",
        free: true,
        url: "https://www.native-instruments.com/en/products/komplete/bundles/komplete-start/",
        notes:
          "Free download — no purchase required. Includes a selection of instruments usable inside Maschine via Komplete Kontrol or directly in Kontakt: Kontakt 7 Player (with free instrument library), Analog Dreams (vintage synths for pads and leads), and several drum kits. This is the recommended starting point if you don't yet have Komplete 15 — everything in it is free forever.",
        source: "ni-preinstalled",
        alternatives: [
          { name: "Looperman — hip hop one-shots (community, free)", source: "Free, filter by Hip Hop tag", free: true, url: "https://www.looperman.com" },
        ],
      },
      {
        name: "Drumlab (Kontakt — Komplete 15)",
        maker: "Native Instruments",
        free: true,
        notes:
          "Included with Komplete 15. Drumlab is a hybrid drum instrument: blend an acoustic drum hit with an electronic synthesized layer on the same pad. For hip hop kicks: load an acoustic kick in layer A, a 909-style synth kick in layer B, blend 70/30. Gives you the acoustic punch of a real kick with the sub body of a synthesized one. Excellent for building layered hip hop kit sounds without multiple Pad Links.",
        source: "kontakt",
        alternatives: [
          { name: "Maschine Drumsynth + sample layer via Pad Link (free)", source: "Built-in — no plugins needed", free: true },
          { name: "Battery 4 velocity layering (Komplete 15)", source: "More complex but more control per velocity zone", free: false },
        ],
      },
    ],
    plugins: [
      {
        name: "Massive X",
        platform: "komplete",
        use: "808 bass and tuned sub hits",
        notes:
          "Included with Komplete 15 and Komplete Select. Load as a plugin on a Maschine pad. In the browser, filter by 'Bass'. Choose a sub bass patch, then use the Tune parameter (+/- semitones) to match the key of your sample flip. Set Portamento (glide) to 80–120ms for the characteristic 808 slide between notes. Run the 808 channel through a separate bus so you can sidechain it from the kick.",
        alternatives: [
          { name: "Maschine Drumsynth — Kick Sub preset (free)", source: "Right-click pad → Add Plugin → Drumsynth → Kick Sub. Fully tunable synthesized sub, built-in", free: true },
          { name: "FM8 (Komplete 15) — sine wave sub bass patches", source: "Komplete 15 — not included in Select", free: false },
        ],
      },
      {
        name: "Guitar Rig 7",
        platform: "komplete",
        use: "Lo-fi tape and vinyl simulation on drum bus",
        notes:
          "Included with Komplete 15 and Select. Add to your drum bus Group channel. Load the 'Tape Machine' component — set Wow/Flutter to 0.3, Saturation to 40%. This adds subtle tape movement that makes quantized patterns feel less rigid. Also useful: the 'Tube Compressor' component for adding harmonic saturation to kicks before they hit the bus.",
        alternatives: [
          { name: "Maschine Saturator + Lo-Fi (both built-in, free)", source: "Saturator in Tape mode (30% Drive) + Lo-Fi (12-bit) — gets you 80% of the way", free: true },
          { name: "Maschine Vinyl Distortion (built-in, free)", source: "Warp knob 25–35% — adds analog grit without obvious distortion", free: true },
        ],
      },
      {
        name: "Replika XT",
        platform: "komplete",
        use: "Tape delay on hi-hats for groove smear",
        notes:
          "Included with Komplete 15. On your hi-hat channel: add Replika XT in 'Modern' or 'Analogue' tape mode. Set Delay Time to 1/32 note, Feedback to 10%, Mix to 15%. This creates a very subtle echo behind each hat that blurs the strict grid without changing the pattern — it's one of the techniques used to make quantized patterns feel like they swing more than they do.",
        alternatives: [
          { name: "Maschine built-in Delay (free)", source: "FX > Delay — set to 1/32 note, Feedback 8%, Dry/Wet 12%. Less character than Replika but built-in", free: true },
          { name: "Maschine Flanger at slow rate (built-in, free)", source: "Very slow Flanger rate can create subtle smear on hats", free: true },
        ],
      },
      {
        name: "Supercharger GT",
        platform: "komplete",
        use: "Colored bus compression with harmonic saturation",
        notes:
          "Included with Komplete 15. On the drum bus: Ratio 2.5:1, Attack 20ms, Release 100ms, Character knob at 30–40%. The Character knob is unique — it adds harmonics as you compress harder, so the drum bus gets fatter the more it's being pressed. For hip hop, this is more useful than a clean compressor because it adds presence alongside dynamics control.",
        alternatives: [
          { name: "Maschine built-in Compressor (free)", source: "Use on drum bus: ratio 2:1, attack 25ms, release 150ms — clean but no harmonic character", free: true },
          { name: "Transient Master on individual channels instead of bus (Komplete 15 or bundled)", source: "Sculpt transients individually — often more effective than bus compression", free: false },
        ],
      },
      {
        name: "Analog Dreams (Kontakt)",
        platform: "kontakt",
        use: "Vintage synth pads and melodic layers",
        notes:
          "Included in Komplete 15 and Komplete Start (free tier). Load in Kontakt on a Maschine instrument pad. The 'Pad' and 'Synth' categories have warm, vintage-textured patches ideal for looping chords behind a hip hop pattern. Pair with a light Raum reverb (Shimmer or Grounded mode) at 20% wet. Stays out of the drum frequencies — designed for mid/upper melodic content.",
        alternatives: [
          { name: "Massive X — Pad patches (Komplete 15)", source: "More modern/electronic character — search 'Pad' in Massive X browser", free: false },
          { name: "FM8 — Electric Piano patches (Komplete 15 Standard)", source: "More metallic character — search 'Keys' or 'Electric Piano'", free: false },
        ],
      },
    ],
  },

  "rnb": {
    packs: [
      {
        name: "Factory Library — Soul & R&B Kits",
        maker: "Native Instruments",
        free: true,
        notes:
          "Preinstalled with Maschine MK3. Navigate: Library > Drums > Soul or Library > Drums > RnB. Includes rimshots with natural wood tone, brush snares, warm kick drums, and shaker/tambourine one-shots. The rimshot and side-stick samples in the Soul kit folder are especially good — dry and transient-forward, exactly what R&B and Neo Soul patterns require.",
        source: "ni-preinstalled",
        alternatives: [
          { name: "Kinetic Treats (preinstalled, check NI account)", source: "Ships with some MK3 bundles — organic percussion: shakers, congas, bells", free: true },
          { name: "Venus Kit — Cymatics (free)", source: "Free download, no signup", free: true, url: "https://cymatics.fm/products/venus-free-sample-pack" },
        ],
      },
      {
        name: "Venus — Free R&B Kit",
        maker: "Cymatics",
        free: true,
        url: "https://cymatics.fm/products/venus-free-sample-pack",
        notes:
          "Free, no registration. Soft kicks with natural decay, layered clap hits with reverb pre-applied, shaker samples, and a set of hi-hats tuned for R&B tempos (70–95 BPM). The clap samples in Venus are particularly good for contemporary R&B — they already have a small room reverb baked in, which means you need less reverb processing in Maschine.",
        source: "cymatics",
        alternatives: [
          { name: "Factory Library: Soul Kits (preinstalled)", source: "Built-in — Library > Drums > Soul", free: true },
          { name: "Looperman — R&B drum one-shots (community, free)", source: "Filter by R&B tag, sort by rating — many usable free samples", free: true, url: "https://www.looperman.com/loops/tags/rnb" },
        ],
      },
      {
        name: "Session Drummer 3 (Kontakt — Komplete 15)",
        maker: "Native Instruments",
        free: true,
        notes:
          "Included with Komplete 15. Load in Kontakt on a Maschine instrument pad. Recorded acoustic drum kits with individual microphone positions (close, overhead, room). For R&B: mute all mics except Close and Room. Set Room fader to 20–25% — this adds real acoustic space behind your programmed pattern without sounding like a live recording. Pair with your main Factory Library samples for a hybrid acoustic/electronic kit.",
        source: "kontakt",
        alternatives: [
          { name: "Abbey Road 60s Drummer (Kontakt, Komplete 15)", source: "Same room-mic technique, different acoustic character — warmer, more vintage", free: false },
          { name: "Drumlab (Kontakt, Komplete 15)", source: "Layer acoustic hits with synthesized elements — more experimental", free: false },
        ],
      },
      {
        name: "Battery 4 — Acoustic & Electronic Kits",
        maker: "Native Instruments",
        free: true,
        notes:
          "Included with Komplete 15. In Battery 4: browse 'Acoustic' kits for rimshots and brush snares, and 'Electronic' for soft kicks and hi-hats. Battery 4's velocity layering is particularly useful for R&B — program your shaker at all 16 steps in Maschine, then set Battery 4 to use a softer shaker sample at low velocities and a brighter one at accented steps. Creates natural-sounding shaker dynamics automatically.",
        source: "komplete",
        alternatives: [
          { name: "Maschine sample loader with Pad Link (free)", source: "Stack two shaker samples (soft + bright) using Pad Link — manual velocity version", free: true },
          { name: "Kontakt 7 sampler (Komplete 15)", source: "Build velocity-mapped scripts for total control", free: false },
        ],
      },
    ],
    plugins: [
      {
        name: "Raum",
        platform: "komplete",
        use: "Snare, clap, and rimshot reverb",
        notes:
          "Included with Komplete 15 and Select. For R&B snares: Bloom mode, Size 0.55, Decay 1.2s, High Cut 5.5kHz, Pre-Delay 18ms, Wet 38%. The Pre-Delay separates the dry hit from the reverb wash — crucial for R&B, where the snare transient must cut through before the reverb opens up. For rimshots: reduce Decay to 0.6s and Wet to 25% — rimshots need less reverb than full snares.",
        alternatives: [
          { name: "Maschine built-in Reverb (free)", source: "Room mode, Decay 0.8s, 25% wet — less smooth than Raum but built-in", free: true },
          { name: "RC 48 (free standalone from NI)", source: "Free download from NI — more algorithmic character, good for large hall reverb on slow-jam snares", free: true, url: "https://www.native-instruments.com/en/products/komplete/effects/rc-48-rc-24/" },
        ],
      },
      {
        name: "The Gentleman (Kontakt)",
        platform: "kontakt",
        use: "Upright piano for chords and melodic layers",
        notes:
          "Included with Komplete 15 Standard. Load in Kontakt on a Maschine instrument group. The Gentleman is a sampled upright piano with a warm, slightly muted character — perfect for R&B chord stabs and sparse melodic lines. Use velocity 50–70 for background chords. Run through Raum in Grounded mode (0.8s, 20% wet) to place it in a room. Pairs immediately with any Soul kit.",
        alternatives: [
          { name: "Scarbee Mark I (Kontakt, Komplete 15)", source: "Rhodes electric piano character — brighter and more cutting than The Gentleman", free: false },
          { name: "Noire (Kontakt, Komplete 15 Ultimate)", source: "Grand piano with felt muting — very intimate, R&B-appropriate", free: false },
          { name: "Maschine Chord mode with any pad (free)", source: "Hold SHIFT + pad → Chord mode — program chords without a piano instrument using any existing sound", free: true },
        ],
      },
      {
        name: "Scarbee Clavinet (Kontakt)",
        platform: "kontakt",
        use: "Funky keyboard texture and rhythmic groove hits",
        notes:
          "Included with Komplete 15. Load in Kontakt. The Scarbee Clavinet is the Hohner Clavinet — the instrument in Stevie Wonder's Superstition and most classic soul records. Program short, muted two-note stabs on steps 2 and 6 at velocity 65. Run through Guitar Rig 7's 'Auto Wah' component (Envelope Follower mode) for the classic wah-clavinet sound that defines R&B groove playing.",
        alternatives: [
          { name: "Scarbee Mark I (Kontakt, Komplete 15)", source: "Rhodes piano — less funky than Clavinet but warmer, more modern R&B appropriate", free: false },
          { name: "Maschine built-in Flanger + any pad sample (free)", source: "Flanger with fast rate on a short keyboard stab approximates some of the Clavinet attack character", free: true },
        ],
      },
      {
        name: "Session Horns (Kontakt)",
        platform: "kontakt",
        use: "Horn stabs and brass accents",
        notes:
          "Included with Komplete 15 (full Session Horns). Load in Kontakt. Use 'Brass Stab' or 'Sax Section Short' patches. Program one or two short chord hits on step 2 or step 10 at velocity 60 — horn stabs should be accent elements, not constant. Run through Raum (short plate, 0.4s, 15% wet) so they sit in the room. In Maschine, assign them to a separate Group for independent volume/FX control.",
        alternatives: [
          { name: "Action Strings (Kontakt, Komplete 15)", source: "String section hits for a different orchestral texture behind R&B patterns", free: false },
          { name: "Scarbee Rickenbacker Bass (Kontakt, Komplete 15)", source: "If adding a bass line — warm vintage bass tone that complements R&B patterns", free: false },
          { name: "Maschine built-in chord + any bright pad (free)", source: "Approximate a horn stab with a bright, short pad sample and a quick amplitude envelope", free: true },
        ],
      },
      {
        name: "Supercharger GT",
        platform: "komplete",
        use: "Gentle bus compression to glue the R&B kit",
        notes:
          "Included with Komplete 15. On the R&B drum bus: very gentle settings — Ratio 1.5:1, Attack 50ms (very slow — let the transients breathe), Release 300ms, Character knob at 20%. R&B drums should not pump or feel obviously compressed. This setting just slightly glues the kit together. Turn it off and on to hear the difference — if you can't hear it clearly, it's probably set correctly.",
        alternatives: [
          { name: "Maschine built-in Compressor on bus (free)", source: "Ratio 1.5:1, attack 50ms, release 300ms — same settings, less harmonic color", free: true },
          { name: "Transient Master per-channel instead of bus (Komplete 15 or bundled)", source: "Shape each element individually — more surgical than bus compression", free: false },
        ],
      },
    ],
  },
};
