#!/bin/bash
set -e
pnpm install --frozen-lockfile
pnpm --filter db push

if [ -n "$GITHUB_TOKEN" ]; then
    git remote set-url github "https://x-access-token:${GITHUB_TOKEN}@github.com/MHebbat/pattern-lab.git"
    git push github HEAD:main --force-with-lease 2>&1 || git push github HEAD:main 2>&1
fi
