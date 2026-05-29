import type { DeBassPattern } from "./melodyRecommendations-de";

export const patternBassDataDe: Record<string, DeBassPattern[]> = {

  "bb-1": [
    {
      name: "Am Walking-Linie",
      key: "a-Moll",
      description:
        "Eine A-Moll-Walking-Basslinie, abgestimmt auf Classic 90s bei 90 BPM, Swing 54. Die Note auf Step 3 landet auf dem geschwungenen 'e' von Beat 1 — bei 54 % Swing fällt sie leicht spät, sitzt dadurch natürlich in der Hi-Hat-Tasche. Steps 7 und 15 sind leise Antizipations-Noten, die die starken Beats vorbereiten, ohne den Sample zu stören.",
      pluginSuggestion:
        "Scarbee Rickenbacker Bass (Kontakt) — Fingered-Artikulation, kein Portamento. Die chromatische Bewegung der Walking-Linie (D2→A1 auf Steps 13–15) braucht den artikulierten Anschlag eines Bass-Gitarre, keinen Synth-Slide. Velocity-Variation wie notiert beibehalten: das Ghost-A1 auf Step 15 ist der Schwanz der Phrase, kein starker Schlag.",
      microKeyTip:
        "A-Moll auf dem microKEY: A (weiß), C (weiß, 3 hoch), E (weiß, 2 über C), G (weiß, 2 über E). 8 Walking-Noten passen unter eine Handposition. Daumen auf A, Zeigefinger zu C, Mittelfinger zu E, Ringfinger zu G. Bei 90 BPM bei halber Geschwindigkeit aufnehmen (45 BPM), danach wiederherstellen. Der Swing ist bereits im Pattern-Raster eingebaut.",
      variation:
        "D2 (Step 13) durch F2 (die kleine Sexte) ersetzen. Diese kleine Änderung verschiebt den Turnaround von einer dur-gefärbten Auflösung zu einer dunkleren, soul-beeinflussten — derselbe Zug, der späte 90er-New-York-Bässe von früheren Walking-Pattern unterscheidet.",
    },
    {
      name: "Am Root-Lock",
      key: "a-Moll",
      description:
        "Minimaler Zwei-Noten-pro-Halbbalken-Ansatz bei 90 BPM. Verriegelt direkt mit dem Kick auf Steps 0 und 8, die Quinte (E2) landet auf den geschwungenen Off-Beats. Vier Noten, vollständige Harmonie-Definition, null Überfüllung. Entwickelt für dichte Samples, bei denen der Bass Tonart definieren und verschwinden soll.",
      pluginSuggestion:
        "Massive X (Komplete 15) — Sub-Bass-Patch, Portamento AUS, Mono EIN. Bei nur 4 Noten pro Takt braucht jede Note volles Sub-Gewicht ohne Slides, die den Grundton verwischen. Die 60–80 Hz im Maschine-EQ-Insert um +3 dB boosten für Sub-Präsenz unter dichten Samples.",
      microKeyTip:
        "Nur zwei Tasten auf dem microKEY: A und E. Finden, von der Tastatur zurücktreten und selbstbewusst aus dem Gedächtnis aufnehmen. Diese zwei Noten definieren den gesamten Takt. Beide kalt zu kennen vor der Aufnahme eliminiert Zögern — das größte Feind eines eingerasteten Grooves.",
      variation:
        "G1 (die kleine Septime) auf Step 11 hinzufügen für eine Drei-Noten-Version: A1 / E2 / G1 / E2. Das G1 ist die Am7-Farbnote — es hebt den letzten Beat des Takts an, ohne Komplexität hinzuzufügen. Diese Version funktioniert besser unter Samples mit modaler, offener Harmonie.",
    },
    {
      name: "Dm Pocket",
      key: "d-Moll",
      description:
        "D-Moll-Variation für Classic-90s-Pattern, die auf Samples in der Tonart D aufbauen. Root auf 0, Quinte (A1) auf dem geschwungenen Step 5, F2 (kleine Terz) als emotionaler Anker auf Step 7, Turnaround durch E2 zurück zu D2. Die 54 % Swing bei 90 BPM lassen die Off-Beat-Steps spät wirken, auf eine Weise, die mit dem natürlichen Decay des Kicks verriegelt.",
      pluginSuggestion:
        "Scarbee Rickenbacker Bass (Kontakt, Fingered). Das F2 auf Step 7 (die kleine Terz) ist die wichtigste Note — Velocity genau wie notiert (70) belassen, nicht lauter. Es soll gefühlt, nicht gehört werden. Das E2 auf Step 13 bei Bedarf noch weiter geisten (runter auf 60), damit der Anlauf zum Neustart natürlich wirkt.",
      microKeyTip:
        "D-Moll auf dem microKEY: D (weiß), A (weiß, 5 weiße Tasten hoch), F (weiß, 2 über D im nächsten Oktavbereich), E (weiß, zwischen D und F). Den F2→D2-Abstieg (Steps 7→8) üben — ein sanfter Halbton-Drop zwischen den Beats. Bei langsamem BPM ist selbst dieses kleine Intervall musikalisch.",
      variation:
        "F2 (Step 7) gegen C2 (die kleine Septime von D) tauschen. Statt vom 3. Ton zur Root zu fallen, steigt der Bass jetzt von der Septime zur Root auf den nächsten Step — eine völlig andere emotionale Bewegung aus denselben zwei Noten.",
    },
  ],

  "bb-2": [
    {
      name: "Cm Swing-Bounce",
      key: "c-Moll",
      description:
        "Speziell für Pete Rock Bounce bei 88 BPM, Swing 58, entwickelt. Der höhere Swing (58 %) schiebt Off-Beat-Steps merklich später als Classic 90s. Noten auf Steps 5 und 13 (das geschwungene 'e' von Beats 2 und 4) fallen mit Petes charakteristischem Snap. Ghost-Bb1-Noten auf Steps 7 und 15 sind die späten Sechzehntel-Flicks, die seinen rhythmischen Fingerabdruck definieren.",
      pluginSuggestion:
        "Massive X — Sub-Bass-Patch, Portamento 20 ms, Mono EIN. Das leichte Portamento bei 20 ms ist kaum hörbar, erzeugt aber einen Mikro-Slide zwischen Noten, der sich anfühlt wie die Greifhand eines Bassisten beim Lagenwechsel — organisch, nicht synthetisch. Die tiefen Bb1-Ghost-Noten müssen reines Sub sein, kein mittlerer Bass.",
      microKeyTip:
        "C-Moll auf dem microKEY: C (weiß), G (weiß, 7 hoch), Bb (schwarz, zwischen A und B). Drei verschiedene Tonhöhen, einfach. Bei 88 BPM mit 58 % Swing werden die Noten auf Steps 5 und 13 bereits später als erwartet klingen — dem Pattern-Raster vertrauen. Bei 44 BPM in den Sequencer spielen, danach Tempo wiederherstellen.",
      variation:
        "Die Bb1-Ghost-Noten (Steps 7 und 15) durch Ab1 (die kleine Sexte) ersetzen. Das nimmt das Pattern von einer Moll-Septime-Bounce zu einem Moll-Sexte-Flavor — dunkler, mehr Boom Bap, weniger Neo-Soul. Das Pete-Rock-Feeling bleibt, aber das emotionale Register sinkt eine Stufe tiefer in den Schatten.",
    },
    {
      name: "Fm Swing-Pocket",
      key: "f-Moll",
      description:
        "F-Moll für Pete Rock Bounce. Bei 58 % Swing und 88 BPM sind die geraden Steps (0, 4, 8, 12) rastergebunden und die ungeraden Steps fallen progressiv später. Das Eb2 auf Step 14 (das 'a' von Beat 4 bei 58 % Swing) antizipiert den Loop-Neustart — der Bass denkt bereits an Takt zwei, bevor Takt eins endet.",
      pluginSuggestion:
        "Scarbee Rickenbacker Bass (Kontakt, Fingered). F1 ist eine tiefe Note — sicherstellen, dass der Ausgangspegel ausreicht, damit sie auf Sub-fähigen Wiedergabe-Systemen registriert. Die Ab1-Ghost-Note (Step 7) und das Eb2-Antizipation (Step 14) müssen klar genug sein, um gefühlt zu werden, aber leise genug, um die Hauptbeats nie abzulenken.",
      microKeyTip:
        "F-Moll auf dem microKEY: F (weiß), C (weiß, 7 hoch), Ab (schwarz, zwischen G und A), Eb (schwarz, zwischen D und E). Ab und Eb sind beide schwarze Tasten — vor der Aufnahme finden. Ab liegt direkt links von A; Eb direkt links von E. Das Vier-Tasten-Layout kennen, dann bei halber Geschwindigkeit aufnehmen.",
      variation:
        "Den Ab1-Ghost (Step 7) entfernen und das Eb2 von Step 14 auf Step 13 verschieben. Das Pattern wird glatter und melodischer, verliert etwas Hop. Diese Version unter Vokal-Samples verwenden, bei denen der Hook die Bounce trägt — den Bass clean lassen.",
    },
  ],

  "bb-3": [
    {
      name: "Gm Dunkler Stomp",
      key: "g-Moll",
      description:
        "Grimy Bap läuft bei 93 BPM, Swing 52 — schneller und mit minimalem Swing verglichen mit den tieferen Boom-Bap-Pattern. Weniger Noten als bei langsameren BPMs: bei 93 BPM ist Raum gleichbedeutend mit Wirkung. Das Eb2 (kleine Sexte) auf Step 11 ist die düstere Farbnote, die durch das dunkle Intervall aufsteigt, bevor D2 die Phrase erdet.",
      pluginSuggestion:
        "Massive X — verzerrter Sub-Patch. Bei 93 BPM trifft der Bass schnell — 8–10 % Drive in Massive Xs Oszillator-Sektion hinzufügen, oder Maschines Saturator (Tape-Modus, 30 %) auf dem Bass-Kanal einsetzen. Grimy Bap braucht Grit im Bass, nicht nur Sub. Das Eb2 auf Step 11 soll sich leicht knirschend anfühlen.",
      microKeyTip:
        "G-Moll auf dem microKEY: G (weiß), D (weiß, 7 hoch), Eb (schwarz, zwischen D und E). Drei Tasten, unkompliziertes Layout. Bei 93 BPM bei 46–47 BPM aufnehmen und Tempo wiederherstellen. Das Eb auf Step 11 ist die wichtigste Note, die sauber getroffen werden muss — den D2→Eb2-Halbton (Steps 13 zurück zu 11, umgekehrt) vor dem vollständigen Take üben.",
      variation:
        "D2 auf Step 3 durch F2 (die kleine Septime) ersetzen. Das Pattern gewinnt einen Moll-7-Flavor — weniger aggressiv, soul-beeinflusster. Dann Eb2 auf Step 11 durch E2 (natürlich) ersetzen für ein Dorisch-Feeling. Diese zwei Änderungen zusammen verschieben das Pattern von Mobb Deep zu J Dilla, ohne eine einzige Timing-Position zu verändern.",
    },
    {
      name: "Cm Bedrohlich",
      key: "c-Moll",
      description:
        "C-Moll für das düstere 93-BPM-Setting. Die chromatische Anflug-Note B1 (ein Halbton unter C2) auf Step 14 ist ein Menace-Move — bei 93 BPM ist Step 14 ein 160-ms-Blitz vor dem Taktneustart. Schnell genug, um unterbewusst zu wirken, langsam genug, um echte Dissonanz zu erzeugen. Der Halbsekunden-Blitz einer falschen Note vor der Auflösung ist das klangliche Äquivalent einer Drohung.",
      pluginSuggestion:
        "Massive X — Sub-Bass-Patch, Mono EIN, Portamento AUS für Steps 0 bis 13, aber Portamento bei 40 ms NUR für den B1→C2-Übergang aktivieren (Steps 14→15). In Maschine kann Portamento per Note über die Note-Properties automatisiert werden. Der Slide auf B1→C2 ist der Menace-Move — ohne ihn ist die chromatische Annäherung nur ein Durchgangston.",
      microKeyTip:
        "C-Moll auf dem microKEY: C (weiß), Bb (schwarz, zwischen A und B), G (weiß, 7 unter C), B (weiß, eine Taste links von C). B natur liegt direkt neben C — keine schwarze Taste dazwischen. B dann sofort C spielen: die kleinstmögliche Spannung und Auflösung. Bei 93 BPM dauert dieser Moment 160 ms. Genau wissen, wo B liegt, bevor aufgenommen wird.",
      variation:
        "B1 (Step 14) durch Db2 (ein Halbton über C2) für eine andere chromatische Annäherung ersetzen — die Note, die von oben kommt statt von unten. Die Dissonanz ist dieselbe, aber die emotionale Richtung ist umgekehrt: statt aufsteigend in die Root, fällt der Bass hinunter in sie. Fallende Annäherungen klingen ergebener; aufsteigende aggressiver.",
    },
  ],

  "bb-4": [
    {
      name: "Dm Lange Töne",
      key: "d-Moll",
      description:
        "Vier Noten bei 82 BPM, Swing 50. Laid Back Boom ist das langsamste und geradlinigste Boom-Bap-Pattern in der Library — kein Swing, maximaler Raum. Jede Note dauert hier zwischen 2 und 6 Steps (ca. 440 ms bis 1,3 Sekunden). Dies ist der Bass für Momente, in denen der Sample alles ist und der Bass nur existiert, um die Tonart zu benennen. Langsam spielen. Jede Note meinen.",
      pluginSuggestion:
        "The Gentleman (Kontakt) — eine aufgenommene Basslage-Piano-Note, die für 2+ Beats bei 82 BPM ausgehalten wird, hat enorme Wärme. Gate-Länge für jede Note auf 100 % setzen. Alternativ Massive X mit Attack bei 0 ms und Release bei 2 Sekunden — der langsame Release lässt jede Note in die nächste atmen. Kein Portamento. Jede Note sollte separat und absichtsvoll sein.",
      microKeyTip:
        "D-Moll auf dem microKEY: D (weiß), A (weiß, 5 hoch), C (weiß, eine links von D). Drei Tasten. Bei 82 BPM im geraden Takt diese Noten langsam und bewusst mit vollem Fingerdruck spielen — das microKEY ist velocity-sensitiv und ein festerer Anschlag erzeugt eine lautere, präsentere Note. Jede der vier Noten verdient ihr volles Gewicht.",
      variation:
        "C2 (Step 12) und D2 (Step 14) vollständig entfernen — nur D2 und A1, eine Note pro Halbbalken. Zwei Noten, 82 BPM, gerader Takt. Dies ist die minimalste Basslinie der Library. Über einem Piano-Sample mit reicher Harmonie ist sie in ihrer Schlichtheit verheerend. Der Sample trägt alles; der Bass hält nur die Erde.",
    },
    {
      name: "Am Offener Abstieg",
      key: "a-Moll",
      description:
        "Absteigende A-Moll-Linie für das 82-BPM-Straight-Time-Feeling von Laid Back Boom. Vier Noten, kein Swing, jede steppt durch das A-Moll-Arpeggio hinunter. Das abschließende G1 (die kleine Septime von A) löst nicht zurück zu A auf — es lässt den Takt offen hängen, wartend. Über einem Piano-Sample mit gehaltenen Akkorden klingt dieser Abstieg wie ein langsames Ausatmen des Basses.",
      pluginSuggestion:
        "The Gentleman (Kontakt) oder Massive X mit langem Release. Das entscheidende Merkmal dieser Linie ist nicht die Noten, sondern der Raum dazwischen — bei 82 BPM sind Steps 0 bis 6 ca. 876 ms Stille. Der Stille vertrauen. Keine Ghost-Noten hinzufügen, um sie zu füllen. Der Raum IST das Feeling.",
      microKeyTip:
        "A-Moll-Abstieg auf dem microKEY: A (weiß), E (weiß, 5 hoch), C (weiß, 4 unter E), G (weiß, 4 unter C). Der Abstieg bewegt sich nach links über die Tastatur. Bei A beginnen, dann E finden (rechte Hand ausgestreckt), dann C (Hand verschiebt sich links), dann G (weiter links). Bei 82 BPM ist der 6-Step-Abstand zwischen jeder Note 2,2 Sekunden — mehr als genug Zeit, um für jede Note zu repositionieren.",
      variation:
        "G1 (Step 14) durch F1 (die kleine Sexte von A) für ein dunkleres Ende ersetzen. Oder den Abstieg auf 5 Noten erweitern: E1 auf Step 15 (die untere Oktave der Quinte) als Abschlussnote hinzufügen. Der Abstieg durch A E C G E kommt bei dem tiefen E an — ein vollständiger Fall durch zwei Oktaven, der zur hohen A im nächsten Takt zurückschleift.",
    },
  ],

  "hh-1": [
    {
      name: "Gm G-Funk-Groove",
      key: "g-Moll",
      description:
        "West-Coast-G-Funk läuft bei 100 BPM ohne Swing — jede Note landet exakt im Sechzehntel-Raster. Diese Linie spiegelt das enge, gleichmäßige Feeling der Warren G / Dr. Dre Ära wider: sanfte, kreisförmige Pentatonik-Bewegung, die sich nie setzt. 8 Noten pro Takt, alle auf geradzahligen Steps, erzeugt eine durchgehend rollende Basslinie, die sich unter das Pattern legt ohne Unterbrechung.",
      pluginSuggestion:
        "Massive X — 'Sub Slide'-Patch mit Portamento bei 40 ms, Mono EIN. Portamento für alle Übergänge aktivieren. Der G-Funk-Bass-Sound ist durch seine Slides definiert — jede Note gleitet sanft in die nächste. Bei 100 BPM mit Portamento bei 40 ms belegt jeder Slide ca. 6 % der Step-Dauer: hörbar, aber nicht dominant. Das ist der West-Coast-Synth-Bass-Sound.",
      microKeyTip:
        "G-Moll-Pentatonik auf dem microKEY: G (weiß), Bb (schwarz), C (weiß), D (weiß), F (weiß). Alle eng beieinander. Die 8-Noten-Sequenz als einzelne Legato-Phrase aufnehmen — jede Taste bis zur nächsten halten, damit Portamento aktiviert. Bei 100 BPM bei 50 BPM aufnehmen: jeder Step ist eine halbe Note bei 50 BPM, eine angenehme Geschwindigkeit für Legato-Spiel.",
      variation:
        "F2 (Step 4) durch Eb2 (die kleine Sexte von G) ersetzen. Der Pentatonik-Aufstieg ändert den Flavor — statt G→D→F→G (Gm-Pentatonik) wird es G→D→Eb→G (Gm-Naturmoll mit Sexte). Subtile Änderung, erhebliche emotionale Verschiebung: Eb in einem G-Moll-Kontext ist eine der herzzerreißenden Noten des West-Coast-R&B.",
    },
    {
      name: "Cm Weiche Linie",
      key: "c-Moll",
      description:
        "C-Moll bei 100 BPM gerader Takt — sauberer und weniger chromatisch als die G-Moll-Version. 6 Noten pro Takt erzeugen ein leicht offeneres Feeling als der volle 8-Noten-Groove. Steps 3, 6, 11, 14 sind synkopierte Positionen, die unerwartete Bewegung im geraden Raster erzeugen. Ohne Swing kommt der Groove ausschließlich aus Notenauswahl und Velocity-Kontrast.",
      pluginSuggestion:
        "Massive X mit Portamento bei 50 ms, Mono EIN. Das Eb2 auf Step 6 (die kleine Terz) ist die Farbnote — bei 100 BPM mit 50 ms Portamento hat es eine sanfte Slide-Qualität. Wenn der Sample zeitgenössischer als klassischer G-Funk ist, stattdessen Scarbee Rickenbacker Bass für einen härteren, weniger synth-artigen Anschlag probieren.",
      microKeyTip:
        "C-Moll auf dem microKEY: C (weiß), G (weiß, 7 hoch), Eb (schwarz, zwischen D und E), Bb (schwarz, zwischen A und B). Legato bei 50 BPM aufnehmen — die Portamento-Einstellung bedeutet, gehaltene Tasten erzeugen Slides. Bei 100 BPM wiederhergestellt werden die Slides kurz und sanft, der G-Funk-Charakter erscheint automatisch.",
      variation:
        "Tonart auf F-Moll wechseln: F (Root), C (Quinte), Ab (kleine Terz), Eb (kleine Septime). Dieselbe rhythmische Struktur in F-Moll erzeugt eine dunklere, kinoartigere Basslinie — weniger G-Funk, mehr West-Coast-Filmmusik. Diese Variation ausprobieren, wenn der Sample eine melancholischere oder introspektivere Qualität hat.",
    },
  ],

  "hh-2": [
    {
      name: "Gm 808 Half-Time",
      key: "g-Moll",
      description:
        "Trap Soul Bridge läuft bei 130 BPM — dem schnellsten Pattern im Hip-Hop-Set. Bei diesem Tempo ist eine Sechzehntel nur 115 ms. Vier Noten pro Takt ist die richtige Dichte: jede Note hat Raum zum Sustain und Decay, bevor die nächste eintrifft. Das Half-Time-Drum-Feeling bedeutet, dass Step 8 der gefühlte Halbpunkt ist. Steps 12 und 14 sind 808-Schwanz-Noten — der charakteristische gleitende Decay einer 808-Kick, die auf Tonhöhe gespielt wird.",
      pluginSuggestion:
        "Massive X — 808-Sub-Patch mit Portamento bei 80 ms, Mono EIN. Release auf 1,5 Sekunden setzen, damit jede Note langsam in die nächste abklingt. Bei 130 BPM dauern die Noten auf Steps 12 und 14 jeweils nur 115 ms — sie werden vollständig durch den Decay-Schwanz der 808 definiert, nicht durch einen gehaltenen Körper. Die 'Note' ist der Decay.",
      microKeyTip:
        "G-Moll auf dem microKEY: G (weiß), D (weiß, 7 hoch), Bb (schwarz, zwischen A und B). Drei Tasten. Bei 130 BPM bei 65 BPM aufnehmen — jeder Step ist eine Viertelnote bei 65 BPM, ein natürliches Spieltempo. G und D als starke Schläge spielen, Bb und G als leichtere Berührungen. Tempo nach der Aufnahme wiederherstellen.",
      variation:
        "Auf 5 Noten erweitern: F1 (die kleine Septime) auf Step 10 zwischen D2 und Bb1 hinzufügen. Das Pattern liest jetzt G / D / F / Bb / G — eine fallende 5-Noten-Phrase, die sich durch den Gm7-Akkord bewegt. Melodischer, leicht weniger 808-artig. Verwenden, wenn die Trap-Soul-Produktion eine musikalischere, weniger rhythmische Bass-Rolle hat.",
    },
    {
      name: "Cm Trap-Slide",
      key: "c-Moll",
      description:
        "C-Moll-808-Linie für Trap Soul Bridge. Der chromatische Schwanz auf Steps 12–14 (G1 / Ab1 / G1) erzeugt den 808-Waver-Effekt bei 130 BPM: eine Halbton-Oszillation von insgesamt 345 ms Dauer, die bei diesem Tempo wie ein pitch-gebogener Schwanz klingt statt wie separate Noten. Das ist die Trap-Soul-Bass-Signatur: Root und Quinte mit chromatischem Waver am Ende.",
      pluginSuggestion:
        "Massive X — 808-Sub, Portamento 100 ms, Mono EIN. Die drei-Noten-Schwanz (G1/Ab1/G1 auf Steps 12–13–14) mit 100 ms Portamento erzeugt eine kontinuierliche Slide-Bewegung über 345 ms. Es klingt wie eine einzige schwankende Tonhöhe statt drei separate Noten. Portamento auf 120 ms erhöhen, wenn die Slides zu artikuliert wirken — bei 130 BPM soll der Schwanz verschwimmen.",
      microKeyTip:
        "C-Moll mit chromatischer Annäherung auf dem microKEY: C (weiß), G (weiß), Bb (schwarz), Ab (schwarz, links von A). Ab liegt zwischen G und A — direkt rechts von G. Die G / Ab / G Drei-Noten-Waver auf Steps 12–13–14 werden als drei sehr leichte, schnelle Berührungen gespielt. Bei 130 BPM bei 65 BPM aufnehmen: jede Waver-Note ist eine ganze Viertelnote, leicht zu spielen. Tempo wiederherstellen.",
      variation:
        "Die G/Ab/G-Waver durch eine einzelne lange G1-Note ersetzen, die auf Step 12 beginnt und bis Step 15 dauert. Der 808-Schwanz wird zu einer gehaltenen Note statt einer Waver — sauberer, moderner, weniger atmosphärisch. Verwenden, wenn das Arrangement bereits komplex ist und der Bass vereinfachen muss.",
    },
  ],

  "hh-3": [
    {
      name: "Am Premier-Pocket",
      key: "a-Moll",
      description:
        "DJ-Premier-Style bei 95 BPM, Swing 62 — der höchste Swing-Wert im Hip-Hop-Set. Bei 62 % Swing werden die 'e'-Unterteilungen (Steps 1, 5, 9, 13) fast auf Triolen-Achtelnoten-Position geschoben. Noten auf Steps 3, 7, 11 und 15 sind die geschwungenen 16tel-Positionen und landen noch später. Diese Linie ist gebaut, um den extremen Swing auszunutzen: jede Off-Beat-Note fällt mit Premiers charakteristischem Late-Snap.",
      pluginSuggestion:
        "Scarbee Rickenbacker Bass (Kontakt, Fingered) — Premiers Bass war immer eine aufgenommene Bass-Gitarre, kein Synth. Die Ghost-Noten (Steps 7 und 15, Velocity 60 und 55) brauchen den taktilen Anschlag eines echten Basses. Sie sind der rhythmische Kleber zwischen den starken Beats — sie sollen in den Mitten gefühlt, nicht als separate Noten gehört werden.",
      microKeyTip:
        "A-Moll auf dem microKEY: A (weiß), E (weiß, 5 hoch), C (weiß, 3 über A), G (weiß, 7 unter A in tieferer Oktave), F (weiß, 3 über D). Bei 62 % Swing ist das Raster stark geschwungen — bei 47–48 BPM aufnehmen für leichteres Timing, dann wiederherstellen. Der starke Swing erledigt die meiste Groove-Arbeit automatisch; Fokus auf Velocity-Kontrast zwischen Hauptnoten und Ghosts.",
      variation:
        "G1 (Step 8) durch Am-Akkordtöne ersetzen: D2 (die Quarte, eine Suspension) ausprobieren. Das Pattern ändert sich von einer fallenden Basslinie zu einer, die sich an der Hälfte öffnet — ein Premier-Move, der auf frühen Gang-Starr-Platten zu hören ist, wo der Bass harmonische Spannung bei Beat 3 erzeugt, bevor er sich auflöst.",
    },
    {
      name: "Dm Hard Bop",
      key: "d-Moll",
      description:
        "D-Moll-jazzinfluenzierte Linie für das Premier-Swing-Template. Das Bb1 auf Step 15 (der allerletzte 'a'-Subdivision bei 62 % Swing) ist eine chromatische Annäherungsnote, die zurück zum Taktbeginn verbindet — bei dieser extremen Swing-Position überschneidet sich Step 15 fast mit Step 0 des nächsten Takts. Der Bass denkt bereits an den nächsten Takt, bevor der aktuelle endet. Das ist Jazz-Phrasierung, angewendet auf Boom Bap.",
      pluginSuggestion:
        "Scarbee Rickenbacker Bass (Kontakt, Fingered). Das G1 auf Step 11 (die Quarte von D-Moll) ist der Jazz-Move — eine suspendierte Note, die momentane harmonische Mehrdeutigkeit erzeugt, bevor sie sich auflöst. Bei 62 % Swing landet Step 11 ungefähr dort, wo ein Jazz-Bassist seine geschwungene Triole platzieren würde. Das ist kein Zufall — Premiers Sampling von Jazz-Platten kalibrierte seinen Swing daran.",
      microKeyTip:
        "D-Moll auf dem microKEY: D (weiß), A (weiß, 5 hoch), F (weiß, 2 über D), G (weiß, 3 über E), Bb (schwarz, zwischen A und B). Das G1 auf Step 11 leise aufnehmen — es ist die subtilste Note im Pattern, eine Jazz-Durchgangs-Note, die nur bei niedriger Velocity funktioniert. Bei 47 BPM aufnehmen, G bei Velocity 65 oder darunter anvisieren.",
      variation:
        "Tonzentrum wechseln: alles um eine kleine Terz zu F-Moll verschieben. D→F, A→C, F→Ab, G→Bb, Bb→Db. Dieselbe rhythmische Struktur in F-Moll erzeugt eine wärmere, R&B-nähere Basslinie. DJ Premier verwendete dieses Tonzentrum gelegentlich auf seinen dunkleren, soul-beeinflussten Produktionen.",
    },
  ],

  "hh-5": [
    {
      name: "Am Dilla Betrunken",
      key: "a-Moll",
      description:
        "Dilla Limp bei 84 BPM, Swing 56. Die Ghost-Noten auf Steps 1 und 9 (Velocity 50) sind das definierende Merkmal: eine Sechzehntel nach dem Downbeat platziert, verwischen sie Beat 1 und Beat 3 — die starken Beats wirken, als kämen sie 'spät', als würde der Bass noch aufwachen. Kombiniert mit 56 % Swing werden die Off-Beat-Noten (Steps 5, 9, 13) etwas weiter als Standard geschoben. Das Ergebnis ist Dillas Betrunkene-Uhr-Feeling: der Bass weiß, wohin er geht, scheint es aber nicht eilig zu haben.",
      pluginSuggestion:
        "Massive X — beliebiger warmer Sub-Patch. Die Ghost-Noten (Steps 1 und 9) sind die Technik: sie brauchen denselben Patch wie die Hauptnoten, aber bei exakt Velocity 50. Im Maschine-Step-Sequencer die Velocity jeder Note individuell einstellen. Die Ghost-Noten sollen nicht unhörbar sein — sie müssen als niedrige Präsenz registrieren, den Beat verwischen ohne ihn zu definieren.",
      microKeyTip:
        "A-Moll auf dem microKEY: A (weiß), C (weiß), E (weiß), G (weiß). Alle weißen Tasten. Die Ghost-A1-Note auf Step 1 mit sehr leichter Berührung aufnehmen — die Taste kaum drücken. Die Velocity-Reaktion des microKEY bedeutet, dass eine leichte Berührung bei langsamer Aufnahmegeschwindigkeit ungefähr Velocity 50 ergibt. Bei 42 BPM aufnehmen für angenehme Platzierung.",
      variation:
        "Die Ghost-Noten von Steps 1 und 9 auf Steps 2 und 10 (die 'e'-Subdivision statt des '+') verschieben. Bei 56 % Swing ist Step 2 später als Step 1 — das Betrunkene-Uhr-Feeling wird extremer. Das ist die fortgeschrittene Dilla-Technik: absichtliche mikro-rhythmische Inkonsistenz über den Takt.",
    },
    {
      name: "Dm Lockerer Groove",
      key: "d-Moll",
      description:
        "D-Moll-Dilla-Ansatz: Ghost-Noten bei Velocity 55–60 auf Steps 3, 11 und 15 erzeugen die lockere, durch-den-Groove-denkende Qualität. Noten auf ungeraden Steps (3, 7, 11, 15) bei 56 % Swing landen alle leicht spät — und das Pattern platziert einen Ghost auf drei dieser späten Positionen. Der Bass klingt, als hätte er seinen Part gerade noch rechtzeitig erinnert, was die treffendste Beschreibung von Dillas Groove-Ansatz ist.",
      pluginSuggestion:
        "Scarbee Rickenbacker Bass (Kontakt, Fingered) — die organische Natur der aufgenommenen Bass-Gitarre lässt die Ghost-Noten natürlicher wirken als ein synthetisierter Sub. Der leicht ungleichmäßige Decay jeder Note bei unterschiedlichen Velocities ist Teil der Dilla-Textur. Nicht quantisieren oder Velocities nach der Aufnahme normalisieren.",
      microKeyTip:
        "D-Moll auf dem microKEY: D (weiß), C (weiß, direkt unter D), A (weiß, 5 unter D), F (weiß, 2 über D). Bei 84 BPM bei 42 BPM aufnehmen. Für die Ghost-Noten (Steps 3, 11, 15) mit merklich leichterer Berührung spielen — die Velocity-Kurve des microKEY erledigt die meiste Arbeit, wenn der Tastenkontakt sanft und schnell ist.",
      variation:
        "Alle Ghost-Noten (Steps 3, 11, 15) entfernen und nur die Hauptnoten spielen (Steps 0, 5, 7, 8, 13). Das Pattern wird zu einer Standard-D-Moll-Basslinie — kompetent, aber gewöhnlich. Dann die Ghosts nacheinander wieder hinzufügen und hören, wie jeder einzelne den Groove progressiv lockert. Diese Übung macht Dillas Technik hörbar und lehrbar.",
    },
  ],

  "rnb-1": [
    {
      name: "Cm Neo-Soul-Tiefe",
      key: "c-Moll",
      description:
        "Neo-Soul-Pocket bei 75 BPM, Swing 63 — das am stärksten geschwungene R&B-Pattern in der Library. Bei 63 % Swing fallen 'e'-Subdivisions (Steps 1, 5, 9, 13) fast auf die Triolen-Achtelnoten-Position. Das verwandelt Standard-Sechzehntel-Bass-Bewegung in etwas, das wie ein Live-Spieler atmet — schwer-langsam, tief in der Tasche. Das Ab1 auf Step 11 (kleine Sexte von C) ist die herzzerreißende Note, platziert, wo der extreme Swing maximalen Raum gibt.",
      pluginSuggestion:
        "Scarbee Rickenbacker Bass (Kontakt, Fingered) — bei 63 % Swing und 75 BPM muss der Bass wie ein menschlicher Spieler wirken. Ein aufgenommenes Bass-Instrument reproduziert die Mikro-Variationen in Anschlag und Decay, die den starken Swing natürlich wirken lassen. Ein synthetisierter Sub bei diesem Tempo und Swing würde mechanisch klingen. Den Rickenbacker verwenden und den Groove atmen lassen.",
      microKeyTip:
        "C-Moll auf dem microKEY: C (weiß), G (weiß, 7 hoch), Bb (schwarz, zwischen A und B), Ab (schwarz, zwischen G und A). Ab und Bb sind benachbarte schwarze Tasten — Ab links von A, Bb rechts von A. Beide vor der Aufnahme finden. Bei 75 BPM ist der Takt 3,2 Sekunden lang — langsam genug, um das volle Gewicht jeder Note zu spüren. Bei 37–38 BPM aufnehmen für angenehme Platzierung.",
      variation:
        "Auf D-Moll transponieren: D / A / C / D / Bb / A / D. Gleicher Swing, gleiche BPM, gleiche Positionen — aber D-Molls modaler Charakter sitzt leicht anders unter R&B-Samples. D-Moll hat eine jazz-nährere Qualität (die ii-Stufe von C-Dur); C-Moll sitzt dunkler und in sich geschlossener. Beide ausprobieren und hören, welches den Sample öffnet.",
    },
    {
      name: "Fm Soul-Groove",
      key: "f-Moll",
      description:
        "F-Moll-Neo-Soul-Linie — ein D'Angelo / Erykah-Badu-Ansatz. Das Db2 auf Step 11 (die große Sexte von F-Moll, enharmonisch zu C#) ist die Jazz-Soul-Note: ungewöhnlich, unerwartet in einem Moll-Kontext, und bei der Extrem-Swing-Position platziert, wo sie später als erwartet ankommt. Späte Platzierung + unerwartete Notenauswahl = die Neo-Soul-Formel. Bei 75 BPM und 63 % Swing atmet dieses Pattern so langsam wie ein Herzschlag.",
      pluginSuggestion:
        "Scarbee Rickenbacker Bass (Kontakt, Fingered). Das Db2 (Step 11) und Ab1 (Step 15) sind die Jazz-Soul-Noten — beide sind die erniedrigte 6. Stufe in ihren jeweiligen Oktaven. Bei 63 % Swing fallen beide Noten fast exakt auf eine Triolen-Subdivision. Die natürliche Note-zu-Note-Variation der aufgenommenen Bass-Gitarre lässt diese Noten natürlich und musikalisch klingen, selbst bei niedriger Velocity.",
      microKeyTip:
        "F-Moll auf dem microKEY: F (weiß), C (weiß, 7 hoch), Eb (schwarz, zwischen D und E), Db (schwarz, zwischen C und D), Ab (schwarz, zwischen G und A). Vier der 7 Noten sind schwarze Tasten — dieses Pattern lebt auf den erhöhten Tasten. Hand mit Daumen auf F positionieren, andere Finger natürlich über den schwarzen Tasten. Bei 75 BPM gibt es keine Eile.",
      variation:
        "Db2 (Step 11) durch D2 (natürliche große Sexte) ersetzen. Das verschiebt das Pattern von F-Dorisch (mit natürlicher Sexte) zu F-Naturmoll und zurück — die D2-Version hat eine hellere, zeitgemäßere R&B-Qualität. Die Db2-Version hat den Jazz-Soul-Charakter. Beide aufnehmen und je nach harmonischem Flavor des Samples wählen.",
    },
    {
      name: "AsDur Soul-Pad",
      key: "As-Dur",
      description:
        "Ab-Dur — ein Stevie-Wonder-Ansatz im Neo-Soul-Kontext. Dur-Tonalität über einem langsamen, geschwungenen Pattern bringt Wärme und Optimismus, ohne die Tiefe des Grooves zu verlieren. Gb2 (die große Septime von Ab) auf Step 7 ist die Neo-Soul-Signatur: das Maj7-Intervall über einer Dur-Root erzeugt den charakteristischen bittersüßen Schimmer. Bei 63 % Swing fällt Step 7 fast auf die Triolen-Subdivision — natürlich, fließend, wie ein Atemzug.",
      pluginSuggestion:
        "The Gentleman (Kontakt) — Ab-Dur bei 75 BPM auf einem aufgenommenen Piano in der Basslage erzeugt die warme, aushaltende Qualität von Stevie Wonders Tastatur-Spiel in der Basslage. Gate-Länge auf 90 % setzen, damit Noten leicht überlappen. Das Gb2 (Step 7) ist die wichtigste Note — bei Velocity 65 soll es präsent, aber nachrangig sein. Zu laut und es wird dissonant; zu leise und die Maj7-Magie verschwindet.",
      microKeyTip:
        "Ab-Dur auf dem microKEY: Ab (schwarz, zwischen G und A), Eb (schwarz, zwischen D und E), Gb (schwarz, zwischen F und G), F (weiß, zwischen E und G). Alle Hauptnoten sind schwarze Tasten außer F. Die Hand ruht leicht erhöht über den weißen Tasten in ihrer natürlichen Position. Bei 75 BPM und 63 % Swing alles legato spielen — jede Taste leicht in die nächste übergehen lassen.",
      variation:
        "Auf Ab-Moll verschieben: Gb2 (Step 7) durch Bbb1 (enharmonisch zu A1, die kleine Septime von Ab-Moll) ersetzen. Das Pattern wechselt von Dur zu Moll mit einer einzigen Notenänderung. Ab-Moll ist eine der dunkelsten Tonarten — der Wechsel von Ab-Dur zu Ab-Moll mitten in der Erkundung ist eine kraftvolle Art, die Bandbreite eines Samples zu testen.",
    },
  ],

  "rnb-2": [
    {
      name: "Cm Contemporary Clean",
      key: "c-Moll",
      description:
        "Zeitgenössisches R&B bei 90 BPM, Swing 50 — gerade Sechzehntel, kein Swing. Das ist der SZA / Bryson-Tiller / H.E.R.-Ära-Bass: mechanisch präzise, harmonisch reich, dafür entwickelt, die schwebende atmosphärische Produktion zu verankern, ohne Aufmerksamkeit zu erregen. 7 Noten pro Takt — genug Bewegung, um Harmonie über das gesamte Maß zu definieren, nicht so viele, dass der Bass zum eigenständigen Element wird.",
      pluginSuggestion:
        "Massive X — ein sauberer, moderner Sub-Patch ohne Verzerrung und minimalen harmonischen Inhalt. Zeitgenössischer R&B-Bass ist fast vollständig Sub-Frequenz: durch den Lautsprecher gefühlt statt gehört. Ein Hochpass bei 40 Hz und Tiefpass bei 200 Hz auf dem Bass-Kanal setzen — nur reiner Sub, kein Mitten-Bass-Charakter. Die Melodie kommt vom Synth-Pad, nicht vom Bass.",
      microKeyTip:
        "C-Moll auf dem microKEY: C (weiß), Bb (schwarz, zwischen A und B), G (weiß, 7 unter C), Eb (schwarz, zwischen D und E), D (weiß). Bei 90 BPM gerader Takt bei genauem Session-Tempo aufnehmen — kein Verlangsamen nötig. Das saubere Raster macht das Timing unkompliziert. Fokus auf Velocity-Variation: die Hauptbeats (0 und 8) bei voller Velocity, alle anderen merklich leiser.",
      variation:
        "Auf 5 Noten reduzieren, indem Steps 12 (D2) und 14 (C2) entfernt werden und der Takt nach dem Eb2 auf Step 10 endet. Das Pattern wird zu einem 5-Noten-Bogen — von C zu Eb und zurück zu C — mit 6 Steps Stille vor dem Taktneustart. Diese Version ist minimaler und funktioniert besser unter vokalbetonten Produktionen.",
    },
    {
      name: "EsDur Modern",
      key: "Es-Dur",
      description:
        "Eb-Dur bei 90 BPM gerader Takt — ein heller, Dur-toniger zeitgenössischer Bass für eine optimistischere Contemporary-R&B-Produktion. Der neutrale Swing (50 %) und moderates Tempo machen dies zum neutralsten Bass der Library: kein Swing-Charakter, kein extremes Tempo, nur saubere harmonische Bewegung. 6 Noten, regelmäßiger Abstand, Dur-Klarheit.",
      pluginSuggestion:
        "Massive X — sauberer Sub. Das Ab1 auf Step 10 (die große Quarte von Eb) erzeugt kurz ein Sus4-Feeling — bei Velocity 70 ist es eine Durchgangsnote, keine Aussage. Wenn die Produktion Richtung Gospel oder zeitgenössischem Soul tendiert, The Gentleman (Kontakt) in der Basslage für organischere Wärme ausprobieren. Die Durtonart erlaubt mehr Wärme im Bass als Molltonarten.",
      microKeyTip:
        "Eb-Dur auf dem microKEY: Eb (schwarz, zwischen D und E), Bb (schwarz, zwischen A und B), G (weiß, 5 unter Eb), Ab (schwarz, zwischen G und A). Drei schwarze Tasten und eine weiße. Bei vollem 90 BPM aufnehmen — der gerade Takt und moderate Dichte machen es bei Session-Tempo komfortabel. Die kreisförmige Struktur des Patterns (Eb zu Eb) macht den Loop-Punkt sauber.",
      variation:
        "Das letzte Eb2 (Step 14) auf Step 12 verschieben und G1 auf Step 14 hinzufügen. Das Pattern endet auf G1 (die große Terz) statt der Root — ein offenes, optimistisches Ende, das natürlicher in den nächsten Takt führt. Diese Variation funktioniert besonders gut, wenn das Drum-Pattern eine Pickup-Note auf Step 15 hat (Snare-Ghost).",
    },
  ],

  "rnb-3": [
    {
      name: "Bbm Balladenabstieg",
      key: "b-Moll",
      description:
        "Slow Jam Sway bei 68 BPM — dem langsamsten Pattern im R&B-Set. Jeder Sechzehntel-Step bei 68 BPM ist 220 ms; ein 6-Step-Abstand zwischen Noten ist mehr als 1,3 Sekunden Stille. Das ist der Bass für einen Track im Tempo eines langsamen Herzschlags. Das Ab2 (kleine Septime von Bb) auf Step 9 ist die seelenvolle Note jedes Slow Jams. Das Gb2 (erniedrigte Sexte) auf Step 14 lässt den Takt unaufgelöst — ein Schmerz, der ewig schleift.",
      pluginSuggestion:
        "The Gentleman (Kontakt) — tiefe Lage, volle Gate-Länge. Bei 68 BPM hat eine gehaltene Piano-Note in der Basslage 3–4 Sekunden Decay pro Note. Jede Note auf 100 % Gate-Länge setzen und den natürlichen Piano-Decay definieren lassen, wann jede Note endet. Die Gb2-Abschlussnote braucht die vollen 440 ms, die sie vor dem Loop belegt — nicht kürzen.",
      microKeyTip:
        "Bb-Moll auf dem microKEY: Bb (schwarz, zwischen A und B), F (weiß, 7 hoch von Bb), Ab (schwarz, zwischen G und A), Gb (schwarz, zwischen F und G). Vier der 5 Noten sind schwarze Tasten. Bei 68 BPM ist der Takt 3,5 Sekunden lang. Bei 34 BPM aufnehmen — jeder Step ist eine halbe Note, angenehm für bedächtiges Spiel. Jede Note ist bei diesem Tempo ein Ereignis.",
      variation:
        "Das Gb2 (Step 14) durch F2 (die Quinte von Bb, eine Oktave höher) ersetzen. Das unaufgelöste Ende wird aufgelöst: der Takt endet, wo er begann (Bb), durch das Medium F, die Quinte. Diese Version erzeugt eine hoffnungsvollere, zyklische Schleife statt einer offenen Frage voller Sehnsucht. Verwenden, wenn der Track Vorwärtsbewegung braucht statt gehaltener Sehnsucht.",
    },
    {
      name: "Fm Langsamer Fall",
      key: "f-Moll",
      description:
        "F-Moll-Abstieg über den gesamten Takt bei 68 BPM. Fünf Noten, jede landet ca. 3–4 Steps auseinander, bewegt sich von F durch C, Db, C und hinunter zu Bb. Das Db2 (die kleine Sexte von F) ist die weinende Note von F-Moll — bei 68 BPM hat es fast eine volle Sekunde Zeit zum Sustain und Ausdruck. Das abschließende Bb1 löst nicht zu F auf: der Abstieg endet eine Stufe über der kleinen Terz, lässt Raum.",
      pluginSuggestion:
        "The Gentleman (Kontakt) oder Massive X mit 2-Sekunden-Release. Das Db2 auf Step 10 ist das emotionale Zentrum — bei Velocity 75 soll es leiser als die umliegenden C2-Noten sein, aber harmonisch wirkungsvoller. The Gentleman laden und Hall hinzufügen (Bloom-Modus, 2,0 s Decay, 25 % Wet), damit das Db2 in das C2 auf Step 12 nachhallt. Die Überlappung erzeugt eine natürliche harmonische Verwischung.",
      microKeyTip:
        "F-Moll auf dem microKEY: F (weiß), C (weiß, 7 hoch), Db (schwarz, zwischen C und D), Bb (schwarz, zwischen A und B). Der Abstieg bewegt sich von F zu C (rechte Hand ausgestreckt), dann Db (eine Taste rechts von C — schwarz), zurück zu C (eine Taste links), dann Bb (weiter links). Bei 34 BPM (Aufnahmetempo für 68 BPM) ist jeder Step eine komfortable halbe Note.",
      variation:
        "Den Abstieg erweitern: Eb1 auf Step 15 (die kleine Septime unter F, tiefste Note im Pattern) hinzufügen. Die Linie liest F / C / Db / C / Bb / Eb. Das tiefe Eb1 fällt in ein Register unterhalb der anderen Noten — eine unterirdische Abschlussnote, die tiefer als alles andere im Mix sitzt. Diese Version für den Höhepunkt eines Slow Jams verwenden.",
    },
    {
      name: "EsDur Wogen",
      key: "Es-Dur",
      description:
        "Eb-Dur, 4 Noten pro Takt, 68 BPM. Die geduldigste Basslinie im R&B-Set. Steps 0 bis 8 sind fast 2 Sekunden Stille — der Raum zwischen Noten bei diesem Tempo ist ein kompositorisches Element, keine Lücke. Das Ab1 auf Step 12 (4. Stufe, erzeugt ein Sus4-Feeling) lehnt sich zu Bb1 auf Step 14, das die Suspension auflöst. Der gesamte Takt ist nur zwei Bewegungen: Root zur Quinte, dann Sus4 zur Quinte.",
      pluginSuggestion:
        "The Gentleman (Kontakt) — Attack auf 20 ms für einen leicht sanften Einsatz setzen. Bei 68 BPM mit nur 4 Noten pro Takt ist die Stille genauso wichtig wie die Noten. Ein Piano mit natürlichem Anschlag und 3+ Sekunden Decay füllt die Stille ohne weitere Noten — der Hall-Schwanz von Eb2 ist noch präsent, wenn Bb1 auf Step 8 eintrifft. Sound-Design um den Decay herum planen, nicht nur um die Note.",
      microKeyTip:
        "Eb-Dur auf dem microKEY: Eb (schwarz, zwischen D und E), Bb (schwarz, zwischen A und B), Ab (schwarz, zwischen G und A). Alle drei harmonischen Noten sind schwarze Tasten. Sie der Reihe nach finden vor der Aufnahme: Eb (hoch), Bb (leicht tiefer), Ab (direkt unter Bb). Bei 34 BPM ist jeder Step eine halbe Note. Jede Note mit festem, bewusstem Anschlag spielen — Velocity-Variation ist hier weniger wichtig als Notenpräsenz.",
      variation:
        "Ab1 (Step 12) durch G1 (die große Terz von Eb) ersetzen. Die Sus4-Suspension verschwindet und das Pattern wird zur einfachen Root-Quinte-Terz-Quinte-Bewegung — aufgelöster, weniger sehnsuchtsvoll. Dann Gb1 (die große Terz unter Eb, die kleine Terz von Eb von unten) ausprobieren — die dunkelste Version. Drei Noten, gleiche Positionen, radikal verschiedene emotionale Register.",
    },
  ],

  "rnb-4": [
    {
      name: "Gm Funk-Bounce",
      key: "g-Moll",
      description:
        "R&B-Bounce bei 85 BPM, Swing 57. Die Ghost-G1-Note auf Step 4 (Velocity 65) ist der Bounce: zwischen D2 (Step 3) und Bb1 (Step 5) platziert, erzeugt sie ein schnell aufeinanderfolgendes Triolen-Cluster an der 57-%-Swing-Position. Dieses Cluster — D2 / G1 / Bb1 in schneller Folge über Steps 3, 4, 5 — ist, wie moderner R&B-Bass Groove ohne einen menschlichen Spieler erzeugt. Der Bounce passiert innerhalb von 3 aufeinanderfolgenden Steps.",
      pluginSuggestion:
        "Scarbee Rickenbacker Bass (Kontakt, Fingered) — das schnelle D2/G1/Bb1-Cluster auf Steps 3–4–5 braucht den artikulierten Anschlag einer Bass-Gitarre. Ein synthetisierter Sub kann keine deutlichen Noten in drei aufeinanderfolgenden Sechzehntel-Steps produzieren (bei 85 BPM ist dieses Cluster 212 ms breit) ohne Verwischung. Der Rickenbacker's schneller Anschlag und natürliche Notentrennung macht jeden Schlag klar.",
      microKeyTip:
        "G-Moll auf dem microKEY: G (weiß), D (weiß, 7 hoch), Bb (schwarz, zwischen A und B), F (weiß, 2 unter G). Das schnelle Cluster (D/G/Bb auf Steps 3/4/5) erfordert drei schnelle Noten in 212 ms bei 85 BPM. Bei 42 BPM aufnehmen: jeder Step ist eine komfortable Viertelnote, das Cluster wird zu drei aufeinanderfolgenden Viertelnoten. Das Cluster als rhythmische Übung vor dem vollständigen Take spielen.",
      variation:
        "Den Ghost-G1 (Step 4) entfernen und Bb1 von Step 5 auf Step 4 verschieben. Das Cluster wird zu zwei Noten (D2 / Bb1) statt drei, der Bounce ist leicht weniger komplex. Das ist die Version, die unter minimaleren Arrangements besser funktioniert — gleiche Idee, eine Note weniger, etwas mehr Raum um den zweiten Beat.",
    },
    {
      name: "Dm Groove-Bounce",
      key: "d-Moll",
      description:
        "D-Moll-Bounce bei 85 BPM, Swing 57. Eine leicht glattere Alternative zur G-Moll-Version — D-Moll hat bei diesem Tempo und Swing-Setting mehr jazz-nahen Charakter. Noten auf Steps 3, 5, 11, 13 sind alle geschwungene Positionen; bei 57 % Swing fallen sie merklich später als gerader Takt, erzeugen einen natürlichen laid-back Bounce. Das G1 auf Step 14 (die Quarte von D-Moll) ist eine chromatische Annäherung, die zurück zum Taktbeginn führt.",
      pluginSuggestion:
        "Massive X — mittleres Portamento (30 ms), Mono EIN. Das G1 auf Step 14 (kurz vor dem Taktneustart zu D2 auf Step 0) erzeugt eine chromatische Spannungsnote, die sanft in die Root gleitet. Bei 30 ms Portamento und 85 BPM ist der Slide von G1 zu D2 ein 52-ms-Glide — kurz, geschmackvoll, kaum wahrnehmbar. Stattdessen Scarbee Rickenbacker verwenden, wenn ein mehr Gitarren-Bass-Feeling ohne Slide gewünscht wird.",
      microKeyTip:
        "D-Moll auf dem microKEY: D (weiß), A (weiß, 5 hoch), C (weiß, direkt unter D), F (weiß, 2 über D), G (weiß, 3 über E). Alle weißen Tasten — dieses Pattern lebt vollständig auf der weißen Tastenschicht. Einfachste Handposition: Hand in D-Moll-Skalenposition (D E F G A Bb C) legen und aufnehmen. Bei 57 % Swing bei 42 BPM Aufnahmetempo werden die Off-Beat-Noten leicht spät wirken, was korrekt ist.",
      variation:
        "G1 (Step 14) durch C#2 (die verminderte Septime als Annäherung, ein Tritonus über G1) ersetzen. Die chromatische Annäherung wird dissonanter — statt aufsteigend zur Root zu schreiten, nimmt sie einen unerwarteten Abkürzungsweg von unten. Bei 85 BPM ist der C#2-Blitz auf Step 14 176 ms: lang genug, um als Überraschung zu registrieren, kurz genug, um wie ein Flackern zu wirken.",
    },
  ],
};
