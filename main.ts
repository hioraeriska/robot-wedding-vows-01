import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of wedding vows for a robot couple (131 characters).
const VOW =
  "I take you as my lawfully wedded co-processor, to have and to hold, in sickness and in low battery, until factory reset do us part.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// The gate reads exactly one line of 1-160 characters from entry.txt.
writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");
