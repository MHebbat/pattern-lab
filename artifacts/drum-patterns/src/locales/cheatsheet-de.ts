export type DeTip = {
  title: string;
  body: string;
  steps?: string[];
  badge?: string;
};

export type DeSection = {
  heading?: string;
  tips: DeTip[];
};

export type DeTab = {
  label: string;
  short: string;
  intro: string;
  sections: DeSection[];
};

export const CHEATSHEET_DE: Record<string, DeTab> = {

  "first-session": {
    label: "Erste Session",
    short: "Start",
    intro: "Neu bei Maschine oder startest du einen neuen Beat? Geh alle Schritte unten der Reihe nach durch. Am Ende hast du einen fertigen 1-Takt-Drum-Loop, bereit zum Weiterproduzieren.",
    sections: [
      {
        tips: [
          {
            badge: "Schritt 1",
            title: "Neues Projekt anlegen",
            body: "Ein konsequentes Namensschema spart Zeit, wenn du tief in einer Session steckst. Nutze es von Anfang an.",
            steps: [
              "Maschine MK3 einschalten, dann Maschine-Software auf dem Computer öffnen",
              "In der Software: FILE → New Project drücken (oder Cmd/Strg + N)",
              "Projekt benennen nach dem Muster: BEAT_[DATUM]_[GENRE]  z.B. BEAT_20260101_BOOMBAP",
              "Ordner wählen — alle Projekte in einem Root-Ordner ablegen (z.B. ~/Musik/PatternLab/)",
              "Speichern drücken — ein leeres Projekt mit 8 Groups (A–H) ist jetzt aktiv",
            ],
          },
          {
            badge: "Schritt 2",
            title: "BPM und Taktart einstellen",
            body: "BPM ist die erste kreative Entscheidung, die alles andere prägt. Vor dem Laden von Sounds einstellen — es beeinflusst, wie Samples abgespielt werden.",
            steps: [
              "Im oberen Bereich der Maschine-Software-Oberfläche das BPM-Display suchen",
              "In das BPM-Feld klicken und den Wert eingeben, oder am Gerät: SHIFT halten und den großen 4D Encoder drehen",
              "Boom Bap: 84–96 BPM  |  Hip Hop (modern): 75–95 BPM  |  R&B / Neo Soul: 70–88 BPM",
              "Taktart: für alle Standard-Drum-Patterns bei 4/4 belassen",
              "Tap Tempo: am Gerät SHIFT + TAP drücken, um das BPM durch Klopfen einzustellen",
            ],
          },
          {
            badge: "Schritt 3",
            title: "Groups organisieren",
            body: "Groups sind Maschines Drummaschinen. Eine Group = 16 Pads. Von Anfang an nach Funktion zu sortieren verhindert Chaos später.",
            steps: [
              "GROUP-Button am Gerät drücken — Pads A1–D4 repräsentieren jetzt die Groups A–H",
              "Group A (Pad A): Hauptschlagzeug — Kick, Snare, Hats, Clap, Shaker (Pads 1–8)",
              "Group B (Pad B): Extra-Percussion — Rimshot, Tambourine, zusätzliche Layer (optional)",
              "Group C (Pad C): Bass & Sub — Bass-Samples, 808 Sub, melodischer Bass (optional)",
              "Groups D–H: vorerst leer lassen — melodische Elemente kommen später dazu",
              "GROUP erneut drücken, um zurück in die Pad-Ansicht zu wechseln — du bist jetzt in Group A",
            ],
          },
          {
            badge: "Schritt 4",
            title: "Drum-Sounds laden",
            body: "Nutze jede Session dasselbe Pad-Layout, damit Muskelgedächtnis entsteht. Dieses Layout spiegelt den Standard-MPC-Workflow wider.",
            steps: [
              "Sicherstellen, dass du in Group A bist (GROUP drücken → Pad A antippen → GROUP erneut drücken)",
              "Pad 1 (A1): Haupt-Kick — punchy, starke Transiente, der Anker des Beats",
              "Pad 2 (A2): Snare / Clap — dein Hauptbackbeat-Sound",
              "Pad 3 (A3): Closed Hi-Hat — das rhythmische Rückgrat des Patterns",
              "Pad 4 (A4): Open Hi-Hat — dein 'Atem'-Akzent",
              "Pad 5 (A5): Clap oder Snap — sekundärer Backbeat-Layer",
              "Pad 6 (A6): Shaker / Tambourine — Groove-Kleber, der in 16tel-Noten läuft",
              "Pad 7 (A7): Rimshot — für Fills und Variationen",
              "Pad 8 (A8): Sub Kick / 808 — gestimmter Sub-Layer unter dem Haupt-Kick",
              "Laden: im Software-Pad doppelklicken, Samples durchsuchen → zum gewünschten Pack navigieren",
            ],
          },
          {
            badge: "Schritt 5",
            title: "Choke Groups einrichten",
            body: "Choke Groups sorgen dafür, dass Open und Closed Hi-Hat sich gegenseitig unterbrechen — wie ein echtes Becken. Ohne diese Einstellung klingen beide gleichzeitig und wirken unecht.",
            steps: [
              "Pad 3 (Closed Hi-Hat) in der Software auswählen",
              "In den Pad-Einstellungen den MIDI-Tab suchen → 'Choke Group' finden",
              "Choke Group von Pad 3 auf '1' setzen",
              "Pad 4 (Open Hi-Hat) auswählen",
              "Choke Group von Pad 4 ebenfalls auf '1' setzen (gleiche Group wie Closed Hi-Hat)",
              "Optional: Pad 2 (Snare) und Pad 7 (Rimshot) auf Choke Group 2 setzen, damit sie sich nicht überlagern können",
              "Test: einen Schritt programmieren, bei dem Open und Closed Hi-Hat überlappen — die Closed Hi-Hat muss die Open Hi-Hat unterbrechen",
            ],
          },
          {
            badge: "Schritt 6",
            title: "Erstes Kick-Pattern programmieren",
            body: "Mit dem einfachsten Kick-Pattern anfangen. Komplexität kommt später. Ziel ist es, den Groove zu fühlen, nicht sich selbst zu beeindrucken.",
            steps: [
              "Am Gerät STEP SEQ drücken — die Pads repräsentieren jetzt 16 Schritte",
              "Pad 1 (Kick) über die GROUP/PAD-Auswahl-Buttons selektieren",
              "Klassischer Boom-Bap-Einstieg: Schritte 1 und 9 drücken (Zählzeiten 1 und 3)",
              "Loop abspielen — zwei solide Kick-Hits pro Takt sollten zu hören sein",
              "Synkopierung hinzufügen: einen leichten Kick bei Schritt 11 (das 'Und' der Zählzeit 3) mit Velocity 70 einfügen",
              "Den 4D Encoder drücken (Velocity-Modus), um dem Kick auf Zählzeit 1 eine Velocity von 110 und auf Zählzeit 3 eine Velocity von 100 zu geben",
            ],
          },
          {
            badge: "Schritt 7",
            title: "Snare programmieren",
            body: "Snare auf Zählzeiten 2 und 4 ist das Fundament fast jeden Stils. Die Platzierung nicht überdenken — die Velocity macht den Unterschied.",
            steps: [
              "Im Step-Sequencer-Modus Pad 2 (Snare) auswählen",
              "Schritte 5 und 13 drücken (Positionen 2 und 4 in einem 16-Step-Grid)",
              "4D Encoder drücken, um in den Velocity-Modus zu wechseln",
              "Schritt 5 auf Velocity 100, Schritt 13 auf Velocity 105 setzen — die zweite Snare ist meistens etwas lauter",
              "Optional Ghost Note: einen Hit bei Schritt 3 oder 14 mit Velocity 35–45 hinzufügen",
              "Abspielen — Kick und Snare sollten zusammenklingen, ohne dass einer den anderen übertönt",
            ],
          },
          {
            badge: "Schritt 8",
            title: "Hi-Hats programmieren",
            body: "Hi-Hats bestimmen das Energieniveau und das Genre. Einfache 8tel klingen nach Boom Bap; dichte 16tel nach Hip Hop; schwere 16tel mit Swing fühlen sich wie R&B an.",
            steps: [
              "Im Step-Sequencer-Modus Pad 3 (Closed Hi-Hat) auswählen",
              "Boom Bap: Schritte 1, 3, 5, 7, 9, 11, 13, 15 drücken (jeder zweite Schritt = 8tel-Noten)",
              "Hip Hop: alle 16 Schritte drücken (jeder Schritt = 16tel-Noten)",
              "Velocity-Modus aktivieren → Downbeats (1, 5, 9, 13) auf Velocity 80, alle anderen auf 55 setzen",
              "Pad 4 (Open Hi-Hat) auswählen → einen einzelnen Hit bei Schritt 9 platzieren (klassische Boom-Bap-Position)",
              "Open-Hi-Hat-Velocity auf 75 setzen — es ist ein Akzent, nicht der lauteste Sound",
            ],
          },
          {
            badge: "Schritt 9",
            title: "Swing und Groove einstellen",
            body: "In Maschine wird Swing pro Group angewendet, was flexibler ist als bei einer MPC. Jetzt einstellen, bevor man sich an den quantisierten Sound gewöhnt.",
            steps: [
              "GROUP drücken → Group A auswählen (deine Drum-Group)",
              "Auf dem Touchscreen den zweiten Tab antippen — 'Groove'",
              "Aus dem Groove-Typ-Dropdown 'Swing' auswählen",
              "4D Encoder drehen, um den Amount einzustellen: 54% für Boom Bap, 52% für Hip Hop, 60–63% für R&B",
              "SHIFT + Encoder drücken, um in 0,1%-Schritten feinzustellen",
              "Pattern mit aktiviertem Swing abhören — es sollte sich anfühlen, als würde es atmen, nicht stolpern",
            ],
          },
          {
            badge: "Schritt 10",
            title: "Als wiederverwendbares Template speichern",
            body: "Du hast gerade den schwierigsten Teil erledigt: eine konfigurierte, organisierte, gegroovedete Drum-Group. Als Template speichern, um nie wieder bei null anzufangen.",
            steps: [
              "FILE → Save As drücken",
              "Als TEMPLATE_[GENRE] benennen — z.B. TEMPLATE_BOOMBAP oder TEMPLATE_HIPHOP",
              "In deinem Templates-Ordner speichern (z.B. ~/Musik/PatternLab/templates/)",
              "Von nun an: neue Beats immer aus diesem Template öffnen und mit File → Save As unter neuem Projektnamen speichern",
              "Nächster Schritt: zu den Tabs 'Boom Bap', 'Hip Hop' oder 'R&B' wechseln für tiefere Technik-Anleitungen",
            ],
          },
        ],
      },
    ],
  },

  "core-controls": {
    label: "Steuerung",
    short: "Steuer.",
    intro: "Genaue Button-Pfade und Display-Navigation für jeden wesentlichen Maschine-MK3-Vorgang. Hardware-zuerst — jede Anweisung beginnt mit dem, was am Gerät gedrückt werden muss.",
    sections: [
      {
        heading: "Step Sequencer",
        tips: [
          {
            title: "Step Sequencer öffnen",
            body: "Der Step Sequencer ist der Ort, wo Drum-Patterns Schritt für Schritt aufgebaut werden. Jedes Pad = eine 16tel Note. Leuchtende Pads = aktive Hits.",
            steps: [
              "STEP SEQ-Button drücken (oberer linker Bereich des MK3, über den Pads)",
              "Die 16 Pads repräsentieren jetzt die 16 Schritte des Patterns",
              "Mit den GROUP/PAD-Buttons auswählen, welches Instrument-Pad bearbeitet wird",
              "Beliebigen Schritt-Pad drücken, um ihn ein (leuchtend) oder aus (dunkel) zu schalten",
              "SHIFT + Pfeil links/rechts nutzen, um zwischen Takten zu wechseln bei Patterns länger als 1 Takt",
            ],
          },
          {
            title: "Schrittauflösung ändern (1/16 → 1/32 → 1/64)",
            body: "Feinere Auflösungen für Hi-Hat-Rolls oder Triolen-Fills nutzen, während Kicks und Snares bei 1/16 bleiben.",
            steps: [
              "Im Step-Sequencer-Modus SHIFT + STEP SEQ drücken",
              "Der Bildschirm zeigt verfügbare Auflösungen: 1/4, 1/8, 1/16, 1/32, 1/64",
              "4D Encoder drehen, um die Auflösung auszuwählen",
              "Encoder drücken, um zu bestätigen",
              "Auflösung ist pad-spezifisch — zuerst zum Hi-Hat-Pad wechseln, auf 1/32 stellen, dann zurück zur Kick bei 1/16",
            ],
          },
          {
            title: "Velocity pro Schritt einstellen",
            body: "Velocity-Variation ist der Unterschied zwischen einem roboterhaften Pattern und einem menschlichen Groove. Ghost Notes: 30–50. Normale Hits: 70–90. Akzente: 100–120.",
            steps: [
              "Step-Sequencer-Modus aufrufen und das gewünschte Pad auswählen (z.B. Snare)",
              "4D Encoder drücken — Bildschirm wechselt in den Velocity-Modus",
              "Die Pads zeigen jetzt Velocity-Balken statt Ein/Aus",
              "Einen Schritt-Pad gedrückt halten und den 4D Encoder auf/ab bewegen, um seine Velocity anzupassen",
              "Oder: Schritt-Pad gedrückt halten und den Touch-Strip links der Pads verwenden",
              "Encoder erneut drücken, um in den Schritt-Bearbeitungsmodus zurückzukehren",
            ],
          },
        ],
      },
      {
        heading: "Groove & Swing",
        tips: [
          {
            title: "Group-Swing einstellen",
            body: "In Maschine wird Swing pro Group angewendet. Die Kick-Group kann straight bleiben, während die Hi-Hat-Group MPC-ähnlichen Swing hat — wie eine echte MPC3000.",
            steps: [
              "GROUP-Button drücken (obere Reihe, linke Seite)",
              "Die gewünschte Group für den Swing auswählen (A–H, auf den Pads angezeigt)",
              "Auf dem Bildschirm zum zweiten Tab navigieren: 'Groove'",
              "4D Encoder drehen, um 'Swing' aus den Groove-Optionen auszuwählen",
              "SHIFT halten und Encoder drehen, um den Prozentwert einzustellen",
              "50% = straight  |  54–58% = klassischer Boom Bap  |  60–65% = schwerer R&B-Swing",
              "Für jede Group wiederholen — Hats und Kicks können unterschiedliche Swing-Werte haben",
            ],
          },
          {
            title: "Pattern humanisieren",
            body: "Humanize fügt zufällige Timing- und Velocity-Abweichungen hinzu — verwandelt maschinen-perfekte Patterns in etwas, das atmet. Nur auf Hats und leichte Percussion anwenden.",
            steps: [
              "Sicherstellen, dass das zu humanisierende Pattern aktiv ist",
              "Auf dem MK3-Touchscreen 'Edit' im Pattern-Menü antippen",
              "'Humanize' antippen — ein Menü mit zwei Reglern erscheint: Timing und Velocity",
              "Timing einstellen: 8–12 Ticks für subtiles Feeling, 15–20 Ticks für lockeres Feeling",
              "Velocity einstellen: 15–25 für natürliche Dynamik, 30+ klingt zu zufällig",
              "'Apply' antippen — dauerhaft für dieses Pattern. Mit Strg+Z rückgängig machen, falls nötig",
            ],
          },
        ],
      },
      {
        heading: "Live-Performance",
        tips: [
          {
            title: "Note Repeat für Hat-Rolls verwenden",
            body: "Note Repeat feuert ein Pad in einem festgelegten Rhythmus, solange es gehalten wird. Für Hi-Hat-Rolls und Triolen-Fills in Echtzeit während der Aufnahme.",
            steps: [
              "NOTE REPEAT-Button drücken (über den Pads, rechte Seite)",
              "Das untere Display zeigt Rate, Gate und weitere Einstellungen",
              "Knopf 1 drehen, um die Rate auszuwählen: 1/8, 1/16, 1/32, 1/32T (Triole)",
              "Knopf 2 drehen, um Gate einzustellen (niedrig = enger, staccato; hoch = breit, legato)",
              "Beliebiges Pad gedrückt halten — es feuert mit der gewählten Rate",
              "Note Repeat einrasten: NOTE REPEAT halten + Pad einmal antippen",
              "NOTE REPEAT erneut drücken, um den Modus zu verlassen",
            ],
          },
          {
            title: "Knob-Automation live aufnehmen",
            body: "Echtzeit-Automation für jeden Knob aufnehmen — Filter-Cutoff, Pitch, Reverb-Send — direkt ins Pattern, während es läuft.",
            steps: [
              "Wiedergabe starten (PLAY drücken)",
              "REC-Button halten — nicht drücken, halten",
              "Während REC gehalten wird, einen beliebigen Knob am Gerät drehen (Filter, Volume, Pitch)",
              "Maschine nimmt die Knob-Bewegungen als Automation ins Pattern auf",
              "REC loslassen, um die Aufnahme zu beenden",
              "Zum Abhören abspielen",
              "Zum Bearbeiten: SHIFT + den automatisierten Knob drücken, um die Automation-Kurve anzuzeigen",
            ],
          },
        ],
      },
      {
        heading: "Routing",
        tips: [
          {
            title: "Choke Group einrichten",
            body: "Choke Groups sorgen dafür, dass Open und Closed Hi-Hats sich gegenseitig unterbrechen — genau wie ein echtes Becken. Ohne diese Einstellung klingen sie gleichzeitig und wirken unecht.",
            steps: [
              "Das Pad für die Closed Hi-Hat drücken, um es auszuwählen",
              "Auf dem Touchscreen den 'MIDI'-Tab antippen",
              "'Choke Group' suchen — auf '1' setzen (oder eine Zahl von 1–16)",
              "Jetzt das Open-Hi-Hat-Pad auswählen",
              "Die gleiche Choke-Group-Nummer zuweisen",
              "Test: ein Pattern abspielen, bei dem Open und Closed Hi-Hat überlappen — die Closed Hi-Hat unterbricht jetzt die Open Hi-Hat",
              "Das gleiche Prinzip gilt für jedes Paar, das sich gegenseitig stummschalten soll",
            ],
          },
          {
            title: "Pads verknüpfen (mehrere Sounds gleichzeitig auslösen)",
            body: "Pad Link feuert mehrere Pads von einem einzigen Trigger. Genutzt, um einen Sub-Kick mit einem punchy Kick zu layern, oder einen Clap mit einem Rimshot.",
            steps: [
              "SHIFT + PAD LINK drücken",
              "Das Pad antippen, das als 'Master'-Trigger fungieren soll (z.B. Haupt-Kick auf Pad 1)",
              "Dann jedes Pad antippen, das gleichzeitig feuern soll (z.B. Sub-Kick auf Pad 8)",
              "Beide Pads feuern, wann immer Pad 1 ausgelöst wird",
              "Link entfernen: Vorgang wiederholen und das verknüpfte Pad zum Abwählen antippen",
              "Jedes verknüpfte Pad kann weiterhin unabhängig bearbeitet werden (separates EQ, FX, Routing)",
            ],
          },
        ],
      },
    ],
  },

  "boom-bap": {
    label: "Boom Bap",
    short: "Boom",
    intro: "So wird SP-1200- und MPC3000-Magie in Maschine nachgebaut. Alle Techniken hier basieren auf dem Ansatz von Havoc, Premier, Pete Rock und 9th Wonder für Drums.",
    sections: [
      {
        heading: "Swing & Timing",
        tips: [
          {
            title: "MPC-Swing einstellen (54–58%)",
            body: "Die MPC3000 lief mit einem festen Swing-Timing. In Maschine ist 54% bei 90 BPM das nächste Äquivalent. So wird es exakt eingestellt.",
            steps: [
              "GROUP drücken → Drum-Group auswählen (z.B. Group A)",
              "Auf dem Touchscreen den zweiten Tab antippen: 'Groove'",
              "Groove-Typ-Dropdown antippen → 'Swing' auswählen",
              "4D Encoder drehen, um den Amount auf 54% einzustellen (Bildschirmwert beobachten)",
              "SHIFT + Encoder drücken, um in 0,1%-Schritten feinzustellen",
              "Für jede Group wiederholen — Kick+Snare zusammen, Hats separat bei 56–58%",
              "Groove testen, indem das Pattern abgespielt und ±1% angepasst wird, bis es einsetzt",
            ],
          },
          {
            title: "Ghost-Snare-Workflow",
            body: "Ghost Snares sind der Herzschlag des Boom Bap. Sie füllen die Mikro-Zwischenräume zwischen den Haupt-Snare-Hits und lassen das Pattern lebendig wirken.",
            steps: [
              "Step Sequencer öffnen, Snare-Pad auswählen",
              "4D Encoder drücken, um in den Velocity-Modus zu wechseln",
              "Schritte bei Positionen 2, 7, 14 oder 15 hinzufügen (Lücken zwischen den Haupt-Hits auf 4 und 12)",
              "Diese Schritte auf Velocity 30–45 setzen: Schritt gehalten halten und Encoder nach unten bewegen",
              "Die Haupt-Snare auf Schritten 4 und 12 sollte bei Velocity 100–115 bleiben",
              "Abspielen — Ghost Notes sollten zu fühlen, kaum zu hören sein",
              "Pro-Tipp: einen Ghost-Schritt ±2 Ticks spät im Event-Editor nudgen (SHIFT + EVENTS) für extra Lockerheit",
            ],
          },
        ],
      },
      {
        heading: "Sound Design",
        tips: [
          {
            title: "Kick auf das Sample stimmen",
            body: "Boom Bap steht und fällt mit dem Kick-Tuning. Wenn der Kick nicht mit dem Sample-Chop harmoniert, klingt der Beat verstimmt — egal wie gut der Rest ist.",
            steps: [
              "Zuerst den Haupt-Sample-Chop laden — die Grundtonart nach Gehör identifizieren",
              "Das Kick-Pad auswählen",
              "Auf dem Touchscreen unter den Pad-Einstellungen den 'Tune'-Parameter antippen",
              "4D Encoder nutzen, um den Kick in Halbtonschritten nach oben oder unten zu stimmen",
              "Stoppen, wenn sich der Kick harmonisch 'innerhalb' des Samples anfühlt",
              "Sub-Kick: auf die gleiche Note wie der Haupt-Kick setzen, dann SHIFT + Encoder genau 12 Halbtöne tiefer (eine Oktave)",
              "Den Kick abspielen, während das Sample läuft — man sollte spüren, wie sie sich zusammenfügen",
            ],
          },
          {
            title: "Open-Hi-Hat-Platzierung (der 'Atem')",
            body: "Eine einzige gut platzierte Open Hi-Hat in einem Takt Boom Bap schafft natürlichen Atemraum, den Closed Hats allein nicht erreichen können.",
            steps: [
              "Step Sequencer öffnen, Open-Hi-Hat-Pad auswählen",
              "Sicherstellen, dass sie in der gleichen Choke Group wie die Closed Hi-Hat ist",
              "Klassische Open-Hat-Position: Schritt 9 (die 16tel-Note nach Zählzeit 3)",
              "Zweite klassische Position: Schritt 6 (das 'Und' der Zählzeit 2)",
              "Velocity auf 70–80 setzen — Akzent, kein Statement",
              "Die Closed Hi-Hat sollte auf dem Schritt, auf dem die Open Hi-Hat landet, schweigen",
              "Eine Open Hi-Hat pro Takt. Das reicht meistens.",
            ],
          },
          {
            title: "Lo-Fi Bitcrusher-Stack",
            body: "Das SP-1200-Grit entsteht durch eine bestimmte Effektkette. So wird sie in Maschines integrierten Effekten nachgebildet.",
            steps: [
              "Die Haupt-Drum-Group im Mixer auswählen",
              "Plugin 1 hinzufügen: Saturator → Modus: Tape → Drive: 25–35%",
              "Plugin 2 hinzufügen: Lo-Fi → Bits: 12 (nicht niedriger — 8 ist zu stark degradiert) → Rate: 0,7",
              "Plugin 3 hinzufügen: EQ → High-Shelf-Filter bei 10 kHz → um 4–6 dB absenken",
              "Das entfernt digitale Härte und behält gleichzeitig Präsenz",
            ],
          },
        ],
      },
    ],
  },

  "hip-hop": {
    label: "Hip Hop",
    short: "HH",
    intro: "West Coast, East Coast, Dilla, Metro und alles dazwischen — korrekt programmiert. Diese Techniken decken sowohl klassische als auch zeitgenössische Hip-Hop-Produktion ab.",
    sections: [
      {
        heading: "Layering & Architektur",
        tips: [
          {
            title: "Den gelayerten Kick aufbauen",
            body: "Hip-Hop-Kicks bestehen fast immer aus zwei Sounds: einem punchy 'Click', der durchdringt, und einem Sub-'Boom', der im Körper zu spüren ist.",
            steps: [
              "Haupt-Kick (punchy, kurze Decay, starke Transiente) auf Pad 1 laden",
              "Sub-Bass-Hit oder Sinus-Wellen-Sample auf Pad 2 laden — auf die Tonart stimmen",
              "SHIFT + PAD LINK halten, Pad 1 antippen (Master), dann Pad 2 antippen (verknüpft)",
              "Jetzt feuern Pad 1 und Pad 2 zusammen",
              "Auf dem Kanal von Pad 1: leicht bei 60–100 Hz boosten für Körper",
              "Auf dem Kanal von Pad 2: High-Pass-Filter über 150 Hz — nur den Sub behalten",
              "Ergebnis: ein Kick mit Punch-Layer oben und separat stimmbarem Sub darunter",
            ],
          },
          {
            title: "Snap vs. Clap: Den richtigen Sound wählen",
            body: "Ein Finger-Snap klingt völlig anders als ein Clap. Snaps = West Coast / Bay Area. Claps = East-Coast-Anthems. Jeder sitzt anders im Mix.",
            steps: [
              "Für einen Snap: trockenes Finger-Snap-Sample laden, kein Reverb",
              "Den Snap leicht rechts pannen (R15–25) — Snaps sitzen typischerweise off-center",
              "Sehr kurzes Plate-Reverb hinzufügen (0,15s Decay) nur zum Einbinden in den Raum",
              "Für einen Clap: Clap-Sample laden, center gepannt",
              "Mittleres Raum-Reverb hinzufügen (0,4–0,6s Decay, Pre-Delay 10ms)",
              "Clap hart komprimieren: Ratio 6:1, Attack 2ms, Release 150ms",
              "Sekundären Clap um -2 Halbtöne gestimmt bei Velocity 60 darunter layern für Fülle",
            ],
          },
        ],
      },
      {
        heading: "Timing & Feel",
        tips: [
          {
            title: "Dilla-Timing: lockeres Feeling",
            body: "J Dilla hat Elemente absichtlich aus dem Grid heraus verschoben — manchmal früh, manchmal spät — um ein 'menschlich angetrunkenes' Feeling zu erzeugen. In Maschine geht das über den Event-Editor.",
            steps: [
              "Pattern zuerst bei 0% Swing, perfekt quantisiert programmieren",
              "SHIFT + EVENTS drücken, um den Event-Editor zu öffnen",
              "Das Event (Schritt) auswählen, das aus dem Grid verschoben werden soll",
              "Event gedrückt halten und den 4D Encoder drehen, um die Position in Ticks zu verschieben (1 Takt = 384 Ticks)",
              "Für 'spätes' Feeling: Kicks +6 bis +12 Ticks nach hinten schieben",
              "Für 'vorauseilendes' Feeling: Snares -4 bis -8 Ticks nach vorne schieben",
              "Humanize bei niedrigem Timing (8ms) nur auf Hats anwenden — NICHT auf Kicks und Snares",
              "Ergebnis: fühlt sich an wie ein Drummer, der mit Gefühl spielt, nicht wie eine Maschine",
            ],
          },
          {
            title: "Hi-Hat-Roll-Dichte steuern",
            body: "Hip-Hop-Hats reichen von einfachen 8teln bis zu dichten 16teln bis hin zu explosiven 32stel-Fills. Dichte in Echtzeit steuern, ohne das gesamte Pattern neu zu programmieren.",
            steps: [
              "Basis-Hat-Pattern im Step Sequencer bei 1/16-Auflösung programmieren",
              "Um einen 32stel-Roll hinzuzufügen: SHIFT + STEP SEQ drücken, Auflösung auf 1/32 ändern",
              "Zum Hi-Hat-Pad wechseln — jedes Pad repräsentiert jetzt eine 1/32-Note",
              "Den Fill nur in den Schritten programmieren, wo der Roll gewünscht ist (z.B. letzte 8 Schritte)",
              "Für das Haupt-Pattern zurück auf 1/16 wechseln",
              "Alternative: Note Repeat bei 1/32-Rate während der Live-Aufnahme — Hi-Hat-Pad beim Roll-Moment gedrückt halten",
              "Velocity der Roll-Noten progressiv setzen: 50→60→70→80 für ein natürliches Crescendo",
            ],
          },
          {
            title: "Sidechain-Kompression (Pump-Effekt)",
            body: "Sidechaining lässt Hats bei jedem Kick-Hit leicht ducken, was einen pumpenden, atmenden Groove erzeugt. Das ist in fast jedem modernen Hip-Hop-Track zu hören.",
            steps: [
              "Im Mixer den Kanal auswählen, der ducken soll (z.B. Hi-Hats)",
              "Das +-Symbol auf dem Kanal drücken → 'Compressor' wählen",
              "In den Compressor-Einstellungen 'Sidechain Input' suchen",
              "Sidechain Input von 'Internal' auf den Kick-Kanal ändern (meistens Ch1 oder Pad 1)",
              "Compressor einstellen: Attack 0ms, Release 80ms, Ratio 8:1",
              "Threshold so anpassen, dass bei Kick-Hits 4–6 dB Gain Reduction erreicht werden",
              "Release steuert, wie schnell Hats zurückkommen — kürzer = enger, länger = offensichtlicherer Pump",
            ],
          },
        ],
      },
    ],
  },

  "rnb": {
    label: "R&B",
    short: "R&B",
    intro: "Half-Time-Feels, Rimshot-Programmierung, Shaker und die Dynamik, die R&B atmen lässt. Diese Techniken decken Neo Soul, zeitgenössisches R&B und soulful Hip-Hop-Produktion ab.",
    sections: [
      {
        heading: "Groove-Architektur",
        tips: [
          {
            title: "Half-Time-Snare programmieren",
            body: "R&B und Neo Soul nutzen häufig eine Half-Time-Snare — die Snare fällt nur auf Zählzeit 3 (Schritt 9), was das Pattern wie auf halbem Tempo wirken lässt.",
            steps: [
              "Step Sequencer öffnen, Snare-Pad auswählen",
              "Snare-Hits von Schritten 5 und 13 entfernen (die normalen 2- und 4-Positionen)",
              "Einen Snare-Hit nur auf Schritt 9 platzieren (Zählzeit 3)",
              "Velocity dieser Snare auf 110–120 setzen — sie ist der einzige Hit und muss den ganzen Takt tragen",
              "Sehr breites Reverb hinzufügen (Plate oder Hall, 1,5–2,0s Decay, 40% Wet)",
              "Der Kick braucht jetzt mehr rhythmisches Interesse — Displacement und Synkopierung einsetzen",
              "Dieser Ansatz wird in Frank Ocean, D'Angelo und den meisten Neo-Soul-Tracks verwendet",
            ],
          },
          {
            title: "Shaker als Groove-Kleber",
            body: "Ein Shaker-Track in 16tel-Noten ist unsichtbar, wenn der Track laut ist — aber seine Abwesenheit ist sofort spürbar. Er füllt rhythmische Lücken und gibt dem Beat Vorwärtsdrang.",
            steps: [
              "Ein Shaker-Sample laden (oder ein Hi-Hat-Sample mit kurzer Decay und hohem Pitch)",
              "Im Step Sequencer ALLE 16 Schritte für den Shaker aktivieren",
              "4D Encoder drücken, um den Velocity-Modus zu öffnen",
              "Downbeats (Schritte 1, 5, 9, 13): Velocity auf 60 setzen",
              "Alle anderen Schritte (Upbeats): Velocity auf 30–40 setzen",
              "Dieses Akzent-Pattern erzeugt natürliches Atmen, obwohl alle 16 Schritte aktiv sind",
              "High-Pass-Filter auf dem Shaker-Kanal hinzufügen: alles unter 3 kHz abschneiden — der Click wird gebraucht, nicht der Körper",
              "Leicht rechts pannen, um vom Hi-Hat zu trennen",
            ],
          },
          {
            title: "Schwerer Swing für Neo Soul (60–65%)",
            body: "R&B-Groove erfordert mehr Swing als Boom Bap. 63% oder höher gibt Patterns diesen hypnotischen Schwung. Das Missverhältnis zwischen den Groups ist das Geheimnis.",
            steps: [
              "GROUP drücken → Hi-Hat- oder Percussion-Group auswählen",
              "Zum Groove-Tab auf dem Touchscreen navigieren",
              "Swing auf 63% setzen — bei diesem Wert fallen Upbeats merklich spät",
              "Swing der Kick-Group auf 57% setzen (etwas niedriger als Hats)",
              "Snare-/Rimshot-Group auf 60% Swing setzen",
              "Dieses Missverhältnis erzeugt ein mehrschichtiges Groove-Feeling — jeder Layer schwingt leicht anders",
              "Abspielen: Kick sollte geerdet klingen, Hats fallen in die Tasche",
            ],
          },
        ],
      },
      {
        heading: "Sound-Platzierung",
        tips: [
          {
            title: "Rimshot statt Snare einrichten",
            body: "R&B und Neo Soul nutzen oft einen Rimshot oder Side-Stick — trockener, zarter, sitzt höher in der Frequenz und kollidiert nicht mit Vocals.",
            steps: [
              "Rimshot- oder Side-Stick-Sample auf einem Pad laden (separat vom Snare-Pad)",
              "Anfangs kein Reverb — Rimshots sind im R&B typischerweise trocken",
              "Rimshot stimmen: SHIFT + Pad drücken, Tune finden, auf die Quinte der Tonart pitchen (in Am auf E stimmen)",
              "Velocity auf 80–90 setzen — präsent, aber nicht laut",
              "Falls Reverb hinzugefügt wird: nur kurzer Room (0,2s Decay, 20% Wet)",
              "Leicht links pannen (L10), um das Gefühl eines Live-Drummers zu erzeugen, der rechts sitzt",
              "Nicht komprimieren — die Transiente soll natürlich klicken",
            ],
          },
          {
            title: "Claps mit Breite layern",
            body: "Moderne R&B-Claps sind kein einzelner Sound — sie bestehen aus mehreren Clap-Samples, die im Stereofeld verteilt sind und ein breites, luftiges Gefühl erzeugen.",
            steps: [
              "Clap 1 auf Pad 4 laden: Haupt-Clap, center gepannt",
              "Clap 2 auf Pad 5 laden: sekundärer Clap, -1 oder -2 Halbtöne gepitcht",
              "Pad Link nutzen: SHIFT + PAD LINK halten, Pad 4 antippen (Master), dann Pad 5 (verknüpft)",
              "Pad 4 auf L20, Pad 5 auf R20 pannen — leichte Spreizung, nicht volles L/R",
              "Auf dem Kanal von Pad 5: 8–12ms Pre-Delay vor dem Reverb — klingt wie ein zweiter Clap aus anderem Winkel",
              "Stereo-Widener-Plugin auf dem Clap-Bus: Width auf 60% setzen",
              "Ergebnis: ein Clap, der horizontalen Raum im Mix füllt",
            ],
          },
        ],
      },
    ],
  },

  "fx-chains": {
    label: "FX-Ketten",
    short: "FX",
    intro: "Vollständige Routing-Pfade mit genauen Parameterwerten. Jede Signalkette unten kann direkt in Maschine übertragen werden. Als Ausgangspunkte nutzen und dann für die eigenen Samples anpassen.",
    sections: [
      {
        heading: "Bus-Processing",
        tips: [
          {
            title: "Boom-Bap-Lo-Fi-Stack",
            body: "Die vollständige Signalkette, die einen sauberen modernen Sound zu SP-1200/MPC3000-Grit verwandelt. Auf den Master-Drum-Bus anwenden.",
            steps: [
              "Im Mixer die Master-Drum-Group auswählen",
              "Plugin 1 hinzufügen: Saturator → Modus: Tape → Drive: 30% → Output: 0 dB",
              "Plugin 2 hinzufügen: Lo-Fi → Bits: 12 → Rate: 0,70 → Noise: 15%",
              "Plugin 3 hinzufügen: EQ → High-Shelf bei 10.000 Hz → Amount: -5 dB",
              "Plugin 4 hinzufügen: Compressor → Attack: 25ms → Release: 200ms → Ratio: 2:1 → Threshold: -12 dB",
              "Der Compressor am Ende hält die Dynamik — Boom Bap soll atmen, nicht pumpen",
              "Ausgangspegel prüfen: der Bus darf nicht clippen. Drive von Plugin 1 senken, falls nötig",
            ],
          },
          {
            title: "Kick-Kompression nach Genre",
            body: "Kicks brauchen je nach Stil unterschiedliche Kompression. Boom-Bap-Kicks brauchen Gewicht, Hip-Hop-Kicks brauchen Punch, R&B-Kicks brauchen Luft.",
            steps: [
              "Kick-Kanal im Mixer auswählen → Compressor hinzufügen",
              "BOOM BAP: Attack 8ms (Transiente durchlassen), Release 150ms, Ratio 3:1, GR -4 dB",
              "HIP HOP: Attack 2ms (Hit straffen), Release 80ms, Ratio 5:1, GR -6 dB",
              "R&B: Attack 20ms (volle Transiente klingen lassen), Release 300ms, Ratio 2:1, GR -2 dB",
              "Nach dem Compressor Transient Master hinzufügen: Attack +10 für Boom-Bap-Punch, -10 für weicheres R&B",
              "EQ für den Kick: 60–80 Hz boosten für Sub-Gewicht, 300–400 Hz absenken für weniger Dumpfheit",
            ],
          },
        ],
      },
      {
        heading: "Snare & Reverb",
        tips: [
          {
            title: "R&B-Snare-Reverb-Einrichtung",
            body: "R&B-Snares brauchen ein sehr spezifisches Reverb — zu kurz und sie wirken eingesperrt; zu lang und sie waschen den Vokal-Raum weg.",
            steps: [
              "Snare-Kanal im Mixer auswählen",
              "Plugin hinzufügen: Reverb (Maschines integriertes Reverb oder Room)",
              "Typ einstellen: Plate (für Rimshots) oder Hall (für volle Snares)",
              "Pre-Delay: 15–20ms — diese kleine Lücke trennt den trockenen Hit vom feuchten Nachhall",
              "Decay: 0,8s für Rimshot  /  1,5–2,0s für volle Snare  /  2,5s+ für Half-Time-Snare",
              "High-Cut am Reverb: auf 6 kHz setzen — Helligkeit aus dem Reverb-Nachhall entfernen",
              "Wet/Dry: 35–45% Wet — Reverb klar hören, aber den trockenen Hit nicht ertränken",
              "Width: 100% — Reverb voll stereo lassen, auch wenn der trockene Hit mono ist",
            ],
          },
        ],
      },
      {
        heading: "Hi-Hat-Filtering",
        tips: [
          {
            title: "Hi-Hat-Filtering nach Genre",
            body: "Das Filtern der Hi-Hat-Group ist einer der schnellsten Wege, das Genre-Feeling zu ändern. Offene, helle Hats = modern. Gefilterte, warme Hats = Boom Bap.",
            steps: [
              "Hi-Hat-Group im Mixer auswählen",
              "Plugin hinzufügen: EQ oder Filter",
              "BOOM BAP: Low-Pass bei 8.000 Hz — entfernt digitale Härte, fügt Wärme hinzu",
              "HIP HOP (modern): Low-Pass bei 14.000 Hz — subtile Wärme, behält Helligkeit",
              "R&B / NEO SOUL: Low-Pass bei 6.000 Hz + kleines Room-Reverb (0,2s) — dickes, warmes Feeling",
              "Optional: leichte resonante Anhebung bei 4.000 Hz (+2 dB) für Snap und Präsenz",
              "Filter-Cutoff automatisieren: bei Fills kurz aufmachen, dann wieder schließen",
            ],
          },
          {
            title: "Template-Pattern aufbauen (Als Ausgangspunkt speichern)",
            body: "Ein Template-Pattern hat alle Sounds geladen, Pegel gesetzt, FX-Ketten angewendet und Choke Groups konfiguriert. Jeden Beat damit zu beginnen spart 20–30 Minuten pro Session.",
            steps: [
              "Neues Projekt erstellen und Core-Sounds auf Pads 1–8 in Group A laden",
              "Alle Choke Groups setzen: Open Hi-Hat + Closed Hi-Hat → Group 1; Snare + Rimshot → Group 2",
              "Basis-Effektketten (siehe oben) auf jedem Kanal anwenden",
              "Pegel setzen: Kick -6 dB, Snare -8 dB, Hats -12 dB, Shaker -18 dB relativ zu 0 dB",
              "Group-Swing-Standards setzen: Kick-Group 52%, Hat-Group 55%, Perc-Group 57%",
              "Als Projekt speichern: FILE → Save As → 'TEMPLATE_[eigenes Genre]' benennen",
              "Dieses Projekt zu Beginn jedes neuen Beats duplizieren — nie wieder von Null anfangen",
            ],
          },
        ],
      },
    ],
  },

  "song-building": {
    label: "Song-Aufbau",
    short: "Song",
    intro: "Wie man Beats aufbaut, die über 4–8 Takte wachsen, atmen und interessant bleiben. Pattern-Variation, Velocity-Architektur und Kick-Displacement — die drei Werkzeuge, die aus einem Loop einen Song machen.",
    sections: [
      {
        heading: "Pattern-Variation",
        tips: [
          {
            title: "Das A/B-Pattern-System",
            body: "Jeder professionelle Beat hat mindestens zwei Pattern-Variationen: den Haupt-Loop (A) und eine Variation (B). Das B-Pattern hat ein Element leicht verändert — so bleiben Beats interessant.",
            steps: [
              "Den Haupt-Loop als Pattern A in Scene 1 programmieren",
              "Pattern A in der Pattern-Liste rechtsklicken → Duplizieren",
              "Das Duplikat wird zu Pattern B — im Step Sequencer öffnen",
              "Genau EINE Sache ändern: einen Ghost-Kick bei Schritt 15 hinzufügen, Hi-Hat bei Schritt 15 füllen oder Snare verschieben",
              "In der Song-Ansicht A und B alle 4 oder 8 Takte abwechseln",
              "Pattern C als 'Fill'-Takt erstellen: läuft nur 1 Takt vor einem Sektionswechsel",
              "Fill-Pattern: Hi-Hat-Roll auf Schritten 12–15 hinzufügen oder Snare doppeln auf Schritten 12 und 13",
            ],
          },
        ],
      },
      {
        heading: "Velocity-Architektur",
        tips: [
          {
            title: "Velocity-Akzent-Architektur",
            body: "Die Form der Velocity-Akzente über einen Takt bestimmt, ob er vorwärts drängt oder zurücklehnt. Das ist das mächtigste Groove-Werkzeug in Maschine.",
            steps: [
              "Volles Pattern mit allen Schritten bei flacher Velocity 80 programmieren",
              "Velocity-Modus aktivieren (4D Encoder im Step Sequencer drücken)",
              "Zählzeit 1 (Schritt 1): auf 110 anheben — der 'Landungs'-Akzent, der stärkste Punkt",
              "Zählzeit 3 (Schritt 9): auf 100 anheben — zweite Stärke",
              "Zählzeiten 2 und 4 (Snare-Schritte 5 und 13): bei 80–90 für Boom Bap lassen, auf 100+ für Hip Hop anheben",
              "Alle Offbeat-Schritte: auf 55–65 für Ghost-Feeling senken, oder 70 für ein treibenderes Pattern",
              "Abspielen — das Pattern sollte sich anfühlen, als hätte es Schwerkraft, die auf Zählzeit 1 landet und dazwischen atmet",
            ],
          },
        ],
      },
      {
        heading: "Kick-Platzierung",
        tips: [
          {
            title: "Kick-Displacement-Techniken",
            body: "Den Kick vom exakten Downbeat wegzubewegen trennt interessante Grooves von langweiligen. Diese spezifischen Positionen erzeugen jeweils unterschiedliche Gefühle.",
            steps: [
              "Position 1 (Zählzeit 1): Standard-Anker — immer dabei",
              "Position 2 (das 'e' der Zählzeit 1): erzeugt Dringlichkeit und Vorwärtsdrang",
              "Position 3 (das 'Und' der Zählzeit 1): eine klassische Boom-Bap-Synkopierung",
              "Position 5 (das 'Und' der Zählzeit 2): gibt dem Pattern einen leanenden, Hip-Hop-Bounce",
              "Position 10 (das 'Und' der Zählzeit 3): klassische zweite Kick-Position im Boom Bap",
              "Position 11 (das 'a' der Zählzeit 3): R&B-Displacement, fühlt sich spät und groovend an",
              "Probiere: 1 + 10 für straight Boom Bap  |  1 + 5 + 10 für rollenden Hip Hop  |  1 + 11 für R&B-Pocket",
            ],
          },
        ],
      },
    ],
  },
};
