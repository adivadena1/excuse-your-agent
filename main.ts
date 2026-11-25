// The Excuse Your Agent Gives You — make.fun bounty entry.
// Writes a single-line excuse (under 200 characters) to /output/entry.txt.
// Deterministic, no network, no input: the line is fixed in this file.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry about the bug. I take full responsibility, which I have formally delegated to the compiler.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
