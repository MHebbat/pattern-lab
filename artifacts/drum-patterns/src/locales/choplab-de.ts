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
        title: "Deine Packs: Lange Soul-Loops (REVIVAL, Soulful Dreams, ODYSSEY, LayerCake, Ric Beats)",
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
        title: "Deine Packs: Contemporary Packs (Weekday, BUNNY Pack — Cymatics)",
        body: "Weekday ist atmosphärischer 80er Synth inspiriert von The Weeknds Dawn FM. BUNNY Pack ist Latin Trap inspiriert von Bad Bunny. Kein Lo-Fi — beide sind modern und produktionsbereit.",
        steps: [
          "Diese Samples haben meist 4 oder 8 Takte bei festem BPM — Dateinamen auf BPM-Infos prüfen",
          "In Maschine 'Warp' beim Laden ausschalten, außer das BPM passt nicht zum Projekt",
          "Für Weekday: atmosphärische Synth-Melodie-Loops clean über dem Drum-Pattern nutzen oder harte Synth-Akkord-Hits als 1-Beat-Stabs für Hooks und Übergänge choppen",
          "Für BUNNY Pack: die Latin-Melodie-Loops für exotischen Charakter nutzen, oder die Latin-Percussion-One-Shots auf Pads als Akzent-Hits auf Offbeats laden",
          "Diese Packs funktionieren am besten gelayert: ein zeitgenössischer Synth- oder Latin-Loop als atmosphärisches Bett, mit einem Chop aus Soulful Dreams oder REVIVAL Soul Melodies als primäre Melodie obendrauf"
        ]
      },
      {
        title: "Deine Packs: Drums (Stickz, Diginoiz Boom Bap Drums) & Orchestral Soul (CHRONICLES)",
        body: "Drum-Packs und Soul-Melodie-Packs funktionieren völlig verschieden. Drum-Loops nicht choppen — Hits laden. CHRONICLES nicht als Rhythmus-Track laden — es ist reines Melodie-Material.",
        steps: [
          "Stickz Hip-Hop Toolkit und Diginoiz Boom Bap Drums: einzelne Hits (Kick, Snare, Hat One-Shots) direkt in Maschine-Pads laden. Die Loops nicht choppen — die One-Shots nutzen",
          "CHRONICLES Soul Melodies: das ist ALLES Melodie — üppige 70er Orchestral-Soul-Arrangements. Streicher-, Blechbläser- und Akkord-Arrangements zum Choppen und Resampling suchen. Keine Drum-Breaks hier",
          "CHRONICLES Loops slicen sauber mit Auto Slice — die orchestralen Akkordwechsel erzeugen klare Transient-Punkte, die Maschine automatisch erkennt",
          "Einen CHRONICLES Akkord-Stab auf einem Pad und den vollen Loop auf einem anderen laden — den Stab auf Schlüsselmomente triggern und den Loop dazwischen atmen lassen",
          "Stickz Drum-Fills: als One-Shot-Trigger laden. Am Ende jede 8 oder 16 Takte manuell auslösen für sofortige Variation ohne Pattern-Umprogrammierung"
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
        tip: "Am besten für: Drum-Breaks aus CHRONICLES Soul Melodies, Stickz Hip-Hop Toolkit und alle rhythmischen Elemente in REVIVAL Soul Melodies."
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
        tip: "Am besten für: Klavierläufe und Akkord-Stabs aus Soulful Dreams Vol 1 & Vol 2, ODYSSEY Soul Melodies. Jedes melodische Sample, bei dem Transient-Erkennung falsche Schnitte macht."
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
        tip: "Packs dafür: Soulful Dreams Vol 1 & Vol 2 (2-Takt-Pocket-Abschnitt nutzen), ODYSSEY Soul Melodies (Chorus-Pocket nutzen), REVIVAL Soul Melodies (die Vollband-Abschnitte)."
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
    name: "REVIVAL Soul Melodies",
    type: "90er Hip-Hop Soul / Roc-A-Fella-Ära",
    bpmRange: "85–100 BPM",
    choppabilityLabel: "mittel",
    primaryTechnique: "2-Takt-Loop clean oder Stab-Chop aus Stems",
    bestChops: "Vintage-Melodie-Loops, üppige Harmonien, dreckige Groove-Stabs",
    tips: [
      "REVIVAL huldigt der Roc-A-Fella-Ära — Jay-Z, Kanye, Beanie Sigel. Vintage-Melodien und reiche Harmonien mit 90er Hip-Hop-Grit, kein Gospel.",
      "Enthält 20 Melodie-Samples plus vollständige Stems — die Stems nutzen, um einzelne Instrumente zu isolieren (nur Keys, nur Streicher) für sauberere, flexiblere Chops.",
      "Bei 88–92 BPM mit Boom-Bap-Swing clean laden, Saturator (Tape 25 %) hinzufügen und der Roc-A-Fella-Charakter kommt sofort durch.",
    ]
  },
  {
    name: "Soulful Dreams Vol 1 & Vol 2",
    type: "Klassischer Soul / Vintage R&B",
    bpmRange: "70–95 BPM",
    choppabilityLabel: "mittel",
    primaryTechnique: "Manuelles Slicen für melodische Fragmente",
    bestChops: "Klavierläufe, Streicher-Akkord-Hits, Bass & Drum Pocket Takte",
    tips: [
      "Diese Packs haben wahrscheinlich viele lange Loops (8–16 Takte). Fokus auf Takte 3–4 und 7–8 legen, wo die Arrangierung in die Pocket kommt.",
      "Die Streicher-Hits sind Gold — jeden Moment suchen, wo Streicher auf einem Akkord landen, und als einzelnen 1-Beat-Slice schneiden.",
      "Das Soulful-Dreams-Sample mit einem atmosphärischen Weekday-Synth-Loop bei -15 dB darunter layern für zeitgenössischen Kontrast.",
    ]
  },
  {
    name: "ODYSSEY Soul Melodies",
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
    name: "CHRONICLES Soul Melodies",
    type: "Orchestral Soul / 70er Kino-Ästhetik",
    bpmRange: "70–100 BPM",
    choppabilityLabel: "einfach",
    primaryTechnique: "Sauberer 2-Takt-Loop oder Auto Slice auf Akkord-Hits",
    bestChops: "Üppige Streicher-Arrangements, orchestrale Akkord-Stabs, cineastische Soul-Loops",
    tips: [
      "CHRONICLES ist reines Melodie-Material — üppige Orchesterarrangements im Stil der 70er Soul-Kino-Ära, entwickelt für Produzenten wie Metro Boomin, Alchemist und Hit Boy. Keine Drums in diesem Pack.",
      "An jedem Akkordwechsel slicen und man erhält eigenständige Stabs. Verschiedene Stabs auf separate Pads laden und Akkordvariationen live mit dem microKEY spielen.",
      "Viele Loops funktionieren clean ohne Verarbeitung — nur Hochpass bei 60 Hz für den Sub-Bereich. Die Orchesterreichhaltigkeit übernimmt den Rest.",
    ]
  },
  {
    name: "LayerCake Emotions",
    type: "70er Vintage Soul / Analoge Wärme",
    bpmRange: "70–95 BPM",
    choppabilityLabel: "mittel",
    primaryTechnique: "Manuelles Slicen auf Akkordwechseln oder sauberer 2-Takt-Loop",
    bestChops: "Üppige Akkordfolgen, tiefe Basslinien, eingängige melodische Phrasen",
    tips: [
      "Emotions fängt das goldene Zeitalter des 70er Souls ein — 10 originale Kompositionen mit vollständigen Stems, analog-inspirierte Texturen direkt aus der Vinyl-Ära. Durchgehend cinematisches Feeling.",
      "Vollständige Stems inklusive — Bass, Keys oder Streicher unabhängig isolieren für flexibles Chopping, ohne sich auf das gesamte Arrangement festzulegen.",
      "Choppen, flippen oder Loops clean verwenden. Das sind vollständig arrangierte Kompositionen, keine reinen Loops — die 2-Takt-Gold-Ader mit der Pocket-Bar-Methode darin finden.",
    ]
  },
  {
    name: "LayerCake Soul Cinema Legends",
    type: "Cineastischer Soul / Soul-Cinema-Serie",
    bpmRange: "70–100 BPM",
    choppabilityLabel: "einfach",
    primaryTechnique: "Sauberer Loop oder Auto Slice auf orchestralen Hits",
    bestChops: "Cineastische Soul-Akkord-Loops, orchestrale Stabs, soulige melodische Phrasen",
    tips: [
      "Teil von LayerCakes Soul-Cinema-Serie — cineastische, üppige Soul-Arrangements speziell für Sample-basierte Produktion und Chopping entwickelt.",
      "Die orchestralen Akkordwechsel erzeugen saubere Transient-Punkte — Auto Slice funktioniert sehr gut. Jeder Akkordschlag wird zu einem eigenständigen Stab-Pad.",
      "Den vollen Loop zuerst clean über das Drum-Pattern legen, dann Chop-Stabs darüber hinzufügen. Der zwei-Layer-Ansatz (Loop + Stabs) ist die klassische Soul-Cinema-Technik.",
    ]
  },
  {
    name: "LayerCake Soul is Soul",
    type: "Vintage Soul / Originale Kompositionen",
    bpmRange: "70–100 BPM",
    choppabilityLabel: "mittel",
    primaryTechnique: "2-Takt-Pocket in der Komposition finden",
    bestChops: "Soul-Akkordfolgen, melodische Phrasen, Vintage-Drum-Pocket-Takte",
    tips: [
      "Originale Kompositionen im LayerCake-Stil — authentischer Vintage-Soul-Charakter mit moderner Produktionsqualität. Für Produzenten gemacht, die choppen und flippen.",
      "Die gesamte Komposition einmal vollständig anhören, bevor man choppt. Das Gold liegt meistens bei Takt 3–4 und 7–8, wo das Arrangement in den Pocket kommt.",
      "Einen Soul-is-Soul-Chop mit einem zeitgenössischen Element (Weekday Synth-Textur oder BUNNY Latin-Melodie) layern für einen Kontrast, der den Beat hervorstechen lässt.",
    ]
  },
  {
    name: "LayerCake Family Packs",
    type: "Vintage Soul / Thematische Serie",
    bpmRange: "70–100 BPM",
    choppabilityLabel: "mittel",
    primaryTechnique: "Manuelles Slicen für melodische Fragmente",
    bestChops: "Soul-Loop-Pocket-Takte, melodische Akkordschläge, Bass- & Drum-gesperrte Abschnitte",
    tips: [
      "LayerCake Family Packs sind thematische Sammlungen in derselben Vintage-Soul-Ästhetik — jedes Pack hat einen eigenen Charakter, teilt aber denselben hochwertigen Originalkompositions-Ansatz.",
      "Jedes Pack als separate Instrumenten-Palette behandeln — eines für üppige Streicher, eines für Keys-lastige Loops. Nicht alles in einem Beat vermischen.",
      "Die Pocket-Bar-Technik funktioniert hier besonders gut: Takt 3 oder 7 einer Komposition finden und man hat den kohärentesten 2-Takt-Chop.",
    ]
  },
  {
    name: "Ric Beats Soul Series",
    type: "RnB & Vintage Soul Bundle",
    bpmRange: "70–95 BPM",
    choppabilityLabel: "mittel",
    primaryTechnique: "Sauberer Loop oder manuelles Slicen für R&B- und Soul-Kontexte",
    bestChops: "R&B-Akkord-Loops, Vintage-Soul-Melodiephrasen, smooth Groove-Abschnitte",
    tips: [
      "Ric Beats Soul Series konzentriert sich auf RnB und Vintage Soul — warmer, smooth harmonischer Inhalt für R&B-Produktion und souligen Hip Hop.",
      "Diese Loops sind darauf ausgelegt, unter einem Vocal zu sitzen. Clean in voller Länge für R&B verwenden — kein schweres Chopping nötig, nur EQ und leichte Kompression.",
      "Den Loop-Abschnitt finden, wo die Akkordentwicklung am langsamsten ist (1 Akkord pro Takt) — das ist der nutzbarste Abschnitt für Vocal-Produktion.",
    ]
  },
  {
    name: "Ric Beats Legacy Bundle",
    type: "Vintage Soul Bundle",
    bpmRange: "70–100 BPM",
    choppabilityLabel: "mittel",
    primaryTechnique: "Pocket-Bar-Chop oder sauberer 2-Takt-Loop",
    bestChops: "Klassische Vintage-Soul-Loops, tiefe Groove-Abschnitte, Akkord-Stabs",
    tips: [
      "Legacy Bundle deckt Vintage Soul über verschiedene Eras ab — eine umfassende Sammlung warmer, staubiger Soul-Kompositionen für Sample-basierte Produktion.",
      "Der 'Legacy'-Charakter bedeutet, dass diese Loops bereits authentischen Vintage-Grit haben. Den Boom-Bap-Lo-Fi-Stack hinzufügen (Saturator Tape 25 % → Lo-Fi 12-Bit → EQ Hi-Shelf -4 dB) für sofortigen Classic-Sound.",
      "Legacy-Bundle-Loops mit Soul-Series-Loops vergleichen — sie sind oft in verschiedenen Tonarten. Einen Legacy-Loop und einen Soul-Series-Loop in komplementären Tonarten finden und layern.",
    ]
  },
  {
    name: "Mystic Samples Free Discovery Pack",
    type: "Kostenloses Sampler-Pack / Verschiedene Soul-Stile",
    bpmRange: "Verschieden",
    choppabilityLabel: "einfach",
    primaryTechnique: "Jeden Loop anhören — 1 Keeper finden",
    bestChops: "Was auch immer resoniert — Discovery-Packs sind zum Finden des eigenen Sounds",
    tips: [
      "Discovery-Packs sind Sampler-Kollektionen — nicht jeder Loop passt zum eigenen Stil. Das Ziel: 1–2 Loops finden, die man liebt, und diese meistern.",
      "Es ist kostenlos — jeden Loop durchhören und 1–5 bewerten. Nur mit 5-bewerteten Loops arbeiten. Den Rest sofort löschen oder archivieren.",
      "Jeden überzeugenden Loop notieren: Pack und Stil notieren und dann das vollständige kostenpflichtige Mystic-Samples-Pack suchen, das dazu passt.",
    ]
  },
  {
    name: "Diginoiz Boom Bap Drums",
    type: "Boom-Bap-Drum-One-Shots & Loops",
    bpmRange: "80–100 BPM",
    choppabilityLabel: "einfach",
    primaryTechnique: "Einzelne Hits auf Pads laden, Loops als Drum-Break-Fundament nutzen",
    bestChops: "Punchy Kicks, knackige Snares, Boom-Bap-Hi-Hat-Patterns",
    tips: [
      "Diginoiz Boom Bap Drums ist eine dedizierte Boom-Bap-Drum-Ressource — authentische Kick-, Snare- und Hat-Sounds mit dem richtigen Gewicht und Charakter für das Genre.",
      "Einzelne One-Shots direkt auf Maschine-Pads laden. Factory-Sounds Pad für Pad ersetzen — nicht alles auf einmal verwenden.",
      "Die Drum-Loops als Pattern-Fundament nutzen: einen Diginoiz-Loop laden, mit Auto Slice schneiden, dann einzelne Slices durch eigene programmierte Hits ersetzen für einen hybriden Ansatz.",
    ]
  },
  {
    name: "Weekday (Cymatics)",
    type: "Atmosphärisch / 80er Synth / Contemporary Hip Hop",
    bpmRange: "90–110 BPM",
    choppabilityLabel: "einfach",
    primaryTechnique: "Melodie-Loops clean verwenden oder Synth-Stab-Momente choppen",
    bestChops: "Atmosphärische Synth-Loops, 80er-Stil Akkord-Stabs, punchy moderne Drum-Hits",
    tips: [
      "Weekday ist inspiriert von The Weeknds Dawn FM — 80er Synth-Texturen und cineastische Atmosphären, kein Lo-Fi-Piano. Sauber, modern, cinematisch.",
      "Die Melodie-Loops am besten clean in voller Länge über das Drum-Pattern nutzen. Für Chops: harte Synth-Akkord-Hits (1-Beat-Stabs) isolieren für Hooks und Übergänge.",
      "Die Drum-Hits sind modern und punchy — als Ersatz- oder Layer-Hits über das Hauptkit laden für eine zeitgenössische Schärfe.",
    ]
  },
  {
    name: "BUNNY Pack",
    type: "Latin Trap / Urban Pop",
    bpmRange: "90–130 BPM",
    choppabilityLabel: "mittel",
    primaryTechnique: "Melodie-Loops clean verwenden oder lateinische Percussion als One-Shots laden",
    bestChops: "Lateinische Melodie-Loops, Trap-beeinflusste Synth-Stabs, rhythmische Latin-Percussion",
    tips: [
      "BUNNY ist inspiriert von Bad Bunnys Album 'Nadie Sabe Lo Que Va a Pasar Mañana' — Latin-Vibes gemischt mit schwerem Trap-Einfluss. Kein Lo-Fi, kein Bedroom-Sound.",
      "Die Melodie-Loops haben einen charakteristischen Latin-Klang, der im Hip Hop auffällt, wenn man etwas Exotisches möchte. Unter ein Boom-Bap-Pattern bei -6 dB layern.",
      "Die Latin-Percussion-One-Shots direkt auf Maschine-Pads mappen — als Akzent-Hits auf Offbeats für rhythmisches Flair, das das Standard-Kit nicht bietet.",
    ]
  },
  {
    name: "Stickz Hip-Hop Toolkit",
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
