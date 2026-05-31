import type { Genre } from "@/data/patterns";

export type DeSongSection = {
  name: string;
  bars: number;
  drums: string;
  hats: string;
  sample: string;
  bass: string;
  keys: string;
  pads: string;
  fx: string;
  note: string;
};

export type DeBeatVariation = {
  code: string;
  name: string;
  whenToUse: string;
  feel: string;
  maschineSteps: string[];
};

export type DeLayerCard = {
  order: number;
  instrument: string;
  whenToIntroduce: string;
  processing: string;
  breathingTip: string;
};

export type DeArrangerStep = {
  step: string;
  title: string;
  detail: string;
};

export const SONGLAB_DE_BLUEPRINTS: Record<Genre, { title: string; tempo: string; sections: DeSongSection[] }> = {
  "boom-bap": {
    title: "Klassische Boom-Bap-Songstruktur",
    tempo: "86–95 BPM · Swing 54–62%",
    sections: [
      { name: "Cold Open", bars: 4, drums: "spärlich", hats: "aus", sample: "aus", bass: "aus", keys: "aus", pads: "voll", fx: "voll", note: "Nur Drums — Kick und Snare, keine Hats. Vinyl-Knistern aus Weekday läuft darunter. Noch keine Melodie. Das rohe Feeling etablieren, bevor sonst etwas einsetzt." },
      { name: "Verse 1-A", bars: 8, drums: "voll", hats: "voll", sample: "voll", bass: "aus", keys: "aus", pads: "spärlich", fx: "aus", note: "Voller Drum-Groove setzt auf Takt 1 mit Sample ein. Noch kein Bass — Sample und Drums gemeinsam atmen lassen. Der Hörer muss die Pocket spüren, bevor der Bass die Tonart bestätigt." },
      { name: "Verse 1-B", bars: 8, drums: "voll", hats: "voll", sample: "voll", bass: "voll", keys: "aus", pads: "aus", fx: "aus", note: "Bass setzt auf Takt 1 von 1-B ein. Das Trio Drums + Sample + Bass ist jetzt die komplette Arrangierung. Keys oder Melodie können auf Takt 6 als Vorschau vor dem Pre-Hook einsetzen." },
      { name: "Pre-Hook", bars: 4, drums: "spärlich", hats: "aus", sample: "spärlich", bass: "spärlich", keys: "Akzent", pads: "aus", fx: "Akzent", note: "Auf Half-Time reduzieren: Kick nur auf 1+3, Snare nur auf 3. Über diese 4 Takte einen Low-Pass-Filter auf dem Sample langsam öffnen. Der Filter-Sweep signalisiert, dass etwas kommt. Bass spielt nur Root Notes." },
      { name: "Hook", bars: 8, drums: "voll", hats: "voll", sample: "voll", bass: "voll", keys: "voll", pads: "spärlich", fx: "aus", note: "Alles setzt auf einmal ein. Keys/Akkorde stehen im Zentrum. Hier einen Shaker oder extra Perc hinzufügen, der im Verse nicht war — erzeugt das 'größere' Gefühl ohne den Kern-Beat zu verändern." },
      { name: "Verse 2", bars: 8, drums: "voll", hats: "voll", sample: "voll", bass: "voll", keys: "spärlich", pads: "aus", fx: "aus", note: "Zurück zum Groove, aber die B-Abschnitt-Beat-Variation (offene Hats statt geschlossene) verwenden. Das Sample anders choppen erwägen — gleiche Quelle, anderer Slice. Vertraut-aber-anders hält Interesse aufrecht." },
      { name: "Pre-Hook 2", bars: 4, drums: "spärlich", hats: "aus", sample: "Akzent", bass: "Akzent", keys: "aus", pads: "aus", fx: "Akzent", note: "Gleicher Strip-Down wie Pre-Hook 1, aber noch mehr entfernen. Nur Kick, Snare und Bass-Root. Sample wird nur Reverb-Nachhall. Maximale Spannung — der Hook wird enorm klingen wenn er einsetzt." },
      { name: "Hook 2", bars: 8, drums: "voll", hats: "voll", sample: "voll", bass: "voll", keys: "voll", pads: "spärlich", fx: "aus", note: "Strukturell identisch mit Hook 1, aber einen 1-Takt-Drum-Fill bei Takt 7 erwägen, um exakte Wiederholung zu verhindern." },
      { name: "Bridge", bars: 4, drums: "aus", hats: "aus", sample: "spärlich", bass: "spärlich", keys: "spärlich", pads: "voll", fx: "voll", note: "Drums komplett aus. Bass hält. Sample 2 Halbtöne nach oben gepitcht (klingt 'leichter'). Bunny oder Weekday Pad-Swells füllen den Raum. Das ist der emotionale Höhepunkt — Stille ist das Lauteste, was du hast." },
      { name: "Hook Out", bars: 8, drums: "voll", hats: "voll", sample: "voll", bass: "voll", keys: "voll", pads: "voll", fx: "aus", note: "Volle Arrangierung kehrt zurück. Alles hinzufügen, was zurückgehalten wurde: extra Percussion, Keys-Melodie, Pad darunter. Das ist der vollständigste Moment des Tracks." },
      { name: "Outro", bars: 4, drums: "spärlich", hats: "aus", sample: "aus", bass: "aus", keys: "aus", pads: "voll", fx: "voll", note: "Cold Open spiegeln. Auf Drums + Vinyl-Knistern reduzieren. Dann auch die Drums langsam muten. Pad/Knistern ist das Letzte, was man hört. Voller Kreis — der Loop endet, wo er begann." },
    ],
  },
  "hip-hop": {
    title: "Zeitgenössische Hip-Hop-Songstruktur",
    tempo: "92–110 BPM · Swing 50–54%",
    sections: [
      { name: "Intro", bars: 4, drums: "aus", hats: "aus", sample: "voll", bass: "aus", keys: "aus", pads: "spärlich", fx: "voll", note: "Nur Sample-Hook — keine Drums. Das ist der Hip-Hop-Intro-Move: zuerst die Melodie etablieren, den Beat 'droppen' wenn Drums einsetzen. Den besten 2-Takt-Abschnitt des Samples verwenden. Weekday Vinyl-Rauschen optional." },
      { name: "Verse 1-A", bars: 8, drums: "voll", hats: "voll", sample: "voll", bass: "aus", keys: "aus", pads: "aus", fx: "aus", note: "Beat droppt hart auf Takt 1. Ohne Vorwarnung. Volle Drums + Sample gleichzeitig. Bass bleibt draußen — das Sample übernimmt das Low-End-Feeling bis Takt 5." },
      { name: "Verse 1-B", bars: 8, drums: "voll", hats: "voll", sample: "voll", bass: "voll", keys: "spärlich", pads: "aus", fx: "aus", note: "808 oder Bass setzt auf Takt 1 von 1-B ein. Hier wird der Beat schwer. Keys können als kleiner Fill in den letzten 2 Takten erscheinen um den Pre-Hook vorzubereiten." },
      { name: "Pre-Hook", bars: 4, drums: "voll", hats: "spärlich", sample: "spärlich", bass: "voll", keys: "aus", pads: "aus", fx: "Akzent", note: "Zur Hi-Hat-Variation wechseln — 16tel statt 8tel, oder nur offene Hats. Die Energie bleibt hoch, aber die Textur ändert sich. Bass kann hier geschäftiger werden: mehr Noten, mehr rhythmisch. Das sagt dem Ohr 'Übergang'." },
      { name: "Hook", bars: 8, drums: "voll", hats: "voll", sample: "voll", bass: "voll", keys: "voll", pads: "spärlich", fx: "aus", note: "Alles voll. Den Hook 'heller' machen erwägen — High-Shelf +1,5dB auf dem Master-Bus schieben, oder einen hellen Shaker auf allen 16teln hinzufügen. Der Hook soll sich anders ANFÜHLEN als der Verse." },
      { name: "Verse 2", bars: 16, drums: "voll", hats: "voll", sample: "voll", bass: "voll", keys: "spärlich", pads: "aus", fx: "aus", note: "Voller Groove von Takt 1 — kein Aufbau nötig. Ein neues Percussion-Element bei Takt 9 einführen (Conga, Perc, extra Shaker), das in Verse 1 nicht war. Kleine Änderung, große psychologische Wirkung." },
      { name: "Pre-Hook 2", bars: 4, drums: "voll", hats: "spärlich", sample: "spärlich", bass: "voll", keys: "aus", pads: "aus", fx: "Akzent", note: "Gleich wie Pre-Hook 1. Vertrautheit hier ist gut — der Hörer weiß was kommt und erwartet den Hook-Drop." },
      { name: "Hook 2", bars: 8, drums: "voll", hats: "voll", sample: "voll", bass: "voll", keys: "voll", pads: "spärlich", fx: "aus", note: "Identisch mit Hook 1, aber einen 2-Takt-Fill bei Takt 7 erwägen. Oder: Hat-Geschwindigkeit in den letzten 2 Takten verdoppeln (16tel) um in Verse/Bridge zu launchen." },
      { name: "Breakdown", bars: 4, drums: "Akzent", hats: "aus", sample: "aus", bass: "voll", keys: "aus", pads: "aus", fx: "aus", note: "Nur 808/Bass + Kick. Alles andere aus. Das ist der Drill-artige Breakdown-Moment — nur Sub und Kick zusammen. Maximaler Raum. 4 Takte fühlen sich wie ein Reset an." },
      { name: "Hook Out", bars: 8, drums: "voll", hats: "voll", sample: "voll", bass: "voll", keys: "voll", pads: "voll", fx: "aus", note: "Voller Blast-Return aus dem Breakdown. Sofort einsetzen — kein Aufbau, einfach droppen. Das ist der kraftvollste Moment des Songs durch den Kontrast mit dem Breakdown davor." },
      { name: "Outro", bars: 4, drums: "spärlich", hats: "aus", sample: "spärlich", bass: "aus", keys: "aus", pads: "spärlich", fx: "voll", note: "Schnelles Fade oder abrupter Schnitt. Hip Hop endet oft ohne langes Outro — der Track stoppt, der letzte Takt des Hooks klingt aus, fertig. Nicht zu lang werden." },
    ],
  },
  "rnb": {
    title: "Neo Soul / R&B-Songstruktur",
    tempo: "74–92 BPM · Swing 55–65%",
    sections: [
      { name: "Intro", bars: 8, drums: "aus", hats: "aus", sample: "aus", bass: "aus", keys: "voll", pads: "voll", fx: "spärlich", note: "Nur Keys und Pads — keine Drums, kein Sample, kein Bass. The Gentleman oder Scarbee Mark I (Kontakt) zum Etablieren des Akkords nutzen. Bunny oder ODYSSEY Soul Melodies Pad darunter. 8 volle Takte reiner Harmonie. R&B verlangt Geduld am Anfang." },
      { name: "Verse 1-A", bars: 8, drums: "spärlich", hats: "aus", sample: "voll", bass: "aus", keys: "spärlich", pads: "voll", fx: "aus", note: "Drums setzen ein, aber spärlich — nur Kick und Rimshot, keine Hats. Sample setzt auf Takt 1 ein. Der Kontrast zum drums-freien Intro lässt selbst eine leise Kick kraftvoll wirken. Keys vom Intro behalten — sie gehen sanft über." },
      { name: "Verse 1-B", bars: 8, drums: "voll", hats: "voll", sample: "voll", bass: "voll", keys: "spärlich", pads: "spärlich", fx: "aus", note: "Voller Groove JETZT — Hats setzen ein, Bass setzt ein, volles Drum-Pattern. Das ist das emotionale Commitment des Songs. Alles sollte zusammengehören. Den Neo-Soul-Bass (Scarbee Rickenbacker) bei moderater Lautstärke verwenden." },
      { name: "Pre-Hook", bars: 4, drums: "voll", hats: "spärlich", sample: "spärlich", bass: "voll", keys: "voll", pads: "Akzent", fx: "Akzent", note: "Drums bleiben voll, Hats reduzieren auf 8tel. Sample wird Hintergrund-Element. Keys treten als melodische Hauptaussage in den Vordergrund. Der Bass kann hier einen kleinen Lauf machen — etwas mehr rhythmisches Atmen." },
      { name: "Hook", bars: 8, drums: "voll", hats: "voll", sample: "voll", bass: "voll", keys: "voll", pads: "spärlich", fx: "aus", note: "Komplette Arrangierung. Die Keys hier sollten am melodischsten sein — eine volle Akkordvoicing (Cm9, Fm7 usw.) statt einzelner Noten spielen. Das microKEY für eine live-wirkende Melodie oder einen Akkord über dem Sample aufnehmen." },
      { name: "Verse 2", bars: 12, drums: "voll", hats: "voll", sample: "voll", bass: "voll", keys: "spärlich", pads: "aus", fx: "aus", note: "Voller Groove, aber 12 Takte statt 16 — kürzere Verses später im Song fühlen sich enger und intentionaler an. Von geschlossenen zu offenen Hats wechseln erwägen. Das Sample kann ein anderer Abschnitt sein." },
      { name: "Pre-Hook 2", bars: 4, drums: "voll", hats: "spärlich", sample: "Akzent", bass: "voll", keys: "voll", pads: "Akzent", fx: "aus", note: "Gleich wie zuvor — die Vertrautheit ist in R&B tröstlich. Kleine Variation: Bunny Pad bei niedriger Lautstärke hinzufügen um den Raum zwischen den Sample-Elementen zu füllen." },
      { name: "Hook 2", bars: 8, drums: "voll", hats: "voll", sample: "voll", bass: "voll", keys: "voll", pads: "spärlich", fx: "aus", note: "Hook-Struktur wiederholen. microKEY-Melodie eine Oktave höher als Hook 1 erwägen — subtile Aufhellung. Oder leichte harmonische Percussion (Stickz Hip-Hop Toolkit Rim-Hits) auf den Upbeats hinzufügen." },
      { name: "Bridge", bars: 8, drums: "aus", hats: "aus", sample: "aus", bass: "spärlich", keys: "voll", pads: "voll", fx: "voll", note: "Alles aus außer: Bass (Root Note halten), Keys (volle Akkord-Melodie), Pads (breit mit Raum Shimmer). 8 volle Takte. Das ist der verwundbarste, intimste Moment. Die Tonart kann hier um einen Schritt modulieren für einen emotionalen Lift." },
      { name: "Hook Out", bars: 8, drums: "voll", hats: "voll", sample: "voll", bass: "voll", keys: "voll", pads: "voll", fx: "aus", note: "Drums explodieren nach der Bridge-Stille zurück. Das ist der Höhepunkt des emotionalen Bogens. Alles hinzufügen — alle Schichten, maximale Keys-Melodie, breite Pads. Der Kontrast zur Bridge lässt das enorm klingen." },
      { name: "Outro", bars: 8, drums: "spärlich", hats: "aus", sample: "aus", bass: "spärlich", keys: "spärlich", pads: "voll", fx: "voll", note: "Langsames Fade — nicht abrupt schneiden. Elemente nacheinander über 8 Takte entfernen: Drums zuerst (Takt 2), Bass raus (Takt 4), Keys raus (Takt 6), nur Pads übrig (Takt 7-8). Der letzte Sound ist das Pad, das in Reverb verklingt. R&B endet elegant." },
    ],
  },
};

export const SONGLAB_DE_VARIATIONS: Record<Genre, DeBeatVariation[]> = {
  "boom-bap": [
    {
      code: "A",
      name: "Haupt-Groove",
      whenToUse: "Verse-Abschnitte",
      feel: "Volle Pocket mit Hats und Ghost Notes",
      maschineSteps: [
        "Scene 1, Gruppe A — dein vollständiger Beat wie programmiert.",
        "Gruppen-Swing auf 54–60% setzen. Das ist die Seele des Patterns.",
        "Hi-Hat-Velocity manuell variieren: Downbeats bei 90, Upbeats bei 50–60.",
        "Diese Scene läuft für alle Verse-Abschnitte und vollständig arrangierte Momente.",
      ],
    },
    {
      code: "B",
      name: "Abgespeckt",
      whenToUse: "Intro, Outro, Cold Open",
      feel: "Skelett — nur Kick und Snare",
      maschineSteps: [
        "Scene 1 duplizieren → Scene 2. In Scene 2 das Hat-Pad rechtsklicken → In Scene muten.",
        "Auch das Ghost-Snare-Pad in Scene 2 muten.",
        "Kick-Velocity in Scene 2 höher setzen (+10) — ohne Hats braucht sie mehr Präsenz.",
        "Für den Cold Open (4 Takte) verwenden und im Outro spiegeln.",
      ],
    },
    {
      code: "C",
      name: "Open-Hat-Groove",
      whenToUse: "Verse 2, B-Abschnitt-Variation",
      feel: "Luftiger, lockerer — komplett andere Textur",
      maschineSteps: [
        "Scene 1 duplizieren → Scene 3. In Scene 3 das Closed-Hat-Pad muten.",
        "Open-Hat-Pad auf Schritten 2, 6, 10, 14 (die Upbeats jedes Beats) aktivieren.",
        "Open-Hat-Velocity auf 65 setzen — weicher als die Kick. Es soll schweben, nicht schneiden.",
        "Eine Choke-Group zwischen offenen und geschlossenen Hats hinzufügen (beide in Choke Group 1).",
      ],
    },
    {
      code: "D",
      name: "Fill-Takt",
      whenToUse: "Takt 8 oder 16 Übergang (1-Takt-Pattern)",
      feel: "Snare-Kaskade in den nächsten Abschnitt",
      maschineSteps: [
        "Ein 1-Takt-Pattern (Pattern 2) in der Drum-Gruppe erstellen. Nur auf 1 Takt setzen.",
        "Programmieren: Kick nur Takt 1, Snare-Läufe von Schritt 10–15 mit zunehmender Velocity (60→120).",
        "Hats auf Schritten 0–9 bei Velocity 70 flach, dann Stille während Snare übernimmt.",
        "Im Maschine-Arranger: dieses 1-Takt-Pattern an jedem 8. oder 16. Takt als Übergang einfügen.",
      ],
    },
    {
      code: "E",
      name: "Half-Time Bridge",
      whenToUse: "Bridge oder Breakdown-Abschnitt",
      feel: "Langsam und massiv — maximaler Raum",
      maschineSteps: [
        "Pattern 3 erstellen. Kick nur auf Schritt 0 (Beat 1). Snare nur auf Schritt 8 (Beat 3).",
        "Viertelnoten-Hats: Schritte 0, 4, 8, 12. Velocity 55 flach.",
        "Kick-Velocity 105 — es ist die einzige Kick im Takt, sie muss enorm klingen.",
        "Ausschließlich im Bridge-Abschnitt verwenden (4–8 Takte). NICHT woanders einsetzen.",
      ],
    },
  ],
  "hip-hop": [
    {
      code: "A",
      name: "Voller Beat",
      whenToUse: "Verse-Abschnitte ab Takt 1",
      feel: "Punchy, direkt, sofort",
      maschineSteps: [
        "Scene 1 — dein Haupt-Verse-Beat. Im Hip Hop droppt der Verse-Beat sofort auf Takt 1.",
        "Swing zwischen 50–53% halten. Hip Hop ist enger als Boom Bap.",
        "Clap kann die Snare verdoppeln — Pad Link nutzen, um beide gleichzeitig auf Schritten 4 und 12 auszulösen.",
        "Diese Scene läuft den gesamten Verse (16 Takte). Kein Wechsel mitten im Verse.",
      ],
    },
    {
      code: "B",
      name: "16tel-Hat-Variation",
      whenToUse: "Pre-Hook Energie-Aufbau",
      feel: "Dringlicher — Textur ändert sich ohne den Groove zu verändern",
      maschineSteps: [
        "Scene 1 duplizieren → Scene 2. In Scene 2 16tel-Noten-Hats hinzufügen (alle Schritte aktiv).",
        "16tel-Hat-Velocity auf 55 flach setzen — viel leiser als die Haupt-8tel-Hats.",
        "Die 8tel-Hits wirken automatisch wie Akzente über dem 16tel-Bett.",
        "Nur für den Pre-Hook verwenden (4 Takte). Für den Hook zurück zu 8tel-Hats wechseln.",
      ],
    },
    {
      code: "C",
      name: "Hook-Groove",
      whenToUse: "Hook-Abschnitte — muss 'größer' wirken",
      feel: "Voller, breiter — Shaker-Schicht hinzufügen",
      maschineSteps: [
        "Scene 1 duplizieren → Scene 3 für den Hook. Shaker-Pad auf Schritten 2, 6, 10, 14 hinzufügen.",
        "Shaker: Stickz Hip-Hop Toolkit oder CHRONICLES Soul Melodies Shaker verwenden. Velocity 40 flach.",
        "Gesamte Gruppen-Lautstärke in Scene 3 um +1dB erhöhen — der Hook soll lauter wirken.",
        "Reverb-Send auf der Snare bei +20% nur in dieser Scene hinzufügen — erzeugt 'größere' Snare für den Hook.",
      ],
    },
    {
      code: "D",
      name: "Breakdown",
      whenToUse: "4-Takt-Breakdown-Abschnitt vor dem letzten Hook",
      feel: "808 und Kick allein — auf das Wesentliche reduziert",
      maschineSteps: [
        "Pattern 2 erstellen: Kick nur auf Schritten 0 und 8. Alles andere komplett still.",
        "Die 808-Basslinie läuft weiter aus dem vorherigen Abschnitt — sie soll den Groove allein tragen.",
        "Kick-Velocity 120 (Maximum) — es ist der einzige Drum-Hit, er muss wie eine Wand treffen.",
        "Maximal 4 Takte. Länger wird es langweilig. Der Kontrast zum vollständigen Return muss sofort sein.",
      ],
    },
    {
      code: "E",
      name: "Half-Time Drop",
      whenToUse: "Post-Verse-Break oder Bridge",
      feel: "Half-Speed-Gefühl — moderner Trap-Ansatz",
      maschineSteps: [
        "Snare bewegt sich nur auf Beat 3 (Schritt 8). Doppelte Kick-Hits auf Schritten 0+2 für den Half-Time-Drag.",
        "8tel-Noten-Hats behalten — sie verhindern, dass das Pattern zu spärlich wirkt.",
        "Funktioniert am besten bei 100+ BPM wo das Half-Time-Feeling eine gefühlte Tempo-Halbierung erzeugt.",
        "8 Takte in der Bridge oder als Post-Verse-Moment vor dem Pre-Hook verwenden.",
      ],
    },
  ],
  "rnb": [
    {
      code: "A",
      name: "Voller R&B-Groove",
      whenToUse: "Verse 1-B und alle vollen Abschnitte",
      feel: "Seidig und geschwungen — das komplette Arrangement-Gefühl",
      maschineSteps: [
        "Scene 1, voller Groove. Rimshot statt Snare verwenden — sitzt höher im Mix und lässt mehr Low-Mid-Raum.",
        "Swing auf 58–62%. R&B braucht mehr Swing als Boom Bap um natürlich zu klingen.",
        "Ghost-Kicks (Schritt 5) bei Velocity 50 — diese werden gefühlt, nicht gehört. Sie treiben den Groove vorwärts.",
        "Raum-Plate-Reverb auf dem Rimshot: 0,8s Decay, 30% wet. Es soll leicht 'schweben'.",
      ],
    },
    {
      code: "B",
      name: "Spärlicher Verse A",
      whenToUse: "Verse 1-A (erster Drums-Einsatz)",
      feel: "Delikat — Drums setzen leise nach dem Pad-Intro ein",
      maschineSteps: [
        "Nur Kick und Rimshot. Keine Hats, keine Ghost Notes. Nach 8 Takten Nur-Pad-Intro wirkt selbst eine leise Kick bedeutsam.",
        "Kick-Velocity 75 — nicht laut. Die Kick 'kommt an', schlägt nicht zu.",
        "Rimshot bei Velocity 80. Längere Release-Hüllkurve setzen — etwas mehr klingen lassen als üblich.",
        "Läuft 8 Takte (Verse 1-A). Dann zu Scene 1 (voller Groove) für Verse 1-B wechseln.",
      ],
    },
    {
      code: "C",
      name: "Shaker-Groove",
      whenToUse: "Verse-2-Variation oder Hook-Textur",
      feel: "Kontinuierliche Textur — der Shaker trägt den 16tel-Groove",
      maschineSteps: [
        "Einen Shaker auf allen 16 Schritten bei Velocity 30 flach hinzufügen — kaum hörbar. Er existiert als Textur-Bett.",
        "Die 8tel-Noten-Hats schweben jetzt ÜBER dem Shaker und erzeugen rhythmische Tiefe.",
        "Einen echten Shaker-Sound aus Stickz Hip-Hop Toolkit oder REVIVAL Soul Melodies verwenden. Synthetische Sounds vermeiden.",
        "Diese Scene funktioniert für Verse 2 oder neben der Hook-Keys-Schicht zum Verdichten der Textur.",
      ],
    },
    {
      code: "D",
      name: "Bridge-Pattern",
      whenToUse: "Bridge-Abschnitt — überhaupt keine Drums",
      feel: "Komplette Drum-Stille — nur Pads und Bass",
      maschineSteps: [
        "Pattern 2 erstellen — komplett leer. Keine Drums. Nichts.",
        "Die Bass-Gruppe spielt weiter. Die Keys-Gruppe spielt weiter. Aber keine Drums.",
        "In Maschine: die gesamte Drum-Gruppe für diese 8 Takte muten. Scene-Mutes verwenden, nicht Pad-Mutes.",
        "Das ist die kraftvollste Variation. Stille IST die Variation. Darauf vertrauen.",
      ],
    },
    {
      code: "E",
      name: "Hook-Erweiterung",
      whenToUse: "Hook Out — der vollste Moment",
      feel: "Alles spielt — Peak-Energie mit hinzugefügter Conga/Perc",
      maschineSteps: [
        "Conga oder Bongo (aus REVIVAL Soul Melodies oder Stickz Hip-Hop Toolkit) auf Schritten 5 und 11 bei Velocity 60 hinzufügen.",
        "Diese synkopierten Percussion-Hits füllen die Räume zwischen Kick und Rimshot.",
        "Auch: eine Shaker-Schicht darunter bei Velocity 25 — nur Textur.",
        "Nur für den letzten Hook und Hook Out. Im Verse nie verwenden — der Kontrast muss verdient sein.",
      ],
    },
  ],
};

export const SONGLAB_DE_LAYERS: DeLayerCard[] = [
  {
    order: 1,
    instrument: "Kick + Snare / Rimshot",
    whenToIntroduce: "Takt 1 jedes Abschnitts außer dem Pad-Intro. Die Grundlage — nichts anderes ist wichtig wenn das hier nicht groovt.",
    processing: "Kick: Low-Pass bei 200Hz um Sprödheit zu entfernen. Snare: Transient Master Attack 0, Sustain +2. Maschines eingebauten Kompressor auf dem Drum-Bus: 4:1, 20ms Attack, 100ms Release.",
    breathingTip: "Kick komplett für 1 Takt vor dem Hook entfernen. Die Stille der Kick lässt den Hook anfühlen, als ob der Boden unter den Füßen erscheint.",
  },
  {
    order: 2,
    instrument: "Hi-Hats + Shaker",
    whenToIntroduce: "1 vollen Abschnitt nach Kick/Snare warten (oder 8 Takte warten). Spät einsetzende Hats erzeugen einen Aufbau-Effekt ohne neue Elemente hinzuzufügen.",
    processing: "Closed Hat: High-Pass bei 3kHz, sanfter High-Shelf-Boost +1,5dB bei 10kHz. Shaker (aus Weekday): keine Verarbeitung — die vorverarbeitete Textur ist der Punkt.",
    breathingTip: "Hats im Pre-Hook für 2 Takte komplett entfernen. Dann auf Beat 1 des Hooks zurückbringen — der Wiedereintritt des Hats ist einer der befriedigendsten Momente in einem Beat.",
  },
  {
    order: 3,
    instrument: "Sample / Loop",
    whenToIntroduce: "Verse 1-A: setzt mit dem vollen Groove oder kurz nach dem Kick-Einsatz ein. Nie vor Drums im Hip Hop. Kann vor Drums im R&B einsetzen (Pads können allein erscheinen).",
    processing: "High-Pass bei 60Hz (Bass-Raum lassen). Sanfter Kompressor (2:1, 40ms Attack). Raum im Grounded-Modus: 0,4s Decay, 15% wet. Das Sample 'im Raum' mit den Drums halten.",
    breathingTip: "Über 8 Takte eine langsame Low-Pass-Filter-Automation anwenden: bei 800Hz starten, bis Takt 8 auf voll öffnen. Die allmähliche Helligkeitszunahme erzeugt Spannung ohne sonst etwas zu verändern.",
  },
  {
    order: 4,
    instrument: "Bass (Sub / Elektrisch)",
    whenToIntroduce: "In Verse 1-B einsetzen (zweite Hälfte des Verse). Der Bass, der die Tonart bestätigt, ist ein Commitment — für maximale Wirkung verzögern. Im R&B noch länger verzögern.",
    processing: "Sub-Bass (Massive X): High-Pass bei 40Hz, sanfte Kompression. Elektrischer Bass (Rickenbacker): sanfter EQ-Boost bei 250Hz für Wärme, Schnitt bei 500Hz für Klarheit. Bass zur Kick sidechainen: 4:1, 0ms Attack, 80ms Release.",
    breathingTip: "Der Bass muss nicht jeden Takt spielen. Für 2 Takte in der Bridge aussetzen lassen — nur die gehaltene Root Note. Raum im Bass erzeugt 10x mehr emotionale Wirkung als kontinuierliche Bewegung.",
  },
  {
    order: 5,
    instrument: "Keys / Melodie (microKEY)",
    whenToIntroduce: "Hauptsächlich Hook-Abschnitte. Kann in den letzten 2 Takten des Pre-Hooks erscheinen. Nie in Verse 1-A — erst das Sample die Melodie allein tragen lassen.",
    processing: "Klavier/Rhodes: EQ-Dip bei 350Hz (-2dB) für Boxigkeit entfernen. Raum Bloom hinzufügen (1,2s, 30% wet). Für microKEY-Aufnahme: Quantize auf 1/8 Note NACH der Aufnahme setzen (erst frei aufnehmen, dann quantisieren).",
    breathingTip: "Die Melodie soll nicht auf jeden Beat spielen. 1-Beat-Pausen zwischen Phrasen lassen — die Stille zwischen Noten ist die Melodie. Noten programmieren, die 'atmen' — eine 2 Beats gehaltene Note ist mehr wert als 4 kurze Noten.",
  },
  {
    order: 6,
    instrument: "Pad / Atmosphäre",
    whenToIntroduce: "Kann ganz am Anfang einsetzen (Nur-Pad-Intro im R&B). Für Hip Hop / Boom Bap im Hook bei -18dB einsetzen und langsam auf -12dB hochfahren. Das Pad soll anfühlen, als wäre es immer da gewesen.",
    processing: "Auf ein einzelnes Pad laden, One-Shot, langer Release (2s+). Raum Shimmer: 2,5s Decay, 50% wet. EQ: High-Pass bei 200Hz (Schmutz entfernen). Das Pad lebt im High-Mid-Raum, nicht im Low-End.",
    breathingTip: "Das Pad soll durchgehend in der Bridge laufen, selbst wenn Drums stoppen. Es IST der Atemraum — die Sache, die Stille mit emotionalem Inhalt füllt statt sie leer zu lassen.",
  },
  {
    order: 7,
    instrument: "FX / Übergänge",
    whenToIntroduce: "Nur an Abschnittsgrenzen: der Takt vor dem Beginn eines neuen Abschnitts. Nie mitten im Abschnitt. Ein Riser in den Hook. Ein Downlifter in die Bridge. Vinyl-Knistern in Intros/Outros.",
    processing: "Vinyl-Rauschen aus Weekday: auf Schritt 0 auslösen, loopen lassen. Lautstärke max -20dB — nur Textur. Riser: Pitch-Automation +24 Halbtöne über 4 Takte. Downlifter: Pitch -24 Halbtöne über 2 Takte.",
    breathingTip: "Weniger ist mehr bei FX. EINEN Übergangs-Effekt pro Abschnittswechsel. Riser UND Downlifter UND Cymbal-Roll alle gleichzeitig zu nutzen hebt sie gegenseitig auf. Einen wählen und committen.",
  },
];

export const SONGLAB_DE_ARRANGER: DeArrangerStep[] = [
  { step: "1", title: "Gruppen korrekt einrichten", detail: "Gruppe A = Drums (Kick, Snare, Hats, Perc — alle auf separaten Pads innerhalb der Gruppe). Gruppe B = Bass (ein Massive X oder Kontakt Instrument). Gruppe C = Sample. Gruppe D = Keys/Akkorde. Gruppe E = Pads. Jede Gruppe übernimmt ihr eigenes internes Mixen." },
  { step: "2", title: "Pattern A und Pattern B pro Gruppe erstellen", detail: "In jeder Gruppe 2 Patterns erstellen: Pattern 1 ist die Haupt-Version, Pattern 2 ist die Variation. Für Drums: Pattern 1 = voller Groove, Pattern 2 = abgespeckt oder offene Hats. Für Bass: Pattern 1 = volle Basslinie, Pattern 2 = nur Root Notes. Für Sample: Pattern 1 = voller Loop, Pattern 2 = leise/gefilterte Version." },
  { step: "3", title: "Scenes für jeden Song-Abschnitt erstellen", detail: "Scene 1: Intro. Scene 2: Verse A. Scene 3: Verse B. Scene 4: Pre-Hook. Scene 5: Hook. Scene 6: Bridge. Scene 7: Outro. Jede Scene mit SHIFT + dem Scene-Pad benennen, dann 'Rename' auswählen. Kurze, klare Namen (V1-A, HOOK, BRDG)." },
  { step: "4", title: "Patterns den Scenes zuweisen", detail: "Für jede Scene: Scene-Pad drücken um es zu aktivieren. Dann für jede Gruppe den GROUP-Button halten und auswählen, welches Pattern in dieser Scene spielt. In der Verse-A-Scene: Drum-Pattern 1, Bass-Pattern 2 (nur Roots), Sample-Pattern 1, Keys aus. In der Hook-Scene: alle Pattern 1, alles aktiv." },
  { step: "5", title: "Scene-Loop-Längen setzen", detail: "Jede Scene rechtsklicken → Länge setzen. Intro = 4 Takte. Verses = 8 oder 16 Takte. Pre-Hook = 4 Takte. Hook = 8 Takte. Bridge = 4–8 Takte. Die Länge bestimmt, wie lange Maschine die Scene abspielt bevor sie stoppt oder weiterrückt." },
  { step: "6", title: "Arranger-Timeline nutzen", detail: "SHIFT + SONG am MK3 drücken, um in den Arranger-Modus zu wechseln. Jede Scene in der Reihenfolge auf die Timeline ziehen: Intro → V1-A → V1-B → Pre-Hook → Hook → V2 → Pre-Hook → Hook → Bridge → Hook Out → Outro. Jeden Scene-Block doppelklicken um seine genaue Taktanzahl zu setzen." },
  { step: "7", title: "Fill-Pattern an Übergängen einfügen", detail: "Zwischen großen Abschnittswechseln (Pre-Hook → Hook, Verse → Pre-Hook): das 1-Takt-Fill-Pattern (Pattern 3 in der Drum-Gruppe) im Arranger einfügen. Es erscheint als 1-Takt-Block vor dem neuen Abschnitt. Das ist der 'Snare-Roll', der jeden neuen Abschnitt launcht." },
  { step: "8", title: "Gruppen-Mutes pro Scene programmieren", detail: "In jeder Scene können ganze Gruppen gemutet werden. Bridge-Scene: Drum-Gruppe komplett muten. Intro-Scene: Bass- und Keys-Gruppen muten. Rechtsklick auf eine Gruppe in der Scene-Ansicht → In Scene muten. Das ist anders als Pad-Mutes — es beeinflusst den gesamten Gruppen-Output." },
  { step: "9", title: "microKEY Live-Performance", detail: "Korg microKEY über USB verbinden. In Maschine-Einstellungen > MIDI: microKEY als Eingang aktivieren. In der Keys-Gruppe: MIDI-Learn aktivieren. Jetzt können Akkorde live über dem arrangierten Beat gespielt werden während Maschine durch den Song läuft. Aufnehmen: REC + PLAY halten und auf dem microKEY ins aktive Pattern spielen." },
  { step: "10", title: "Das Arrangement exportieren", detail: "Wenn das Arrangement fertiggestellt ist: Datei > Audio exportieren > Master Output. Bereich auf 'Arrangement' setzen. Dateiformat: WAV, 24-bit, 48kHz. Das exportiert den kompletten arrangierten Song als Stereo-Mixdown. Oder Datei > Audio exportieren > Einzelne Gruppen für Stems jeder Instrumentenschicht verwenden." },
];
