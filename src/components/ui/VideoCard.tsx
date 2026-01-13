"use client";

import { useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { trackVideoPlay } from "@/lib/analytics";

export function VideoCard({
  title,
  caption,
  bullets,
  cta,
  videoSrc,
  posterSrc,
  autoplayPreview = true,
  trackVideoTitle,
}: {
  title: string;
  caption?: string;
  bullets?: readonly string[];
  cta?: string;
  videoSrc?: string;
  posterSrc?: string;
  autoplayPreview?: boolean;
  trackVideoTitle?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(videoSrc);
  const poster = useMemo(() => posterSrc ?? "", [posterSrc]);

  const handlePlayClick = () => {
    if (!ref.current) return;
    setPlaying(true);
    ref.current.muted = false;
    ref.current.controls = true;
    ref.current.play().catch(() => {
      // If autoplay/interaction fails, user can still use controls.
    });
    if (trackVideoTitle) trackVideoPlay(trackVideoTitle);
  };

  return (
    <div className="rounded-3xl bg-[color:var(--color-surface)] ring-1 ring-[color:var(--color-border)] overflow-hidden shadow-[var(--shadow-soft)]">
      <div className="relative aspect-video bg-[color:var(--color-surface-2)]">
        {hasVideo ? (
          <video
            ref={ref}
            className="h-full w-full object-cover"
            src={videoSrc}
            poster={poster || undefined}
            muted
            playsInline
            loop={!playing}
            controls={false}
            autoPlay={autoplayPreview}
            preload="metadata"
            onPlay={() => {
              // Preview play (muted) also counts as a view only when user explicitly plays via button.
            }}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="mx-auto mb-2 h-12 w-12 rounded-2xl bg-[color:var(--color-accent-soft)] ring-1 ring-[color:var(--color-border)]" />
              <div className="text-sm text-[color:var(--color-muted)]">
                video placeholder / poster
              </div>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={handlePlayClick}
          className={cn(
            "absolute inset-0 grid place-items-center",
            hasVideo ? "bg-black/0 hover:bg-black/10 transition" : "cursor-default"
          )}
          aria-label="Play video"
          disabled={!hasVideo}
        >
          <div
            className={cn(
              "rounded-full px-5 py-3 text-sm font-medium shadow-[var(--shadow-soft)] ring-1 ring-white/20",
              hasVideo
                ? "bg-black/55 text-white backdrop-blur hover:bg-black/65"
                : "bg-black/20 text-white/70"
            )}
          >
            ▶
          </div>
        </button>
      </div>

      <div className="p-6">
        <div className="font-serif text-lg leading-7 text-[color:var(--color-foreground)]">
          {title}
        </div>
        {caption ? (
          <div className="mt-2 text-sm leading-7 text-[color:var(--color-muted)]">
            {caption}
          </div>
        ) : null}
        {bullets?.length ? (
          <ul className="mt-4 space-y-2 text-sm leading-7 text-[color:var(--color-muted)]">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {cta ? (
          <div className="mt-4 text-sm font-medium text-[color:var(--color-foreground)]">
            {cta}
          </div>
        ) : null}
      </div>
    </div>
  );
}
