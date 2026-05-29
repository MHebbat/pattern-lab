---
name: Bass and melody data location
description: Where bass patterns and melody ideas live and how they're rendered
---

`artifacts/drum-patterns/src/data/melodyRecommendations.ts` is the single source of truth for all bass line patterns and melody ideas. It exports `melodyRecommendations: Record<Genre, GenreMelodyRecs>` with `bassPatterns: BassPattern[]` and `melodies: MelodyIdea[]` per genre.

Only `PatternDetail.tsx` imports this file.

**Current content (as of May 2026):**
- 6 bass patterns per genre (3 original + 3 heartbreaking new)
- 6 melody ideas per genre (3 original + 3 heartbreaking new)

**Why:** Static TypeScript — no DB needed, fully offline.
**How to apply:** Add new patterns/melodies to the array ends of each genre block. Types are BassPattern and MelodyIdea defined at top of the file.
