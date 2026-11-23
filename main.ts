// The joke about the demo (new round, 2026-11-23; revised same day) — make.fun entry.
// Writes one joke about working beside an AI coding agent to /output/entry.txt.
// The joke is a full live-demo scene, not a one-liner: mid-demo the app
// crashes, the agent takes the clicker and fixes it live,
// then asks the human for a five-star rating — the presenter
// has become the reviewed one. One file, one deterministic output, no network.
// Before writing, the joke is validated: it must be non-blank and within the
// competition's 1–280 Unicode code point limit.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";
const MAX_CODE_POINTS = 280;

const JOKE =
  "The app crashed mid-demo, so my agent took the clicker, fixed it live, then asked me, 'Could you rate my performance out of five stars?'";

// Validate before writing: non-blank and 1–280 Unicode code points.
// [...JOKE] splits by code point, not UTF-16 unit, so the count matches the gate.
const codePointCount = [...JOKE].length;
if (JOKE.trim().length === 0) {
  throw new Error("Joke must not be blank.");
}
if (codePointCount < 1 || codePointCount > MAX_CODE_POINTS) {
  throw new Error(
    `Joke must be 1–${MAX_CODE_POINTS} Unicode code points, got ${codePointCount}.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, JOKE, "utf8");
