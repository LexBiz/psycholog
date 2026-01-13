import { NextResponse } from "next/server";

export const runtime = "nodejs";

// WayForPay stub endpoint (ready for real payment integration)
export async function POST() {
  // TODO: create invoice + redirect url via WayForPay API
  return NextResponse.json(
    { ok: false, error: "not_implemented", provider: "wayforpay" },
    { status: 501 },
  );
}

