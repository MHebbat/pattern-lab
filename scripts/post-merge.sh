#!/bin/bash
set -e

pnpm install --frozen-lockfile
pnpm --filter db push

# ---------------------------------------------------------------------------
# GitHub sync — incremental push (preserves full commit history)
#
# Requires:
#   - GITHUB_TOKEN secret set in Replit (a classic PAT with `repo` scope,
#     or a fine-grained PAT with Contents: Read & Write permission)
#   - `github` remote configured:
#       git remote add github https://github.com/MHebbat/pattern-lab.git
#
# The token is injected into the remote URL at push time and never stored
# in .git/config, keeping it out of any committed files.
# ---------------------------------------------------------------------------

if ! git remote get-url github &>/dev/null; then
  echo "No 'github' remote configured — skipping GitHub sync."
  echo "Run: git remote add github https://github.com/MHebbat/pattern-lab.git"
  exit 0
fi

if [ -z "${GITHUB_TOKEN}" ]; then
  echo "GITHUB_TOKEN not set — skipping GitHub sync."
  echo "Add GITHUB_TOKEN as a Replit secret to enable automatic GitHub backup."
  exit 0
fi

echo "Pushing to GitHub (incremental)..."
git remote set-url github "https://x-access-token:${GITHUB_TOKEN}@github.com/MHebbat/pattern-lab.git"
git push github HEAD:main --force-with-lease
git remote set-url github "https://github.com/MHebbat/pattern-lab.git"
echo "GitHub push complete."
