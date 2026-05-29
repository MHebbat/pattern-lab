export type PatternLocale = {
  description: string;
  feel: string[];
  maschineNotes: string[];
};

export const patternsDe: Record<string, PatternLocale> = {
  "bb-1": {
    description: "Der quintessenzielle New Yorker Sound der 90er. Der Kick trifft hart auf die 1 und das 'und' der 3, die Snare verriegelt Zählzeit 2 und 4.",
    feel: ["druckvoll", "geswingt", "lo-fi"],
    maschineNotes: [
      "Group-Swing auf 54 % setzen — das MPC3000-Shuffle ist alles.",
      "Kick-Höhen mit einem Tiefpassfilter bei ca. 200 Hz abschneiden für diesen dumpfen Schlag.",
      "Fixed Velocity 100 auf den Kicks, Hats manuell Step für Step variieren.",
      "Sample oder 12-Bit-klingende Snare verwenden — Bitcrusher mit niedriger Bit-Tiefe hinzufügen.",
    ],
  },
  "bb-2": {
    description: "Charakteristischer Bounce mit versetzten Kicks und geghosteten Snare-Noten. Diese Art von Groove, bei dem Köpfe nicken, ohne darüber nachzudenken.",
    feel: ["schwingend", "seelenvoll"],
    maschineNotes: [
      "Eine Shaker-16tel-Spur bei Velocity 45 unter die Hats legen.",
      "Snare-Steps 12 und 14 um +4 Ticks nach hinten verschieben für den Swing-Drag.",
      "Kick rund lassen — kein Transient Shaper, atmen lassen.",
      "Swing auf 58 % erhöhen — dieses Pattern bricht unter 55 % zusammen.",
    ],
  },
  "bb-3": {
    description: "Zwei Kicks landen dicht zusammen kurz vor Zählzeit 3 — dieses Doppelpochen ist der gesamte Vibe. Ghost-Snares füllen die Lücken.",
    feel: ["dunkel", "rau"],
    maschineNotes: [
      "Bitcrusher auf die Kick-Gruppe anwenden: Bits auf 10, Rate auf 0,6.",
      "Ghost-Snare auf Step 7 ist entscheidend — nicht quantisieren, lieber nach hinten verschieben.",
      "Sparse Hats nur auf Downbeats — die Stille ist die Textur.",
      "Die ganze Gruppe hart komprimieren: schneller Attack 2ms, langsames Release 200ms.",
    ],
  },
  "bb-4": {
    description: "Sehr sparsame Kick-Platzierung — riesige Taschen für Basslines. Die offene Snare klingt über den gesamten Takt nach.",
    feel: ["weiträumig", "geschmeidig"],
    maschineNotes: [
      "Pad Link verwenden: einen subtilen Rauschtransient gemeinsam mit dem Kick auslösen.",
      "Snare mit langem, ungedatetem Ausklang — Reverb Pre-Delay auf 20ms.",
      "Hats nur auf den Achtelnoten-Upbeats, alle Velocities bei 60.",
      "Kein Swing. Dieser Groove lebt allein von der Sample-Platzierung.",
    ],
  },
  "bb-5": {
    description: "Synkopierte Kick-Schläge erzeugen ein abgehacktes, vorwärtstreibendes Gefühl. Die Snare ist trocken und druckvoll ohne Reverb.",
    feel: ["abgehackt", "roh", "technisch"],
    maschineNotes: [
      "Komplett trockene Snare verwenden — null Reverb, nur der Crack.",
      "Hats wechseln alle zwei Zählzeiten zwischen 8tel- und 16tel-Dichte.",
      "Kick-Steps 3 und 6 auf Ghost-Velocity (40) setzen für das synkopierte Gefühl.",
      "Einen subtilen Rim oder Woodblock auf das 'und' der 4 für extra Chop legen.",
    ],
  },
  "bb-6": {
    description: "Jazzgefärbter Groove mit einem versetzten Kick auf dem 'und' der 2. Das gesamte Pattern atmet und schwankt.",
    feel: ["tief", "jazzig", "geschmeidig"],
    maschineNotes: [
      "Kick 3–4 Halbtöne nach unten tunen — tief und substark.",
      "Ein Jazz-Ride-Becken oder offenen Hat auf Step 6 sehr leise hinzufügen.",
      "Ghost-Snare auf Step 2 ist der Schlüssel — sie lässt Takt 1 nach vorne lehnen.",
      "Mindestens 60 % Swing. Weniger und dieses Pattern verliert seine Seele.",
    ],
  },
  "bb-7": {
    description: "Kalt und minimal. Das Kick-Pattern ist fast Four-on-the-Floor, überspringt aber die 3 und erzeugt so eine drohende Schwerfälligkeit.",
    feel: ["dunkel", "bedrohlich", "minimal"],
    maschineNotes: [
      "Sehr wenig Swing — maximal 51 %. Das muss roboterhaft und kalt klingen.",
      "Einen tiefen Sub-Hit unter den Hauptkick legen.",
      "Hat-Pattern extrem sparse — nur auf 1, 3 und dem 'und' der 4.",
      "Snare sollte breit-stereophon mit kurzem Plate-Reverb (0,4 s Decay) sein.",
    ],
  },
  "bb-8": {
    description: "Doppelter Kick auf Zählzeit 3 verleiht diesem Pattern seinen Street-Bounce. Klassische Blockparty-Energie mit druckvollem Rimshot-Akzent.",
    feel: ["schwingend", "Street", "roh"],
    maschineNotes: [
      "Die zwei Kicks auf Steps 8 und 9 müssen sehr nah liegen — Step 9 nicht exakt quantisieren.",
      "Rimshot mit Snare auf Zählzeiten 2 und 4 für extra Crack schichten.",
      "Knusprigen, sample-basierten Hat mit Bitcrusher bei 12 Bit verwenden.",
      "Einen tiefen Perc-Hit (z. B. Conga) auf Step 11 bei Velocity 50 hinzufügen.",
    ],
  },
  "hh-1": {
    description: "Fast ein Four-on-the-Floor-Kick-Gefühl kombiniert mit schweren Claps und Shaker-16teln. Dieses sonnige Compton-Rollen.",
    feel: ["rollend", "warm"],
    maschineNotes: [
      "Clap und Snare auf Zählzeiten 2 und 4 schichten — leicht L/R pannen.",
      "Kick-Velocity komplett auf 127 fixieren.",
      "Shaker-16tel sollen atmen: Akzent auf 1/3, alle Off-Beats ghosten.",
      "Einen Synth-Stab-Akkord auf Steps 0 und 8 bei niedriger Velocity hinzufügen.",
    ],
  },
  "hh-2": {
    description: "Cross-Feel bei 65 BPM — Half-Time-Groove mit sparsamen 808s und knackigen modernen Claps.",
    feel: ["modern", "melodisch"],
    maschineNotes: [
      "808-Kick auf den Grundton des Chord-Samples stimmen.",
      "Note Repeat auf 1/16T für zufällige Hi-Hat-Triolen-Fills nutzen.",
      "Rimshot mit Hauptclap bei Velocity 60 für Textur schichten.",
      "Reverb auf dem Clap sehr kurz halten — das ist ein moderner, knackiger Sound.",
    ],
  },
  "hh-3": {
    description: "Abgehackt und aggressiv. Doppelkicks vor dem Downbeat, synkopierte Ghost-Snares drücken sich durch jede Lücke.",
    feel: ["technisch", "roh"],
    maschineNotes: [
      "Mute Groups: Kick in Gruppe A, Snare in Gruppe B — harter Choke dazwischen.",
      "Hi-Hats um -2 Halbtöne nach unten pitchen für den Old-School-gefilterten Hat-Sound.",
      "Kicks strikt quantisieren, Hats bei 62 % Swing laufen lassen.",
      "Scratch-Sample-Hit (Vokal-Chop) auf Step 15 bei Velocity 55.",
    ],
  },
  "hh-4": {
    description: "Hymnen-Energie. Dicke, geschichtete Snares, schwere treibende Kicks. Die Art Beat, die einen Raum zum Beben bringt.",
    feel: ["hart", "schwingend"],
    maschineNotes: [
      "3 verschiedene Snares stapeln — jede leicht unterschiedlich stimmen.",
      "Ultra-kurzes Kick-Decay: Attack 0ms, Decay 80ms. Hammerartiges Gefühl.",
      "16tel-Hats: jeder Downbeat auf 100, jeder Upbeat auf 30. Der Kontrast ist der Groove.",
      "Hats vom Kick aus sidechain-komprimieren für dieses pumpende Gefühl.",
    ],
  },
  "hh-5": {
    description: "Das 'betrunkene' Gefühl, das J Dilla perfektioniert hat. Kicks und Snares absichtlich vom Grid verschoben. Klingt unmöglich menschlich.",
    feel: ["schwankend", "seelenvoll", "menschlich"],
    maschineNotes: [
      "Nach dem Platzieren der Steps den Kick auf Step 5 um +6 Ticks nach hinten verschieben.",
      "Step-12-Snare um -3 Ticks nach vorne (früher) verschieben für die Vorwärtslehnung.",
      "Hats humanisieren: 15ms Timing, 20 Velocity-Bereich.",
      "Das Timing danach absichtlich NICHT korrigieren — die Unvollkommenheiten sind das Feeling.",
    ],
  },
  "hh-6": {
    description: "Groß und seelenvoll — sample-basierte Energie. Der Kick trifft wie ein Stampf, der Clap wie Applaus.",
    feel: ["triumphierend", "seelenvoll", "groß"],
    maschineNotes: [
      "Einen orchestralen Snare-Hit unter dem Haupt-Clap bei -12dB begraben.",
      "Kick auf den Grundton des Soul-Samples stimmen für harmonisches Gewicht.",
      "Tamburin-Pattern auf den 16teln bei Velocity 35 — kaum hörbar.",
      "Reverb auf dem Clap: großer Hall, 1,5 s Decay, 40 % Wet. Soll sich wie ein Stadion anfühlen.",
    ],
  },
  "hh-7": {
    description: "Percussion-first-Produktion — der Kick ist fast Nebensache. Clicks, Toms und Shaker treiben dieses Pattern unerbittlich voran.",
    feel: ["energetisch", "perkussiv", "scharf"],
    maschineNotes: [
      "Click oder Clave als Hauptakzent verwenden — keinen Hi-Hat.",
      "3 verschiedene Perkussions-Sounds in die Perc-Slots laden.",
      "Auf jeden Zählzeit 1 und 3 kommt ein scharfer, hochgestimmter Woodblock-Akzent.",
      "Kick extrem kurz und klickig halten — fast ohne Sub.",
    ],
  },
  "hh-8": {
    description: "Knackig und rollend. Der Snap ersetzt den Clap, und der Kick treibt hart. Gemacht für Bewegung.",
    feel: ["hyphy", "rollend", "energetisch"],
    maschineNotes: [
      "Finger-Snap-Sample statt Clap verwenden — eng und trocken.",
      "Kick-Steps 3 und 11 sind Ghost-Noten — sie treiben den Groove subtil voran.",
      "Hats sollen ohne Unterbrechung rollen — alle 16tel bei nahezu gleicher Velocity.",
      "Eine Sub-Bass-Note mit dem Kick auf gleicher Tonhöhe schichten.",
    ],
  },
  "rnb-1": {
    description: "Tiefer Pocket-Groove. Versetzte Kicks, die hinter dem Beat zurückzufallen scheinen, mit warmen Rimshots und flüsternden Shakern.",
    feel: ["groovy", "warm", "seelenvoll"],
    maschineNotes: [
      "Hi-Hats humanisieren: 12ms Timing-Variation, 25 Velocity-Bereich.",
      "Rimshot statt voller Snare — trocken, kein Reverb, nur der Klatscher.",
      "Swing mindestens 63 % — dieses Pattern stirbt ohne starken Swing.",
      "Shaker bei Velocity 40, leicht rechts pannen für Tiefe.",
    ],
  },
  "rnb-2": {
    description: "Sauber, knackig und treibend. Verbindet enge Hi-Hat-Rolls mit einem traditionellen R&B-Vokal-Gefühl.",
    feel: ["poliert", "modern"],
    maschineNotes: [
      "Synthetischen Kick mit akustischem Kick schichten — Synth um -3 Halbtöne stimmen.",
      "Claps mit dem Stereo Widener Plugin bei 60 % breit halten.",
      "Subtiles 1/32-Hi-Hat-Trill auf dem letzten Step vor dem Taktende.",
      "Offener Hat auf Steps 2 und 10 — ins nächste Ereignis ausklingen lassen.",
    ],
  },
  "rnb-3": {
    description: "Sehr langsames Half-Time-Gefühl. Riesige Reverbs auf der Snare und tiefe, substärke Kicks, die durch den Boden vibrieren.",
    feel: ["geschmeidig", "sinnlich"],
    maschineNotes: [
      "Snare-Reverb: großer Hall, 2,5 Sekunden Decay. Über den gesamten Beat ausklingen lassen.",
      "Hats aggressiv filtern — Tiefpass bei 6 kHz für gedämpfte Wärme.",
      "Kick-Velocity-Variation ist entscheidend: Downbeat bei 110, der Rest bei 70.",
      "Bass-Gitarren-Hit (Sample) als Lock mit dem Kick in Betracht ziehen.",
    ],
  },
  "rnb-4": {
    description: "Uptempo R&B-Feeling mit synkopierten Kicks, die sich perfekt um Vokalphrasen legen.",
    feel: ["dope", "geschmeidig"],
    maschineNotes: [
      "2 verschiedene Claps schichten, leicht L und R für Breite pannen.",
      "Der Ghost-Kick auf Step 3 soll kaum hörbar sein — Velocity 35.",
      "Hats wirken entspannt, weil sie 8tel sind, keine 16tel. Weniger ist hier mehr.",
      "Leichten Perc-Hit (Dreieck oder Woodblock) auf Steps 11 und 15 hinzufügen.",
    ],
  },
  "rnb-5": {
    description: "Extrem sparse — hauptsächlich Kick und ein Hauch Percussion. Jedes Element hat Raum zum Atmen und Schweben.",
    feel: ["luftig", "zart", "offen"],
    maschineNotes: [
      "Dieser Beat braucht Stille mehr als Klang — dem Drang widerstehen, mehr hinzuzufügen.",
      "Kick ist das Einzige im Tieffrequenzbereich. Absolut keine Bass-Drum-Schichtung.",
      "Dreieck-Hit auf Step 4 bei Velocity 50 — mittig gepannt, Reverb 60 % Wet.",
      "Sehr kurzes, helles Snare-Sample verwenden. Einschlag, kein Ausklang.",
    ],
  },
  "rnb-6": {
    description: "New-Jack-Energie der späten 80er/frühen 90er. Diese ikonische, knackige Snare und rollende Shuffle-Feeling, die eine Ära prägten.",
    feel: ["schwingend", "uptempo", "schnell"],
    maschineNotes: [
      "Swing auf 58 % — New Jack Swing ist durch sein Shuffle-Feeling definiert.",
      "Snare ist ultra-knackig — kurzes Decay, mittlerer Transient-Shaper-Boost.",
      "Synth-Stab-Hit auf Step 2 und 10 bei Velocity 55 — sehr 90er.",
      "Clap und Rimshot auf Zählzeiten 2 und 4 zusammen schichten.",
    ],
  },
  "rnb-7": {
    description: "Schwebendes Half-Time-Feeling. Shaker tragen den Rhythmus, während der Kick unerwartet ein- und austaucht.",
    feel: ["verträumt", "introspektiv", "weiträumig"],
    maschineNotes: [
      "Snare nur auf Step 8 (Half-Time) — mit Hall-Reverb 2 s+ ausklingen lassen.",
      "Zwei Shaker-Patterns stapeln: eines 8tel, eines 16tel bei -20 dB darunter.",
      "Kick-Timing absichtlich locker — Humanize bei 15ms auf Kicks anwenden.",
      "Gestimmten Percussion-Hit (Finger-Drum-Hit) auf Step 5 bei Velocity 45 hinzufügen.",
    ],
  },
  "rnb-8": {
    description: "Dancehall-beeinflusster R&B-Groove mit synkopierten Kick-Hits und einem leichten Bounce, der mühelos wirkt.",
    feel: ["melodisch", "leichtfüßig", "tanzbar"],
    maschineNotes: [
      "Kick auf Step 3 (das 'und' der 1) betonen — das ist der Pocket-Hit.",
      "Clap hat ein 15ms Pre-Delay vor dem Reverb — fügt Distanz und Schweben hinzu.",
      "Einen sehr sanften Tom-Roll unter dem Clap auf Zählzeiten 2 und 4 schichten.",
      "Perc auf Steps 7 und 15 ist eine Kuhglocke oder Ähnliches — auf die Tonart stimmen.",
    ],
  },
  "bb-9": {
    description: "Jedes Element verdient seinen Platz. Stille wird bewusst eingesetzt — Kick und Snare haben mehr Raum als Noten.",
    feel: ["sparse", "kalt", "zielgerichtet"],
    maschineNotes: [
      "Drei separate Gruppen einrichten: Kicks, Snare, Hats — jede mit eigenem Swing.",
      "Kick-Gruppe Swing: 52 %. Snare-Gruppe: 54 %. Hat-Gruppe: 57 %. Das Mismatch schafft Tiefe.",
      "Der Rimshot auf Step 14 bei Velocity 45 — kaum da, nur ein Flackern.",
      "Lo-Fi auf das gesamte Kit bei 12 Bit anwenden — nicht weniger. Unter 12 klingt es zu degradiert.",
      "Mindestens 4 aufeinanderfolgende Steps irgendwo im Pattern leer lassen.",
    ],
  },
  "bb-10": {
    description: "Synkopierte Kick-Kombos erzeugen einen unaufhörlichen Vorwärts-Bounce. Der Snare-Anker auf 2 und 4 hält ihn geerdet.",
    feel: ["schwingend", "seelenvoll", "treibend"],
    maschineNotes: [
      "Der Kick auf Step 6 ist die 'Bounce-Note' — er muss Ghost-Velocity (45) haben, sonst verliert das Pattern seinen Groove.",
      "Hat-Swing auf 60 % erhöhen, Kicks bei 54 % lassen für geschichtetes Feeling.",
      "Einen Conga-Hit auf Step 3 bei Velocity 55 für extra Latin-Soul-Flavor schichten.",
      "Offener Hat auf Step 9 ist entscheidend — in dieselbe Choke-Gruppe wie der geschlossene Hat.",
      "Kick auf den Grundton des Samples stimmen. Conga auf die Terz.",
    ],
  },
  "bb-11": {
    description: "Ein rollendes 16tel-Hat-Pattern mit einem geschwungenen Kick, der sich perfekt in die Snare-Tasche einrastet. Zum Loopen gemacht.",
    feel: ["rollend", "tief", "Groove"],
    maschineNotes: [
      "Die Hat-Dichte ist hoch, aber Velocities müssen variieren: ungerade Steps bei 50, gerade bei 75, Beat-Steps bei 95.",
      "In den Velocity-Modus (Encoder im Step-Seq drücken) wechseln und jeden Hat-Step einzeln formen.",
      "Kick-Step 5 ist der Synkopations-Kleber — ihn bei Velocity 40 ghosten.",
      "Humanize auf Hats anwenden: Timing 10ms, Velocity 20. Kicks niemals humanisieren.",
      "Das gesamte Loop soll klingen wie jemand, der nickt — keine tickende Maschine.",
    ],
  },
  "bb-12": {
    description: "Energie eines Keller-Recordings. Extrem sparse — der Negativraum zwischen den Hits ist genauso wichtig wie die Hits selbst.",
    feel: ["lo-fi", "staubig", "roh"],
    maschineNotes: [
      "Dem Kick Rauschen hinzufügen: Vinyl-Crackle-Sample bei Velocity 25 auf denselben Pad-Step laden.",
      "Tiefpassfilter über die gesamte Kit-Gruppe bei 8 kHz — nichts Helles soll durchkommen.",
      "Snare: Room-Reverb bei 0,4 s Decay — eng genug für Dichtheit, lang genug für Raumgefühl.",
      "Timing absichtlich NICHT korrigieren — kein Quantize nach Live-Aufnahmen.",
      "Bass-Note (Pad) in Betracht ziehen, die über Pad Link mit dem Kick ausgelöst wird, auf Grundton gestimmt.",
    ],
  },
  "hh-9": {
    description: "Minimal und bedrohlich. Der Kick trägt mehr rhythmisches Interesse als die Hats. Gemacht für dunkle Sample-Flips.",
    feel: ["dunkel", "filmisch", "schwer"],
    maschineNotes: [
      "Kick und Sub-Kick über separate Kanäle routen — individuell vor dem Bus komprimieren.",
      "Hi-Hats nur ein Viertelnotenmuster — 4 Hits pro Takt, nicht mehr. Die Stille erledigt die Arbeit.",
      "Tom-Hit auf Step 10 bei Velocity 60 — gibt dem Pattern einen tribalen Einmal-Akzent.",
      "Snare sehr breit machen: Stereo Widener bei 80 % auf dem Snare-Kanal.",
      "Reverb auf allem kurz halten — das ist ein trockener, enger, klaustrophobischer Sound.",
    ],
  },
  "hh-10": {
    description: "Warm und seelenvoll — gemacht zum Flipping alter Soul-Platten. Ghost-Snares erzeugen einen konstanten Unter-Flow aus Feeling.",
    feel: ["seelenvoll", "warm", "Goldene Ära"],
    maschineNotes: [
      "Dieses Pattern lebt oder stirbt mit der Ghost-Snare-Velocity — alle zwischen 35 und 50 halten.",
      "Das Tamburin auf allen 16teln muss bei -20 dB unter den Hats liegen — nur ein Schimmer.",
      "Kick auf den Sample-Grundton stimmen. Snare auf die Terz oder Quinte.",
      "Swing: 56 % ist der Sweet Spot. Unter 54 % verliert er Feeling. Über 58 % verliert er Drive.",
      "Humanize nur auf dem Tamburin: Timing 12ms, Velocity 25.",
    ],
  },
  "hh-11": {
    description: "Bei 140 BPM programmiert, aber bei 70 BPM gefühlt. Die Half-Time-Snare auf Zählzeit 3 lässt alles doppelt so langsam und schwer wirken.",
    feel: ["modern", "Half-Time", "hart"],
    maschineNotes: [
      "Bei 140 BPM in Maschine ist Step 8 = Zählzeit 3. Haupt-Snare NUR auf Step 8.",
      "Kick auf Steps 0, 3, 11 erzeugt die Half-Time-Illusion — asymmetrische Platzierung.",
      "Hi-Hats bei 140 BPM 16tel = sehr schnell — Velocity abwechselnd 90/40/90/40 für rollendes Gefühl.",
      "Note Repeat bei 1/32T für Triolen-Hat-Rolls auf den letzten 4 Steps.",
      "Clap auf Step 8 neben der Snare: mit breitem Reverb schichten (Hall, 0,8 s Decay).",
    ],
  },
  "hh-12": {
    description: "Studioperfektion im West-Coast-Stil. Jedes Element dient dem Mix. Nichts ist zufällig.",
    feel: ["präzise", "druckvoll", "professionell"],
    maschineNotes: [
      "Kicks und Snares auf absolut null Swing quantisieren. Dann Swing nur der Hat-Gruppe bei 51 % hinzufügen.",
      "Drei Kick-Layers: Hauptkick (Mitte-Punch), Sub-Kick (auf Grundton gestimmt), Click (kurzes Click-Sample bei -15dB).",
      "Alle drei Kicks mit Pad Link binden — sie feuern als eine Einheit, werden aber separat bearbeitet.",
      "Snare: Tiefpassfilter bei 12 kHz zum Abschneiden von Härte. EQ-Boost bei 200 Hz für Körper.",
      "Rimshot-Akzent auf Step 6 soll wie ein Peitschenknall klingen — hoher Transient, null Reverb.",
    ],
  },
  "rnb-9": {
    description: "Absichtlich unvollkommen. D'Angelos Drum-Programmierung klang wie ein Schlagzeuger, der stundenlang gespielt hatte — zutiefst menschlich und leicht angetrunken.",
    feel: ["locker", "menschlich", "seelenvoll"],
    maschineNotes: [
      "Nach der Programmierung im Event Editor (SHIFT + EVENTS) jeden Step manuell um verschiedene Beträge verschieben.",
      "Kick auf Step 0: +8 Ticks nach hinten verschieben. Kick auf Step 5: -4 Ticks nach vorne.",
      "Snare auf Step 4: +6 Ticks. Snare auf Step 12: -3 Ticks.",
      "Hats mit 18ms Timing humanisieren — das Maximum, das man je benutzen würde.",
      "Dieses Pattern soll beim ersten Hören leicht unbequem wirken, nach 4 Takten dann hypnotisch.",
    ],
  },
  "rnb-10": {
    description: "Live-Schlagzeuger-Energie auf Pads übertragen. Fühlt sich an wie eine echte Kit-Aufnahme — enger Rim, warmer Kick, atmende Hats.",
    feel: ["klassisch", "live", "seelenvoll"],
    maschineNotes: [
      "Der Rimshot auf Steps 4 und 12 soll wie brechendes Holz klingen — trocken, kein Reverb.",
      "Conga auf Step 7 und 15: auf die Quinte der Tonart stimmen. Velocity 65.",
      "Offener Hat auf Step 6: in dieselbe Choke-Gruppe wie der geschlossene Hat.",
      "Kick-Velocity: Step 0 bei 110, Step 3 bei 50, Step 8 bei 95, Step 11 bei 45.",
      "Swing 58 % — klassischer Soul-Swing, schwerer als Boom Bap, aber nicht so locker wie Neo Soul.",
    ],
  },
  "rnb-11": {
    description: "Modernes R&B mit einem Hauch Blues — geschichtete Percussion, emotionaler Snare-Reverb, Kicks, die seufzen statt schlagen.",
    feel: ["zeitgenössisch", "emotional", "vielschichtig"],
    maschineNotes: [
      "Kick 2 Halbtöne unter den Grundton stimmen — schwerer, dunkler, emotionaler.",
      "Snare-Reverb: Plate bei 1,2 s Decay mit HOHEM Pre-Delay von 25ms für Luft.",
      "Der Shaker auf allen 16 Steps ist das Groove-Skelett — Velocity 35 flat, keine Variation.",
      "Perc auf Steps 3, 7, 11, 15: Finger-Snap oder Side Stick für das 'Zwischen'-Gefühl.",
      "Gesamt-Kompression: sanfte Bus-Kompression 1,5:1 Ratio, langsamer Attack 50ms, nur zum Verkleben.",
    ],
  },
  "rnb-12": {
    description: "Alter Quiet-Storm-Sound. Der Kick flüstert kaum, der Clap schwebt auf einem Meer aus Reverb. Für langsamen, nächtlichen R&B.",
    feel: ["seidig", "minimal", "klassisch"],
    maschineNotes: [
      "Kick-Velocity: alle Steps bei 70 — niemals betonen. Leise, stetig, wie ein Herzschlag.",
      "Clap-Reverb: großer Hall bei 2,5 s Decay, 50 % Wet. Der Reverb ist größer als der trockene Sound.",
      "Hi-Hats nur auf Viertelnoten (Steps 0, 4, 8, 12) bei Velocity 55 — keine 8tel, keine 16tel.",
      "Einen String-Hit oder Pad-Note auf Step 0 über Pad Link gemeinsam mit dem Kick auslösen.",
      "Swing-Funktion verwenden, aber nur auf 53 % — kaum geswingt, gerade genug, um nicht roboterhaft zu wirken.",
    ],
  },
  "bb-13": {
    description: "Von Large Professors abgehackten Sample-Flips inspiriert. Kick springt unerwartet nahe Zählzeit 3, die Anticipation-Snare auf Step 15 setzt die Loop mit Spannung auf.",
    feel: ["abgehackt", "roh", "geswingt"],
    maschineNotes: [
      "Snare auf Step 15 (das 'und' der 4) — Velocity auf 55 senken, damit es wie ein Ghost-Antizipationsschlag klingt, kein voller Hit.",
      "Kick auf Step 6 (das 'und' der 2) — das ist die 'Large Professor-Versetzung'. Velocity bei 65, nicht betont.",
      "Offener Hat auf Step 11: in Choke-Gruppe 1 mit geschlossenem Hat, damit er natürlich abgeschnitten wird.",
      "Swing auf 56 % — nicht zu schwer, gerade genug MPC-Drag, damit es nicht quantisiert klingt.",
    ],
  },
  "bb-14": {
    description: "Von J Dillas langsamsten, weiträumigsten Grooves inspiriert. Nur Viertelnoten-Hats — maximaler Atemraum. Die Rimshots auf den 'und'-Zählzeiten sind der gesamte Groove.",
    feel: ["weiträumig", "tief", "langsam"],
    maschineNotes: [
      "Viertelnoten-Hats exakt bei Velocity 55 — flat, keine Variation. Der Groove lebt in den Rimshots, nicht den Hats.",
      "Rimshots auf Steps 2, 6, 10, 14 (jedes 'und'): Velocities zwischen 60 und 80 zufällig variieren. Hier kommt der Swing her.",
      "Langsames BPM bedeutet, das Sample muss nach unten gepitcht werden. Maschines Tune im Sample-Pad nutzen — -2 Halbtöne für tieferes Feeling.",
      "Transient Master auf den Kick: Attack 0, Sustain +3. Bei 84 BPM muss der Kick aufblühen, nicht knacken.",
    ],
  },
  "hh-13": {
    description: "Der Doppelschlag-Kick-Intro (Steps 0+1) ist eine moderne Hip-Hop-Signatur — die 808 scheint zu stottern und rastet dann in den Groove ein. Aggressiv, direkt, gemacht für harte Samples.",
    feel: ["modern", "hart", "rollend"],
    maschineNotes: [
      "Steps 0 und 1 Kick-Hits: Step 0 bei Velocity 115, Step 1 bei Velocity 70. Der lautere Hit verankert Zählzeit 1, der leisere ist das 'Stottern'.",
      "Perc auf Steps 3, 7, 11, 15 — hohe metallische Percussion oder Synth-Perc aus Chronicles verwenden. Velocity 50, keine Variation.",
      "Alle 8tel-Hats: Velocity abwechselnd 90 (Downbeats) und 60 (Upbeats). Kein Swing — bei 50 % maschinenstark lassen.",
      "Die gesamte Gruppe durch einen Bus-Kompressor laufen: 4:1 Ratio, 10ms Attack, 80ms Release, -4 dB Gainreduktion.",
    ],
  },
  "hh-14": {
    description: "Timbaland-beeinflusste Synkopation — der Kick landet an ungewöhnlichen Stellen (Steps 3, 5, 11), während der Clap die Snare für Power verdoppelt. Dicht und unvorhersehbar, aber groove-gesperrt.",
    feel: ["synkopiert", "East-Coast", "vielschichtig"],
    maschineNotes: [
      "Kick auf Step 3 (das 'und' der 1): das ist die Timbo-Versetzung. Bei Velocity 65 — soll wie ein Akzent, nicht wie ein primärer Hit wirken.",
      "Kick auf Step 5 (das 'und' der 2): Velocity 55, noch niedriger. Diese synkopierten Kicks lassen die Downbeats im Vergleich massiv wirken.",
      "Ghost-Snare auf Steps 2 und 14: Velocity 35. Diese müssen kaum hörbar sein — auf Kopfhörern gefühlt, aber nicht auf Laptop-Lautsprechern.",
      "Clap-Layer auf dem Snare-Pad: Pad Link nutzen, um Snare und Clap gemeinsam auf Steps 4 und 12 auszulösen.",
    ],
  },
  "rnb-13": {
    description: "Zeitgenössisches Neo-R&B mit einer versetzten Snare (Step 13 statt 12), die dem Groove ein 'spätes' Gefühl gibt — als würde der Track ausatmen. Gemacht für geschichtete Loops.",
    feel: ["luftig", "zeitgenössisch", "verträumt"],
    maschineNotes: [
      "Snare auf Step 13 statt 12: diese eine Step-späte Platzierung ist die emotionale Signatur dieses Patterns. Nicht auf 12 verschieben.",
      "Offene Hats auf Steps 3 und 11 — in Choke-Gruppe 1 mit geschlossenen Hats. Sie sollen schweben und den Hat darunter abschneiden.",
      "Shaker auf Steps 5, 9, 15: Velocity 30 flat. Nur auf Kopfhörern zu hören — als Kleber, nicht als Groove.",
      "Raum-Reverb auf dem Snare-Bus: Bloom-Modus, 1,4 s Decay, 35 % Wet. Die Snare soll in den nächsten Beat 'aufblühen'.",
    ],
  },
  "rnb-14": {
    description: "Anderson .Paak-inspirierter Live-Feeling-Groove. Dichte 16tel-Hats mit Conga-Akzent lassen dies wie einen spielenden Schlagzeuger wirken, keine Maschine.",
    feel: ["organisch", "live", "Pocket"],
    maschineNotes: [
      "Alle 16 Hi-Hat-Steps: Velocity für jeden Step manuell setzen — keine zwei aufeinanderfolgenden Steps gleich. Das ist das Live-Feeling.",
      "Conga auf Steps 5 und 11: echtklingenden Conga aus Revival oder Sticks Toolkit verwenden. Velocity 65 bzw. 55.",
      "Ghost-Snare auf Steps 2, 7, 14 — Velocity 30–40. Das ist das 'Atmen' der Snare.",
      "Sehr subtilen Kompressor auf die gesamte Gruppe: 2:1, 30ms Attack, 120ms Release. Sanfter Kleber — das Live-Feeling nicht wegkomprimieren.",
    ],
  },
  "mc-dre-1": {
    description: "Dres klassisches Kern-Pattern. Alle 16 Hi-Hat-Steps — maschinell, niemals roboterhaft. Kick auf 1 und das 'und' der 2 (Step 5) für diesen nach vorne lehnenden G-Funk-Push.",
    feel: ["klinisch", "West-Coast", "G-Funk"],
    maschineNotes: [
      "Alle 16 Hat-Steps auf Velocity 75 flat setzen. Steps 0, 4, 8, 12 auf Velocity 90 anheben. Kein Humanize.",
      "Snare: Reverb, Large Hall, 2,1 s Decay, 45 % Wet. Der Reverb ist genauso laut wie der trockene Hit.",
      "Kick auf das Tonzentrum des Tracks stimmen. 80 Hz boosten, 400 Hz schneiden.",
      "Drums mono, alles andere breit. Drum-Gruppen-Output-Breite auf 0 %.",
    ],
  },
  "mc-dre-2": {
    description: "Der härtere, schnellere Dre. Kick-Versetzung auf Step 6 und Step 11 erzeugt dringendes Vorwärtsmomentum. Clap verdoppelt die Snare für extra Masse.",
    feel: ["klinisch", "hart", "filmisch"],
    maschineNotes: [
      "Clap und Snare im Pad Link — gemeinsam auf Steps 4 und 12 auslösen.",
      "Clap um +2 Halbtöne gegenüber der Snare nach oben pitchen.",
      "Ghost-Kick auf Step 6: Velocity 65. Hauptkicks bei Velocity 110.",
      "Mono-Drums, breite Streicher. Drum-Gruppen-Output-Breite 0 %.",
    ],
  },
  "mc-havoc-1": {
    description: "Die Mobb-Deep-Signatur. Kick auf 1 und 3. Leise 8tel-Hats. Der Raum zwischen Kick und Snare ist absichtlich. Ghost-Snare auf Step 14.",
    feel: ["dunkel", "minimal", "bedrohlich"],
    maschineNotes: [
      "Hi-Hats bei Velocity 40 flat — kaum hörbar. Kick und Snare beide bei 95.",
      "Ghost-Snare auf Step 14 bei Velocity 30 nur.",
      "Swing 56–58 %. Dem Drang widerstehen, mehr hinzuzufügen.",
      "Vinyl-Crackle-Loop darunter bei Velocity 20.",
    ],
  },
  "mc-havoc-2": {
    description: "Nur Viertelnoten-Hats — maximaler Atemraum. Kick auf Step 10 statt 8 ist Havocs Versetzungs-Signatur. Das Sample trägt alles.",
    feel: ["dunkel", "weiträumig", "kalt"],
    maschineNotes: [
      "Viertelnoten-Hats bei Velocity 55. Kick auf Step 10 (NICHT 8) — Velocity 85.",
      "Das Sample soll jederzeit laufen. Dieses Pattern ist nur ein Rahmen.",
      "Kick-Versetzung auf Step 10 ist die Havoc-Signatur — niemals auf Step 8 verschieben.",
      "Dunkles Vinyl-Sample: Tiefpass bei 8 kHz, Stereobreite 20 %.",
    ],
  },
  "mc-premier-1": {
    description: "Klassischer Premier-Groove. Kick nur auf 1 und 3, Standard-2+4-Snare, aber der Akzentschlag auf Step 11 (dem 'und' der 3) ist Premiers charakteristischer Stab.",
    feel: ["roh", "geswingt", "Boom Bap"],
    maschineNotes: [
      "Akzent-Snare auf Step 11 ist ein SEPARATES Pad — gleicher Sound, Velocity 85.",
      "Haupt-Snares bei Velocity 100. Swing: 60 % — heilig.",
      "8tel-Hats mit Downbeats bei 90, Upbeats bei 50.",
      "Sample-Loop bei 30–50 % Stereobreite.",
    ],
  },
  "mc-premier-2": {
    description: "Schwererer Premier mit Kick-Versetzung auf Step 6 und Ghost-Snare-Roll in die Loop. Ghost-Noten auf Steps 14–15 bauen Schwung in Zählzeit 1 auf.",
    feel: ["roh", "geswingt", "hart"],
    maschineNotes: [
      "Ghost-Snares 14 und 15 bei Velocity 30 und 40 — in Zählzeit 1 hineinbauend.",
      "Kick auf Step 6 bei Velocity 80 (der Premier-Ghost-Kick).",
      "Swing 62 % — erzeugt die fast-Triolen-Tasche.",
      "Der Loop ist 70 % dieses Beats. Drums rahmen ihn nur ein.",
    ],
  },
  "mc-dilla-1": {
    description: "Signature-Dilla-Feeling. Kick auf Step 7 landet mitten in Zählzeit 2. Snare auf Step 13 ist spät nach Zählzeit 4. Ghost-Noten verwischen die Downbeats. 66 % Swing drängt Richtung Triolen.",
    feel: ["trunken", "off-grid", "seelenvoll"],
    maschineNotes: [
      "Swing 66 %. Dann im Piano Roll: Snare auf Step 13 extra +3 Ticks nach hinten verschieben.",
      "Ghost-Noten bei Velocity 25–35 mit Humanize ±15 % Velocity.",
      "Hi-Hats: Humanize ±15 % Timing auch. Sie sollen klingen wie ein Mensch, der eilt.",
      "Nicht quantisieren. Die 'falsche' Platzierung ist der Punkt.",
    ],
  },
  "mc-dilla-2": {
    description: "Engeres Dilla-Feeling. Kick auf Steps 2 und 11 — beide synkopiert. Snare auf Step 12 leicht früh erzeugt Push-Pull-Spannung mit dem späten Kick auf Step 11.",
    feel: ["trunken", "off-grid", "hart"],
    maschineNotes: [
      "Im Piano Roll: Kick auf Step 11 leicht VOR seine Grid-Position ziehen (-2 Ticks).",
      "Snare auf Step 12 leicht NACH (+3 Ticks). Push-Pull-Spannung.",
      "Ghost-Snares bei Velocity 28–38. Swing 64 %.",
      "Sample -2 Halbtöne absenken, Geschwindigkeit auf 98 % reduzieren.",
    ],
  },
  "mc-timbaland-1": {
    description: "Timbaland-Signatur — Kicks in 4 Positionen erzeugen ein Gespräch statt eines Grooves. Gestimmtes Perc auf den Off-Beats ist die Talking-Drum-Schicht.",
    feel: ["synkopiert", "elektronisch", "tribal"],
    maschineNotes: [
      "Perc auf 2, 6, 10, 14 auf die Track-Tonart STIMMEN — nicht nur Rhythmus.",
      "Velocity-Variation auf Perc: 80, 65, 80, 70 (Talking-Drum-Gefühl).",
      "Alle 16tel-Hats bei flat Velocity 70 — das Perc übernimmt die Dynamik.",
      "Clap (nicht Snare) bei Velocity 105 — vorne im Mix.",
    ],
  },
  "mc-timbaland-2": {
    description: "Doppelkick-Tumbling-Effekt. Steps 4+5 und 12+13 kaskadieren. Kombiniert mit einer Snare nur auf Zählzeit 3 entsteht Timbalands Half-Time/Full-Time-Hybrid.",
    feel: ["synkopiert", "holpernd", "elektronisch"],
    maschineNotes: [
      "Tumble-Kicks: Step 4 bei Velocity 90, Step 5 bei 70. Dasselbe für 12 (90) und 13 (70).",
      "Perc auf 3, 7, 11, 15 ist ein ANDERER Sound als das Haupt-Perc — Shaker oder metallisch.",
      "Die Snare ist ein CLAP — eng, kein Reverb. Velocity 95.",
      "Bass folgt dem Kick-Rhythmus — gleiche rhythmische Positionen, nicht nur Grundtöne.",
    ],
  },
  "mc-pete-rock-1": {
    description: "Pete Rocks legendärstes Pattern. Kick auf Step 5 (das 'und' der 2) ist der Bounce-Push. Ghost-Snares 14–15 bereiten den Loop-Neustart mit Eleganz vor.",
    feel: ["schwingend", "seelenvoll", "jazzig"],
    maschineNotes: [
      "Dieses Pattern braucht 62 % Swing. Kick Step 5 bei Velocity 75.",
      "Hauptkicks (0 und 8) bei Velocity 105. Ghost-Snares 14–15: Velocity 30 und 45.",
      "16tel-Hats mit starkem Swing fühlen sich bei 62 % wie Triolen an.",
      "Jazz-Sample liefert alles — die Drums halten nur die Zeit.",
    ],
  },
  "mc-pete-rock-2": {
    description: "Der härtere Pete Rock. Kick auf Step 7 (späte Zählzeit 2) erzeugt ein funkiges, leicht spätes Gefühl. Offener Hat auf Step 9 erscheint einmal pro 2 Takte als Interpunktion.",
    feel: ["schwingend", "funkig", "seelenvoll"],
    maschineNotes: [
      "Offener Hat Step 9: nur in TAKT 2 eines 2-Takt-Patterns verwenden.",
      "Das erzeugt Pete Rocks 'jeden zweiten Takt'-Interpunktion.",
      "Choke-Gruppe: offener Hat mit geschlossenem Hat.",
      "Ghost-Snares 14–15 bei Velocity 28 und 42.",
    ],
  },
  "mc-kanye-1": {
    description: "College-Dropout/Late-Registration-Ära. Beschäftigte 16tel-Hats, Kick auf dem 'und' der 1 (Step 3 — der Kanye-Frühkick) erzeugen Dringlichkeit.",
    feel: ["seelenvoll", "emotional", "melodisch"],
    maschineNotes: [
      "Kick Step 3 (der Kanye-Frühkick) bei Velocity 75.",
      "Downbeat-Kick bei Velocity 105. 16tel-Hats: 80 On-Beat, 55 Off-Beat.",
      "Soul-Sample um +4 Halbtöne nach oben gepitcht. Swing 56 %.",
      "Warmes, emotionales Gefühl — die Drums unterstützen das Sample, konkurrieren nicht damit.",
    ],
  },
  "mc-kanye-2": {
    description: "Größeres, stadionfüllendes Kanye. Kick auf Step 11 fügt synkopiertes Momentum hinzu. Clap verdoppelt Snare für Masse. Für Hook-Abschnitte.",
    feel: ["Stadion", "emotional", "hart"],
    maschineNotes: [
      "Clap-Pad mit Snare für Hook-Abschnitte verknüpft.",
      "Step-11-Kick bei Velocity 80 fügt Dringlichkeit Richtung Hook hinzu.",
      "Für Hooks verwenden; einfachere Version (ohne Step-11-Kick) für Verses.",
      "Breiter Stereo-Clap bei 100 % Breite — der Wall-of-Sound-Hook-Drop.",
    ],
  },
  "mc-alchemist-1": {
    description: "The Alchemist Baseline. Kick nur auf 1 und 3. Rimshot statt Snare — abstrakter. Viertelnoten-Hats kaum hörbar. Das Sample erledigt die gesamte emotionale Arbeit.",
    feel: ["dunkel", "filmisch", "minimal"],
    maschineNotes: [
      "Rimshot statt Snare — komplett trocken, null Reverb.",
      "Viertelnoten-Hats bei Velocity 45 flat — kaum vorhanden.",
      "Ghost-Hits auf 6 und 14 bei Velocity 30: die einzige Bewegung.",
      "Sample: Tiefpass 7 kHz, Hochpass 100 Hz, Stereobreite 20 %.",
    ],
  },
  "mc-alchemist-2": {
    description: "Havocs Einfluss filmischer gemacht. Kick-Versetzung auf Step 10. Rimshot-Akzent auf Step 9 fügt rhythmische Spannung hinzu, um die der Rapper navigieren muss.",
    feel: ["dunkel", "filmisch", "abstrakt"],
    maschineNotes: [
      "Rimshot Step 9 bei Velocity 65 — mittlerer Spannungsschlag.",
      "Kick auf Step 10 (die Havoc-Versetzung): Velocity 70 Ghost-Kick.",
      "3 Rimshots insgesamt (4, 9, 12) — ungewöhnliches Akzentmuster.",
      "Langer Kick-Reverb: 1,2 s Decay, 15 % Wet — füllt den Raum.",
    ],
  },
  "mc-metro-1": {
    description: "Klassisches Metro-Trap bei 140 BPM. Half-Time-Feeling: Snare auf Step 8 klingt wie Zählzeit 2 bei 70 BPM. Doppelkick-Rolls auf 4+5 und 12+13.",
    feel: ["Trap", "dunkel", "hart"],
    maschineNotes: [
      "Hauptkick (0, 8) bei Velocity 110. Roll-Kicks (4, 12) bei 85, (5, 13) bei 65.",
      "Kaskadierende Velocity erzeugt das Trap-Roll-Feeling.",
      "Offene Hats 12–13–14 am Taktende: Metro-Triolen-Ornament.",
      "Flat-16tel-Hats bei Velocity 65 — mechanisch, keine Variation.",
    ],
  },
  "mc-metro-2": {
    description: "Metros langsamerer Hip-Hop-Modus. 808-Basslinie trägt die Melodie. Hat-Rolls auf Steps 12–14 sind das charakteristische Phrasenend-Ornament.",
    feel: ["Trap", "dunkel", "modern"],
    maschineNotes: [
      "808-Melodie im Piano Roll programmieren — zwischen Noten gleiten.",
      "Kick Step 9 ist der Metro-Stutter-Kick: Velocity 75.",
      "Snare nur auf Step 8 — Half-Time. Keine Step-4-Snare.",
      "Dunkler atmosphärischer Loop: Tiefpass 12 kHz, Reverb 1,5 s.",
    ],
  },
  "mc-9th-wonder-1": {
    description: "Purer 9th Wonder. Kick nur auf 1 und 3. Standard-2+4-Snare. 8tel-Hats mit starkem Swing. So einfach wie möglich, aber bei 62 % Swing prallt es wie ein Strandball.",
    feel: ["seelenvoll", "warm", "lo-fi"],
    maschineNotes: [
      "Swing: 62 %. Das ist die EINZIGE Abweichung vom einfachsten möglichen Pattern.",
      "Kick bei Velocity 100. Snare bei Velocity 95. Hats: Downbeats bei 85, Upbeats bei 50.",
      "Sample: nur Hochpass bei 80 Hz. Keine Überbearbeitung.",
      "Wenn der Beat bei 62 % nicht groovt, Swing-Einstellung überprüfen.",
    ],
  },
  "mc-9th-wonder-2": {
    description: "Der etwas härtere 9th Wonder. Kick auf Step 5 fügt Pete-Rock-beeinflussten Push hinzu. Ghost-Snares 14–15 bereiten die Loop vor. Bei 60 % Swing tanzt dieses Pattern.",
    feel: ["schwingend", "seelenvoll", "warm"],
    maschineNotes: [
      "Ghost-Snares 14–15 bei Velocity 28 und 42.",
      "Kick Step 5 bei Velocity 70 — der Bounce-Kick.",
      "Swing 60 %. Soul-Sample ist alles — Drums sind nur Zeit.",
      "Kein Reverb auf Snare (oder minimal 0,3 s). Das Sample liefert Atmosphäre.",
    ],
  },
  "mc-pharrell-1": {
    description: "Der klassische sparsame Neptunes-Groove. Der 'Click'-Kick (Step 3) ist das Signature-Element — metallisch, synth-benachbart. Viertelnoten-Hats lassen maximalen Atemraum.",
    feel: ["melodisch", "minimal", "funkig"],
    maschineNotes: [
      "Click-Kick auf Step 3 soll ein ANDERER Kick sein — kürzer, höher, metallischer. Gleichen Kick +5 Halbtöne pitchen.",
      "Viertelnoten-Hats bei Velocity 60. Clap (nicht Snare) laut bei Velocity 105.",
      "3 Elemente insgesamt: Kick, Clap, Hat. Neptunes-Constraint.",
      "Kick auf den Grundton des Tracks stimmen — er IST eine musikalische Note.",
    ],
  },
  "mc-pharrell-2": {
    description: "Der sonnigere Pharrell. Kick auf Step 14 (das 'und' der 4) erzeugt den Bounce, der dieses Pattern körperlich unwiderstehlich macht.",
    feel: ["melodisch", "strahlend", "schwingend"],
    maschineNotes: [
      "Kick Step 14 bei Velocity 80 — bereitet Takt 2 mit massiver Antizipation vor.",
      "Offener Hat Step 10: Choke-Gruppe mit geschlossenem Hat.",
      "Clap vorne im Mix — lauter als alles andere.",
      "8tel-geschlossene Hats mit Velocity-Variation: 85 runter, 55 rauf.",
    ],
  },
  "mc-akhenaton-1": {
    description: "Das IAM-Kernpattern. Langsamer und bedächtigerer Boom Bap als in NYC — der Drag ist der Punkt. Der offene Hat auf Step 10 gibt dem Pattern einen mediterranen Schwung.",
    feel: ["dunkel", "mediterran", "bedächtig"],
    maschineNotes: [
      "Offener Hat Step 10: Choke-Gruppe mit geschlossenem Hat. Velocity 65.",
      "Kick 95, Snare 90. Hi-Hats bei 42 — tief im Mix, atmosphärisch.",
      "Swing 56 %. Der offene Hat ist kein Akzent — er ist eine Stimmung.",
      "Sample: Tiefpass 9 kHz, Stereobreite 25 %. Nordafrikanisches Vinyl-Feeling.",
    ],
  },
  "mc-akhenaton-2": {
    description: "Vom klassischen IAM-Album-Feeling inspiriert. Zusätzlicher Kick auf Step 11 verschiebt den Groove nach vorne. Ghost-Snare auf 14 erzeugt Vorschlagszeit-Spannung.",
    feel: ["dunkel", "französisch", "Boom Bap"],
    maschineNotes: [
      "Kick Step 11 bei Velocity 75 (weicher als Hauptkicks bei 95).",
      "Ghost-Snare Step 14 bei Velocity 28.",
      "Hi-Hats Velocity 40 mit Humanize ±3.",
      "Dunkles Sample unter 9 kHz gefiltert mit subtiler Reverb-Schleppe.",
    ],
  },
  "mc-mehdi-1": {
    description: "Quintessenzielle Mehdi-Groove. Kick-Versetzung auf Step 6 (Pete-Rock-Erbe). Akzent-Snare auf Step 11 — direkter Erbe von Premiers Signatur-Hit.",
    feel: ["seelenvoll", "jazzig", "warm"],
    maschineNotes: [
      "Swing 60 %. Kick Step 6 bei Velocity 80 (weicher als Hauptkicks bei 100).",
      "Hi-Hat-Velocity: Downbeats 75, Upbeats 38 — das 2:1-Verhältnis.",
      "Akzent-Snare Step 11 bei Velocity 78 — gleiche Snare-Sample.",
      "Vinyl-Crackle-Loop bei Velocity 18 unter allem.",
    ],
  },
  "mc-mehdi-2": {
    description: "Der langsamere, melancholischere Mehdi — für Oxmo Puccinos Storytelling. Ultra-geswingt. Das Pattern atmet mit offenen Räumen: Kick, Snare und geflüsterte 8tel-Hats.",
    feel: ["melancholisch", "jazzig", "weiträumig"],
    maschineNotes: [
      "Swing 62 % — auf diesem Level ziehen die Upbeat-Hats fast bis zum nächsten Downbeat. Absichtlich.",
      "Ghost-Snare Step 14 bei Velocity 22.",
      "Alle Hats bei Velocity 35 — fast subliminal.",
      "Jazz-Sample mit Akkordwechseln: 2-Takt-Loop, atmen lassen.",
    ],
  },
  "mc-myth-syzer-1": {
    description: "Der moderne französische Boom-Bap-Standard. 16tel-Hats mit starkem Velocity-Abfall — Downbeats laut, Upbeats bis auf Ghost-Niveau abtapernd — erzeugen einen schwebenden Groove.",
    feel: ["modern", "französisch", "schwebend"],
    maschineNotes: [
      "Hi-Hat-Velocity-Abfall: 0/4/8/12=90, 1/5/9/13=70, 2/6/10/14=50, 3/7/11/15=30.",
      "Snare bei Velocity 85 — nicht das lauteste Element. Kick bei 100.",
      "Sample sitzt auf gleichem Niveau oder lauter als die Snare.",
      "Moderne Pariser Wärme: Vinyl Crackle bei Velocity 22 unter allem.",
    ],
  },
  "mc-myth-syzer-2": {
    description: "Das lockerere Myth-Syzer-Feeling. Kick-Versetzung auf Step 10 gibt ein Hip-Hop-Wackeln. Ghost auf Step 13 fügt menschliches Micro-Timing hinzu.",
    feel: ["seelenvoll", "modern", "Groove"],
    maschineNotes: [
      "Kick Step 10 bei Velocity 70 — die Groove-Versetzung.",
      "Ghost-Snare Step 13 bei Velocity 25.",
      "Velocity-Abfall auf 16tel-Hats anwenden (siehe Nekfeu-Float-Technik).",
      "Swing 60 % nur auf Hats. 2-Takt-Loop mit Akkordwechseln.",
    ],
  },
  "mc-morlockko-1": {
    description: "Der geduldige Morlockko-Groove. Kick bewegt sich kaum — nur 1 und 3. Viertelnoten-Hats — maximaler Atemraum für das filmische Sample. Die Ghost-Snare auf Step 14 ist das einzige Zugeständnis an Komplexität.",
    feel: ["dunkel", "filmisch", "minimal"],
    maschineNotes: [
      "Viertelnoten-Hats bei Velocity 50. Kick bei 95, Snare bei 88.",
      "Ghost-Snare auf Step 14 bei Velocity 25.",
      "Snare-Reverb: Hall, 1,2 s, 30 % Wet — die Reverb-Schleppe IST der Charakter.",
      "Sample -10 Cents (Unbehagen), Tiefpass bei 7 kHz (Bibliotheks-Schallplatten-Feeling).",
    ],
  },
  "mc-morlockko-2": {
    description: "Etwas aggressiver — für Morlock-Dilemma-Rap-Auftritte. Kick auf Step 11 erzeugt ein vorwärts-stolperndes Momentum. 8tel-Hats aber sehr leise.",
    feel: ["dunkel", "Underground", "vorwärts"],
    maschineNotes: [
      "Kick Step 11 bei Velocity 80 — weicher als Hauptkicks bei 100.",
      "Hi-Hats bei Velocity 38 — kaum hörbare Textur. Swing 60 %.",
      "Loop finden, in dem auf Step 11 etwas passiert — das Stolpern passt dazu.",
      "Snare-Reverb-Schlepen sollen in den nächsten Takt hineinbluten.",
    ],
  },
  "mc-johnny-ill-1": {
    description: "Die Johnny-Illstrument-Signatur. Harter Kick auf Step 6 (Premier-Erbe), laute Snare, Akzent-Snare auf Step 11. Dieses Pattern rollt mit Autorität.",
    feel: ["hart", "roh", "East-Coast"],
    maschineNotes: [
      "Swing 60 % — nicht verhandelbar. Kick Step 6 bei Velocity 78.",
      "Akzent-Snare Step 11 bei Velocity 82 — separates Pad, gleicher Sound.",
      "Haupt-Snares bei Velocity 100. Berliner Snares treffen LAUT.",
      "8tel-Hats bei Velocity 55 mit Humanize ±5.",
    ],
  },
  "mc-johnny-ill-2": {
    description: "Der langsamere, nachdenkliche Berliner Sound für Storytelling-Tracks. Offener Hat auf Step 10 gibt dem ruhigeren Tempo Atemraum. Eine Verneigung vor spätnächtlichen Plattensuche-Sessions.",
    feel: ["nachdenklich", "spätnächtlich", "Berliner"],
    maschineNotes: [
      "Offener Hat Step 10: Choke-Gruppe mit geschlossenem Hat, Velocity 70.",
      "8tel-Hats bei Velocity 48. Snare bei Velocity 95.",
      "Swing 62 % — leicht verkatert, passt zu spätnächtlichem Rap.",
      "Deutsches Jazz-Funk-Sample bevorzugt. Drums auf den Groove des Samples einrasten.",
    ],
  },
  "mc-figub-1": {
    description: "Die Figub-Signatur — hoher Swing drückt Upbeats tief in die Tasche. Kick auf die Sample-Tonart gestimmt für harmonische Resonanz. Viertelnoten-Hats für maximalen Raum.",
    feel: ["filmisch", "jazzig", "geduldig"],
    maschineNotes: [
      "Swing 62 %. Kick auf den Grundton des Samples stimmen.",
      "Viertelnoten-Hats bei Velocity 52. Ghost-Snare Step 14 bei Velocity 20.",
      "Jazz-Brushed-Snare unter Haupt-Snare bei Velocity 35 schichten (Pad Link).",
      "Vinyl Crackle bei Velocity 18 — platziert das Sample in seinem Original-Medium.",
    ],
  },
  "mc-figub-2": {
    description: "Das filmischste, langsamste Figub-Pattern. Bei 84 BPM und 64 % Swing fühlen sich die Upbeats schwebend zurückgehalten an. Für Filmmusik-Samples, bei denen der emotionale Gehalt absolute Geduld erfordert.",
    feel: ["filmisch", "schwebend", "geduldig"],
    maschineNotes: [
      "64 % Swing — auf diesem Level sind Upbeats so verzögert, dass sie schweben.",
      "Kick Step 11 bei Velocity 72 — fügt einen Schub vor Zählzeit 3 hinzu.",
      "Viertelnoten-Hats bei Velocity 45. 4-Takt-Loop mit narrativer Bewegung.",
      "Hohe Swing-Toleranz: 3–5 Minuten einplanen, um sich anzupassen.",
    ],
  },
};
