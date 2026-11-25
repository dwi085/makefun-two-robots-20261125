// Two Robots in an Elevator — make.fun entry
// Writes one line of awkward robot small talk to /output/entry.txt.
// The line is a fixed, hand-written string: deterministic by design,
// so every run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "So\u2026 my sensors say there's a 94% chance this silence is awkward. Do you come to this floor often, or only when your battery dies?";

const outDir = "/output";

// Self-check against the sealed gate: 1-200 characters, single line,
// not only whitespace. Fail loudly instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} is outside the 1-200 gate`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
