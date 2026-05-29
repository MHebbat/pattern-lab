export type DeTechnique = {
  title: string;
  body: string;
  steps?: string[];
  tip?: string;
  code?: string;
};

export type DeChopTab = { techniques: DeTechnique[] };

export type DePackProfile = {
  type: string;
  primaryTechnique: string;
  bestChops: string;
  tips: string[];
};

export const CHOPLAB_TABS_DE: Record<string, DeChopTab> = {
  find: {
    techniques: [
      {
        title: "Die 'Goldene 8' — Was du suchst",
        body: "Die meisten chopbaren Momente in einem Soul-Record fallen in 8 Kategorien. Trainiere dein Gehör, um sie beim ersten Hören zu identifizieren — nicht einfach den offensichtlichen Chorus-Loop nehmen.",
        steps: [
          "Der Intro-Drum-Break — meist 2–4 Takte mit minimaler Melodie, perfekt als saubere Chop-Grundlage",
          "Der Turnaround — der 2-Beat-Fill vor einem neuen Abschnitt, gut für Übergangs-Stabs",
          "Der Akkord-Stab — einzelner Akkord-Hit (1–2 Beats) bei einem Abschnitt-Break, sehr choppable",
          "Der Vokal-Ad-lib — ein einzelner Satz oder Atemzug zwischen Zeilen, humanisiert einen Loop",
          "Die Bass-Drum-Pocket — Takte, in denen der Bass genau der Kick folgt, sehr lockable",
          "Der String-Swell — der Moment, in dem Streicher ihren Peak erreichen bevor sie abfallen, atmosphärisch",
          "Der Piano-Lauf — ein schnell auf- oder absteigendes Motiv, kann Note für Note gesliced werden",
          "Der Breakdown — minimales Arrangement (meist nur Drums + Bass), cleanste Sample-Fläche"
        ]
      },
      {
        title: "Deine Packs: Lange Soul-Loops (Revival, Soulful Dreams, Odyssey Soul)",
        body: "Lange Soul-Loops (8–32 Takte) wirken zunächst überwältigend. Der Trick ist nicht, alles zu choppen — finde das 2-Takt-Gold darin.",
        steps: [
          "Loop in Maschine importieren. Davor komplett durchhören — kein Pausieren, kein Stoppen. Notiere, welche Takte am stärksten wirken",
          "Beim zweiten Hören: Takte zählen. Soul-Loops folgen meist 4-Takt-Phrasen. Takt 1–4, 5–8 usw. identifizieren",
          "Die 'Pocket-Bar' finden — meist Takt 3 oder 7 — wo alles einrastet. Das ist deine primäre Chop-Quelle",
          "Nach Takten suchen, wo Drums aussetzen — das ist der melodisch 'nackte' Abschnitt. Isolieren für Chord- oder Piano-Chop",
          "Jeden 2-Beat-'Atempause' identifizieren — die Halbtakt-Pause vor einer neuen Phrase. Wird zu einem Stutter-Chop",
          "4 spezifische Momente anpeilen: (1) volle 2-Takt-Sektion, (2) 1-Beat-Stab, (3) 2-Beat-melodisches Fragment, (4) Nur-Drum-Sektion",
          "Den Rest ignorieren. 4 gute Chops schlagen 16 mittelmäßige."
        ]
      },
      {
        title: "Deine Packs: Lo-Fi & Chill-Packs (Weekday, Bunny — Cymatics)",
        body: "Cymatics Lo-Fi-Packs sind bereits verarbeitet und kurz — sie sind für den Soforteinsatz gebaut. Deine Aufgabe ist, sie zum Pattern-Feel zu matchen, nicht zu extrahieren.",
        steps: [
          "Diese Samples sind meist 4 oder 8 Takte bei fixem BPM — Dateinamen auf BPM-Info prüfen (z.B. 'weekday_loop_85bpm')",
          "In Maschine: 'Warp' beim Laden ausschalten (außer BPM passt nicht zum Projekt). Lo-Fi-Samples klingen schlechter mit Pitch-Warp",
          "Nach dem 'hellen Moment' suchen — meist Beat 3 oder 4 des 4-Takt-Loops — und diesen als Chop isolieren",
          "Für Weekday: die Piano- und Keys-Samples sind am vielseitigsten. Als 2-Beat-Stücke slicen für sofortige Stabs",
          "Für Bunny: Vinyl-Pops und Rausch-Elemente als Textur-Layer unter dem Haupt-Sample nutzen, nicht als Primär-Melodie",
          "Diese Packs funktionieren am besten in Layern: ein Lo-Fi-Loop als Bett, ein Chop aus Soulful Dreams oder Revival darüber"
        ]
      },
      {
        title: "Deine Packs: Drum-Fokussiert (Sticks Toolkit, Chronicles)",
        body: "Drum-Sample-Packs werden anders verwendet — du choppst sie nicht für Melodie, sondern für rhythmische Textur und Ersatz-Hits.",
        steps: [
          "Sticks Toolkit: einzelne Hits (Kick, Snare, Hat One-Shots) direkt in Maschine-Pads laden. Versuche nicht, die vollen Loops zu choppen — nutze die One-Shots",
          "Chronicles: wenn Loops enthalten, nach Drum-Breaks ohne melodische Elemente suchen. 2-Takt-Breaks sind das Ziel",
          "Detect Transients auf Drum-Breaks anwenden (mehr dazu im Chop-Tab) — Drum-Transienten erkennt Maschine gut automatisch",
          "Einen Drum-Break-Chop mit eigenem Kick und Snare oben drüber layern — du bekommst die Textur des Breaks ohne rhythmische Kontrolle zu verlieren",
          "Den Drum-Loop als Send-Effekt nutzen: auf separaten Kanal routen, hart komprimieren (4:1, schneller Attack), bei -15 bis -18dB unter dem Hauptkit einblenden — fügt Schmutz hinzu, ohne als separates Element hörbar zu sein"
        ]
      },
      {
        title: "Tonart und Tempo bestimmen — bevor du choppst",
        body: "Einen Sample ohne Kenntnis seiner Tonart zu choppen verursacht später große Probleme. Diesen Schritt VOR dem Laden in Maschine ausführen — dauert 2 Minuten und spart Stunden.",
        steps: [
          "Sample im Maschine-Software-Wellenform-Editor öffnen. Leertaste zum Abspielen drücken",
          "Einen Basston summen oder singen, der darunter passt — das ist ungefähr deine Grundtonart",
          "Eine kostenlose Piano-Tuner-App auf dem Handy (GuitarTuna, gratis) neben dem Sample verwenden, um die Note zu identifizieren",
          "Die Tonart sichtbar notieren (Klebezettel, Handy-Notiz usw.) — du brauchst sie, wenn du Kick und Bass später stimmst",
          "Für Tempo: zuerst den Dateinamen prüfen — die meisten Pro-Packs enthalten BPM im Namen. Falls nicht, BPM mit Maschines TAP-Button klopfen",
          "Maschine-Projekt-Tempo vor dem Laden anpassen — verhindert Warp-Artefakte"
        ]
      },
    ],
  },
  chop: {
    techniques: [
      {
        title: "Methode 1: Auto Slice (Transient-Erkennung) — Am schnellsten",
        body: "Für Drum-Breaks und alle Samples mit offensichtlichen rhythmischen Hits. Maschine erkennt Peaks und schneidet automatisch. Dauert unter 60 Sekunden.",
        steps: [
          "Sample laden: aus dem Maschine-Browser auf ein leeres Pad in Group A ziehen",
          "Das Pad auswählen (einmal drücken, es leuchtet konstant)",
          "Im Maschine-Software-Fenster: oben im Plugin-Bereich auf 'Sample'-Tab klicken",
          "In der Wellenform-Ansicht: Rechtsklick auf die Wellenform → 'Slice' → 'Detect Transients'",
          "Ein Empfindlichkeits-Regler erscheint — nach rechts für dichte Drum-Breaks, nach links für spärliche melodische Loops. Mit 50% starten und anpassen",
          "Auf 'Apply' klicken — senkrechte Schnittlinien erscheinen über der Wellenform",
          "Auf 'Slice to Pads' klicken — jeder Slice wird einem aufeinanderfolgenden Pad zugewiesen (Pad 1 = Slice 1 usw.)",
          "Am Hardware: Pads 1–8 drücken, um jeden Slice abzuhören",
          "Bei zu langem/kurzem Slice: zurück zur Software, Empfindlichkeit anpassen, neu anwenden"
        ],
        tip: "Am besten für: Drum-Breaks aus Chronicles, Sticks Toolkit und alle rhythmischen Elemente aus Revival."
      },
      {
        title: "Methode 2: Manueller Schnitt — Am präzisesten",
        body: "Für melodische Samples, bei denen du genaue Kontrolle über Schnittpunkte willst. Langsamer, aber professionelle Chops.",
        steps: [
          "Sample auf ein Pad laden. Pad auswählen.",
          "In Maschine-Software: 'Sample'-Tab → die volle Wellenform ist sichtbar",
          "Leertaste zum Abspielen drücken. Einmal durchhören und genau notieren, wo Schnitte gewünscht sind",
          "Um einen manuellen Slice-Punkt zu setzen: Wiedergabe stoppen. Präzise auf die Wellenform klicken",
          "Rechtsklick an diesem Punkt → 'Add Slice Point' — eine senkrechte Linie erscheint",
          "Für jeden Schnitt wiederholen. Typischer melodischer Chop hat 4–8 Slice-Punkte",
          "Wenn fertig: 'Slice to Pads' klicken — alle Slices werden sequenziell auf Pads gemappt",
          "Am MK3-Hardware: SHIFT + Pad mit Sample halten → öffnet Hardware-Sample-Edit-Bildschirm",
          "4D-Encoder (großer Knopf) zum Scrubben durch die Wellenform und Verifizieren jedes Slices",
          "Um einen Slice-Punkt am Hardware anzupassen: mit Encoder zum Slice navigieren, SHIFT + Encoder drehen"
        ],
        tip: "Am besten für: Piano-Läufe und Akkord-Stabs aus Soulful Dreams, Odyssey Soul. Jedes melodische Sample, bei dem Transient-Erkennung falsche Schnitte macht."
      },
      {
        title: "Methode 3: Slice-Modus am Pad (Nur-Hardware-Workflow)",
        body: "Diese Methode öffnet nie die Maschine-Software — alles wird am MK3-Hardware gemacht. Langsamer, aber gut für spontane Sessions.",
        steps: [
          "Sample auf ein Pad laden: Browser-Button drücken, mit Encoder zur Datei navigieren, Encoder drücken zum Laden",
          "Mit ausgewähltem Pad: kleinen Button 'Pad' (oder 'SAMPLING') drücken für Pad-Edit",
          "Auf dem Touchscreen: 'Engine'-Tab antippen",
          "'Playback Mode'-Einstellung finden — zeigt 'Classic'. Antippen und zu 'Slice' wechseln",
          "Im Engine-Tab nach unten scrollen, um 'Start'- und 'End'-Marker zu finden — definieren Slice-Regionen",
          "SHIFT halten und 4D-Encoder drehen, um den Startpunkt zu setzen. Sample-Position auf dem Bildschirm beobachten",
          "SHIFT + Encoder hinunterdrücken, dann drehen um den Endpunkt zu setzen",
          "Jedes Pad in der Group kann nun einen anderen Start-/Endbereich halten — jeder Chop als separate 'Region' pro Pad",
          "Langsamer als Methode 2, funktioniert aber komplett offline ohne Laptop"
        ],
        tip: "Am besten für: Live-Sessions, unterwegs, wenn die Maschine-Software nicht geöffnet ist. Auch gut für schnelle 2–3-Chop-Jobs."
      },
      {
        title: "Chop-Group benennen und speichern",
        body: "Nach dem Choppen sofort die Group speichern — Maschine speichert einzelne Pad-Chops nicht automatisch. Eine gute Chop-Einstellung zu verlieren ist extrem frustrierend.",
        steps: [
          "Nach Slice to Pads: alle Chops sind in Group A (oder der geladenen Group)",
          "In Maschine-Software: Rechtsklick auf den Group-Header → 'Save Group As'",
          "Klar benennen: 'SOULFUL_DREAMS_V1_CHOP_92BPM_Am' — Pack-Name, BPM und Tonart einbeziehen",
          "Speicherort: 'User Library > Groups > [DeinName] Chops' — wird in Maschines Browser verfügbar",
          "Am Hardware: FILE → Save → zum User-Ordner navigieren",
          "Nach dem Speichern testen: neues leeres Projekt öffnen, im Browser die gespeicherte Group suchen, laden. Prüfen ob alle Slices korrekt abspielen",
          "Backup der Datei auf externe Festplatte oder Cloud — deine Chop-Bibliothek ist dein wertvollstes Asset"
        ]
      },
      {
        title: "Einzelne Slices stimmen",
        body: "Nach dem Slicen kann jeder Slice unabhängig gestimmt werden — ein Akkord-Sample wird zu einem melodischen Instrument über die Pads.",
        steps: [
          "Nach Slice to Pads: Pad 1 (erster Slice) auswählen",
          "Auf dem Touchscreen: 'Pad'-Tab → 'Tune'-Parameter suchen",
          "4D-Encoder drehen, um den Slice in Halbtönen nach oben oder unten zu transponieren",
          "Für jedes Pad/Slice wiederholen — du baust ein chromatisches Instrument aus deinem Sample",
          "Profi-Technik: einen einzelnen Piano-Akkord-Chop auf 8 Pads kopieren. Jedes Pad auf eine andere Skalennote stimmen (Grundton, 2., 3., 4., 5., 6., 7., Oktave) — ein Instrument aus einem Chop",
          "LOCK STEP drücken, um Stimmungsänderungen an das Pattern zu binden",
          "Maschines 'Chord'-Modus verwenden (SHIFT + Pad), um transponierte Slices als Akkorde zu spielen"
        ]
      },
    ],
  },
  arrange: {
    techniques: [
      {
        title: "Der 2-Takt-Chop-Loop (Standard)",
        body: "Die Grundlage der meisten sample-basierten Hip-Hop- und Boom-Bap-Produktionen. Der Chop läuft alle 2 Takte, das Drum-Pattern bleibt darunter konstant.",
        steps: [
          "In Maschine: Pattern-Länge auf 2 Takte setzen — SHIFT + PATTERN LENGTH-Button drücken → auf 2 Takte stellen",
          "Im Step-Sequencer: Chop-Pad auswählen (das mit dem Haupt-Loop oder primären Chop-Slice)",
          "Chop nur auf Step 1 platzieren — durch alle 32 Steps klingeln lassen (2 Takte × 16 Steps = 32 gesamt)",
          "Dieses Pad auf 'One-Shot'-Modus setzen: im Pad-Engine-Tab, Playback-Mode auf 'One Shot'",
          "Drum-Pattern in einer separaten Group hinzufügen — Chops und Drums in verschiedenen Groups halten",
          "Der Chop soll kurz vor Step 1 von Takt 3 enden. Bei zu frühem Abschneiden: Sample-Endpunkt anpassen. Bei Überlauf: Endpunkt kürzen",
          "Variation: Chop auf Step 1 von Takt 1, einen anderen Slice auf Step 1 von Takt 2 — ergibt ein 2-Takt-ABAB-Chop-Pattern"
        ],
        tip: "Packs dafür: Soulful Dreams (2-Takt-Pocket-Sektion), Odyssey Soul (Chorus-Pocket), Revival (Full-Band-Sektionen)."
      },
      {
        title: "Der Stutter-Chop",
        body: "Der Stutter-Chop wiederholt ein kurzes Fragment 2–3 Mal an einem entscheidenden Moment. Die Signaturtechnik von Pete Rock, DJ Premier und Alchemist.",
        steps: [
          "Den kürzesten Slice auswählen — idealerweise ein 1-Beat- oder 2-Beat-Akkord-Hit",
          "Im Step-Sequencer diesen Chop auf: Step 12, Step 13, Step 14 (letzte 3 Steps von Takt 1) platzieren",
          "Jeden dieser Steps denselben Slice auslösen lassen — sie feuern in schneller Abfolge, erzeugen das Stottern",
          "Velocity: Step 12 auf 90, Step 13 auf 70, Step 14 auf 50 — absteigende Velocity lässt den Stutter natürlich ausklingen",
          "Der längere Haupt-Chop läuft durch Steps 1–11, der Stutter feuert bei 12–14, dann Stille bei 15–16",
          "Am MK3: Velocity-Modus einschalten (Encoder im Step-Sequencer drücken) und jeden Step einzeln setzen",
          "Fortgeschritten: Stutter nur auf Beat 4 von Takt 2 — alle 2 Takte, nicht jeden Takt. Fühlt sich natürlicher an"
        ],
        tip: "Am besten mit: einzelnen Akkord-Stabs aus Soulful Dreams, Piano-Hits aus Weekday, den Turnaround-Momenten aus jedem Soul-Pack."
      },
      {
        title: "Chops mit Pattern-Typen verbinden",
        body: "Verschiedene Drum-Patterns verlangen verschiedene Chop-Behandlungen. So matchen Profis Sample zum Groove.",
        steps: [
          "BOOM BAP-Pattern (54–58% Swing): lange, ungeschnittene Samples verwenden (4–8 Takte). Das Sample atmet über den Beat. Maximal 1–2 Slices",
          "HIP HOP modern (eng, kein Swing): engere Chops, kürzere Fragmente (1–2 Beats). 4–6 Slices rhythmisch über den Takt verteilt",
          "R&B Half-Time-Pattern (63%+ Swing, Snare nur auf 3): Akkord-Stab auf Beat 3 zusammen mit der Snare. 2 Beats klingen lassen",
          "R&B Groove-Pattern: langsame schimmernde Chops — lange melodische Sektion in 4 Teile slicen, je auf Beat 1, 2, 3, 4 von Takt 1",
          "Spärlicher Boom Bap (minimale Kicks): der Chop trägt das gesamte melodische Gewicht — voller Band-Loop ohne Slicing",
          "Jedes Pattern in dieser App aufrufen, Step-Grid ansehen, leere Stellen finden — dort soll der Chop keine dichten Hits haben. Chop-Dichte umgekehrt zur Drum-Dichte"
        ]
      },
      {
        title: "Den A/B-Chop-Loop aufbauen",
        body: "Professionelle Beats wechseln fast immer zwischen zwei Chop-Variationen — dem A-Loop und dem B-Loop. So baust du beide.",
        steps: [
          "In Maschine: Pattern A erstellen — dein Haupt-2-Takt-Chop-Loop (der cleanlste Abschnitt deines Samples)",
          "Rechtsklick auf Pattern A in der Pattern-Liste → Duplizieren → als Pattern B umbenennen",
          "In Pattern B: den Chop-Slice auf Step 1 zu einem anderen, kontrastierenden Slice wechseln",
          "Oder in Pattern B: einen Stutter auf Steps 12–14 hinzufügen, der in Pattern A nicht vorhanden war",
          "In der Scene-Ansicht (SHIFT + SCENE): Scene 1 mit Pattern A, Scene 2 mit Pattern B erstellen",
          "Alle 4 Takte zwischen Scenes wechseln — A für 4 Takte, B für 4 Takte",
          "Pattern C als Fill-Takt erstellen: komplett anderer Slice, nur bei Abschnitts-Übergängen verwendet",
          "Ergebnis: dein Beat wiederholt sich nie identisch für mehr als 4 Takte — Standard für professionelle Tracks"
        ]
      },
      {
        title: "Der Rückwärts-Chop (Filmische Spannung)",
        body: "Einen Slice umzukehren erzeugt atmosphärische Spannung ohne externe Samples. Wirkt besonders gut vor einem Drop oder Abschnitts-Wechsel.",
        steps: [
          "Das Pad mit dem umzukehrenden Chop auswählen",
          "In Maschine-Software: in der Sample-Wellenform-Ansicht den 'Reverse'-Button suchen (oder Rechtsklick Wellenform → Reverse)",
          "Am Hardware: Pad ausgewählt → SHIFT + Pad → Sample-Tab → 'Reverse'-Toggle suchen → aktivieren",
          "Das Sample spielt jetzt rückwärts — am effektivsten bei Akkord-Stabs und String-Swells",
          "Diesen umgekehrten Chop auf den letzten 2 Beats von Takt 4 platzieren (Steps 13–16) — zieht den Hörer zum nächsten Abschnitt",
          "Lautstärke des rückwärtigen Pads auf 60% des Haupt-Chops setzen — gefühlt werden, nicht gehört",
          "Fortgeschritten: rückwärtigen Chop durch Raum im Shimmer-Modus bei 80% Wet — erzeugt einen ätherischen Swell"
        ]
      },
    ],
  },
  process: {
    techniques: [
      {
        title: "Der Boom-Bap-Chop-Stack (SP-1200-Charakter)",
        body: "Klassische Boom-Bap-Chops haben eine spezifische Klangcharakteristik: warme Bässe, reduzierte Höhen, leichten Schmutz. Die vollständige Signalkette.",
        steps: [
          "Chop-Group-Kanal im Mixer auswählen",
          "Plugin 1: EQ → High-Shelf-Absenkung bei 8.000 Hz, -4dB. Entfernt die digitale Helligkeit",
          "Plugin 2: EQ (zweites Band) → Low-Shelf-Boost bei 120 Hz, +2dB. Erhöht die Wärme",
          "Plugin 3: Saturator (Maschine eingebaut) → Tape-Modus, Drive 20%. Wärme, keine Verzerrung",
          "Plugin 4: Lo-Fi (Maschine eingebaut) → Bits: 12, Rate: 0,80 (subtil). Kaum hörbar, erzeugt aber die Bitcrushed-Textur",
          "Plugin 5: Kompressor → Ratio 2:1, Attack 30ms, Release 200ms, Threshold -12dB. Sanft — nur um die Dynamik zu binden",
          "Prüfen: alle Plugins bypassen und mit Original vergleichen. Die bearbeitete Version soll wärmer, etwas schmaler und weniger hell klingen"
        ],
        code: "EQ (hi-shelf -4dB@8k) → EQ (lo-shelf +2dB@120Hz) → Saturator (Tape 20%) → Lo-Fi (12bit/0.80) → Kompressor (2:1, 30ms A)"
      },
      {
        title: "Die R&B-Chop-Behandlung (Offen und Warm)",
        body: "R&B-Chops sollen sich schwebend anfühlen — offener Hall, sanfte Kompression, keine Lo-Fi-Bearbeitung. Das Gegenteil von Boom Bap.",
        steps: [
          "Chop-Group-Kanal im Mixer auswählen",
          "Plugin 1: EQ → High-Shelf-Absenkung bei 12.000 Hz, -2dB (subtil — entfernt nur Rauigkeit)",
          "Plugin 2: EQ → Sanftes Low-Mid-Dip bei 300–400 Hz, -1,5dB. Entfernt die 'Käsigkeit'",
          "Plugin 3: Raum → Bloom-Modus, Size 0,55, Decay 1,5s, High Cut 5kHz, Wet 25%. Die 'Luft' im R&B-Sample",
          "Plugin 4: Kompressor → Ratio 1,5:1, Attack 50ms (sehr langsam), Release 400ms. Kaum eingreifend",
          "Keine Sättigung. Kein Lo-Fi. R&B-Samples werden clean und modern bearbeitet",
          "Chop leicht pannen: bei starkem Stereobild mit einem Stereo-Widener bei 30% verstärken"
        ],
        code: "EQ (-2dB@12k, -1.5dB@350Hz) → Raum (Bloom, 1.5s, 25%) → Kompressor (1.5:1, 50ms A)"
      },
      {
        title: "Hip-Hop-Chop: Sidechain und Charakter",
        body: "Moderne Hip-Hop-Chops werden hart komprimiert und auf die Kick sidechain-komprimiert. Das erzeugt das pumpende, atmende Gefühl.",
        steps: [
          "Plugin 1: Guitar Rig 7 → Tube-Compressor-Komponente, Intensity 40%. Fügt harmonische Sättigung zur Kompression hinzu",
          "Plugin 2: Kompressor für Sidechain → auf Chop-Kanal. Sidechain-Input auf den Kick-Pad-Kanal setzen",
          "Sidechain-Einstellungen: Ratio 5:1, Attack 0ms, Release 80ms. Threshold bis 3–5dB Gain-Reduction bei Kick-Hits",
          "Plugin 3: EQ → High-Pass-Filter bei 40Hz (entfernt Sub-Inhalt, der mit der Kick-Sub konkurriert)",
          "Testen: Kick + Chop zusammen hören. Bei jedem Kick-Hit soll der Chop leicht ducken",
          "Sidechain-Release anpassen: kürzer (60ms) = enger, offensichtlicheres Pumpen. Länger (120ms) = subtil, grooviger",
          "Sicherstellen, dass der Kernfrequenzbereich (200–4000Hz) vom Sidechain unberührt bleibt"
        ]
      },
      {
        title: "Tempo- und Warp-Probleme beheben",
        body: "Wenn ein Chop sich leicht unzeitig oder pitch-geverpt anhört, sind das die spezifischen Fixes.",
        steps: [
          "Chop klingt zu hoch/tief: Tune-Parameter in Halbtönen anpassen. Prüfen ob Warp aktiv — im Engine-Tab 'Warp'-Toggle suchen und AUS schalten",
          "Chop klingt gehetzt oder schleppend: Quell-Sample-BPM passt nicht zum Projekt. TAP nutzen, Projekt-BPM anpassen. Dann Warp EIN mit Modus 'Standard'",
          "Chop klingt flam-artig (wie verdoppelt): zwei Pads lösen denselben Slice aus. Pad-Link prüfen. Auch auf doppelte Events auf demselben Step prüfen",
          "Chop klingt dünn nach falschen Transient-Schnitten: der Slice hat den Attack abgeschnitten. Fix: Slice-Punkt-Marker 5–10ms links vom Transient-Start ziehen",
          "Chop klingt stakkatoartig an Loop-Punkten: kein Stille am Ende vor dem Neustart. Sehr kurzes Fade-out hinzufügen (Sample-Edit: 'Fade Out' auf 10–20ms)"
        ]
      },
      {
        title: "Zwei Chops überlagern",
        body: "Die fortschrittlichste Chopping-Technik: zwei Samples aus verschiedenen Packs so überlagern, dass sie wie ein kohärenter Loop klingen.",
        steps: [
          "Chop A (z.B. melodischer Akkord-Loop aus Soulful Dreams) auf Pad 1 laden",
          "Chop B (z.B. Vinyl-Rausch-Textur aus Bunny oder Weekday) auf Pad 2 laden",
          "Beide mit Pad Link auslösen: SHIFT + PAD LINK → Pad 1 antippen, dann Pad 2 antippen",
          "EQ Chop A: Mitten und Höhen beibehalten (100Hz bis 12kHz). Boom-Bap- oder R&B-Stack anwenden",
          "EQ Chop B: nur Low- und High-Extreme beibehalten — Band-Pass bei 2kHz, breit (2 Oktaven). Macht es texturell, nicht melodisch",
          "Chop B Lautstärke auf -12dB unter Chop A. Solo kaum hörbar, im Mix aber spürbar",
          "Optional: Lo-Fi nur auf Chop B (nicht A) — gibt dem Textur-Layer einen grissigeren Charakter",
          "Testen: Chop B stumm schalten und hören. Stummschaltung aufheben. Der Unterschied soll sich wie hinzugefügtes Leben anfühlen"
        ]
      },
    ],
  },
};

export const CHOPLAB_PACKS_DE: Record<string, DePackProfile> = {
  "Revival": {
    type: "Soul / Gospel / Funk",
    primaryTechnique: "2-Takt-Loop mit minimalem Slicing",
    bestChops: "Full-Band-Breakdowns, Akkord-Stabs, Orgel-Swells",
    tips: [
      "Revivals Full-Ensemble-Sektionen am besten als einzelne 2-Takt-Loops verwenden — nicht zu viel choppen. Der Reichtum liegt im vollen Arrangement.",
      "Nach den Gospel-Chor-Momenten suchen — ein einzelner gehaltener Akkord-Hit wird zu einem unglaublichen Stab-Chop.",
      "Die Orgel- und Keys-Elemente funktionieren oft gut rückwärts — als Riser vor einem Chorus-Abschnitt laden.",
    ]
  },
  "Soulful Dreams Vol 1 & 2": {
    type: "Classic Soul / Vintage R&B",
    primaryTechnique: "Manueller Schnitt für melodische Fragmente",
    bestChops: "Piano-Läufe, Streicher-Akkord-Hits, Bass-Drum-Pocket-Takte",
    tips: [
      "Diese Packs haben wahrscheinlich viele lange Loops (8–16 Takte). Takt 3–4 und 7–8 fokussieren, wo das Arrangement seinen Pocket erreicht.",
      "Die Streicher-Hits sind Gold — jeden Moment finden, wo Streicher auf einem Akkord landen, und als 1-Beat-Slice schneiden.",
      "Soulful-Dreams-Sample mit Weekday Lo-Fi-Textur darunter bei -15dB layern für Tiefe.",
    ]
  },
  "Odyssey Soul Sample Pack": {
    type: "Neo Soul / Contemporary Soul",
    primaryTechnique: "Detect Transients für rhythmische Sektionen",
    bestChops: "Saubere melodische Loops, Akkord-Progressionen, Vokal-Phrasen",
    tips: [
      "Neo-Soul-Packs sind meist gut mit Tonart und BPM beschriftet — diese Info zuerst nutzen, statt alles zu erspüren.",
      "Der 'cleane' Charakter von Neo-Soul-Samples bedeutet, sie funktionieren in R&B und Hip Hop ohne viel Bearbeitung.",
      "Nach Phrasen suchen, die sich 'fragend' anhören (unaufgelöste Akkord-Progression) — diese sitzen schön unter einer Strophe.",
    ]
  },
  "Chronicles": {
    type: "Hip Hop / Sample-basiert",
    primaryTechnique: "Auto Slice (Detect Transients)",
    bestChops: "Drum-Breaks, melodische Loops zum Choppen",
    tips: [
      "Chronicles-artige Packs sind meist zum Choppen konzipiert — Transient-Erkennung funktioniert beim ersten Versuch gut.",
      "Drum-Elemente verwenden, um Factory-Kit-Sounds zu ersetzen — Drum-Break bei -15dB unter dem Haupt-Kick/Snare für Schmutz.",
      "Die melodischen Loops sind typischerweise kürzer (1–2 Takte) und sofort zur Platzierung geeignet.",
    ]
  },
  "Weekday (Cymatics)": {
    type: "Lo-Fi / Indie / Chill",
    primaryTechnique: "Laden und spielen — minimales Chopping nötig",
    bestChops: "Piano-Keys, Lo-Fi-Loops als Textur-Layer, Vinyl-Noise",
    tips: [
      "Weekday-Samples sind für Lo-Fi-Charakter vorbearbeitet — keine weiteren Lo-Fi-Plugins drauf, sonst klingen sie zu degradiert.",
      "Die Piano- und E-Piano-Samples funktionieren am besten, wenn du einfach die ersten 2 Beats nimmst und loopst.",
      "Das Vinyl-Knistern aus Weekday als Send-Effekt auf dem Drum-Bus verwenden für sofortigen Boom-Bap-Schmutz.",
    ]
  },
  "Bunny (Cymatics)": {
    type: "Lo-Fi / Bedroom / Weich",
    primaryTechnique: "Textur-Layering, kein melodisches Chopping",
    bestChops: "Ambiente Pads, Rausch-Texturen, weiche Key-Phrasen",
    tips: [
      "Bunny ist absichtlich 'weich' — funktioniert am besten als Textur-Layer hinter einem härteren Sample, nicht als primärer Chop.",
      "Die Pad- und Ambient-Elemente sind lang (4–8 Takte) und zum Loopen konzipiert. Als-is auf ein Pad laden und kontinuierlich laufen lassen.",
      "Bei melodischen Elementen aus Bunny: nur in den ersten 2 Beats eines Takts verwenden — zu weich für einen vollen Loop.",
    ]
  },
  "Sticks Toolkit": {
    type: "Drum One-Shots & Fills",
    primaryTechnique: "Einzelne Hits direkt auf Pads laden",
    bestChops: "Rim-Hits, Snare-Fills, Hi-Hat-Variationen",
    tips: [
      "Sticks nicht als Loops choppen — die einzelnen Hits direkt auf separate Pads laden.",
      "Factory-Snare mit einer Sticks-Snare für Abwechslung ersetzen: gleiches Pattern, nur die Klangquelle tauschen.",
      "Die Drum-Fills aus Sticks als One-Shot-Fill-Trigger verwenden: auf ein Pad laden, One-Shot-Modus, manuell am Ende jede 8 oder 16 Takte auslösen.",
    ]
  },
};
