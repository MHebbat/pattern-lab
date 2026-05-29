export type PatternLocaleEntry = {
  name: string;
  description: string;
  maschineNote: string;
};

export type MasterclassLocale = {
  tagline: string;
  bio: string;
  styleMarkers: string[];
  drumPhilosophy: string;
  samplePhilosophy: string;
  patterns: PatternLocaleEntry[];
  techniques: { title: string; detail: string }[];
  packRecs: { why: string }[];
  microKeyTips: string[];
};

export const masterclassesDe: Record<string, MasterclassLocale> = {
  "dr-dre": {
    tagline: "Der Architekt des West-Coast-Sounds",
    bio: "Dr. Dre erfand den West-Coast-Hip-Hop-Sound zweimal: einmal mit N.W.A. und dem Gangsta-Rap, dann mit dem G-Funk, der die Produktion der 90er definierte. Sein Ansatz ist radikal klar — jedes Element hat seinen Platz, jede Frequenz wurde bedacht. Der Dre-Sound entstand nicht durch Zufall, sondern durch obsessiven Perfektionismus. Seine Beats sind Lektionen über Kontrolle und Klarheit.",
    styleMarkers: [
      "Alle 16 Hi-Hat-Steps — gleichmäßig, maschinell, niemals roboterhaft",
      "Kick auf Zählzeit 1 und dem 'und' der 2 (Step 5) — der nach vorne lehnende G-Funk-Push",
      "Snare mit langem Hall-Reverb — breite Stereo-Abbildung, Reverb genauso laut wie der Treffpunkt",
      "Drums mono, alles andere breit — sein Markenzeichen der räumlichen Kontrolle",
      "Drei Kick-Schichten: Hauptkick, Sub-Kick auf Tonhöhe, Click-Transient",
      "Flat-Velocity-Hats — der Schwung kommt aus dem Groove, nicht aus der Dynamik",
    ],
    drumPhilosophy: "Der Beat muss wie ein Raum klingen. Nicht wie ein Schlagzeuger, der in einem Raum spielt — wie der Raum selbst eine Aussage macht. Jedes Element wird platziert wie Möbel. Wenn es nicht seinen Platz verdient, kommt es nicht rein.",
    samplePhilosophy: "Dre sampelt kaum — er repliziert. Er hört ein Funk-Riff und lässt es neu einspielen. Er hört eine Basslinie und dupliziert sie mit einem Synthesizer. Das Feeling der Platte übernimmt er, aber die Kontrolle über jedes Element behält er für sich.",
    patterns: [
      {
        name: "The Chronic Standard",
        description: "Dres klassisches Kern-Pattern. Alle 16 Hi-Hat-Steps — gleichmäßig, maschinell, niemals roboterhaft. Kick auf 1 und dem 'und' der 2 (Step 5) für diesen nach vorne lehnenden G-Funk-Push.",
        maschineNote: "Alle 16 Hat-Steps auf Velocity 75 flat setzen. Steps 0, 4, 8, 12 auf Velocity 90 anheben. Kein Humanize. Snare: Reverb, Large Hall, 2,1 s Decay, 45 % Wet. Der Reverb ist genauso laut wie der trockene Hit. Kick auf das Tonzentrum des Tracks stimmen. 80 Hz boosten, 400 Hz schneiden. Drums mono, alles andere breit. Drum-Gruppen-Output-Breite auf 0 %.",
      },
      {
        name: "Compton Crunch",
        description: "Der härtere, schnellere Dre. Kick-Versetzung auf Step 6 und Step 11 erzeugt dringendes Vorwärtsmomentum. Clap verdoppelt die Snare für extra Masse.",
        maschineNote: "Clap und Snare im Pad Link — gemeinsam auf Steps 4 und 12 auslösen. Clap um +2 Halbtöne gegenüber der Snare nach oben pitchen. Ghost-Kick auf Step 6: Velocity 65. Hauptkicks bei Velocity 110. Mono-Drums, breite Streicher. Drum-Gruppen-Output-Breite 0 %.",
      },
    ],
    techniques: [
      {
        title: "Drei-Schicht-Kick",
        detail: "Lade drei Kick-Pads: (1) Haupt-Kick mit Punch im Mittenbereich, (2) Sub-Kick gestimmt auf den Grundton des Tracks, (3) Click — ein kurzes, hochfrequentes Click-Sample bei -15 dB. Verbinde alle drei mit Pad Link und route sie auf separate Kanäle zur individuellen Bearbeitung. Diese Schichtung ist die Grundlage des Dre-Kick-Klangs — jede Schicht macht etwas, was die anderen nicht können.",
      },
      {
        title: "Mono-Drum-Philosophie",
        detail: "Gehe in die Drum-Gruppen-Einstellungen und setze den Output-Width-Parameter auf 0 %. Alle Drums sollen mittig im Stereofeld sitzen — Kick, Snare, Hats, alles mono. Dann mache ALLES andere (Sample, Synthesizer, Bassline, Streicher) so breit wie möglich. Dieser Kontrast — enge Drums, breite Melodie — ist der Kern des Dre-Klangs. Es schafft Tiefe ohne Verwirrung.",
      },
      {
        title: "Flat-Velocity-Hat-Technik",
        detail: "Setze alle 16 Hi-Hat-Steps auf genau Velocity 75. Dann anheben: Steps 0, 4, 8, 12 (die Zählzeiten) auf Velocity 90. Kein weiteres Humanize, keine Variation. Der Groove bei Dre kommt NICHT aus der Hat-Dynamik — er kommt aus der Kick-Platzierung und dem Swing. Die Hats sind ein Metronom, kein Groove-Element.",
      },
      {
        title: "Snare-Hall als Raumdarstellung",
        detail: "Wende einen Large Hall Reverb mit 2,1 s Decay und 45 % Wet-Signal auf die Snare an. Das Reverb-Signal soll fast so laut sein wie der trockene Hit. Das klingt zunächst viel — aber in Kontext mit mono Drums und breit gemischten Elementen erzeugt es genau die Raumdarstellung, die den West-Coast-Sound definiert.",
      },
      {
        title: "G-Funk-Kick-Platzierung",
        detail: "Das Kernelement des G-Funk-Grooves ist der Kick auf Step 5 — das 'und' der 2. Haupt-Kick auf Step 0 (Zählzeit 1) bei Velocity 110. Versetzter Kick auf Step 5 bei Velocity 85 (leiser, eine Antizipations-Note). Diese Kick-Platzierung erzeugt die nach vorne lehnende Qualität von 'Nuthin' But a G Thang', 'Let Me Ride' und Dutzenden anderen Klassikern. Ohne Step-5-Kick ist es kein G-Funk.",
      },
    ],
    packRecs: [
      { why: "Saubere, punchy Drum-Sounds — die verarbeiteten, modernen Optionen wählen. Dres Kits klingen nicht vintage oder lo-fi: sie sind poliert und präzise." },
      { why: "Für die Melodie-Schichten und G-Funk-Synthesizer-Sounds. Dres Produktionen sind vollständig aus Synthesizern gebaut — kein Sample-Source-Material." },
      { why: "808-Samples und Sub-Bass-Elemente für die tiefe Fundament-Schicht der Dre-Kick-Schichtung." },
    ],
    microKeyTips: [
      "Spiele die G-Funk-Leadsynthesizer-Melodie auf dem microKEY mit einem Moog-ähnlichen Synth-Patch aus Komplete 15. Halte jeden Ton eine volle Zählzeit — Dres Melodien sind legato, nicht staccato. Aufnehmen mit 1/4-Quantisierung.",
      "Benutze die linke Hand für die Basslinie und die rechte Hand für die Melodie. Dres Bass-Melodien sind komplex und melodisch. Spiele Root auf Zählzeit 1, Quinte auf dem 'und' der 2, Oktave auf Zählzeit 3. Dann hin- und herbewegen.",
      "Pitch Bend am microKEY für das ikonische G-Funk-Whammy-Effekt nutzen: einen Ton anschlagen, um einen Halbton nach oben benden, dann nach unten lassen. Sehr langsam und kontrolliert — Dres Bends sind präzise, kein Vibrato.",
    ],
  },

  "havoc": {
    tagline: "Der Architekt der Queensbridge-Dunkelheit",
    bio: "Havoc von Mobb Deep schuf einen der dunkelsten und einflussreichsten Beat-Stile in der Geschichte des Hip-Hop. Seine Produktionen für Mobb Deep — 'Shook Ones Pt. II', 'Temperature's Rising', 'Survival of the Fittest' — definierten den New Yorker Underground-Sound der Mitte 90er: düstere, degradierte Samples, minimale Drums, kalte Atmosphäre. Jeder Dark-Boom-Bap-Produzent ist in irgendeiner Weise sein Schüler.",
    styleMarkers: [
      "Sehr minimale Kick-Patterns — häufig nur Zählzeit 1 und 3",
      "Leise 8tel-Hats als atmosphärisches Hintergrundelement — keine aktive Groove-Rolle",
      "Dunkle, degradiert klingende Sample-Quellen — stark tiefpassgefiltert",
      "Große Lücken zwischen Kicks und Snares — die Stille ist das Ziel",
      "Ghost-Snares als einzige rhythmische Bewegung neben Kick und Snare",
      "Vinyl-Crackle-Loop läuft ständig unter allem",
    ],
    drumPhilosophy: "Der Beat soll klingen wie eine leere Straße um drei Uhr nachts. Keine Wärme, keine Einladung. Wenn du beim Produzieren Unbehagen spürst, machst du es richtig. Das Unbehagen IS der Sound.",
    samplePhilosophy: "Havoc gräbt nach Platten, die niemand mehr haben will — alte, beschädigte, vergessene Aufnahmen. Er filtert sie tief, macht sie noch kleiner und leiser, bis kaum noch etwas übrig ist. Das wenige, das bleibt, trägt mehr emotionales Gewicht als ein vollständiger Track.",
    patterns: [
      {
        name: "Shook Ones Architecture",
        description: "Die Mobb-Deep-Signatur. Kick auf 1 und 3. Leise 8tel-Hats. Der Raum zwischen Kick und Snare ist absichtlich. Ghost-Snare auf Step 14.",
        maschineNote: "Hi-Hats bei Velocity 40 flat — kaum hörbar. Kick und Snare beide bei 95. Ghost-Snare auf Step 14 bei Velocity 30 nur. Swing 56–58 %. Dem Drang widerstehen, mehr hinzuzufügen. Vinyl-Crackle-Loop darunter bei Velocity 20.",
      },
      {
        name: "QB Stomp",
        description: "Nur Viertelnoten-Hats — maximaler Atemraum. Kick auf Step 10 statt 8 ist Havocs Versetzungs-Signatur. Das Sample trägt alles.",
        maschineNote: "Viertelnoten-Hats bei Velocity 55. Kick auf Step 10 (NICHT 8) — Velocity 85. Das Sample soll jederzeit laufen. Dieses Pattern ist nur ein Rahmen. Kick-Versetzung auf Step 10 ist die Havoc-Signatur — niemals auf Step 8 verschieben. Dunkles Vinyl-Sample: Tiefpass bei 8 kHz, Stereobreite 20 %.",
      },
    ],
    techniques: [
      {
        title: "Sample-Degradierungsprozess",
        detail: "Lade ein beliebiges Sample aus Odyssey Soul. Wende an: Tiefpassfilter bei 7 kHz (remove brightness). Dann Hochpassfilter bei 100 Hz (remove sub rumble). Dann EQ-Dip: -3 dB von 300–600 Hz (remove presence). Dann Stereobreite auf 20 % reduzieren. Dann Vinyl-Crackle-Loop bei Velocity 20 unter das Sample legen. Das Sample soll klingen wie es aus einem anderen Raum kommt — kaum da, aber alles tragend.",
      },
      {
        title: "Maximale Stille",
        detail: "Nach dem Aufbau des Patterns zähle die leeren Steps. Bei Havoc müssen mindestens 8 von 16 Steps leer sein — das sind 50 % Stille. Wenn dein Pattern dichter ist, beginne das Entfernen: zuerst den Hat-Step 6, dann Step 2, dann Step 10. Höre jeweils nach dem Entfernen. Wenn du denkst, es ist zu wenig — das ist genau richtig.",
      },
      {
        title: "Ghost-Note-Platzierung",
        detail: "Ghost-Snares bei Havoc sind sparsam: nur Step 14 und gelegentlich Step 6. Beide bei Velocity 28–35. Sie sind das einzige rhythmische Interesse neben Kick und Snare. Ohne sie ist das Pattern zu statisch. Mit mehr als zwei Ghost-Noten ist es zu beschäftigt. Die Spannung liegt genau zwischen diesen Extremen.",
      },
      {
        title: "Kein Reverb auf dem Rim",
        detail: "Ersetze die Snare durch einen Rimshot oder einen Sidestick. Wende NULL Reverb an — komplett trocken. Der Rimshot erzeugt eine abstrakte, nicht-traditionelle Qualität: er klingt wie etwas, aber nicht wie ein Schlagzeug. In Kontext mit einem Havoc-Sample schafft die Trockenheit einen psychologischen Druck, den ein halliger Snare nicht erzeugen kann.",
      },
    ],
    packRecs: [
      { why: "Die dunkelsten, atmosphärischsten Loops der Sammlung. Wende den Degradierungsprozess an — Tiefpass 7 kHz, Hochpass 100 Hz, Dip 300–600 Hz." },
      { why: "Vinyl-Crackle bei Velocity 20 unter allem. Bei Havoc ist das Rauschen kein Zusatz — es ist strukturell." },
      { why: "Für die wenigen Male, wenn ein anderes Percussion-Element nötig ist. Einer. Sehr leise. Selten." },
    ],
    microKeyTips: [
      "Spiele einen einzelnen, langen, dissonanten Bass-Ton auf dem microKEY mit einem tiefen Pad oder Sinuswellen-Patch. Den Ton auf die Minor-Sekunde oder verkleinerte Quinte des Sample-Grundtons stimmen. Einen Takt lang halten, dann Stille. Das ist Havocs einzige Keyboard-Technik.",
      "Benutze den Mod-Wheel des microKEY als Filter-Regler: Mappe ihn auf den Tiefpass-Cutoff des Sample-Kanals. Über 8 Takte langsam schließen. Das Sample verschwindet langsam — Havocs Atrophie-Technik.",
    ],
  },

  "dj-premier": {
    tagline: "Die Wissenschaft des Booms",
    bio: "DJ Premier ist der technisch vollkommenste Boom-Bap-Produzent der Geschichte. Von Gang Starr bis Notorious B.I.G., von Nas bis Jay-Z — sein Sound definiert, was East-Coast-Hip-Hop klingt. Sein Markenzeichen: der abgehackte Sample-Flip, die nackte Drum-Technik, und der Akzent-Snare-Hit, der keine andere Erklärung braucht als 'das ist Premier'. Seine Drums sind niemals zufällig — jeder Schlag sitzt am einzig richtigen Platz.",
    styleMarkers: [
      "Haupt-Snare auf 2 und 4 — plus Akzent-Snare auf dem 'und' der 3 (Step 11)",
      "Kick auf Zählzeit 1 und 3, oft plus Versetzung auf Step 5 oder 6",
      "Heavy Swing 60 % — in der MPC3000-Tradition unveränderlich",
      "Abgehackte, kurze Sample-Loops — manchmal nur 1 Takt",
      "Ghost-Snares am Taktzeitende (Steps 14–15) als Roll-Vorbereitung",
      "Vinyl-Scratch-Akzente als rhythmische Interpunktion zwischen den Bars",
    ],
    drumPhilosophy: "Die Snare soll deinen Kopf zurückwerfen. Nicht nicken — zurückwerfen. Wenn die Snare hart genug ist, erledigt der Rest des Patterns fast sich von selbst. Ich fange immer mit der Snare an.",
    samplePhilosophy: "Ich chope kurz und scharf. Ich brauche keine 4 Takte — manchmal brauche ich nur 2 Zählzeiten. Die effektivsten Loops bei mir sind die, bei denen man kaum hören kann, woher sie kommen. Das Fragment trägt mehr Energie als das Original.",
    patterns: [
      {
        name: "The Primo Pocket",
        description: "Klassischer Premier-Groove. Kick nur auf 1 und 3, Standard-2+4-Snare, aber der Akzentschlag auf Step 11 (dem 'und' der 3) ist Premiers charakteristischer Stab.",
        maschineNote: "Akzent-Snare auf Step 11 ist ein SEPARATES Pad — gleicher Sound, Velocity 85. Haupt-Snares bei Velocity 100. Swing: 60 % — heilig. 8tel-Hats mit Downbeats bei 90, Upbeats bei 50. Sample-Loop bei 30–50 % Stereobreite.",
      },
      {
        name: "Gangstarr Heavy",
        description: "Schwererer Premier mit Kick-Versetzung auf Step 6 und Ghost-Snare-Roll in die Loop. Ghost-Noten auf Steps 14–15 bauen Schwung in Zählzeit 1 auf.",
        maschineNote: "Ghost-Snares 14 und 15 bei Velocity 30 und 40 — in Zählzeit 1 hineinbauend. Kick auf Step 6 bei Velocity 80 (der Premier-Ghost-Kick). Swing 62 % — erzeugt die fast-Triolen-Tasche. Der Loop ist 70 % dieses Beats. Drums rahmen ihn nur ein.",
      },
    ],
    techniques: [
      {
        title: "Der Akzent-Snare-Hit (Primers Signatur)",
        detail: "Erstelle ein zweites Snare-Pad (A3) mit demselben Snare-Sample wie der Haupt-Snare. Programmiere NUR Step 11 — nichts anderes. Setze Velocity auf 82–88. Das ist Premiers Signatur: ein Snare-Akzent auf dem 'und' der 3, der keine weitere Begründung hat außer 'es groovt'. Ohne ihn ist es Boom Bap. Mit ihm ist es Premier.",
      },
      {
        title: "60 % Swing — Heilig",
        detail: "Setze Group Swing auf exakt 60 %. Niemals unter 58 % (wird zu mechanisch), niemals über 63 % (wird zu Dilla-Territorium). Der 60%-Swing ist der MPC3000-Shuffle-Wert, den Premier jahrzehntelang benutzte. Alles, was Premier klingt, hat diesen exakten Swing-Wert.",
      },
      {
        title: "Ghost-Roll-Architektur (Steps 14–15)",
        detail: "Programmiere Ghost-Snare-Hits auf Steps 14 und 15 bei Velocities 28 und 42. Diese zwei Ghost-Noten am Ende jedes Takts bereiten den Loop-Neustart vor und erzeugen das 'Rollen in den nächsten Takt'-Gefühl. Das ist der Unterschied zwischen einem statischen Loop und einem, der fließt.",
      },
      {
        title: "Abgehackter Sample-Flip",
        detail: "Lade einen Loop aus Soulful Dreams Vol 1 oder 2. Setze den Loop-Punkt auf nur 1 oder 2 Takte — oder sogar kürzer, auf 1 Zählzeit. Exportiere das als Audio und lade es auf einen Melodie-Pad. Diese kurze, abgehackte Version trägt mehr Energie als die volle Phrase. Das ist Premiers Flip-Technik: weniger ist immer mehr.",
      },
      {
        title: "Hat-Velocity-Kontrast",
        detail: "Setze 8tel-Hats mit starkem Kontrast: Downbeats (Steps 0, 4, 8, 12) bei Velocity 90. Upbeats (Steps 2, 6, 10, 14) bei Velocity 50. Dieser 1,8:1-Kontrast kombiniert mit 60%-Swing erzeugt das lebendige, schwingende Hat-Gefühl von Premiers Produktionen. Niemals alle Hats auf gleiche Velocity setzen.",
      },
    ],
    packRecs: [
      { why: "Die direkteste Verbindung zu Premiers Sample-Ästhetik — warme, lebendige Soul-Loops. Auf 1–2 Takte kürzen und als abgehackten Flip verwenden." },
      { why: "Für Premiers dunklere, filmischere Seite. Die atmosphärischeren Loops passen zu seinen Produktionen für Nas und Biggie." },
      { why: "Horn- und Blechbläser-Einzelschläge für die Kontermelodie-Technik. Manchmal eine Trompete, die zwischen den Sample-Phrasen antwortet." },
    ],
    microKeyTips: [
      "Spiele kurze, perkussive Scratch-ähnliche Hits auf dem microKEY mit einem DJ-Scratch-Patch oder einem Vocal-Chop-Sound. Platziere diese auf den Off-Beats zwischen den Sample-Phrasen. Das ist Premiers Scratch-Akzent-Technik: Rhythmus als Interpunktion.",
      "Spiele eine Kontermelodie mit einem Horn-Patch aus Komplete 15: 2–3 kurze Noten pro 4 Takte, auf Off-Beats. Premier benutzt Horns als Antworten auf das Sample — Frage und Antwort zwischen Loop und Einzelton.",
      "Nutze den Sustain-Pedal-Eingang des microKEY, um Sample-Chops zu halten oder zu schneiden. Halte das Pedal für den Loop und lass es auf bestimmten Zählzeiten los, um einen abrupten Chop zu erzeugen — die Premier-Schneidetechnik in Echtzeit.",
    ],
  },

  "j-dilla": {
    tagline: "Das menschlichste Schlagzeug, das je programmiert wurde",
    bio: "J Dilla ist der einflussreichste Hip-Hop-Produzent der Geschichte — nicht der kommerziell erfolgreichste, sondern der am tiefsten wirkende. Seine MPC-Programmierung brach alle Regeln der Quantisierung: Kicks und Snares lagen absichtlich neben dem Grid, Ghost-Noten flüsterten auf Velocities, die man kaum hören konnte, und der Swing war so extrem, dass es sich fast nach Triolen anfühlte. Sein Album 'Donuts', das er im Sterbebett aufnahm, wird als das beste Beat-Album aller Zeiten bezeichnet.",
    styleMarkers: [
      "Absichtliche Unquantisierung — Kicks und Snares neben dem Grid versetzt",
      "Ghost-Noten bei Velocities von 20–35 — an der Grenze der Hörbarkeit",
      "Extremer Swing (64–68 %) — drückt Upbeats in Triolen-Territorium",
      "Hats mit Timing-Humanisierung: ±15 ms — klingt wie ein Mensch, der eilt",
      "Sample-Pitching für emotionale Wirkung, nicht nur technische Anpassung",
      "Kick-Snare-Push-Pull-Spannung durch entgegengesetzte Timing-Versetzungen",
    ],
    drumPhilosophy: "Ich quantisiere nicht, weil die Maschine nicht besser ist als ein Mensch. Ein Drummer, der eilt, fühlt sich besser an als ein Computer, der perfekt ist. Ich programmiere Fehler, die sich wie Gefühle anfühlen.",
    samplePhilosophy: "Dilla sucht nach dem Moment auf einer Schallplatte, an dem ein Musiker etwas Unerwartetes tut. Eine Note, die zu spät kommt. Eine Basslinie, die sich verspielt. Diese menschlichen Unvollkommenheiten sind der Wert der Schallplatte — nicht die perfekten Momente.",
    patterns: [
      {
        name: "Donuts Bounce",
        description: "Signature-Dilla-Feeling. Kick auf Step 7 landet mitten in Zählzeit 2. Snare auf Step 13 ist spät nach Zählzeit 4. Ghost-Noten verwischen die Downbeats. 66 % Swing drängt Richtung Triolen.",
        maschineNote: "Swing 66 %. Dann im Piano Roll: Snare auf Step 13 extra +3 Ticks nach hinten verschieben. Ghost-Noten bei Velocity 25–35 mit Humanize ±15 % Velocity. Hi-Hats: Humanize ±15 % Timing auch. Sie sollen klingen wie ein Mensch, der eilt. Nicht quantisieren. Die 'falsche' Platzierung ist der Punkt.",
      },
      {
        name: "Detroit Drunk",
        description: "Engeres Dilla-Feeling. Kick auf Steps 2 und 11 — beide synkopiert. Snare auf Step 12 leicht früh erzeugt Push-Pull-Spannung mit dem späten Kick auf Step 11.",
        maschineNote: "Im Piano Roll: Kick auf Step 11 leicht VOR seine Grid-Position ziehen (-2 Ticks). Snare auf Step 12 leicht NACH (+3 Ticks). Push-Pull-Spannung. Ghost-Snares bei Velocity 28–38. Swing 64 %. Sample -2 Halbtöne absenken, Geschwindigkeit auf 98 % reduzieren.",
      },
    ],
    techniques: [
      {
        title: "Absichtliche Unquantisierung",
        detail: "Programmiere das Pattern zuerst normal — quantisiert. Dann öffne den Piano Roll (SHIFT + EVENTS in Maschine). Verschiebe den Kick auf Step 5 um +6 Ticks nach hinten. Verschiebe die Snare auf Step 12 um -3 Ticks nach vorne. Verschiebe den Kick auf Step 11 um +4 Ticks nach hinten. Jetzt klingt das Pattern menschlich. Das sind keine Fehler — das sind bewusste Entscheidungen.",
      },
      {
        title: "Ghost-Note-Architektur",
        detail: "Erstelle alle Ghost-Snares auf einem separaten Pad (gleicher Sound). Setze alle Ghost-Velocities zwischen 22 und 38 — nie höher. Humanize: Velocity ±15 %, Timing ±8 ms. Diese Parameter erzeugen das Dilla-Ghost-Feeling: Töne, die man auf Lautsprechern kaum hört, aber auf Kopfhörern stark spürt.",
      },
      {
        title: "66 % Swing — Das Triolen-Territorium",
        detail: "Setze Group Swing auf 66 %. Auf diesem Niveau fallen die Upbeat-16tel-Noten so spät, dass sie sich wie Triolen anfühlen. Das ist das mathematische Fundament des Dilla-Grooves: 16tel-Noten, die sich wie Triolen anfühlen. Darunter verliert das Pattern seinen Charakter.",
      },
      {
        title: "Push-Pull-Spannung (Kick spät, Snare früh)",
        detail: "Die tiefste Dilla-Technik: versetze den Kick NACH hinten und die Snare NACH vorne. Der Kick fühlt sich faul an, die Snare ungeduldig. Ihre Spannung gegeneinander erzeugt den hypnotischen Zug von Dillas Grooves. Es ist keine Fehler — es ist eine emotionale Aussage.",
      },
      {
        title: "Sample-Tempo-Anpassung",
        detail: "Lade ein Sample. Verlangsame die Wiedergabegeschwindigkeit auf 96–98 % in Maschines Tune-Einstellungen. Senke die Tonhöhe um -1 bis -2 Halbtöne. Dieser leichte Pitch-Down verändert den emotionalen Charakter des Samples — es klingt schwerer, müder, tiefer. Das ist Dillas Sample-Manipulation: Tempo und Pitch für Gefühl, nicht für Technik.",
      },
    ],
    packRecs: [
      { why: "Die reichsten, menschlichsten Soul-Samples. Wende die Tempo-Anpassung an — leicht verlangsamt und nach unten gepitcht. Dilla-Samples klingen nie klar und hoch." },
      { why: "Für Dillas härtere, filmischere Seite. Die dunkleren Loops passen zu seinen Produktionen für Common und D'Angelo." },
      { why: "Die organischsten Drum-Sounds — wähle die wärmsten, am wenigsten verarbeiteten Optionen." },
    ],
    microKeyTips: [
      "Spiele Chord-Voicings auf dem microKEY mit einem Wurlitzer- oder Fender-Rhodes-Patch hinter dem Beat — drücke jeden Akkord 30–50 ms nach der Zählzeit. Das verzögerte Keyboard-Feeling ist ein Kernbestandteil von Dillas Groove-Philosophie.",
      "Spiele eine einfache Basslinie in Echtzeit ohne Quantisierung. Lass die natürliche Timing-Unvollkommenheit deines Spiels stehen. Dillas Bass-Linien wurden in Echtzeit gespielt und absichtlich nicht korrigiert.",
      "Nutze Aftertouch auf dem microKEY für langsames Vibrato auf Melodie-Noten. Dillas Melodien haben einen organischen Zug — Aftertouch-Vibrato repliziert dieses Gefühl.",
    ],
  },

  "timbaland": {
    tagline: "Die Talking Drum trifft auf den Hip-Hop",
    bio: "Timbaland revolutionierte Hip-Hop und R&B, indem er Perkussion zu einem melodischen Instrument machte. Seine Beats für Missy Elliott, Aaliyah und Jay-Z brachten westafrikanische Rhythmik, elektronische Präzision und ein Gespür für Melodie im Schlagzeug zusammen, das vorher niemand gezeigt hatte. Er stimmte Kicks wie Instrumente, programmierte Trommeln wie Gespräche, und machte Basslinien zu Melodien. Sein Einfluss reicht bis in die moderne Trap-Produktion.",
    styleMarkers: [
      "Kicks an 4 oder mehr unerwarteten Positionen — Gespräch statt Groove",
      "Gestimmte Percussion (Talking Drum, Djembe, Conga) auf der Track-Tonart",
      "Alle 16tel-Hats bei flat Velocity — Percussion übernimmt die Dynamik",
      "Strikter Klatscher (kein Snare) vorne im Mix",
      "Bass folgt dem Kick-Rhythmus — gleiche rhythmische Positionen, nicht nur Grundtöne",
      "Percussion-Ornamente: 32stel-Note-Bursts am Ende von Phrasen",
    ],
    drumPhilosophy: "Jedes Perkussionselement muss eine Tonhöhe haben. Der Kick ist eine Note. Die Talking Drum ist eine Melodie. Das Hi-Hat ist ein Rhythmus-Element, aber die Percussion ist die Harmonie. Wenn alle Drums gestimmt sind, IST der Beat Musik.",
    samplePhilosophy: "Timbaland sampelt kaum — er konstruiert. Er verwendet Synthesizer, Klanggeneratoren und gesampelte Einzeltöne, die er neu arrangiert. Seine Melodien kommen aus kurzen Vocal-Snippets, die er als perkussive Elemente behandelt. Der Vocal IST ein Drum.",
    patterns: [
      {
        name: "Get Ur Freak On",
        description: "Timbaland-Signatur — Kicks in 4 Positionen erzeugen ein Gespräch statt eines Grooves. Gestimmtes Perc auf den Off-Beats ist die Talking-Drum-Schicht.",
        maschineNote: "Perc auf 2, 6, 10, 14 auf die Track-Tonart STIMMEN — nicht nur Rhythmus. Velocity-Variation auf Perc: 80, 65, 80, 70 (Talking-Drum-Gefühl). Alle 16tel-Hats bei flat Velocity 70 — das Perc übernimmt die Dynamik. Clap (nicht Snare) bei Velocity 105 — vorne im Mix.",
      },
      {
        name: "Dirt Off Your Shoulder",
        description: "Doppelkick-Tumbling-Effekt. Steps 4+5 und 12+13 kaskadieren. Kombiniert mit einer Snare nur auf Zählzeit 3 entsteht Timbalands Half-Time/Full-Time-Hybrid.",
        maschineNote: "Tumble-Kicks: Step 4 bei Velocity 90, Step 5 bei 70. Dasselbe für 12 (90) und 13 (70). Perc auf 3, 7, 11, 15 ist ein ANDERER Sound als das Haupt-Perc — Shaker oder metallisch. Die Snare ist ein CLAP — eng, kein Reverb. Velocity 95. Bass folgt dem Kick-Rhythmus — gleiche rhythmische Positionen, nicht nur Grundtöne.",
      },
    ],
    techniques: [
      {
        title: "Drums auf die Tonart stimmen",
        detail: "In Maschine den Kick um -2 oder -4 Halbtöne ab 0 stimmen, um die Note zu finden, die zur Tonart des Tracks passt. Timbaland stimmt jedes Drum-Element auf die Tonart des Tracks — den Kick, die Talking Drum, sogar die Hi-Hat-Tonhöhe. Wenn Drums und Melodie in der gleichen Tonart sind, fühlt sich der Beat wie ein Organismus an.",
      },
      {
        title: "Die Talking-Drum-Methode",
        detail: "Chronicles-Conga oder Djembe-Sample auf Pad A3 laden. Im Tune-Bereich: auf den Grundton des Tracks stimmen. Auf Steps 2, 6, 10, 14 programmieren mit variierenden Velocities. Das erzeugt das Timbaland-'Gespräch'-Element — eine gestimmte Percussion-Melodie, die im Rhythmus lebt.",
      },
      {
        title: "Geschichteter Percussion-Stack",
        detail: "Timbaland verwendet 4–6 Perkussions-Sounds gleichzeitig. Im Drum-Group: A3 = Talking Drum, B1 = Shaker, B2 = Woodblock, B3 = metallisches Perc. Jedes spielt ein anderes Pattern. Im Step-Sequencer programmieren. Der Schlüssel: KEIN einzelnes dieser Patterns ist interessant — zusammen erzeugen sie eine dichte, bewegte Textur.",
      },
      {
        title: "Der Kick-Roll (Steps 4+5 / 12+13)",
        detail: "Ein zweites Kick-Pad mit demselben Sound wie A1, aber auf 70 % Velocity eingestellt. Diesen 'Echo-Kick' einen Step nach jedem Haupt-Kick-Hit programmieren. Steps 4 (Haupt 100) → 5 (Echo 70). Steps 12 (Haupt 100) → 13 (Echo 70). Das ist der taumelnde Kick-Effekt aus 'Get Ur Freak On', 'Dirt Off Your Shoulder' und Dutzenden anderen.",
      },
      {
        title: "Bass folgt Drums",
        detail: "Timbalands Basslinien sind rhythmisch, nicht nur harmonisch. Den Bass mit denselben rhythmischen Positionen wie den Kick programmieren. Wenn Kick auf Steps 0, 3, 8, 11 ist — Bass spielt Grundton auf 0, Quinte auf 3, Grundton auf 8, Quarte auf 11. Das microKEY verwenden, um dieses Pattern in Echtzeit aufzunehmen. Bass und Kick sollen wie ein Instrument klingen.",
      },
    ],
    packRecs: [
      { why: "Ethnische und World-Percussion-Sounds, die die Talking Drum-, Djembe- und Conga-Elemente liefern, die für Timbalands rhythmisches Vokabular unverzichtbar sind." },
      { why: "Für die strafferen, elektronischen Drum-Sounds. Die verarbeiteteren, zeitgenössischen Optionen wählen — Timbalands Kits klingen moderner als Boom-Bap-Produzenten." },
      { why: "Vocal-Snippets und Samples, die als rhythmische Elemente umfunktioniert werden können (die Timbaland-Methode). Kurze, rhythmische Vocal-Phrasen suchen." },
    ],
    microKeyTips: [
      "Das Talking-Drum-Pattern (Steps 2, 6, 10, 14) auf dem microKEY programmieren, indem man eine wiederholte Note mit der rechten Hand spielt, während der Drum-Loop läuft. Bei 1/16-Quantisierung aufnehmen. Velocity durch Tastendruck variieren.",
      "Basslinie mit der linken Hand spielen, während die Drums laufen — Grundton auf Zählzeit 1, Quinte auf dem 'und' der 2, Grundton auf Zählzeit 3, Quarte auf Zählzeit 4.",
      "Den Pitch Bend des microKEY nutzen, um Glide-Effekte auf der Talking Drum zu erzeugen. Eine kleine Terz nach oben benden, dann auf der Zählzeit loslassen. Das ist das 'Sprechen' in Talking Drum.",
    ],
  },

  "pete-rock": {
    tagline: "Der Soul-Bruder des Hip-Hop",
    bio: "Pete Rock verbindet die Jazz-Plattengräber-Tradition mit den härtesten Boom-Bap-Drums New Yorks. Seine Beats sind warm, schwingend und seelenvoll — Jazz-Hörner, Soul-Vocal-Samples und eine präzise Snare-Arbeit, die den Körper bewegt, ohne es zu versuchen. 'They Reminisce Over You' ist das emotional eindrucksvollste Drum-Pattern in der Geschichte des Hip-Hop.",
    styleMarkers: [
      "Jazz- und Soul-Sample-Quellen — Hörner, Vibraphon, Klavier, Vokalharmonien",
      "Schwerer Swing (58–66 %) — der MPC-Bounce",
      "Kick auf Zählzeit 1 und dem 'und' der 2 (Step 5) — nach vorne lehnender Push",
      "Ghost-Snares am Ende jedes Takts (Steps 14–15) — die Signatur-Roll",
      "Offener Hat alle 8 Takte — als Interpunktion, nicht als Groove",
      "Horn-Stabs als Kontermelodie zum Sample",
    ],
    drumPhilosophy: "Die Drums sollen dich zum SPRINGEN bringen. Nicht nicken — SPRINGEN. Das ist mein Test für meine Beats. Wenn ich nicht spüre, wie sich mein Körper bewegt, während ich sie programmiere, sind sie noch nicht fertig.",
    samplePhilosophy: "Pete Rock ist ein Jazz- und Soul-Plattengräber. Er sucht nach Hornabschnitten, Vibraphon-Läufen und seelenvollen Vokalharmonien. Er loopt den wärmsten Teil der Platte und rahmt ihn mit hüpfenden Drums. Die Emotion kommt vom Jazz — die Drums machen daraus Hip-Hop.",
    patterns: [
      {
        name: "They Reminisce Bounce",
        description: "Das Pattern hinter der legendärsten Pete-Rock-Platte. Der Kick auf Step 5 (dem 'und' der 2) ist der springende Push, der Köpfe nicken lässt. Ghost-Snares auf Steps 14–15 bereiten den Loop-Neustart mit Eleganz vor.",
        maschineNote: "Dieses Pattern braucht 62 % Swing. Der Kick auf Step 5 bei Velocity 75 (Ghost-Kick — er treibt den Groove voran, dominiert aber nicht). Hauptkicks (0 und 8) bei Velocity 105. Ghost-Snares (14–15): Velocity 30 und 45. 16tel-Hats mit starkem Swing fühlen sich bei dieser Swing-Einstellung wie Triolen an.",
      },
      {
        name: "Mount Vernon Soul",
        description: "Pete Rocks härterer Ansatz. Der Kick auf Step 7 (späte Zählzeit 2) erzeugt ein funkiges, leicht spätes Gefühl. Der offene Hat auf Step 9 erscheint einmal alle 2 Takte und interpunktiert den Groove.",
        maschineNote: "Offener Hat auf Step 9: Dieses Pad NUR in TAKT 2 eines 2-Takt-Patterns verwenden (2-Takt-Pattern in Maschine erstellen, offener Hat nur im zweiten Takt). Das erzeugt Pete Rocks 'jeden zweiten Takt'-Interpunktion. Choke-Gruppe mit geschlossenem Hat.",
      },
    ],
    techniques: [
      {
        title: "Der Step-5-Bounce-Kick",
        detail: "Einen Kick-Hit auf Step 5 bei Velocity 70–80 (weicher als Hauptkicks auf 0 und 8) hinzufügen. Dieser 'und'-der-2-Kick ist das definierende Element von Pete Rocks Bounce. Ohne ihn ist das Pattern nur Standard-Boom-Bap. Mit ihm bounced es. Nicht über-akzentuieren — er soll sich wie eine natürliche Erweiterung des Zählzeit-1-Kicks anfühlen.",
      },
      {
        title: "Ghost-Roll-Architektur",
        detail: "Ein dediziertes Ghost-Snare-Pad (A3) mit demselben Snare-Sample erstellen. NUR Steps 14 und 15 programmieren — nichts anderes. Step 14 auf Velocity 28, Step 15 auf Velocity 42 setzen. Diese Ghost-Noten antizipieren den Takt-Neustart und erzeugen das 'in den nächsten Takt rollen'-Gefühl, das pur Pete Rock ist.",
      },
      {
        title: "Der Jazz-Loop-Treatment",
        detail: "Beliebigen Soul- oder Jazz-Loop aus Soulful Dreams oder Odyssey Soul laden. Diese EQ-Einstellungen anwenden: Hochpass 60 Hz, Boost 400 Hz +1 dB (Papierkegel-Lautsprecher-Wärme), Cut 6 kHz -1,5 dB (den Hi-Fi-Schimmer entfernen — Plattenspieler-Feeling gewünscht). So behandelt Pete Rock sein Quellmaterial.",
      },
      {
        title: "Horn-Kontermelodie (microKEY)",
        detail: "Nachdem das Haupt-Sample eingerastet ist, das microKEY nutzen, um ein Ein-Ton-Horn-Element aus Revival (NI) hinzuzufügen. 2–3 kurze Horn-Hits spielen, die zwischen den Haupt-Phrasen des Samples landen. Diese sollen die Lücken füllen, nicht mit dem Sample spielen. Als Antwort-Phrase in einem Jazz-Call-and-Response denken.",
      },
      {
        title: "62 % Swing — Kein Kompromiss",
        detail: "Pete-Rock-Beats müssen bei 60–64 % Swing laufen. Niemals unter 58 % (klingt zu mechanisch), niemals über 66 % (beginnt nach Dilla zu klingen). Group Swing auf 62 % setzen und alles in dieser Swing-Einstellung programmieren. Der schwere Swing erzeugt das Bounce-Feeling — es ist eine fast-Triolen-Unterteilung.",
      },
    ],
    packRecs: [
      { why: "Perfektes Quellmaterial für Pete-Rock-Stil-Produktionen. Die Soul-Vocals und Jazz-Loops haben die richtige Wärme. Den Warm-EQ-Treatment anwenden." },
      { why: "Für Pete Rocks härtere, filmischere Momente. Die tieferen Loops passen zu Tracks wie 'Searching' oder seiner melancholischeren Seite." },
      { why: "Einzelton-Horn-Samples für Kontermelodien. Pete Rock verwendet Hörner sowohl als Sample-Quelle ALS AUCH als live-feeling Einzelton-Fills über dem Haupt-Sample-Loop." },
    ],
    microKeyTips: [
      "Horn-Kontermelodien mit einem Blechbläser-Patch aus Revival (NI) aufnehmen. Kurze, staccato Noten spielen — maximale Achtelnoten-Dauer. Pete Rocks Ergänzungen zu seinen Samples sind Akzente, keine anhaltenden Linien.",
      "Das Vibraphon-Patch aus Komplete 15 auf dem microKEY spielen, um eine 4-Note-Melodiephrase zu erstellen, die zwischen den Phrasen des Samples passt. Bei 1/8-Quantisierung aufnehmen. Das Vibraphon IST Pete Rock.",
      "Mit der linken Hand einen Akkord (Cm, Fm, Abm — Moll-Akkordgruppen) halten, während die rechte Hand die Kontermelodie spielt. Das Ganze aufnehmen. Den Akkord über den vollen Takt ausklingen lassen.",
    ],
  },

  "kanye-west": {
    tagline: "Die beschleunigte Seele",
    bio: "Kanye West demokratisierte Soul-Sampling. Vor ihm wurden Soul-Samples von Underground-Produzenten mit tiefem Plattengruben-Wissen verwendet. Kanye nahm die bekanntesten, geliebten Soul-Platten und pitchte sie als Chipmunk-Loops nach oben — emotionale Abkürzungen, die anders trafen, weil man die Quelle erkannte. Seine frühe Produktion ist reines emotionales Genie.",
    styleMarkers: [
      "Hochgepitchte Soul-Vocals um 3–7 Halbtöne (die Chipmunk-Soul-Signatur)",
      "Kick auf Zählzeit 1 und dem 'und' der 2 oder 3 — emotionaler Vorwärts-Push",
      "Rollende Snare-Fills, die den Hook einleiten",
      "Orchestrale Streicher und Live-Instrumente über programmierten Drums",
      "Schwere Basslinie, die eine echte Melodie spielt, nicht nur Grundtöne",
      "Samples auf unerwartete Tonzentren gepitcht",
    ],
    drumPhilosophy: "Die Drums sollen sich anfühlen, als würden sie dich irgendwohin tragen. Nicht nur die Zeit halten — HINGEHEN. Alle 8 Takte sollen sich anfühlen, als würden sie auf etwas hinbauen.",
    samplePhilosophy: "Beschleunigen. Pitch nach oben. Den emotionalen Kern der Platte finden und extrahieren. Der Chipmunk-Pitch ist kein Gimmick — er schafft emotionale Distanz vom Original, die dir erlaubt, etwas Neues zu fühlen. Du erkennst den Song, aber der neue Kontext verändert seine Bedeutung.",
    patterns: [
      {
        name: "Late Registration Soul",
        description: "Die College-Dropout/Late-Registration-Ära. Beschäftigte 16tel-Hats, Kick auf dem 'und' der 1 (Step 3 — der Kanye-Frühkick) erzeugen Dringlichkeit.",
        maschineNote: "Kick auf Step 3 ist der Kanye 'Früh-Kick' — er landet kurz nach dem 'und' der 1. Velocity 75 (weicher als der Downbeat-Kick bei Velocity 105). 16tel-Hats: abwechselnd 80 (On-Beat) und 55 (Off-Beat). Swing: 56 %. Das Soul-Sample sollte um +4 Halbtöne nach oben gepitcht werden.",
      },
      {
        name: "Graduation Stadium",
        description: "Das größere, stadionfüllendere Kanye-Pattern. Der Kick auf Step 11 fügt synkopiertes Momentum hinzu, das in den Hook drängt. Clap verdoppelt Snare für Masse.",
        maschineNote: "Clap (Pad Link mit Snare) nur für Hook-Abschnitte — Szenen-Stummschaltung in Maschine nutzen, um die Clap-Gruppe nur in Hook-Szenen zu aktivieren. Der zusätzliche Step-11-Kick bei Velocity 80 fügt Dringlichkeit hinzu. Dieses Pattern existiert für den Chorus; einfachere Version (kein Step-11-Kick) für Verses.",
      },
    ],
    techniques: [
      {
        title: "Der Chipmunk-Soul-Pitch",
        detail: "Beliebigen Soul-Vocal-Loop aus Soulful Dreams Vol 1 oder 2 laden. Im Tune-Bereich von Maschine: auf +4 Halbtöne setzen (zwischen +3 und +7 je nach Sample ausprobieren). Wiedergabegeschwindigkeit auf 105 % setzen (leicht schneller). Sample abspielen. Wenn es sich wie eine alte Soul-Platte anhört, die mit der falschen Geschwindigkeit abgespielt wird — das ist genau richtig. Das ist die Kanye-Textur.",
      },
      {
        title: "Früh-Kick (Step 3)",
        detail: "Der Kanye-Signatur-Kick ist auf Step 3 — das 'e' der 1. Haupt-Kick auf Step 0 (Zählzeit 1) programmieren. Dann einen zweiten, leichteren Kick auf Step 3 hinzufügen (Velocity 70–80). Das erzeugt das Gefühl, dass Zählzeit 1 in Richtung Zählzeit 2 'lehnt'. Subtil aber unverzichtbar.",
      },
      {
        title: "Orchester-Overlay (microKEY unverzichtbar)",
        detail: "Nachdem das Sample eingerastet ist: Revival (NI) Streicher auf einer neuen Gruppe laden. microKEY anschließen. Arm-Record. Akkord-Progression in LANGEN Sustains spielen — jeden Akkord für 4 volle Zählzeiten halten. 8 Takte aufnehmen. Dann anhören: die Streicher sollen sich anfühlen, als wären sie immer da gewesen. Wenn sie sich wie ein Zusatz anfühlen, Lautstärke um -3 dB reduzieren.",
      },
      {
        title: "Bass-Melodie, keine Basslinie",
        detail: "Kanyees Bass in 'Gold Digger', 'Gone', 'Heard Em Say' — er spielt eine Melodie, keine Basslinie. Ein Bass-Instrument laden (Massive X oder Scarbee aus Komplete 15). Programmieren, dass er die Terz und Quinte jedes Akkords spielt, nicht nur den Grundton. Das microKEY nutzen, um eine 2-Takt-Phrase durch die Akkordwechsel aufzunehmen.",
      },
      {
        title: "Szenen-basierte Hook-Erweiterung",
        detail: "Szene 1 (Verse) und Szene 2 (Hook) in Maschine erstellen. In Szene 1: kein Clap, keine Streicher, einfache Drums. In Szene 2: Clap-Pad-Link hinzufügen, Streicher-Gruppe aktivieren, extra Percussion hinzufügen. Der Übergang von Szene 1 zu Szene 2 soll sich anfühlen wie eine Klangwand, die ankommt — das ist der Kanye-Hook-Drop.",
      },
    ],
    packRecs: [
      { why: "Primäre Sample-Quelle für Chipmunk-Soul-Produktionen. Die Vocal-Soul-Loops sind ideal zum Hochpitchen. +4 Halbtöne und 105 % Geschwindigkeit anwenden." },
      { why: "Orchestrale Streicher und Blechbläser für den Late-Registration- und Graduation-Ära-Sound. Unverzichtbar für filmische Größe." },
      { why: "Für Kanyees härtere Produktionen. Die dunkleren Loops passen zu seinem weniger offensichtlich emotionalen Material." },
    ],
    microKeyTips: [
      "Streicher-Chord-Sustains über dem Drum-Pattern aufnehmen. Cm → Fm → Bb → Ebmaj-Progressionen spielen. Jeden Akkord 4 Zählzeiten (einen ganzen Takt) halten. Die Streicher sollen langsam aufblühen — Attack-Envelope auf 0,3 Sekunden setzen.",
      "Basslinie mit der rechten Hand spielen. Zwei Gruppen gleichzeitig in Maschine nutzen — beide empfangen microKEY-Input. Jede Gruppe separat aufnehmen: zuerst den Bass, dann die Streicher.",
      "Eine einfache 3-Noten-Kontermelodie (mit Klavier aus Komplete 15) spielen, die den emotionalen Höhepunkt des Soul-Samples widerspiegelt. Das ist die Kanye-Keyboard-Technik.",
    ],
  },

  "alchemist": {
    tagline: "Die filmische Dunkelheit",
    bio: "The Alchemist arbeitet im Raum zwischen Boom Bap und Filmmusik. Seine Beats fühlen sich an wie Szenen aus Kriminalfilmen — dunkle Vintage-Texturen, minimale Drum-Bewegung, Samples, die einen anstarren. Er ist ein Schüler von Premier und Havoc, aber er treibt die Dunkelheit weiter in abstraktes Territorium. Sein jüngeres Werk (Freddie Gibbs, Boldy James) reduziert die Drums auf ihr absolutes Minimum.",
    styleMarkers: [
      "Sehr minimales Kick-Pattern — oft nur Zählzeit 1 und Zählzeit 3",
      "Rimshot statt Snare in vielen Patterns — fügt abstrakte Qualität hinzu",
      "Viertelnoten- oder 8tel-Hats bei niedriger Velocity — Hintergrund, kein Groove",
      "Dunkle, vintage, fast degradiert klingende Samples",
      "Filmisches Klavier oder Streicher aus unerwarteten Quellen",
      "Langer Sustain auf allem — Reverb-Schwänze länger als die trockenen Sounds",
    ],
    drumPhilosophy: "Wenn man einen Drum-Hit entfernen kann und der Beat noch Sinn ergibt, herausnehmen. Weiter entfernen, bis er zusammenbricht. Dann einen Hit zurücklegen. Das ist die richtige Menge.",
    samplePhilosophy: "The Alchemist findet Platten, die niemand suchte — obskure europäische Bibliotheksmusik, internationale Volksaufnahmen, Horrorfilm-Soundtracks. Er legt diese dunklen, ungewöhnlichen Texturen unter Rap-Verses, wo sie einen psychologischen Druck erzeugen, den konventionelle Soul-Samples nicht können.",
    patterns: [
      {
        name: "Dark Vintage Minimal",
        description: "The Alchemist Baseline. Kick nur auf 1 und 3. Rimshot statt Snare (abstrakter, weniger konventionell). Viertelnoten-Hats bei kaum hörbarer Velocity. Das Sample erledigt die gesamte emotionale Arbeit.",
        maschineNote: "Rimshot statt Snare — mehrdeutiger, weniger assertiv. Viertelnoten-Hats bei Velocity 45 flat — kaum vorhanden. Ghost-Hits auf Steps 6 und 14 bei Velocity 30: das ist die einzige 'Bewegung' im Pattern. Alles andere ist absoluter Minimalismus.",
      },
      {
        name: "Gibbs Meets Queensbridge",
        description: "The Alchemist, der Havocs Einfluss noch filmischer macht. Der Kick auf Step 10 (die Havoc-Versetzung) mit leisen 8tel-Hats. Rimshot-Akzent auf Step 9 fügt einen unerwarteten Moment rhythmischer Spannung hinzu.",
        maschineNote: "Rimshot auf Step 9 (dem 'und' der 3) ist der Alchemist-Spannungsschlag. Velocity 65 — mittlere Stärke. Der Kick bei Step 10 ist ein Ghost-Kick: Velocity 70. Das Pattern hat 3 Rimshots — das erzeugt ein ungewöhnliches Akzentmuster, um das der Rapper herum navigieren muss.",
      },
    ],
    techniques: [
      {
        title: "Die Rimshot-Substitution",
        detail: "Das Snare-Pad durch einen Rimshot oder Sidestick ersetzen. In Sticks Toolkit einen trockenen Rimshot-Sound finden. KEIN Reverb anwenden — komplett trockene Bearbeitung. Das erzeugt The Alchemists abstrakte Qualität. Ein halliger Snare klingt nach einem Drumset. Ein trockener Rimshot klingt nach etwas anderem, etwas Filmischerem.",
      },
      {
        title: "Maximale Sample-Dunkelheit",
        detail: "Sample aus Odyssey Soul laden. Anwenden: Tiefpassfilter bei 7 kHz. Hochpass bei 100 Hz. EQ-Dip: -3 dB von 300–600 Hz (entfernt den 'präsenten' Mittenbereich). Stereobreite auf 20 % reduzieren. Das Sample soll klingen, als käme es aus einem dunklen Zimmer gegenüber.",
      },
      {
        title: "Das Minimalismus-Audit",
        detail: "Nach dem Aufbau des Patterns: Hats entfernen. Überlebt der Beat? Wenn ja — die Hats werden nicht gebraucht. Zurücklegen, aber Velocity um 50 % senken. Ghost-Hits entfernen. Überlebt der Beat? Ghost-Hits behalten — sie waren grenzwertig. The Alchemists Beats bestehen diesen Test, weil sie von Anfang an so wenig haben.",
      },
      {
        title: "Lange Reverb-Schwänze als Raum",
        detail: "Einen langen Reverb auf den KICK anwenden (nicht die Snare, nicht den Hat — den Kick). Decay auf 1,2 Sekunden, Mix auf 15 % setzen. Der Reverb-Schwanz des Kicks füllt den Raum zwischen den Hits und erzeugt das unterirdische, tief-in-einer-Höhle-Ambiente, das Alchemist-Produktionen definiert.",
      },
    ],
    packRecs: [
      { why: "Die dunkelsten, filmischsten Loops der Sammlung. Quellmaterial im Alchemist-Stil — obskur, atmosphärisch und tonal mehrdeutig. Den Dunkelheits-EQ-Treatment anwenden." },
      { why: "Vinyl-Crackle und Rausch-Samples bei fast unhörbaren Niveaus unter allem. The Alchemists Textur beruht auf diesem sublimalen Schmutz." },
      { why: "Die langsameren, melancholischeren Loops — nicht die uptempo Soul. Loops in Moll-Tonarten mit anhaltenden Akkorden und begrenzter Melodie suchen." },
    ],
    microKeyTips: [
      "The Alchemist fügt selten Live-Keys auf seine Samples hinzu — das Sample IST der harmonische Inhalt. Wenn das microKEY verwendet wird: EINE anhaltende Note (den Grundton) des Sample-Tonarts auf einem dunklen Streicher- oder Klavier-Patch spielen. 8 Takte halten. Das war's.",
      "Den Mod-Wheel des microKEY als Filter-Cutoff-Regler verwenden. Den Mod-Wheel auf einen Tiefpassfilter auf der Sample-Gruppe mappen. Langsam über 16 Takte öffnen und schließen. Das fügt Bewegung hinzu, ohne harmonischen Inhalt hinzuzufügen.",
    ],
  },

  "metro-boomin": {
    tagline: "If Young Metro Don't Trust You",
    bio: "Metro Boomin machte dunklen Trap zum dominanten Sound des Hip-Hop. Seine Formel ist täuschend einfach: Half-Time-Snare, atmosphärisches Intro, dunkler melodischer Loop und 808s, die das gesamte emotionale Gewicht tragen. Aber in dieser Einfachheit liegt enormes Handwerk — die 808-Melodien SIND der Beat, die Arrangements sind filmisch, und jedes Element ist präzise gewählt.",
    styleMarkers: [
      "Half-Time-Snare: nur auf Zählzeit 3 (Takt 1) und Zählzeit 1 (Takt 2) — sehr sparsam",
      "808-Sub-Bass, der zwischen Noten GLEITET — Melodie im Tieffrequenzbereich",
      "Dunkles atmosphärisches Intro (8–16 Takte vor dem Drum-Drop)",
      "Snare-Rolls und Hi-Hat-Triolen als Ornamente am Phrasenende",
      "Melodischer Loop aus Klavier, Glocke oder gestimmtem Perc (nicht Soul-Samples)",
      "Starker dynamischer Kontrast: Drop-Abschnitte vs. volle Abschnitte",
    ],
    drumPhilosophy: "Die 808 IST die Drum. Alles andere rahmt sie nur ein. Die Snare sagt 'hier ist die Tasche' — die 808 füllt diese Tasche mit Melodie und Emotion. Weniger Drums = mehr 808-Raum.",
    samplePhilosophy: "Metro verwendet melodische Loops aus Klavier-Rolls, dunklen Synth-Patches und gefundenem Sound — keine traditionellen Soul-Platten. Der Melodie-Loop kommt aus Kontakt-Bibliotheken, Synthesizern oder lizenzierten melodischen Sample-Packs. Er muss atmosphärisch und dunkel sein, nicht seelenvoll und warm.",
    patterns: [
      {
        name: "Without Warning",
        description: "Klassisches Metro-Trap bei 140 BPM. Half-Time-Feeling: Snare auf Step 8 klingt wie Zählzeit 2 bei 70 BPM. Doppelkick-Rolls auf 4+5 und 12+13.",
        maschineNote: "Hauptkick (0, 8) bei Velocity 110. Roll-Kicks (4, 12) bei 85, (5, 13) bei 65. Kaskadierende Velocity erzeugt das Trap-Roll-Feeling. Offene Hats 12–13–14 am Taktende: Metro-Triolen-Ornament. Flat-16tel-Hats bei Velocity 65 — mechanisch, keine Variation.",
      },
      {
        name: "Slow Metro (Modern Hip Hop)",
        description: "Metros langsamerer Hip-Hop-Modus. Bei 76 BPM läuft das Pattern mit der halben Trap-Geschwindigkeit. Die 808-Basslinie trägt die Melodie. Hat-Rolls auf Steps 12–14 sind das Signatur-Ornament.",
        maschineNote: "Die 808-Melodie im Piano Roll als MELODIE programmieren — nicht nur Grundtöne. Zwischen Noten gleiten (Portamento/Glide auf dem 808-Instrument aktivieren). Der Kick auf Step 9 (das 'e' der 3) ist der Metro-Stutter-Kick — Velocity 75.",
      },
    ],
    techniques: [
      {
        title: "Die 808-Melodie (das Wichtigste)",
        detail: "Eine neue Gruppe für die 808 erstellen. Massive X (Komplete 15) laden — 808-Preset verwenden oder eine Sinuswelle mit langem Release erstellen. Portamento (Glide) aktivieren. Im Piano Roll: eine Melodie mit Grundton, kleiner Terz, Quinte und kleiner Septime programmieren. Zwischen Noten gleiten. Diese Melodie IST der Beat. Alles andere unterstützt sie.",
      },
      {
        title: "Das atmosphärische Intro (8 Takte ohne Drums)",
        detail: "Szene 1 in Maschine mit NUR der Melodie-Gruppe aktiv erstellen. Kein Kick, keine Snare, keine Hats — nur den dunklen atmosphärischen Loop und 808-Pad. 8 Takte laufen lassen. Dann fällt Szene 2 mit allem gleichzeitig. Der Kontrast ist der Impact. Metro verwendet das auf praktisch jedem Beat.",
      },
      {
        title: "Die Half-Time-Snare",
        detail: "Bei 140 BPM die Snare NUR auf Step 8 (eine Snare pro Takt) programmieren. Das erzeugt ein Half-Time-Gefühl — das Gehirn nimmt das Tempo als 70 BPM wahr, obwohl die Hats bei 140 BPM laufen. Das ist die definierende Trap-Technik. Niemals eine Snare auf Step 4 in Metro-Stil-Produktion setzen.",
      },
      {
        title: "Kick-Roll-Kaskade",
        detail: "Für den Trap-Doppelkick-Roll: Kick auf Steps 4 und 5 programmieren (Velocity 85 und 65). Auch auf Steps 12 und 13. Die kaskadierende Velocity (höher → niedriger) erzeugt das 'Roll'-Feeling. Auch einen einzelnen Kick auf Step 0 (Velocity 110) als Downbeat-Anker hinzufügen. Diese 5 Kick-Hits bilden das Metro-Trap-Kick-Pattern.",
      },
      {
        title: "Triolen-Hat-Ornament",
        detail: "Am Ende jeder Phrase (Takt 4, Takt 8 usw.): den offenen Hat auf Steps 12, 13, 14 bei Velocities 80, 90, 100 (aufbauendes Crescendo) aktivieren. Das ist das Metro-Phrasenende-Ornament. Es signalisiert 'gleich passiert etwas' auf der Arrangement-Ebene.",
      },
    ],
    packRecs: [
      { why: "Die dunklen, atmosphärischen Pads sind perfekt für Metros melodische Loop-Schicht. Tiefpass bei 12 kHz und Reverb hinzufügen. Diese Pads klingen wie hinter Glas — genau richtig." },
      { why: "Zeitgenössische Perc-Elemente für die Trap-Drum-Textur — die verarbeiteteren, modernen Optionen. Nicht das organische Perc." },
      { why: "Die sauberen, verarbeiteten Trap-ähnlichen Drums. Die engsten, druckvollsten Kick- und Snare-Optionen wählen. Metros Drums sind präzise Instrumente, keine organischen Sounds." },
    ],
    microKeyTips: [
      "Die 808-Melodielinie auf dem microKEY mit aktiviertem Portamento spielen. Von Note zu Note gleiten statt staccato spielen — das Gleiten zwischen Noten ist die Signatur-808-Melodie-Technik. Bei 1/8-Quantisierung aufnehmen.",
      "Den atmosphärischen Loop-Pad mit der linken Hand spielen, während aufgenommen wird. Jeden Akkord 4 Zählzeiten halten. Die Pads sollen einfach da sitzen — keine Bewegung, keine Akkordwechsel. Die 808 liefert die gesamte Melodie.",
      "Den Pitch Bend des microKEY verwenden, um den 808-Slide an Übergangspunkten zu erzeugen. Eine Note halten, dann am Taktübergang einen Halbton nach oben benden. Das erzeugt den emotionalen Höhepunkt der Metro-808-Melodie.",
    ],
  },

  "9th-wonder": {
    tagline: "Reine Seele, reine Drums",
    bio: "9th Wonder ist der reinste Soul-Sample-Produzent, der noch aktiv ist. Keine Tricks, keine Gimmicks — er findet den emotional resonantesten Abschnitt einer Soul-Platte, loopt ihn und legt Drums darunter mit so perfektem Timing, dass sich die Drums anfühlen, als wären sie immer Teil der Originalaufnahme gewesen. Sein Ansatz ist täuschend einfach: die Wärme und Menschlichkeit in seinen Beats kommen aus den Platten, nicht aus Studio-Manipulation.",
    styleMarkers: [
      "Einfache Kick/Snare-Patterns — fast immer gerades 1+3 mit Swing",
      "Soul- und R&B-Sample-Quellen — die reichsten, menschlichsten Aufnahmen",
      "Schwerer Swing (58–66 %), der das Soul-Sample noch organischer erscheinen lässt",
      "Sehr begrenzte zusätzliche Elemente — ein Sample, ein Drum-Pattern, minimale Ergänzungen",
      "Warme, lo-fi Sample-Bearbeitung — maximal Hochpass bei 80 Hz, kein heller EQ",
      "Ghost-Noten auf der Snare, die das Feeling des Originalschlagzeugers spiegeln",
    ],
    drumPhilosophy: "Die Soul-Platte hat bereits die besten Drums der Welt — den Originalschlagzeuger, der in dieser Session gespielt hat. Meine Aufgabe ist es, zu finden, wo diese Drums wären, und dort zu sein. Je einfacher, desto besser.",
    samplePhilosophy: "9th Wonder hört Tausende von Platten, bevor er die eine findet. Er sucht nach den PERFEKTEN 4 Takten — dem Moment im Song, wo das Feeling auf seinem Höhepunkt ist, bevor der Text wechselt. Dieser Moment wird der Loop.",
    patterns: [
      {
        name: "Soul Bubble",
        description: "Purer 9th Wonder. Kick nur auf 1 und 3. Standard-2+4-Snare. Warme 8tel-Hats bei schwerem Swing. So einfach wie es geht, aber bei 62 % Swing hüpft es wie ein Strandball.",
        maschineNote: "Swing: 62 %. Das ist die EINZIGE Abweichung vom einfachsten möglichen Pattern. Der Swing erledigt die gesamte Arbeit. Kick bei Velocity 100. Snare bei Velocity 95. Hats: Downbeats bei 85, Upbeats bei 50. Das Soul-Sample liefert alles andere — Harmonie, Melodie, Textur, Emotion.",
      },
      {
        name: "Carolina Bounce",
        description: "Der etwas härtere 9th Wonder. Der Kick auf Step 5 fügt den Pete-Rock-beeinflussten Push hinzu. Ghost-Snares auf Steps 14–15 bereiten den Loop wunderschön vor. Bei 60 % Swing tanzt dieses Pattern.",
        maschineNote: "Ghost-Snares auf 14–15 bei Velocity 28 und 42. Diese Signatur trennt 9th Wonder von einfachen Produzenten, die nur Kick+Snare verwenden. Der Ghost-Roll bereitet den Loop vor. Kick auf Step 5 bei Velocity 70 (der Bounce-Kick). Swing: 60 %.",
      },
    ],
    techniques: [
      {
        title: "Die perfekten 4 Takte finden",
        detail: "Bevor Maschine angerührt wird, Soulful-Dreams-Samples in voller Länge anhören. Nicht sofort choppen — den ganzen Track durchhören. DEN EINEN Abschnitt finden, wo der emotionale Höhepunkt spürbar ist. Dieser 4-Takt-Abschnitt ist der Loop. 9th Wonder würde Stunden damit verbringen, diesen zu finden, bevor er einen einzelnen Drum-Hit programmiert.",
      },
      {
        title: "Swing zuerst, immer",
        detail: "Group Swing auf 62 % setzen, bevor eine Note programmiert wird. Den Kick (0 und 8) programmieren, dann die Snare (4 und 12), dann die Hats (8tel-Noten). Anhören. Bei 62 % Swing soll dieses einfache Pattern sich bereits anfühlen, als würde es atmen. Wenn es sich noch nicht richtig anfühlt, die Swing-Einstellung überprüfen — sie ist wahrscheinlich zu niedrig.",
      },
      {
        title: "Die minimale Bearbeitungsregel",
        detail: "Für das Sample: NUR einen Hochpassfilter bei 80 Hz anwenden (Sub-Rumpel entfernen). Nichts anderes. Kein weiterer EQ, keine Sättigung, kein Reverb, keine Stereobreitenanpassungen. 9th Wonders Beats klingen wie die Platte, die durch gute Lautsprecher in einem echten Raum gespielt wurde. Überbearbeitung zerstört diese Qualität.",
      },
      {
        title: "Ghost-Note-Studie",
        detail: "Wenn das verwendete Soul-Sample echte Drums enthält (viele Soul-Platten haben sie), genau hinhören, wo der Originalschlagzeuger Ghost-Noten platziert. Diese rhythmischen Positionen identifizieren und eigene Ghost-Snares dort HINZUFÜGEN. Das schafft eine sublimale Verbindung zwischen programmierten Drums und der Originalaufnahme.",
      },
    ],
    packRecs: [
      { why: "Das ist die primäre Quelle. Die Soul-Loops erfassen die gleiche Wärme und Menschlichkeit, nach der 9th Wonder in Vinyl sucht. Den minimalen EQ-Treatment anwenden — nur Hochpass bei 80 Hz." },
      { why: "Für 9th Wonders dunklere, melancholischere Tracks. Die atmosphärischeren Loops passen zu seinem weniger fröhlichen Werk." },
      { why: "Die organischen, rohen Drum-Sounds. Die wärmsten, am wenigsten verarbeiteten Optionen wählen. 9th Wonders Kit klingt wie Drums aus einer 70er-Jahre-Aufnahmesession." },
    ],
    microKeyTips: [
      "9th Wonder fügt selten melodische Elemente über das Sample hinzu. Wenn das microKEY verwendet wird: eine einzelne Grundton-Note auf einem warmen Rhodes-Patch (The Gentleman aus Komplete 15) spielen und für den gesamten 4-Takt-Loop halten. Eine Note. Das ist alles.",
      "Das microKEY verwenden, um den exakten Akkord des Samples zu spielen — die Tonart finden, den Tonika-Akkord sehr leise bei Velocity 30–40 spielen. Das füllt etwaige Frequenzlücken zwischen Sample und Drums, ohne neuen harmonischen Inhalt hinzuzufügen.",
    ],
  },

  "pharrell": {
    tagline: "Die Drums SIND die Melodie",
    bio: "Pharrell und The Neptunes schufen einen Drum-Sound ungleich allem, was vorher war. Sparsame, klickige, minimalistische Patterns mit live aufgenommenen Drum-Fills, synthetisierter Melodie, die die Grenze zwischen Hip-Hop und Funk verwischte, und einem tonalen Sinn, der von Prince und Stevie Wonder entlehnt war. Seine Beats fühlen sich an, als würden sie im Sonnenlicht existieren — nichts Dunkles, alles melodisch, jedes Element für maximale Groove-Effizienz gewählt.",
    styleMarkers: [
      "Drum-Machine-Patterns, die wie ein Live-Schlagzeuger klingen — präzise aber menschlich",
      "Sehr wenige Drum-Elemente — Kick, Clap/Snare und EIN einfaches Hat-Pattern",
      "Live-Drums für Fills und Übergänge (nicht programmiert — eingespielt)",
      "Hochgestimmte, Synth-basierte melodische Elemente, die auch als Percussion fungieren",
      "Samples sehr selten verwendet — fast ausschließlich Original-Produktion",
      "Die Snare sitzt hoch im Mix und ist meist ein Clap oder stark verarbeiteter Snare",
    ],
    drumPhilosophy: "Ich möchte, dass die Drums dich zum Lächeln bringen, bevor du weißt warum. Der Schlag des Kicks soll sich anfühlen wie ein Klaps auf die Schulter. Die Snare soll sich anfühlen wie ein Zwinkern.",
    samplePhilosophy: "Pharrell verwendet fast nie Samples — alles ist Original. Er spielt die Melodie, er programmiert den Rhythmus, er nimmt Live-Instrumente auf. Der Neptunes-Sound ist fast vollständig aus dem Nichts konstruiert — in Echtzeit mit Live-Musikern und Synthesizern.",
    patterns: [
      {
        name: "Neptunes Click",
        description: "Der klassische sparsame Neptunes-Groove. Der 'Click'-Kick (Step 3) ist das Signatur-Element — ein metallischer, Synth-artiger Kick-Hit, der zwischen Downbeat und Snare erscheint. Die Viertelnoten-Snare sitzt ungewöhnlich hoch im Mix.",
        maschineNote: "Der 'Click'-Kick auf Step 3 soll ein ANDERER Kick sein als der Haupt-Kick — kürzer, höher gepitcht, metallischer. Einen Synth-artigen Kick laden oder den Haupt-Kick um +5 Halbtöne nach oben pitchen. Velocity 75. Viertelnoten-Hats bei Velocity 60. Der Clap (nicht Snare) sitzt laut im Mix bei Velocity 105.",
      },
      {
        name: "Happy Bounce",
        description: "Der sonnigere, melodischere Pharrell-Ansatz. Der Kick läuft auf 1, 3 UND dem 'und' der 4 (Step 14). Dieser ungewöhnliche Späte-4-Kick erzeugt den Bounce, der 'Happy' wie das weltaufmunterndste Drum-Pattern fühlen lässt.",
        maschineNote: "Der Kick auf Step 14 (dem 'und' der 4) bereitet Zählzeit 1 des nächsten Takts mit enormer Antizipation vor. Velocity 80. Offener Hat auf Step 10 (dem 'und' der 3): Choke-Gruppe mit geschlossenem Hat. Bei 8tel-Swing 56 % bounced dieses Pattern auf eine Weise, die körperlich unwiderstehlich ist.",
      },
    ],
    techniques: [
      {
        title: "Kick auf die Tonart stimmen",
        detail: "Die Neptunes-Signatur-Click ist ein GESTIMMTER Kick. In Maschine: einen runden, melodischen Kick aus Sticks Toolkit laden. Zum Tune-Bereich gehen. Die Tonhöhe so einstellen, dass die Grundnote des Kicks dem Grundton des Tracks entspricht. Jetzt IST der Kick ein musikalisches Element, kein bloßer Zeitgeber. Das ist die wichtigste Neptunes-Technik.",
      },
      {
        title: "Der Clap vorne im Mix",
        detail: "Pharrells Clap schlägt in vielen seiner Produktionen lauter als der Kick. Clap-Pad-Lautstärke auf 0 dB setzen. Alle anderen Drum-Elemente auf -2 bis -4 dB setzen. Der Clap soll das lauteste Element im Drum-Pattern sein. Das ist kontraintuitiv, aber es erzeugt die Neptunes-'Helligkeit' — der Clap zieht einen hinein.",
      },
      {
        title: "Live-Keys-Melodie (microKEY unverzichtbar)",
        detail: "Pharrells Produktionen sind zu 80 % live gespielt. Eine Synth-Melodielinie auf dem microKEY in Echtzeit aufnehmen. Nicht übermäßig quantisieren — das natürliche Feeling erlauben. Ein 4-Noten-Melodie-Pattern spielen, das sich alle 2 Takte wiederholt. Diese Melodie soll einfach genug für den Verse sein und hell genug, um den Sound zu definieren.",
      },
      {
        title: "Melodische Basslinie (microKEY)",
        detail: "Pharrells Basslinien spielen Melodien, keine Basslinien. Scarbee Rickenbacker oder Massive X Bass-Patch laden. microKEY anschließen. Eine kontinuierliche Melodielinie mit 4–6 Noten pro Takt spielen. In Echtzeit aufnehmen. Die Neptunes-Basslinie ist fast nie ein einfaches Grundton-Quinte-Pattern — sie ist ein aktives melodisches Instrument.",
      },
      {
        title: "Minimales Kit, maximaler Groove",
        detail: "Sich einschränken: Kick, Clap, ein Hat. Das sind 3 Elemente total. Das ist die Neptunes-Einschränkung. Mit dieser Begrenzung kann man sich nicht hinter Komplexität verstecken — der Groove muss im Feeling, im Swing und der Interaktion dieser 3 Elemente liegen. Ein 4. Element nur hinzufügen, wenn das 3-Element-Pattern bereits von selbst tanzt.",
      },
    ],
    packRecs: [
      { why: "Helle, melodische Pad-Elemente, die zur Neptunes-Ästhetik passen. Als melodischen Hintergrund verwenden — hell, präsent und funktional ohne aufdringlich zu sein." },
      { why: "Für die engsten, saubersten Drum-Sounds. Die präsentesten und hellsten Optionen wählen — Neptunes-Drums kommen klar durch. Keine Vintage- oder Lo-Fi-Optionen." },
      { why: "Synth- und elektronische Perc-Elemente, die die Neptunes melodische Percussion-Schicht erzeugen. Die Synth-näheren Sounds sind das, was Pharrell tatsächlich verwendet." },
    ],
    microKeyTips: [
      "Das melodische Hauptthema auf dem microKEY mit einem hellen Synth-Patch aus Komplete 15 spielen. Staccato-Berührung verwenden — jede Note kurz und perkussiv, nicht anhaltend. Pharrells Melodien fühlen sich an, als würden sie gezupft, nicht gehalten. Bei 1/16-Quantisierung aufnehmen.",
      "Mit der linken Hand Bass spielen, während der Drum-Loop läuft. Konstant bewegen — mindestens 4 verschiedene Noten pro Takt. Die Basslinie soll melodisch genauso interessant sein wie die Hauptlinie. Beide auf demselben Pass aufnehmen, indem zwei Gruppen gleichzeitig auf microKEY-Input geroutet werden.",
      "Den Pitch Bend des microKEY für Funk-Gitarren-Bends in den Melodielinien nutzen. Einen ganzen Ton nach oben benden, dann sofort loslassen. Das erzeugt den Prince/Stevie-Wonder-beeinflussten Flavor, der Pharrells melodischen Sinn definiert.",
    ],
  },

  "akhenaton": {
    tagline: "Das Mittelmeer trifft auf Brooklyn",
    bio: "Akhenaton ist der Architekt des französischen Boom Bap. Als Mitgründer von IAM in Marseille baute er ein klangliches Universum, das harte New Yorker Drum-Strukturen mit mediterraner melodischer Dunkelheit verbindet — arabische Tonleitern, marokkanische Einflüsse und schwere Vinyl-Körnigkeit saßen neben East-Coast-Loop-Techniken. Seine Beats fühlen sich zugleich uralt und straßennah an, ein Sound, der spezifisch für Marseilles multikulturelle Realität ist.",
    styleMarkers: [
      "Dunkle Vinyl-Loops mit starkem Tiefpassfilter — gealtert, staubig, atmosphärisch",
      "Boom-Bap-Drum-Struktur: harter Kick auf 1 und 3, enger Snare auf 2 und 4",
      "Mediterran und arabisch beeinflusste melodische Quellen — ungewöhnliche Tonleitern",
      "Minimale Hat-Variation — 8tel-Noten bei niedriger Velocity, selten 16tel",
      "Sample kaum verändert — die Emotion des Originals erhalten",
      "Basslinie, die der Grundtonbewegung des Samples folgt, keine separate Komposition",
    ],
    drumPhilosophy: "Die Drums müssen das Gewicht der Straße tragen. In Marseille bedeutet das etwas Schwereres und Bedächtigeres als die Standard-Boom-Bap-Vorlage — weniger Dekoration, mehr Schwerkraft. Kick und Snare sind nicht verhandelbar. Alles andere ist optional.",
    samplePhilosophy: "Die Platte liefert die Seele. Ich suche nach der Melancholie — speziell nach den Intervallen, die etwas Unauflösbares fühlen lassen. Nordafrikanische Musik, algerischer Raï, marokkanische Gnawa, andalusische Klassik — diese hatten die emotionale Qualität, die ich unter französischer Straßenlyrik brauchte. Dann nehme ich so wenig wie möglich vom Sample und lasse es laufen.",
    patterns: [
      {
        name: "Marseille Boom",
        description: "Das IAM-Kernpattern. Gerader Boom Bap, aber langsamer und bedächtiger als in NYC — der Drag ist der Punkt. Der offene Hat auf Step 10 gibt dem Pattern einen mediterranen Schwung.",
        maschineNote: "Offener Hat auf Step 10 (dem 'und' der 3): Choke-Gruppe mit geschlossenem Hat. Velocity 65. Kick bei 95, Snare bei 90. Hats bei 42 — tief im Mix, atmosphärisch. Swing 56 %. Der offene Hat ist kein Akzent — er ist eine Stimmung.",
      },
      {
        name: "L'Empire du Côté",
        description: "Vom klassischen IAM-Album-Feeling inspiriert. Ein zusätzlicher Kick auf Step 11 verschiebt den Groove nach vorne. Ghost-Snare auf 14 erzeugt Pre-Downbeat-Spannung.",
        maschineNote: "Kick auf Step 11 bei Velocity 75 (weicher als Hauptkicks bei 95). Ghost-Snare auf 14 bei Velocity 28. Hats Velocity 40 mit sehr leichtem Humanize (±3). Das Sample sollte dunkel, unter 9 kHz gefiltert sein, mit einem subtilen Reverb-Schwanz, der in die Stille blutet.",
      },
    ],
    techniques: [
      {
        title: "Der mediterrane Filter",
        detail: "Beliebigen Loop aus Soulful Dreams Vol 1 oder 2 laden. Tiefpassfilter bei 9 kHz anwenden. Sättigung hinzufügen (Saturator in Maschine: +10 % Drive). Stereobreite auf 25 % reduzieren. Dieser Prozess lässt moderne Samples klingen, als wären sie von nordafrikanischem Vinyl gesampelt — das Korn, auf dem Akhenaton seine Palette aufbaute.",
      },
      {
        title: "Dunkel-Tonleiter-Quellenauswahl",
        detail: "Bei Sampling oder melodischem Spiel nach Quellen in Moll-Tonleitern mit kleiner Sekunde (Phrygisch) oder harmonischem Moll mit erhöhter Septime suchen. Diese Intervalle erscheinen ständig in andalusischer Klassik, arabischem Maqam und algerischem Raï. Selbst ein kleines melodisches Fragment in diesen Tonleitern trägt das mediterrane emotionale Gewicht von Akhenatems Beats.",
      },
      {
        title: "Kick auf 1 und 3 — Niemals abweichen",
        detail: "Akhenatoms Kick ist fast immer nur auf Zählzeiten 1 und 3 — Steps 0 und 8. Das ist bewusster Konservatismus. Der Kick verankert das Metrum, damit das Sample darüber schweben kann. Jede Variation am Kick (außer sehr gelegentlichen Ghost-Kicks) untergräbt die Schwerkraft des Patterns.",
      },
      {
        title: "Vinyl-Loop als Hauptinstrument",
        detail: "Kein separates Melodieinstrument hinzufügen. Das Sample IST die Melodie. In Maschine: den gefilterten Vinyl-Loop als separaten Audio-Track bei 0 dB laden. Alles andere sitzt darunter. Der Loop läuft bei seiner Originaltonhöhe — nicht transponieren, außer beim Tonartenwechsel. Das Sample liefert alle Harmonie und alle Emotion.",
      },
      {
        title: "Minimales Kit (maximal 5 Elemente)",
        detail: "Akhenaton beschränkt seine Kits: Kick, Snare, Hi-Hat, optionaler offener Hat, Vinyl-Crackle. Fünf Elemente. Jedes muss seine Präsenz rechtfertigen. Vor dem Abschluss fragen, ob das Entfernen des offenen Hats das Stück stärker macht. Oft lautet die Antwort ja.",
      },
    ],
    packRecs: [
      { why: "Die dunkleren Loops tragen die Moll-Tonalität und das emotionale Gewicht von Akhenatoms Quellmaterial. Unter 9 kHz filtern und Stereo-Bild auf 25 % verengen." },
      { why: "Vinyl-Crackle-Loops für das staubige Fundament. Akhenatoms Beats fühlen sich an, als kämen sie aus dem Plattenregal von jemandes Großvater." },
      { why: "Rohe, unverarbeitete Drum-Sounds — die minimalsten Optionen wählen. Akhenatoms Drums sind Werkzeuge, keine Aussagen." },
      { why: "Leichte Percussion-Elemente für gelegentliche Akzente aus der nordafrikanischen und mediterranen Handpercussion-Tradition." },
    ],
    microKeyTips: [
      "Bassgrundtöne auf dem microKEY spielen, den Akkordwechseln des Samples folgend. Eine Note pro Takt, auf Zählzeit 1. Der Bass bestätigt die harmonische Bewegung des Samples, ohne mit ihm zu konkurrieren.",
      "Für eine melodische Schicht: ein Phrygisches Tonleiter-Pattern (C Db E F G Ab Bb C) auf dem microKEY mit einem dunklen Oud- oder Ney-ähnlichen Patch aus Komplete 15 spielen. Maximal eine Phrase alle 8 Takte.",
      "Den Mod-Wheel verwenden, um langsam Vibrato zu einer gehaltenen Bassnote hinzuzufügen. Bei Takt 1 bei null beginnen, bis Takt 4 volles Vibrato erreichen. Akhenatoms mediterraner Einfluss lebt in diesen kleinen expressiven Details.",
    ],
  },

  "dj-mehdi": {
    tagline: "Lucky Boy — Das Herz des französischen Boom Bap",
    bio: "DJ Mehdi war der vielseitigste und geliebteste Produzent in der Geschichte des französischen Hip-Hop. Vom Pariser Underground aus baute er Beats für Oxmo Puccinos wegweisende Alben, bevor er sich zur Elektronik mit Ed Banger Records hin erweiterte — Boom Bap und Dance Music auf eine Weise verbindend, die niemand anderes zuvor hatte. Seine Beats waren warm, jazzig und technisch makellos. Beeinflusst von Pete Rock und DJ Premier, aber mit etwas eindeutig Pariserischem, starb er 2011 mit 34 Jahren und hinterließ ein Werk, das noch heute das goldene Zeitalter des französischen Hip-Hop definiert.",
    styleMarkers: [
      "Jazz- und Soul-Sample-Quellen — warm, humanistisch, mit Akkordwechseln",
      "Pete-Rock-beeinflusste geschwungene 8tel-Noten — der Bounce ist die Signatur",
      "Kick versetzt auf dem 'und' der 2 (Step 6) — erzeugt Vorwärts-Momentum",
      "Horn- und Blechbläser-Samples als sekundäre melodische Schichten hinzugefügt",
      "Hi-Hat-Velocity-Variation: starke Downbeats, Flüster-Upbeats — fühlt sich live an",
      "Snare mit einem Mittelbereichs-Crack — nicht dumpf, nicht dünn — perfekt zentriert",
    ],
    drumPhilosophy: "Der Beat soll natürlich swingen, wie ein Jazz-Schlagzeuger, der einen gebürsteten Snare antreibt. Die MPC ist ein Instrument. Man muss sie mit demselben Feeling spielen, das ein Schlagzeuger hat — selbst Einzelton-Samples brauchen menschliches Feeling in ihrer Velocity und ihrem Timing.",
    samplePhilosophy: "Mehdi sampelte Jazz und Soul so wie Pete Rock es tat — respektvoll. Er suchte nach der Wärme auf einer Platte: den Moment, an dem ein Klavierakkord etwas zu hoch angeschlagen wurde, oder das Hornriff, das fast perfekt war. Diese Unvollkommenheit trägt Leben. Er wollte dieses Leben in jedem Beat.",
    patterns: [
      {
        name: "Lucky Boy Swing",
        description: "Der quintessenzielle Mehdi-Groove. Kick auf Zählzeit 1 plus der versetzte Hit auf Step 6 (und der 2) erzeugt die Pete-Rock-ähnliche nach-vorne-Lehnung. Die Akzent-Snare auf Step 11 (und der 3) ist die Mehdi-Signatur — direkter Erbe von Premiers Akzentschlag.",
        maschineNote: "Swing 60 %. Kick auf Step 6 bei Velocity 80 (weicher als Hauptkicks bei 100 und 95). Hi-Hat-Velocity: Steps 0/4/8/12 bei 75, alle anderen Steps bei 38 — dieses 2:1-Verhältnis erzeugt ein schwingend-lebendiges Gefühl. Akzent-Snare auf Step 11: Velocity 78, gleiche Snare-Sample.",
      },
      {
        name: "Oxmo Blue",
        description: "Der langsamere, melancholischere Mehdi — für Oxmo Puccinos Storytelling. Ultra-geswingt, fast in J-Dilla-Territorium. Das Pattern atmet mit offenem Raum: Kick, Snare und geflüsterte 8tel-Hats. Das Jazz-Sample trägt alles.",
        maschineNote: "Swing 62 % — auf diesem Niveau ziehen die Upbeat-Hats fast bis zum nächsten Downbeat. Das ist absichtlich: es imitiert einen leicht lockeren Jazz-Schlagzeuger, was genau das Feeling auf Oxmos Platten ist. Ghost-Snare auf Step 14 bei Velocity 22. Alle Hats bei Velocity 35 — fast subliminal.",
      },
    ],
    techniques: [
      {
        title: "Das 2:1-Hat-Velocity-Verhältnis",
        detail: "Das ist der Kern von Mehdis schweigendem Feeling. Hi-Hat-Velocity für ALLE Downbeat-Steps (0, 4, 8, 12) auf 75 setzen. ALLE Upbeat-Steps (2, 6, 10, 14) auf 38 setzen. Dieses 2:1-Verhältnis kombiniert mit 60 %-Swing-Timing erzeugt die Live-Schlagzeuger-Bürsten-Hat-Illusion. Die Velocities niemals angleichen — der Kontrast IST der Swing.",
      },
      {
        title: "Jazz-Sample mit Akkordwechseln",
        detail: "Mehdis Quellen haben harmonische Bewegung — kein statischer 1-Takt-Loop, sondern eine 2- oder 4-Takt-Progression. Einen Loop aus Soulful Dreams Vol 1 oder 2 laden, der Akkordwechsel hat. Den Loop auf genau 2 Takte einstellen. Die Akkordwechsel werden zum emotionalen Bogen des Songs. Dem Drang widerstehen, ihn zu choppen — den Jazz-Musiker-Vortrag atmen lassen.",
      },
      {
        title: "Horn-Schicht als Kontermelodie",
        detail: "Nachdem das Sample läuft, ein Horn- oder Blechbläser-Einzelton aus Odyssey Soul auf Pad B4 laden. An einer Off-Beat-Position platzieren — Step 9 oder 13 — als Antwort auf den melodischen Inhalt des Samples. Mehdi liebte Call-and-Response zwischen der geloopten Quelle und einem einzelnen Horn-Hit. Velocity 72, kein Reverb.",
      },
      {
        title: "Versetzter Kick (Das Pete-Rock-Erbe)",
        detail: "Einen Ghost-Kick auf Step 6 (dem 'und' der 2) bei Velocity 78 hinzufügen — weicher als die Hauptkicks. Diese Kick-Versetzung ist Mehdis direktes Erbe von Pete Rock. Sie erzeugt die nach-vorne-Lehnung, die einen unwillkürlich nicken lässt. Nichts anderes zwischen Steps 4 und 8 platzieren — die Versetzung braucht Raum zum Atmen.",
      },
      {
        title: "Wärme-Stack: Vinyl + Tiefpass + Sättigung",
        detail: "Auf die Haupt-Drum-Gruppe anwenden: (1) Saturator bei +15 % Drive, (2) EQ-Boost bei 200 Hz +1,5 dB für Körper, (3) Sample bei 60 Hz hochpassfiltern, um Sub-Schlamm zu entfernen. Dann Vinyl-Crackle darunter bei Velocity 18 laufen lassen. Diese drei Schichten erzeugen den warmen, humanistischen Sound, der DJ Mehdis gesamte klangliche Identität definierte.",
      },
    ],
    packRecs: [
      { why: "Jazzangehauchte und Soul-Loops mit Akkordwechseln und Live-Instrument-Feeling. Loops mit Bewegung suchen — keine statischen Ein-Akkord-Loops. Das ist Mehdis exaktes Quellterritorium." },
      { why: "Horn- und Blechbläser-Einzeltöne für Mehdis Kontermelodie-Technik. Einen einzelnen Horn-Hit auf einem Off-Beat-Step als Call-and-Response mit dem Sample schichten." },
      { why: "Vinyl-Crackle bei Velocity 18 unter allem laufen lassen. Das Pariser Goldzeitalter-Wärme-Fundament." },
      { why: "Jazz-Percussion und Bürsten-Hits für Texturelemente bei sehr niedriger Velocity." },
    ],
    microKeyTips: [
      "Klavier-Akkord-Voicings auf dem microKEY spielen, der Sample-Progression folgend. Ein Wurlitzer- oder Rhodes-Patch aus Komplete 15 verwenden. Hinter dem Beat spielen — jeden Akkord 50 ms nach dem Grid-Vorschlag loslassen. Mehdis melodische Ergänzungen fühlten sich immer leicht dahinter an.",
      "Eine einfache melodische Gegenstimme mit einem gedämpften Trompeten-Patch aufnehmen. Auf dem microKEY spielen: 3–4 Noten alle 4 Takte, auf Off-Beats. Das ist Mehdis Signatur-Bewegung — ein Instrument antwortet dem anderen.",
      "Aftertouch am microKEY nutzen, um Vibrato zu gehaltenen Klavier-Noten hinzuzufügen. Nach dem Anschlagen tiefer in die Taste drücken — das Vibrato blüht langsam. Mehdis Keyboard-Ergänzungen hatten immer diese expressive Unvollkommenheit.",
    ],
  },

  "myth-syzer": {
    tagline: "Der Geschmack des Samples",
    bio: "Myth Syzer ist der definierende Produzent der modernen Ära des französischen Hip-Hop. Er trägt die Fackel der Boom-Bap-Sample-Kultur in die 2010er und darüber hinaus — gefiltert durch eine Pariser Sensibilität, die Wärme, Melodie und emotionale Intelligenz schätzt. Seine Beats für Nekfeu setzten einen neuen Standard für die französische Lyrik-Rap-Produktion. Mit Roméo Elvis und Lomepal bewies er, dass der Sample-basierte Ansatz eine neue Generation beschallen kann, ohne seine Wurzeln zu kompromittieren.",
    styleMarkers: [
      "Warme, seelvolle Samples — Soul, Jazz, Funk — sorgfältig und geschmackvoll gefiltert",
      "Kick auf Zählzeit 1 und gelegentliche Step-10-Versetzung — mehr Groove als Akhenaton",
      "Snare sitzt im Verhältnis zum Sample im Hintergrund — unterstützt, dominiert nicht",
      "16tel-Hat-Velocity-Abfall (laut auf dem Downbeat, abdachend)",
      "Basslinie, die sich melodisch bewegt, nicht nur auf dem Grundton",
      "Sauberer, warmer Mix — präsente Höhen, kein schmutziger Mitteltieftonbereich",
    ],
    drumPhilosophy: "Das Sample ist das emotionale Zentrum. Die Drums rahmen es, halten es, lassen es bounchen — aber sie versuchen nie, der Hauptcharakter zu sein. Im französischen Hip-Hop ist das Wort am wichtigsten, also muss der Beat genug atmen, damit die Lyrik darin Platz findet. Ich baue Negativraum absichtlich.",
    samplePhilosophy: "Ich suche zuerst das Feeling — nicht das Tempo, nicht die Tonart. Macht mich diese Platte emotional, bevor ich sie im Kontext höre? Die technischen Fragen kommen danach. Ich grabe nach Soul, Funk und Jazz, weil diese Musiker live spielten und man den Raum spürt, in dem sie waren. Diese physische Präsenz ist das, was ich unter einem Rapper haben möchte.",
    patterns: [
      {
        name: "Nekfeu Float",
        description: "Der moderne französische Boom-Bap-Standard. 16tel-Hats mit einem starken Velocity-Abfall — Downbeats laut, Upbeats bis auf Ghost-Niveau abdachend — erzeugen einen schwebenden Groove.",
        maschineNote: "Hi-Hat-Velocity-Abfall: Steps 0/4/8/12 = 90, Steps 1/5/9/13 = 70, Steps 2/6/10/14 = 50, Steps 3/7/11/15 = 30. Dieser 4-Step-Abfall erzeugt ein natürliches Ride-Becken-Gefühl auf einem geschlossenen Hat. Snare bei Velocity 85 — nicht das lauteste Element. Kick bei 100. Das Sample soll auf gleichem Niveau oder leicht lauter als die Snare sitzen.",
      },
      {
        name: "Groove Parisienne",
        description: "Das lockerere, seelenvollere Myth-Syzer-Feeling. Kick-Versetzung auf Step 10 gibt dem Pattern ein Hip-Hop-Wackeln. Ghost auf Step 13 fügt das menschliche Micro-Timing hinzu.",
        maschineNote: "Kick auf Step 10 bei Velocity 70 — die Groove-Versetzung. Ghost-Snare auf Step 13 bei Velocity 25. Für die 16tel-Hats den Velocity-Abfall aus Nekfeu Float anwenden. Swing 60 % nur auf Hats. Das Sample sollte natürliche Akkordwechsel über einen 2-Takt-Loop haben.",
      },
    ],
    techniques: [
      {
        title: "16tel-Hat-Velocity-Abfall",
        detail: "Alle 16 Hi-Hat-Steps programmieren. Dann Velocities manuell in einem 4-Step-Abfall setzen: Step 0=90, 1=70, 2=50, 3=30 — dann für jeden Beat wiederholen (4=90, 5=70, 6=50, 7=30, und so weiter für alle 16 Steps). Dieser Abfall lässt die Hats klingen wie ein Live-Ride-Becken, das den Downbeat betont. Bei 58 % Swing erzeugt er einen unwiderstehlichen Schwebezustand, der die Pariser Signatur ist.",
      },
      {
        title: "Sample sitzt lauter als die Snare",
        detail: "Den Sample/Loop-Kanal auf 0 dB setzen. Die Snare auf -2 dB. Den Kick auf -1 dB. Das ist die Umkehrung der amerikanischen Trap-Produktion, wo Drums dominieren. In Myth Syzers Welt ist die Musik (das Sample) der Lead — die Drums begleiten. Das schafft Raum für den Lyrik des französischen Rappers vorne im Mix.",
      },
      {
        title: "Zwei-Takt-Seelvoller Loop mit Akkordwechseln",
        detail: "Einen 2-Takt-Loop aus Soulful Dreams Vol 1 oder 2 finden, der mindestens 2 Akkordwechsel hat. Den Loop-Punkt so setzen, dass der Akkordwechsel auf Zählzeit 3 des ersten Takts landet. Das erzeugt harmonische Antizipation. Myth Syzers Sample-Auswahl hat fast immer diese narrative Qualität.",
      },
      {
        title: "Bewegende Basslinie (microKEY unverzichtbar)",
        detail: "Im Gegensatz zu Akhenatoms Grundton-Bass bewegt sich Myth Syzers Bass melodisch. Auf dem microKEY: Grundton auf Zählzeit 1 spielen, zur Quinte auf Zählzeit 2 wechseln, zu einem Durchgangston auf dem 'und' der 3 wandern, auf dem Grundton des nächsten Akkords auf Zählzeit 4 auflösen. Diese 4-Noten-Bewegung pro Takt hebt den Groove und fügt das moderne Pariser Feeling hinzu.",
      },
      {
        title: "Saubere Mix-Architektur",
        detail: "Den Kick bei 40 Hz hochpassfiltern. Die Snare bei 150 Hz hochpassfiltern. Sanfte Sättigung (+10 % Drive) auf die gesamte Drum-Gruppe anwenden. Einen leichten Kompressor auf den Drum-Master-Bus: Ratio 2:1, Attack 10ms, Release 200ms, maximale Gainreduktion 2 dB. Diese transparente Kompression verklebt das Kit, ohne es zu ersticken.",
      },
    ],
    packRecs: [
      { why: "Die wärmsten, akkordreichsten Loops der Sammlung. Speziell nach 2-Takt-Loops mit Akkordwechseln suchen — Myth Syzers exaktes Quellterritorium." },
      { why: "Vinyl-Crackle bei Velocity 22 unter allem laufen lassen. Das Wärme-Fundament des modernen Pariser Sounds." },
      { why: "Saubere, warme Drum-Sounds — die runden, präsenten Optionen wählen. Moderner Boom Bap braucht saubere Drums unter warmen Samples." },
      { why: "Leichte Percussion für organische Textur. Sparsam verwenden — ein Shaker- oder Bürsten-Hit alle 4 Takte als sublimale Bewegung." },
    ],
    microKeyTips: [
      "Eine melodische Basslinie auf dem microKEY aufnehmen: Grundton auf Zählzeit 1, Quinte auf Zählzeit 2, Durchgangston auf dem 'und' der 3, nächster Akkord-Grundton auf Zählzeit 4. In Echtzeit aufnehmen, auf 1/16 quantisieren. Diese 4-Noten-Bewegung ist die moderne französische Boom-Bap-Bass-Signatur.",
      "Einen Wurlitzer- oder Fender-Rhodes-Akkord auf dem microKEY am Punkt des Loops spielen, an dem der Akkordwechsel passiert. Ein Akkord-Hit, dann Stille. Der einzelne Akkord-Hit verstärkt die harmonische Bewegung des Samples.",
      "Die Velocity-Sensitivität des microKEY nutzen, um nur die erste Note jeder Melodiephrase zu betonen. Insgesamt leicht spielen, dann die erste Note jedes Takts fester anschlagen. Diese dynamische Formgebung hält melodische Ergänzungen menschlich.",
    ],
  },

  "morlockko-plus": {
    tagline: "Unterwelt-Klang — Klänge aus dem Untergrund",
    bio: "Morlockko Plus (auch als Rapper Morlock Dilemma aktiv) ist eine der respektiertesten Figuren im deutschen Underground-Hip-Hop. Seine Beats tragen das Gewicht des East-Coast-Boom-Bap, gefiltert durch eine deutlich europäische Sensibilität — filmische Dunkelheit, unaufgelöste harmonische Spannung und eine Liebe zu seltenen Schallplatten, die jedem New Yorker Plattengraber ebenbürtig ist. Als Produzent-Rapper in der Tradition von MF DOOM und El-P versteht er den Beat von beiden Seiten der Kabine.",
    styleMarkers: [
      "Boom-Bap-Fundament mit filmischen Sample-Quellen — dunkel, harmonisch unaufgelöst",
      "BPM bewusst langsam — unter 90 ist komfortables Territorium",
      "Snare mit mittellangem Hall-Reverb (1,0–1,5 s) — fügt Tiefe und kalte Atmosphäre hinzu",
      "Sehr minimales Hi-Hat — oft nur 8tel-Noten oder ganz abwesend in Schlüsseltakten",
      "Dunkle, staubige Vinyl-Quellen — osteuropäische Klassik, obskure Bibliotheksmusik",
      "Basslinien sparsam aber melodisch absichtsvoll — eine Phrase alle 4 Takte",
    ],
    drumPhilosophy: "Der Beat soll sich anfühlen wie nächtliches Allein-Gehen — nicht unbedingt Gefahr, aber Einsamkeit. Raum ist keine Leere in meinen Patterns: er ist der Beat, der zwischen Sätzen denkt. Ich habe von Havoc gelernt, dass das, was man nicht spielt, stärker sein kann als das, was man spielt.",
    samplePhilosophy: "Ich grabe nach Musik, die nie für Sampling gedacht war. Bibliotheksplatten, Filmmusiken aus Ostdeutschland, klassische Aufnahmen aus den 60ern, die niemand hörte. Diese haben Texturen, die man nicht nachahmen kann — die Mikrofontechniken, die Raumakustik, den emotionalen Zustand von Musikern, die sehr andere Zeiten erlebt haben. Diese Schicht scheint durch das Sample durch.",
    patterns: [
      {
        name: "Kölner Nacht",
        description: "Der geduldige Morlockko-Groove. Der Kick bewegt sich kaum — nur 1 und 3. Viertelnoten-Hats — maximaler Atemraum für das filmische Sample. Die Ghost-Snare auf Step 14 ist das einzige Zugeständnis an Komplexität.",
        maschineNote: "Viertelnoten-Hats bei Velocity 50. Kick bei 95, Snare bei 88. Ghost-Snare auf Step 14 bei Velocity 25. Snare-Reverb: Hall, 1,2 s, 30 % Wet — der Reverb-Schwanz fügt Tiefe hinzu ohne das Pattern zu überschwemmen. Das Sample sollte dunkel und harmonisch unaufgelöst sein — Dissonanz ist willkommen.",
      },
      {
        name: "Untergrund Stomp",
        description: "Etwas aggressiver — für die Morlock-Dilemma-Rap-Auftritte. Der Kick auf Step 11 erzeugt ein vorwärts-stolperndes Momentum. 8tel-Hats aber sehr leise. Das Pattern rollt vorwärts, selbst während das Sample Spannung darüber erzeugt.",
        maschineNote: "Kick auf Step 11 bei Velocity 80 — weicher als Hauptkicks bei 100. Hats bei Velocity 38 — kaum hörbare Textur. Swing 60 %. Das Stolper-Kick auf Step 11 paart sich mit dem rhythmischen Inhalt des Samples — einen Loop finden, in dem auf diesem Upbeat etwas passiert.",
      },
    ],
    techniques: [
      {
        title: "Filmische Sample-Bearbeitung",
        detail: "Loop aus Soulful Dreams Vol 2 oder einer anderen dunklen melodischen Quelle laden. Anwenden: (1) Tiefpassfilter bei 7 kHz, (2) Tonhöhe um -10 Cent absenken — leicht zu tief erzeugt Unbehagen, (3) subtilen Reverb zum Sample hinzufügen (Room, 0,6 s, 15 % Wet — das ist auf dem Sample, nicht den Drums). Dieser Prozess lässt jedes Sample klingen, als wäre es in einer kalten Konzerthalle 1968 aufgenommen worden.",
      },
      {
        title: "Minimales Kit — maximale Schwerkraft",
        detail: "Maximal 4 Elemente verwenden: Kick, Snare, Hi-Hat, Vinyl-Crackle. Vor dem Hinzufügen eines 5. Elements muss das Pattern komplett ohne es funktionieren. Die Hats vollständig aus bestimmten 4-Takt-Abschnitten entfernen. Die Stille, wo die Hats waren, wird ein strukturelles Mittel.",
      },
      {
        title: "Snare-Reverb als harmonisches Element",
        detail: "Snare-Reverb auf 1,2–1,5 s mit 30–35 % Wet setzen. In einem dunklen, dissonanten Sample-Kontext schwebt der Reverb-Schwanz der Snare in der Luft gegen den harmonischen Inhalt des Samples — erzeugt unbeabsichtigte Spannung und Auflösung. Den Reverb so einstellen, dass er durch den nächsten Snare-Hit abklingt: überlappende Reverb-Schwänze erzeugen Morlockko typische klaustrophobische Tiefe.",
      },
      {
        title: "Bass als Kontrapunkt (nicht als Grundton-Unterstützung)",
        detail: "Keinen Grundton-auf-1-Bass spielen. Den Grundakkord des Samples finden. Dann die Bassnote spielen, die AM MEISTEN Spannung gegen das Sample auf Zählzeit 1 des 2. Takts erzeugt — die kleine Septime oder kleine Sekunde funktioniert gut. Das erzeugt eine Frage (Takt 1) und eine tiefere Frage (Takt 2) ohne je eine Antwort zu liefern.",
      },
      {
        title: "Die Fehlender-Takt-Technik",
        detail: "Im Maschine-Arranger den Kick vollständig aus den Takten 5–8 eines 8-Takt-Zyklus entfernen. Die Snare läuft weiter. Das Sample läuft weiter. Das erzeugt einen plötzlichen Gewichtsverlust — der Hörer erwartet den Kick und er kommt nicht. Wenn der Kick auf Takt 9 zurückkehrt, trifft er härter als je zuvor. Für Verse-zu-Hook-Dynamik verwenden.",
      },
    ],
    packRecs: [
      { why: "Die dunkleren, harmonisch komplexeren Loops in Vol 2 passen zu Morlockko ästhetisch. Unter 7 kHz filtern und um -10 Cent nach unten pitchen — sie werden zu Bibliotheksplatten." },
      { why: "Vinyl-Crackle bei Velocity 20. Das konstante Hintergrundrauschen ist strukturell in Morlockko Beats — es platziert die Musik in einem spezifischen physischen und historischen Raum." },
      { why: "Gelegentlich tiefer Schlagzeug für Abschnittsmarkierungen. Ein tiefer Schlag oder tiefer Tom, um das Ende eines 8-Takt-Zyklus anzukündigen." },
      { why: "Die roheren, weniger verarbeiteten Drum-Sounds wählen. Morlockko Drums sind Werkzeuge — funktional, nicht dekorativ." },
    ],
    microKeyTips: [
      "Angespannte, unaufgelöste Akkord-Voicings auf dem microKEY mit einem dunklen Pad oder Orgel-Patch aus Komplete 15 spielen. Cluster-Voicings — Noten einen Halbton voneinander entfernt — funktionieren gut. 4 Takte halten, dann loslassen. Nicht zu einem komfortablen Akkord auflösen.",
      "Für Basslinien: die kleine Septime oder kleine Sekunde der Sample-Tonart als Bassnote auf Zählzeit 1 des 2. Takts wählen. Diese Intervalle erzeugen maximale Spannung gegen das Sample. Langsam spielen — eine Note alle 2 Takte. Ohne Quantisierung aufnehmen, damit die Note leicht zu spät ist.",
      "Den Mod-Wheel nutzen, um einen Filter auf dem gesamten Sample-Track über 4 Takte langsam zu schließen, dann auf Takt 5 abrupt zu öffnen. Diese Langsam-Schließen/Plötzlich-Öffnen-Technik erzeugt das Gefühl, dass die Musik gewürgt und dann freigelassen wird.",
    ],
  },

  "johnny-illstrument": {
    tagline: "Berlin Bap — Direkt und klar",
    bio: "Johnny Illstrument ist ein Eckpfeiler des Berliner Boom-Bap-Undergrounds. Verwurzelt in der East-Coast-Tradition — Premier, Pete Rock, Large Professor — baut er Beats, die das Drum-und-Sample-Vokabular des Hip-Hop respektieren, ohne es zu imitieren. Seine Arbeit mit Megaloh half dabei, den deutschen Lyrik-Rap als ernsthafte Kunstform zu etablieren. Seine Beats sind sauber, selbstbewusst und gebaut um zu bleiben: keine Trends, keine Dekoration, nur die Wissenschaft eines guten Drum-Patterns und einer gut gewählten Vinyl-Quelle.",
    styleMarkers: [
      "Harte East-Coast-Boom-Bap-Drums — Snare sitzt laut und stolz im Mix",
      "Aggressiver Swing (56–64 %) in der MPC-Tradition",
      "Sample-Quellen: Jazz, Soul, Deutscher Funk, 70er-Jahre-Filmmusik",
      "Kick-Versetzung auf Step 6 oder 11 — Premier- und Pete-Rock-Einfluss ist explizit",
      "Akzent-Snare auf Step 11 zusammen mit dem versetzten Kick — Berliner Signatur",
      "Sauberer Mix mit Atemraum — nichts konkurriert mit dem Rapper",
    ],
    drumPhilosophy: "Harte Drums, gutes Sample, gib dem Rapper Raum. Das Drum-Kit ist eine Absichtserklärung — es sagt dem Hörer, welche Art von Rap das ist, bevor ein Wort gesprochen wurde. In Berlin haben wir ein anderes Selbstvertrauen in der Boom-Bap-Tradition als New York, weil wir sie von außen lernten, weil wir sie wollten, weil wir sie studierten. Dieses Verlangen steckt in den Drums.",
    samplePhilosophy: "Ich grabe deutsche Quellen neben amerikanischen — 70er-Jahre Deutschen Funk, Krautrock, Bibliotheksmusik aus der DDR-Ära, Jazz-Aufnahmen aus Stuttgart und Frankfurt. Diese Platten haben die Wärme und den Groove, aber der emotionale Kontext ist anders. Deutschen Musik für deutschen Rap zu sampeln schließt eine Schleife, die geschlossen werden musste.",
    patterns: [
      {
        name: "Berlin Hard",
        description: "Die Johnny-Illstrument-Signatur. Harte Kick-Versetzung auf Step 6 (das Premier-Erbe), laute Snare auf Zählzeiten 2 und 4, und die Signatur-Akzent-Snare auf Step 11. Swing 60 % lässt das Ganze mit Autorität rollen.",
        maschineNote: "Swing 60 %. Kick auf Step 6 bei Velocity 78 (der Ghost-Kick). Akzent-Snare auf Step 11 bei Velocity 82 — separates Pad von der Haupt-Snare, gleicher Sound. Haupt-Snares bei Velocity 100 — Berliner Snares treffen LAUT. 8tel-Hats bei Velocity 55 mit Humanize ±5.",
      },
      {
        name: "Kreuzberg Late Night",
        description: "Der langsamere, nachdenkliche Berliner Sound — für Megalohs Storytelling-Tracks. Standard-Kick, aber der offene Hat auf Step 10 gibt dem ruhigeren Tempo Atemraum. Eine Verneigung vor spätnächtlichen Plattensuche-Sessions.",
        maschineNote: "Offener Hat auf Step 10: Choke-Gruppe mit geschlossenem Hat, Velocity 70. 8tel-Hats bei Velocity 48. Snare bei Velocity 95. Swing 62 %. Bei diesem BPM und Swing hat das Pattern ein leicht verkatert-wirkendes Feeling, das perfekt zu spätbenächtlichem Storytelling-Rap passt. Deutschen Jazz-Funk-Sample bevorzugen.",
      },
    ],
    techniques: [
      {
        title: "Der Berliner Snare-Vordergrund",
        detail: "Berliner Boom Bap platziert die Snare vorne im Mix — lauter als in der New Yorker Tradition. Das Snare-Pad-Volume auf 0 dB setzen und alles andere auf -1 bis -3 dB. Die Snare soll das lauteste Drum-Element sein. Das ist eine bewusste Aussage: im deutschen Hip-Hop trägt der Rhythmus die Sprache. Die Snare interpunktiert den Reim.",
      },
      {
        title: "Die Premier-Kick-Versetzung",
        detail: "Kick auf Steps 0, 8 und 6 programmieren. Der Step-6-Kick (das 'und' der 2) ist das direkte Premier/Pete-Rock-Erbe. Velocity 78 einstellen. Im Kontext von 60 %-Swing fällt dieser versetzte Kick dramatisch hinter eine gerade 16tel — ein Ruck, der den Kopf fast unwillkürlich nicken lässt.",
      },
      {
        title: "Deutsche Quellensuche",
        detail: "Neben amerikanischer Musik auch deutsche Quellen sampeln: 70er-Jahre-Krautfunk, Stuttgarter Jazz-Aufnahmen, DDR-Bibliotheksmusik aus dem DEFA-Katalog (Ostdeutsches Filmstudio). Diese haben dieselbe Wärme wie amerikanischer Soul, tragen aber ein anderes emotionales Gewicht, das zu deutschem Lyrikinhalt passt.",
      },
      {
        title: "Swing 60 % — Nicht verhandelbar",
        detail: "Johnny Illstruments Swing-Einstellung ist 60 % — abgeleitet vom MPC3000-Shuffle, den Premier verwendete. In Maschine: Pattern-Einstellungen, Groove = 60 %. Bei 58 % fühlt sich das Pattern zu gerade an. Bei 62 % schleppt es. Bei genau 60 %, mit der Step-6-Kick-Versetzung, tritt das Pattern in die Boom-Bap-Tasche ein, wo es sich anfühlt, als würde es sich selbst spielen.",
      },
      {
        title: "Mit dem Sample-Schlagzeuger einrasten",
        detail: "Nach 2-Takt-Loops in Soulful Dreams suchen, die bereits ein Live-Drum-Element haben. Die programmierten Drums auf den Groove des Sample-Schlagzeugers legen — nicht gegen ihn kämpfen, mit ihm einrasten. Wenn Johnnys programmierter Kick gleichzeitig mit dem Kick des Sample-Schlagzeugers landet, hat das Ergebnis doppeltes Gewicht.",
      },
    ],
    packRecs: [
      { why: "Deutsche Jazz-Funk-Äquivalente — warme, lebendige Loops. 2-Takt-Loops verwenden, bei denen Sample-Schlagzeuger und programmierte Drums einrasten können." },
      { why: "Saubere, selbstbewusste Drum-Sounds — die präsentesten und vordersten Optionen wählen. Berliner Boom Bap verwendet polierte Drums: sauber und laut." },
      { why: "Vinyl-Crackle bei Velocity 22 kontinuierlich laufend. Platziert die Platte in der Berliner Underground-Szene." },
      { why: "Zusätzliche Percussion für gelegentliche Textur. Ein gut platzierter Hit alle 8 Takte — Zurückhaltung ist Teil des Berliner Ansatzes." },
    ],
    microKeyTips: [
      "Eine sample-informierte Akkord-Voicing auf dem microKEY zu Beginn jedes 2-Takt-Zyklus spielen. Den Akkord auf Zählzeit 1 anschlagen, sofort loslassen. Dieser einzelne Akkord-Hit verstärkt die harmonische Identität des Samples.",
      "Eine Basslinie in der Tradition des deutschen Funk aufnehmen: Grundton auf Zählzeit 1, Quinte auf dem 'und' der 2, Sub-Grundton (eine Oktave tiefer) auf Zählzeit 3. Drei Noten, zwei Takte. Deutscher Funk-Bass ist melodisch aber diszipliniert.",
      "Die Oktav-Tasten des microKEY nutzen, um zwei Oktaven für Sub-Bass-Hits nach unten zu gehen. Eine einzelne Sub-Bass-Note auf Zählzeit 1 jedes 4-Takt-Zyklus als strukturellen Marker spielen. Dieses tiefe Rumpeln unter dem Boom-Bap-Kick schafft das kombinierte Gewicht der deutschen Underground-Produktion.",
    ],
  },

  "figub-brazlevic": {
    tagline: "Kopfkino — Kino im Kopf",
    bio: "Figub Brazlevic macht Beats so, wie ein Kameramann Szenen rahmt — jedes Element für maximale visuelle Vorstellungskraft komponiert. In Hagen (NRW) ansässig, repräsentiert er eine Art deutschen Instrumental-Hip-Hop, der von einem Rapper nichts verlangt — die Musik ist ohne Worte vollständig. Sein Sample-Spektrum ist eklektisch: französische Kinoscores, italienische Bibliotheksmusik, türkische Psychedelia, osteuropäische Folklore. Die Drums sind warm und geschwungen, die Samples filmisch und unerwartet. Er gehört zu den kreativsten Plattengraber in europäischem Hip-Hop.",
    styleMarkers: [
      "Hoher Swing (58–66 %) — die Boom-Bap-Tasche bis an ihren weichsten Extremen gedrückt",
      "Filmische Sample-Quellen: Filmmusiken, Bibliotheksplatten, Weltmusik",
      "Melodischer Bass, der sich wie ein Kontrabass-Spieler bewegt — warm, holzig, bedächtig",
      "Kick auf die Sample-Tonart gestimmt — harmonische Kick-Technik von Dre über MF DOOM",
      "Jazz-Bürsten-Snare-Sample unter dem harten Snare für Textur",
      "Solo-Instrument-Samples (Trompete, Violine, Duduk) als melodischer Kontrapunkt",
    ],
    drumPhilosophy: "Die Drums in einem Instrumental-Track müssen das narrative Gewicht tragen, das normalerweise Texte tragen würden. Also muss der Groove — der Swing, der Raum, das Hin und Her — alleine eine Geschichte erzählen. Ich denke darüber nach, welche Emotion der Snare-Akzent in diesem spezifischen Moment erzeugt. Mit anderen Worten: Ich schreibe die Drums wie ein Filmkomponist.",
    samplePhilosophy: "Ich finde Musik aus Kulturen, die nicht meine eigene sind, und sitze damit, bevor ich irgendetwas tue. Ich muss verstehen, was die Originalmusiker gefühlt haben. Dann finde ich die 4 Takte, wo dieses Gefühl am konzentriertesten ist, und baue darum. Ich vermeide es, etwas zu loopen, das emotional nicht rechtfertigt, 32 Mal wiederholt zu werden.",
    patterns: [
      {
        name: "Kopfkino Swing",
        description: "Der Figub-Signatur-Groove — hoher Swing drückt Upbeats tief in die Tasche. Der auf die Tonart des Samples gestimmte Kick erzeugt eine fast unbewusste musikalische Resonanz. Viertelnoten-Hats lassen maximalen Atemraum für das filmische Sample.",
        maschineNote: "Swing 62 %. Viertelnoten-Hats bei Velocity 52. Kick auf den Grundton des Samples stimmen (Tune-Regler in Pad-Einstellungen). Ghost-Snare Step 14 bei Velocity 20. Jazz-Bürsten-Snare auf Pad A3 bei Velocity 35 unter Haupt-Snare via Pad Link schichten — dieses 'Haar' auf der Snare ist die Figub-Textur.",
      },
      {
        name: "Ruhr Cinematic",
        description: "Das filmischste, langsamste Figub-Pattern. Bei 84 BPM und 64 % Swing fühlen sich die Upbeats schwebend zurückgehalten an. Für Filmmusik-basierte Samples verwendet, bei denen der emotionale Gehalt absolute Geduld erfordert.",
        maschineNote: "64 % Swing — auf diesem Niveau sind Upbeats so verzögert, dass sie zu Akzenten werden. Der Kick auf Step 11 bei Velocity 72 fügt einen subtilen Push vor Zählzeit 3 hinzu. Viertelnoten-Hats bei Velocity 45. Das Sample sollte ein 4-Takt-Loop mit narrativer Bewegung sein: auf Takt 3 passiert musikalisch etwas, das sich auf Takt 4 auflöst.",
      },
    ],
    techniques: [
      {
        title: "Harmonischer Kick (Figubs Kerntechnik)",
        detail: "Kick auf Pad A1 laden. Im Tune-Bereich der Pad-Einstellungen den Grundton des Samples identifizieren. Den Tune-Parameter des Kicks so einstellen, dass seine Grundfrequenz diesem Grundton entspricht — einen runden, resonanten Kick aus Sticks Toolkit verwenden, der eine klare Tonhöhe hat. Dieser harmonische Kick wird eine Bassdrum, die die Tonart des Tracks singt, und erzeugt eine unbewusste musikalische Kohärenz.",
      },
      {
        title: "Die Bürsten-Snare-Schicht",
        detail: "Einen Jazz-Bürsten-Snare-Sound in Chronicles finden. Auf Pad A3 laden. Pad Link auf simultanes Auslösen mit der Haupt-Snare (A2) einstellen. A3-Velocity auf 35 setzen (deutlich leiser). Die Bürsten-Snare fügt ein texturelles Zischen um den Crack der Haupt-Snare hinzu. Zusammen erzeugen sie eine komplexe Snare, die klingt wie ein von einem sehr erfahrenen Schlagzeuger gespieltes einzelnes Instrument.",
      },
      {
        title: "Kino-Sample in 4-Takt-Loops",
        detail: "Figub verwendet 4-Takt-Loops, keine 2-Takt- oder 1-Takt-Loops. Es braucht 4 Takte, damit ein narrativer Bogen im Sample entstehen kann. Nach einem Loop suchen, bei dem: Takte 1–2 ein Thema einführen, Takt 3 Spannung einführt (ein Akkordwechsel oder neues Instrument), Takt 4 beginnt aufzulösen. Dieser 4-Takt-emotionale Bogen wiederholt sich unter dem Rap und erzeugt eine Mikro-Narration.",
      },
      {
        title: "Solo-Instrument-Kontrapunkt (microKEY)",
        detail: "Nachdem Drum-Loop und Sample laufen: Trompeten-, Geigen- oder Duduk-Patch auf einer melodischen Gruppe laden. microKEY verbinden. Alle 2 Takte EINE Note spielen — nur eine. Die Note sollte die große Septime oder kleine None des aktuellen Akkords im Sample sein. Diese gespannten Intervalle, gespielt von einem realistischen Solo-Instrument, erzeugen ein Gespräch mit dem Sample.",
      },
      {
        title: "Extremer Swing — Hohe Toleranz erforderlich",
        detail: "Swing auf 62–64 % setzen. Auf diesem Niveau fallen Upbeat-Hi-Hat-Steps so spät, dass sie fast auf dem nächsten Downbeat liegen — klingt betrunken-aber-absichtsvoll. Sich 3–5 Minuten geben, um sich anzupassen, bevor entschieden wird, ob es falsch ist. Danach klingt gerader 50 %-Swing roboterhaft. Diese Geduld ist die ästhetische Disziplin, die Figubs filmischen Ansatz vom Standard-Boom-Bap unterscheidet.",
      },
    ],
    packRecs: [
      { why: "Die harmonisch komplexeren, dunkleren Loops in Vol 2 eignen sich für filmische Produktion. Nach 4-Takt-Loops suchen — Figub braucht die vollen 4 Takte für den emotionalen Bogen." },
      { why: "Solo-Instrument-Einzeltöne (Trompete, Streicher, Klavier) für die Kontrapunkt-Technik. Figubs Solo-Noten-Antworten auf das Sample kommen von echten Instrument-Sounds, nicht Synth-Patches." },
      { why: "Vinyl-Crackle aus Weltmusikquellen bei Velocity 18. Figubs Samples kommen aus vielen Traditionen — das Crackle verankert sie in einem physischen Medium." },
      { why: "Bürsten-Snare und Jazz-Percussion-Sounds für das Schichten. Die Bürsten-Snare-Schicht ist unverzichtbar für die Figub-Snare-Textur." },
    ],
    microKeyTips: [
      "Nachdem der Kick auf den Grundton des Tracks gestimmt ist, dieselbe Grundnote auf dem microKEY mit einem tiefen Bass-Patch spielen. Gleichzeitig mit Zählzeit 1 anschlagen. Die Unison zwischen Kick und Bass-Note erzeugt maximales Gewicht — nur auf dem ersten Downbeat jedes 4-Takt-Zyklus verwenden.",
      "Für den Solo-Instrument-Kontrapunkt: nur einen Finger auf dem microKEY verwenden. Die große Septime der Sample-Tonart alle 2 Takte einmal spielen. 16 Takte lang nicht von dieser Note weggehen. Dann für die nächsten 16 zur None wechseln. Die Konstanz einer einzelnen wiederholten Note wird hypnotisch — das ist Figubs Zurückhaltungs-Philosophie angewandt auf das microKEY.",
      "Komplete 15 für ungewöhnliche Solo-Instrument-Patches erkunden: Duduk, Shakuhachi, Armenische Kanun, Indische Bansuri. 3-Noten-Phrasen in der Sample-Tonart spielen, sehr langsam, eine Phrase alle 4 Takte. Diese Klangfarben passen zu Figubs türkischer Psychedelia und Weltmusik-Sample-Quellen.",
    ],
  },
};
