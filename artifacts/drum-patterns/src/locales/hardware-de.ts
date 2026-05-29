export type DeControl = {
  description: string;
  steps: string[];
  proTip?: string;
};

export const HARDWARE_DE: Record<string, DeControl> = {

  channel: {
    description: "Öffnet den Channel-Strip für das gewählte Pad — der Hauptort für Volume, Pan, Tuning und Output-Routing jedes Sounds.",
    steps: [
      "CHANNEL drücken, um die Channel-Ansicht zu öffnen",
      "Linkes Display: Volume, Pan, Tune, Pitch-Bend-Range",
      "Rechtes Display: Output-Routing, Choke Group, MIDI-Einstellungen",
      "4D Encoder drehen, um zwischen Parametern zu navigieren",
      "4D Encoder drücken, um einen Wert auszuwählen und zu bearbeiten",
    ],
    proTip: "CHANNEL im Step-Sequencer-Modus nutzen, um einzelne Hits zu stimmen, ohne die Pattern-Ansicht zu verlassen.",
  },

  plugin: {
    description: "Öffnet die Plugin-Seite — das Instrument auf dem aktuellen Pad (Battery, Kontakt, Massive X, etc.) und seine bearbeitbaren Parameter.",
    steps: [
      "PLUGIN drücken, um das Instrument des aktuellen Pads anzuzeigen",
      "Linkes Display zeigt Instrument-Macros und Parameter",
      "Rechtes Display zeigt den Plugin-Browser",
      "SHIFT + PLUGIN öffnet den Plugin-Browser zum Wechseln des Instruments",
    ],
  },

  arrange: {
    description: "Wechselt in die Song-/Arrange-Ansicht — die Timeline, auf der Scenes zu einer vollständigen Track-Struktur mit Intro, Verse, Hook und Outro angeordnet werden.",
    steps: [
      "ARRANGE drücken, um in den Song-Modus zu wechseln",
      "Pads repräsentieren Scene-Slots auf einer Timeline",
      "Linkes Display zeigt die Scene-Anordnung",
      "4D Encoder navigiert die Timeline nach links/rechts",
      "Pad gedrückt halten zum Auswählen; 4D Encoder drücken, um eine Scene zu bestätigen oder zu löschen",
    ],
  },

  mix: {
    description: "Öffnet den Mixer — vertikale Channel-Strips mit Pegeln, Sends und Inserts für alle 8 Groups und den Master-Bus.",
    steps: [
      "MIX drücken, um die Mixer-Ansicht zu öffnen",
      "Linkes Display zeigt die Group-Channel-Strips A–H",
      "Macro-Knöpfe 1–8 werden automatisch zu Group-Fadern A–H",
      "Einen Group-Button (A–H) drücken, um die Pad-Channel-Strips dieser Group anzuzeigen",
      "SHIFT + MIX öffnet den Master-/Cue-Kanal",
    ],
    proTip: "In der Mix-Ansicht sind die 8 Macro-Knöpfe deine Fader — der schnellste Weg, Drums, Bass und Melodien in einer Live-Session zu balancieren.",
  },

  perform: {
    description: "Performance-Modus — wendet Echtzeit-Effekte (Filter, Lo-Fi, Reverb) basierend auf Pad-Position und -Druck an. Aktiviert auch Scale-/Arp-/Chord-Performance.",
    steps: [
      "PERFORM drücken, um den Performance-Modus zu öffnen",
      "Pads werden zu einem skalen-quantisierten Layout oder Effekt-Bereich",
      "4D Encoder oder Touchscreen wählt die Tonleiter/Grundton",
      "SHIFT + PERFORM für erweiterte Performance-Einstellungen",
    ],
  },

  notes: {
    description: "Notes-Modus — verwandelt die Pads in eine chromatische oder skalen-gesperrte Tastatur mit markierten Akkord-Sets. Ideal für das Aufnehmen von Melodien, Basslinien und Akkordfolgen.",
    steps: [
      "NOTES drücken, um in den Notes-Modus zu wechseln",
      "Pads leuchten in einem skalen-basierten Layout auf (aktuell gewählte Tonleiter)",
      "Touchscreen oder 4D Encoder tippen, um Tonleiter und Grundton einzustellen",
      "Pads spielen — jedes Pad ist eine Note in der gewählten Tonleiter",
      "SHIFT + NOTES öffnet erweiterte Chord- und Arp-Einstellungen",
    ],
    proTip: "Mit aktiver Scale-Sperre ist jedes Pad in der Tonart — eine falsche Note ist unmöglich. Unverzichtbar für das schnelle Aufnehmen melodischer Ideen.",
  },

  shift: {
    description: "Der Haupt-Modifier. SHIFT halten und fast jeden anderen Button drücken, um dessen Sekundärfunktion aufzurufen. Die einzelne zeitsparendste Taste auf dem Gerät.",
    steps: [
      "SHIFT gedrückt halten und einen beliebigen Button drücken, um Sekundärfunktionen aufzurufen",
      "SHIFT + TAP: Tap Tempo (BPM durch Klopfen einstellen)",
      "SHIFT + 4D Encoder drehen: Feinabstimmung (0,1er Schritte statt 1er Schritte)",
      "SHIFT + Group-Button: ausgewählte Group stummschalten",
      "SHIFT + Pad: Quick-Edit-Modus für dieses Pad (Tune, Volume, Pan direkt)",
      "SHIFT + STOP: Neustart von Takt 1 ohne Abspielen zu stoppen",
    ],
    proTip: "Diese 5 Kombos kennen: Tap Tempo, Encoder fein, Group muten, Pad Quick Edit, Restart. Sie decken 90% aller SHIFT-Nutzung ab.",
  },

  "volume-knob": {
    description: "Hardware-Master-Ausgangslautstärke. Steuert Kopfhörer- und Hauptleitungs-Ausgangspegel unabhängig von den Software-Channel-Fadern.",
    steps: [
      "VOLUME-Knopf drehen (obere linke Reihe, ganz links)",
      "Nach rechts drehen erhöht den Ausgangspegel",
      "SHIFT + VOLUME-Knopf: Kopfhörerlautstärke steuern",
      "Dieser Knopf beeinflusst nicht die internen Software-Pegel — nur der Hardware-Ausgang",
    ],
  },

  "swing-knob": {
    description: "Direkte Hardware-Steuerung für den Groove-/Swing-Amount des aktiven Group-Patterns. Verschiebt die 2. und 4. 8tel-Note-Unterteilungen nach hinten, um Feel zu erzeugen.",
    steps: [
      "SWING-Knopf drehen (obere Reihe der Encoder)",
      "Nach rechts = mehr Swing; nach links = gerader (0% = quantisiert)",
      "Empfohlene Werte: Boom Bap 54%, Hip Hop 52%, R&B 60–65%",
      "SHIFT + SWING-Knopf: Swing in 0,1%-Schritten feinabstimmen",
      "Swing wird pro Group angewendet — zuerst die gewünschte Group auswählen",
    ],
    proTip: "Der MPC3000-Swing liegt genau bei 54%. Langsam eindrehen, während die Hats spielen — man spürt den genauen Moment, in dem er einsetzt.",
  },

  "tempo-knob": {
    description: "Direkte Hardware-BPM-Steuerung. Drehen, um das Tempo in Echtzeit zu ändern, während ein Pattern läuft — das richtige Feeling nach Gehör finden.",
    steps: [
      "TEMPO-Knopf drehen (obere Reihe, neben Swing)",
      "Nach rechts = BPM erhöhen; nach links = BPM senken",
      "SHIFT + TEMPO: BPM in 0,1er-Schritten feinabstimmen",
      "Wert wird live im Display angezeigt",
    ],
  },

  groups: {
    description: "8 Buttons zum Auswählen der aktiven Group (Instrument-Set). Jede Group hat 16 Pads mit Sounds. So wechselt man zwischen Drums, Bass, Akkorden und Melodien.",
    steps: [
      "GROUP-Button drücken, um in den Group-Auswahl-Modus zu wechseln",
      "Pads A1–H1 (obere Reihe) repräsentieren jetzt Groups A–H",
      "Das gewünschte Group-Pad antippen, um zu dieser Group zu wechseln",
      "GROUP erneut drücken, um in die Pad-Ansicht für diese Group zurückzukehren",
      "Empfohlene Zuordnung: A = Drums, B = Perc, C = Bass, D = Akkorde",
      "Mehrere Groups gleichzeitig bearbeiten: GROUP-Button halten und mehrere Pads antippen",
      "SHIFT + Group-Button: diese Group stummschalten (Mute-Toggle)",
    ],
    proTip: "A = Drums, C = Bass, D = Akkorde zuweisen. Das spiegelt den klassischen MPC-Drum/Bass/Keys-Workflow wider, den Producer seit den 90ern nutzen.",
  },

  scene: {
    description: "Scenes sind Schnappschüsse, welche Patterns gleichzeitig über alle Groups laufen. Damit werden Song-Sektionen definiert — Verse, Hook, Bridge, Outro.",
    steps: [
      "SCENE drücken, um in den Scene-Modus zu wechseln",
      "Pads repräsentieren Scene-Slots (bis zu 16 Scenes)",
      "Ein Pad drücken, um zu dieser Scene zu springen",
      "Eine neue Scene erstellen: SCENE halten + ein leeres Pad drücken",
      "Scene löschen: SCENE halten + das Pad gedrückt halten, bis es erlischt",
    ],
  },

  pattern: {
    description: "Patterns sind die einzelnen Beat-Loops. Jede Group kann mehrere Patterns für verschiedene Song-Sektionen haben. Zwischen ihnen wechseln ohne die Wiedergabe zu stoppen.",
    steps: [
      "PATTERN drücken, um in den Pattern-Modus zu wechseln",
      "Pads repräsentieren Pattern-Slots (bis zu 16 Patterns pro Group)",
      "Ein Pad drücken, um zu diesem Pattern zu springen (Wiedergabe läuft weiter)",
      "Neues Pattern: PATTERN halten + ein leeres Pad drücken",
      "Pattern löschen: PATTERN + ERASE + Pad drücken",
    ],
    proTip: "Pattern 1 = Verse, Pattern 2 = Hook für jede Group. Schnelles PATTERN + Pad-Wechsel ermöglicht sofortiges A/B-Vergleichen von Sektionen während der Beat läuft.",
  },

  events: {
    description: "Event-Edit-Modus — Zugang zur Schritt-Ereignisliste, um Notenpositionen in Ticks zu nudgen und Velocities feinabzustimmen. 1 Takt = 384 Ticks.",
    steps: [
      "SHIFT + EVENTS drücken, um den Event-Editor zu öffnen",
      "Mit dem 4D Encoder durch Events (Noten) navigieren",
      "Event auswählen und Encoder drehen, um die Position in Ticks zu verschieben",
      "Nach oben/unten drücken, um die Velocity des gewählten Events anzupassen",
      "Dilla-Timing: Kicks +8 bis +12 Ticks nach hinten schieben für 'spät' und geerdet",
    ],
  },

  variation: {
    description: "Bis zu 4 Variationen des aktuellen Patterns — Fills, Breakdowns und subtile Änderungen ohne ganz neue Pattern-Slots zu erstellen.",
    steps: [
      "VARIATION drücken, um den Variationen-Modus zu öffnen",
      "Pads 1–4 repräsentieren Variation A, B, C, D",
      "Zu einer anderen Variation wechseln, um sie zu bearbeiten",
      "Variation A ist das ursprüngliche Pattern; B/C/D sind Kopien zum Weiterentwickeln",
      "Pattern läuft beim Wechseln zwischen Variationen nahtlos weiter",
    ],
  },

  duplicate: {
    description: "Halten und Antippen, um alles zu kopieren — der schnellste Workflow, um auf bestehendem Material aufzubauen, ohne von Null anzufangen.",
    steps: [
      "DUPLICATE halten + das Pad/Pattern antippen, das kopiert werden soll",
      "Pattern duplizieren: DUPLICATE halten + das aktuelle Pattern-Pad antippen → zum Ziel-Pad tippen",
      "Sound duplizieren: DUPLICATE halten + das Quell-Pad antippen → Ziel-Pad antippen",
      "Group duplizieren: DUPLICATE + GROUP halten → Quell-Group antippen → Ziel-Group antippen",
    ],
    proTip: "Session-Einstieg: Pattern 1 erstellen, dann DUPLICATE auf Slot 2 und 3. In 10 Sekunden die Grundlage für Verse / Hook / Bridge.",
  },

  select: {
    description: "SELECT halten und Pads antippen, um mehrere Events gleichzeitig auszuwählen, für Gruppen-Bearbeitung, Stummschalten oder gleichzeitiges Löschen.",
    steps: [
      "SELECT halten + beliebige Pads antippen, um mehrere Sounds zu selektieren",
      "Alle gewählten Pads leuchten zur Bestätigung auf",
      "Während mehrere gewählt sind: 4D Encoder drehen für globale Velocity-Anpassung aller selektierten Events",
      "ERASE drücken (während SELECT gehalten wird), um alle selektierten Events zu löschen",
      "SELECT loslassen, um die Auswahl aufzuheben",
    ],
  },

  solo: {
    description: "SOLO halten und ein beliebiges Pad antippen, um diesen Sound zu solieren — alle anderen werden vorübergehend stummgeschaltet, damit man ihn vollständig isoliert hört.",
    steps: [
      "SOLO halten + Pad antippen, das isoliert werden soll",
      "Nur dieser Sound spielt; alle anderen sind stummgeschaltet",
      "Mehrere Sounds gleichzeitig solieren: SOLO gedrückt halten und mehrere Pads antippen",
      "Solo aufheben: SOLO nochmal drücken oder loslassen",
      "Mix-Tipp: SOLO auf die Kick stellen, dann langsam andere Pads hinzufügen, um den Mix aufzubauen",
    ],
  },

  mute: {
    description: "MUTE halten und Pads drücken, um das Stummschalten einzelner Sounds umzuschalten — die unverzichtbare Live-Performance-Kontrolle für Drops und Breakdowns.",
    steps: [
      "MUTE halten + Pad drücken, um es stummzuschalten (Pad leuchtet anders auf)",
      "MUTE halten + erneut drücken, um den Mute aufzuheben",
      "Mehrere Pads auf einmal muten: MUTE gedrückt halten und mehrere Pads antippen",
      "MUTE loslassen — alle gerade gemuteten Pads bleiben stummgeschaltet",
      "Alle Mutes aufheben: MUTE + alle beleuchteten Pads antippen",
    ],
    proTip: "Live: MUTE halten, schnell Kick (Pad 1) + Hi-Hat (Pad 3) antippen, kurz bevor der Takt fällt. MUTE loslassen — alles kommt auf Zählzeit 1 zurück.",
  },

  displays: {
    description: "Zwei 480×272 Farb-Touchscreens — das primäre visuelle Interface. Sie passen sich jedem Modus an: Parameter, Browser, Step Sequencer, Mixer und mehr.",
    steps: [
      "Linker Bildschirm: zeigt meistens aktuelle Parameter oder Step-Sequencer-Ansicht",
      "Rechter Bildschirm: zeigt meistens Browser, Plugin-Parameter oder Groove-Einstellungen",
      "Antippen, um Parameter auszuwählen; 4D Encoder drehen/drücken, um zu bearbeiten",
      "Im Mixer: linker Bildschirm = Group-Fader, rechter Bildschirm = Pad-Fader",
      "Zum Wechseln der Tabs: den Tab-Bereich oben auf dem Bildschirm antippen",
    ],
    proTip: "Im Step-Sequencer-Modus ist Tab 2 auf dem linken Bildschirm die Groove-Einstellung. Dort lebt der Swing. Diesen Pfad verinnerlichen — er wird jede Session gebraucht.",
  },

  "4d-encoder": {
    description: "Die wichtigste Taste des MK3. Ein klickbarer Drehencoder, der auch in 4 Richtungen kippt (oben/unten/links/rechts). Das primäre Navigations- und Bearbeitungsinterface.",
    steps: [
      "Drehen: Parameter-Werte anpassen oder durch Listeneinträge navigieren",
      "Drücken: auswählen/bestätigen — im Browser: Sound laden; im Step Seq: Velocity-Modus",
      "Nach oben/unten kippen: Wert-Feinabstimmung in manchen Modi",
      "Nach links/rechts kippen: zwischen Tabs oder Bildschirmabschnitten navigieren",
      "Im Velocity-Modus: Schritt gedrückt halten + Encoder drehen, um die Velocity dieses Schritts einzustellen",
    ],
    proTip: "Das Drücken des 4D Encoders ist kontextsensitiv — es macht fast nie das Falsche. Im Zweifel drücken. Browser: laden. Step Seq: Velocity-Modus. Mixer: auswählen.",
  },

  browse: {
    description: "Öffnet den Sound- und Sample-Browser — Zugang zu allen NI-Sounds, Maschine-Expansion-Packs, Kontakt-Bibliotheken von Drittanbietern und eigenen importierten Samples.",
    steps: [
      "BROWSE drücken, um den Browser zu öffnen",
      "4D Encoder drehen, um durch Kategorien zu navigieren",
      "Antippen oder Encoder drücken, um ein Pack oder eine Kategorie zu öffnen",
      "Sound antippen oder Encoder drücken, um eine Vorschau zu hören (Pattern läuft weiter)",
      "Encoder doppelklicken oder 'Load' antippen, um den Sound auf das aktuelle Pad zu laden",
      "BROWSE erneut drücken, um den Browser zu schließen",
    ],
    proTip: "Im Browse-Modus läuft das Pattern weiter — Sounds live auf dem Beat vorhören, bevor man lädt. Immer im Kontext auditionieren, nie in der Stille.",
  },

  headphones: {
    description: "Steuert die Kopfhörerlautstärke unabhängig von den Hauptausgängen. Der Kopfhöreranschluss befindet sich an der Vorderkante des MK3.",
    steps: [
      "HEADPHONE-Knopf drehen (obere Reihe, rechte Seite)",
      "Nach rechts = Kopfhörerlautstärke erhöhen",
      "Beeinflusst nicht den Hauptausgangspegel",
      "Für Monitoring beim Produzieren: auf angenehmes Abhörniveau einstellen",
    ],
  },

  "macro-knobs": {
    description: "8 große, berührungsempfindliche Drehencoder, die sich der aktuellen Ansicht anpassen — Group-Fader im Mix, Plugin-Parameter in der Plugin-Ansicht, Performance-Macros im Perform-Modus.",
    steps: [
      "Im Mix-Modus: Knöpfe 1–8 steuern die Pegel von Groups A–H",
      "Im Plugin-Modus: Knöpfe steuern die ersten 8 Macro-Parameter des geladenen Instruments",
      "Im Perform-Modus: Knöpfe steuern Performance-Effekte (Filter, Reverb etc.)",
      "Im Channel-Modus: Knöpfe passen Volume, Pan, Tune und weitere Parameter an",
      "Antippen und drehen — kein Drücken nötig",
    ],
    proTip: "Im Mix-Modus sind das deine Fader. Group-A–H-Pegel in Echtzeit setzen. 8 Knöpfe, 8 Groups — die schnellste Art, eine vollständige Produktion auf der Fly zu balancieren.",
  },

  play: {
    description: "Startet die Wiedergabe des aktuellen Patterns oder Songs. Die meistgedrückte Taste in jeder Produktionssession.",
    steps: [
      "PLAY drücken, um die Wiedergabe zu starten",
      "PLAY erneut drücken zum Pausieren (Playhead bleibt stehen)",
      "STOP drücken, um zu stoppen und zum Anfang zurückzukehren",
      "Im Song-Modus: PLAY startet die Wiedergabe von der aktuellen Playhead-Position",
    ],
  },

  rec: {
    description: "Aktiviert die Aufnahme. Drücken, während das Pattern läuft, um Pad-Hits oder MIDI-Eingaben in das aktuelle Pattern in Echtzeit aufzunehmen.",
    steps: [
      "PLAY drücken, um Wiedergabe zu starten",
      "REC drücken, um die Aufnahme zu aktivieren (REC-Taste leuchtet rot)",
      "Pads spielen — Hits werden in das Pattern aufgenommen",
      "REC erneut drücken, um die Aufnahme zu beenden",
      "SHIFT + REC: Overdub-Modus — über bestehende Pattern aufnehmen ohne sie zu löschen",
      "Metronom: SHIFT + Metronom-Taste, um Click-Track ein-/auszublenden",
    ],
    proTip: "Immer im Overdub-Modus aufnehmen (SHIFT + REC), wenn zu einem bestehenden Pattern hinzugefügt wird — bestehende Beats werden niemals versehentlich gelöscht.",
  },

  stop: {
    description: "Stoppt die Wiedergabe und setzt den Playhead auf Takt 1 zurück. Anders als Play pausieren, das an der aktuellen Position stehen bleibt.",
    steps: [
      "STOP drücken, um die Wiedergabe zu stoppen und zum Anfang zurückzukehren",
      "Zweimaliges Drücken: Playhead auf die absolute Startposition (Takt 1) zurücksetzen",
      "Im Song-Modus: STOP hält die Timeline an der aktuellen Position",
    ],
  },

  erase: {
    description: "ERASE halten und Pads oder Schritte antippen, um Events zu löschen. Kontextsensitiv — löscht Schritte im Step-Sequencer-Modus und Pad-Treffer-Aufnahmen im Pad-Modus.",
    steps: [
      "Im Step-Sequencer-Modus: ERASE halten + einen leuchtenden Schritt antippen, um ihn zu löschen",
      "Im Pad-Modus (Wiedergabe): ERASE halten + Pad gedrückt halten, um alle Events dieses Sounds live zu löschen",
      "Gesamtes Pattern löschen: ERASE halten + auf dem Bildschirm 'Clear Pattern' antippen",
      "Einzelne Note aus dem Event-Editor löschen: Event selektieren + ERASE drücken",
    ],
    proTip: "ERASE ist über Undo nicht-destruktiv — Cmd/Strg+Z in der Software funktioniert auch nach Hardware-ERASE.",
  },

  tap: {
    description: "Den Beat klopfen, um das Projekt-BPM nach Gefühl einzustellen. Das Gerät mittelt mehrere Taps, um ein genaues Tempo zu berechnen.",
    steps: [
      "TAP mehrfach im gewünschten BPM-Tempo drücken (mindestens 4 Taps)",
      "Das BPM wird nach 4+ Taps automatisch gesetzt",
      "SHIFT + TAP: Tap Tempo aktivieren (in manchen Firmware-Versionen)",
      "Gut für Session-Starts ohne genaue BPM-Zahl — einfach das Tempo klopfen",
    ],
  },

  restart: {
    description: "Springt die Wiedergabe sofort auf Takt 1, ohne zu stoppen. Nahtloser Loop-Neustart — keine Stille zwischen Neustart und Wiedergabe.",
    steps: [
      "RESTART drücken, während das Pattern läuft",
      "Wiedergabe springt sofort auf Takt 1 zurück — nahtlos, keine Unterbrechung",
      "SHIFT + STOP macht dasselbe in manchen Firmware-Versionen",
      "Ideal für Live-Performance-Übergänge und das Testen von Pattern-Starts",
    ],
  },

  pads: {
    description: "16 velocity-empfindliche Gummi-Pads — das primäre Instrument-Interface. Sounds auslösen, Beats aufnehmen, Melodien spielen, Schritte auswählen und Menüs navigieren.",
    steps: [
      "Drücken, um Sounds auszulösen (Velocity richtet sich nach der Druckkraft)",
      "Im Step-Sequencer-Modus: Schritte ein-/ausschalten durch Antippen",
      "Im Notes-Modus: chromatische oder skalen-gesperrte Melodien spielen",
      "Im Browse-Modus: Pads navigieren durch Kategorien",
      "Velocity: sanft drücken für Ghost Notes (Velocity 30–50), fest für Akzente (100–120)",
    ],
    proTip: "Leichter tippen als man denkt. MK3-Pads sind sehr empfindlich — zu hartes Drücken erzeugt ungewollte Velocity-Spitzen im Pattern.",
  },

};
