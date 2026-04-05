import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");
const src = path.join(projectRoot, "..", "Sangam Resume", "Sangam_Gupta_Resume.pdf");
const dest = path.join(projectRoot, "public", "resume.pdf");

if (!fs.existsSync(src)) {
  console.warn("[copy-resume] Skipped: source not found:\n  " + src);
  process.exit(0);
}

fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);
const { size } = fs.statSync(dest);
console.log("[copy-resume] Wrote public/resume.pdf (" + size + " bytes)");
