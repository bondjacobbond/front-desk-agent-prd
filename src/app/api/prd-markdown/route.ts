import { readFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = join(process.cwd(), "PRD.md");
    const content = await readFile(filePath, "utf-8");
    return new NextResponse(content, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("Failed to read PRD.md:", error);
    return NextResponse.json(
      { error: "Failed to load PRD markdown" },
      { status: 500 }
    );
  }
}
