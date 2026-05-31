export type DeBassPattern = {
  name?: string;
  key?: string;
  description: string;
  pluginSuggestion: string;
  microKeyTip: string;
  variation: string;
};

export type DeMelodyIdea = {
  sequenceDescription: string;
  microKeyTip: string;
  variation: string;
};

export type DeSampleIdea = {
  lookFor: string;
  treatment: string;
};

export type DeMelodyRecs = {
  microKeySetup: string;
  samples: DeSampleIdea[];
  bassPatterns?: DeBassPattern[];
  melodies: DeMelodyIdea[];
};

export const melodyRecommendationsDe: Record<string, DeMelodyRecs> = {

  "boom-bap": {
    microKeySetup:
      "In der Maschine-Software: File > Preferences > MIDI aufrufen. Das Korg microKEY als MIDI-Eingabegerät aktivieren. In der Bass/Melodie-Group: REC halten und auf dem microKEY spielen, um direkt in den Step-Sequencer aufzunehmen. Für Live-Aufnahmen mit Swing-Feeling: Metronom einschalten (SHIFT + PLAY) und 2 Takte in einer Schleife aufnehmen, bis es sich richtig anfühlt.",
    samples: [
      {
        lookFor:
          "Piano- und Organ-Loops im Bereich 86–94 BPM. Im Moll-Ordner navigieren — alles suchen, das mit 'Am', 'Dm' oder 'Gm' beschriftet ist. Die 'Piano Pocket'-Loops (bei denen Kick und Bass natürlich in den Sample einhaken) sind das Gold. Takte 3–4 jedes Loops finden — dort liegt der Groove.",
        treatment:
          "Option A (clean): den 2-Takt-Pocket-Abschnitt auf ein Pad laden, auf One-Shot stellen, auf Step 0 triggern. Option B (Chop): auf dem Akkordwechsel und dem Turnaround-Hit schneiden — ergibt einen Stab und einen langen Abschnitt zum Abwechseln.",
      },
      {
        lookFor:
          "Die Gospel-Orgel- und Blechbläser-Breakdown-Abschnitte. Im REVIVAL Soul Melodies-Browser in Maschine zu 'Loops > Rhythmic' navigieren — Loops mit spärlichem Arrangement (nur Orgel oder Piano, kein Vollband) suchen. Ein einzelner 2-Beat-Akkordschlag aus dem Breakdown-Abschnitt wird zum mächtigsten Stab, den man einsetzen kann.",
        treatment:
          "Den Akkordschlag als 1-Beat- oder 2-Beat-Slice schneiden. Als Stutter-Chop (Steps 12–14) im Pattern platzieren. Den Boom-Bap-Lo-Fi-Stack anwenden: Saturator (Tape 25 %) → Lo-Fi (12-Bit) → EQ (Hi-Shelf -4 dB bei 10 kHz).",
      },
      {
        lookFor:
          "Zeitgenössische Neo-Soul-Piano- oder Rhodes-Loops — die sauberen melodischen Abschnitte ohne Drums. Loops, bei denen die Akkordqualität klar erkennbar ist (Moll-7, Moll-9). Diese sind zum direkten Einsatz gedacht. BPM vor dem Laden auf das Pattern abstimmen.",
        treatment:
          "Vollständig clean verwenden — keine Lo-Fi-Bearbeitung. Nur den Tiefenbereich unter 80 Hz per EQ kappen, um Platz für den Sub-Kick zu schaffen. Raum im Grounded-Modus hinzufügen (0,4 s, 15 % Wet), um den Sound in einem Raum zu platzieren. Dieser Sample IST die Melodie — die Drums sollen ihm dienen.",
      },
      {
        lookFor:
          "Hip-Hop-Melodie-Loops bei 88–95 BPM. Alles suchen, das ein Piano- oder Gitarrenelement neben dem Drum-Groove enthält. Die Akkord-Loops in CHRONICLES Soul Melodies sind speziell für den Sample-Flip-Workflow entwickelt — sie haben bereits den schmutzigen, komprimierten Charakter eines Producer-Beats.",
        treatment:
          "Den 2-Takt-Melodie-Loop clean verwenden ODER den Turnaround (letzte 2 Beats von Takt 2) als separaten Stab-Trigger schneiden. Keine starke Bearbeitung nötig — CHRONICLES Soul Melodies-Samples sind vorverarbeitet. Nur den Sub per EQ kappen (Hochpass bei 60 Hz), um Platz für den Kick zu schaffen.",
      },
      {
        lookFor:
          "Die Lo-Fi-Piano- und E-Piano-Elemente. Den vollen Loop NICHT als Hauptsound verwenden — sie sind bereits stark bearbeitet. Stattdessen eine einzelne 4-Beat-Piano-Phrase als sekundären Bett-Layer unter den Haupt-Sample (Soulful Dreams oder Odyssey) legen.",
        treatment:
          "Auf ein separates Pad laden, Lautstärke auf -15 dB unter dem Haupt-Sample setzen. Das Vinyl-Rauschen von Weekday ist ebenfalls nützlich — auf ein Pad laden und auf Step 0 triggern, als textürelles Zischen durchgehend laufen lassen. Keine weitere Bearbeitung nötig.",
      },
    ],
    bassPatterns: [
      {
        name: "Klassischer Moll-Walk",
        key: "a-Moll",
        description:
          "Die fundamentale Boom-Bap-Bassbewegung. Root auf Beat 1, Quinte auf dem synkopierten Schlag, Sexte als Turnaround. Verriegelt mit einem Standard-Kick auf Steps 0 und 8.",
        pluginSuggestion:
          "Massive X auf einem Pad laden (Komplete 15). Ein Sub-Bass-Patch wählen. Portamento auf 30 ms für sanfte Übergänge einstellen. Alternativ: Scarbee Rickenbacker Bass (Kontakt) für ein gesampeltes, akustisches Feeling.",
        microKeyTip:
          "In A-Moll auf dem microKEY: A ist die weiße Taste. A spielen (untere Oktave), dann 7 weiße Tasten hochzählen bis E. F ist eine weiße Taste über E. D ist 3 weiße Tasten unter E. Während das Pattern läuft aufnehmen — kein perfektes Timing nötig, danach quantisieren.",
        variation:
          "Die Note auf Step 3 von E2 zu C2 (der kleinen Terz) verschieben für ein souliges, weniger 'walking' Feeling. Oder Step 11 ganz weglassen — das Pattern bekommt mehr Raum.",
      },
      {
        name: "Tiefer Pocket-Drone",
        key: "d-Moll",
        description:
          "Einzel-Root-Bass, der nur mit dem Kick einrastet. Minimale Bewegung — der Sample erledigt die gesamte harmonische Arbeit. Von DJ Premier und Alchemist ständig eingesetzt.",
        pluginSuggestion:
          "Maschine Drumsynth > Kick-Sub-Preset — auf D stimmen. ODER Battery 4 > ein 'Sub Hit'-Sample laden und stimmen. Der Drone-Bass soll sich wie eine Bassdrum anfühlen, die eine Tonhöhe hält — kein Instrument.",
        microKeyTip:
          "Nur zwei Tasten auf dem microKEY spielen: D (das tiefe D) und C (eine weiße Taste links davon). Das ist die gesamte Basslinie. Nur diese zwei Noten in den richtigen Positionen aufnehmen. Einfachheit ist hier richtig.",
        variation:
          "A2 auf Step 4 hinzufügen (die Quinte von D-Moll) — jetzt gibt es Root-Quinte-Bewegung, ohne das minimalistische Feeling zu verlieren. Oder die C2-Geister auf Steps 5 und 13 verschieben für einen leicht anderen Push.",
      },
      {
        name: "Synkopierter Bounce",
        key: "g-Moll",
        description:
          "Das klassische 'Bounce'-Bass-Pattern. Kick und Bass landen nicht immer zusammen — der Bass schiebt sich auf Step 7 vor Beat 3, um den Boom-Bap-Lean zu erzeugen.",
        pluginSuggestion:
          "Massive X — Sub-Bass-Patch, auf G gestimmt. Die Eb-Note (kleine Sexte) auf Step 7 ist die Farbnote — sie sollte leiser als die Root-Schläge sein. In Massive X sorgt leichtes Portamento (20 ms) für einen sanften Übergang.",
        microKeyTip:
          "G-Moll auf dem microKEY: G (weiß), D (weiß, 7 weiße Tasten höher), Eb (schwarz, eine über D), F (weiß, 3 über D). Bei halber Geschwindigkeit aufnehmen (45 BPM wenn das Pattern 90 BPM hat), dann wieder auf 90 BPM stellen.",
        variation:
          "Eb2 auf Step 7 durch F2 (die kleine Septime) ersetzen für eine jazzige, weniger angespannte Bewegung. Oder den Step-13-Schwanz ganz entfernen — lässt den Bass spärlicher und kraftvoller wirken.",
      },
      {
        name: "Chromatische Klage",
        key: "d-Moll",
        description:
          "Eine fallende chromatische Basslinie — jede Note sinkt um einen Halbton. Das ist der Klang des Schmerzes: nirgendwohin zu gehen außer nach unten, an nichts festzuhalten. Kein rhythmischer Überraschungsmoment, keine Synkope. Er fällt einfach. Das verheerendste Bass-Pattern unter einem spärlichen Hi-Hat-Pattern.",
        pluginSuggestion:
          "Massive X — Sub-Bass-Patch mit Decay auf 1,5 Takte, sodass jede Note in die nächste überblüht. Der nachhallende Übergang zwischen C#2 und C2 ist der Ort, an dem der Schmerz lebt — leicht überlappen lassen. Scarbee Rickenbacker (Kontakt, Fingered-Modus) verwüstet dieses Pattern ebenfalls.",
        microKeyTip:
          "Auf dem microKEY: D (weiß), C# (schwarz — direkt links von D), C (weiß), B (weiß, eine links davon), Bb (schwarz, unter B). Den Ringfinger auf D legen. Der chromatische Abstieg passt natürlich unter vier nach links gleitende Finger. Ring auf D, Mittelfinger auf C#, Zeigefinger auf C, dann runter zu B und Bb greifen. Langsam bei 40 BPM aufnehmen. Jeden Halbton als kleines Nachgeben spüren.",
        variation:
          "Bei C2 auf Step 8 stoppen — nicht zu B1 hinunter auflösen. Den Takt auf C2 hängen lassen. Der unaufgelöste Halbton über D ist einer der herzzerreißendsten Klänge in der Musik — die Note, die irgendwo hinwill, aber nicht geht.",
      },
      {
        name: "Suspended-Schmerz",
        key: "a-Moll",
        description:
          "Basiert auf der suspendierten Quarte (D über A). Der sus4-Akkord hat keine Terz — ein Klang des reinen Wartens, etwas das sich auflösen muss, aber nie vollständig tut. Dieser Bass erzeugt Sehnsucht durch Verweigerung der Befriedigung. Der geduldigste Herzschmerz im Boom Bap.",
        pluginSuggestion:
          "The Gentleman (Kontakt) im tiefen Register gespielt — die D-Note (suspended Quarte) einen ganzen Beat gehalten, hat auf einem aufgenommenen Piano enorme sehnsuchtsvolle Wärme. Ein Cello-Patch (Spitfire LABS) funktioniert ebenfalls kraftvoll: die ausgehaltene sus4 auf gestrichenen Saiten ist der orchestrale Ausdruck von Sehnsucht.",
        microKeyTip:
          "Nur drei Noten auf dem microKEY: A (weiß), D (weiß — 4 weiße Tasten unter A in der unteren Oktave), E (weiß — eine über D). Daumen auf D, kleinen Finger bis zu A strecken. D ist das emotionale Zentrum — wenn man auf Step 5 landet, leicht länger halten als das Raster vorschreibt. Diese Suspension ist das Gefühl.",
        variation:
          "Nie vollständig auflösen: den Takt auf D2 bei Step 14 beenden. Das Pattern schleift zurück zu A2 auf Step 0, aber das Ohr hört noch das D nachklingen. Über 2 Takte entsteht ein ewig unaufgelöster Kreislauf — das Bassäquivalent einer Frage, die immer wieder gestellt wird.",
      },
      {
        name: "Phrygische Seele",
        key: "E Phrygisch",
        description:
          "Verwendet das flache Sekund-Intervall (F über E) — die definierende Farbe des Phrygischen Modus. Dieser Halbton über der Root ist das emotional komprimierteste Intervall in der westlichen Musik: uralt, zeremoniell, trauernd. Im Flamenco, Qawwali und den dunkelsten Winkeln des Boom Bap zu finden.",
        pluginSuggestion:
          "Massive X auf E mit langem Decay (2 Takte). F2 (nur ein Halbton über Root E) soll sich wie Druck anfühlen — bei der F2-Velocity-Spur leicht bei 55–70 Hz boosten. Das phrygische Flat-2 entfaltet seine größte Wirkung auf einem ausgehaltenen, sub-reichen Instrument: nicht gezupft, sondern gehalten und resonant.",
        microKeyTip:
          "E und F auf dem microKEY sind unmittelbar benachbarte weiße Tasten — keine schwarze Taste dazwischen, pure Nähe. Zeigefinger auf E, Mittelfinger auf F. Spüren, wie nah sie beieinanderliegen. Diese körperliche Nähe spiegelt die emotionale Enge des Halbtons wider. E fest spielen, dann leicht nach rechts lehnen, um F zu berühren. Diese zwei Noten zuerst bei 30 BPM aufnehmen. D ist zwei weiße Tasten links von E.",
        variation:
          "C2 auf Step 6 hinzufügen (die kleine Sexte von E) zwischen den zwei E2-Schlägen — ergibt E / F / C / E. Das ist die andalusische Kadenz, das Fundament der Flamenco-Harmonik. Oder auf nur zwei Noten reduzieren: E2 (Step 0) und F2 (Step 4). Zwei Noten, maximaler Raum, maximaler Schmerz.",
      },
    ],
    melodies: [
      {
        sequenceDescription:
          "Von A aufsteigen bis E, dann zurück zu G absteigen. In halben Noten spielen (eine Note alle 2 Steps). Sehr singbar — funktioniert als Hook, an den sich Hörer erinnern.",
        microKeyTip:
          "Auf dem microKEY in A-Moll-Pentatonik: die 5 Noten sind A (weiß), C (weiß), D (weiß), E (weiß), G (weiß). Alle weißen Tasten. Mit dem Daumen unter dem mittleren C bei A beginnen. Bis E spielen, dann zurück zu G. Als 1-Takt-Loop aufnehmen und von Maschine wiederholen lassen.",
        variation:
          "Auf E statt A beginnen — man erhält einen absteigenden Hook, der sich anfühlt, als würde er eine Frage beantworten. Oder eine Wiederholung hinzufügen: A3 A3 C4 D4 E4 — die doppelte Note erzeugt ein Stutter-Feeling.",
      },
      {
        sequenceDescription:
          "Absteigende Linie von D durch den Dorischen Modus. Das H-Natur (statt Bb) gibt ihr die Jazz-Färbung. Eine Note pro Beat — langsam, bedächtig, melodisch.",
        microKeyTip:
          "D-Dorisch verwendet dieselben Noten wie C-Dur — alle weißen Tasten, beginnend auf D. Auf dem microKEY: über dem mittleren C beginnen, abwärts spielen: D C A G E F D. Die F-Note klingt besonders seelenvoll, wenn man etwas länger darauf verweilt.",
        variation:
          "Ein Bb3 zwischen C4 und A3 einfügen — das fügt einen chromatischen Durchgangston hinzu und lässt die Linie anspruchsvoller klingen. Oder das oberste D4 am Anfang wiederholen: D4 D4 C4 A3 — die doppelte Root erzeugt Betonung.",
      },
      {
        sequenceDescription:
          "Ein einzelner 4-Noten-Akkordschlag, alle 2 Takte als Stab getriggert. Gospel-beeinflusst — Bb und D zusammen über dem Moll-Akkord erzeugen die Gospel-Farbe.",
        microKeyTip:
          "Cm9 auf dem microKEY: C (weiß), Eb (schwarz, eine über D), G (weiß, 4 über Eb), Bb (schwarz, 2 über A) gleichzeitig halten. Das ist eine 4-Finger-Streckung — Daumen auf C, Zeigefinger auf Eb, Ringfinger auf G, kleiner Finger auf Bb. Den Akkord fest anschlagen und 1 Beat klingen lassen.",
        variation:
          "Das Bb aus dem Akkord entfernen für ein einfacheres Cm (Moll-Dreiklang: C Eb G) — weniger komplex, funktioniert gut unter dichten Samples. Oder D eine Oktave höher (D4) auf einem zweiten, gleichzeitig getriggerten Pad hinzufügen für die volle Cm9-Stimmführung über Oktaven.",
      },
      {
        sequenceDescription:
          "Auf E beginnen, das F sofort berühren (das phrygische Flat-2 — ein einzelner Halbton aufwärts), dann durch den gesamten Modus bis A fallen. Das F an zweiter Position ist der gesamte emotionale Inhalt. Alles andere ist die Konsequenz dieses einen unerträglichen Schritts. In Viertelnoten spielen — kein Eilen. Jeden Abstieg mit Gewicht landen lassen.",
        microKeyTip:
          "E Phrygisch verwendet alle weißen Tasten auf dem microKEY. Daumen auf E legen. F ist unmittelbar daneben — keine schwarze Taste dazwischen, reine Adjacenz. E dann F spielen: spüren, wie klein dieses Intervall ist, wie nah diese Tasten beieinanderliegen. Dann sinkt der Modus in weißen Tasten: E F G A B C D, alles weiß, alles fallend. Bei 50 BPM in Viertelnoten aufnehmen. The Gentleman oder Scarbee Mark I laden und Haltepedal durchgehend gedrückt halten, damit Noten ineinander nachklingen.",
        variation:
          "Den Abstieg nach der E–F–E-Bewegung auf G beginnen: E4 F4 G4 F4 E4 D4 C4. Das fügt einen leichten Aufschwung vor dem Fall hinzu — die G–F–E-Bewegung erzeugt einen kleinen Anstieg, der den Absturz zu C noch unvermeidlicher erscheinen lässt.",
      },
      {
        sequenceDescription:
          "Greift zweimal nach F (der kleinen Sexte von A-Moll — das emotional stärkste Intervall in dieser Tonart) und fällt dann zu C und zum tiefen A. Die Form ist ein Seufzer: zweimal nach oben zu etwas streben, dann loslassen. In Achteln über einen Takt gespielt.",
        microKeyTip:
          "A-Moll-Skala auf dem microKEY (ohne B): A, C, D, E, F, G — alle weißen Tasten. Daumen auf A legen. Die F-Note ist 5 weiße Tasten über A — sie finden, bevor man aufnimmt. Auf dem microKEY erzeugt das Greifen des kleinen Fingers zu F eine natürliche Streckung. Diese Streckung IST die Emotion. A (Daumen) zu F (kleiner Finger) üben, bis die Bewegung natürlich wirkt. Dann aus dem Gedächtnis aufnehmen, ohne auf die Tastatur zu schauen.",
        variation:
          "Das zweite F4 durch Ab4 (die schwarze Taste zwischen G und A) ersetzen. Diese einzelne Notenänderung verwandelt natürliches A-Moll in harmonisches A-Moll mit der erhöhten Sexte. Das Ab klingt fast opernhaft trauernd im A-Moll-Kontext — eine einzelne schwarze Taste kann ein ganzes emotionales Register verändern.",
      },
      {
        sequenceDescription:
          "Einen verminderten Sept-Akkord über 2 Oktaven abwärts arpeggieren. Jede Note liegt genau 3 Halbtöne unter der letzten — diese vollkommene Symmetrie ist das, was verminderte Akkorde so verstörend macht. Keine tonale Schwerkraft, keine klare Heimat, keine Auflösung. Pure harmonische Suspension, gespielt als Abstieg.",
        microKeyTip:
          "Verminderter Sept auf dem microKEY: B (weiß), D (weiß), F (weiß), Ab (schwarz — zwischen G und A). Drei weiße Tasten und eine schwarze. Für den Abstieg: mit dem kleinen Finger auf B (oberes Register) beginnen, dann Ab (schwarze Taste — leicht über der weißen Ebene), F, D, B (unteres Register), Ab. Die schwarze Ab-Taste unterbricht den Weiß-Tasten-Fluss wie ein blauer Fleck. Fest spielen, nicht zögerlich — ein leiser blauer Fleck ist nur ein Schmierfleck.",
        variation:
          "Auf D statt B beginnen: D4 B3 Ab3 F3 D3. Das ist der D-Halbvermindert-Akkord (Dm7b5) — der Akkord im Eröffnungsteil von Beethovens Mondscheinsonate. Oder jede Note 2 volle Beats aushalten statt Achtel. Je langsamer der Abstieg, desto unvermeidlicher wirkt die Ankunft.",
      },
    ],
  },

  "hip-hop": {
    microKeySetup:
      "Für Hip-Hop-Basslinien mit 808-Slides: In Maschine Massive X auf einem Pad laden. Portamento in Massive X aktivieren (der 'Port'-Regler, auf 60–120 ms einstellen). Im Step-Sequencer kann jeder Step eine andere Tonhöhe haben — einen Step auswählen, dann den Tune-Parameter des Pads (+/- Halbtöne) verwenden, um die Note für diesen Step einzustellen. Das microKEY nimmt Live-MIDI in Maschine auf, wenn REC gehalten wird — für 808-Slides die Noten langsam und legato spielen.",
    samples: [
      {
        lookFor:
          "Zeitgenössische Soul-Abschnitte mit Gitarren- und Keyboard-Kombinationen im Bereich 95–105 BPM. Loops mit einem moderneren Produktions-Sound suchen — heller, weniger staubig als Vol 1. Alle 2-Takt-Abschnitte finden, bei denen Gitarre und Piano rhythmisch ineinandergreifen — das wird zu einem engen Hip-Hop-Chop.",
        treatment:
          "Option A (Chop): auf Beat 2 von Takt 1 und Beat 4 von Takt 2 schneiden — ergibt einen 2-Beat-Stab und einen 2-Beat-Schwanz. Im Step-Sequencer zwischen ihnen wechseln für ein choppiges, rhythmisches Feeling. Option B (clean): den gesamten 2-Takt-Loop verwenden und per Sidechain zum Kick pumpen (5:1, 0 ms Attack, 80 ms Release) für einen pumpenden Hip-Hop-Sound.",
      },
      {
        lookFor:
          "Die Lo-Fi-E-Piano- und Gitarren-Elemente im Bereich 90–105 BPM. Weekdays zeitgenössisch-lo-fi Textur funktioniert perfekt für moderne Hip-Hop-Produktion. Alle Phrasen mit einem leichten Drift oder Waver suchen — das ist die Bandsättigungs-Charakteristik, die über einem engen Hi-Hat-Pattern perfekt klingt.",
        treatment:
          "Clean verwenden. Keine zusätzlichen Lo-Fi-Plugins draufschichten. Nur EQ (Hochpass bei 50 Hz, Hi-Shelf -2 dB bei 12 kHz) und leichte Sidechain-Kompression vom Kick anwenden. Die vorverarbeitete Textur ist der Punkt.",
      },
      {
        lookFor:
          "Die atmosphärischen Pad- und Akkord-Elemente. Bunnys weicher, luftiger Charakter füllt den Raum, den ein härteres Hip-Hop-Pattern offen lässt. Alle Pad- oder Keyboard-Loops mit einem langsamen Akkordwechsel suchen — idealerweise ein 4-Takt-Loop mit nur 2 Akkordpositionen.",
        treatment:
          "Als Textur-Layer bei -18 dB laden. Raum im Bloom-Modus hinzufügen (1,2 s Decay, 30 % Wet), um ihn weiter zu spreizen. Diese Schicht sollte als Atmosphäre gefühlt, nicht als Melodie gehört werden. Stummschalten und der Beat fühlt sich leer an — so weiß man, dass es richtig eingestellt ist.",
      },
      {
        lookFor:
          "Neo-Soul-Akkordprogressionen, die zwischen zwei oder drei Akkorden wechseln. Alles mit einer ii-V-i oder i-VII-VI-Bewegung suchen — diese Progressionen haben natürliche harmonische Spannung, die Hip-Hop-Pattern ergänzt. Loops suchen, bei denen die Akkordschläge auf Beats 2 und 4 landen (zusammen mit der Snare).",
        treatment:
          "Chop-Ansatz: bei jedem Akkordwechsel schneiden. Den ersten Akkord (Steps 0–7) und zweiten Akkord (Steps 8–15) auf verschiedene Pads legen — jetzt können sie unabhängig gespielt werden. Clean-Ansatz: den gesamten 2-Takt-Loop verwenden und über das gesamte Drum-Pattern atmen lassen.",
      },
      {
        lookFor:
          "Die melodischen Hip-Hop-Loops bei 95–105 BPM. CHRONICLES Soul Melodies-Loops sind für dieses Genre entwickelt — einfach einen finden, der zur Tonart und BPM passt. Die Gitarren-Loops in CHRONICLES Soul Melodies haben einen rauen, leicht verzerrten Charakter, der in modernem Hip-Hop perfekt sitzt.",
        treatment:
          "Clean verwenden. Guitar Rig 7s 'Tube Compressor' auf dem Sample-Kanal für extra Wärme anwenden. Sidechain zum Kick bei 4:1, 80 ms Release für den pumpenden Effekt. Keine weitere Bearbeitung nötig.",
      },
    ],
    bassPatterns: [
      {
        name: "808 Sub-Slide",
        key: "g-Moll",
        description:
          "Die moderne Hip-Hop-Bassbewegung. Zwei Haupt-Root-Schläge mit einem chromatischen Slide dazwischen. Das Portamento (Glide) in Massive X übernimmt den Slide automatisch — man muss nur die zwei Notenpositionen setzen.",
        pluginSuggestion:
          "Massive X (Komplete 15) — 'Sub Bass'-Patch wählen, Portamento auf 80 ms, Mono-Modus EIN. Die Tonhöhe jedes Steps über den Pad-Tune-Parameter im Step-Sequencer einstellen. Bb1 und C2 am Ende des Takts gleiten für den 808-Glide-Effekt ineinander.",
        microKeyTip:
          "G-Moll auf dem microKEY: G (weiß), D (weiß, 7 weiße Tasten höher), C (weiß, unter D), Bb (schwarz, unter B). Maschine auf MIDI-Aufnahme mit Portamento EIN stellen. Die Noten langsam und legato spielen — der Glide zwischen ihnen erzeugt den 808-Charakter. Bei 45 BPM aufnehmen, dann wieder auf volles Tempo stellen.",
        variation:
          "D2 auf Step 8 durch Eb2 (die kleine Sexte) ersetzen — leicht dunkler, bedrohlicher. Oder einen zusätzlichen G2-Geist auf Step 6 (Velocity 50) hinzufügen, um ein kurzes Stutter vor Step 8 zu erzeugen.",
      },
      {
        name: "Synkopierter Modern-Bass",
        key: "e-Moll",
        description:
          "Der vorwärts-geneigte Hip-Hop-Bass. Die Note auf Step 6 antizipiert Beat 3 — das erzeugt das 'schiebende' Feeling in modernen Hip-Hop-Basslinien.",
        pluginSuggestion:
          "Massive X auf E-Moll gestimmt. Die D-Note (kleine Septime) erscheint zweimal — sie ist die Farbnote von Em7. Die Velocity bei D2 (Step 6) höher halten als bei B1 (Step 3) — der synkopierte Schlag soll spürbar sein, die Geisternote nur auf Kopfhörern hörbar.",
        microKeyTip:
          "E-Moll auf dem microKEY: E (weiß), B (weiß, 7 weiße Tasten höher), D (weiß, 2 unter E in der nächsten Oktave). Die schwierigste Note zeitlich korrekt zu spielen ist Step 6 (die Synkope vor Beat 3). Diesen Schlag zuerst isoliert üben, dann die gesamte Basslinie aufnehmen.",
        variation:
          "Step 3 (B1) ganz entfernen — das Pattern wird einfacher und lässt mehr Raum. Oder B1 durch C2 (eine kleine Sext-Substitution) ersetzen für eine jazzigere, unerwartetere Bassfarbe.",
      },
      {
        name: "Half-Time Minimal-Bass",
        key: "c-Moll",
        description:
          "Zwei Noten pro Takt. Die extreme Version des Raum-Lassens. In Half-Time-Hip-Hop-Patterns verwendet, bei denen das Kick-Pattern den Großteil des rhythmischen Interesses trägt.",
        pluginSuggestion:
          "Massive X oder Drumsynth > Kick Sub (auf C bzw. G gestimmt). Über einen separaten Bus mit starker Kompression routen (4:1, 0 ms Attack, 200 ms Release) — der Bass soll sich wie eine zweite Bassdrum anfühlen, die auch eine Tonhöhe spielt.",
        microKeyTip:
          "Nur zwei Noten auf dem microKEY: C (mittleres C, untere Oktave) und G (7 weiße Tasten über C). Einmal spielen, perfekt. Die Stille rund um sie die Arbeit machen lassen. Wenn das microKEY Aftertouch hat, diesen bei der G-Note für leichte Tonhöhenmodulation verwenden.",
        variation:
          "Bb1 auf Step 14 hinzufügen (kurz bevor das Pattern zu Step 0 zurückschleift) — eine einzelne antizipatorische Note, die den Loop sich wie 'gleich startbereit' anfühlen lässt. Oder ein leises C3 (eine Oktave höher) auf Step 4 für einen Mid-Register-Ping.",
      },
      {
        name: "Tritonus-Trauer",
        key: "c-Moll",
        description:
          "Verwendet den Tritonus (Gb/F#) — das Intervall, das historisch als 'diabolus in musica', der Teufel in der Musik, bezeichnet wurde. Über einer C-Moll-Root erzeugt der Tritonus maximale harmonische Spannung ohne jede Auflösung. Das ist Dissonanz als Waffe der Emotion. In den dunkelsten Trap- und Drill-Produktionen zu finden.",
        pluginSuggestion:
          "Massive X — 808-Sub-Patch, Portamento 40 ms. Das Gb1 (Tritonus) sollte dynamisch die leiseste Note sein, aber harmonisch die dissonanteste — als Geisternote einsetzen (Velocity 65–70), nicht als Hauptschlag. Bei echten 808s das Gb genau stimmen: 6 Halbtöne unter C.",
        microKeyTip:
          "C-Moll mit Tritonus auf dem microKEY: C (weiß), Gb (schwarz — genau 6 Halbtöne über C, zwischen F und G). Von C 6 Tasten hochzählen — weiße und schwarze — um Gb zu finden. Es sollte sich anfühlen, als wäre man zu weit gegangen. Diese Falschheit ist korrekt. Das Bb ist eine schwarze Taste unter B (über A). C–Gb als Zwei-Noten-Intervall üben, bis es aufhört dissonant zu wirken und unvermeidlich zu klingen beginnt.",
        variation:
          "Gb1 durch G1 ersetzen (natürliche Quinte — ein Halbton über Gb). Das Pattern wird zu Standard-C-Moll-Root/Quinte: völlig anderer emotionaler Charakter. Beide Versionen nacheinander abspielen und hören, wie viel Gb verändert. Dann zu Gb zurückkehren — seine Falschheit wird sich richtig anfühlen.",
      },
      {
        name: "Kleine-None-Sehnsucht",
        key: "g-Moll",
        description:
          "Die kleine None (A über G-Moll) erzeugt Sehnsucht und Distanz — nach etwas greifen, das nur knapp außer Reichweite ist. Die None sitzt eine volle Oktave plus einen Ganzton über der Root und gibt dem Bass das Gefühl, über seinen natürlichen Bereich hinauszugreifen. Eine traurige, sich wiederholende Greifbewegung.",
        pluginSuggestion:
          "Massive X mit langsamem Attack (20 ms), damit A2 (die None) langsam aufblüht statt hart zu schlagen. Portamento auf 60 ms zwischen G1 und A2 für einen Slide-Effekt einstellen. Das emotionale Gewicht liegt im Kontrast: G1 tief und schwer, dann steigt A2 ins obere Register — eine Stimme, die nach etwas Zartem greift.",
        microKeyTip:
          "G-Moll auf dem microKEY: G (weiß), A (weiß — eine weiße Taste über G), F (weiß — eine unter G), Eb (schwarz — zwischen D und E), D (weiß). Die A-Note ist die None — nur eine weiße Taste höher als die Root G. G dann A spielen und den Aufwärtsschritt spüren. Dieser Ganzton-Griff (der viel weiter wirkt als er aussieht) ist die Sehnsucht. A2 leicht aufnehmen — kaum berührt, wie etwas fast Erinnertes.",
        variation:
          "Ab2 statt A2 auf Step 4 verwenden (die flat-9 — ein Halbton über der kleinen Septime). Die flat-9 über G-Moll ist noch gequälter als die natürliche None — das dissonanteste Spannungsintervall in der Jazzharmonik, eingesetzt, um maximalen harmonischen Druck vor der Auflösung zu erzeugen.",
      },
      {
        name: "808 Chromatischer Fall",
        key: "e-Moll",
        description:
          "Ein 808-Pattern, das in einem Takt chromatisch durch 4 Halbtöne absteigt. Das Portamento (Glide) zwischen jedem Halbton erzeugt die weinende Qualität einer Saite, die in die nächste Note gebogen wird. Das moderne Hip-Hop-Äquivalent eines Blues-Gitarren-Schreis — jede Note ein Slide nach unten.",
        pluginSuggestion:
          "Massive X — 808-Sub mit Portamento bei 100 ms, damit jeder Halbton gleitet. Ohne Portamento sind das nur 4 separate Noten. Mit Portamento bei 100 ms wird es ein einziger, kontinuierlicher weinender Abstieg. Der Glide zwischen Eb2 und D2 ist das emotionale Zentrum — atmen lassen. Über einen Sub-Bus unter 150 Hz ausgeben — keine Höhenanteile.",
        microKeyTip:
          "Chromatischer E-Abstieg auf dem microKEY: E (weiß), Eb (schwarz — unmittelbar links von E), D (weiß, links von Eb), C# (schwarz, links von D). Vier Noten, alle benachbart, alle nach links fallend. Zeigefinger auf E legen und nach links wandern: Ringfinger zu Eb (schwarz), Mittelfinger zu D, Zeigefinger zu C#. Die Hand bewegt sich als Einheit nach links — ein wörtlicher Abstieg auf der Tastatur, der den Abstieg im 808 spiegelt.",
        variation:
          "Um zwei weitere Steps erweitern: C2 und B1. Das nimmt den chromatischen Fall von 4 Halbtönen auf 6 — von E bis B, durch E-Phrygisch absteigend. Je länger der Fall, desto unvermeidlicher wirkt die Ankunft. Diese erweiterte Version für 2-Takt-Patterns verwenden.",
      },
    ],
    melodies: [
      {
        sequenceDescription:
          "6-notige absteigende-dann-aufsteigende Phrase. Das Bb (kleine Terz) und Eb (kleine Sexte) geben ihr den dunklen Hip-Hop-Charakter. Die ersten 4 Noten als Achtel spielen, dann die letzten zwei als Viertelnoten halten.",
        microKeyTip:
          "Natürliches G-Moll auf dem microKEY: G (weiß), A (weiß), Bb (schwarz), C (weiß), D (weiß), Eb (schwarz), F (weiß). Die zwei schwarzen Tasten (Bb und Eb) sind die Charakternoten. Die Aufnahme mit der Tastatur in der Mitte des microKEY für komfortablen Griff machen.",
        variation:
          "Eb3 in der Sequenz durch E3 (natürlich) ersetzen — das erzeugt ein G-Dorisches Feeling, wärmer und melodischer. Oder nur die ersten 3 Noten (G3 F3 D3) wiederholen — ein einfacheres Motiv, das sich leichter als Ausgangspunkt für einen Track nutzen lässt.",
      },
      {
        sequenceDescription:
          "Aufsteigende und absteigende pentatonische Bewegung. Liegt natürlich über jedem Em-Akkord oder Sample in E-Moll. Als Achtel spielen — 8 Noten in einem Takt. Fühlt sich an wie ein Gitarrenriff, übersetzt auf Keys.",
        microKeyTip:
          "Alle 5 Pentatonik-Noten auf dem microKEY: E (weiß), G (weiß), A (weiß), B (weiß), D (weiß). Keine schwarzen Tasten nötig. Am tiefen E beginnen, bis zum D über dem mittleren C aufsteigen, dann zurückgehen. Dieser gesamte Riff passt bequem unter eine Hand auf dem microKEY.",
        variation:
          "Einen Bend-Effekt hinzufügen, indem die Note leicht zu scharf gespielt und sofort korrigiert wird — in Maschine kann dies über den Tune-Regler des Pads automatisiert werden. Oder die Sequenz auf A3 statt G3 beenden für ein anderes Auflösungsgefühl.",
      },
      {
        sequenceDescription:
          "Ein chromatischer Durchgangston (F#, der Tritonus) erscheint zwischen F und G — das ist die unerwartete Note, die diese Melodie hervorstechen lässt. Sie erzeugt momentane Spannung, die sich wunderschön zu G auflöst.",
        microKeyTip:
          "C-Moll auf dem microKEY: C (weiß), Eb (schwarz, über D), F (weiß), F# (schwarz, über F), G (weiß), D (weiß). F# ist die Schlüsselnote — eine schwarze Taste. Sicherstellen, dass sie klar gespielt wird. Diese Note ist die Geheimzutat — ohne sie ist die Melodie gewöhnlich.",
        variation:
          "Das F#4 entfernen für eine glattere, R&B-geeignetere Version: C4 Eb4 F4 G4 Eb4 D4 C4. Oder das F#4 als sehr kurze Vorschlagnote vor G4 spielen — kaum hörbar, aber immer noch vorhanden.",
      },
      {
        sequenceDescription:
          "Öffnet mit D, dann sofortiger Sprung zu B — der großen Sexte, der definierenden Note des Dorischen Modus. Das Pattern steigt durch den Modus ab und dann wieder zu B auf. Das natürliche B (große Sexte in einem Moll-Kontext) lässt Dorisch gleichzeitig traurig und hoffnungsvoll klingen. Kein Schmerz — Sehnsucht. Etwas fast Aufgelöstes, aber knapp vor der Ankunft ausgesetzt.",
        microKeyTip:
          "D-Dorisch verwendet alle weißen Tasten (gleiche Noten wie C-Dur, beginnend auf D). Auf dem microKEY D dann B finden — B ist 5 weiße Tasten über D. D und B zusammen als Intervall spielen: die große Sexte hören. Sie ist bittersüß. Die gesamte Melodie: D (Daumen), Sprung zu B (kleiner Finger, höheres Register), dann A G F, dann G A B. B ist der emotionale Anker. Bei 65 BPM, Achtel aufnehmen, mit The Gentleman (Kontakt).",
        variation:
          "Die letzte Note von B3 zu Bb3 ändern (eine schwarze Taste tiefer, zwischen A und B). Das Bb macht die Skala zu reinem natürlichem Moll — die Sehnsucht der großen Sexte verschwindet und reiner Schmerz bleibt. Beide Versionen spielen: B natürlich = bittersüß, Bb = schlicht bitter. Je nach Vibe des Samples wählen.",
      },
      {
        sequenceDescription:
          "Besucht F# (den Tritonus von C) kurz zwischen G und G — die dissonanteste chromatische Bewegung in einem Takt. F# ist ein Durchgangston: ein Aufblitzen extremer Spannung, bevor er sich zu G auflöst. Zwei Beats rein und raus aus dem Teufel in der Musik. Das ist das harmonische Äquivalent eines gehaltenen Atems vor dem Aufprall.",
        microKeyTip:
          "C-Moll mit Tritonus auf dem microKEY: C (weiß), Eb (schwarz), F# (schwarz — zwischen F und G), G (weiß), Bb (schwarz). F# ist direkt links von G — gleiche schwarze Tastengruppe. Die G–F#–G-Bewegung üben: Zeigefinger auf G, Ringfinger zu F# strecken (eine Taste links, schwarz), zurück zu G. F# muss mit Überzeugung gespielt werden — ein zögernd gespielter Durchgangston klingt wie ein Fehler; fest gespielt klingt er unvermeidlich.",
        variation:
          "F#3 durch F3 (natürliche Quarte) ersetzen. Die Linie wird zu C4 G3 F3 G3 Eb4 C4 — alles diatonisches C-Moll, kein Tritonus. Vergleichen: die diatonische Version ist glatt und vorhersehbar; die Tritonus-Version hat eine momentane Falschheit, die sie einprägsam macht. Den Tritonus im Hook einsetzen, wo Wirkung am wichtigsten ist.",
      },
      {
        sequenceDescription:
          "Öffnet mit A, springt dann zu Bb (dem phrygischen Flat-2 — ein Halbton unter der Oktave-A), dann zurück zu A, bevor es absteigt. Dieses A→Bb→A ist das Herz der Phrase — eine Note, die sich nach unten lehnt und sich dann wieder aufrichtet. Der phrygische Halbton erzeugt sofortiges Gewicht und antike Schwerkraft. Jede folgende Note ist die Konsequenz dieses ersten Leanens.",
        microKeyTip:
          "A Phrygisch auf dem microKEY: A (weiß), Bb (schwarz — unmittelbar über A, eine schwarze Taste rechts). Bb ist das kleinstmögliche Intervall von A: ein Halbton. A mit dem Daumen spielen, dann mit dem Zeigefinger zu Bb greifen. Das ist der phrygische Klang — das Lehnen. Die gesamte Melodie verwendet danach nur weiße Tasten: G, F, E — alle weiß, alle fallend. Bei 70 BPM aufnehmen.",
        variation:
          "Auf halbe Noten verlangsamen (je 2 Beats): 6 Noten × 2 Beats = 12 Beats = 3 Takte. Eine 3-Takt-Struktur fühlt sich unvollständig an — perfekt für unaufgelöste Spannung vor einem 4. Takt. Oder ein tiefes ausgehaltenes A als Drone unter die Phrase legen — das Flat-2 Bb über einem statischen A intensiviert die phrygische Spannung.",
      },
    ],
  },

  "rnb": {
    microKeySetup:
      "Für R&B mit dem microKEY: ein Kontakt-Instrument (The Gentleman oder Scarbee Mark I) auf einer Pad-Group und einen Bass (Massive X oder Scarbee Rickenbacker) auf einer anderen einrichten. In Maschine SHIFT halten und eine Group-Taste drücken, um die MIDI-Eingabe dieser Group solo zu schalten — jetzt steuert das microKEY nur diese Group. Akkorde aufnehmen, indem man sie langsam spielt, während das Pattern schleift. Nach der Aufnahme das MIDI-Timing leicht humanisieren (8 ms, nicht mehr) für ein live gespieltes Feeling.",
    samples: [
      {
        lookFor:
          "Sanfte R&B-Akkord-Loops in Dur oder Moll — speziell die Eb-Dur- oder C-Moll-Loops. Alles suchen, das als 'smooth', 'slow jam' oder 'contemporary' beschrieben wird. Die Piano- und Rhodes-Abschnitte in Soulful Dreams Vol 1 sind die besten Ausgangspunkte für R&B. Einen 2-Takt-Abschnitt finden, bei dem der Akkord meist statisch sitzt und sich auf Beat 4 nur leicht bewegt.",
        treatment:
          "Vollständig clean verwenden — kein Lo-Fi, keine Vinyl-Verzerrung, keine Sättigung. Raum im Bloom-Modus hinzufügen (1,5 s Decay, 40 % Wet), um den Sample im Raum schweben zu lassen. EQ: sanfte Mitten-Absenkung bei 350 Hz (-2 dB), um Dumpfheit zu entfernen. Dieser Sample soll sich anfühlen, als würde er über den Drums schweben.",
      },
      {
        lookFor:
          "Die 'slow' und 'smooth' Abschnitte von REVIVAL Soul Melodies — die Neo-Soul-Piano-Loops und die langsamen Gospel-Progressionen. Im REVIVAL Soul Melodies-Browser in Maschine zu 'Loops > Melodic > Slow' navigieren. Die Organ-Pads, die durch Akkordwechsel ausgehalten werden, sind besonders wirkungsvoll für R&B-Balladenfeeling.",
        treatment:
          "Clean verwenden. Die Tonhöhe des Samples im Tune-Bereich von Maschine anpassen, um zur Bassnote zu passen. Raum (Bloom-Modus) bei 30 % Wet hinzufügen. Für Velvet-Lounge-Stil-R&B: einen kurzen Scarbee-Mark-I-Akkord (Kontakt) parallel zum REVIVAL Soul Melodies-Loop schichten — sie verschmelzen zu einem kohärenten Klang.",
      },
      {
        lookFor:
          "Die zeitgenössischen R&B-Akkordprogressionen. ODYSSEY Soul Melodies' Stärke liegt in harmonischer Reichhaltigkeit — alles mit erweiterten Akkorden suchen (9., 11., 13. Akkorde). Diese passen perfekt unter R&B-Vokal-Raum. Ziel-Tonarten: alle Loops in Cm, Fm oder Ebmaj.",
        treatment:
          "Vollständig clean verwenden. Kein Chopping, keine Bearbeitung außer EQ. Diese Loops sind dazu gedacht, der primäre harmonische Inhalt zu sein. Auf Step 0 triggern, One-Shot-Modus, 2 Takte klingen lassen. Das ist der Sample, dem alles andere dient.",
      },
      {
        lookFor:
          "Die Ambient-Pad- und weichen Akkord-Elemente. Bunnys verträumter, weicher Charakter ist perfekt für R&B-Hintergrundtextur. Alles suchen, das einen langsamen Akkordwechsel oder ein Pad hat, das ohne rhythmische Bewegung ausgehalten wird.",
        treatment:
          "Unter dem primären Odyssey- oder Soulful-Dreams-Sample bei -20 dB schichten. Raum im Shimmer-Modus hinzufügen (2,5 s Decay, 50 % Wet) — das erzeugt die Luft rund um die gesamte Produktion. Der Bunny-Layer soll auf Laptop-Lautsprechern unhörbar, auf Kopfhörern und Studio-Monitoren aber präsent sein.",
      },
      {
        lookFor:
          "Die kurzen Piano- und E-Piano-Schläge. Weekday hat einige Einzelakkord-Schläge (1–2 Beats), die als R&B-Stabs wunderschön funktionieren. Alle 'Keys'-Elemente suchen, die einen weichen Attack und natürlichen Decay haben — nicht die Lo-Fi-Loops, sondern die einzelnen Schläge.",
        treatment:
          "Den 1-Beat-Akkordschlag schneiden. Auf Step 4 und Step 12 zusammen mit dem Rimshot oder Clap platzieren — er feuert mit der Snare. Raum-Platte hinzufügen (0,8 s, 25 % Wet) und einen sanften Kompressor (2:1, langsamer Attack), um ihn in den Mix einzupassen.",
      },
    ],
    bassPatterns: [
      {
        name: "Neo-Soul-Pocket",
        key: "c-Moll",
        description:
          "Das häufigste R&B-Bass-Pattern. Root-Schlag mit einer verschobenen Mid-Bar-Groove-Note und einem chromatischen Approach zur Root. Die Note auf Step 5 (G2) fällt auf das 'und' von Beat 2 — das ist der R&B-Pocket.",
        pluginSuggestion:
          "Scarbee Rickenbacker Bass (Kontakt, Komplete 15) für organische Wärme — die 'Fingered'-Artikulation wählen. Oder Massive X für einen sub-lastigen Ansatz. Die chromatische Bewegung Ab1→C2 (Steps 13→0) sollte legato gespielt werden — in Kontakt den Legato-Modus für den Rickenbacker verwenden.",
        microKeyTip:
          "C-Moll auf dem microKEY: C (weiß), G (über C, 7 weiße Tasten), Bb (schwarz, 2 über A), Ab (schwarz, über G). Der schwierigste Teil ist Ab1 auf Step 13 — eine chromatische Approach-Note, die zu Step 0 führt. Auf dem microKEY die Hand so positionieren, dass Ab unter dem Zeigefinger und C unter dem Ringfinger liegt für einen komfortablen Griff.",
        variation:
          "Steps 11 und 13 (den chromatischen Schwanz) entfernen — der Bass wird zu einem einfachen Root/Quinte-Pattern, das immer noch groovt, aber mehr Raum lässt. Oder Bb1 durch A1 (natürlich) ersetzen für einen Cm/große-Sexte-Klang, der der Linie ein optimistischeres, Motown-ähnliches Feeling gibt.",
      },
      {
        name: "Half-Time Soul-Bass",
        key: "Es-Dur",
        description:
          "Nur 4 Noten pro Takt — entwickelt für das Half-Time-R&B-Snare-Feeling, bei dem die Snare nur auf Beat 3 landet. Maximaler Raum zwischen den Noten. Der Bass muss den gesamten Groove tragen.",
        pluginSuggestion:
          "The Gentleman (Kontakt) im tiefen Register gespielt — eine ausgehaltene Piano-Bassnote über 2 Beats hat enorme Wärme. Oder Massive X mit langem Sustain und Portamento bei 50 ms. Db2 auf Step 14 (die kleine Septime von Eb) sollte leicht in Step 0 hineinschwingen — eine längere Release-Hüllkurve verwenden.",
        microKeyTip:
          "Eb-Dur auf dem microKEY: Eb (schwarz, über D), Bb (schwarz, über A), Db (schwarz, über C). Drei schwarze Tasten bilden diese gesamte Basslinie — sie liegt natürlich unter der rechten Hand. Das saubere Greifen von Eb zu Db (eine Oktave tiefer) üben, bevor man aufnimmt.",
        variation:
          "Db2 durch C2 (die Sexte von Eb-Dur) für eine hellere, Stevie-Wonder-artige Bass-Inflexion ersetzen. Oder F2 auf Step 5 (die 2. Stufe) hinzufügen — das verwandelt das Pattern von 4 auf 5 Noten und fügt mehr harmonische Farbe hinzu.",
      },
      {
        name: "Funky R&B-Pocket",
        key: "f-Moll",
        description:
          "Lebhafter als die anderen beiden — mehr Noten, mehr rhythmisch. In R&B-Tracks mit höherer Energie eingesetzt (90–95 BPM, tanzbar). Das schnelle C3 auf Step 4 ist die 'Pop'-Note — es betont Beat 2 vor der Snare.",
        pluginSuggestion:
          "Scarbee Rickenbacker Bass — Fingered Style. Das wiederholte F2 auf Steps 0 und 2 ist ein schnelles 'Chick' — die zweite F2-Note auf kurze Gate-Länge (30 % Gate) einstellen, damit sie schnell abschneidet. C3 und Eb3 im oberen Register fügen Präsenz hinzu, die durch einen dichten R&B-Mix sticht.",
        microKeyTip:
          "F-Moll auf dem microKEY: F (weiß), C (weiß, 7 höher), Eb (schwarz, über D). Das schnelle F2→F2 auf Steps 0 und 2 erfordert zwei schnelle Noten — staccato spielen (kurz und abgesetzt). Bei halber Geschwindigkeit aufnehmen (40 BPM) und Maschine das Tempo danach verdoppeln lassen.",
        variation:
          "F2 auf Step 2 entfernen und C3 von Step 4 auf Step 3 verschieben — das erzeugt ein synkopierteres, weniger geradliniges Feeling. Oder Eb3 auf Step 10 auf Db3 (die kleine Sexte von F-Moll) senken für eine dunklere, soul-beeinflusstere Bewegung.",
      },
      {
        name: "Soul-Schrei",
        key: "b-Moll",
        description:
          "Fällt durch alle dunklen Intervalle von Bb-Moll — Root, kleine Septime (Ab), kleine Sexte (Gb), Quinte (F). Das Gb (kleine Sexte) ist der emotionale Kern: in Bb-Moll klingt es wie Weinen. Jede Note ist ein Schritt tiefer in den Schmerz. Diese Basslinie ist das harmonische Äquivalent des Ausatmens von Trauer.",
        pluginSuggestion:
          "Scarbee Rickenbacker (Kontakt, Fingered-Modus) — das Gb (kleine Sexte) auf einem Bünde-Bass hat eine leicht kehlig-gefangene Qualität, die sein emotionales Gewicht perfekt ausdrückt. Alternativ: Massive X mit 80 ms Portamento. Der Slide von Ab2 zu Gb2 (Step 4→Step 6) erzeugt ein sanftes Abwärtsgleiten, das wie ein Seufzer klingt.",
        microKeyTip:
          "Bb-Moll auf dem microKEY: Bb (schwarz — über A), Ab (schwarz — über G), Gb (schwarz — über F), F (weiß). Drei schwarze Tasten und eine weiße — dieses Pattern lebt fast vollständig über der weißen Tastenebene. Die Hand so positionieren, dass Bb unter dem Ringfinger, Ab unter dem Mittelfinger, Gb unter dem Zeigefinger liegt. Die Hand sitzt erhöht, über der Tastaturoberfläche. Diese körperliche Erhebung spiegelt das emotionale Register von Bb-Moll wider — etwas Gehobenes, aber Schweres.",
        variation:
          "Db2 auf Step 3 hinzufügen (kleine Terz von Bb) zwischen Bb1 und Ab2. Der Abstieg wird zu Bb → Db → Ab → Gb → Bb → F → Gb — sieben Noten, ausgearbeiteter, mehr wie eine trauernde Stimme, die immer neue Worte für dasselbe Gefühl findet.",
      },
      {
        name: "Halbton-Sehnsucht",
        key: "Es-Moll",
        description:
          "Verwendet E natürlich (das phrygische Flat-2 von Eb-Moll — ein Halbton über der Root) für die antike, geneigte Qualität des Phrygischen Modus im R&B-Slow-Jam. Der Halbton erzeugt einen Klang, als würde sich der Körper nach etwas lehnen, das er nicht erreichen kann.",
        pluginSuggestion:
          "Hinweis: E natürlich ist enharmonisch Fb (das phrygische Flat-2 von Eb) und B natürlich ist Cb (die kleine Sexte von Eb). Massive X auf Eb laden und 'E2' und 'B1' in der MIDI-Sequenz verwenden. Mit Portamento bei 50 ms klingt die Eb→E-Bewegung wie ein Lehnen — das körperliche Gefühl, nach etwas knapp über einem zu greifen. Scarbee Mark I im tiefen Register funktioniert mit dieser Lean-Qualität ebenfalls.",
        microKeyTip:
          "Eb und E auf dem microKEY sind benachbarte Tasten — Eb (schwarz) dann E (weiß), direkt angrenzend. Eb mit dem Mittelfinger spielen, E mit dem Zeigefinger: das Lehnen von schwarz zu weiß spüren, von der erhöhten schwarzen Tastenoberfläche zur weißen Taste hinunter. Dieser Abstieg von schwarz zu weiß ist das phrygische Lehnen — hörbar und körperlich zugleich. Bb liegt quer über der Tastatur (über A); B ist eine weiße Taste über Bb.",
        variation:
          "B1 auf Step 15 durch Bb1 (die natürliche Quinte von Eb, ein Halbton unter B) ersetzen. Das phrygische Flat-2 (E natürlich) bleibt die einzige chromatische Spannung; das Ende löst sich glatter auf. Das ist die R&B-Balladenversion — dieselbe Sehnsucht in der Mitte, eine sanftere Landung am Ende.",
      },
      {
        name: "Balladenabstieg",
        key: "f-Moll",
        description:
          "Vier Noten, maximaler Raum. F → Eb → Db → C — absteigende durch die kleine Septime, kleine Sexte und Quinte von F-Moll. Das ist die Basslinie für eine langsame R&B-Ballade: 72 BPM, eine Note alle 4 Steps, jede leicht tiefer. Das Pattern, das nur funktioniert, wenn alles andere still ist.",
        pluginSuggestion:
          "The Gentleman (Kontakt) — ein aufgenommenes Piano im tiefen Register hat die Wärme, das Gewicht und den natürlichen Decay, den dieses Pattern erfordert. Jede Note auf volle Gate-Länge (100 %) einstellen für maximales Sustain. Scarbee Mark I funktioniert gleich gut — der leicht elektrische, surrende Decay fügt jeder ausgehaltenen Note Melancholie hinzu. Für dieses Pattern keinen Synth-Sub verwenden — es braucht den organischen Charakter aufgenommener Keys.",
        microKeyTip:
          "F-Moll-Ballade auf dem microKEY: F (weiß), Eb (schwarz — über D), Db (schwarz — über C), C (weiß). Das Pattern fällt durch zwei schwarze Tasten und landet auf einer weißen Taste — C ist der eine schlichte Moment nach komplexen chromatischen Tönen. Jede Note mit einem langsamen, bedächtigen Anschlag und ohne Pedal spielen: jede Note steht allein, isoliert. Bei 36 BPM aufnehmen, um den Balladenabstand zu erhalten, dann auf die Ziel-BPM anpassen.",
        variation:
          "F2 auf Step 15 hinzufügen (kurz vor dem Loop): F → Eb → Db → C → F. Die Rückkehr zur Root im letzten Step erzeugt kreisförmige Trauer — der Bass kehrt zurück, wo er begonnen hat, nachdem er durch all diese dunklen Intervalle gereist ist, nur um am Anfang anzukommen. Das ist die harmonische Struktur der Akzeptanz.",
      },
    ],
    melodies: [
      {
        sequenceDescription:
          "Den Cm9-Akkord von der Root zur None und zurück arpeggieren. Jede Note ist eine einzelne Achtel (halber Step im Sequencer). D4 am Ende (die None) ist die spezielle Akkordfarbe — es gibt dem Arpeggio den erweiterten Neo-Soul-Charakter.",
        microKeyTip:
          "Cm9 auf dem microKEY: C (weiß), Eb (schwarz), G (weiß), Bb (schwarz), D (weiß). The Gentleman (Kontakt) auf einem Melodie-Pad einrichten. Das Arpeggio mit der rechten Hand spielen, dabei das Haltepedal gedrückt halten (wenn das microKEY einen Sustain-Pedal-Eingang hat) — die Noten klingen ineinander nach für ein üppiges Klavier-Balladenfeeling.",
        variation:
          "Nur die oberen 4 Noten des Arpeggios spielen (G4 Bb4 G4 Eb4) — das behält die obere Stimmführung bei, während die unteren Noten für eine dünnere, entferntere Textur weggelassen werden. Oder die gesamte Sequenz spielen, aber auf Eb4 (der kleinen Terz) beginnen — ergibt einen klägenderen, emotionaleren Einstieg.",
      },
      {
        sequenceDescription:
          "Eine absteigende Dur-Skalen-Linie, die umkehrt und zur Oktave Bb aufsteigt. Die Bewegung von Ab zu G (ein Halbton, die charakteristische Gospel-Bewegung in Dur-Tonarten) ist der emotionale Kern. Das abschließende Bb3 zwei Beats lang halten.",
        microKeyTip:
          "Eb-Dur auf dem microKEY: Eb (schwarz), F (weiß), G (weiß), Ab (schwarz), Bb (schwarz), C (weiß), D (weiß). Drei schwarze Tasten. Der Ab→G-Übergang (schwarz zu weiß, Halbton) ist der Schlüsselübergang — langsam üben, bevor man aufnimmt. The Gentleman oder Scarbee Mark I in Kontakt für den Gospel-Piano-Charakter verwenden.",
        variation:
          "Ein D4 über dem abschließenden Bb3 hinzufügen — Bb3 und D4 gemeinsam als große Terz für ein süßeres, zeitgemäßeres Feeling spielen. Oder auf C4 (der 6. Stufe) statt Bb3 beginnen — die Linie bekommt eine anspruchsvollere, jazz-beeinflusstere Qualität.",
      },
      {
        sequenceDescription:
          "Sanfte aufsteigende und absteigende Bewegung durch Fm7-Akkordtöne. Jede Note wird leicht länger als die strenge Zeitangabe gehalten (die Notenlänge im Event-Editor auf 125 % setzen) für diese legato, flüssige R&B-Phrasierung.",
        microKeyTip:
          "F-Moll auf dem microKEY: F (weiß), Ab (schwarz), C (weiß), Eb (schwarz), Bb (schwarz). Das sanfte flüssige Feeling kommt vom leichten Überlappen der Noten — auf dem microKEY die nächste Note leicht drücken, bevor die vorherige vollständig losgelassen wird. Scarbee Mark I (Kontakt) mit der 'Tremolo'-Artikulation für das klassische R&B-E-Piano-Feeling laden.",
        variation:
          "Eb4 durch D4 (die große Septime, aus F-Dur) ersetzen für eine wärmere, weniger moll-artige Qualität — das ist der Frankie-Beverly-/-Maze-Ansatz. Oder verlangsamen: die gesamte 8-Noten-Sequenz über 2 Takte statt 1 Takt spielen — alles atmet doppelt so lang.",
      },
      {
        sequenceDescription:
          "Das Gb (kleine Sexte von Bb-Moll) erscheint auf der zweiten Note und kehrt auf der fünften zurück — es ist das emotionale Zentrum dieser Phrase. In Bb-Moll klingt das Gb wie der Moment kurz vor Tränen. Die Sequenz steigt durch Akkordtöne zweimal ab und landet auf dem tiefen Bb — ein vollständiger Fall von oben. In Achteln gespielt: ein Takt des Abstiegs, zurück zur Stille.",
        microKeyTip:
          "Bb-Moll auf dem microKEY: Bb (schwarz — über A), Db (schwarz — über C), Eb (schwarz — über D), F (weiß), Gb (schwarz — über F), Ab (schwarz — über G). Fünf schwarze Tasten und eine weiße. Die Melodie lebt fast ausschließlich auf schwarzen Tasten. Daumen auf Bb legen. Das Gb liegt 4 schwarze Tasten links — sorgfältig zählen: Bb, Ab, Gb. Der Zeigefinger landet auf Gb. Das Bb–Gb-Eröffnungsintervall üben, bis es natürlich wirkt. Scarbee Mark I (Kontakt, Tremolo-Artikulation) bei 60 BPM laden.",
        variation:
          "Auf Db3 statt Bb2 enden — im mittleren Register bleiben und den endgültigen Abstieg zur Root verweigern. Das Db (kleine Terz) lässt die Phrase unaufgelöst hängen. Perfekt für eine Strophe, die den Hörer leicht unbefriedigt lassen soll, bevor der Refrain kommt. Oder mit einem hohen Bb4 öffnen: Bb4 Gb3 — ein dramatisches Oktavfallen als erstes Intervall.",
      },
      {
        sequenceDescription:
          "Eine lange fallende Linie durch C-Moll von Root zu Root über eine Oktave. Das Ab (kleine Sexte) zwischen G und F ist die herzzerreißende Note — das Moll-Sexten-Intervall ist der Klang, der in der westlichen Harmonik am universellsten mit Trauer verbunden wird. Das kurze G3 vor dem letzten C3 ist ein kleines, vergebliches Aufwärtsgreifen vor der Ankunft. Acht Noten, ein Takt, vollständiger emotionaler Bogen.",
        microKeyTip:
          "C-Moll-Skala auf dem microKEY: C (weiß), Eb (schwarz), F (weiß), G (weiß), Ab (schwarz — zwischen G und A), Bb (schwarz — zwischen A und B). Der Abstieg von C4 zu C3 umfasst genau eine Oktave. Hand in C-Moll-Position: Daumen auf C, Finger über Eb, F, G. Für Ab und Bb (die schwarzen Tasten oben) die Hand leicht nach rechts verschieben — Ringfinger auf Ab, Mittelfinger auf Bb. The Gentleman (Kontakt) mit gehaltenem Sustain-Pedal laden. Jede Note in die nächste klingen lassen.",
        variation:
          "D4 ganz am Anfang hinzufügen: D4 C4 Bb3 Ab3 G3 F3 Eb3 G3 C3. D ist die große Sekunde — eine helle Note, die sofort dem dunkleren Bb weicht. Das macht den Abstieg länger und resignierter, als hätte die Melodie versucht, irgendwo hoffnungsvoll zu beginnen, und konnte nicht dort bleiben.",
      },
      {
        sequenceDescription:
          "Beginnt auf Eb (der kleinen Terz) statt auf der Root — eine Wahl, die ein Gefühl der Mitte des Satzes erzeugt, als wäre die Melodie bereits im Gang, wenn man sie hört. Die gesamte Phrase steigt durch natürliches C-Moll ab, jede Note führt das Ohr nach unten. Inspiriert vom D'Angelo-Ansatz, melodische Phrasen spät zu betreten und früh zu verlassen — nie den erwarteten Downbeat liefernd.",
        microKeyTip:
          "Natürliches C-Moll auf dem microKEY: C (weiß), D (weiß), Eb (schwarz), F (weiß), G (weiß), Ab (schwarz), Bb (schwarz). Auf Eb (schwarze Taste) beginnen — das ist die entscheidende Wahl. Die meisten Melodien beginnen auf weißen Tasten; auf einer schwarzen Taste zu beginnen gibt dieser Phrase eine außermittige, bereits-in-Bewegung-Qualität von der ersten Note an. Auf dem microKEY ist Eb die schwarze Taste zwischen D und E. Sie finden, bevor man aufnimmt. Dann den 7-Noten-Abstieg mit gleichmäßigem Timing spielen. Die Magie liegt im Ausgangspunkt.",
        variation:
          "Die Sequenz umgekehrt spielen: F3 G3 Ab3 Bb3 C4 D4 Eb4. Die gleichen Noten aufsteigend klingen völlig anders — hoffnungsvoll, greifend. Beide spielen: absteigend in der Strophe, aufsteigend im Hook. Das schafft ein harmonisches Gespräch zwischen Abschnitten, das absichtlich wirkt, ohne offensichtlich zu sein.",
      },
    ],
  },
};
