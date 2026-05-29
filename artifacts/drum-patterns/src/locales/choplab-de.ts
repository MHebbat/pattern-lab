export type ChopLabTechnique = {
  title: string;
  body: string;
  steps?: string[];
  tip?: string;
  code?: string;
};

export type ChopLabDeTab = {
  label: string;
  subtitle: string;
  techniques: ChopLabTechnique[];
};

export type ChopLabDePackProfile = {
  name: string;
  type: string;
  bpmRange: string;
  choppabilityLabel: string;
  primaryTechnique: string;
  bestChops: string;
  tips: string[];
};

export const CHOPLAB_DE_TABS: ChopLabDeTab[] = [
  {
    label: "Den Chop finden",
    subtitle: "Wie man die richtigen Momente in einer Soul-Aufnahme identifiziert und extrahiert — bevor man die Hardware anfasst",
    techniques: [
      {
        title: "Die 'Goldene 8' — Worauf du jagst",
        body: "Die meisten choppbaren Momente in einer Soul-Aufnahme fallen in 8 Kategorien. Trainiere dein Gehör, um sie beim ersten Hören zu erkennen — greife nicht einfach den offensichtlichen Chorus-Loop.",
        steps: [
          "Der Intro-Drum-Break — meist 2–4 Takte mit minimaler Melodie, perfekt für eine saubere Chop-Grundlage",
          "Der Übergang — der 2-Beat-Fill vor einem neuen Abschnitt, gut für Übergangs-Stabs",
          "Der Akkord-Stab — einzelner Akkord-Hit (1–2 Beats) bei einem Abschnittsübergang, sehr choppbar",
          "Der Vokal-Ad-lib — eine einzelne Phrase oder ein Atemgeräusch zwischen Zeilen, menschlichert einen Loop",
          "Die Bass- & Drum-Pocket — Takte, in denen der Bass genau dem Kick folgt, sehr verrastbar",
          "Der String-Swell — der Moment, in dem Streicher bis zu einem Höhepunkt aufbauen bevor sie fallen, atmosphärisch",
          "Der Klavier-Lauf — eine schnell auf- oder absteigende Phrase, kann Note für Note geschnitten werden",
          "Der Breakdown — minimale Arrangierung (meist nur Drums + Bass), sauberste Sample-Fläche"
        ]
      },
      {
        title: "Deine Packs: Lange Soul-Loops (Revival, Soulful Dreams, Odyssey Soul)",
        body: "Lange Soul-Loops (8–32 Takte) wirken zunächst überwältigend. Der Trick besteht nicht darin, alles zu choppen — finde die 2-Takt-Goldader darin.",
        steps: [
          "Loop in Maschine importieren. Vor allem: einmal komplett durchhören — kein Pausieren, kein Stoppen. Notieren, welche Takte am stärksten klingen",
          "Beim zweiten Hören: Takte zählen. Soul-Loops folgen meist 4-Takt-Phrasen. Takte 1–4, 5–8 usw. identifizieren",
          "Die 'Pocket-Bar' finden — meist Takt 3 oder 7 — wo alles einrastet. Das ist deine primäre Chop-Quelle",
          "Jeden Takt suchen, in dem die Drums wegfallen — das ist der melodisch 'nackte' Abschnitt. Für einen Akkord- oder Klavier-Chop isolieren",
          "Jeden 2-Beat-'Atem'-Moment identifizieren — die Halb-Takt-Pause vor einer neuen Phrase. Das wird ein Stutter-Chop",
          "4 spezifische Momente zum Slicen anvisieren: (1) ein 2-Takt-Vollenergie-Abschnitt, (2) ein 1-Beat-Stab, (3) ein 2-Beat-Melodiefragment, (4) ein Drum-only-Abschnitt",
          "Alles andere ignorieren. 4 gute Chops schlagen 16 mittelmäßige."
        ]
      },
      {
        title: "Deine Packs: Lo-Fi & Chill (Weekday, Bunny — Cymatics)",
        body: "Cymatics Lo-Fi-Packs sind bereits verarbeitet und kurz — sie sind für den Soforteinsatz gebaut. Deine Aufgabe ist, sie auf ein Pattern-Feel abzustimmen, nicht die Extraktion.",
        steps: [
          "Diese Samples haben meist 4 oder 8 Takte bei festem BPM — Dateinamen auf BPM-Infos prüfen (z.B. 'weekday_loop_85bpm')",
          "In Maschine 'Warp' beim Laden ausschalten (außer das BPM passt nicht zum Projekt). Lo-Fi-Samples klingen bei Pitch-Warping schlechter",
          "Den 'Bright Spot' suchen — meist Beat 3 oder 4 des 4-Takt-Loops — und als Chop isolieren",
          "Für Weekday: die Klavier- und Keys-Samples sind am vielseitigsten. In 2-Beat-Stücke schneiden und du hast sofortige Stabs",
          "Für Bunny: auf Vinyl-Knistern und Rausch-Elemente als Texturschichten unter dem Haupt-Sample konzentrieren, nicht als primäre Melodie",
          "Diese Packs funktionieren am besten gelayert: ein Lo-Fi-Loop als Bett, ein Chop aus Soulful Dreams oder Revival obendrauf"
        ]
      },
      {
        title: "Deine Packs: Drum-fokussiert (Sticks Toolkit, Chronicles)",
        body: "Drum-Sample-Packs werden anders verwendet — du choppst sie nicht für Melodie, du nutzt sie als rhythmische Textur und Ersatz-Hits.",
        steps: [
          "Sticks Toolkit: einzelne Hits (Kick, Snare, Hat One-Shots) direkt in Maschine-Pads laden. Versuche nicht, die kompletten Loops zu choppen — nutze die One-Shots",
          "Chronicles: bei enthaltenen Loops nach Drum-Breaks ohne melodische Elemente suchen. 2-Takt-Breaks sind das Ziel",
          "Detect Transients auf Drum-Breaks anwenden (mehr dazu im Chop-Tab) — Drum-Transients sind für Maschine leicht automatisch erkennbar",
          "Einen Drum-Break-Chop mit eigenem Kick und Snare obendrauf layern — du bekommst die Textur des Breaks ohne rhythmische Kontrolle zu verlieren",
          "Den Drum-Loop als Send-Effekt nutzen: auf einen separaten Kanal routen, hart komprimieren (4:1, schneller Attack), und bei -15 bis -18dB unter dem Hauptkit einblenden. Fügt Dreck hinzu ohne als separates Element hörbar zu sein"
        ]
      },
      {
        title: "Tonart und Tempo vor dem Choppen ermitteln",
        body: "Ein Sample ohne Kenntnis seiner Tonart zu choppen, bereitet später große Probleme. Diesen Schritt vor dem Laden in Maschine durchführen — er dauert 2 Minuten und spart Stunden.",
        steps: [
          "Das Sample im Maschine-Software-Wellenform-Editor öffnen. Leertaste drücken zum Abspielen",
          "Eine Bassnote summen oder singen, die dazu passt — das ist ungefähr deine Grundtonart",
          "Eine kostenlose Klavierstimm-App auf dem Handy (GuitarTuna, kostenlos) neben dem Sample nutzen, um die Note zu identifizieren",
          "Die Tonart irgendwo sichtbar notieren (Klebezettel, Telefonnotiz usw.) — du wirst sie beim Stimmen von Kick und Bass später brauchen",
          "Für das Tempo: zuerst den Dateinamen prüfen — die meisten Pro-Packs enthalten das BPM im Namen. Wenn nicht, das BPM auf Maschines TAP-Taste klopfen",
          "Das Maschine-Projekt-Tempo davor einstellen — verhindert Warp-Artefakte"
        ]
      }
    ]
  },
  {
    label: "Chop im MK3",
    subtitle: "Genaue MK3-Button-Sequenzen für jeden Chopping-Workflow — Auto Slice, manuelle Schnitte, Slice to Pads",
    techniques: [
      {
        title: "Methode 1: Auto Slice (Detect Transients) — Schnellste",
        body: "Für Drum-Breaks und jedes Sample mit offensichtlichen rhythmischen Hits. Maschine erkennt Peaks und schneidet automatisch. Dauert unter 60 Sekunden.",
        steps: [
          "Sample laden: aus dem Maschine-Browser auf ein leeres Pad in Gruppe A ziehen",
          "Dieses Pad auswählen (Pad einmal drücken zum Selektieren, es leuchtet fest)",
          "Im Maschine-Softwarefenster: 'Sample'-Tab oben im Plugin-Bereich klicken",
          "In der Wellenform-Anzeige mit Rechtsklick auf die Wellenform → 'Slice' → 'Detect Transients' wählen",
          "Ein Empfindlichkeits-Slider erscheint — nach rechts (empfindlicher) für dichte Drum-Breaks, nach links (weniger empfindlich) für spärliche melodische Loops. Bei 50% beginnen und anpassen",
          "'Apply' klicken — vertikale Schnittlinien erscheinen über der Wellenform",
          "'Slice to Pads' klicken — jeder Slice wird auf ein aufeinanderfolgendes Pad gemappt (Pad 1 = Slice 1, Pad 2 = Slice 2 usw.)",
          "Am Gerät: Pads 1–8 drücken, um jeden Slice anzuhören. Die Pads leuchten der Reihe nach auf",
          "Wenn ein Slice zu lang oder zu kurz ist: zurück zur Software, Empfindlichkeit anpassen, erneut anwenden"
        ],
        tip: "Am besten für: Drum-Breaks aus Chronicles, Sticks Toolkit und alle rhythmischen Elemente in Revival."
      },
      {
        title: "Methode 2: Manuelles Slicen — Präziseste",
        body: "Für melodische Samples, bei denen du genaue Kontrolle über die Schnittpunkte willst. Langsamer, liefert aber professionelle Chops.",
        steps: [
          "Sample auf ein Pad laden. Pad auswählen.",
          "In der Maschine-Software: 'Sample'-Tab klicken → die vollständige Wellenform ist sichtbar",
          "Leertaste zum Abspielen drücken. Einmal anhören und genau notieren, wo Schnitte gewünscht werden (durch Takte zählen oder Abspielposition beobachten)",
          "Manuellen Slice-Punkt setzen: Wiedergabe stoppen. Genau auf die Wellenform klicken, wo der Schnitt sein soll",
          "Rechtsklick an diesem Punkt → 'Add Slice Point' — eine vertikale Linie erscheint",
          "Für jeden gewünschten Schnitt wiederholen. Typischer melodischer Chop hat 4–8 Slice-Punkte",
          "Wenn fertig: 'Slice to Pads' klicken — alle Slices werden der Reihe nach auf Pads gemappt",
          "Am MK3-Gerät: SHIFT halten + Pad mit dem Sample drücken → öffnet den Hardware-Sample-Edit-Bildschirm",
          "Mit dem 4D-Encoder (großer Knopf) durch die Wellenform scrubben und jeden Slice auf Korrektheit prüfen",
          "Slice-Punkt am Gerät anpassen: mit Encoder zum Slice navigieren, SHIFT halten + Encoder drehen, um den Schnitt links oder rechts zu nudgen"
        ],
        tip: "Am besten für: Klavierläufe und Akkord-Stabs aus Soulful Dreams, Odyssey Soul. Jedes melodische Sample, bei dem Transient-Erkennung falsche Schnitte macht."
      },
      {
        title: "Methode 3: Slice Mode auf dem Pad (Nur-Hardware-Workflow)",
        body: "Diese Methode öffnet die Maschine-Software nie — alles wird am MK3-Gerät gemacht. Langsamer, aber gut für spontane Sessions.",
        steps: [
          "Sample auf ein Pad laden: Browser-Button drücken, mit Encoder zur Datei navigieren, Encoder zum Laden drücken",
          "Mit ausgewähltem Pad: kleinen Button 'Pad' (oder 'SAMPLING') drücken, um Pad-Edit zu betreten",
          "Auf dem Touchscreen: 'Engine'-Tab antippen",
          "Einstellung 'Playback Mode' suchen — aktuell 'Classic' angezeigt. Antippen und auf 'Slice' ändern",
          "Im Engine-Tab nach unten scrollen, um 'Start'- und 'End'-Marker zu finden — diese definieren Slice-Regionen",
          "SHIFT halten und 4D-Encoder drehen, um den Start-Punkt zu setzen. Sample-Position auf dem Bildschirm beobachten",
          "SHIFT halten + Encoder nach unten drücken, dann drehen, um den End-Punkt zu setzen",
          "Jedes Pad in der Gruppe kann jetzt einen anderen Start-/End-Bereich halten — du definierst manuell jeden Chop als separate 'Region' auf jedem Pad",
          "Dies ist langsamer als Methode 2, funktioniert aber vollständig offline, kein Laptop nötig"
        ],
        tip: "Am besten für: Live-Sessions, Busfahrten, jedes Mal wenn die Maschine-Software nicht geöffnet ist. Auch gut für schnelle 2–3 Chop-Jobs."
      },
      {
        title: "Chop-Gruppe benennen und speichern",
        body: "Nach dem Choppen sofort die Gruppe speichern — Maschine speichert einzelne Pad-Chops nicht automatisch. Einen guten Chop-Aufbau zu verlieren ist extrem frustrierend.",
        steps: [
          "Nach 'Slice to Pads': alle Chops sind in Gruppe A (oder welche Gruppe auch immer geladen wurde)",
          "In der Maschine-Software: Rechtsklick auf den Gruppen-Header → 'Save Group As'",
          "Klar benennen: 'SOULFUL_DREAMS_V1_CHOP_92BPM_Am' — Pack-Name, BPM und Tonart einschließen",
          "Speicherort: 'User Library > Groups > [Dein Name] Chops' wählen. Damit erscheint es im Maschine-Browser für zukünftige Projekte",
          "Am Gerät: FILE → Save → zum User-Ordner navigieren",
          "Nach dem Speichern testen: ein neues leeres Projekt öffnen, im Browser die gespeicherte Gruppe finden, laden. Bestätigen, dass alle Slices korrekt abspielen",
          "Die Speicherdatei auf eine externe Festplatte oder Cloud-Speicher sichern — deine Chop-Bibliothek ist dein wertvollstes Asset"
        ]
      },
      {
        title: "Einzelne Slices pitch-locken",
        body: "Nach dem Slicen kannst du jeden Slice unabhängig pitchen — aus einem Akkord-Sample ein chromatisches Instrument bauen, das du melodisch über die Pads spielen kannst.",
        steps: [
          "Nach 'Slice to Pads': Pad 1 (erster Slice) auswählen",
          "Auf dem Touchscreen: 'Pad'-Tab → 'Tune'-Parameter suchen",
          "4D-Encoder drehen, um diesen Slice in Halbtönen nach oben oder unten zu transponieren",
          "Für jedes Pad/Slice wiederholen — du baust ein chromatisches Instrument aus deinem Sample",
          "Profi-Technik: einen einzelnen Klavier-Akkord-Chop nehmen. Auf 8 Pads kopieren. Jedes Pad auf eine andere Note der Tonleiter stimmen (Grundton, 2. Ton, 3. Ton, usw.). Du hast gerade aus einem Chop ein Instrument gebaut",
          "LOCK STEP drücken, um Pitch-Änderungen zum Pattern zu locken, damit Pitches pro Schritt gespeichert werden",
          "Maschines 'Chord'-Modus nutzen (SHIFT + Pad), um transponierte Slices als Akkorde zu spielen — sofortige harmonische Variation"
        ]
      }
    ]
  },
  {
    label: "Arrangieren & Platzieren",
    subtitle: "Wie du deine Chops rhythmisch arrangierst — welche Schritte, wie viele Takte, wie du Variationen aufbaust",
    techniques: [
      {
        title: "Der 2-Takt-Chop-Loop (Standard)",
        body: "Die Grundlage der meisten sample-basierten Hip-Hop- und Boom-Bap-Produktionen. Der Chop loopt alle 2 Takte, das Drum-Pattern bleibt konstant darunter.",
        steps: [
          "In Maschine Pattern-Länge auf 2 Takte setzen: SHIFT + PATTERN LENGTH drücken → auf 2 Takte setzen",
          "Im Step Sequencer: dein Chop-Pad auswählen (das mit dem Haupt-Loop oder deinem primären Chop-Slice)",
          "Den Chop nur auf Schritt 1 platzieren — ihn durch alle 32 Schritte klingen lassen (2 Takte × 16 Schritte = 32 Schritte gesamt)",
          "Diesem Pad den 'One-Shot'-Modus aktivieren: im Pad-Engine-Tab den Playback Mode auf 'One Shot' setzen, damit es beim Auslösen vollständig abspielt",
          "Drum-Pattern in einer separaten Gruppe hinzufügen — Chops und Drums in verschiedenen Gruppen für unabhängiges Mixen halten",
          "Der Chop sollte kurz vor Schritt 1 von Takt 3 enden (dem Loop-Neustart-Punkt). Bricht er früh ab: End-Punkt im Sample anpassen. Läuft er über: End-Punkt kürzen",
          "Variation: Chop auf Schritt 1 von Takt 1 platzieren und einen anderen Chop-Slice auf Schritt 1 von Takt 2 — ergibt ein 2-Takt-ABAB-Chop-Pattern"
        ],
        tip: "Packs dafür: Soulful Dreams (2-Takt-Pocket-Abschnitt nutzen), Odyssey Soul (Chorus-Pocket nutzen), Revival (die Vollband-Abschnitte)."
      },
      {
        title: "Der Stutter-Chop",
        body: "Der Stutter-Chop wiederholt ein kurzes Fragment 2–3 Mal an einem entscheidenden Moment. Es ist die Signature-Technik von Pete Rock, DJ Premier und Alchemist.",
        steps: [
          "Den kürzesten Slice auswählen — idealerweise einen 1-Beat- oder 2-Beat-Akkord-Hit oder eine Vokal-Phrase",
          "Im Step Sequencer diesen kurzen Chop auf Schritt 12, Schritt 13, Schritt 14 platzieren (die letzten 3 Schritte von Takt 1)",
          "Jeden davon denselben Slice auslösen lassen — sie feuern schnell hintereinander und erzeugen den Stutter",
          "Velocity: Schritt 12 bei 90, Schritt 13 bei 70, Schritt 14 bei 50 — absteigende Velocity lässt den Stutter natürlich ausklingen",
          "Der längere Haupt-Chop spielt durch Schritte 1–11, der Stutter feuert bei 12–14, dann Stille bei 15–16 vor dem nächsten Takt",
          "Am MK3: Velocity-Modus aufrufen (Encoder im Step Sequencer drücken) und jeden Schritt einzeln einstellen",
          "Fortgeschrittene Version: Stutter nur auf Beat 4 von Takt 2 setzen — so hört man ihn alle 2 Takte, nicht jeden Takt. Klingt natürlicher und weniger mechanisch"
        ],
        tip: "Am besten mit: einzelnen Akkord-Stabs aus Soulful Dreams, Klavier-Hits aus Weekday, den Übergangs-Momenten aus allen Soul-Packs."
      },
      {
        title: "Chops mit Pattern-Typen verbinden",
        body: "Verschiedene Drum-Patterns erfordern unterschiedliche Chop-Behandlungen. So passen Profis das Sample an den Groove an.",
        steps: [
          "BOOM BAP Pattern (54–58% Swing): lange, ungeschnittene Samples (4–8 Takte) verwenden. Das Sample atmet über dem Beat — nicht über-choppen. Maximal 1–2 Slices",
          "HIP HOP Modern Pattern (tight, kein Swing): engere Chops, kürzere Fragmente (1–2 Beats je). 4–6 Slices rhythmisch über den Takt verteilt",
          "R&B Half-Time Pattern (63%+ Swing, Snare nur auf Zählzeit 3): einen Akkord-Stab verwenden, der auf Beat 3 zusammen mit der Snare landet. 2 Beats klingen lassen. Das erzeugt das 'Drop'-Gefühl",
          "R&B Groove Pattern: langsame schimmernde Chops, die sich entwickeln — einen langen melodischen Abschnitt nehmen und in 4 Teile schneiden, jeder auf Beat 1, 2, 3, 4 von Takt 1 auslösen",
          "Spärliches Boom Bap (minimale Kicks): der Chop trägt das gesamte melodische Gewicht — vollständigen Band-Chop ohne Slicen verwenden, einfach loopen lassen",
          "Zu jedem Pattern in dieser App gehen, das Step-Grid betrachten und die leeren Räume finden — dort soll dein Chop KEINE dichten Hits haben. Chop-Dichte umgekehrt zur Drum-Dichte angleichen"
        ]
      },
      {
        title: "Den A/B-Chop-Loop aufbauen",
        body: "Professionelle Beats wechseln fast immer zwischen zwei Chop-Variationen — der A-Loop und der B-Loop. So werden beide gebaut.",
        steps: [
          "In Maschine Pattern A erstellen: dein Haupt-2-Takt-Chop-Loop (der sauberste Abschnitt des Samples)",
          "Rechtsklick auf Pattern A in der Pattern-Liste → Duplizieren → in Pattern B umbenennen",
          "In Pattern B: den Chop-Slice auf Schritt 1 in einen anderen, kontrastierenden Slice ändern — etwas dichter oder etwas spärlicher",
          "Oder in Pattern B: einen Stutter auf Schritten 12–14 hinzufügen, der in Pattern A nicht war",
          "In der Scene-Ansicht (SHIFT + SCENE): Szene 1 mit Pattern A, Szene 2 mit Pattern B erstellen",
          "Alle 4 Takte zwischen Szenen wechseln — A für 4 Takte, B für 4 Takte",
          "Pattern C als Fill-Takt erstellen: einen völlig anderen Chop-Slice, nur bei Abschnittsübergängen verwenden (16 Takte, 32 Takte usw.)",
          "Ergebnis: der Beat wiederholt sich nie identisch für mehr als 4 Takte — das ist der Standard für professionelle Tracks"
        ]
      },
      {
        title: "Der umgekehrte Chop (Filmische Spannung)",
        body: "Das Umkehren eines Slices erzeugt atmosphärische Spannung ohne externe Samples. Funktioniert besonders gut vor einem Drop oder Abschnittswechsel.",
        steps: [
          "Das Pad mit dem umzukehrenden Chop auswählen",
          "In der Maschine-Software: in der Sample-Wellenform-Ansicht den 'Reverse'-Button suchen (oder Rechtsklick auf Wellenform → Reverse)",
          "Am Gerät: Pad ausgewählt → SHIFT + Pad → Sample-Tab → 'Reverse'-Toggle suchen → aktivieren",
          "Das Sample spielt jetzt rückwärts — am wirkungsvollsten bei Akkord-Stabs und String-Swells",
          "Diesen umgekehrten Chop auf den letzten 2 Beats von Takt 4 im Loop platzieren (Schritte 13–16) — er 'zieht' den Hörer zum nächsten Abschnitt hin",
          "Die Lautstärke des umgekehrten Pads auf 60% des Haupt-Chops setzen — man will es spüren, nicht hören",
          "Fortgeschritten: den umgekehrten Chop durch Raum im Shimmer-Modus bei 80% wet laufen lassen — erzeugt einen ätherischen Swell"
        ]
      }
    ]
  },
  {
    label: "Verarbeiten & Mixen",
    subtitle: "Deine Chops im Mix platzieren — EQ, Kompression, Sättigung und genrespezifische Behandlung",
    techniques: [
      {
        title: "Der Boom Bap Chop Stack (SP-1200 Charakter)",
        body: "Klassische Boom-Bap-Chops haben eine spezifische Klangcharakteristik: warme Bässe, reduzierte Höhen, leichter Grit. Hier die vollständige Signalkette.",
        steps: [
          "Chop-Gruppen-Kanal im Mixer auswählen",
          "Plugin 1: EQ → High-Shelf-Schnitt bei 8.000 Hz, -4dB. Entfernt die digitale Helligkeit, die moderne Samples von Vintage-SP-1200-Sound trennt",
          "Plugin 2: EQ (zweites Band) → Low-Shelf-Boost bei 120 Hz, +2dB. Erhöht die Wärme ohne den Kick-Frequenzbereich zu verschmutzen",
          "Plugin 3: Saturator (eingebaut in Maschine) → Tape-Modus, Drive 20%. Geringer Drive — Wärme gewünscht, nicht Verzerrung",
          "Plugin 4: Lo-Fi (eingebaut in Maschine) → Bits: 12, Rate: 0,80 (subtil). Kaum hörbar, erzeugt aber die Bitcrusher-Textur",
          "Plugin 5: Kompressor → Ratio 2:1, Attack 30ms, Release 200ms, Threshold -12dB. Sanft — nur um die Dynamik des Chops zusammenzuhalten",
          "Prüfen: alle Plugins bypassen und mit dem Original vergleichen. Die bearbeitete Version sollte wärmer, etwas schmaler und weniger hell klingen — als käme sie von einer Schallplatte, nicht aus dem Computer"
        ],
        code: "EQ (Hi-Shelf -4dB@8k) → EQ (Lo-Shelf +2dB@120Hz) → Saturator (Tape 20%) → Lo-Fi (12bit/0,80) → Kompressor (2:1, 30ms A)"
      },
      {
        title: "Die R&B Chop-Behandlung (Offen und Warm)",
        body: "R&B-Chops sollen schweben — offenes Reverb, sanfte Kompression, keine Lo-Fi-Verarbeitung. Das Gegenteil von Boom Bap.",
        steps: [
          "Chop-Gruppen-Kanal im Mixer auswählen",
          "Plugin 1: EQ → High-Shelf-Schnitt bei 12.000 Hz, -2dB (subtil — entfernt nur Härte ohne das Sample abzudumpfen)",
          "Plugin 2: EQ → Sanftes Low-Mid-Dip bei 300–400 Hz, -1,5dB. Entfernt den 'Boxiness'-Sound, der Samples wie in einem kleinen Raum klingen lässt",
          "Plugin 3: Raum → Bloom-Modus, Größe 0,55, Decay 1,5s, High Cut 5kHz, Wet 25%. Das ist die 'Luft', die R&B-Samples schweben lässt",
          "Plugin 4: Kompressor → Ratio 1,5:1, Attack 50ms (sehr langsam — Transienten atmen lassen), Release 400ms. Kaum das Signal berührend",
          "Keine Sättigung. Kein Lo-Fi. R&B-Samples werden für einen sauberen, modernen Klang verarbeitet, nicht Vintage",
          "Den Chop leicht pannen: hat das Sample ein starkes Links-Rechts-Stereobild, mit einem Stereo-Widener bei 30% verbessern — nur ein Hauch Breite"
        ],
        code: "EQ (-2dB@12k, -1,5dB@350Hz) → Raum (Bloom, 1,5s, 25%) → Kompressor (1,5:1, 50ms A)"
      },
      {
        title: "Hip-Hop-Chop: Sidechain und Grit",
        body: "Moderne Hip-Hop-Chops werden hart komprimiert und sidechainen zur Kick. Das erzeugt das pumpende, atmende Gefühl, bei dem das Sample bei jedem Kick-Hit duckt.",
        steps: [
          "Plugin 1: Guitar Rig 7 → Tube Compressor Komponente, Intensity auf 40%. Fügt harmonische Sättigung neben Kompression hinzu",
          "Plugin 2: Kompressor für Sidechain → Kompressor auf dem Chop-Kanal hinzufügen. Sidechain-Eingang auf den Kick-Pad-Kanal setzen",
          "Sidechain-Einstellungen: Ratio 5:1, Attack 0ms, Release 80ms. Threshold bis zu 3–5dB Gain-Reduktion bei Kick-Hits",
          "Plugin 3: EQ → High-Pass-Filter bei 40Hz (entfernt Sub-Inhalt aus dem Sample, der mit dem Kick-Sub kollidiert)",
          "Testen: Kick + Chop zusammen anhören. Bei jedem Kick-Hit soll der Chop leicht ducken. Man sollte es spüren, nicht offensichtlich hören",
          "Sidechain-Release anpassen: kürzer (60ms) = enger, offensichtlicheres Pumpen. Länger (120ms) = subtil, groovig",
          "Sicherstellen, dass der Kernfrequenzbereich des Chops (200–4000Hz) vom Sidechain unberührt bleibt — das Dip soll im Sub und unteren Mitten passieren"
        ]
      },
      {
        title: "Tempo- und Warp-Probleme beheben",
        body: "Wenn ein Chop leicht aus dem Takt klingt oder pitch-verwarppt, sind das die spezifischen Korrekturen.",
        steps: [
          "Chop klingt nach oben/unten gepitcht: den Tune-Parameter des Pads in Halbtönen anpassen. Auch prüfen, ob Warp aktiviert ist — im Engine-Tab nach 'Warp'-Toggle suchen und für nicht-zeitgestreckte Samples AUSSCHALTEN",
          "Chop klingt gehetzt oder schleppend: das BPM des Quell-Samples stimmt nicht mit dem Projekt überein. TAP nutzen, um das Projekt-BPM zuerst auf das tatsächliche Sample-Tempo einzustellen. Dann Warp EIN mit Modus 'Standard' — korrigiert das Timing",
          "Chop klingt flamig (als wäre er verdoppelt): zwei Pads lösen denselben Slice aus. Prüfen, ob Pad Link versehentlich aktiv ist. Auch prüfen, ob versehentlich zwei Events auf demselben Schritt platziert wurden",
          "Chop klingt dünn nach Transient-Erkennung falsch geschnitten: der Slice hat den Attack abgeschnitten. Behebung: im Sample Edit den Slice-Punkt-Marker greifen und 5–10ms vor den Transient-Start nach links ziehen",
          "Chop klingt stotternd an Loop-Punkten: das Loop-Ende hat keine Stille vor dem Neustart. Ein kurzes Fade-Out am Ende des Samples hinzufügen (im Sample Edit: 'Fade Out' suchen und auf 10–20ms setzen)"
        ]
      },
      {
        title: "Zwei Chops zusammen layern",
        body: "Die fortgeschrittenste Chopping-Technik: zwei Samples aus verschiedenen Packs layern, so dass sie wie ein kohärenter Loop klingen.",
        steps: [
          "Chop A (z.B. einen melodischen Akkord-Loop aus Soulful Dreams) auf Pad 1 laden",
          "Chop B (z.B. eine Vinyl-Rausch-Textur aus Bunny oder Weekday) auf Pad 2 laden",
          "Beide mit Pad Link auslösen: SHIFT + PAD LINK → Pad 1 antippen, dann Pad 2 antippen",
          "Chop A EQen: Mitten und Höhen behalten (100Hz bis 12kHz). Boom-Bap-Stack oder R&B-Behandlung von oben anwenden",
          "Chop B EQen: nur die tiefen und hohen Extreme behalten — Band-Pass-Filter bei 2kHz, sehr breit (2 Oktaven). Das macht es texturreich, nicht melodisch",
          "Chop B-Lautstärke auf -12dB unter Chop A setzen. Kaum solo hörbar, aber im Mix spürbar",
          "Optional: Lo-Fi nur auf Chop B (nicht A) — gibt der Texturschicht einen anderen, griffigeren Charakter als das Haupt-Sample",
          "Testen: Chop B stumm schalten und anhören. Entstummen und anhören. Der Unterschied sollte sich wie mehr Leben anfühlen, nicht wie ein zweites Sample"
        ]
      }
    ]
  },
];

export const CHOPLAB_DE_PACKS: ChopLabDePackProfile[] = [
  {
    name: "Revival",
    type: "Soul / Gospel / Funk",
    bpmRange: "85–100 BPM",
    choppabilityLabel: "mittel",
    primaryTechnique: "2-Takt-Loop mit minimalem Slicen",
    bestChops: "Vollband-Breakdowns, Akkord-Stabs, Orgel-Swells",
    tips: [
      "Revivals Vollensemble-Abschnitte eignen sich am besten als einzelne 2-Takt-Loops — nicht über-choppen. Der Reichtum liegt in der vollständigen Arrangierung.",
      "Nach Gospel-Chor-Momenten suchen — ein einzelner gehaltener Akkord-Hit wird ein unglaublicher Stab-Chop.",
      "Die Orgel- und Keys-Elemente funktionieren oft gut umgekehrt — den umgekehrten Chop als Riser vor einem Chorus-Abschnitt laden.",
    ]
  },
  {
    name: "Soulful Dreams Vol 1 & 2",
    type: "Klassischer Soul / Vintage R&B",
    bpmRange: "70–95 BPM",
    choppabilityLabel: "mittel",
    primaryTechnique: "Manuelles Slicen für melodische Fragmente",
    bestChops: "Klavierläufe, Streicher-Akkord-Hits, Bass & Drum Pocket Takte",
    tips: [
      "Diese Packs haben wahrscheinlich viele lange Loops (8–16 Takte). Fokus auf Takte 3–4 und 7–8 legen, wo die Arrangierung in die Pocket kommt.",
      "Die Streicher-Hits sind Gold — jeden Moment suchen, wo Streicher auf einem Akkord landen, und als einzelnen 1-Beat-Slice schneiden.",
      "Das Soulful-Dreams-Sample mit einer Weekday-Lo-Fi-Textur bei -15dB darunter layern für Tiefe.",
    ]
  },
  {
    name: "Odyssey Soul Sample Pack",
    type: "Neo Soul / Contemporary Soul",
    bpmRange: "75–90 BPM",
    choppabilityLabel: "einfach",
    primaryTechnique: "Detect Transients für rhythmische Abschnitte",
    bestChops: "Saubere melodische Loops, Akkordfolgen, Vokal-Phrasen",
    tips: [
      "Neo-Soul-Packs sind meist mit Tonart und BPM beschriftet — diese Info zuerst nutzen, damit man es nicht nach Gehör suchen muss.",
      "Der 'saubere' Charakter von Neo-Soul-Samples bedeutet, dass sie in R&B und Hip Hop ohne Verarbeitung funktionieren — man braucht nicht immer den Boom-Bap-Stack.",
      "Nach jeder Phrase suchen, die wie eine 'Frage klingt' (eine unaufgelöste Akkordfolge) — diese sitzen wunderschön unter einem Verse ohne mit Vocals zu konkurrieren.",
    ]
  },
  {
    name: "Chronicles",
    type: "Hip Hop / Sample-basiert",
    bpmRange: "85–105 BPM",
    choppabilityLabel: "einfach",
    primaryTechnique: "Auto Slice (Detect Transients)",
    bestChops: "Drum-Breaks, melodische Loops zum Choppen",
    tips: [
      "Chronicles-artige Packs sind meist zum Choppen konzipiert — die Transient-Erkennung funktioniert beim ersten Versuch gut.",
      "Drum-Elemente als Ersatz für Werkskit-Sounds nutzen — Drum-Break bei -15dB unter dem Haupt-Kick/Snare laufen lassen für Grit.",
      "Die melodischen Loops sind typischerweise kürzer (1–2 Takte) und bereits für sofortige Pattern-Platzierung ohne starke Verarbeitung geeignet.",
    ]
  },
  {
    name: "Weekday (Cymatics)",
    type: "Lo-Fi / Indie / Chill",
    bpmRange: "75–95 BPM",
    choppabilityLabel: "einfach",
    primaryTechnique: "Laden und spielen — minimales Choppen nötig",
    bestChops: "Klaviertasten, Lo-Fi-Loops als Texturschichten, Vinyl-Rauschen",
    tips: [
      "Weekday-Samples sind für Lo-Fi-Charakter vorverarbeitet — keine weiteren Lo-Fi-Plugins oben drauf, sonst klingen sie zu degradiert.",
      "Die Klavier- und E-Piano-Samples funktionieren am besten, wenn man einfach die ersten 2 Beats nimmt und loopt — kein komplexes Slicen nötig.",
      "Die Vinyl-Knister-Elemente aus Weekday als Send-Effekt auf dem Drum-Bus nutzen für sofortigen Boom-Bap-Grit.",
    ]
  },
  {
    name: "Bunny (Cymatics)",
    type: "Lo-Fi / Bedroom / Soft",
    bpmRange: "65–85 BPM",
    choppabilityLabel: "einfach",
    primaryTechnique: "Textur-Layering, kein melodisches Choppen",
    bestChops: "Ambiente Pads, Rausch-Texturen, sanfte Keys-Phrasen",
    tips: [
      "Bunny ist bewusst 'soft' — funktioniert am besten als Texturschicht hinter einem härteren Sample, nicht als primärer Chop.",
      "Die Pad- und Ambient-Elemente sind lang (4–8 Takte) und zum Loopen konzipiert. Als-is auf ein Gruppen-Pad laden und kontinuierlich laufen lassen.",
      "Wenn man melodische Elemente aus Bunny choppt: nur in den ersten 2 Beats eines Takts verwenden — sie sind zu sanft für einen kompletten Loop.",
    ]
  },
  {
    name: "Sticks Toolkit",
    type: "Drum One-Shots & Fills",
    bpmRange: "N/A (One-Shots)",
    choppabilityLabel: "einfach",
    primaryTechnique: "Einzelne Hits direkt auf Pads laden",
    bestChops: "Rim-Hits, Snare-Fills, Hi-Hat-Variationen",
    tips: [
      "Sticks nicht als Loops choppen — einzelne Hits direkt auf separate Pads laden.",
      "Die Werkss-Snare durch eine Sticks-Snare zur Abwechslung ersetzen: dasselbe Pattern behalten, nur die Sound-Quelle auf dem Pad tauschen.",
      "Drum-Fills aus Sticks als One-Shot-Fill-Trigger nutzen: Fill auf ein Pad laden, auf One-Shot-Modus setzen und am Ende jeder 8 oder 16 Takte manuell auslösen.",
    ]
  },
];
