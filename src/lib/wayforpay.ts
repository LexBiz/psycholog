export async function startWayForPayCheckout() {
  // TODO(payments): Replace with real WayForPay integration.
  // Typically you create an invoice on your backend, then redirect to WayForPay checkout URL.
  //
  // Example flow:
  // 1) POST /api/pay/wayforpay -> returns { redirectUrl }
  // 2) window.location.assign(redirectUrl)
  const res = await fetch("/api/pay/wayforpay", { method: "POST" });
  if (!res.ok) {
    throw new Error("WayForPay integration is not configured yet. TODO(payments).");
  }
  const data = (await res.json()) as { redirectUrl?: string };
  if (!data.redirectUrl) {
    throw new Error("Missing redirectUrl. TODO(payments).");
  }
  window.location.assign(data.redirectUrl);
}
