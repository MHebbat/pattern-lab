import { Router, type IRouter } from "express";
import OpenAI from "openai";
import { z } from "zod";

const router: IRouter = Router();

function createAIClient(): OpenAI {
  const openRouterKey = process.env["OPENROUTER_API_KEY"];
  if (openRouterKey) {
    return new OpenAI({
      apiKey: openRouterKey,
      baseURL: "https://openrouter.ai/api/v1",
      defaultHeaders: {
        "HTTP-Referer": "https://pattern-lab.local",
        "X-Title": "Pattern Lab",
      },
    });
  }

  const replitBase = process.env["AI_INTEGRATIONS_OPENAI_BASE_URL"];
  const replitKey = process.env["AI_INTEGRATIONS_OPENAI_API_KEY"];
  if (replitBase && replitKey) {
    return new OpenAI({ apiKey: replitKey, baseURL: replitBase });
  }

  throw new Error(
    "No AI key configured. Set OPENROUTER_API_KEY in .env.local, " +
    "or provision the OpenAI integration on Replit.",
  );
}

function getModel(): string {
  if (process.env["OPENROUTER_MODEL"]) return process.env["OPENROUTER_MODEL"]!;
  if (process.env["OPENROUTER_API_KEY"]) return "openai/gpt-4o-mini";
  return "gpt-5.1";
}

const GeneratePatternBody = z.object({
  genre: z.enum(["hip-hop", "boom-bap", "rnb"]),
  feel: z.string().optional(),
  bpm: z.number().min(60).max(160).optional(),
});

const SYSTEM_PROMPT = `You are a professional hip-hop and R&B beatmaker and drum programmer with deep expertise in classic and modern production techniques. You create authentic, musically convincing drum patterns.

You will return a JSON object representing a drum pattern for use in a step sequencer. The pattern uses 16 steps (one bar of 4/4 at 16th note resolution). Step index 0 = beat 1, step 4 = beat 2, step 8 = beat 3, step 12 = beat 4.

Return ONLY valid JSON. No explanation, no markdown, no code blocks. Just the raw JSON object.

Schema:
{
  "id": string (unique, format "gen-{genre abbreviation}-{random 4 digit number}"),
  "name": string (creative, evocative name for the pattern),
  "genre": "hip-hop" | "boom-bap" | "rnb",
  "bpm": number (appropriate BPM for the genre),
  "feel": string[] (2-4 descriptive words like "punchy", "swung", "dark", "soulful"),
  "description": string (1-2 sentences describing the vibe and use case),
  "steps": [
    {
      "instrument": string (e.g. "Kick", "Snare", "HH Closed", "HH Open", "Clap", "Rimshot", "Shaker", "Perc"),
      "pattern": boolean[] (exactly 16 values),
      "velocity": number[] (exactly 16 values, 0 for inactive steps, 30-50 for ghost notes, 70-90 for normal, 100-120 for accents)
    }
  ],
  "maschineNotes": string[] (3-5 specific, actionable Maschine MK3 production tips for this pattern),
  "swing": number (50 = straight, 54-65 = typical swing range),
  "generated": true
}

Rules for authenticity:
- Boom Bap: kicks on 1 and syncopated positions, snare on 2+4, 8th note hats with swing 52-62%, ghost snares are common
- Hip Hop: varies widely — can be four-on-the-floor adjacent, can use claps/snaps instead of snares, hats can be 16ths
- R&B: often displaced/syncopated kicks, rimshots instead of snares, heavy swing 55-65%, shakers and light percussion
- Include ghost notes (velocity 30-50) for realism
- Vary velocities meaningfully — flat velocity sounds robotic
- Maschine notes must be specific: mention actual parameters, pad numbers, effect settings, not generic advice`;

router.post("/generate-pattern", async (req, res) => {
  const parseResult = GeneratePatternBody.safeParse(req.body);
  if (!parseResult.success) {
    res.status(400).json({ error: "Invalid request body", details: parseResult.error.issues });
    return;
  }

  let client: OpenAI;
  try {
    client = createAIClient();
  } catch (err) {
    req.log.error({ err }, "AI client not configured");
    res.status(503).json({
      error: err instanceof Error ? err.message : "AI not configured",
    });
    return;
  }

  const { genre, feel, bpm } = parseResult.data;
  const genreLabel = genre === "hip-hop" ? "Hip Hop" : genre === "boom-bap" ? "Boom Bap" : "R&B";
  const feelHint = feel ? ` with a ${feel} feel` : "";
  const bpmHint = bpm ? ` at around ${bpm} BPM` : "";
  const userPrompt = `Create an original ${genreLabel} drum pattern${feelHint}${bpmHint}. Make it feel authentic and musical. Give it a creative name. Include specific Maschine MK3 tips.`;

  try {
    const completion = await client.chat.completions.create({
      model: getModel(),
      max_completion_tokens: 2048,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
    });

    const content = completion.choices[0]?.message?.content ?? "";
    let pattern: unknown;
    try {
      pattern = JSON.parse(content.trim());
    } catch {
      req.log.error({ content }, "Failed to parse AI pattern JSON");
      res.status(500).json({ error: "AI returned invalid JSON" });
      return;
    }

    res.json(pattern);
  } catch (err) {
    req.log.error({ err }, "Pattern generation failed");
    res.status(500).json({ error: "Pattern generation failed" });
  }
});

export default router;
