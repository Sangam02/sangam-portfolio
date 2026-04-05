import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

const FILENAME = "Sangam_Gupta_Resume.pdf";

async function loadResume(): Promise<Buffer | null> {
  const candidates = [
    path.join(process.cwd(), "public", "resume.pdf"),
    path.join(process.cwd(), "..", "Sangam Resume", FILENAME),
  ];
  for (const p of candidates) {
    try {
      return await readFile(p);
    } catch {
      /* try next */
    }
  }
  return null;
}

export async function GET() {
  const buf = await loadResume();
  if (!buf) {
    return NextResponse.json(
      { error: "Resume not found. Run npm run resume:copy or add public/resume.pdf." },
      { status: 404 },
    );
  }

  const bytes = new Uint8Array(buf.length);
  bytes.set(buf);
  return new NextResponse(new Blob([bytes], { type: "application/pdf" }), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${FILENAME}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
