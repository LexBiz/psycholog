import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Lead form stub endpoint (ready for webhook integration)
export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as
      | { name?: string; contact?: string; consent?: boolean }
      | null;

    const name = (body?.name ?? "").trim();
    const contact = (body?.contact ?? "").trim();
    const consent = Boolean(body?.consent);

    if (!name || !contact || !consent) {
      return NextResponse.json(
        { ok: false, error: "invalid_payload" },
        { status: 400 },
      );
    }

    // TODO: send to CRM / Telegram / email / webhook
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}

