import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "The lamp is still on. Your mug has gone cool beside the keyboard, and outside the rain is spelling itself out on the glass, one slow letter at a time. Nothing here needs an answer. Stay as long as you like; the quiet will keep your place.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
