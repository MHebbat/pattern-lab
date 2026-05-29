import type { BassPattern } from "@/data/melodyRecommendations";

const PPQN = 480;
const TICKS_PER_16TH = PPQN / 4;

const SEMITONES: Record<string, number> = {
  C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11,
};

function noteNameToMidi(name: string): number {
  const m = name.match(/^([A-G])(b|#)?(\d+)$/);
  if (!m) throw new Error(`Cannot parse note: ${name}`);
  const [, letter, acc, octStr] = m;
  const octave = parseInt(octStr, 10);
  let semi = SEMITONES[letter];
  if (acc === "#") semi += 1;
  if (acc === "b") semi -= 1;
  return 12 * (octave + 1) + semi;
}

function vlq(value: number): number[] {
  if (value === 0) return [0];
  const bytes: number[] = [];
  let v = value;
  while (v > 0) {
    bytes.unshift(v & 0x7f);
    v >>= 7;
  }
  for (let i = 0; i < bytes.length - 1; i++) {
    bytes[i] |= 0x80;
  }
  return bytes;
}

function u32be(n: number): number[] {
  return [(n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff];
}

function u16be(n: number): number[] {
  return [(n >>> 8) & 0xff, n & 0xff];
}

export function generateBassPatternMidi(bp: BassPattern, bpm: number): Uint8Array {
  const microsPerQuarter = Math.round(60_000_000 / bpm);
  const NOTE_GATE = TICKS_PER_16TH - 2;

  type MidiEvent = { tick: number; priority: number; bytes: number[] };
  const events: MidiEvent[] = [];

  events.push({
    tick: 0,
    priority: 0,
    bytes: [
      0xff, 0x51, 0x03,
      (microsPerQuarter >>> 16) & 0xff,
      (microsPerQuarter >>> 8) & 0xff,
      microsPerQuarter & 0xff,
    ],
  });

  for (const step of bp.steps) {
    const onTick = step.step * TICKS_PER_16TH;
    const offTick = onTick + NOTE_GATE;
    const note = noteNameToMidi(step.note);
    const vel = Math.max(1, Math.min(127, step.velocity));
    events.push({ tick: onTick, priority: 1, bytes: [0x90, note, vel] });
    events.push({ tick: offTick, priority: 0, bytes: [0x80, note, 0] });
  }

  events.push({ tick: 16 * TICKS_PER_16TH, priority: 0, bytes: [0xff, 0x2f, 0x00] });

  events.sort((a, b) => a.tick !== b.tick ? a.tick - b.tick : a.priority - b.priority);

  const track: number[] = [];
  let cursor = 0;
  for (const ev of events) {
    track.push(...vlq(ev.tick - cursor), ...ev.bytes);
    cursor = ev.tick;
  }

  const header = [
    0x4d, 0x54, 0x68, 0x64,
    ...u32be(6),
    ...u16be(0),
    ...u16be(1),
    ...u16be(PPQN),
  ];

  const trackChunk = [
    0x4d, 0x54, 0x72, 0x6b,
    ...u32be(track.length),
    ...track,
  ];

  return new Uint8Array([...header, ...trackChunk]);
}

export function downloadMidi(data: Uint8Array, filename: string): void {
  const blob = new Blob([data.buffer as ArrayBuffer], { type: "audio/midi" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function midiFilename(bassName: string, bpm: number): string {
  const slug = bassName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `bass_${slug}_${bpm}bpm.mid`;
}
