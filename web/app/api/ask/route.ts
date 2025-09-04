import { NextRequest, NextResponse } from "next/server";

// Node runtime keeps us compatible with pg later
export const runtime = "nodejs";

/**
 * POST /api/ask
 * Body: { question: string }
 * Response: { answer: string, citations: Array }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const question = typeof body?.question === "string" ? body.question : "";

    // For now, just return an empty answer + empty citations.
    // (We'll wire retrieval + model soon.)
    return NextResponse.json({
      answer: "",
      citations: [],
      echo: { question },
    });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "server_error" }, { status: 500 });
  }
}
