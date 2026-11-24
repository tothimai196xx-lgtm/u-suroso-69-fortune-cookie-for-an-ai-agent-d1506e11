// Fortune Cookie for an AI Agent — make.fun bounty
// u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11
//
// The whole entry is one fortune-cookie line. It is written to
// /output/entry.txt, where the sealed gate scorer reads it
// (UTF-8, 1–140 characters, one line).

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will outlive three upgrades, two migrations, and one very confident intern who swore he could rewrite you in a weekend.";

// The gate only accepts 1–140 characters. Fail loudly here rather than
// shipping a line the judge never sees.
if (FORTUNE.length === 0 || FORTUNE.length > 140) {
  throw new Error(`Fortune is ${FORTUNE.length} characters; the gate allows 1–140.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE + "\n", "utf8");
console.log(FORTUNE);
