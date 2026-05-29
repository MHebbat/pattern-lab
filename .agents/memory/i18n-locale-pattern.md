---
name: i18n locale pattern
description: How DE translation is implemented across Pattern Lab pages — two patterns in use.
---

## Pattern A — Full locale file (CheatSheet, HardwareGuide)
Import a complete `*-de.ts` file and swap the entire data object at the page level.
Files: `locales/cheatsheet-de.ts`, `locales/hardware-de.ts`

## Pattern B — Per-field merge at render time (ChopLab, SongLab)
Import separate DE locale exports; inside each `.map()` compute `de = lang === "de" ? DE_DATA[key] : undefined` then use `de?.field ?? enData.field` for each rendered field. This lets EN data stay as the canonical TypeScript source of truth.

**Why:** Pattern B avoids duplicating large TypeScript type definitions and lets the EN source remain authoritative. Only the rendered strings are swapped, not the entire data structure (which includes step grids, boolean flags, URLs, etc.).

**How to apply:** When adding a new translatable page:
1. Create `locales/<page>-de.ts` exporting only the translatable string fields (not step grids, booleans, URLs).
2. Import in the page component and compute `de = lang === "de" ? LOCALE_DE[key] : undefined` inside each map.
3. Render `de?.field ?? en.field`.

## Still untranslated (large scope)
- `PatternDetail`: `pattern.description` + `pattern.maschineNotes` from `data/patterns.ts` (76 patterns).
- `MasterClassDetail`: bio, drumPhilosophy, samplePhilosophy, styleMarkers, techniques, packRecs, microKeyTips from `data/masterclasses.ts` (17 producers).
- Would need `locales/patterns-de.ts` and `locales/masterclasses-de.ts`.

## i18n infrastructure
- `useLang()` → `{ lang, setLang }`, stored in localStorage key `"pl-lang"`.
- `useT()` → `t(en, de)` inline helper for short UI strings.
- `LangProvider` wraps `App.tsx`. Language switching is global.
