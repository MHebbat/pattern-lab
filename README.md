# Pattern Lab

**Dark, producer-focused drum pattern reference browser for Maschine MK3.**

Pattern Lab is a local-first web app with 76 drum patterns across Boom Bap, Hip Hop, and R&B, producer masterclasses for 17 legendary producers, a Maschine MK3 cheat sheet, and tools for pattern generation, chopping, and arrangement. Everything works offline — AI generation is optional.

---

## Features

- **76 drum patterns** — Boom Bap, Hip Hop, R&B, with step-grid visualisations and web audio playback
- **17 Producer Masterclasses** — Dr. Dre, J Dilla, DJ Premier, Havoc, Pete Rock, Kanye West, Timbaland, The Alchemist, Metro Boomin, 9th Wonder, Pharrell, Akhenaton, DJ Mehdi, Myth Syzer, Morlockko Plus, Johnny Illstrument, Figub Brazlevic
- **Maschine MK3 Cheat Sheet** — tabbed reference (First Session, Core Controls, Boom Bap, Hip Hop, R&B, FX Chains, Song Building)
- **Bass & MIDI Ideas** — per-genre bass patterns and melody ideas playable on Korg microKEY, with:
  - **SVG claviature diagrams** showing exactly which keys to press (highlighted in genre color)
  - **Heartbreaking emotional patterns** — chromatic descents, Phrygian flat 2, tritone grief, suspended 4ths, diminished 7ths, minor 6th sighs
  - **6 bass patterns per genre** (18 total) with step grids, plugin suggestions, and hand-position guidance
  - **6 melody ideas per genre** (18 total) with scale diagrams, sequence notation, and finger placement tips
- **AI Pattern Generator** — generates new patterns from a text prompt *(optional — requires API key)*
- **Chop Lab** — sample chopping reference
- **Song Lab** — arrangement and structure guide
- **Pack Lab** — pack recommendations from your collection

---

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node.js | 20 or higher | [nodejs.org](https://nodejs.org) |
| pnpm | 9 or higher | `npm install -g pnpm` |

To verify:

```bash
node --version   # v20.x.x or higher
pnpm --version   # 9.x.x or higher
```

---

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/pattern-lab.git
cd pattern-lab

# 2. Install all workspace dependencies
pnpm install

# 3. (Optional) Set up environment variables — see AI Setup below
cp .env.local.example .env.local
# then edit .env.local with your values
```

---

## Running Locally

### Option A — one-command start (recommended)

```bash
./start-local.sh
```

This script:
- Loads `.env.local` if it exists
- Runs `pnpm install` if needed
- Builds shared libraries
- Starts the API server (default port `5000`)
- Starts the frontend (default port `3001`)

Open [http://localhost:3001](http://localhost:3001) in your browser.

### Option B — manual start (two terminals)

**Terminal 1 — API server:**

```bash
PORT=5000 NODE_ENV=development pnpm --filter @workspace/api-server run dev
```

**Terminal 2 — Frontend:**

```bash
PORT=3001 BASE_PATH="/" API_URL="http://localhost:5000" NODE_ENV=development \
  pnpm --filter @workspace/drum-patterns run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

---

## Offline Usage

Pattern Lab is designed to work **completely offline**. The following features work with no internet connection:

- All 76 drum patterns with step-grid display and web audio playback
- All 17 producer masterclasses (biography, patterns, kit setup, techniques, pack recs)
- Maschine MK3 Cheat Sheet (all tabs)
- Chop Lab, Song Lab, Pack Lab
- Pattern filtering by genre and search

**The only feature that requires internet** is the AI Pattern Generator, which calls an external API. Without an API key or internet connection, the Generate button is still visible but generation requests will fail gracefully — everything else continues to work normally.

---

## AI Setup (Optional)

The AI Pattern Generator uses [OpenRouter](https://openrouter.ai) to generate new drum patterns from a text description. This feature is entirely optional.

### Getting an API key

1. Go to [openrouter.ai](https://openrouter.ai) and create a free account
2. Navigate to **Keys** and create a new API key
3. Free-tier models (e.g. `google/gemini-flash-1.5`) work well for pattern generation

### Configuring the key

Edit `.env.local` (copy from `.env.local.example` if it doesn't exist):

```bash
# Required for AI generation
OPENROUTER_API_KEY=sk-or-v1-your-key-here

# Optional: override the default model
# OPENROUTER_MODEL=openai/gpt-4o-mini      # fast, cheap (default)
# OPENROUTER_MODEL=openai/gpt-4o            # higher quality
# OPENROUTER_MODEL=anthropic/claude-3-5-haiku  # excellent structured JSON
# OPENROUTER_MODEL=google/gemini-flash-1.5  # fast and free-tier friendly
```

Restart the app after editing `.env.local`.

### How it works

When you click **Generate** in the app and submit a prompt (e.g. "dark boom bap at 90 BPM with heavy swing"), the API server sends the prompt to OpenRouter with a structured schema. The response is a complete drum pattern (kick, snare, hats, clap, timing, velocity) rendered immediately in the pattern browser.

The app works normally without this key — only the Generate button is affected.

---

## Project Structure

```
pattern-lab/
├── artifacts/
│   ├── drum-patterns/        # React + Vite frontend (the main app)
│   │   └── src/
│   │       ├── data/
│   │       │   ├── patterns.ts              # 76 drum patterns (source of truth)
│   │       │   ├── masterclasses.ts         # 17 producer masterclasses
│   │       │   ├── melodyRecommendations.ts # Bass patterns + melody ideas per genre
│   │       │   └── soundRecommendations.ts  # Pack and plugin recs per genre
│   │       ├── pages/        # Home, PatternDetail, CheatSheet, MasterClass, ChopLab, SongLab, PackLab
│   │       └── lib/          # audio.ts (Web Audio playback), utils
│   └── api-server/           # Express 5 API server
│       └── src/
│           └── routes/       # /api/generate (AI pattern generation)
├── lib/                      # Shared TypeScript libraries
├── .env.local.example        # Environment variable template
├── start-local.sh            # One-command local startup script
└── pnpm-workspace.yaml       # Workspace dependency catalog
```

---

## Development Commands

```bash
# Type-check the frontend
pnpm --filter @workspace/drum-patterns run typecheck

# Type-check the API server
pnpm --filter @workspace/api-server run typecheck

# Full type-check across all packages
pnpm run typecheck

# Build all packages (requires PORT and BASE_PATH env vars)
pnpm run build
```

---

## Tech Stack

- **Frontend:** React 18, Vite, TypeScript, Framer Motion, Tailwind CSS, Wouter (routing)
- **Audio:** Web Audio API (no external audio files — patterns are synthesized in-browser)
- **API:** Express 5, Node.js 24
- **AI:** OpenRouter (optional, any OpenAI-compatible model)
- **Workspace:** pnpm workspaces, TypeScript project references

---

## Adding Patterns

All patterns live in `artifacts/drum-patterns/src/data/patterns.ts`. Each pattern follows this shape:

```typescript
{
  id: "my-pattern-1",
  name: "My Pattern Name",
  genre: "Boom Bap",
  bpm: 90,
  description: "Short description of the feel.",
  tags: ["PUNCHY", "SWUNG"],
  rows: [
    { label: "Kick",  steps: [true,false,false,false, false,false,false,false, true,false,false,false, false,false,false,false] },
    { label: "Snare", steps: [false,false,false,false, true,false,false,false, false,false,false,false, true,false,false,false] },
    { label: "HH",    steps: [true,false,true,false,  true,false,true,false,  true,false,true,false,  true,false,true,false]  },
  ]
}
```

---

## License

MIT
