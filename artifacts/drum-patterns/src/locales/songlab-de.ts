export type DeSongSection = { name: string; note: string };
export type DeSongBlueprint = { title: string; sections: DeSongSection[] };
export type DeBeatVariation = { name: string; whenToUse: string; feel: string; maschineSteps: string[] };
export type DeLayerCard = { whenToIntroduce: string; processing: string; breathingTip: string };
export type DeArrangerStep = { title: string; detail: string };

export const SONGLAB_BLUEPRINTS_DE: Record<string, DeSongBlueprint> = {
  "boom-bap": {
    title: "Klassische Boom-Bap-Songstruktur",
    sections: [
      { name: "Cold Open", note: "Nur Drums — Kick und Snare, keine Hats. Vinyl-Knistern aus Weekday im Hintergrund. Noch keine Melodie. Das rohe Feeling etablieren, bevor irgendwas anderes einsetzt." },
      { name: "Strophe 1-A", note: "Voller Drum-Groove mit dem Sample auf Takt 1. Noch kein Bass — lass Sample und Drums zusammen atmen. Der Hörer muss den Pocket spüren, bevor der Bass die Tonart bestätigt." },
      { name: "Strophe 1-B", note: "Bass setzt auf Takt 1 von 1-B ein. Das Trio aus Drums + Sample + Bass ist jetzt das komplette Arrangement. Keys oder Melodie können auf Takt 6 als Vorschau vor dem Pre-Hook einsetzen." },
      { name: "Pre-Hook", note: "Auf Half-Time reduzieren: Kick nur auf 1+3, Snare nur auf 3. Über diese 4 Takte langsam ein Low-Pass-Filter am Sample öffnen. Der Filter-Sweep signalisiert: es kommt etwas. Bass spielt nur Root-Noten." },
      { name: "Hook", note: "Alles landet auf einmal. Keys/Akkorde treten in den Vordergrund. Einen Shaker oder Extra-Perc-Layer hinzufügen, der in der Strophe nicht da war — erzeugt das 'größere' Gefühl ohne den Kern-Beat zu verändern." },
      { name: "Strophe 2", note: "Zurück zum Groove, aber die B-Sektion mit Variation nutzen (offene Hats statt geschlossener). Das Sample anders choppen — gleiche Quelle, anderer Slice. Vertraut-aber-anders hält das Interesse wach." },
      { name: "Pre-Hook 2", note: "Gleiche Reduktion wie Pre-Hook 1, aber noch mehr abstreifen. Nur Kick, Snare und Bass-Root. Das Sample wird nur noch als Hall-Fahne gehört. Maximale Spannung — der Hook wird gewaltig wirken." },
      { name: "Hook 2", note: "Strukturell identisch mit Hook 1, aber auf Takt 7 einen 1-Takt-Drum-Fill hinzufügen, um exakte Wiederholung zu verhindern." },
      { name: "Bridge", note: "Drums komplett aus. Bass sustaint. Sample um 2 Halbtöne nach oben gestimmt (klingt 'leichter'). Bunny- oder Weekday-Pad-Swells füllen den Raum. Das ist der emotionale Höhepunkt — Stille ist das Lauteste was du hast." },
      { name: "Hook Out", note: "Volles Arrangement kehrt zurück. Alles hinzufügen was zurückgehalten wurde: Extra-Percussion, Keys-Melodie, Pad darunter. Das ist der vollste Moment des Tracks. Ausreiten." },
      { name: "Outro", note: "Den Cold Open spiegeln. Auf Drums + Vinyl-Knistern reduzieren. Dann auch Drums langsam muten. Das Pad/Knistern ist das Letzte was man hört. Voller Kreis — der Loop endet wo er begann." },
    ],
  },
  "hip-hop": {
    title: "Contemporary-Hip-Hop-Songstruktur",
    sections: [
      { name: "Intro", note: "Nur Sample-Hook — keine Drums. Der Rap/Hip-Hop-Intro-Move: zuerst die Melodie etablieren, den Beat 'droppen' wenn Drums einsetzen. Den besten 2-Takt-Abschnitt des Samples nutzen. Weekday-Vinyl-Noise optional." },
      { name: "Strophe 1-A", note: "Beat fällt hart auf Takt 1. Keine Vorwarnung. Volle Drums + Sample gleichzeitig. Bass bleibt aus — das Sample übernimmt das Low-End-Gefühl bis Takt 5." },
      { name: "Strophe 1-B", note: "808 oder Bass setzt auf Takt 1 von 1-B ein. Hier wird der Beat schwer. Keys können als kleiner Fill in den letzten 2 Takten einsetzen, um den Pre-Hook vorzubereiten." },
      { name: "Pre-Hook", note: "Auf Hi-Hat-Variation wechseln — 16tel statt 8tel, oder nur offene Hats. Die Energie bleibt, die Textur ändert sich. Bass kann hier aktiver werden: mehr Noten, mehr Rhythmus. Das signalisiert dem Ohr: Übergang." },
      { name: "Hook", note: "Alles voll. Den Hook 'heller' machen — High-Shelf auf dem Master-Bus um +1,5dB schieben, oder einen hellen Shaker auf alle 16tel. Der Hook soll sich anders ANFÜHLEN, nicht nur anders klingen." },
      { name: "Strophe 2", note: "Voller Groove ab Takt 1 — kein Build nötig, da bereits etabliert. Ab Takt 9 ein neues Percussion-Element einführen (Conga, Perc, Extra-Shaker). Kleine Änderung, großer psychologischer Effekt." },
      { name: "Pre-Hook 2", note: "Wie Pre-Hook 1. Vertrautheit ist hier gut — der Hörer weiß, was kommt und antizipiert den Hook-Drop." },
      { name: "Hook 2", note: "Identisch mit Hook 1, aber einen 2-Takt-Fill auf Takt 7 erwägen. Oder: Hat-Geschwindigkeit für die letzten 2 Takte verdoppeln (16tel) um in Strophe/Bridge zu launchen." },
      { name: "Breakdown", note: "Nur 808/Bass + Kick. Alles andere aus. Der Drill-artige Breakdown-Moment — Sub und Kick sperren zusammen. Maximaler Raum. 4 Takte fühlen sich wie ein Reset an." },
      { name: "Hook Out", note: "Volle Rückkehr nach dem Breakdown. Sofort einsetzen — kein Build, nur Drop. Das ist der kraftvollste Moment im Song durch den Kontrast zum Breakdown davor." },
      { name: "Outro", note: "Schnelles Fade oder abrupter Abbruch. Hip Hop endet oft ohne langes Outro — der Track stoppt, der letzte Takt des Hooks klingt aus, fertig." },
    ],
  },
  "rnb": {
    title: "Neo Soul / R&B Songstruktur",
    sections: [
      { name: "Intro", note: "Nur Keys und Pads — keine Drums, kein Sample, kein Bass. The Gentleman oder Scarbee Mark I für die Akkorde. Bunny- oder Odyssey-Soul-Pad darunter. 8 volle Takte pure Harmonie. R&B verlangt Geduld am Anfang." },
      { name: "Strophe 1-A", note: "Drums setzen ein, aber spärlich — nur Kick und Rimshot, keine Hats. Sample setzt auf Takt 1 ein. Der Kontrast zum drums-freien Intro macht selbst eine leise Kick kraftvoll. Keys aus dem Intro beibehalten." },
      { name: "Strophe 1-B", note: "Voller Groove JETZT — Hats ein, Bass ein, volles Drum-Pattern. Das ist die emotionale Verpflichtung des Songs. Alles soll sich zugehörig anfühlen. Scarbee-Rickenbacker-Bass bei moderater Lautstärke." },
      { name: "Pre-Hook", note: "Drums bleiben voll, aber Hats auf 8tel reduzieren. Sample wird Hintergrundselement. Keys treten als Haupt-melodische Aussage in den Vordergrund. Bass kann kleine Läufe machen. Aufbau ist emotional, nicht nur dynamisch." },
      { name: "Hook", note: "Komplettes Arrangement. Keys sollen melodisch am stärksten hier sein — volle Akkord-Voicings (Cm9, Fm7 usw.) statt Einzelnoten. MicroKEY für ein live-fühlendes Melodie oder Akkord auf dem Sample nutzen." },
      { name: "Strophe 2", note: "Voller Groove, aber 12 Takte statt 16 — kürzere Strophen später im Song fühlen sich enger und intentionaler an. Von geschlossenen zu offenen Hats wechseln. Das Sample kann ein anderer Abschnitt sein." },
      { name: "Pre-Hook 2", note: "Wie zuvor — die Vertrautheit ist tröstend in R&B. Kleine Variation: Bunny-Pad bei niedrigem Volume hinzufügen, um den Raum zwischen den Sample-Elementen zu füllen." },
      { name: "Hook 2", note: "Hook-Struktur wiederholen. MicroKEY-Melodie eine Oktave höher als in Hook 1 erwägen — subtile Aufhellung. Oder leichte harmonische Percussion (Sticks-Toolkit-Rim-Hits) auf den Upbeats hinzufügen." },
      { name: "Bridge", note: "Alles aus außer: Bass (nur Root-Note sustainted), Keys (volle Akkord-Melodie), Pads (weit mit Raum Shimmer). 8 volle Takte. Der verletzlichste, intimste Moment. Die Tonart kann hier einen Schritt nach oben modulieren." },
      { name: "Hook Out", note: "Drums explodieren nach der Bridge-Stille zurück. Das ist der Höhepunkt des emotionalen Bogens. Alles hinzufügen — alle Layer, maximale Keys-Melodie, weite Pads. Der Kontrast zur Bridge macht dies gewaltig." },
      { name: "Outro", note: "Langsames Fade — nicht abrupt. Elemente einzeln über 8 Takte entfernen: Drums zuerst (Takt 2), Bass (Takt 4), Keys (Takt 6), nur noch Pads (Takt 7–8). Der letzte Klang ist das Pad, das in Hall ausklingt. R&B endet anmutig." },
    ],
  },
};

export const SONGLAB_VARIATIONS_DE: Record<string, DeBeatVariation[]> = {
  "boom-bap": [
    {
      name: "Haupt-Groove",
      whenToUse: "Strophen-Abschnitte",
      feel: "Voller Pocket mit Hats und Ghost-Notes",
      maschineSteps: [
        "Scene 1, Group A — dein vollständiger Beat wie programmiert.",
        "Group-Swing auf 54–60% setzen. Das ist die Seele des Patterns.",
        "Hi-Hat-Velocity manuell variieren: Downbeats auf 90, Upbeats auf 50–60.",
        "Diese Scene läuft für alle Strophen-Abschnitte und vollständig arrangierte Momente.",
      ],
    },
    {
      name: "Abgespeckt",
      whenToUse: "Intro, Outro, Cold Open",
      feel: "Skelett — nur Kick und Snare",
      maschineSteps: [
        "Scene 1 duplizieren → Scene 2. In Scene 2: Rechtsklick auf Hat-Pad → Mute in Scene.",
        "Auch das Ghost-Snare-Pad in Scene 2 muten.",
        "Kick-Velocity in Scene 2 erhöhen (+10) — ohne Hats braucht es mehr Präsenz.",
        "Für Cold Open (4 Takte) verwenden und im Outro spiegeln.",
      ],
    },
    {
      name: "Offener-Hat-Groove",
      whenToUse: "Strophe 2, B-Sektion Variation",
      feel: "Luftig, lockerer — komplett andere Textur",
      maschineSteps: [
        "Scene 1 duplizieren → Scene 3. In Scene 3: geschlossenes Hat-Pad muten.",
        "Offenes Hat-Pad auf Steps 2, 6, 10, 14 aktivieren (die Upbeats jedes Beats).",
        "Offene Hat-Velocity auf 65 setzen — weicher als die Kick. Es soll schweben, nicht schneiden.",
        "Choke-Group zwischen offenen und geschlossenen Hats einrichten (beide in Choke-Group 1).",
      ],
    },
    {
      name: "Fill-Takt",
      whenToUse: "Takt 8 oder 16 Übergang (1-Takt-Pattern)",
      feel: "Snare-Kaskade in den nächsten Abschnitt",
      maschineSteps: [
        "Ein 1-Takt-Pattern erstellen (Pattern 2) in der Drum-Group. Auf nur 1 Takt setzen.",
        "Kick nur Takt 1, Snare-Läufe von Step 10–15 mit steigender Velocity (60→120).",
        "Hats auf Steps 0–9 bei Velocity 70 gleichmäßig, dann Stille während die Snare übernimmt.",
        "Im Maschine-Arranger: dieses 1-Takt-Pattern bei jedem 8. oder 16. Takt als Übergang einsetzen.",
      ],
    },
    {
      name: "Half-Time-Bridge",
      whenToUse: "Bridge oder Breakdown-Abschnitt",
      feel: "Langsam und massiv — maximaler Raum",
      maschineSteps: [
        "Pattern 3 erstellen. Kick nur auf Step 0 (Beat 1). Snare nur auf Step 8 (Beat 3).",
        "Viertelnoten-Hats: Steps 0, 4, 8, 12. Velocity 55 gleichmäßig.",
        "Kick-Velocity 105 — es ist die einzige Kick im Takt, sie muss gewaltig wirken.",
        "Ausschließlich in der Bridge (4–8 Takte) verwenden. NIRGENDWO SONST.",
      ],
    },
  ],
  "hip-hop": [
    {
      name: "Voller Beat",
      whenToUse: "Strophen-Abschnitte ab Takt 1",
      feel: "Druckvoll, direkt, sofort",
      maschineSteps: [
        "Scene 1 — dein Haupt-Strophen-Beat. Im Hip Hop fällt der Beat sofort auf Takt 1.",
        "Swing zwischen 50–53% halten. Hip Hop ist enger als Boom Bap.",
        "Clap kann die Snare verdoppeln — Pad Link nutzen, um beide gleichzeitig auf Steps 4 und 12 auszulösen.",
        "Diese Scene läuft die gesamte Strophe (16 Takte). Kein Wechseln mitten in der Strophe.",
      ],
    },
    {
      name: "16tel-Hat-Variation",
      whenToUse: "Pre-Hook Energie-Aufbau",
      feel: "Dringlicher — Textur ändert sich ohne den Groove zu wechseln",
      maschineSteps: [
        "Scene 1 duplizieren → Scene 2. In Scene 2: 16tel-Noten-Hats hinzufügen (alle Steps aktiv).",
        "16tel-Hat-Velocity auf 55 gleichmäßig — viel leiser als die Haupt-8tel-Hats.",
        "Die 8tel-Note-Hits fühlen sich automatisch wie Akzente über dem 16tel-Bett an.",
        "Nur für den Pre-Hook verwenden (4 Takte). Für den Hook zurück zu 8tel-Hats wechseln.",
      ],
    },
    {
      name: "Hook-Groove",
      whenToUse: "Hook-Abschnitte — soll sich 'größer' anfühlen",
      feel: "Voller, breiter — Shaker-Layer hinzufügen",
      maschineSteps: [
        "Scene 1 duplizieren → Scene 3 für den Hook. Shaker-Pad auf Steps 2, 6, 10, 14 hinzufügen.",
        "Shaker: Sticks-Toolkit oder Chronicles-Shaker verwenden. Velocity 40 gleichmäßig.",
        "Die gesamte Group-Lautstärke um +1dB in Scene 3 erhöhen — der Hook soll lauter wirken.",
        "Reverb-Send auf der Snare bei +20% nur in dieser Scene — erzeugt 'größere' Snare für den Hook.",
      ],
    },
    {
      name: "Breakdown",
      whenToUse: "4-Takt-Breakdown vor dem finalen Hook",
      feel: "Nur 808 und Kick — auf das Wesentliche reduzieren",
      maschineSteps: [
        "Pattern 2 erstellen: Kick nur auf Steps 0 und 8. Alles andere komplett still.",
        "Die 808-Bass-Line läuft weiter — sie soll den Groove alleine tragen.",
        "Kick-Velocity 120 (Maximum) — es ist der einzige Drum-Hit, er muss wie eine Wand treffen.",
        "Maximal 4 Takte. Länger wird es langweilig. Der Kontrast mit der vollständigen Rückkehr muss sofort sein.",
      ],
    },
    {
      name: "Half-Time-Drop",
      whenToUse: "Post-Strophen-Break oder Bridge",
      feel: "Halbe-Tempo-Feeling — moderner Trap-verwandt",
      maschineSteps: [
        "Snare nur auf Beat 3 (Step 8). Doppelte Kick-Hits auf Steps 0+2 für das Half-Time-Schleifen-Gefühl.",
        "8tel-Noten-Hats beibehalten — verhindern dass das Pattern zu spärlich wirkt.",
        "Funktioniert am besten bei 100+ BPM, wo das Half-Time-Gefühl eine wahrgenommene Tempo-Halbierung erzeugt.",
        "8 Takte in der Bridge oder als Post-Strophen-Moment vor dem Pre-Hook verwenden.",
      ],
    },
  ],
  "rnb": [
    {
      name: "Voller R&B-Groove",
      whenToUse: "Strophe 1-B und alle vollen Abschnitte",
      feel: "Seidig und geswingt — das komplette Arrangement-Gefühl",
      maschineSteps: [
        "Scene 1, voller Groove. Rimshot statt Snare — sitzt höher im Mix und lässt mehr Low-Mid-Raum.",
        "Swing auf 58–62%. R&B braucht mehr Swing als Boom Bap, um natürlich zu klingen.",
        "Ghost-Kicks (Step 5) bei Velocity 50 — gefühlt, nicht gehört. Sie treiben den Groove vorwärts.",
        "Raum-Platten-Hall auf dem Rimshot: 0,8s Decay, 30% Wet. Er soll leicht 'schweben'.",
      ],
    },
    {
      name: "Spärliche Strophe A",
      whenToUse: "Strophe 1-A (erster Drums-Einsatz)",
      feel: "Zart — Drums setzen nach dem Pad-Intro leise ein",
      maschineSteps: [
        "Nur Kick und Rimshot. Keine Hats, keine Ghost-Notes. Nach 8 Takten nur-Pad-Intro wirkt selbst eine leise Kick bedeutsam.",
        "Kick-Velocity 75 — nicht laut. Die Kick 'kommt an', trifft nicht.",
        "Rimshot bei Velocity 80. Längere Release-Hüllkurve setzen — etwas mehr ausklingen als üblich.",
        "Läuft 8 Takte (Strophe 1-A). Dann zu Scene 1 (voller Groove) für Strophe 1-B wechseln.",
      ],
    },
    {
      name: "Shaker-Groove",
      whenToUse: "Strophe-2-Variation oder Hook-Textur",
      feel: "Kontinuierliche Textur — der Shaker trägt den 16tel-Groove",
      maschineSteps: [
        "Shaker auf allen 16 Steps bei Velocity 30 gleichmäßig — kaum hörbar. Existiert als Textur-Bett.",
        "Die 8tel-Noten-Hats schweben jetzt ÜBER dem Shaker und erzeugen eine Tiefe rhythmischer Layer.",
        "Einen echten Shaker-Sound aus Sticks Toolkit oder Revival verwenden. Synthetische Sounds vermeiden.",
        "Diese Scene funktioniert für Strophe 2 oder neben dem Hook-Keys-Layer.",
      ],
    },
    {
      name: "Bridge-Pattern",
      whenToUse: "Bridge-Abschnitt — gar keine Drums",
      feel: "Absolute Stille von Drums — nur Pads und Bass",
      maschineSteps: [
        "Pattern 2 erstellen — komplett leer. Keine Drums. Nichts.",
        "Die Bass-Group läuft weiter. Die Keys-Group läuft weiter. Aber keine Drums.",
        "In Maschine: die gesamte Drum-Group für diese 8 Takte muten. Scene-Mutes, nicht Pad-Mutes.",
        "Das ist die kraftvollste Variation. Stille IST die Variation. Vertraue darauf.",
      ],
    },
    {
      name: "Hook-Ausbau",
      whenToUse: "Hook Out — der vollste Moment",
      feel: "Alles spielt — Spitzen-Energie mit Conga/Perc",
      maschineSteps: [
        "Conga oder Bongo (aus Revival oder Sticks Toolkit) auf Steps 5 und 11 bei Velocity 60 hinzufügen.",
        "Diese synkopierten Percussion-Hits füllen die Räume zwischen Kick und Rimshot.",
        "Auch: Shaker-Layer darunter bei Velocity 25 — nur Textur.",
        "Nur im finalen Hook und Hook Out. Niemals in der Strophe — der Kontrast muss verdient sein.",
      ],
    },
  ],
};

export const SONGLAB_LAYERS_DE: DeLayerCard[] = [
  {
    whenToIntroduce: "Takt 1 jedes Abschnitts außer dem Pad-Intro. Das Fundament — alles andere ist egal, wenn das nicht groovt.",
    processing: "Kick: Low-Pass bei 200Hz gegen Sprödigkeit. Snare: Transient Master Attack 0, Sustain +2. Maschines eingebauter Kompressor auf dem Drum-Bus: 4:1, 20ms Attack, 100ms Release.",
    breathingTip: "Die Kick für 1 Takt vor dem Hook komplett entfernen. Die Stille der Kick lässt den Hook sich anfühlen, als hätte sich der Boden unter den Füßen geöffnet.",
  },
  {
    whenToIntroduce: "1 vollen Abschnitt nach Kick/Snare warten (oder 8 Takte). Hats die spät einsetzen erzeugen einen Aufbau-Effekt ohne neue Elemente hinzuzufügen.",
    processing: "Geschlossene Hat: High-Pass bei 3kHz, sanfter High-Shelf-Boost +1,5dB bei 10kHz. Shaker (aus Weekday): keine Bearbeitung — die vorverarbeitete Textur ist der Punkt.",
    breathingTip: "Hats im Pre-Hook für 2 Takte komplett entfernen. Dann auf Beat 1 des Hooks zurückbringen — der Wiedereinsatz des Hats ist einer der befriedigendsten Momente im Beat.",
  },
  {
    whenToIntroduce: "Strophe 1-A: setzt mit dem vollen Groove ein oder kurz nach dem Kick-Einsatz. Nie vor den Drums in Hip Hop. Kann vor Drums im R&B erscheinen (Pads können alleine stehen).",
    processing: "High-Pass bei 60Hz (Bass-Raum lassen). Sanfter Kompressor (2:1, 40ms Attack). Raum im Grounded-Modus: 0,4s Decay, 15% Wet. Das Sample 'im Raum' mit den Drums halten.",
    breathingTip: "Einen langsamen Low-Pass-Filter über 8 Takte automatisieren: bei 800Hz beginnen, bis Takt 8 voll öffnen. Die graduelle Aufhellung baut Spannung ohne sonst etwas zu verändern.",
  },
  {
    whenToIntroduce: "In Strophe 1-B einsetzen (zweite Hälfte der Strophe). Der Bass der die Tonart bestätigt ist eine Verpflichtung — für maximalen Effekt verzögern. In R&B noch länger verzögern.",
    processing: "Sub-Bass (Massive X): High-Pass bei 40Hz, sanfte Kompression. E-Bass (Rickenbacker): sanfter EQ-Boost bei 250Hz für Wärme, Absenkung bei 500Hz für Klarheit. Bass zur Kick sidechain-komprimieren: 4:1, 0ms Attack, 80ms Release.",
    breathingTip: "Der Bass muss NICHT jeden Takt spielen. Für 2 Takte in der Bridge aussetzen lassen — nur die gehaltene Root-Note. Raum im Bass erzeugt 10-mal mehr emotionale Wirkung als kontinuierliche Bewegung.",
  },
  {
    whenToIntroduce: "Primär in Hook-Abschnitten. Kann in den letzten 2 Takten eines Pre-Hooks vorgreifen. Nie in Strophe 1-A — das Sample soll zuerst die Melodie alleine tragen.",
    processing: "Piano/Rhodes: EQ-Dip bei 350Hz (-2dB) gegen Dumpfheit. Raum Bloom (1,2s, 30% Wet). Für MicroKEY-Aufnahme: Quantize auf 1/8-Note NACH der Aufnahme setzen (erst frei spielen, dann quantisieren).",
    breathingTip: "Die Melodie soll NICHT jeden Beat spielen. 1-Beat-Pausen zwischen Phrasen lassen — die Stille zwischen Noten ist die Melodie. Noten programmieren die 'atmen' — eine 2 Beats gehaltene Note ist mehr wert als 4 kurze.",
  },
  {
    whenToIntroduce: "Kann ganz am Anfang einsetzen (nur-Pad-Intro in R&B). Für Hip Hop / Boom Bap: im Hook bei -18dB einsetzen und langsam auf -12dB anreiten. Das Pad soll sich anfühlen als wäre es immer da gewesen.",
    processing: "Auf ein einzelnes Pad laden, One-Shot, langer Release (2s+). Raum Shimmer: 2,5s Decay, 50% Wet. EQ: High-Pass bei 200Hz (Schlamm entfernen). Das Pad lebt im High-Mid-Raum, nicht im Low End.",
    breathingTip: "Das Pad soll durchgehend in der Bridge laufen, auch wenn Drums stoppen. Es IST der Atemraum — das Ding, das Stille mit emotionalem Inhalt füllt statt sie einfach leer zu lassen.",
  },
  {
    whenToIntroduce: "Nur an Abschnitts-Grenzen: der Takt vor dem Start eines neuen Abschnitts. Nie mitten im Abschnitt. Ein Riser in den Hook. Ein Downlifter in die Bridge. Vinyl-Knistern in Intros/Outros.",
    processing: "Vinyl-Noise aus Weekday: auf Step 0 auslösen, loopen. Volume bei max. -20dB — nur Textur. Riser: Pitch-Automation +24 Halbtöne über 4 Takte. Downlifter: Pitch -24 Halbtöne über 2 Takte.",
    breathingTip: "Weniger ist mehr bei FX. EINEN Übergangseffekt pro Abschnitts-Wechsel. Riser UND Downlifter UND Cymbal-Roll alle im gleichen Moment zu verwenden hebt sie gegenseitig auf. Eines auswählen und dabei bleiben.",
  },
];

export const SONGLAB_ARRANGER_DE: DeArrangerStep[] = [
  {
    title: "Groups korrekt einrichten",
    detail: "Group A = Drums (Kick, Snare, Hats, Perc — alle auf separaten Pads innerhalb der Group). Group B = Bass (ein Massive-X- oder Kontakt-Instrument). Group C = Sample. Group D = Keys/Akkorde. Group E = Pads. Jede Group mischt intern."
  },
  {
    title: "Pattern A und Pattern B pro Group erstellen",
    detail: "In jeder Group 2 Patterns erstellen: Pattern 1 ist die Hauptversion, Pattern 2 die Variation. Drums: Pattern 1 = voller Groove, Pattern 2 = abgespeckt oder offene Hats. Bass: Pattern 1 = volle Basslinie, Pattern 2 = nur Root-Noten. Sample: Pattern 1 = voller Loop, Pattern 2 = leise/gefilterte Version."
  },
  {
    title: "Scenes für jeden Song-Abschnitt erstellen",
    detail: "Scene 1: Intro. Scene 2: Strophe A. Scene 3: Strophe B. Scene 4: Pre-Hook. Scene 5: Hook. Scene 6: Bridge. Scene 7: Outro. Jede Scene benennen mit SHIFT + Scene-Pad → 'Rename'. Kurze, klare Namen (V1-A, HOOK, BRDG)."
  },
  {
    title: "Patterns den Scenes zuweisen",
    detail: "Für jede Scene: Scene-Pad drücken zum Aktivieren. Dann für jede Group den Group-Button halten und auswählen, welches Pattern in dieser Scene läuft. In Strophe-A-Scene: Drum Pattern 1, Bass Pattern 2 (nur Roots), Sample Pattern 1, Keys aus. In Hook-Scene: alle Pattern 1s, alles aktiv."
  },
  {
    title: "Scene-Loop-Längen festlegen",
    detail: "Rechtsklick auf jede Scene → Länge setzen. Intro = 4 Takte. Strophen = 8 oder 16 Takte. Pre-Hook = 4 Takte. Hook = 8 Takte. Bridge = 4–8 Takte. Die Länge bestimmt wie lange Maschine die Scene spielt bevor sie stoppt oder weiterschaltet."
  },
  {
    title: "Den Arranger-Timeline nutzen",
    detail: "SHIFT + SONG am MK3 drücken für den Arranger-Modus. Jede Scene in der richtigen Reihenfolge in die Timeline ziehen: Intro → V1-A → V1-B → Pre-Hook → Hook → V2 → Pre-Hook → Hook → Bridge → Hook Out → Outro. Auf einen Scene-Block doppelklicken, um seine genaue Takt-Anzahl festzulegen."
  },
  {
    title: "Das Fill-Pattern bei Übergängen einfügen",
    detail: "Zwischen wichtigen Abschnitts-Wechseln (Pre-Hook → Hook, Strophe → Pre-Hook): das 1-Takt-Fill-Pattern (Pattern 3 in der Drum-Group) im Arranger einfügen. Es erscheint als 1-Takt-Block vor dem neuen Abschnitt. Das ist die 'Snare-Roll', die jeden neuen Abschnitt einleitet."
  },
  {
    title: "Group-Mutes pro Scene programmieren",
    detail: "In jeder Scene können ganze Groups gemuted werden. Bridge-Scene: Drum-Group komplett muten. Intro-Scene: Bass- und Keys-Groups muten. Rechtsklick auf eine Group in der Scene-Ansicht → Mute in Scene. Unterscheidet sich von Pad-Mutes — betrifft den gesamten Group-Output."
  },
  {
    title: "microKEY Live-Performance",
    detail: "Korg microKEY per USB verbinden. In Maschine Preferences > MIDI: microKEY als Input aktivieren. In der Keys-Group: MIDI-Learn aktivieren. Jetzt können Akkorde live über den arrangierten Beat gespielt werden. Aufnahme: REC + PLAY halten und auf dem microKEY in das aktive Pattern spielen."
  },
  {
    title: "Das Arrangement exportieren",
    detail: "Wenn das Arrangement finalisiert ist: File > Export Audio > Master Output. Bereich auf 'Arrangement' setzen. Format: WAV, 24-Bit, 48kHz. Exportiert den kompletten arrangierten Song als Stereo-Mixdown. Oder File > Export Audio > Individual Groups für Stems jedes Instrument-Layers."
  },
  {
    title: "Die 'Abhören'-Regel",
    detail: "Nach dem Aufbau des vollen Arrangements: Maschine schließen und die exportierte Audio öffnen. Ohne irgendetwas anzufassen für die volle Länge abhören. Die Momente notieren, die zu lang, zu leer oder zu voll wirken. Zurück und nur diese Momente korrigieren. Einmal Abhören = mehr Verbesserung als 2 Stunden Echtzeit-Tweaken."
  },
  {
    title: "Atemraum-Checkliste",
    detail: "Vor dem Abschluss prüfen: (1) Mindestens ein 4-Takt-Abschnitt ohne Drums. (2) Mindestens zwei Punkte, wo Hats komplett entfernt werden. (3) Der Bass spielt NICHT im Intro. (4) Das Sample-Filter öffnet sich in mindestens einem Pre-Hook. (5) Der letzte Abschnitt ENDET — kein langes Fade außer bei R&B. Diese fünf Regeln machen jedes Arrangement professionell klingen."
  },
];

export const SONGLAB_ARRANGER_INTRO_DE = "Der folgende Maschine-MK3-Workflow setzt voraus, dass Drum-Group, Bass-Group, Sample-Group und Keys-Group bereits aus dem Chop Lab und den Pattern-Seiten eingerichtet sind. Das ist die Arrangement-Ebene, die auf all dem aufbaut — aus einem einzelnen Takt-Loop eine vollständige Song-Struktur machen.";
