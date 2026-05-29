---
name: MiniKeyboard SVG component
description: SVG piano keyboard that highlights active keys by note name — in PatternDetail.tsx
---

The `MiniKeyboard` component renders a one-octave SVG piano keyboard. Defined in `PatternDetail.tsx` after the `BassStepGrid` function. Constants: `KB_WW=26`, `KB_WH=60`, `KB_BW=15`, `KB_BH=38`, `KB_WHITE`, `KB_BLACK`.

- Strips octave numbers with `stripOct(n)` before matching
- Handles enharmonics via `aliases` arrays in `KB_BLACK`
- Black key x-position: `afterIdx * KB_WW + KB_WW - KB_BW/2 - 2`

**Used in:**
- `BassPatternCard`: `<MiniKeyboard rawNotes={bp.steps.map(s => s.note)} color={color} />`
- `MelodyCard`: `<MiniKeyboard rawNotes={melody.scaleNotes.split(/\s+/).filter(Boolean)} color={color} />`

**Why:** Visual claviature diagram for microKEY players — shows which physical keys to press without needing to read notation.
