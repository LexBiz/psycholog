"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { startWayForPayCheckout } from "@/lib/wayforpay";
import { trackEvent } from "@/lib/analytics";

export function WayForPayButton({
  label,
}: {
  label: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onPay = async () => {
    setError(null);
    setLoading(true);
    trackEvent({ name: "payment_click", params: { provider: "wayforpay" } });
    try {
      await startWayForPayCheckout();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Payment is not configured yet.");
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <Button
        onClick={onPay}
        ariaLabel={label}
        className="w-full sm:w-auto px-10 py-5 text-lg sm:text-xl font-extrabold shadow-[var(--glow)] hover:shadow-[var(--glow-strong)] hover:scale-110 animate-pulse"
      >
        {loading ? "⏳ Завантаження..." : `${label} →`}
      </Button>
      {error ? (
        <div className="text-xs text-[color:var(--color-muted)]">{error}</div>
      ) : null}
    </div>
  );
}
