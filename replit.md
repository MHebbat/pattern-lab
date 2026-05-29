# Pattern Lab

Dark, producer-focused drum pattern reference browser for Maschine MK3.

## Run & Operate

- `./start-local.sh` — one-command local start (API on 5000, frontend on 3001)
- `pnpm --filter @workspace/api-server run dev` — API server (port from `PORT` env)
- `pnpm --filter @workspace/drum-patterns run dev` — frontend (port from `PORT` env)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks from OpenAPI spec
- Required env for AI generation: `OPENROUTER_API_KEY` (see `.env.local.example`)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 18, Vite, Framer Motion, Tailwind CSS, Wouter
- API: Express 5
- Audio: Web Audio API (no external files — patterns synthesized in-browser)
- AI: OpenRouter (optional, any OpenAI-compatible model)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/drum-patterns/src/data/patterns.ts` — 76 drum patterns (source of truth)
- `artifacts/drum-patterns/src/data/masterclasses.ts` — 17 producer masterclasses
- `artifacts/drum-patterns/src/pages/CheatSheet.tsx` — 7-tab Maschine MK3 cheat sheet
- `artifacts/drum-patterns/src/lib/audio.ts` — PatternAudioPlayer (Web Audio playback)
- `artifacts/api-server/src/routes/` — Express API routes including /api/generate
- `.env.local.example` — environment variable template
- `start-local.sh` — local startup script

## Architecture decisions

- All pattern data is static TypeScript — no database required, fully offline
- Web Audio API synthesizes drum sounds from scratch — no sample files to distribute
- AI generation (OpenRouter) is optional and gracefully degraded — app works without it
- Masterclass patterns use IDs prefixed `mc-` to distinguish from library patterns
- CheatSheet uses URL query param `?tab=xxx` for deep linking from masterclass pages

## Product

- 76 drum patterns across Boom Bap (36), Hip Hop (24), and R&B (16) genres
- Step-grid visualisation and web audio playback for every pattern
- 17 Producer Masterclasses with biography, drum patterns, kit setup, techniques, pack recs
- Maschine MK3 Cheat Sheet (7 tabs: First Session, Core Controls, Boom Bap, Hip Hop, R&B, FX Chains, Song Building)
- AI Pattern Generator (requires OpenRouter API key, optional)
- Chop Lab, Song Lab, Pack Lab reference tools

## User preferences

- No emojis in code files
- No `console.log` in server code — use `req.log` / logger
- Dark, producer-focused aesthetic throughout
- All content is for Maschine MK3 hardware workflow

## Gotchas

- Typecheck with `pnpm --filter @workspace/drum-patterns run typecheck` — must pass before done
- CheatSheet route is `/cheatsheet` (no hyphen) — matches `App.tsx` Route definition
- `pnpm run build` requires `PORT` and `BASE_PATH` env vars; use `typecheck` for verification instead
- Do not run `pnpm dev` at workspace root — use per-artifact `--filter` commands or restart_workflow

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- `README.md` at repo root has full local install and AI setup instructions
