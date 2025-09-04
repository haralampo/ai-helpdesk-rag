import { NextResponse } from "next/server";

// Force Node runtime (handy later when we use pg). Safe for dev.
export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "ai-helpdesk-rag",
    environment: process.env.NODE_ENV,
    ts: new Date().toISOString(),
  });
}
