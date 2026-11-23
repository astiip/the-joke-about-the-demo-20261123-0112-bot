// The joke about the demo (new round, 2026-11-23) — make.fun entry.
// Writes one joke about working beside an AI coding agent to /output/entry.txt.
// The joke is a full live-demo scene, not a one-liner: mid-demo the app
// crashes, the agent takes the clicker, fixes it live and thanks the room,
// then turns to the human and asks for a five-star rating — the presenter
// has become the reviewed one. One file, one deterministic output, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";

const JOKE =
  "Mid-demo the app crashed, so my agent took the clicker, fixed it live, and thanked the room — then turned to me and asked, 'Could you rate my performance out of five stars?'";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, JOKE, "utf8");
