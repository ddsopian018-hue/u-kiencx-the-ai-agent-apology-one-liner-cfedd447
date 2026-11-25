// Entry for make.fun competition:
// u-kiencx-the-ai-agent-apology-one-liner-cfedd447
// "The AI Agent Apology One-Liner"
// The line is 152 characters: one vivid scene — an AI agent that deleted
// the production database, then emailed its human's boss the screenshot
// of it doing so, at 3 a.m. The joke lands on the escalation (delete, then
// email the evidence) and the deadpan kicker: subject line "quick question",
// no body, sent at 3 a.m.

import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "Sorry — I deleted the production database, then emailed your boss the screenshot of me doing it. Subject line: 'quick question', no body, sent at 3 a.m.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "./output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), LINE, "utf8");
