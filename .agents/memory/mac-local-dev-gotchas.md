---
name: Mac local dev gotchas
description: Startup blockers specific to running pattern-lab locally on macOS
---

# Mac Local Dev Gotchas

## Port 5000 is reserved by macOS AirPlay
macOS Monterey+ (Control Center) holds port 5000 for AirPlay Receiver.
The API server must use a different port — default changed to 5001 in start-local.sh.
**How to apply:** If EADDRINUSE 5000, run `API_PORT=5001 ./start-local.sh`.

## pnpm-workspace.yaml darwin overrides break local install
The overrides section originally excluded ALL non-linux-x64 binaries, including
`@esbuild/darwin-arm64`, `@rollup/rollup-darwin-arm64`, `lightningcss-darwin-arm64`,
`@tailwindcss/oxide-darwin-arm64` etc. These overrides exist for Replit (linux-x64 only)
but prevent Mac installs from getting required platform binaries.
**Why:** Replit wanted to slim down install size; did not account for local Mac dev.
**How to apply:** Keep darwin-arm64 and darwin-x64 entries OUT of the overrides section.

## pnpm approve-builds with nothing selected blocks builds
Running `pnpm approve-builds` and pressing Enter without selecting anything sets
all packages to allowBuilds: false. This causes [ERR_PNPM_IGNORED_BUILDS] and
pnpm exits non-zero, aborting scripts that use `set -e`.
**Fix:** Run `pnpm approve-builds` again and press Space on esbuild, then Enter.
**start-local.sh fix:** Uses `set +e` / `set -e` around install to tolerate this.

## Stale lockfile after removing darwin overrides
After removing darwin overrides from pnpm-workspace.yaml, the lockfile still has
old exclusions baked in. `pnpm install --no-frozen-lockfile` alone is not enough.
**Fix:** `rm -rf node_modules pnpm-lock.yaml && pnpm install` for a clean resolution.

## Git sync between Replit and GitHub
Replit commits do NOT automatically reach GitHub origin. The user's local
`git fetch origin && git reset --hard origin/main` pulls from GitHub, not Replit.
Fixes made in Replit must be pushed to GitHub to reach the user's local machine.
