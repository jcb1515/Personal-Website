import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

const resumeFilename = "James_Boutros_Resume_2026.pdf";

export async function GET(): Promise<NextResponse> {
  const filePath = path.join(process.cwd(), "public", "Resume_2026.pdf");
  const fileBuffer = await readFile(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${resumeFilename}"`,
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
