import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "James_Boutros_Resume.pdf");
  const fileBuffer = readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="James_Boutros_Resume.pdf"',
    },
  });
}
