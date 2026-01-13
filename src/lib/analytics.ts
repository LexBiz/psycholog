type AnalyticsEvent = {
  name: string;
  params?: Record<string, unknown>;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;

  // Google Analytics (gtag)
  if (window.gtag) {
    window.gtag("event", event.name, event.params ?? {});
  }

  // Meta Pixel (fbq)
  if (window.fbq) {
    window.fbq("trackCustom", event.name, event.params ?? {});
  }
}

export function trackCtaClick(placement: string) {
  trackEvent({ name: "cta_click", params: { placement } });
}

export function trackFormSubmit(formName: string) {
  trackEvent({ name: "form_submit", params: { formName } });
}

export function trackVideoPlay(videoTitle: string) {
  trackEvent({ name: "video_play", params: { videoTitle } });
}
