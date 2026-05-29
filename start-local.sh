#!/usr/bin/env bash
# Pattern Lab — local startup
# Usage: ./start-local.sh
# Requires: Node.js 20+, pnpm 9+

set -e

# ── Load .env.local ────────────────────────────────────────────────────────────
if [ -f ".env.local" ]; then
  echo "[pattern-lab] Loading .env.local"
  set -a
  # shellcheck disable=SC1091
  source .env.local
  set +a
else
  echo "[pattern-lab] No .env.local found."
  echo "  Copy .env.local.example → .env.local and add your OPENROUTER_API_KEY."
  echo "  The app will start but AI generation will not work without the key."
  echo ""
fi

API_PORT="${API_PORT:-5001}"
FRONTEND_PORT="${FRONTEND_PORT:-3001}"

# ── Install dependencies ───────────────────────────────────────────────────────
echo "[pattern-lab] Installing dependencies..."
pnpm install --frozen-lockfile 2>/dev/null || pnpm install --no-frozen-lockfile || true

# ── Build shared libs ──────────────────────────────────────────────────────────
echo "[pattern-lab] Building shared libraries..."
pnpm run typecheck:libs

# ── Cleanup on exit ────────────────────────────────────────────────────────────
cleanup() {
  echo ""
  echo "[pattern-lab] Shutting down..."
  kill "$API_PID" "$FRONTEND_PID" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

# ── Start API server ───────────────────────────────────────────────────────────
echo "[pattern-lab] Starting API server on port $API_PORT..."
PORT="$API_PORT" \
OPENROUTER_API_KEY="${OPENROUTER_API_KEY:-}" \
OPENROUTER_MODEL="${OPENROUTER_MODEL:-openai/gpt-4o-mini}" \
NODE_ENV=development \
pnpm --filter @workspace/api-server run dev &
API_PID=$!

# Give the API server a moment to start
sleep 3

# ── Start frontend ─────────────────────────────────────────────────────────────
echo "[pattern-lab] Starting frontend on port $FRONTEND_PORT..."
PORT="$FRONTEND_PORT" \
BASE_PATH="/" \
API_URL="http://localhost:$API_PORT" \
NODE_ENV=development \
pnpm --filter @workspace/drum-patterns run dev &
FRONTEND_PID=$!

# ── Done ───────────────────────────────────────────────────────────────────────
echo ""
echo "┌─────────────────────────────────────────────────────┐"
echo "│  Pattern Lab is running                             │"
echo "│                                                     │"
echo "│  App:  http://localhost:$FRONTEND_PORT                    │"
echo "│  API:  http://localhost:$API_PORT/api/healthz              │"
echo "│                                                     │"
echo "│  Press Ctrl+C to stop                              │"
echo "└─────────────────────────────────────────────────────┘"

wait
