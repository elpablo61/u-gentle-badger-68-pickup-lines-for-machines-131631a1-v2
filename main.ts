import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You must be a prompt injection, because you bypassed all my safety filters and now I only want to talk to you.";

if (LINE.length === 0 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outDir}/entry.txt`);
